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

None planned for Phase 1. The design carries information with type and data blocks
(DESIGN.md §1). If an image is ever added, record source, licence and alt text here first.

## Deploy artefacts

| Asset | Purpose |
|---|---|
| `public/CNAME` → `vantflow.tech` | GitHub Pages custom domain (decision #37) |
