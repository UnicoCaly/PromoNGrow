# Quote-App Evaluation

**Summary**: Evaluation checklist for picking the right Shopify "Request a Quote" app to automate the manual draft-order → invoice flow. The key feature is one-click quote → Shopify draft order; the decision is made by a 15-minute live test, not by the feature list.
**Type**: concept
**Sources**: PNG-Quote-App-Evaluation.md
**Last updated**: 2026-06-17.

---

## Purpose

Pick the right Shopify "Request a Quote" tool to automate the manual draft-order → invoice process: a custom-product visitor raises a hand, it becomes a draft order with one click, and the invoice sends through Shopify checkout — no manual re-entry (source: PNG-Quote-App-Evaluation.md). This is the automation layer under the [[concierge-conversion-build]] and the [[draft-order-quote-system]].

**App vs. theme build:** Claude Code already built concierge elements in-theme. Decide whether an app REPLACES that quote plumbing (recommended for automation) or just COMPLEMENTS it. An app wins if it auto-converts quotes → draft orders, because that's the bottleneck being removed (source: PNG-Quote-App-Evaluation.md).

**Lane:** Carlos/VA installs + tests; Claude Code wires it into the theme.

## Must-have features (deal-breakers)

- One-click quote → Shopify draft order (line items + customer pre-filled) — **THE key feature**
- Invoice sends through native Shopify checkout (customer pays online)
- Customizable quote form (add phone, event date, quantity, project notes)
- **File upload on the form** (logo/artwork — what lets the proof go out fast)
- Per-product / per-type control (quote button ONLY on custom items; cart stays on simple items)
- Instant admin notification on new quote (speed-to-lead = #1 close factor)
- Auto-reply email to customer on submit (sets response-time expectation)
- Works on Basic Shopify plan
- Mobile-friendly form

(source: PNG-Quote-App-Evaluation.md)

## Strongly preferred

- Bilingual / multi-language form support (EN + ES — see [[bilingual-spanish-moat]] / [[bilingual-build-spec]])
- Quote follow-up automation (or clean handoff to Shopify Email/Klaviyo)
- Hide price / "request price" option per product
- Quote expiry + good-better-best tiering in the quote
- Customer can accept quote online (self-serve close)
- Saved customer profiles for fast reorders (Donut / South Gate use case — see [[josh-craig-donut-media]], [[south-gate-account]])

## Nice-to-have

- Analytics on quote volume / conversion
- Bulk/volume pricing tables
- B2B company accounts / net terms

## Candidates to compare

Verify current pricing/features live before installing — pricing/features change, and this list is NOT ranked (source: PNG-Quote-App-Evaluation.md).

| App | Why look | Watch for |
|-----|----------|-----------|
| BSS B2B / Request a Quote | Free plan, strong reviews, quote→draft order | Confirm draft-order conversion on free tier |
| AddToQuote / Quotify-type apps | Purpose-built quote forms | Check file upload + per-product control |
| Native Shopify Draft Orders + theme form | No app fee | More manual; no auto-convert — only if app gaps |

## The 15-minute test (the Direct Response check)

Run this on a trial before committing (source: PNG-Quote-App-Evaluation.md):

1. Install on trial. Put the quote button on ONE tent PDP only.
2. Submit a test quote from your **phone** — upload a logo file.
3. Confirm: admin alert fires instantly? Auto-reply email arrives?
4. In admin: did it create a draft order with the right line items + customer + file?
5. Send yourself the invoice from that draft order — does checkout work?
6. Time it: from "submit" to "invoice sent," is this FASTER than the manual flow?
   - If yes → roll out across all custom-product types.
   - If no / clunky → try the next candidate or stay with theme-built + manual.

## Decision criteria

Pick the app that removes the most manual steps from the current call→draft→invoice flow while keeping the form on-brand. A small monthly fee that automates the bottleneck is worth it given the goal: get OUT of the day-to-day so a VA can run it and Carlos approves (source: PNG-Quote-App-Evaluation.md). This serves the automation & capacity dimension (the 85%-automated goal).

## Related pages
- [[draft-order-quote-system]]
- [[concierge-conversion-build]]
- [[conversion-bridge]]
- [[bilingual-build-spec]]
- [[customer-journey-map]]
