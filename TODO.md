# TODO — placeholders & content for Alex to supply

One checklist for everything marked `[[ … ]]` in the codebase. Nothing here blocks the
site from running — every placeholder renders cleanly and is clearly labelled.

## 🔗 Identity & links — `src/lib/content/profile.ts`
- [ ] Set the real production domain in `site.url` (used by OG image, canonical URLs, sitemap, robots, JSON-LD).
- [ ] Confirm LinkedIn URL (`contact.linkedin`) — currently a best-guess handle.
- [ ] Replace the placeholder CV at `public/cv/alex-landrin-cv.pdf` with the real PDF.
- [ ] Fill Cozisoft start year in `experience`.
- [ ] Review the `aiio GmbH` role note.

## 🖼️ Images (drop into `public/work/`, then swap `Placeholder` → `next/image`)
- [x] `portrait.jpg` — real portrait added (About section, 4/5).
- [x] REAM: `ream-cover.png` added. Still needed: `ream-shot-1.png`, `ream-shot-2.png`, `ream-shot-3.png`.
- [ ] Canton Getaway: `canton-cover.png`, `canton-shot-1.png`, `canton-shot-2.png`, `canton-shot-3.png`.
- [ ] BrandKit Studio: `brandkit-cover.png`, `brandkit-shot-1.png`, `brandkit-shot-2.png`, `brandkit-shot-3.png`.
- [ ] LogoMint gallery: `logomint-cover.png` + AURAFLO, phinny.ai, KB Industrie, OUNAGO/CityGo, WelConcept, SAKARA, Bazaar, Ryma Ads.

## ✍️ Case-study copy — `src/lib/content/projects.ts`
Each `[[TODO: …]]` marks a line to refine in your own voice; each `[[metric]]` is a
real number to drop in (never invented).
- [ ] REAM — sharpen problem statement; confirm launch scope; confirm reflection; fill 3 outcome metrics.
- [ ] Canton Getaway — expand problem; note handoff/ship detail; confirm reflection; fill 2 metrics.
- [ ] BrandKit Studio — sharpen thesis; testing outcome; confirm reflection; fill metrics.
- [ ] LogoMint — confirm countries-served metric; confirm reflection.

## 🌐 Translations — done (review optional)
The whole site is fully translated EN / DE / FR and switches from the navbar (or
footer) toggle. Marketing + UI copy lives in `src/lib/i18n/dictionaries.ts`;
case-study copy lives in `src/lib/content/projects.i18n.ts`.
- [ ] Optional: review the DE/FR wording in your own voice.
- [ ] The `[[TODO: …]]` editorial notes inside case studies are kept in English
      on purpose (they're notes to you, not visitor copy) — rewrite them per language when you fill the real content.

## 🧩 Ventures — `src/lib/content/ventures.ts`
- [ ] LogoMint URL (confirm).
- [ ] ACADEMIA link.
- [ ] Cozisoft link.

## ✅ Already done (no action needed)
- Reusable case-study template + 4 real projects scaffolded.
- Download-CV / email / LinkedIn CTAs in hero, nav, contact and footer.
- EN/DE/FR toggle, light/dark mode (both AA), grid signature.
- Framer Motion hero reveal + scroll reveals, `prefers-reduced-motion` honoured.
- SEO: per-page metadata, OG image, sitemap, robots, `Person` + `CreativeWork` JSON-LD.
- Responsive 360px → desktop; skip link; visible focus.
