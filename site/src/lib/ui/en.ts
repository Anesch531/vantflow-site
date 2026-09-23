/**
 * ui/en.ts — English UI strings (chrome only: nav labels, CTA, footer, system pages).
 * Page COPY never lives here — it lives in src/content/pages/<locale>/ (content layer).
 * T13 adds ui/fr.ts, T14 adds ui/ar.ts with the same keys; missing keys fall back to this file.
 */
export const en = {
  'site.name': 'VANTFLOW',
  'site.tagline': 'Every fix carries a reason.',

  'nav.primary': 'Primary',
  'nav.footer': 'Footer',
  'nav.services': 'Services',
  'nav.group.services': 'Services',
  'nav.group.industries': 'Industries',
  'nav.skip': 'Skip to content',

  'cta.bookAudit': 'Book the audit',

  'route.home': 'Home',
  'route.services': 'SEO services',
  'route.whiteLabelSeo': 'White-label SEO',
  'route.technicalSeo': 'Technical SEO',
  'route.onPageSeo': 'On-page SEO',
  'route.localSeo': 'Local SEO',
  'route.contentGeo': 'Content & GEO',
  'route.dubaiProperty': 'Dubai property',
  'route.algerianEcommerce': 'Algerian e-commerce',
  'route.seoAudit': 'SEO audit',
  'route.work': 'Work',
  'route.about': 'About',
  'route.pricing': 'Pricing',
  'route.contact': 'Contact',
  'route.privacy': 'Privacy',
  'route.terms': 'Terms',
  'route.blog': 'Blog',
  'route.notFound': 'Page not found',

  'footer.legal': 'Legal',
  'footer.locales': 'Language',
  'footer.copyright': 'VANTFLOW',

  'locale.en': 'English',
  'locale.fr': 'Français',
  'locale.ar': 'العربية',

  'placeholder.eyebrow': 'Placeholder',
  'placeholder.body': 'This page is built in its own task. Nothing here is final.',
  'placeholder.owner': 'owner',
  'placeholder.route': 'route',
  'placeholder.home': 'Back to home',
} as const;

export type UiKey = keyof typeof en;
