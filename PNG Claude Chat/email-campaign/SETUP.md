# Promo & Grow — Email Campaign Setup Guide

**Created:** 2026-05-23
**Source:** Claude Design handoff bundle (`source/`) — 8 one-off campaign emails
**Status:** Shopify-ready HTMLs built in `shopify-ready/`, awaiting image URLs

---

## What's in this folder

```
email-campaign/
├── SETUP.md                         ← you are here
├── source/                          ← original Claude Design bundle (read-only reference)
│   ├── README.md                    ← Claude Design's instructions to coding agents
│   ├── chats/chat1.md               ← full design conversation (read for intent)
│   ├── assets/                      ← logo files (3 variants)
│   └── emails/                      ← original HTMLs + img/ + plain text fallback
│       ├── 01-carlos-reactivation.html       (reactivation, signature on)
│       ├── 02-billboard.html                 (100 sq ft billboard concept)
│       ├── 03-they-built.html                (client case study)
│       ├── 05-bundle-launch.html             (3 bundle cards)
│       ├── 06-summer-checklist.html          (7 numbered education items)
│       ├── 07-setup-vs.html                  (VS split + $800 stat)
│       ├── 08-vip-note.html                  (letter format, manual send only)
│       ├── event-season-midrange.html        ← LOCKED B (this is Email 4)
│       ├── event-season-bold.html            (variation, not shipping)
│       ├── event-season-safe.html            (variation, not shipping)
│       └── event-season-plain-text.txt       (plain text fallback)
└── shopify-ready/                   ← paste these into Shopify, after image URLs are filled in
    ├── email-01-carlos-reactivation.html
    ├── email-02-billboard.html
    ├── email-03-they-built.html
    ├── email-04-event-season.html
    ├── email-05-bundle-launch.html
    ├── email-06-summer-checklist.html
    ├── email-07-setup-vs.html
    └── email-08-vip-note.html
```

---

## Design system (locked)

- **Width:** 640px editorial
- **Aesthetic:** ~60/40 Olipop/Malbon — warm tinted modules, named blocks, single rounded-pill CTAs per section
- **Type:** DM Serif Display (headlines, with italic for pull quotes) + DM Sans (body) — matches the live site
- **Palette:** Site palette + warm cream `#F5F2ED`, page wash `#EFEAE2`, copper tint `#E8D2B6`, sage `#D4DCC9`, dusty navy `#1B2838`
- **CTAs:** Copper pill (`background:#C17A3A; border-radius:999px; padding:18px 38px`) — single per section
- **All CTAs route to:** `https://bit.ly/3REpAhn` (P&G bundles landing)
- **Email-safe layout:** `<table>` structure, inline styles, `x-apple-disable-message-reformatting`, mobile-responsive via media queries

---

## Step 1 — Upload images to Shopify Files ✅ DONE

All 8 unique source images were uploaded to Shopify Files via the GraphQL `stagedUploadsCreate` + `fileCreate` mutations on 2026-05-23. Live CDN URLs are baked into every `shopify-ready/email-*.html`. The token map (for reference, if you ever need to swap a photo or rebuild an email):

| Token | Shopify CDN URL | Used by |
|---|---|---|
| `IMG_LOGO_WORDMARK` | `https://cdn.shopify.com/s/files/1/0731/3886/4164/files/png-email-logo-wordmark-horizontal.png?v=1779596430` | All 8 emails (header + footer) |
| `IMG_HERO_BILLBOARD` | `https://cdn.shopify.com/s/files/1/0731/3886/4164/files/png-email-hero-billboard.png?v=1779596430` | Email 02 (Sameday Insurance setup) |
| `IMG_HERO_CARLOS` / `IMG_HERO_LANSFORD` | `https://cdn.shopify.com/s/files/1/0731/3886/4164/files/png-email-hero-carlos.jpg?v=1779596431` | Emails 01 + 04 (same image, two tokens) |
| `IMG_HERO_CLIENTWORK` | `https://cdn.shopify.com/s/files/1/0731/3886/4164/files/png-email-hero-clientwork.jpg?v=1779596430` | Email 03 (Lynwood Unified) |
| `IMG_HERO_CHECKLIST` | `https://cdn.shopify.com/s/files/1/0731/3886/4164/files/png-email-hero-checklist.png?v=1779596430` | Email 06 |
| `IMG_BUNDLE_EVENT_VENDOR` / `IMG_HERO_BLANK_VS_BRANDED` | `https://cdn.shopify.com/s/files/1/0731/3886/4164/files/png-email-bundle-event-vendor.png?v=1779596430` | Bundle 01 in Emails 04/05, hero in Email 07 |
| `IMG_BUNDLE_EVENT_PRO` / `IMG_HERO_BUNDLE_LAUNCH` | `https://cdn.shopify.com/s/files/1/0731/3886/4164/files/png-email-bundle-event-pro.png?v=1779596430` | Bundle 02 in Emails 04/05, hero in Email 05 |
| `IMG_BUNDLE_TRADE_SHOW` | `https://cdn.shopify.com/s/files/1/0731/3886/4164/files/png-email-bundle-trade-show.png?v=1779596430` | Bundle 03 in Emails 04/05 |

