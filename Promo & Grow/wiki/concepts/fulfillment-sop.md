# Fulfillment SOP — 5-Day Delivery (from Proof Approval)

> ⚠️ **SLA honesty rule.** P&G is a reseller and does not control vendor or ship time. Every customer-facing delivery promise reads "5 business days from PROOF APPROVAL," never an unconditional "5 days guaranteed." See [[lead-machine]]. (co-CEO 2026-06-17)

**Summary**: The Station 4 FULFILL SOP — the end-to-end order-processing checklist that guarantees the 5-business-day delivery promise every time, from a paid draft order through delivery confirmation, review request, and reorder flag. It is the back half of the order flow, picking up where SOP-05 (Proof, Checkout & Shipping) leaves off.
**Type**: concept
**Sources**: co-CEO build session 2026-06-17; draws on [[concierge-close]], [[store-and-catalog]], SOP-05-Proof-Checkout-Shipping.md, SOP-02-Create-Draft-Order-Shopify.md, [[conversion-bridge]].
**Last updated**: 2026-06-19 (order cutoff = 1pm PST).

---

## What this is

This is the FULFILL station — order processing and on-time delivery. The front half of the order (quote → draft order → invoice → checkout → paid) is already documented in SOP-01 through SOP-07 of the Venus Onboarding Kit. This SOP starts the moment a draft order flips to **paid** and runs through **delivery confirmation, the Google review request, and the reorder flag.** In the existing SOP series this slots in as the missing **SOP-08 — Fulfill & Deliver** (co-CEO recommendation; lane: Claude-admin to file into the SOP Library, Carlos to record the matching Loom).

The job of this SOP is singular: **nothing ships late.** The 5-business-day promise is the brand (source: store-and-catalog.md). A missed delivery breaks the one thing the [[png-voice|ganas voice]] is built on — "we say 5 days and hit 5 days."

Run it as a checklist. A closer or VA should be able to keep it open and work straight down it.

## The clock truth (read this first)

The 5-business-day clock does **NOT** start at payment. It starts at **proof approval** — nothing goes to production until the customer approves the free proof, and approval starts the 5-business-day delivery clock (4 days on print) (source: SOP-05-Proof-Checkout-Shipping.md).

That means there are really **two clocks**, and the gap between them is the #1 place orders go late:
- **Clock 0 — Payment → Proof approval.** Uncontrolled time. Bad files and slow approvals live here. The file-prep gate (below) and same-day proof turnaround compress this.
- **Clock 1 — Proof approval → Delivered.** The promised 5 business days. This is the SLA we guarantee.

**Operating rule:** the customer hears "5 business days from proof approval." We never quote a delivery date off the payment date. (co-CEO recommendation)

## The end-to-end flow (10 steps)

1. **Paid draft order** — draft flips to a paid invoice; production is now authorized (source: SOP-05-Proof-Checkout-Shipping.md).
2. **Order intake / confirmation** — log the order, send the customer a confirmation, set expectations on the proof + clock.
3. **Artwork / file check** — the gate. Run every file against the checklist before anything goes to a vendor (the 40-50% bad-file problem — see [[file-prep-gate]]).
4. **Production order to vendor** — place with B2Sign (preferred), Tradebanner (B2Sign backup), 4over (print), or Soar Dist USA (complex/enclosed tents), or route in-house at Lynwood; full routing on [[pricing-engine]] §4 (source: store-and-catalog.md).
5. **Proof approval** — customer approves the free proof. **This starts the 5-day clock** (source: SOP-05-Proof-Checkout-Shipping.md).
6. **Production** — vendor manufactures (~4 days on print) (source: SOP-05-Proof-Checkout-Shipping.md).
7. **QC** — verify the finished product against the order before it leaves (or on arrival at Lynwood).
8. **Ship** — to the customer, or to Lynwood (10514 Long Beach Blvd) for pickup (source: store-and-catalog.md).
9. **Deliver → delivery confirmation** — confirm it landed; capture tracking-delivered or pickup-collected.
10. **Review request → reorder flag** — request the Google review at delivery, tag VIP / reorder, queue the reorder loop.

