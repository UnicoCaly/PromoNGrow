# Reactivation Outreach Strategy

> ⚠️ **SLA + voice check:** any customer-facing delivery line reads "5 business days from proof approval," never an unconditional guarantee; the "3 days for Donut Media" claim is retired; bilingual copy must pass the ganas read-aloud test. (co-CEO 2026-06-17) — see [[lead-machine]], [[png-voice]].

**Summary**: Venus's warm reactivation/outreach program built from 6 years of PrintCo Direct order history — 162 prime accounts to win back, a call-first cadence, the PrintCo→Promo & Grow reframe, a Shopify working-tag system, and Week-1 warm follow-ups (open drafts).
**Type**: channel
**Sources**: PNG-Reactivation-Outreach-Strategy.md, PNG-Email-Library_5.9.2026.md, PNG-Full-Context_4.14.2026.md
**Last updated**: 2026-06-18 (added reactivation-cohort reconciliation: 162 / 647 / 574 / ~1,221).

---

**Channel**: Outbound call-first (phone primary; text/email backup)
**Status**: Built 2026-06-06; Venus's Week-1 program
**Owner**: Venus (closer); strategy/data owned by Carlos

This is the warm-reactivation arm of the [[lead-machine]]. It feeds the same scorecard/[[dashboard]] under a `src:reactivation` lens.

## The opportunity

PrintCo Direct did **817 orders in 2021** and only **206 in 2025** — that decline is hundreds of proven buyers who already know and trust the shop, not lost customers (source: PNG-Reactivation-Outreach-Strategy.md). From the history, **162 prime reactivation accounts** were pulled for Venus: repeat buyers (2+ orders) gone quiet 6–48 months, with a real email and phone on file. Institutional accounts (City of South Gate, Lynwood, Nova Storage, etc.) are walled off — Carlos handles those (source: PNG-Reactivation-Outreach-Strategy.md).

**Recency tiers (call top-down):**

| Tier | Count | Last order | Note |
|---|---|---|---|
| Hottest | 23 | 6–12 months ago | Barely cooled; easiest wins |
| Warm | 52 | 12–24 months | |
| Lapsed | 87 | 24–48 months | Includes the whales |

**The whales — personal call first:** Alegre Music (174 past orders), Copies/ReadySpaces (129), Airgas (62), Medella Pharmacy & Boba (47), GM Auto Paint (46), Driven Events (30), JJ Gold Construction (28), Rancho Humilde (27), Felix Botanica (26) (source: PNG-Reactivation-Outreach-Strategy.md).

The full ranked list lives in `PNG-Venus-Reactivation-CallList.csv` (162 accounts, warmest first, with contact, email, last order, past order count, and what they used to buy) — not ingested (binary/CSV). The top-25 starter table is in the Appendix below.

### Reactivation lists — how the cohorts relate (reconciliation)

The "reactivation" universe is **several distinct lists**, not one — they overlap but are sized and worked differently. They are all valid; the difference is definition (source: PNG-Reactivation-Outreach-Strategy.md, PNG-Email-Library_5.9.2026.md, PNG-Full-Context_4.14.2026.md):

| List | Size | What it is | How it's worked |
|---|---|---|---|
| **Curated legacy call list** | **~162** | Hand-pulled PrintCo Direct repeat buyers (2+ orders), quiet 6–48 mo, real phone + email on file | **Phone-first** by Venus — this page + [[reactivation-call-queue]] |
| **`Reactivation-Apr2026` tag** | **647** | The Shopify-tagged email segment Email 1 went to on Apr 15 2026 | **Email** — [[email-library]] / [[reactivation-email-sequence]] |
| **`Reactivation-2026` tag** | **574** | A second Shopify reactivation email segment (the daily-workflow filter below) | **Email** — same sequence |
| **Dormant Wix import** | **~1,221** | The broader email universe = `Reactivation-Apr2026` (647) + `Reactivation-2026` (574); the ~1,000+ dormant contacts imported from the old Wix CRM | **Email** carries the long tail |

