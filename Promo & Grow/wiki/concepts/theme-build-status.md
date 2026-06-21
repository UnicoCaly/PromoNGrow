# Theme Build Status

**Summary**: Single source of truth for the Promo & Grow Shopify (Dawn 15.x customized) theme build as of 2026-06-16 — what is live in the theme, how the build/deploy works, the admin tasks still owned by Carlos, and where the build sits on the roadmap.
**Type**: source-summary
**Sources**: PNG-Build-Status_6.16.2026.md
**Last updated**: 2026-06-20 (quote-conversion firing-path bug found + fixed)

---

## Where this build is

Live theme `PromoNGrow/main` (Shopify theme id `171153293348`) at promongrow.com; repo github.com/UnicoCaly/PromoNGrow (branch `main`); base Shopify Dawn 15.x customized; design system in `assets/custom-styles.css` (~3,950 lines) (source: PNG-Build-Status_6.16.2026.md). This is the [[claude-code]]-lane theme work; it pairs with the [[conversion-bridge]] and [[concierge-close]] strategy and feeds the [[dashboard]].

**Phase 1 (verify the bridge)** theme work is COMPLETE and **Phase 2 (organic baseline)** theme deliverables are COMPLETE; remaining Phase 2 is admin/measurement (source: PNG-Build-Status_6.16.2026.md). See ## Roadmap position below.

## How the build/deploy works (read first)

These are the load-bearing mechanics for anyone pushing to the theme (source: PNG-Build-Status_6.16.2026.md). This is also captured as the Shopify deploy workflow in operator memory.

- **Two working copies in the repo.** Theme files live at repo root (`sections/`, `snippets/`, `templates/`, `assets/`, `layout/`, `config/`) AND in a mirror under `theme_export__promongrow-com-dawn__12APR2026-0148am/`. Every change must be copied to BOTH before commit. The build-folder CSS copy `Promo N Grow Build/custom-styles.css` is also kept in sync.
- **Deploy to live:** `shopify theme push --path . --theme 171153293348 --allow-live --only <files>`. Always deploy with `--only` (targeted); confirm "pushed successfully" (NOT "pushed with errors").
- **Git remote moves on its own.** Shopify auto-commits theme-editor changes to `origin/main`, so nearly every push needs a `git pull --no-rebase --no-edit` then `git push`. JSON template files frequently produce add/add merge conflicts that are just Shopify's header comment vs ours — resolve with `git checkout --theirs <file>` (content is identical) then complete the merge.
- **JSON-template lock.** `templates/index.json` is owned by the theme editor — CLI pushes to it get superseded. Workaround: the intent router is embedded in the hero section (`custom-hero.liquid`), not added as a standalone section to index.json. (`product.json` and `page.*.json` accept CLI pushes fine.)
- **Schema gotcha.** Shopify rejects a `default` on a `"type": "url"` setting — use `"type": "text"` for links with defaults, or the whole section fails to compile. This caused the intent-router not rendering until fixed.
- **Page cache caveat.** Anonymous `curl` of promongrow.com hits Shopify's server-side `page_cache` which doesn't bust via URL params, so curl can show stale HTML even after a clean deploy. Verify deploys by reading the theme file / push success, not anonymous curl.
- **Dev server.** Shopify CLI `theme dev` needs interactive store auth and does NOT run through the preview MCP. Config saved in `.claude/launch.json` (port 9293); verification is via deployed-DOM curl.

## What's live (theme features)

All verified live as of 2026-06-16 (source: PNG-Build-Status_6.16.2026.md).

> **🧹 Delivery-copy honesty sweep (2026-06-19).** Removed every unconditional delivery "guarantee" from the theme (it violated the SLA-honesty rule on [[fulfillment-sop]] — we say "5 business days *from proof approval*," never "guaranteed"). Swept 10 strings across `announcement-bar`, `popup-exit-bundle`, `custom-contact`, `custom-how-it-works`, `custom-seo-landing`, `custom-aeo-faq`, and the tent-page / `article.aeo` FAQ answers (root + mirror copies). Also fixed the popup's stale "$910/$160+" → "$848/$150+". Edited in the repo; goes live on the targeted `theme push`. **Two spots handled outside the push:** the homepage "How it works" step lives in editor-locked `templates/index.json` (Carlos tweaks it in the theme editor — admin task 8); and `pagefly-home.liquid` (unreferenced dead PageFly leftover, still has "GUARANTEED" slides) should be deleted (admin task 9).

