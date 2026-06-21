# Promo & Grow — Master Growth Context & Playbook

**Owner:** Carlos A. Diaz Jr · **Store:** promongrow.com (Shopify Basic) · **Compiled:** May 2026
**Goal:** Scale to $20K+/month by year-end, 85%+ automated, sourcing via B2Sign + 4over.
**This doc:** The single source of truth for the entire growth build — diagnosis, decisions,
deliverables, and what's next. Pairs with all the individual spec/copy files produced.

---

## 1. THE BUSINESS (context)

Promo & Grow is a 20+ year LA-based (Lynwood) custom event-display company: branded tents, table
covers/throws, flags, SEG fabric displays, wall art, banners. Made-to-order, printed via B2Sign/4over,
**delivered in 5 business days** (the hero stat). 4.8★ on Google (19 reviews). Owner: Carlos.
Sister business: Proágo Branding (proagobranding.co / proago.club) — an agency; shares the tagline
"Helping Brands Promote & Grow." Parked for now to focus on PNG revenue.

**Brand system:** Navy #1B2838, Copper #C17A3A (CTAs only), Trust Green #1E6B4A, white/off-white
#F7F7F5. Fonts: DM Serif Display (headlines), DM Sans (body). Voice: "shop-foreman-turned-editor" —
direct, specific, no hype, generous to customers, 5-day stat everywhere.

---

## 2. THE CORE DIAGNOSIS (the whole strategy rests on this)

**The business runs on a concierge close, not self-serve checkout.** Customers call/email → Carlos
builds a Shopify draft order → sends an email invoice → they pay. This is why most products sold are
"custom" and why ~$20k of historical revenue logged against blank/untitled products (those were
invoices, not bugs).

**The funnel data (180 days):** 3,936 sessions → 7 add-to-cart actions → 31 completed orders.
**More orders completed than carts started** = revenue comes through the concierge close, NOT the web
cart. The on-site cart is nearly dead (0.18% add-to-action); the human close works (2.5–3% in
low-traffic/warm months vs 0.2–0.4% in high-traffic/cold months).

**The conclusion:** PNG doesn't have a conversion problem — it has a **missing bridge.** Cold organic
traffic has no low-friction on-ramp into the concierge close that already converts. The only on-site
door is "Add to Cart" (wrong door for custom). The fix: add a **"Get a Free Proof" / quote** path that
feeds the concierge close, keep checkout for simple/low-ticket items.

**The $20K math (each number already individually achieved):**
> 2,000 qualified sessions × 2.5% conversion × $400 AOV = $20,000/month.
Target: hit $20K at peak (Oct–Nov 2026); lock it as a sustained floor by Q1 2027 conference season.

**Seasonality reality:** B2B events die over holidays; Dec is historically weak (~$1k). Don't force
$20k against December — counter with wall-art/gifting + Q1 pre-booking.

---

## 3. THE STRATEGY (priority order)

