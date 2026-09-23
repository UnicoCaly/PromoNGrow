# GA4 Traffic Read — Jan 1 to Sep 14, 2026

**Summary**: Interpretation of the GA4 Reports snapshot for promongrow.com (property "Promo N Grow"). Roughly 70% of recorded traffic appears to be bots or data centers, which hides a small real audience. Search and AI assistants are the clearest human channels. Two tracking bugs corrupt lead attribution. Complete setups, tents, and SEG backdrops are what real visitors browse.

**Type**: concept (funnel & metric review)

**Sources**: `Reports_snapshot (5).csv` + `Reports_snapshot (1).pdf` (GA4 export, provided by Carlos 2026-09-14, date range 2026-01-01 → 2026-09-14); live theme code check 2026-09-14 (`snippets/png-analytics-events.liquid`, `snippets/png-quote-modal.liquid`); Shopify Analytics referrer pull 2026-09-13.

**Last updated**: 2026-09-14.

**Metric**: search + AI first-time users = **175 YTD** (Google organic 133 · Bing organic 21 · ChatGPT 21); target set in §5.

---

## 1. Headline numbers (as reported)
| Metric | YTD value |
|---|---|
| Active users | 3,568 |
| New users | 3,590 |
| Avg engagement time per active user | 33 s |
| Event count | 26,876 |
| Key events (web) | 1,158 |
| Purchasers | 25 |
| Ecommerce revenue (GA4-tracked) | ~$15K (chart value; Shopify remains the revenue source of truth) |

(source: Reports_snapshot CSV/PDF)

## 2. Most recorded traffic is not human
- **Cities:** Moscow 1,452 active users (41% of all users), Tehran 255, Singapore 117, Bissen (LU) 78, Council Bluffs 73, Lanzhou 69, plus data-center towns (Boardman, Ashburn, Des Moines, Moses Lake, Cheyenne, Prineville, Quincy). A rough city classification puts **~71% of city-level users in obvious bot / data-center / out-of-market cities** and **~11% in Southern California** (Los Angeles 227, Anaheim 19, South Gate 16, Lynwood 14, Long Beach 12, Compton 8…). City rows double-count some users, so treat these shares as estimates.
- **Source:** 3,189 of 3,568 first users (89%) arrive as `(direct) / (none)`, the typical bot signature.
- **Contact page:** 1,530 views from 1,499 users (one view each, 6,644 events) — consistent with form-spam bots rather than buyers.
- **Timeline:** new users jumped from single digits to 35–134/day from about Apr 4 to Apr 28, then dropped to ~5/day overnight on Apr 29. An abrupt stop like that is a bot pattern, not a campaign.
- **Internal/test noise:** tagassistant.google.com 50 sessions, adsmanager.facebook.com 38, admin.shopify.com 28, apps.shopfox.io 25, proagobranding.co 15, the myshopify domain 4; San Salvador 19 users (Venus).

**Implication:** real human traffic is likely **well under 1,000 users YTD** (unverified estimate). Conversion rates calculated on 3,568 users understate real performance several-fold, and the 1,158 "key events" probably include spam contact submits (which events are marked key is unverified).

## 3. Real channels (first-user source, YTD)
| Channel | First users | Sessions | Notes |
|---|---|---|---|
| Google organic | 133 | 207 | Largest human search channel |
| Instagram (ig / social + referrals) | ~76 | ~80 | |
| Meta paid (facebook / l.facebook / m.facebook paid) | ~29 | ~29 | Low because Meta lead forms convert inside Meta, not on the site |
| Email (Shopify Email + campaigns) | ~33 | ~95 | Event SZN email 5/25 → visible new-user bump that day |
| **ChatGPT** (ai-assistant + not set + feed) | **21** | **28** | Produced Cadenza ($1,800 won) + Lava Curry ($3,336 open) in one week |
| Bing organic | 21 | 29 | Same size as ChatGPT; ChatGPT search leans on Bing's index |
| Yelp / LinkedIn / Google referral | 3 / 3 / 4 | | |

(source: Reports_snapshot CSV)