### Global / header / footer
- **Trust ribbon** (`sections/announcement-bar.liquid`): off-white, "5-day delivery from proof approval · Free proof before you pay · Made in LA · ★★★★★ 4.8 on Google". Mobile condensed; hides when header goes sticky. *(✅ Resolved 2026-06-19: the SLA-violating "guaranteed" was softened to "from proof approval" — part of a repo-wide sweep removing every unconditional delivery "guarantee" (see the honesty-sweep note below). Live on next `theme push`.)*
- **Header** (`sections/header.liquid` + `snippets/header-dropdown-menu.liquid`): text wordmark left; 5-item nav with benefit subtitles (Bundles/Tents/Displays/Flags/Wraps) + a 6th "More" dropdown auto-listing remaining collections; copper "Get a quote" CTA → /pages/contact; cart. Sticky-on-scroll collapses subtitles. Nav links locale-aware.
- **EN/ES language toggle** (`snippets/png-language-toggle.liquid`): native localization form, page-preserving, renders only when >1 published language. In header + footer. Part of the [[bilingual-spanish-moat]].
- **Locale link safety-net** (`snippets/png-locale-links.liquid`): JS on non-primary locales, prefixes hardcoded root-relative links with `/es`; skips cart/checkout/account/cdn/apps.
- **Footer** (`sections/custom-footer.liquid`): navy. Logo is a TEXT wordmark "PROMO & GROW" (white, copper ampersand) — NOT an image, because the brand PNG produced a white block under the brightness/invert white-out trick (its background is light/opaque). To switch to an image, upload a transparent WHITE logo to Settings→Brand and swap back. 3 link columns; Instagram/TikTok hardcoded; "Design resources" → /pages/design-resources. The "Ready to stand out?" CTA banner was REMOVED site-wide.

### Homepage (`templates/index.json`)
Order: hero → categories → how-it-works → best-sellers → testimonials.
- **Dark navy hero** (`custom-hero.liquid`): eyebrow + DM Serif 36px headline + subtext + copper/ghost CTAs + image, trust bar inside.
- **4-door intent router** embedded in the hero (behind `show_router` toggle, default on): Get a Free Proof (opens quote modal) · Shop Bundles · Buy Online · Talk to Us (click-to-call). Each fires `png:intent_door` analytics. (War-Room steal: ExpoMarketing.)
- Categories grid, how-it-works 3-step, featured-collection "Best sellers", testimonials.

### Product pages (`templates/product.json`)
Block order: title → price → review_stars (Judge.me) → trust badges → variant picker → qty → tiered_cta → buy_buttons → process_ribbon → description; then product-tabs, artwork-help, related products.
- **Tiered CTA** (`snippets/product-cta-tiered.liquid`): reads `product.type`. Quote-first (Tents, Displays, Bundle, Wall Art, untyped) → "Get a Free Proof" copper primary + "Custom-priced · free quote in 24 hrs" eyebrow + ghost add-to-cart. Checkout-first (Flags, Table Covers, Tent Accessories) → copper add-to-cart + bulk-quote text link. Both open the quote modal. This is the live implementation of the [[conversion-bridge]] tiered-CTA model.
- **Review stars** (`snippets/product-review-stars.liquid`): Judge.me preview badge under price.
- **Trust badges** (`snippets/product-trust-badges.liquid`): 5-day delivery · Free proof before you pay · Made in LA.
- **Process ribbon** (`snippets/product-process-ribbon.liquid`): 1 Start order → 2 Send logo → 3 Approve free proof → 4 Delivered in 5 days (copper final). (War-Room steal: Packeze.)
- **Tabs** (`custom-product-tabs.liquid`): What's included / Specs / Design guide / FAQ.

### Collections
- **Comparison-row list** (`sections/custom-collection-products.liquid` + `snippets/product-row-card.liquid`): horizontal rows with thumbnail, title, per-grid Judge.me star badge, price, 5-day badge, View button. HIDDEN on /collections/bundles.
- **Collection banner** (`custom-collection-banner.liquid`): per-handle hero copy.
- **Bundle builder** (`sections/custom-bundle-builder.liquid`, on /collections/bundles): JS-powered, fetches live prices from `/products/{handle}.json`, 3 bundles (Event Vendor / Event Pro popular / Trade Show Starter), every item a dropdown, 15% discount math, add-to-cart via `/cart/add.js` with `_bundle` line-item property.

