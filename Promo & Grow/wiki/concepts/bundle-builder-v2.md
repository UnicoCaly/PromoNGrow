# Bundle Builder v2

**Summary**: The staged Apple-grade rebuild of the /collections/bundles bundle builder (`custom-bundle-builder-v2.liquid`), produced by an 8-variant interactive UX tournament (2026-07-01). Replaces the dropdown-card v1 UX with a smart-default board: land on a complete, already-discounted kit and change anything inline. Free-proof-first finish. Staged, not live.

**Type**: concept

**Sources**: `Bundle Builder Tournament/SCOREBOARD.md`, `Bundle Builder Tournament/final/png-bundle-final.html`, `sections/custom-bundle-builder-v2.liquid`, repo state verified 2026-07-09.

**Last updated**: 2026-07-09.

---

## The tournament (2026-07-01)

8 genuinely distinct **working interactive prototypes** (real selection state, live price, 15% math, functional flows) judged by the 5 buyer personas on engagement / intuitiveness / trust / conversion / polish (source: `Bundle Builder Tournament/SCOREBOARD.md`):

| Rank | Builder UX | /250 |
|---|---|---|
| 1 | v7 Visual Tile Gallery (showroom) | 213 |
| 2 | v8 Smart-Default Board (fastest path) — **chosen base** | 212 |
| 3 | v2 Live Single-Canvas (Watch Studio) | 210 |
| 4–8 | v1 wizard 207 · v3 preset-first 206 · v6 spec-sheet 205 · v5 savings-meter 192 · v4 quiz 183 | |

**Why v8 won as base despite v7's aggregate**: v8 led the two finish-predicting criteria (intuitiveness 9.2, conversion 9.0) and took both friction-averse buyers (small-biz 44, mobile vendor 45); v7's weakness (an empty stage to start) is exactly what they rejected, and v7/v2's best moves graft cheaply onto v8 but not the reverse.

**Merge** = v8 board + v7 brand-color swatch (recolors the live SVG booth; the one interaction 4 of 5 judges singled out) + v2 staggered booth-assembly animation + v6 "email me this setup" + a quiet PO/invoice line. Hook: *"Here's a complete booth. Change anything."*

**Kill lessons** (mirror the round-1 home lessons): no quiz gate before a price (v4, killed by 3 judges) · no gamified "unlock 15%" meter — reads as coupon-clipping to premium buyers (v5) · a cold procurement register kills warmth (v6) though its forwardable spec was worth grafting.

## The UX (as built)

- Lands pre-filled on **Event Pro** (10×10 tent + 2 feather flags + stretch throw) already showing Regular struck → Bundle → "You save 15%". No empty stage, no dropdowns.
- Every piece is a tactile row: Included badge, live price, inline "Change" tray of option cards, flag qty stepper (1–4), Remove. An "Add to your setup" chip shelf covers build-from-scratch, trade-show pieces (display/backdrop), and add-ons. Presets (Event Vendor / Event Pro / Trade Show / scratch) are a compact switch-kit strip.
- Live SVG booth preview assembles piece-by-piece and recolors to a chosen brand swatch (labeled an illustrated preview; the free proof confirms real color).
- 15% engages at 2+ pieces (soft nudge below that, never a lock). Honest math throughout; the bundle "from" price is $848 (the floor = 10×10 tent + banner + stretch cover, bundled) — consistent with [[master-price-sheet]] and the live exit-popup copy.
- **Finish is concierge-first** per the [[conversion-bridge]]: primary CTA "Get a free proof of this setup" opens an itemized review modal ("email me this setup" + one quiet PO/invoice-friendly line) → builds a `_proof_request`-tagged cart + readable cart note → redirects to `/pages/free-proof`. Add-to-cart stays a quiet text link (self-serve intact, not the lead).

## Technical (the section)

`sections/custom-bundle-builder-v2.liquid` (~80 KB): all CSS scoped under `.pgbb2` (no theme leakage); vanilla JS; representative prices baked in as the offline/editor fallback, then live prices + variant ids hydrate from `/products/<handle>.json` (same engine as v1, per-fetch fail-safe); gated to `collection.handle == 'bundles'` or a force_show setting; preset "Bundle Builder v2". Statically verified (JS `node --check`, schema JSON parse, scope audit) — **not yet run against the store**. CTAs point to `/pages/free-proof` (URL fix applied 2026-07-07).

## Current state + open items (verified in repo 2026-07-09)

- **Staged, not live.** Live `templates/collection.bundles.json` still renders the v1 `custom-bundle-builder`. Ready-to-swap template: `Bundle Builder Tournament/final/collection.bundles.json` (keeps banner + product grid, swaps only the builder).
- The v1 builder stays live meanwhile and has had three live fixes (multi-flag qty · flag size/variant selection · the `available`-field dropdown bug) — see [[site-catalog-fix-backlog]].
- **Open before go-live** (Claude Code lane unless noted):
  1. **Smoke-test on a preview theme** — price hydration, proof-tagged cart handoff, add-to-cart. The commerce wiring is only statically verified.
  2. **Mirror-copy gap**: `custom-bundle-builder-v2.liquid` is NOT yet in the `theme_export__…` mirror (deploy workflow requires both copies; the home r2 section is mirrored, this one isn't).
  3. Sandbag weights + wheeled carry bag have no real product handles — they ride the proof note as "requested add-on", never the cart. Wire real SKUs if/when created (Carlos).
  4. Optional: have the proof handoff prefill the free-proof form (or create a draft order) instead of routing through the cart.

## Deliverables

`Bundle Builder Tournament/` — `SCOREBOARD.md` (full judge×variant matrix + rationales), `variants/v1–v8.html` (all interactive), `final/png-bundle-final.html` (standalone winner), `final/collection.bundles.json`, `sections/custom-bundle-builder-v2.liquid` (copy also placed in theme `sections/`).

## Related pages
- [[theme-build-status]]
- [[home-redesign-tournament]]
- [[site-catalog-fix-backlog]]
- [[master-price-sheet]]
- [[conversion-bridge]]
- [[free-proof-landing-page]]
- [[proof-vs-design-policy]]
