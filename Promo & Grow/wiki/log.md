# Log

Append-only, newest at top. Each entry: `## [YYYY-MM-DD] <op> | <title>` (ingest / query / lint / decision / update).

---

## [2026-06-20] decision | Quote-conversion firing-path bug found (workflow audit) + fixed

Ran an adversarial Workflow audit of the Google Ads quote-conversion wiring **before** pasting the label (the money gate). **Finding (3/3 skeptics agreed, pathProven=false):** the quote-submit conversion was double-broken — (1) the modal pushed `{event:'quote_request_submitted'}` to `dataLayer` (array push) while the conversion listener in `png-tracking-pixels.liquid:136` waited on a DOM CustomEvent `png:quote_request_submitted` that **nothing dispatched**, so the Meta `Lead` + GA4 `generate_lead` + Google Ads `conversion` were all **unreachable code — even with a label set**; (2) the label was blank; (3) native POST+redirect would kill an on-submit beacon anyway. **Without this, pasting the label would have produced ZERO counted conversions, silently, while spending ad money.**

**Fix (Claude-admin):** fire the conversions on the server-rendered `form.posted_successfully?` success page in `snippets/png-quote-modal.liquid` (root + mirror), guarded on settings — reliable (fresh page) and repairs the dead Meta `Lead` immediately. Safe to ship with a blank label (the `conversion` line stays guarded off). **Pending:** push to live + Carlos creates the "Quote submitted" action + pastes the label + verify. Documented on [[conversion-tracking-setup]] (setup steps revised) + [[theme-build-status]] (admin task 3). Theme files edited locally, **not yet pushed** (Carlos runs the push). Re-lint clean.

## [2026-06-20] update | Launch-Week build (week of Mon 6/22) + dashboard refresh

Built the week's execution layer so a fresh window can run it self-contained:
- **[[launch-week-roadmap]]** (new) — the HUB. Two lead lanes (outreach / inbound), day-by-day Mon–Fri (Monday seminar → Venus on Tier 0 / Shadi $5,838; Tue ads-on-if-green + cold-email load; Wed optimize + reactivation calls; Thu warm email send; Fri review), owner-tagged **[V]/[C]/[CC]/[CA]/[VA]**, the outreach + inbound/ads implementation, **honest gates** (ads gated on the quote-label; cold-email warming not blasting; Venus = throttle), success metrics, and Venus's full resource kit.
- **[[venus-sales-seminar]]** (new) — the runnable ~90-min Monday kickoff: mission/offer/moat, the two lanes, the closing method (Value Statement + assumptive + free-proof CTA + follow-up ladder + objection bank), working the queue, pricing guardrails, tools/rhythm, live role-play, Venus's first 3 actions.
- **[[dashboard]] refresh (→ 2026-06-20):** added the "▶ This week" banner; **pipeline reconciled to 6/19** (~$10K active + ~$5K revive; Karen $472 WON; Leslie excluded `sogate.org`; Cristian ~$3.5–4.6K revive); **cold-email → "in deployment / warming, no blast yet, July first sends"**; **paid → "activating lean this week once the label verifies"**; **margin** reconciled to the resolved ×5/×2.0 + 60%/35% ([[pricing-engine]]); Related expanded.

Indexed both new pages (Programs + Concepts), **page count 60 → 62**, footer updated. Re-lint clean. Nothing in `raw/` touched.

## [2026-06-20] ingest | Hormozi owned-list campaign model → new page email-campaign-engine

Ingested "Alex Hermozi - This Email Campaign Generates Sales [Full Breakdown].pdf" (37pp, the "$2.4M in 5 days" warm-list campaign). Different lane from the Murray cold series — this is **monetizing the owned/warm list**, so it got its **own page** [[email-campaign-engine]] (not folded into [[outbound-method]]). Captured: email as a **compounding $0-CAC asset** ("401k" frame, smooths revenue volatility / raises enterprise value); the **quarterly promotional campaign** (a conversion mechanism = big promise + deadline + quick-win "taste"; Hormozi's "challenge" → PNG's **seasonal bundle promo where the free proof is the taste**); the **Value Equation** (dream/likelihood/time/effort); the **~4 seasonal "wrappers"/yr → autopilot** cadence (+ the "local lists fatigue faster, need more variety" note); **give-to-ask ratio**; selling the same offer across mediums; "trust smart people." **Honest caveat flagged prominently:** Hormozi's $ figures are from a $250M info-product list — principles/cadence transfer, the numbers don't; PNG's realistic scale = the [[summer-of-futbol-campaign|+$4–8K]] seasonal push.

Cross-linked bidirectionally from [[email-library]] + [[summer-of-futbol-campaign]]; indexed under Concepts; **page count 59 → 60**. Re-lint clean. This is the strategic "why/cadence" hub for PNG's warm email program (complements [[email-library]] = templates, [[reactivation-email-sequence]] = a specific arc, [[email-send-preflight]] = the send SOP).

