# Alex Landrin — Portfolio

A minimalist, type-led (Swiss-editorial) portfolio for **Alex Landrin**, Product &
brand designer. Built recruiter-first: it tells the hire-me story in one scroll and
backs it with deep case studies.

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS with a custom token theme (palette + type scale)
- **Animation:** Framer Motion (reduced-motion honoured)
- **Fonts:** Helvetica Neue throughout (single family, size + weight hierarchy), as a CSS font stack
- **i18n:** EN (default) with an EN/DE/FR toggle (dictionary per locale)
- **Modes:** Light + dark, both WCAG AA

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build && npm run start   # production build
npm run lint                     # eslint
```

Requires Node 18.17+ (Node 20 recommended).

---

## The design, in one paragraph

Ink on a warm off-white (`#FBFBF9` — deliberately **not** the AI-default cream), a
single deep pine-teal brand accent (`#13453E`) used only on interaction, Helvetica
Neue used across the whole page, with hierarchy from size and weight alone.
The signature element is **the grid made visible**: a
footer toggle (`⊞ Grid`) reveals the live 12-column + baseline overlay — the page
presenting itself as a design system. See the design rationale and self-critique in
the build brief.

### Design tokens

All colour + type live in two places — never hardcode hex in components:

- **Palette:** CSS variables in [`src/app/globals.css`](src/app/globals.css)
  (`:root` = light, `.dark` = dark), surfaced as Tailwind tokens
  (`paper`, `ink`, `muted`, `hairline`, `accent`).
- **Type scale + fonts:** [`tailwind.config.ts`](tailwind.config.ts)
  (`text-hero`, `text-display-md`, `text-label`, …; `font-display`/`font-sans` = Helvetica Neue).

---

## Editing content (no component edits needed)

One source of truth per concern, all under [`src/lib/`](src/lib):

| What | File |
|---|---|
| Name, role, links, CV path, skills, experience | [`src/lib/content/profile.ts`](src/lib/content/profile.ts) |
| Case studies (all copy, process, outcomes) | [`src/lib/content/projects.ts`](src/lib/content/projects.ts) |
| Ventures (LogoMint / ACADEMIA / Cozisoft / Landtone) | [`src/lib/content/ventures.ts`](src/lib/content/ventures.ts) |
| UI strings + DE/FR translations | [`src/lib/i18n/dictionaries.ts`](src/lib/i18n/dictionaries.ts) |

**Add a case study:** append an object to the `projects` array in `projects.ts`. Its
page (`/work/[slug]`), the home list, prev/next nav and the sitemap all update
automatically.

**Placeholders:** anything written as `[[project-x-shot-1.png]]` renders as a labelled
placeholder block at the right aspect ratio; `[[TODO: …]]` and `[[metric]]` mark copy/
numbers to supply. Every one is listed in [`TODO.md`](TODO.md).

### Replace a placeholder image with a real one

1. Drop the file in `public/work/` (e.g. `public/work/ream-shot-1.png`).
2. In the relevant content file, the `src` currently reads `[[ream-shot-1.png]]`.
   Swap the `<Placeholder>` usage for `next/image` — or, simplest, keep the data and
   update [`src/components/Placeholder.tsx`](src/components/Placeholder.tsx) to render
   `next/image` when `src` doesn't start with `[[`.

---

## i18n

English is default. The **EN/DE/FR toggle in the navbar** (and footer) switches the
**entire site** and persists to `localStorage`. All visitor-facing copy is fully
translated:

- UI + marketing copy → [`src/lib/i18n/dictionaries.ts`](src/lib/i18n/dictionaries.ts)
- Case-study copy → [`src/lib/content/projects.i18n.ts`](src/lib/content/projects.i18n.ts)
  (English source stays in `projects.ts`; this file holds the DE/FR overrides, resolved by `localizeProject`)

Any key a locale doesn't override falls back to English via `deepMerge`, so nothing
ever renders blank.

---

## Accessibility & motion

- WCAG 2.1 AA: visible keyboard focus, semantic heading order, alt/label text,
  AA contrast in both themes, skip-to-content link.
- `prefers-reduced-motion` is a hard floor — all reveals and micro-interactions
  disable, full functionality remains (see [`src/components/Reveal.tsx`](src/components/Reveal.tsx)
  and the global rule in `globals.css`).

---

## Deploy (Vercel, zero config)

1. Push to GitHub.
2. Import the repo on [Vercel](https://vercel.com/new) — it auto-detects Next.js.
3. Set the production domain, then update `site.url` in
   [`src/lib/content/profile.ts`](src/lib/content/profile.ts) so OG images, canonical
   URLs, `sitemap.xml`, `robots.txt` and JSON-LD point at the real domain.

No env vars required.

---

## Project structure

```
src/
  app/
    layout.tsx            fonts, providers, SEO metadata, JSON-LD, no-flash theme
    page.tsx              home (hero → work → capabilities → about → ventures → contact)
    work/[slug]/page.tsx  case-study route (static-generated per project)
    about/ ventures/ cv/  dedicated pages
    sitemap.ts robots.ts  generated
    opengraph-image.tsx   generated OG image
    icon.svg              AL monogram favicon
  components/             UI (Nav, Hero, WorkCard, CaseStudy, Footer, …)
  lib/
    content/              profile, projects, ventures (edit here)
    i18n/                 dictionaries + LocaleProvider
    theme/                ThemeProvider (dark mode + grid toggle)
public/
  cv/alex-landrin-cv.pdf  placeholder — replace with real CV
  work/                   drop real project images here
```
