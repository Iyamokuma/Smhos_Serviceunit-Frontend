# Salvation Ministries — Service Unit Frontend

Single-page application for **service unit registration** and the full **admin dashboard** suite (super admin, country admin, state admin, data entry, and related workflows).

This repository contains **frontend code only**. The API (Supabase Edge Functions, database migrations, and server-side configuration) is maintained in a separate repository and deployed independently.

---

## Contents

| Route | Purpose |
|-------|---------|
| `/` | Public service unit registration form |
| `/admin` | Admin sign-in and dashboards |

Both surfaces ship in one build. No separate admin bundle is required at deploy time.

---

## Requirements

- **Node.js** 18 or later
- **npm** 9 or later (bundled with current Node releases)

No database, Docker, or backend services are required to run the UI locally.

---

## Quick start (no API)

You can explore the full interface before the API repository is connected.

```bash
git clone https://github.com/Iyamokuma/Smhos_Serviceunit-Frontend.git
cd Smhos_Serviceunit-Frontend
npm install
npm run dev
```

Open:

- Registration form — [http://localhost:5173](http://localhost:5173)
- Admin login — [http://localhost:5173/admin](http://localhost:5173/admin)

When `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are not set, the app enters **preview mode**:

- The registration form loads with built-in service units and sample church directory data.
- You can complete the form end-to-end; nothing is sent to a server.
- The admin UI is visible, but sign-in and live data require API credentials.

A yellow **Preview** banner appears at the top of each surface while preview mode is active.

---

## Connecting the API

When the backend repository is deployed to Supabase:

1. Copy the environment template:

   ```bash
   cp .env.example .env
   ```

2. Set your project values in `.env`:

   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

3. Restart the dev server (`npm run dev`).

The frontend calls Supabase REST and Edge Functions (`admin-api`, `admin-login`, `submit-registration`, and others) using these variables. Server-side secrets stay in the API repository and Supabase project settings — never in this frontend `.env` file.

---

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_SUPABASE_URL` | For live data | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | For live data | Supabase anonymous (public) key |
| `VITE_SUPABASE_FORM_SUBMIT_FN` | No | Edge function for form submit (default: `submit-registration`) |
| `VITE_APP_PREVIEW` | No | Force preview on (`true`) or off (`false`). Defaults to on when Supabase variables are missing. |

---

## Build and local production check

```bash
npm run build      # output → dist/
npm run preview    # serve dist/ at http://localhost:4173
```

`npm start` is an alias for `npm run preview`.

---

## Deployment

This is a static Vite build. After `npm run build`, upload the **`dist/`** directory to any static file host or CDN.

### Single-page routing

Client-side routes (`/admin`, `/admin/requests`, and so on) must fall back to `index.html`. Platform-specific examples are included in the repo:

| Host type | Reference |
|-----------|-----------|
| Apache | [`public/.htaccess`](public/.htaccess) — copied into `dist/` automatically |
| nginx | [`deploy/nginx.conf.example`](deploy/nginx.conf.example) |
| Node (local) | `npm run preview` after build |

For other platforms (AWS S3 + CloudFront, Azure Static Web Apps, Cloudflare Pages, cPanel, and similar), configure an **SPA fallback** so unknown paths serve `index.html` with HTTP 200.

### Build-time environment

Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in your hosting platform’s environment **before** running `npm run build`. Vite inlines these values at build time.

---

## Project structure

```
├── src/
│   ├── App.jsx              Public registration form
│   ├── admin/               Admin dashboards, API client, pages
│   ├── components/          Shared UI
│   ├── lib/                 Supabase helpers, catalogs, preview data
│   └── sections/            Form sections
├── public/                  Static assets (logo, Apache SPA rules)
├── deploy/                  Deployment examples (nginx)
├── docs/                    Admin role and dashboard guides
├── index.html
├── vite.config.js
└── package.json
```

---

## Documentation

- [Admin roles](docs/ADMIN_ROLES.md)
- [Admin dashboard guide](docs/ADMIN_DASHBOARD_GUIDE.md)

---

## Related repositories

| Repository | Contents |
|------------|----------|
| **This repo** | React frontend (public form + admin dashboards) |
| **API repo** *(separate)* | Supabase migrations, Edge Functions, seeds, backend scripts |

---

## Support

For ministry-specific workflow questions, refer to the admin documentation in `docs/`. For deployment or integration issues, ensure the API repository is deployed and the `VITE_*` variables match your Supabase project.
