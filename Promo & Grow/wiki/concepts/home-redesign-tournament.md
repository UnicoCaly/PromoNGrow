# Home Redesign Tournament

**Summary**: The two-round design tournament that produced the staged home-page rebuild (`custom-home-final-r2`). Round 1 (8 variants, 5 buyer-persona judges) produced a heritage-base merge; round 2 re-ran the method with 8 new variants + a new panel and the round-1 champion seeded blind — it defended, and the round-2 final is the go-live candidate.

**Type**: concept

**Sources**: `Home Redesign Tournament/SCOREBOARD.md` (round 1), `Home Redesign Tournament/round-2/BRIEF.md` + `round-2/SCOREBOARD.md`, [[log]] 2026-07-02 entry, repo state verified 2026-07-09.

**Last updated**: 2026-07-09.

---

## The method (reusable)

Build N genuinely distinct versions (different hook + different structure each), score every one with a panel of buyer-persona judges (each scores 5 criteria /10, writes rationale, names a top pick + a kill), kill the losers, merge the winning moves onto the strongest base, and record the scoreboard so the "why" survives. The same method produced the [[meta-ugc-launch-kit]] ad copy and [[bundle-builder-v2]].

## Round 1 (2026-06-30) — 8 variants, 5 judges

Judges: small-business owner, food-vendor, bar/restaurant owner, school director, CPG activation lead. Criteria: hook / trust / relevance / action / clarity (source: `Home Redesign Tournament/SCOREBOARD.md`).

- **Winner: v6 "20 Years, 5 Days" (heritage/authority), 201/250** — best floor (nobody's low) + the decisive institutional judge's 45/50, the top score of the round.
- Runners-up: v4 segment-router 200 (relevance 9.4, best in field) · v2 free-proof-first 196 (action 8.8, best in field).
- **Merge**: v6 base + v4's five segment cards + v2's free-proof engine + a real "$848 / Save 15%+" price chip. Hook: *"Twenty years of craft. Your brand, ready in five days."*
- Kill lessons: discount-led hooks read as coupon (v5) · a trust wall built on 19 reviews reads as thin evidence (v8) · gallery-first buries reliability for PO buyers (v3) · never gate the hero behind segment self-selection (v4's kill).
- Built as `sections/custom-home-final.liquid` + `Home Redesign Tournament/final/` (superseded by round 2 as the go-live candidate; kept for reference).

## Round 2 (2026-07-02) — champion defense

Carlos re-ran the tournament: 8 NEW hook-distinct variants, a NEW panel (small-biz owner, farmers-market vendor, school-district director, event coordinator, CPG brand), and the round-1 winner seeded **blind** as v9 (source: [[log]] 2026-07-02).

- **v9 defended: 208.5/250** — best trust (8.8) + polish (9.1), 40+ from every judge. The heritage-base win profile replicated across two independent panels.
- Runners-up: v8 "From Logo to Landmark" 200 (best engagement/relevance) · v7 "What's Your Date?" 197 (the school-district + event-coordinator top pick).
- **Killed: v2 narrative-story page, 161** — "makes a deadline buyer read a short story to find a price."
- **Round-2 final** = v9 base + grafts: v8 before/after gallery with real prices, v7 work-backward date calculator, v3 anti-dropship shop section, v4 build-spec standard + honest-review framing, v6 call-before-print + plain-terms FAQ, v1 all-prices line, and a new event-coordinator segment card.
- **Post-merge honesty audit**: free-proof copy forced to placement-only per [[proof-vs-design-policy]] (no free file-cleanup promises), an undocumented callback promise removed, "Save 15%+" → "Save 15%", honest partial 5th star on 4.8★.

## Current state (verified in repo 2026-07-09)

- **Staged, not live.** `sections/custom-home-final-r2.liquid` (CSS scoped `.pg-home2`, 13 settings, preset "Home — Final R2", 3 image pickers with placeholder fallbacks) exists in both repo copies (root + theme_export mirror). Both repo copies of `templates/index.json` already hold the r2 template. CTAs point to `/pages/free-proof` (the earlier `/pages/lp-free-proof` 404 was fixed 2026-07-07 with a live redirect created; source: operator memory 2026-07-07).
- Section validated clean on a deletable dev theme (#173311623204); an earlier live push failed on the 50-char header schema rule (live site unaffected) — fixed since (source: operator memory, 2026-07-02→07).
- **The live flip is Carlos-gated** and ships together with the 2026-07-07 SEO batch (see `SEO Audit 2026-07/AUDIT.md`); deploy per [[theme-build-status]] mechanics. Pending after flip: real hero/bundle/gallery photos, trusted-by logo wall.

## Deliverables

`Home Redesign Tournament/` — round-1 `SCOREBOARD.md` + `variants/v1–v8.html` + `final/`; `round-2/` — `BRIEF.md`, `SCOREBOARD.md`, `variants/v1–v9.html`, `final/png-home-final-r2.html`, `final/index.json`. Lane: Claude Code built; Carlos flips live.

## Related pages
- [[theme-build-status]]
- [[bundle-builder-v2]]
- [[conversion-bridge]]
- [[free-proof-landing-page]]
- [[proof-vs-design-policy]]
- [[png-voice]]
