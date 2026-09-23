/**
 * cta.ts — THE primary call to action (decision #18). Frozen after T02.
 *
 * Header button, homepage hero and every end-of-page CTA import this.
 * No component hard-codes its own label or destination. There is exactly one primary
 * button per viewport (DESIGN.md §4), and it is always this one.
 */
import { route, type Route } from './routes';
import type { UiKey } from './ui/en';

export interface PrimaryCta {
  labelKey: UiKey;
  route: Route;
}

export const primaryCta: PrimaryCta = {
  labelKey: 'cta.bookAudit',
  route: route('seoAudit'),
};
