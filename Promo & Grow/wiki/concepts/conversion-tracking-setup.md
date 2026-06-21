# Conversion Tracking Setup

**Summary**: The conversion-tracking foundation that must be GREEN before Promo & Grow scales [[google-search-engine|Google Search]]. Tracking is **partly live** — the Meta Pixel (`1205589804645510`) and Google Ads tag (`AW-17631020505`) are installed via the theme (build-status 6/16); the remaining gate is the **blank `google_ads_quote_label`** plus a **quote-conversion firing-path bug found + fixed 2026-06-20** (the conversion was unreachable code; now fires on the form-success page). This page specs what remains, the conversion actions, and the lanes.

**Type**: concept

**Sources**: co-CEO build session 2026-06-17; PNG-Build-Status_6.16.2026.md; draws on conversion-bridge.md, concierge-close.md, store-and-catalog.md, dashboard.md.

**Last updated**: 2026-06-20 (quote-conversion firing-path bug found + fixed; setup steps revised).

**Metric**: enables `quote_request_submitted` (the cold-traffic / paid success metric) + tracked phone-call conversions (source: conversion-bridge.md).

---

## Why this is the #1 prerequisite

Tracking is **partly live** (build-status 6/16): the Meta Pixel `1205589804645510` + Google Ads tag `AW-17631020505` are installed via the theme (`snippets/png-tracking-pixels.liquid`), so **remarketing audiences are already collecting** (source: PNG-Build-Status_6.16.2026.md). The gap turned out to be **wider than "just the label"** (audit 2026-06-20):

1. **The quote-conversion firing path was BROKEN in code — now FIXED.** The quote modal pushed `{event:'quote_request_submitted'}` to `dataLayer` (an array push), but the conversion listener in `png-tracking-pixels.liquid:136` waited for a DOM CustomEvent `png:quote_request_submitted` that **nothing dispatched** — so the Meta `Lead`, GA4 `generate_lead`, AND the Google Ads `conversion` never fired, *even if the label were set*. **Fix (Claude-admin):** fire the conversions on the server-rendered `form.posted_successfully?` success page in `snippets/png-quote-modal.liquid` (root + mirror). Pending push to live.
2. **The quote-conversion label is BLANK.** `google_ads_quote_label` is empty, so the Google Ads `conversion` line stays guarded off — Carlos must create the action and paste the label.
3. **Verify** the labeled conversion fires live (Network tab / Tag Assistant) + confirm tap-to-call; GA4 import optional/parallel.

**Rule: ship the code fix + the label, then verify every primary conversion fires live before scaling ad spend.** Hard gate on the [[google-search-engine]] launch checklist. (Carlos connecting the Google & YouTube channel 2026-06-17.)

## What remains (updated 2026-06-20)

✅ **Installed:** Meta Pixel `1205589804645510` + Google Ads tag `AW-17631020505` are live (`gtag('config','AW-17631020505')`) — remarketing audiences collecting (source: PNG-Build-Status_6.16.2026.md).
✅ **Quote-conversion code fix shipped to the repo 2026-06-20** (success-page fire; root + mirror) — *pending push to live.*

**Remaining, in order:**
1. ✅ **[Carlos] DONE 2026-06-20** — "Submit lead form" conversion action created; **label = `_S8lCJKl6sIcENmLkNdB`** (full `send_to: 'AW-17631020505/_S8lCJKl6sIcENmLkNdB'`, value 1.0 USD). *(Confirm it's marked Primary + Count = One.)*
2. **[Claude Code/admin]** Paste the label → Theme settings → "Promo & Grow — Tracking & Analytics" → Google Ads → "Quote conversion label" (or set `config/settings_data.json` `google_ads_quote_label`); then **push** the fix + label live: `shopify theme push --only snippets/png-quote-modal.liquid config/settings_data.json` (+ mirror sync).
3. **[Claude-admin]** **Verify** — submit a live test quote; in DevTools → Network watch for a `googleads.g.doubleclick.net/pagead/…` (or `google.com/pagead/1p-conversion/…`) hit carrying `AW-17631020505/<label>` on the success page, or Tag Assistant shows a `conversion` event with that `send_to`. Then Google Ads → Conversions → "Quote submitted" → **"Recording conversions"** (up to 3–24h lag).
4. **GA4 import** (optional/parallel) — Carlos-VA via the Google & YouTube channel.

**Hard gate:** no ad spend until a live test produces the labeled `pagead`/`doubleclick` conversion ping AND the action shows "Recording conversions." Repeat the live-test for tap-to-call + lead-form before launch.

## The conversion actions to define

| Conversion action | Fires when | Type | Counts as |
|---|---|---|---|
| `quote_request_submitted` | Free-Proof quote form submitted (incl. /es/ form) | Primary | The lead — the cold/paid success metric (source: conversion-bridge.md) |
| `phone_call_click` | Tap-to-call on the (844) 883-3308 number (mobile) | Primary | High-intent call attempt (source: store-and-catalog.md) |
| `call_from_ad` | Call from a Google call asset/forwarding number, qualifying duration (e.g. 60s+) | Primary | A real concierge conversation |
| `lead_form_submit` | Google lead-form asset submission | Primary | In-platform lead |
| `add_to_cart` / `begin_checkout` | Self-serve cart events (low-ticket items) | Secondary | Monitor only — not the goal (source: concierge-close.md) |

The revenue runs on the [[concierge-close|human close]], so the primary conversions are quote requests and calls — NOT checkouts (source: conversion-bridge.md, concierge-close.md). Mark cart/checkout events Secondary so they don't pull bidding toward the near-dead cart.

## Call tracking

Calls are a top conversion for this business — the May 25 email → call → $800 order is the close working as designed (source: reactivation-email-sequence.md / concierge-close.md). To count them:

- **Tap-to-call clicks** on mobile (theme event) — a proxy, easy to fire (Claude Code).
- **Google call assets / call-from-ads** with a Google forwarding number and a minimum call length threshold so only real conversations count (Carlos-VA in Google Ads).
- Keep the displayed line as (844) 883-3308 for brand consistency; the forwarding number is Google-managed behind the call asset (source: store-and-catalog.md).

## Lanes

- **(Claude Code)** — install the Google tag/GA4 + Meta Pixel on the Shopify theme; wire the `quote_request_submitted` form-submit event, the tap-to-call event, and the /es/ form event. This is explicitly a theme/code task (source: store-and-catalog.md two-agent model).
- **(Carlos-VA)** — create/link the Google Ads account, import GA4 conversions, configure call assets + call conversion, set the primary/secondary designations.
- **(Claude-admin)** — verify events fire (GA4 DebugView / Tag Assistant), document the conversion definitions, and report status to [[dashboard]].

## Verification before spend

Do a live test of each primary conversion (submit the quote form, tap-to-call, submit the lead form) and confirm it lands in GA4/Google Ads BEFORE enabling the campaign. Only after all primary conversions verify does the [[google-search-engine]] campaign go live (co-CEO recommendation).

## Related pages
- [[google-search-engine]]
- [[lead-machine]]
- [[theme-build-status]]
- [[conversion-bridge]]
- [[concierge-close]]
- [[store-and-catalog]]
- [[dashboard]]