To swap a photo later: upload the replacement to Shopify Files, copy its new CDN URL, find/replace the old URL across the relevant `shopify-ready/email-*.html`. (Or hand it off via the Drive folder — see "Photo workflow" below.)

Shopify file IDs (for management via API):
- Logo: `gid://shopify/MediaImage/28810134356004`
- Hero billboard: `gid://shopify/MediaImage/28810134388772`
- Hero Carlos/Lansford: `gid://shopify/MediaImage/28810134421540`
- Hero clientwork: `gid://shopify/MediaImage/28810134454308`
- Hero checklist: `gid://shopify/MediaImage/28810134487076`
- Bundle Event Vendor: `gid://shopify/MediaImage/28810134519844`
- Bundle Event Pro: `gid://shopify/MediaImage/28810134552612`
- Bundle Trade Show: `gid://shopify/MediaImage/28810134585380`

---

## Step 3 — Paste into Shopify Email

These are all **one-off campaigns** (not automated flows).

For each email:

1. Shopify admin → **Marketing → Campaigns → Create campaign → Shopify Email**
2. Pick the **Blank** template (or **Brand** then delete all default blocks)
3. Add a **Custom HTML** block
4. Open `shopify-ready/paste-this/email-XX.body.html` and **copy the entire file** (these are body-only extracts — every line is ready to paste, no slicing needed)
5. Paste into the Custom HTML block
6. Set the campaign settings:
   - **Subject line:** see per-email table below
   - **Preview text:** see per-email table below
   - **From name:** Carlos at Promo & Grow
   - **From email:** hello@promongrow.com
   - **Reply-to:** hello@promongrow.com
