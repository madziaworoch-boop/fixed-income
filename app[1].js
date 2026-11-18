/* ============================================================
   Fixed Income Flashcards — app logic
   Plain JS, no framework, no build step.
   ============================================================ */
"use strict";

/* ---------- Storage keys ---------- */
const LS_CODE = "fi_sync_code";
const LS_PROG = "fi_progress";

/* ---------- In-memory state ---------- */
let progress = { cards: {} };     // { cards: { idx: {status, answer, updatedAt} } }
let syncCode = "";
let filter = "All";
let order = [];                   // shuffled card indices for current deck
let pos = 0;
let cur = null;                   // { idx, step, revealed, typed }

/* ============================================================
   Local storage
   ============================================================ */
function loadLocal() {
  try {
    const p = JSON.parse(localStorage.getItem(LS_PROG) || "null");
    if (p && p.cards) progress = p;
  } catch (e) {}
  try {
    syncCode = localStorage.getItem(LS_CODE) || "";
  } catch (e) {}
  if (!syncCode) { syncCode = makeSyncCode(); saveCode(); }
}
function saveLocal() {
  try { localStorage.setItem(LS_PROG, JSON.stringify(progress)); } catch (e) {}
}
function saveCode() {
  try { localStorage.setItem(LS_CODE, syncCode); } catch (e) {}
}

/* ============================================================
   Sync code generator  (3 words + 4 digits)
   ============================================================ */
const WORDS = ("amber anchor apple arch arrow aspen atlas basil beacon birch bison blaze " +
"bloom brave breeze brook cedar cherry cliff cloud clover comet coral cove crane crest " +
"delta drift dune eagle ember fable falcon fern flint fox frost gale glade grove hazel " +
"heron ivory jade jasper koala lark lemon lilac linen lotus lunar maple marble meadow " +
"mint moss nectar nova oak ocean olive onyx opal orbit otter pearl pine plum quartz " +
"quail raven reed ridge river robin rowan ruby sage sand slate sparrow spruce stone " +
"storm sun teal thorn tide tiger topaz trail tulip valley vine violet willow wren zephyr").split(/\s+/);

function makeSyncCode() {
  function pick() { return WORDS[Math.floor(Math.random() * WORDS.length)]; }
  const digits = String(Math.floor(1000 + Math.random() * 9000));
  return pick() + "-" + pick() + "-" + pick() + "-" + digits;
}

/* ============================================================
   Progress merge  (per-card: newer updatedAt wins)
   ============================================================ */
function mergeProgress(a, b) {
  const out = { cards: {} };
  const ca = (a && a.cards) || {};
  const cb = (b && b.cards) || {};
  const keys = new Set([...Object.keys(ca), ...Object.keys(cb)]);
  keys.forEach(k => {
    const x = ca[k], y = cb[k];
    if (x && y) out.cards[k] = (y.updatedAt > x.updatedAt) ? y : x;
    else out.cards[k] = x || y;
  });
  return out;
}

/* ============================================================
   Supabase sync  (fetch REST, anon key)
   ============================================================ */
function syncConfigured() {
  const u = window.SUPABASE_URL, k = window.SUPABASE_ANON_KEY;
  return !!(u && k && u.indexOf("http") === 0 && u.indexOf("PASTE_") === -1 && k.indexOf("PASTE_") === -1);
}
function sbHeaders() {
  return {
    "apikey": window.SUPABASE_ANON_KEY,
    "Authorization": "Bearer " + window.SUPABASE_ANON_KEY,
    "Content-Type": "application/json"
  };
}
async function sbFetchRemote(code) {
  const url = window.SUPABASE_URL.replace(/\/$/, "") +
    "/rest/v1/progress?sync_code=eq." + encodeURIComponent(code) + "&select=data,updated_at";
  const res = await fetch(url, { headers: sbHeaders() });
  if (!res.ok) throw new Error("GET " + res.status);
  const rows = await res.json();
  return (rows && rows[0]) ? rows[0].data : null;
}
async function sbPush(code, data) {
  const url = window.SUPABASE_URL.replace(/\/$/, "") + "/rest/v1/progress";
  const body = JSON.stringify({ sync_code: code, data: data, updated_at: new Date().toISOString() });
  const res = await fetch(url, {
    method: "POST",
    headers: Object.assign(sbHeaders(), { "Prefer": "resolution=merge-duplicates" }),
    body: body
  });
  if (!res.ok) throw new Error("POST " + res.status);
}

let syncBusy = false;
let pushTimer = null;

