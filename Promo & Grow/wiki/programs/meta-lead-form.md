# Meta Lead-Form Creative

> ⚠️ **SLA + voice check:** any customer-facing delivery line reads "5 business days from proof approval," never an unconditional guarantee; the "3 days for Donut Media" claim is retired; bilingual copy must pass the ganas read-aloud test. (co-CEO 2026-06-17) — see [[lead-machine]], [[png-voice]].

**Summary**: The paid-ads channel of the Growth Offensive — bilingual Meta lead-form creatives (prospecting + retargeting), a 6-question 60-second qualifier that filters tire-kickers before Venus, plus the tracking/audiences/Google-Search setup. Optimizes to Lead events, never phantom web-cart purchases.
**Type**: channel
**Sources**: PNG-Meta-LeadForm-Creative_6.15.2026.md, PNG-ColdEmail-and-Ads-Implementation-Runbook_6.15.2026.md
**Last updated**: 2026-06-17

---

## Objective and campaign structure

Generate *qualified* local leads that route to Venus, optimized to **Lead** events (form submit / WhatsApp / phone click), not phantom web-cart purchases (PNG's add-to-cart almost never fires). The 60-second qualifier filters tire-kickers *before* they reach her — the hardened-plan fix for cheap-but-junk leads (source: PNG-Meta-LeadForm-Creative_6.15.2026.md). Parent strategy: [[growth-offensive]].

| Campaign | Budget | Objective | Audience |
|---|---|---|---|
| Retargeting | $400/mo | Leads | Site visitors (180d), IG/FB engagers, video viewers, + past-customer Custom Audience (reactivation list upload) |
| Prospecting (lead form) | $200/mo | Leads | Lookalike 1–3% of past buyers + LA-metro geo + SMB-owner interests, language: Spanish |
| Google Search (separate) | $150/mo | — | Exact high-intent local terms — see [[google-search-engine]] |

Placements: FB + IG feeds, Stories, Reels. Geo: LA metro (25–30 mi radius). Run a Spanish-primary set + an English set; let Spanish carry most of prospecting budget (source: PNG-Meta-LeadForm-Creative_6.15.2026.md).

## Tracking foundation (do first)

- **Meta Pixel:** confirm it fires; set up Conversions API (server-side) if possible; create a **Lead** custom conversion.
- **Google tag:** confirm it fires; mark phone-call + form-submit as conversions.
- **UTM scheme** (maps to the scoreboard Source column): `utm_source` = meta | google; `utm_medium` = retargeting | prospecting | cpc; `utm_campaign` = png_la_smb_2026.
- **Audiences:** Custom Audiences (visitors 180d, engagers 365d, video viewers, hashed reactivation-list upload); Lookalike 1–3% of past buyers, LA-metro; Google remarketing + optional Customer Match (source: PNG-ColdEmail-and-Ads-Implementation-Runbook_6.15.2026.md). See [[conversion-tracking-setup]].

## The 60-second qualifier (Instant Form — exactly 6 questions)

Easy first, filters last — this keeps junk leads off Venus's plate (source: PNG-Meta-LeadForm-Creative_6.15.2026.md):

1. **What do you need?** (multiple choice) Tents/Canopies · Table covers · Banners/Flags · Signage · Business cards/Print · Vehicle magnets/graphics · Other *(ES: Carpas · Manteles · Banners/Banderas · Letreros · Tarjetas/Impresión · Imanes/Gráficos para auto · Otro)*
2. **Business name** (short answer)
3. **When do you need it / event date?** Within 1 week · 2–4 weeks · 1–2 months · Just exploring — *flags urgency*
4. **Roughly how much are you looking to invest?** Under $250 · $250–$1,000 · $1,000–$3,000 · $3,000+ · Not sure yet — *the budget filter*
5. **Best phone / WhatsApp** (prefilled) + **Email** (prefilled)
6. **Preferred language / Idioma:** English · Español

Keep it to these six — more questions = fewer (not better) leads (source: PNG-Meta-LeadForm-Creative_6.15.2026.md). See [[lead-qualification-system]].

## Thank-you screen, routing and throttle

Confirmation screen: "¡Gracias! / Thanks! Venus will reach out shortly with your **free proof**. Want it faster? Text us at [number]." Each submission pings Venus instantly (email/Slack + logged to the Google Sheet working queue, **NOT HubSpot** — see [[lead-machine]]) → **first touch < 1 hour**. Auto-tag Source = Meta Lead (Prospecting / Retargeting) into the scoreboard. If daily leads exceed her cap (~6–8), throttle prospecting spend — don't bury her (source: PNG-Meta-LeadForm-Creative_6.15.2026.md). See [[operating-rhythm]].

## Creative direction

Use **real proof, not stock** (strongest → easiest): (1) carousel of actual jobs with logos visible; (2) "free proof" mockup shot — logo as a digital proof next to the finished printed product; (3) 15-sec vertical Reel (blank product → logo drops on → "FREE proof in your inbox" → "Delivered in 5 days" stamp → Spanish VO); (4) text-on-image clean product photo with overlay. Brand colors: navy `#1B2838`, copper `#C17A3A`, off-white; keep on-image text minimal (Meta favors low text density); logo bottom-corner (source: PNG-Meta-LeadForm-Creative_6.15.2026.md). Lane: Claude-admin can generate the static creatives (co-CEO recommendation).

## Compliance

Lead ads must include a privacy-policy URL + short consent line; honor opt-outs; **don't add lead-ad emails to the cold sequence without consent** (different channel, different rules); the "free" proof claim is genuinely free, so it's clean (source: PNG-Meta-LeadForm-Creative_6.15.2026.md).

## Outward copy (ganas voice)

Actual ad copy for the Instant Form campaigns.

### Prospecting — Concept 1: "See it free first" (risk reversal)
> **EN** — Need banners, tents, or signage for your business? See your design **FREE — with your logo — before you pay a cent.** 👀 We're a local LA shop (formerly PrintCo Direct). Approve your free proof and we deliver in **5 business days**. Hablamos español. Tap below and tell us what you need — we'll send a free mockup. 👇
>
> **ES** — ¿Necesita banners, carpas o letreros para su negocio? Vea su diseño **GRATIS — con su logo — antes de pagar nada.** 👀 Somos un taller local en LA (antes PrintCo Direct). Apruebe su prueba gratis y se lo entregamos en **5 días hábiles**. Toque abajo y díganos qué necesita — le mandamos un diseño gratis. 👇
>
> *Headline:* Free proof with your logo — before you pay · *(ES)* Prueba gratis con su logo — antes de pagar · *Description:* Local LA shop · 5-day delivery · Se habla español · *CTA:* Get quote / Solicitar cotización

### Prospecting — Concept 2: "5 days" (speed)
> **EN** — Event coming up? We print custom **tents, table covers, banners & signage in 5 business days** — and you see a free proof with your logo before you pay. Local LA shop, bilingual team. Tell us what you need 👇
>
> **ES** — ¿Tiene un evento pronto? Imprimimos **carpas, manteles, banners y letreros en 5 días hábiles** — y usted ve una prueba gratis con su logo antes de pagar. Taller local en LA, equipo bilingüe. Díganos qué necesita 👇
>
> *Headline:* Custom displays in 5 days — free proof first · *CTA:* Get quote / Solicitar cotización

### Prospecting — Concept 3: "Local & bilingual" (trust, Spanish-first)
> **ES** — Un taller de LA que **habla su idioma** y le entrega rápido. Carpas, banners, manteles, tarjetas y más — con **prueba gratis antes de pagar** y entrega en **5 días**. Antes nos conocía como PrintCo Direct. Cuéntenos qué necesita 👇
>
> *Headline (ES):* Impresión local que habla español · *CTA:* Solicitar cotización

### Retargeting — warm audience
> **EN** — Still thinking it over? Let's make it easy — we'll send a **free proof with your logo, no commitment**, so you can see exactly what you're getting. Approve it and it ships in 5 days. Reply or tap to grab your free mockup 👇
>
> **ES** — ¿Todavía lo está pensando? Hagámoslo fácil — le mandamos una **prueba gratis con su logo, sin compromiso**, para que vea exactamente lo que recibirá. Apruébela y se envía en 5 días. Toque para su diseño gratis 👇
>
> *Headline:* Your free proof is ready when you are · *CTA:* Get quote / Solicitar cotización

(source: PNG-Meta-LeadForm-Creative_6.15.2026.md)

## Related pages
- [[growth-offensive]]
- [[lead-machine]]
- [[google-search-engine]]
- [[cold-email-sequence]]
- [[lead-qualification-system]]
- [[conversion-tracking-setup]]
- [[positioning-and-personas]]
- [[png-voice]]
