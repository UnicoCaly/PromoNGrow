# Promo & Grow — Dawn Theme Build Guide

## Project Overview
This is a Shopify Dawn theme customization for **Promo & Grow** (promongrow.com), a custom event display and signage company. The site sells branded tents, backdrops, flags, table throws, wall art, and wraps to small businesses, event planners, and trade show teams.

The design direction is **minimalist white canvas with warm accents** — clean, professional, trust-first. Product photography does the heavy lifting. Color is used sparingly and intentionally.

---

## Design System

### Colors
```
--color-primary:        #1B2838;   /* Deep navy — nav bar, footer, text headings */
--color-primary-light:  #2E3E50;   /* Slate — secondary text */
--color-accent:         #C17A3A;   /* Copper — PRIMARY CTAs only. Every copper element must be clickable. */
--color-accent-hover:   #A8682F;   /* Copper hover state */
--color-bg-primary:     #FFFFFF;   /* White — 70%+ of all surface area */
--color-bg-secondary:   #F7F7F5;   /* Off-white — section breaks, alternating rows */
--color-trust:          #1E6B4A;   /* Trust green — delivery badges, guarantee icons, savings callouts */
--color-text-primary:   #1B2838;   /* Headings, product titles */
--color-text-secondary: #6C757D;   /* Body text, descriptions */
--color-text-muted:     #999999;   /* Captions, metadata, timestamps */
--color-border:         #EEEEEE;   /* Card borders, dividers — very light */
```

