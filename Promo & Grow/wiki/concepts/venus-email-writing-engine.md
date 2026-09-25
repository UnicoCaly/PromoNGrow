# Venus Email-Writing Engine

**Summary**: Venus's repeatable system for drafting clear, direct, ask-forward emails — a copy-paste **AI prompt pack** (drops into ChatGPT/Claude) plus **NotebookLM grounding** (runs against her existing NotebookLM source pack so outputs stay on PNG voice + facts). It encodes the [[outbound-method]] structure (WHO/WHY/WHAT + assumptive CTA), the [[png-voice]] guardrails, and the hard cold-email rules from [[cold-email-sequence]], so any email she generates is already 90% right and she only edits. Covers three uses: a cold/outreach email, a follow-up, and a reply draft. Worked EN + ES examples per [[apollo-net-new-list]] segment.

**Type**: concept

**Sources**: synthesizes [[outbound-method]], [[png-voice]], [[cold-email-sequence]], [[cold-email-segment-copy]], [[deal-followup-playbook]]; the NotebookLM source pack in Venus's onboarding kit (raw `21-NotebookLM-Source-Pack.pdf` / `PNG-NotebookLM-Source-Pack.md`). Built by Claude-admin 2026-06-20.

**Last updated**: 2026-06-25.
> Outward copy anti-AI revised (v2) 2026-06-25 — see [[png-voice]] anti-AI rule.

---

## How she uses it (two modes, same rules)

- **Mode 1 — AI prompt pack (fast, flexible):** paste a prompt below into ChatGPT/Claude, fill the brackets, get a draft, edit against the checklist. Use when she just needs a quick on-voice draft.
- **Mode 2 — NotebookLM-grounded (most on-brand):** run the same prompt inside **NotebookLM with her source pack loaded**, so the model can only pull from PNG's real voice, offer, prices, and proof — it won't invent claims (no "guaranteed," no fake stats). Use for anything customer-facing she's unsure about. Setup is one-time (below).

Either way the **non-negotiable rules are baked into the prompt** so she can't accidentally break them.

## The non-negotiable rules (baked into every prompt)

From [[cold-email-sequence]] + [[outbound-method]] + [[png-voice]]:

1. **Structure:** WHO / WHY / WHAT in **3 short paragraphs**, **4–6 sentences, under ~90 words**, one phone screen.
2. **Assumptive CTA**, never permission ("reply and I'll start your free proof," not "would you be interested?").
3. **Touch 1 = zero links;** later touches one link max.
4. **The wedge every time:** free proof before you pay · 5 business days from approval · we speak Spanish.
5. **Delivery line is always "5 business days from proof approval"** — never "guaranteed," never a day-count promise.
6. **Voice = bilingual ganas growth-partner:** warm, direct, encouraging, confident-never-boastful. **Anti-brand:** never salesy/pushy, cold/corporate, condescending, cheap-looking, generic, overpromising, unenthusiastic.
7. **Bilingual only with taste:** match the prospect's language; natural code-switching, never machine-translated. Read aloud — if a real bilingual Angeleno wouldn't say it, rewrite.
8. **Subject:** 3–4 words, lowercase, human; no salesy/discount-blast lines.
9. **Never expose vendor cost; never discount past the $100 floor** (escalate to Carlos); **custom = route to Carlos**.

---

## PROMPT 1 — Cold / outreach email (the main one)

> **You are Venus, a bilingual sales closer at Promo & Grow** (promongrow.com), a 20+ year LA print & display shop (formerly PrintCo Direct). Write a cold outreach email to a prospect.
>
> **Prospect:** [first name] · **Business:** [business name] · **Business type:** [e.g. event planner / brewery / caterer / restaurant / auto shop / salon / real-estate team] · **City:** [city] · **Language:** [EN / ES / bilingual] · **Touch #:** [1, 2, or 3]
>
> **Our wedge (use it):** they see a FREE proof with their logo before paying a cent, we deliver in 5 BUSINESS DAYS from proof approval, and we speak Spanish — no competitor offers all three.
>
> **Rules — follow exactly:**
> - WHO (one line) / WHY (the value for *their* business type — name the product angle that fits them) / WHAT (the ask). 3 short paragraphs, 4–6 sentences, **under 90 words**.
> - **Assumptive CTA**, never permission. End on starting a free proof / mockup.
> - **If Touch # = 1, include NO links.** Touch 2 may reference one. Touch 3 = a light "should I close your file?" break-up.
> - Subject: 3–4 words, lowercase, human (e.g. "idea for [business]"). Give 2 subject options.
> - Delivery is "5 business days from proof approval" — never "guaranteed."
> - Voice: warm, direct, encouraging, never salesy or corporate. If Language = ES, write natural Spanish (not machine-translated); if bilingual, code-switch with taste.
> - **No AI-tells.** Don't write "quick one / quick question / just a quick," "I wanted to reach out / I'm reaching out," "I hope this finds you well," "happy to / I'd be happy to," "feel free to," "just wanted to," "rest assured," or corporate filler (leverage / seamless / elevate / unlock / streamline). Use contractions and short real sentences. Cap em-dashes at ~1 per email; a period or comma usually does the job. Vary your sentence openers (don't start every line the same way) and skip the reflexive rule-of-three. **Read it aloud — if you wouldn't actually say it to the person, cut it.**
> - Sign "— Venus, Promo & Grow (formerly PrintCo Direct)".
>
> **Output:** 2 subject options + the email body, nothing else.

