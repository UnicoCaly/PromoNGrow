# Phone Number Map

**Summary**: Which phone number does what — the canonical map. Inbound stays on the 844 brand line; the local LA line **213.817.9188 is now LIVE (2026-07-14, via Crexendo)** for Venus's outbound caller ID + a second inbound line, with SMS pending Crexendo verification and WhatsApp to be attempted on it; the Proágo 323 number never appears on P&G touchpoints. (Root cause behind the local line: the 844 toll-free can never register on WhatsApp — 2026-07-09 finding, below.)

**Type**: concept

**Sources**: Carlos direction 2026-07-09 + **2026-07-14** (the 213 line went live — call transcript [[venus-brief-2026-07-14]]); Slack audit 2026-07-09; WhatsApp Help Center + tyntec toll-free FAQ (checked 2026-07-09); [[meta-ugc-launch-kit]] blocker history (2026-06-22).

**Last updated**: 2026-09-13 (213 ruled the public local number for listings + site schema; 844 stays the toll-free line).

---

## The map

| Number | Role | Rules |
|---|---|---|
| **844.883.3308** | P&G **inbound/brand** line — site, forms, all collateral (Venus's [[venus-email-signature|personal email signature]] now leads with her direct **213** line, 2026-07-14) | Inbound ONLY. Do not dial out on it (toll-free outbound is the most spam-screened caller-ID category). Cannot register on WhatsApp (see below). Stays on all collateral unchanged. |
| **213.817.9188** (LIVE 2026-07-14, via Crexendo) | Venus's **outbound caller ID** + a second **inbound** line; **SMS** pending; **WhatsApp** to be attempted here | Local LA (213). Venus's outbound calls now show this local number instead of the 844 toll-free — the point is a higher pickup rate ("not a marketing number"). Also rings inbound. **SMS = still pending Crexendo setup** (as of 2026-07-19). **WhatsApp = submitted to Meta, awaiting approval** for this number. Day-one hygiene: register at freecallerregistry.com, CNAM "Promo & Grow," confirm SHAKEN/STIR attestation, keep dialing under ~50–75/day. **Propagate the number** → Venus's email signature, promongrow.com, Yellow Pages, Google (all Carlos's to-do). |
| **323.249.4449** | **Proágo** — NOT a P&G number | Never on P&G touchpoints. Leaked into Venus's email template 6/25; Carlos caught it same day ("Please don't use this number only 844.883.3308"). |
| **Crexendo VoIP** | Venus's dialer platform (now hosting the 213 line) | The 213.817.9188 DID lives here; SMS verification is in progress with Crexendo. (Earlier outages 6/23–6/25 cost ~2 days of lead response.) If SMS/WhatsApp on the DID hits friction, a standalone line (OpenPhone-class, ~$15/mo) is the fallback. |

> ⚠️ **2026-09-13: Venus is no longer with the company.** The 213 line was set up as her Crexendo DID (outbound caller ID + inbound). Now that it's the public number on the site, schema, Yelp, and policies, **confirm it rings Carlos** (and voicemail greeting/SMS/WhatsApp registration aren't tied to Venus). Carlos lane.

> **RULED 2026-09-13 (Carlos): 213.817.9188 is the public local number for listings and the site's business record.** Yelp's phone is being changed to 213 on 2026-09-14. On promongrow.com (live 2026-09-13, theme commit `fca5762`), the site-wide LocalBusiness schema `telephone` = +1-213-817-9188, with 844 as a customer-service `contactPoint`; the footer lists the address, (213) 817-9188, and toll-free (844) 883-3308; the contact page leads with 213. **844.883.3308 stays live** as the toll-free line in existing CTAs, forms, the free-proof LP, and product copy. For listing consistency, GBP, Bing Places, Apple Business Connect, and directories should show **213 as primary** (844 as an additional number where the field exists). Canonical wording: [[entity-facts-sheet]].

> **562.472.7994 = Carlos's personal cell** (confirmed 2026-07-19). **NOT** a P&G line, and **not** being set up for SMS or WhatsApp. Keep it off all P&G touchpoints/collateral.

> **Documented exception (2026-08-07):** the staged memorial-displays landing page ([[memorial-displays-vertical]], not yet deployed) carries **(213) 817-9188** as its contact number throughout — header, CTAs, footer — per Carlos's direction 2026-08-07. A deliberate exception to "844 on all collateral" for this B2B vertical (funeral-home callers reach Venus directly). The 844 stays canonical everywhere else; the vertical's flyer re-export should follow whichever number Carlos wants on print.

## Why the 844 can't be the WhatsApp number (root cause, resolved 2026-07-09)

The registration errors Carlos hit repeatedly are **not fixable via Meta support**: toll-free numbers are effectively unsupported for WhatsApp registration — the verification call cannot navigate an IVR/auto-attendant, and SMS delivery to toll-free lines is typically unprovisioned (source: WhatsApp Help Center "Can't complete registration" + tyntec toll-free FAQ, checked 2026-07-09). The 6/22 "suspected spam-filtering" theory on [[meta-ugc-launch-kit]] is superseded by this.

## WhatsApp registration plan

1. **213.817.9188 is now live** → attempt WhatsApp Business registration on it (Carlos, 2026-07-14). WhatsApp restricts some VoIP numbers, so it may pass or fail — if it fails, go to the fallback.
2. **Fallback (bulletproof):** a cheap real SIM/eSIM line (~$10–15/mo) on a phone at the Lynwood shop → register WhatsApp Business there once → Venus works it from El Salvador via **linked devices** (she never needs the physical phone).
3. Then run the WhatsApp Business setup checklist already written in [[meta-ugc-launch-kit]] (profile, greeting = logo-first ask, quick replies, labels pipeline).

Once live: WhatsApp = follow-up + logo-collection channel first ([[meta-funnel-review-2026-07-09]] leak #2/#3); Click-to-WhatsApp ad later as a separate campaign.

## Related pages
- [[meta-funnel-review-2026-07-09]]
- [[meta-ugc-launch-kit]]
- [[meta-lead-intake-playbook]]
- [[venus-work-queue]]
