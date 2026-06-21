# Promo & Grow — Bilingual (Spanish) Build Spec for Claude Code

**Goal:** Stand up a real, SEO-indexable Spanish version of promongrow.com using **Shopify Markets /
Translate & Adapt** as the foundation — not a JS-swap widget. Done right, this creates a second
discovery surface (Spanish SEO/AEO) AND a higher-trust experience for Spanish-speaking buyers.

**Division of labor:** This doc = the plumbing (Claude Code). The Spanish *copy* is delivered
separately (PNG-Spanish-Money-Page-Copy) — paste it into the translation entries, do NOT machine-translate.

---

## 0. WHY MARKETS (not a translation app)
- Native, free on your plan, owned by Shopify → proper localized URLs + `hreflang` automatically.
- Indexable by Google as legitimate localized content (the SEO win).
- A cheap JS auto-translate widget swaps text client-side with no real URLs → often NOT indexed,
  reads as thin/duplicate content, and you get the trust hit with none of the SEO upside. Avoid.

---

## 1. FOUNDATION SETUP
- [ ] Shopify admin → **Settings → Languages** → add **Spanish (es)** as a published language.
- [ ] Use **Translate & Adapt** (free Shopify app) to manage translations, OR confirm theme
      language support. (If more control needed later, Langify/Weglot — but start native.)
- [ ] Confirm URL structure produces localized paths (e.g. `promongrow.com/es/products/...`).
- [ ] Verify `hreflang` tags auto-output in `<head>` for each page (en + es + x-default).
      Test with a crawler / view-source. This is what tells Google "serve es to Spanish searchers."
- [ ] Ensure canonical tags are per-locale (es pages canonical to themselves, not to en).

## 2. LANGUAGE TOGGLE (UI)
- [ ] Add a clear language switcher in the header (and footer). Label it "ES / EN" or use
      a globe icon — keep it on-brand (navy/copper, DM Sans).
- [ ] Toggle should preserve the current page (es PDP ↔ en PDP), not dump to homepage.
- [ ] Optional: geo/browser-language suggestion banner ("Ver en español →") — dismissible,
      once per session. Do NOT auto-redirect (hurts SEO + annoys users).

## 3. WHAT GETS TRANSLATED (priority order — stage hero pages live first)
Paste provided Spanish copy into Translate & Adapt for each:
1. [ ] 10x10 tent PDP (title, body, SEO title, SEO meta)
2. [ ] 10x20 tent PDP
3. [ ] 10x15 tent PDP
4. [ ] 20ft SEG display PDP
5. [ ] 10ft SEG display PDP
6. [ ] 3ft SEG display PDP
7. [ ] 10ft SEG backlit PDP
8. [ ] Standoff acrylic wall art PDP
9. [ ] Quote form (labels, placeholders, button, auto-reply email)
10. [ ] Global trust elements: free-proof banner, 5-day promise, how-it-works, announcement bar
11. [ ] Navigation, collection titles, footer (so es pages aren't half-English)

**Rule:** A page goes live in Spanish only when it's FULLY translated (incl. nav + trust strip).
A half-Spanish page reads as broken and drops trust. Stage by page, complete each before publish.

## 4. QUOTE FORM — BILINGUAL
- [ ] Spanish field labels/placeholders (copy provided).
- [ ] Spanish auto-reply email + Spanish admin-alert tag (so Carlos knows to reply in Spanish).
- [ ] Same file-upload (logo/artwork) on the es form.
- [ ] Route es quote requests with a "[ES]" tag so the concierge close happens in Spanish.

## 5. SEO / AEO (the discovery payoff)
- [ ] Confirm es product SEO titles/metas use the provided Spanish keyword phrasing
      (e.g. "carpa personalizada", "toldo 10x10", "mantel personalizado con logo").
- [ ] FAQ blocks (the `<h3> Preguntas comunes`) preserved in es — this is the Spanish AEO surface.
- [ ] Submit both language sitemaps; confirm es URLs appear in the sitemap.
- [ ] Add a Spanish description to Google Business Profile (separate task, [C]).

## 6. PRE-LAUNCH CHECK (Direct Response mode — the CMAA lesson)
- [ ] View an es PDP on mobile — fully Spanish, nothing falls back to English mid-page?
- [ ] Toggle en↔es on 3 pages — preserves page, no 404s?
- [ ] Submit a test quote in Spanish — auto-reply arrives in Spanish, lands tagged [ES]?
- [ ] hreflang verified in source on en + es?
- [ ] Page speed still passes on es pages (mobile 70+)?

---
*Pairs with: PNG-Spanish-Money-Page-Copy (the actual translations),
PNG-Concierge-Conversion-Build-Spec, CLAUDE.md design system.*
