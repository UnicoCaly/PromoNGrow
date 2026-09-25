# Venus Email Engine

**Summary**: The single consolidated engine for everything Venus does with email — the v2 rebuild of the 6/21 "Cold Email Program" kit (7 PDFs), brought current on three fronts: **inbound is live now** (Meta leads, not just "cold email in July"), the **voice is anti-AI** ([[png-voice]] rule), and the cold sending domain is the real **promoteandgrow.com** (the kit's "promotengrow.com" was a retired dictation typo). One idea runs through all of it: **the machine prospects, Venus closes.** This page orchestrates the engine and points to each component for depth.

**Type**: concept

**Sources**: the 6/21 "Cold Email Program" PDF kit (00 Cold-Cadence-Supplement, 01 Training-Module, 02 Email-Writing-Engine, 03 Cold-Reply-Playbook, 04 Setup-Sheet, 05 Cold-Email-Sequence, 06 Growth-Offensive), reviewed 2026-06-25. Consolidates + updates [[venus-cold-email-training]], [[venus-email-writing-engine]], [[cold-reply-playbook]], [[cold-email-sequence]], [[cold-email-segment-copy]], [[cold-email-setup-sheet]], [[growth-offensive-v2]]; integrates [[meta-lead-intake-playbook]] (the now-live inbound) and the [[png-voice]] anti-AI rule.

**Last updated**: 2026-06-25.

---

## What changed since the 6/21 kit (read first)

The original kit was seven separate docs and a June-21 snapshot. Three things are now different — this engine reflects them:

1. **Inbound is LIVE.** The Meta ad is producing real leads *today* ([[meta-lead-intake-playbook]] — first two in 6/24). The engine is no longer "cold email in July + maybe ads later"; the **inbound lane is running now and is the priority**. Cold email still warms for July; it is the second lane, not the headline.
2. **The voice is anti-AI.** All copy follows the [[png-voice]] anti-AI rule — no "quick one," no "happy to," no "quick question" subject lines. The kit PDFs predate this and read AI-ish; use this engine's copy and the scrubbed component pages, not the PDFs.
3. **The cold domain is `promoteandgrow.com`.** The kit's printed setup sheet says **promotengrow.com** — a Whisper dictation typo, retired 2026-06-22 (see [[dashboard]] domain map). The **live wiki is already corrected** ([[cold-email-setup-sheet]] uses promoteandgrow.com); it's the **6/21 PDF that's wrong**. Cold sends go from **promoteandgrow.com**; the store + daily/inbound + CC domain is **promongrow.com**. ⚠️ **Don't run DNS off the printed PDF** — use the wiki page.

## The one idea

**The machine prospects, you close.** Venus does not spend her day sending blasts. A tool sends cold email; ads bring inbound leads; **her job is to take every reply and run it to a free proof.** Her metric is *replies worked → proofs → closes*, never sends.

## The two lanes feeding the engine

| Lane | Status | Source | Venus's move |
|---|---|---|---|
| **INBOUND** | **LIVE now** | Meta ad → instant lead form / IG DM · Fútbol replies · (later) Google Search | hottest leads — first contact = **DM + email together** ([[meta-lead-intake-playbook]]); 5-min on paid, <1 hr on others |
| **OUTBOUND** | **warming → ~July** | cold email, 3-touch, from **promoteandgrow.com** ([[cold-email-sequence]]); Apollo for data only | the machine sends; **only responders** reach her queue |

Both lanes converge on the same three moves.

## The three moves (every single lead)

**Triage (30 sec) → pivot to the free proof → log it.** That's the whole game.

1. **Triage** — HOT / WARM / COOL / DISQUALIFY ([[lead-qualification-system]] fast read). A reply is WARM minimum by default — they raised a hand.
2. **Free proof** — the next step is always *"send me your logo and I'll start a free proof, no charge, no commitment. Once you love it, 5 business days."* The easiest yes in the business. You're not closing the order in one message — you're getting the proof started.
3. **Log it** — Sheet row + Shopify tag + next step + set the Meta stage. If it's not logged, it didn't happen.

## The method (Connor Murray, cold form)

- **Value statement — WHO / WHY / WHAT.** One line who we are, the value (free proof + 5 days + we speak Spanish), then the ask. Value first.
- **Assumptive language, never permission.** Not *"would you be interested?"* → *"send me your logo and I'll start your free proof."* State the next step as if it's happening; they only have to not stop it.
- **The next step is the free proof, not the whole order.**
- **Follow-ups are where the money is** — ~70–80% of replies come from follow-ups, not touch 1. Persistence with a reason, never a nag.

## The cold cadence (how the machine emails)

Three touches over seven days, every other day. Venus doesn't send these — the tool does — but she should know the rhythm she's replying into:

| Touch | Day | Job | The vibe |
|---|---|---|---|
| 1 | Day 1 | the intro (**no link**) | who we are + free proof + 5 days → "worth a look?" |
| 2 | Day 3 | the proof (one link max) | a micro-example + "reply YES and I'll start a free mockup" |
| 3 | Day 7 | the easy out (breakup) | "should I close your file?" — removing the pressure pulls the reply |

Every-other-day because past ~48h reply rates fall off a cliff. Stop at 3–4 touches; non-responders return to a fresh list in 6–8 weeks (usually bad timing, not a real no). **ABAB rhythm** keeps the morning email block ~1 hour (list A Mon, B Tue, FU-A Wed, FU-B Thu); the rest of the day is calls + closing.

## Drafting — the writing engine

Venus generates drafts with the **3-prompt pack** in [[venus-email-writing-engine]] (Mode 1 ChatGPT/Claude, Mode 2 NotebookLM-grounded). The prompts now carry the **anti-AI clause baked in**, so drafts come out clean. What "good" looks like, so she can fix any draft in 20 seconds:

- WHO / WHY / WHAT, 3 short paragraphs, **under ~90 words**, one phone screen.
- **Touch 1 = zero links** (links tank first-touch deliverability); later touches one link max.
- **Assumptive CTA**, ends on the free proof.
- The wedge every time: **free proof before you pay · 5 business days from proof approval · we speak Spanish.**
- Delivery is always **"5 business days from proof approval"** — never "guaranteed," never a day count.
- Subject: 3–4 words, lowercase, human ("idea for [business]," "una idea para [business]") — never salesy, and **no "quick" AI-tells**.
- Bilingual only with taste — match their language; read it aloud.

## Handling a reply (the part used TODAY)

Full decision tree + the cold-objection bank = [[cold-reply-playbook]]. The core:

| Their reply sounds like | Tier | First move |
|---|---|---|
| real event + date, ready to buy | **HOT** | call/text in 5 min, free-proof pivot, start a draft-order quote |
| interested, one gap ("how much for a 10x10?") | **WARM** | reply fast, confirm the gap, pivot to the free proof |
| curious, not now ("just looking") | **COOL** | one warm reply + soft door → nurture |
| not a buyer (reseller/spam) | **DISQUALIFY** | polite close-out |

**Three branches** (EN/ES copy in [[cold-reply-playbook]], anti-AI versions):
- **Interested** → confirm lightly, pivot to the proof: *"Love it, [name] — send me your logo and I'll start a free proof with your design on it, no charge. What product, and roughly how many? I'll get it going today."*
- **"Just send a price"** → a free proof IS the fastest real number: *"The fastest way to a real number is a free proof with your logo, so you see exactly what you're getting. What product and about how many? I'll send the proof and the price together today."*
- **Objection / not now** → don't argue it; one soft touch, leave the door open, let it go to nurture.

**Consent before any text:** cold prospects didn't opt in. Reply on the channel they used; text only once they give a number and say it's okay (or a phone on a lead-form = consent for that request). Then it's a warm deal → run [[deal-followup-playbook]] Day-1/3/7.

## Segment product-angles (what to lead with)

| Business type | The angle (EN) |
|---|---|
| Event planner | step-and-repeat backdrops, tents, table covers |
| Brewery / taproom | festival tents, table covers, feather flags |
| Restaurant / food vendor | tents, table covers, menu signage |
| Caterer | tents, table covers, feather flags |
| Real-estate team | open-house flags, A-frames, yard signs, riders |
| Auto shop | vehicle magnets, banners, cards |
| Salon / barber | window graphics, price boards, branded cards |

Full bilingual snippet library = [[cold-email-segment-copy]] / [[cold-email-sequence]].

## The warm-list layer (why we also email people who know us)

The list is the asset (Hormozi, adapted): every cold email, ad, and inbound builds it; re-selling someone already on it is near-pure profit. PNG's ~1,221 dormant/warm contacts open at **32–39%**. ~4 seasonal "wrapper" campaigns a year (Summer of Fútbol, event season, holidays), each with a deadline + a quick win (the free proof). Honest scale: **+$4–8K per campaign**. Venus works the replies these sends create — same reply skill. See [[email-campaign-engine]] / [[reactivation-email-sequence]].

## The daily rhythm

- **Top of day:** clear any overnight HOT/WARM replies first.
- **All day:** paid/ad-form lead = 5-min callback (jumps the line); cold-email/Apollo reply = within the hour. Check the reply inbox ≥3× (morning, mid-day, EOD) plus instant on any paid-lead alert.
- **You are the throttle:** if fresh replies pass ~6–8/day and you can't touch them in time, tell Carlos to slow the source — don't drown. Queued beats buried.
- **End of day:** every live lead has a next step + date. No orphans.

## Quick-reference card

1. **Speed** — paid/ad = 5 min · cold reply = <1 hr · after-hours = first thing next morning.
2. **Triage** 30 sec — HOT / WARM / COOL / DISQUALIFY.
3. **Branch** — interested / "just send a price" / objection → pivot to the free proof, assumptive next step.
4. **Consent** before any text.
5. **Log** — Sheet row + Shopify tag + Meta stage + next step.
6. Interested → it's warm now → Day-1/3/7 from [[deal-followup-playbook]].

**The line that does the most work:** *"Send me your logo and I'll start a free proof — no charge, no commitment. Once you love it, 5 business days."*
**Never:** quote a custom price cold (→ Carlos) · discount past the floor (→ Carlos) · promise "guaranteed" or a day count · cold-text without consent · use "quick one / quick question / happy to."

## The kit, mapped (components + status)

| 6/21 PDF | Live wiki page | Status |
|---|---|---|
| 00 Cold-Cadence-Supplement | **this page** (its v2 consolidation) | replaced — current |
| 01 Cold-Email-Training-Module | [[venus-cold-email-training]] | Monday training module |
| 02 Email-Writing-Engine | [[venus-email-writing-engine]] | the 3 prompts (anti-AI hardened 6/25) |
| 03 Cold-Reply-Playbook | [[cold-reply-playbook]] | reply branches (anti-AI scrubbed 6/25) |
| 04 Cold-Email-Setup-Sheet | [[cold-email-setup-sheet]] | infra (Carlos/Claude-admin); wiki already on promoteandgrow.com — **the PDF's promotengrow.com is stale** |
| 05 Cold-Email-Sequence | [[cold-email-sequence]] | the 3-touch templates (anti-AI scrubbed 6/25) |
| 06 Growth-Offensive | [[growth-offensive-v2]] | the parent strategy (lean-launch, ROAS-on-closed-invoices) |

## PDF exports
- **This engine** → `Venus Onboarding Kit/PDF/PNG-Venus-Email-Engine.pdf` (branded, for Venus's kit).
- **The corrected kit (V2)** → `Cold Email Program - PDFs V2/` — re-exported from the current wiki: 00 engine · 01 training · 02 writing-engine · 03 reply-playbook · 04 setup-sheet · 05 sequence · 06 growth-offensive. The **old 6/21 `Cold Email Program - PDFs/` folder is kept as reference** (it carries the retired `promotengrow.com` typo, pre-anti-AI voice — don't run DNS off it).
- [Open: Carlos confirm the registered cold domain is `promoteandgrow.com` once, for the record.]

## Related pages
- [[meta-lead-intake-playbook]] — the live inbound lane
- [[venus-email-writing-engine]] · [[cold-reply-playbook]] · [[cold-email-sequence]] · [[cold-email-segment-copy]]
- [[venus-cold-email-training]] · [[cold-email-setup-sheet]] · [[growth-offensive-v2]]
- [[deal-followup-playbook]] · [[lead-qualification-system]] · [[operating-rhythm]] · [[png-voice]]
