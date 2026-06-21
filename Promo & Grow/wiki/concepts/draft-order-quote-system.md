# Draft-Order Quote System

> **Canonical tags:** Use the namespaced tag set in [[shopify-tag-taxonomy]] (stage: / src: / tier: / vip). Any tag names in this page map onto that canonical set. (co-CEO reconciliation 2026-06-17)

**Summary**: The end-to-end quote system standardized on Shopify draft orders — a step-by-step SOP to build a quote fast, a ganas-voice presentation template, a speed-to-quote target, the free-proof close accelerant, the bilingual quote-to-paid concierge chase, the now-resolved pricing guardrails, and how each quote updates the pipeline stage + Shopify customer tag. This is the operational layer of the [[concierge-close]] and the destination of the [[conversion-bridge]].
**Type**: funnel
**Sources**: co-CEO build session 2026-06-17; PNG-Closer-Onboarding-Workbook.md; PNG-Master-Context-Playbook.md; PNG-Full-Context_4.14.2026.md; PNG-Pricing-Engine-CONFIDENTIAL.md; PNG-Master-Price-Sheet.md; PNG-Venus-Onboarding-Context-for-Cowork.md.
**Last updated**: 2026-06-17.

---

## Why draft orders (do not switch tools)

Revenue runs on a **human concierge close, not the cart** — 180 days showed 3,936 sessions, 7 add-to-cart, 31 orders (more orders than carts) (source: PNG-Master-Context-Playbook.md). Carlos already produces quotes as **Shopify draft orders**, and confirmed 2026-06-17 to standardize on that — do not move him to another tool now (co-CEO recommendation). Draft orders give us a real invoice/checkout link, customer tagging, discount codes (SHOWUP), and a clean order record, all inside the platform that already holds the catalog. QuickBooks estimates are the documented **future upgrade path** (see below), not a switch.

This page covers the manual draft-order method, the close cadence around it, and where the free proof slots in. See [[concierge-close]] and [[conversion-bridge]].

## SOP — build a draft-order quote fast

Goal: a quote out the door in minutes, not hours. Steps (Shopify Admin → Orders → **Create order**):

1. **Find or create the customer.** Search by email/phone; if new, add name + email + phone. Apply the lead tag (see Stage + tag section).
2. **Add catalog products.** Click *Add product*, search the catalog item, set quantity. Catalog items use the **set price — no math** from the [[master-price-sheet]] (source: PNG-Master-Price-Sheet.md). Print collateral is loaded as hidden Shopify quoting products — search the name, pick the run size, price auto-fills.
3. **Add custom line items.** For anything not in the catalog (custom sizes, step-and-repeat, wraps), click *Add custom item*, name it clearly (e.g. "10x10 Custom Canopy — full-color print, both valances"), set price and qty. Price using the [[pricing-engine]] (Carlos applies cost × markup; Venus route-throughs custom items).
4. **Apply pricing.** Catalog = set price. Custom = per [[pricing-engine]]. Always check the **floor** before sending: min order $100; min margin 60% under $1,000 / 35% at $1,000+ (source: PNG-Pricing-Engine-CONFIDENTIAL.md).
5. **Offer good-better-best where natural** — e.g. Tent Only / Half Wall / Complete Set — as separate line items or as a note, and let the customer choose up (source: PNG-Master-Price-Sheet.md).
6. **Shipping.** Add a shipping line (flat or calculated). If order qualifies for **SHOWUP** (free shipping over $500, 1/customer), apply it as the discount and say so in the note (source: PNG-Full-Context_4.14.2026.md / PNG-Master-Context-Playbook.md).
7. **Add the concierge note** in the order's *Notes* field — the free-proof line + 5-day promise (see the presentation template).
8. **Generate the link.** Use **Send invoice** (emails a branded invoice with a *Pay now* / checkout link) — or **Collect payment → Send payment link** to share the link directly by SMS/WhatsApp. Either produces the customer's one-click pay path.
9. **Log + tag + set follow-up.** Update the pipeline stage, apply the Shopify customer tag, set the Day-1 reminder (§ chase).

