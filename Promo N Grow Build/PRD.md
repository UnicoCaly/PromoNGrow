# Promo & Grow — Product Requirements Document (PRD)

## Project Summary
Rebuild promongrow.com on Shopify's Dawn theme with a minimalist white-canvas design, navy/copper accents, and a conversion-optimized UX. The site sells custom event displays (tents, backdrops, flags, table throws, wall art, wraps) to small businesses, event planners, and trade show teams.

**Goal:** A professional storefront that converts cold traffic and supports passive revenue with minimal owner involvement.

**Theme:** Shopify Dawn (free, open-source)
**Design system:** See CLAUDE.md for colors, typography, spacing, and component patterns.
**Repo:** github.com/UnicoCaly/PromoNGrow

---

## Target Audience

### Primary — Small business owner
- First farmers market, trade show, or pop-up event
- Googles "custom tent with logo" or "event booth printing"
- Budget-conscious but wants to look professional
- Needs the ordering process to be dead simple
- AOV: $500–$1,200 | Decision: solo, fast | Cares about: price, speed, looking pro

### Secondary — Event planner / marketing manager
- Booking a booth at a conference or planning a company activation
- Has brand guidelines and print-ready files
- Knows what they want — needs fast, reliable execution
- May need to get approval from a boss before purchasing
- AOV: $1,200–$3,000 | Decision: needs internal approval | Cares about: turnaround, quality, proof process

### Tertiary — Repeat / reorder buyer
- Has ordered before, knows the product
- Coming back for replacement canopies, new walls, or referring a colleague
- Wants it to be frictionless
- AOV: $300–$800 | Decision: instant | Cares about: speed, ease, referral perks

---

## Brand Voice

### We sound like
- A knowledgeable shop foreman — clear, direct, no jargon
- Confident but not pushy — "here's what you need" energy
- Short sentences. Benefit first, feature second.
- Warm enough to feel human, professional enough to trust with $2K

### We never sound like
- Vistaprint — generic, template-driven, impersonal
- Desperate — no fake urgency, countdowns, or "only 3 left!"
- Startup-y — no "we're disrupting the signage industry"
- Overly casual — no "hey friend!" or excessive exclamation marks

### Voice examples
- Hero headline: "Your brand, built to show up."
- CTA buttons: "Shop bundles" / "Get a quote" / "View details" / "Add to cart — $895"
- Product opener: "Full-color custom printing on heavy-duty aluminum. Set up in minutes, delivered in 5 days."
- Footer CTA: "Ready to stand out? 10% off your first order. No gimmicks."

### Repeating trust phrases (use on every page)
- "5-day delivery guaranteed"
- "Free proof on every order"
- "Made in the USA"
- "4.8★ from 19 Google reviews"
- "20+ years in production"
- "Design not included — we proof before production"

---

## Site Structure

### Navigation (5 items + CTA)
| Position | Label | Subtitle | Link |
|----------|-------|----------|------|
| 1 | Bundles | Save 15%+ | /collections/bundles |
| 2 | Tents | Free 3D preview | /collections/tents-canopies |
| 3 | Displays | SEG + popup | /collections/backdrop-display |
| 4 | Accessories | Flags, throws + | /collections/accessories |
| 5 | Wraps | Walls + vehicles | /collections/wraps |
| CTA | Get a quote | — | /pages/contact or modal |

### All pages
- Homepage
- Collection pages (5: bundles, tents, displays, accessories, wraps)
- Product detail pages
- Contact / Get a quote
- Design resources (Canva templates, AI prompt guides)
- Shipping policy
- Refund policy
- Privacy policy
- Terms of service

---

## Page Specifications

### Header
**Pattern:** Trust strip + benefit-led navigation + persistent copper CTA

