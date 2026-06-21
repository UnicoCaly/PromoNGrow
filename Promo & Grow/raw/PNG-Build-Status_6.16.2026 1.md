# Promo & Grow — Theme Build Status

**Last updated:** 2026-06-16
**Live theme:** `PromoNGrow/main` (Shopify theme id `171153293348`) at promongrow.com
**Repo:** github.com/UnicoCaly/PromoNGrow (branch `main`)
**Base:** Shopify Dawn 15.x, customized. Design system in `assets/custom-styles.css` (~3,950 lines).

This doc is the single source of truth for what's built, how it works, and what's left.
Pairs with: PNG-90-Day-Execution-Roadmap, PNG-Competitive-War-Room_6.08.2026, PNG-Concierge-Conversion-Build-Spec, PNG-Bilingual-Build-Spec.

---

## 0. HOW THE BUILD/DEPLOY WORKS (read first)

- **Two working copies in the repo:** the theme files live at repo **root** (`sections/`, `snippets/`, `templates/`, `assets/`, `layout/`, `config/`) AND a mirror under `theme_export__promongrow-com-dawn__12APR2026-0148am/`. Every change must be copied to BOTH before commit so git history is coherent. Build-folder CSS copy: `Promo N Grow Build/custom-styles.css` is also kept in sync.
- **Deploy to live:** `shopify theme push --path . --theme 171153293348 --allow-live --only <files>`. Always deploy with `--only` (targeted), confirm "pushed successfully" (NOT "pushed with errors").
- **Git remote moves on its own:** Shopify auto-commits theme-editor changes to `origin/main`, so nearly every push needs a `git pull --no-rebase --no-edit` then `git push`. JSON template files (`templates/*.json`) frequently produce **add/add merge conflicts** that are just Shopify's header comment vs ours — resolve with `git checkout --theirs <file>` (content is identical) then complete the merge.
- **JSON-template lock:** `templates/index.json` is "owned" by the theme editor — CLI pushes to it get superseded. Workaround used: the intent router is **embedded in the hero section** (`custom-hero.liquid`), not added as a standalone section to index.json. (`product.json` and `page.*.json` accept CLI pushes fine.)
- **Schema gotcha:** Shopify rejects a `default` on `"type": "url"` settings — use `"type": "text"` for links with defaults, or the whole section fails to compile ("pushed with errors"). This caused the intent-router not rendering until fixed.
- **Page cache caveat:** anonymous `curl` of promongrow.com hits Shopify's server-side `page_cache` which doesn't bust via URL params — so curl can show stale HTML even after a clean deploy. Real browser sessions (and logged-in admin) bypass it. Verify "did it deploy" by reading the theme file / push success, not anonymous curl.
- **Dev server:** Shopify CLI `theme dev` needs interactive store auth and does NOT run through the preview MCP. Config saved in `.claude/launch.json` (port 9293) but verification is done via deployed-DOM curl.

---

## 1. WHAT'S LIVE (theme features)

