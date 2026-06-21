# Lead Qualification System

> **Canonical tags:** Use the namespaced tag set in [[shopify-tag-taxonomy]] (stage: / src: / tier: / vip). Any tag names in this page map onto that canonical set. (co-CEO reconciliation 2026-06-17)

**Summary**: Station 2 of the funnel — the qualification layer between a raw lead and the [[concierge-close]]. It triages every inbound (call, web form, Google lead-form, email, Apollo) into HOT / WARM / COOL / DISQUALIFY using an event-display BANT rubric, applies a 5-minute speed-to-lead rule, runs Venus's bilingual qualify script, and writes one clean record to the Google Sheet pipeline + one durable Shopify customer tag. Goal: the closer only spends time on real buyers, and COOL leads route to email nurture instead of the trash.

**Type**: channel

**Sources**: PNG-Closer-Onboarding-Workbook.md, PNG-Master-Context-Playbook.md, co-CEO build session 2026-06-17.

**Last updated**: 2026-06-18 (added canonical tiered speed-to-lead rule).

---

## Why this station exists

Revenue runs on the [[concierge-close]], not the cart — 180-day data: 3,936 sessions to 7 add-to-cart to 31 orders, more orders than carts (source: PNG-Master-Context-Playbook.md). The closer's hours are the scarce resource. Qualification protects those hours: it sorts who gets a same-minute call (HOT), who gets a same-day touch (WARM), who gets dropped into automated email nurture (COOL), and who gets politely closed out (DISQUALIFY). The cold-traffic success metric is `quote_request_submitted` — a quote REQUEST, not a checkout (source: PNG-Master-Context-Playbook.md). See [[conversion-bridge]].

State lives in two places, by Carlos's decision (co-CEO recommendation honoring his 2026-06-17 call): the **Google Sheet** is the working queue + stage; **Shopify customer tags** are durable state. Not HubSpot.

---

## (a) Qualification rubric — BANT adapted for event displays

Standard BANT (Budget / Authority / Need / Timeline) is extended with the four things that actually decide an event-display order: **Quantity**, **Artwork readiness (file-prep)**, **event date**, and **geo / ship-by feasibility**. Score the eight dimensions, then read the tier.