7. **Recipients** (segments pre-built — visible in Shopify Email's recipient picker):
   - Reactivation emails (01, 02, 03): pick segment **PNG · Reactivation List (Apr 2026)** → 572 subscribed contacts (`gid://shopify/Segment/1110185213988`)
   - Campaign emails (04, 05, 06, 07): pick segment **Email subscribers** → 628 subscribed contacts (Shopify default)
   - For emails 02/03 specifically: also exclude anyone who has purchased since the previous email in the sequence (Shopify Email has a built-in "exclude purchasers" toggle in the recipient step)
   - VIP email (08): **do NOT send through Shopify campaigns** — see special notes below
8. Send a test to yourself first → review on desktop + mobile
9. Schedule or send

### Per-email reference

| # | Subject line | Preview text | Recipient |
|---|---|---|---|
| 01 | Quick update from Carlos — Promo & Grow | A note from the owner — and a way to make your booth show up. | Reactivation-Apr2026 tag |
| 02 | Your booth is a 100 sq ft billboard | Most vendors don't think about it this way. | Reactivation-Apr2026 (exclude purchasers since 01) |
| 03 | Here's what they built | From order to setup in 5 days. | Reactivation-Apr2026 (exclude purchasers since 02) |
| 04 | Event season is here | Farmers markets, trade shows, and festivals are booking now. | All subscribers |
| 05 | Event bundles — save up to $176 | Everything your booth needs. One order. One price. | All subscribers |
| 06 | Your outdoor event setup checklist | 7 things to check before your next event. | All subscribers |
| 07 | The booth everyone walked past | vs. the one with the line. The difference is about $800. | All subscribers |
| 08 | Quick note from Carlos | You've been one of our best clients. | **Manual personal send only** (see below) |

---

## Pre-ship caveats

### From the design chat (Carlos to handle before sending)
1. **Email 03 — case study brand.** Currently uses "Lynwood Unified" as the featured client. Confirm or substitute with a different client you'd rather feature. Update the headline + body text accordingly.
2. **Email 07 — testimonials are placeholders.** Two client testimonial quotes need to be swapped with real ones from your Google reviews or past clients.
3. **Email 08 — `{X} times` is a manual personalization point.** This is a 1:1 letter, not a campaign. Each recipient gets it with their actual order count filled in. Send from your personal inbox (or hello@promongrow.com directly), NOT through Shopify Campaigns. The HTML is for reference/formatting only.

### From Shopify-side verification (config drift to consider)
4. **SHOWUP discount usage limit.** The active discount currently has `appliesOncePerCustomer: false` and no overall usage limit. The original spec said "one per customer" — at scale, this allows the same customer to use it on multiple orders. Decide: leave as-is (looser, friendlier) or restrict to one-per-customer via Shopify admin → Discounts → SHOWUP → "Customer limit". (The `endsAt: null` / no expiration matches the spec — that one's fine.)

---

## Photo workflow — Drive vs Photos vs Shopify Files

You asked about Google Drive vs Google Photos for the actual photos. Here's the breakdown.

### Short answer
- **Google Drive folder = best for the source library** (full quality, organized, I can read it via MCP)
- **Shopify Files = where the live email image URLs come from** (always — Drive/Photos URLs do NOT work in email)
- **Google Photos = avoid** for this workflow

### Why

| Option | Source library | Email-ready URLs | MCP access | Verdict |
|---|---|---|---|---|
| Google Drive | ✅ Full quality, foldered | ❌ Drive sharing URLs require auth, don't render as `<img src>` in email | ✅ Yes | **Use for source library** |
| Google Photos | ⚠️ Compresses originals (1080p in "Storage saver", original only in "Original" mode and costs storage) | ❌ Photo share URLs are pages, not direct image links | ⚠️ Limited | **Avoid** |
| Shopify Files | ❌ Not a library — flat list | ✅ Permanent `cdn.shopify.com` URLs, native email support, fast CDN, free | ✅ Yes (via GraphQL) | **Always the email destination** |

### Recommended workflow

1. **Create one Google Drive folder:** `Promo N Grow / Photo Library`
2. **Subfolder structure:**
   ```
   Photo Library/
   ├── 01-Tents/
   ├── 02-Bundles/
   ├── 03-Client-Setups/   ← real installs at real events (most valuable)
   ├── 04-Backdrops/
   ├── 05-Accessories/
   └── _Raw-uploads/       ← drop-zone before sorting
   ```
3. **Naming convention** (from your standing instructions): `subject-shortdesc_M.DD.YYYY.jpg` — e.g., `tent-10x10-namaste_5.23.2026.jpg`
4. **Share folder access to me** (Drive sharing → "Anyone with the link can view") so I can pull photos via the Google Drive MCP
5. When we update an email, I pull the photo from Drive → upload to Shopify Files via MCP → swap the URL in the email HTML → commit the updated HTML back to the project

This gives you one source of truth (Drive), email-compatible URLs (Shopify CDN), and version control on which photo was used in which email (project repo).

### What about the photos already in this bundle?

The 10 images in `source/` are real client work that Claude Design pulled from your uploads (Lansford & Carbonara, Sameday Insurance, Pillar & Hops Brewing, Namaste Jewels, Energy car show, Lynwood Unified). They're production-ready as-is. You can:

- **Ship V1 with these** (recommended — they're already curated and matched to the bundle SKUs)
- **Replace with new photos** as you add to the Drive library — same swap process

---

## Quick paste-ready checklist

- [ ] Decide: Option A (manual upload) or Option B (I upload via MCP)
- [ ] Get 10 Shopify CDN URLs into the image map above
- [ ] Substitute tokens across all 8 HTMLs (manual or one-shot script)
- [ ] Create Email 4 (Event Season) campaign in Shopify — paste body, set subject + preheader, test send
- [ ] Send test to yourself, review on desktop + iPhone Mail + Gmail
- [ ] If clean: schedule or send to all subscribers
- [ ] Repeat for emails 01, 02, 03 (reactivation sequence) — pace 7 days apart
- [ ] Repeat for 05, 06, 07 per the schedule in `PNG-Email-Library_5.9.2026.md`
- [ ] Hold 08 — that's a manual 1:1 personal send to repeat clients

---

## Tracking + unsubscribe conventions (applied 2026-05-24)

All clickable links across all 8 emails now carry consistent UTM tagging so every click attributes to the right campaign + position in Shopify Analytics and Google Analytics.

**UTM structure** (`&amp;` entity-encoded for HTML hygiene; renders as `&` when the email client parses the href):

```
utm_source=email
utm_medium=campaign
utm_campaign={per-email-name}
utm_content={position-on-page}
```

**Per-email `utm_campaign` values:**

| Email | utm_campaign |
|---|---|
| email-01-carlos-reactivation | `carlos-reactivation` |
| email-02-billboard | `billboard` |
| email-03-they-built | `they-built` |
| email-04-event-season | `event-season` |
| email-05-bundle-launch | `bundle-launch` |
| email-06-summer-checklist | `summer-checklist` |
| email-07-setup-vs | `setup-vs` |
| email-08-vip-note | `vip-note` |

**Per-position `utm_content` values:**

| Position | utm_content | Destination |
|---|---|---|
| Header logo | `logo-header` | `https://promongrow.com/` (homepage) |
| Footer logo | `logo-footer` | `https://promongrow.com/` (homepage) |
| Body CTAs (hero button, hero image, bundle images, bundle buttons, closing CTA) | `body-cta` | `https://promongrow.com/collections/bundles` |
| Footer text-link "promongrow.com" | `footer-link` | `https://promongrow.com/` (homepage) |

**Why bit.ly was removed:** The original design used `https://bit.ly/3REpAhn` for every body CTA. Inspection revealed Bitly was redirecting to `…/collections/bundles?utm_campaign=Email - Event season is here` regardless of which email actually sent the click — so every body-CTA click in your analytics was being attributed to the Event Season campaign, even if it came from a Summer Checklist or Reactivation email. Switching to direct URLs with per-email `utm_campaign` fixes that attribution bug AND removes the Bitly redirect hop (faster load + cleaner link previews).

**Unsubscribe link.** Footer uses `{{ unsubscribe_link }}` (Shopify Email variable that returns the unsubscribe URL) wrapped in your own `<a>` tag, instead of the older `{% unsubscribe %}` block-tag syntax. This gives styling control + matches Shopify Email's current best practice.

**Untagged links (intentional):** `tel:8448833308`, Google Fonts preconnect/CSS hrefs (system, not user-clickable), and `{{ unsubscribe_link }}` (don't attach tracking to opt-out clicks).

**Required Shopify variables.** Each email body must include both of these or Shopify Email refuses to save the campaign:
- `{{ open_tracking_block }}` — renders as an invisible 1×1 pixel that tracks email opens. Injected just before `</body>` by `build.py`.
- `{{ unsubscribe_link }}` — already wired into the footer (CAN-SPAM requirement).

If you re-edit a body file by hand, leave both Liquid tags intact.

**To rebuild any time:** `python3 PNG Claude Chat/email-campaign/build.py` — single script runs the full pipeline from `source/emails/` → `shopify-ready/email-*.html` + `paste-this/*.body.html`. Edit constants at the top of build.py to change UTM conventions, image URLs, or campaign names.

---

## Notes on Shopify Email Custom HTML compatibility

- The HTMLs use full `<html>` structure with `<style>` block + Google Fonts preconnect. When pasted into a Shopify Email Custom HTML block, only the `<body>` content should be pasted (Shopify wraps it). The `<style>` block content is preserved and works in most email clients.
- Web fonts (DM Serif Display, DM Sans) load on Apple Mail, Gmail web, and Outlook web. They fall back to Georgia (serif) and system sans on Outlook desktop and others.
- All layout is `<table>`-based for maximum email client compatibility — no flexbox/grid.
- Images use `width="X"` attributes alongside CSS for Outlook compatibility.
- Mobile responsive via `@media (max-width:640px)` queries in the `<style>` block.

If you find a client doesn't render correctly, the plain-text fallback in `source/emails/event-season-plain-text.txt` shows the pattern for that.
