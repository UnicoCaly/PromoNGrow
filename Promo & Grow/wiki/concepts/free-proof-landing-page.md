# Free-Proof Landing Page

**Summary**: The shipped "Get a Free Proof" landing page — a standalone, bilingual, single-goal conversion page the cold/paid campaigns point at. **As of 2026-07-20 both pages run V2** (`templates/page.lp-free-proof-v2.liquid`): an upload-first hero with a **working drag-and-drop logo upload** (two-step form), on-page package pricing, a client-logo trust carousel, a bilingual FAQ + structured data, and a mobile/perf/SEO polish pass. It is the concrete landing-page implementation of the [[conversion-bridge]]: send logo → free proof → 5-day close. **Live at promongrow.com/pages/free-proof (EN) + /pages/prueba-gratis (ES)** — same URLs as v1, so ads needed no change. Titles use the real **Cooper Black**; all contact CTAs route to **email** (hello@promongrow.com) as an interim until the WhatsApp number is live, with an in-code swap-back marker.

**Type**: funnel

**Sources**: build sessions 2026-06-22 (v1) + 2026-07-19→22 (v2), Claude Code lane; live files `templates/page.lp-free-proof-v2.liquid` (live) + `templates/page.lp-free-proof.liquid` (v1, on-theme rollback), `png-v9/v10-champion-landing.html` (standalones); upload worker `Operations/logo-upload-worker/`; draws on conversion-bridge.md, conversion-tracking-setup.md, theme-build-status.md, master-price-sheet.md, offer-architecture-2026-07.md.

**Last updated**: 2026-07-22.

**Metric**: `quote_request_submitted` (the cold/paid success metric, source: conversion-bridge.md).

---

## Current state (2026-07-20 → 22 — V2 SHIPPED & LIVE)

Supersedes the 2026-06-24 v1 notes below where they conflict. V2 is `templates/page.lp-free-proof-v2.liquid`, **live on both pages since 2026-07-20** (flipped via Admin API `pageUpdate` → `templateSuffix: lp-free-proof-v2` on Page 145723129892 EN + 145789648932 ES; v1 stays on the theme untouched as a one-command rollback). URLs unchanged, so every ad / UTM still lands; conversion wiring unchanged (`png:quote_request_submitted` → Meta Lead + Google Ads, same [[conversion-tracking-setup]] snippet). (source: build 2026-07-19→22; live pageUpdate + rendered-DOM verification.)

