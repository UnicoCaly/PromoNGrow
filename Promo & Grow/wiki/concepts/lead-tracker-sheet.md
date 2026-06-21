# Lead Tracker Sheet

**Summary**: The build spec for the Promo & Grow pipeline Google Sheet — the live working queue Venus runs all day. Defines every tab and every column so the Sheet is the single working source of truth, paired with Shopify tags for durable state.

**Type**: concept

**Sources**: co-CEO build session 2026-06-17; PNG-Closer-Onboarding-Workbook.md; PNG-Master-Context-Playbook.md.

**Last updated**: 2026-06-17.

---

## File

One Google Sheet, named **`P&G Pipeline — Master`**, in the shared Promo & Grow Drive folder, shared with Carlos, Venus, and the VA (edit) [Carlos to provide: confirm Drive folder + who gets edit vs view]. (co-CEO recommendation) (Claude-admin to build the template; Carlos-VA to host/share)

## Tabs

| Tab | Purpose |
|---|---|
| **Pipeline** | The live queue — one row per lead, all active stages. The main surface. |
| **Scoreboard** | Auto-calculated KPIs for the weekly 15-min review (formulas off Pipeline). |
| **Lists** | The dropdown source lists (stages, sources, tiers, owners, products) so columns validate. |
| **Archive** | Won/Lost leads moved out of the live view after 30 days, so Pipeline stays scannable. |
| **README** | One screen: stage definitions, tier rules, the daily/EOD checklist, the sync rule. |

Keep **Pipeline** as the first/default tab. (co-CEO recommendation)

## The Pipeline tab — exact columns

Left-to-right, in work order:

| Col | Header | Type | Notes |
|---|---|---|---|
| A | **Lead ID** | text | Format `L-####` (L-0001…). Stable key; never reused. The join key to Shopify + Zaps. |
| B | **Date In** | date | When the lead entered. Drives speed-to-lead. |
| C | **Name** | text | First + last. |
| D | **Email** | text | |
| E | **Phone** | text | For SMS/call; (844) 883-3308 is the inbound line. |
| F | **Source** | dropdown | google-ad · email · apollo · gbp · referral · walk-in · sms · inbound-quote · other |
| G | **Product Interest** | dropdown | tent · table-cover · flag · seg-display · backdrop · banner · wall-art · bundle · wrap · other |
| H | **Event Date** | date | The deadline that drives urgency; blank = no date (lowers tier). |
| I | **Tier** | dropdown | A-hot · B-warm · C-cool (see [[pipeline-ops-spine]]). |
| J | **Stage** | dropdown | New · Contacted · Qualified · Quote Sent · Won · Lost · In Production · Delivered · Reorder. |
| K | **Quote $** | currency | The draft-order total once built. |
| L | **Quote Sent Date** | date | Starts the Day-1/3/7 follow-up clock. |
| M | **Next Action** | text | The single next thing to do ("call back", "resend proof"). |
| N | **Next Action Due** | date | Drives the morning queue sort. |
| O | **Owner** | dropdown | Venus · Carlos · VA. |
| P | **Shopify Customer** | URL | Deep link to the Shopify customer record (durable state lives there). |
| Q | **Notes** | text | Rolling log; newest note on top, datestamped. |
| R | **Last Updated** | date | Auto via edit; the EOD-sync sanity check. |

Lead ID, Stage, Source, Tier, and Owner are the columns Zapier and the tag-sync rule key on — keep their names and dropdown values exact so automation later is trivial (see [[zapier-automation-roadmap]]). (co-CEO recommendation)

## Conditional formatting (so the queue reads at a glance)

- **Tier A** row tint copper; overdue **Next Action Due** (before today) turns red.
- **Stage = Quote Sent** with **Quote Sent Date** > 7 days ago turns amber (a stalled quote = the hidden revenue per [[conversion-bridge]]).
- **Stage = Won** turns trust-green; **Lost** turns grey.

(co-CEO recommendation) (Claude-admin)

## The Scoreboard tab

Auto-formulas off Pipeline, reset weekly (or a rolling 7-day window). The KPIs Carlos watches in the [[operating-rhythm|weekly 15-min review]]:

- Leads in (count of Date In this week)
- Qualified (count reaching Qualified+)
- Quotes sent (count of Quote Sent Date this week)
- Quote → paid % (Won ÷ Quote Sent)
- AOV (avg Quote $ on Won) — target ~$400 (source: the-20k-math.md)
- On-time delivery % [Carlos to provide: where delivered-on-time is logged — Shopify order note or a Sheet column]
- Reviews earned this week [Carlos to provide: manual count from GBP/Yelp]

## The Lists tab

The canonical dropdown values for Source, Product, Tier, Stage, Owner — so every cell validates and the values stay identical to the Shopify tags. Editing a list here updates the dropdowns everywhere. This is the one place to change vocabulary. (co-CEO recommendation)

## The data-entry rule

Every lead gets a row the moment it appears — inbound call, form, email reply, Apollo task — before any work happens. No lead lives only in an inbox. Speed-to-lead is the #1 close factor and a lead you can't see is a lead you can't beat the competition to (source: PNG-Closer-Onboarding-Workbook.md, conversion-bridge.md). (Carlos-VA)

## Related pages
- [[pipeline-ops-spine]]
- [[shopify-tag-taxonomy]]
- [[operating-rhythm]]
- [[zapier-automation-roadmap]]
- [[conversion-bridge]]
- [[closer-hire]]
