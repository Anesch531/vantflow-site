/**
 * i18n.ts — locale plumbing. Frozen after T02 (ARCHITECTURE §6 "Locale plumbing").
 *
 * Locale comes from the route prefix: `/` = en (default, unprefixed), `/fr/…`, `/ar/…`.
 * One helper resolves direction and UI strings. Only English is emitted until T13/T14;
 * this module already knows about fr/ar so those tasks add data, not plumbing.
 */
import { en, type UiKey } from './ui/en';

export const locales = ['en', 'fr', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Locales that actually have pages emitted today. T13 adds 'fr', T14 adds 'ar'. */
export const activeLocales: readonly Locale[] = ['en'];

const rtlLocales: ReadonlySet<Locale> = new Set(['ar']);

/** BCP-47 language tag for <html lang>. */
export const langTag: Record<Locale, string> = { en: 'en', fr: 'fr', ar: 'ar' };

export type Dir = 'ltr' | 'rtl';

export function dirFor(locale: Locale): Dir {
  return rtlLocales.has(locale) ? 'rtl' : 'ltr';
}

export function isLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x);
}

/** `/fr/services/` → 'fr'; `/services/` → 'en'. */
export function localeFromPath(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0];
  return first && isLocale(first) && first !== defaultLocale ? first : defaultLocale;
}

/** Strip a locale prefix: `/fr/services/` → `/services/`. */
export function stripLocale(pathname: string): string {
  const parts = pathname.split('/');
  // parts[0] is '' for absolute paths
  if (parts[1] && isLocale(parts[1]) && parts[1] !== defaultLocale) {
    parts.splice(1, 1);
  }
  const out = parts.join('/');
  return out.startsWith('/') ? out : `/${out}`;
}

/** `/services/` + 'fr' → `/fr/services/`; default locale is unprefixed. */
export function localizePath(path: string, locale: Locale): string {
  const base = stripLocale(path);
  if (locale === defaultLocale) return base;
  return base === '/' ? `/${locale}/` : `/${locale}${base}`;
}

/* ---- UI strings --------------------------------------------------------- */

type Table = Partial<Record<UiKey, string>>;

// T13 / T14: add `fr` / `ar` here and create ui/fr.ts, ui/ar.ts with the same keys.
const tables: Record<Locale, Table> = { en, fr: {}, ar: {} };

/** UI string with English fallback; never returns undefined. */
export function t(locale: Locale, key: UiKey): string {
  return tables[locale][key] ?? en[key];
}