function setPill(state) {
  const el = document.getElementById("syncPill");
  if (!el) return;
  el.className = "pill";
  if (state === "off")      { el.textContent = "Sync off"; el.classList.add("pill-off"); }
  else if (state === "sync"){ el.textContent = "Syncing…"; el.classList.add("pill-wait"); }
  else if (state === "ok")  { el.textContent = "Synced ✓"; el.classList.add("pill-ok"); }
  else                      { el.textContent = "Offline";  el.classList.add("pill-err"); }
}

/* Pull remote, merge, save, push merged back. */
async function fullSync() {
  if (!syncConfigured()) { setPill("off"); return; }
  if (syncBusy) return;
  syncBusy = true;
  setPill("sync");
  try {
    const remote = await sbFetchRemote(syncCode);
    const merged = mergeProgress(progress, remote ? remote : { cards: {} });
    progress = merged;
    saveLocal();
    await sbPush(syncCode, progress);
    setPill("ok");
    refreshCounts();
  } catch (e) {
    setPill("err");
  } finally {
    syncBusy = false;
  }
}
/* Called after each save; debounced. */
function schedulePush() {
  if (!syncConfigured()) { setPill("off"); return; }
  setPill("sync");
  clearTimeout(pushTimer);
  pushTimer = setTimeout(fullSync, 900);
}

/* ============================================================
   Keyword matching  (case-insensitive, inflection-tolerant)
   ============================================================ */
const STOP = new Set(["the","a","an","of","to","in","on","and","or","is","are","it","as","at","by","be"]);
// Derivational / verb suffixes, longest first. Plurals handled separately below.
const SUFFIXES = ["ization","isation","ational","ation","ingly","edly","fully","ness","ment",
  "ing","ive","ion","ity","est","ed","er","ly","al"];

function stem(w) {
  w = w.toLowerCase();
  // 1) normalise plurals / 3rd-person -s consistently (rates->rate, bonds->bond)
  if (w.length > 4 && w.endsWith("ies")) w = w.slice(0, -3) + "y";          // maturities->maturity
  else if (w.length > 4 && /(s|x|z|ch|sh)es$/.test(w)) w = w.slice(0, -2);  // boxes->box
  else if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) w = w.slice(0, -1);
  // 2) strip one derivational suffix
  for (const s of SUFFIXES) {
    if (w.length - s.length >= 3 && w.endsWith(s)) { w = w.slice(0, -s.length); break; }
  }
  return w;
}
function wordsOf(text) {
  return (text || "").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}
function wordMatch(a, b) {
  const sa = stem(a), sb = stem(b);
  if (sa === sb) return true;
  if (sa.length >= 4 && sb.startsWith(sa)) return true;
  if (sb.length >= 4 && sa.startsWith(sb)) return true;
  return false;
}
/* Does `keyword` appear in the user's text? */
function keywordFound(keyword, textWords) {
  let parts = wordsOf(keyword);
  let sig = parts.filter(p => p.length >= 3 && !STOP.has(p));
  if (sig.length === 0) sig = parts;
  return sig.every(kw => textWords.some(tw => wordMatch(kw, tw)));
}

/* ============================================================
   Helpers
   ============================================================ */
