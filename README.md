# Thato Thobane — Portfolio

**Live URL:** [https://my-portfolio-amber-theta-53.vercel.app](https://my-portfolio-amber-theta-53.vercel.app)

## Who this site is for

This is the personal portfolio of Thato Thobane, a full-stack developer. It is for recruiters, hiring managers and anyone interested in the work I build.

## The role I am after

I am looking for full-time or contract **Frontend / Full-Stack Developer** roles working with React, Next.js, TypeScript and Tailwind CSS.

## Pages

| Page | Path | Purpose |
| ---- | ---- | ---- |
| Home | / | Introduction, about me and featured work |
| Projects | /projects | Case studies of projects I have built |
| Contact | /contact | How to get in touch |

This site is built with **Next.js, TypeScript and Tailwind CSS** and deployed on **Vercel**.

## Data

Project data is stored in **Supabase** (project `Thato_Thobane_Portfolio`) in the `public.projects` table. The app reads it with the `@supabase/supabase-js` client using the public anon key.

To replace the placeholder rows with the real GitHub projects, run
[`supabase/projects.sql`](./supabase/projects.sql) in the Supabase SQL Editor
using an owner or service-role connection. The public anon key can read projects
but is intentionally blocked from changing them by row-level security.
Run [`supabase/contact-and-policies.sql`](./supabase/contact-and-policies.sql)
after the project seed to create the contact table and owner-only project
policies.

AI was used as a coding assistant for implementation, debugging, accessibility
checks and documentation. Project decisions, content and final review remain
my own.

Set these environment variables (locally in `.env.local`, and in your Vercel project settings):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Then install dependencies and run:

```bash
npm install
npm run dev
```
