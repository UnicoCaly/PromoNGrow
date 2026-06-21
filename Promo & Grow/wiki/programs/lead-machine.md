# Lead Machine — The Master System

**Summary**: The end-to-end lead machine for Promo & Grow: one loop, five stations (Attract → Qualify → Propose → Fulfill → Reorder), bolted to a single pipeline spine (a Google Sheet + Shopify tags). This page is the canonical top-down view, the honest economics, the build sequence, and the open decisions. Each station has its own detail page; this is where they reconcile.

**Type**: funnel

**Sources**: co-CEO build session 2026-06-17 (5-station parallel design + adversarial feasibility review); draws on concierge-close.md, conversion-bridge.md, the-20k-math.md, store-and-catalog.md, closer-hire.md, png-voice.md, bilingual-spanish-moat.md, reactivation-email-sequence.md.

**Last updated**: 2026-06-17.

**Status**: Designed, not yet live. Build sequence below. The ad valve stays CLOSED until the gates in Week 1 pass.

---

## The system in one picture

Promo & Grow is one lead machine with five stations on a single spine. **Attract** ([[google-search-engine]] + near-free [[reactivation-email-sequence|email]] + Apollo) pushes high-intent LA event-display searchers to product money pages whose only door is "Get a Free Proof" — never the near-dead cart (0.18% add-to-action) (source: concierge-close.md, conversion-bridge.md). Every raw lead from every source lands in ONE place: a Google Sheet working queue + Shopify customer tags for durable state — NOT HubSpot (Carlos decision 2026-06-17). **Qualify** ([[lead-qualification-system]]) triages each lead HOT/WARM/COOL/DISQUALIFY on an event-display rubric within a 5-minute speed-to-lead window. **Propose** ([[draft-order-quote-system]]) turns a qualified lead into a Shopify draft-order quote inside ~2 business hours, anchored on the free proof and the 5-day promise, then runs the Day-1/3/7 chase on unpaid quotes. **Fulfill** ([[fulfillment-sop]]) protects the 5-business-day promise — the clock starts at **proof approval**, gated by a [[file-prep-gate|file-prep check]] that catches the 40–50% bad-file problem before it reaches a vendor — then asks for a review and flags the reorder. The reorder loop and the COOL-lead email nurture feed warm volume back to the top, so the machine compounds.

**The order of operations is the whole game: build the catch before you open the faucet.** Opening ad spend into a funnel with no tracking, no priced close, and no instant-alert bridge means paying for clicks into a blind, leaky funnel.

## Station map

| Station | What it does | Detail pages |
|---|---|---|
| ① Attract | High-intent leads via Google Search; cheaper parallel email + Apollo | [[google-search-engine]], [[conversion-tracking-setup]] |
| ② Qualify | Triage to real buyers fast; 5-min speed-to-lead; tier + route | [[lead-qualification-system]] |
| ③ Propose | Shopify draft-order quote in ~2 hrs; free proof; quote→paid chase | [[draft-order-quote-system]] |
| ④ Fulfill | 5 business days from proof approval; nothing late | [[fulfillment-sop]], [[file-prep-gate]] |
| Spine | One pipeline + tags + Slack + cadence + automation | [[pipeline-ops-spine]], [[lead-tracker-sheet]], [[shopify-tag-taxonomy]], [[slack-workspace-setup]], [[operating-rhythm]], [[zapier-automation-roadmap]] |

## ⚠️ Honest economics — read this before spending a dollar

The first-pass ad model was optimistic. A skeptical feasibility review corrected it; these are the numbers to plan against (co-CEO feasibility review 2026-06-17):

