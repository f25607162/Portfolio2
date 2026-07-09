# The Museum of Haniya

An interactive, museum-themed portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## Live site

Open the deployed portfolio here: **https://f25607162.github.io/Portfolio2/**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Setting up the contact form (EmailJS)

The guest book form sends real emails via [EmailJS](https://www.emailjs.com), no backend required.

1. Create a free account at emailjs.com.
2. Add an email service (Gmail, Outlook, etc.) and note its **Service ID**.
3. Create an email template with these variable names: `user_name`, `user_email`, `message`. Note the **Template ID**.
4. Find your **Public Key** under Account > General.
5. Copy `.env.local.example` to `.env.local` and fill in the three values:

```bash
cp .env.local.example .env.local
```

Without these set, the form still displays and validates normally but won't actually deliver an email — useful for local visual testing.

## Build for production

```bash
npm run build
npm start
```

## Deploy

This project is Vercel-ready. Push to a GitHub repo and import it at [vercel.com/new](https://vercel.com/new), or run:

```bash
npx vercel
```

### GitHub Pages

This repository also includes a GitHub Pages workflow (`/.github/workflows/deploy-pages.yml`) that builds the Next.js app as a static export and deploys it to:

**https://f25607162.github.io/Portfolio2/**

## Structure

- `app/components/sections` — one component per museum room (Hero, About, Education, Skills, Projects, Experience, Certificates, Contact)
- `app/components/3d` — the React Three Fiber glass sculpture and particle field
- `app/components/ui` — shared UI primitives (Button, Eyebrow, ScrollReveal, SkillDial, etc.)
- `app/components/layout` — Navigation, Footer, and the top-level MuseumExperience wrapper
- `app/constants/content.ts` — all editable copy (name, projects, skills, certificates, contact info) lives here
- `app/hooks` — theme, smooth scroll, and scroll-reveal hooks

## Editing content

Everything text-based — name, university, skills, projects, certificates — lives in `app/constants/content.ts`. Edit that one file to update the whole site.

## Adding a resume

Drop your resume PDF into `public/` as `resume.pdf` — the "Download resume" button already links to `/resume.pdf`.

## Troubleshooting

**If you already ran `npm install` before pulling this update**, delete the old dependencies first so the fix actually takes effect:

```bash
rm -rf node_modules package-lock.json
npm install
```
(On Windows: delete the `node_modules` folder and `package-lock.json` file manually, or run `rmdir /s node_modules` and `del package-lock.json` in Command Prompt.)

This project previously could show two errors in the browser console — both are now fixed in the source:
- A hydration mismatch warning from the floating dust particles (they now generate their random positions only after the page loads in the browser, instead of during server rendering).
- A crash reading `Cannot read properties of undefined (reading 'ReactCurrentOwner')` coming from the 3D sculpture — caused by two copies of React ending up installed. `package.json` now pins an `overrides` block and `next.config.js` forces a single deduplicated React copy for the browser bundle.

## Notes

- Dark/light mode persists via `localStorage` and respects the visitor's OS preference on first load.
- All animations respect `prefers-reduced-motion`.
- The 3D sculpture lazy-loads client-side only and falls back to a soft gradient circle while loading or if WebGL is unavailable.
- Nav links highlight the room currently in view as you scroll (via `IntersectionObserver`).
- Clicking a project frame opens a full-screen exhibition detail view with the long description, tech stack, and links.
- Clicking a certificate opens an enlarged lightbox view.
- The hero sculpture and text have a subtle GSAP ScrollTrigger parallax as you scroll past the lobby.
- The contact form sends real email via EmailJS — see the setup section above.
