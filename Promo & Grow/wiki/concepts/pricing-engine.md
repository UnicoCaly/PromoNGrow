# Pricing Engine (CONFIDENTIAL — owner-only)

> 🔒 **CONFIDENTIAL — Carlos only. Do NOT share with Venus or any rep, and do NOT export to Venus's onboarding folder.** This file exposes vendor cost and markup multipliers (true cost). Reps quote only from the rep-facing [[master-price-sheet]] (set prices, no math). (source: PNG-Pricing-Engine-CONFIDENTIAL.md)

**Summary**: The internal top-down pricing system — the markup formula, tier logic, rounding, the absolute floor, and vendor-cost routing — that produces the rep-facing [[master-price-sheet]]. Resolves the pricing `[FILL IN]`s that were gating [[draft-order-quote-system|Station ③]] and Venus quoting independently.

**Type**: concept

**Sources**: PNG-Pricing-Engine-CONFIDENTIAL.md (updated 2026-06-06), PNG-Master-Price-Sheet.md, SOP-01-Quoting-and-Pricing.md.

**Last updated**: 2026-06-17.

---

## 1. The markup formula

| Tier | What's in it | Markup | Multiplier |
|---|---|---|---|
| **Low-ticket** | Print & marketing collateral — business cards, postcards, flyers, brochures, NCR forms, stickers, small format | **400%** | **cost × 5** |
| **High-ticket** | Tents, large-format, trade-show displays, SEG, structural items | **80–100%** | **cost × 1.8–2.0** |

- **Low-ticket default = ×5** (confirmed from the business-card Loom, "400% markup"). Go to **×6** on tiny orders / heavy customization / rush; compress toward **×4** on large volume.
- **High-ticket default = ×2.0 (100%).** Compress toward **×1.8 (80%)** on big volume, repeat clients, or competitive deals.
- ⚠️ **Brochures — confirm multiplier.** The brochure Loom auto-caption said "~188%" (unclear); the listed All-Inclusive Flyers/Brochures prices came straight from the 4over quote PDF so they're correct as listed, but confirm the exact multiplier for re-quotes outside those run sizes (source: PNG-Pricing-Engine-CONFIDENTIAL.md).

**Tier decision (when not obviously catalog):** (1) **category first** — print/collateral = low, tent/large-format/display = high; (2) **dollar backstop** — cost under ~$50 → low-ticket, ~$50+ and structural → high-ticket.

## 2. Rounding

Always round clean; drop cents where natural. Pattern: 1,000 business cards → $108; big runs round up to clean hundreds; small runs round down a touch to stay friendly. End on $X8 / $X5 / $X9 or a clean hundred. Never quote a raw $487.33 — make it $495 or $499. (source: PNG-Pricing-Engine-CONFIDENTIAL.md)

## 3. The floor (absolute — worst case AFTER negotiation, not the target)

- **Minimum order: $100.** Anything under → raise to $100 or add setup/handling.
- **Minimum margin under $1,000: 60%.**
- **Minimum margin $1,000 and above: 35%.**
- Open at **list** ([[master-price-sheet]]); only walk toward the floor for **volume, repeat, or strategic** accounts. If a client pushes below the floor → hold or walk. **Never discount past the floor.** (source: PNG-Pricing-Engine-CONFIDENTIAL.md)

## 4. Vendor-cost routing

| Vendor | What routes here | Notes |
|---|---|---|
| **4over** | All print/marketing collateral (cards, postcards, flyers, brochures, NCR) | Configure → read cost → ×5 → round. Goal: eventual API integration. |
| **B2Sign** | Large-format, tents, trade-show displays | **Preferred** for tents/displays. |
| **Tradebanner** | Same catalog as B2Sign — **backup only** | Different cutoffs/schedule; use when B2Sign timing fails. |
| **Soar Dist USA** (soardistusa.com) | Complex/enclosed tents + advanced trade-show setups (incl. full food-vendor enclosed tents) | More complex catalog than B2Sign; route specialty/enclosed jobs here. (Replaces the old "SwordXpress" reference.) |

Vendor logins expose raw cost — **keep them as Carlos's owner accounts.** For Venus's trial, use **route-through**: she requests any non-set-sheet number from Carlos and applies nothing herself. Revisit scoped sub-accounts only once she's proven (source: PNG-Pricing-Engine-CONFIDENTIAL.md, PNG-Venus-Onboarding-Context-for-Cowork.md).

## 5. How a price becomes a set price

1. Configure the exact product/options in the vendor portal. 2. Read vendor cost. 3. Apply tier markup (§1) → round (§2) → check floor (§3). 4. That number goes on the [[master-price-sheet]] as the rep-facing set price. 5. Re-baseline periodically as vendor costs move. (source: PNG-Pricing-Engine-CONFIDENTIAL.md)

## 6. Escalate to Proágo (not catalog pricing)

Complex branding — vehicle wraps, channel letters/signage fabrication, brand guides/systems — is **Proágo Branding** work (Carlos), not this engine. Rep pitches it, then escalates (source: PNG-Pricing-Engine-CONFIDENTIAL.md).

## Related pages
- [[master-price-sheet]] — the rep-facing output of this engine
- [[draft-order-quote-system]] — Station ③, where these prices become quotes
- [[closer-hire]] · [[lead-machine]] · [[the-20k-math]]