### Global / header / footer
- **Trust ribbon** (`sections/announcement-bar.liquid`, replaces Dawn's): off-white, "5-day delivery — guaranteed · Free proof before you pay · Made in LA · ★★★★★ 4.8 on Google". Mobile condensed. Hides when header goes sticky.
- **Header** (`sections/header.liquid` + `snippets/header-dropdown-menu.liquid`): text/brand logo left; 5-item nav with benefit subtitles (Bundles/Tents/Displays/Flags/Wraps) + a 6th "More" dropdown auto-listing remaining collections; copper "Get a quote" CTA → /pages/contact; cart. Sticky on scroll-up collapses subtitles. Nav links are locale-aware (`routes.root_url` prefix).
- **EN/ES language toggle** (`snippets/png-language-toggle.liquid`): native `{% form 'localization' %}`, page-preserving, renders only when >1 published language. In header + footer.
- **Locale link safety-net** (`snippets/png-locale-links.liquid`): JS, runs only on non-primary locales, prefixes hardcoded root-relative links with `/es` so navigation stays in-language. Skips cart/checkout/account/cdn/apps.
- **Footer** (`sections/custom-footer.liquid`): navy. Logo is a **text wordmark** "PROMO & GROW" (white, copper ampersand) — NOT an image. (The brand PNG produced a white block under the brightness/invert white-out trick because it has a light/opaque background. To switch to an image, upload a TRANSPARENT WHITE logo to Settings→Brand and swap back.) 3 link columns; Instagram/TikTok links hardcoded with defaults; "Design resources" → /pages/design-resources (correct). CTA banner ("Ready to stand out?") was REMOVED site-wide.

### Homepage (`templates/index.json`: hero → categories → how-it-works → best-sellers → testimonials)
- **Dark navy hero** (`custom-hero.liquid`): eyebrow + DM Serif 36px headline + subtext + copper/ghost CTAs + image, trust bar inside.
- **4-door intent router** — embedded in the hero (behind `show_router` toggle, default on). Doors: Get a Free Proof (opens quote modal) · Shop Bundles · Buy Online · Talk to Us (click-to-call). Each fires `png:intent_door` analytics. (War-Room steal: ExpoMarketing.)
- Categories grid, how-it-works 3-step, featured-collection "Best sellers", testimonials.

### Product pages (`templates/product.json`)
Block order: title → price → **review_stars** (Judge.me badge) → trust badges → variant picker → qty → **tiered_cta** → buy_buttons → **process_ribbon** → description. Then below: **product-tabs**, **artwork-help** (→ /pages/design-resources), related products.
- **Tiered CTA** (`snippets/product-cta-tiered.liquid`): reads `product.type`. Quote-first (Tents, Displays, Bundle, Wall Art, untyped) → "Get a Free Proof" copper primary + "Custom-priced · free quote in 24 hrs" eyebrow + ghost add-to-cart. Checkout-first (Flags, Table Covers, Tent Accessories) → copper add-to-cart + "bulk quote" text link. Both open the quote modal via `data-quote-modal-trigger`.
- **Review stars** (`snippets/product-review-stars.liquid`): Judge.me preview badge under price.
- **Trust badges** (`snippets/product-trust-badges.liquid`): 5-day delivery · Free proof before you pay · Made in LA.
- **Process ribbon** (`snippets/product-process-ribbon.liquid`): 1 Start order → 2 Send logo → 3 Approve free proof → 4 Delivered in 5 days (copper final). (War-Room steal: Packeze.)
- **Tabs** (`custom-product-tabs.liquid`): What's included / Specs / Design guide / FAQ.

### Collections
- **Comparison-row list** (`sections/custom-collection-products.liquid` + `snippets/product-row-card.liquid`): horizontal rows with thumbnail, title, **per-grid Judge.me star badge**, price, 5-day badge, View button. Best-seller tagging. HIDDEN on /collections/bundles (bundle builder is the only product showcase there).
- **Collection banner** (`custom-collection-banner.liquid`): per-handle hero copy.
- **Bundle builder** (`sections/custom-bundle-builder.liquid`, on /collections/bundles via `collection.handle == 'bundles'`): JS-powered, fetches live prices from `/products/{handle}.json`, 3 bundles (Event Vendor / Event Pro popular / Trade Show Starter), every item a dropdown, 15% discount math, add-to-cart via `/cart/add.js` with `_bundle` line-item property, custom-bundle CTA.

### Pages
- **Contact / quote** (`custom-contact.liquid`): form + phone card (Mon–Fri 10am–4pm PST) + email card (hello@promongrow.com) + trust badges.
- **Design Resources** (`page.design-resources` → `custom-design-resources.liquid`): hero, 3-step, template grid, file-requirements 2×2, AI prompt cards (copy buttons), navy CTA. **Requires a Shopify Page assigned to the `page.design-resources` template.**
- **Size-segmented SEO landing pages** (Phase 2): `page.tent-10x10`, `page.tent-10x15`, `page.tent-10x20` → `custom-seo-landing.liquid` (reusable, schema-driven). Navy keyword hero + dual CTA + benefits + spec strip + FAQ accordion + FAQPage JSON-LD + closing CTA. **Templates exist on theme; need Shopify Page records assigned to each.** (War-Room steal: Instent.)
- **AEO article template** (Phase 2): `article.aeo` → `main-article` + `custom-aeo-faq.liquid` (FAQ accordion + FAQPage JSON-LD + free-proof CTA). **Assign blog posts to the `article.aeo` template to publish AEO articles.**

### Popups (rendered in `layout/theme.liquid`)
- **Exit-intent bundle popup** (`snippets/popup-exit-bundle.liquid`): product+collection pages only, desktop mouseout-to-top / mobile rapid scroll-up, once/session, armed after 5s. Offer "Starting at $910, saves you $160+". Tier-aware (free-proof variant on quote-first products).
- **Bundle-savings popup** (`snippets/popup-bundle-savings.liquid`): fires on add-to-cart for non-bundle items, deferred ~3.5s.
- **Quote / Free-Proof modal** (`snippets/png-quote-modal.liquid`): triggered by any `data-quote-modal-trigger`, pre-fills product context, native `{% form 'contact' %}`, fields name/email/phone/product/qty/date/notes/artwork-URL, tags submissions `Inquiry Type: Quote Request — Free Proof` (+ `[ES]` prefix on Spanish locale), fires `quote_request_submitted`. Deep-links via `?intent=quote-request`.

### Tracking / analytics (live, verified in DOM)
- **Meta Pixel** `1205589804645510` + **Google Ads** `AW-17631020505` via `snippets/png-tracking-pixels.liquid` (IDs in `config/settings_data.json`). Defensive: only inits if not already present (avoids double-fire with existing installs). Bridges concierge events → Lead/Subscribe/Contact (Meta) + generate_lead/sign_up (Google). ViewContent/view_item on PDPs.
- **Event bus** (`snippets/png-analytics-events.liquid`): dataLayer pushes + `png:*` CustomEvents for cta_clicked, click_to_call, quote_modal_opened, quote_request_submitted, email_captured, exit_intent_shown/dismissed, intent_door.
- **Google Ads quote-conversion label:** still BLANK (`google_ads_quote_label` in settings). Remarketing works; quote submits won't count as a *conversion* until Carlos pastes the label.

### Performance
- Critical CSS inlined in `<head>`; `custom-styles.css` + Google Fonts load async (media=print/onload). Hero image preload setting. Image lazy-loading + width caps. JS deferred/idle-callback. (Note: an earlier `img{content-visibility:auto}` rule caused a mobile image flicker — REMOVED.)

---

## 2. OUTSTANDING — ADMIN TASKS (Carlos / not theme-code)

1. **Create Shopify Pages** + assign templates (templates exist, pages don't):
   - "Design Resources" → template `page.design-resources` (slug `design-resources`)
   - "Custom 10x10 Event Tent" → `page.tent-10x10`
   - "Custom 10x15 Event Tent" → `page.tent-10x15`
   - "Custom 10x20 Event Tent" → `page.tent-10x20`
   Set SEO title/meta on each; add to nav/sitemap as desired.
2. **AEO articles:** write 1–2 FAQ/AEO blog posts, set each to the `article.aeo` template, fill FAQ blocks.
3. **Google Ads quote conversion:** create a "Quote submitted" conversion action, paste its label into Theme settings → Tracking & Analytics → Quote conversion label.
4. **Quote auto-reply email:** Settings → Notifications → Contact form — set reply-to hello@promongrow.com + Carlos-voice auto-reply (EN + ES).
5. **Bilingual:** Spanish is published in Markets; paste PNG-Spanish-Money-Page-Copy into Translate & Adapt for hero pages, nav, footer, trust strings. Stage page-by-page (no half-Spanish pages).
6. **Footer logo (optional):** to use an image instead of the text wordmark, upload a transparent WHITE logo to Settings → Brand.
7. **Track A non-theme:** GBP overhaul, VIP + South Gate outreach, Shop Pay Installments, abandoned-cart automation ON, 3-touch unpaid-quote follow-up sequence.

---

## 3. ROADMAP POSITION

- **Phase 1 (verify the bridge)** — theme work COMPLETE: tiered CTAs, quote modal, trust stack, pixels, intent router, review stars, process ribbon, trust ribbon.
- **Phase 2 (organic baseline)** — theme deliverables COMPLETE: size-segmented SEO landing pages + AEO article template. Remaining Phase 2 is admin/measurement (GBP, outreach, articles, baseline tracking). **GATE before paid:** quote requests ~2 → 20+/mo, add-to-action 0.18% → 1%+.
- **Phase 3 (cold email)** and **Phase 4 (paid + retargeting)** — gated; not started in theme. Pixels are already collecting remarketing audiences.
- **Track B (self-serve machine)** — not started: package-ize SKUs, Canva templates, "Free AI Artwork Check" V1, Shop Pay Installments, 3D configurator (future).

---

## 4. CONVENTIONS

- Palette: navy `#1B2838`, copper `#C17A3A` (CTAs/clickable ONLY), copper-hover `#A8682F`, trust-green `#1E6B4A`, off-white `#F7F7F5`. Fonts: DM Serif Display (headings), DM Sans (UI/body). All custom classes are `png-` namespaced.
- Phone: (844) 883-3308 / `tel:8448833308`. 5-day delivery is the hero stat everywhere. No fake urgency.
