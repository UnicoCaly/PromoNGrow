# Venus Sales Playbook

**Summary**: Venus's operational sales playbook — the reactivation strategy against 162 proven PrintCo Direct buyers, the one-page closer cheat sheet, the first-call and follow-up-email playbooks, the role-play/objection drills (LAER + Feel-Felt-Found), and the NotebookLM master source pack.
**Type**: concept
**Sources**: PNG-Reactivation-Strategy-VENUS.md, PNG-Closer-Cheat-Sheet.md, PNG-First-Call-Playbook.md, PNG-Follow-Up-Email-Playbook.md, PNG-Roleplay-and-Objection-Drills.md, PNG-NotebookLM-Source-Pack.md
**Last updated**: 2026-06-19 (assumptive CTA + [[outbound-method]] cross-ref).

> **Companion:** [[sell-guide]] — product-knowledge + cross-sell angles (EDDM, large format, Majestic premium print, election-year 2026) distilled from the 4over collateral.

---

## The play: reactivation, call first, warmest first

The current growth play is winning back proven buyers, not cold-calling strangers. PrintCo Direct did 817 orders in 2021 and only 206 in 2025 — that decline is hundreds of proven buyers waiting to be re-engaged (source: PNG-Reactivation-Strategy-VENUS.md). From 6 years of history, 162 prime reactivation accounts were pulled — repeat buyers (2+ orders) quiet for 6–48 months with a real email and phone on file (source: PNG-Reactivation-Strategy-VENUS.md). *(The 162 is the curated phone-call list; the broader email universe is ~1,221 — Reactivation-Apr2026 ≈647 + Reactivation-2026 ≈574 — worked by [[reactivation-email-sequence]]. Different definitions, both valid — see [[reactivation-call-queue]].)* Full ranked list lives in `PNG-Venus-Reactivation-CallList.csv` (not ingested — binary/CSV).

**Recency tiers (call top-down):** 23 hottest (last order 6–12 mo), 52 warm (12–24 mo), 87 lapsed (24–48 mo, includes the whales) (source: PNG-Reactivation-Strategy-VENUS.md).

**The whales — personal call first:** Alegre Music (174 past orders), Copies/ReadySpaces (129), Airgas (62), Medella Pharmacy & Boba (47), GM Auto Paint (46), Driven Events (30), JJ Gold Construction (28), Rancho Humilde (27), Felix Botanica (26) (source: PNG-Reactivation-Strategy-VENUS.md).

See [[reactivation-email-sequence]], [[vip-reactivation-list]], [[pipeline-ops-spine]].

### The reframe (warm, not cold)
Every call rides on one truth: "PrintCo Direct is now Promo & Grow — same family shop, same people, leveled up." Two angles, picked per account: (1) the reorder ("want to refresh those [banners/cards/NCR forms]?") and (2) the new line ("we've expanded into custom event displays — tents, table covers, backdrops, delivered in 5 days") (source: PNG-Reactivation-Strategy-VENUS.md).

### Cadence (per account)
Day 0: call → no answer → voicemail + text/email same day. Day 2: call again, different time. Day 5: email (lead with reorder or relevant new product). Day 10: last touch ("keep you on our list for event season?"). No response after Day 10: tag `stage:nurture`, re-touch quarterly (source: PNG-Reactivation-Strategy-VENUS.md).

