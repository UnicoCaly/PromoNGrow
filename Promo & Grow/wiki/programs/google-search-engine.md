# Google Search Engine — Lean Paid Acquisition

> ⚠️ **Reality-check applied.** Cold paid leads close FAR below the warm 2.5-3% rate, CPCs run higher than first modeled, and every customer-facing delivery line must read "5 business days from proof approval" — never an unconditional guarantee. Corrected economics, kill-switch, and honest framing live in [[lead-machine]]. (co-CEO 2026-06-17)

**Summary**: The lean Google Search acquisition engine ($500-1K/mo) designed to make the phone ring with high-intent LA event-display leads for Venus to close. One Search campaign, a handful of tight product-intent ad groups plus a dedicated Spanish ad group, bilingual ganas-voice ads on the 5-day promise + free-proof CTA, and a hard prerequisite: wire the quote-conversion label before any spend (tracking is partly live — pixel + Ads tag already installed).

**Type**: channel

**Sources**: co-CEO build session 2026-06-17; draws on concierge-close.md, conversion-bridge.md, the-20k-math.md, png-voice.md, bilingual-spanish-moat.md, store-and-catalog.md, closer-hire.md.

**Last updated**: 2026-06-17.

**Channel**: Paid search (Google Ads), lean test.

**Status**: Proposed (co-CEO recommendation). GATED on the quote-conversion label — the Meta Pixel `1205589804645510` + Google Ads tag `AW-17631020505` are installed; the **blank `google_ads_quote_label`** must be wired so quote submits count (see [[conversion-tracking-setup]]). Do not spend a dollar until quote + call conversions fire.

**Metric**: primary = `quote_request_submitted` (quote requests + tracked phone calls), NOT checkouts (source: conversion-bridge.md). Cost-per-qualified-lead is the number that matters at this budget.

---

## Why Google Search, and why it fits the close

The business converts through a [[concierge-close|human concierge close]], not the cart: 180-day data shows more completed orders than carts started (3,936 sessions, 7 add-to-cart, 31 orders) (source: concierge-close.md). Paid search is the right first paid channel because it catches buyers at the exact moment of high intent — someone typing "custom canopy tent Los Angeles" wants a quote today, which is precisely the lead Venus closes. We are not buying browsers; we are buying phone calls and quote requests that drop straight into the [[conversion-bridge|Get a Free Proof]] path and the warm queue (source: closer-hire.md).

The job of this engine: make the phone ring and the quote form fill. The success metric is `quote_request_submitted` + tracked calls, not Shopify checkouts (source: conversion-bridge.md). At $400 AOV and 60-67% gross margin (source: store-and-catalog.md, the-20k-math.md), a qualified lead is worth a lot, so a $20-40 cost-per-lead is healthy economics if the close rate holds.

## The #1 prerequisite — tracking before spend

Tracking is **partly live** (build-status 6/16): the Meta Pixel + Google Ads tag are installed, but the **`google_ads_quote_label` is blank**, so `quote_request_submitted` doesn't count as a conversion — bidding can't optimize toward leads it can't see. **Wire the quote-label first, then spend.** Full spec on [[conversion-tracking-setup]]. The label + remaining events are a **(Claude Code)** lane task; the Google Ads / GA4 conversion config is **(Carlos-VA)** with **(Claude-admin)** support.

## Account & campaign structure (lean)

Keep it dead simple — one campaign, a few tight ad groups. Complexity is the enemy at $500-1K/mo; thin data spread across many campaigns never trains the algorithm (co-CEO recommendation).

- **1 Search campaign** — "PNG | Search | LA Event Displays". Search Network only; **turn OFF Search Partners and the Display Network** (they waste lean budget on junk traffic) (co-CEO recommendation).
- **Ad groups (5), tight by product intent + one Spanish:**
  1. **Canopy Tents** — the hero money product, highest intent + ticket.
  2. **Table Covers / Throws** — high-volume, lower ticket, steady demand.
  3. **Feather / Flag Banners** — fast-moving, event-driven.
  4. **Trade-Show Displays (SEG / backdrops / step-and-repeat)** — high-ticket, B2B/brand-manager persona.
  5. **Spanish — General (carpas/toldos/mantel)** — dedicated bilingual group; serves [[positioning-and-personas|La Emprendedora]] and the [[bilingual-spanish-moat|Spanish surface]] competitors ignore.