- **Drag-and-drop logo upload now WORKS (the v1 "Shopify can't take files" limitation is solved).** The hero is upload-first: drop a logo → it uploads in the background → a two-step form pops a modal for name / phone / email / product / quantity / event date / notes → native Shopify contact POST. The file goes to a **Cloudflare Worker** (`png-logo-upload.carlos-154.workers.dev`, Carlos's CF account, Workers-KV store, 15 MB cap, 180-day retention, CORS-locked to promongrow/myshopify/shopifypreview) and its URL rides into the normal Shopify lead email as the `contact[Logo file]` field for Venus to download. A "no logo handy? skip" path preserves the lead. This targets the funnel's #1 leak — **logo-collection 10.3%** ([[meta-funnel-review-2026-07-09]]). Source `Operations/logo-upload-worker/`; R2-migration steps documented there (R2 not yet enabled on the account, so KV is the interim store).
- **On-page pricing (NEW).** A "from" anchor strip + a 3-package section + a post-submit pricing recap. Packages (Carlos-set 2026-07-20): **Starter Table from $208** (table *runner* $88 — explicitly not a full cover — + small feather flag $120) · **The 10×10 Booth from $800** · **The Complete Set $1,600** (canopy top + back wall + two half walls, **no flag**). The earlier **$848 "Trade-Show Backdrop" tier was removed**. Complete Set = the [[launch-30-days]] Event-Ready Setup price. Floors match [[master-price-sheet]].
- **Client-logo trust carousel (NEW).** 9 logos, grayscale marquee: Donut Media, Ray-Ban, Susan G. Komen, Kaiser Permanente, Tao Kae Noi, City of South Gate, Lynwood USD, Temple of Gainz, Smile Klub Dental. **Red Bull removed** at Carlos's direction; **Ray-Ban kept — Carlos confirmed a real past client** (no prior wiki/raw source; recorded on his word 2026-07-20). Komen / Temple of Gainz remain photo-documented installs with usage permission still unverified ([[email-calendar-h2-2026]] flag). A missing/removed logo asset auto-falls back to a styled text badge. Logos at `assets/png-client-*`.
- **Bilingual FAQ + structured data (NEW, 2026-07-21).** A 6-question EN/ES FAQ (price · turnaround · is-the-proof-really-free · file formats · Spanish support · nationwide shipping) plus per-language JSON-LD (LocalBusiness with address/hours/phone, Service with the real prices, FAQPage, BreadcrumbList) in `<head>`. **Deliberately NO AggregateRating/Review markup** — self-serving rating markup is a policy risk and Judge.me already publishes a (conflicting) rating on the page.
- **Polish pass (2026-07-21, verified in headless Chrome at 360–430px).** Fixed a real **mobile horizontal-overflow bug** (a hidden file input took a 450px box → 199px of side-scroll) and a **bilingual double-render bug** (a component rule beat `.lang-es{display:none}`, so both languages showed at once in the trust rows). **LCP fix**: the scroll-reveal was hiding the H1 at `opacity:0`, disqualifying it as the LCP element — now skips above-the-fold. Images → WebP with lazy-loading (Venus photo was a 37KB inline base64); rendered page **291KB → 190KB**. **Locale-aware ES** so Shopify's auto `/es/` hreflang target actually serves Spanish (it was serving English). Added OG/Twitter tags, a parallax band between How-It-Works and pricing, and a real Promo & Grow wordmark in the footer.
- **VSL slot:** the hero card carries a marked comment to swap the dropzone for a video embed once the VSLs are filmed — no rebuild needed.

## Current state (2026-06-24 session)

Supersedes the older WhatsApp/test-URL notes below where they conflict.

- **URL finalized:** live at **promongrow.com/pages/free-proof** (renamed from the `-test` handle; old URL 404s). On-submit form test passed (Carlos).
- **Title font → Cooper Black:** the real licensed Cooper Black (the logo's font) replaced DM Serif Display for titles, on the LP **and site-wide** — `assets/cooper-black.woff2`, `@font-face` in `theme.liquid` critical CSS, `--png-font-display` token updated in both `theme.liquid` and `custom-styles.css`. Headings are `font-weight: normal` (Cooper Black's native weight; no faux-bold). A free **Fraunces** stand-in was used first, then swapped for the real font Carlos supplied. (Note: Cooper Black is a licensed URW/Monotype font — webfont-licensing is Carlos's call.)
- **Contact = email everywhere (interim):** every WhatsApp touchpoint (the two in-form logo prompts, the quote-section contact line, the footer link) was swapped to **hello@promongrow.com** or removed where email was already listed; the **floating WhatsApp button is hidden**. Reason: the (844)→WhatsApp wiring isn't live yet. An in-code **`WHATSAPP SWAP-BACK`** comment marks every spot so the flip back is trivial once the number's live. Post-submit success CTA is also email-your-logo.
- **Product cards ("Pick your piece"):** 5 of 6 callouts now use real mockup photos — Tents = Pistons & Butter, SEG = Pillar & Hops, Table Covers = branded stretch throw (real PrintCo-era photo), Flags = feather-flag pair, Bundles = Run Club kit; **Banners & Wall Art unchanged**. Optimized to 4:3 800×600 JPEGs at `assets/lp-card-*.jpg`, served via Shopify CDN. Prices unchanged (match [[master-price-sheet]]).
- **Dedicated Spanish page (NEW):** **promongrow.com/pages/prueba-gratis** — Spanish-first (`<html lang="es" class="lang-mode-es">`, Spanish `<title>`/meta), served by the **same template** (it defaults to ES when `page.handle == 'prueba-gratis'`; EN stays at `/pages/free-proof`). The **ES ad set points here**, the EN set at `/pages/free-proof`. All Spanish was triple-checked + refined for **neutral Latin American Spanish**: fixed a real grammar error ("la ganas"→"las ganas"), a regionalism ("banqueta"→"callejero"; *banqueta*=stool outside Mexico), Mexican slang ("de volada"→"a última hora"), anglicisms (booth/setup/wall-art/Trade-Show → stand/montaje/arte mural/Ferias), and calques ("te regresamos"→"te enviamos", "planeamos hacia atrás"→"planeamos todo a partir de…"). Live but **unadvertised pending Carlos's native read**. Refinements synced to png-v9/v10 too. (source: build session 2026-06-24)

## What it is

A focused, leak-free landing page whose single conversion is a free-proof quote request. Fully bilingual (EN/ES toggle on `<html>`), navy/copper brand system, the 5-business-days-from-proof-approval promise, and the proof stack (4.8★, 20-year heritage, Donut Media). It serves both the outbound lane ([[outbound-fishing-playbook]] — Venus cold calls / IG+WhatsApp DMs) and paid ([[meta-ugc-launch-kit]], [[google-search-engine]]). WhatsApp is pushed as the logo-delivery path.

## Three artifacts

1. **`templates/page.lp-free-proof.liquid`** — the production version, hosted on promongrow.com. Renders standalone via `{% layout none %}` (no Dawn header/footer), so it stays a single-goal page. This is the one that goes live.
2. **`png-v9-champion-landing.html`** — the original self-contained standalone HTML (real retro logo, embedded Venus headshot, real prices, real product images). Kept as the canonical snapshot; usable on any off-Shopify host.
3. **`png-v10-champion-landing.html`** — duplicate of v9 plus the consent line + Privacy Policy links. The standalone version to use if hosted off-Shopify.

## Forms → Shopify contact handling

Decision (Carlos 2026-06-22): host on promongrow.com and use Shopify's **native contact form**, not a Zapier webhook (source: build session 2026-06-22). Both forms (hero + closing) are `{% form 'contact' %}`; submissions route to the **Store contact email = hello@promongrow.com** (set in Settings → Store details). Fields map to `contact[name/email/phone/Product/Quantity/Event date/body]` plus a hidden `contact[Source]` tag (hero vs main).

**Logo-upload trade-off (v1 — SOLVED in v2):** v1 could not take file attachments (Shopify's native contact form has no file field), so it fell back to a "send it on WhatsApp / reply to our first message" prompt. **V2 solves this** with the drag-and-drop upload → Cloudflare Worker → `contact[Logo file]` in the lead email (see the 2026-07-20 current-state section above). The [[file-prep-gate]] email fallback still exists behind the "skip" path.

**Post-submit success state (decided 2026-06-22):** the page keeps the lead on the LP — **no redirect to the main site**, which would feed a fresh lead into the weak self-serve cart and break the [[concierge-close]] thread. The success screen is an active "thank you" whose primary CTA is **"Send my logo on WhatsApp"** (pre-filled `wa.me/18448833308` link). It pulls artwork in immediately (solving the logo-upload gap above), opens a live channel for Venus, and reinforces speed-to-lead, with a "Venus will reach out same day / Call (844) 883-3308" fallback. Same upgraded success block in all three files. (The WhatsApp number is the existing placeholder until Carlos supplies the real WhatsApp Business number.)

## Tracking

No new pixel code. The page renders `{% render 'png-tracking-pixels' %}` in `<head>` (since `layout none` bypasses `theme.liquid`), so the live Meta Pixel `1205589804645510` + Google Ads tag `AW-17631020505` load as usual. On form success, each form dispatches the DOM event `png:quote_request_submitted`, which the existing pixel bridge maps to Meta `Lead` + Google Ads `conversion` (label `_S8lCJKl6sIcENmLkNdB`), fired once (JS-guarded). Same proven wiring as the quote modal — see [[conversion-tracking-setup]].

## Prices (match the master sheet)

Product-card "from" prices are reconciled to the live catalog and the [[master-price-sheet]] (verified 2026-06-22): tents **$800**, SEG displays **$248**, table covers **$88**, flags **$120**, **bundles $848** (the on-site builder's lowest complete config — NOT the stale Shopify bundle products), banners & wall art **$98** (source: live Shopify catalog 2026-06-22; master-price-sheet.md). An interim $668 (mistakenly pulled from the stale Shopify bundle products) was corrected back to $848 per Carlos + the sheet.

## Compliance

A bilingual consent line sits under each submit (phone/text/email/WhatsApp contact + no-sell + Privacy Policy link) and a footer Privacy Policy link → `/policies/privacy-policy`. A full Privacy Policy was drafted (`Landing Page - Outbound + PPC/PNG-Privacy-Policy.md`), pending publish to Shopify Settings → Policies. Required by Meta/Google for lead-gen collecting PII; CCPA/CPRA applies (LA business).

## Status & open items (2026-06-22)

- ✅ Template pushed to the live theme — **inert** (nothing renders it until a page is published). Render verified on Shopify: 0 Liquid errors, both contact forms + the Meta/Google pixels confirmed in the live DOM.
- ✅ Test page live at `/pages/free-proof-test` (published, unlinked).
- 🔄 **[Carlos]** Run a live form-submit test: confirm the lead emails to hello@promongrow.com, the success state shows, and the conversion fires **once** (Meta Pixel Helper + Google Tag Assistant).
- 🔄 **[Carlos]** Confirm Settings → Store details → Store contact email = hello@promongrow.com.
- 🔄 **[Carlos / Claude-admin]** Publish the Privacy Policy; finalize the URL (rename test → `/pages/free-proof`) and point ads at it.
- ⬜ **[Carlos]** WhatsApp number + updated images — supplied later (~next month).

## Reviews on the page

The page shows 3 verbatim Google review cards (Endy S., Greg B., Tiffany P. — confirmed real) and "4.8★ / 19 Google · 5.0★ / 15 Yelp". A 2026-06-22 check found Yelp live as "Promote & Grow" (15 reviews — count matches) and Birdeye 4.9★/11 (old Facebook reviews); Google and Yelp block automated scraping, so live review text could not be pulled. The displayed numbers are consistent with the homepage, but **Carlos to confirm the live Yelp star (4.8 vs 5.0)** and can paste fresher Google reviews to refresh the cards.

## Lanes
- **Claude-admin** — built the template + standalone versions, the price/image reconciliation, the privacy policy + consent.
- **Carlos** — the submit-test, the store contact email, publishing the policy + final page, WhatsApp + images.

## Related pages
- [[product-catalog-2026]] — the catalog + sale sheets carry a QR straight to this page
- [[conversion-bridge]]
- [[conversion-tracking-setup]]
- [[theme-build-status]]
- [[master-price-sheet]]
- [[meta-ugc-launch-kit]]
- [[outbound-fishing-playbook]]
- [[google-search-engine]]
- [[file-prep-gate]]
- [[concierge-close]]