Lanes: building/sending the draft order = **Venus** during her hours (Carlos reviews Week 1), **Carlos/VA** otherwise; the pricing engine + price sheet = **Claude-admin** (filed); any quote-form / pixel plumbing that feeds leads in = **Claude Code**.

## Quote-presentation template

Every quote — invoice note or the accompanying email/text — carries the same five beats. Plain structure here; the actual customer wording lives under *Outward copy*.

1. **Line items** — clear names, qty, unit price, total. Good-better-best when natural.
2. **The Get-a-Free-Proof bridge** — the next step is the proof, not payment. This is the [[conversion-bridge]] in one line: "send your logo, I'll make you a free proof."
3. **Social proof** — Donut Media (a trusted brand client), 4.8★ from 19 Google reviews, 5.0★ on Yelp (15), 20+ years in production (source: png-voice.md / PNG-Full-Context_4.14.2026.md; Yelp 5.0/15 per co-CEO build session 2026-06-17).
4. **The 5-day promise** — made-to-order, delivered in 5 business days; the production clock starts when the **proof is approved** (source: store-and-catalog.md). See the SLA honesty rule on [[lead-machine]] / [[fulfillment-sop]].
5. **One clear next step** — exactly one ask: approve the proof, or reply YES to start it.

## The free proof — the close accelerant

The free proof is the single biggest momentum tool and the heart of the bridge. It removes risk ("no charge, no commitment") and creates a yes-ladder: approve the proof → start the clock → pay (source: PNG-Closer-Onboarding-Workbook.md).

Where it slots in:
- **At quote-send:** every quote restates the free proof and 5-day delivery (source: PNG-Closer-Onboarding-Workbook.md).
- **As the chase hook:** "Want me to start that free proof in the meantime?" is the re-open line on a stalled quote.
- **Production:** built in **Canva or Adobe**. **Current owner (confirmed 2026-06-17):** Venus sends the request/specs to **Carlos, who produces the proofs with her** — they knock them out together while she ramps. Revisit handing proof production to a VA/design hire as volume grows. Nothing prints until the customer approves (source: store-and-catalog.md; Carlos 2026-06-17).

## Speed-to-quote target

Speed-to-lead is the **#1 close factor** — first to respond usually wins (source: PNG-Master-Context-Playbook.md / PNG-Closer-Onboarding-Workbook.md).

- **Target: a sent draft-order quote within 2 business hours of a warm lead; same business day at the absolute worst** (co-CEO recommendation).
- **Instant acknowledgement** the moment a lead lands ("Got it — quote coming within the hour"), even before the full quote, to hold the lead.
- **Who:** Venus owns the warm-queue quote during her hours — **10am–4pm PT** (11am–5pm El Salvador; ~1hr ahead of LA) (source: PNG-Venus-Onboarding-Context-for-Cowork.md; Carlos 2026-06-17). The VA/auto-attendant covers the instant acknowledgement after hours. Week 1, Carlos reviews Venus's quotes before they send.

## Pricing guardrails (RESOLVED — see the Pricing Engine)

The pricing `[FILL IN]`s are filled. Full cost/markup logic is confidential in [[pricing-engine]] (owner-only); Venus quotes from the rep-facing [[master-price-sheet]] and route-throughs anything custom. **Catalog = set price, no math. Custom = vendor cost × markup. Never quote below the floor.**

| Rule | Value (source: PNG-Pricing-Engine-CONFIDENTIAL.md) |
|---|---|
| Low-ticket markup (print/collateral) | cost **× 5** default (×6 tiny/rush, ×4 large volume) |
| High-ticket markup (tents/large-format/displays) | cost **× 2.0** default (compress to ×1.8 on volume/repeat/competitive) |
| Tier by cost backstop | cost under ~$50 → low-ticket; ~$50+ & structural → high-ticket |
| Order floor | **$100** minimum order |
| Minimum margin | **60%** under $1,000; **35%** at $1,000+ |
| Custom / not-listed | route-through to Carlos — don't guess |

The floor is the worst-case after negotiation, not the opening price — open at list, only walk toward the floor for volume/repeat/strategic accounts (source: PNG-Pricing-Engine-CONFIDENTIAL.md).

## The quote-to-paid concierge chase (cadence)

