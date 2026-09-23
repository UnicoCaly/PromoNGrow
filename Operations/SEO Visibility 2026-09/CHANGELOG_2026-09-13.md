# Search visibility — live changes, 2026-09-13

Carlos approved ("go", 9/13): the claims fix list + "Made in LA" → "Printed in LA" recut + the 10x10 meta; 213.817.9188 added to the site as the local number; "Formerly PrintCo Direct Inc." as the former name. The Merchant Center verification tag was dropped (wrong Google account — not needed).

Plan + reasoning: wiki `programs/search-visibility-game-plan.md` · canonical wording: wiki `concepts/entity-facts-sheet.md`.

## 1. Shopify admin content (Admin API, 0 errors)
- **34 product SEO descriptions** rewritten: "Made in LA, 5-day delivery" / "5-day guaranteed delivery" → "Printed in LA. 5 business days from proof approval." Titles changed on 4 (event backdrop wraps, 4ft throw, 6ft cover — the latter two had no/legacy SEO).
- **20 product descriptions**: guarantee lines removed ("Not an estimate — a guarantee", "Guaranteed, nationwide", "— guaranteed"), "Made in the USA" → "Printed in LA", "Made to order in Los Angeles" → "Printed to order in Los Angeles", every "delivered in 5 business days" now reads "…from proof approval", sub-$500 free-proof lines on standoff acrylic + table runner → "Every order is proofed before production", 10x10 color answer → "as close as large-format printing allows… you'll see the colors on your proof".
- **12 collections**: "our Lynwood shop" / "made in Lynwood" / "printed in Lynwood" → "printed in LA"; delivery lines conditional; banners collection dropped the stale "Vinyl banners start at $98" (that product is a draft); SEO titles/metas on 9.
- **Rollback:** `before-snapshots/products-storefront-before_2026-09-13.json` (pre-edit bodies) and `collections-descriptionHtml-before_2026-09-13.json`; exact applied payloads alongside. Pre-edit SEO metas = the July apply (`Operations/SEO Audit 2026-07/drafts-content.md`) plus the original 10x10/10x20 "guaranteed" metas.

## 2. Theme (commit `fca5762` pushed to GitHub `main` → Shopify sync; live in ~15s, verified)
- `sections/header.liquid` — Organization JSON-LD → **LocalBusiness**: name, `alternateName` "PrintCo Direct Inc.", telephone +1-213-817-9188, contactPoint +1-844-883-3308, full address, foundingDate 2005, knowsLanguage en/es, sameAs filtered (Instagram + Yelp). Verified parsing on home, PDP, collection.
- `sections/custom-footer.liquid` — tagline now "printed in LA. Ready 5 business days from proof approval." + NAP block: address · (213) 817-9188 · toll-free (844) 883-3308 · "Formerly PrintCo Direct Inc."
- `sections/custom-contact.liquid` — (213) local line leads, toll-free listed; "Free proof on every order" → "on orders $500+"; "Made in the USA" → "Printed in LA".
- `sections/announcement-bar.liquid`, `custom-trust-strip.liquid`, `custom-trust-bar.liquid`, `snippets/product-trust-badges.liquid`, `custom-seo-landing.liquid` default, `templates/page.tent-10x10/15/20.json`, `templates/page.lp-free-proof-v2.liquid` (EN + ES "Hecho en" → "Impreso en LA") — all Made-in claims → Printed in LA; free-proof badges scoped to $500+.

⚠️ **Local clone is behind live.** The local `Promo N Grow` working tree predates the July 20 LP v2 sync and today's commit. Run `git pull` before any `shopify theme push` from this folder, or a push will revert live work.

## 3. Not done — needs Carlos
- **Homepage title + meta** (Online Store → Preferences; not API-editable). Live meta still says "5 business days or less." Paste:
  - Title: `Custom Canopy Tents & Event Displays | Printed in LA — Promo & Grow`
  - Meta (updated to the 9/13 delivery ruling): `Custom canopy tents, SEG backdrops, flags, and table throws with your brand, printed in LA. Free proof on $500+ orders. Fast nationwide delivery.`
- **Store policies** (Misrepresentation-review risk) — see §4.
- **Pillowcase gallery** — 6 vendor stock images still live ("BLACK FRIDAY 50% OFF", "$59.99 car rental", placeholder phone + yourwebsite.com). Plan: `Operations/PNG-Pillowcase-Gallery-Fix_8.12.2026.md`.
- PageFly home slides ("GUARANTEED") — PageFly editor only.