So: the **~162 is the curated phone-call list** Venus works by voice; the **~1,221 is the broader email universe** (the two Shopify tags combined ≈ the dormant Wix import) that the [[reactivation-email-sequence|8-email sequence]] warms automatically. The 162 is (mostly) a subset of the email universe — Venus calls the highest-value 162 while email reaches everyone. Cross-linked on the [[dashboard]] and [[venus-sales-playbook]].

## The reframe (warm, not cold)

Every call rides on one truth: **"PrintCo Direct is now Promo & Grow — same family shop, same people, leveled up."** Venus isn't selling to a stranger; she's checking in as the shop they already know (source: PNG-Reactivation-Outreach-Strategy.md). Two angles, picked per account (the list shows what each bought):

1. **The reorder** — "You used to get your [banners / business cards / NCR forms] from us — want to refresh those?" Low-friction, fast yes.
2. **The new line** — "We've expanded into custom event displays — tents, table covers, backdrops, all delivered in 5 days. Got an event coming up?" Plants the bigger sale.

This is the [[concierge-close]] applied to a warm base; the human voice closes, not the cart.

## Channel: call first

Venus is a closer — lead with her voice; email/text are the backup that earn the callback (source: PNG-Reactivation-Outreach-Strategy.md).

### Cadence (per account)

| Day | Action |
|---|---|
| 0 | Call → no answer → voicemail + text/email same day |
| 2 | Call again, different time of day |
| 5 | Email — lead with the reorder or a relevant new product |
| 10 | Last touch — "Should I keep you on our list for event season?" |
| No response after Day 10 | Tag `stage:nurture`, move on, re-touch quarterly |

## The tag system (track + prioritize)

Tags live on the Shopify customer record. The import already carries source tags `Proágo (PCD) Legacy Clients`, `Legacy Client`, `PrintCo Direct Client`, `Reactivation-Apr2026` — keep those. Venus layers working tags on top (source: PNG-Reactivation-Outreach-Strategy.md). This is a `src:reactivation` overlay on the [[shopify-tag-taxonomy]].

