# AI Visibility Panel — 2026-09-24 (baseline)

**Summary**: The first run of the prompt panel called for in [[search-visibility-game-plan]] §6, which had stood at "Not run" since 9/13. 16 buyer and brand queries were put to the live open web — the corpus ChatGPT, Perplexity, Gemini and Google AI Overviews ground their answers on — and every factual claim found about Promo & Grow was then independently re-verified against its source. Headline: **sentiment is clean and there is no negative content anywhere, but the reputation is filed under the wrong name and the wrong phone number, and buyer-intent visibility is zero.**

**Type**: concept

**Sources**: 16-query prompt panel run 2026-09-24 (82 agents, 1,238 tool calls); every "wrong/stale" fact independently re-verified by a second agent against the live source; live site fetches 2026-09-24; Shopify Analytics referrer pull 2026-09-24.

**Last updated**: 2026-09-24.

---

## 1. Sentiment — clean, and that is a real asset

**Zero negative content was found anywhere.** No BBB profile and no BBB complaints (a direct bbb.org search returned no matching business), no scam reports, no refund disputes, no negative commentary on any platform.

| Signal | Finding |
|---|---|
| Yelp | **5.0 stars, 15 reviews, 39 photos**, listing updated within the last two weeks |
| Review language surfaced | "top tier work by the team," "Over 100% recommend" (a canopy build), "Efficient," "Punctual," "very professional," "can be trusted with quality work" |
| Birdeye (under "Printco Direct") | 4.9 stars, 11 reviews — but **9–12 years old**, sourced from Facebook |
| Complaint axis | **Absent** — nothing to find |

⚠️ **The caveat that matters:** on the panel's own scoring, 10 queries returned "positive" and 6 returned "absent" — but the positive evaluative text is **almost entirely first-party or Yelp**. For the query *"is this company legitimate,"* an AI has essentially nothing to ground on except promongrow.com itself and one Yelp listing. A clean record that no independent source carries is **invisible, not persuasive**. This is the single strongest argument for the mention sprint.

## 2. Visibility — the brand ranks for its own name and nothing else

| Query type | P&G appears? |
|---|---|
| Brand-name queries (6) | **6 / 6** — but see §3 |
| Category buyer queries (7) | **0 / 7** |
| Spanish queries (2) | **0 / 2** |
| Competitor comparison (1) | **0 / 1** |

Absent on: *how much does a custom 10x10 event tent cost* · *SEG backdrop supplier LA* · *custom table throw LA* · *custom feather flags LA* · *complete vendor booth setup* · *event tent printing near Lynwood/South Gate/Compton* · both Spanish queries.

Two findings that sting:
- On a hyper-local Lynwood printing query, **The UPS Store at 10910 Long Beach Blvd — four blocks away — ranked #1, and P&G at 10514 did not appear at all.**
- A published aggregator, *"Top 10+ Canopy Tent Printing Companies in Los Angeles 2026,"* lists **15 companies. P&G is not one of them.**

