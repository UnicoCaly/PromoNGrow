# Meta Funnel Review — 2026-07-09 (deep read)

**Summary**: Full-funnel audit of the Meta lead-ad test at day 16 — live Meta Ads data, the Meta Test Leads sheet, Gmail, Slack, and Shopify reconciled. Verdict: the ad engine is healthy ($5.08 CPL, improving weekly); the funnel breaks at logo-collection (10.3%) and quote→payment (0/10). ~$13.3–15.2K of live invoice-sent quotes have received no post-quote follow-up.

**Type**: concept

**Sources**: Meta Ads Manager via MCP live read 2026-07-09 (account 817668650804149); `PNG · Meta Test Leads` sheet (117 rows, read 2026-07-09); Gmail audit of carlos@proagobranding.co + hello@ cc's (2026-07-09); Slack #promo-and-grow + #promo-and-grow-artwork-proofer (2026-07-09); Shopify Admin orders/drafts/customers (2026-07-09).

**Last updated**: 2026-07-09.

**Metric**: CPL $5.08 blended · lead→logo 10.3% · lead→quote ~9% · quote→paid **0/10** · Meta-attributed revenue $0.

---

## Ad performance (campaign "Promo N Grow - Free Proof", launched 6/24, $35/day CBO)

| Metric | Free Proof Video — EN2 | Free Proof Venus — ES2 | Blended |
|---|---|---|---|
| Spend (thru 7/8) | $368.74 | $134.38 | $503.12 |
| Leads (form) | 71 | 28 | 99 |
| CPL | $5.19 | $4.80 | **$5.08** |
| CTR | 3.23% | 2.70% | — |
| CPM | $28.45 | $20.47 | — |
| Frequency | 1.76 | 1.92 | — |

Weekly trend (campaign level): W1 6/25–7/1 = $265.31 / 46 leads / **$5.77 CPL**; W2 7/2–7/8 = $237.67 / 53 leads / **$4.48 CPL**, CTR 2.89%→3.22%, frequency 1.82→1.49. Improving on every axis; no fatigue. (source: Meta MCP 2026-07-09.)

- The ≤$50 pass gate / ≤$30 "great" gate from [[meta-ugc-launch-kit]] is cleared ~6–10×.
- Opportunity score 96/100; Meta's top recommendation = **conversion-leads optimization** (feed qualified/converted statuses back → est. 24% lower cost per qualified lead). Blocked by the stage-discipline gap below.
- Account activity log shows **the 6/26 fix list never shipped**: budget still campaign-level CBO (EN took 73% of spend; ES is cheaper per lead but starved), and no form-swap events. Phone capture did improve ~6/26 (100/117 sheet leads have phones).
- ES2 CTR is trend-flagged "declining" but ES2 remains the cheapest lead source; not a creative emergency.

**Corrections to the record** (supersedes the 6/26 "~28–30 leads/24h" figure on [[dashboard]] and the 7/6 "55 leads/$400/CPL $7.27" milestone): actual volume is **~7.3/day (week 1) rising to ~11.3/day (week of 7/6)**; 117 tracker leads / 99 Meta-form leads by 7/9; blended CPL $5.08. The 28–30 figure does not match the tracker, Slack ("all 48 customers" on 6/30), or Meta's own lead counts.

## The funnel, reconciled (6/24 → 7/9)

| Stage | n | Rate |
|---|---|---|
| Ad spend | $503 | — |
| Leads in tracker | 117 (99 Meta-form + IG/LP stream) | $5.08 CPL |
| Phone on file | 100/117 | 85% |
| **Logo received** | **12** | **10.3%** ← constraint #1 |
| Quoted (Shopify invoice_sent) | 10–11 prospects, ~$13.3–15.2K deduped | ~9% of leads |
| **Paid** | **0** | **0%** ← constraint #2 |

Shopify confirms $0 Meta-attributed revenue: all 8 paid orders since 6/1 ($3,184.56 total; AOV ~$400) are pre-existing concierge customers, 100% via draft orders; zero self-serve checkouts store-wide, ever. (source: Shopify Admin 2026-07-09.)

## Where the funnel actually leaks (evidence-ranked)

