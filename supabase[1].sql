-- ============================================================
-- Fixed Income Flashcards — Supabase setup
-- Paste ALL of this into: Supabase -> your project -> SQL Editor
-- -> New query -> paste -> Run.
-- ============================================================

-- 1) The table that stores progress, one row per sync code.
create table if not exists public.progress (
  sync_code  text primary key,
  data       jsonb       not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- 2) Turn on Row Level Security.
alter table public.progress enable row level security;

-- 3) Allow the public "anon" key to read and write.
--    There is no login: the long, secret sync code is the password.
--    (Re-running this is safe — it drops and recreates the policies.)
drop policy if exists "anon select" on public.progress;
drop policy if exists "anon insert" on public.progress;
drop policy if exists "anon update" on public.progress;

create policy "anon select" on public.progress
  for select to anon using (true);

create policy "anon insert" on public.progress
  for insert to anon with check (true);

create policy "anon update" on public.progress
  for update to anon using (true) with check (true);
