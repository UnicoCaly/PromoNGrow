# 4th of July Email Campaign

**Summary**: A one-email warm-list blast for the **4th of July weekend (2026)**, built on the [[summer-of-futbol-campaign]] framework + brand system (it rides the same moment — July 4 lands mid-tournament, matches run through July 19). Hero offer = the Watch-Party Kit; conversion = reply/free-proof to the [[concierge-close]], not "buy now." EN only for now. Plug-and-play HTML was built and verified; **sent Friday 2026-06-26 AM** (source: Carlos, 2026-07-01 session). Two follow-on holiday goodwill emails (closed-Friday notice 7/2 + America-250 toast 7/4) were built 2026-07-01 — see below.

**Type**: campaign

**Sources**: Carlos request + Claude-admin build, 2026-06-26; framework/aesthetic cloned from [[summer-of-futbol-campaign]] (`Summer of Futbol Campaign/email-en.html`); voice per [[png-voice]]; offer per [[master-price-sheet]].

**Last updated**: 2026-07-01.

**Channel**: Email — owned warm Shopify list only.
**Status**: **SENT 2026-06-26 2:44pm** (633 recipients). EN only. Subject as sent = `Are you ready for the 4th of July?` (Carlos swapped the built "Red, white, and ready…" subject). **⚠️ Body greeting rendered "Hi ," (blank)** — this send used the pre-fix `{{ first_name }}` tag (the merge bug wasn't found until 2026-07-02). *(Corrects the earlier "sent 6/26 AM" note.)*
**Performance** (pulled 2026-07-06, `Analytics/`): open **23%** · click **1.7%** · bounce 0.6% (at risk) · unsub 0% · spam 0.2% (at risk) · delivery 100% · **$0 attributed sales / 0 orders** (concierge-close — not a tracked-checkout channel). Full record + the America-250 send on [[sent-email-log]].

---

## The campaign in one screen

- **Moment:** July 4 weekend (lands on a **Saturday** in 2026) layered on the [[summer-of-futbol-campaign]] tournament window (matches through July 19). Two reasons to fly colors.
- **Big idea / master line:** **"Red, white, and ready."** Tied to the creative Carlos made (navy ★★★★★ band, "4th of July ready.", patio watch-party photo).
- **Hero offer:** The **Watch-Party Kit** (custom tent + table throw + feather flag, own logo + colors) = Event Pro Bundle, **starting at $857, save 15%**; clears $500 → free shipping with **SHOWUP**. *(Price shown as $857 to match the live SoF send; current builder floor is ~$848 — confirm the exact figure on [[master-price-sheet]] before send. See [[bundle-pricing-source|bundle pricing]].)*
- **Audience / segment:** OWNED warm Shopify list only — `Reactivation-Apr2026` + `Reactivation-2026` + `int:tents`. **EXCLUDE `DNC:institutional`.** Never the cold promoteandgrow.com domain (channel firewall, same as SoF).
- **From:** Venus Castro · Promo & Grow · reply-to **hello@promongrow.com**. UTM `utm_campaign=4th-of-july-2026`.
- **Only code:** SHOWUP (free shipping over $500). No other codes, no countdowns.
- **Cadence:** Email 1 (the blast — sent 6/26). The optional "last call" was replaced by the no-pitch **holiday goodwill pair** (7/2 + 7/4, below); selling resumes 7/7 with [[summer-email-arc]] email 01. (decision: Claude-admin, 2026-07-01)

## Subject options (live = Option 1)

1. **Benefit (LIVE):** `Red, white, and ready for the 4th, {{ first_name }}?` · *Preview:* `Your tent, your throw, your flag — your logo, your colors.`
2. **Curiosity/warm:** `{{ first_name }}, is your patio ready for the 4th?` · *Preview:* `Free proof today, booth-ready before the weekend.`
3. **Concierge/human:** `Venus here — let's get you 4th-of-July ready` · *Preview:* `Reply with your logo and I'll start your free proof.`

## The honest-timing decision (why no hard "order by [date]")

A 5-business-day order placed this weekend realistically lands **after** Saturday 7/4. To protect the **"we say 5 days and hit 5 days"** rule (the #1 don't-break guardrail; see [[png-voice]] anti-overpromise + [[summer-of-futbol-campaign]] guardrail #2), the email does **not** stamp a hard ready-by-the-4th guarantee. Instead it drives to **reply → Venus gives the real date**, and uses the **matches-through-July-19** window as the safety net ("flying your colors well past the holiday"). The hook ("order this weekend") stays; the delivery promise stays honest. If Carlos chooses to **rush-produce for the 4th**, add an explicit "rush for the holiday" line. (decision: Claude-admin, 2026-06-26)

> Note: Carlos's original creative read "Order by Monday…" — flagged as too tight vs the SLA; he updated it to "Order this weekend…". The email matches the updated creative. (A small typo remains on the creative: "…and **be** ready to Promote & Grow…".)

## The artifact + aesthetic

- **File:** `4th of July Campaign/email-en.html` — plug-and-play, inline CSS, 600px table layout, MSO/Outlook fallbacks, bulletproof copper CTA, hidden preheader, `{{ open_tracking_block }}`. Cloned section-for-section from the SoF `email-en.html`.
- **Brand system (identical to SoF):** navy `#1B2838` structure · copper `#C17A3A` CTA only · trust-green `#1E6B4A` SAVE-15%/$500 badge · off-white `#F7F7F5` · white dominant. Georgia + Arial (email-safe). Retro wordmark. Footer `© 2026 Promo & Grow — Powered by Proago Branding Dept.`
- **Header:** hosted Shopify CDN logo on a navy bar → a navy hero band recreating the creative as **editable HTML** (★★★★★ + "4<sup>th</sup> of July ready." + subhead) → the hosted `header-fan-zone.png` watch-party photo (same CDN asset as SoF; conveniently carries red/white/blue bunting). To swap in the fully-composed 4th graphic later, host it and replace the photo `src` (then the HTML hero band can be deleted) — a comment in the file marks the spot.
- **Verified** 2026-06-26 via the `png-campaign-static` local server (port 4599): full render confirmed, CTA href carries the UTM, all sections present.

## Build & send checklist (Lane: Carlos / VA)

1. Confirm **$857 / save 15%** vs [[master-price-sheet]] (or use ~$848 builder floor) and that **SHOWUP** is active.
2. Shopify Email → new campaign → paste subject (Option 1) + the HTML body; map `{{ first_name }}`.
3. Recipients = warm reactivation segments + `int:tents`; **suppress `DNC:institutional`**; exclude recent purchasers.
4. From = Venus Castro; reply-to = hello@promongrow.com. Send a test to self; check render + links.
5. Send (the sooner the better given the holiday window). Review opens/clicks after 48h against [[email-library]] targets.

## The holiday goodwill pair (built 2026-07-01)

Two no-pitch follow-ons for the holiday weekend itself, built after the blast went out. Scoping call = pure goodwill + a curiosity teaser for [[summer-email-arc]] (Carlos was away during scoping — re-cut on request). Both: warm segments only, no codes, no CTA buttons; adversarially verified on 3 lenses (voice/anti-AI · honesty · craft/HTML) 2026-07-01.

- **Closed-Friday note** — `4th of July Campaign/email-en-closed-friday.html` (the built draft) · from Venus. Built with LIVE subject **"We're closing the shop Friday"** / *"And you should close yours too."*, hero "Closed Friday. On purpose.", the summer-series teaser + a Saturday P.S. loop. **⚠️ NOT sent as-built — Carlos rewrote it at send time and broadcast it 2026-07-02** as a value/series-launch email ("Not enough customers? Sounds like you need a little Promote & Grow"). The as-sent text + the full build→send diff live on [[sent-email-log]]. So this slot is **DONE (sent 7/2)**; the HTML file is the superseded draft.
- **America-250 toast** — `4th of July Campaign/email-en-america-250.html` · **SENT 2026-07-04 8:01am** (633 recipients) · from **Carlos** (owner voice). Subject as sent = `Happy 4th of July from us at Promo & Grow` (Carlos swapped the built "Carlos here — a toast…" line). A ~110-word semiquincentennial toast ("1776 ★ 2026 / Happy 250th, America.") with Carlos's "same bet we see our clients taking / the pursuit of happiness and a more perfect union" line and the "Carlos with the Promo & Grow team" sign-off. **✅ First send with the corrected merge tag** — rendered "Happy 4th, Bob." **Performance:** open **34%** (best of the four sends) · click 0% (no links by design) · bounce 0.9% (at risk) · $0 sales (goodwill). Full record on [[sent-email-log]].

## Open items

- **America-250 (7/4) send confirmation** (Carlos): confirm it went and whether as-built or rewritten; paste the as-sent text → [[sent-email-log]]. *(The closed-Friday slot is already sent + logged.)*
- **Opens/clicks** for the 6/26 blast **and** the 7/2 teaser (~48h+ post-send) — pull and log on [[sent-email-log]] / here.
- ES / Spanglish variant of the blast (offered; not built).
- ~~Send the pair~~ / ~~Email 2 "last call"~~ — closed-Friday slot sent 7/2 (as the teaser); America-250 pending confirm.

---

## Outward copy (ganas voice) — finalized EN body

> Hi {{ first_name }}, Venus here from Promo & Grow. The 4th of July weekend is almost here. Block parties, BBQs, patios packed for the matches — and I thought of your spot.
>
> Here's the honest part. No countdown, just the calendar. The 4th lands on a Saturday, and we print most jobs in **5 business days** plus 2–3 to ship. Order this weekend, reply with your logo, and I'll lock your **free proof** today and give you the exact date we'll have you set up. And with the matches running **through July 19**, you'll be flying your colors well past the holiday.
>
> **The Watch-Party Kit** — a custom tent + table throw + feather flag, all printed with **your own logo and your colors.** It's our Event Pro Bundle, **starting at $857, save 15%.** That clears $500, so shipping's on us with code **SHOWUP.**
>
> Three things I know you're wondering. *"What if it comes out wrong?"* — a **free proof before you pay a cent.** *"Can I trust the shop?"* — **4.8★ on Google, 20+ years, made in the USA.** *"Is this expensive?"* — real "starting at" pricing, no surprises. Accessible, never cheap.
>
> **[ Get a Free Proof → ]** *(copper button → /collections/bundles)* — or just **reply to this email** and I'll start it for you, or **call or text me at (844) 883-3308.** We're here 10am–4pm PT. Hablamos español.
>
> No pressure, {{ first_name }}. You bring the ganas, we'll make sure you show up like a pro. **Your event. Your brand. Done right.**
> — Venus Castro, Promo & Grow — Lynwood, CA
>
> *P.S. — If the name threw you: PrintCo Direct is now Promo & Grow. Same family shop, same hands on your job — just leveled up.*

---

## Related pages
- [[summer-email-arc]]
- [[summer-of-futbol-campaign]]
- [[email-library]]
- [[png-voice]]
- [[free-proof-landing-page]]
- [[concierge-close]]
- [[master-price-sheet]]
- [[reactivation-outreach]]
- [[conversion-tracking-setup]]
- [[fulfillment-sop]]
