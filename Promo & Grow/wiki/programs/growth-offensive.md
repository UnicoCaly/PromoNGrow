# Growth Offensive

**Summary**: The Growth Offensive is the 6/15/2026 paid + cold-email growth strategy — two engines (light paid, retargeting-first; warmed cold email) feeding warm leads to Venus, throttled to her real close capacity and measured on closed invoices, not platform ROAS. Written as plan → competitor red-team → hardened rebuild.
**Type**: campaign
**Sources**: PNG-Growth-Offensive-GamePlan_6.15.2026.md, PNG-Growth-Offensive-Dashboard_6.15.2026.html, PNG-Growth-Offensive-ExecutionPack_6.15.2026.html
**Last updated**: 2026-06-17

---

## The ask and the constraints

The brief: turn on the cold-email campaign already "in the pocket" and add light ad spend to feed Venus warm leads (source: PNG-Growth-Offensive-GamePlan_6.15.2026.md). Parameters:

| Input | Value |
|---|---|
| Goal metric | Paid revenue / ROAS (redefined — see below) |
| Segment | LA-Metro Spanish-speaking SMBs |
| Budget | $500–$1,000/mo |
| Cold volume target | 50–75/day |
| Venus capacity (stated) | 5–10 new leads/day |
| Launch | This week |

(source: PNG-Growth-Offensive-GamePlan_6.15.2026.md)

## The two collisions named up front

The plan opens by naming two contradictions in the inputs:

1. **Venus is the throttle, not budget or send volume.** At 5–10 leads/day *while also* closing the 162-account reactivation list and live deals, her real new-lead capacity is ~3–6 quality conversations/day. Leads past that line rot. The goal is therefore **max closed revenue per lead she can actually work**, not max leads (source: PNG-Growth-Offensive-GamePlan_6.15.2026.md).
2. **"Cold email, 50–75/day, this week" is not physically possible on a clean domain.** Bulk-sender rules (Google/Yahoo/Microsoft, enforced Feb 2024, hardened Nov 2025) punish a cold domain that ramps fast; a new domain must start at 5–10/day and warm over 4–6 weeks. So "this week" = start warming + go live on paid; cold reaches 50–75/day around week 4–5 (source: PNG-Growth-Offensive-GamePlan_6.15.2026.md).

## Why ROAS is redefined (critical)

PNG sells by [[concierge-close]] — call/email → Shopify draft order → invoice → paid. Site add-to-cart rate is ~0.18–0.58%, so a pixel "purchase" event almost never fires and platform-reported ROAS reads near-zero and lies. **ROAS is therefore measured on closed invoices, attributed back to source** via three stacked mechanisms: (1) "How'd you hear about us?" logged on every lead; (2) UTM tags + a dedicated landing path + distinct lead-form/phone so paid leads self-identify; (3) a deal-source (Source) column in the **Google Sheet pipeline** filled at draft-order creation for a monthly revenue-by-source report (the source doc predates the no-HubSpot decision — see [[lead-machine]], Carlos 2026-06-17). Platform dashboards are used for *cost* metrics only (CPL, CPM, frequency) (source: PNG-Growth-Offensive-GamePlan_6.15.2026.md). See [[conversion-tracking-setup]].

## The objective, as a number

- Blended ROAS ≥ 3:1 on closed/paid invoices.
- Cold email ≥ 4 closed deals/mo once warmed (month 2+), tooling < $200/mo.
- North-star for the quarter: add **$4,000–$8,000/mo** net-new on top of the warm/reactivation base, without Venus dropping a warm lead.
- Combined 90-day net-new estimate: **~$10K–$13K**, capacity-permitting (source: PNG-Growth-Offensive-GamePlan_6.15.2026.md). This is the top-of-funnel feeder for [[the-20k-math]].

## Engine 1 — Light paid (retargeting-first)

Hardened budget split inside the $750/mo midpoint:

