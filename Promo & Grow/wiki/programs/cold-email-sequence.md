# Cold Email Sequence (Bilingual)

> ⚠️ **SLA + voice check:** any customer-facing delivery line reads "5 business days from proof approval," never an unconditional guarantee; the "3 days for Donut Media" claim is retired; bilingual copy must pass the ganas read-aloud test. (co-CEO 2026-06-17) — see [[lead-machine]], [[png-voice]].

**Summary**: The cold-email channel of the Growth Offensive — a bilingual 3-touch sequence over 7 days to net-new LA-metro Spanish SMBs, sent only from the ring-fenced promotengrow.com domain, whose only job is to start a conversation Venus finishes. Paired with the step-by-step implementation runbook.
**Type**: channel
**Sources**: PNG-ColdEmail-Sequence-Bilingual_6.15.2026.md, PNG-ColdEmail-and-Ads-Implementation-Runbook_6.15.2026.md
**Last updated**: 2026-06-17

---

## What this is

Cold email for **net-new** prospects who don't know PNG yet — restaurants, food vendors, churches, party/quinceañera vendors, auto shops, salons, real-estate teams in LA metro. This is distinct from the warm 162-account reactivation list, which is worked phone-first (see [[reactivation-email-sequence]] and [[vip-reactivation-list]]). The email's job is **not to close in the inbox** — it earns a reply, then Venus takes over via [[concierge-close]] (source: PNG-ColdEmail-Sequence-Bilingual_6.15.2026.md).

The wedge in every touch: *free proof before you pay + 5-day delivery + we speak Spanish* — the combination no competitor offers (source: PNG-ColdEmail-Sequence-Bilingual_6.15.2026.md). See [[competitive-war-room]] and [[bilingual-spanish-moat]].

## Deliverability rules (so the domain survives)

- Send from `promotengrow.com` only — never the main `promongrow.com` domain (source: PNG-ColdEmail-Sequence-Bilingual_6.15.2026.md).
- Plain text, no images, no fancy HTML. Touch 1 = **zero links** (links in a first cold touch tank deliverability); touches 2–3 = one link max.
- One-line unsubscribe + real physical address (CAN-SPAM) on every send.
- Personalize the first line of every email; keep each under ~90 words.
- Turn OFF open-tracking pixels and link-tracking on cold (they now hurt placement) (source: PNG-ColdEmail-and-Ads-Implementation-Runbook_6.15.2026.md).
- Warm the domain first; real sends start ~week 3, ramp to 50–75/day (source: PNG-ColdEmail-Sequence-Bilingual_6.15.2026.md).

## The implementation runbook (cold-email half)

Every step is owner-tagged — **[Carlos]** for anything touching credentials/DNS/payment, **[Claude]** for builds, **[Venus]** ongoing (source: PNG-ColdEmail-and-Ads-Implementation-Runbook_6.15.2026.md):

| Step | What | Owner |
|---|---|---|
| A1 | Confirm promotengrow.com is separate; set up Google Workspace (~$6/user/mo); create 2 mailboxes (venus@, team@/hello@) with real name, photo, signature | Carlos |
| A2 | Publish SPF `v=spf1 include:_spf.google.com ~all`, DKIM (`google._domainkey` TXT), DMARC `v=DMARC1; p=none; rua=mailto:dmarc@promotengrow.com; pct=100` (start p=none, move to p=quarantine after ~2 weeks clean); verify via MXToolbox | Carlos (Claude hands exact records) |
| A3 | Sign up Instantly (~$37/mo) or Smartlead (~$39/mo); connect both mailboxes; turn warmup ON | Carlos → Claude configures |
| A4 | Warmup ramp 5–10/inbox/day auto-increasing; ~30% reply rate; real-send cap 30–35/inbox/day; Tue–Thu strongest, 8am–3pm PT, 60–180s random delays | Claude/Carlos |
| A5 | Build Apollo list (data-only): LA metro + South Gate/Lynwood/Huntington Park/Bell/Downey/East LA/Santa Ana; 1–50 employees; owner/manager titles; verified email; first batch ~300–500, Spanish-market skew | Claude |
| A6 | Load the 3-touch sequence, map tokens, schedule Day 1/3/7, auto-stop on reply | Claude |
| A7 | Seed/inbox-placement test, aim ≥ 80% inbox; confirm reply routing to Venus + scoreboard tag = Cold Email | Claude/Carlos |

**Warmup → live ramp:** Wk 1 warmup only (5–10/inbox, no real sends) → Wk 2 warmup (10–20) → Wk 3 first real sends (~40–50/day total) → Wk 4 ~60 → Wk 5+ steady 60–70/day. **Auto-pause** if spam complaints > 0.08% or bounces > 1.5% — non-negotiable (source: PNG-ColdEmail-and-Ads-Implementation-Runbook_6.15.2026.md). Keep Apollo in the data lane only — don't send from Apollo, to protect the Proago workspace (source: PNG-ColdEmail-and-Ads-Implementation-Runbook_6.15.2026.md). See parent strategy [[growth-offensive]].

## Reply handoff and QA

