# Brand Identity System (v2.0)

**Summary**: The consolidated brand book — locked strategy (foundation, personas, proof & claims), messaging layer, voice + bilingual rules, full visual system, applications + component standards, and governance with preflight checklists. v1.0 built 2026-07-29; **v2.0 merged 2026-07-31** from Carlos's 7/30 expansion draft. HTML + PDF in `Brand/Brand Book/`.

**Type**: brand

**Sources**: PNG-Brand-Strategy-and-Voice-Brief.md · [[png-voice]] · [[positioning-and-personas]] · [[spanish-money-page-copy]] · Brand/Design System (README.md, colors_and_type.css) · Carlos direction 2026-07-29 (scope: all four layers; deliverables: brand book + design-system expansion + wiki pages + PDF; audience: Carlos, Claude agents, Venus, content team).

**Last updated**: 2026-08-07 (Express summary deck added to Files; system content unchanged since the 7/31 v2.0 merge).

---

## What it is

A single-page brand book, designed in the brand's own system (paper-white tiles, Cooper/Fraunces/Inter, rationed copper), that consolidates what was previously spread across the strategy brief, wiki brand pages, and the Design System export. Eight sections:

1. **Foundation** — the one-line truth, the PrintCo → P&G story, growth-partner archetype, positioning statement, brand promise, competitive moat.
2. **Personas** — La Emprendedora (the heart), the Brand Manager, the Agency/Event Pro; the on-brand test.
3. **Proof & claims** — the proof stack + **claims discipline table** (approved vs retired lines; the SLA phrasing rule; free-proof $500+ scope; Donut "3-day" retired).
4. **Voice** — five attributes, the anti-brand list, copy mechanics, the anti-AI kill lists, the two-registers rule.
5. **Bilingual craft** — the two modes (drop-in warmth / fully parallel), the read-aloud test, EN/ES side-by-side examples.
6. **Visual identity** — logo rules, palette + ratio + accessibility, typography canon (see [[visual-system]]), space/shape/depth, imagery, iconography.
7. **Applications** — website, email, SMS, social/ads, print collateral, identity constants (copyright line, phone, domains).
8. **Governance** — where things live, lanes, change rules, decision log.

## Files

- `Brand/Brand Book/PNG-Brand-Book.html` — self-contained (fonts + logos embedded, ~1.6MB), works offline.
- `Brand/Brand Book/PNG-Brand-Guide.pdf` — print/share version rendered from the HTML.
- Also published as a private claude.ai Artifact for browser viewing/sharing: https://claude.ai/code/artifact/e689863f-aca7-47a3-a6d3-d789b012c14b (published 2026-07-30).
- **Summary deck (2026-08-07):** `Brand/PNG-Brand-System-Express-Deck.html` + `Brand/PNG-Brand-System-Guide.pdf` — six 1920×1080 slides distilling the system (cover · logo rules · color ratio · type canon · claims discipline · components), all values from `colors_and_type.css`. Built for Adobe Express import, but **the Adobe account's plan blocks the export operation + the Adobe Fonts service** ("account type doesn't allow access"; enable via developer.adobe.com/adobe-for-creativity, then the export is a one-step retry — the deck is already uploaded to Creative Cloud storage). Deck shows DM Serif Display standing in for Cooper Black (the documented print fallback). Private artifact: https://claude.ai/code/artifact/38b5464c-eaed-465c-8102-da90dbafe136

## What changed alongside the book (2026-07-29)

- **Typography canon confirmed** (Carlos): Cooper Black + Fraunces + Inter → [[visual-system]]; wiki CLAUDE.md coverage line updated off DM Serif/DM Sans.
- **Design System folder corrected**: README's unconditional "5 days or less" phrasing → the approved "from proof approval" SLA line; the "From $895" mock price example removed; fonts section flipped from "please confirm" to confirmed canon; identity constants + free-proof scope added; SKILL.md hard rules extended (SLA, scope, phone, anti-AI, bilingual). Three new spec cards: `brand-positioning`, `brand-bilingual`, `brand-claims`.
- **Not changed**: strategy, positioning, personas, voice — locked per the May 2026 brief (§1–7); the live theme (Claude Code lane owns the DM Sans → Inter body migration, still open).

## v2.0 merge (2026-07-31, Carlos ruling)

Carlos dropped a claude.ai-generated "v2.0 expansion draft" into `Brand Book/` on 7/30 (`Promo-Grow-Brand-Identity-System-v2.html` + PDF — kept as the source record). Review found it claims-compliant and strong on execution but it silently rewrote locked §1–7 strategy (personas replaced with generic "Owner-Operator/Marketing Lead/Event-Driven Buyer" — La Emprendedora gone; positioning statement + brand promise rewritten; *ganas*, Donut, the 4.8★ numbers, and "bilingual by nature" absent). **Ruling: merge, don't replace.**

**Adopted into the book**: the messaging layer (core message, 3 pillars, 10s/30s pitches, headline bank) · customer journey table + purchase triggers · **new claims rule: "Made in the USA" only on products meeting the verified sourcing standard** (propagated to SKILL.md, quick-start, templates README) · live-thread voice examples (on-brand/off-brand) · logo-misuse visuals · component content standards + mobile rules · preflight checklists (brand + production) · file-naming convention.

**Not adopted**: the rewritten personas/positioning/promise (locked strategy restored), the "when the product and order qualify" SLA hedge, the vague "qualifying big-ticket" in place of $500+, off-token cosmetics (0.12 hairlines, soft shadows, 16px radii).

## Rollout (2026-07-30)

- **Team quick-start one-pager**: `Brand/Brand Book/PNG-Team-Quick-Start.html` (+ single-page PDF) — the daily-reference card for Venus + the content team (six claim rules, voice checklist, bilingual rules, asset locations).
- **Vector logos DONE**: all six lockups vectorized to SVG (transparent) in `Brand/Design System/assets/vector/`.
- **Theme migration STAGED (not pushed)**: body font DM Sans → Inter + canon hover `#A66629` across theme files, plus SLA/claims fixes in 23 theme-code spots. Carlos runs the live push per [[theme-build-status]] / the deploy workflow.
- **Store-content claims audit**: 49 products + 15 pages + policies audited; 22 approved fixes await Carlos's go in `Operations/PNG-Store-Claims-Fix-List_7.30.2026.md` (live-store mutations are approval-gated). PageFly home slides + the active flyers product ("~3-day turnaround") flagged there too.

## Open items

- Carlos: approve the store-claims fix list; fix PageFly slides in the PageFly editor; push the staged theme files; rule on the flyers product + "Rush (3 days)" FAQ line.
- Lucide icon set: proposed, awaiting adoption call.
- Institutional trust letters (Lynwood USD, Kaiser) still pending retrieval for the proof stack.

## Related pages
- [[visual-system]]
- [[png-voice]]
- [[positioning-and-personas]]
- [[spanish-money-page-copy]]
- [[claude-code]]
