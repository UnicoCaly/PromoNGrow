# Entity Facts Sheet

**Summary**: The canonical, citable facts about Promo & Grow, in exact wording. Every article, meta description, schema block, directory listing, and AI-facing page pulls from this sheet. Search and AI engines repeat whatever they find, so one wrong or stale fact spreads everywhere.

**Type**: concept

**Sources**: Carlos direction 2026-09-13 (sourcing ruling); [[phone-number-map]]; [[linkedin-gbp-optimization]] (NAP, founded year, GBP attributes); [[brand-identity-system]] (claims rules); [[master-price-sheet]] (free proof $500+, nonprofit rate); live storefront `products.json` pull 2026-09-13 (from-prices).

**Last updated**: 2026-09-20 (hours + LinkedIn added).

---

## Identity

| Field | Canonical value | Notes |
|---|---|---|
| Name | **Promo & Grow** | Never "Promote & Grow" or "Promote & Grow Shop." The Shopify store name is fixed as of 2026-09-13 (og:site_name). Carlos updated the Yelp name 2026-09-13. |
| Website | promongrow.com | Spanish: promongrow.com/es |
| Address | 10514 Long Beach Blvd, Lynwood, CA 90262 | (source: [[linkedin-gbp-optimization]]) |
| Public phone | **(213) 817-9188** (local) · toll-free (844) 883-3308 | **Ruled 2026-09-13 (Carlos):** 213 is the primary number on listings (Yelp, GBP, Bing, Apple, directories) and in the site's LocalBusiness schema; 844 is the toll-free line and a customer-service contactPoint (source: [[phone-number-map]]). **323.249.4449 is Proágo — never on a P&G listing.** |
| Email | hello@promongrow.com | |
| Founded | 2005 (~20 years of production experience) | (source: [[linkedin-gbp-optimization]]) |
| Former name | **Formerly PrintCo Direct Inc.** | **Ruled 2026-09-13 (Carlos).** Live as schema `alternateName` "PrintCo Direct Inc." and as a footer line (theme commit `fca5762`). Use "formerly PrintCo Direct Inc." on About, LinkedIn, and directory descriptions. |
| Ownership | Family-run; Latino-owned | GBP attribute "Identifies as Latino-owned" (source: [[linkedin-gbp-optimization]]) |
| Hours | **Mon–Fri, 10:00 AM – 4:00 PM PST**; closed Sat/Sun | Carlos 2026-09-20. Pickup by appointment. Weekends confirmed closed — customers are out working events those days. |
| Facebook | https://www.facebook.com/promongrow | Given by Carlos 2026-09-20; **not machine-verifiable** (Facebook blocks automated reads). Update this page; never create a second one. |
| LinkedIn | https://www.linkedin.com/company/promo-grow/ | Confirmed live 2026-09-20; page read 2026-09-22 — header facts match canon, but the tagline, About body and Specialties still say **"Promote & Grow"** and misspell "Graphics". Copy-paste fix listed in [[mention-sprint-2026-09]]. Any older "PrintCo Direct Inc." page should point here, not be deleted. |
| Languages | English and Spanish | "Hablamos español" stays on outward pages: **Carlos speaks Spanish** and covers Spanish calls/emails after Venus's departure (Carlos 2026-09-14). |
| Service area | Los Angeles and SoCal (pickup in Lynwood); ships nationwide | |
| **Legal entity** | **PrintCo Direct Inc. DBA Promo N Grow** | **Ruled 2026-09-24 (Carlos)**, to cut the Proágo conflation. Supersedes the 9/13 "a DBA of Proágo Branding Dept." framing everywhere. Note the DBA is styled **Promo N Grow**; the trading/brand name stays **Promo & Grow**. Confirmed against the CA SoS filing (General Corporation, filed 2011-06-13, Carlos A Diaz Jr. CEO) surfaced on bizprofile.net. |
| Sister business | Proágo Branding (agency) — a separate entity | Don't merge the two in schema or listings. **"Powered by Proágo Branding Dept." removed from the site 2026-09-24** (footer on every page + both free-proof LPs) — it was the sentence AI answers cited when binding the two. Zero Proágo references remain in the theme. |

## What we make
Custom-printed event displays: canopy tents (10x10, 10x15, 10x20) and tent walls, SEG tension-fabric backdrops (including pillowcase and backlit), feather/teardrop/rectangle flags, table throws and runners, vinyl banners and tent banners, A-frame and backdrop wraps, retractable banner stands, podiums, and wall art (canvas, SEG frames, acrylic). Also a reusable memorial display system for funeral homes ([[memorial-displays-vertical]]).

## Claims — approved wording vs. never say

