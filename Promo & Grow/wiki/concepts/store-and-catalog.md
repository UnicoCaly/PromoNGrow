# Store and Catalog

**Summary**: The Shopify store and product catalog — 31 optimized products, the 8 money pages, bundles via a bundle-builder app, email deliverability fixes (SPF/DKIM/DMARC), and the two-agent build model. Also the operating context: vendors, locations, platform.

**Type**: product

**Sources**: PNG-Master-Context-Playbook.md, PNG-Full-Context_4.14.2026.md

**Last updated**: 2026-06-18 (audit reconciliation).

**Metric**: 31 products optimized; bounce 7.5%→1%, delivery 93%→99% (May 1–25 sends).

---

## The store

Shopify (Dawn theme, customized), custom domain promongrow.com, store slug 0b8fsx-ju.myshopify.com, GitHub UnicoCaly/PromoNGrow auto-deploying to Shopify on push (source: PNG-Full-Context_4.14.2026.md). Phone (844) 883-3308, email hello@promongrow.com (source: PNG-Full-Context_4.14.2026.md). Production: 10514 Long Beach Blvd., Lynwood CA 90262; mailing: 254 N Lake Ave #303, Pasadena CA 91101 (source: PNG-Full-Context_4.14.2026.md).

Built in an April 11–12, 2026 24-hour rebuild sprint off the prior dated Savor template (source: PNG-Full-Context_4.14.2026.md).

## Vendors / fulfillment

Custom print reseller; production via third-party vendors: **B2Sign** (primary — tents, displays, fabric), **4over** (secondary, API-integration potential for automated ordering), select in-house at Lynwood (source: PNG-Full-Context_4.14.2026.md). Large-format also routes through **B2Sign** (preferred), **Tradebanner** (B2Sign backup), and **Soar Dist USA** (soardistusa.com — complex/enclosed tents) — Soar Dist replaces the old "SwordXpress" reference (source: PNG-Pricing-Engine-CONFIDENTIAL.md). **Pricing is now resolved** in the confidential [[pricing-engine]]: **×5 low-ticket** (print/collateral) / **×2.0 high-ticket** (tents/large-format), $100 floor, 60% min margin under $1,000 / 35% at $1,000+ (source: PNG-Pricing-Engine-CONFIDENTIAL.md, 2026-06-06). *The older "2.5–3x / 60–67%" figure is superseded.* See [[pricing-engine]] §4 for the full vendor-cost routing. Turnaround: 5 business days from proof approval (source: PNG-Full-Context_4.14.2026.md).

## The 31 optimized products

All 31 products fully optimized: clean titles, standardized vendor "Promo & Grow" (was "My Store" / "Promote & Grow Shop"), real product types, buyer-intent tags, SEO titles + meta descriptions, spec-led descriptions with AEO FAQ blocks (for Google AI Overviews / ChatGPT / Perplexity citation) (source: PNG-Master-Context-Playbook.md).

Breakdown (source: PNG-Master-Context-Playbook.md):
- **8 money pages** — 3 tents, 4 SEG displays, acrylic — full rewrites + FAQ.
- 5 flags, 4 table covers/throws/runner, 6 displays, 4 tent accessories, 2 wall art.
- 2 blank high-ticket pages (20ft SEG, acrylic) written from scratch.
- `-copy` URLs fixed with 301 redirects (zero link equity lost); 2 junk "Print Only" duplicates set to Draft.

**Inventory policy:** products confirmed purchasable (tracking off = always buyable); DENY policy dormant but flagged (source: PNG-Master-Context-Playbook.md).

**Held by design:** Easify "Size"/"Hardware" app products NOT drafted — drafting would risk breaking custom-option cart pricing; routed to Claude Code for safe noindex instead (source: PNG-Master-Context-Playbook.md).

The 8 money pages are the priority surface for [[bilingual-spanish-moat|Spanish translation]] and quote-first [[conversion-bridge|tiered CTAs]].

## Categories and price ranges

Bundles (~$848–$1,368 per the on-site builder / [[master-price-sheet]]; the older $595 floor is stale), Tents ($395–$1,495), Displays ($288–$1,200), Accessories ($89–$450), Wraps ($500–$5,000+, quote-based) (source: PNG-Full-Context_4.14.2026.md). Active discount code: **SHOWUP** (free shipping over $500, 1 per customer) (source: PNG-Full-Context_4.14.2026.md, source: PNG-Master-Context-Playbook.md).

## Bundles

Bundles are live via a **custom on-site bundle builder** (not static products) at /collections/bundles. **Source of truth = the builder's computed prices** (lowest complete config ≈ **$848.30**); the underlying Shopify bundle products ($668 / $823 / $857) and any "starting at $910 / $595" page copy are **stale and pending a Claude Code sync-up** to the builder — see [[master-price-sheet]] (source: Carlos 2026-06-17). Quote bundles from [[master-price-sheet]], not from "starting at" email copy. Teardrop Flag exists; SHOWUP code active (source: PNG-Master-Context-Playbook.md).

## Email deliverability (fixed + proven)

- SPF, DKIM authenticated via Shopify (sender = hello@promongrow.com, no rewrite) (source: PNG-Master-Context-Playbook.md).
- DMARC added in Squarespace DNS: `v=DMARC1; p=none; rua=mailto:hello@promongrow.com; pct=100; adkim=r; aspf=r` (source: PNG-Master-Context-Playbook.md).
- **Proof:** bounce dropped 7.5%→1%, delivery 93%→99% between the May 1 and May 25 sends (source: PNG-Master-Context-Playbook.md).
- Future: tighten DMARC to p=quarantine after ~2 weeks of clean rua reports — not before a big send (source: PNG-Master-Context-Playbook.md).

This deliverability work underpins the [[reactivation-email-sequence]].

## The two-agent build model

- **Claude Code** = theme/code (popups, quote form, CTAs, pixel, bilingual plumbing, banner product).
- **Claude (admin/strategy)** = Shopify admin, catalog, copy, data, connectors, marketing assets, this wiki.
- **Carlos / VA** = platform toggles (automations, GBP, sends), approvals, the human close (source: PNG-Master-Context-Playbook.md).

## Related pages
- [[pricing-engine]]
- [[master-price-sheet]]
- [[fulfillment-sop]]
- [[file-prep-gate]]
- [[concierge-close]]
- [[conversion-bridge]]
- [[bilingual-spanish-moat]]
- [[reactivation-email-sequence]]
- [[the-20k-math]]
