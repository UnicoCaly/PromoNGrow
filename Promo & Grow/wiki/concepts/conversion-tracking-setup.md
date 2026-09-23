# Conversion Tracking Setup

**Summary**: The conversion-tracking foundation that must be GREEN before Promo & Grow scales [[google-search-engine|Google Search]]. Tracking is **partly live** — the Meta Pixel (`1205589804645510`) and Google Ads tag (`AW-17631020505`) are installed via the theme (build-status 6/16); the remaining gate is the **blank `google_ads_quote_label`** plus a **quote-conversion firing-path bug found + fixed 2026-06-20** (the conversion was unreachable code; now fires on the form-success page). This page specs what remains, the conversion actions, and the lanes.

**Type**: concept

**Sources**: co-CEO build session 2026-06-17; PNG-Build-Status_6.16.2026.md; draws on conversion-bridge.md, concierge-close.md, store-and-catalog.md, dashboard.md.

**Last updated**: 2026-06-20 (quote-conversion firing-path bug found + fixed; setup steps revised).

**Metric**: enables `quote_request_submitted` (the cold-traffic / paid success metric) + tracked phone-call conversions (source: conversion-bridge.md).

---

## Pixel consolidation — USE `1205589804645510` (2026-06-24)

When Carlos set up the Meta campaign, the pixel verification "didn't recognize" the installed pixel and Meta offered a different code. Diagnosis: **multiple Business Managers + several accidental empty pixels.** The canonical one:

- ✅ **`1205589804645510`** — "Promo & Grow Shop's pixel", in the **"Promo & Grow Shop"** Business Manager. **Active, ~2.1K events/28d, Conversions API + Meta Pixel, and the pixel installed site-wide** (verified in the live DOM). **Use this one everywhere.**
- ⚠️ **Empty/duplicate datasets to ignore** (0 events, created by accident): `2085994955264913`, `1350948813650905` (Shopify Concierge), `941980002205530` (Promo N Grow), **`850250664585586` ("Proofer Adds")** — the ad had defaulted to this one → "Meta Pixel not active." Rename them "❌ DO NOT USE" so they stop defaulting in; **don't delete** (permanent).
- ⚠️ A separate **"Shopify Business Manager"** holds a different auto-created pixel `136323338213418` (~125 events) — not the main one.

**To select `1205…` in an ad:** confirm you're in the "Promo & Grow Shop" BM → Business Settings → Data sources → Datasets → `1205…` → **add the ad account to Connected assets** → set it as the ad account's default conversion dataset → select it in the ad's Tracking. (It wasn't selectable because it wasn't assigned to that ad account.) **Owner: Carlos** (Meta UI). This is the pixel the [[meta-ugc-launch-kit]] website funnel optimizes against. (source: Carlos screenshots + session 2026-06-24)

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
2. ✅ **DONE 2026-06-21** — label `_S8lCJKl6sIcENmLkNdB` is live in `config/settings_data.json` on the MAIN theme **and** the success-page conversion fire is live in `snippets/png-quote-modal.liquid` (both confirmed by reading the published theme via the Admin API). The wiring renders `gtag('event','conversion',{send_to:'AW-17631020505/_S8lCJKl6sIcENmLkNdB'})` on the quote-form success page — it WILL fire on a real submit.
3. 🔄 **IN PROGRESS** — **Carlos sent test submits 2026-06-21; checking Google Ads "Recording conversions" 6/22.** *Verify method:* on the live theme, submit a test quote and reach the success page. In DevTools → Network, **filter by the label `_S8lCJKl6sIcENmLkNdB`** (or `17631020505` — the `AW-` prefix is NOT in the URL). Success = a request to one of `www.googleadservices.com/pagead/conversion/17631020505/…`, `googleads.g.doubleclick.net/pagead/viewthroughconversion/17631020505/…`, or `www.google.com/pagead/1p-conversion/17631020505/…` whose query contains **`label=_S8lCJKl6sIcENmLkNdB`** (status 200). The label is the distinguisher — a page-load remarketing ping to `17631020505` fires on every page *without* it. The Network ping is **instant** (= proof of wiring); the Google Ads **count lags ~3–24h** (Conversions → the action → "Recording conversions"); a no-ad-click test shows on the action's diagnostics but 0 in campaign columns (normal).
4. **GA4 import** (optional/parallel) — Carlos-VA via the Google & YouTube channel.
5. 🆕 **[Carlos — GA4 admin lane, NOT Claude Code] Register the `cta_placement` custom dimension.** Theme commit `7177412` (2026-09-22) renamed the GA4-facing event parameter from `source` to **`cta_placement`** at all three emitters, because GA4 treats `source` as a *manual traffic-source field on any event*, not a custom parameter — so every lead and call event was overwriting its own session origin (78 sessions in the 2026-09-14 export were attributed to placements: "mobile-sticky / (not set)" 52, "unknown" 16, "png-quote-modal" 9, "intent-router" 1 → [[ga4-traffic-read-2026-09]]).
   **Do this:** GA4 Admin → Data display → Custom definitions → Create custom dimension · name "CTA placement" · scope **Event** · event parameter `cta_placement` (exact lowercase).
   ⚠️ **Not retroactive** — the dimension reports only from its registration date forward, so register it at or before the deploy. Until then the value is still *collected* and visible in DebugView/Realtime (and any BigQuery export), just unusable in standard reports and Explorations. Nothing is lost, only unreadable where you'd look.
   **Verify first (step 0):** this theme configures only `AW-17631020505` and loads gtag only when `window.gtag` is undefined, relying on Shopify's Google & YouTube channel to supply the GA4 config. Fire a quote submit and a tap-to-call with **DebugView** open and confirm `generate_lead` / `click_to_call` arrive in the GA4 property carrying `cta_placement`. If they don't, the events are reaching Google Ads only and no custom dimension will ever populate.
   **Note:** the Meta pixel deliberately still sends `source` (`source` is not reserved in Meta). The two platforms read different parameter names for the same concept — expected, not a bug.

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

> **New conversion surface (2026-06-22):** the [[free-proof-landing-page]] (`page.lp-free-proof`) fires `quote_request_submitted` the same way the quote modal does — both its forms dispatch `png:quote_request_submitted` on the `form.posted_successfully?` success render, so the existing Meta `Lead` + Google Ads `conversion` (label `_S8lCJKl6sIcENmLkNdB`) wiring applies with no new pixel code. Pending the same live-test before paid traffic. (source: build session 2026-06-22)

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
