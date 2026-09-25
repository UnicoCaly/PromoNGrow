# Meta UGC Ad Launch Kit

**Summary**: The execute-ready kit for PNG's first paid test — a Venus-selfie UGC + B-roll ad → Click-to-WhatsApp (confirmed-phone) funnel → free proof → 5-day close. Winning ad copy chosen by a 5-judge tournament (V8 mechanic + grafts). Designed as a ~$400 killable experiment with hard pass/fail gates, NOT a $750/mo commitment — because UGC creative + a confirmed-phone gate + tent-AOV attack the three things that made generic paid lose money.

**Type**: campaign

**Sources**: ad-copy tournament (workflow w1g5279m3, 2026-06-21); builds on [[meta-lead-form]], [[growth-offensive]], [[conversion-tracking-setup]], [[png-voice]], [[lead-qualification-system]]. Built by Claude-admin 2026-06-21.

**Last updated**: 2026-06-26 (filed the second campaign's as-built config + clean-test fix list; the WhatsApp→LP→instant-form launch history is retained below).

---

## Launch reality (2026-06-24) — read first; supersedes the WhatsApp-destination spec below where they conflict

> **▶ ACTUAL LIVE SETUP (2026-06-24 night): Meta NATIVE instant lead form** — not WhatsApp, and not the website LP. The ad runs **one campaign → two ad sets (ES / EN)**, each with a Meta instant form (name + email + phone). **First two leads in same night** — @lajoyacatering (La Joya Catering) + @rawedge.la — at **$2.79/lead** ($5.58 / 195 views / 2 leads; n=2, directional). Both arrived **handle + email, no phone** (standard EN form). **Venus now owns this funnel solo** (Carlos gave her Meta access to messages/calls/leads). The full intake→close play she runs = **[[meta-lead-intake-playbook]]**. Open items for Carlos: switch **both** ad sets to high-intent (phone) for a clean ES-vs-EN read + to capture phone; kill the duplicate app-made ad; create **#promo-and-grow-artwork-proofer**; turn off the Proofer app auto-follow-up. The WhatsApp-vs-form A/B is parked until the number activates. (source: Carlos direction 2026-06-24; Meta Ads Manager.)

The kit was built for **Click-to-WhatsApp**, but the WhatsApp Business number (the 844 toll-free) **still isn't activated** (the activation-code blocker, 6/22). The first live test therefore ran on a Meta lead-capture form rather than WhatsApp. *(The earlier "website free-proof landing page" plan below was itself superseded on launch night by the Meta native instant form — see the banner above.)* The original LP-fallback spec:

- **Destination:** EN ad set → **promongrow.com/pages/free-proof**, ES ad set → **promongrow.com/pages/prueba-gratis** (the dedicated Spanish page). See [[free-proof-landing-page]].
- **Objective:** Sales/Leads, **conversion location = Website** (not WhatsApp); optimize for the **Lead** event (the LP form-submit fires it).
- **Pixel:** use **`1205589804645510`** (the real, active, on-site pixel). Carlos had accidentally created ~4 empty duplicate pixels (incl. `850250664585586` "Proofer Adds") and the ad defaulted to an empty one → "pixel not active." Fix is in [[conversion-tracking-setup]].
- **Campaign structure:** ONE campaign → TWO ad sets (audience/language are **ad-set-level**, not campaign): **Set A = Spanish** (ES creative + Languages=Spanish), **Set B = English**. ABO budgets so each language is controlled/killable independently.
- **Attribution:** standard **7-day click / 1-day view** — NOT incremental (incremental needs volume/history this $400 new-funnel test doesn't have, and it muddies the cost-per-lead gates). Real measurement stays the manual Sheet tracker.
- **Creative caveat:** Venus's "message me your logo" UGC line reads as WhatsApp/DM; for a website ad the cleaner CTA is "tap to get your free proof." Fine to run as-is for the first test; tighten (or flip back to true Click-to-WhatsApp) once the WhatsApp number is live.

---

## 2026-06-30 — funnel expansion: WhatsApp + DM ads (the logo-first unlock)

**Why:** of 48 form leads, only ~3 sent a logo — because the Meta **instant form can't accept a file**, so the logo becomes a multi-step email chase, and no logo = no proof = no close. **Conversation funnels fix this** — the customer drops the logo right in the chat. Carlos is standing up two more ads this week (run *alongside* the form ad; compare on **proofs delivered**, not leads):
- **① Click-to-WhatsApp (priority).** ~~The WhatsApp number is now live (Carlos is on it)~~ *(Correction 2026-07-09: it never went live — the 844 kept erroring, and the root cause is that toll-free numbers can't register on WhatsApp at all; a new local line is the plan — [[phone-number-map]].)* → activate the parked Click-to-WhatsApp setup below once the new number is registered. Objective = messaging/WhatsApp; CTA **Send Message** → opens WhatsApp to the number with the greeting pre-loaded. **Greeting = the logo-first ask:** *"¡Hola! 👋 Mándame tu logo + qué quieres personalizar (carpa/bandera/banner) y te empiezo una PRUEBA GRATIS."* They send the logo in-thread → proof same-day.
- **② Click-to-Instagram/Messenger DM (lower-lift test).** Objective = messaging, conversion location = IG/Messenger DM; same logo-first instant reply. Lowest lift (no separate number) — but Venus needs IG **messaging access** to reply (the access fix in [[meta-lead-intake-playbook]]).
- **Measure on PROOFS, not leads.** Tag each funnel; whichever yields the most logos/proofs wins the budget (form ad = cheap volume; WhatsApp/DM = logo-first → faster to the proof, which is the real close lever — [[close-cadence-kit]]).

## As-built — confirmed live config (2026-06-26)

Pulled from the Ads Manager **structure** export (config, not performance — the impression/lead/spend fields are blank because this is the build file). The second campaign as actually built:

**Campaign** `Promo N Grow - Free Proof` (`cg:120250172814030530`) — Outcome Leads, AUCTION, **$35/day at the campaign level (CBO)**, Highest-volume bid, started 6/24 6:00pm PT, pixel **`1205589804645510`**, attribution **7-day click / 1-day view**, LEAD optimization event.

| | EN ad set `c:…4020530` | ES ad set `c:…6710530` |
|---|---|---|
| Ad | `Free Proof Video - EN2` (`a:…4010530`) | `Free Proof Venus - ES2` (`a:…6700530`) |
| Lead form | `f:1484310723009381` | `f:1549698669979827` |
| Destination | Website + Lead Form → /pages/free-proof | Website + Lead Form → /pages/prueba-gratis |
| **Dynamic Creative** | **ON** (3 videos rotating) | **OFF** (1 creative) |
| **Detailed targeting** | **none** (broad) | small-biz owners · restaurateurs · food-page admins · flea/farmers market · local food |
| Age | 20–65 | 18–65 |
| Locale | — | Spanish |
| Geo | Orange County + LA County (home/recent) | same |
| Advantage Audience | on | on |

**The clean-test fix list (so the next iteration actually answers "EN vs ES"):**
1. **Budget at the campaign level (CBO) will starve one language** → move to ad-set budgets. *(Carlos, 6/26 AM.)*
2. **EN runs Dynamic Creative (3 videos), ES runs 1** → match the creative setup across both.
3. **ES has detailed interest/behavior targeting, EN is wide open** → match targeting; let only language differ.
4. **EN form is standard (no phone); swap → high-intent w/ verification** so form type is constant + phone is captured. *(Carlos, 6/26 AM.)*
5. **Age differs (EN 20–65, ES 18–65)** → align.

**Two live copy bugs (fix in place):**
- EN primary text contains literal markdown — *"booth-ready in `**5 business days from proof approval**`"* — Facebook doesn't render `**`, so users see the asterisks. Strip them.
- EN link description typo: *"…and well create a mockup"* → **we'll**.

**As-run ad copy (for reference / re-paste):**
- **EN primary:** "Got an event coming up? Message us your logo and we'll send you a free proof of your custom tent — no cost, no commitment. See it on your tent before you pay a cent. Love it? It's booth-ready in 5 business days from proof approval. Made in LA, 20 years in, and we'll happily speak your language." · Title "Logo → free proof → 5 days." · CTA SEE_DETAILS
- **ES primary:** "Mándanos tu logo y te enviamos una prueba GRATIS de tu carpa personalizada — sin costo, sin compromiso. La ves con tu logo antes de pagar nada. ¿Te encanta? La entregamos en 5 días hábiles desde que apruebas la prueba. Hechos en LA, con 20 años de experiencia, y aquí hablamos tu idioma." · Title "Mándanos tu logo para empezar 👇" · CTA SEE_DETAILS

**Strategic call (2026-06-26): don't run both campaigns as a standing setup.** The boost already did its job (proved cheap leads exist); ride it until its budget's spent, then consolidate onto this Ads-Manager campaign as the single scalable engine. At $35/day the constraint is **close-capacity, not budget** — point the energy at the **first close**, not at adding ad cells. (source: Carlos direction + senior-exec read 2026-06-26.)

## The funnel (one screen)

```
COLD (LA metro, Spanish-primary + English)
  → Venus-selfie UGC video + B-roll of real tents/canopies (vertical, captions on)
  → tap → CLICK-TO-WHATSAPP (phone confirmed inherently; opens a chat)
  → instant auto-greeting → Venus replies <5 min in her 10–4 PT window
  → "send your logo" → FREE PROOF (logo → mockup) same day
  → quote (from [[master-price-sheet]]) → 5 business days from proof approval → PAID
  → tag Source = Meta → reorder loop
```
**Optimize the campaign for the Lead/WhatsApp conversation event** — never link clicks. The WhatsApp gate solves the "they don't answer the phone" problem (the channel LA actually answers) AND confirms the number for free.

> **Free-proof rule — RESOLVED 2026-06-22 (ruling):** the free proof in this funnel is fine because it's **tent/display work ($500+ big-ticket)** — which is exactly where free proof applies. Ruling: **free proof = $500+ big-ticket items only (tents, displays, etc.); items under $500 (business cards, brochures, flyers) are excluded — design is charged.** If a WhatsApp lead pivots to small print (cards/flyers), don't promise a free proof on it. (source: Carlos direction 2026-06-22)

## The winning ad copy (primary text)

*Chosen by the 5-judge tournament — V8 won (39/50); merged with the best-scoring elements of V6, V5, V1.*

**English**
> **Logo → free proof → 5 days. That's it.**
>
> Got an event coming up? Message us your logo and we'll send you a free proof of your custom tent — no cost, no commitment. See it on your tent before you pay a cent. Love it? It's booth-ready in **5 business days from proof approval**. Made in LA, 20 years in, and we'll happily speak your language.
>
> Message us your logo to start 👇 · **CTA: Send Message**

**Español**
> **Tu logo → prueba gratis → 5 días. Así de simple.**
>
> ¿Tienes un evento en camino? Mándanos tu logo por WhatsApp y te enviamos una prueba GRATIS de tu carpa personalizada — sin costo, sin compromiso. La ves con tu logo antes de pagar nada. ¿Te encanta? La entregamos en **5 días hábiles desde que apruebas la prueba**. Hechos en LA, con 20 años de experiencia, y aquí hablamos tu idioma.
>
> Mándanos tu logo para empezar 👇 · **CTA: Enviar mensaje**

**Headline options (for the form/profile):** "Free proof with your logo — before you pay" / "Prueba gratis con tu logo — antes de pagar."

## Why this won (tournament scoreboard)

| Variant | Total /50 | Read |
|---|---|---|
| **V8 — Logo→proof→5 days mechanic** | **39 🥇** | Universally legible; the hook IS the process |
| V5 — Bilingual pride (ES-first) | 36 | Competitor judge's 9 — the hardest-to-match moat |
| V1 — Risk-reversal / V3 — Founder / V6 — Authority | 34 each | V6 = the 9 from both repeat-buyer judges (credibility) |
| V2 — Speed/deadline | 29 | Spikes for catch-up buyers, flat for vetters |
| V7 — Problem-agitate | 26 | "agency-clever," not vendor-solid |
| V4 — FOMO/catch-up | 23 ☠️ | KILLED — shaming repels the high-value buyer |

**Kept in the merge:** V8 mechanic + "no cost, no commitment"; V1 "before you pay a cent"; V6 "Made in LA, 20 years" (wins the vetting buyers); V5 bilingual "we speak your language" (the moat). **Cut:** the product list (forced a pause) + all shaming/agitation. **Fixed:** "5 days" → "5 business days from proof approval" (voice rule).

> **UGC filming update — 2026-06-22 (post-training):** Venus filmed UGC takes today; **another pass is planned tomorrow (2026-06-23)** for a clean run. Coaching for the re-do: **slow down the delivery** (she went fast on some takes) and **smooth a few English words that are hard for her to pronounce** — do gentle re-dos. She is very coachable; keep it light so she doesn't get self-conscious. **Plan:** clean run of takes 6/23 → Carlos builds the ad → **run Wednesday 6/24.** (source: Carlos direction 2026-06-22)

## Venus's selfie scripts — record Monday (3 EN + 3 ES)

15–20 sec each, phone selfie, smiling, casual, good light, vertical (9:16). Vary the first line — that's what Meta A/B-tests. Read them like you're talking to one person, not "doing an ad."

**EN-1 (the mechanic — pairs with the winning caption):**
> "Hey! Quick one — got an event coming up? Here's how easy this is: send me your logo, I'll send you a free proof of your custom tent — no cost, no commitment. You love it, it's booth-ready in five business days. Just message me your logo and I'll start it today."

**EN-2 (founder warmth):**
> "Hi, I'm Venus with Promo & Grow — a print shop here in LA, 20 years in. I help businesses show up to their events looking like a pro. Message me your logo right here and I'll send you a free mockup of your tent — free, before you pay anything. Let's get you ready."

**EN-3 (speed / season):**
> "Summer's not over — and your custom tent can still make it. Send me your logo, I'll send a free proof today, and once you approve it, you've got it in five business days. Made right here in LA. Message me and let's go."

**ES-1 (mechanic):**
> "¡Hola! Rapidito — ¿tienes un evento próximamente? Mira qué fácil: mándame tu logo y te mando una prueba gratis de tu carpa personalizada, sin costo y sin compromiso. ¿Te encanta? La tienes lista en cinco días hábiles. Mándame tu logo y la empiezo hoy."

**ES-2 (founder warmth):**
> "Hola, soy Venus de Promo & Grow — un taller de impresión aquí en LA, con 20 años. Ayudo a los negocios a lucir profesionales en sus eventos. Mándame tu logo por aquí y te preparo una prueba gratis de tu carpa — gratis, antes de pagar nada. Vamos a dejarte listo."

**ES-3 (speed / season):**
> "El verano no se ha acabado — y tu carpa personalizada todavía llega a tiempo. Mándame tu logo, te mando una prueba gratis hoy, y al aprobarla la tienes en cinco días hábiles. Hecha aquí en LA. Mándame mensaje y empezamos."

## B-roll shot list (you already have most of this)

Cut a selfie hook (first 3 sec) → B-roll proof (next 8–12 sec) → end card. Use:
1. Real printed tents/canopies at events (logos visible) — your strongest asset.
2. The "proof moment" — a logo/mockup on screen next to the finished tent.
3. Close-ups of print quality, the canopy going up, table covers/flags.
4. End card: "Free proof before you pay · 5 business days · Made in LA · message us your logo 👇" (navy/copper, logo bottom-corner).
**Rules:** vertical 9:16, **captions burned in** (most watch sound-off), minimal on-screen text, brand colors (navy `#1B2838` / copper `#C17A3A`).

## The WhatsApp flow

**Instant auto-greeting (fires when they message from the ad):**
> **EN:** "¡Hola! 👋 Thanks for reaching out to Promo & Grow! Send over your logo (any format) and tell me what you need it on — tent, table cover, banner — and I'll start a FREE proof for you, no cost, no commitment. — Venus"
> **ES:** "¡Hola! 👋 Gracias por escribir a Promo & Grow. Mándame tu logo (cualquier formato) y dime para qué lo necesitas — carpa, mantel, banner — y te empiezo una PRUEBA GRATIS, sin costo ni compromiso. — Venus"

**Venus's reply flow (during hours, first touch <5 min):**
1. Greet warm + confirm **what + event date + rough qty** (light qualify per [[lead-qualification-system]]).
2. Get the logo — if none ready: *"send whatever you've got, even a photo — we'll mock it up."*
3. *"I'll have your free proof back to you today."* → start the proof.
4. Proof → *"Love it? I'll send your quote — and we deliver 5 business days from approval."*
5. Quote from [[master-price-sheet]] (custom → Carlos). Close. **Tag Source = Meta**, log in the Sheet.
**Off-hours:** auto-reply sets expectation — *"I'll get your free proof started first thing — I'm on 10am–4pm PT. — Venus."*

## WhatsApp Business + Click-to-WhatsApp setup (Carlos, ~15 min)

Do this once so the ad has somewhere to land.

> **⚠️ KNOWN BLOCKER — 2026-06-22:** registering the WhatsApp Business number (the **844 toll-free**) is currently **FAILING** — the activation-code calls are **not coming through**. **Suspected cause:** spam-filtering / blocking on the toll-free line. **Owner: Carlos** — he's working it tomorrow (2026-06-23). Until the number activates, the ad has nowhere to land; the **higher-intent instant-form fallback** (below) is the stopgap if it isn't resolved before the Wed 6/24 launch. (source: Carlos direction 2026-06-22)
>
> **✅ ROOT CAUSE FOUND 2026-07-09 — supersedes the spam-filtering theory:** toll-free numbers **cannot be registered on WhatsApp at all** (the verification call can't navigate an IVR; SMS-to-toll-free is typically unprovisioned — WhatsApp Help Center + tyntec, checked 2026-07-09). The 844 will never activate, and no Meta support ticket fixes it. **Plan:** a **new local LA-area number** = Venus's outbound caller ID + the WhatsApp registration (real-SIM fallback if VoIP is also rejected); the 844 stays inbound-only. Step 1 below already had it right — dedicated number, not the storefront line. Full map + hygiene checklist: [[phone-number-map]]. (source: Carlos direction 2026-07-09; [[meta-funnel-review-2026-07-09]].)

1. **Get a dedicated business number** — not Venus's personal line, not the storefront line. A fresh mobile number or a Google Voice number works; it must NOT already be registered on regular WhatsApp.
2. **Install WhatsApp Business** (free app) on the phone Venus will use → register that number → build the profile: name "Promo & Grow," logo, category, **hours 10am–4pm PT**, address, website.
3. **Set greeting + away messages** (Settings → Business tools): paste the EN/ES **auto-greeting** from "The WhatsApp flow" above as the *Greeting message*; set the off-hours *Away message* ("I'll get your free proof started first thing — I'm on 10am–4pm PT — Venus").
4. **Quick replies + labels** (Business tools): quick replies for "send your logo" / "free proof"; labels = New lead → Proof sent → Quoted → Won (a lightweight pipeline right inside WhatsApp).
5. **Connect the number to Meta** — Meta Business Suite → Settings → WhatsApp accounts → Add → enter the number → verify the code (or FB Page → Settings → linked WhatsApp).
6. **In Ads Manager:** campaign objective **Engagement** (or Leads) → ad level → **Message destination = WhatsApp** → pick the connected number.
7. **Test:** preview the ad → tap → it should open WhatsApp to your business number with the greeting pre-loaded.

> The free WhatsApp Business **app** is plenty at this volume (Venus answers on the phone) — you do NOT need the paid API/Platform yet. The number is the asset; whoever holds the phone (Venus, her hours) answers the leads. **Fallback** if you'd rather skip WhatsApp setup now: use a Meta **higher-intent instant form** (phone required, prefilled) as the gate instead — slightly more junk, but live in 5 minutes.

## Audience & targeting

- **Objective:** Leads, conversion location **WhatsApp** (Click-to-WhatsApp). Optimize for leads/conversations.
- **Budget:** ABO, **$25–35/day total** across sets (≈$400 over ~12 days).
- **Geo:** LA metro, 25–30 mi around Lynwood (presence). Age 25–55.
- **Ad sets:**
  - **Set A — ES-primary cold** (majority budget): Advantage+ audience (broad, let Meta find) + interest seeds (event planning, quinceañera, party supplies, restaurants, food trucks, small-business owner).
  - **Set B — EN cold:** same geo/interests, English creative.
  - **Set C — warm retarget (optional, cheap):** site visitors 180d + IG/FB engagers 365d + **customer-list Lookalike 1–3%** (Carlos uploads the customer/reactivation list).
- **Placements:** Advantage+ placements, prioritize **Reels / Stories / Feed** (vertical video).
- **Creative per set:** 3–4 variants (different selfie hooks) — let Meta find the winner.

## Success scorecard + pass/fail (the anti-$3K guardrail)

**Economics (updated 2026-06-26):** this is a **tent funnel**, not a $400-AOV funnel — live quotes run **$1,040–$2,500** → anchor **~$1,200 AOV**, ~45–50% margin (×2.0 high-ticket, 35% floor) → **~$540 gross profit/order**. Break-even ≈ **2.2× ROAS / CAC up to ~$540**. (source: live quotes #D98–D101 + Carlos/senior-exec read 2026-06-26.)

**The inputs you measure — floor / bar / goal:**
| Metric | 🛑 Floor (diagnose/kill) | ✅ Bar (it works) | 🔥 Goal (scale) |
|---|---|---|---|
| **CPL** (high-intent form) | > $80 | ≤ $30 | ≤ $15 |
| **Lead → close** | 5% | 10% | 15%+ |
| **Qualified → close** (sent logo → paid) | 15% | 25% | 30%+ |

**What those produce** (CAC = CPL ÷ close-rate · ROAS = AOV ÷ CAC):
- **Bar** (CPL $30, 10% close) → **CAC ~$300 · ROAS ~4×** — keep feeding it.
- **Goal** (CPL ~$20, 15% close) → **CAC ~$135 · ROAS ~8–9×** — raise budget.
- **Floor** (any input red by ~$400 spend) → stop + diagnose.

**The diagnostic:** weak *lead→close* but strong *qualified→close* = a **lead-quality** problem (fix targeting/form), not a closing problem. Both weak = the **offer/close** itself.

**Decision window:** judge at **~$400–500 spend OR ~2 weeks OR ~30–40 leads**, whichever first — expect ≥ 2–3 closes. **ROAS/CAC lag** (tent close = proof → approval → 5 days → pay), so for the first 1–2 weeks track **CPL + quote-dollars** as the leading proxies. **LTV is upside** — these are reorder businesses (Josh Craig = $6,239/10 orders), so a CAC that merely breaks even on order 1 is still a win.

**Tracker (fill daily):**
| Day | Spend | Confirmed leads | $/lead | Proofs started | Quotes | Closes | Revenue | Contribution vs spend |
|---|---|---|---|---|---|---|---|---|
| … | | | | | | | | |

## Sequencing

- **Mon:** Venus records the 6 selfie hooks (above) + you pull the B-roll clips.
- **Mon–Tue:** Claude-admin assembles 3–4 ad variants (hook + B-roll + end card) + sets up the WhatsApp gate + audience + campaign; Carlos uploads the customer list for the Lookalike.
- **Wed:** launch at $25–35/day, optimize for the WhatsApp lead event.
- **Thu–Sun:** Venus works every lead **<5 min**; log Source + close signal; kill any creative >$60/lead.
- **Day 5–7:** read the two numbers → **scale the winner, or kill the test.**

## Owner lanes
- **Venus:** record selfies; work every WhatsApp lead <5 min; free proof → quote → close; log Source.
- **Carlos:** Meta account + payment; upload customer list; approve any custom/rush pricing.
- **Claude-admin:** assemble creatives; finalize copy; build campaign/audience spec; run the tracker + daily read.

## Related pages
- [[meta-lead-intake-playbook]] — the funnel Venus runs on every lead this ad produces
- [[meta-lead-form]]
- [[growth-offensive]]
- [[conversion-tracking-setup]]
- [[lead-qualification-system]]
- [[png-voice]]
- [[master-price-sheet]]
- [[launch-week-roadmap]]
