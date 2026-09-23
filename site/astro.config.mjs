// @ts-check
import { defineConfig } from 'astro/config';

// VANTFLOW - static site for GitHub Pages.
// Decisions: #35 (Astro static), #37 (GitHub Pages via git push), #38 (keep .html paths).
export default defineConfig({
  site: 'https://vantflow.tech',

  // GitHub Pages serves files only - no server, no SSR.
  output: 'static',

  build: {
    // 'preserve' mirrors the source tree: `privacy.astro` -> /privacy.html and
    // `terms.astro` -> /terms.html keep the two live legal URLs (decision #38), while
    // `about/index.astro` -> /about/index.html serves the /about/ directory URLs fixed in
    // ARCHITECTURE §4. ('file' flattened /about/ to /about.html - found and fixed in T02.)
    format: 'preserve',
  },

  // No trailing-slash redirects on a static host: keep URLs as emitted.
  trailingSlash: 'ignore',
});
