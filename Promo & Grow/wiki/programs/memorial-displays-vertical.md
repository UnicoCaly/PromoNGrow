# Memorial Displays Vertical

**Summary**: The offer side of the funeral-homes vertical, built 2026-08-06/07 — a reusable tension-fabric memorial display system sold B2B on a razor-and-blades model (the home owns the frame once, reorders a printed tribute per service), plus gator-board memorial posters and wall art. Landing page v1 is built and **staged, not deployed**; deep research and an Etsy channel plan are filed in `Marketing/`. Pairs with [[funeral-homes-outbound-list]] (the list side).

**Type**: campaign

**Sources**: `Marketing/Mortuaries and funeral homes. /PNG-Funeral-Vertical-Strategy-Brief_8.6.2026.md` (research, 4 agents / 230+ sources, + launch checklist; note the folder name ends with a period + space) · live Shopify admin 2026-08-06/07 · Carlos rulings 2026-08-06/07 (Claude Code session, AskUserQuestion).

**Last updated**: 2026-08-07.

---

## The offer

- **Flagship (B2B):** Pillowcase Backdrop (Fabric Tension Display) — live product `pillowcase-backdrop-fabric-tension-display`. 36″×90″ **$288** / 48″×90″ **$450** — the 48″ was **raised from $350 on 2026-08-07 (Carlos); both 48″ Shopify variants updated live** the same day. Double-sided print = free upgrade. Replacement tribute graphics **$150 (36″) / $188 (48″)** — the reorder unit. [[master-price-sheet]] carries the line (updated 8/7).
- **Posters:** gator-board memorial boards at **$14/sq ft** (18×24 $42 · 24×36 $84 · 36×48 $168), easel-ready. **No Shopify product yet** — checklist item, approval-gated.
- **Wall art (existing SKUs):** floating-frame canvas from $98 · edgeless SEG fabric frame from $108 · standoff acrylic from $198.
- **Claims:** "5 business days from proof approval" · "2-business-day rush available" · "you approve the proof before we print." **No free-proof claim** — the system is sub-$500, outside the free-proof scope ([[png-voice]]).

## Decisions (Carlos, 2026-08-06/07)

- **Funeral homes first (B2B)**; hybrid buy flow — cart for SKUs, quote lane for bulk/multi-location.
- Aesthetic = **"Memorial luxe"** (ivory/champagne field, serif-led) — a sanctioned one-page exception to the white-70 rule ([[visual-system]]); accent switched to brand **dark copper #A66629** (8/7); the tribute art itself keeps gold-foil tones (it depicts the printed product).
- **English-only v1.** The Spanish flank is documented in the brief as a later land grab — "letrero para funeral" / "lona para difunto" / "recuerdos de novenario" have effectively no US specialist ranking.
- Page phone = **(213) 817-9188** everywhere on the LP — a deliberate exception to the 844-collateral rule; see [[phone-number-map]].
- The Economics/ROI worksheet section was **removed from the page** (8/7); the reseller math stays in the brief (for the Apollo ROI one-pager).

## Landing page v1 (staged — NOT deployed)

`Website/Funeral Memorial LP/png-memorial-displays-lp-v1.html` — self-contained mock (fonts + images embedded). Fixed full-viewport hero over the receiving-room render; the tribute-swap signature (one frame, three crossfading tribute designs) sits beside the how-it-works steps; **add-to-cart widget uses Shopify cart permalinks against the live variants** (checkout happens on promongrow.com — works from the mock today); family lane (posters + wall art); navy wholesale close. Private preview artifact: https://claude.ai/code/artifact/185111ee-ccea-4851-98c7-7329c0f8e683

**Path to live (from the brief's checklist):** Carlos design sign-off → create the gator poster product (live mutation, Carlos-gated) → convert to `templates/page.lp-memorial-displays.liquid` on the [[free-proof-landing-page]] template patterns (Claude Code lane) → wire the quote form to the native contact POST → real install photos before paid traffic (current imagery = AI renders, same as the flyer). The flyer PNGs in `Marketing/` still show $350 and the 844 number — **re-export needed** (Carlos's ChatGPT flow).

## Research (2026-08-06 — load-bearing findings; full data + URLs in the brief)

- ~15,401 US funeral homes, ~75% independent; cremation 63.4% (2025) → 82.3% by 2045; homes are actively hunting per-case add-on revenue. Services are becoming venue-flexible events (banquet halls 30.3%).
- **Empty category:** nobody sells a reusable fabric memorial display system into the vertical — memorial printers sell disposable foam, trade suppliers (Bass-Mollett/Messenger) rep-gate their pricing, trade-show vendors have zero memorial styling. First-to-vertical position.
- Reseller math: comparable personalized GPL line items run $225–$395 → ~$157/service margin on the $188 tribute at a $345 family price; frame pays back in ~3 services. The $188 48″ reprint undercuts the trade-show channel ($273–$310) by 31–39%.
- Weakness: speed posture — specialists ship same-day; our 5-day standard needs the 2-day rush prominent. A same/next-day **local LA pickup tier** is the one thing national players can't match (undecided; would need an ops ruling).

## Etsy lane (evaluated 2026-08-07 — awaiting go/no-go)

Worth running for posters/welcome signs: the category leader built 7,000+ customers on exactly this product at $50–99 with free-proof + ships-24h-after-approval. Fees verified ~11–14% baseline. Projections (assumption-based, brief §5): month 1 = 5–15 orders → month 3 = 25–60 ($2–5K/mo) → month 6 = 60–150 ($5–12K/mo gross, ~45–60% margin). Kill criteria: <20 orders/mo by month 3 after ~$1K ads. **Two open Carlos decisions:** shop identity (PromoNGrow vs a dedicated memorial shop name) and an Etsy-lane "ships next business day after proof approval" processing SLA (listing-scoped; canon phrasing untouched on P&G properties).

## Open items (lanes)

1. LP design sign-off — **Carlos**.
2. Gator poster product in Shopify (3 size variants) — **Carlos-gated mutation**, then Claude-admin.
3. Liquid conversion + quote-form wiring + smoke test — **Claude Code**.
4. Flyer re-export at $450 / copper / (213) line — **Carlos** (ChatGPT render flow).
5. Etsy go/no-go (identity + SLA) — **Carlos**; then the 15-listing build — Claude-admin.
6. Cold-email angle for [[funeral-homes-outbound-list]] can now pitch this offer + the LP as destination — draft lives on [[cold-email-segment-copy]] when written.

## Related pages
- [[funeral-homes-outbound-list]] — the Apollo list side (58 verified contacts across ~60 companies; the "validate the offer before the nationwide pull" gate now has its offer)
- [[master-price-sheet]] — carries the $288/$450 pillowcase line
- [[phone-number-map]] — the (213) LP exception
- [[free-proof-landing-page]] — the template patterns the Liquid build reuses
- [[visual-system]] · [[png-voice]] · [[dashboard]]
