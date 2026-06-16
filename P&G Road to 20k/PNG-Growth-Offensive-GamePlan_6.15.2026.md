# PNG Growth Offensive — Cold Email + Light Paid
### Co-CEO game plan · Red-team · Hardened rebuild — June 15, 2026

**The ask:** turn on the cold-email campaign we have in the pocket, and add light ad spend to feed Venus warm leads. Goal metric: **paid revenue / ROAS.** Segment: **LA-Metro Spanish-speaking SMBs.** Budget: **$500–$1,000/mo.** Cold volume target: **50–75/day.** Venus capacity: **5–10 new leads/day** (and she's still working the 162-account reactivation list). Launch: **this week.**

This document is in three acts, exactly as you asked: (1) the game plan I'd run as your co-CEO, (2) the same plan torn apart by an aggressive competitor, (3) the plan rebuilt to survive that attack.

---

## ⚠️ The one thing to read first

Your inputs contain a built-in collision, and naming it up front makes the whole plan honest:

> **The throttle on this entire operation is not budget or send volume — it's Venus.** At 5–10 leads/day *while she's also closing reactivation and live deals*, her real new-lead capacity is closer to **3–6 quality conversations/day**. Every lead we generate past that line doesn't convert — it rots. A lead you don't call in the first hour is worth a fraction of one you call in five minutes. So the goal is **not "max leads." It's "max closed revenue per lead Venus can actually work."** That reframes everything below.

Second collision: **"cold email, 50–75/day, launch this week"** is not physically possible on a clean domain. Bulk-sender rules (Google/Yahoo/Microsoft, enforced since Feb 2024, hardened Nov 2025) punish a cold domain that ramps fast — placement drops below 50% within two weeks if you push 100/day, and even 40+/day on an un-warmed domain burns it. A new domain has to start at **5–10/day and ramp over 4–6 weeks.** So "this week" = **start warming + go live on paid**; cold email reaches 50–75/day around **week 4–5**, not day one.

Neither of these is a reason not to go. They're the reason to sequence it right.

---

# ACT 1 — The Game Plan (co-CEO seat)

## The objective, stated as a number

Not "awareness." We're optimizing for **closed invoice dollars per dollar spent.** Target for the first 90 days:

- **Blended ROAS ≥ 3:1** on paid (every $1 of ad spend returns ≥ $3 in *closed, paid* invoices — not web-cart sales, which our funnel doesn't do).
- **Cold email: ≥ 4 closed deals/mo** once warmed (month 2+), at < $200/mo tooling cost.
- **North-star for the quarter:** add **$4,000–$8,000/mo** in net-new revenue on top of the warm/reactivation base, without Venus dropping a single warm lead.

## Why ROAS has to be redefined for PNG (this is critical)

You sell by **concierge close** — call/email → Shopify draft order → invoice → paid. Your site's add-to-cart rate is ~0.18–0.58%. That means **a pixel "purchase" event will almost never fire**, so platform-reported ROAS inside Meta/Google Ads Manager will read near-zero and lie to you. If we optimize to the platform's number, we'll shut off campaigns that are actually working.

**So ROAS is measured on closed invoices, attributed back to source.** Three mechanisms, stacked:
1. **One question on every lead:** "How'd you hear about us?" (Venus logs it — already her habit).
2. **UTM tags + a dedicated landing path** for paid traffic, and a **distinct lead-form / phone extension** so paid leads are self-identifying.
3. **HubSpot deal source field** filled at draft-order creation, so monthly we can run "revenue by source."

That's the real scoreboard. The platform dashboards are for *cost* metrics (CPL, CPM, frequency) only.

## ENGINE 1 — Light Paid, retargeting-first

You already have Meta + Google accounts with retargeting running. Good — that's the highest-ROAS dollar you can spend, so we lean into it before we spend a cent on cold prospecting.

**Budget split at the $750/mo midpoint (scale to your comfort inside $500–$1k):**

| Layer | Monthly | Why | Expected |
|---|---|---|---|
| **Retargeting** (Meta + Google) — warm site visitors, video viewers, IG/FB engagers, past customers (upload the reactivation list as a Custom Audience) | **$450** | Cheapest, warmest dollar. These people already touched PNG. Free-proof + 5-day offer closes them. | 8–15 leads/mo → 2–5 closes → **$800–$2,000** |
| **Prospecting lead-gen** — Meta lead-form ads to LA-metro Spanish SMBs (Lookalike of past buyers + geo + interest: small biz owners, event vendors, restaurants, churches, quinceañera/party economy) | **$300** | Fills the top of funnel with net-new local SMBs in Spanish. Lead form = no landing-page friction. | 12–30 leads/mo → 1–4 closes → **$400–$1,600** |

**Creative angle (this is the wedge, in Spanish):** *"Mira tu diseño GRATIS antes de pagar — y lo entregamos en 5 días."* (See your design free before you pay — delivered in 5 days.) That single line is the combination **no competitor offers** — free proof *before* payment + 5-day delivery + bilingual. Lead with it.

**The no-regret move this week:** confirm the **Meta Pixel + Google tag are firing**, and add a **"Lead" / "Contact" custom conversion** (form submit, WhatsApp/phone click) so we optimize toward *leads*, not phantom purchases. Retargeting can stay on and scale immediately; prospecting turns on once the lead form + UTM/landing path is live (2–3 days).

## ENGINE 2 — Cold email (the "in the pocket" campaign)

### Your Apollo options — walked through

Your Apollo is wired to **Proago.club**. Three ways to run PNG cold email without polluting that:

**Option A — Add a PNG mailbox to the existing Apollo account.** Cheapest. Apollo lets you link multiple sending mailboxes. You'd connect a new `@promotengrow.com` inbox and send PNG campaigns from it.
- ✅ No new subscription. ⚠️ Shares one Apollo workspace/reputation with Proago; data and sequences mix; harder to hand Venus her own clean view. *Acceptable as a stopgap, not the real setup.*

**Option B — A separate Apollo seat/workspace for PNG.** Clean separation of data, sequences, and reporting.
- ✅ Truly isolated; Venus gets her own login scoped to PNG. ⚠️ Another seat cost; you're paying Apollo to do a job (sending) it's not actually best at.

**Option C — Apollo for *data*, a dedicated cold-email tool for *sending* (recommended).** Use Apollo (or its $ credits) to **build the list** — LA-metro Spanish SMBs, verified emails — then **export and send through a purpose-built cold tool (Instantly or Smartlead)** on the `promotengrow.com` domain.
- ✅ These tools have **built-in domain warmup, inbox rotation across multiple mailboxes, spam-rate monitoring, one-click unsubscribe, and reply detection** — the exact machinery deliverability now requires. They're built to keep you out of spam; Apollo's sender is not. ~$30–100/mo.
- ✅ Keeps Apollo's Proago workspace untouched (you just pull data).
- ⚠️ Two tools instead of one. Worth it — **deliverability is the whole ballgame**, and a dedicated sender is how you protect it.

> **My call as co-CEO: Option C.** Apollo finds and verifies the people; Instantly/Smartlead warms the domain and sends safely. Set up the separate `hello@promotengrow.com`-style sending inboxes (2 of them) this week so warmup starts immediately.

### The domain rule (non-negotiable)

Cold email sends **only** from the **separate `promotengrow.com` domain — never `promongrow.com`** (your real/transactional domain). If a cold campaign ever draws spam complaints, it must not be able to touch the deliverability of your invoices and client replies. (Reminder: you already have client replies landing in SPAM — villahallmark.com — so the main domain's reputation is fragile and must be protected, not gambled.)

### Infrastructure checklist (set up this week, sends start light)
- 2 sending inboxes on `promotengrow.com` (e.g., `venus@`, `team@`), each with a real signature + photo.
- **SPF + DKIM + DMARC** published on the domain. **One-click unsubscribe** in every send.
- Warmup ON from day one (the tool simulates real conversation to build reputation).
- **Volume ramp:** ~10/day per inbox week 1 → 20/day wk 2 → 30–35/day wk 3 → **2 inboxes × ~30 = ~60/day live around week 4–5.** That's your 50–75 target, reached safely.
- Hard guardrails: **spam complaints < 0.1%**, bounces < 2%. List must be email-verified before sending (Apollo verifies; the cold tool re-verifies).

### The list & the message
- **Segment:** LA-metro Spanish-speaking SMBs in the party/event/local-business economy — restaurants, food vendors, churches, party-rental & quinceañera vendors, auto shops, salons, real-estate teams. Owner/manager titles. Verified business emails.
- **Message:** short, bilingual, *one* ask. Same DNA as Venus's First-Call and Follow-Up playbooks: name them, name a *specific* relevant product, lead with **free proof + 5-day delivery**, one easy CTA ("Reply SÍ and I'll send a free mockup with your logo"). 3-touch sequence over 7 days. **Cold email's job is to start a conversation Venus finishes** — not to close in the inbox.

## The funnel into Venus (the part everyone skips)

Both engines dump into **one place** with **one rule: speed-to-lead.**
- Every paid lead and every cold reply routes to Venus **in real time** (Meta lead → email/Slack ping; cold reply → her inbox).
- **SLA: first touch within 1 hour during her 10a–4p PT hours; same-day otherwise.**
- **Daily cap honored:** if inflow exceeds ~6–8 fresh leads on a given day, the overflow is **queued, not dumped** — she works newest-warmest first, and we *throttle the source*, we don't bury her.
- Logged in HubSpot with source = scoreboard input.

## Week-by-week (starting this week)

| Week | Paid | Cold email | Venus |
|---|---|---|---|
| **1 (this week)** | Verify pixel/tag + Lead conversion. Scale retargeting. Build lead form + UTM path. | Stand up 2 inboxes, SPF/DKIM/DMARC, warmup ON. Build + verify list in Apollo. | Keep working reactivation + live deals. Brief her on the new lead flow + 1-hr SLA. |
| **2** | Prospecting lead-gen live ($300). Watch CPL. | Warmup continues (~10–20/day, warmup traffic only). Finalize 3-touch bilingual sequence. | Start fielding *paid* leads (small trickle). Log source every time. |
| **3** | Optimize: kill worst ad, double best. | Begin *real* sends ~20–30/day, monitor spam rate hard. | Paid leads + first cold replies. |
| **4–5** | Steady. First ROAS read on closed invoices. | Ramp to **50–75/day** across 2 inboxes. | Full inflow at her cap. First cold-sourced closes. |
| **6+** | Reallocate budget to whatever's closing. | Steady-state; rotate list. | Scoreboard review; decide on scaling (incl. whether a 2nd closer is needed). |

## 90-day economics (realistic, not rosy)

- **Paid:** ~$750/mo × 3 = $2,250 spend → target ≥ $7,000 closed (3:1).
- **Cold email:** ~near-zero month 1 (warming), ramping to ~4–8 closes/mo by month 2–3 → ~$3,000–$6,000 over the quarter, tooling cost < $600 total.
- **Combined net-new:** ~**$10K–$13K over 90 days**, *capacity-permitting* — which is the whole catch, handled in Act 3.

---

# ACT 2 — Red-Team (I'm now your most aggressive competitor)

*I run a bigger LA display shop. I have more ad budget, an SDR team, and I've read your website. Here's how I'd beat this plan — and where it cracks on its own.*

1. **Your closer is your single point of failure — so I attack her bandwidth.** You have *one* bilingual closer at 5–10 leads/day, and she's already loaded with 162 reactivation accounts + live deals. I don't need to beat your marketing; I just need to make you *succeed at lead-gen* and watch leads pile up unworked. Every lead Venus can't reach in an hour, I reach first. **Your growth plan generates demand you can't service — that's my opening.**

2. **I outbid you on the only high-intent channel — and you're barely in it.** Your plan is retargeting + cold (both low-intent or warm-recycled). The person Googling *"custom tents Los Angeles"* or *"carpas personalizadas"* right now is ready to buy. You allocated **$0 to Google Search.** I own that auction. You're fishing where the fish are full; I'm at the feeding frenzy.

3. **Your wedge is copyable and I'll copy it by Friday.** "Free proof before you pay" and "5-day delivery" are a *landing-page change* for me, not a capability. Signwin already badges "Free AI Auto-Check Artwork." The moment your ads prove the angle converts, I run the same Spanish creative with my bigger budget and bury your impressions. **An unprotected wedge is just free R&D for me.**

4. **Cold email is a coin flip you're running on a fragile base.** One bad list, one spammy subject line, a complaint rate over 0.3%, and `promotengrow.com` gets blacklisted. Worse — if you ever get lazy and send from the main domain, *your invoices and client replies die.* You *already* have replies hitting SPAM. You're one mistake from a deliverability fire that takes weeks to recover. I just have to wait for you to trip.

5. **"This week" pressure makes you sloppy.** Rushing cold email live before warmup = torched domain. Rushing a lead-gen form without a real landing experience = garbage leads, low quality, Venus's time wasted. Speed is your stated value (5-day delivery) but here it's your enemy. I'd bet you cut the warmup corner.

6. **ROAS on a $500–$1k budget is statistically noisy.** At $400 AOV you need closes to read ROAS, and at this spend you'll get a *handful* of closes/month. One lumpy $1,300 institutional-type deal (or one dud month) swings your "ROAS" wildly. You'll make on/off budget decisions on **random noise** and either kill a working channel or pour money into a lucky one. I run enough volume to know my real numbers; you're reading tea leaves.

7. **Lead-form ads on Meta attract tire-kickers and bot/junk leads.** Cheap CPL looks great in the dashboard and converts terribly. You'll celebrate "30 leads!" while Venus burns hours on people who wanted a free t-shirt. Your *cost per lead* drops and your *cost per closed deal* quietly explodes. I'd let you enjoy that vanity metric.

8. **You're concentrating on one ethnic-SMB niche I can fracture.** LA-metro Spanish SMB is smart positioning, but it's a finite, tight-knit, referral-driven community. If **one** Venus follow-through slips — a missed proof, a late delivery during your "5-day" promise under new volume — word travels fast in that network and poisons the well. I'd amplify any stumble.

9. **No retention/repeat loop in the plan.** It's all *acquisition.* You're paying to acquire $400 customers once. I build the reorder engine (every event vendor reorders seasonally) and win on LTV while you grind CAC. Your own data shows reorders (Donut Media, institutional POs) are where the money is — and this plan barely touches it.

10. **You have no kill-criteria or attribution discipline written down.** "We'll watch ROAS" is not a control system. Without pre-committed thresholds you'll let a losing channel run on hope, or panic-cut a winner. And with concierge attribution done by memory, you won't even *know* which engine drove the close. I win by simply being more disciplined than you.

---

# ACT 3 — The Rebuilt Plan (hardened against every exposure above)

Same two engines, re-sequenced and fortified. Each fix maps to a red-team point.

## Fix #1 — Make Venus's capacity the design center, not an afterthought *(attacks 1, 7)*
- **Throttle demand to her real capacity.** We size *paid + cold inflow* to ~**5–6 quality leads/day max**, and we **start retargeting-only** so the first leads are warm and close fast — she wins early, morale and ROAS both up.
- **Protect her time with a 60-second qualifier** on the paid lead form (budget? timeline? product? business name?) so tire-kickers self-filter *before* they hit her. Quality over CPL.
- **Pre-decide the overflow trigger:** if Venus has > 8 untouched leads at any point for 3 days running, we **pause prospecting spend** (not bury her) and either tighten targeting or **green-light a second part-time closer.** Capacity is a dial we turn, on purpose.
- **Speed-to-lead is the #1 KPI**, instrumented: timestamp lead-in, timestamp first-touch, target < 1 hr.

## Fix #2 — Add a small, ring-fenced Google Search line *(attacks 2)*
- Carve **$150/mo** out of the prospecting budget for **Google Search on 3–5 exact high-intent local terms** ("custom tents los angeles," "carpas personalizadas los angeles," "table covers / manteles con logo," "trade show display los angeles"). Tight exact/phrase match, geo-fenced to LA metro, negative-keyword list against freebies/jobs.
- This captures the **ready-to-buy** searcher the original plan ceded to competitors. Even 1–2 closes/mo here is the highest-intent revenue in the whole plan. Revised split: **$400 retargeting / $150 Google Search / $200 Meta prospecting.**

## Fix #3 — Protect the wedge so copying it doesn't help them *(attacks 3, 8)*
- A landing page can copy the *words* "free proof + 5-day." It **can't copy owned LA production + a bilingual human who calls back in an hour + the reactivation relationships.** So we **bundle the wedge with proof of trust**: real customer names/logos, "formerly PrintCo Direct — serving LA since [year]," photos of actual jobs, Spanish video testimonial. Make the *credibility* the moat, not the slogan.
- **Lock in referral capture** in the Spanish-SMB network (see Fix #6) so the community's word-of-mouth works *for* us faster than a competitor's ad budget works against us.

## Fix #4 — De-risk deliverability to near-zero *(attacks 4, 5)*
- **Hard rule, in writing:** cold sends only from `promotengrow.com`, never the main domain. (Add to Venus's SOP.)
- **Option C confirmed** (Apollo data → Instantly/Smartlead send) precisely because it brings warmup + inbox rotation + spam-rate alarms + one-click unsubscribe + DMARC.
- **No corner-cutting on warmup, even with "this week" pressure:** this week we *start* warmup and *go live on paid.* Cold real-sends begin ~week 3, hit target ~week 4–5. "This week" is honored where it's safe (paid) and respected where it isn't (cold).
- **Auto-pause the cold campaign** if spam complaints cross **0.08%** or bounces cross 1.5% — before Google ever penalizes us. And run a **separate "main-domain health" check** to fix the existing villahallmark-in-SPAM issue so invoices land.

## Fix #5 — Replace noisy ROAS with a stable, leading-indicator scoreboard *(attacks 6, 10)*
- Judge channels on a **rolling 60-day** window and a **cost-per-closed-deal** target (**< $130** keeps us inside healthy margin), *not* single-month ROAS swings.
- Track **leading indicators** that stabilize fast (cost per *qualified* lead, lead→conversation rate, conversation→quote rate) so we steer before the lumpy revenue number arrives.
- **Attribution is instrumented, not remembered:** "how'd you hear?" + UTM/landing path + HubSpot source field on every deal. Monthly "revenue by source" report (I can auto-build this).
- **Pre-committed kill/scale criteria (written down):**
  - *Scale* a channel if rolling cost-per-closed-deal < $130 **and** Venus has capacity.
  - *Fix-or-cut* a channel if after 60 days (full fair test) cost-per-closed-deal > $250 or it produces leads Venus can't close.
  - *Pause prospecting* automatically on the overflow trigger (Fix #1).

## Fix #6 — Bolt on the retention/reorder loop the original plan was missing *(attacks 9)*
- The **162-account reactivation list is the cheapest revenue in the building** — it costs ~$0 in ad spend and it's *already* Venus's job. The growth plan must not distract from it; it should *reinforce* it: retargeting includes the **past-customer Custom Audience**, so lapsed buyers see PNG ads *while* Venus calls them. Air + ground game on the same target.
- **Seasonal reorder triggers:** tag event vendors by their season; auto-remind Venus to reach out ahead of their busy window. LTV beats CAC — bake it in now.
- New paid/cold customers enter the **same reorder loop** the day they buy. We're not buying one-time $400 orders; we're buying relationships.

## Fix #7 — Sequencing that honors "this week" without the risk

**This week (no-regret moves):**
1. Confirm Meta Pixel + Google tag fire; add a **Lead** conversion event.
2. Scale **retargeting** (incl. past-customer audience) — warmest, highest-ROAS dollar, live now.
3. Stand up **2 `promotengrow.com` inboxes + SPF/DKIM/DMARC + warmup ON.**
4. Build the **list in Apollo** (LA-metro Spanish SMBs) — data only.
5. Brief Venus on the lead flow + **1-hour speed-to-lead SLA**; set HubSpot source logging.
6. Fix the **main-domain SPAM issue** so invoices/replies land.

**Weeks 2–3:** Meta prospecting + Google Search live (small); cold sequence finalized; real cold sends begin light.

**Weeks 4–5:** cold ramps to 50–75/day; first ROAS read on *closed invoices*; first scale/cut decisions on 60-day leading indicators.

## The hardened scoreboard (what we actually watch)

| Metric | Target | Why it's here |
|---|---|---|
| Speed-to-lead (lead→first touch) | < 1 hr | The #1 lever; protects against the capacity exposure |
| Untouched-lead backlog | < 8, else throttle | Demand never outruns Venus |
| Cost per **qualified** lead | < $40 | Beats vanity CPL |
| Cost per **closed deal** | < $130 | The real efficiency number |
| Blended ROAS (closed invoices, 60-day) | ≥ 3:1 | Your stated goal, measured honestly |
| Cold spam-complaint rate | < 0.08% (auto-pause) | Protects the domain |
| Reorder/repeat rate | trending up | LTV moat |

---

## What I need from you to pull the triggers this week
1. **Green-light Option C** (Apollo for data + Instantly/Smartlead for sending) — or tell me you'd rather start with Option A to save the subscription.
2. Confirm I can **set up the 2 `promotengrow.com` sending inboxes** (or you do it and hand me access the safe way — never paste passwords into files).
3. Confirm the **$400 / $150 / $200** paid split (retargeting / Google Search / Meta prospecting) inside your $500–$1k band, or adjust.
4. Say the word and I'll **draft the bilingual 3-touch cold sequence + the Meta lead-form creative**, build the **Apollo list**, and stand up the **revenue-by-source tracker** so the scoreboard is live from day one.

*The plan is built to fail safe: paid is reversible day-to-day, cold can't burn the main domain, and Venus can never be buried. We grow exactly as fast as we can close — and not one lead faster.*
