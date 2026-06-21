# Pipeline & Ops Spine

**Summary**: The operating spine for Promo & Grow's pipeline — a Google Sheet (working queue) + Shopify customer tags (durable state) as the single source of truth, a from-scratch Slack workspace, Venus's daily/weekly cadence, and a prioritized list of where Zapier later removes manual steps. Honors Carlos's decision: Sheet + tags, NOT HubSpot.

**Type**: concept

**Sources**: co-CEO build session 2026-06-17; PNG-Master-Context-Playbook.md; PNG-Closer-Onboarding-Workbook.md; PNG-Full-Context_4.14.2026.md.

**Last updated**: 2026-06-17.

---

## Why this exists

The four stations (demand → bridge → close → fulfillment) generate leads, quotes, orders, and reorders, but nothing today holds them in one place. Revenue runs on the [[concierge-close|human concierge close]], not the cart, and that close needs a queue to work and a memory to persist (source: concierge-close.md). This page is that spine.

Carlos's decision (honor exactly): the pipeline is a **Google Sheet** (working queue + stages) **+ Shopify customer tags** (durable state). **NOT HubSpot** — HubSpot is connected but Carlos chose not to use it (source: co-CEO build session 2026-06-17).

The split:
- **Google Sheet = the working surface.** Where Venus lives all day — fast to scan, fast to edit, holds the next-action and the notes. (co-CEO recommendation)
- **Shopify tags = the durable state.** Survive the Sheet, power email segments, and travel with the customer record forever. (co-CEO recommendation)

Keeping both honest is a daily discipline now and a Zapier job later (see [[zapier-automation-roadmap]]).

## The two halves

| | Google Sheet | Shopify tags |
|---|---|---|
| Role | Working queue (live) | Durable state (permanent) |
| Holds | Lead ID, contact, next action, due date, notes, quote $ | Stage, source, tier, VIP — short labels |
| Updated by | Venus, all day | Venus/VA at stage changes; Claude-admin in bulk |
| Powers | Daily standup, weekly scoreboard | Email segments, re-marketing audiences |
| Lane | Carlos-VA (live), Claude-admin (template) | Claude-admin (taxonomy + bulk), Carlos-VA (per-lead) |

The Sheet design lives at [[lead-tracker-sheet]]; the tag taxonomy at [[shopify-tag-taxonomy]]; the Slack build at [[slack-workspace-setup]]; the cadence at [[operating-rhythm]]; the automation queue at [[zapier-automation-roadmap]].

## The pipeline stages (the shared spine)

One stage vocabulary runs across the Sheet column, the Shopify tag, and the Slack channels. Define it once here:

| # | Stage | Means | Exit trigger |
|---|---|---|---|
| 1 | New | Lead landed, not yet touched | Venus makes first contact |
| 2 | Contacted | First touch made, awaiting reply | Lead responds / is reached |
| 3 | Qualified | Real fit: product, qty, event date, budget confirmed | Quote built |
| 4 | Quote Sent | Draft order / proof sent, awaiting decision | Pays / declines |
| 5a | Won | Paid (or deposit paid) | Production starts |
| 5b | Lost | Declined, no-budget, ghosted past Day-7 | — (revisit in reactivation) |
| 6 | In Production | Artwork approved, order placed with vendor | Ships |
| 7 | Delivered | Product delivered / picked up | Review asked; 5-day clock met |
| 8 | Reorder | Delivered customer due for repeat | Re-enters as New/Qualified |

Stages 1-4 are the close (Venus). Stages 5a-8 are fulfillment + lifecycle (Carlos/VA + Claude-admin). A **Lost** lead is never deleted — it flows to the [[reactivation-email-sequence]] and can resurface as **Reorder**.

This stage set extends the closer SOP's funnel (inbound → engage → quote → follow-up → close) by adding the post-sale lifecycle the SOP doesn't track (source: PNG-Closer-Onboarding-Workbook.md). (co-CEO recommendation)

## Qualification tiers

Tier rides alongside stage and drives speed-to-lead priority. Same vocabulary in Sheet + tag:

- **A / Hot** — inbound quote request, ready-to-buy, event date inside 30 days, or a known VIP. Respond in minutes.
- **B / Warm** — engaged (email clicker, SMS replier), real interest, event date 30-90 days out. Same business day.
- **C / Cool** — early curiosity, no date, low intent, or cold-list. Worked after A and B.

This mirrors the closer game plan's ranked queue: inbound today → recent engagers → VIP/repeat → broader openers → cold (source: PNG-Closer-Onboarding-Workbook.md). Speed-to-lead is the #1 close factor (source: conversion-bridge.md).

## How Sheet and tags stay in sync

**Now — manual rule (Carlos-VA):** every time Venus moves a lead's **Stage** in the Sheet, she sets the matching Shopify customer tag in the same sitting. Stage, source, tier, VIP — four tag families, mirrored. End-of-day she reconciles: any Sheet row whose stage changed today gets its tag confirmed. (co-CEO recommendation)

**Soon — Zapier (Carlos-VA toggle, Claude-admin design):** a Zap watches the Sheet's Stage column and writes the Shopify tag automatically, and a second Zap writes new Shopify orders back into the Sheet as **Won**. This removes the highest-friction manual step. See [[zapier-automation-roadmap]] (item 1).

The rule until Zapier is live: **the Sheet is the source of truth for the live queue; Shopify tags are the source of truth for who a customer is.** When they disagree, trust the Sheet for stage-in-progress and Shopify for paid/delivered facts. (co-CEO recommendation)

## The data-loss caveat

This spine tracks leads and stages, but does not replace conversion tracking. Tracking is **partly live** (build-status 6/16): the Meta Pixel (`1205589804645510`) + Google Ads tag (`AW-17631020505`) are installed; the remaining gap is the **blank `google_ads_quote_label`**, so `quote_request_submitted` doesn't count yet — don't scale the lean Google Search test until it's wired (source: PNG-Build-Status_6.16.2026.md). The Sheet's `source` column is the manual attribution stopgap until then. (Claude Code — see [[conversion-tracking-setup]].)

## Lanes summary

- **Claude-admin** — build the Sheet template, define + bulk-apply the tag taxonomy, design the Zaps, keep this wiki current.
- **Carlos-VA** — create the Slack workspace + channels, run the live queue, toggle the Zaps on, do the daily/EOD sync.
- **Claude Code** — wire the blank `google_ads_quote_label` so `quote_request_submitted` counts as a conversion (the pixel/Ads tag are already installed) — see [[conversion-tracking-setup]].

## Related pages
- [[lead-tracker-sheet]]
- [[shopify-tag-taxonomy]]
- [[slack-workspace-setup]]
- [[operating-rhythm]]
- [[zapier-automation-roadmap]]
- [[concierge-close]]
- [[conversion-bridge]]
- [[closer-hire]]
- [[the-20k-math]]
- [[dashboard]]
