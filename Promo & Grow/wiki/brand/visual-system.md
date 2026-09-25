# Visual System

**Summary**: The canonical visual identity — palette, typography (Cooper Black + Fraunces + Inter, canon confirmed 2026-07-29), spacing/shape/depth rules, imagery direction, and logo usage. Tokens live in `Brand/Design System/colors_and_type.css`; the full spec is the Brand Book.

**Type**: brand

**Sources**: Brand/Design System (README.md, colors_and_type.css, exported 2026-07-23 from the claude.ai/design project) · PNG-Brand-Strategy-and-Voice-Brief.md · Carlos decision 2026-07-29 (typography canon).

**Last updated**: 2026-07-29.

---

## Where the system lives

- **Tokens (single source of truth for values):** `Brand/Design System/colors_and_type.css` — `--pg-*` custom properties for color, type, spacing, radii, shadows, motion.
- **The Brand Book (full identity system, v1.0):** `Brand/Brand Book/PNG-Brand-Book.html` (+ PDF) — foundation, personas, proof & claims, voice, bilingual craft, visual system, applications, governance.
- **Browsable spec cards:** `Brand/Design System/index.html` → `preview/*.html` (22 cards incl. positioning, bilingual, claims).
- **Agent skill:** `Brand/Design System/SKILL.md` — hard rules for generating on-brand assets.

## Palette

Core (source: colors_and_type.css):

| Token | Hex | Role |
|---|---|---|
| Navy | `#1B2838` | Primary text, nav, dark surfaces — the brand's "stage" |
| Navy deep | `#151F2C` | Announcement bar, pressed navy |
| Copper | `#C17A3A` | CTAs/accents only — **every copper element is a click target** |
| Copper dark | `#A66629` | CTA hover; copper text that must pass AA contrast |
| Trust green | `#1E6B4A` | Earned trust only (delivery badge, guarantee dot, savings) — never a CTA |
| Cream | `#F5F2ED` | Warm section breaks |
| Cream soft | `#F7F7F5` | Lighter section break |
| Cream deep | `#E8E4DD` | Photo placeholders |
| Paper | `#FFFFFF` | Primary surface |
| Danger | `#B23A48` | Errors/destructive only |

Surface ratio: **white 70% · cream ~20% · navy ~8% · copper ~2% · green trace** (source: Brand/Design System/README.md). Text scale: `#1B2838` / `#495057` / `#6C757D` / `#999999`.

Accessibility (computed 2026-07-29): navy on white 14.9:1; green on white 6.4:1 (AA body); copper on white 3.4:1 — large display text and CTA fills only, never body copy (11px eyebrows in copper are decorative, below AA); copper dark passes AA at 4.6:1 — use it wherever label text must be accessible.

Print: CMYK conversions are naive starting points (navy ≈ C52 M29 Y0 K78, copper ≈ C0 M37 Y70 K24, green ≈ C72 M0 Y31 K58) — always matched against a printed proof (see [[print-color-and-material-limits]]).

## Typography — canon

**Decision (Carlos, 2026-07-29): Cooper Black (display) + Fraunces (headings) + Inter (body/UI) is the canonical stack**, resolving the drift between the July Design System and the earlier DM Serif Display + DM Sans working system (source: PNG-Brand-Strategy-and-Voice-Brief.md §8A recorded the DM stack as "current working system, evolvable").

- **Display:** Cooper Black (self-hosted `cooper-black.woff2`, on the live theme since 2026-06-24; ads aligned 2026-07-12 — see [[png-voice]]). Web fallback Alfa Slab One. The wordmark itself is always the PNG asset, never retyped.
- **Headings:** Fraunces 500–600, 18–32px, sentence case, paired with the uppercase copper eyebrow (Inter 500, 10–11px, 0.16em tracking) — the brand's most repeated motif. Fallback Georgia.
- **Body/UI:** Inter 400/500, 11–14px (600 loaded for occasional UI emphasis; the semantic tokens use 400/500).
- **Legacy:** DM Serif Display = print-collateral display face (catalog/proof sheets) + theme fallback behind Cooper. DM Sans = still the live theme's body face; **migrating the theme body to Inter is an open item (Claude Code lane)**.
- Scale notes: nothing below 10px; no sizes between 32px and the 64px display tier.

## Shape, depth, motion

- 4-pt spacing scale (4→96px); sections are 12px-radius rounded tiles — the signature layout move; content max 1200px.
- Radii: buttons 5px, cards/inputs 8px, sections 10–12px. Hairline borders 0.5px at 8% navy (10% white on dark).
- Shadows: three soft levels (card/lift/pop) + one hard signature — 3px navy offset, display type and logo only. Cards rest shadowless.
- Motion: fade + 4–8px translate, 120–280ms; hover darkens copper to copper-dark; press scales 0.98. No gradients, patterns, backdrop blur, parallax, autoplay carousels, or skeleton shimmer.

## Imagery & iconography

- Photography: real product, real events, warm natural light; no studio cutouts on marketing pages (PDP-only); placeholders warm grey `#E8E4DD` dashed.
- Icons: only ★ (copper), → and the green status dot exist today. Lucide 1.5px stroke is **proposed, not adopted** (source: Brand/Design System/README.md).

## Logo rules

Six PNG lockups in `Brand/Design System/assets/` (stacked · horizontal · horizontal-tight · outline · alt · monogram) plus **SVG vector versions in `assets/vector/`** (vectorized 2026-07-30 via Adobe Illustrator API, transparent backgrounds, for hi-res print). Never retyped, never recolored; stays cream on navy. Min sizes: stacked ≥200px, horizontal ≥240px, monogram below ~120px. Clear space (set in Brand Book v1.0): the ampersand height on all sides.

## Related pages
- [[png-voice]]
- [[brand-identity-system]]
- [[positioning-and-personas]]
- [[print-color-and-material-limits]]
- [[theme-build-status]]
