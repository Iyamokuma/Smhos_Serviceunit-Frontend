/** Normalized project URL and anon headers for Supabase REST and Edge Functions. */

export function isSupabaseConfigured() {
  return Boolean(supabaseProjectUrl() && import.meta.env.VITE_SUPABASE_ANON_KEY);
}

/** UI-only preview when Supabase is not wired up (or when VITE_APP_PREVIEW=true). */
export function isAppPreviewMode() {
  const flag = String(import.meta.env.VITE_APP_PREVIEW ?? "").trim().toLowerCase();
  if (flag === "true" || flag === "1" || flag === "yes") return true;
  if (flag === "false" || flag === "0" || flag === "no") return false;
  return !isSupabaseConfigured();
}

export function supabaseProjectUrl() {
  return String(import.meta.env.VITE_SUPABASE_URL || "")
    .replace(/\/rest\/v1\/?$/i, "")
    .replace(/\/+$/, "");
}

export function supabaseAnonHeaders() {
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
  };
}

export function functionsBaseUrl() {
  return `${supabaseProjectUrl()}/functions/v1`;
}