## [2026-06-20] ingest | Cold-email blueprint (3rd Murray PDF) → enriched outbound-method

Ingested " Cold Emailing in 2026: The Only System SDRs and AEs Need.pdf" (39pp, the definitive Murray email blueprint) into the existing [[outbound-method]] page rather than a new page (same methodology family). **New material added:**
- **Persona levels** (L1 end-users / L2 middle-mgmt / L3 execs — adapt the *why* to each; "above/below the line"). PNG note: owner-led SMBs collapse the levels into one person, so the real axis is **business type**, already mapped in [[cold-email-sequence]] / [[sell-guide]].
- **Personalize without breaking scale** — one context line / "contextual outreach" on top of the repeatable structure.
- **Subject lines** — clarity beats cleverness; avoid salesy/markety (spam triggers); use `intro` / name / company / `[topic] for [company]`, 3–4 words.
- **Objection handling over email** — don't argue the objection in-thread; acknowledge → double-down → sell the next step; bank by category.
- **Calendar invites / confirmation** — give them something to bite on; PNG-adapted to the free-proof confirmation (restate product + 5-day-from-approval + one next action).
- **Compounding-math frame** (tiny input gains → ~150% output) + **responses = the #1 driver**, folded into the Tracking section. Extended the follow-up ladder (FU4 name-only; never >2 business days; reset to fresh list after ~5; return in 6–8 wks).

Updated [[index]] entry + footer; page count unchanged (59, enrichment not a new page). These three Murray PDFs are now all distilled. Most relevant pieces (subject-line rules, business-type persona adaptation, tightened follow-up ladder, objection-over-email) are **ready to apply to the live [[cold-email-sequence]] before the Monday launch** — offered to Carlos, not yet applied. Re-lint clean.

## [2026-06-19] update | Applied outbound-method tactics 1–3 to the live playbooks

Turned [[outbound-method]] from reference into operating procedure on [[deal-followup-playbook]] (+ light touch on [[venus-sales-playbook]]):
1. **Assumptive language** — new section + passive→assumptive swap table; rewrote the cadence-table CTAs and the [[venus-sales-playbook]] Day-1 email CTA from permission-asking ("want me to start that proof?") to assumptive ("I'll get your free proof started — send your logo"). Scoped to the *ask*; left the discovery opener warm.
2. **Tight ABAB email micro-sequence** — new subsection: FU1 benefit-of-the-doubt / FU2 "what are your thoughts… 1-2-3" (highest-reply) / FU3 assumptive close-the-loop, every-other-day (24–48h), capped at ~4–5 touches then Nurture.
3. **Objection bank** — expanded the quick-reference table (5→9 rows) and added a copy-paste base-response bank (price / think-about-it / send-info / already-have-a-printer / faster / design / who-is-this / Vistaprint), each ending on the free-proof next step; floor + no-discount-without-Carlos guardrail preserved. Re-lint clean.

## [2026-06-19] ingest | Outbound method (Conor/Connor Murray cold call + cold email)

Ingested two new `raw/` training PDFs added 6/19 — "The Ultimate Guide to Cold Calling in 2026" (Conor Murray, "Cold Call Mastery") and " 10 Years of Expert Cold Email Advice in 36 Minutes - Connor Murray" — into a single robust concept page, [[outbound-method]]. Both run on one spine: the **Value Statement Framework** (who/why/what, value first), **assumptive (not passive) language**, downward-inflection tonality, **"coil the spring"** (batch lists + per-segment templates upfront), **24–48h ABAB follow-up cadence** (70–80% of meetings come from follow-ups; the "please give me your thoughts on this" line; assumptive break-up), an **objection response bank** ("double down and sell the next step"), and **tracking three inputs** (open/reply/meeting — or dials/answers/meetings).

Adapted to PNG explicitly: Venus is a **closer**, not an SDR booking for an AE, so the "meeting/time" next step = **the free proof / quote conversation**; volume figures are directional at her one-closer 10–4 scale, not a quota. Added PNG-specific bilingual call/email scripts (marked outward copy). Cross-linked from [[venus-sales-playbook]], [[deal-followup-playbook]], [[cold-email-sequence]] (bidirectional); indexed under Concepts; page count 58 → 59. These two PDFs are now distilled (removed from the coverage-gap watchlist by virtue of having a page). Re-lint clean.

## [2026-06-19] update | Daily Venus work-queue rebuild — Tier 0/2 refreshed from live Shopify (orders + drafts). Changes: Karen Tenas #D95 → won ($472 paid 6/18); Leslie Consuegra #D96/#D97 (`sogate.org`) excluded → Carlos's lane; Cristian Lopez ~$3.5–4.6K board job surfaced to revive; Jose Gonzales added to recent buyers. ~$10K active pipeline + ~$5K to revive; no new pri:hot/warm contacts off-board.

## [2026-06-19] update | Theme delivery-copy honesty sweep + popup price fix (run in-repo)