## The 5-day SLA — day-by-day backward plan

Build the plan backward from the promised delivery day. "Day 1" = the day the 5-day clock starts (the day proof is approved). The pre-clock work (intake + file check + getting to an approved proof) must be compressed to as close to same-day as possible so Clock 0 doesn't eat the promise.

| Day | Must happen by end of day | Owner / lane | Tracked in |
|---|---|---|---|
| **Day 0 (paid)** | Order confirmed to customer; file received; file check started; if file is clean, proof requested from vendor same day | Carlos/VA (intake), Claude-admin (file check) | Sheet stage = `Intake`; Slack #orders post |
| **Day 0-1** | Clean proof in customer's hands; chase approval (speed-to-lead applies here too) | Carlos/VA | Sheet = `Proof sent` |
| **Day 1 (CLOCK STARTS)** | **Proof approved** → production order placed with vendor; vendor confirms in-hands/ship date that lands by Day 5 | Carlos/VA | Sheet = `In production`; tag `production` |
| **Day 2** | Vendor in production; confirm no exceptions raised | Carlos/VA | Sheet = `In production` |
| **Day 3** | Production nearing complete; confirm ship method + label; if rush, expedite already locked | Carlos/VA | Sheet = `In production` |
| **Day 4** | Product produced; QC done; **shipped** (ground that arrives Day 5) or staged at Lynwood for pickup | Carlos/VA | Sheet = `Shipped`; Shopify fulfillment = Fulfilled + tracking; Slack #orders |
| **Day 5** | **Delivered**; delivery confirmed; review request sent; VIP/reorder flag set | Carlos/VA | Sheet = `Delivered` → `Closed`; tag `delivered`, `review-requested` |

**Why Day 1 is the hinge:** if proof isn't approved by Day 1, you only have 4 working days of production+ship left, and ground shipping alone can eat 2-3 of them. An approval that slips to Day 3 means the order can only hit 5 days with expedited shipping (a cost we eat or quote). Protect Day 1.

### Order-cutoff & expectation rules (protect the promise)

- **Daily cutoff:** orders paid + file-clean **before 1pm PST** start the clock that same business day; after 1pm PST, the clock starts next business day. State this at intake. (source: Carlos 2026-06-19)
- **Business days only:** the clock counts business days. An order approved Friday afternoon delivers the following Friday, not over the weekend. Say it plainly.
- **The clock starts at proof approval, not payment** — every customer-facing date is anchored to approval (source: SOP-05-Proof-Checkout-Shipping.md).
- **Never quote a date you can't hit** — if the calendar is tight or it's a rush, it becomes a custom/closing quote confirmed with Carlos before you promise anything (source: SOP-05-Proof-Checkout-Shipping.md).
- **Event-date capture:** the quote form already collects the event date (source: conversion-bridge.md). At intake, check event date vs. the 5-day clock immediately — if the event is inside the window, flag rush at Day 0, not Day 3.

## The artwork / file-prep gate

This is the single biggest threat to the SLA. **40-50% of customer files arrive bad** (source: PNG-Full-Context_4.14.2026.md, via [[store-and-catalog]] / dashboard). A bad file caught on Day 1 is a half-day fix; a bad file caught by the vendor on Day 3 blows the promise.

**The rule: no file goes to a vendor until it passes the gate.** The gate, and how it gets progressively automated, lives on its own page: [[file-prep-gate]]. In short:
- **Now (Phase 1):** human checks each file against the file-prep checklist; point customers to the design-resources page so files arrive right ($0).
- **Next (Phase 2):** Canva templates so the customer builds a correct file (~$13/mo, 70-80% clean).
- **Then (Phase 3):** a Claude-vision file checker auto-flags bad files at intake (~$50-100/mo, 90%+ clean) (source: PNG-Full-Context_4.14.2026.md).

