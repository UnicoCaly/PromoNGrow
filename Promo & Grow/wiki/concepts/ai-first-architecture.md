# AI-First Architecture

**Summary**: The scaffolding plan for making P&G AI-central: a filtered **team-brain GitHub repo**, an automated **proof factory** (logo → vectorize → flat production proof + composite mockups, eventually one-shot from Slack), and **Claude in Slack** for Venus — sequenced API-first. Decisions locked with Carlos 2026-07-10.

**Type**: concept

**Sources**: #promo-and-grow-artwork-proofer channel read (2026-07-10); [[meta-funnel-review-2026-07-09]]; [[proof-and-production-templates]]; [[file-prep-gate]]; Carlos interview 2026-07-10 (four decisions below); Anthropic platform research brief 2026-07-10 (Claude Tag / Managed Agents / Agent SDK / Claude Code routines).

**Last updated**: 2026-07-10.

---

## The bottleneck, measured (proofer channel, 7/1–7/10)

- **~9 proof jobs/week** flow Venus → Slack → Carlos → ChatGPT → back.
- Turnaround **6–15 min when Carlos is at his desk** (Jashun 6 min, Don Harbert 9, Marcus 12, Nina 7) — **~20 hours when he isn't** (Silvia: 7/7 2:37pm → 7/8 10:13am).
- **Every revision is a full round trip** (Tosi's "CookOut" one-word change: 43 min), because AI-gen mockups re-roll the whole image.
- **Pricing + routing Q&A also serialize through Carlos** ("this setup is $2,200"; the A-frame $200 correction; "proof or quote?") even though the answers live in [[master-price-sheet]] / [[meta-lead-intake-playbook]] — Venus has no direct access to the second brain.
- Upstream, **logo-collection is 10.3%** and the speculative-proofs play ([[meta-funnel-review-2026-07-09]]) can't run at volume through a hand-operated ChatGPT loop.

**Bottlenecks not previously visible:** (a) the Zapier **Meta Lead Ads trigger is verified working (7/9) and unused** — lead intake is still manual; (b) proofs are bespoke every time despite fixed product geometry — no template reuse; (c) the 40–50% bad-file problem ([[file-prep-gate]]) is checked by eye.

**Underutilized resources already paid for:** Adobe MCP (`image_vectorize`, `image_remove_background` — the two hardest pipeline primitives), Zapier, the real install-photo library (P&G photos Drive folder), the B2Sign dielines ([[proof-and-production-templates]]), Cloudflare (future webhook host), and the wiki itself.

## Decisions (Carlos, 2026-07-10)

1. **Proof style = hybrid**: deterministic template composites (logo warped onto real product photos + dielines) as the workhorse — instant, consistent, revision-friendly; AI "glamour shot" optional garnish on big quotes.
2. **Team repo includes rep-facing prices** ([[master-price-sheet]], [[design-price-rubric]]); excludes [[pricing-engine]] margins/vendor costs, Proágo, strategy/hiring.
3. **Venus self-serve on visual proofs, Carlos spot-checks**; production-ready files still gate through Carlos.
4. **API-first build; Team/Enterprise seats later** with usage evidence.

## The architecture — three layers

### Layer 1 — Team Brain (private GitHub repo) · week 1
`png-team-brain`: a filtered clone of this wiki for Venus + future hires, and the grounding corpus for any agent (including Claude Tag later).
- **In**: master-price-sheet, design-price-rubric, product-size-guide, product-application-guide, sop-library, meta-lead-intake-playbook, close-cadence-kit, cold-reply-playbook, deal-followup-playbook, venus-* training pages, product-catalog-2026 PDFs, phone-number-map (P&G lines only), png-voice (outward rules).
- **Out**: pricing-engine (margins, multipliers, vendor costs), anything Proágo, growth strategy / funnel audits, hiring/screening, dashboard, deals/ pages, log.
- Sync = Claude-admin script from the vault, Carlos-approved pushes. Plain markdown, GitHub mobile-readable.

### Layer 2 — Proof Factory · weeks 1–3 (the main event)
**Phase A (now, zero new infra):** build the **template library + compositor**.
- Mockup templates from real photos (Donut tent, Komen valance, Temple of Gainz SEG, table covers/flags from catalog shots) with calibrated logo-placement quads; flat production-proof templates on the P&G proof-sheet layout (finish size / qty / material / proof-version fields) using the B2Sign canopy dieline specs.
- Deterministic compositor (Python/PIL perspective-warp): logo in → **proof pack** out = flat proof + 2–3 composite mockups, seconds per render, revisions are re-renders.
- Logo prep via Adobe MCP: `image_remove_background` + `image_vectorize`; a basic file-prep check (resolution, transparency) automates the [[file-prep-gate]] triage.
- Operation while manual: Venus drops logo in #proofer → Carlos or Claude-admin runs the pipeline → pack posted back. Even hand-triggered, per-proof time collapses and the 20-hour worst case dies.

**Phase B (weeks 2–4): event-driven.** Zapier watches #proofer file uploads → HTTP POST → pipeline → posts the proof pack to the thread. Runtime options (research 2026-07-10): **Claude Code routine with native webhook trigger** (no infra) or **Agent SDK service** (own server, Cloudflare-fronted) when volume/latency demands it. Managed Agents = wrong shape (no inbound webhook trigger; cron/manual-API only). Venus self-serve; Carlos spot-checks in channel.

**Phase C (later): production files + 3D.** Vector/CMYK dieline-fitted print files with bleed — always Carlos-gated before production; 3D visualized mockups as the glamour layer.

### Layer 3 — Venus's copilot (Claude in Slack) · when Layer 1–2 prove out
**Claude Tag** (public beta): Team/Enterprise plans, shared usage balance (capped), tag `@Claude` in-channel, grounded on the team repo via the Claude GitHub App, can use connectors + custom skills; trigger is Slack-mention-only. Answers the "$2,200?" and "proof or quote?" class of questions without Carlos. Decision deferred per #4 — Layer 1 is exactly its grounding, so nothing built now is wasted.

### Wire-now cheap wins (parallel)
- **Zapier: Meta Lead Ads → Slack #leads** — auto-post each lead (name/biz/contact/language) the moment it lands; kills manual intake copying, timestamps speed-to-lead.
- **Speculative proofs at volume**: once the compositor exists, run it against the logo-silent pool (logos pulled from lead IG/websites) so the first-touch email carries a finished-looking proof — the direct attack on the 10.3% logo-collection break.

## Build status

- **Layer 1 SHIPPED 2026-07-10**: private repo **github.com/UnicoCaly/png-team-brain** — 16 files (rep-facing pricing, product guides, 7 playbooks, SOP library, voice, catalog PDFs, P&G-only phone reference), README as task-index. Sanitization pass ran clean (Proágo mentions in-scope = escalation routing only; no engine internals). Next: Carlos invites Venus.
- **Layer 2 Phase A SHIPPED 2026-07-10**: `Proof Factory/` in the project — `compositor.py` + calibrated `tent10` template (real Komen-tent photo, front-valance quad). Logo → recolored band (luminance-shaded) + perspective-warped logo + 2-page production-proof PDF (proof-sheet fields, flat view, placement preview, approval language). **~3 s per render; revisions are re-renders.** Demo verified (purple v1 → green v2). Template queue: table covers, flags, 10ft SEG.
- **First live run 2026-07-10 (Bóbame — Latino Drinks):** logo pulled from #proofer via the Slack connector → Adobe `image_remove_background` (connector transcodes PNG→flat JPEG; cutout recovers it) → brand pink sampled from the logo (#D00040) → proof pack rendered. End-to-end ~4 min including the Adobe leg; compositor itself ~3 s. Caveat filed in `Proof Factory/README.md`: Phase B should fetch Slack originals via bot token to skip the transcode.
- **Phase A v2 (2026-07-10, Carlos feedback pass):** Carlos dropped the REAL production templates into `Proof Factory/templates/` (canopy + 15ft/20ft long/short-side + fullwall/halfwall dielines, the P&G proof-sheet template, the filled P&G881072 example). Compositor rebuilt to mirror the real sheet: 17×11 tabloid, client header + approval checkboxes + spec sidebar, **per-side flat panels (Side A/B/C/D; B & D = long sides on 10×15/10×20)**, mock-up slot, cut line. Visual-mockup leg pivoted per Carlos: customer-facing mockup = **constrained AI-gen** (compositor emits a locked genprompt per job — exact logo, exact hexes, no invented branding; `--mockup` embeds the render); the photo composite is demoted to internal placement reference. Note: the legacy proof template carried the 323.249 (Proágo) number — rebuilt sheet uses 844.883.3308.
- Next up: remaining templates · Zapier Meta-lead→Slack · Phase B webhook trigger · agentic-OS design (see [[agentic-os]]).

## The AI-first operating pattern

Knowledge lives in a repo agents can read · deterministic tools handle physics (placement, geometry, files) · models handle judgment and language (triage, voice, glamour renders) · humans hold only the trust gates (production files, money, brand). Every SOP that stabilizes becomes a tool; every tool joins the pipeline.

**Cost posture:** pipeline at current volume ≈ trivial API spend (tens of $/mo); Claude Tag = prepaid usage balance when adopted; no new fixed infrastructure until Phase B chooses the runtime.

## Build order
1. **This week**: team-brain repo (filter + first push) · compositor prototype on the tent template · run it live on real proofer-channel jobs.
2. **Next**: remaining product templates · Zapier lead→Slack · Phase B webhook trigger.
3. **Then**: Claude Tag decision with usage evidence · Phase C production files.

Lanes: repo + compositor + templates = **Claude-admin/Code**; Zapier toggles + spend + seat decisions = **Carlos**; proof operation = **Venus** (self-serve once B lands).

## Related pages
- [[meta-funnel-review-2026-07-09]] — the funnel math this attacks
- [[proof-and-production-templates]] · [[file-prep-gate]] · [[proof-vs-design-policy]]
- [[meta-lead-intake-playbook]] · [[close-cadence-kit]] · [[product-catalog-2026]]
- [[zapier-automation-roadmap]] · [[pipeline-ops-spine]] · [[claude-code]]