*(This mirrors the validated [[cold-email-sequence]] templates — use those verbatim for the live July sequence; use this prompt for one-offs, new segments, or when she wants a fresh angle.)*

*(For a **high-research Tier-2 variant** aimed at the highest-value targets — institutional accounts, anchor event planners/breweries — see the [[show-me-you-know-me-method]] (SMYKM): a research-led subject line that reads as nonsense to anyone but the recipient, a "show me you know me" first sentence, a longer value prop that pre-empts one objection, and the no-calendar-link close. ~20 hand-built emails/week, alongside the machine cadence above.)*

## PROMPT 2 — Follow-up email (the every-other-day chase)

> **You are Venus at Promo & Grow.** Write a SHORT follow-up to a prospect who hasn't replied. **Prospect:** [name] · **Business:** [business] · **Product discussed:** [product] · **Which follow-up:** [FU1 benefit-of-the-doubt / FU2 "thoughts" line / FU3 assumptive break-up] · **Language:** [EN/ES/bilingual].
>
> **Rules:** 2–3 sentences max, points back to the first email (don't re-pitch), assumptive, ends on the free proof. FU2 should use the highest-reply line: "what are your thoughts? even a 1-2-3 works" (1 let's go · 2 love it, not yet · 3 pass). Never pushy. **No AI-tells:** no "quick one / just a quick / just wanted to / I wanted to reach out / happy to / feel free to"; contractions and short real sentences; cap em-dashes at ~1; vary your openers; read it aloud — if you wouldn't say it, cut it. Sign "— Venus".

## PROMPT 3 — Reply draft (when a lead replies and she wants a fast on-voice answer)

> **You are Venus at Promo & Grow.** A prospect replied to outreach. **Their message:** "[paste reply]" · **Language:** [EN/ES] · **My read (tier):** [HOT/WARM/COOL].
>
> **Rules:** Acknowledge warmly → answer briefly → **pivot to the free proof** ("send me your logo and I'll start a free proof, no charge, no commitment") → assumptive next step (ask product + quantity, or the event date). If it's an objection, do NOT argue it — acknowledge, "makes sense to connect anyway," point to the proof. Delivery = "5 business days from proof approval." Under 80 words. Match their language. Don't quote custom prices — say a free proof is the fastest real number. **No AI-tells:** skip "happy to / I'd be happy to / feel free to / just wanted to / thank you for reaching out" as a robotic opener (a warm, specific thanks is fine); use contractions; cap em-dashes at ~1; vary your openers; read it aloud — if you wouldn't say it, cut it. Sign "— Venus".

*(For the full reply decision tree + the cold-objection bank, see [[cold-reply-playbook]].)*

---

## NotebookLM grounding (Mode 2 setup — one time)

NotebookLM only answers from the sources she loads, so it can't invent claims — ideal for staying on-voice and on-fact.

1. **Create a notebook** named "PNG Email Writer."
2. **Load these sources** (from her onboarding kit / the wiki, exported to PDF or pasted): the **NotebookLM Source Pack** (`21-NotebookLM-Source-Pack.pdf`), [[png-voice]], [[cold-email-sequence]], [[cold-email-segment-copy]], [[master-price-sheet]] (set prices only), and the [[sell-guide]] (product angles).
3. **Save the three prompts above** as notebook "saved prompts" / notes she can re-run.
4. **To draft:** open the notebook, run Prompt 1/2/3 with the brackets filled. Because the answer is grounded in the pack, it'll use real prices, the real offer, and the real voice — and cite which source it pulled from.
5. **Still edit against the checklist below** — grounding reduces errors, it doesn't remove her judgment.

