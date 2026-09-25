# Apollo Net-New Prospect List

**Summary**: A net-new LA prospecting list from Apollo — decision-makers at small businesses that are natural buyers of branded event displays + print. Built 2026-06-17 across 5 ICP segments (thousands addressable). Contact info (email/phone) requires Apollo **enrichment** (credits) before outreach. This is renewable **cold supply** for the email lane — not Venus's warm phone time.

**Type**: source-summary

**Sources**: Apollo people search (apollo_mixed_people_api_search), pulled 2026-06-17; ICP per [[positioning-and-personas]] + the [[reactivation-outreach]] industry mix.

**Last updated**: 2026-06-22.

---

## The rule for using this list
Cold prospects → the **[[cold-email-sequence|bilingual cold-email sequence]]**, NOT Venus's phone. Enrich → load into an Apollo sequence → **only responders graduate to Venus's [[venus-work-queue]]**. Machines do volume; Venus closes warm (see [[deal-followup-playbook]]). Names are masked and emails/phones are hidden until enriched (Apollo prospecting limit).

## Segments + addressable pool (LA / Long Beach / Pasadena · 1–50 employees · owners/founders/execs)

| Segment | In Apollo | Fit / P&G angle |
|---|---:|---|
| **Event planners / producers** | ~2,750 | 🟢 Best fit — recurring tents, backdrops, step-and-repeat, table covers |
| **Real estate brokerages** | ~4,100 | Open-house feather flags, A-frames, banners, yard signs, expo table covers |
| **Catering** | ~380 | Branded tents, table covers/throws, feather flags for catered events |
| **Breweries / craft bev** | ~38 | Festival tents/canopies, table covers, feather flags, banners |
| **Party rentals / inflatables** | ~9* | Mixed — some are **wholesale/partner** targets (supply them custom tents), some compete |

*Totals are Apollo's matched-record counts at these filters — **thousands of renewable net-new LA prospects.** The "party rental" tag was loose; treat as partner-channel candidates.*

## Starter prospects (this pull — enrich these first)

**Event planners** — Lisa Go— (Owner, Details Event Planning) · Kiersten Ro— (Co-Owner, LB Event Planning & Design) · Melissa Bu— (Owner & CEO, Blue Moon Event Planning) · Carole Gr— (Owner/Designer, Bright Blue Events) · Adee Dr— (Founder/Producer, Event Pros LA) · Charley Ki— (President & Owner, Bluebell Events) · Michelle Ne— (Founder, Onederland Events)

**Breweries** — Chris Ge— (Owner/Partner, Paperback Brewing) · Jesse Su— (Co-Owner/Head Brewer, Ten Mile Brewing) · Chelsey Ro— / Ben Fa— (Benny Boy Brewing) · Teo Hu— (CEO, Crowns & Hops) · Harmony Sa— / Levi Fr— (Long Beach Beer Lab) · Barry Ho— (CEO, The Bruery & Offshoot)

**Catering** — Nathaniel Ne— / Rachel Qu— (Contemporary Catering) · Jonathan Da— (President & CEO, Love Catering) · Erez Le— (Owner, Savore Catering) · Laura Sa— (Owner/Chef, Dish Catering)

**Real estate** — Tyler Th— (Owner/Broker of Record, Maltese Real Estate) · Aaron Ma— (Founder & CEO, APPA Real Estate) · David No— (President/CEO, Boardwalk Real Estate) · Scott Ka— (CEO/Founder, Circle Real Estate) · Keston Ba— (Broker Owner, Choice Real Estate)

**Party rentals / wholesale-partner candidates** — Pedro Ma— (Owner, Elite Tents and Events — supply custom tents) · Edgar Ab— (Owner, EZ Inflatables) · Arthur Ba— (COO, Magic Jump)

> **EZ Inflatables pulled (2026-06-22):** EZ Inflatables, Inc. (Edgar) was removed from Venus's Batch-1 cold-call list — they **manufacture tents & flags**, so they're a competitor / possible white-label supplier, not a cold buyer. Routed to Carlos as a **sourcing / partner lead**.

## Next step — revealing contact info

**WORKING method (confirmed 2026-06-22) — search → match-by-ID, two steps via the Apollo MCP:**

1. **People Search** (`apollo_mixed_people_api_search`) — **FREE discovery.** Returns each prospect's **Apollo person ID** plus exact org name, title, and `has_email` / `has_direct_phone` booleans. Last names are still masked at this step — but the person ID is the key.
2. **People Bulk Match** (`apollo_people_bulk_match`) keyed **by that Apollo person ID** — this is the unlock. Returns full name, **Apollo-verified work email**, company phone, LinkedIn, and firmographics. Cost: **1 lead credit per match, 0 for misses.**
3. **Direct/cell dials** are NOT returned by the basic match — they require a separate **direct-dial reveal** (spends direct-dial credits).