Any reply → Venus's inbox → first touch within 1 hour (10a–4p PT window; same-day otherwise). She switches to the First-Call Playbook voice: confirm, build rapport, find the need, *then* offer the free proof. Log with **Source = Cold Email**. Positive reply stops the sequence (auto-detected); negative/unsubscribe removed immediately (source: PNG-ColdEmail-Sequence-Bilingual_6.15.2026.md). Pre-batch QA: domain warmed + spam < 0.08%; list verified; first line personalized; Touch 1 has no link; unsubscribe + address present; Spanish version matched to Spanish-market prospects (source: PNG-ColdEmail-Sequence-Bilingual_6.15.2026.md). See [[lead-qualification-system]] and [[draft-order-quote-system]].

## `{{product_angle}}` snippet library by business type

| Business type | EN | ES |
|---|---|---|
| Restaurant / food vendor | custom tents, table covers & menu signage | carpas, manteles con logo y señalización de menú |
| Church / ministry | event banners, backdrops & flyers | banners para eventos, fondos y volantes |
| Party / quinceañera vendor | step-&-repeat backdrops, banners & signage | fondos step-&-repeat, banners y letreros |
| Auto shop | vehicle magnets, banners & business cards | imanes para autos, banners y tarjetas |
| Salon / barber | window graphics, price boards & cards | gráficos para vidriera, tableros de precios y tarjetas |
| Real-estate team | yard signs, riders & flyers | letreros de jardín, riders y volantes |
| Retail / general SMB | banners, flags & branded display | banners, banderas y display de marca |

(source: PNG-ColdEmail-Sequence-Bilingual_6.15.2026.md)

## Outward copy (ganas voice)

Actual customer-facing sequence. Tokens: `{{first_name}}` · `{{business}}` · `{{city}}` · `{{product_angle}}` · `{{business_type}}`.

### Touch 1 — Day 1 · the intro (no link)

*Subject A:* quick idea for {{business}} · *Subject B:* {{first_name}} — your logo, free mockup · *Subject (ES):* una idea para {{business}}

> **EN** — Hi {{first_name}}, I'm Venus with **Promo & Grow**, a local LA print & display shop. I work with {{city}} businesses like {{business}} on {{product_angle}}. Here's what's different about us: I'll send you a **free proof with your logo before you pay a cent**, and once you approve it we deliver in **5 business days**. Worth a quick look for {{business}}? Just reply and I'll put a free mockup together. — Venus, Promo & Grow (formerly PrintCo Direct)

> **ES** — Hola {{first_name}}, le habla Venus de **Promo & Grow**, un taller local de impresión y displays aquí en LA. Trabajo con negocios de {{city}} como {{business}} en {{product_angle}}. Lo que nos hace diferentes: le mando una **prueba GRATIS con su logo antes de que pague nada**, y al aprobarla se lo entregamos en **5 días hábiles**. ¿Le interesa para {{business}}? Respóndame y le preparo un diseño gratis. — Venus, Promo & Grow (antes PrintCo Direct)

### Touch 2 — Day 3 · the proof (one link max, reply on same thread)

*Subject:* re: quick idea for {{business}} · *Subject (ES):* re: una idea para {{business}}

> **EN** — Hi {{first_name}}, following up — I know you're busy running {{business}}. Quick example of how we work: a {{city}} {{business_type}} came to us last month for {{product_angle}}. We sent a free proof the same day, they tweaked the color, and it was in their hands in 5 days. No upfront risk. Want me to do the same for you? Reply **YES** and I'll start a free mockup — no cost, no commitment. — Venus

> **ES** — Hola {{first_name}}, le doy seguimiento — sé que anda ocupado con {{business}}. Un ejemplo de cómo trabajamos: un {{business_type}} aquí en {{city}} nos buscó el mes pasado para {{product_angle}}. Le mandamos la prueba gratis el mismo día, ajustó el color, y lo tuvo en sus manos en 5 días. Sin riesgo por adelantado. ¿Quiere que haga lo mismo para usted? Responda **SÍ** y le empiezo un diseño gratis — sin costo ni compromiso. — Venus

### Touch 3 — Day 7 · the easy out (breakup)

*Subject:* should I close your file, {{first_name}}? · *Subject (ES):* ¿cierro su archivo, {{first_name}}?

> **EN** — Hi {{first_name}}, I don't want to crowd your inbox — last note from me. If {{product_angle}} isn't on your radar right now, no worries at all. But if it is, I'd still love to send that **free proof with your logo** so you can see it before deciding anything. Just reply with a word and I'll take it from there. Either way, I'm rooting for {{business}}. — Venus, Promo & Grow

> **ES** — Hola {{first_name}}, no quiero llenarle el correo — este es mi último mensaje. Si {{product_angle}} no es prioridad ahorita, no hay problema. Pero si sí, con gusto le mando esa **prueba gratis con su logo** para que la vea antes de decidir. Respóndame con una palabra y yo me encargo del resto. De cualquier forma, le echo porras a {{business}}. — Venus, Promo & Grow

### Subject-line A/B bank (rotate, lowercase + human)
quick idea for {{business}} · {{first_name}} — free mockup with your logo · 5-day turnaround for {{city}} businesses · saw {{business}} — quick question · ES: una idea para {{business}} · ES: prueba gratis con su logo · ES: entrega en 5 días aquí en {{city}}

(source: PNG-ColdEmail-Sequence-Bilingual_6.15.2026.md)

## Related pages
- [[cold-email-segment-copy]]
- [[growth-offensive]]
- [[lead-machine]]
- [[meta-lead-form]]
- [[lead-qualification-system]]
- [[reactivation-email-sequence]]
- [[concierge-close]]
- [[bilingual-spanish-moat]]
- [[png-voice]]
- [[outbound-method]]
