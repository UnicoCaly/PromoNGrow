# Cold Email Sequence (Bilingual)

> ⚠️ **SLA + voice check:** any customer-facing delivery line reads "5 business days from proof approval," never an unconditional guarantee; the "3 days for Donut Media" claim is retired; bilingual copy must pass the ganas read-aloud test. (co-CEO 2026-06-17) — see [[lead-machine]], [[png-voice]].

**Summary**: The cold-email channel of the Growth Offensive — a bilingual 3-touch sequence over 7 days to net-new LA-metro Spanish SMBs, sent only from the ring-fenced promoteandgrow.com domain, whose only job is to start a conversation Venus finishes. Paired with the step-by-step implementation runbook.
**Type**: channel
**Sources**: PNG-ColdEmail-Sequence-Bilingual_6.15.2026.md, PNG-ColdEmail-and-Ads-Implementation-Runbook_6.15.2026.md
**Last updated**: 2026-06-25
> Outward copy anti-AI revised (v2) 2026-06-25 — see [[png-voice]] anti-AI rule.

---

## What this is

Cold email for **net-new** prospects who don't know PNG yet — restaurants, food vendors, churches, party/quinceañera vendors, auto shops, salons, real-estate teams in LA metro. This is distinct from the warm 162-account reactivation list, which is worked phone-first (see [[reactivation-email-sequence]] and [[vip-reactivation-list]]). The email's job is **not to close in the inbox** — it earns a reply, then Venus takes over via [[concierge-close]] (source: PNG-ColdEmail-Sequence-Bilingual_6.15.2026.md).

The wedge in every touch: *free proof before you pay + 5-day delivery + we speak Spanish* — the combination no competitor offers (source: PNG-ColdEmail-Sequence-Bilingual_6.15.2026.md). See [[competitive-war-room]] and [[bilingual-spanish-moat]].

## Deliverability rules (so the domain survives)

- Send from `promoteandgrow.com` only — never the main `promongrow.com` domain (source: PNG-ColdEmail-Sequence-Bilingual_6.15.2026.md).
- Plain text, no images, no fancy HTML. Touch 1 = **zero links** (links in a first cold touch tank deliverability); touches 2–3 = one link max.
- One-line unsubscribe + real physical address (CAN-SPAM) on every send.
- Personalize the first line of every email; keep each under ~90 words.
- Turn OFF open-tracking pixels and link-tracking on cold (they now hurt placement) (source: PNG-ColdEmail-and-Ads-Implementation-Runbook_6.15.2026.md).
- Warm the domain first; real sends start ~week 3, ramp to 50–75/day (source: PNG-ColdEmail-Sequence-Bilingual_6.15.2026.md).
  - **Reconciled 2026-06-22 (Venus launch training):** Carlos has Venus starting **low-volume (30–50/day) hand-written manual sends THIS WEEK** from the separate cold domain, cadence day 1/3/7, no links + no signature on cold (consistent with the rules above). This is the **manual** path — distinct from the **automated** high-volume (100–150/day) blast, which still waits for ≥2–3 weeks warmup + an ≥80% inbox-placement test. **FLAG:** confirm SPF/DKIM/DMARC + warmup on the sending domain before the first manual send ([[cold-email-setup-sheet]]). The cold-sending address is **`venus@promoteandgrow.com`** (canonical map — see [[apollo-two-brand-setup]]; "promoandgrow.com" was a dictation error). Never send from the money domain `promongrow.com`. (source: [[venus-launch-training-2026-06-22]])
  - **✅ SUPERSEDED — RULING 2026-06-22 (evening):** cold email is **HELD this week** (deferred, **not killed**) per Carlos. **This supersedes the "Venus starts 30–50/day this week" reading above** taken from the training-call ingest — there are **no cold-email sends this week.** Revisit once outbound infra + training are ready; when it resumes, the warmup → placement-test gate + the deliverability rules in this page still apply, and the sending address follows the canonical domain map (Venus OUTBOUND/cold = **venus@promoteandgrow.com** — see [[apollo-two-brand-setup]]). (source: Carlos direction 2026-06-22)

## The implementation runbook (cold-email half)