Ran the two Carlos-approved theme fixes directly in the repo (not handed to Claude Code). Scope was bigger than the wiki flag: "guaranteed" was a false-delivery promise in **10 strings**, not just the trust ribbon. Swept all to honest copy (root + mirror copies):
- **"guaranteed" → softened.** Trust ribbon + popup + contact "5-day delivery [—/,] guaranteed" → **"5-day delivery from proof approval"**; how-it-works/index "Nationwide guaranteed." → "Nationwide."; SEO-landing + AEO + tent-page + article.aeo FAQ "to ship — guaranteed, nationwide" → "to ship — nationwide." Files: `announcement-bar`, `popup-exit-bundle`, `custom-contact`, `custom-how-it-works`, `custom-seo-landing`, `custom-aeo-faq`, `page.tent-10x10/15/20.json`, `article.aeo.json`, `index.json`.
- **Popup price.** Stale "$910 / saves $160+" → **"$848 / saves $150+"** (synced to the builder's ≈$848.30 lowest config; [[master-price-sheet]]).
- Wording chosen by Carlos = "from proof approval". Verified zero residual "guaranteed" / "$910" / "$160+" in the live Dawn theme.

Deploy: Carlos runs the targeted `shopify theme push --allow-live` (`index.json` excluded — editor-locked). **Two items left for Carlos:** (8) change the homepage How-it-works step in the theme editor; (9) delete the dead, unreferenced `pagefly-home.liquid` (still has GUARANTEED slides). See [[theme-build-status]].

Also recorded this session: order cutoff on [[fulfillment-sop]] — paid + file-clean **before 1pm PST** starts the 5-day clock same business day; after 1pm = next business day (Carlos 2026-06-19). The reorder-interval FILL-IN there is still open.

## [2026-06-19] lint | Low-priority polish pass (status banners, citations, coverage gaps, legacy-name reconcile)

Cleared the remaining low-priority punch-list from the 6/18 audit:
- **Historical-status banners** added so concluded pages don't read as live: [[day-1-run-of-show]] ("executed — Day 1 ran June 8, Venus live") and [[hiring-and-screening]] ("concluded — Venus hired").
- **Stat-ammo sourced:** [[sell-guide]] §"Stat ammo" now cites the 4over "how to sell" guides + sell sheets, with a "conversational proof points, not written guarantees" guardrail.
- **Coverage gaps tracked:** new "Raw sources not yet distilled" section on [[index]] naming the 8 raw files that have no page (PRD/SETUP/REVIEW, the 3 wireframe/mockup HTMLs, the revenue-scoreboard + month-1/2 content-calendar XLSXs, the customer-import CSV, the sales-knowledge-quiz HTML) — flagged superseded where true.
- **Cross-refs:** [[sell-guide]] + [[venus-sales-playbook]] added to [[venus-onboarding-kit]] Related.
- **Lint hygiene:** the two changelog mentions of the retired `shopify-deploy-workflow` slug de-bracketed (they were tripping the link scan). Full re-lint after = **58 pages, 0 broken links, 0 orphans.**
- **Legacy-name contradiction RESOLVED — and it flips my 6/18 flag.** Raw evidence is lopsided: ~100 "PrintCo Direct" mentions (incl. "PrintCo Direct Inc." in the brand brief + every outward reframe Venus uses) vs. **2** "Print Code Direct," both confined to SOP-06. **Canonical = "PrintCo Direct Inc."** (matches [[dashboard]]'s ruling); the SOP-06 / `pcd.ordant.com` / "PCD" spelling "Print Code Direct" is a transcription variant of the same entity. Corrected [[sop-library]] (had been left asserting "Print Code Direct") to align + note the variant. **No longer a Carlos open item.**

## [2026-06-18] update | Thorough review + lint fixes (vendor rename, index, links, cost-per-sale, cohorts)

Full read-through of CLAUDE.md schema + index/dashboard/log + a content-page skim and a `raw/` accuracy spot-check, then applied a lint punch-list. Much of it was already handled by the parallel 6/18 audit below (index page-count correct at 58 content + 3 system, re-verified by `find`; the dangling `shopify-deploy-workflow` link already converted to plain text and [[carlos]] + [[claude-code]] pages created, so a full link scan = 0 dangling). Remaining fixes this pass:

- **Vendor rename finished:** SwordXpress / SwordX → **Soar Dist USA** on the last two live-vendor mentions the audit had not yet reached — [[closer-hire]] (workbook vendor routing) and [[slack-workspace-setup]] (#orders post format). [[pricing-engine]], [[store-and-catalog]], [[fulfillment-sop]] already carried it.
- **Cost-per-sale standardized:** canonical = **<$130 per closed deal** (hardened 6/15 [[growth-offensive]]); the older "<$60–70" marked **superseded** on [[competitive-war-room]] (both instances + a real reconciliation note replacing its dangling "see the contradiction below") and [[ninety-day-roadmap]] (Phase-4 table + gate).
- **Reactivation cohorts reconciled:** four-row table on [[reactivation-outreach]] defining ~162 curated legacy phone list / 647 `Reactivation-Apr2026` / 574 `Reactivation-2026` / ~1,221 dormant Wix email universe + how they relate; cross-linked from [[dashboard]] (new bullet) and [[summer-of-futbol-campaign]] (its two dangling "see Contradictions" pointers re-pointed here).
- **Speed-to-lead:** ONE canonical tiered rule on [[lead-qualification-system]] §(b) — 5-min paid/high-decay · <1hr warm inbound (Venus's hours) · same-day organic — reconciling the 5-min / <15-min / <1hr variants.
- **Stale stamps → 2026-06-18:** [[venus-work-queue]] (Tier 0 refreshed 6/18, stamped 6/17) + every page edited this pass.
- **Dashboard bookkeeping:** added a **Reconciled 2026-06-18** block marking settled the cohorts, cost-per-sale, speed-to-lead, sending-domain (promotengrow.com cold vs promongrow.com live — two domains, not a typo), the PrintCo Direct legacy name (canonical; "Print Code Direct" = transcription error), and the vendor rename.

Beyond the punch-list: removed two **dangling "see Contradictions" pointers** in [[summer-of-futbol-campaign]] (no such section existed). Updated [[index]] + [[dashboard]] stamps/footers. Did not touch `raw/`.

## [2026-06-18] lint | Full wiki audit + reconciliation (8-cluster parallel review)

Ran a thorough 8-reviewer audit of all 58 content pages against current ground truth + format rules, then applied a robust reconciliation. **Reconciled (HIGH):**
- **Tracking** — corrected the stale "nothing installed" claim across [[conversion-tracking-setup]], [[google-search-engine]], [[pipeline-ops-spine]], [[dashboard]] → tracking is **PARTLY LIVE** (Meta Pixel `1205589804645510` + Google Ads `AW-17631020505` installed; only `google_ads_quote_label` blank).
- **Pricing** — [[store-and-catalog]] stale "2.5–3x markup" → resolved ×5/×2.0 + $100 floor + 60%/35% margins ([[pricing-engine]]); bundle "$910"/"$595" flagged stale-pending-builder-sync.
- **Vendor** — SwordXpress → Soar Dist USA (+ Tradebanner) across store-and-catalog, fulfillment-sop, pricing-engine, closer-hire.
- **SLA honesty** — removed unconditional "guaranteed / garantizado / es una garantía" from [[fulfillment-sop]] outward copy + [[spanish-money-page-copy]] (7 lines); flagged the live theme trust-ribbon "guaranteed" for Claude Code. Retired the literal "3-day Donut Media" claim from OUTWARD copy (kept as internal history) on [[png-voice]], [[josh-craig-donut-media]], [[positioning-and-personas]].
- **No-HubSpot** — [[meta-lead-form]] + [[growth-offensive]] "HubSpot" → Google Sheet pipeline.
- **Slack** — "empty workspace" corrected (progobrandingdept has #promo-and-grow) on [[fulfillment-sop]], [[slack-workspace-setup]], [[index]].
- **Stale open-quotes** — [[venus-sales-playbook]] + [[venus-work-queue]]: #D77 now cold; Shadi Safai $5,838 (= Smile Klub Dental, deduped).
- **Status** — [[summer-of-futbol-campaign]] EN email SENT 6/17.
- **AOV** — [[the-20k-math]] $400 relabeled bundle-TARGET (measured ~$350).
- **Legacy name** — sop-library invoice subject → "Print Code Direct" [Carlos to confirm legal name].
- **Dashboard / index** refreshed: live pipeline (~$12K), run-rate ~$2,100/mo, $50K north star, tracking partly-live, page count corrected to 58.
- **Broken links resolved** — created [[carlos]] + [[claude-code]] stub pages (fixes both everywhere); delinked the `shopify-deploy-workflow` memory slug.

Verified the reactivation tally (1,504 orders / 40 accounts / 86% 12mo+) is correct — **rejected the audit's miscount**. Re-lint: 58 pages, ZERO broken links, ZERO orphans.

**Flagged for Carlos:** exact legacy legal name (PrintCo vs Print Code Direct); the live theme trust-ribbon "5-day delivery — guaranteed" needs softening (Claude Code); the bundle-builder "$910" price sync (Claude Code); order-cutoff time + reorder-interval FILL-INs ([[fulfillment-sop]]). **Low-priority polish remaining (logged):** status banners on a couple of historical pages (day-1-run-of-show, hiring-and-screening), sell-guide stat-ammo citation, a few nice-to-have cross-refs, and citing uningested dev docs (PRD/SETUP/REVIEW/wireframes/customer-CSV/revenue-scoreboard).

## [2026-06-18] update | Merged + hosted the branded Large-Format catalog

Merged my P&G cover + the 4over white-label LFC + my back-cover CTA → **14-page branded catalog** (pdfunite). Shopify Files caps at 20MB, so compressed 28MB → **5.87MB** (rasterized 200dpi, recombined via Chrome) and **hosted on the Shopify CDN**: `cdn.shopify.com/s/files/1/0731/3886/4164/files/Promo-and-Grow-Large-Format-Catalog.pdf` (GenericFile 35955350077476, READY). Venus links it in warm follow-ups — never cold-attach. Files in "P&G Marketing Collateral/": Promo-and-Grow-Large-Format-Catalog.pdf (28MB print master) + -web.pdf (5.87MB hosted) + cover/back HTML/PDF source. Link noted on [[sell-guide]].

## [2026-06-18] update | Last 4 sell sheets ingested + P&G catalog cover/back developed

Read the remaining sell sheets individually: SS_1082 Window Graphics, SS_1085 Aluminum Heavy-Duty/directional, SS_1088 Sidewalk A-frames (already covered), SS_1094 Tabletop Retractables (already covered) → folded Window Graphics (3 types) + Aluminum directional/wayfinding into [[sell-guide]]; full sell-sheet set now ingested. Developed a P&G-branded catalog **wrap** — premium navy cover + off-white back-cover CTA (Venus contact, free-proof / 5-day-from-approval, IG/reviews, "Helping Brands Promote & Grow") → "P&G Marketing Collateral/PNG-Large-Format-Catalog-CoverBack.pdf" (+ HTML source + preview PNG). Wraps the 27MB white-label 4over LFC (host + link, never cold-attach). Cover+back alone doubles as a small emailable "Signs & Displays" intro piece. Catalog also being built by Carlos in Claude Design.

## [2026-06-18] update | Ingested 4over sales collateral → [[sell-guide]]

Ran a 6-reader workflow over the 4over collateral and built [[sell-guide]] (Venus enablement): product knowledge + sell angles + objections + cross-sell triggers for EDDM (direct-mail reactivation hero), Large Format & signage (banners / yard signs / flags / decals / rigid-sign ladder / banner stands / compliance), Majestic premium print (business-card upsell), and the **2026 election-year** campaign play. Includes a cross-sell cheat sheet + stat ammo. Linked from [[venus-sales-playbook]]. Guardrails: quote from [[master-price-sheet]] only, never name 4over/B2Sign (lean on "locally produced in LA" — Glendale plant), free proof + 5 biz days from approval. (SS_1082/1085/1088/1094 too large to batch-read — re-ingest individually if wanted. Catalog rebrand still on hold — Carlos building in Claude Design.)

## [2026-06-18] update | Venus email signature + hosted headshot

Hosted Venus's headshot on the Shopify CDN (`cdn.shopify.com/s/files/1/0731/3886/4164/files/venus-castro-headshot.png`, MediaImage 35953724948516, 1254×1254). Built 3 paste-ready email-signature options (A photo+CTA+trust [rec primary], B compact [replies], C trust-forward) wired with IG `instagram.com/promongrow` + review link `g.page/r/CV_K7jgJCVkPEBM/review` — files in "P&G Marketing Collateral/" (venus-email-signature-FINAL.html). New 4over sales collateral (white-label LFC catalog, sell sheets, "how to sell" guides) dropped in raw/ — catalog P&G-branding ON HOLD (Carlos building it in Claude Design); the "how to sell" sheets = Venus enablement, to fold into [[venus-sales-playbook]] when ingested. ⚠️ Don't attach the 27MB catalog to cold email — host + link only.

## [2026-06-18] update | Auto queue rebuild — Tier 0 refreshed from live drafts (~$12K open quotes: Shadi Safai $5,838 across 3, #D77 $3,400, Leslie $1,250, Yoni $720, Karen $472 fresh today). Tier 2 unchanged (no new orders since 6/15).

## [2026-06-18] update | Built the PNG cold-email segment copy

Wrote [[cold-email-segment-copy]] — ready-to-paste, segment-tailored cold-email copy for the [[apollo-net-new-list]] segments, on the [[cold-email-sequence]] cadence + deliverability rules. Full 3-touch EN sequences for event planners + breweries (+ ES Touch-1 for planners), Touch-1 openers for caterers / real estate / party rentals (partner angle), a segment angle table, and a subject-line bank. Honest SLA ("5 business days from proof approval") throughout. Drops into Apollo from the P&G mailbox once connected + the list revealed.

## [2026-06-18] update | Apollo two-brand setup (page + PDF); enrichment hit a wall

Filed [[apollo-two-brand-setup]] (how to run P&G + Proágo on ONE Apollo seat — per-brand mailbox, folders/prefixes, pros/cons) + a 2-page architecture/walkthrough **PDF** ("Apollo-Two-Brand-Setup.pdf", parent repo). Apollo account check: 1 mailbox (`carlos@proagobranding.co`, Proágo), 0 sequences, **4,128 lead credits**. The gap before any P&G send: connect a P&G sending mailbox (cold domain).

Enrichment of the top 27 prospects via MCP `apollo_people_bulk_match` did **NOT match** (0 records, **0 credits**) on first_name+org or first_name+domain — Apollo's match needs full name / email / LinkedIn, which the people-search masks. Reliable path recorded on [[apollo-net-new-list]]: reveal in the Apollo UI by adding the saved search to a `PNG ·` list/sequence (reveals on add), from the PNG folder/mailbox.

## [2026-06-17] update | PDF for Venus, daily queue auto-rebuild, Apollo net-new list

Delivered three: (1) a branded 2-page **PDF** (follow-up playbook + work queue) → "Venus Onboarding Kit/PDF/Venus-Playbook-and-Queue.pdf" (generated from HTML via Chrome headless; HTML source alongside). (2) A **daily auto-rebuild** of [[venus-work-queue]] — durable weekday 7:13am PT cron (job 451f3bd6) that re-pulls live orders; SESSION-ONLY (fires while Claude Code is open; auto-expires 7 days — re-arm weekly, or move to a cloud routine for hands-off). (3) [[apollo-net-new-list]] — net-new LA prospecting via Apollo across 5 ICP segments (event planners ~2,750, real estate ~4,100, catering ~380, breweries ~38, party rentals ~9). Decision-makers pulled (names masked); emails/phones need Apollo enrichment (credits) — pending Carlos's go. Cold supply → [[cold-email-sequence]]; responders → Venus.

## [2026-06-17] update | Follow-up playbook + Del Rio/Smile Klub revive; email-engagement path

Both open deals (#D77 Del Rio $3,400, Smile Klub) went cold — not answering Carlos or Venus. Decision: **do NOT pause Venus** (her queue is full of warmer leads — Fútbol inbound, 11 recent-buyer reorders, reactivation hot-23). Built [[deal-followup-playbook]] — the canonical follow-up cadence + pattern-interrupt toolkit (takeaway / 1-2-3 reply, down-sell, diagnostic), objection table, Won/Nurture/Dead discipline, ganas templates. Updated [[venus-work-queue]] Tier 0 to the revive protocol.

Email engagement: Carlos wants the last-10-email engagers added to Venus's list. Per-recipient opens/clicks are **NOT exposed via the Shopify connector** (no engagement segment; `marketingActivities` returns empty; segments are tag/order/subscription-based only — verified 2026-06-17). Path: export/tag Clicked+Opened from Shopify Email campaign reports → tag `eng:hot` / `eng:warm` → Claude-admin merges into [[venus-work-queue]]. Repeat-purchaser + subscribed-reactivation segments offered as proxies. Documented on [[deal-followup-playbook]].

## [2026-06-17] update | Built Venus's work queue from live order data

Pulled live Shopify orders (last ~60 days) and built [[venus-work-queue]] — her prioritized start-here queue for 6/18: **Tier 0** close-first (#D77 $3,400 Del Rio/Temo, Smile Klub), **Tier 1** Summer-of-Fútbol inbound (email confirmed SENT 6/17 by Carlos), **Tier 2** reorder/upsell on 11 recent non-institutional buyers (product + angle; `sogate.org`/institutional excluded), **Tier 3** reactivation hot-23 + whales. Notable: Pathita Whitaker (VIP $2,566) reorder + cross-sell; German Hernandez @ Airgas links to the 62-order whale; event-adjacent buyers (Cynthia banners, Cristian/Salsa Culichi food brand) flagged for tent/display cross-sell. Slack: corrected [[slack-workspace-setup]] — workspace `progobrandingdept` has #promo-and-grow (Carlos↔Venus) + #promongrow_site_builder-order_manager (not empty).

## [2026-06-17] ingest | Library ingest COMPLETE — all 9 clusters, +18 pages (50 total)

Resumed the workflow after the limit reset; the 6 pending clusters finished. Filed 18 new pages: build-specs → [[concierge-conversion-build]], [[quote-app-evaluation]], [[bilingual-build-spec]], [[email-send-preflight]], [[customer-journey-map]], [[ninety-day-roadmap]], [[spanish-money-page-copy]]; growth-offensive → [[growth-offensive]], [[cold-email-sequence]], [[meta-lead-form]], [[competitive-war-room]]; venus-kit → [[venus-onboarding-kit]], [[venus-sales-playbook]]; sop-library → [[sop-library]], [[day-1-run-of-show]]; summer-of-futbol → [[summer-of-futbol-campaign]]; status-and-misc → [[theme-build-status]], [[reactivation-outreach]].

Material corrections / news:
- **TRACKING:** build-status 6/16 shows Meta Pixel `1205589804645510` + Google Ads `AW-17631020505` ARE live; only `google_ads_quote_label` is BLANK (quote submits not yet counted). Supersedes the older "nothing installed" note — corrected [[dashboard]] + [[lead-machine]].
- **THEME:** Phase 1 (verify bridge) + Phase 2 (organic baseline) COMPLETE as of 2026-06-16 (Dawn 15.x, id 171153293348). See [[theme-build-status]].
- **LIVE DEALS:** #D77 $3,400 (Del Rio Brewing / ask for Temo); Smile Klub Dental ($1,788 fix / $4,800 full).
- **BUNDLES:** Carlos confirmed the **custom on-site builder is the price source of truth**; the Shopify bundle products ($668/$823/$857) are stale → Claude Code to sync up to the builder. Recorded on [[master-price-sheet]].
- **SUMMER OF FÚTBOL:** EN email send-ready for Jun 17 2026; +$4–8K target; hero = Watch-Party Kit (Event Pro Bundle $857); order-by Jun 26. See [[summer-of-futbol-campaign]].

Contradictions to reconcile: AOV ~$350 current vs ~$400 bundle-target; speed-to-lead 5-min ([[lead-machine]]) vs <15-min (scorecard) vs <1hr (growth-offensive); reactivation universe 162 curated vs ~1,221 email segments (Reactivation-Apr2026 647 + Reactivation-2026 574); cost-per-sale <$60–70 (6/08) vs cost-per-closed-deal <$130 (6/15); cold domain promotengrow.com vs promongrow.com; legacy name PrintCo Direct vs Print Code Direct; theme guide (raw/CLAUDE.md) superseded by the live 6/16 build (nav/footer/logo).

## [2026-06-17] ingest | Library ingest (partial — 3/9 clusters; hit session limit)

Launched a 9-cluster background workflow to ingest the full operating library. **3 clusters completed + filed:** [[hiring-and-screening]] (people), [[email-library]] + [[content-engine]] (programs). **6 clusters FAILED on the account session/usage limit** (resets 3:20pm PT 2026-06-17): build-specs, growth-offensive, venus-kit, sop-library, summer-of-futbol, status-and-misc — resume after reset (workflow is resumable: same script, cached agents return instantly).

Also built [[reactivation-call-queue]] (deals) from PNG-Venus-Reactivation-CallList.csv: **162 lapsed legacy PRINT/sign accounts** (1,504 lifetime orders; 40 with 10+ orders; 86% are 12mo+ lapsed). Venus completed run-1 (call+email) week of ~Jun 9. Run-2 strategy = value-rank the top accounts + **cross-sell the event-display line**; email sequence carries the long tail; SMS gated on consent (most show Accepts-SMS=no).

New facts (filed to [[dashboard]]): email list **647** on Reactivation-Apr2026; **Email 1 sent Apr 15 2026** (opens+clicks confirmed), Emails 2–15 + flows READY; SHOWUP = free ship over $500; projected passive email revenue **$800–1,700/mo** (unverified); content engine = 20+ posts/mo, **56 Canva designs built**, pillar mix Education 35/Product 30/Client 25/Promo 10. Contradictions to reconcile when the rest ingests: bundle pricing (round vs strike-through), abandoned-cart 2-vs-3 emails, pillar-mix + cadence (Blueprint vs agency guide), Make.com vs [[zapier-automation-roadmap]] tooling overlap. Shopify connector lacks `read_apps` scope (can't audit installed apps via API).

## [2026-06-17] ingest | Pricing framework + Venus context (partial — big-library drop)

Carlos dropped his full operating library into raw/ (~40+ unique docs + many macOS duplicate copies — ` 1`/` 2`/`copy`). Ingested the revenue-critical core this pass: created [[pricing-engine]] (CONFIDENTIAL — ×5 low-ticket / ×2.0 high-ticket, $100 floor, 60%/35% min margin, vendor routing 4over/B2Sign/Tradebanner/Soar Dist) and [[master-price-sheet]] (rep-facing set prices). This **RESOLVES** the pricing `[FILL IN]`s that were gating [[draft-order-quote-system]] and Venus quoting — updated that page (gaps → resolved), [[dashboard]], [[closer-hire]], [[lead-machine]], [[index]].

Confirmed (PNG-Venus-Onboarding-Context-for-Cowork.md): Venus Castro, San Salvador El Salvador (CST, ~1hr ahead of LA), **hours 10am–4pm PT**, $15/hr (+5%/3mo), **pure sales surface kept OFF production/ops** (validates the role split), lead tracking = Shopify tags, route-through pricing for the trial, institutional accounts (South Gate, Lynwood/LUSD, Nova Storage) = Carlos-only / DNC for Venus. $50K = 12–18mo north star (AOV + repeat/institutional lever); $20K = near-term path. Proofs today: Venus sends specs, Carlos proofs with her.

NOT yet ingested (proposed next as a structured workflow): build specs (Concierge-Conversion, Quote-App-Eval, Bilingual, Email-Preflight, Customer-Journey-Map, 90-Day-Roadmap, Spanish-Money-Page-Copy); the Growth-Offensive pack (ColdEmail, Meta lead-form, Competitive War Room, Revenue-by-Source scoreboard); the Venus onboarding kit (~160-lead call list, ramp, scorecard, roleplay, cheat sheet, first-call/follow-up playbooks); the email library + plug-and-play templates; the content engine + calendars + social guide; the Summer of Futbol campaign; the customer CSV (~640 rows); site mockups/wireframes. Heavy duplication flagged for cleanup (raw is immutable — dupes noted, not deleted).

## [2026-06-17] decision | Lead machine designed — 13 pages, ad valve gated on tracking

Co-CEO build session: 5-station parallel design + adversarial feasibility review (7 agents). Carlos's calls this session: ad budget **$500–1K/mo lean**; first paid channel **Google Search**; quotes standardized on **Shopify draft orders**; pipeline = **Google Sheet + Shopify tags** (NOT HubSpot). Created the master [[lead-machine]] + 12 station pages: [[google-search-engine]], [[conversion-tracking-setup]], [[lead-qualification-system]], [[draft-order-quote-system]], [[fulfillment-sop]], [[file-prep-gate]], [[pipeline-ops-spine]], [[lead-tracker-sheet]], [[shopify-tag-taxonomy]], [[slack-workspace-setup]], [[operating-rhythm]], [[zapier-automation-roadmap]].

Feasibility review corrected the plan (filed honestly on [[lead-machine]]): the warm 2.5–3% close must NOT be applied to cold paid leads (cold = 0.2–0.4%); LA CPCs ~$5–7 ($6–12 hero terms); $500/mo ≈ 1–4 qualified leads/mo; realistic CPL $70–150; paid Search is a learning test, not a revenue engine (run-rate ~$2,100/mo vs the $20K goal — peak is Oct–Nov). Killed the SLA overpromise in ad copy ("guaranteed", "3 days for Donut Media") → "5 business days **from proof approval**". Role split: Venus owns Qualify/Propose/Follow-up; Carlos/VA own Fulfill. Tag conflict reconciled to canonical [[shopify-tag-taxonomy]]. Kill-switch: 6-week checkpoint (pause paid if CPL > ~$150 or close < ~15%).

HARD GATE: no ad spend until the Google tag + GA4 + `quote_request_submitted` + call conversions install and verify live (Claude Code lane — [[conversion-tracking-setup]]). Pricing FILL-INs still blank (Carlos). Connectors checked: Shopify ✅, Gmail ✅, Slack ✅ but empty (zero channels).

## [2026-06-17] decision | Resolved: $20K target live, Venus hired, AOV ~$400

Carlos confirmed, resolving first-ingest flags: **live revenue target = $20K/month** (the April $5–8K "bridge" figure is superseded); **Venus is hired** and ~1 week into onboarding (started ~week of Jun 9), on the warm-lead queue; **AOV tracked at ~$400** (goal-math figure; ~$350 is the historical Shopify-checkout average). Updated [[dashboard]], [[the-20k-math]], [[closer-hire]]. Still open: review counts, legacy-voice sweep, uningested specs, workbook `[FILL IN]`s, trust letters.

## [2026-06-17] ingest | First ingest — PNG context library

Ingested 6 sources from `raw/`: PNG-Master-Context-Playbook.md, PNG-Brand-Strategy-and-Voice-Brief.md, PNG-Full-Context_4.14.2026.md, PNG-Closer-Onboarding-Workbook.md, PNG-SMS-Marketing-Playbook.md, PNG-Company-Creative-Brief-for-Andrea.md.

Created 13 content pages + 3 system files:
- **brand/**: [[png-voice]], [[positioning-and-personas]]
- **concepts/**: [[concierge-close]], [[the-20k-math]], [[conversion-bridge]], [[bilingual-spanish-moat]], [[store-and-catalog]]
- **programs/**: [[reactivation-email-sequence]], [[sms-marketing]]
- **people/**: [[closer-hire]], [[josh-craig-donut-media]]
- **deals/**: [[south-gate-account]], [[vip-reactivation-list]]
- **system**: [[dashboard]], [[index]], this log.

Contradictions / ambiguities flagged (full list in [[dashboard]] "To resolve / open"):
1. Revenue target: $20K/month (May) vs $5–8K/month bridge (April).
2. AOV: ~$400 (the $20K math) vs ~$350 (Shopify, April).
3. Google review count and Yelp count vary between sources.
4. Closer "Venus" — onboarding workbook written as if hired, but posts described as still open in May; status to confirm.
5. Voice register: April "shop-foreman" superseded by May *ganas* growth-partner voice (documented as superseded on [[png-voice]]).
6. ~8 referenced deliverables (build specs, Spanish copy, job posts, roadmap, journey map) are not yet in `raw/`.
7. Closer workbook still has many `[FILL IN]` placeholders.
8. Lynwood Unified / Kaiser Permanente trust letters not yet retrieved.