1. **Bridge cold traffic → concierge close** via "Get a Free Proof" CTA. The #1 lever.
2. **Prove organic conversion first** (2-week baseline), THEN cold outreach, THEN paid ads.
   (Discipline borrowed from the Proágo Campaign SOP — the "CMAA lesson": never send traffic to a
   page that isn't mechanically ready. Dual-mode gate: Strategist check + Direct Response check.)
3. **Tier the funnel by product:** quote-first on high-ticket/custom (tents, displays, bundles,
   wall art); checkout-first on simple/low-ticket (flags, table covers, accessories).
4. **Layer the moats:** bilingual Spanish (big — see §6), SMS, then cold email/ABM, then paid.
5. **Staff the close:** hire a bilingual closer to work warm leads (see §7).
6. **Measure the RIGHT metric:** for cold traffic, success = quote requests / calls, not checkouts.

**Two-agent division of labor:**
- **Claude Code** = theme/code (popups, quote form, CTAs, pixel, bilingual plumbing, banner product)
- **Claude (admin/strategy)** = Shopify admin, catalog, copy, data, connectors, marketing assets
- **Carlos/VA** = platform toggles (automations, GBP, sends), approvals, the human close

---

## 4. WHAT'S DONE ✅

### Store foundation (live in Shopify, via connector)
- **31 products fully optimized:** clean titles, standardized vendor "Promo & Grow" (was "My Store" /
  "Promote & Grow Shop"), real product types, buyer-intent tags, written SEO titles + meta descriptions,
  spec-led descriptions with AEO FAQ blocks (for Google AI Overviews / ChatGPT / Perplexity citation).
  - 8 money pages (3 tents, 4 SEG displays, acrylic) — full rewrites + FAQ
  - 5 flags, 4 table covers/throws/runner, 6 displays, 4 tent accessories, 2 wall art
  - 2 blank high-ticket pages (20ft SEG, acrylic) written from scratch
  - Fixed `-copy` URLs with 301 redirects (zero link equity lost)
  - 2 junk "Print Only" duplicates set to Draft
- **Inventory policy:** confirmed products are purchasable (tracking off = always buyable). DENY policy
  dormant but flagged.
- **Held (by design):** Easify "Size"/"Hardware" app products NOT drafted — would risk breaking
  custom-option cart pricing. Routed to Claude Code for safe noindex instead.

### Email deliverability (FIXED + PROVEN in data)
- SPF, DKIM authenticated via Shopify (sender = hello@promongrow.com, no rewrite).
- DMARC record added in Squarespace DNS: `v=DMARC1; p=none; rua=mailto:hello@promongrow.com; pct=100; adkim=r; aspf=r`
- **Proof it worked:** bounce dropped 7.5%→1%, delivery 93%→99% between May 1 and May 25 sends.
- Future: tighten DMARC to p=quarantine after ~2 weeks of clean rua reports (NOT before a big send).

### Email campaign performance (4 sends analyzed)
- Opens consistently strong: 32–39% (top of B2B range). Opening is NOT the problem.
- **KEY INSIGHT:** Apr 23 "reply to me" email got **13% clicks** (3–5x others); Jan 30 hard-sell
  discount blast got **0%**. Audience wants CONVERSATION, not "buy now." All future campaigns →
  soft/reply/call format.
- May 25 "Event SZN" send → 1 order, $800 (customer opened email, then called — concierge close working).

### Reactivation email sequence (8 emails, scheduled)
- Professionally built HTML, on-brand, Carlos voice. Reactivation arc: reintroduce → reframe value →
  prove → desire → offer → sustain. Thursdays 10am PT cadence. Email 8 (VIP) → repeat buyers only.
- Fixes required at send: `{% unsubscribe %}` → `{{ unsubscribe_link }}` (Shopify syntax),
  swap bit.ly/3REpAhn for real URLs, use "starting at $X" not hard bundle prices.

### Verified dependencies
- Bundles: live via a **bundle-builder app** (not static products) at /collections/bundles. Quote
  "starting at $X / save 15%" in emails, not hard prices.
- SHOWUP code: active (free shipping). Teardrop Flag: exists.

### Customer/lead intelligence
- **Repeat buyers mined.** Top: Josh Craig @ Donut Media (10 orders, $6,239 — Donut is his employer,
  the "bootyhustlers" entry is his brand, same person). Pathita @ Tao Kae Noi ($2,566).
- **Hidden institutional account: South Gate (sogate.org)** — 3 staffers (Jennifer Mejia, Franklin
  Arroyo, Julie Jimenez) = one account worth ~$3,760+. Pursue as a formal PO/reorder relationship.
- VIP outreach drafted (2 templates: brand/repeat + institutional). Carlos texting Josh personally.

### Concierge build (Claude Code shipped the theme builds)
- Tiered CTAs, free-proof quote form, trust elements per the build spec.

---

## 5. THE FUNNEL / CONVERSION SYSTEM (spec'd, building)

**The bridge = "Get a Free Proof" quote path.** Spec'd in PNG-Concierge-Conversion-Build-Spec:
- Tiered CTA by product type (quote-first vs cart-first)
- Quote form: name/email/phone/product/qty/event-date/notes/**logo upload**
- Instant auto-reply + instant admin alert (speed-to-lead = #1 close factor)
- Trust on PDP: free-proof guarantee, 4.8★ reviews on-page, "starting at" price, how-it-works 3-step
- Lead capture + exit-intent popup
- Quote follow-up sequence (3-touch on unpaid invoices — the hidden revenue)
- Analytics: track `quote_request_submitted` as the cold-traffic success metric

**Quote app decision:** evaluate an app (BSS B2B Request a Quote / AddToQuote) that auto-converts
quotes → draft orders → invoices. Automates Carlos's manual process. 15-min test before committing.

---

## 6. BILINGUAL SPANISH MOAT (kit built, ready to implement)

Three wins: (1) trust/conversion for Spanish-speaking buyers, (2) a near-empty Spanish SEO/AEO surface,
(3) a defensible moat national POD shops can't copy. Made-in-Lynwood identity reinforces it.

- **Foundation:** Shopify Markets (native, free, best for SEO — NOT a JS translate widget). hreflang,
  /es/ URLs, language toggle, bilingual quote form. Spec'd in PNG-Bilingual-Build-Spec (Claude Code).
- **Copy:** all 8 money pages + quote form + UI strings translated in Carlos's voice (real US-Latino
  business Spanish, not machine-dump). FAQ blocks preserved = Spanish AEO surface. In
  PNG-Spanish-Money-Page-Copy. Key terms: "carpa"/"toldo" (tent), "prueba gratis" (free proof),
  "hecho a la medida en Los Ángeles".
- **Stage hero pages live FIRST** (never half-translated). Full site is the destination.

---

## 7. HIRING (posts live; onboarding kit pending)

**Decision: closer-first** (flip from generalist), because: (a) warm leads exist to close now
(reactivation repliers, VIP list, inbound), (b) closer trains on warm leads then graduates to cold,
(c) Carlos reserves his sales chops for high-level Proágo deals. Phased toward adding a design/ops
hire later.

- **Job posts written & going live:** Bilingual Closer/Account Manager (gate word TOLDO) AND a
  "unicorn" design+sales+AI+ops post (gate word CINCO) — run both, let the market decide.
- **Screening:** the 60–90 sec **Spanish voice clip is the hire** — judge warmth/trust first, before
  anything else. Gate words filter the 80% who don't read. Paid trial on real warm leads before commit.
- **El Salvador $15–25/hr** = sweet spot (US-Central time overlap, native Spanish, real design/tech pool).
- **Day-one rule:** point the hire at WARM leads (email repliers/clickers, VIP list, inbound) — NOT
  cold outreach. Cold comes later, once funnel + skills are proven.
- **Pending (next round):** scorecard, structured interview Qs (incl. spotting fake AI-proficiency),
  paid-trial setup, SOP/Loom capture system (turns each order into documented + automatable process,
  AND maps what the website must eventually self-serve), 90-day ramp.

---

## 8. SMS MARKETING (playbook built)

Strong fit: your audience responds to conversation (the 13% email proof), lives on phones, Spanish-
speaking. SMS = conversation that triggers the call that closes. Drive reply/call, never checkout.
- **Compliance first (TCPA):** explicit opt-in only. Build consent via checkout opt-in box + "text us"
  + quote-form checkbox. Every marketing text needs sender ID + STOP. Low volume, high value, quiet hours.
- **Setup:** 2-way SMS app (Postscript/SMSBump/Recart) integrated w/ Shopify checkout opt-in.
- **Fit:** transactional/proof updates (warms channel) → warm re-engagement → quote follow-up → inbound.
- 8 marketing SMS hooks drafted (conversation-starter, free-proof, deadline, reorder, reframe, owner
  note, social-proof, two-booths contrast) + Spanish versions. Start with conversation-starter,
  free-proof, owner-note. See chat for full set; can be finalized into the playbook.

---

## 9. PAID / COLD EMAIL (parked — Phases 3 & 4)

- **Cold email/ABM:** simpler adaptation of the Proágo playbook. First segment: **local Spanish-speaking
  small businesses** (geographic proxy: Lynwood, South Gate, Huntington Park, Bell, East LA, etc.;
  business-type proxy: taquerías, party/event planners, quinceañera vendors, panaderías, churches,
  swap-meet vendors). Use a SEPARATE sending domain — **promotengrow.com must be reconfigured as a real
  isolated sending domain (own SPF/DKIM/DMARC + warm-up), NOT a redirect** — to protect promongrow.com.
  Parked until funnel proves organically.
- **Paid ads:** retargeting first (cheapest/warmest), then Google Search/Shopping (highest intent),
  hold cost-per-sale < ~$60–70 (30–45% margin). Meta retargeting only at first. Phase 4, post-proof.
- **DO NOW regardless:** install **Meta Pixel + Google remarketing tag** (the CMAA lesson — every day
  without a pixel is unrecoverable retargeting data). No traffic minimum. 30-min Claude Code task.

---

## 10. 90-DAY ROADMAP (gated)

- **Phase 1 (Wk 1–2): Verify the bridge.** Direct-Response test the quote form, page speed, tiered CTAs,
  abandoned-cart ON, **install pixel NOW**, trust elements, GA4 quote event.
- **Phase 2 (Wk 3–4): Organic baseline.** Optimize GBP (drives calls), VIP + South Gate outreach, SEO
  compounds. Gate = quote requests trending up (the GREEN LIGHT for paid).
- **Phase 3 (Wk 5–8): Cold email** (only after proof). Separate domain, warm leads first.
- **Phase 4 (Wk 9–12): Paid + retargeting** (only after proof). Pre-flight checklist every launch.
- **Weekly 10-min dashboard:** quote requests, calls/GBP actions, add-to-action rate, orders/revenue/AOV,
  quote→paid %, (later) cold-email reply rate, cost-per-sale.

---

## 11. DELIVERABLES PRODUCED (the file library)

1. **PNG-Email-Send-Preflight-SOP** — reusable send checklist (auth, syntax fix, test, schedule).
2. **PNG-Concierge-Conversion-Build-Spec** — the quote-first funnel build (for Claude Code).
3. **PNG-Customer-Journey-Map** (HTML) — current vs ideal vs target funnel + $20k math.
4. **PNG-90-Day-Execution-Roadmap** — gated phases, owners, metrics, dual-mode gate.
5. **PNG-Quote-App-Evaluation** — pick the right quote→draft-order app + 15-min test.
6. **PNG-Bilingual-Build-Spec** — Shopify Markets / hreflang / es plumbing (for Claude Code).
7. **PNG-Spanish-Money-Page-Copy** — all 8 pages + quote form + UI strings, in Carlos voice.
8. **PNG-Closer-Hiring-JobPost** — bilingual closer post + screening test (gate: TOLDO).
9. **PNG-Unicorn-Hiring-JobPost** — design+sales+AI+ops post + 4-skill test (gate: CINCO).
10. **PNG-SMS-Marketing-Playbook** — compliance, setup, funnel fit, bilingual templates.
11. **PNG-Master-Context-Playbook** (this file).

Pre-existing reference assets: CLAUDE.md (theme build guide), the Canva manifests, Blueprint, voice-guide,
visual-system, copy-templates, canva-ops, abandoned-cart/exit-popup spec, Proágo Campaign SOP & Market
Penetration Playbook (the ABM discipline source).

---

## 12. IMMEDIATE NEXT STEPS (the live punch list)

- [ ] **Post both hiring listings tonight** (in progress). Triage: kill non-gate-word apps → judge Spanish
      voice clip FIRST → shortlist 3–5 → paid trial on warm leads.
- [ ] **Install Meta Pixel + Google remarketing tag** (Claude Code) — highest-urgency, data-loss clock.
- [ ] **Confirm abandoned-cart automation is ON** before more sends.
- [ ] **Turn on checkout SMS opt-in** — start building a consented list now.
- [ ] **Continue the 8-email sequence** (emails 2–8 scheduled, Thursdays).
- [ ] **Fire VIP outreach** (10 personal emails) + South Gate institutional pitch.
- [ ] **Implement bilingual** (Claude Code plumbing + paste Spanish copy, hero pages first).
- [ ] **Verify the quote funnel** mechanically (Direct Response check) → start 2-week organic baseline.
- [ ] **When shortlist is ready:** build the closer onboarding kit (scorecard, SOP/Loom, ramp).

---

*Living document. Update as the build evolves. The throughline: feed the concierge close that already
works (email/SMS/calls/quotes → warm queue → bilingual closer → invoice → reorder), document everything,
and use what's learned to make the website eventually self-serve — the real long-term goal.*
