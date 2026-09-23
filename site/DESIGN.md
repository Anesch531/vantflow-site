# DESIGN.md — VANTFLOW

> Category: B2B services · SEO agency
> Light-first, technical, restrained. Slate neutrals, one signal-blue accent, monospace
> for anything that is data. Reads as an engineering practice, not a creative agency.

**Status:** design contract for the rebuild. Written in T01 from decisions #15, #16, #19,
#20 and the brand voice in PROJECT.md. Once T02 begins, this file is **read-only input** —
components consume its tokens; nobody edits it as a side effect of building a page.
Changing the visual system is its own task.

**Non-negotiables inherited from the decision log**
- Light mode only. No dark theme in Phase 1 (#16).
- Typographic wordmark only — no symbol (#20).
- An Arabic companion face is a requirement, not an afterthought (#19, T14).
- Every colour, size, space and radius in components comes from the tokens below.
  No ad-hoc hex, no one-off `px`.

---

## 1. Visual Theme & Atmosphere

The site should feel like a well-kept engineering document that happens to be a website:
a near-white page, a visible but quiet grid, generous line-length discipline, and
information carried by type rather than decoration. Colour is almost entirely achromatic —
a cool slate ramp — punctuated by a single saturated signal blue that means exactly one
thing: *this is the action*. Nothing else is blue.

Monospace is the tell. Labels, metadata, numbers, findings, route names, dates and any
"evidence" element are set in the mono face. It signals that a value was measured, not
asserted — which is the brand promise ("every fix carries a reason") made visible. Body
prose stays in the grotesque so reading is comfortable.

Surfaces are flat. Depth comes from hairline borders and a two-step background shift, not
from shadows. Motion is minimal and functional. The whole thing should look *deliberate*
and slightly under-designed rather than polished into anonymity — that restraint is what
separates it from the typical SEO agency site.

**Key characteristics**
- Page canvas is near-white (`--surface-0`), sections alternate to one step of slate
  (`--surface-1`); a third step exists only for code/finding blocks.
- One accent, signal blue, used for primary actions, links and focus. Never for large
  fills or decoration.
- Hairline borders at slate-200, 1px, everywhere structure is needed. No drop shadows on
  static content.
- Mono for every measured or structural value; grotesque for prose.
- A 4px base unit; an 8-column grid on desktop that is *visible* in section layout (aligned
  edges, consistent gutters), not drawn as lines.
- Large headlines, tight tracking, calm weight. No gradients, no glassmorphism, no
  illustrations.

---

## 2. Color Palette & Roles

All values are sRGB hex with a target of WCAG 2.2 AA on every text/background pair listed.
The slate ramp is cool (a touch of blue in the greys) so the accent reads as a member of
the family rather than an intruder.

### Slate ramp (neutrals)
| Token | Hex | Role |
|---|---|---|
| `--slate-0` | `#FFFFFF` | Page canvas |
| `--slate-50` | `#F6F8FA` | Alternate section surface, table stripes |
| `--slate-100` | `#EEF1F5` | Code / finding block background |
| `--slate-200` | `#D9DEE6` | Hairline borders, dividers |
| `--slate-300` | `#B8C0CC` | Disabled text, subtle rules |
| `--slate-500` | `#6B7685` | Secondary text, metadata |
| `--slate-700` | `#3A4453` | Body text |
| `--slate-900` | `#111827` | Headlines, wordmark, primary text |

### Signal blue (accent)
| Token | Hex | Role |
|---|---|---|
| `--signal-600` | `#1D4ED8` | Primary buttons, links, active state |
| `--signal-700` | `#1E40AF` | Hover / pressed |
| `--signal-100` | `#DBEAFE` | Accent tint — selected row, subtle highlight |
| `--focus` | `#1D4ED8` | 2px focus ring, always visible |

### Semantic (used sparingly — for audit findings only)
| Token | Hex | Role |
|---|---|---|
| `--ok` | `#15803D` | Passed check |
| `--warn` | `#B45309` | Needs attention |
| `--fail` | `#B91C1C` | Failed check |

### Roles
- **Surfaces:** `--surface-0` = `--slate-0`; `--surface-1` = `--slate-50`;
  `--surface-2` = `--slate-100`.
- **Text:** `--text-primary` = `--slate-900`; `--text-body` = `--slate-700`;
  `--text-muted` = `--slate-500`.
- **Border:** `--border` = `--slate-200`; `--border-strong` = `--slate-300`.
- **Action:** `--action` = `--signal-600`; `--action-hover` = `--signal-700`.

### Contrast check (must hold in every component)
- `--slate-900` on `--slate-0` ✓ AAA. `--slate-700` on `--slate-0` ✓ AA (body).
- `--slate-500` on `--slate-0` ✓ AA for text ≥ 14px regular — **do not** use it below that.
- White on `--signal-600` ✓ AA. `--signal-600` on `--slate-0` ✓ AA (links).
- `--slate-300` is **not** text on white. Decorative and disabled only.

### What not to do
- No second accent. No gradients. No blue backgrounds larger than a button.
- No pure `#000` text; slate-900 is the darkest value.
- No dark mode, even as a "quick toggle".

---

## 3. Typography Rules

### Font families (self-hosted, subset, `font-display: swap`)
| Role | Face | Fallback stack |
|---|---|---|
| Body & headings (Latin) | **Inter** | `system-ui, -apple-system, "Segoe UI", sans-serif` |
| Mono — labels, numbers, findings | **JetBrains Mono** | `ui-monospace, "SF Mono", Menlo, Consolas, monospace` |
| **Arabic companion** (all Arabic text, T14) | **IBM Plex Sans Arabic** | `"Noto Sans Arabic", system-ui, sans-serif` |
| French | Inter — verify diacritics and `œ` render in the subset | — |

Rules for the Arabic face: it must be loaded on `[lang="ar"]` pages only, share the same
size scale (Arabic often needs +5–10% size for equal optical weight — tune in T14, do not
guess now), and never fall back to a Latin face. Numbers in Arabic pages stay in the mono
face using Western digits unless a later decision says otherwise.

### Scale (rem, base 16px; line-height as ratio)
| Token | Size | LH | Tracking | Use |
|---|---|---|---|---|
| `--text-display` | 3.5rem / 56px | 1.05 | -0.025em | Homepage hero only |
| `--text-h1` | 2.5rem / 40px | 1.1 | -0.02em | Page titles |
| `--text-h2` | 1.75rem / 28px | 1.2 | -0.015em | Section titles |
| `--text-h3` | 1.25rem / 20px | 1.3 | -0.01em | Card / block titles |
| `--text-body` | 1.0625rem / 17px | 1.6 | 0 | Prose |
| `--text-small` | 0.9375rem / 15px | 1.5 | 0 | Secondary prose, captions |
| `--text-mono` | 0.875rem / 14px | 1.5 | 0 | Labels, metadata, numbers, findings |
| `--text-mono-sm` | 0.8125rem / 13px | 1.4 | 0.02em | Eyebrows, tags — uppercase allowed |

Mobile (< 768px): display drops to 2.5rem, h1 to 2rem, h2 to 1.5rem. Body never shrinks
below 16px.

### Weights
- Inter: 400 body, 500 UI/labels, 600 headings. **No 700+** — heavy weights fight the
  restrained tone.
- JetBrains Mono: 400 only, 500 for a single emphasised value.
- IBM Plex Sans Arabic: 400 body, 600 headings.

### Principles
- Measure: 60–72 characters for prose. Enforce with `max-width: 68ch` on text containers.
- Headlines are sentence case. Eyebrows may be uppercase mono with +0.02em tracking.
- Anything that is a *measurement* — a percentage, a time, a count, a route — is mono. This
  is a hard rule, not a preference.
- Never justify text. Never centre body copy. Centre only the hero headline if at all.

---

## 4. Component Stylings

### Buttons
- **Primary:** `--action` background, white text, `--radius-sm`, 44px min height,
  `0 16px` padding, Inter 500 at `--text-small`. Hover → `--action-hover`. Focus → 2px
  `--focus` ring with 2px offset. No shadow.
- **Secondary:** transparent, 1px `--border-strong`, `--text-primary` text. Hover → 
  `--surface-1`.
- **Link-style:** `--action` text, underline on hover only, mono when the link is a route
  or a data reference.
- There is exactly **one primary button per viewport**. It is always the CTA from
  decision #18.

### Cards / blocks
- `--surface-0` on a `--surface-1` section (or the inverse), 1px `--border`,
  `--radius-md`, `--space-6` padding. No shadow, no hover lift.
- Card title `--text-h3`; a mono eyebrow above it for category or metric.

### Finding block (the signature component — audit results)
- `--surface-2` background, 1px `--border`, `--radius-sm`, left rule 3px in the semantic
  colour (`--ok` / `--warn` / `--fail`).
- Layout: mono label row (check name · status · measured value) then a one-sentence
  reason in body type. **Every finding carries a reason** — the component enforces it by
  having a required reason slot.

### Tables (data, pricing)
- Hairline row borders `--border`, header row in mono `--text-mono-sm` uppercase on
  `--surface-1`. Numeric columns right-aligned, mono. No zebra by default; `--slate-50`
  stripe only for tables > 8 rows.

### Inputs (Phase 2 — none ship in Phase 1)
- 44px height, 1px `--border-strong`, `--radius-sm`, focus ring as buttons. Recorded here
  so a later form matches the system.

### Navigation
- Header: 64px, `--surface-0`, 1px bottom `--border`. Wordmark left, nav centre-right,
  the single primary button far right. One dropdown ("Services") grouped **Services /
  Industries** per decision #22.
- Footer: `--surface-1`, mono small for legal and locale links.

### Wordmark
- "VANTFLOW" in Inter 600, `--slate-900`, tracking -0.03em, all caps. Height 20px in the
  header. Favicon: the letter "V" in the same face on `--slate-900`, 32px grid. No symbol.

---

## 5. Spacing & Layout

- **Base unit 4px.** Scale: `--space-1` 4 · `-2` 8 · `-3` 12 · `-4` 16 · `-6` 24 ·
  `-8` 32 · `-12` 48 · `-16` 64 · `-24` 96 · `-32` 128.
- **Radii:** `--radius-sm` 4px (buttons, inputs, finding blocks) · `--radius-md` 8px
  (cards) · nothing larger. No pills except semantic status tags at 999px.
- **Container:** max 1200px, gutters `--space-6` on mobile, `--space-8` from 768px.
- **Grid:** 8 columns from 1024px, 4 from 768px, single column below. Gutter 24px. The grid
  governs alignment; content does not always fill it — leaving columns empty is the
  restraint.
- **Section rhythm:** `--space-24` between sections on desktop, `--space-16` on mobile.
  Inside a section, `--space-8` between blocks, `--space-4` between related lines.
- **Direction:** all spacing and alignment uses **logical properties**
  (`margin-inline-start`, `padding-inline`, `inset-inline-end`) so Arabic RTL (T14) is
  a `dir="rtl"` flip on `<html>`, not a re-layout. This is mandatory from T02 onward.

---

## 6. Motion

- Reduce to the functional minimum. Hover/focus transitions 120ms ease-out on colour and
  border only. No entrance animations, no parallax, no scroll-triggered reveals.
- Respect `prefers-reduced-motion`: all transitions become instant.

---

## 7. Accessibility floor (part of every task's definition of done)

- Colour pairs above hold AA; interactive states hold AA on their own.
- Focus ring visible on every focusable element, never removed.
- One `<h1>` per page; landmarks `header / nav / main / footer`.
- Alt text on every image; decorative images `alt=""`.
- Tap targets ≥ 44px. Body ≥ 16px on mobile.
- Arabic pages get their own review pass — RTL is the highest-error surface.

---

## 8. Voice, for any words a component ships with

Plain, direct, evidence-driven. Sentence case. No superlatives — never "world-class",
"cutting-edge", "best-in-class". Outcomes over adjectives. The headline is
*every fix carries a reason*; the old "Copilot, not autopilot" phrasing lives only on
About as brand history (decision #6). Never invent a client, a metric, a testimonial or a
ranking (PROJECT.md §5).
