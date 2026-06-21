# Slack Workspace Setup

**Summary**: The build plan for the Promo & Grow Slack workspace (`progobrandingdept`). It already has **#promo-and-grow** (Carlos↔Venus day-to-day comms, created 2026-06-05) and **#promongrow_site_builder-order_manager** (dev/site); this page adds the ops channels (#leads, #quotes, #orders, #wins), what posts where, and the notification discipline — so Slack is the real-time alert layer over the [[lead-tracker-sheet|Sheet]] and [[shopify-tag-taxonomy|tags]].

**Type**: concept

**Sources**: co-CEO build session 2026-06-17; PNG-Master-Context-Playbook.md; PNG-Closer-Onboarding-Workbook.md.

**Last updated**: 2026-06-18 (vendor rename SwordX→Soar Dist USA).

---

## Starting point

Workspace = `progobrandingdept`. As of 2026-06-17 it has **#promo-and-grow** (Carlos↔Venus day-to-day comms — Carlos moved off DMs to here) and **#promongrow_site_builder-order_manager** (dev/site/order) (source: Slack search 2026-06-17, correcting an earlier "empty workspace" note). Keep it lean: a closer, Carlos, and a VA do not need fifteen channels. Add the ops channels (#leads, #quotes, #orders, #wins) as the pipeline goes live, only when a real need appears. (co-CEO recommendation)

## The channels

| Channel | Purpose | Who posts | Trigger |
|---|---|---|---|
| **#leads** | Every new lead, the instant it lands | Zapier (later) / Venus (now) | New row in the [[lead-tracker-sheet|Sheet]] → speed-to-lead clock starts |
| **#quotes** | Every quote (draft order) sent + follow-up nudges | Venus / Zapier | Stage → Quote Sent; Day-3 / Day-7 reminders |
| **#orders** | Paid orders + production/fulfillment status | Zapier (Shopify) / Carlos-VA | Order paid; in-production; shipped; delivered |
| **#wins** | Closed deals + 5-star reviews + milestones | Venus / Carlos | Stage → Won; a new review; hitting a weekly number |
| **#ops** | The spine itself: Sheet/tag questions, SOP changes, blockers | everyone | Anything about how the machine runs |
| **#general** | Announcements, schedules, non-pipeline chatter | everyone | Default catch-all |

The four pipeline channels (#leads → #quotes → #orders → #wins) intentionally trace the pipeline stages, so the workspace itself is the funnel left-to-right. (co-CEO recommendation)

## What posts where — the rule

- **#leads** — name, source, tier, product interest, Lead ID, Sheet link. The first responder claims it with an emoji (eyes = working it). Speed-to-lead is the #1 close factor (source: conversion-bridge.md).
- **#quotes** — Lead ID, customer, quote $, product, and the proof/draft-order link. Day-3 and Day-7 unpaid-quote nudges post here too (the hidden revenue — source: conversion-bridge.md).
- **#orders** — order #, customer, $, vendor (B2Sign/4over/Tradebanner/Soar Dist USA — see [[pricing-engine]]), and the 5-day delivery due date so the on-time-delivery KPI is visible.
- **#wins** — keep it celebratory and short: "Cerrado. $XYZ. [customer]." Wins channel is morale + the weekly scoreboard's highlight reel. (co-CEO recommendation)

## Notification discipline

- Venus: all-notifications on **#leads** and **#quotes** (these are her job, in real time).
- Carlos: **#wins** + **#orders** highlights; mentions only elsewhere.
- Mute **#general** to mentions so the signal channels stay loud. (co-CEO recommendation)

## Now vs later

- **Now (manual, Carlos-VA):** Venus posts to #leads/#quotes/#wins by hand as she works the Sheet. Low volume makes this trivial and builds the habit.
- **Later (Zapier, Claude-admin design / Carlos-VA toggle):** new Sheet rows auto-post to #leads; new Shopify orders auto-post to #orders and #wins; stalled quotes auto-nudge #quotes. See [[zapier-automation-roadmap]] (items 1, 4, 5).

## Setup checklist (Carlos-VA)

1. Confirm the existing workspace `progobrandingdept` (NOT empty — it already has **#promo-and-grow** + #promongrow_site_builder-order_manager).
2. Create the six channels above.
3. Invite Carlos, Venus, the VA.
4. Pin to **#ops**: the [[lead-tracker-sheet|Sheet]] link, the [[shopify-tag-taxonomy|tag cheat-sheet]], and the [[operating-rhythm|daily checklist]].
5. Set the notification defaults above.
6. [Carlos to provide: confirm whether the VA and Venus get full member or single-channel guest access.]

## Lane

Workspace + channel creation and invites = Carlos-VA. Pinned reference docs + the eventual Zap-to-Slack posts = Claude-admin design. (source: co-CEO build session 2026-06-17)

## Related pages
- [[pipeline-ops-spine]]
- [[lead-tracker-sheet]]
- [[shopify-tag-taxonomy]]
- [[operating-rhythm]]
- [[zapier-automation-roadmap]]
- [[conversion-bridge]]