1. **No post-quote follow-up.** The [[deal-followup-playbook]] rule "no quote dies from silence" is not running on the Meta cohort: 9 quote emails went out 6/25–7/9; Gmail shows **zero visible replies and zero follow-up touches** on the 6/25–6/29 batch (Nunez ×2, Barsamian ×2, Gonzales, Almazán, Trejo, Edu — now 10–14 days cold). The Day-1/3/7 + takeaway cadence exists on paper only.
2. **Logo collection is the gate.** 88% of leads never send a logo, and the proof can't start without it (current process). Venus 7/1: "For everyone else I'm waiting on their logos." Contributing friction: first-touch email asks for four things at once (logo + product + qty + date) — Carlos's punchier one-ask version (6/25) wasn't adopted; no chat channel to receive files easily.
3. **The channel mismatch Venus already diagnosed.** Venus 7/3: "Many customers tell me they're busy and often end the call within the first few seconds or ask me to send them a message instead." WhatsApp Business has been "coming Monday" since 7/1; lead Jemmy explicitly requested WhatsApp contact and couldn't be served. First 2 days of phone channel were also lost to Crexendo VoIP failures (6/23–6/25).
4. **Budget objections at the $944–$1,600 quote level** (Sijifredo "above his budget, will check with his wife"; Almazán "saving"; Jazz Trejo "saving up, wait ~10 days"). Step-down path (feather flags $120–185) is coached but there is no split-pay/deposit option on invoices.
5. **Ops leaks at hot moments**: Omar Flores's proof rendered as a broken inline `cid:` image 6/29 — he said so — **no visible fix in 10 days**; Julie Boyd sent logos 7/1, no visible proof back; LP mailto placeholder text "(Attach your file before sending.)" leaks into customer emails; one lead lost to a typo'd domain (hotmsil.com); cadence numbering drifts (notes say 3rd follow-up, Next Action says 4).
6. **Carlos is a single point of failure**: every price (Venus asks per-item despite [[master-price-sheet]]), every proof, every invoice PDF (no Order Printer access). Founder selling-time in the window went to warm-up traffic + an unsent 50-draft golf sequence, ~1 direct lead email (Barroso).
7. **Meta stage discipline dead** → algorithm starves: all 117 rows frozen at "Contacted"; qualified/converted never set (except 3 lost). This blocks the 24%-cheaper-qualified-leads optimization and the "5–10 conversions teach the algorithm" strategy from [[venus-brief-2026-06-26]].
8. **Data model unused**: Est $, Spec, Proof Status, Event Date, Product Interest ~0% filled; source/language tagging abandoned after 6/30 (ES leads showed 6/8 interested where tagged — promising, unconfirmable at scale).

## Live pipeline (invoice_sent, deduped ~$13.3–15.2K)

Juan Carlos Nunez $2,500+$1,400 (re-sent as D108/D109) · Aram Barsamian $1,040/$1,840 (marked lost 6/30 — reconcile) · Pedro Gonzales $944 · Sijifredo Barriga $1,119/$951 + $185 flag · Adrian Almazán $1,400 (parked, saving) · Jazz Trejo $800 · Sacha Edu $1,400 · Alain $1,888 · Marcus Savage $1,600 · Veronica Garcia $985 · (pre-ads: Yoni Dino $720). (source: Shopify draft orders 2026-07-09.)

**Hot right now (7/8–7/9, from Slack + Gmail + sheet):** Silvia (loves proof; enclosed-tent ask; $2,200 setup priced) · Marcus Savage (replied, logo in, quote D115, event "soon") · Julie Boyd (logos sent 7/1, awaiting proof, follow-up 5) · George Carrillo (10×20 quote sent 7/9) · Nina (logo in, proofs made 7/9) · Ras (re-inbound 7/9 with phone) · Lupe Zarate (logo in, needs spec). **Institutional sleepers:** Juan Barroso (Lynwood USD CTE — asked for a district product menu, got a website pointer) · Jessica Villalobos (South Gate — 3 banners + bus wrap quote request 7/8, unanswered).

