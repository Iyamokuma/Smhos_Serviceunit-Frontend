import { isAppPreviewMode } from "../lib/supabaseEnv.js";

export function PreviewModeBanner({ surface = "public" }) {
  if (!isAppPreviewMode()) return null;

  const message =
    surface === "admin"
      ? "Preview mode — the admin UI is running without a connected API. Sign-in and live data require VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment."
      : "Preview mode — you can explore the registration form. Submissions are not sent until the API environment variables are configured.";

  return (
    <div className={`preview-mode-banner preview-mode-banner--${surface}`} role="status">
      <strong>Preview</strong>
      <span>{message}</span>
    </div>
  );
}