> **MCP limitation confirmed 2026-06-22 — owner direct/cell dials are NOT retrievable through the connected Apollo MCP.** There is **no `reveal_phone_number` parameter** on the match tools and **no phone-enrichment-status tool exposed**; a live single-match test returned only the **company line**. So the programmatic match path yields **verified work email + COMPANY phone only**. Owner cell/direct dials require Apollo's in-UI **"Access mobile number"** button (spends direct-dial credits; ~**4,000** available, untouched). Plan outreach accordingly: email + company line are scriptable end-to-end; owner cell is a manual UI step when a specific high-value target warrants it.

**The failure mode to avoid:** a plain match on **first-name + company name returns 0**. This is exactly why the earlier programmatic attempt looked like it "did not resolve." You MUST grab the Apollo record ID via search FIRST, then match by ID — never match on the masked name + org alone.

> **Superseded 2026-06-22 — prior note kept for the record:** Programmatic enrichment via `apollo_people_bulk_match` was recorded as having **"did not resolve" (2026-06-18)** (0 matched, 0 credits) — attributed to the masked last names. That diagnosis was incomplete: the real cause was matching on **first-name + company** instead of the Apollo person ID. The search → match-by-ID path above is now the standard method; the Apollo-UI "add to a `PNG ·` list to reveal on add" path remains a valid fallback (same lead credits; do it from the PNG folder + P&G mailbox per [[apollo-two-brand-setup]]). Then the bilingual [[cold-email-sequence]] sends; responders graduate to Venus.

**Enriched so far:** Tier-1 of **Batch 1** was enriched 2026-06-22 — **37 verified contacts** (36 companies; FormDecor has two — owner Fritz Williams + VP Rolando Ferilli), 37/37 verified emails, 33/37 with company phones → file `Fishing Call Sheets/PNG-Fishing-Batch1-Enriched.csv` (do not edit; another process owns it). See [[outbound-fishing-playbook]] / [[venus-work-queue]].

> **UPDATE 2026-06-22 — FULL Batch-1 enrichment complete (supersedes the Tier-1-only line above):** the entire batch is now enriched — **77 owner-level contacts with Apollo-verified work emails** (37 Tier-1 + 40 Tier-2/3). Tier 2 (F&B brands) = **15**; Tier 3 (agency / partner targets) = **25**. Discovery used a fan-out of free people-searches; matched by Apollo person ID (1 lead credit/match); **100% of attempted IDs matched.**
> - **Coverage:** **66 of 79 rows** carry a COMPANY phone; the rest have verified email only.
> - **Two not enriched:** **EZ Inflatables, Inc.** (Edgar) — PULLED, manufacturer of tents/flags → Carlos sourcing/partner lead (see note above); **Bespoke Bohéme** (Kate) — not found in the Apollo people-search, reveal via the Apollo UI.
> - **3 contacts to verify before contacting** (already flagged in the Sheet's Notes): **Thomas Parziale** (Visionary Entertainment — Apollo resolved an odd org), **Daryl Twerdahl** (Village Catering — email on a different org's domain), **Jennifer Disotell** (Tap Trailer — sister-brand email).
> - **Credits:** ~**78 Apollo lead credits** used 2026-06-22 for the full batch; the direct-dial pool (~4,000) is untouched.
> - **Deliverables:**
>   - Google Sheet **"PNG · Fishing Batch 1 — ENRICHED (all tiers · 2026-06-22)"** → https://docs.google.com/spreadsheets/d/1k03bXzYzd87IwZ7B7M4HaRGMa_culA16yQNIv3KyZX0/edit (same Drive folder as "PNG · Fishing Call Tracker — Batch 1"). It is a **NEW** sheet (a drop-in enriched version): the Google connector can create files but cannot write cells into the existing tracker, so the original tracker still has empty Email/Phone columns.
>   - Local files: `Fishing Call Sheets/PNG-Fishing-Batch1-Enriched.csv` (rich detail, all tiers) and `Fishing Call Sheets/PNG-Fishing-Batch1-TRACKER-enriched.csv` (tracker-schema, used to build the Sheet). Another process owns these — do not edit.

## Related pages
- [[cold-email-sequence]] · [[meta-lead-form]] · [[growth-offensive]] · [[venus-work-queue]] · [[deal-followup-playbook]] · [[positioning-and-personas]] · [[lead-machine]]