| Layer | Monthly | Why |
|---|---|---|
| Retargeting (Meta + Google) — warm visitors, engagers, video viewers, + past-customer Custom Audience (reactivation list upload) | $400 | Cheapest, warmest dollar; air-cover while Venus calls them |
| Google Search — 3–5 exact high-intent local terms, geo-fenced, negative-keyworded | $150 | Captures the ready-to-buy searcher the original plan ceded |
| Meta prospecting — bilingual lead-form ads, Lookalike of past buyers, LA-metro geo | $200 | Net-new top of funnel, no landing-page friction |

(source: PNG-Growth-Offensive-GamePlan_6.15.2026.md, PNG-Growth-Offensive-Dashboard_6.15.2026.html)

All paid optimizes to **Lead** events (form submit / WhatsApp / phone click), never phantom web-cart purchases. The wedge in every ad (Spanish): *"Mira tu diseño GRATIS antes de pagar — entrega en 5 días."* See [[meta-lead-form]] and [[google-search-engine]].

## Engine 2 — Cold email

Sent **only from the separate `promotengrow.com` domain — never the transactional `promongrow.com`** — so a complaint spike can't touch invoices and client replies (note: replies already land in SPAM from villahallmark.com, so the main domain's reputation is fragile and must be protected) (source: PNG-Growth-Offensive-GamePlan_6.15.2026.md).