**Read:** search + AI (175 first users) is the biggest identifiable human acquisition channel on the site after bots are set aside. Per visitor, it has already produced the highest-value leads of the year.

## 4. What real visitors browse (views YTD, all title variants combined)
| Page group | Views | Read |
|---|---|---|
| Homepage | ~3,069 | Bounce 26–47%; title still "Booth Kits and Bundles" |
| **Bundles (collection + builder + bundle SKUs)** | **~510** | The #1 browse destination after the homepage — with 0 bundle orders in 180 days. Demand is for *complete setups*, not the discount mechanic → validates the Complete Booth Setups page |
| Tents & Canopies collection | ~285 | Plus ~177 views on the 10x10 PDP |
| Backdrop Display collection | ~258 | Plus ~200 across SEG display PDPs |
| Flags collection | ~231 | Low bounce (≈9%) |
| Wraps collection + wrap PDPs | ~221 + ~150 | A-frame and event backdrop wraps get steady interest |
| Best Sellers | ~206 | |
| Wall Art | ~140 | Lower priority |
| Table Throws | ~91 | |
| **404 Not Found** | **~229** | Broken inbound/internal links — fix with redirects |
| Order-proof page ("Here's Your Proof…") | ~114 | Operational page that is public and in the sitemap; should be hidden from search |
| Free-proof LP (EN) / Prueba gratis (ES) | ~77 / ~53 | Most LP traffic is Meta ads, which convert in-form |

Collection pages bounce at 3–9% versus 26–47% on the homepage: people who reach a category engage.

Page titles appear under three brand names during the year ("– Promote & Grow Shop", "– Promote & Grow", "– Promo & Grow"), fixed 9/13 — report by **page path**, not title, from now on.

## 5. Tracking bugs found (live theme, 2026-09-14)
1. **`source` event parameter overwrites traffic source.** `png-analytics-events.liquid` sends `click_to_call` and quote-trigger events with `source: <placement>`, and `png-quote-modal.liquid` sends `generate_lead` with `source: 'png-quote-modal'`. GA4 reads `source` as a traffic-source field, which is why "mobile-sticky / (not set)" (52 sessions), "unknown / (not set)" (16), "png-quote-modal / (not set)" (9), and "intent-router" (1) appear as *sources*. **The sessions that call or request a quote lose their real origin** (Google, ChatGPT, Instagram). Fix: rename the parameter (e.g. `cta_placement`) and register it as a custom dimension. **Lanes are split:** the rename is Claude Code; the custom-dimension registration is **Carlos (GA4 Admin)** — the theme lane cannot touch GA4 Admin. **✅ Rename done 2026-09-22, theme commit `7177412`** (all three emitters, incl. the `png-quote-modal.liquid` success page, which is the only path a modal quote submit actually takes). ⏳ **Registration still owed** — not retroactive, see [[conversion-tracking-setup]] step 5.
2. **Unfiltered bot + internal traffic.** Fix in GA4 admin (Carlos): define internal traffic + activate the filter; add tagassistant.google.com, admin.shopify.com, adsmanager.facebook.com, apps.shopfox.io, proagobranding.co, and the myshopify domain to *List unwanted referrals*; build a saved comparison "Country = United States" (or a US-only exploration) for all reporting. Longer-term: spam protection on the contact form so bot submits stop inflating key events.

## 6. Targets (human, US-only, measured monthly)
- **Baseline:** search + AI first users ≈ 175 over 8.5 months ≈ **~20/month** (all-country; US-only unknown until the filter exists).
- **Day 90 (mid-December 2026):** **2×** — ~40+/month search + AI first users, and **≥2 search/AI-sourced quote requests per month** attributed correctly (requires bug #1 fixed).
- Leading indicators: Merchant Center approved products (recheck after 9/14 reinstatement), GSC non-brand clicks, the monthly prompt panel.

## Related pages
- [[search-visibility-game-plan]] — priorities refined from this read
- [[entity-facts-sheet]]
- [[conversion-tracking-setup]]
- [[dashboard]]
- [[meta-funnel-review-2026-07-09]]