## 3b. Later 9/13 — Carlos "go" on the Misrepresentation fixes (confirmed: Promo & Grow is a DBA of Proágo Branding Dept.)
- ✅ **Pillowcase gallery** — applied via Admin API: real install photo featured → size guide → 2 memorial scene renders (labeled "(scene render)" in alt) → hardware → carry bag. The 6 vendor stock images ("BLACK FRIDAY 50% OFF", "$59.99 car rental", placeholder phone/site) were **detached from the product, not deleted** — still in Content → Files. Verified live.
- ⛔ **Policies — blocked:** the Shopify connection lacks the `write_legal_policies` scope. **Paste-ready clean versions are in `policies-paste-ready/`** (1 refund · 2 shipping · 3 terms · 4 contact) plus a before-snapshot. Changes made in those files: every business name → "Promo & Grow (formerly PrintCo Direct Inc.), a DBA of Proágo Branding Dept."; all hello@proagobranding.co → hello@promongrow.com (as real mailto links); "[insert pickup address]" → 10514 Long Beach Blvd, Lynwood, CA 90262; TOS effective date → September 13, 2026; "[link]" → linked Privacy/Shipping/Refund policies; phone → (213) 817-9188 · toll-free (844) 883-3308; the "Optional notes you can keep or remove" draft block removed; "Last updated: September 13, 2026" added; ChatGPT paste artifacts (data-* attributes, SVG icons, stray meta tags, href-less links) stripped. **Legal substance unchanged.**
  - **How to paste:** Shopify admin → Settings → Policies → open each policy → click the `<>` (show HTML) button in the editor → select all → paste the matching file's contents → Save. Contact information may be a structured form in Settings → Policies → Contact information — fill trade name / phone / email / address from file 4.
  - ⚠️ Noted, not changed (legal text): the refund policy and TOS offer "Pantone matching on request," while quote emails (e.g. #D156) say large-format printing can't Pantone-match. Pick one truth.

## 3c. Later 9/13 — delivery wording, bundles retired, Venus references removed
Carlos: orders ship within 5 business days; rush on request, quoted per project; run the recommendations; Venus is no longer with the company.
- **Delivery wording (Admin API, 0 errors):** 34 product metas → "…Printed in LA. Ships within 5 business days of approval."; 17 product descriptions ("shipped within 5 business days of proof approval"; turnaround FAQs add "Rush is available on request and quoted per project", the 10x10 FAQ adds the written event-date line); 11 collections ("shipped nationwide within 5 business days of proof approval").
- **Theme commit `e99da81`:** "Fast nationwide delivery" badges (announcement bar, trust strip, product badges/row cards, process ribbon, how-it-works); product FAQ tab "Rush (3 days)" → "rush on request, quoted per project" + written-date line; tent pages' Turnaround spec + FAQ; AEO FAQ defaults; homepage (hero subtext, "Get a free proof" CTA, bundles card removed, Displays "From $248", step 3); **bundles:** header nav item + footer link removed, both bundle popups un-rendered, router door 2 → tents; **free-proof LP v2 (EN + ES):** delivery lines, "Complete Bundles" → "Complete Setups", "bundles from $848" dropped, form option "Bundle" → "Multi-piece set", **all Venus references removed** (hero note, success/no-file messages, mailto bodies, FAQ, photo card → Promo & Grow contact card), response time "usually within one business day".
- **Theme commit `ae2ab6a`:** hero/router/cta-banner schema defaults off "Shop Bundles"/"bundle and save"; hero trust "Printed in the USA" → "Printed in LA"; email-capture "seasonal bundles" → "seasonal ideas". Verified on the live homepage.
- **Admin:** bundle SKUs `trade-show-starter-bundle`, `event-pro-bundle`, `event-vendor-bundle` → DRAFT; pages `bundles` + `collection-bundle` unpublished; redirects `/collections/bundles`, `/pages/bundles`, `/pages/collection-bundle` → `/collections/tents-canopies`; "Bundles" removed from Main Menu, Footer - Shop, Hyper - Topper menus.
- ⛔ **Blocked → Carlos:** unpublishing the `bundles` collection (connector safety policy). Admin → Products → Collections → Bundles → Sales channels → remove all. The redirect fires once it 404s.
- Still showing: homepage title "Booth Kits and Bundles… 5 Day Nationwide Delivery" (Online Store → Preferences); a Judge.me review card "Event Vendor Starter Bundle" (Judge.me → Curate).

## 4. Store policy problems found (live, 9/13)
| Policy | Problem |
|---|---|
| Contact information | Trade name "Promote & Grow Shop"; phone 844 only |
| Refund | Draft scaffolding left in: "Optional notes you can keep or remove…"; contact email hello@proagobranding.co |
| Shipping | "[insert pickup address]" placeholder; emails @proagobranding.co |
| Terms of Service | "Effective date: [Month Day, Year]"; "Privacy Policy [link]"; entity written "Promo N Grow, a DBA of Proágo Branding Dept." |

---

## 5. 2026-09-22 — entity record completed + GA4 attribution fix (commit `7177412`, **awaiting push**)
Carlos: "Go" on the two queued items. Local clone was 7 commits behind live — fast-forwarded first. The
never-pushed July theme batch (Inter body + 23 claims fixes) was **stashed, not discarded**
(`git stash list` → "July staged theme batch … preserved 2026-09-22"); one untracked local template moved to
`_Archive/superseded-theme-files/`.

### 5a. LocalBusiness schema (`sections/header.liquid`)
- **`openingHoursSpecification`** added: `dayOfWeek` Mon–Fri, `opens` 10:00, `closes` 16:00. Saturday and
  Sunday are omitted, which is the schema.org convention for closed.
- **`sameAs`** now carries `https://www.facebook.com/promongrow` and
  `https://www.linkedin.com/company/promo-grow/` alongside Instagram and Yelp.
- `| uniq` added to the split so a value later pasted into the theme's own social settings can't produce a
  duplicate entry. (Byte-identical only — a trailing slash would still duplicate.)
- Rendered JSON-LD validated by parsing the simulated Liquid output against live theme settings.

### 5b. GA4 `source` → `cta_placement`
**Why:** GA4 treats `source` as a *manual traffic-source field on any event*, not a custom parameter. Every
lead and call event was therefore overwriting its own session origin. The 2026-09-14 GA4 export shows the
damage directly — 78 sessions attributed to placements instead of channels: "mobile-sticky / (not set)" 52,
"unknown" 16, "png-quote-modal" 9, "intent-router" 1.

| File | Change |
|---|---|
| `snippets/png-quote-modal.liquid` | success-page `gtag('event','generate_lead')` → `cta_placement`; dataLayer push gains a `cta_placement` mirror (kept `source` — a dataLayer key is inert unless a GTM tag maps it) |
| `snippets/png-tracking-pixels.liquid` | `generate_lead` + `click_to_call` listeners → `cta_placement: detail.cta_placement \|\| detail.source \|\| …` |
| `snippets/png-analytics-events.liquid` | `push()` mirrors `source` → `cta_placement` in the dataLayer payload |

**Unchanged on purpose:** `fbq()` keeps `source` (not reserved in Meta); the Google Ads conversion is scoped
by `send_to` and is unaffected — the verified label `_S8lCJKl6sIcENmLkNdB` still fires.

⚠️ **A 55-agent adversarial review caught a blocker in the first draft of this fix.** The initial edit
patched only the `png:quote_request_submitted` listener in `png-tracking-pixels.liquid` — but nothing
dispatches that CustomEvent on the modal path (`grep -c dispatchEvent snippets/png-quote-modal.liquid` = 0),
as that file's own comment states. The real emitter is the success-page script at
`png-quote-modal.liquid:76`. Shipping the first draft would have fixed click-to-call and the free-proof LP
while leaving **the main quote path — the headline goal — still destroying its own attribution.** Verified
after the fix: no `gtag('event', …)` in the theme passes `source`, `medium`, `campaign`, `term`, `content`,
`source_platform`, `creative_format` or `marketing_tactic`.

### 5c. Owed next (Carlos, GA4 admin — not a theme change)
Register an **event-scoped custom dimension** on `cta_placement` (GA4 Admin → Data display → Custom
definitions; name "CTA placement"). **Not retroactive** — it reports only from its registration date, so do
it at or before the push. Until then the value is collected and visible in DebugView/Realtime, just not in
standard reports. Full step + a DebugView pre-check in the wiki: `conversion-tracking-setup.md` step 5.

### 5d. Before-snapshots
`before-snapshots/localbusiness-schema-before_2026-09-22.liquid` ·
`before-snapshots/ga4-event-params-before_2026-09-22.liquid`
