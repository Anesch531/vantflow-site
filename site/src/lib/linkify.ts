import { route, type RouteKey } from './routes';
import { localizePath, type Locale } from './i18n';

export type LinkSeg = string | { href: string; text: string };

export function splitBodyLinks(
  body: string,
  links: readonly { phrase: string; label: string; routeKey: RouteKey }[],
  locale: Locale,
): LinkSeg[] {
  const segments: LinkSeg[] = [];
  let cursor = 0;

  for (const link of links) {
    if (!link.phrase) throw new Error(`linkify: empty phrase for ${link.routeKey}`);
    const start = body.indexOf(link.phrase, cursor);
    if (start < 0) throw new Error(`linkify: phrase not found in body: "${link.phrase}"`);
    if (start > cursor) segments.push(body.slice(cursor, start));
    try {
      segments.push({ href: localizePath(route(link.routeKey).path, locale), text: link.label });
    } catch {
      throw new Error(`linkify: invalid route key: "${String(link.routeKey)}"`);
    }
    cursor = start + link.phrase.length;
  }

  if (cursor < body.length) segments.push(body.slice(cursor));
  return segments;
}