| Dimension | What to capture | Strong signal |
|---|---|---|
| **N — Need / event type** | What's the moment? (booth, conference, sports event, grand opening, school, festival) and what product (tent, table cover, flag, SEG display, backdrop, banner, wall art) | A specific, branded event with a clear product in mind |
| **B — Budget** | Rough number or range; whether AOV-realistic (~$400 typical; bundles $595-$1,495) (source: PNG-Master-Context-Playbook.md) | At/above the order floor and aligned to a real product |
| **A — Authority** | Are they the buyer, or do they need a boss/committee/PO approval? | They can say yes (or control the card / PO) |
| **T — Timeline / event date** | The hard date. Drives urgency AND production feasibility | Date is real, named, and 5+ business days out |
| **Q — Quantity** | How many units / how big the setup (one tent vs full booth kit vs multi-unit) | Quantity that clears the floor; repeat/bulk is a plus |
| **AR — Artwork readiness** | Do they have a logo/vector file ready, or need design help? (file-prep is the #1 production friction) | Print-ready or near-ready art; or open to the free proof loop |
| **G — Geo / ship-by** | Ship-to location + can we hit the date in 5 business days from order-to-art-approval? | Reachable by the 5-day promise with margin |
| **Lang** | EN / ES / bilingual (route to Venus's matching register) | Captured so the first call is in their language |

**Tier definitions:**

- **HOT** — Real event + real date 5+ business days out + budget that clears the floor + reachable by ship-by + a named product, AND the person can buy or strongly influences. Artwork ready OR happy to do the free-proof loop. **Action: 5-minute callback (see (b)), push straight to the free-proof pivot and a [[concierge-close|draft-order]] quote.** (co-CEO recommendation)
- **WARM** — Genuine need and a believable timeline, but one gap: budget vague, not the final decision-maker, date soft, or artwork not started. Worth real closer time. **Action: same-business-day call/text, qualify the gap, start the free proof to keep it moving.** (co-CEO recommendation, echoing the workbook's "send the free proof in the meantime" reframe, source: PNG-Closer-Onboarding-Workbook.md)
- **COOL** — Interested but not now: event far out / no date, just browsing, no budget yet, or "researching." Real human, wrong timing. **Action: do NOT spend live closer time — route to the email nurture (see (f)) and tag for later.** (co-CEO recommendation)
- **DISQUALIFY** — Out of scope: wholesale/reseller fishing, a job/spam/vendor pitch, an existing-order support issue (route to order support, not sales), abusive, or a product P&G doesn't make. **Action: polite close-out or correct routing; do not nurture.** (co-CEO recommendation)

**The fast read (when Venus is new and time-pressed):** a lead is at least WARM if it has a real event + a real date; it's HOT if it also clears budget/floor and is reachable by the 5-day promise; it's COOL if the date is missing or far out; it's DISQUALIFY if it isn't a real event-display buyer at all.

---

## (b) Speed-to-lead rule + after-hours fallback

> **Canonical speed-to-lead rule (the single source of truth — reconciles the 5-min / <15-min / <1hr variants across the library):**
> - **5 minutes** — paid + high-decay leads (Google lead-form, Meta lead-form, ad/web quote form). Interrupt other work; these decay fastest.
> - **< 1 hour** — warm inbound during Venus's hours (organic email/Apollo reply, direct call, web inquiry) (the [[growth-offensive]] hardened-scoreboard figure).
> - **Same business day** — organic / lower-intent inbound; clear the overnight queue first thing next business morning.
>
> (Reconciles lead-machine's "5-min", the scorecard's "<15-min", and growth-offensive's "<1hr" — they're the same rule by lead tier, not a contradiction. co-CEO reconciliation 2026-06-18.)

Speed-to-lead is the #1 close factor — first to respond usually wins (source: PNG-Master-Context-Playbook.md, PNG-Closer-Onboarding-Workbook.md).

- **Ad / web / Google lead-form leads: 5-minute callback.** These are paid or high-intent and decay fastest. Venus calls within 5 minutes during business hours; if no answer, she immediately texts + emails the free-proof offer (the workbook's Attempt-1 pattern, source: PNG-Closer-Onboarding-Workbook.md). [Carlos-VA: confirm which device/number gets the instant alert.]
- **Other inbound (organic email reply, Apollo reply, direct call): same-business-day, within minutes if possible** (source: PNG-Closer-Onboarding-Workbook.md).
- **After-hours fallback:** [Carlos to provide: confirmed business hours] — auto-attendant after-hours greeting + the sales voicemail already capture name / number / event date / need and point to the free-proof email (source: PNG-Closer-Onboarding-Workbook.md, §6.2/§6.3). An auto-reply (web form / Google lead-form / email) acknowledges instantly and sets the expectation: first thing next business morning. [Carlos-VA: set the instant auto-reply + admin alert on the quote form and Google lead-form. Lane: Carlos-VA toggle; the on-site form/alert plumbing is Claude Code.] First action of the next business day = clear the overnight HOT/WARM queue before anything else.

The 5-minute clock is only credible once the instant admin alert exists — that alert is the speed-to-lead enabler the [[conversion-bridge]] already calls for (source: PNG-Master-Context-Playbook.md).

---

## (c) Outward copy (ganas voice) — Venus's bilingual qualify call + text script

These are the only ganas-voice lines on this page. Say them warm, in your own voice — scaffolds, not robot lines. Match the customer's language; never pushy, we equip, we don't pressure. Always anchor the **free proof** and **5-day delivery** (source: PNG-Closer-Onboarding-Workbook.md).

**Opening (call, EN):**
> "Hi [Name], this is Venus from Promo & Grow — you reached out about your [event], so I wanted to catch you right away. Tell me what you've got coming up."

**Opening (ES):**
> "Hola [Name], le habla Venus de Promo & Grow — vi que nos escribió sobre su [evento] y quise llamarle de una vez. Cuénteme, ¿qué tiene próximamente?"

**The key qualifying questions (woven into conversation, never an interrogation) — these map straight to the rubric:**
> 1. "What's the event, and when is it?" (Need + Timeline + Geo/ship-by)
> 2. "What are you picturing — just the tent, or the full setup? And about how many?" (Need + Quantity)
> 3. "Is this your first time setting up, or leveling up from last time?" (persona + stakes)
> 4. "Do you already have your logo file ready, or do you want us to help you get it print-ready?" (Artwork readiness — and the natural opening for the free proof)
> 5. "And are you the one putting this together, or is there someone else you'll want to loop in?" (Authority — asked light, never gatekeeper-y)
> 6. Budget, asked by anchoring not interrogating: "Most folks doing a [event] like yours land around [tier] — does that feel about right for what you're planning?" (Budget)

**The free-proof pivot (the move that turns a qualify call into a quote):**
> "Here's how easy it is — send me your logo, I'll get you a **free proof**, no charge and no commitment. Once you love it, we deliver in **5 business days**. Quiero que lo *vea* con su marca antes de decidir nada. Want me to start that proof for you right now?"

**Booking the next step (always end with a named next action):**
> "Perfect — I'll text you the link to send your logo, and I'll have your free proof and a quote back to you by [time/day]. ¿Le mando todo por texto o por correo?"

**Text version (when a call doesn't connect — HOT/WARM):**
> "Hi [Name], Venus from Promo & Grow 👋 Tried you just now about your [event] on [date]. Send your logo here [link] and I'll get a **free proof** started — free, no commitment, booth-ready in 5 days. O respóndame por aquí y le ayudo. ¿Cuántos necesita?"

**Text version (ES-first):**
> "Hola [Name], le escribe Venus de Promo & Grow 👋 Le llamé sobre su [evento] del [fecha]. Mándeme su logo aquí [link] y le hago una **prueba gratis** — sin compromiso, listo en 5 días. ¿Cuántos necesita?"

These live alongside the inbound-call and discovery scaffolds already in the workbook (source: PNG-Closer-Onboarding-Workbook.md, §3). [Carlos-VA: confirm the logo-upload link Venus texts — the quote form URL.] See [[png-voice]] and [[bilingual-spanish-moat]].

---

## (d) Intake triage — raw lead by source becomes a qualified, tagged record

Every source funnels to ONE place: a new row in the Google Sheet, qualified on first contact, then a Shopify customer tag applied. The closer's job at this station is the same regardless of source — make first contact fast, run the (c) script, score the (a) rubric, write the (e) record.

| Source | How it arrives | First touch | Becomes |
|---|---|---|---|
| **Phone call** | Inbound to (844) 883-3308 / auto-attendant (source: PNG-Closer-Onboarding-Workbook.md) | Live answer = qualify on the call; voicemail = 5-min/same-day callback | New Sheet row, tier scored live, tag applied |
| **Web form (Get a Free Proof)** | Quote form: name/email/phone/product/qty/event-date/notes/logo (source: PNG-Master-Context-Playbook.md) | Instant auto-reply fires; Venus calls within 5 min | Pre-filled Sheet row (form fields), confirm + score on call |
| **Google lead-form (paid)** | Lead-form extension from the Google Search test | 5-minute callback — highest decay | New Sheet row flagged source=Google-Ads, score on call |
| **Email** | Reply to a reactivation/campaign email or to hello@promongrow.com | Same-day reply + call; reactivation engagers are pre-warmed (Apr 23 reply email = 13% clicks) (source: PNG-Master-Context-Playbook.md) | New/updated Sheet row, source=Email |
| **Apollo** | B2B reply or booked task in an Apollo sequence | Treat a reply as WARM minimum; qualify by the same script | New Sheet row, source=Apollo, link Apollo contact |

**Dedupe rule:** before creating a row, check the Sheet + Shopify customers for an existing record (email/phone). If found, update the existing record and re-tier — never create a duplicate. Repeat/VIP buyers (Josh @ Donut Media, South Gate, Pathita @ Tao Kae Noi) are WARM-or-better by default (source: PNG-Closer-Onboarding-Workbook.md). See [[vip-reactivation-list]].

**Existing-order / support contacts are NOT sales leads** — route to order support (auto-attendant option 2) and do not create a pipeline row (source: PNG-Closer-Onboarding-Workbook.md, §6.4).

---

## (e) Exactly which fields are captured + which Shopify tag is applied

**Google Sheet — one row per lead, captured at qualification:**

1. Date/time of first contact
2. Lead name
3. Phone
4. Email
5. Language (EN / ES / bilingual)
6. Source (Phone / Web-form / Google-Ads / Email / Apollo)
7. Event type / the moment
8. Product(s) of interest
9. Quantity
10. Event date (the hard date)
11. Ship-to location (geo / ship-by feasibility)
12. Budget signal (range or note)
13. Authority (decision-maker? Y/N/notes)
14. Artwork readiness (ready / needs help / unknown)
15. **Tier** (HOT / WARM / COOL / DISQUALIFY)
16. **Stage** (New → Contacted → Qualified → Proof Sent → Quoted/Draft-Order → Won / Lost / Nurture)
17. Next step + next-action date (every live row must carry one)
18. Owner (Venus)
19. Notes
20. Shopify tag applied (mirror of the tag, for cross-check)

Stage values align to the [[concierge-close]] path; Station 2 owns New → Qualified. "Proof Sent" onward is Station 3 (the close). [Carlos-VA: stand up the Google Sheet with these columns + the tier/stage dropdowns. Lane: Claude-admin can draft the template.]

**Shopify customer tag applied at THIS stage (durable state):**

- Apply a **lifecycle tag** = the tier: `lead-hot`, `lead-warm`, `lead-cool`, or `lead-disqualified`.
- Plus a **source tag**: `src-phone` / `src-webform` / `src-googleads` / `src-email` / `src-apollo`.
- Plus a **language tag** where known: `lang-es` / `lang-en` (feeds bilingual routing + future segmented sends).

When the lead advances past qualification, the lifecycle tag is upgraded downstream (e.g. to `quote-sent` / `customer`) at Station 3 — Station 2 only owns the `lead-*` tags. (co-CEO recommendation — tag scheme proposed for Carlos's 2026-06-17 "Sheet + tags, not HubSpot" decision.) [Carlos-VA: confirm/adopt this exact tag vocabulary so the Sheet and Shopify stay in lockstep. Lane: Claude-admin can apply tags in Shopify admin once the vocabulary is confirmed.] See [[store-and-catalog]].

---

## (f) Disqualify vs nurture — route COOL leads, don't trash them

The distinction is load-bearing because the audience wants conversation, not a hard sell (Apr 23 reply email 13% clicks vs Jan 30 hard-sell 0% clicks) (source: PNG-Master-Context-Playbook.md). A COOL lead is a future buyer with the wrong timing, not a dead lead.

- **COOL → nurture.** Tag `lead-cool`, set Stage = Nurture, and add the contact to the [[reactivation-email-sequence]] / soft email nurture (Shopify Email). If an event date is known but far out, set a Sheet next-action date to re-engage ~2-3 weeks before it. No live closer time now; the email channel keeps them warm until they raise a hand again, at which point they re-enter as WARM/HOT. [Carlos-VA: confirm the email-platform opt-in path for nurture adds.]
- **DISQUALIFY → close out / re-route.** Tag `lead-disqualified` (or route an existing-order contact to support). No nurture, no recurring touch. Keep the row for record/dedupe, mark Stage = Lost (reason).

The rule: COOL is a timing problem (nurture solves it); DISQUALIFY is a fit problem (nurture wastes sends and can hurt deliverability — SPF/DKIM/DMARC work got bounce to 1%, don't undo it) (source: PNG-Master-Context-Playbook.md). See [[conversion-bridge]] and [[sms-marketing]].

---

## (g) Daily lead-handling cadence (runnable by a closer ~1 week in)

Venus is ~1 week in and on the warm queue (source: PNG-Closer-Onboarding-Workbook.md). Keep it boringly repeatable.

**Top of day (first 30 min):**
- Clear the overnight queue first: any HOT/WARM from after-hours gets called/texted before anything else.
- Open the Google Sheet; sort by Tier then next-action date.

**All day (the standing rule):**
- **Any ad/web/Google lead-form lead = 5-minute callback** (interrupt other work; this is the only thing that jumps the line) — see (b).
- Other inbound = first contact within minutes, same business day at worst.
- Run the (c) script, score the (a) rubric, write the (e) record + apply the tag immediately while it's fresh. A lead isn't "handled" until it has a tier, a tag, and a next step.

**Mid-day block (~30-45 min):** work WARM follow-ups on their Day-1/Day-3/Day-7 cadence (re-send the proof, offer to adjust, deadline nudge) (source: PNG-Closer-Onboarding-Workbook.md).

**End of day (last 15 min):**
- Every live row has a next step + date — no orphans (this is how nothing leaks).
- Move stale COOL leads to nurture (f).
- Loom anything new she figured out (builds the SOP library) (source: PNG-Closer-Onboarding-Workbook.md, §7).

**Week-1 guardrail:** Carlos reviews her quotes before they send (source: PNG-Closer-Onboarding-Workbook.md). [Carlos-VA: confirm when Venus is cleared to send quotes/draft orders unreviewed.]

---

## Open items for Carlos

- [Carlos to provide: confirmed business hours for the after-hours rule + auto-attendant.]
- [Carlos to provide: the order floor $ and minimum margin — needed to score Budget cleanly in the rubric (still `[FILL IN]` in the workbook).] (source: PNG-Closer-Onboarding-Workbook.md)
- [Carlos-VA: confirm the quote-form / logo-upload URL Venus texts.]
- [Carlos-VA: confirm/adopt the Shopify tag vocabulary in (e).]
- [Carlos-VA: set the instant auto-reply + admin alert on the quote form and Google lead-form (speed-to-lead enabler).]

## Related pages
- [[concierge-close]]
- [[conversion-bridge]]
- [[closer-hire]]
- [[reactivation-email-sequence]]
- [[png-voice]]
- [[bilingual-spanish-moat]]
- [[store-and-catalog]]
- [[the-20k-math]]
- [[sms-marketing]]
- [[vip-reactivation-list]]
- [[dashboard]]