### Color Rules
- **Copper (#C17A3A) is ONLY for primary call-to-action elements.** Buttons, not decorations. If it's copper, it must be clickable.
- **Navy (#1B2838) is structural.** Nav bar background, footer background, heading text, step numbers.
- **Trust green (#1E6B4A) is earned.** Only on delivery guarantee badges, verified review markers, savings callouts.
- **White dominates.** When in doubt, the background is white.
- **Off-white (#F7F7F5) breaks monotony.** Use for alternating sections (e.g., "How it works" panel), never for cards on white backgrounds.

### Typography
- **Display / Headings:** `'DM Serif Display', Georgia, serif` — section titles, hero headline, product names on collection pages.
- **Body / UI:** `'DM Sans', system-ui, -apple-system, sans-serif` — body copy, nav links, buttons, product details, footer, metadata.
- **Font loading:** Import from Google Fonts. Preconnect for performance.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&display=swap" rel="stylesheet">
```

### Typography Scale
```
Hero headline:      32px / DM Serif Display / 400 / line-height: 1.15
Section title:      22px / DM Serif Display / 400 / line-height: 1.3
Product title:      16px / DM Sans / 500
Body text:          14-15px / DM Sans / 400 / line-height: 1.7
Small text:         12px / DM Sans / 400
Eyebrow label:      10-11px / DM Sans / 500 / uppercase / letter-spacing: 1.5-2px / color: copper
Button text:        13px / DM Sans / 500
```

### Spacing
```
Section padding:    48px-64px vertical
Section gap:        0 (sections flow edge-to-edge, separated by color alternation or thin dividers)
Card padding:       20px
Card border-radius: 8px
Button padding:     11px 26px
Button radius:      5px
Grid gap:           14-16px
```

### Buttons
```
Primary CTA:        background: copper / color: white / border-radius: 5px / font-weight: 500
Secondary CTA:      background: navy / color: white / border-radius: 5px (used sparingly)
Tertiary / Link:    color: navy / text-decoration: underline / underline-offset: 3px / "→" suffix
Ghost:              border: 1.5px solid navy / color: navy / transparent bg
```

---

## Site Structure

### Navigation (5 items)
1. **Bundles** → /collections/bundles
2. **Tents** → /collections/tents-canopies
3. **Displays** → /collections/backdrop-display (includes wall art)
4. **Accessories** → /collections/accessories (flags + table throws combined)
5. **Wraps** → /collections/wraps

### Announcement Bar
- Background: navy (#1B2838)
- Left: green dot + "5-day delivery guaranteed"
- Right: phone number (844) 883-3308
- Text: 11px, rgba(255,255,255,0.7)

### Homepage Sections (in order)
1. **Announcement bar** — navy, delivery guarantee + phone
2. **Navigation** — white bg, logo left, 5 nav items center, cart right
3. **Hero** — white bg, two-column: headline + CTA left, hero photo right
4. **Trust bar** — below hero: stars + review count | years in business | Made in USA
5. **Category grid** — white bg, 5 equal columns with product photos, category name, starting price
6. **How it works** — off-white (#F7F7F5) rounded panel: 3 steps with numbered circles and arrows
7. **Best sellers** — white bg, product grid (4 across), pulled from a "Best Sellers" collection
8. **Testimonials** — white bg, 3 review cards with stars, quote, name
9. **CTA banner** — navy bg, rounded corners, headline + copper button
10. **Footer** — white bg, logo + tagline left, two link columns right, copyright bottom

### Logo Treatment
Text-based in nav: `PROMO` (navy, weight 500) + `&` (copper, weight 400) + `GROW` (navy, weight 500)
Letter-spacing: 0.5px, font-size: 16px

---

## Component Patterns

### Product Card (Collection pages)
```
- White bg, 0.5px border #eee, border-radius: 8px
- Product image (aspect ratio: 1:1 or 4:3), object-fit: cover
- Product title: 14px DM Sans 500, navy
- Price: 14px DM Sans 400, #6C757D
- Hover: subtle image scale (1.02) with overflow hidden
- No "Add to Cart" on card — clicks through to PDP
```

### Review Card
```
- White bg, 0.5px border #eee, border-radius: 8px, padding: 20px
- 5 copper stars (11px)
- Quote: 12px italic, #6C757D, line-height: 1.6
- Name: 11px DM Sans 500, navy
- No avatar/photo needed
```

### Trust Badge
```
- Inline flex, small green dot (8px circle) + text
- Text: 11px DM Sans, #999
- Used for: delivery guarantee, review count, "Made in USA"
```

---

## Technical Notes

### Dawn Theme
- Built on Shopify's Dawn theme (free, open-source)
- All customizations via section schemas, CSS overrides, and minimal Liquid changes
- Do NOT modify core Dawn Liquid files when possible — use section overrides and custom sections

### File Structure for Custom Work
```
assets/
  custom-styles.css          ← All design system overrides
  custom-scripts.js          ← Minimal JS (scroll, interactions)
sections/
  custom-hero.liquid         ← Homepage hero section
  custom-categories.liquid   ← Category grid section
  custom-how-it-works.liquid ← 3-step process section
  custom-testimonials.liquid ← Review cards section
  custom-cta-banner.liquid   ← Navy CTA banner section
snippets/
  product-card-custom.liquid ← Product card override
  review-card.liquid         ← Testimonial card component
layout/
  theme.liquid               ← Font loading, CSS include
config/
  settings_schema.json       ← Theme settings for colors
templates/
  index.json                 ← Homepage section order
```

### Performance
- Lazy load all images below the fold
- Preconnect Google Fonts
- No unnecessary JavaScript — CSS transitions only for hover/interaction states
- Target: Lighthouse Performance 90+ on mobile

### SEO
- Page title: "Promo & Grow | Custom Event Displays — 5-Day Delivery"
- Meta description: "Custom tents, backdrops, flags, and signage for events and trade shows. Produced and delivered in 5 business days. 4.8★ rated."
- All images need descriptive alt text referencing the product + use case

---

## Brand Voice (for any copy generation)
- Confident but not aggressive
- Short sentences. Direct.
- Lead with the benefit, not the feature
- "5 days" is the hero stat — use it everywhere
- Never use fake urgency (countdown timers, "only X left")
- Reviews and real results > marketing claims