One theme per ad group, 8-15 tightly-related keywords each, one RSA per group (two during testing). This keeps Quality Score high and CPCs lower. As data accrues, the Spanish group may split by product, but start unified to pool volume (co-CEO recommendation).

## High-intent keyword themes (with examples)

Use phrase and exact match for control on a lean budget; avoid broad match until conversion data trains the account (co-CEO recommendation). "Near me" and LA-geo variants matter — they signal a local buyer who values the Lynwood/5-day advantage.

**Ad group 1 — Canopy Tents (EN)**
- `custom canopy tent`, `custom pop up tent with logo`, `branded canopy tent`, `10x10 custom tent`, `custom canopy tent los angeles`, `custom tent near me`, `event tent with logo`, `printed canopy tent`

**Ad group 2 — Table Covers / Throws (EN)**
- `custom table cover`, `printed table throw`, `branded tablecloth with logo`, `custom table cover los angeles`, `trade show table cover near me`, `fitted table throw logo`

**Ad group 3 — Feather / Flag Banners (EN)**
- `custom feather flag`, `feather flags with logo`, `swooper flag custom`, `custom flags los angeles`, `feather flag near me`, `event flag banner custom`

**Ad group 4 — Trade-Show Displays (EN)**
- `custom trade show backdrop`, `step and repeat banner`, `SEG fabric display`, `tension fabric display custom`, `trade show booth display los angeles`, `backdrop banner near me`, `media wall printing`

**Ad group 5 — Spanish — General (ES)**
- `carpa personalizada`, `toldo con logo`, `carpa para evento personalizada`, `mantel personalizado para mesa`, `banderas publicitarias personalizadas`, `carpa personalizada los angeles`, `impresion de carpas cerca de mi`, `toldo publicitario`

Geo-modifier pattern to layer into any group: `los angeles`, `lynwood`, `near me`, `LA`, `southern california`, plus event triggers like `for trade show`, `for event`, `for booth`, `for vendor`.

## Negative-keyword starter list

Filter out cheap/DIY/free/template/job-seeker and irrelevant intent (co-CEO recommendation). Apply as a shared campaign-level negative list:

- **Free/cheap/bargain:** `free`, `cheap`, `cheapest`, `discount` (as sole intent), `wholesale`, `dollar`, `clearance`
- **DIY / template / how-to:** `diy`, `how to make`, `template`, `templates`, `svg`, `printable`, `download`, `tutorial`, `pattern`
- **Jobs / careers:** `job`, `jobs`, `hiring`, `salary`, `career`, `careers`, `apply`
- **Rental / used / repair:** `rental`, `rent`, `for rent`, `used`, `second hand`, `repair`, `parts`
- **Wrong product / consumer camping:** `camping tent`, `beach tent`, `party tent rental`, `wedding tent rental`, `grow tent`, `tablecloth disposable`, `plastic tablecloth`
- **Software / digital / unrelated:** `app`, `software`, `clipart`, `logo design` (we print, not design logos), `coupon code`

Review the Search Terms report weekly for the first month and add negatives — this is where lean budgets are saved (co-CEO recommendation). **(Claude-admin)** can draft weekly negative additions from the export; **(Carlos-VA)** applies them.

## Outward copy (ganas voice)

All ad copy below is outward customer-facing and written in the bilingual ganas growth-partner voice (source: png-voice.md). Premium, warm, never salesy; every set features the 5-business-day promise + a free-proof/free-quote CTA. Headlines must fit Google's 30-char limit; descriptions 90 chars. Read every line aloud — a real bilingual Angeleno must say it that way (source: png-voice.md, bilingual-spanish-moat.md).

