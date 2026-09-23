/**
 * nav.ts — ONE data structure drives header, footer and (later) sitemap.
 * Frozen after T02 (ARCHITECTURE §6 "Nav model"; decisions #17, #22).
 *
 * Top level: Services ▾ / Work / Pricing / About / Contact + CTA (cta.ts).
 * The single dropdown groups Services (5) and Industries (2).
 * No component may hand-write a link list.
 */
import { route, routesInGroup, type Route, type RouteKey } from './routes';
import type { UiKey } from './ui/en';

export interface NavLink {
  kind: 'link';
  route: Route;
}

export interface NavSection {
  labelKey: UiKey;
  /** Optional index page the section heading links to (e.g. /services/). */
  index?: Route;
  items: Route[];
}

export interface NavGroup {
  kind: 'group';
  labelKey: UiKey;
  sections: NavSection[];
}

export type NavItem = NavLink | NavGroup;

const link = (key: RouteKey): NavLink => ({ kind: 'link', route: route(key) });

/** The five service pages — the /services/ index is the section heading, not an item (decision #22). */
const servicePages = routesInGroup('services').filter((x) => x.key !== 'services');

/** Header: the order is decision #17. */
export const primaryNav: readonly NavItem[] = [
  {
    kind: 'group',
    labelKey: 'nav.services',
    sections: [
      { labelKey: 'nav.group.services', index: route('services'), items: [...servicePages] },
      { labelKey: 'nav.group.industries', items: [...routesInGroup('industries')] },
    ],
  },
  link('work'),
  link('pricing'),
  link('about'),
  link('contact'),
];

/** Footer columns — derived from the same route table. */
export const footerNav: readonly NavSection[] = [
  { labelKey: 'nav.group.services', index: route('services'), items: [...servicePages] },
  { labelKey: 'nav.group.industries', items: [...routesInGroup('industries')] },
  {
    labelKey: 'nav.primary',
    items: [route('seoAudit'), route('work'), route('pricing'), route('about'), route('contact')],
  },
  { labelKey: 'footer.legal', items: [...routesInGroup('legal')] },
];
