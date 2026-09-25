# Apollo Two-Brand Setup (P&G + Proágo, one license)

**Summary**: How to run both Promo & Grow and Proágo Branding from a single Apollo seat without a second license — the per-brand sending mailbox (the crux), folders/lists/labels/sequences for separation, the pros/cons, and the do's/don'ts. Current state (2026-06-17): one mailbox connected — `carlos@proagobranding.co` (Proágo) — and zero sequences. A clean slate.

**Type**: concept

**Sources**: Apollo account check 2026-06-17 (email_accounts_index → 1 mailbox; emailer_campaigns_search → 0 sequences); co-CEO session.

**Last updated**: 2026-06-17.

---

## Verdict
Apollo bills **per seat (per user login)**, not per brand. One seat runs **both** brands as long as only Carlos operates it. A second license is warranted only when (a) a different person needs their own login (e.g., Venus on P&G + a Proágo teammate), or (b) you want hard billing / permission separation.

## The crux — a sending mailbox per brand
Today there's one mailbox: `carlos@proagobranding.co` (Proágo). A **P&G** sequence sent now would go out *as Proágo* = brand bleed. **Fix:** connect a dedicated **P&G sending mailbox** — a cold-sending domain (`promoteandgrow.com`, per [[cold-email-sequence]]) or `outreach@promongrow.com` — warm it ~2 weeks, and bind it to every PNG sequence. Apollo supports multiple connected mailboxes on one account. *(Enrichment doesn't need this; sending does.)*

> ✅ **CANONICAL DOMAIN MAP — RESOLVED 2026-06-22 (Carlos, FINAL — supersedes all prior domain notes/flags on this page).** A prior pass recorded a wrong map from a Whisper Flow dictation error (`promotengrow.com` / "promoandgrow.com"); this is the authoritative correction:
> - **`promongrow.com`** = the store / website domain **AND** Venus's daily / INBOUND email **`venus@promongrow.com`** **AND** the company CC inbox **`hello@promongrow.com`**.
> - **`promoteandgrow.com`** = the **separate COLD-OUTBOUND email domain only** (`venus@promoteandgrow.com`) ← bind PNG cold sequences to this mailbox.
> - **`promotengrow.com`** = **NOT a real domain** — a typo / dictation artifact, retired. It must not appear as a live domain anywhere.
>
> This resolves both the earlier "promoandgrow vs promoteandgrow" cold-mailbox flag and the 6/21 `promotengrow → promoteandgrow` rename. The **6/21 rename was re-audited 2026-06-22**: `promoteandgrow.com` is kept only on cold-outbound / deliverability infra; all store / daily-inbound / `hello@` CC / signature / brand references resolve to `promongrow.com`. No revert needed. (source: Carlos final domain correction 2026-06-22)

## Segmentation layers (one account, two brands)
| Layer | Promo & Grow | Proágo |
|---|---|---|
| **Mailbox** | P&G cold-domain inbox | `carlos@proagobranding.co` |
| **Folder** | `PNG` | `PC` |
| **Lists** | `PNG · …` | `PC · …` |
| **Labels/tags** | brand = PNG | brand = PC |
| **Sequences** | `PNG · …` (→ P&G mailbox) | `PC · …` (→ Proágo mailbox) |
| **Saved searches** | per P&G ICP | per Proágo ICP |

## Pros (one shared account)
- 💵 One seat — no second subscription.
- One login for all prospecting/outreach; cross-brand contacts live together.
- Shared enrichment/export credit pool.

## Cons / watch-outs
- **Brand bleed** — wrong mailbox/template sends as the wrong brand. *Mitigation: prefix naming + always confirm the sender before launch.* (Biggest risk; easy to avoid.)
- **Shared credits** — both brands draw the same monthly credits; no per-brand cap.
- **Mixed reporting** — analytics blend unless filtered by sequence/label.
- **Account-global unsubscribes** — opting out of one brand suppresses the other (usually fine / good for compliance — just know it).
- **Deliverability is per-domain, not per-account** — each brand sending from its own domain (own SPF/DKIM/DMARC) keeps reputations independent. Another reason for a separate P&G mailbox.

## Recommended setup (do this)
1. Keep the **one seat**.
2. Connect a **P&G mailbox** (cold domain) and warm it ~2 weeks.
3. Create folders **`PNG`** and **`PC`**.
4. **Prefix** all lists / sequences / saved searches (`PNG ·` / `PC ·`).
5. **Tag** every contact with its brand.
6. **Always confirm the sender** before launching a sequence.
7. Watch the shared credit meter.

## When a 2nd license IS worth it
A different human operating one brand independently; clean billing separation (charge Proágo's costs to Proágo's books); or credit consumption that outgrows one plan.

## Related pages
- [[apollo-net-new-list]] · [[cold-email-sequence]] · [[meta-lead-form]] · [[growth-offensive]] · [[lead-machine]]
