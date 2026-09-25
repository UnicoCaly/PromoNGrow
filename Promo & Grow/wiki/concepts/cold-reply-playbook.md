# Cold-Reply Playbook

**Summary**: The missing piece in Venus's kit — what to do the moment a **cold** prospect replies (to a cold email in July, or a paid-ad / Fútbol DM today). The 67-page onboarding kit covers warm/reactivation replies and the qualify call, but not the *cold* reply, where trust is near-zero and the message is often terse ("how much?", "sí mándame info"). This page is the 30-second triage, the **three reply branches** (interested / brush-off / objection) in EN + ES, the SMS-consent rule, the speed-to-lead tier for cold, how to batch the inbox, and how cold replies get logged to the scoreboard. The move is always the same: **triage → free proof → assumptive next step → log it.**

**Type**: concept

**Sources**: extends [[lead-qualification-system]] (rubric/speed), [[deal-followup-playbook]] (warm objections), [[outbound-method]] (objection-over-email), [[cold-email-sequence]] (reply handoff), [[png-voice]]. Built by Claude-admin 2026-06-20.

**Last updated**: 2026-06-25.

> Outward copy anti-AI revised (v2) 2026-06-25 — see [[png-voice]] anti-AI rule.

---

## When this applies

Any **cold** reply — the prospect didn't know PNG before this thread:
- A reply to the July [[cold-email-sequence]] (Source = Cold Email).
- A **paid-ad lead-form** or **Meta/Fútbol DM** (Source = Google-Ads / Meta) — live this week.
- An Apollo reply.

