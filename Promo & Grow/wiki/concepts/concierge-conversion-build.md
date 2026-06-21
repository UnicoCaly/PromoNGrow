# Concierge-Conversion Build Spec

**Summary**: Claude Code build spec for the on-theme concierge-conversion system — tiered CTAs by product type, the quote/free-proof form, PDP trust elements, lead capture, quote follow-up, and analytics. The conversion event for cold traffic is a quote/free-proof request, NOT a checkout.
**Type**: concept
**Sources**: PNG-Concierge-Conversion-Build-Spec.md
**Last updated**: 2026-06-17.

---

## Core principle

Convert cold organic traffic into qualified leads that feed the [[concierge-close]] (quote → free proof → draft order → invoice) instead of expecting strangers to self-checkout custom orders. Keep self-checkout only for low-ticket/simple items. **The conversion event for cold traffic is a quote request / free-proof request — measure and optimize for THAT, not checkout** (source: PNG-Concierge-Conversion-Build-Spec.md). This is the engineering build behind the [[conversion-bridge]].

**Lane:** Claude Code (theme/code) builds this; pairs with the [[draft-order-quote-system]] plumbing and the [[quote-app-evaluation]] decision.

## Decision: app vs. custom code

Two viable paths. The recommendation is to evaluate an app first — faster, and it auto-converts approved quotes to draft orders, which is the bottleneck being removed (source: PNG-Concierge-Conversion-Build-Spec.md).

- **App route (recommended for speed):** install a Shopify "Request a Quote" app that converts approved quotes to draft orders (e.g. BSS B2B Request a Quote — free plan available, 4.9★; or AddToQuote). Gives quote button + form widget, file upload, admin quote management, one-click quote→draft-order, auto-notifications. Replaces the manual draft-order process. See [[quote-app-evaluation]].
- **Custom code route (full control):** build the form + routing in the theme as specced below. Use if app limitations or branding control matter more than setup speed.

Either way, the page-level CTA logic and trust elements below still apply (source: PNG-Concierge-Conversion-Build-Spec.md).

## Tiered CTA logic (key off `product.type`)

Product types are already set cleanly in the catalog ([[store-and-catalog]]); drive the CTA hierarchy off `product.type` (source: PNG-Concierge-Conversion-Build-Spec.md).

| Tier | Product types | Primary CTA | Secondary | Rationale |
|------|---------------|-------------|-----------|-----------|
| **Quote-first** | Event Tents & Canopies, Event Displays & Backdrops, Bundle, Wall Art | "Get a Free Proof →" (copper, full prominence) → opens quote form | "Buy now" / "Add to cart" (navy ghost, lower emphasis) | High-ticket, fully custom — the free proof is the low-friction yes |
| **Checkout-first** | Flags & Banners, Table Covers & Throws, Tent Accessories | "Add to cart" (copper, full prominence) | "Ordering several? Get a bulk quote →" (text link) → quote form | Simpler, lower-ticket, can sell self-serve; quote is the bulk upsell path |

Implement as a snippet that reads `product.type` and renders the correct CTA arrangement. **Default any untyped product to quote-first** (safer for custom) (source: PNG-Concierge-Conversion-Build-Spec.md).

## The quote / free-proof form

Triggered by the "Get a Free Proof" / "Get a quote" buttons. Modal or dedicated page (source: PNG-Concierge-Conversion-Build-Spec.md).

**Fields:** Name (required) · Email (required) · Phone (required — phone leads close best) · Product of interest (pre-filled from the PDP) · Quantity · Event/needed-by date (date picker — drives urgency + production scheduling) · "Tell us about your project" (textarea) · **Logo/artwork upload** (file upload — this is what lets the proof go out fast).

**On submit:**
- Instant auto-reply email to customer (sets the speed expectation).
- Instant alert to Carlos (email + ideally SMS/push) — speed-to-lead is the #1 close factor (source: PNG-Concierge-Conversion-Build-Spec.md).
- If using app: creates a quote in admin, one-click convert to draft order.
- If custom: email to hello@promongrow.com with all fields + attachment; optionally use the Shopify Draft Order API to pre-create a draft order (see [[draft-order-quote-system]]).
- Fire analytics event `quote_request_submitted` (see Measurement, and [[conversion-tracking-setup]]).

