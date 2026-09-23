# VANTFLOW — English site

Astro 5 static site for **vantflow.tech**. Zero client scripts. Deployed to GitHub Pages.

## Layout

- `site/` — Astro app (source of truth; monorepo holds docs/tasks separately)
- `.github/workflows/deploy-pages.yml` — build `site/` → Pages artifact

## Build

```bash
cd site
npm ci
npm run build   # outputs site/dist (17 pages, CNAME included)
```

## Deploy

Push to `main` (or run the **Deploy site to GitHub Pages** workflow manually).
Custom domain `vantflow.tech` is configured in repo **Settings → Pages**.

## Local preview

```bash
cd site
npm run preview
```
