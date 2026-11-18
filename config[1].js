/* ============================================================
   Supabase configuration.

   The app works fully OFFLINE without this (progress is always
   saved on the device). These two lines turn on phone <-> laptop
   sync. Both values below are SAFE to be public: Row Level
   Security + the secret sync code protect your data.

   IMPORTANT: only the "publishable" key goes here. Never put the
   "secret" key (sb_secret_...) in this file — it bypasses all
   security and this file is public on the web.
   ============================================================ */

window.SUPABASE_URL      = "https://srqdpupabuvccqoatgay.supabase.co";
window.SUPABASE_ANON_KEY = "sb_publishable_spSEQ2aUte-5helio5hS0g_3iEBooMy";
