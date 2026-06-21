# Bilingual Build Spec

**Summary**: Claude Code build spec for a real, SEO-indexable Spanish version of promongrow.com built on Shopify Markets / Translate & Adapt — the plumbing for the [[bilingual-spanish-moat]]. This is the build doc; the actual ES copy lives in [[spanish-money-page-copy]].
**Type**: concept
**Sources**: PNG-Bilingual-Build-Spec.md
**Last updated**: 2026-06-17.

---

## Goal & approach

Stand up a real, SEO-indexable Spanish site using **Shopify Markets / Translate & Adapt** as the foundation — NOT a JS-swap widget. Done right this creates a second discovery surface (Spanish SEO/AEO) AND a higher-trust experience for Spanish-speaking buyers (source: PNG-Bilingual-Build-Spec.md). This is the engineering behind the [[bilingual-spanish-moat]].

**Division of labor:** this doc = the plumbing (Claude Code). The Spanish *copy* is delivered separately in [[spanish-money-page-copy]] — paste it into the translation entries; do NOT machine-translate.

## Why Markets (not a translation app)

- Native, free on the plan, owned by Shopify → proper localized URLs + `hreflang` automatically.
- Indexable by Google as legitimate localized content (the SEO win).
- A cheap JS auto-translate widget swaps text client-side with no real URLs → often NOT indexed, reads as thin/duplicate content, and takes the trust hit with none of the SEO upside. Avoid (source: PNG-Bilingual-Build-Spec.md).

## Foundation setup

- Shopify admin → Settings → Languages → add **Spanish (es)** as a published language.
- Use **Translate & Adapt** (free Shopify app) to manage translations, OR confirm theme language support. (Langify/Weglot only if more control is needed later — start native.)
- Confirm URL structure produces localized paths (e.g. `promongrow.com/es/products/...`).
- Verify `hreflang` tags auto-output in `<head>` for each page (en + es + x-default). Test with a crawler / view-source — this is what tells Google to serve es to Spanish searchers.
- Ensure canonical tags are per-locale (es pages canonical to themselves, not to en).

(source: PNG-Bilingual-Build-Spec.md)

## Language toggle (UI)

- Clear language switcher in the header (and footer), labeled "ES / EN" or a globe icon — on-brand (navy/copper, DM Sans).
- Toggle preserves the current page (es PDP ↔ en PDP), NOT a dump to homepage.
- Optional geo/browser-language suggestion banner ("Ver en español →") — dismissible, once per session. Do NOT auto-redirect (hurts SEO + annoys users) (source: PNG-Bilingual-Build-Spec.md).

## What gets translated (priority order — stage hero pages live first)

Paste the provided Spanish copy ([[spanish-money-page-copy]]) into Translate & Adapt for each (source: PNG-Bilingual-Build-Spec.md):

1. 10x10 tent PDP (title, body, SEO title, SEO meta)
2. 10x20 tent PDP
3. 10x15 tent PDP
4. 20ft SEG display PDP
5. 10ft SEG display PDP
6. 3ft SEG display PDP
7. 10ft SEG backlit PDP
8. Standoff acrylic wall art PDP
9. Quote form (labels, placeholders, button, auto-reply email)
10. Global trust elements: free-proof banner, 5-day promise, how-it-works, announcement bar
11. Navigation, collection titles, footer (so es pages aren't half-English)

**Rule:** a page goes live in Spanish ONLY when fully translated (incl. nav + trust strip). A half-Spanish page reads as broken and drops trust. Stage by page; complete each before publish (source: PNG-Bilingual-Build-Spec.md).

## Quote form — bilingual

- Spanish field labels/placeholders (copy in [[spanish-money-page-copy]]).
- Spanish auto-reply email + Spanish admin-alert tag (so Carlos knows to reply in Spanish).
- Same file-upload (logo/artwork) on the es form.
- Route es quote requests with a `[ES]` tag so the [[concierge-close]] happens in Spanish (source: PNG-Bilingual-Build-Spec.md). See [[shopify-tag-taxonomy]].

## SEO / AEO (the discovery payoff)

- Confirm es product SEO titles/metas use the provided Spanish keyword phrasing (e.g. "carpa personalizada", "toldo 10x10", "mantel personalizado con logo").
- Preserve the `<h3>Preguntas comunes` FAQ blocks in es — this is the Spanish AEO surface.
- Submit both language sitemaps; confirm es URLs appear in the sitemap.
- Add a Spanish description to Google Business Profile (separate task, owner Carlos/VA) — see [[google-search-engine]].

(source: PNG-Bilingual-Build-Spec.md)

## Pre-launch check (Direct Response mode)

- View an es PDP on mobile — fully Spanish, nothing falls back to English mid-page?
- Toggle en↔es on 3 pages — preserves page, no 404s?
- Submit a test quote in Spanish — auto-reply arrives in Spanish, lands tagged `[ES]`?
- `hreflang` verified in source on en + es?
- Page speed still passes on es pages (mobile 70+)?

(source: PNG-Bilingual-Build-Spec.md)

## Related pages
- [[bilingual-spanish-moat]]
- [[spanish-money-page-copy]]
- [[concierge-conversion-build]]
- [[google-search-engine]]
- [[png-voice]]
- [[customer-journey-map]]
