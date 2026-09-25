# AEO Citation Method

**Summary**: The distilled method for getting cited by AI answer engines, from the "AEO Basics" transcript Carlos dropped in `raw/` (an Ahrefs walkthrough) plus HubSpot's State of AEO material. Five parts: how AI search actually works, a brand-gap read, prompt/keyword research, the four citation levers (content · mentions · YouTube · technical), and measurement. Mapped to Promo & Grow at the bottom.

**Type**: concept

**Sources**: `raw/AEO Basics.pdf` (video transcript, 18:54, ingested 2026-09-20); HubSpot "State of AEO in 2026" — the offer page itself is gated, so figures come from HubSpot's published AEO trends article + search results summarizing the report (fetched 2026-09-20); live robots.txt check of promongrow.com 2026-09-20.

**Last updated**: 2026-09-20.

---

## 1. How AI search works (and why keyword-only content loses)

- **Query fan-out.** One prompt is broken into dozens of smaller searches behind the scenes, run in parallel, then synthesized. ChatGPT's deep research mode was reported to run **420 searches for a single prompt** about buying a red phone case. Content that ranks for one keyword misses most of what the model actually searched. Be relevant across a whole topic. (source: AEO Basics)
- **Three things drive citation probability** (source: AEO Basics):
  1. **Consensus** — the more places that say the same thing about you, the more the model believes and repeats it.
  2. **Freshness** — content cited by AI is on average **25.7% fresher** than what ranks in traditional Google results.
  3. **Authority** — **76% of AI Overview citations come from pages already ranking in Google's top 10**, so classic SEO is the foundation, not a separate track.
- **AI Overviews** appear on about **21% of all keywords**, but **~58% of question queries** trigger them, and **99.9% of AI-Overview-triggering keywords are informational**. For those queries the click is often eaten — the goal becomes a brand mention inside the answer rather than a visit. (source: AEO Basics)
- Prompts are longer than searches: average ChatGPT prompt **23 words** vs **3.37 words** for a traditional search query. (source: HubSpot AEO trends)