### Pages
- **Contact / quote** (`custom-contact.liquid`): form + phone card (Mon–Fri 10am–4pm PST) + email card (hello@promongrow.com) + trust badges.
- **Design Resources** (`page.design-resources` → `custom-design-resources.liquid`): hero, 3-step, template grid, file-requirements 2×2, AI prompt cards (copy buttons), navy CTA. Requires a Shopify Page assigned to the template (see admin tasks). Supports the [[file-prep-gate]].
- **Size-segmented SEO landing pages (Phase 2):** `page.tent-10x10`, `page.tent-10x15`, `page.tent-10x20` → `custom-seo-landing.liquid` (reusable, schema-driven): navy keyword hero + dual CTA + benefits + spec strip + FAQ accordion + FAQPage JSON-LD + closing CTA. Templates exist; need Shopify Page records assigned. (War-Room steal: Instent.)
- **AEO article template (Phase 2):** `article.aeo` → `main-article` + `custom-aeo-faq.liquid` (FAQ accordion + FAQPage JSON-LD + free-proof CTA). Assign blog posts to `article.aeo` to publish.

### Popups (rendered in `layout/theme.liquid`)
- **Exit-intent bundle popup** (`snippets/popup-exit-bundle.liquid`): product+collection pages only, desktop mouseout-to-top / mobile rapid scroll-up, once/session, armed after 5s. Offer "Starting at $848, saves you $150+" *(✅ Resolved 2026-06-19: was a stale "$910 / $160+"; synced to the builder's ≈$848.30 lowest complete config per [[master-price-sheet]]; its "5-day delivery, guaranteed" line also softened to "from proof approval". Durable follow-up: make the popup pull the number live from the builder so it can't drift again — Claude Code lane.)* Tier-aware.
- **Bundle-savings popup** (`snippets/popup-bundle-savings.liquid`): fires on add-to-cart for non-bundle items, deferred ~3.5s.
- **Quote / Free-Proof modal** (`snippets/png-quote-modal.liquid`): triggered by any `data-quote-modal-trigger`, pre-fills product context, native contact form, fields name/email/phone/product/qty/date/notes/artwork-URL, tags submissions `Inquiry Type: Quote Request — Free Proof` (+ `[ES]` prefix on Spanish locale), fires `quote_request_submitted`. Deep-links via `?intent=quote-request`. This is the entry point of the [[concierge-close]].

### Tracking / analytics (live, verified in DOM)
- **Meta Pixel** `1205589804645510` + **Google Ads** `AW-17631020505` via `snippets/png-tracking-pixels.liquid` (IDs in `config/settings_data.json`). Defensive: only inits if not already present. Bridges concierge events → Lead/Subscribe/Contact (Meta) + generate_lead/sign_up (Google). ViewContent/view_item on PDPs. See [[conversion-tracking-setup]].
- **Event bus** (`snippets/png-analytics-events.liquid`): dataLayer pushes + `png:*` CustomEvents for cta_clicked, click_to_call, quote_modal_opened, quote_request_submitted, email_captured, exit_intent_shown/dismissed, intent_door.
- **Google Ads quote-conversion label:** still BLANK (`google_ads_quote_label`). ⚠️ **Plus a firing-path bug found + fixed 2026-06-20:** the quote-submit conversion (Meta `Lead` + GA4 `generate_lead` + Google Ads `conversion`) was **unreachable** — the modal pushed to `dataLayer` but the listener waited on an un-dispatched `png:quote_request_submitted` DOM event. Fixed by firing on the `form.posted_successfully?` success page in `png-quote-modal.liquid` (root+mirror). Remarketing works; quote conversions count once the fix is pushed + Carlos pastes the label + it's verified (see admin task 3 + [[conversion-tracking-setup]]).

### Performance
Critical CSS inlined in `<head>`; `custom-styles.css` + Google Fonts load async (media=print/onload); hero image preload setting; image lazy-loading + width caps; JS deferred/idle-callback. An earlier `img{content-visibility:auto}` rule caused mobile image flicker and was REMOVED.

## Outstanding admin tasks (Carlos lane, not theme-code)

These are [[carlos]]-VA-lane items; the theme code is done but the work won't show until they're completed (source: PNG-Build-Status_6.16.2026.md).