> 🛠️ **Copy-paste execution for A1–A4** (exact MX/SPF/DKIM/DMARC records + Smartlead warmup config, ~30 min): **[[cold-email-setup-sheet]]**.

Every step is owner-tagged — **[Carlos]** for anything touching credentials/DNS/payment, **[Claude]** for builds, **[Venus]** ongoing (source: PNG-ColdEmail-and-Ads-Implementation-Runbook_6.15.2026.md):

| Step | What | Owner |
|---|---|---|
| A1 | Confirm promoteandgrow.com is separate; set up Google Workspace (~$6/user/mo); create 2 mailboxes (venus@, team@/hello@) with real name, photo, signature | Carlos |
| A2 | Publish SPF `v=spf1 include:_spf.google.com ~all`, DKIM (`google._domainkey` TXT), DMARC `v=DMARC1; p=none; rua=mailto:dmarc@promoteandgrow.com; pct=100` (start p=none, move to p=quarantine after ~2 weeks clean); verify via MXToolbox | Carlos (Claude hands exact records) |
| A3 | Sign up **Smartlead Base (recommended)** — $32.50/mo annual ($390/yr) / $39/mo monthly, **unlimited inboxes + unlimited warmup** even at the entry tier; Instantly is the alternative. Connect both mailboxes; turn warmup ON now | Carlos (account/pay) → Claude configures |
| A4 | Warmup ramp: new/unwarmed start **20–30/inbox/day**, auto-increasing; ~30% warmup reply rate; real-send cap **30–35/inbox/day** (inside the 2026 consensus 30–50 safe band); Tue–Thu strongest, 8am–3pm PT, 60–180s random delays | Claude/Carlos |
| A5 | Build Apollo list (data-only): LA metro + South Gate/Lynwood/Huntington Park/Bell/Downey/East LA/Santa Ana; 1–50 employees; owner/manager titles; verified email; first batch ~300–500, Spanish-market skew | Claude |
| A6 | Load the 3-touch sequence, map tokens, schedule Day 1/3/7, auto-stop on reply | Claude |
| A7 | Seed/inbox-placement test, aim ≥ 80% inbox; confirm reply routing to Venus + scoreboard tag = Cold Email | Claude/Carlos |

