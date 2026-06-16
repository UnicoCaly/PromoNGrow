# Promo & Grow — Concierge Conversion System: Claude Code Build Spec

**Goal:** Convert cold organic traffic into qualified leads that feed Carlos's concierge close
(quote → free proof → draft order → invoice), instead of expecting strangers to self-checkout
custom orders. Keep self-checkout for low-ticket/simple items.

**Core principle:** The conversion event for cold traffic is a **quote request / free-proof request**,
NOT a checkout. Measure and optimize for that.

---

## 0. DECISION: App vs. custom code

Two viable paths. Recommend evaluating an app first (faster, auto-converts to draft orders):

- **App route (recommended for speed):** Install a Shopify "Request a Quote" app that converts
  approved quotes to draft orders (e.g. BSS B2B Request a Quote — free plan available, 4.9★;
  or AddToQuote). These give: quote button + form widget, file upload, admin quote management,
  one-click quote→draft-order, auto-notifications. This replaces Carlos's manual draft-order process.
- **Custom code route (full control):** Build the form + routing in the theme as specced below.
  Use if app limitations or branding control matter more than setup speed.

Either way, the page-level CTA logic and trust elements below still apply.

---

## 1. TIERED CTA LOGIC (key off product type)

Product types are already set cleanly in the catalog. Drive CTA hierarchy off `product.type`:

### Quote-first tier (hero CTA = "Get a Free Proof")
Types: `Event Tents & Canopies`, `Event Displays & Backdrops`, `Bundle`, `Wall Art`
- **Primary button:** "Get a Free Proof →" (copper #C17A3A, full prominence) → opens quote form
- **Secondary button:** "Buy now" / "Add to cart" (ghost/outline style, navy, lower emphasis)
- Rationale: high-ticket, fully custom — the free proof is the low-friction yes.

### Checkout-first tier (hero CTA = "Add to Cart")
Types: `Flags & Banners`, `Table Covers & Throws`, `Tent Accessories`
- **Primary button:** "Add to cart" (copper, full prominence)
- **Secondary link:** "Ordering several? Get a bulk quote →" (text link) → opens quote form
- Rationale: simpler, lower-ticket, can sell self-serve; quote is the upsell path for bulk.

Implement as a snippet that reads `product.type` and renders the correct CTA arrangement.
Default any untyped product to quote-first (safer for custom).

---

## 2. THE QUOTE / FREE-PROOF FORM

Triggered by the "Get a Free Proof" / "Get a quote" buttons. Modal or dedicated page.

**Fields:**
- Name (required)
- Email (required)
- Phone (required — phone leads close best)
- Product of interest (pre-filled from the PDP they came from)
- Quantity
- Event/needed-by date (date picker) — drives urgency + production scheduling
- "Tell us about your project" (textarea)
- **Logo / artwork upload** (file upload — this is what lets Carlos proof fast)

**On submit:**
- Instant auto-reply email to customer (see copy below) — sets the speed expectation
- Instant alert to Carlos (email + ideally SMS/push) — speed-to-lead is the #1 close factor
- If using app: creates a quote in admin, one-click convert to draft order
- If custom: email to hello@promongrow.com with all fields + attachment; optionally use
  Shopify Draft Order API to pre-create a draft order
- Fire an analytics event `quote_request_submitted` (see §6)

**Auto-reply copy (Carlos voice):**
> Subject: Got it — your proof is on the way
> Hey [Name], Carlos here. Got your request for [product]. I'll have a free proof back to you
> within [X business hours] — no charge, no commitment. If it's time-sensitive, call me direct
> at (844) 883-3308. — Carlos, Promo & Grow

---

## 3. TRUST + CLARITY ELEMENTS (every PDP)

Cold custom buyers hesitate for 3 reasons. Address each, on-page:

1. **"Will it look right?"** → Free-proof banner near the CTA:
   "Free proof before you pay. Nothing prints without your approval." (trust green #1E6B4A check)
2. **"Are they legit?"** → Reviews widget (Judge.me or Google reviews) ON the product page,
   not just the homepage. Show the 4.8★ + count near the buy box.
3. **"What will MY version cost?"** → "Starting at $X" visible; for quote-first items, frame as
   "Custom-priced — get a free quote in [X] hours."

**"How it works" 3-step strip** (add to PDP + homepage):
1. Send your logo → 2. Approve your free proof → 3. Delivered in 5 business days.

**Mobile:** sticky click-to-call button (copper) on all PDPs — `tel:8448833308`.

---

## 4. LEAD CAPTURE (don't let organic traffic leave invisibly)

- **Email capture** (offer: "Get our catalog + a free proof on your first order") — soft entry
  for visitors not ready to quote. Feeds the email list.
- **Exit-intent popup** — already specced in PNG-Abandoned-Cart-and-Exit-Popup doc; wire it to
  offer the bundle OR the free-proof path depending on page tier.
- Both should fire once per session, after ~5s, not on cart/checkout.

---

## 5. QUOTE FOLLOW-UP SEQUENCE (the hidden revenue — set up alongside)

Abandoned-cart covers checkout. Unpaid quotes/invoices need their own follow-up or they die silent.
3-touch automated sequence on any quote/draft-order invoice that hasn't been paid:
- **Day 1:** "Your proof's ready — any tweaks?" (re-send proof, make it easy to approve)
- **Day 3:** "Any questions before you lock it in? Happy to jump on a call."
- **Day 7:** "Your event on [date] is coming — want to start the 5-day production clock?"
(Soft, helpful, deadline-aware. No guilt.) Implement via the quote app's automation or Shopify Email/Klaviyo.

---

## 6. MEASUREMENT (judge the funnel by the RIGHT metric)

For cold traffic, success = quote requests, not just checkouts. Track:
- `quote_request_submitted` (count + by product type)
- Quote → draft order → paid conversion rate
- Click-to-call taps
- Email captures
Surface these so we can tell, in 3–4 weeks, whether organic traffic is converting into the
concierge funnel — the green light to layer paid spend.

---

## 7. DESIGN / BRAND NOTES

- Palette: navy #1B2838, copper #C17A3A (CTAs only), trust green #1E6B4A (proof/guarantee marks),
  white/off-white #F7F7F5. Copper = clickable only.
- Fonts: DM Serif Display (headlines), DM Sans (UI/body).
- Buttons: copper bg, white text, 5px radius for primary; navy ghost for secondary.
- Keep it clean and trust-first — the proof guarantee and reviews do the selling, not hype.

---

## BUILD ORDER (suggested)

1. Tiered CTA snippet (§1) — biggest conversion lever, ship first
2. Quote form + routing + auto-reply (§2) — the bridge
3. Trust elements: free-proof banner, reviews on PDP, how-it-works (§3)
4. Lead capture + exit intent (§4)
5. Quote follow-up sequence (§5)
6. Analytics events (§6)

*Pairs with: PNG-Email-Send-Preflight-SOP, PNG-Abandoned-Cart-and-Exit-Popup, CLAUDE.md design system.*