### Week-1 warm starts
- **#D77 — $3,400**, billed to Sarieliza — Cuauhtemoc "Temo" Del Rio (Del Rio Brewing Co.), the decision-maker. **Now gone cold (6/18): run the takeaway / 1-2-3 reply, not daily calls** ([[deal-followup-playbook]]). Live status on [[venus-work-queue]].
- **#D66 — $150**, Cristian Lopez, Apr 22. Quick close. (Lives in South Gate but is a private customer — NOT the city. Fine to call.)
- **#D2 / #D3 / #D5** ($432 / $487 / $3,040, mid-2025) — no customer attached; investigate, likely archive.
- **Shadi Safai (signs) — $5,838 across 3 sent hot quotes** (#D83 $4,000, #D80 $950, #D84 $888), already owner:venus — the **biggest open quote on the board; lock these first.** (A separate Smile Klub Dental storefront quote — $1,788 fix / $4,800 full — is also open.) Live board = [[venus-work-queue]] (source: venus-work-queue, 2026-06-17).

### The working tag system
Tags live on the Shopify customer record (legacy source tags `Proágo (PCD) Legacy Clients`, `PrintCo Direct Client`, `Reactivation-Apr2026` are kept). Venus layers on working tags (source: PNG-Reactivation-Strategy-VENUS.md):

| Group | Tags |
|---|---|
| Stage | `stage:new`→`contacted`→`quoted`→`won`/`nurture`/`lost` |
| Priority | `pri:hot` · `pri:warm` · `pri:cold` |
| Source | `src:reactivation` · `src:draft` · `src:inbound` · `src:vip` |
| Interest | `int:tents/displays/flags/print/banners/apparel/vinyl` |
| Follow-up | `fu:day2` · `fu:day5` · `fu:day10` · `fu:nurture` |
| Guardrail | `DNC:institutional` · `DNC:reserved` · `owner:carlos` · `lang:es` |

Daily flow: build today's list with Shopify customer filters, set `stage:contacted` + the right `int:` + next `fu:` on each call, advance to `stage:quoted`/`stage:won` as it moves. If it's not tagged, it didn't happen (source: PNG-Reactivation-Strategy-VENUS.md). See [[shopify-tag-taxonomy]].

### Guardrails
Never contact anything tagged `DNC:*` — institutional accounts (City of South Gate, Lynwood + LUSD, Nova Storage) and reserved private accounts (e.g. Virginia Country Club, Prime Lubricants) are Carlos's (source: PNG-Reactivation-Strategy-VENUS.md). Warm never pushy; hold the floor ($100 minimum, no discounts without Carlos); log every touch with a tag (source: PNG-Reactivation-Strategy-VENUS.md). See [[south-gate-account]]. Weekly targets: ~10–15 reactivation calls/day → ~50–75/week (source: PNG-Reactivation-Strategy-VENUS.md).

## First-call playbook (start a conversation, don't sell)

Call one's whole game: get them to reply. Venus is a friendly voice from a shop they already trusted, checking in (source: PNG-First-Call-Playbook.md). Steps: (1) **confirm the person** before any pitch ("Hi, is this Alejandra?" — the fix for the call that hung up); (2) a **short opener** (2–3 sentences, ~15 sec): who we are + who we were + the specific past order + a question, then stop talking; (3) the second they reply, keep it going by asking about **them**; (4) **find the need before offering anything** — good questions get to the right product (someone says "brochure" but means a postcard) (source: PNG-First-Call-Playbook.md).

A good first call scoreboard: confirmed the person, got a real two-way exchange, learned one thing about their business, set a next step. That's a win — log it. Closing comes later (source: PNG-First-Call-Playbook.md).

## Follow-up email playbook (personal + specific + one CTA)

The fix: emails should feel written *for them*, with one obvious next step. The 5 fixes: name them + one human line; name the product (not "the project"); lead with the two superpowers (free proof + 5-day delivery); one clear CTA ("Reply YES and I'll send your free proof"); warm voice, Spanish when preferred, cut the corporate filler (source: PNG-Follow-Up-Email-Playbook.md). Structure: ~5 short lines — opener, quote + what it includes, free proof + 5-day, one CTA, signature. Day 1 / Day 3 nudge / Day 7 deadline templates provided in EN+ES. Feed AI the name, exact product, amount, event/date, and prior order to speed it up — reject anything that sounds like corporate filler (source: PNG-Follow-Up-Email-Playbook.md). **Make the one CTA assumptive** — "I'll get your free proof started, send your logo" beats "want me to?" — and cap the email chase at ~4–5 tight (24–48h) touches; the full email micro-sequence + objection bank live in [[deal-followup-playbook]] (per [[outbound-method]]).

## Closer cheat sheet (keep open mid-call)

The pitch every call: free proof → you approve → delivered in 5 business days (4 on print). Speed-to-lead: respond in minutes. Warm, never pushy (source: PNG-Closer-Cheat-Sheet.md).

**Price quick-reference** (full list = [[master-price-sheet]]): Tents 10x10 $800→$1,600 complete · 10x15 $1,280→$2,125 · 10x20 $1,400→$2,500. Table covers runner+throw $88, draped $175–$238, stretch $255–$310. Flags $120 single / $185 double, Econo 16ft $140. SEG displays 3ft $248 · 10ft $888 · 20ft $1,580 · backlit $1,565–$2,420. Wall art canvas $98+, acrylic $198–$298. Banners (13oz) = width x height (ft) x $5/sq ft. Magnets 24x12 $75/$140pr, 24x18 $125/$228pr. Print: biz cards 1,000=$108, postcards 4x6 1,000=$160, flyers 1,000=$461, NCR 100=$235 (source: PNG-Closer-Cheat-Sheet.md). Rule: on the sheet → quote it; custom → ask Carlos, never guess (source: PNG-Closer-Cheat-Sheet.md). See [[pricing-engine]].

Floor: $100 minimum, no discounts without Carlos. Good-better-best: Tent Only → Half/Full Wall → Complete Set (anchor the middle). Escalate vehicle wraps / channel letters / brand systems to Carlos/Proágo. Never contact `DNC:*` (source: PNG-Closer-Cheat-Sheet.md). Sales line: (844) 883-3308 · hello@promongrow.com (source: PNG-Closer-Cheat-Sheet.md).

## Role-play & objection drills (run 2x/week)

Backbone is **LAER** — Listen, Acknowledge, Explore, Respond — with **Feel-Felt-Found** for price, and the free proof as the always-available fallback (source: PNG-Roleplay-and-Objection-Drills.md). The persistence stat that drives the drills: 60% of sales need 5+ "no"s, but 44% of reps quit after the first (source: PNG-Roleplay-and-Objection-Drills.md, PNG-Closer-Cheat-Sheet.md).

Five scenarios: inbound discovery (taquería grand opening), quote handoff with good-better-best, reactivation warm call (Alegre Music whale, quiet 34 mo), draft follow-up (#D77 / ask for Temo), price pushback. Scored on a 1–5 rubric across 7 skills (warm open, got the moment + date, discovery, good-better-best, free proof + 5-day, objection handling, asked for next step); 18+/30 to pass (source: PNG-Roleplay-and-Objection-Drills.md). Ten objection flashcards drill the common ones ("more than I wanted to spend," "need to think about it," "faster than 5 days?," "why you instead of Vistaprint?," "just send a price," "we already have a vendor," "can you design it?," "who is this again?," "email me the info," "I'll get back to you") (source: PNG-Roleplay-and-Objection-Drills.md).

## NotebookLM source pack (canonical brand/sales truth)

The master source pack is the clean, verified source of truth (as of June 6, 2026) to feed NotebookLM so generated podcasts/explainers/infographics stay accurate — it supersedes earlier auto-generated summaries with typos like "cure offerings" or "Event Vender" (source: PNG-NotebookLM-Source-Pack.md). It covers who we are, positioning ("equips the entrepreneur operating on ganas to show up like a pro — fast"; "Tu evento, tu marca, hecho bien"), the moat (agency craft + local bilingual warmth + national 5-day speed at an accessible price), voice, the two proof pillars (5-day delivery + free proof), the catalog, the pricing model (quote from the set sheet, never raw cost; $100 floor; markups confidential), the concierge close, objection handling, reactivation, guardrails, and the three personas — La Emprendedora, The Brand Manager, The Agency/Event Pro (source: PNG-NotebookLM-Source-Pack.md). Tip: select this single source for brand/sales topics, pairing with a specific kit doc for a specific piece (source: PNG-NotebookLM-Source-Pack.md). See [[positioning-and-personas]], [[store-and-catalog]].

## Outward copy (ganas voice)

**Reactivation call framework** (source: PNG-Reactivation-Strategy-VENUS.md):
> "Hi [Name], this is Venus from **Promo & Grow** — we're the shop you used to work with as **PrintCo Direct**, Carlos's team. I was going through our accounts and saw we took care of your **[product]** a while back. I wanted to personally reconnect — we've leveled up, we now do custom event branding too, and we still deliver in 5 days. What've you got coming up this year?"
> *ES: "Hola [Name], le habla Venus de **Promo & Grow** — somos el equipo de Carlos, antes **PrintCo Direct**. Vi que le ayudamos con sus **[producto]** hace un tiempo y quería reconectar personalmente. Crecimos: ahora también hacemos branding para eventos, y seguimos entregando en 5 días. ¿Qué tiene en puerta este año?"*

**First-call opener** (source: PNG-First-Call-Playbook.md):
> "Hey Alejandra — this is **Venus** with **Promo & Grow**, you knew us as **PrintCo Direct**. Looks like about **7 months ago** you ordered a banner stand and a tent with us. **How's business going?**"
> *ES: "Hola, ¿hablo con Alejandra? — Le habla Venus de Promo & Grow, antes PrintCo Direct. Hace como 7 meses pidió un banner y una carpa con nosotros. ¿Cómo va el negocio?"*

**Follow-up email — Day 1** (source: PNG-Follow-Up-Email-Playbook.md):
> Subject: Your Promo & Grow quote — free proof ready when you are
> Hi **[Name]**, it's Venus at **Promo & Grow** (formerly PrintCo Direct). Following up on your **[product]** — the total's **$[amount]**, shipping included. Here's the easy part: I'll send a **free proof** first so you can see it with your logo before anything prints, and once you approve, we deliver in **5 business days**. I'll get that **free proof** started now — reply with your logo (or just **YES** and I'll mock it up) and we're moving. — Venus
> *ES: Hola **[Name]**, le habla Venus de **Promo & Grow** (antes PrintCo Direct). Le doy seguimiento a su **[producto]** — el total es **$[amount]**, con envío incluido. Lo mejor: le mando una **prueba gratis** para que lo vea con su logo antes de imprimir, y al aprobarla se lo entregamos en **5 días hábiles**. Le empiezo la **prueba gratis** ahora — mándeme su logo (o responda **SÍ** y se la monto) y arrancamos. — Venus*

**Objection lines (flashcard sample)** (source: PNG-Roleplay-and-Objection-Drills.md):
> Price: "Totally hear you — what's the target you're working with? We can start with [tier] and you'll still show up sharp."
> "I need to think about it": "Of course — is it timing, budget, or checking with someone? Either way I'll send the free proof now so it's in your hands when you decide. No commitment."
> Why not Vistaprint: "Those are templates and a faraway printer. We're real people in LA — free proof, a person who answers, 5-day delivery. Hecho bien."

Keep all of the above in the [[png-voice]] register; the rest of this page stays plain.

## Related pages
- [[venus-onboarding-kit]]
- [[reactivation-email-sequence]]
- [[draft-order-quote-system]]
- [[master-price-sheet]]
- [[operating-rhythm]]
- [[shopify-tag-taxonomy]]
- [[concierge-close]]
- [[positioning-and-personas]]
- [[png-voice]]
- [[vip-reactivation-list]]
- [[outbound-method]]