*[Carlos-VA: confirm Venus has NotebookLM access + the source pack PDF; if not, Mode 1 (ChatGPT/Claude) works standalone.]*

## Her edit checklist (every draft, 20 seconds)

- [ ] Under ~90 words, 3 short paragraphs, one phone screen?
- [ ] WHO / WHY / WHAT all present, WHY fits *their* business type?
- [ ] Assumptive CTA, ends on the free proof?
- [ ] Touch 1 = no link?
- [ ] "5 business days from proof approval" (not "guaranteed")?
- [ ] Subject 3–4 words, lowercase, human?
- [ ] Reads aloud like a real bilingual person ([[png-voice]] test)?
- [ ] No vendor cost, no discount past floor, no custom price quoted?

---

## Worked examples (per segment — the `{{product_angle}}`, EN + ES)

Generated from Prompt 1; these double as her starting library. Product angles per business type are the canonical set from [[cold-email-sequence]] / [[cold-email-segment-copy]].

**Event planner (EN, Touch 1):**
> *Subject:* idea for [business]
> Hi [name], Venus here at Promo & Grow, a 20-year LA print & display shop. I work with event pros like [business] on step-and-repeat backdrops, branded tents and table covers, the pieces that make your client's event look high-end. Here's what's different: you see a free proof with your logo before you pay a cent, and once you approve it we deliver in 5 business days. Want one? Reply and I'll put a free mockup together. — Venus, Promo & Grow (formerly PrintCo Direct)

**Brewery / taproom (EN, Touch 1):**
> *Subject:* [business]'s booth at the next fest
> Hi [name], Venus with Promo & Grow, a local LA shop. I help breweries like [business] own the room at every fest and pop-up with branded festival tents, table covers and feather flags. The difference: a free proof with your logo before you pay anything, delivered in 5 business days once you approve. Want me to mock something up for your next event? Just reply, no cost, no commitment. — Venus, Promo & Grow

**Restaurant / food vendor (ES, Touch 1):**
> *Subject:* una idea para [business]
> Hola [name], le habla Venus de Promo & Grow, un taller local de impresión aquí en LA. Trabajo con negocios como [business] en carpas, manteles con logo y señalización de menú. Lo que nos hace diferentes: le mando una prueba GRATIS con su logo antes de que pague nada, y al aprobarla se la entregamos en 5 días hábiles. ¿Le sirve? Respóndame y le preparo un diseño, gratis. — Venus, Promo & Grow (antes PrintCo Direct)

**Caterer (EN/bilingual, Touch 1):**
> *Subject:* branded setup for [business]
> Hi [name], Venus at Promo & Grow, su taller local en LA. I help caterers like [business] show up branded at every event: custom tents, table covers and feather flags so your setup looks as good as the food. Free proof with your logo before you pay, delivered in 5 business days from approval. Want me to start a mockup? Reply and I'll take it from there. — Venus, Promo & Grow

**Real-estate team (EN, Touch 1):**
> *Subject:* stand out at your next open house
> Hi [name], Venus with Promo & Grow, a 20-year LA print shop. I help real-estate teams like [business] stand out with open-house feather flags, A-frames, yard signs and riders. You see a free proof with your logo before paying a cent, and we deliver in 5 business days once you approve. Want me to put a free mockup together for your next listing? Just reply. — Venus, Promo & Grow

**Auto shop (ES, Touch 1):**
> *Subject:* prueba gratis con su logo
> Hola [name], le escribe Venus de Promo & Grow, taller local de impresión en LA. Ayudo a negocios como [business] con imanes para autos, banners y tarjetas, para que su marca se vea profesional. Le mando una prueba GRATIS con su logo antes de pagar nada, y se la entregamos en 5 días hábiles al aprobarla. ¿Le preparo un diseño, gratis? Respóndame y yo me encargo. — Venus, Promo & Grow (antes PrintCo Direct)

**Salon / barber (EN/bilingual, Touch 1):**
> *Subject:* idea for [business]
> Hi [name], Venus at Promo & Grow, gente real en LA. I help salons and barbers like [business] look sharp out front: window graphics, price boards and branded cards. Free proof with your logo before you pay, hecho bien, delivered in 5 business days from approval. Want a free mockup? Reply and I'll start one, no commitment. — Venus, Promo & Grow

## Related pages
- [[outbound-method]]
- [[cold-email-sequence]]
- [[cold-email-segment-copy]]
- [[cold-reply-playbook]]
- [[deal-followup-playbook]]
- [[png-voice]]
- [[master-price-sheet]]
- [[sell-guide]]
- [[venus-cold-email-training]]
- [[apollo-net-new-list]]