**Apollo routing — three options** (Apollo is tied to Proago.club; don't mix it):

| Option | What | Call |
|---|---|---|
| A | Add a PNG mailbox to the existing Apollo account | Cheapest; shares reputation/data with Proago. Stopgap only |
| B | Separate Apollo seat/workspace for PNG | Isolated; extra seat cost; Apollo isn't best at sending |
| C (recommended) | Apollo for *data* (build/verify list) → send via Instantly/Smartlead on promotengrow.com | Built-in warmup, inbox rotation, spam alarms, one-click unsubscribe, DMARC. ~$30–100/mo (co-CEO recommendation) |

2 sending inboxes, SPF + DKIM + DMARC, warmup ON from day one, ramping to ~60/day across both inboxes by week 4–5. Auto-pause if spam complaints cross 0.08% or bounces cross 1.5%. The cold sequence's job is to start a conversation Venus finishes — see [[cold-email-sequence]].

## The funnel into Venus (speed-to-lead)

Both engines dump into one place with one rule: every paid lead and cold reply routes to Venus in real time; **SLA = first touch within 1 hour during her 10a–4p PT window, same-day otherwise.** Overflow is *queued, not dumped* — if inflow exceeds ~6–8 fresh leads/day, the source is throttled, not Venus buried. Every lead logged with source = scoreboard input (source: PNG-Growth-Offensive-GamePlan_6.15.2026.md). See [[lead-qualification-system]] and [[operating-rhythm]].

## The red-team (Act 2) and the hardened fixes (Act 3)

The plan is stress-tested by an imagined bigger LA competitor; each attack maps to a fix:

| # | Competitor attack | Hardened fix |
|---|---|---|
| 1, 7 | Venus is the single point of failure; lead-form ads attract tire-kickers | Capacity is the design center: size inflow to ~5–6 quality/day, retargeting-first, 60-sec qualifier filters junk, auto-pause prospecting if backlog > 8 for 3 days, or green-light a 2nd closer |
| 2 | $0 ceded to high-intent Google Search | Ring-fenced $150/mo Google Search line on exact terms |
| 3, 8 | Wedge is copyable; tight-knit niche poisons on one slip | Bundle the wedge with proof of trust (logos, "formerly PrintCo Direct," job photos, Spanish video testimonial); lock in referral capture |
| 4, 5 | Cold email is a coin flip on a fragile base; "this week" makes you sloppy | Cold only from promotengrow.com; Option C warmup/rotation/alarms; no warmup corner-cut; auto-pause at 0.08% spam; separately fix the main-domain SPAM issue |
| 6, 10 | Small-budget ROAS is noise; no kill-criteria | Judge on rolling 60-day cost-per-closed-deal (<$130) + leading indicators; instrumented attribution; written kill/scale rules |
| 9 | No retention/reorder loop | Bolt on the reorder loop: retarget past customers while Venus calls them, seasonal reorder triggers, every new customer enters the loop day one |

(source: PNG-Growth-Offensive-GamePlan_6.15.2026.md, PNG-Growth-Offensive-Dashboard_6.15.2026.html)

## The hardened scoreboard

| Metric | Target |
|---|---|
| Speed-to-lead (lead → first touch) | < 1 hr |
| Untouched-lead backlog | < 8, else throttle |
| Cost per qualified lead | < $40 |
| Cost per closed deal | < $130 |
| Blended ROAS (closed invoices, 60-day rolling) | ≥ 3:1 |
| Cold spam-complaint rate | < 0.08% (auto-pause) |
| Reorder / repeat rate | trending up |

(source: PNG-Growth-Offensive-Dashboard_6.15.2026.html, PNG-Growth-Offensive-GamePlan_6.15.2026.md)

**Written kill/scale rules:** scale a source if rolling cost/close < $130 *and* Venus has capacity; fix-or-cut after a 60-day fair test if cost/close > $250 or it yields leads she can't close; auto-throttle prospecting on the overflow trigger (source: PNG-Growth-Offensive-GamePlan_6.15.2026.md).

## Week-by-week and 90-day economics

| Week | Paid | Cold email |
|---|---|---|
| 1 (now) | Verify pixel/tag + Lead event; scale retargeting; build lead form + UTM path | 2 inboxes + SPF/DKIM/DMARC + warmup ON; build list in Apollo |
| 2 | Meta prospecting + Google Search live | Warmup continues; finalize 3-touch sequence |
| 3 | Kill worst ad, double best | First real sends ~20–30/day |
| 4–5 | First ROAS read on closed invoices | Ramp to 50–75/day; first cold closes |
| 6+ | Reallocate to what's closing | Steady-state; rotate list |

**90-day economics (estimates at ~$400 AOV, $750/mo midpoint):** paid ~$2,250 spend → target ≥ $7,000 closed (3:1); cold email near-zero month 1, ramping to ~4–8 closes/mo by month 2–3 → ~$3,000–$6,000 over the quarter; combined ~$10K–$13K net-new, capacity-permitting (source: PNG-Growth-Offensive-GamePlan_6.15.2026.md). Dashboard projection chart shows month-3 stacked revenue of ~$1,600 retargeting + $800 Google + $1,100 Meta + $3,000 cold, and a representative steady-state funnel of 120 leads → 70 qualified convos → 35 quotes → 14 closes/mo (source: PNG-Growth-Offensive-Dashboard_6.15.2026.html). These are planning estimates; actuals depend on close rate, deliverability, and Venus's realized capacity (source: PNG-Growth-Offensive-Dashboard_6.15.2026.html).

## What's needed to pull the triggers

(1) Green-light Option C (or pick A to save the subscription); (2) confirm Claude can set up the 2 promotengrow.com inboxes safely (never passwords in files); (3) confirm the $400 / $150 / $200 split; (4) say go to draft the bilingual sequence + Meta creative, build the Apollo list, and stand up the revenue-by-source tracker (source: PNG-Growth-Offensive-GamePlan_6.15.2026.md). Implementation detail lives in [[cold-email-sequence]], [[meta-lead-form]], and [[lead-machine]].

## Related pages
- [[lead-machine]]
- [[cold-email-sequence]]
- [[meta-lead-form]]
- [[competitive-war-room]]
- [[google-search-engine]]
- [[lead-qualification-system]]
- [[concierge-close]]
- [[the-20k-math]]
- [[conversion-tracking-setup]]
- [[positioning-and-personas]]
