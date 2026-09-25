# Search Visibility Game Plan (SEO · AEO · GEO)

**Summary**: The plan to turn organic and AI search into a steady, measured lead source. It starts from a 2026-09-13 baseline check of the live site, Google Merchant Center, and third-party listings. Three parts: (1) fix the facts AI engines already repeat about P&G, (2) build an "Answer Factory" that publishes one answer page a week from knowledge the wiki already holds, and (3) track every lead's source so the channel can be judged in dollars.

**Type**: channel

**Sources**: `Operations/PNG Claude Chat/aeo-geo/AUDIT.md` (2026-05-24 AEO/GEO audit); `Operations/SEO Audit 2026-07/AUDIT.md` + `drafts-content.md` (2026-07-07 audit + apply pass); `Operations/PNG-Store-Claims-Fix-List_7.30.2026.md`; live site crawl 2026-09-13 (curl of home, tent pages, PDPs, sitemaps, llms.txt); Google Merchant Center August 2026 performance email (received 2026-09-10); web-search spot checks 2026-09-13; Carlos direction 2026-09-13 (inbound week; rulings: sourcing claim, both leads = ChatGPT, weekly 15-min review, tool-free); Shopify Analytics sessions-by-referrer pull 2026-09-13; Gmail threads for Cadenza America + Lava Curry #D156; `raw/AEO Basics.pdf` + HubSpot State of AEO material (2026-09-20) → [[aeo-citation-method]].

**Last updated**: 2026-09-20 (AEO method ingested → §4c).

**Channel**: Organic search (Google/Bing), AI answer engines (ChatGPT, Perplexity, Gemini, Google AI Overviews / AI Mode), Google Business Profile + Maps, Google free Shopping listings, agentic shopping surfaces (Shopify UCP, Meta AI).

**Status**: **Approved 2026-09-13** (Carlos): tool-free for now; weekly 15-minute review on **Tuesdays**. All six decisions are ruled (§7). **Phase 0 went live 2026-09-13:** claims recut across 34 product metas, 20 product descriptions, and 12 collections (Admin API); LocalBusiness schema + 213 phone + footer NAP + "Printed in LA" trust badges (theme commit `fca5762`). Details: `Operations/SEO Visibility 2026-09/CHANGELOG_2026-09-13.md`. **Merchant Center:** a **Misrepresentation** issue blocks all products in the US; Carlos requested a review 2026-09-13 (Google says "a few days").

**Performance**: **2 ChatGPT-sourced leads in the week of 2026-09-07** (Carlos 2026-09-13): **Cadenza America** — won 2026-09-08, $1,800, 20ft SEG + poster stand, printed and shipped 2026-09-10 · **Lava Curry** — draft #D156 sent 2026-09-08, $3,336.00 subtotal ($3,694.63 with tax), 10x10 complete set + pillowcase displays + flags + ballast + half wall + A-frame, open. Shopify-tracked ChatGPT referral sessions: **6 in 180 days**, and **4 of the last 5 landed on `/products/10ft-x-10ft-event-tent-canopy`** (8/12, 8/18, 8/26, 9/10); the other two landed on `/` (7/13, 7/30). Last 30 days, all sessions: 265 total · direct 231 · Google 22 · ChatGPT 3 · Facebook 5. (source: Shopify Analytics sessions by referrer, pulled 2026-09-13.) ChatGPT app visits often arrive without a referrer and show up as "direct," so 6 is a floor, not a count.

---

## 1. Baseline — what is true on 2026-09-13

### What already works
- **3 tent answer pages are live** with FAQPage schema: `/pages/custom-10x10-event-tent`, `-10x15-`, `-10x20-` (created 2026-07-07). (source: SEO Audit 2026-07/AUDIT.md; live check 2026-09-13)
- **9 collections have SEO titles, metas, and on-page descriptions with real from-prices.** 31 product images have alt text. 5 junk/legacy-bundle products are hidden from search. (source: SEO Audit 2026-07/AUDIT.md)
- **Store name fixed.** `og:site_name` = "Promo & Grow", and page titles end "– Promo & Grow". (source: live check 2026-09-13)
- **The free-proof page carries bilingual FAQ + LocalBusiness/Service/FAQPage JSON-LD** (V2, 2026-07-20). (source: [[free-proof-landing-page]])
- **The crawl surfaces are healthy.** robots.txt is open to AI crawlers. Shopify serves `llms.txt` (an agent-commerce file), `/.well-known/ucp`, an agentic discovery sitemap, and en/es hreflang. (source: live check 2026-09-13)
- **Shopify reports the catalog is live in Meta's AI agent** (Shopify email 2026-09-09).

