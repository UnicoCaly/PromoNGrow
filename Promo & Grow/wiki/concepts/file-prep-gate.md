# File-Prep Gate

**Summary**: The artwork/file-prep gate that protects the 5-day delivery SLA from the 40-50% bad-file problem — every customer file must pass before it reaches a vendor — and the three-phase automation roadmap (design-resources page → Canva templates → Claude-vision file checker) that progressively removes the human from the gate.
**Type**: concept
**Sources**: co-CEO build session 2026-06-17; draws on PNG-Full-Context_4.14.2026.md (file-prep roadmap, via [[store-and-catalog]] / dashboard), SOP-05-Proof-Checkout-Shipping.md, [[fulfillment-sop]].
**Last updated**: 2026-06-17.

---

## Why the gate exists

**40-50% of customer files arrive bad** (source: PNG-Full-Context_4.14.2026.md, via dashboard). A bad file is the #1 threat to the 5-business-day promise because it lives in "Clock 0" — the uncontrolled time between payment and proof approval (see [[fulfillment-sop]]). Catch it Day 0 and it's a same-day fix; catch it when the vendor rejects it on Day 3 and the promise is already broken.

**The rule: no file goes to a vendor until it passes the gate.**

## The gate checklist (run at intake, Day 0)

- **Dimensions** match the product/variant on the draft order.
- **Resolution / DPI** adequate for the print size (large-format forgives lower DPI; small print does not).
- **Bleed + safe zone** present.
- **Color mode** correct (CMYK for print).
- **Fonts** outlined or supplied.
- **Logo** is vector or genuinely high-res (not a tiny web JPG).
- **File type** usable (PDF / AI / EPS / high-res PNG; not a screenshot or a social-media export).

Any fail → bounce to the customer **same day** with a specific, friendly fix (template in [[fulfillment-sop]] outward copy), or route to design. The faster the file is right, the faster the proof goes out and the 5-day clock starts.

## The automation roadmap (three phases)

The goal is to take the human out of the gate over time, raising the clean-file rate at each phase. This is part of the 85%-automated goal (source: dashboard).

| Phase | What | Cost | Clean-file target | Lane |
|---|---|---|---|---|
| **1 — Design-resources page** | A page of specs, templates, and "how to send your logo" guidance the customer is pointed to at quote/intake. Eliminates the easy 40-50% of bad files at the source. | $0 | baseline lift | Claude Code (build) / Claude-admin (copy) |
| **2 — Canva templates** | Per-product Canva templates so the customer builds a correctly-sized, bleed-correct file instead of guessing. | ~$13/mo | 70-80% | Claude Code / Claude-admin |
| **3 — Claude-vision file checker** | An automated check at intake that reads the uploaded file and flags problems (size, resolution, bleed, color) before a human or vendor touches it. | ~$50-100/mo | 90%+ | Claude Code |
| **3B — White-label SaaS** | The file checker, productized for other print shops. | — | — | future |

(source: PNG-Full-Context_4.14.2026.md for the four phases, costs, and clean-file targets.)

## How the gate ties to the quote form

The quote form already includes a **logo upload** field (source: conversion-bridge.md). That upload is the earliest point a file can be checked — eventually the Phase-3 Claude-vision checker runs right there, so a bad file is flagged before the order is even built, not after payment. Until then, the human gate at Day 0 of fulfillment is the catch point.

## Status / next step

Phase 1 (design-resources page) is the immediate move and is referenced in the outward copy as `[design-resources]` (lane: Claude Code to build the page, Claude-admin to write it). [Carlos to provide: confirm the design-resources page is live, or queue it.] Phases 2-3 follow once Phase 1 proves the lift.

## Related pages
- [[fulfillment-sop]]
- [[conversion-bridge]]
- [[store-and-catalog]]
- [[concierge-close]]