**Urgent non-Meta (same audit):** Century Eye Care complaint 7/8 — "received a different design than we had approved," with side-by-side photo, unanswered (reputation risk; she's the 6/18 $472 win).

## Funnel math (the $20K read)

At current $35/day ≈ $1,050/mo → ~210 leads/mo at ~$5 CPL. Meta-cohort quote average ≈ $1,300 (range $800–$2,500 — tents, 3–6× the ~$400 store AOV).

| Scenario | Lead→quote | Quote→paid | Closes/mo | Meta revenue/mo | Cost per close |
|---|---|---|---|---|---|
| Today | 9% | 0% | 0 | $0 | ∞ |
| Fix follow-up only | 9% | 25% | ~4.7 | ~$6.1K | ~$223 |
| + logo/chat fix | 20% | 25% | ~10.5 | ~$13.7K | **~$100** |
| Stretch | 25% | 33% | ~17 | ~$22.5K | ~$61 |

The middle scenario alone (+ the ~$2–2.6K existing run rate) ≈ **$16K/mo — inside reach of the $20K goal at unchanged ad spend**; cost per close ~$100 clears the <$130 canonical bar ([[growth-offensive]]). The decisive lever is quote→paid, then logo-rate; CPL is already a non-issue. Every 10 points of quote→paid ≈ +$2.5K/mo at current volume. (Rates are targets, not measurements — nothing has closed yet; the 25% quote→paid assumption is the number the next two weeks must prove.)

## Recommendations (lanes noted)

**Do not change the ad creative.** CPL improving, CTR rising, frequency 1.49, zero anomalies — swapping creative resets learning to fix a problem that lives downstream. (Analysis; Carlos decides.)

1. **72-hour close sprint on the stuck pipeline** — run the [[deal-followup-playbook]] pattern-interrupts (diagnostic → down-sell → takeaway/1-2-3) on all ~11 open quotes, hottest first (Silvia, Marcus, Julie, George, Nina, then the 6/25–6/29 stale batch). *(Venus, Carlos assist on pricing calls.)*
2. **Turn WhatsApp Business on** — it has been "Monday" since 7/1; leads are asking for it; it is also the logo-collection fix (files-by-chat). Use as follow-up channel first; CTWA ad later as a separate campaign. *(Carlos.)* **Update 7/9: root cause found — the 844 toll-free CANNOT be registered on WhatsApp** (Meta lists toll-free as unsupported; verification call can't pass an IVR, SMS-to-toll-free typically unprovisioned — source: WhatsApp Help Center + tyntec FAQ, checked 2026-07-09). Plan: new **local LA-area number** for Venus's outbound + WhatsApp registration; 844 stays inbound-only (it is the P&G number on all collateral — [[png-entity-boundaries]]; the new line must NOT be a Proágo number).
3. **Speculative proofs — stop waiting for logos.** For interested leads, pull the logo from their IG/website and send the proof unrequested ("already made this for you"). Converts the 88% logo-silent pool. *(Venus + Carlos/graphxsource; batch of 10 to start.)* **Update 7/9: IN MOTION — Carlos handed Venus the play (pull 10–20 logo-silent leads + their logos).**
4. **Mark Meta stages honestly** (qualified on every real conversation; converted on first close; lost on dead) → unlocks Meta's conversion-leads optimization (est. −24% cost per qualified lead). *(Venus, 10 min/day.)*
5. **Give Venus the keys**: rep-facing [[master-price-sheet]] (exists — she's asking Carlos per-item), Order Printer access, proof-QA (attachment not inline-cid). *(Carlos, once.)*
6. **Split-pay / deposit option on $900+ quotes** (Shop Pay Installments or 50% deposit draft) — answers the recorded objection pattern. *(Carlos decision + Claude-admin setup.)*
7. **Ad account hygiene, not surgery**: move budgets to ad-set level (or duplicate ES into its own campaign) so ES gets a fair test; keep both creatives running. *(Carlos, 15 min.)*
8. **Answer today**: Century Eye Care complaint; Jessica/South Gate quote; Barroso district menu (a real one-pager — institutional AOV potential). *(Carlos/Venus.)* **Update 7/9 (Carlos):** Karen/Century Eye Care — Venus replied 7/8 with Carlos's Slack-provided message (no cc to hello@, which is why the Gmail audit read it as unanswered — reinforce the cc-hello@ rule). Barroso — handed to Venus; she replied + made an intro call; **blocked on Carlos finalizing a shareable district product catalog** (Claude-admin can draft from [[master-price-sheet]] + [[product-size-guide]] + [[product-application-guide]]).
9. **Sheet minimal-viable columns**: enforce Est $, Proof Status, Source, Meta Stage; log call outcomes (answered/VM); fix duplicates (Ras ×2, Juli/Julie). *(Venus; Claude-admin can add validation.)*

## Related pages
- [[meta-lead-intake-playbook]] · [[meta-ugc-launch-kit]] · [[deal-followup-playbook]] · [[venus-work-queue]] · [[dashboard]] · [[the-20k-math]] · [[growth-offensive]] · [[master-price-sheet]] · [[conversion-bridge]]