| Group | Tags | Use |
|---|---|---|
| Stage | `stage:new` → `stage:contacted` → `stage:quoted` → `stage:won` / `stage:nurture` / `stage:lost` | Where the lead is; advance on every touch |
| Priority | `pri:hot` · `pri:warm` · `pri:cold` | How hard to chase (hottest tier = `pri:hot`) |
| Source | `src:reactivation` · `src:draft` · `src:inbound` · `src:vip` | Where it came from |
| Interest | `int:tents` · `int:displays` · `int:flags` · `int:print` · `int:banners` · `int:apparel` · `int:vinyl` | What they want — drives the pitch |
| Follow-up | `fu:day2` · `fu:day5` · `fu:day10` · `fu:nurture` | Next-touch reminder; clear/advance when done |
| Guardrail | `DNC:institutional` · `DNC:reserved` · `owner:carlos` · `lang:es` | Do-not-contact (Carlos's); never contact any `DNC:*`; `lang:es` = Spanish-preferred |

**Daily workflow:** (1) Build today's list with Shopify filters (Customers → Filter → by tag), e.g. the `Reactivation-2026` segment (~574 clients) or `pri:hot` + `stage:new`, and work down it. (2) On each call: set `stage:contacted`, add the right `int:` tag, set the next `fu:` reminder, add `lang:es` if Spanish. (3) Quote sent → `stage:quoted`; paid → `stage:won` (the scorecard reads these). (4) Never touch anything tagged `DNC:institutional` — already applied to City of South Gate, Lynwood, and LUSD accounts (source: PNG-Reactivation-Outreach-Strategy.md).

## Week-1 warm follow-ups (open drafts)

Start Venus on the warmest, highest-intent work first — open Shopify draft orders (source: PNG-Reactivation-Outreach-Strategy.md):

- **#D77 — $3,400**, billed to Sarieliza (fabiola_avosalc@outlook.com), May 21. Biggest open quote. **Ask for Temo** — Cuauhtemoc "Temo" Del Rio (Del Rio Brewing Co.), Sarieliza's husband, is the decision-maker; he called it in and asked to bill her. Call first.
- **#D66 — $150**, Cristian Lopez (salsa_culichi@aol.com), Apr 22. Quick close. (Lives in South Gate but a private customer — NOT the city. Fine to call.)
- **#D2 / #D3 / #D5 ($432 / $487 / $3,040, mid-2025)** — no customer attached; investigate, likely archive.
- **Midweek — Shadi Safai · Smile Klub Dental** (safaishadi@gmail.com): open storefront-signage quote, decision pending. Two options sent — Option 1 targeted fix $1,788 (replace 2 sun-faded circle decals + refresh hours/contact on door + pylon) · Option 2 full storefront $4,800 (full window wrap + new pylon sign). Venus calls to help her choose and lock it. Already tagged `stage:quoted` `pri:hot` `fu:tue`.

Tag drafts `src:draft` + `pri:hot` as worked.

## Guardrails

- **Do not contact institutional accounts.** South Gate, Lynwood (city + LUSD), Nova Storage are Carlos's, tagged `DNC:institutional`. The 10 gov/edu accounts on Carlos's review list (`PNG-Carlos-GovEdu-Review.csv`) are on hold until he clears them. Virginia Country Club and Prime Lubricants (Ivan Farfan) are reserved for Carlos (`owner:carlos` / `DNC:reserved`). Rule: Venus never contacts anything tagged `DNC:*`.
- **Warm, never pushy** — reconnecting, not chasing; the reframe does the work.
- **Hold the floor** — $100 minimum, no discounts without Carlos (Week 1, all quotes reviewed).
- **Log every touch with a tag** — if it's not tagged, it didn't happen.

## Weekly targets (ties to the scorecard)

Ramp ~10–15 reactivation calls/day → ~50–75/week. Track calls made, conversations had, quotes sent (`stage:quoted`), reactivations closed (`stage:won`) — same scorecard, new `src:reactivation` lens. First-30-day goal: re-open conversations with the 25 hottest + the whales, and bank her first reactivation wins (source: PNG-Reactivation-Outreach-Strategy.md). Numbers feed the [[dashboard]].

## Two flags for Carlos

1. **Import gap.** Top past accounts — Alegre Music (174 orders), Copies (129), GM Auto Paint, Nova Storage — aren't in Shopify under their PrintCo emails. The April import looks like a curated subset, not the full 5-year base. The call list is built from the authoritative PrintCo file so Venus has them regardless, but she'll need to create the customer in Shopify (SOP-03) when she works them, or Carlos completes the import. A clean import file of the missing 164 can be prepped (co-CEO recommendation) (source: PNG-Reactivation-Outreach-Strategy.md).
2. **Institutional strategy — deferred.** South Gate (529 orders), Nova Storage (239), Lynwood/LUSD (70+) are major recurring PO relationships. Once Venus has tenure, a separate institutional playbook (PO cycles, right contacts, reorder timing) gets built; for now they stay Carlos's (co-CEO recommendation).

## Outward copy (ganas voice)

Venus's bilingual warm-reconnect scripts (source: PNG-Reactivation-Outreach-Strategy.md):

**The reactivation call (framework):**
> "Hi [Name], this is Venus from **Promo & Grow** — we're the shop you used to work with as **PrintCo Direct**, Carlos's team. I was going through our accounts and saw we took care of your **[product]** a while back. I wanted to personally reconnect — we've leveled up, we now do custom event branding too, and we still deliver in 5 days. What've you got coming up this year?"
>
> *ES: "Hola [Name], le habla Venus de **Promo & Grow** — somos el equipo de Carlos, antes **PrintCo Direct**. Vi que le ayudamos con sus **[producto]** hace un tiempo y quería reconectar personalmente. Crecimos: ahora también hacemos branding para eventos, y seguimos entregando en 5 días. ¿Qué tiene en puerta este año?"*

**Voicemail (no answer):**
> "Hi [Name], Venus from Promo & Grow — formerly PrintCo Direct, Carlos's shop. Reconnecting with a few of our favorite accounts. I'll text you too — reply anytime and I'll take care of you. Talk soon!"

**Follow-up text/email (same day):**
> "Hi [Name], Venus from Promo & Grow (formerly PrintCo Direct) 👋 Tried you today — we've expanded into custom event displays + still do all your print. Want a fresh quote on your [product], or something for an upcoming event? Reply here or call (844) 883-3308."

## Appendix — top 25 accounts to call first

Full 162 in `PNG-Venus-Reactivation-CallList.csv`. "Used to buy" is the talking point (source: PNG-Reactivation-Outreach-Strategy.md).

| # | Account | Contact | Last | Past orders | Used to buy |
|---|---|---|---|---|---|
| 1 | SoCal Tire Recycling | Jose Ruvalcaba | 2025-10 | 17 | NCR/Forms, Apparel, Vinyl/Decals |
| 2 | Airgas an Air Liquide Company | Jose Carranza | 2025-10 | 62 | Vinyl/Decals, Banners, Signs |
| 3 | Straight Gate Fence Co. | Richard Alarcon | 2025-09 | 10 | Magnets, Postcards, Vinyl/Decals |
| 4 | EG & Associates | Eduardo Guzman | 2025-10 | 5 | Apparel, Signs, Business Cards |
| 5 | Eternal Stone Inc. | Alejandra Caro | 2025-09 | 4 | Business Cards |
| 6 | Landmark Graphix | Cyan Petalver | 2025-09 | 2 | Vinyl/Decals |
| 7 | Copies | (ReadySpaces) | 2025-09 | 129 | Blueprints/Copies, Brochures/Flyers, Vinyl/Decals |
| 8 | State Farm (AGRC Business Solution) | Alfredo Gonzalez | 2025-09 | 5 | Business Cards |
| 9 | Superior Grocers | Leon Lopez | 2025-09 | 4 | Blueprints/Copies |
| 10 | California Plates | Erika Castillo | 2025-09 | 3 | NCR/Forms |
| 11 | Century Eye Care | Rebecca Aghai | 2025-08 | 13 | Business Cards |
| 12 | Access Eye Institute | Mireya Arguelles | 2025-08 | 12 | Business Cards, Brochures/Flyers, Signs |
| 13 | Service Pro Restoration | Abigail Mendoza | 2025-07 | 10 | Business Cards, Blueprints/Copies, NCR/Forms |
| 14 | BP Construction | Bob Flemister | 2025-07 | 5 | Vinyl/Decals, Magnets, Business Cards |
| 15 | Viral Launch App | Jonathan Maxim | 2025-07 | 2 | — |
| 16 | Wild West Boots | Marce Jame | 2025-07 | 2 | Signs |
| 17 | Medella Pharmacy & Boba | Joseph Girgis | 2025-07 | 47 | Apparel, Business Cards, Vinyl/Decals |
| 18 | Dr. Tim Silegy | Vanessa Garcia | 2025-07 | 13 | Business Cards, NCR/Forms, Signs |
| 19 | Morales House of Deals | Jorge Morales | 2025-07 | 2 | Signs, Business Cards |
| 20 | Mobile Lift Gate | Nima Spaulding | 2025-06 | 8 | Vinyl/Decals, NCR/Forms, Brochures/Flyers |
| 21 | Gloria's Restaurant | Lizeth Belloso | 2025-05 | 3 | Postcards, Business Cards |
| 22 | Avosalc | Ramiro Martinez | 2025-05 | 28 | NCR/Forms, Business Cards, Vinyl/Decals |
| 23 | Arrow Construction | Susan Hetsroni | 2025-05 | 2 | Signs, Magnets |
| 24 | Bell Chamber of Commerce | Adolfo Varas | 2025-03 | 11 | — |
| 25 | Legacy Dental | Myrna Padilla | 2025-04 | 6 | Business Cards, Postcards |

The doc names companion files not ingested here: `PNG-Carlos-GovEdu-Review.csv`, `PNG-Closer-Onboarding-Workbook` (§4 follow-up), `PNG-Weekly-Scorecard` (unverified — not yet in this wiki).

## Related pages
- [[lead-machine]]
- [[concierge-close]]
- [[shopify-tag-taxonomy]]
- [[reactivation-email-sequence]]
- [[vip-reactivation-list]]
- [[closer-hire]]
- [[dashboard]]