Spanish field labels, placeholders, and a Spanish auto-reply are specced in [[bilingual-build-spec]]; the ES strings live in [[spanish-money-page-copy]].

## Trust + clarity elements (every PDP)

Cold custom buyers hesitate for 3 reasons; address each on-page (source: PNG-Concierge-Conversion-Build-Spec.md):

1. **"Will it look right?"** → free-proof banner near the CTA: *"Free proof before you pay. Nothing prints without your approval."* (trust green #1E6B4A check). See [[file-prep-gate]].
2. **"Are they legit?"** → reviews widget (Judge.me or Google reviews) ON the product page, not just the homepage. Show 4.8★ + count near the buy box.
3. **"What will MY version cost?"** → "Starting at $X" visible; for quote-first items, frame as "Custom-priced — get a free quote in [X] hours."

**"How it works" 3-step strip** (PDP + homepage): 1. Send your logo → 2. Approve your free proof → 3. Delivered in 5 business days.

**Mobile:** sticky click-to-call button (copper) on all PDPs — `tel:8448833308`.

## Lead capture (don't let organic traffic leave invisibly)

- **Email capture** — offer "Get our catalog + a free proof on your first order" — soft entry for visitors not ready to quote; feeds the email list ([[email-library]]).
- **Exit-intent popup** — specced in PNG-Abandoned-Cart-and-Exit-Popup; wire it to offer the bundle OR the free-proof path depending on page tier.
- Both fire once per session, after ~5s, NOT on cart/checkout (source: PNG-Concierge-Conversion-Build-Spec.md).

## Quote follow-up sequence (the hidden revenue)

Abandoned-cart covers checkout; unpaid quotes/invoices need their own follow-up or they die silent. A 3-touch automated sequence on any quote/draft-order invoice not yet paid (source: PNG-Concierge-Conversion-Build-Spec.md):

| Touch | Message |
|-------|---------|
| **Day 1** | "Your proof's ready — any tweaks?" (re-send proof, make approval easy) |
| **Day 3** | "Any questions before you lock it in? Happy to jump on a call." |
| **Day 7** | "Your event on [date] is coming — want to start the 5-day production clock?" |

Soft, helpful, deadline-aware, no guilt. Implement via the quote app's automation or Shopify Email/Klaviyo.

## Measurement (judge the funnel by the RIGHT metric)

For cold traffic, success = quote requests, not just checkouts. Track (source: PNG-Concierge-Conversion-Build-Spec.md):
- `quote_request_submitted` (count + by product type)
- Quote → draft order → paid conversion rate
- Click-to-call taps
- Email captures

Surfacing these tells us, in 3–4 weeks, whether organic traffic is converting into the concierge funnel — the green light to layer paid spend (ties to [[customer-journey-map]] and the 90-day roadmap below). See [[conversion-tracking-setup]].

## Design / brand notes

Palette: navy #1B2838, copper #C17A3A (CTAs only — every copper element clickable), trust green #1E6B4A (proof/guarantee marks), white/off-white #F7F7F5. Fonts: DM Serif Display (headlines), DM Sans (UI/body). Buttons: copper bg/white text/5px radius for primary, navy ghost for secondary. Trust-first — the proof guarantee and reviews do the selling, not hype (source: PNG-Concierge-Conversion-Build-Spec.md). Full system in [[png-voice]].

## Build order (suggested)

1. Tiered CTA snippet — biggest conversion lever, ship first
2. Quote form + routing + auto-reply — the bridge
3. Trust elements: free-proof banner, reviews on PDP, how-it-works
4. Lead capture + exit intent
5. Quote follow-up sequence
6. Analytics events

## Related pages
- [[conversion-bridge]]
- [[concierge-close]]
- [[draft-order-quote-system]]
- [[quote-app-evaluation]]
- [[bilingual-build-spec]]
- [[customer-journey-map]]
- [[conversion-tracking-setup]]
- [[email-send-preflight]]