**Who holds the slots:** TentCraft (most consistent winner), Vispronet ("from $349.99", #1 on all three pricing queries), MVP Visuals ($849), Westshade, ABCCanopy, Extreme Canopy, Strike Visuals ($975), CustomTents.com, plus LA geo-page shops — Printing Fly, GURU Printers, LA Print & Design, SpectraColor.

**What kind of source wins:** manufacturer/vendor product pages (~7 of 9 results per query), **geo-targeted landing pages built for the exact query** (`canopy-tents-in-los-angeles.html`, `10x10-custom-event-tents-los-angeles`), and **competitor-authored blog buyers-guides and "best of 2026" roundups — which is what the AI answer layer quotes for comparisons.** Notably **absent** from this corpus: Reddit, forums, neutral editorial buyers-guides, news. The category is won by content, not community.

## 3. Wrong and stale facts circulating — all independently re-verified

### 3a. The site's own homepage title is the worst offender
Live and unchanged as of 2026-09-24, in `<title>`, `og:title` and `twitter:title`:

> **"Booth Kits and Bundles - Tents & Backdrops | 5 Day Nationwide Delivery – Promo & Grow"**

It carries **both** retired concepts at once — *bundles* (retired 9/13) and an **unconditional 5-day delivery promise** (retired 9/13). It is the string search engines display as the result title and **the single string most quoted back by AI engines**. One panel answer reconstructed "bundled packages combining tents, flags, and throws with 15%+ savings" straight from the homepage. The meta description repeats it: *"Produced and shipped in 5 business days or less nationwide."*

**This is the Online Store → Preferences item.** It is a two-minute fix and it is the highest-leverage item on the whole board.

### 3b. Yelp is the #1 result for brand queries and it is wrong on four counts
The listing (`/biz/promote-and-grow-lynwood`, canonical `/biz/promo-and-grow-lynwood-2`, plus a duplicate alias `/biz/printco-direct-lynwood-2`) **outranks promongrow.com on the brand's own queries** and is what AI answers ground on:

| Field | Published on Yelp | Should be |
|---|---|---|
| Phone | **(323) 249-4449** — in the meta description *and* the JSON-LD | (213) 817-9188 |
| Second phone | **(213) 685-0656** — a third number, matching nothing in [[phone-number-map]] | — |
| Name | "PROMOTE & GROW" / "PROMO & GROW" across indexes | Promo & Grow |
| Categories | "Graphic Design, Vehicle Wraps, Signmaking" | event displays / tents / printing |
| Specialties copy | *"Most of our projects are produced and delivered in 5 days or less"* | the ruled wording |

The wrong-category problem is causal, not cosmetic: **Yelp never surfaced on a single category query** — only brand queries. Filed under Graphic Design, the listing cannot appear for tent or backdrop intent.

### 3c. The two entities are bound together at one address
`printco-direct.com` is still live and **302-redirects to proagobranding.co**, which publishes **323.249.4449** and lists **10514 Long Beach Blvd, Lynwood — P&G's address — as its "Production Facility."** That is the mechanism by which AI attaches Proágo's phone to Promo & Grow. (Counter-detail: the non-TLS `http://` host redirects to promongrow.com instead — inconsistent.) The Proágo Facebook page also ranked ~7 on a P&G review query. Nine third-party directories still carry "PrintCo Direct Inc." — YellowPages, ChamberOfCommerce, ZoomInfo, RocketReach, LeadIQ, bizprofile.net (CA SoS filing, June 13 2011), Birdeye, Facebook, pcd.espwebsite.com — and **none of them carry promongrow.com**.

### 3d. Stale search index (fixed on-site, not yet recrawled)
Live pages are correct; the index has not caught up. No action beyond waiting, but it explains bad answers now:
- Product/collection titles still indexed as **"Promote & Grow Shop"** (10x15 tent, Flags collection, A-Frame Wraps)
- Event Backdrop Wraps still indexed **"Made in LA"** (live page reads "Printed in LA")
- Instagram indexed "Promo & Grow Shop (@promongrow)" (live profile is correct)
- AI answers still state **"Rush (3 days) available for an additional fee"** — retired wording

### 3e. Spanish is a diagnosable blind spot
Absent from every Spanish query, including one naming the domain. Cause: the site carries an EN/ES toggle and `/es/` hreflang but **serves no indexable Spanish content** for these queries. The slots are held by Etsy/Amazon marketplaces and national vendors. The bilingual moat is uncontested — and unoccupied.

## 4. What this changes about the plan

1. **The homepage title/meta is no longer a tidy-up item — it is the top fix.** Hard evidence now shows it is the most-quoted string about the business.
2. **Yelp is not one of ten listings; it is the listing.** It outranks the owned site on brand queries. Phone, name, categories and Specialties copy all need correcting, and the duplicate alias needs resolving.
3. **The clean reputation is real but unowned.** No independent source carries it → the mention sprint is the conversion of a true fact into a citable one.
4. **Category invisibility is a content problem with a known shape.** Geo-targeted product pages and buyers-guide articles are what win; P&G has neither. This is exactly the Answer Factory, still at 0 articles.
5. **`printco-direct.com` needs a ruling** — pointing it at promongrow.com instead of proagobranding.co would sever the wrong-phone binding. Carlos's call; it is a Proágo asset.

## Related pages
- [[search-visibility-game-plan]] · [[mention-sprint-2026-09]] · [[entity-facts-sheet]] · [[aeo-citation-method]] · [[phone-number-map]] · [[ga4-traffic-read-2026-09]]
