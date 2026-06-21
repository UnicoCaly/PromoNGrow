# Conversion Bridge

**Summary**: The "Get a Free Proof" quote path that bridges cold organic traffic into the concierge close — tiered CTAs, the quote form, speed-to-lead, trust elements, the quote follow-up sequence, the quote→draft-order app evaluation, and the `quote_request_submitted` metric.

**Type**: funnel

**Sources**: PNG-Master-Context-Playbook.md, PNG-Closer-Onboarding-Workbook.md, PNG-Full-Context_4.14.2026.md

**Last updated**: 2026-06-17.

**Metric**: `quote_request_submitted` (cold-traffic success metric — not checkouts) (source: PNG-Master-Context-Playbook.md).

---

## The bridge

The fix for the [[concierge-close|missing bridge]] is the **"Get a Free Proof" quote path** — a low-friction on-ramp that feeds cold traffic into the human close that already converts. Spec'd in PNG-Concierge-Conversion-Build-Spec (a build for Claude Code; not yet ingested into raw) (source: PNG-Master-Context-Playbook.md). The #1 strategic lever (source: PNG-Master-Context-Playbook.md).

## Tiered CTAs (quote-first vs cart-first)

Tier the funnel by product type:
- **Quote-first** on high-ticket/custom — tents, displays, bundles, wall art.
- **Checkout-first** on simple/low-ticket — flags, table covers, accessories (source: PNG-Master-Context-Playbook.md).

## The quote form

Fields: name / email / phone / product / qty / event-date / notes / **logo upload** (source: PNG-Master-Context-Playbook.md). Plus instant auto-reply + instant admin alert (source: PNG-Master-Context-Playbook.md). The form must support the bilingual flow (see [[bilingual-spanish-moat]]).

## Speed-to-lead

Speed-to-lead is the **#1 close factor** — instant auto-reply to the customer + instant admin alert to the team (source: PNG-Master-Context-Playbook.md). The closer SOP echoes it: respond to any new warm lead within minutes if possible, same business day at worst; first to respond usually wins (source: PNG-Closer-Onboarding-Workbook.md). See [[closer-hire]].

## Trust elements on the PDP

Free-proof guarantee, 4.8★ reviews on-page, "starting at" price, a how-it-works 3-step, plus a lead-capture + exit-intent popup (source: PNG-Master-Context-Playbook.md). Existing site already carries a trust strip (stars/4.8 rating, 5-day delivery, Made in USA, free proof) and two popups: a bundle-savings calculator and a first-order confidence builder with the SHOWUP code (source: PNG-Full-Context_4.14.2026.md). See [[store-and-catalog]].

## The quote follow-up sequence

A 3-touch sequence on unpaid invoices — the hidden revenue (source: PNG-Master-Context-Playbook.md). The closer cadence: Day 1 / Day 3 / Day 7 — re-send the proof, offer to adjust, then a deadline nudge (source: PNG-Closer-Onboarding-Workbook.md).

## The quote → draft-order app

Evaluate a quote app (e.g. BSS B2B Request a Quote / AddToQuote) that auto-converts quotes → draft orders → invoices, automating Carlos's manual process. Run a 15-min test before committing (source: PNG-Master-Context-Playbook.md). Spec'd separately in PNG-Quote-App-Evaluation (not yet in raw). This is the automation layer over the manual draft-order step in the [[concierge-close]]. The manual draft-order step itself is now documented as the [[draft-order-quote-system]] SOP (Station ③ of the [[lead-machine]]); the app is the future automation over it. Quote requests captured by this bridge flow into the [[lead-tracker-sheet|pipeline Sheet]] as New leads and are tracked through stages via [[pipeline-ops-spine]].

## The metric

For cold traffic, success = **quote requests / calls, not checkouts.** Track `quote_request_submitted` as the cold-traffic success metric (GA4 quote event) (source: PNG-Master-Context-Playbook.md). Feeds the weekly 10-min dashboard read (see [[dashboard]]).

## Lane

The bridge build (popups, quote form, CTAs, pixel, bilingual plumbing) is Claude Code's lane; the app evaluation and copy are Claude-admin; platform toggles and the human close are Carlos/VA (source: PNG-Master-Context-Playbook.md).

## Related pages
- [[lead-machine]]
- [[draft-order-quote-system]]
- [[lead-tracker-sheet]]
- [[conversion-tracking-setup]]
- [[google-search-engine]]
- [[concierge-close]]
- [[the-20k-math]]
- [[closer-hire]]
- [[store-and-catalog]]
- [[bilingual-spanish-moat]]
- [[dashboard]]
