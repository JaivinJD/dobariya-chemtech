# Visual redesign: status and handoff

Branch: `visual-redesign` (forked from `main` at 265b80e, which equals `cms-admin`).
Goal: replace the generic look with a confident industrial-editorial design, reference dobariya.in for structure. Content and CMS data stay untouched.

## Design system (src/styles/global.css)
- Colours (role-named tokens): brand teal `#069592` (logo), ink `#101A1A`, page bg `#F4F5F2`, accent bromine red-brown `#A2401F` (used only on the Br tile and photo placeholders).
- Fonts: Archivo (variable width; headings use `wdth` 110 to 118), IBM Plex Mono for labels, CAS numbers, formulas.
- Buttons: `.btn` + `--primary` / `--ink` / `--ghost` / `--ghost-light`. Near-square corners (`--radius: 2px`).
- Type roles: `.label` (mono eyebrow), `.h2` (section heading). `.on-dark` for dark sections.
- Old token names were kept with new values, so pages not yet redesigned still render.

## Rules that must not break
- Do not touch `src/data/**`, `src/content.config.ts`, `public/admin/config.yml` (one exception planned at launch, see below).
- Contact form Netlify wiring: `name="contact"`, `data-netlify="true"`, `netlify-honeypot="bot-field"`, hidden `form-name` + `bot-field` inputs, `.hp-field { display: none }`.
- Leaflet: keep `.leaflet-marker-icon, .leaflet-marker-shadow { max-width: none }`.
- Reveal attributes `data-reveal` / `data-reveal-group`; counters use `data-count`.
- No em dashes in copy. No fake photos presented as the real facility; missing photos use `<PhotoSlot>` placeholders.

## Photo slots
| Code | Where | Status |
|---|---|---|
| P1 | Home hero (`components/home/Hero.astro`, import `heroImg`) | current stock silo photo, to be replaced |
| P2 | Home intro (`Intro.astro`, `plantImg`) and About | waiting |
| P3 | Home promises (`Promises.astro`, `qcImg`) and Quality | waiting |
| P4 | Home enquiry band (`Enquiry.astro`, `dispatchImg`) | waiting |
| P5 | About header | waiting |
Put photos in `src/assets/photos/`, import them, pass to `<PhotoSlot src={...}>`.

## Progress
- [x] Day 1: tokens, Layout (fonts, overlay nav prop, counters, one-shot reveals), Navbar, Footer (reads contact.json / offices.json, dobariya.in link), full homepage in `components/home/`, shared `lib/catalog.ts`, `ui/PhotoSlot`, `ui/Arrow`.
- [ ] Day 2: Products list (anchors `#alkyl-solvents`, `#alkyl-solid`, `#other` are already linked from home), product detail, Contact (add `id="enquiry"` on the form section; nav CTA links `/contact#enquiry`).
- [ ] Day 3: About (Dobariya Group band with dobariya.in button), Quality, 404, drop in photos, mobile pass.
- [ ] Day 4: feedback, performance, OG image, merge `cms-admin` in, launch prep.

## Launch checklist (decide with Jaivin)
- Decap `public/admin/config.yml` `backend.branch` is `cms-admin` and `site_url` points at the cms-admin preview. After the redesign merges to `main` and production switches to `main`, the CMS must target `main`, or edits never go live.
- Netlify production branch: switch `coming-soon` to `main`.
