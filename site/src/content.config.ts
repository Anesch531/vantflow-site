/**
 * content.config.ts — THE content-file contract (decision #31; review finding 2d).
 * Frozen after T02.
 *
 * Every page's copy lives in src/content/pages/<locale>/<slug>.md. The schema is STRICT
 * and the six SEO-contract fields have NO defaults: they may be empty, but they may not
 * be absent. A file missing any of them fails the build. This is what keeps the deferred
 * SEO pass (decision #14) from becoming a rewrite of every file in three languages.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { locales } from './lib/i18n';
import { routeKeys } from './lib/routes';

const localeEnum = z.enum(locales);
const routeEnum = z.enum(routeKeys as [string, ...string[]]);

const schemaTypes = [
  '', // not yet decided — allowed until the Phase 2 schema pass
  'WebPage',
  'AboutPage',
  'ContactPage',
  'Service',
  'CollectionPage',
  'Article',
  'Organization',
  'FAQPage',
  'PriceSpecification',
] as const;

export const pageSchema = z
  .object({
    /* ---- Identity ---- */
    locale: localeEnum,
    /** Key into src/lib/routes.ts. Never a literal path (slugs are provisional until T18). */
    route: routeEnum,

    /* ---- The six contract fields. Present always; empty allowed until the SEO pass. ---- */
    /** <title> and <h1> source. */
    title: z.string(),
    /** Meta description. '' = not written yet. */
    description: z.string(),
    /** Absolute canonical URL, or '' = compute from site + route at build. */
    canonical: z.string(),
    /** hreflang alternates. [] until T13/T14 add the locale pages. */
    alternates: z.array(
      z.object({
        locale: localeEnum,
        href: z.string(),
      }),
    ),
    /** JSON-LD @type for the Phase 2 schema pass. '' = undecided. */
    schemaType: z.enum(schemaTypes),
    /** true on placeholders and system pages; every T03+ page must ship false. */
    noindex: z.boolean(),
  })
  .strict();

export type PageFrontmatter = z.infer<typeof pageSchema>;

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: pageSchema,
});

export const collections = { pages };