Gate quick-check (run at Day 0): correct dimensions for the product/variant ordered; resolution/DPI adequate for the print size; bleed + safe-zone present; color mode (CMYK for print); fonts outlined or supplied; logo is vector or high-res; file matches the variant on the draft order. If any fail → bounce it back to the customer same day with a specific fix (see outward copy), or route to design. Do not let an unclear file sit silently — that's clock 0 leaking.

## Status tracking (three layers, one source of truth)

Per Carlos's decision, the pipeline is a **Google Sheet (working queue + stages) + Shopify customer tags (durable state)** — not HubSpot. Fulfillment adds a Shopify fulfillment-status layer and a Slack #orders post.

**1. Google Sheet — the working queue.** One row per order, moving through fulfillment stages:
`Paid → Intake → File check → Proof sent → Proof approved (CLOCK START) → In production → QC → Shipped → Delivered → Closed`
Columns: order #, customer, product, event date, **promised-by date (approval +5 biz days)**, vendor, current stage, owner, exception flag. (co-CEO recommendation; lane: Claude-admin to template, Carlos/VA to run.) [Carlos to provide: the Sheet URL / whether to reuse the closer's existing pipeline tab.]

**2. Shopify — fulfillment status + durable tags.** Mark the order Fulfilled with tracking when it ships. Durable customer/order tags so state survives outside the Sheet: `production`, `shipped`, `delivered`, `review-requested`, `reorder-flag`, `VIP`, plus an exception tag `late-risk` when an order is behind plan. (lane: Claude-admin / Carlos-VA.)

**3. Slack #orders — the heartbeat.** The Slack workspace `progobrandingdept` already has **#promo-and-grow** (Carlos↔Venus) and #promongrow_site_builder-order_manager — see [[slack-workspace-setup]]; the next step is to **add an `#orders` channel** (lane: Claude-admin can create it; Carlos to confirm). Then post a short line at each state change: paid, proof approved (clock start), in production, shipped (+tracking), delivered. This gives Carlos + VA + Venus a live shared view without opening three tools. [Carlos to provide: who should be in #orders.]

## QC, ship, and delivery confirmation

- **QC (Day 4):** check the finished product against the order line — right product/variant, right artwork (matches the approved proof), right quantity, no print defects. If it fails QC, trigger the reprint exception immediately (below) — better to know Day 4 than have the customer find it.
- **Ship:** orders $500+ ship free ground; smaller items ~$30 ground; faster is a custom/closing quote confirmed with Carlos (source: SOP-05-Proof-Checkout-Shipping.md, SOP-02-Create-Draft-Order-Shopify.md). Choose the ground service that arrives by Day 5; if ground can't make it, expedite was already locked at Day 1.
- **Lynwood pickup:** product can ship to the customer or to Lynwood (10514 Long Beach Blvd) for pickup (source: store-and-catalog.md). For pickup, confirm the customer is told it's ready.
- **Delivery confirmation:** capture carrier-delivered status (or pickup-collected). This is the trigger for the review + reorder loop — don't request a review before it's actually in their hands.

## The review-and-reorder loop

The moment of delivery is the warmest the customer will ever be. Two actions fire here:

1. **Request the Google review at delivery.** GBP sits at 4.8★ on Google (~19 reviews) (source: dashboard, 2026-06-17) — every delivered order is a chance to grow that. Send the review ask within 24 hours of confirmed delivery, while the win is fresh. Tag `review-requested`.
2. **Tag VIP / reorder.** Set the `reorder-flag` and, for repeat or high-value buyers, `VIP`. This feeds the [[vip-reactivation-list]] and the closer's tier-3 warm queue (source: closer-hire.md). The archetype is [[josh-craig-donut-media]] — 10 orders, $6,239 — exactly the loop this is meant to manufacture more of. Institutional buyers like [[south-gate-account]] get flagged for a formal PO/reorder relationship.

**Reorder trigger (co-CEO recommendation):** set a follow-up for repeat-cycle buyers (e.g. event-season or [Carlos to provide: typical reorder interval]) so the closer reaches out before they shop elsewhere — the cheapest revenue P&G has.

## Exception handling

