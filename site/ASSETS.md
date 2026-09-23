# ASSETS.md — image manifest & provenance

Every asset the site ships, where it came from, and its licence. **Nothing enters
`public/` or `src/assets/` without a row here.** No stock photography of people, no
invented client logos, no screenshots of results we do not have (PROJECT.md §5).

## Fonts (self-hosted, subset)

| Asset | Source | Licence | Status |
|---|---|---|---|
| Inter Variable (wght 100–900, latin + latin-ext + more; only 400/500/600 used) | npm `@fontsource-variable/inter` 5.3 | OFL 1.1 | **added in T02** — imported once in `src/layouts/BaseLayout.astro`; Astro bundles the woff2 into `dist/_astro/` |
| JetBrains Mono Variable (wght 100–800; only 400/500 used) | npm `@fontsource-variable/jetbrains-mono` 5.3 | OFL 1.1 | **added in T02** — same import |
| IBM Plex Sans Arabic (400/600) | IBM | OFL 1.1 | to add in T14 (`--font-arabic` token already exists) |

Fontsource ships per-script unicode-range subsets, so browsers download only the ranges a
page uses; `font-display: swap` is set by the package CSS. Preload is left to the Phase 2
performance pass.

## Brand

| Asset | Source | Status |
|---|---|---|
| Wordmark | Typographic — rendered from Inter 600, not an image | n/a |
| Favicon `public/favicon.svg` | Hand-written SVG: letter "V", Inter 600, white on `#111827`, 32px grid, 4px radius (DESIGN.md §4) | **added in T02**. PNG/ICO fallbacks deferred to the Phase 2 SEO/metadata pass |

## Imagery

| Asset | Source | Licence | Status |
|---|---|---|---|
| `public/images/hero-audit-desk.webp` (1600×893) | Gemini editorial, #41 | Editorial generated asset | in use home hero |
| `public/images/vertical-dubai-property.webp` (1600×893) | Gemini editorial, #41 | Editorial generated asset | in use Dubai vertical |
| `public/images/vertical-algeria-commerce.webp` (1600×893) | Gemini editorial, #41 | Editorial generated asset | in use Algeria vertical |
| `public/images/service-white-label-seo.webp` (1344×768) | FLUX Schnell via Replicate (treg), editorial/atmospheric per decision #41 | Editorial generated asset | added T23 |
| `public/images/service-technical-seo.webp` (1344×768) | FLUX Schnell via Replicate (treg), editorial/atmospheric per decision #41 | Editorial generated asset | added T23 |
| `public/images/service-on-page-seo.webp` (1344×768) | FLUX Schnell via Replicate (treg), editorial/atmospheric per decision #41 | Editorial generated asset | added T23 |
| `public/images/service-local-seo.webp` (1344×768) | FLUX Schnell via Replicate (treg), editorial/atmospheric per decision #41 | Editorial generated asset | added T23 |
| `public/images/service-content-seo.webp` (1344×768) | FLUX Schnell via Replicate (treg), editorial/atmospheric per decision #41 | Editorial generated asset | added T23 |
| `public/images/service-studio-desk.webp` (1344×768) | FLUX Schnell via Replicate (treg), editorial/atmospheric per decision #41 | Editorial generated asset | generated T23, held unused (spare; not wired to a page) |
| `public/og-services.png` (1200×630) | FLUX Schnell via Replicate (treg) | Editorial generated asset | added T23 (distinct og:image) |
| `public/og-white-label-seo.png` (1200×630) | FLUX Schnell via Replicate (treg) | Editorial generated asset | added T23 (distinct og:image) |
| `public/og-technical-seo.png` (1200×630) | FLUX Schnell via Replicate (treg) | Editorial generated asset | added T23 (distinct og:image) |
| `public/og-on-page-seo.png` (1200×630) | FLUX Schnell via Replicate (treg) | Editorial generated asset | added T23 (distinct og:image) |
| `public/og-local-seo.png` (1200×630) | FLUX Schnell via Replicate (treg) | Editorial generated asset | added T23 (distinct og:image) |
| `public/og-content-seo.png` (1200×630) | FLUX Schnell via Replicate (treg) | Editorial generated asset | added T23 (distinct og:image) |
| `public/og-seo-audit.png` (1200×630) | FLUX Schnell via Replicate (treg) | Editorial generated asset | added T23 (distinct og:image) |
| `public/og-pricing.png` (1200×630) | FLUX Schnell via Replicate (treg) | Editorial generated asset | added T23 (distinct og:image) |
| `public/og-about.png` (1200×630) | FLUX Schnell via Replicate (treg) | Editorial generated asset | added T23 (distinct og:image) |
| `public/og-contact.png` (1200×630) | FLUX Schnell via Replicate (treg) | Editorial generated asset | added T23 (distinct og:image) |
| `public/og-dubai-property.png` (1200×630) | FLUX Schnell via Replicate (treg) | Editorial generated asset | added T23 (distinct og:image) |
| `public/og-algerian-ecommerce.png` (1200×630) | FLUX Schnell via Replicate (treg) | Editorial generated asset | added T23 (distinct og:image) |
| `public/og-work.png` (1200×630) | FLUX Schnell via Replicate (treg) | Editorial generated asset | added T23 (distinct og:image) |
| `public/og-default.png` (1200×630) | Existing default asset, T01/T20 | Editorial generated asset | T01/T20 default |

BaseLayout `og:image:width`/`og:image:height` = 1200/630, matching all OG PNGs.

## Deploy artefacts

| Asset | Purpose |
|---|---|
| `public/CNAME` → `vantflow.tech` | GitHub Pages custom domain (decision #37) |
| `public/indexnow.txt` | IndexNow submitter key (T21 / decision #42) — GUID, sole file content |
| `public/_redirects` | Cloudflare Pages 301 map: `.html` legal URLs → directory URLs (T21; inert on GH Pages until T22) |
| `public/_headers` | Cloudflare Pages response headers: nosniff, Referrer-Policy, immutable `/_astro/*` cache (T21; inert on GH Pages until T22) |
| `public/sitemap.xml` | Index sitemap — 16 URLs, no lastmod/changefreq/priority (T21 / #42) |
