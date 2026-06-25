# Smhos Serviceunit Frontend

Frontend for the Salvation Ministries service unit registration form and all admin dashboards (super admin, country admin, state admin, data entry, and related views).

The API (Supabase Edge Functions, migrations, and backend scripts) lives in a separate repository and is deployed independently. This app calls those APIs via `VITE_SUPABASE_URL` and the anon key.

## What's included

- **Public form** — `/` — service unit registration
- **Admin dashboards** — `/admin/*` — login, locations, requests, users, notifications, analytics, and role-specific views

## Requirements

- Node.js 18+
- A Supabase project with Edge Functions already deployed (`admin-api`, `admin-login`, `submit-registration`, etc.)

## Setup

```bash
npm install
cp .env.example .env
# Edit .env with your Supabase project URL and anon key
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) for the public form and [http://localhost:5173/admin](http://localhost:5173/admin) for the admin login.

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_SUPABASE_URL` | Yes | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Yes | Supabase anon (public) key |
| `VITE_SUPABASE_FORM_SUBMIT_FN` | No | Edge function for form submit (default: `submit-registration`) |

Backend secrets (`ADMIN_JWT_SECRET`, `RESEND_API_KEY`, etc.) are configured in Supabase, not in this repo.

## Build & deploy

```bash
npm run build
npm run preview   # optional local check of production build
```

Deploy the `dist/` folder to Vercel, Netlify, or any static host. This repo includes `vercel.json` and `netlify.toml` with SPA routing for `/admin/*`.

On Vercel, set the same `VITE_*` environment variables used in development.

## Documentation

- [Admin roles](docs/ADMIN_ROLES.md)
- [Admin dashboard guide](docs/ADMIN_DASHBOARD_GUIDE.md)

## Related repositories

- **API / backend** — separate repo (Supabase functions, migrations, seeds)