Every exception gets the `late-risk` tag, a Slack #orders flag, and Carlos looped in. Don't sit on an exception silently — surfacing it on Day 1-2 is recoverable; surfacing it on Day 4 is a missed promise.

| Exception | Action |
|---|---|
| **Bad file at the gate** | Bounce to customer same day with the specific fix, or route to design. Pause the clock conversation — be honest that the clock starts when the proof is approved. |
| **Slow proof approval** | Chase Day 0-1 (speed-to-lead). If it slips past Day 1, re-baseline the promised date OR lock expedited shipping to still hit 5 days — confirm cost with Carlos. |
| **Vendor delay** | Confirm new ship date against Day 5. If it breaks the promise: (a) split-ship / partial, (b) re-route to a backup vendor (B2Sign ↔ Tradebanner ↔ 4over ↔ Soar Dist USA ↔ in-house), or (c) expedite ship. Tell the customer proactively before they ask. |
| **Reprint (failed QC or defect)** | Trigger reprint immediately; expedite to recover the date; eat the rush cost rather than the broken promise — the SLA is the brand. Log the cause for the file-prep / vendor-quality record. |
| **Rush (event inside the window)** | Custom/closing quote: get the event date, confirm the rush figure with Carlos, add the shipping line (SOP-02), then promise. Never promise a rush date before Carlos confirms it can be hit (source: SOP-05-Proof-Checkout-Shipping.md). |
| **Change after payment / after approval** | Flag Carlos before production locks; any change after proof approval resets the clock — say so (source: SOP-05-Proof-Checkout-Shipping.md). |

## Outward copy (ganas voice)

Customer-facing templates for the fulfill stage. Bilingual with taste — read aloud; a real bilingual Angeleno must say it that way (see [[png-voice]]).

**Order confirmation (Day 0):**
> ¡Listo! We've got your order. Next step: you'll see a **free proof** with your logo before we print a thing — nothing goes to production without your OK. Once you approve it, you're **booth-ready in 5 business days from proof approval.** Tu marca, hecho bien.

**File needs fixing (the gate, sent same day):**
> Quick one so your proof looks perfecto — the logo file you sent is coming in a little low-res for the size we're printing. Can you send the original (a PDF, AI, or PNG straight from your designer)? Need a hand? We've got free templates here → [design-resources]. The faster we get it, the faster that 5-day clock starts. 🙌

**Proof ready (Day 0-1):**
> Aquí está tu proof. Take a look — this is exactly how it'll print. Approve it and your 5 business days start today. See anything you'd tweak? Just tell me, no charge.

**Shipped (Day 4):**
> On its way. 📦 Here's your tracking: [link]. Right on schedule — booth-ready as promised.

**Delivered + review ask (Day 5, within 24h of delivery):**
> Did it land? We want you showing up like a pro. If the setup looks 🔥, would you drop us a quick Google review? It helps other emprendedores find us — and it means the world. Gracias de verdad. → [review link]

**Reorder nudge (later cycle):**
> ¡Qué onda! Event season's coming up — want us to get your setup refreshed and ready before the rush? Same 5-day promise, and I've still got your specs on file. Just say the word.

## Lanes summary

- **Claude-admin:** file into the SOP Library as SOP-08; build the Google Sheet fulfillment template; create the Slack #orders channel; manage Shopify tags; draft/maintain the outward templates above.
- **Carlos / VA (the closer, Venus, transitions in):** run the day-by-day plan, intake, proof chase, vendor orders, QC, ship, delivery confirmation, review ask, reorder flag.
- **Claude Code:** the file-prep automation (design-resources page, Canva templates, Claude-vision checker) — see [[file-prep-gate]]; and any future 4over-API auto-ordering hook.

## Related pages
- [[file-prep-gate]]
- [[slack-workspace-setup]]
- [[pricing-engine]]
- [[concierge-close]]
- [[conversion-bridge]]
- [[store-and-catalog]]
- [[josh-craig-donut-media]]
- [[vip-reactivation-list]]
- [[south-gate-account]]
- [[closer-hire]]
- [[png-voice]]