It does **not** replace [[deal-followup-playbook]] (that's for warm/existing quotes) — it feeds into it once the cold lead has a free proof going. The difference: cold replies get **lighter** handling — she hasn't earned trust yet, so the goal is one easy yes (the free proof), not a pitch.

## Cold-reply speed-to-lead (the tier)

From [[lead-qualification-system]] — by source, not a single number:
- **Paid ad / lead-form reply = 5 minutes** (highest decay; interrupt other work).
- **Cold-email reply / Apollo reply = < 1 hour** during her 10am–4pm PT window; same business day at worst.
- **After hours:** the overnight queue is the **first thing** next business morning, HOT/WARM before anything else.

A cold reply is **WARM minimum** by default (they raised a hand) — never let one sit.

## Step 1 — Triage in 30 seconds

Don't run the full 8-point BANT on a one-line reply. Fast read ([[lead-qualification-system]]):

| Read | Signal in the reply | Tier | First move |
|---|---|---|---|
| Real event + real date, sounds ready to buy | "need a tent for our July 12 festival, how fast?" | **HOT** | call/text in 5 min, free-proof pivot, start a draft-order quote |
| Genuine interest, one gap (no date/budget/qty yet) | "yes tell me more" / "sí, mándame info" / "how much for a 10x10?" | **WARM** | reply <1 hr, confirm the gap, pivot to free proof |
| Curious, not now | "maybe later" / "just looking" / "not this season" | **COOL** | one warm reply + soft door; route to nurture, don't spend live time |
| Not a buyer | reseller fishing, spam, support issue, out-of-scope | **DISQUALIFY** | polite close-out / re-route; no nurture |

Then pick the branch below.

## Step 2 — The three reply branches (EN + ES)

### Branch 1 — Interested ("yes / sí / tell me more / how do I start")
Confirm fit lightly, then **pivot straight to the free proof** with an assumptive next step. This is the easiest yes in the business — don't oversell it.

> **EN:** "Love it, [name]. Here's the easiest way: send me your logo and I'll start a **free proof** with your design on it, no charge, no commitment. Once you love it, we deliver in **5 business days**. What product are you thinking, and roughly how many? I'll get the proof going today."
>
> **ES:** "¡Qué bien, [name]! La forma más fácil es esta: mándeme su logo y le empiezo una **prueba gratis** con su diseño, sin costo y sin compromiso. Cuando le encante, se lo entregamos en **5 días hábiles**. ¿Qué producto está pensando y más o menos cuántos? Hoy mismo le empiezo la prueba."

### Branch 2 — Brush-off ("just send a price" / "how much" / "mándame info")
A price ask with no context is usually a brush-off. Don't send a number into the void — **a free proof is the fastest real number.** Anchor the product + qty so you can actually quote.

> **EN:** "Easy. The fastest way to a real number is a **free proof with your logo**, so you see exactly what you're getting, no commitment. What product, and about how many? I'll send the proof and the price together today."
>
> **ES:** "¡Con gusto! La forma más rápida de darle un número real es una **prueba gratis con su logo**, para que vea exactamente lo que recibe, sin compromiso. ¿Qué producto y más o menos cuántos? Hoy le mando la prueba y el precio juntos."

*Never quote a custom price cold — custom routes to Carlos ([[pricing-engine]]). Catalog items: a set price from [[master-price-sheet]] is fine, but still lead with the proof.*

### Branch 3 — Light objection / not now ("we have a printer" / "not interested" / "no thanks")
**Do not argue it in the thread** ([[outbound-method]]). Acknowledge → one line of difference → leave the door open on the free proof. Lighter than the warm objection bank in [[deal-followup-playbook]] — one soft touch, then let it go to nurture.

> **EN ("we already have a printer"):** "Totally fair, [name]. Most of our regulars had one too. The one difference worth a look: a free proof before you pay, and 5-day delivery from a real person here in LA. Whenever you want a free proof on your next [product] to compare, I'm one reply away. Either way, rooting for [business]."
>
> **ES ("ya tengo impresor"):** "Lo entiendo perfectamente, [name]. Muchos de nuestros clientes también tenían el suyo. La única diferencia que vale la pena ver: prueba gratis antes de pagar, y entrega en 5 días de gente real aquí en LA. Cuando quiera una prueba gratis de su próximo [producto] para comparar, aquí estoy. De cualquier forma, le echo porras a [business]."

> **EN ("not interested / no thanks"):** "No problem at all, [name]. I'll leave you to it. If [product angle] ever comes up, a free proof with your logo is always on the house. ¡Éxito con [business]!"

If COOL/declined → tag `lead-cool` / `stage:nurture`, route to the [[reactivation-email-sequence]], set a 30-day re-touch, move on.

## Step 3 — SMS / WhatsApp coordination + consent (important)

Cold prospects have **not** opted in to texts. TCPA + the [[sms-marketing]] rules apply.

- **Cold email or ad reply by email → reply by email (or call).** Do **not** cold-text a number you scraped or that came off an Apollo record.
- **You may text/WhatsApp once they give a number AND signal it's okay** — e.g. they reply "text me at…", fill the quote form's phone field, or say "yes call/text me." That's consent for *this conversation*.
- **A phone provided on the quote form / lead-form = consent** to contact about that request (that's the channel they chose).
- Once consent exists, the qualify-text scripts in [[lead-qualification-system]] (the bilingual "send your logo here [link]" text) apply.
- **Marketing SMS blasts are a separate, opt-in-only program** ([[sms-marketing]]) — never fold a cold reply into it without explicit opt-in.

> **First text once consent is given (EN):** "Hi [name], it's Venus from Promo & Grow 👋 Here's the logo-upload link [link]. Send it over and I'll start your **free proof** (free, no commitment, booth-ready in 5 days). How many are you thinking?"
>
> **(ES):** "Hola [name], soy Venus de Promo & Grow 👋 Aquí le va el enlace para subir su logo [link]. Mándemelo y le empiezo su **prueba gratis** (sin compromiso, listo en 5 días). ¿Cuántos está pensando?"

## Step 4 — Batch the inbox + throttle (so replies don't rot)

- **Check the reply inbox (venus@ / the ad-lead alert) at least 3× in her window** — top of day, mid-day, end of day — **plus** instant on any 5-min paid-lead alert. A cold reply within 1 hour; an ad-form lead within 5 minutes.
- **She is the throttle** ([[operating-rhythm]] / [[growth-offensive]]): if fresh replies exceed ~**6–8/day** and she can't first-touch them inside the tier, **tell Carlos/Claude-admin to slow the source** (pause the next cold batch / lower ad budget) — don't bury her. Queued > dumped.
- **One reply = one Sheet row + one next step before she moves on.** A reply isn't "handled" until it has a tier, a tag, and a next action.

## Step 5 — Log cold replies (so they hit the scoreboard)

The cold-email tool (Smartlead/Instantly) tracks *machine* metrics; the **Sheet is Venus's source of truth** for what she works.

- **In the Sheet** ([[lead-tracker-sheet]]): new row, **Source = Cold Email** (or Google-Ads / Meta / Apollo), tier, stage, next step + date, language.
- **In Shopify** ([[shopify-tag-taxonomy]]): apply `lead-hot/warm/cool` + `src-*` + `lang-*`.
- **The machine metrics** (sent → open → reply rate) come from the cold-email tool and are read by Claude-admin/Carlos, **not** hand-tracked by Venus — she owns reply → proof → close.
- **Friday scoreboard** ([[operating-rhythm]]): cold-email line = replies in · proofs started · quotes · closes · cost-per-closed-deal by source. (Cold-email *open/reply rates* are reported from the tool alongside it.)

## The one-screen cheat (what she actually does)

1. Reply lands → **triage 30 sec** (HOT/WARM/COOL).
2. Pick the **branch** (interested / brush-off / objection) → free-proof pivot, assumptive next step.
3. Respect **consent** before any text.
4. **Log** it (Sheet row + tag + next step) within her **speed-to-lead tier**.
5. If interested → it's now a warm deal → run [[deal-followup-playbook]] Day-1/3/7.

## Related pages
- [[lead-qualification-system]]
- [[deal-followup-playbook]]
- [[outbound-method]]
- [[cold-email-sequence]]
- [[venus-email-writing-engine]]
- [[venus-cold-email-training]]
- [[operating-rhythm]]
- [[sms-marketing]]
- [[png-voice]]
- [[lead-tracker-sheet]]
- [[shopify-tag-taxonomy]]