### Gaps, ranked by impact

| # | Gap | Evidence | Why it matters |
|---|---|---|---|
| G1 | **Third-party sources feed AI engines outdated or conflicting facts about the business** | A web-search AI summary for "Promo & Grow promongrow.com Lynwood" described the business as "formerly known as PrintCo Direct," said projects are "delivered in 5 days or less," and gave phone **(323) 249-4449**. The Yelp listing is titled "PROMOTE & GROW." The LinkedIn result is "PrintCo Direct Inc." Merchant Center reports under "Promote & Grow Shop." Search snippets still show "– Promote & Grow Shop" titles. (source: web search 2026-09-13; Merchant Center email) | AI answers are stitched together from these sources. **(323) 249-4449 is the Proágo line and never belongs on P&G touchpoints** ([[phone-number-map]]). "5 days or less" is the unconditional SLA wording the brand retired ([[brand-identity-system]]). AI engines are repeating claims we no longer make. |
| G2 | **Merchant Center: 368 products Not approved, 0 approved** | August 2026 report: 368 not approved / 0 limited / 0 approved; non-product-page traffic from Search = 7 clicks / 1.37K impressions / 0.5% CTR. (source: Merchant Center email received 2026-09-10) | Google's free Shopping listings and AI Mode shopping answers pull from this feed. The whole catalog is currently invisible there. |
| G3 | **The staged July SEO theme batch was never pushed** | The homepage still emits a thin `Organization` block with **8 empty `sameAs` strings** and only Instagram filled. No LocalBusiness schema outside the free-proof page. The homepage meta still reads "Produced and shipped in 5 business days or less nationwide," and so does the ES homepage meta. (source: live check 2026-09-13; SEO Audit 2026-07 "Ship it" command) | Weak entity record. The retired SLA claim sits in the most-crawled meta on the site. |
| G4 | **Claims still live in product metas** | 10x10 tent meta: "5-day **guaranteed** delivery. 4.8★ rated." The 22-item claims fix list (2026-07-30) is still awaiting "go." (source: live check 2026-09-13; dashboard open item 15) | AI engines and agents quote meta descriptions almost verbatim. |
| G5 | **Sourcing claim worded wrong at scale — RULED 2026-09-13** | "Made in LA" / "printed in Lynwood" appears in most product metas and all 9 collection descriptions. **Carlos's ruling:** everything is printed in LA (in-house or a local vendor); hardware is imported from China. Approved wording = "**Printed in LA**"; no "Made in LA/USA" on products with hardware. (source: live check 2026-09-13; Carlos 2026-09-13; [[entity-facts-sheet]]) | AI engines copy metas almost verbatim. The "Made in LA" → "Printed in LA" recut now joins the claims fix list (Phase 0.4). |
| G10 | **The page ChatGPT sends buyers to has the worst claim on the site** | 4 of the last 5 ChatGPT referral sessions landed on the 10x10 tent PDP, whose meta reads "Custom-printed 10x10 event tent built to order in Los Angeles… **5-day guaranteed delivery. 4.8★ rated.**" (source: Shopify Analytics + live check 2026-09-13) | Top Phase 0 fix: this is the highest-value AI landing page and it states a retired guarantee. |
| G6 | **Blog has zero articles** | `sitemap_blogs_1.xml` lists only `/blogs/news`. The `article.aeo` template (Article + FAQPage schema) has existed since July with no articles published. (source: live check 2026-09-13; theme `templates/article.aeo.json`) | Answer engines cite explainer content. For "how much does a custom 10x10 canopy cost," the cited sources were buyer's-guide blog posts, not product pages. (source: web search 2026-09-13) |
| G7 | **No lead-source capture and no AI-visibility tracking for P&G** | No "how did you find us" field on the free-proof/quote forms. No `src:organic` / `src:ai` tag values in use. HubSpot's weekly AEO summary tracks **Proágo** only (0.0% visibility, 9/2–9/9); P&G has no prompt tracking. (source: Gmail 2026-09-10; [[shopify-tag-taxonomy]]) | The channel can't be judged, so it can't be scaled with confidence. |
| G8 | **Legacy PageFly pages still indexed** | `/pages/opts-in-oct`, `/pages/flags`, `/pages/wallart`, `/pages/collection-bundle`, `/pages/bundles` are in the pages sitemap. (source: live check 2026-09-13) | Thin/duplicate pages with multiple h1s and stale bundle messaging (bundles were retired 8/8). |
| G9 | **The memorial display LP is staged, not deployed** | No memorial URL in the sitemap. (source: live check 2026-09-13; [[memorial-displays-vertical]]) | The 8/6 research found no one selling a reusable fabric memorial system into funeral homes. An empty category is the easiest answer to win. |