**Warmup → live ramp:** Wk 1 warmup only (5–10/inbox, no real sends) → Wk 2 warmup (10–20) → Wk 3 first real sends (~40–50/day total) → Wk 4 ~60 → Wk 5+ steady 60–70/day. **Auto-pause** if spam complaints > 0.08% or bounces > 1.5% — **our internal guardrail** (conservative; see the 2026 validation note below for how it relates to Google's published thresholds) (source: PNG-ColdEmail-and-Ads-Implementation-Runbook_6.15.2026.md). Keep Apollo in the data lane only — don't send from Apollo, to protect the Proago workspace (source: PNG-ColdEmail-and-Ads-Implementation-Runbook_6.15.2026.md). See parent strategy [[growth-offensive]].

## 2026 deliverability validation + the Gmail question

A 2026 external-research pass (deep-research task wtl253ia7, 2026-06-20) checked this setup against current Google/Yahoo/Microsoft rules and practitioner consensus. **The plan held up; three clarifications:**

- **The Gmail question — answered:** *Do not send cold from the primary `promongrow.com` Gmail/Workspace.* The two cold inboxes **are** Google Workspace mailboxes, but on the **separate `promoteandgrow.com` domain**, so if the cold domain takes a reputation hit the money domain stays clean. A completely separate cold domain is validated best practice (~$10–15/yr); sending cold through a dedicated Workspace on that domain remains viable in 2026 (Microsoft Tech Community; Smartlead; Namecheap).
- **The scary "bulk-sender" mandates don't bind us.** Google/Yahoo/Microsoft's full rejection-enforced rules trigger at **5,000+ emails/day to consumer mailboxes** — PNG's ~60–70/day B2B is ~70× below that. **But** SPF + DKIM (aligned) + **DMARC `p=none`** is still necessary to land in inbox — and **`p=none` is sufficient; `p=reject` is NOT required** (Microsoft; dmarcian; Google a/answer/81126). *(The A2 "move to p=quarantine after 2 weeks" is optional tightening, not a requirement.)*
- **Our 0.08% spam / 1.5% bounce auto-pause are conservative INTERNAL guardrails, not official Google "tiers."** Google's real ceiling is **<0.3% spam (hard) / <0.1% (target)**; our 0.08% sits below the target, which is exactly where we want it. The 1.5% bounce trigger is a sensible safety choice, not a provider-published rule (Google guidelines; PowerDMARC). Keep the numbers — just don't quote them to anyone as "Google's rules."
- **Confirmed as-is:** separate domain ✓ · 2 inboxes at 30–35/day (inside the 30–50 consensus) ✓ · Smartlead/Instantly for sending ✓ · Apollo for data only ✓ · turn OFF open/click tracking on cold ✓ (sensible default; not independently re-verified).

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

*Subject A:* idea for {{business}} · *Subject B:* {{first_name}}, your logo + a free mockup · *Subject (ES):* una idea para {{business}}

> **EN** — Hi {{first_name}}, I'm Venus with **Promo & Grow**, a local LA print & display shop. I work with {{city}} businesses like {{business}} on {{product_angle}}. Here's what makes us different. I'll send you a **free proof with your logo before you pay a cent**, and once you approve it we deliver in **5 business days**. Want me to put one together for {{business}}? Just reply and it's yours, free. — Venus, Promo & Grow (formerly PrintCo Direct)

> **ES** — Hola {{first_name}}, le habla Venus de **Promo & Grow**, un taller local de impresión y displays aquí en LA. Trabajo con negocios de {{city}} como {{business}} en {{product_angle}}. Lo que nos hace diferentes: le mando una **prueba GRATIS con su logo antes de que pague nada**, y al aprobarla se lo entregamos en **5 días hábiles**. ¿Le sirve para {{business}}? Respóndame y le preparo un diseño, gratis. — Venus, Promo & Grow (antes PrintCo Direct)

### Touch 2 — Day 3 · the proof (one link max, reply on same thread)

*Subject:* re: idea for {{business}} · *Subject (ES):* re: una idea para {{business}}

> **EN** — Hi {{first_name}}, circling back. I know you're busy running {{business}}. Here's how we work: a {{city}} {{business_type}} came to us last month for {{product_angle}}. We sent a free proof the same day, they tweaked the color, and it was in their hands in 5 days. No upfront risk. Want me to do the same for you? Reply **YES** and I'll start a free mockup, no cost, no commitment. — Venus

> **ES** — Hola {{first_name}}, le doy seguimiento. Sé que anda ocupado con {{business}}. Así trabajamos: un {{business_type}} aquí en {{city}} nos buscó el mes pasado para {{product_angle}}. Le mandamos la prueba gratis el mismo día, ajustó el color, y lo tuvo en sus manos en 5 días. Sin riesgo por adelantado. ¿Quiere que haga lo mismo para usted? Responda **SÍ** y le empiezo un diseño gratis, sin costo ni compromiso. — Venus

### Touch 3 — Day 7 · the easy out (breakup)

*Subject:* should I close your file, {{first_name}}? · *Subject (ES):* ¿cierro su archivo, {{first_name}}?

> **EN** — Hi {{first_name}}, last note from me, I won't crowd your inbox. If {{product_angle}} isn't on your radar right now, all good. But if it is, say the word and I'll send that **free proof with your logo** so you can see it before deciding anything. Either way, I'm rooting for {{business}}. — Venus, Promo & Grow

> **ES** — Hola {{first_name}}, este es mi último mensaje, no le quiero llenar el correo. Si {{product_angle}} no es prioridad ahorita, no hay problema. Pero si sí, dígame y le mando esa **prueba gratis con su logo** para que la vea antes de decidir. De cualquier forma, le echo porras a {{business}}. — Venus, Promo & Grow

### Subject-line A/B bank (rotate, lowercase + human)
idea for {{business}} · {{first_name}}, free mockup with your logo · 5-day turnaround for {{city}} businesses · saw {{business}}, had a thought · ES: una idea para {{business}} · ES: prueba gratis con su logo · ES: entrega en 5 días aquí en {{city}}

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
- [[venus-cold-email-training]]
- [[venus-email-writing-engine]]
- [[cold-reply-playbook]]
- [[cold-email-setup-sheet]]
