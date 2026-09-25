# Product Catalog 2026

**Summary**: The supplemental sales kit built 2026-07-10: a 15-page category-lookbook **product catalog** covering every active store product, plus two deep **sale sheets** for the strongest categories (event tents; tradeshow displays). Digital-first US-Letter PDFs sized for email/WhatsApp attachment that also print clean.

**Type**: concept

**Sources**: live Shopify catalog pull 2026-07-10 (snapshot at `P&G marketing collateral/Catalog 2026/source/products-as-of-2026-07-10.json`); [[product-size-guide]]; [[product-application-guide]]; [[png-voice]]; bundle "from $848" floor per Carlos direction 2026-06-24 (builder, not inventory SKUs); real install photos from Carlos's "P&G photos" Drive folder (2026-07-10 rev).

**Last updated**: 2026-07-10 (rev 2: real install photos + tent-banner price suppressed).

---

## The files

All in `P&G marketing collateral/Catalog 2026/`:

| File | What it is |
|---|---|
| `PNG-Product-Catalog-2026.pdf` | 15-page category lookbook, all active products (5.8 MB) |
| `PNG-Sale-Sheet-Tents.pdf` | 2-page tent deep-dive with the full package/price matrix (1.0 MB) |
| `PNG-Sale-Sheet-Tradeshow-Displays.pdf` | 2-page displays deep-dive with single/double-sided price table + "which one is yours" picker (1.4 MB) |
| `source/` | Editable HTML + images + embedded fonts + the price snapshot JSON |

**Rebuild flow** (Claude-admin lane): edit the HTML in `source/`, then render with headless Chrome (`--headless=new --no-pdf-header-footer --print-to-pdf=...`). Fonts are embedded as data URIs; images are relative paths in `source/img/`.

## Build decisions (Carlos, 2026-07-10)

- **Format**: PDF, digital-first (also print-clean). Chosen over web pages / both.
- **Pricing**: live single-unit **"from" floors** as of 2026-07-10, pulled from the store, not the [[master-price-sheet]] (rep-facing set prices stay internal). Bundles shown **from $848** via the builder per the standing rule (source: Carlos direction 2026-06-24).
- **Language**: English only (ES accents and a full ES edition were offered and declined for now).
- **Depth**: category lookbook (~15 pages) + the two sale sheets carrying the deep detail.

## Catalog page map

Cover → Welcome/How-it-works + TOC (with "from" prices) → Tents → Tent add-ons → SEG displays → Backlit displays → Backdrops & pop-ups → Flags → Table covers → Banners/signs/wraps → Wall art → Print & collateral (price table; no product photos exist for these) → Booth bundles (from $848, builder) → **Fit guide** (to-scale SVG: flag XL/tent/SEG wall/person/table/banner + the outdoor-vs-indoor split + the three pre-order checks from [[product-size-guide]]) → Back cover (free-proof CTA + QR).

Every page carries the free-proof line; back cover and both sale sheets carry a **QR to `/pages/free-proof`** ([[free-proof-landing-page]]), 844.883.3308, and hello@promongrow.com. Delivery is phrased as **5 business days after proof approval** throughout (the 6/30 clock clarification, [[venus-brief-2026-06-30]]).

## Voice + design

Outward register per [[png-voice]] — warm, direct, confident, anti-AI-scrubbed, English only. Navy `#1B2838` / copper `#C17A3A` (CTAs + prices) / trust green `#1E6B4A` (badges) on white/off-white; DM Serif Display headlines + DM Sans body. Real product photography from the store CDN; typographic/SVG treatments where no photos exist (13oz banner, vehicle magnets, print items).

## How to use it (Venus / Carlos lane)

- **Meta-lead first touch**: attach the catalog to the intro email ([[meta-lead-intake-playbook]]); it answers "what do you sell and what does it cost" without waiting on a call.
- **Open quotes**: send the matching **sale sheet** with every tent or display quote and in the Day-1/3/7 chase ([[close-cadence-kit]]) — it re-sells the product while the quote sits.
- **Office visits / in-person**: print; both are US Letter.
- **Lynwood USD and institutional asks**: the catalog is the general answer while the school-district menu is pending ([[lynwood-usd-account]]).

## Real install photos (rev 2, 2026-07-10)

Seven photos from Carlos's Drive folder (`P&G photos`, folder `1Sd_eATqfSiPTu6amt7JF1pREUvRKH8lS`) replaced stock mockups; converted copies live in `source/img/pg-*.jpg`:

| Photo | Placed |
|---|---|
| Donut Media 10×10 booth, front (IMG_4246) | Catalog cover hero + tent sale-sheet hero |
| Donut Media tent, side (IMG_4244) | Bundles page "the tent" card |
| Komen tent valance banner (IMG_4705) | Tent Banners card (p4) |
| Temple of Gainz 20-ft SEG gym install (IMG_1829) | 20ft SEG card (p5) + displays sheet |
| Red Bull backlit SEG walls (IMG_4393) | Backlit Backwall card (p6) + displays sheet |
| Space-birthday fabric backdrop (IMG_2193) | Pillowcase Backdrop card (p7) |
| Space-birthday A-frame wrap (IMG_2124) | A-Frame Wraps card (p10) |

**Also in the folder, unused so far**: Komen event tent rows (IMG_4675–4705), more Donut angles (IMG_4232–4258), more Red Bull (IMG_4392/4394), Temple of Gainz alternates (IMG_1822–1857), Baby-in-Bloom arch covers (IMG_8599–8602), space-birthday full set (IMG_2115–2193), one pro shot `CAD_0003.JPG` (15 MB — over the connector's 10 MB download limit, unreviewed).

**Price suppression (Carlos, 2026-07-10)**: Custom Tent Banners shows **"Priced by size"** instead of the $16 floor (catalog p4 card, tent sale-sheet add-on card, and the TOC row now reads "from $240" so the $16 doesn't leak).

## Data notes & caveats

- Prices are floors, single unit, before design services ([[design-price-rubric]]); stated on page 2 and both sale-sheet footers.
- Flag size ranges (e.g. feather 9–18 ft) come from [[product-size-guide]]; the live variant fetch was capped at 5 per product, so L/XL variants weren't independently re-verified on 2026-07-10.
- Display heights stated as "~8 ft" per the size guide's *(confirm per product)* note; tent peak/entry clearance kept vague ("walk-in clearance") for the same reason.
- The catalog says "4.8★ on Google" without the review count (count grows; the star rating is the stable claim).
- 13oz vinyl banner variants listed to 4×6 in the store; the 8-size range (to 5×10) is from [[product-size-guide]] and shown as "8 sizes, 2×4 up to 5×10 ft."

## Related pages
- [[product-size-guide]] · [[product-application-guide]] — the fit-guide page distills both
- [[master-price-sheet]] · [[design-price-rubric]] — internal pricing counterparts
- [[free-proof-landing-page]] · [[conversion-bridge]] — where the QR/CTA lands
- [[meta-lead-intake-playbook]] · [[close-cadence-kit]] · [[venus-work-queue]] — where the kit gets used
- [[store-and-catalog]] · [[png-voice]]