- **Paid Search is a learning test, not a revenue engine.** It exists to (a) force conversion tracking live, and (b) learn which terms produce real quote requests and at what cost. Treat success as *learning*, not month-1 ROAS.
- **Close-rate correction (load-bearing):** the proven **2.5–3% close is a WARM/concierge-queue rate** (source: concierge-close.md). Cold paid clicks convert far lower — the vault's own cold/high-traffic figure is **0.2–0.4%** (source: the-20k-math.md, concierge-close.md). Do NOT model paid leads at the warm rate. Once a paid lead is *qualified by Venus*, a concierge close of ~15–30% is plausible — but the click→qualified step is the filter, and most clicks never become qualified leads.
- **CPC reality:** LA-metro commercial event-display terms run **~$5–7 blended, $6–12+ on hero terms** (canopy tent / step-and-repeat / trade-show backdrop). The Spanish group is the bright spot (~$1.50–4, thin competition) **only if the /es/ pages are live**.
- **Expected volume:** **$500/mo ≈ 70–100 clicks ≈ 1–4 genuinely qualified leads/mo.** $1,000/mo ≈ 140–200 clicks ≈ 3–8 qualified/mo. Month 1 skews worse (a cold account burns 20–40% on junk before Search-Terms pruning takes hold).
- **Realistic CPL:** **$70–150 per qualified lead in months 1–2**, not the hoped <$40 — so a "scale when CPL < $40" trigger would likely never fire honestly. Use a contribution-margin-based trigger instead.
- **The revenue gap is real:** actual run-rate ≈ **$2,100/mo** (YTD $7,233 over 18 orders, Jan–Apr — source: dashboard.md). The **$20K/mo goal is a 9–10× gap** needing ~50 orders/mo. Paid Search realistically contributes **1–4 of those 50.** The near-term $20K levers are **email + the VIP/reorder list** (Josh @ Donut = $6,239 lifetime — source: josh-craig-donut-media.md), not paid. Peak season is **Oct–Nov**; this test launches mid-June, far from peak.

**Kill-switch:** pre-commit to a **6-week checkpoint**. If measured cost-per-qualified-lead from paid Search exceeds **~$150** or qualified-lead→close stays below **~15%**, pause paid and redirect the budget to email/SMS activation and a second hire (closer or designer).

## SLA honesty rule (protects the 4.8★)

P&G is a **reseller** — it does not produce; B2Sign/4over do (source: store-and-catalog.md). It cannot control vendor production or transit time. Therefore:

- Every customer-facing delivery promise reads **"5 business days from proof approval"** — never an unconditional "5 days guaranteed."
- The fulfillment clock **starts at proof approval**, not payment ([[fulfillment-sop]]).
- The "we hit 3 days for Donut Media" line is **killed from ad copy** — it was a rush exception, not a repeatable promise (source: josh-craig-donut-media.md).
- Quote **5–7 business days standard**, reserve **5** for rush (priced as rush). Protecting the trust stack is worth more than the marginal CTR.

## Build sequence (sequence, do NOT parallelize)

### Week 1 — gates only, ZERO ad spend
1. **(Claude Code)** Tracking is PARTLY live — Meta Pixel `1205589804645510` + Google Ads tag `AW-17631020505` are installed (build-status 6/16). Remaining: **wire the blank `google_ads_quote_label`** so `quote_request_submitted` counts as a conversion; add GA4 + tap-to-call + `/es/` form events; confirm the Free-Proof form + instant auto-reply/admin alert are on the tent, trade-show, table-cover, and flag money pages (not homepage/cart). **Hard blocker for everything paid.** ([[conversion-tracking-setup]], [[theme-build-status]])
2. **(Claude-admin)** Verify every primary conversion fires live in GA4 DebugView / Tag Assistant — this is the green-light gate, not a formality.
3. **(Carlos/VA)** Complete the six closer-workbook pricing FILL-INs: order floor $, minimum margin %, low/high markup defaults + triggers, cost-$ threshold, tier category lists — plus the catalog price sheet. Without these Venus cannot quote without escalating every job (source: closer-hire.md).
4. **(Carlos/VA)** Confirm Venus's exact hours + time zone; assign a same-day **free-proof owner**; set business hours for the after-hours fallback.
5. **(Claude-admin)** Build the "P&G Pipeline — Master" Google Sheet ([[lead-tracker-sheet]]) and lock the ONE canonical tag vocabulary ([[shopify-tag-taxonomy]]).
6. **(Carlos/VA + Venus)** Run the manual rhythm on the **existing warm queue** using the rubric + scripts + draft-order SOP. Carlos reviews every quote.
7. **(Carlos/VA)** Build the Google Ads campaign **skeleton** — but DO NOT enable until tracking verifies.

