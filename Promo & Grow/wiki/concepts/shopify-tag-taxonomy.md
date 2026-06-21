# Shopify Tag Taxonomy (Canonical)

> **This is the canonical tag vocabulary** for the whole pipeline. Stations 2-4 map their tags onto this set. See [[lead-machine]] for the reconciliation. (2026-06-17)

**Summary**: The Shopify customer-tag system that holds durable pipeline state — stage, source, tier, and VIP — mirroring the [[lead-tracker-sheet|Google Sheet]]. Tags survive the Sheet, power email segments and re-marketing audiences, and travel with the customer forever. Carlos chose tags over HubSpot.

**Type**: concept

**Sources**: co-CEO build session 2026-06-17; PNG-Master-Context-Playbook.md; PNG-Full-Context_4.14.2026.md.

**Last updated**: 2026-06-17.

---

## Why tags (not HubSpot)

Shopify customer tags are the **durable state** half of the spine (the Sheet is the live working half — see [[pipeline-ops-spine]]). Tags persist, they segment the email list natively (the channel that already works — opens 32-39%, source: store-and-catalog.md), and they cost nothing. Carlos chose tags + Sheet over HubSpot (connected but unused) (source: co-CEO build session 2026-06-17).

## The namespacing convention

Use a `prefix:value` format so tags stay grouped, filterable, and un-ambiguous in Shopify's tag search. Four families:

| Family | Format | Values |
|---|---|---|
| **Stage** | `stage:<x>` | `stage:new` · `stage:contacted` · `stage:qualified` · `stage:quote-sent` · `stage:won` · `stage:lost` · `stage:in-production` · `stage:delivered` · `stage:reorder` |
| **Source** | `src:<x>` | `src:google-ad` · `src:email` · `src:apollo` · `src:gbp` · `src:referral` · `src:walk-in` · `src:sms` · `src:inbound-quote` |
| **Tier** | `tier:<x>` | `tier:a-hot` · `tier:b-warm` · `tier:c-cool` |
| **VIP** | `vip` | a flat flag for VIP/repeat buyers (e.g. Josh @ Donut Media, South Gate) |

Values are identical to the Sheet's dropdowns so the two halves speak the same language (source: co-CEO build session 2026-06-17). (co-CEO recommendation)

## The one-stage rule

A customer carries **exactly one `stage:` tag at a time.** Moving a stage = remove the old `stage:` tag, add the new one. Source, tier, and VIP are sticky (a lead keeps its origin source forever; tier can be upgraded; VIP once earned stays). This keeps email segments clean — "everyone at `stage:quote-sent`" is a real, current audience. (co-CEO recommendation)

## What the tags power

- **Email segments** (Shopify Email): `stage:lost` → the [[reactivation-email-sequence]]; `stage:quote-sent` → the Day-1/3/7 quote follow-up; `vip` → VIP-only offers; `src:google-ad` → measure the lean Google Search test's list quality.
- **Re-marketing audiences** later, once the pixel is installed (Claude Code) — `stage:quote-sent` is the highest-value retargeting pool (warm, didn't pay yet).
- **Reporting** — count customers per stage as a Shopify-side cross-check on the Sheet scoreboard.

## Optional value tags (phase 2)

Once the basics are habitual, add lifecycle tags Shopify can compute or Claude-admin can bulk-apply: `repeat-buyer`, `institutional` (e.g. [[south-gate-account]]), `dormant` (the 1,000+ Wix list), `event-soon` (event date < 30 days). Keep phase-1 to the four core families first — don't over-tag before the habit sticks. (co-CEO recommendation)

## Sync with the Sheet

- **Now (manual, Carlos-VA):** when Venus changes Stage in the Sheet, she swaps the `stage:` tag on the Shopify customer in the same action. EOD reconcile.
- **Soon (Zapier, Claude-admin design / Carlos-VA toggle):** a Zap maps the Sheet Stage column → the `stage:` tag automatically. See [[zapier-automation-roadmap]] (item 1).
- **Bulk setup (Claude-admin):** initial back-tagging of the existing customer base (won buyers → `stage:reorder` or `stage:delivered`; VIPs → `vip`; dormant list → `src:email` + `dormant`) can be done in bulk via the Shopify admin / GraphQL.

## Lane

Taxonomy design + bulk back-tagging = Claude-admin. Per-lead tag swaps during the close = Carlos-VA. Pixel/re-marketing audience wiring = Claude Code. (source: store-and-catalog.md two-agent model)

## Related pages
- [[pipeline-ops-spine]]
- [[lead-tracker-sheet]]
- [[reactivation-email-sequence]]
- [[zapier-automation-roadmap]]
- [[store-and-catalog]]
- [[south-gate-account]]
- [[vip-reactivation-list]]
