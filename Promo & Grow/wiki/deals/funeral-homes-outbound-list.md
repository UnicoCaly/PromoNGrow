# Funeral Homes — Apollo Outbound List

**Summary**: A net-new cold-outbound vertical built from Apollo — funeral homes & mortuaries, decision-makers with **verified emails**. Funeral homes are a plausible buyer of banners, feather flags, tents, table covers, and memorial/event signage for community events (Día de los Muertos, grief walks, expos) plus storefront/directional signage. **58 verified-email decision-makers across ~60 companies** delivered so far (LA County → OC/IE → all-CA → AZ + OR). Data lives in `Sales/`.

**Type**: source-summary

**Sources**: Apollo people/company search + enrichment (`apollo_mixed_companies_search`, `apollo_mixed_people_api_search`, `apollo_people_bulk_match`), pulled 2026-08-03 → 2026-08-05; Carlos direction 2026-08-03.

**Last updated**: 2026-08-07 (offer-side link added — [[memorial-displays-vertical]]).

---

## The rule for using this list
Same as [[apollo-net-new-list]]: cold prospects → the **[[cold-email-sequence|bilingual cold-email sequence]]** on the cold domain (promoteandgrow.com), NOT Venus's phone. Enrich → load into a sequence → only responders graduate to [[venus-work-queue]]. Machines do volume; Venus closes warm.

## What's been pulled (files in `Sales/`)
| File | Scope | Rows | Verified emails |
|---|---|---|---|
| `Funeral-Homes-LA-Apollo-2026-08-03.csv` | LA County, owner/GM | 17 | 9 |
| `Funeral-Homes-LA-Apollo-Batch2-Verified.csv` | LA County, verified-only (+ big-operator marketing/events buyers) | 10 | 10 |
| `Funeral-Homes-OC-IE-Apollo-Batch3-Verified.csv` | Orange County + Inland Empire | 10 | 10 |
| `Funeral-Homes-California-Apollo-Batch4-Verified.csv` | Rest of California | 19 | 19 |
| `Funeral-Homes-AZ-OR-Apollo-Batch5-Verified.csv` | Arizona (6) + Oregon (4) | 10 | 10 |

Each row carries company, city/region, contact, title, verified email, company phone, website, LinkedIn. **~68 Apollo credits** spent to date (email reveals + two company searches; people searches are free).

**AZ/OR note (2026-08-05):** the AZ+OR exec-level verified universe was only **43**, and heavily polluted by adjacent-industry noise — **Precoa** (a funeral-*marketing SaaS* in Portland, ~19 of the 43), **Science Care** (body donation), tissue networks, funeral consulting, and an answering service. Only **10 were genuine funeral homes** (6 AZ around Mesa/Phoenix, 4 OR — Portland/Salem/Eugene/Boring), all enriched. Notable: Cornerstone's Elizabeth Fournier (Green Burial Guidebook author / TEDx); Terry Family (well-known Portland home).

## The key operational finding (verified-email coverage)
Verified emails **concentrate in larger operators** — memorial parks and multi-location mortuaries (Forest Lawn, Rose Hills, Hillside, Mount Sinai, Green Hills, Hollywood Forever, East Lawn). Most **small neighborhood family homes are not in Apollo with an email at all** — Apollo has the owner's name, title, LinkedIn, and the company's main line, but no personal email. So a "verified emails only" list structurally skews toward mid/large operators. To reach the small bilingual family homes (the [[positioning-and-personas|ganas]] fit), the path is **phone reveal** (separate credits) or the website contact form, not email.

## Two buyer types in the data
1. **Large memorial parks** — real marketing/events budgets and community events. The buyers here are the **marketing/events leads**, not the owner: e.g. Forest Lawn's Events Manager (Marketing), East Lawn's VP Ops & Marketing, Hillside/Mount Sinai marketing managers, Rose Hills' Event Manager. **Hollywood Forever** is effectively an events venue (concerts, the big Día de los Muertos festival) — its Director of Cultural Events (Jay Boileau) is the display buyer.
2. **Small family mortuaries** — owner-operated, often Spanish-speaking (Continental, Guerra Gutierrez in East LA). Fit the bilingual/ganas angle for storefront signage, A-frames, banners. Mostly no verified email → phone/website outreach.

## Nationwide scope (measured 2026-08-05)
| Scope | Verified contacts (Apollo) | ~Genuine funeral homes after cleanup | ~Credits to enrich |
|---|---|---|---|
| California, owner/exec | 87 | ~40 (19 net-new delivered) | ~19 (done) |
| **US, owner/exec (one per home)** | **~1,622** | **~1,000–1,200** | **~1,000–1,600** |
| **US, all roles** (adds GMs, funeral directors, marketing) | **~7,532** | ~3,000+ (many multiples/home) | ~7,500 |

Cleanup rate matters: the raw keyword net pulls ~35–45% non-funeral noise (pet cremation, urn/casket retailers, funeral **software**/**lending**/insurance firms, plus foreign homes) that gets filtered out before enrichment. A nationwide pull is a **phased project**, not a single run — 1,000+ email reveals is 100+ enrichment batches and a large credit spend. Recommend: prioritize the biggest funeral markets first (TX, FL, NY, PA, OH, IL, CA-done), or export/enrich in Apollo's UI in bulk, and gate the spend on the vertical proving out (see open flag).

## Open flag — confirm the vertical before a big spend
Funeral homes are **off the core P&G ICP** (event/SMB/*ganas* entrepreneurs). They're a defensible adjacent vertical (community-event displays + signage), but a 1,000–1,600-credit nationwide pull should wait until the offer angle is validated on the California list — one bilingual cold email → a few replies → a close — before scaling. (Carlos to confirm the angle; the vertical was his direction 2026-08-03.)

**Update 2026-08-07 — the offer side now exists:** [[memorial-displays-vertical]] — the reusable memorial display system (razor-and-blades: 36″ $288 / 48″ $450, replacement tributes $150/$188), with LP v1 staged and research showing the reseller math (~$157/service margin at a $345 GPL price). The validation cold email should pitch **that** offer with the LP as its destination once the page is live; the "one email → replies → a close" gate stands.

## Next steps
- Consolidate the four CSVs into one master (deduped, region column) — pending.
- Draft the **bilingual cold email for the funeral-home vertical** (memorial/community-event angle + storefront signage) → would live on [[cold-email-segment-copy]].
- **Phone reveal** for the no-email small homes (separate credits) for a call lane.
- Carlos: confirm the vertical/offer angle + how far to take the nationwide pull.

## Related pages
- [[memorial-displays-vertical]] — **the offer side** (8/6–8/7): the reusable memorial display system + LP this list will pitch
- [[apollo-net-new-list]] — the original LA net-new prospecting list (the model for this)
- [[outbound-fishing-playbook]] · [[cold-email-sequence]] · [[cold-email-segment-copy]]
- [[apollo-two-brand-setup]] · [[positioning-and-personas]] · [[venus-work-queue]]