function esc(s) {
  return (s || "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
}
function fmtDate(ts) {
  try { return new Date(ts).toLocaleDateString(undefined, { month:"short", day:"numeric", hour:"2-digit", minute:"2-digit" }); }
  catch (e) { return ""; }
}
function statusOf(idx) {
  const e = progress.cards[idx];
  return e ? e.status : null;   // "got" | "again" | null
}
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ============================================================
   Deck building
   ============================================================ */
function indicesFor(f) {
  return CARDS.map((c, i) => i).filter(i => {
    if (f === "All") return true;
    if (f === "To review") return statusOf(i) === "again";
    if (f === "Not seen yet") return statusOf(i) === null;
    return CARDS[i][0] === f;   // "Day 1".."Day 4"
  });
}
function countFor(f) {
  if (f === "Glossary") return GLOSS.length;
  return indicesFor(f).length;
}
function startDeck(f) {
  filter = f;
  order = shuffle(indicesFor(f));
  pos = 0;
  if (order.length === 0) {
    toast("No cards here right now.");
    return;
  }
  showView("study");
  renderCard("learn");
}

/* ============================================================
   Views
   ============================================================ */
function showView(name) {
  ["home","study","glossary"].forEach(v => {
    document.getElementById("view-" + v).hidden = (v !== name);
  });
  document.getElementById("topTitle").textContent =
    name === "glossary" ? "Glossary" : name === "study" ? deckLabel(filter) : "Fixed Income";
  window.scrollTo(0, 0);
}
function deckLabel(f) {
  if (f === "All") return "All cards";
  if (f === "To review") return "To review";
  if (f === "Not seen yet") return "Not seen yet";
  return f;
}

/* ---------- HOME ---------- */
function renderHome() {
  const days = ["Day 1","Day 2","Day 3","Day 4"];
  const chips = [
    ["All","All cards"],["Day 1","Day 1"],["Day 2","Day 2"],["Day 3","Day 3"],["Day 4","Day 4"],
    ["To review","To review"],["Not seen yet","Not seen yet"]
  ];
  let html = "";

  html += `<div class="warn">${SLIDE_ERRORS}</div>`;

  html += `<p class="lead">Pick a deck. Cards come in random order. Your progress is saved on this device` +
          (syncConfigured() ? ` and synced.` : `.`) + `</p>`;

  html += `<div class="chips">`;
  chips.forEach(([f, label]) => {
    html += `<button class="chip" data-deck="${esc(f)}">${esc(label)} <span class="n">${countFor(f)}</span></button>`;
  });
  html += `<button class="chip chip-gloss" data-gloss="1">📖 Glossary <span class="n">${GLOSS.length}</span></button>`;
  html += `</div>`;

  html += `<h3 class="sec">Progress — “Got it” per day</h3>`;
  html += `<div class="bars">`;
  days.forEach(d => {
    const total = indicesFor(d).length;
    const got = indicesFor(d).filter(i => statusOf(i) === "got").length;
    const pct = total ? Math.round(got / total * 100) : 0;
    html += `<div class="bar-row">
      <div class="bar-label">${d}</div>
      <div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>
      <div class="bar-num">${got}/${total}</div>
    </div>`;
  });
  html += `</div>`;

  const revN = countFor("To review");
  if (revN) html += `<p class="hint-line">You marked <b>${revN}</b> card${revN>1?"s":""} to review. Use the “To review” deck.</p>`;

  document.getElementById("view-home").innerHTML = html;

  document.querySelectorAll("#view-home .chip[data-deck]").forEach(b =>
    b.onclick = () => startDeck(b.getAttribute("data-deck")));
  const gb = document.querySelector("#view-home .chip[data-gloss]");
  if (gb) gb.onclick = () => { renderGlossary(); showView("glossary"); };
}

/* Update only the counts/bars after a grade without leaving the view. */
function refreshCounts() {
  if (!document.getElementById("view-home").hidden) renderHome();
}

/* ---------- STUDY ---------- */
function renderCard(step) {
  const idx = order[pos];
  const c = CARDS[idx];
  if (!cur || cur.idx !== idx) cur = { idx: idx, step: step, revealed: false, typed: "" };
  cur.step = step;

  const nav = `<div class="study-nav">
      <button id="backBtn" class="nav-btn" ${pos===0?"disabled":""}>&larr; Back</button>
      <span class="counter">Card ${pos+1} of ${order.length}</span>
      <button id="skipBtn" class="nav-btn">Skip &rarr;</button>
    </div>`;

  let body = "";
  const tag = `<span class="daytag">${esc(c[0])}</span>`;
  const st = statusOf(idx);
  const stBadge = st === "got" ? `<span class="badge badge-got">Got it</span>`
               : st === "again" ? `<span class="badge badge-again">To review</span>` : "";

  if (step === "learn") {
    body += `<div class="card">
      <div class="card-top">${tag}${stBadge}</div>
      <p class="q">${esc(c[1])}</p>`;
    if (!cur.revealed) {
      body += `<button id="showAnsBtn" class="btn btn-primary wide">Show answer</button>`;
    } else {
      body += answerBlocks(c);
      body += `<button id="recallBtn" class="btn btn-primary wide">Now write it from memory</button>`;
    }
    body += `</div>`;
  }
  else if (step === "recall") {
    body += `<div class="card">
      <div class="card-top">${tag}${stBadge}</div>
      <p class="q">${esc(c[1])}</p>
      <p class="muted">Write it in your own words, from memory.</p>
      <textarea id="recallText" class="recall" placeholder="Type your answer…" rows="7">${esc(cur.typed)}</textarea>
      <button id="checkBtn" class="btn btn-primary wide">Check</button>
      <button id="backToLearn" class="btn btn-ghost wide">Show the answer again</button>
    </div>`;
  }
  else if (step === "review") {
    const textWords = wordsOf(cur.typed);
    const kw = c[3].map(k => {
      const ok = keywordFound(k, textWords);
      return `<span class="kw ${ok?"kw-ok":"kw-no"}">${ok?"✅":"❌"} ${esc(k)}</span>`;
    }).join("");

    const prev = progress.cards[idx];
    let prevBlock = "";
    if (prev && prev.answer && prev.answer.trim()) {
      prevBlock = `<div class="prev">
        <div class="col-h">Your previous answer <span class="muted">(${fmtDate(prev.updatedAt)})</span></div>
        <div class="col-body">${esc(prev.answer)}</div></div>`;
    }

    body += `<div class="card">
      <div class="card-top">${tag}${stBadge}</div>
      <p class="q">${esc(c[1])}</p>

      <div class="review-cols">
        <div class="col">
          <div class="col-h">Your answer</div>
          <div class="col-body">${cur.typed.trim() ? esc(cur.typed) : '<span class="muted">(nothing written)</span>'}</div>
        </div>
        <div class="col">
          <div class="col-h">Answer on the exam</div>
          <div class="col-body">${esc(c[5])}</div>
        </div>
      </div>

      <div class="kw-wrap"><div class="col-h">Key words</div><div class="kw-list">${kw}</div></div>

      ${prevBlock}

      <details class="full"><summary>Show full answer</summary><div class="full-body">${c[2]}</div></details>

      <div class="grade-row">
        <button id="againBtn" class="btn btn-again wide">↺ Review again</button>
        <button id="gotBtn" class="btn btn-got wide">✓ Got it</button>
      </div>
    </div>`;
  }

  document.getElementById("view-study").innerHTML = nav + body;
  wireStudy();
}

function answerBlocks(c) {
  const kw = c[3].map(k => `<span class="kw kw-plain">${esc(k)}</span>`).join("");
  return `<div class="answer">
    <div class="ablk"><div class="col-h">Simple explanation</div><div class="col-body">${esc(c[4])}</div></div>
    <div class="ablk"><div class="col-h">Answer on the exam</div><div class="col-body">${esc(c[5])}</div></div>
    <div class="ablk"><div class="col-h">Key words</div><div class="kw-list">${kw}</div></div>
    <details class="full"><summary>Show full answer</summary><div class="full-body">${c[2]}</div></details>
  </div>`;
}

function wireStudy() {
  const $ = id => document.getElementById(id);
  const back = $("backBtn"), skip = $("skipBtn");
  if (back) back.onclick = () => { if (pos > 0) { pos--; cur = null; renderCard("learn"); } };
  if (skip) skip.onclick = () => nextCard();

  const sa = $("showAnsBtn");
  if (sa) sa.onclick = () => { cur.revealed = true; renderCard("learn"); };

  const rc = $("recallBtn");
  if (rc) rc.onclick = () => { renderCard("recall"); setTimeout(() => { const t = $("recallText"); if (t) t.focus(); }, 30); };

  const rt = $("recallText");
  if (rt) rt.oninput = () => { cur.typed = rt.value; };

  const ck = $("checkBtn");
  if (ck) ck.onclick = () => { const t = $("recallText"); if (t) cur.typed = t.value; renderCard("review"); };

  const b2l = $("backToLearn");
  if (b2l) b2l.onclick = () => { const t = $("recallText"); if (t) cur.typed = t.value; cur.revealed = true; renderCard("learn"); };

  const again = $("againBtn"), got = $("gotBtn");
  if (again) again.onclick = () => grade("again");
  if (got) got.onclick = () => grade("got");
}

function grade(status) {
  const idx = cur.idx;
  progress.cards[idx] = { status: status, answer: cur.typed || "", updatedAt: Date.now() };
  saveLocal();
  schedulePush();
  nextCard();
}

function nextCard() {
  pos++;
  cur = null;
  if (pos >= order.length) { renderDeckDone(); return; }
  renderCard("learn");
}

function renderDeckDone() {
  const got = order.filter(i => statusOf(i) === "got").length;
  const again = order.filter(i => statusOf(i) === "again").length;
  document.getElementById("view-study").innerHTML = `
    <div class="card done">
      <h2>Deck finished 🎉</h2>
      <p>You went through <b>${order.length}</b> card${order.length>1?"s":""} in “${esc(deckLabel(filter))}”.</p>
      <p class="done-stats"><span class="badge badge-got">Got it ${got}</span> <span class="badge badge-again">Review again ${again}</span></p>
      <button id="restartDeck" class="btn btn-primary wide">Study this deck again</button>
      <button id="toHome" class="btn btn-ghost wide">Back to home</button>
    </div>`;
  document.getElementById("restartDeck").onclick = () => startDeck(filter);
  document.getElementById("toHome").onclick = () => goHome();
}

/* ---------- GLOSSARY ---------- */
function renderGlossary(query) {
  query = (query || "").toLowerCase().trim();
  const list = GLOSS.filter(g =>
    !query || g[0].toLowerCase().includes(query) || g[1].toLowerCase().includes(query));
  let html = `<div class="gloss-search">
      <input id="glossInput" type="search" placeholder="Search terms…" value="${esc(query)}" autocomplete="off">
    </div>
    <p class="muted gloss-count">${list.length} of ${GLOSS.length} terms</p>
    <div class="gloss-list">`;
  list.forEach(g => {
    html += `<div class="gl"><b>${esc(g[0])}</b><div>${esc(g[1])}</div></div>`;
  });
  html += `</div>`;
  if (list.length === 0) html += `<p class="muted">No term matches “${esc(query)}”.</p>`;
  document.getElementById("view-glossary").innerHTML = html;
  const gi = document.getElementById("glossInput");
  if (gi) {
    gi.oninput = () => {
      const v = gi.value, sel = gi.selectionStart;
      renderGlossary(v);
      const n = document.getElementById("glossInput");
      if (n) { n.focus(); try { n.setSelectionRange(sel, sel); } catch (e) {} }
    };
  }
}

/* ============================================================
   Settings panel
   ============================================================ */
function openSettings() {
  const on = syncConfigured();
  const body = document.getElementById("settingsBody");
  body.innerHTML = `
    <div class="set-block">
      <div class="col-h">This device’s sync code</div>
      <div class="code-box"><code id="codeText">${esc(syncCode)}</code>
        <button id="copyCode" class="btn btn-ghost small">Copy</button></div>
      <p class="muted">To sync another device, open this app there, go to Settings, and enter this code below.</p>
    </div>

    <div class="set-block">
      <div class="col-h">Use a code from another device</div>
      <div class="code-box">
        <input id="codeInput" type="text" placeholder="three-words-and-digits" autocomplete="off">
        <button id="connectCode" class="btn btn-primary small">Connect</button>
      </div>
      <p class="muted">This pulls that device’s progress and merges it with this one.</p>
    </div>

    <div class="set-block">
      <div class="col-h">Cloud sync</div>
      <p class="${on?"ok-text":"muted"}">${on ? "Supabase sync is ON." : "Supabase not set up yet — the app still works and saves on this device."}</p>
      <button id="syncNow" class="btn btn-ghost small" ${on?"":"disabled"}>Sync now</button>
    </div>

    <div class="set-block">
      <div class="col-h">Danger zone</div>
      <button id="resetProg" class="btn btn-again small">Reset my progress on this device</button>
    </div>`;
  document.getElementById("settingsOverlay").hidden = false;

  document.getElementById("copyCode").onclick = () => {
    navigator.clipboard && navigator.clipboard.writeText(syncCode);
    toast("Sync code copied");
  };
  document.getElementById("connectCode").onclick = () => {
    const v = document.getElementById("codeInput").value.trim().toLowerCase();
    if (!v) { toast("Type a code first"); return; }
    syncCode = v; saveCode();
    document.getElementById("codeText").textContent = syncCode;
    toast("Connecting…");
    fullSync().then(() => { toast("Connected & merged"); });
  };
  const sn = document.getElementById("syncNow");
  if (sn && on) sn.onclick = () => fullSync().then(() => toast("Synced"));
  document.getElementById("resetProg").onclick = () => {
    if (confirm("Erase your progress on THIS device? (Other devices and the cloud copy stay as they are.)")) {
      progress = { cards: {} };
      saveLocal();
      toast("Progress reset");
      refreshCounts();
    }
  };
}
function closeSettings() { document.getElementById("settingsOverlay").hidden = true; }

/* ============================================================
   Toast
   ============================================================ */
let toastTimer = null;
function toast(msg) {
  let t = document.getElementById("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

/* ============================================================
   Navigation
   ============================================================ */
function goHome() { renderHome(); showView("home"); }

/* ============================================================
   Init
   ============================================================ */
function init() {
  loadLocal();

  document.getElementById("homeBtn").onclick = goHome;
  document.getElementById("settingsBtn").onclick = openSettings;
  document.getElementById("settingsClose").onclick = closeSettings;
  document.getElementById("settingsOverlay").onclick = (e) => {
    if (e.target.id === "settingsOverlay") closeSettings();
  };

  renderHome();
  showView("home");

  setPill(syncConfigured() ? "sync" : "off");
  if (syncConfigured()) fullSync();

  window.addEventListener("online", () => { if (syncConfigured()) fullSync(); });
  window.addEventListener("offline", () => setPill("err"));
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && syncConfigured()) fullSync();
  });

  // Service worker (offline)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