### Weeks 2–4 — open the valve small
- Enable one Search campaign at **$500/mo (~$16.50/day)**, Search-only (Partners + Display OFF), phrase/exact match, 5 tight ad groups incl. the Spanish group, geo 25–35 mi around Lynwood (presence), manual CPC cap, ads scheduled to Venus's answer hours.
- Weekly Search-Terms report → negative-keyword additions; track CPL + qualified-lead→close; report to [[dashboard]].
- Hold the first weekly 15-min scoreboard review ([[operating-rhythm]]); make the daily cadence habitual.
- **(Claude Code)** ship/confirm the Phase-1 design-resources page so [[file-prep-gate]] has a destination; run the next live order through [[fulfillment-sop]] end-to-end.
- Validate the manual Sheet↔tag sync by hand for 1–2 weeks **before** automating anything.

### Month 2+ — scale only on proof
- Scale toward **$1,000/mo only if** CPL is stable and below true contribution margin per order, AND paid leads are closing; switch to Maximize Conversions after ~20–30 conversions, then target CPA once CPL stabilizes.
- Ship Zapier automations in priority order, manual-proven first ([[zapier-automation-roadmap]]).
- File-prep roadmap: Phase 2 Canva templates (~$13/mo) → Phase 3 Claude-vision checker (~$50–100/mo) wired to the quote-form logo upload.
- Ship the `/es/` Markets hero pages; point the Spanish group at them ([[bilingual-spanish-moat]]).
- Revisit QuickBooks estimates as a future upgrade path (NOT a switch) only when volume/reconciliation justify it.

## Role split (do not overload a 1-week hire)

One person cannot be the instant-response closer (5-min SLA) **and** the end-to-end fulfillment coordinator — those are conflicting interrupt profiles (co-CEO feasibility review). For now:
- **Venus owns Qualify + Propose + Follow-up only** ([[lead-qualification-system]], [[draft-order-quote-system]]) until she graduates to quote-without-review.
- **Carlos/VA own Fulfill, file-checks, and vendor orders** ([[fulfillment-sop]]) until Venus is ready to take them on.
- **Shrink the tool surface:** run ONE working surface (the Sheet) for the first 30 days; back-tag Shopify in **weekly bulk batches (Claude-admin)**, not per-lead by Venus, until the Sheet→tag Zap is proven.

## Reconciliations (contradictions resolved)

1. **Canonical tags:** three stations proposed three tag schemes; the canonical set is the namespaced `stage:` / `src:` / `tier:` / `vip` in [[shopify-tag-taxonomy]]. Other names map onto it.
2. **Two orthogonal axes:** **stage** (where in the funnel: New → Contacted → Qualified → Quote Sent → Won/Lost → In Production → Delivered → Reorder) and **tier** (how hot: HOT/WARM/COOL/DISQUALIFY) are separate fields, never conflated.
3. **Two clocks:** speed-to-**lead** (5 min, first contact) and speed-to-**quote** (~2 business hrs, draft order sent) are different timestamps — the Sheet records both.
4. **Close-rate:** 2.5–3% is the warm-queue benchmark; establish a SEPARATE paid-lead baseline in weeks 1–4.
5. **AOV:** track concierge/draft-order AOV against ~$400 (concierge runs above the ~$350 Shopify checkout average — source: the-20k-math.md).

## Scoreboard (what the weekly review watches)

