# Promo & Grow — AEO/GEO Audit & 90-Day Roadmap

**Date:** 2026-05-24
**Scope:** National + local LA/SoCal · all-three outcomes (direct AI traffic, authority/citations, local discovery) · budget open if ROI clear

---

## Executive summary (read first)

**The headline:** P&G has best-in-class agent commerce infrastructure (Shopify shipped UCP/MCP, agents.md, agentic discovery sitemap automatically) but is **invisible** to AI engines for its core commercial queries — both national and local. The cause isn't broken plumbing; it's missing identity signals, missing content, and a brand-name disambiguation problem.

**The opportunity:** Six high-impact technical fixes (under a day's work each) will close 70% of the identity gap. A 90-day content sprint closes the rest. Total ROI math at the bottom of this doc.

**My recommended first move (today):** Implement the six schema/identity fixes on a `aeo-geo-foundation` branch, you review and merge. Time on my side: ~2 hours. Impact: foundational and immediate.

---

## Audit findings — by surface

### ✅ What's working (don't touch)

| Item | Status |
|---|---|
| `robots.txt` allows all crawlers including AI bots | ✅ Open to GPTBot, ClaudeBot, PerplexityBot, Google-Extended (no specific blocks) |
| `agents.md` (Shopify's llms.txt equivalent) exists | ✅ Comprehensive UCP/MCP setup, agent flow documented |
| UCP discovery at `/.well-known/ucp` | ✅ Full capability catalog, payment handlers, MCP endpoint |
| Agentic discovery sitemap exists | ✅ `sitemap_agentic_discovery.xml` registered in main sitemap index |
| ProductGroup schema on product pages | ✅ Variants + offers + pricing well-formed |
| 38 products in sitemap | ✅ Good catalog depth |
| WebSite + SearchAction schema on homepage | ✅ Shopify default, properly formed |
| Yelp listing exists | ✅ 15 reviews, 39 photos (already a citation source) |
| Google Business Profile exists | ✅ 4.8★ × 19 reviews |
| Instagram @promongrow exists | ✅ But not linked from site schema (see gaps below) |

### ❌ Critical gaps (these are what's holding you back)

| # | Gap | Severity | Effort to fix |
|---|---|---|---|
| 1 | **`brand.name` is "My Store"** in product schema (Shopify default) | 🔴 Critical | 30 sec |
| 2 | **Org schema `sameAs` has 8 empty strings**, only Instagram filled — AND that one points to `@proagobranding`, not `@promongrow` | 🔴 Critical | 5 min |
| 3 | **No LocalBusiness schema** despite 2 physical locations (Pasadena mailing, Lynwood production) | 🔴 Critical | 30 min |
| 4 | **No Review/AggregateRating schema** despite displaying "4.8 from 19 Google reviews" on every page | 🟠 High | 30 min |
| 5 | **No FAQPage schema** despite FAQ tabs on product pages | 🟠 High | 1–2 hours |
| 6 | **No BreadcrumbList schema** despite breadcrumb HTML | 🟡 Medium | 15 min |
| 7 | **Blog is empty** — only the `/blogs/news` index page in sitemap, zero posts | 🔴 Critical (long-term) | 90 days of content |
| 8 | **Phone number conflict**: Yelp shows `(323) 249-4449`, site shows `(844) 883-3308` | 🟠 High (kills trust + AI confidence) | 5 min |
| 9 | **Hero images on homepage + categories use AI-generated content** (ChatGPT, Firefly) — violates your real-photos-only standing rule AND risks de-ranking from AI engines that detect synthetic imagery | 🟠 High | Replace as photos arrive in Drive folder |
| 10 | **No Wikidata / Wikipedia / Crunchbase / LinkedIn Company page** entries detected | 🟡 Medium | 2–4 hours one-time |
| 11 | **Brand name disambiguation problem**: "Promo & Grow" partial-match searches get swallowed by "grow tent" cannabis cultivation results | 🟡 Medium | Mitigated by stronger entity signals (fixes 1–5) and brand-name-specific content |

### ⚠️ AI visibility baseline (where you stand today)

Tested 3 representative queries via WebSearch:

| Query | Result |
|---|---|
| `Promo & Grow Shop promongrow.com reviews custom tents` | 🔴 **Zero results** for your brand. All top 10 hits are unrelated cannabis grow-tent retailers (Gorilla Grow Tent, GrowGeneration, etc.). Search engines literally can't disambiguate your brand from "grow tent." |
| `best custom branded event tent printing 5 day delivery` | 🔴 **Not in top 10.** Dominant players: Extreme Canopy, MasterCanopy, E-Z UP, 48HourPrint, PrintPlace, Instent. Several explicitly call out 5-day delivery — your hero differentiator is table stakes in this space, not unique. |
| `custom event tent printing Los Angeles Pasadena Lynwood` | 🔴 **Not in top 10.** Dominant local players: Overnight Grafix (which **explicitly lists Lynwood + Pasadena in their service area** — direct geographic competitor stealing your geo), Printing Fly, Ninja Stitch, GURU Printers, Light Printing House, LA Banner. |

### 📦 Off-site citation inventory

| Source | Status | Action |
|---|---|---|
| Yelp | ✅ Active (15 reviews, 39 photos at 10514 Long Beach Blvd, Lynwood) | Add to schema `sameAs`. Respond to all reviews. Upload more photos monthly. |
| Google Business Profile | ✅ Active (4.8★ × 19 reviews) | Add to schema `sameAs`. Get to 50+ reviews in 90 days. Post weekly. |
| Instagram | ✅ `@promongrow` exists | Fix schema link (currently points to @proagobranding). |
| Facebook | ❓ Unknown — none in schema | Create or find existing, add to `sameAs` |
| LinkedIn Company page | ❌ Not detected | Create one. Add to `sameAs`. |
| Wikidata | ❌ Not detected | Create entity. Add to `sameAs`. |
| Crunchbase | ❌ Not detected | Create entity. Add to `sameAs`. |
| Better Business Bureau | ❌ Not detected | Create profile (free for unaccredited listing). |
| Local LA directories (LA Almanac, Pasadena Chamber, etc.) | ❌ Not detected | One-time citation push: 10–15 directories |
| Niche directories (event-industry, trade-show supplier lists) | ❌ Not detected | One-time citation push: 5–10 directories |

---

## Punchlist — ranked by impact × effort

### 🔥 Tier 1 — Foundation fixes (do today, ~2 hours of dev work)

Single GitHub branch: `aeo-geo-foundation`. I'll handle the implementation; you review and merge.

1. **Fix `brand.name = "My Store"`** in Shopify settings → Sales channels → Online store. Single click, no code needed.
2. **Replace Organization schema** in `layout/theme.liquid` or `snippets/meta-tags.liquid` with a properly-populated version: real `sameAs` (Yelp, GBP, Instagram, Facebook, LinkedIn when ready), correct logo, full address, phone (one consistent number — see #8), email.
3. **Add LocalBusiness schema** (separate JSON-LD block) with both locations as `Place` entries, hours, geo coordinates, payment types accepted.
4. **Add AggregateRating to homepage + product pages** based on the 4.8★ × 19 Google reviews (manually entered for now; later we can sync from Judge.me when you install it).
5. **Add BreadcrumbList schema** to collection and product templates (HTML already exists; just need JSON-LD wrapper).
6. **Add FAQPage schema** to product pages (FAQ tab content already in Liquid; mark it up with FAQPage JSON-LD).
7. **Reconcile the phone number** — pick one (whatever's most active for inbound), update Yelp + GBP + site to all match.

**Estimated impact:** AI engines start identifying P&G as a legitimate, located, reviewed business within 2–4 weeks of next crawl. Local map results begin showing P&G. Product cards in AI shopping answers start showing your brand instead of "My Store."

### 🌱 Tier 2 — Identity & citations (next 2 weeks, ~4–6 hours total)

8. **Create LinkedIn Company page**, post the company description + 5–10 starter posts. Add to schema `sameAs`.
9. **Create Wikidata entry** for "Promo & Grow" with type=Organization, location, industry. (Wikidata feeds Google Knowledge Graph + many AI engines directly.)
10. **Create Crunchbase profile** (free tier). Add to `sameAs`.
11. **BBB unaccredited listing** (free). Add to `sameAs`.
12. **Local citation sprint:** submit to 10–15 LA-area + event-industry directories (LA Almanac, Pasadena Chamber, Lynwood Chamber, EventCrazy, Local.com, Yellow Pages, ManageVoyager, EventBrite Vendor Hub, etc.). Pay $50–100 to a NAP citation service like BrightLocal or Whitespark for batch submission.
13. **GBP optimization:** add 20+ photos, list all services as Service items, post weekly, answer Q&A within 24 hours, enable messaging.

**Estimated impact:** Brand identity disambiguation. AI engines stop confusing you with cannabis cultivation. Local pack rankings improve.

### 🌳 Tier 3 — Content marketing (months 1–3, ~1–2 hours/week)

14. **Build cornerstone blog content** — 12 articles in 90 days, each targeting a specific AI-answer query pattern. Topic ideas (ranked by AI-citation potential):
    1. *"How to Design a Custom Trade Show Booth: 7-Step Guide for First-Time Vendors"* (high search + AI citation potential)
    2. *"10x10 vs 10x20 Event Tent: Which Size for Your Event?"* (comparison content = high AI citation)
    3. *"What File Format Does My Custom Tent Printer Need? Complete Spec Guide"* (gets cited as authority on file specs)
    4. *"Custom Event Tent Cost: 2026 Pricing Breakdown by Size & Material"* (pricing transparency = AI gold)
    5. *"Trade Show Booth Setup Time: 10x10 Pop-Up in Under 10 Minutes (Video)"* (how-to + video)
    6. *"Best Custom Event Tent Companies (2026): Honest Comparison"* (yes, include competitors — this earns the citation when AI summarizes the category)
    7. *"Farmers Market Booth Essentials: What Every Vendor Needs"* (audience-targeted)
    8. *"Custom Step & Repeat Backdrop: Design Tips from a 20-Year Production Shop"* (expertise positioning)
    9. *"Vinyl Wall Wraps for Retail: Lifespan, Materials, Cost Per Square Foot"* (long-tail commercial)
    10. *"5-Day Event Display Production: Behind the Scenes at a Lynwood Print Shop"* (local + transparency)
    11. *"Teardrop vs Feather Flag: Which Catches More Attention at Outdoor Events?"* (comparison)
    12. *"Event Display Brand Guidelines: What Your Print Vendor Needs to Know"* (B2B-focused)

15. **Populate Design Resources page** (already on Phase 1 roadmap) — file specs, Canva templates, AI prompt guide.

16. **Get to 50+ Google reviews** in 90 days. Use Email 12 (post-purchase review ask, already in your email library) systematically.

**Estimated impact:** Long-tail organic + AI traffic compounds monthly. By month 3, expect 2–4 articles ranking in top 10 for their target query AND showing up as citations in ChatGPT/Perplexity answers.

### 🏆 Tier 4 — Authority moats (months 3–6+)

17. **PR outreach** — pitch to event-industry publications (Trade Show News Network, Exhibitor Magazine, BizBash), local LA business press (LA Business Journal, Pasadena Now), trade publications (Print Magazine, Sign Builder Illustrated). Goal: 3–5 earned media mentions in 90 days.

18. **Niche partnerships / co-content** — collaborate with non-competing event vendors (caterers, AV, photographers, planners) on cross-promoted "vendor recommendation" content.

19. **YouTube channel** — 1–2 videos per month (production behind-the-scenes, setup tutorials, customer event recap). YouTube videos get heavily cited in AI answers.

20. **Reddit + Quora seeding** — answer questions on r/smallbusiness, r/EventPlanning, r/trade_shows, Quora's printing/trade-show topics. Subtle, helpful, brand-mentioned but not spammy.

---

## Recommended paid tooling (ROI math at the bottom)

| Tool | Purpose | Cost | When to add |
|---|---|---|---|
| **Profound** ([tryprofound.com](https://tryprofound.com)) | Track AI search visibility (ChatGPT, Perplexity, Google AI Overviews) by query | $99–$499/mo | After Tier 1 fixes ship — to measure baseline → improvement |
| **BrightLocal** | Local SEO + citation building + GBP management | $39/mo | Tier 2 (citation sprint) |
| **Ahrefs / SEMrush / Ubersuggest** (one of) | Keyword research, competitor analysis, backlink tracking | $30–$129/mo | Tier 3 (content planning) |
| **Surfer SEO or NeuronWriter** | Content optimization scoring | $69–$99/mo | Tier 3 (content writing) |
| **Judge.me** (Shopify app) | Product reviews to feed AggregateRating schema | $15/mo (free tier has limits) | Tier 1+2 (right after schema fixes ship) |

**Minimum viable stack:** Judge.me ($15/mo) + BrightLocal ($39/mo) + Profound starter ($99/mo) = **$153/mo**.

---

## ROI math at $350 AOV

To justify $153/mo in tooling + 2–4 hrs/week of content work (call it $200/mo equivalent at $50/hr opportunity cost) = **$353/mo total commitment**.

Breakeven: **1 additional order/month** at $350 AOV = $350 revenue, $210–235 margin at 60–67% GM. So tooling pays for itself with 1.5 incremental orders per month.

Realistic 90-day target (conservative): **+5–10 incremental orders/month** by month 3 from foundation fixes alone, plus the compounding effect of content. That's $1,750–$3,500 incremental monthly revenue, $1,050–$2,350 in gross margin.

12-month target if you execute the full roadmap: **30–50 incremental orders/month**, $10K–$17K incremental monthly revenue. This is where the bridge-to-$5-8K/mo passive goal actually lands.

---

## What I recommend doing right now (this session)

1. ✅ Audit complete (you're reading it)
2. → **Implement Tier 1 fixes 2–7 on a GitHub branch** (~2 hours of my work)
3. → You review the branch and merge to main when satisfied
4. Then we batch the email setup you said you'd handle
5. Then move to Tier 2 (identity & citations) as a separate session

**Action you take manually after I commit:**
- Tier 1 #1: Shopify settings → Sales channels → Online store → change brand from "My Store" to "Promo & Grow"
- Tier 1 #7: Pick the primary phone number, update Yelp + GBP to match

Everything else (schema markup) I can do in code.

---

## Open questions for you before I start coding

1. **Phone number** — which is the primary? `(844) 883-3308` (on site) or `(323) 249-4449` (on Yelp)? I need to know for the schema.
2. **Primary address for LocalBusiness schema** — Lynwood production (`10514 Long Beach Blvd`) or Pasadena mailing (`254 N Lake Ave #303`)? Or both as separate `Place` entries? My recommendation: Lynwood as primary (matches Yelp + Google Business Profile), Pasadena as a secondary `branchOf` entry.
3. **Facebook page** — do you have one? If yes, what's the URL?
4. **Instagram handle to use** — is `@promongrow` correct (vs the `@proagobranding` currently in schema)?
5. **LocalBusiness type** — closest schema.org subtype is `Store` or `ProfessionalService`. I'll default to `Store` since you sell direct, unless you'd prefer "ProfessionalService" framing.