Unpaid quotes are the hidden revenue. Cadence on a sent quote: **Day 1 / Day 3 / Day 7**, then monthly nurture — re-send the proof, offer to adjust, then a deadline nudge; persistent, never annoying (source: PNG-Closer-Onboarding-Workbook.md). Channel: lead with the channel the customer used (call/text/email); WhatsApp/SMS for Spanish-first buyers. Outward wording below.

| Touch | Timing | Channel | Job |
|---|---|---|---|
| 1 | Same day (with quote) | Their channel | Send quote + free-proof offer + 5-day promise |
| 2 | Day 1–2 | Call, then email | Re-open with the proof hook |
| 3 | Day 3 | Email/text | "Any questions before [event date]?" |
| 4 | Day 7 | Email/text | Deadline nudge — start the 5-day clock |
| 5+ | Monthly | Email | Soft nurture; don't hound |

## Stage + tag bookkeeping

Pipeline = a **Google Sheet** (working queue + stages) + **Shopify customer tags** (durable state); NOT HubSpot (Carlos decision 2026-06-17). Venus's onboarding doc confirms lead tracking is done by **tagging contacts in Shopify** (source: PNG-Venus-Onboarding-Context-for-Cowork.md). Canonical tag vocabulary is [[shopify-tag-taxonomy]]; keep the sheet and tags in sync on every state change. (Mapping: quote sent → `stage:quote-sent`; invoice paid → `stage:won`; Day-7 no-reply → nurture; explicit no → lost.) A future **Zapier** zap can auto-flip the sheet on Shopify order-paid (co-CEO recommendation; Claude-admin).

## Future upgrade path — QuickBooks (do not switch now)

When volume justifies it, **QuickBooks estimates + payment links** become the quoting layer: an estimate converts to an invoice with a Pay-link and books cleanly into accounting (qbo estimate/invoice/payment-link tools are connected). This is an **upgrade path, not a switch** — Carlos stays on Shopify draft orders today (Carlos decision 2026-06-17). Trigger to revisit: when quote volume or accounting reconciliation pain makes the draft-order method slow (co-CEO recommendation).

## Outward copy (ganas voice)

*Bilingual ganas growth-partner — warm, confident, direct. Anchor every touch on the free proof + 5-day delivery. Read aloud; a real bilingual LA person must say it this way.*

**Instant acknowledgement (hold the lead):**
> "¡Gracias for reaching out! I've got your details — your quote is on the way within the hour. Quick thing while I build it: send me your logo and I'll start a **free proof**, no charge, no compromiso. We deliver in **5 business days** once you love it."

**Quote-send note (on the invoice / email):**
> "Here's your quote — todo claro, no surprises. Everything includes your **free proof** before anything prints, and once you approve it we deliver in **5 business days**. We've done this for 20+ years here in LA, trusted by brands like Donut Media, 4.8★ on Google, 5.0 on Yelp. One step: reply YES and I'll start your proof today."

**Good-better-best line:**
> "Based on lo que me contaste, here's what I'd recommend — Tent Only, Half Wall, or the Complete Set. Cualquiera de los tres te deja showing up looking sharp. Which one fits your event?"

**Chase — Day 1–2 (proof hook):**
> "Hey [name], it's [Venus] from Promo & Grow. Want me to start that **free proof** so you can see your brand on it before deciding? Toma dos minutos and there's zero commitment."

**Chase — Day 3:**
> "Any questions before your [event date]? Con gusto jump on a quick call. The sooner we proof, the sooner we start your 5-day clock."

**Chase — Day 7 (deadline nudge):**
> "Your event's coming up — quieres que empecemos la producción so you're covered? Once you approve the proof, it's **5 business days** door to door. Just say go."

**Price-pushback (protect the floor):**
> "Te entiendo — let's make it work for your event. We can start with [smaller tier] y aún así llegas looking pro. What's your target?" *(explore the need; never discount past the floor — escalate to Carlos.)*

## Related pages
- [[pricing-engine]]
- [[master-price-sheet]]
- [[concierge-close]]
- [[conversion-bridge]]
- [[the-20k-math]]
- [[closer-hire]]
- [[store-and-catalog]]
- [[png-voice]]
- [[reactivation-email-sequence]]
- [[sms-marketing]]
