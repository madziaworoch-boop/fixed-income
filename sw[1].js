/* Service worker — offline support for the app shell.
   Bump CACHE when you change any file so devices pick up the new version. */
const CACHE = "fi-flashcards-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./config.js",
  "./data.js",
  "./app.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-180.png",
  "./icons/icon-maskable-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  const url = new URL(req.url);

  // Only handle our own origin; let Supabase (and anything else) go to the network untouched.
  if (url.origin !== self.location.origin || req.method !== "GET") return;

  // Stale-while-revalidate: serve from cache instantly (works offline),
  // and refresh the cache from the network in the background so future
  // fixes you upload show up on the next open or two.
  e.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(req).then((cached) => {
        const network = fetch(req).then((res) => {
          if (res && res.status === 200) cache.put(req, res.clone());
          return res;
        }).catch(() => cached || (req.mode === "navigate" ? cache.match("./index.html") : undefined));
        return cached || network;
      })
    )
  );
});