### RSA Set 1 — Canopy Tents (EN)
**Headlines:** Custom Canopy Tents, LA · Booth-Ready in 5 Days · Free Proof Before You Pay · Your Brand, Done Right · Made in LA, Built to Last · Send Your Logo, Get a Proof · 20+ Yrs of Event Displays · 4.8★ Local Print Shop · Nothing Prints Til You OK It
**Descriptions:** Custom-printed canopy tents made in Lynwood, delivered in 5 business days from proof approval. Free proof first. · Send your logo, get a free proof — no pressure. Booth-ready in 5 business days once you approve. · Your event, your brand, hecho bien. Get a free quote today. · Real people, real craft, fast. 20+ years equipping LA entrepreneurs.

### RSA Set 2 — Trade-Show Displays (EN, brand-manager persona)
**Headlines:** Trade-Show Displays, LA · Step & Repeat in 5 Days · SEG Fabric Displays Custom · Free Proof, No Surprises · Your Deadline, Handled · Send Files, We Print It Right · Backdrops Made in Lynwood · Trusted by Donut Media
**Descriptions:** Custom SEG displays, backdrops & step-and-repeats. Send your files, booth-ready in 5 business days from proof approval. · Tight deadline? Tell us your event date. Free proof before production — nothing prints without your OK. · Trusted by growing brands across LA. 20+ years, 4.8★, made in the USA. · Free quote today. We make you look like the market leader you are.

### RSA Set 3 — Spanish — Carpas/Toldos (ES)
**Headlines:** Carpas Personalizadas LA · Lista en 5 Días Hábiles · Prueba Gratis Antes de Pagar · Tu Marca, Hecha Bien · Hecho a la Medida en LA · Manda Tu Logo, Prueba Gratis · 20+ Años en Los Ángeles · Hablamos Español
**Descriptions:** Carpas y toldos personalizados, hechos en Lynwood y listos en 5 días hábiles. Prueba gratis. · Manda tu logo y te hacemos una prueba gratis — sin compromiso. Lista en 5 días. · Tu evento, tu marca, hecho bien. Pide tu cotización gratis hoy. · Gente real que habla tu idioma. 20+ años ayudando a emprendedores de LA.

### RSA Set 4 — Table Covers & Flags (EN, La Emprendedora / vendor)
**Headlines:** Custom Table Covers, LA · Feather Flags w/ Your Logo · Booth-Ready in 5 Days · Free Proof on Every Order · Show Up Like a Pro · Made in LA, Not Mass-Made · Send Your Logo Today · 4.8★ from Local Vendors
**Descriptions:** Printed table throws & feather flags that make your booth look legit. Free proof, 5 days. · You bring the ganas — we make sure you show up like a pro. Free quote today. · Custom table covers & flags made in Lynwood. Free proof before you pay. · Real craft, fast turnaround, fair price. Send your logo, get a free proof.

**Pinning guidance:** pin one "5 days" headline and one "free proof" headline to slots so the promise + CTA always show; let Google rotate the rest (co-CEO recommendation). Keep prices OUT of ad copy — products are quote-first / custom (source: conversion-bridge.md). Never use fake urgency / countdowns — it violates the anti-brand (source: png-voice.md).

## Ad assets / extensions

Maximize the free real estate — extensions lift CTR and Quality Score, lowering CPC (co-CEO recommendation):