| # | Task | Note |
|---|---|---|
| 1 | Create Shopify Pages + assign templates | Templates exist, pages don't: Design Resources → `page.design-resources`; Custom 10x10/10x15/10x20 Event Tent → `page.tent-10x10/15/20`. Set SEO title/meta; add to nav/sitemap. |
| 2 | AEO articles | Write 1–2 FAQ/AEO blog posts, set each to `article.aeo`, fill FAQ blocks. |
| 3 | Google Ads quote conversion | **Code fix shipped 2026-06-20** (conversion now fires on the success page — was dead/unreachable). Remaining: create the "Quote submitted" action (manual · value+USD · Count=One · **Primary**), paste its label into Theme settings → Tracking & Analytics → "Quote conversion label", **push** the quote-modal fix + label live, then live-test (Network tab / Tag Assistant). Until done, quote submits aren't counted. See [[conversion-tracking-setup]]. |
| 4 | Quote auto-reply email | Settings → Notifications → Contact form — set reply-to hello@promongrow.com + Carlos-voice auto-reply (EN + ES). |
| 5 | Bilingual | Spanish is published in Markets; paste PNG-Spanish-Money-Page-Copy into Translate & Adapt for hero pages, nav, footer, trust strings. Stage page-by-page (no half-Spanish pages). See [[bilingual-spanish-moat]]. |
| 6 | Footer logo (optional) | To use an image instead of the text wordmark, upload a transparent WHITE logo to Settings → Brand. |
| 7 | Track A non-theme | GBP overhaul, VIP + South Gate outreach, Shop Pay Installments, abandoned-cart automation ON, 3-touch unpaid-quote follow-up sequence. |
| 8 | Homepage "How it works" step copy | `templates/index.json` is theme-editor-owned (CLI pushes get superseded). Change step-3 description to "To your door or your venue. Nationwide." in **Online Store → Customize → Home → How it works**. Part of the 2026-06-19 honesty sweep; the file was fixed but only the editor change goes live. |
| 9 | Delete dead `pagefly-home.liquid` | Unreferenced PageFly leftover (not on any template) still carrying "GUARANTEED" slides. Not live, but delete so the false promise can't resurface. |

## Roadmap position

- **Phase 1 (verify the bridge)** — theme work COMPLETE: tiered CTAs, quote modal, trust stack, pixels, intent router, review stars, process ribbon, trust ribbon.
- **Phase 2 (organic baseline)** — theme deliverables COMPLETE: size-segmented SEO landing pages + AEO article template. Remaining Phase 2 is admin/measurement (GBP, outreach, articles, baseline tracking). **GATE before paid:** quote requests ~2 → 20+/mo, add-to-action 0.18% → 1%+ (source: PNG-Build-Status_6.16.2026.md). This gate ties to [[the-20k-math]] and the [[dashboard]].
- **Phase 3 (cold email)** and **Phase 4 (paid + retargeting)** — gated; not started in theme. Pixels are already collecting remarketing audiences.
- **Track B (self-serve machine)** — not started: package-ize SKUs, Canva templates, "Free AI Artwork Check" V1, Shop Pay Installments, 3D configurator (future). Supports the long-game automation dimension.

## Conventions

Palette: navy `#1B2838`, copper `#C17A3A` (CTAs/clickable ONLY), copper-hover `#A8682F`, trust-green `#1E6B4A`, off-white `#F7F7F5`. Fonts: DM Serif Display (headings), DM Sans (UI/body). All custom classes are `png-` namespaced. Phone: (844) 883-3308 / `tel:8448833308`. 5-day delivery is the hero stat everywhere; no fake urgency (source: PNG-Build-Status_6.16.2026.md).

The 6/16 doc names companion build specs not yet in this wiki: PNG-90-Day-Execution-Roadmap, PNG-Competitive-War-Room_6.08.2026, PNG-Concierge-Conversion-Build-Spec, PNG-Bilingual-Build-Spec (unverified — not yet ingested).

## Related pages
- [[master-price-sheet]]
- [[store-and-catalog]]
- [[claude-code]]
- [[conversion-bridge]]
- [[concierge-close]]
- [[conversion-tracking-setup]]
- [[the-20k-math]]
- [[bilingual-spanish-moat]]
- [[file-prep-gate]]
- [[reactivation-outreach]]
- [[dashboard]]
