# PNG Visual System — Detailed Reference

Read this when you need specifics beyond the SKILL.md summary.

## Palette

| Token | Hex | RGB | Use |
|---|---|---|---|
| Navy | `#1B2838` | 27, 40, 56 | Primary dark background, headline type on light |
| Off-White | `#F7F7F5` | 247, 247, 245 | Type on dark, secondary background |
| Copper | `#C17A3A` | 193, 122, 58 | Accent: thin rules, swipe arrows, one emphasis word per frame |
| Trust Green | `#1E6B4A` | 30, 107, 74 | Made-in-USA ticks, warranty checks, review stars |
| Warm Stone | `#E8E2D8` | 232, 226, 216 | Very sparingly — alt background for client quote slides only |

**Rules:**
- No pure white (`#FFFFFF`) — use off-white. Pure white vibrates on mobile.
- No pure black (`#000000`) — use navy. Black kills the editorial feel.
- Copper is a spice, not a base. One copper element per frame, max two.
- Never put trust green and copper on the same frame.

## Typography

**DM Serif Display** (headlines, numerals in spec blocks)
- Regular weight only. The display cut already has the authority.
- Tracking: -10 to -20 for headline sizes 60pt+.
- Leading: 0.95-1.05 for tight stacked headlines, 1.1 for 2-line.
- Sentence case or Title Case. Never all-caps.

**DM Sans** (everything else)
- Weights: Regular (body), Medium (sub-headings), Bold (eyebrow labels, CTAs).
- Tracking: default for body, +80 to +120 for all-caps eyebrows.
- Leading: 1.35-1.45 for body, 1.2 for sub-headings.

**Scale (1080×1080 square):**
- Eyebrow: 22-28pt, DM Sans Bold, all-caps, tracked
- Headline (cover): 72-96pt, DM Serif Display
- Headline (interior slides): 48-64pt
- Subtitle: 32-40pt, DM Sans Regular
- Body: 22-28pt, DM Sans Regular
- Footer: 16-20pt, DM Sans Regular

**Scale (1080×1350 portrait / carousel slides):** use the same scale — portrait just gives more vertical room, don't pump sizes up.

## Composition

**Safe area / margins (1080 square):**
- Left: 80-100px
- Right: 80px
- Top: 80px
- Bottom: 100-120px (accommodates wordmark and swipe arrow)

**Alignment:**
- Headlines: left-aligned, always.
- Body and subtitle: left-aligned.
- CTAs / swipe arrows: right-aligned to right margin.
- Centered type is allowed only for a single-word "NUMBER" spec frame (e.g., a big "20 YEARS" callout).

**Baseline grid:** 8px. Everything snaps to 8px multiples for vertical rhythm.

**Decorative elements (allowed list — nothing else):**
- Thin horizontal rule, 1-1.5pt, copper or off-white
- Swipe arrow (→), copper, DM Sans regular
- Small geometric marker (a thin 12px copper square) for bullet callouts
- Photo frame: no frame — photos bleed to margin edges

**Forbidden:**
- Gradients of any kind
- Drop shadows
- Glowing effects, neon
- Outlined emoji / decorative emoji clusters
- Stock "trade show booth with diverse models smiling"
- AI-looking photography
- Fisheye, selective color, double-exposure

## Photo direction

**Do:**
- Real booth shots from real events — even phone quality is fine if the composition is clean
- Daylight, neutral white balance, slight underexposure preferred over blown highlights
- Tent/booth as hero, people as scale reference
- High angle or eye-level, never dutch tilt

**Don't:**
- Heavy filters, Instagram presets, color grading
- Lens flares, bokeh foreground
- People posing at camera — candid working shots only

**When no photo is available:** type-only slide. Restrained type beats a weak photo every time.

## Slide patterns (copy these exactly)

### Cover slide (square)
```
[80px top margin]
EYEBROW LABEL (pillar · framework)  ← 24pt, DM Sans Bold, all-caps, copper
─────────                             ← 1pt copper rule, 80px wide
[48px gap]
The headline in serif.                ← 80pt, DM Serif Display, off-white
It can be two lines.                     leading 1.0, left aligned
[32px gap]
A subtitle in plain English that       ← 32pt, DM Sans, off-white @85%
expands the headline.                    leading 1.4
[flex space]
promongrow.com              swipe →    ← 18pt DM Sans / copper arrow
[100px bottom margin]
```

### Teaching slide (carousel interior)
```
EYEBROW (Move 1 · Pre-show)
Headline stating the single move.
2-3 lines of body expansion. Specific. No marketing language.
[optional: single image, bleed to margins]
[footer: slide 2 / 7             swipe →]
```

### Product spec slide
```
Full-bleed product photo (top 60% of frame)
─────────
MODEL NAME · SPEC
Headline stating the key spec ("Rated 50 mph sustained").
Why it matters, one sentence.
promongrow.com/[product]                    swipe →
```

### Client quote slide
```
Warm stone background (#E8E2D8)
EYEBROW: CLIENT STORY
"Pull quote in serif, two to four lines, left aligned"     ← 48pt DM Serif
                                                              leading 1.1
— First Last, Title, Company                               ← 22pt DM Sans
[optional: tiny brand logo or photo thumbnail]
```

### CTA slide
```
Navy background
EYEBROW: NEXT STEP
One-line serif headline with the ask.
One-line subtitle with the specific URL or phone.
promongrow.com/quote                         (844) 883-3308
```

## Exceptions

These rules exist to create a recognizable system. When breaking one produces a materially better result for a specific message, break it — but name what you're breaking and why. Don't quietly drift.