- **Call asset** — the (844) 883-3308 line, set to show only during Venus's answer hours (see schedule). Use a **call-tracking number/conversion** so calls are counted (source: store-and-catalog.md for the line; tracking spec on [[conversion-tracking-setup]]).
- **Lead-form asset** — a low-friction "Get a free proof" form (name / phone / what they need) so mobile users convert without leaving Google; route submissions to the warm queue with an instant alert (speed-to-lead is the #1 close factor) (source: conversion-bridge.md).
- **Sitelinks (4):** "Custom Tents", "Trade-Show Displays", "Get a Free Proof", "How It Works (5 Days)".
- **Callouts:** "5 Days After Proof OK", "Free Proof Every Order", "Made in the USA", "20+ Years in LA", "Hablamos Español", "4.8★ Reviews" (source: png-voice.md trust phrases). *(Never use "guaranteed" — see the SLA honesty rule in [[lead-machine]] and [[fulfillment-sop]].)*
- **Structured snippets:** Header "Brands" or "Types" → Canopy Tents, Table Covers, Feather Flags, SEG Displays, Step & Repeat, Banners.
- **Location asset** — link the Google Business Profile (4.8★, 19 reviews) so the Lynwood address + reviews show (source: dashboard.md). Reinforces the local moat.
- **Image assets** — real product/booth photos (premium, never stock-looking — source: png-voice.md guardrail). **(Claude-admin / Carlos-VA)** to supply. [Carlos to provide: 3-5 high-quality product/booth photos for image assets.]

## Bid strategy + budget allocation

**Phase 1 (weeks 1-3, learning):** start on **Maximize Clicks with a manual max-CPC cap** (or Manual CPC) — until ~15-30 conversions accrue, smart bidding has nothing to learn from (co-CEO recommendation). Cap CPC around $4-6 to avoid overpaying on the expensive tent terms.

**Phase 2 (after ~20-30 conversions):** switch to **Maximize Conversions**, then add a **target CPA** once cost-per-lead stabilizes. The conversion it optimizes toward must be `quote_request_submitted` + calls — which is why tracking comes first ([[conversion-tracking-setup]]).

**Daily budget math:**
- $500/mo ÷ 30.4 = **~$16.50/day**
- $750/mo ÷ 30.4 = **~$24.50/day**
- $1,000/mo ÷ 30.4 = **~$33/day**

Recommend **starting at $500/mo (~$16.50/day)** for 3-4 weeks to validate tracking + lead quality, then scale toward $1,000 if cost-per-qualified-lead is healthy (co-CEO recommendation). Allocation across ad groups: let the single shared campaign budget flow, but use the Search Terms report to prune; expect Canopy Tents + Trade-Show Displays to consume the most because they carry the highest intent and ticket.

**Geo:** target a **radius around Lynwood (90262) of ~25-35 miles** (covers LA metro: DTLA, East LA, South Gate, Long Beach, the SGV, parts of OC) — wide enough for volume, tight enough to honor the 5-day/local-pickup advantage. Add a bid adjustment favoring the immediate Lynwood/South-LA core. Set location targeting to "presence" (people IN the area), not "interest", to avoid out-of-market clicks (co-CEO recommendation).

**Ad schedule:** run ads **only when someone can answer** — speed-to-lead is the #1 close factor (source: conversion-bridge.md). Venus's confirmed hours are **10am–4pm PT** (≈11am–5pm El Salvador; source: closer-hire.md). Concentrate spend **~9am–5pm PT Mon–Sat** to bracket her window plus Carlos's overflow coverage; the **call asset** shows only during those hours. Keep the lead form + inbound "text/quote" capture live **24/7** with an instant auto-reply so off-hours intent isn't lost and the overnight queue is first thing cleared each morning (co-CEO recommendation). Her window is narrow (6 hrs/day) — watch that ad pacing doesn't generate more after-hours calls than the team can return.

## Landing / quote destination & the conversion path

Do NOT send paid clicks to the homepage or to an "Add to Cart" PDP — the cart is the wrong door for custom (source: concierge-close.md). Send each ad group to its matching money page, and the destination must lead with the **"Get a Free Proof"** path (source: conversion-bridge.md):

- Canopy Tents ad group → the tent money page (quote-first CTA prominent).
- Trade-Show Displays → SEG/backdrop money page.
- Table Covers / Flags → respective money pages.
- Spanish group → the **/es/** equivalent pages (hero pages staged live first — source: bilingual-spanish-moat.md). [If /es/ pages aren't live yet, point the Spanish group to the EN money page with a bilingual quote form until Markets ships — flag as a launch dependency.]

The page must carry the trust stack already spec'd: free-proof guarantee, 4.8★ on-page, "starting at" framing, a 3-step how-it-works, and the quote form (name / email / phone / product / qty / event-date / notes / logo upload) with instant auto-reply + instant admin alert (source: conversion-bridge.md). A quote-form submit = the `quote_request_submitted` conversion. **(Claude Code)** owns the quote form, CTAs, and pixel plumbing; **(Claude-admin)** owns the page copy.

## Email + Apollo as cheaper parallel sources into the SAME pipeline

Paid search is the most expensive lead source; run two cheaper engines into the identical pipeline so the close machine stays fed regardless of ad spend (co-CEO recommendation):

- **Email (near-zero cost):** the [[reactivation-email-sequence|8-email reactivation arc]] (Thursdays 10am PT, opens 32-39%) drives reply/call — every reply/click is a warm lead in the same queue Venus works (source: reactivation-email-sequence.md). The proven insight: reply/call beats hard-sell (Apr 23 13% clicks vs Jan 30 0%) — same conversational posture as the ad CTA.
- **Apollo (low cost, B2B/ABM):** outbound to the brand-manager / event-pro personas (source: positioning-and-personas.md) via Apollo sequences + tasks. This is the cold-tier lane and stays behind the warm queue per the day-one rule (source: closer-hire.md) — but it sources the higher-ticket trade-show leads that paid search also targets.

**The unifying rule:** every source — paid click, email reply, Apollo task, inbound call — lands in ONE pipeline: a Google Sheet working queue + Shopify customer tags for durable state (per Carlos's decision). Venus works that single queue; quotes are built as Shopify draft orders (source: concierge-close.md). Paid search just adds high-intent fuel to a machine that already converts.

## Realistic CPC + volume expectations (LA event-display keywords)

These are planning estimates for LA-metro custom event-display search, to be replaced by real account data — do not treat as guarantees (co-CEO recommendation; CPC figures unverified until the account runs):

| Term type | Est. CPC range (unverified) |
|---|---|
| Branded/custom tent & trade-show (high ticket, competitive) | $4-8 |
| Table covers / feather flags (mid) | $2-5 |
| Spanish-language (carpa/toldo — thinner competition) | $1.50-4 |
| Blended account average | ~$3.50-5 |

**Monthly volume at a ~$4 blended CPC:**
- **$500/mo → ~100-140 clicks** → at a 5-10% click-to-lead rate, **~5-14 qualified leads/mo**.
- **$1,000/mo → ~200-280 clicks** → **~10-28 qualified leads/mo**.

At the proven warm/concierge close rate of 2.5-3% applied loosely, the leverage is really in the lead → quote → close funnel, not raw clicks. Even **5-15 quote-grade leads/month** is meaningful at $400 AOV / 60-67% margin: a handful of closes covers the spend several times over (source: the-20k-math.md, store-and-catalog.md). The Spanish group should punch above its weight — cheaper clicks into a near-empty competitive surface (source: bilingual-spanish-moat.md).

Measure on **cost-per-qualified-lead and lead → close rate**, not impressions. If CPL runs under ~$40 and leads close, scale to $1K; if junk traffic dominates, tighten match types + negatives before adding budget (co-CEO recommendation).

## Launch checklist (in order)

1. **(Claude Code)** Install the Google tag / GA4 on the theme; wire `quote_request_submitted` + phone-click events. (BLOCKER — see [[conversion-tracking-setup]].)
2. **(Carlos-VA / Claude-admin)** Create Google Ads account, import GA4 conversions, set up call-tracking + lead-form conversions.
3. **(Claude-admin)** Confirm money-page + /es/ destinations carry the Free-Proof quote form (with **(Claude Code)** on the form itself).
4. **(Carlos-VA)** Confirm Venus's hours → set ad schedule + call-asset hours.
5. **(Carlos-VA)** Launch at $500/mo, manual CPC cap, geo 25-35mi around Lynwood, Search-only.
6. **(Claude-admin)** Weekly: Search Terms report → add negatives; review CPL; report to [[dashboard]].

## Related pages
- [[conversion-tracking-setup]]
- [[conversion-bridge]]
- [[concierge-close]]
- [[the-20k-math]]
- [[positioning-and-personas]]
- [[png-voice]]
- [[bilingual-spanish-moat]]
- [[closer-hire]]
- [[reactivation-email-sequence]]
- [[store-and-catalog]]
- [[dashboard]]