### Competitive read (spot checks, 2026-09-13)
- **National DTC canopy brands own the generic tent queries**: Extreme Canopy, ABCCanopy, MasterCanopy, Vispronet ("from $349.99"), BannerBuzz, CustomTentsWithLogo. P&G's $800 10x10 can't win "cheapest custom tent" and shouldn't try. (source: web search 2026-09-13)
- **LA local printers own "[product] Los Angeles"**: Tents With Graphics, LA Banners and Signs, Printing Fly (city-by-city SEG pages), Promotional Design Group (county pages). (source: web search 2026-09-13)
- **Price questions are answered from blog guides** (Westshade "How much does a custom canopy cost?"). (source: web search 2026-09-13)
- **None of the results checked had Spanish-language content.** The bilingual moat is uncontested in search (spot check only, not exhaustive).

---

## 2. Strategy — where P&G can win

Stop competing on generic product-plus-price. Compete where the business is already different, and where buyers ask long, specific questions that AI engines have to answer:

1. **Systems, not single products.** "Complete festival vendor booth setup," "trade show backwall with podium," "what do I need for a 10x10 vendor booth." The Lava Curry request (#D156, 2026-09-08: turnkey, corner flags, repeated festival use, ballast, proofs, files, color, timing) is exactly this question set.
2. **Honest pricing and "what's included."** Real ladders ($800 tent / $1,600 complete set), why a $349 tent costs less, and what the 5-business-day clock actually starts from.
3. **Production truth.** File specs, neon/Pantone limits, indoor vs. outdoor materials, and sizes. The wiki already holds answer-grade material ([[print-color-and-material-limits]], [[product-size-guide]], [[product-application-guide]], [[file-prep-gate]], [[proof-vs-design-policy]]).
4. **Buyer verticals where P&G already closes**: food and festival vendors (Lava Curry), corporate/trade show SEG (Cadenza America, won 2026-09-08, $1,800), schools/alumni/nonprofits (Compton High Alumni #D158, Lynwood USD, South Gate), clubs and venues (Virginia Country Club, 2026-09-08 thread), funeral homes ([[memorial-displays-vertical]]).
5. **Bilingual LA.** Spanish answer pages for the same questions, written natively ([[bilingual-spanish-moat]]).
6. **Consolidate the entity instead of fighting it.** Declare the 20-year PrintCo Direct heritage explicitly (schema `alternateName` + an About/History page) so AI engines merge the old and new names into one business rather than splitting them. *(Pending Carlos's ruling — Decision 3.)*

---

## 3. The system — "Answer Factory" weekly loop

One repeatable loop, owned by lane:

| Step | What happens | Lane | Time |
|---|---|---|---|
| **Capture** | Every inbound lead gets a source (`src:` tag) and the buyer's exact questions logged in a Question Bank sheet. Forms get a "How did you find us?" field (Google search · Google Maps · ChatGPT/AI assistant · Instagram · referral · other). Venus asks on the first call. | Claude Code (form field) · Venus (log on call) · Claude-admin (sheet) | ~1 min per lead |
| **Pick** | Monday: choose the week's question — highest-value, most-asked, or tied to a vertical push. | Claude-admin | 10 min |
| **Draft** | Claude drafts one answer asset from wiki facts + live Shopify prices: an `article.aeo` article, or an FAQ block on a PDP/collection. Structure: direct answer in the first 2 sentences → table/specs → FAQ → free-proof CTA ($500+ only). Runs the brand claims preflight. | Claude-admin | — |
| **Approve** | Carlos approves or edits. | Carlos | ~15 min/week |
| **Publish** | Published via Admin API. The Spanish version ships the same or next week. Internal links from the matching PDP/collection. | Claude-admin | — |
| **Repurpose** | The same piece becomes the Thursday value-spine email ([[email-calendar-h2-2026]] already schedules 15 tips emails — publish them as articles first), a GBP post, and an IG carousel/Reel script. | Claude-admin drafts · Carlos/VA sends · Venus/creator posts | — |
| **Measure** | Monthly: prompt panel, GSC, Merchant Center, source tags → [[dashboard]]. | Claude-admin | ~30 min/month |

**Canonical facts sheet (prerequisite).** One page of exact wording that every article, meta, listing, and schema block pulls from: legal/brand name, alternate names, address, public phone, hours, service area, product categories, SLA phrasing ("5 business days from proof approval + payment"), free proof ($500+), from-prices (re-pulled from live Shopify each quarter), review counts, and the ruled sourcing claim. Stale facts are the main GEO risk — the $668 legacy-bundle price was hidden in July for exactly this reason. (source: SEO Audit 2026-07/AUDIT.md)

---

## 4. Phased plan

### Phase 0 — Fix the facts (week of 9/14; mostly one-time)
| # | Action | Lane |
|---|---|---|
| 0.1 | ~~Rule on Decisions 1, 4–6~~ ✅ 2026-09-13 · canonical facts sheet ✅ drafted → [[entity-facts-sheet]] (PrintCo heritage + listing phone still open) | Carlos → Claude-admin |
| 0.2 | **NAP cleanup**: Yelp name ✅ updated (Carlos 9/13); Yelp phone off 323 → call scheduled 9/14 (recommend 844.883.3308); LinkedIn + GBP edits made 9/13 (verify against [[entity-facts-sheet]]); Merchant Center business name still "Promote & Grow Shop" | Carlos/VA |
| 0.3 | ✅ **RESOLVED 2026-09-14** — Google's review of Misrepresentation completed and cleared (account "Promo & Grow" 5661034785). Next: recheck the approved-product count in a few days; keep policies/claims clean so automated checks don't re-flag. *Original diagnosis:* **Merchant Center — diagnosed 2026-09-13: account-level "Misrepresentation"** (automated check; blocks all products in the US; review requested 9/13). Google's checklist covers business-identity transparency, policies, reputation, and matching business info. Live store issues likely feeding it (found 9/13): policy placeholders ("[insert pickup address]", "Effective date: [Month Day, Year]", "Optional notes you can keep or remove"), three business names across policies ("Promote & Grow Shop" / "Promo N Grow" / Proágo) with proagobranding.co emails, vendor stock art with fake "50% OFF" + placeholder phone on the pillowcase PDP, the homepage "or less" meta, and — fixed 9/13 — guarantee/Made-in-USA claims. The separate "Shopping ads: account over capacity (outside CSS program)" line concerns paid Shopping ads, not free listings. | Claude-admin fixes (on "go") · Carlos |
| 0.4 | ✅ **Done 2026-09-13** — 10x10 meta fixed; claims list + "Printed in LA" recut applied across 34 product metas, 20 descriptions, 12 collections; theme trust badges/footer/contact/LP v2 recut. ⏳ **Homepage title/meta** remains (admin Preferences only — paste copy in the changelog). | Claude-admin · Carlos (homepage) |
| 0.5 | ◐ **LocalBusiness schema shipped 2026-09-13** (built fresh on the live code, not the stale July batch): alternateName, 213 telephone, 844 contactPoint, NAP, sameAs Instagram + Yelp. Remaining: BreadcrumbList, meta fallbacks, adding GBP/LinkedIn/Facebook URLs to sameAs. ⚠️ The local clone is 4 commits behind live — `git pull` before any local theme push. | Claude Code |
| 0.6 | Add the "How did you find us?" field + `src:` tag values; record this week's two leads (which lead, what they searched/asked) | Claude Code · Carlos · Claude-admin |
| 0.7 | Baseline: GSC export (queries/pages, 90 days), GA4 AI-referrer channel group (chatgpt.com, perplexity.ai, gemini.google.com, copilot), first prompt-panel run. Shopify referrer baseline ✅ pulled 9/13 (see Performance). | Claude-admin (Carlos grants GSC/GA4 access) |
| 0.8 | **Bing Webmaster Tools + Bing Places** (free): verify promongrow.com (import from GSC), submit the sitemap, claim Bing Places with the facts-sheet NAP. ChatGPT search draws heavily on Bing's index, and ChatGPT is the channel that just produced both leads. | Carlos (verify) · Claude-admin (setup steps) |
| 0.9 | **Ask ChatGPT-sourced buyers what they asked.** Cadenza (won) and Lava Curry: one line in the next touch ("Quick question — what did you ask ChatGPT when you found us?"). The exact prompts become the first prompt-panel entries and article topics. | Carlos / Venus |

### Phase 1 — Foundation (weeks 2–6)
- **PDP FAQ schema**: turn the 6 plain-HTML FAQ tabs into schema-emitting blocks; add specs/"what's included" tables as real text. (Claude Code)
- **Collections**: add 4–6 FAQs + a comparison table to tents, backdrops, flags, table throws. (Claude-admin)
- **Deploy the memorial LP** + publish its answer article. (Carlos sign-off → Claude Code)
- **Noindex/retire the legacy PageFly pages** (G8). (Carlos rules → Claude-admin)
- **Spanish FAQs on the 3 tent pages** + a Spanish price article. (Claude-admin)
- **About / 20-year history page** with Organization `alternateName`, `foundingDate`, real photos. (Claude-admin + Carlos facts)
- **GBP engine**: services/products complete, weekly posts (from the Answer Factory), Q&A seeded with real buyer questions, monthly photo upload. Review asks on every completed order: 19 → 50 reviews. (Carlos/VA · Venus)
- **First 6 cornerstone articles** (list below).

### Phase 2 — Cadence (weeks 6–12)
- 1 answer asset per week (EN), ES within a week.
- 1 **vertical/use-case page** every 2 weeks: festival & food vendors · schools/alumni/nonprofits · corporate trade show · funeral homes · churches & community events · clubs & venues. Real use-case pages with case studies, **not** city-name doorway pages.
- **Case studies with permission**: Cadenza America (SEG backwall, <24h from artwork), Lava Curry (if won), Compton High Alumni (if won), Virginia Country Club. Each case study is structured as problem → setup → photos → price range → timeline.

### Phase 3 — Authority (months 3–6)
- **Citation sprint**: BBB, Chamber (Lynwood/South Gate), event-vendor directories, supplier lists. (Carlos/VA; BrightLocal optional)
- **Earned mentions**: local press (Latino-owned 20-year shop angle), event-industry trades, vendor partners (caterers, planners, rental companies) — ties to the referral-partnership net in [[growth-offensive-v2]].
- **Video**: product demos + setup videos on YouTube/IG from the [[social-video-creator]] / [[venus-social-ads-playbook]] shoot lists. AI engines cite videos, and setup demos answer real questions.
- **Community answers**: genuine, disclosed answers on Reddit (r/smallbusiness, r/EventPlanning, r/farmersmarket-type vendor communities) and Quora — only where there is a real question to answer.

---

## 4b. Refinements from the GA4 read (2026-09-14 → [[ga4-traffic-read-2026-09]])

**New Phase 0 items (measurement first — the channel can't be scaled while its leads are mislabeled):**
| # | Action | Lane |
|---|---|---|
| 0.10 | **Fix the `source` event-parameter bug**: the click-to-call, quote-trigger, and `generate_lead` events send `source:`, which GA4 treats as traffic source — calls and quote requests get relabeled "mobile-sticky" / "png-quote-modal" / "unknown" instead of Google/ChatGPT/Instagram. Rename to `cta_placement` + register as a custom dimension. | Claude Code |
| 0.11 | GA4 hygiene: internal-traffic filter; unwanted referrals (tagassistant, admin.shopify, adsmanager, shopfox, proagobranding.co, myshopify domain); a US-only saved comparison for all reporting; confirm which events are marked key (spam contact submits likely inflate the 1,158). | Carlos (GA4 admin) · Claude-admin (spec) |
| 0.12 | Fix 404s (~229 views YTD): export 404 page paths from GA4 (page path + title contains "404") or GSC, then add redirects. | Carlos exports · Claude-admin redirects |
| 0.13 | Hide `/pages/order-proof` ("Here's Your Proof…", ~114 views) from search — an operational page shouldn't be indexed or cited. | Claude-admin |
| 0.14 | Contact-form spam protection (the Contact page's 1,530 one-view visits look like bots). | Claude Code / Carlos |

**Content order, re-ranked by what real visitors browse:** (1) **Complete Booth Setups** — bundles pages drew ~510 views with 0 bundle orders; draft v1 ready for the 9/15 review (`Website/Complete Booth Setups/complete-booth-setups-DRAFT.md`) · (2) **custom 10x10 tent cost** (tents collection ~285 + 10x10 PDP ~177 views) · (3) **SEG vs. pillowcase vs. velcro backwalls** (backdrop collection ~258 + SEG PDPs ~200; Cadenza-type buyer) · (4) **feather vs. teardrop vs. rectangle flags: size, wind, and which to buy** (flags ~231, new to the list) · (5) file specs · (6) tent sizes · then the rest of §5. **Wraps** (~370 combined) earns an A-frame/backdrop wrap guide in the next batch. Wall art stays low.

**Targets (from the read):** search + AI first users ≈ 175 YTD (~20/month) → **~40+/month by mid-December**, and **≥2 correctly attributed search/AI quote requests per month** (depends on 0.10).

## 4c. Revision from the AEO method (2026-09-20 → [[aeo-citation-method]])

Carlos dropped an AEO walkthrough in `raw/` and sent HubSpot's State of AEO. Three findings change the plan's shape; the rest confirms it.

**What changes:**
1. **Off-site mentions move from Phase 3 to now.** In a 75,000-brand study, branded web mentions correlated with AI Overview visibility more strongly than backlinks, domain rating, or referring domains. P&G has almost none (Yelp, GBP, Instagram, one LinkedIn page). Mentions are the single highest-leverage lever and they were scheduled last.
2. **YouTube becomes a real decision, not a "nice to have."** YouTube is the most-cited domain in Google's AI Overviews, and YouTube mentions show a 0.737 correlation with ChatGPT visibility — the strongest single factor measured. The video seat has been empty since Venus left. Needs a ruling: Carlos on camera, hire a creator, or skip video and spend the effort on mentions.
3. **Freshness is a cadence, not a launch task.** 76% of ChatGPT's top-cited pages were refreshed within 30 days; 89.7% within the year. A monthly refresh pass on the money pages (tents, SEG backdrops, flags, complete setups) joins the weekly publish rhythm.

**What's confirmed (keep doing):** comparison/list/cost formats (43.8% of ChatGPT-cited pages); classic SEO as the base (76% of AI Overview citations come from top-10 ranking pages); the "How did you find us?" field (self-reported attribution is called the most meaningful signal); AI-sourced leads as the headline metric (Ahrefs: AI = 0.5% of visits but 12.1% of signups, 23× organic; HubSpot ecommerce: 11.4% vs 5.3% — P&G's own 6 sessions → 2 leads fits the pattern).

**New standing rules for the Answer Factory:**
- **Length:** 600–900 words. Over half of AI-cited pages are under 1,000, and word count barely correlates with citation.
- **House style:** answer first (BLUF), sections that stand alone out of context, specific entities over vague benefits, one idea per sentence.
- **Every asset ships with:** a "Last updated" date, FAQ schema, and one internal link from the matching money page.
- **Click-trap filter:** if Google's AI Overview fully answers the query, target a brand mention rather than a click.

**Added to the phases:**
| # | Action | Lane |
|---|---|---|
| 1.7 | ▶️ **RUNNING from 2026-09-21** → [[mention-sprint-2026-09]]. **Mention sprint (was Phase 3):** 10–15 local/industry directories, BBB, chambers (Lynwood, South Gate, Compton), event-vendor and trade-show supplier lists, LA business press, partner/vendor sites (B2Sign, 4over, Signicade), and the Latino-owned-business directories. One evidence-backed page per listing. | Carlos/VA · Claude-admin drafts |
| 1.8 | ▶️ **RUNNING** (Tier 3 of [[mention-sprint-2026-09]]). **Community answers:** genuine replies where P&G's expertise is real — r/smallbusiness, r/farmersmarket, r/eventplanning, LA vendor groups, Quora threads on tent/booth questions. Disclosed, never astroturfed. | Carlos (voice) · Claude-admin drafts |
| 1.9 | **Monthly freshness pass:** update prices, dates, and one new fact on the tents, SEG, flags, and setups pages; re-stamp "Last updated." | Claude-admin |
| 2.4 | ⏸️ **DEFERRED ~2 weeks (Carlos 2026-09-20)** — pending a creator hire; mentions run first. **YouTube decision + first 3 search-hit videos** (if ruled yes): "how to set up a 10x10 canopy tent," "what is an SEG display," "10x10 vs 10x15 vs 10x20." Keyword in title + first description lines, chapters, keyword said aloud. | Carlos ruling → creator/Carlos |

## 5. First 12 answer assets (priority order)

Each asset is tied to a real buyer question or deal. EN first, ES noted where it's a priority.

1. **How much does a custom 10x10 canopy tent with a logo cost?** Honest ladder, what drives price, $349 vs. $800 vs. $1,600, what's included. *(+ES)*
2. **Festival & vendor booth checklist: everything a 10x10 setup needs** — tent, walls, flags + hardware, ballast, backdrops, A-frame. Built from the Lava Curry question list.
3. **What file does a printer need for a tent or display?** Vector vs. raster, 150–300 DPI, CMYK, bleed. *(+ES)* — from [[file-prep-gate]] / [[proof-and-production-templates]].
4. **Can you print neon or exact Pantone colors on a tent?** — from [[print-color-and-material-limits]]. Uniquely citable.
5. **10x10 vs. 10x15 vs. 10x20 tent: which size for your event?** — from [[product-size-guide]]; links the 3 tent pages.
6. **Reusable memorial displays for funeral homes: how swap-in tributes work** — from [[memorial-displays-vertical]].
7. **SEG vs. pillowcase vs. velcro pop-up backwalls explained** (Cadenza-type buyer).
8. **Indoor vs. outdoor event displays: what survives sun and wind** — from [[product-application-guide]].
9. **Buying displays for a school, alumni association, or nonprofit**: quotes for committees, W-9, POs, 501(c)(3) pricing, why sales tax still applies in California — from [[master-price-sheet]] (9/11 ruling).
10. **How long does custom event display production take?** The honest 5-business-days-from-proof-approval-and-payment timeline and what speeds it up.
11. **Custom tent vs. blank tent + banner: the 3-season cost** (repeat-use ROI).
12. **¿Cuánto cuesta una carpa personalizada con logo en Los Ángeles?** — a native Spanish original, not a translation of #1.

---

## 6. Measurement

| Layer | Metric | Source | Baseline (9/13) |
|---|---|---|---|
| Revenue | Search/AI/GBP-sourced quote requests → paid, $ | `src:` tags + Shopify drafts | Not tracked (2 leads credited by Carlos, unverified) |
| Visibility | Non-brand GSC clicks + impressions | Google Search Console | Not pulled |
| AI | Prompt panel: mention rate + citation rate across ChatGPT / Perplexity / Gemini / Google AI Mode, ~30 prompts (EN+ES, by vertical) | Monthly manual run logged in a sheet; paid tracker later | ✅ **Baseline run 2026-09-24** — 16 queries → [[ai-visibility-panel-2026-09]]. Brand queries 6/6; **category 0/7; Spanish 0/2**; sentiment clean, zero negative. Re-run monthly. |
| Shopping | Merchant Center approved products | Merchant Center | **0 approved / 368 not approved** (Aug 2026) |
| Local | GBP views, calls, direction requests; review count | GBP Insights | 19 reviews (last confirmed 2026-06-17) |
| Entity | NAP consistency across Yelp / GBP / LinkedIn / Merchant Center / site schema | Monthly audit | Inconsistent (G1) |

**Targets** are set after the Phase 0 baseline, not before. Proposed shape for day 90: Merchant Center majority approved · 12+ answer assets live · reviews 19 → 35+ · P&G named in a measurable share of the vertical prompts · search/AI-sourced quote requests tracked monthly with quote→paid %.

**Tooling — start free.** GSC, GA4, Merchant Center, and a Google Sheet panel cover Phase 0–1. Add a paid AI-visibility tracker only once the panel shows movement worth watching. The HubSpot account already runs AEO tracking for Proágo — check whether a P&G business unit fits the current plan before buying another tool (the connector returned a permissions error on 2026-09-13). BrightLocal ($39/mo per the May audit) only for the Phase 3 citation sprint.

---

## 7. Decisions (Carlos)

1. ✅ **Sourcing claim — RULED 2026-09-13:** everything is printed in LA (in-house or a local vendor); hardware comes from China. Approved wording is "Printed in LA," with no "Made in LA/USA" on products with hardware → [[entity-facts-sheet]]. This also sets the direction for dashboard item 18 (the store-wide Made-in-USA badge).
2. ✅ **Public phone — RULED 2026-09-13:** **213.817.9188** (the local number) on Yelp (changing 9/14) and listings, added to the site. Live in schema, footer, and contact page; 844 kept as toll-free → [[phone-number-map]].
3. ✅ **PrintCo Direct heritage — RULED 2026-09-13:** "Formerly PrintCo Direct Inc." Live as schema `alternateName` + footer line.
7. ✅ **Weekly review day — Tuesday** (Carlos 2026-09-13).
4. ✅ **The two leads — ANSWERED:** Cadenza America and Lava Curry, both from ChatGPT (see Performance).
5. ✅ **Approval rhythm — YES:** a weekly 15-minute review.
6. ✅ **Budget — tool-free for now.** GSC, GA4, Bing Webmaster Tools, Merchant Center, Shopify Analytics, and a Google Sheet prompt panel.

### Question Bank — seeded from the two ChatGPT leads
- **Lava Curry (festival food vendor):** Can you supply the whole booth turnkey? Can corner flags mount to the tent? Will it hold up to repeated festival use? What ballast do I need? Do you send proofs and templates? What file format? Can you match my brand colors (yellow/red)? How long does it take? Delivery or pickup? Can you do an elevated header banner above the tent? (source: #D156 reply email 2026-09-08)
- **Cadenza America (corporate SEG backwall, event the following week):** 20ft SEG backwall options + a podium/travel case · a floor display that can arrive in time · can you set up the graphics without extra fees · can LED lights mount on the backdrop frame · the artwork didn't match the template (sizing) · delivery date. (source: Cadenza thread 2026-09-07→09-11)
- **Article implications:** asset #2 (booth checklist) and #7 (SEG backwalls) move up; add "**Can you design my backdrop artwork, and what does it cost?**" ([[design-price-rubric]]) and "**How to size artwork to an SEG template**" (the Cadenza file mismatch).

---

## Related pages
- [[google-search-engine]] — the paid-search counterpart (lean, still gated)
- [[free-proof-landing-page]] — the conversion destination; already carries FAQ + JSON-LD
- [[linkedin-gbp-optimization]] — GBP/LinkedIn copy + NAP work this plan's Phase 0 builds on
- [[memorial-displays-vertical]] — the uncontested-category answer page
- [[bilingual-spanish-moat]] · [[spanish-money-page-copy]]
- [[email-calendar-h2-2026]] — tips emails that double as articles
- [[content-engine]] · [[venus-social-ads-playbook]] · [[social-video-creator]]
- [[brand-identity-system]] — claims rules every asset preflights against
- [[shopify-tag-taxonomy]] — where the `src:` values get added
- [[theme-build-status]] — the staged SEO/claims batch
- [[dashboard]]
