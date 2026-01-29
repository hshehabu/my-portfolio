# Odoo Developer Portfolio (Next.js + Supabase + Vercel)

One-page portfolio for an Odoo Developer. Content is stored in Supabase and editable via an admin dashboard. Built with Next.js 14 (App Router), Tailwind CSS, and Supabase; deployable on Vercel.

## Tech stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (existing styles, dark mode)
- **Supabase** (Postgres + Auth)
- **Vercel** (hosting)

## Local setup

### 1. Install dependencies

```bash
npm install
```

### 2. Supabase project

1. Create a project at [supabase.com](https://supabase.com).
2. In the Supabase Dashboard, go to **SQL Editor** and run the schema:  
   Copy the contents of `supabase/schema.sql` and execute it.  
   This creates tables (`profile`, `bio`, `experience`, `projects`, `contact_settings`) and RLS policies (public read, authenticated write).
3. In **Authentication → Users**, create a user (email + password) for admin login.
4. In **Project Settings → API**, copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. Environment variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

(Use the values from step 2.)

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the site and [http://localhost:3000/admin](http://localhost:3000/admin) for the admin dashboard. Log in with the Supabase user you created.

---

## Deploying on Vercel

### 1. Push code to Git

Push this repo to GitHub, GitLab, or Bitbucket.

### 2. Create Vercel project

1. Go to [vercel.com](https://vercel.com) and sign in.
2. **Add New Project** and import your repository.
3. Leave **Framework Preset** as **Next.js** and **Root Directory** as `.` (or your app folder).
4. Do **not** build yet; add environment variables first.

### 3. Environment variables on Vercel

In the Vercel project:

1. **Settings → Environment Variables**.
2. Add:

   - **Name:** `NEXT_PUBLIC_SUPABASE_URL`  
     **Value:** your Supabase project URL (e.g. `https://xxxx.supabase.co`)  
     **Environment:** Production (and Preview if you use preview deployments).

   - **Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`  
     **Value:** your Supabase anon/public key  
     **Environment:** Production (and Preview if needed).

3. Save.

### 4. Deploy

1. **Deploy** (or trigger a new deployment from the **Deployments** tab).
2. After the build finishes, open the production URL (e.g. `https://your-app.vercel.app`).

### 5. Optional: custom domain

- In the Vercel project: **Settings → Domains**.
- Add your domain and follow the DNS instructions.
- If you use a custom domain, you can set `NEXT_PUBLIC_SITE_URL` to that URL (e.g. `https://yourdomain.com`) so redirects (e.g. after logout) use the correct origin.

---

## Supabase setup (summary)

1. **Create project** at [supabase.com](https://supabase.com).
2. **Run schema:** SQL Editor → paste and run `supabase/schema.sql`.  
   This creates tables and RLS (public read, authenticated write).
3. **Create admin user:** Authentication → Users → Add user (email + password).
4. **Copy API keys:** Project Settings → API → URL and anon key → use in `.env.local` and Vercel.

---

## Admin dashboard

- **URL:** `/admin` (e.g. `https://your-app.vercel.app/admin`).
- **Auth:** Supabase email/password. Use the user you created in Supabase.
- **Sections:** Profile, Bio, Experience, Projects, Contact settings.  
  Edits are saved to Supabase and appear on the site after refresh (or immediately with revalidation).

---

## Project structure

- `app/` – Next.js App Router (layout, page, admin routes).
- `components/` – UI (Header, Hero, Bio, Experience, Projects, Contact, Footer, ThemeToggle, etc.).
- `lib/` – Supabase client (server + browser), data fetchers, types, server actions.
- `supabase/schema.sql` – Postgres schema and RLS policies.

---

## Success criteria

- Hero, bio, experience, and projects are editable from the admin without changing code.
- Site stays fast and looks the same as the original; only content is dynamic.
- Dashboard is minimal, works on mobile, and gives immediate save feedback.