## 2. Brand gap analysis
Measure where the brand should appear versus where it actually appears, across AI results. Three gap types: **missed citations** (the answer mentions you but doesn't link you), **competitor gaps** (they're mentioned, you're not), and **topic gaps** (AI associates a topic with someone else). The transcript uses Ahrefs Brand Radar; a manual prompt panel does the same job at zero cost. (source: AEO Basics)

## 3. Prompt + keyword research
Seed keywords still matter, and modifiers turn them into real queries. Run every keyword through an extra filter: **can AI fully satisfy this query on its own?** If Google's AI Overview answers it completely, the keyword is a click trap — target it for a brand mention instead of a visit. (source: AEO Basics)

## 4. The four citation levers

**A. Content on your own site**
- **Length doesn't matter.** Across 174,000 pages cited in AI Overviews, the correlation between word count and citation is basically zero; **over half of cited pages are under 1,000 words**.
- **Freshness matters a lot.** For ChatGPT, **89.7% of top-cited pages were updated in 2025** and **76% were refreshed within the last 30 days**. Content untouched for six months is already at a disadvantage.
- **Format matters.** **43.8% of all pages ChatGPT cites are lists, "best X," comparisons, and reviews.** HubSpot's read: blog content performs best in AI Overviews (**42%**), while ChatGPT favors comparison content.
- **Four writing principles** (the micro layer):
  1. **BLUF — bottom line up front.** Start every section with the answer, not the backstory; both humans and models weight the beginning and end of a passage over the middle.
  2. **Atomic sections.** Every section must stand alone, because the model chunks the page and you don't control where the chunks fall.
  3. **Entity-rich writing.** Name specific things and relationships, not vague benefits.
  4. **Simple and declarative.** One idea per sentence, subject-verb-object. If a sentence takes two reads, simplify it.

**B. Mentions on other people's pages (the highest-leverage lever)**
In a study of 75,000 brands, **branded web mentions had the strongest correlation with AI Overview visibility — stronger than backlinks, domain rating, or referring domains.** Three tiers: **(1) third-party editorial** — industry publications, review sites, listicles and comparison posts (hardest to earn, most valuable); **(2) user-generated** — Reddit, Quora, niche forums, where Reddit is among the most frequently cited sources in ChatGPT and a foundational training source; **(3) owned properties** — YouTube, podcast, LinkedIn, all indexed and citable. The point is to participate honestly, not to game it. (source: AEO Basics)

**C. YouTube (its own category)**
YouTube is **the most cited domain in Google's AI Overviews**, and YouTube mentions show a **0.737 correlation with ChatGPT visibility — the strongest of any factor studied**, partly because GPT-4 was trained on over a million hours of YouTube transcripts. Chase **search hits, not viral hits**: evergreen topics people actively search, which keep earning traffic and citations. Video SEO checklist: keyword in the title and in the first lines of the description, timestamps/chapters, and say the keyword out loud in the video, because the audio is transcribed and indexed. (source: AEO Basics)

**D. Technical (what not to do)**
About **5.9% of 140 million websites block GPTBot**, usually by accident — inherited robots.txt templates, or Cloudflare's "manage AI bot traffic" setting, which is on by default. Check `yourdomain.com/robots.txt` for disallow rules against GPTBot, OAI-SearchBot, ClaudeBot, or Google-Extended. (source: AEO Basics) ✅ **Checked 2026-09-20: promongrow.com has no AI-crawler disallows.**

## 5. Measurement (three signals)
1. **AI referral traffic** — clicks from ChatGPT, Perplexity, Claude. Always an undercount: some platforms don't pass referrer data. Useful for direction, not precision.
2. **AI bot activity** — which pages citation bots repeatedly crawl. Requires server logs or a Cloudflare integration; not available on a plain Shopify storefront.
3. **Self-reported attribution** — "How did you hear about us?" on the form, at checkout, or post-purchase. Called out as the most meaningful, because a buyer may see a brand in ChatGPT and then Google it, which analytics will credit to organic.

**The conversion case:** Ahrefs reported AI search at **0.5% of visits but 12.1% of signups — a 23× higher conversion rate than organic search**. HubSpot's ecommerce figure: AI referral traffic converts at **11.4% vs 5.3% for organic**, and **58% of marketers** say AI-referred visitors convert better. HubSpot reported a **433% brand-citation improvement** from concentrating on AEO. (sources: AEO Basics; HubSpot AEO trends + report summaries)

**Context:** AI traffic grew ~**9.7×** in the past year; ChatGPT alone grew **85% since January** and now sends more traffic than Reddit or LinkedIn. Most businesses haven't started. (source: AEO Basics)

---

## What this means for Promo & Grow

| Method finding | P&G status (2026-09-20) | Action |
|---|---|---|
| Consensus across sources | Entity facts were inconsistent until 9/13 (Yelp, LinkedIn, Merchant Center, policies). Facts sheet now exists; policies still unpasted | Finish the NAP/policy pass → [[entity-facts-sheet]] |
| Freshness (76% of ChatGPT's cited pages refreshed in 30 days) | Product/collection copy refreshed 9/13–14. **Blog articles: 0.** Tent pages untouched since 7/7 | Monthly refresh cadence on money pages; publish weekly |
| Format: lists/comparisons/reviews = 43.8% | Plan's assets are mostly comparisons and cost guides — correct shape | Add an honest "best custom tent companies in LA" style comparison |
| Length under 1,000 words | Answer Factory has no length rule | Set 600–900 words as the default |
| BLUF / atomic / entity-rich / declarative | Not written down as a standard | Adopt as the Answer Factory house style |
| **Mentions = strongest correlation** | Almost none: Yelp, GBP, Instagram, one LinkedIn page | Promote citations from Phase 3 to now |
| **YouTube = most cited domain** | No channel; the video creator role is unfilled since Venus left | Decide: Carlos on camera, a creator, or no video |
| Technical crawler access | ✅ No AI blocks in robots.txt | Re-check quarterly |
| Self-reported attribution | Not built | Phase 0.6 — "How did you find us?" on the quote form |
| AI converts far better than organic | Mirrored locally: **6 ChatGPT sessions → 2 leads** ($1,800 won, $3,336 open) | Keep AI-sourced leads as the primary metric |

## Related pages
- [[search-visibility-game-plan]] — the execution plan this method feeds
- [[ga4-traffic-read-2026-09]] — the traffic baseline
- [[entity-facts-sheet]] — consensus/facts layer
- [[content-engine]] · [[copywriting-method]] · [[getting-customers-fast]]