| Topic | ✅ Say | ❌ Never say | Basis |
|---|---|---|---|
| **Where it's made** | "**Printed in Los Angeles**" / "Printed in LA" / "custom-printed in LA" | "Made in LA," "Made in USA," or "Made in America" on any product with hardware (tents, SEG frames, banner stands, flag poles/bases, A-frames, podiums). "Printed in our Lynwood shop" as a blanket claim. | **Carlos 2026-09-13:** all printing happens in LA (in-house or a local vendor); **hardware is imported from China.** An unqualified made-in claim on a product whose hardware is imported is not accurate. Printing is split between in-house and local vendors, so "our Lynwood shop" only fits jobs actually printed in-house. (Not legal advice — the FTC "Made in USA" standard is the reference if a made-in claim is ever reconsidered.) |
| **Hardware** | "Printed in LA on imported hardware" — only when the question comes up (e.g., FAQ "Where are your tents made?") | Silence that implies domestic hardware when asked directly | Carlos 2026-09-13 |
| **Timeline** *(ruled 2026-09-13)* | Headline: "**Fast nationwide delivery**" (ES "Envío rápido a todo el país"). Fact line: "**Most orders ship within 5 business days of proof approval.**" (ES "La mayoría de los pedidos se envían dentro de 5 días hábiles después de aprobar la prueba.") Rush: "**Rush available on request, quoted per project.**" Deadline: "**Tell us your event date before you approve your proof and we'll confirm it in writing.**" | "Guaranteed," "We'll meet your deadline" (unconditional), "5 days or less," "3-day," "Rush (3 days)," "delivered in 5 days" (orders *ship* within 5 business days; transit is extra) | **Carlos 2026-09-13:** orders ship within 5 business days; rush is a paid service available on request and quoted per project. The deadline promise is backed by refund policy §7 / shipping policy §12 (a date confirmed in writing and missed due solely to our error gets a priority rush reprint or replacement, or a refund discussion). Supersedes the 6/17–9/13 "5 business days from proof approval" phrasing. |
| **Free proof** | "Free proof on orders of $500+" | "Free proof on every order" | [[master-price-sheet]] (7/13 ruling) |
| **Shipping** | "Free ground shipping on orders over $500, or pickup in Lynwood" | | Live invoice template #D156, 2026-09-08 |
| **Ratings** | "4.8★ on Google (19 reviews)" — **re-verify the count before each use** | Self-served AggregateRating schema | Count last confirmed 2026-06-17; no AggregateRating by design ([[free-proof-landing-page]]) |
| **Color** | "We match your colors as closely as large-format printing allows, and you see it on the proof first" | "Pantone match," "neon" on standard vinyl | [[print-color-and-material-limits]] |
| **Heritage** | "20 years of production experience" | "Donut Media in 3 days" (retired) | [[brand-identity-system]] |

## From-prices (live storefront, 2026-09-13)
Re-pull quarterly and before any article that states a price.

| Category | From | Product |
|---|---|---|
| 10x10 custom tent | $800 (to $1,600 complete set) | `10ft-x-10ft-event-tent-canopy` |
| 10x15 custom tent | $1,280 | `10-x-15-event-tent` |
| 10x20 custom tent | $1,400 | `10ft-x-20ft-event-tent-canopy` |
| Tent half wall / back wall | $240 / $320 | |
| SEG backdrops | $248 (3ft tabletop SEG) | `3ft-seg-tension-fabric-display` |
| Pillowcase backdrop | $288 (36″); 48″ $450 | [[memorial-displays-vertical]] |
| Flags | $120 | `feather-angled-flag` |
| Table throws / runners | $88 | 6ft runner + blank throw |
| Wall art | $98 | floating frame canvas |
| Tent banners | $16 | smallest variant — don't use as a "banners from" headline without checking size |

⚠️ **Contradiction noted:** the 8/11 pillowcase email campaign used "backdrops from $288," while the live backdrop collection's floor is $248 (3ft tabletop SEG). Both are true for different products — name the product when quoting a floor.

## Where these facts must match (monthly audit)
Site schema (LocalBusiness/Organization) · homepage + collection + product metas · GBP · Yelp · LinkedIn · Merchant Center business info · Bing Places · Apple Business Connect · directory listings · quote/invoice templates. *(Venus's signature retired — she left the company 2026-09-13.)*

**Listing state as of 2026-09-13 (Carlos):** Yelp name updated; the Yelp phone (currently 323.249.4449) changes to **213.817.9188** by phone on 2026-09-14; LinkedIn, Yelp, and GBP edits were made on 2026-09-13 (details not recorded — verify at the first monthly audit).

**Site state as of 2026-09-13 (live, verified):** LocalBusiness schema carries this sheet's name, alternateName, 213 telephone, 844 contactPoint, address, foundingDate, and sameAs (Instagram + Yelp — add the GBP, LinkedIn, and Facebook URLs once confirmed). **Later 9/13:** all product/collection metas and descriptions, trust badges, tent pages, product FAQ tabs, the homepage, and the free-proof LP (EN + ES) moved to the new timeline wording ("Printed in LA. Ships within 5 business days of approval." in metas; "Fast nationwide delivery" badges; rush + written-date line in FAQs); theme commits `e99da81` + `ae2ab6a`. Still off-sheet: the homepage title/meta ("Booth Kits and Bundles… 5 Day Nationwide Delivery," admin Preferences), store policies (paste-ready files pending), and the PageFly home slides. Change log: `Operations/SEO Visibility 2026-09/CHANGELOG_2026-09-13.md`.

## Related pages
- [[search-visibility-game-plan]]
- [[phone-number-map]]
- [[brand-identity-system]]
- [[linkedin-gbp-optimization]]
- [[master-price-sheet]]
