# Agentic OS

**Summary**: The grand-scope architecture for P&G's 24/7 agentic operating system — one event spine, jobs as ledger rows, agents as the runtime, humans at trust gates. Designed 2026-07-10 via a 3-architect + 6-adversarial-review + gap-check workflow (302K tokens of design pressure); the three independent designs converged on the same spine. Extends [[ai-first-architecture]] from "proof factory" to "operating system."

**Type**: concept

**Sources**: multi-agent design workflow 2026-07-10 (3 architecture lenses: ship-fast / SRE-reliability / agent-native; 6 adversarial reviews: failure-modes + security/compliance/brand per design; 18-gap completeness check); Carlos direction 2026-07-10; platform research 2026-07-10; #promo-and-grow-artwork-proofer live data.

**Last updated**: 2026-07-10.

---

## The converged spine (all three designs landed here independently)

```
EVENTS                    FRONT DOOR                 LEDGER            RUNTIME                    HUMANS
Slack file drop     ┐                          ┌  D1 `jobs` table  ┐  Claude Code cloud     ┌ Venus approves in
Meta lead (Zapier)  ├→  Cloudflare Worker  →   │  (id, source,     ├→ routine (webhook-  →  │ Slack (✅ / ❌ + note)
IG DM (Graph API,   │   verify signatures,     │  client, product, │  triggered) OR local    │ Carlos spot-checks
 Phase C)           ┘   dedupe, enqueue,       └  status, thread)  ┘  runner on the Mac      └ #agent-ops digest
                        fire runtime
ASSETS: R2/Drive (logos, proofs) · KNOWLEDGE: png-team-brain (read-only clone) · ENGINE: compositor.py + locked genprompt + image-gen API + vision validator
```

- **Dumb durable spine, smart disposable runtime.** The Worker + jobs table never change; intelligence lives in routines/agents that clone `png-proof-factory` (the compositor repo) and `png-team-brain` per job. New job type = a new job handler, not new infrastructure.
- **Slack is the only UI.** Job posts to the originating thread; Venus approves with a reaction/button; #agent-ops carries cost/duration/failure per job. No new tools for anyone to learn.
- **Job types** (in build order): `proof_pack` (logo → proof + mockup → thread) · `ask_png` (pricing/product Q&A grounded on team-brain) · `spec_proof` (proof from a *consented* logo source before the lead asks) · `quote_chase` (agent-drafted nudges on open drafts) · `dm_reply` (Phase C, post app-review) · `production_files` (always Carlos-gated).

## What the adversarial reviews killed or changed (adopted as requirements)