| Metric | Target | Source |
|---|---|---|
| `quote_request_submitted` (quote requests + tracked calls) | Establish baseline; not checkouts | GA4 event → Google Ads primary conversion |
| Cost per qualified lead (CPL) | Below contribution margin/order (NOT a fantasy <$40) | Ad spend ÷ qualified leads, weekly |
| Speed-to-lead (within 5 min, business hrs) | 90%+ within 5 min; 100% same day | Sheet: first-contact − arrival timestamp |
| Speed-to-quote | < 2 business hrs | Sheet: Date In vs Quote Sent |
| Quote → paid % | Warm benchmark 2.5–3%; separate paid baseline | Scoreboard: Won ÷ Quote Sent |
| Concierge/draft-order AOV | ~$400 | Shopify analytics on draft-order orders |
| On-time delivery (within 5 biz days of proof approval) | 100% — the SLA is the brand | Fulfillment Sheet promised-by vs delivered |
| Clean-file rate at the gate | ~50–60% → 70–80% → 90%+ | Sheet file-check flag ([[file-prep-gate]]) |
| Leak rate (live rows with no next step at EOD) | 0% | EOD Sheet check |
| Reviews earned / review-ask rate | Ask on 100% of delivered | review-requested tag; manual GBP/Yelp count |

## Open decisions for Carlos (consolidated)

**Zero-cost unblockers — ✅ RESOLVED 2026-06-17:**
- ✅ **Pricing framework** filed → [[pricing-engine]] (confidential ×5 / ×2.0, $100 floor, 60%/35% margin) + [[master-price-sheet]] (rep-facing). Was the six FILL-INs + price sheet.
- ✅ **Venus's hours** = 10am–4pm PT (≈11am–5pm El Salvador). **Proof owner** = Venus sends specs, Carlos proofs with her for now. Her onboarding doc confirms she's a *pure sales surface kept off production/ops* — validates the role split.
- Still open: the after-hours auto-attendant business-hours script + voicemail.

**Launch dependencies:**
- Are the `/es/` Spanish money pages live, or do we point the Spanish ad group at the EN page with a bilingual form for now?
- 3–5 premium product/booth photos for Google image assets + proofs.
- Is the Free-Proof quote form (instant auto-reply + admin alert) live on the four money pages, or is that a Claude Code build to schedule first?
- Google **lead-form extensions** (feeds the 5-min intake) vs all clicks to the on-site quote form?
- OK to wrap the (844) 883-3308 line behind a Google call-tracking number?
- ~~Install Meta Pixel?~~ ✅ already live (`1205589804645510`) — remarketing data is collecting.

**Operating choices:**
- Daily order-cutoff time; typical reorder interval; Lynwood pickup vs ship default.
- Standing weekly scoreboard slot (suggested Monday 10am PT).
- When Venus graduates to quote-without-review.
- File [[fulfillment-sop]] into the SOP Library as SOP-08?

## Lanes

- **Claude Code:** conversion tag + events, quote-form + instant alert, CTA routing, design-resources page, `/es/` pages, file-checker.
- **Claude-admin:** the Sheet template, canonical tag taxonomy, RSAs in ganas voice, weekly negatives + CPL reporting, SOP filing, Zap design, this wiki.
- **Carlos/VA:** the pricing decisions, Slack creation, Google Ads launch/toggle, the human close, approvals.

## Related pages
- [[google-search-engine]] · [[conversion-tracking-setup]]
- [[lead-qualification-system]]
- [[draft-order-quote-system]]
- [[fulfillment-sop]] · [[file-prep-gate]]
- [[pipeline-ops-spine]] · [[lead-tracker-sheet]] · [[shopify-tag-taxonomy]] · [[slack-workspace-setup]] · [[operating-rhythm]] · [[zapier-automation-roadmap]]
- [[concierge-close]] · [[conversion-bridge]] · [[the-20k-math]] · [[closer-hire]] · [[dashboard]]
