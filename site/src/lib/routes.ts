/**
 * routes.ts — THE route table. Frozen after T02 (CONVENTIONS §4).
 *
 * Every page resolves through here. Adding a page = one entry here + one page file.
 * Paths are English/unprefixed; locale variants are COMPUTED by i18n.localizePath(),
 * never stored. Slugs were reconciled and frozen in T18 (decision #39; map in `seo/keyword-map.md`) —
 * downstream code must reference routes by `key`, never by a literal path.
 *
 * `/privacy/` and `/terms/` supersede decision #38 for these paths (decision #42).
 * `/blog/` is Phase 1b (decision #28): present in the table, disabled, no page emitted.
 */

export type RouteGroup = 'top' | 'services' | 'industries' | 'legal' | 'system';

import type { UiKey } from './ui/en';

export interface Route {
  /** Stable identifier used everywhere in code and content (`route:` frontmatter). */
  key: string;
  /** English, unprefixed path exactly as emitted by the build. */
  path: string;
  /** Key into the UI string table for the human label (`route.<key>` must exist in ui/en.ts). */
  labelKey: UiKey;
  group: RouteGroup;
  /** Task on the board that owns this route's page and copy. */
  task: string;
  /** False = in the table for URL continuity but not built or linked yet. */
  enabled: boolean;
}

const r = (
  key: string,
  path: string,
  group: RouteGroup,
  task: string,
  enabled = true,
): Route => ({ key, path, labelKey: `route.${key}` as UiKey, group, task, enabled });

export const routes = {
  home: r('home', '/', 'top', 'T03'),

  services: r('services', '/services/', 'services', 'T04'),
  whiteLabelSeo: r('whiteLabelSeo', '/services/white-label-seo/', 'services', 'T04'),
  technicalSeo: r('technicalSeo', '/services/technical-seo/', 'services', 'T05'),
  onPageSeo: r('onPageSeo', '/services/on-page-seo/', 'services', 'T05'),
  localSeo: r('localSeo', '/services/local-seo/', 'services', 'T05'),
  contentGeo: r('contentGeo', '/services/content-seo/', 'services', 'T05'), // slug fixed in T18 (decision #39); key unchanged

  dubaiProperty: r('dubaiProperty', '/for/dubai-property/', 'industries', 'T06'),
  algerianEcommerce: r('algerianEcommerce', '/for/algerian-ecommerce/', 'industries', 'T06'),

  seoAudit: r('seoAudit', '/seo-audit/', 'top', 'T09'),
  work: r('work', '/work/', 'top', 'T07'),
  about: r('about', '/about/', 'top', 'T08'),
  pricing: r('pricing', '/pricing/', 'top', 'T09'),
  contact: r('contact', '/contact/', 'top', 'T10'),

  privacy: r('privacy', '/privacy/', 'legal', 'T11'),
  terms: r('terms', '/terms/', 'legal', 'T11'),

  blog: r('blog', '/blog/', 'top', 'T12', false),

  /** System page — GitHub Pages serves /404.html for any unknown path. Never in nav. */
  notFound: r('notFound', '/404.html', 'system', 'T02'),
} as const satisfies Record<string, Route>;

export type RouteKey = keyof typeof routes;

export const allRoutes: readonly Route[] = Object.values(routes);
export const enabledRoutes: readonly Route[] = allRoutes.filter((x) => x.enabled);
export const routeKeys = Object.keys(routes) as RouteKey[];

export function route(key: RouteKey): Route {
  return routes[key];
}

export function routesInGroup(group: RouteGroup): readonly Route[] {
  return enabledRoutes.filter((x) => x.group === group);
}