**Trust strip (top bar):**
- Background: #F7F7F5 (off-white)
- Centered content: ★★★★★ 4.8 rating | 🟢 5-day delivery | Made in the USA | Free proof on every order
- Font: 11px DM Sans, color #999
- Stars: copper (#C17A3A)
- Green dot: #1E6B4A (8px circle)
- Dividers: #e0e0e0

**Navigation bar:**
- Background: white
- Border-bottom: 0.5px solid #f0f0f0
- Logo (left): "PROMO" (navy, 500) + "&" (copper, 400) + "GROW" (navy, 500), 16px, letter-spacing 0.5px
- Nav items (center): 5 items, each with title (12px, 500, navy) and subtitle (10px, 400, #999 or copper for Bundles)
- Right side: Search (12px, #999) + "Get a quote" (copper button, 12px) + Cart (12px, navy)

**Sticky behavior on scroll:**
- Trust strip collapses (hidden)
- Subtitles collapse (hidden)
- Nav simplifies to: logo + 5 plain text links + search + copper CTA + cart
- Subtle shadow: 0 1px 3px rgba(0,0,0,0.04)

**Mobile nav:**
- Hamburger menu
- Full-screen overlay with nav items
- Phone number and "Get a quote" button prominent
- Trust badges at bottom of overlay

---

### Homepage

**Section order:**
1. Announcement bar (trust strip — part of header)
2. Navigation (part of header)
3. Hero section
4. Trust bar
5. Category grid
6. How it works
7. Best sellers (product grid)
8. Testimonials
9. CTA banner (built into footer)
10. Footer

**Section 3 — Hero:**
- Background: white
- Layout: two columns — text left (60%), hero photo right (40%)
- Eyebrow: "Custom event displays" — 10px, copper, uppercase, letter-spacing 2px
- Headline: "Your brand, built to show up." — DM Serif Display, 32px, navy, line-height 1.15
- Subtext: "Custom tents, backdrops, flags, and signage — produced and delivered nationwide in 5 business days." — 14px, #6c757d, line-height 1.7
- Primary CTA: "Shop bundles" — copper button
- Secondary CTA: "Get a quote →" — underline link, navy, no button
- Hero image: real product photo (tent setup at an event), border-radius 8px

**Section 4 — Trust bar:**
- Below hero, separated by thin divider (0.5px #f0f0f0)
- Inline flex: ★★★★★ 4.8 · 19 reviews | 20+ years in production | Made in the USA
- Font: 11px, #999
- Stars: copper

**Section 5 — Category grid:**
- Header: "Shop by category" (DM Serif Display, 20px) + "View all →" (12px, copper)
- 5 equal columns
- Each card: product photo (square, border-radius 8px) + category name (13px, 500, navy) + subtitle (11px, #999 or green for savings)
- Bundles subtitle: "Save 15%+ →" in trust green
- Hover: subtle image scale 1.02

**Section 6 — How it works:**
- Background: off-white (#F7F7F5) rounded panel (border-radius 10px), inset from page edges
- Headline: "Three steps. Five days. Done." (DM Serif Display, 20px)
- Subtext: "From upload to unboxing — we handle everything in between."
- 3-column grid with step circles:
  - Step 1: outlined circle (navy border), "Upload artwork" — "Order online. Upload files. Need help? We design too."
  - Step 2: outlined circle (navy border), "We produce + proof" — "Digital proof for approval. Then straight to production."
  - Step 3: filled circle (copper), "Delivered in 5 days" — "To your door or your venue. Nationwide guaranteed."
- Arrows between steps: → in #ddd
- Mobile: stack vertically, hide arrows

**Section 7 — Best sellers:**
- Pull from Shopify collection "Best Sellers"
- 4-column product grid
- Standard product cards (see Component Patterns in CLAUDE.md)

**Section 8 — Testimonials:**
- Header: "What our clients say" (DM Serif Display, 20px) + "4.8 average from 19 Google reviews" (12px, #999)
- 3-column review cards
- Each card: 5 copper stars + italic quote (12px, #6c757d) + author name (11px, 500, navy)
- Reviews to use:
  1. Endy S. — "Very friendly, accommodating, and professional quality finish. My go-to for all event branding."
  2. Greg B. — "Excellent advice, multiple options, excellent pricing. Helped our startup have a very successful first year."
  3. Tiffany P. — "Turn around time was amazing, the work was flawless. Friendly, reliable, quality and time efficient."

---

### Collection Page

**Pattern:** Hero banner + comparison list grid

**Hero banner:**
- Background: #F7F7F5, border-radius 8px
- Layout: text left, category photo right
- Eyebrow: category name in copper, uppercase
- Headline: category-specific tagline (DM Serif Display, 22px)
- Subtext: 1-2 lines of specs/benefits (12px, #999)
- Per-category content:
  - Tents: "Your brand's first impression." / "Full-color dye sublimation on 600D polyester. Heavy-duty aluminum frames."
  - Bundles: "Everything your event needs. One order." / "Save 15%+ when you bundle tent, walls, and accessories."
  - Displays: "Your backdrop. Your stage." / "SEG lightboxes, popup displays, and step-and-repeats."
  - Accessories: "The finishing touches." / "Flags, table throws, and everything in between."
  - Wraps: "Cover every surface." / "Vinyl, fabric, and specialty wraps for walls, vehicles, and more."

**Product count + sort/filter:**
- Left: "X products" (12px, #999)
- Right: "Sort by price" + "Filter" pills (11px, border, rounded)

**Product list (comparison grid):**
- Each product is a horizontal row card
- Layout: thumbnail (80x80px) | product name + specs | price + delivery badge | copper "View" button
- Best seller gets: 2px copper border + "Best seller" badge (copper pill, absolute positioned top-left)
- Savings callout: "Save $X" in copper below price where applicable
- Delivery badge: "5-day delivery" in trust green (10px)

**Mobile:** rows stack to card layout (image top, info below, full-width button)

---

### Product Page

**Pattern:** Gallery + package tier configurator (above fold) + tabbed content (below fold)

**Breadcrumb:**
- "Bundles / 10' x 10' tent + table throw bundle" — 10px, #999

**Above the fold — two columns:**

*Left column (60%):*
- Main product image: aspect-ratio 4:3, border-radius 8px
- Thumbnail strip below: 4 thumbnails, 52x52px, active thumbnail has 1.5px navy border
- Image hover: subtle zoom

*Right column (40%) — Configurator:*
- Product title: DM Serif Display, 18px, navy
- Star rating: ★★★★★ 4.8 (19 reviews) — 11px
- Trust badges: row of pills — "5-day delivery" / "Free proof" / "Made in USA"
- Eyebrow: "Choose your package" — copper, uppercase, 10px

**Package tiers (3 cards in a row):**
- Essential: price + basic contents, outline border, "Select" outline button
- Pro (default/popular): price + upgraded contents, 2px copper border, "Popular" copper pill badge, copper "Select" button
- Complete: price + full contents, outline border, "Select" outline button
- Each tier shows: tier name (10px uppercase), price (15px, 500), 2-3 line contents (9px, #999)

**Add-ons (checkbox list below tiers):**
- Each add-on: checkbox + label + price (right-aligned)
- Examples: Side walls (+$180), Attachable flags (+$120), Rush production (+$238 in copper)
- Checkboxes: 14x14px, 1.5px #ddd border, border-radius 3px

**Subtotal + CTA:**
- Divider line above
- "Subtotal" (12px, #999, left) + dynamic price (22px, 500, navy, right)
- "Add to cart" — full-width copper button, 13px, 500
- Below button: "Design not included. We proof every order before production." — 10px, #999, centered

**Below the fold — tabbed content:**

Tab bar: "What's included" | "Specs" | "Design guide" | "FAQ" | "Reviews"
- Active tab: 12px, 500, navy, 1.5px navy bottom border
- Inactive: 12px, #999

*What's included tab:*
- Two-column grid on off-white cards
- Left card — "In the box": green checkmark list (canopy, frame, carry bag, stake kit, free proof)
- Right card — "How it works": numbered list (select package → upload artwork → proof approval → production → delivery)

*Specs tab:*
- Simple key-value table: material, print method, frame type, weight, setup time, wind rating

*Design guide tab:*
- Link to design resources page
- Quick tips: file format requirements, resolution, bleed/safe area
- Download links for templates

*FAQ tab:*
- Accordion with expand/collapse
- Questions:
  1. Can I order fabric only (no frame)?
  2. What file format do you need for printing?
  3. Do you offer design services?
  4. What's the turnaround with rush production?
  5. Can you ship directly to my venue?
  6. What if I need a custom size or product?

*Reviews tab:*
- Pull from Shopify product reviews or Judge.me
- Star summary at top + individual review cards

**Artwork help card (below tabs):**
- Full-width card with icon, headline, description, and link
- "Need help with artwork?" — 12px, 500
- "Design not included — but we make it easy. Use our free Canva templates and AI prompt guides to create print-ready files in minutes."
- "Design resources →" — copper link

**Related products (bottom):**
- "You might also need" — 4-column product grid
- Pull from same collection or manually curated

---

### Footer

**Pattern:** Navy conversion footer

**CTA section (top of footer):**
- Background: #1B2838, border-radius 10px (inset from page edges when used as section; full-width when part of footer)
- Left: "Ready to stand out?" (DM Serif Display, 18px, white) + "10% off your first order. No gimmicks, no countdown timers." (12px, rgba white 0.45)
- Right: "Shop bundles" (copper button) + "Call (844) 883-3308" (ghost button, white border)

**Links section:**
- Background: #1B2838 (continuous with CTA)
- Left column: Logo + tagline ("Custom event displays. Produced and delivered in 5 days." — 11px, rgba white 0.35)
- Three link columns:
  - Shop: Bundles, Tents, Displays, Accessories, Wraps
  - Support: Contact us, Shipping policy, Refund policy, Design resources
  - Company: Reviews, About us, Instagram, TikTok
- Link text: 12px, rgba(255,255,255,0.55)
- Column headers: 10px, rgba(255,255,255,0.3), uppercase, letter-spacing 1px

**Copyright bar:**
- Border-top: 0.5px solid rgba(255,255,255,0.06)
- Left: "© 2026 Promo & Grow · Powered by Proágo Branding Dept."
- Right: "Privacy · Terms · Shipping"
- Font: 10px, rgba(255,255,255,0.2)

---

### Design Resources Page

**Purpose:** Help buyers create their own print-ready artwork without requiring P&G to provide design services.

**Content sections:**
1. "Design not included — but we make it easy." — hero/intro
2. File requirements: PDF, AI, or PNG at 300dpi. CMYK preferred. Include bleed.
3. Canva templates: downloadable templates sized to each product (tent canopy, table throw, flag, etc.)
4. AI prompt guide: ChatGPT/image gen prompts for creating event graphics
5. Brand guide setup: quick tutorial on setting up a brand kit in Canva
6. "Still need help? Get a quote for design services." — CTA for custom design requests

**Note:** This page is a future build. V1 of the site ships without it. Add "Coming soon" or simply link to the contact page from the product page design resource card.

---

### Contact / Get a Quote Page

- Simple form: Name, email, phone, what do you need, file upload (optional)
- Phone number prominent: (844) 883-3308
- Business hours
- Trust badges below form

---

## Content Strategy

### CTA copy by location
| Location | Primary CTA | Secondary CTA |
|----------|-------------|---------------|
| Header | "Get a quote" (copper btn) | — |
| Homepage hero | "Shop bundles" (copper btn) | "Get a quote →" (link) |
| Product page | "Add to cart — $X" (copper btn) | — |
| Collection page | "View" (copper btn on each row) | — |
| Footer | "Shop bundles" (copper btn) | "Call (844) 883-3308" (ghost btn) |

### Product description formula
1. **Line 1:** What it is + hero benefit — "Full-color custom printed canopy tent — delivered in 5 business days."
2. **Line 2:** What's in the box — "Includes: printed canopy, aluminum frame, wheeled carry bag, stake kit."
3. **Line 3:** Key spec — "600D polyester. Dye sublimation printing. Rated for outdoor use."
4. **Line 4:** Trust closer — "Every order proofed before production. 4.8★ rated. Made in the USA."

### FAQ content (use on product pages)
- Q: What file format do you need? — A: PDF, AI, or PNG at 300dpi. We accept most formats and review everything before production.
- Q: Do you offer design services? — A: Design is not included, but we provide free Canva templates and AI prompt guides. We proof every order.
- Q: Can I order fabric only? — A: Yes. Select "Fabric only" in the configurator to replace a worn canopy on your existing frame.
- Q: What's the turnaround? — A: 5 business days standard. Rush (3 days) available for an additional fee.
- Q: Can you ship directly to my venue? — A: Yes. Enter the venue address at checkout.
- Q: What if I need a custom size or product? — A: Call us at (844) 883-3308 or use the "Get a quote" button.

---

## SEO

### Page titles
- Homepage: "Promo & Grow | Custom Event Displays — 5-Day Delivery"
- Collection (tents): "Custom Event Tents with Logo | 5-Day Delivery — Promo & Grow"
- Product: "[Product Name] | Custom Printed — Promo & Grow"
- Contact: "Get a Quote | Promo & Grow"

### Meta descriptions
- Homepage: "Custom tents, backdrops, flags, and signage for events and trade shows. Produced and delivered in 5 business days. 4.8★ rated."
- Collection: "Shop [category]. Full-color custom printing on heavy-duty materials. 5-day nationwide delivery. Free proof on every order."
- Product: "[Product name] — starting at $X. Custom printed, delivered in 5 business days. Free proof included."

### Image alt text formula
"[Product type] with [customization] for [use case] — [brand name]"
Example: "10x10 custom printed canopy tent with full-color logo for outdoor trade show — Promo & Grow"

---

## Technical Notes

### Build order (recommended)
1. Header (announcement bar + nav + sticky behavior)
2. Footer (conversion footer)
3. Homepage sections (hero → trust bar → categories → how it works → testimonials)
4. Collection page template (hero banner + comparison grid)
5. Product page template (gallery + configurator + tabs + FAQ)
6. Contact page
7. Design resources page (V2)
8. Mobile responsive pass on all pages
9. Performance optimization (Lighthouse 90+)

### Shopify-specific
- Products, collections, images, and descriptions are store-level data — they persist across themes
- All custom sections use Dawn's section schema pattern for Shopify admin editability
- Reviews: integrate Judge.me (free tier) or Shopify Product Reviews app
- Email capture: Shopify Email (free tier, already connected)
- Forms: Shopify native contact form or Formspree

### Performance targets
- Lighthouse Performance: 90+ mobile
- Largest Contentful Paint: under 2.5s
- Cumulative Layout Shift: under 0.1
- Lazy load all images below the fold
- Preconnect Google Fonts
- Minimal JavaScript — CSS transitions only for hover/interaction states


---

## Design Resources Page

**URL:** /pages/design-resources
**Purpose:** Help buyers create print-ready artwork without requiring P&G to provide design services.

### Page sections (in order):

**1. Hero**
- Eyebrow: "Design resources" — copper, uppercase
- Headline: "We don't do the design. We make it easy." — DM Serif Display, 24px
- Subtext: "Free templates, guides, and AI prompts to help you create print-ready artwork in minutes. Every order is proofed before production."
- Centered layout

**2. Three-step process**
- 3-column grid on off-white cards
- Step 1 (navy circle): "Download template" — "Pre-sized to your product with bleed guides"
- Step 2 (navy circle): "Add your design" — "Use Canva, Illustrator, or our AI prompts"
- Step 3 (copper circle): "Upload and order" — "We proof before production. You approve, we print."

**3. Downloadable templates**
- Section header: "Download templates" + "PDF / AI format"
- 3-column grid of template cards
- Each card: product preview image + product name + dimensions with bleed + PDF/AI download buttons
- Templates to include (expand as products are added):
  - 10'x10' tent canopy (120" x 120" + 0.125" bleed)
  - 15'x10' tent canopy
  - 20'x10' tent canopy
  - 6ft table throw (132" x 90.5" + 0.125" bleed)
  - 8ft table throw
  - Teardrop flag (30" x 68" + 0.125" bleed)
  - Feather flag
  - 10ft back wall
  - 10ft half wall
  - Step & repeat backdrop
- "View all templates →" link in copper at bottom right

**4. File requirements**
- Section header: "File requirements"
- 2x2 grid on off-white cards:
  - Accepted formats: PDF, AI, EPS, PNG, PSD, JPG
  - Resolution: 300 DPI minimum (150 DPI for items over 48")
  - Color space: CMYK preferred. RGB accepted (we convert)
  - Bleed: 0.125" on all sides. Keep text 0.25" from trim edge.

**5. AI prompt guide**
- Section header: "AI prompt guide" + "Copy these into ChatGPT or Canva AI to generate event-ready graphics."
- Expandable prompt cards with "Copy prompt" button (copper outline):
  - Tent canopy design prompt
  - Trade show backdrop prompt
  - Table throw layout prompt
  - Feather flag prompt
  - Step & repeat backdrop prompt
- Each prompt is pre-written with [bracketed placeholders] for business name, colors, etc.

**6. Bottom CTA**
- Navy band: "Still need help? Call us. We'll walk you through it."
- Two buttons: "Get a quote" (copper) + "(844) 883-3308" (ghost)

### Link placement:
- Every product page links here via the "Need help with artwork?" card below the tabs
- Header "Design guide" tab on product pages links to this page
- Footer "Design resources" link in Support column

---

## Purchase Popups

Two popups run simultaneously. Both are conversion-focused, not lead capture.

### Popup A — Bundle Savings Calculator

**Trigger:** Fires when a user adds a single product (not already a bundle) to cart.
**Frequency:** Once per session per trigger event.
**Dismiss:** Click "No thanks" or X button. Does not reappear in same session.

**Layout:**
- White background, rounded corners, centered modal on dark overlay
- Green dot + "You could save more" badge at top
- Headline: "Bundle and save 15%+" — DM Serif Display, 20px
- Body: "You're buying a [product name]. Add a table throw and save $[X] when you bundle."
- Price comparison: two cards side by side
  - Left card (outline): "Buying separately" — crossed-out total price
  - Right card (copper border): "Bundle price" — bundle price in navy
- Primary CTA: "Switch to the bundle — save $[X]" — copper button, full width
- Dismiss: "No thanks, I'll buy separately" — gray text link centered

**Dynamic behavior:**
- Product name and prices pull from Shopify cart data
- Savings amount calculated as (individual total - bundle price)
- Only shows if a matching bundle exists for the product in cart
- Links directly to the relevant bundle product page

### Popup B — First-Order Confidence Builder

**Trigger:** Fires once per session for new visitors (no previous orders), 5 seconds after landing on any product page.
**Frequency:** Once per new visitor session. Does not show to returning customers.
**Dismiss:** Click "I'm just browsing" or X button.

**Layout:**
- White background, rounded corners, centered modal on dark overlay
- Headline: "Your first order? We've got you." — DM Serif Display, 20px
- Body: "We know buying custom event displays online takes trust. Here's what you get with every order:"
- Trust checklist (green checkmarks):
  - Free artwork proof — nothing prints without your approval
  - 5-day guaranteed delivery — nationwide
  - 4.8-star rating from 19 Google reviews
  - 20+ years in production
- Incentive card (off-white background, centered):
  - "Plus — first order ships free over $500"
  - "Use code: SHOWUP" — code in copper, 16px bold
- Primary CTA: "Shop bundles — most popular" — copper button, full width
- Dismiss: "I'm just browsing" — gray text link centered

**Discount code setup:**
- Create Shopify discount code "SHOWUP"
- Type: Free shipping
- Minimum purchase: $500
- Usage: One per customer
- No expiration (always available for first-time buyers)

---