1. **No IG/website scraping for speculative proofs.** Scraping violates Meta platform terms and endangers the Business Manager running the ad account — the revenue engine. **Replacement (from the gap check): edit the Meta instant form to ask for website / IG handle / logo upload** — consented at intake, attacks the 10.3% logo-collection break at the cheapest point. Logo sources are: uploaded by lead, emailed by lead, or explicitly provided URL. Nothing else.
2. **No SMS in spec-proof outreach until consent language exists in the lead form** (TCPA: $500–1,500/text statutory). Email-first, from **promoteandgrow.com** (the designated cold domain, SPF/DKIM/DMARC'd), never promongrow.com.
3. **Prompt injection is a first-class threat.** Customer logos, DM text, and lead-form fields are attacker-controlled input feeding credentialed agents. Requirements: agents treat all customer content as data, never instructions; **no agent write access to png-team-brain** (human-reviewed PRs only — a poisoned FAQ entry would become future grounding); per-job least-privilege credentials (proof jobs get no Shopify token; quote jobs get `write_draft_orders` only; nothing touches Meta Ads write).
4. **Approval authorization is explicit**: only enumerated Slack user IDs (Venus, Carlos) can approve; interactivity signatures verified; Venus's account gets MFA before she becomes a release authority.
5. **Dead-man switch**: alerts can't all flow through the same Slack app that Slack may auto-disable — a daily heartbeat lands via a second channel (email), and silence = investigate.
6. **Portability**: business logic stays plain Python + markdown in git (no vendor-shaped logic); nightly ledger export to Drive; a "rehost on the Mac in a weekend" drill proves the exit ramp. *(First fix already shipped: compositor.py's hardcoded macOS Chrome path — caught by a reviewer who checked the actual repo — now resolves Chrome/Chromium per-environment.)*
7. **Meta DM automation honesty**: programmatic IG replies need Business Verification + App Review (2–6 weeks, rejectable). Until then DMs stay human-sent with agent-drafted replies. The 24-hour messaging window is respected by replying in minutes; off-hours get a pre-approved template auto-ack with full replies queued to Venus's window.

## Gaps adopted into the plan (completeness check, top of 18)

- **The revenue bottleneck is quote→paid, not proofs** — instrument the quote funnel (sent→viewed→paid), autopsy the 10 dead quotes, build the 3-touch chase with a one-click deposit/pay-link **before** scaling proof volume. The OS's first KPI is paid quotes, not proofs generated.
- **Venus's workday is a design surface**: 10am queue digest (ranked, aging-flagged), a one-page approval rubric, 2-week Carlos double-approval shadow period.
- **Reviewer throughput math**: 350 leads/mo × 100% review ≈ 17 approvals/workday on top of selling. Fixes: lead-score filter on who gets a spec proof, batched grid review, statistical graduation (100% → spot-check after N clean batches).
- **Revisions are child jobs** (version counter, structured change note, 2 free placement rounds per [[proof-vs-design-policy]]).
- **A `leads` table** keyed on email/phone with stage + suppression flag, consulted before ANY outbound send (no double-hits, no contacting opt-outs).
- **KPIs + baselines**: capture this week's manual numbers first; weekly scorecard auto-posted from the ledger: proof turnaround · logo-send rate · spec-proof reply rate · quote→paid · cost/job · approval latency · redo rate.
- **Graduation gates per flow**: manual → gated → auto only after e.g. 50 consecutive approved-without-edit ≥95%; every flow has a one-page manual-fallback runbook.
- **Golden-set regression**: 5 reference jobs pixel-diffed before any compositor change ships (the proof sheet is a brand artifact).
- **Retention**: 12-month default on customer logos/PII + a delete-by-email script (CCPA).
- **Carlos ownership rule**: a flow isn't "done" until its wiki page (architecture, failure modes, manual override) exists.

## Phased build

| Phase | What ships | Gate to next |
|---|---|---|
| **A (done)** | Compositor v2 on real templates · locked genprompt · manual trigger in Claude Code sessions · manual Slack post-back | Working now |
| **B (~2 wks)** | Slack app (bot token: original files, no transcode; posts packs back to the thread) · Cloudflare Worker + D1 ledger · webhook-triggered runtime (Claude Code routine; local-runner fallback) · Venus reaction-approvals · #agent-ops · **lead-form logo/website fields** · quote-funnel instrumentation | 50 jobs, ≥95% approved-without-edit, turnaround <5 min |
| **C (weeks 3–6)** | `ask_png` Q&A · spec proofs from consented sources (email via promoteandgrow.com) · quote-chase drafts · Meta app review filed for DM permissions · image-gen via API key (genprompt becomes automatic) | App review passed; spec-proof reply rate justifies volume |
| **D (later)** | DM auto-replies inside policy · production-file prep (vector/CMYK/dieline, permanent Carlos gate) · spot-check-only review on proven flows | Never fully ungated on production files |

**Cost posture**: Worker/D1/R2 ≈ free tier at this volume; runtime tokens tens of $/mo; image-gen ~$0.05–0.25/mockup; total well under $100/mo until volume is 10x — then it's a revenue problem, which is the good kind.

**Answering the operating questions (2026-07-10):** today, yes — a run needs a Claude Code session open on the Mac and the post-back is a manual drag. That is precisely what Phase B removes: the Slack app + Worker + routine make the loop trigger-to-thread automatic, no terminal, 24/7.

## Build status

- **Phase B spine SHIPPED 2026-07-11** (repo: **github.com/UnicoCaly/png-agentic-os**, private):
  - **Worker live** at `png-agentic-os.carlos-154.workers.dev` — Slack Events ingress (signature-verified, deduped, `proof:`-prefixed messages with files in the proofer channel → jobs), Zapier lead intake (`/zapier/lead`, shared secret), runner job API (list/claim/file-proxy/complete/fail), reaction-approvals restricted to Carlos+Venus user IDs. **Credential rule implemented: the Worker owns all tokens; runtimes hold only RUNNER_SECRET** — file downloads and thread uploads are proxied so the Slack bot token never leaves Cloudflare.
  - **D1 ledger live** (`png-agentic-os`, f31a39d2…): jobs / leads / events tables.
  - **Local runner + LaunchAgent wired** (credential-free poll loop → compositor → post-back).
  - RUNNER_SECRET + ZAPIER_SECRET generated and set; `.secrets.local` on the Mac, git-ignored.
  - **Awaiting Carlos (~15 min, `docs/SETUP.md`):** create the Slack app from `slack/app-manifest.yaml`, hand the 2 Slack secrets to the Worker, `/invite @proof-factory` to the proofer channel, `launchctl load` the runner, post the test job. Lead-form field spec in `docs/LEAD-FORM.md`.
  - Phase B.2 next: cloud cron routine as the Mac-independent drain (RemoteTrigger API verified usable), #agent-ops digest, quote-funnel instrumentation.

## Related pages
- [[ai-first-architecture]] — the parent plan (layers 1–3); this page is the Layer-2 Phase B+ blowout
- [[meta-funnel-review-2026-07-09]] — the funnel math; quote→paid is the OS's first KPI
- [[meta-lead-intake-playbook]] · [[close-cadence-kit]] · [[proof-vs-design-policy]] · [[file-prep-gate]]
- [[phone-number-map]] · [[cold-email-sequence]] (promoteandgrow.com deliverability rules)
