# Log

Append-only, newest at top. Each entry: `## [YYYY-MM-DD] <op> | <title>` (ingest / query / lint / decision / update).

---

## [2026-09-22] update | Entity record completed + the GA4 fix that was patched in the wrong place first

**Carlos said go on both queued theme items.** Committed as `7177412` and **deployed to the live storefront the same day** — served HTML verified for the
schema block, all four `sameAs` URLs, `cta_placement` at every emitter, and no remaining reserved
traffic-source field on any `gtag('event', …)`. Carlos **registered the `cta_placement` custom dimension
in GA4 on 2026-09-22**, so placement reporting begins that date (it is not backfilled).

**LocalBusiness schema** (`sections/header.liquid`): `openingHoursSpecification` Mon–Fri 10:00–16:00
(weekends omitted = closed, the schema.org convention), and `sameAs` now carries the confirmed Facebook and
LinkedIn company pages beside Instagram and Yelp. A `| uniq` guards against a duplicate if the same URL is
later pasted into the theme's own social settings. The rendered JSON-LD was validated by parsing the
simulated Liquid output against live settings.

**The GA4 attribution fix — and the blocker a 55-agent adversarial review caught in my first draft.**
GA4 treats `source` as a *manual traffic-source field on any event*, not a custom parameter, so every lead
and call event was overwriting its own session origin. The damage is visible in Carlos's own 9/14 export:
**78 sessions attributed to placements rather than channels** — "mobile-sticky / (not set)" 52, "unknown"
16, "png-quote-modal" 9, "intent-router" 1 → [[ga4-traffic-read-2026-09]].

My first draft renamed the parameter in the `png:quote_request_submitted` **listener**. Two independent
review lenses caught, 3/3 each, that **nothing dispatches that CustomEvent on the modal path** — `grep -c
dispatchEvent snippets/png-quote-modal.liquid` returns 0, and that file's own comment says so plainly. The
real emitter is the success-page script at `png-quote-modal.liquid:76`. Shipping the first draft would have
fixed click-to-call and the free-proof LP while leaving **the main quote path — the entire point of the
change — still destroying its own attribution.** Worth recording that the 9/14 analysis named
`png-quote-modal.liquid` correctly; the implementation a week later went to the wrong file.

Renamed to `cta_placement` at all three emitters. `fbq()` keeps `source` deliberately (not reserved in
Meta), and the Google Ads conversion is scoped by `send_to`, so the verified label `_S8lCJKl6sIcENmLkNdB`
is untouched. Verified after: no `gtag('event', …)` in the theme passes any GA4 traffic-source field.

**Owed next, and it is Carlos's lane, not Claude Code's:** register an event-scoped custom dimension on
`cta_placement` in GA4 Admin. **It is not retroactive** — it reports only from its registration date, so it
wants doing at or before the push. Until then the value is collected and readable in DebugView, just not in
standard reports. Step + a DebugView pre-check: [[conversion-tracking-setup]] step 5. The lane split is
corrected on [[ga4-traffic-read-2026-09]], which had assigned both halves to Claude Code.

**Also today:** the LinkedIn page was read directly. Header facts match canon (Promo & Grow, Lynwood, 10514
Long Beach Blvd, founded 2005, 131 followers), but the **tagline, About body and Specialties still say
"Promote & Grow"** — three instances of the retired name — and "Graphics" is misspelled "Grpahics". That is
a copy-paste pass against the listing pack, logged in [[mention-sprint-2026-09]]. **Facebook could not be
verified** — it blocks automated reads (HTTP 400 on 9/20, login splash on 9/22); Carlos eyeballs it.

Housekeeping: the local clone was 7 commits behind live and was fast-forwarded; the never-pushed July theme
batch was **stashed, not discarded**; one untracked local template went to `_Archive/superseded-theme-files/`.

→ [[search-visibility-game-plan]] · [[conversion-tracking-setup]] · [[ga4-traffic-read-2026-09]] · [[mention-sprint-2026-09]] · [[entity-facts-sheet]]

## [2026-09-20] ingest + decision | AEO method ingested · mention sprint opened · YouTube deferred

**Ingested:** `raw/AEO Basics` + HubSpot's State of AEO material → new [[aeo-citation-method]]. The load-bearing
finding, from a 75,000-brand study: **branded web mentions correlate with AI Overview visibility more
strongly than backlinks, domain rating, or referring domains.** Not links — mentions. AI engines weigh
**consensus**: the same facts about a business, repeated in many places.

**That reframes the plan.** P&G has roughly five places that say anything about it (GBP, Yelp, Instagram,
one LinkedIn page, Judge.me), and until 2026-09-13 they disagreed with each other on name, phone, and
delivery claims. Filed as §4c of [[search-visibility-game-plan]] and opened as [[mention-sprint-2026-09]] —
three tiers, target **15+ live consistent listings by 2026-10-31**.

**Carlos ruled:** mentions run now; **YouTube waits ~2 weeks for a creator hire** (it is the other high-
correlation lever in the study, but it needs a person, not a plan). He submits Tier 1 himself.

**Facts confirmed and now canon** → [[entity-facts-sheet]]:
- **Hours: Mon–Fri 10:00 AM – 4:00 PM PST, weekends closed** — confirmed, with his reasoning: customers are
  out working events on Saturdays.
- **LinkedIn:** https://www.linkedin.com/company/promo-grow/
- **Facebook:** https://www.facebook.com/promongrow — update the existing page, never create a second one;
  duplicates split the signal. (An automated URL check returned HTTP 400, which is Facebook blocking bots,
  not evidence of a bad URL — eyeball it on first visit.)

**Built:** `Operations/Mentions Sprint/PNG-Listing-Pack_9.20.2026.md` (NAP block, three description lengths,
categories, services, attributes, photo list, links — paste-ready, identical everywhere) and the Tier 1
submission runbook in both formats — `PNG-Tier1-Submission-Runbook_9.20.2026.md` and, at Carlos's request,
a self-contained brand-styled **`.html`** working version: 10 platform cards in submission order, copy-to-
clipboard on every field, checkboxes that persist progress in the browser, printable. ~2 hours of work for
all ten.

**Still open out of this session:** storefront/exterior + team photos (Carlos sending) · the **Judge.me
review URL**, still unrecorded and still blocking every review ask including Cadenza's · and one queued
theme change awaiting go — add `openingHours` plus the LinkedIn and Facebook URLs to the site's
LocalBusiness `sameAs`, so the site agrees with all ten listings.

→ [[aeo-citation-method]] · [[mention-sprint-2026-09]] · [[search-visibility-game-plan]] · [[entity-facts-sheet]]

## [2026-09-19] decision | Compton lost, two pricing rules changed, and Firm Footing corrected

**Compton High Alumni is lost** — Carlos confirmed 9/19 that she went with another vendor. Both quotes
(`#D158` $1,472, `#D161` $2,760) are dead. HubSpot deal `347568215771` was already at closed-lost; the
record now carries the reason rather than just the status. → [[compton-high-alumni]]

**The read, and it is not price.** She asked for an **18″ valance**; we offered **17″** and asked *her* to
confirm she was comparing like for like against the other bids. **That handed the comparison work to the
customer**, and if a competitor quoted a true 18″ it was a spec loss decided at that moment. Meanwhile the
concessions were enormous and irrelevant: 16.9% effective on `#D158`, then a **further 8% on a $1,500/tent
price that already contained 10%** — a double discount nobody intended — for a total past 20%. **It still
lost.** The vector logo and the 501(c)(3) letter never arrived either; a buyer who is proceeding sends
artwork.

**Two rulings from Carlos, both now on [[master-price-sheet]].**

1. **Nonprofits pay sales tax. The absorb-it-inside-the-discount structure is retired.** It was invented
   for this account on 9/10, cost real margin, and was never required — California grants no nonprofit
   exemption, so the honest move is simply to charge and remit. **The 8% nonprofit rate survives on its
   own, for "organizations with a great cause"** — deliberately a judgement call, not a paperwork test.
2. **New: 10% off orders over $1,000 with multiple pieces, when the customer asks. Units count**, so three
   of the same tent qualifies.

**Firm Footing corrected the same day.** Jerisse asked for bulk pricing on three tents and the first answer
was "we don't run a quantity tier" — true of the sheet, but not the whole story. `#D165` revised to
**$2,160 + $210.60 tax = $2,370.60** and re-sent with the correction owned plainly rather than buried:
*"my first answer wasn't my best one… I should have applied it the first time rather than making you ask
twice."* → [[firm-footing]] pending; deal `349222042335`.

**The tension filed alongside the new rule, because it will bite otherwise.** A discount that exists only
when someone asks means **the customer who trusts you pays the most.** One week, three quotes: Deborah asked
twice and was conceded 16.9%; Jerisse asked once and got 10% on the second pass; **Marisol never asked and
paid full price on $1,055.** If that spread is not the intent, the fix is to print the discount on
qualifying quotes instead of waiting to be asked. It also sits against the standing "never as an opener"
rule — resolved as: **on $1,000+ multi-piece orders the new rule wins**; in-trade governs below that.

→ [[compton-high-alumni]] · [[master-price-sheet]]

## [2026-09-18] update | Titan Law #D166 sent — and the hand-computed tax rule needs a decimal place

Carlos sent the quote email (19:05 UTC, `hello@promongrow.com`, auto-BCC'd to HubSpot) and asked for the
Shopify invoice to follow with a short note saying it is hers to process when ready. **#D166 sent 19:07
UTC**, status `INVOICE_SENT`, unpaid. Custom message kept deliberately free of deadline language — she
has five weeks and manufactured urgency would be false. Draft note tidied first so it would not say
"prices shown are before tax" on an invoice that now shows tax.

**Tax resolved as predicted — rate right, rounding not.** The jurisdiction came back at **10.75% against
the Lynwood origin** (no shipping address on the draft), the same rate used for the emailed estimate, in
five lines: CA State 6% $98.23 · LA County District 2.5% $40.94 · LA Co Local 1% $16.37 · Lynwood City
1% $16.37 · LA County 0.25% $4.10 = **$176.01**, total **$1,813.11**.

**The emailed estimate said $1,813.09 — 2¢ low.** Not a rate error: Shopify rounds **each tax line
independently**, a single blended multiplication rounds once. That makes the existing "compute the tax
yourself" rule on [[master-price-sheet]] correct in direction but systematically light by a cent or two,
widening with more lines and bigger subtotals. Rule refined there: **quote the hand-computed number as an
estimate, never as the number; the sent invoice is the authority.** Carlos flagged before she can spot it.

Bookkeeping: Shopify customer retagged `stage:qualified` → **`stage:quote-sent`**; HubSpot deal
`349311963891` advanced *Quote requested* → **Draft order sent** with both send timestamps and the
2¢ note written onto the record. Worth knowing: **the Shopify invoice does not auto-log to HubSpot**
the way the Gmail send does — that BCC comes from the HubSpot Gmail extension, not from Shopify — so
Shopify sends have to be logged by hand or they leave no CRM trace.

Still open and unchanged: the **$320-vs-$470 back-wall call**, the duplicate `Titan Law Firm` companies
in HubSpot, her five answers (table size, flag base surface, flag qty, artwork, pickup vs delivery), and
vector artwork — only a PNG on file. Chase on Day-1 / Day-3 / Day-7. See [[titan-law-firm]].

---

## [2026-09-18] ingest | Titan Law Firm — a complete event set quoted for a buyer who is not in a hurry

**Inbound 11:23 AM** through the **Free-Proof LP v2 two-step hero**: Darling Rivera, a paralegal at
**Titan Law Firm** (`pa2@titanlawfirm.com`, 424-777-0871), asking for a multi-piece set for a
**Saturday 2026-10-24** event — a 10x10 tent with a back wall, a "standard tablecloth", a "Signacade"
A-frame, and a medium feather flag with "X-stands for the ground". She uploaded a logo: a **PNG**.

Carlos called her and learned the fact that shaped everything downstream: **she has five weeks, and she
is gathering information, not buying today.** The brief became decision support rather than speed-to-lead.

**Built as Shopify draft #D166** (`1075264585764`), customer `8328611332132`, **left `OPEN` and unsent**
for Carlos's review:

| | |
|---|---:|
| 10x10 tent — Tent Only + standalone 10ft Full Back Wall ($800 + $320) | $1,120.00 |
| 6ft Draped Table Throw · Deluxe Signicade A-Frame 24x36 | $509.00 |
| Feather Angled Flag Medium 10.5ft + Cross Base (X-stand) | $190.00 |
| Subtotal | $1,819.00 |
| **Bundle discount −10%** (Carlos-approved, this deal) | −$181.90 |
| Pre-tax | **$1,637.10** |
| CA sales tax @ 10.75% Lynwood situs, **hand-computed** | $175.99 |
| Out the door (est.) | **$1,813.09** |

**The Evoria tax rule held.** #D166 reports `$0.00` tax and a `$1,637.10` total in the admin, exactly as
[[master-price-sheet]] predicts for an unsent draft. The customer-facing number was computed by hand and
labelled an estimate, since the real rate follows the ship-to address.

**Three things needing Carlos:**
1. **The back wall, again.** Quoted the standalone $320 route (total $1,120) over the tent's Full Wall
   variant ($1,270) — same goods, $150 apart — on the Evoria reasoning that $320 is what the store
   publicly lists and a law firm will check. The catalog inconsistency flagged 9/16 is still unresolved.
2. **The 10% is an opener here**, which the 2026-07-13 ruling reserves for in-trade concessions only.
   Logged as an owner override, not a rule change. Margin ≈ 44% gross, above the 35% floor.
3. **Two duplicate `Titan Law Firm` companies in HubSpot** (`347443910341` / `347471555295`), both
   auto-created by the form within 100ms. Deal attached to the first; **merge is a Carlos action.**

**Filed to CRM:** HubSpot deal `349311963891` in **P&G - Quote to close**, stage *Quote requested*
(not *Draft order sent* — the quote has not gone out), contact + company associated.

**Email drafted, not sent** (Gmail draft `r3867355170900690920`). Built to be **forwarded to a signer**:
one clean number, the timeline worked backward from 10/24 (**approve the proof by Fri 10/9** for a week
of cushion; **Fri 10/16** is the wall), Deposit-to-Lock offered as optional rather than pressure, and
four open specs she can answer in one reply — table size, flag base surface (she asked for "X-stands for
the ground", but a cross base is a *hard-surface* part and the ground stake is both correct for soft
ground and cheaper), flag quantity, and vector artwork. **EN-only**: forcing Spanglish into a law-firm
quote is the exact failure [[png-voice]] warns against; the tagline stays in the signature.

New page: [[titan-law-firm]]. Back-filled [[evoria-health]] and [[compton-high-alumni]] into
[[index]] — both had pages but no index entries.

---

## [2026-09-16] ingest | Evoria Health won the day — four quotes, one scope error, and two catalog findings

**New inbound, cold, 10:33 AM.** Marisol Torres of **Evoria Health** (Pasadena) emailed asking for a custom
branded 10' x 10' pop-up tent for an outdoor event **within 10 days**, listing canopy + full printed back
wall + branded table cover, and saying plainly **"We do not need side walls."** She asked for pricing,
fastest turnaround, rush options, pickup availability, artwork requirements and proof timing — six
questions, all six answered by 11:41 AM.

**Four drafts in under two hours.** `#D162` $800 tent only → `#D163` $1,855 → `#D164` $1,525 → **`#D164`
$1,055 + $113.42 tax = $1,168.42, SENT 12:20 PM.**

**The scope error worth not repeating.** `#D163` was built on the **Complete Set** variant, which bundles
**two side half walls she had already declined in writing**, and the covering email sold those half walls
to her as a feature. Her reply — *"we only need backwall, table cover, and carry bag"* — was her repeating
herself, not reducing scope. **Read the customer's exclusions as hard constraints before picking a bundle
variant.** The catalog already had her configuration: the **Full Wall** variant, $1,270, canopy plus full
back wall, no side walls.

**Then she took the back wall off herself, and the reason matters.** *"Not sure if I can get a full back
design in time so just thinking tent + tabe cover now."* **Artwork timing, not price.** That makes the back
wall a live re-open rather than a lost line — quoted to her at the standalone **$320**, add any time,
including after this order ships.

**Finding one: a draft order's tax reads $0 until the invoice is sent.** `#D164` sat at $1,055 as a draft
and resolved to **$1,168.42** on send — 10.75% across five jurisdiction lines, against the **Lynwood**
origin. So an unsent draft is not a price, and **never quote a customer off a draft total.** Filed to
[[master-price-sheet]]. It also explains why the #D161 fix on [[compton-high-alumni]] collapsed earlier the
same day.

**Finding two: the 10ft back wall is priced two different ways.** $470 inside the tent's Full Wall variant,
**$320** as a standalone SKU — the bundle is $150 dearer than buying the same wall separately, so waiting
is cheaper than buying up front. She got the $320 because that is the number on the public store. **Carlos
to pick one.** Filed to [[master-price-sheet]].

**Still live and still payable: `#D162` and `#D163`, both showing $0 tax.** Void them. New standing rule on
the price sheet: **a superseded draft gets voided the same day.**

**Also: the client is Evoria Health, not "Evoriah."** The first two invoice subjects carried the typo. Fixed
from #D164 on. Do not let it reach a proof.

**CRM.** First deal in the new **P&G - Quote to close** pipeline — company `347245986544`, contact
`553337661166`, deal `349107797733`.

**Open:** pickup vs delivery and her address (also the last input the tax rate needs), artwork, proof
approval.

→ [[evoria-health]] · [[master-price-sheet]]

## [2026-09-16] ingest | Cadenza post-delivery check-in drafted — and the Judge.me link does not exist on file

Meir's order shipped in **two** parts, which nobody had recorded: the 20ft SEG backwall 9/10–11, the 60"
poster stand **9/14–15**. A "did everything arrive" check has to name both, and the 9/16 draft does.

He **volunteered** photos and video on 9/11 — *"Your service is spectacular! Will definitely send photos and
video"* — so the ask is a nudge on his own promise, which is a far stronger position than a cold request.
The draft also asks permission to use a shot in the portfolio while he is warm about it.

**Review ask structured as one action, not two:** Google primary (the SEO asset), Judge.me as a one-line
alternative, plus an explicit route for criticism to come back privately instead.

**Blocker: the Judge.me review URL is recorded nowhere.** Judge.me is installed — their mailing list, and a
9/04 "Awesome trial is live for Promo & Grow" setup email — but the link itself is in no email. The draft
carries a `[JUDGE.ME REVIEW LINK]` placeholder rather than a guess, because **a dead review link is worse
than no link.** Pull it from the Judge.me admin and put it on [[entity-facts-sheet]].

Draft unsent: Gmail `r-1957086677181759211`.

→ [[cadenza-america]]

## [2026-09-16] decision | Compton #D161 sent for the 17" valance — and it is structured wrong

Deborah asked on 9/15 whether an **18" valance** was available. Carlos answered 8:45 AM 9/16: a **17"
valance is offered, and it takes the price to $1,500 per tent.** She replied **"Yes, please"** and asked
for a formal estimate. Her message also repeated that **the board is still deciding** against at least
three other quotes.

**Sent: Shopify draft `#D161`, `gid://shopify/DraftOrder/1075016663076`, INVOICE_SENT
2026-09-16 15:52:39Z.** Two 10×10 custom-printed canopies with a 17" printed valance on all four
sides, $1,500 each = $3,000, less 8% = **$2,760 out the door**, free ground shipping. Positioned in the
covering note as an **addition to #D158, not a replacement**, so the board can compare side by side, and
the **17"-vs-18" gap was raised to her directly** as a like-for-like check against the competing bids.

**The defect, found the same day by reading the live invoice instead of the email.** #D161 went out
with the **tax-exempt flag ON** and non-taxable line items — $3,000 − $240 (8% percentage) = $2,760,
$0 tax. That breaks the rule on [[master-price-sheet]]: **"tax exempt" never goes on a P&G order; the
tax is absorbed inside the discount, never waived.** It also claims an exemption on a 501(c)(3) whose
determination letter has not arrived.

**#D158 is, and always was, correct — the earlier "correction" of it was the error.** Live in Shopify:
tax-exempt **off**, line items taxable, fixed discount **$270.88** titled *"Compton High Alumni —
nonprofit rate (8% + sales tax covered)"*, taxable subtotal $1,329.12, tax $142.88, total $1,472.00.
The **16.9% effective concession recorded on 9/14 is right** and stays.

**What caused the confusion, recorded so it does not happen twice.** The #D158 invoice **email** went
out 5:31 PM on 9/10 with the original 8% / $0-tax structure; Carlos restructured the draft about two
and a half hours later. Shopify invoice links are live, so Deborah's link shows the corrected
breakdown at the same $1,472 and nothing needed walking back. **That email now describes a structure
that no longer exists — it is not a source of truth. Read the draft order.** #D161 was built off the
email, which is exactly how the wrong structure got shipped.

**The fix, worked out but not applied.** Hold her out-the-door at **$2,760** and mirror #D158:
tax-exempt off, line items taxable, fixed discount **$507.90** → $2,492.10 taxable + $267.90 tax @
10.75% = **$2,760.00**, effective concession 16.9%. **Her price does not move.** An attempt to apply it
on 9/16 dropped the total to $2,492.10 because the tax would not compute on the draft, and it was
reverted to the as-sent $2,760 within the minute. The tax rate has to resolve off the draft's address
before this is retried. **Awaiting Carlos.**

**Still outstanding on both estimates:** the 501(c)(3) determination letter and EIN (HubSpot task
`399021186784`), the **vector logo — due today, 9/16**, and the undefined **"displays"** she mentioned.

→ [[compton-high-alumni]]

## [2026-09-14] lint | Compton High Alumni filed — and the "8% nonprofit rate" is actually 16.9%

Deborah's two-canopy order had no page. Created `deals/compton-high-alumni.md` ahead of a check-in
email (Gmail `r-490639721915880038`, unsent).

**State: Shopify draft #D158, $1,472, invoiced 9/10 evening, still unpaid on 9/14, and no vector logo
received.** Shopify shows exactly one paid order since Sept 1 (Meir Green, $1,800), so this is not a
sync gap — it is genuinely unpaid. She sent an AI mockup, which is reference only and cannot print at
10×10.

**The finding worth carrying into the price sheet.** The $270.88 "courtesy discount" is not a discount.
It is **the 8% nonprofit discount ($128) plus the whole sales-tax amount ($142.88) absorbed into one
line** rather than waived — correct handling, since tax is remitted either way, but it means the
**effective concession is 16.9%, not 8%.** Anyone applying "8% nonprofit" off the price sheet to a
future order will either under-discount by half or repeat this structure without noticing they are
eating the tax. And the 8% is conditional on a 501(c)(3) determination letter **that has not arrived**,
so right now a 16.9% concession sits on an unverified claim.

**The date is the job.** Event is Saturday 10/3. On site 10/1, freight 4–5 days so it ships ~9/25,
production 5 days from proof approval, approval ~9/18 — **vector logo needed Wednesday 9/16.** Canopies
are cut and sewn to order and the freight leg is nobody's to control, so that is a real date, not a
padded one.

**Two open items recorded rather than left in a thread:** the "displays" she mentioned for the event are
outside the quote and still undefined (and carry the same 9/16 deadline if they ship with the tents),
and the **landed cost on the two canopies is unrecorded** — which on an order that has already conceded
16.9% is the number to know before the next nonprofit quote goes out.

## [2026-09-14] update | Merchant Center products now showing — 366 of 368

- **Merchant Center (Carlos screenshot 2026-09-14):** "Your products have been reviewed" — **Total products 368 · Not showing on Google 2** (last updated 2026-09-13 10:37 PM); visible rows Approved/In stock via the Shopify App API. Up from **0 approved / 368 not approved** in the August report. Clicks still 0, click potential "Low" on the rows shown.
- **Likely causes for the 2 (unverified — the Merchant Center list wasn't visible):** a storefront check found published products with **no image** — Deluxe Retractable Banner Stand (2 variants) and Standard Retractable Banner Stand (4 variants) — and two app-helper products titled **"Size"** (`size-1756155045648`, 1 variant, no image; `size-1756162418233`, 15 variants) that are hidden from search but still published. The app-helper products shouldn't be in the Google feed at all.
- Next: Carlos filters "Not showing on Google" to see the two items and reasons; add real images to the retractable stands; remove the "Size" helper products from the Google & YouTube sales channel.

## [2026-09-14] decision | Complete Booth Setups draft v2 + setup design worksheet · Cadenza approved as featured client

**Carlos's answers on draft v1:** (1) weights + flag hardware stay quoted; (2) **Cadenza America said yes** to being featured and is sending photos + video; (3) **Carlos speaks Spanish** → "Hablamos español" stays; (4) keep all 4 setups, but design them thoroughly before publishing; (5) headline direction "One setup, your booth delivered complete as a system, ready to use."

- **Draft v2** (`Website/Complete Booth Setups/complete-booth-setups-DRAFT.md`): H1 "One setup. Your whole booth, delivered as a complete system." (+2 options; "ready to use" softened to "ready to set up" since booths are popped up on site); Cadenza spotlight section (placeholder for their media; quote line pending Meir's OK); setups table marked as placeholders pending the design session.
- **Setup design worksheet** (`Operations/Complete Setups/PNG-Complete-Setups-Worksheet_9.15.2026.md`, CONFIDENTIAL): live Shopify unit costs pulled 2026-09-14. At catalog-sum pricing: A Market starter $1,008 / 50.0% · B Festival food vendor $2,856 / 49.0% (+ quoted items) · **C Trade show inline $1,242.99 / 57.6%** · D Double booth $3,180 / 45.8% — only C clears the ≥52% target; tent Complete Sets run 44.5–47.8%. Data flags: 10x10 Half Wall set cost ($660.78) > Full Wall set ($573.90); wheeled bag = +$54.99 cost at $0 price. Naming overlap flagged: tent variant "Complete Set" vs page "Complete Booth Setups."
- New customer page [[cadenza-america]] (closes part of the 9/11 filing gap). [[entity-facts-sheet]]: Spanish coverage = Carlos.

## [2026-09-14] ingest + query | GA4 traffic read (Jan 1–Sep 14) → new [[ga4-traffic-read-2026-09]] · Complete Booth Setups draft v1

- **Complete Booth Setups page — draft v1** for the Tuesday 9/15 review: `Website/Complete Booth Setups/complete-booth-setups-DRAFT.md` (hero, what's included, 4 example setups priced from the live catalog — $1,008 / $2,856 + weights & hardware / $1,242.99 / $3,180 — how it works, vendor checklist, 10 FAQs from the Lava Curry + Cadenza questions, SEO fields, schema + build notes, 5 open questions). Replaces bundles as the redirect target once built.
- **GA4 read (Carlos's export):** 3,568 active users / 25 purchasers / ~$15K GA4 revenue YTD, but ~71% of city-level users sit in bot, data-center, or out-of-market cities (Moscow alone 1,452), with 89% arriving as direct; an Apr 4–28 surge ended overnight (bot pattern); the Contact page's 1,530 one-view visits look like form spam. Real channels: Google organic 133 first users · ChatGPT 21 · Bing 21 · Instagram ~76 · email ~33 · Meta paid ~29 (Meta converts in-form). Browsing: bundles ~510 views (0 bundle orders) · tents ~285 + 10x10 PDP ~177 · backdrops ~258 + SEG PDPs ~200 · flags ~231 · wraps ~370 · 404s ~229 · order-proof page ~114.
- **Tracking bug found (live code):** analytics events send a `source` parameter (`click_to_call`, quote trigger, `generate_lead` = "png-quote-modal"), which GA4 treats as traffic source — hence "mobile-sticky / (not set)" 52 sessions, "unknown" 16, "png-quote-modal" 9. The highest-intent sessions lose their real origin. Fix = rename to `cta_placement` (Claude Code; not yet applied — awaiting go).
- **Game plan refined (§4b):** new Phase 0 items 0.10–0.14 (param bug, GA4 filters/unwanted referrals/US-only view, 404 redirects, hide order-proof page, contact spam protection); content re-ranked (Complete Setups → tent cost → SEG backwall comparison → flags guide); target ~20 → 40+/month search + AI first users by mid-December and ≥2 attributed search/AI quote requests/month.

## [2026-09-14] update | Merchant Center Misrepresentation RESOLVED · bundles collection unpublished (redirect verified)

- **Merchant Center:** Google's email "Review of Misrepresentation for Promo & Grow is complete" (googlebase-noreply, 2026-09-14 13:43 UTC) — account **Promo & Grow (5661034785)**; the review completed and the issue no longer applies (Carlos confirmed resolved). The account name now reads "Promo & Grow" (was "Promote & Grow Shop" in the August report). Product approvals should begin appearing; the approved count is unverified until the next report or a Merchant Center check.
- **Bundles collection:** Carlos unpublished it. Verified 2026-09-14: `/collections/bundles` → 301 to `/collections/tents-canopies`.
- **Verified still open (live check 9/14):** store policies not yet pasted (the placeholders, proagobranding.co emails, and "Promo N Grow" names are still live — the review passed anyway, but fix them before the next automated check); homepage title/meta unchanged ("Booth Kits and Bundles… 5 Day Nationwide Delivery" / "…5 business days or less"); Judge.me bundle review card; Venus offboarding + 213 routing (unverified).

## [2026-09-13] decision + update | Delivery wording ruled + LIVE · bundles retired from the storefront · Venus no longer with the company

**Carlos (9/13):** orders ship within 5 business days; rush is a paid service available on request and quoted per project; run the recommendations (the "Fast nationwide delivery" framing + retire bundles with redirects); **Venus is no longer with the company.**

- **Delivery wording (ruled → [[entity-facts-sheet]]):** headline "Fast nationwide delivery"; fact "Most orders ship within 5 business days of proof approval"; "Rush available on request, quoted per project"; "Tell us your event date before you approve your proof and we'll confirm it in writing" (backed by refund §7 / shipping §12). Never: unconditional "We'll meet your deadline," "delivered in 5 days," "Rush (3 days)." **Live 9/13:** 34 product SEO metas ("Printed in LA. Ships within 5 business days of approval."), 17 product descriptions (turnaround FAQs now carry rush + written-date lines; the 10x10 color answer stays honest), 11 collections, and theme commit `e99da81` (announcement bar, trust strip, product badges, process ribbon, how-it-works, product FAQ tabs — retires the open "Rush (3 days)" line from dashboard item 17 — tent pages, AEO FAQ defaults, homepage, free-proof LP EN + ES). 0 userErrors.
- **Bundles retired (the 8/8 ruling had never shipped to the live theme):** removed the header nav item (theme + Main Menu), the footer link (theme + "Footer - Shop" + "Hyper - Topper" menus), the homepage "Bundles · Save 15%+" category card, and both site-wide bundle popups (un-rendered; snippets kept); hero CTA → "Get a free proof"; router door 2 → "Shop Custom Tents"; LP "Complete Bundles" → "Complete Setups" (quoted per setup) and all "bundles from $848" dropped; the 3 bundle SKUs set to **DRAFT**; `/pages/bundles` + `/pages/collection-bundle` unpublished; redirects `/collections/bundles`, `/pages/bundles`, `/pages/collection-bundle` → `/collections/tents-canopies` (the pages redirect verified live). Theme commits `e99da81` + `ae2ab6a`, verified on the live homepage. **Blocked:** unpublishing the bundles collection (`publishableUnpublish` refused by the connector's safety policy) — **Carlos unpublishes it in admin**, which activates its redirect. Also still showing: the homepage `<title>` "Booth Kits and Bundles… 5 Day Nationwide Delivery" (admin Preferences) and a Judge.me review card naming "Event Vendor Starter Bundle" (Judge.me → Curate).
- **Venus departure:** Venus-named copy removed from the live free-proof LP (the name in hero note, success/no-file messages, mailto bodies, FAQ, and the photo card → "our team" + a Promo & Grow contact card with the 213 number; "usually the same day" → "usually within one business day"). Recorded on [[closer-hire]] and [[phone-number-map]] (the 213 line was her Crexendo DID — confirm it now rings Carlos). **Offboarding checklist (Carlos lane, not verified by Claude):** revoke Venus's Shopify staff account, the Meta Advertiser role + pause/rename the "IG DM — Venus" ad, Slack, Gmail `venus@promongrow.com` (forward to hello@), Apollo seat, Canva/CapCut brand kit, the png-team-brain GitHub invite, and the Crexendo 213 DID ownership/voicemail; reassign her open drafts/quotes (e.g. Lava Curry #D156 follow-up). Many wiki pages describe her as the active closer/social owner — historical as of today; a lint pass should mark them.
- ⚠️ **Local clone is now 6 commits behind live**, and the staged August "Home v3 + bundle retirement" batch in the local working tree (`Operations/PNG-Home-v3-Bundle-Retirement-Runbook_8.8.2026.md`) overlaps files changed today (footer, header menu, hero, router, cta-banner, index.json, LP v2). `git pull` and reconcile before any local push.

## [2026-09-13] update | Misrepresentation fixes: pillowcase gallery LIVE · policies paste-ready (API scope blocked) · delivery-wording + bundles questions

Carlos: Promo & Grow **is a DBA of Proágo Branding Dept.** (confirmed) · "go" on the fixes · considering replacing "5-day delivery" with "Fast nationwide delivery / We'll meet your deadline" · considering removing or hiding the bundles page.

- **Pillowcase PDP gallery — LIVE (Admin API):** the real space-birthday install is featured, then the size guide, two memorial renders (alt-labeled "scene render"), hardware, and carry bag. The 6 vendor stock images (fake "BLACK FRIDAY 50% OFF", "$59.99 car rental", placeholder phone 323-517-4946 / yourwebsite.com) were **detached, not deleted** (fileUpdate referencesToRemove); they remain in Content → Files. Storefront order verified. `Operations/PNG-Pillowcase-Gallery-Fix_8.12.2026.md` marked applied.
- **Store policies — NOT applied:** `shopPolicyUpdate` was denied (the connection lacks `write_legal_policies`). Clean paste-ready HTML for refund / shipping / terms / contact is in `Operations/SEO Visibility 2026-09/policies-paste-ready/` with a before-snapshot. Fixes: one business identity ("Promo & Grow (formerly PrintCo Direct Inc.), a DBA of Proágo Branding Dept."), promongrow.com emails, real pickup address, effective date, policy links, 213/844 phones, draft notes and ChatGPT paste artifacts removed; legal substance unchanged. **Carlos/VA pastes them (Settings → Policies).** Contradiction noted, not changed: the policies offer Pantone matching on request, while quote emails say large-format printing can't Pantone-match.
- **Data for the bundles question (Shopify Analytics, pulled 9/13):** `/collections/bundles` is the **#2 landing page on the site — 95 sessions in 90 days** (after `/` at 746; ahead of `/pages/prueba-gratis` 77 and `/pages/free-proof` 34). Product-level sales for 180 days show **no bundle SKU orders** (27 of 30 orders are custom/draft lines with no product title; titled lines = 20ft SEG $1,580, 10x10 tent $800, NCR forms $380). Bundles were ruled off the site 8/8, yet the collection, `/pages/bundles`, `/pages/collection-bundle`, the footer "Bundles" link, the homepage title "Booth Kits and Bundles", and 3 published legacy bundle SKUs ($668/$823/$857, "save 15%") are still live.
- **Existing policy backing for deadline framing:** refund §7 and shipping §12 already say a firm in-hand date **confirmed in writing** and missed due solely to our error gets a priority rush reprint/replacement at no cost, or a refund discussion.

## [2026-09-13] update | Phase 0 LIVE — claims recut across the store + LocalBusiness schema + 213 phone; Merchant Center = Misrepresentation

Carlos (later 9/13): "go" on the claims work · 213.817.9188 is the local number to add to the site (and to Yelp 9/14) · "Formerly PrintCo Direct Inc." · weekly review on **Tuesday** · the Merchant Center verification code was sent from the wrong Google account — **disregard** (not added) · Merchant Center's product block is an account-level **Misrepresentation** issue; he requested a review 9/13.

- **Shopify admin (Claude-admin, Admin API, 0 userErrors):** 34 product SEO metas → "Printed in LA. 5 business days from proof approval." (the 10x10 "5-day guaranteed delivery" meta, G10, is gone); 20 product descriptions (guarantee lines removed, "Made in the USA" → "Printed in LA", all delivery lines conditional, sub-$500 free-proof lines → "proofed before production", 10x10 color-match answer made honest); 12 collections ("Lynwood shop" → "printed in LA"; the stale "$98 vinyl banners" dropped — that product is a draft). Before-snapshots saved for rollback.
- **Theme (commit `fca5762` → GitHub `main` → Shopify, live in ~15s, verified on home/PDP/collection):** header Organization JSON-LD → LocalBusiness (alternateName PrintCo Direct Inc., telephone +1-213-817-9188, 844 contactPoint, NAP, foundingDate 2005, sameAs Instagram + Yelp; parses clean); footer NAP block + conditional tagline; contact page leads with 213, "Free proof on orders $500+", "Printed in LA"; announcement bar / trust strip / trust bar / product badges / SEO-landing default / 3 tent pages / free-proof LP v2 (EN + ES "Impreso en LA") recut. Built on the live commit in a temporary worktree (removed). ⚠️ The local clone is 4 commits behind live — `git pull` before any local push.
- **Found for the Misrepresentation review (not yet fixed — needs "go"):** store policies with template placeholders ("[insert pickup address]", "Effective date: [Month Day, Year]", "Privacy Policy [link]", "Optional notes you can keep or remove"), three business names ("Promote & Grow Shop" contact trade name · "Promo N Grow, a DBA of Proágo Branding Dept." in the TOS · Proágo in refunds), and @proagobranding.co contact emails; the pillowcase PDP still shows vendor stock art ("BLACK FRIDAY 50% OFF", "$59.99 car rental", placeholder phone + yourwebsite.com — the 8/12 fix plan); the homepage meta still says "5 business days or less" (admin Preferences only).
- Pages: [[search-visibility-game-plan]] (status, 0.3 diagnosis, 0.4/0.5 done, decisions 2/3/7) · [[entity-facts-sheet]] (213 primary, PrintCo ruled, site state) · [[phone-number-map]] (213 ruling) · [[dashboard]] item 20. Changelog: `Operations/SEO Visibility 2026-09/CHANGELOG_2026-09-13.md`.

## [2026-09-13] decision | Search plan approved (tool-free, weekly 15-min review) · "Printed in LA" sourcing ruling · both leads = ChatGPT → new [[entity-facts-sheet]]

Carlos's rulings on [[search-visibility-game-plan]] §7, plus the data they unlocked.

- **Sourcing (ruled):** "Everything we offer is printed in LA (in-house or local vendor), our hardware is from China." Canonical wording = **"Printed in LA."** No "Made in LA/USA" on products with hardware. "Printed in our Lynwood shop" only for jobs actually printed in-house. This sets the direction for dashboard item 18 (Made-in-USA badge) and adds a "Made in LA" → "Printed in LA" recut to the claims fix list. ⚠️ The drafted GBP description on [[linkedin-gbp-optimization]] says "built in-house" — reword on the next pass.
- **Leads (answered):** both ChatGPT — **Cadenza America** (won 9/8, $1,800; 20ft SEG + poster stand; shipped 9/10) and **Lava Curry** (#D156, $3,336.00 subtotal / $3,694.63 with tax; open; follow-up sent 9/9). Neither deal has a `deals/` page yet (the filing gap recorded on 9/11 still stands).
- **Shopify referrer baseline (pulled 9/13):** ChatGPT referral sessions = **6 in 180 days**; **4 of the last 5 landed on `/products/10ft-x-10ft-event-tent-canopy`** — the PDP whose meta still says "5-day guaranteed delivery." Last 30 days: 265 sessions (direct 231 · Google 22 · Facebook 5 · ChatGPT 3). 90 days: 1,333 (direct 1,080 · Google 81 · Facebook 73 · Instagram 64 · Bing 16 · Gmail 7 · ChatGPT 6). Referrer-less app visits count as direct, so the ChatGPT figure is a floor.
- **Approved:** weekly 15-minute Answer Factory review; **tool-free** for now.
- **Listings (Carlos, 9/13):** Yelp name updated; Yelp phone change by phone 9/14 (number unstated — 844 recommended); edits made to LinkedIn, Yelp, and GBP (not itemized).
- **Built:** [[entity-facts-sheet]] (identity/NAP, approved vs. never-say claims, live from-prices pulled 9/13, audit surfaces). Game plan updated: status, G5 ruled, new G10 (the ChatGPT landing page carries the worst claim), Phase 0.8 Bing Webmaster Tools/Places, 0.9 ask buyers for their ChatGPT prompt, and a Question Bank seeded from both leads' threads.
- **Still open:** PrintCo Direct heritage · the Yelp phone number · "go" on the 10x10 meta + claims list + Printed-in-LA recut · Merchant Center disapproval reasons.

## [2026-09-13] query | Search visibility game plan (SEO · AEO · GEO) → new [[search-visibility-game-plan]]

Carlos asked for a game plan to systemize and expand SEO/AEO/GEO after a strong inbound week in which he credits 2 leads to those efforts. Built from the two prior audits (`Operations/PNG Claude Chat/aeo-geo/AUDIT.md` 2026-05-24; `Operations/SEO Audit 2026-07/`), a live-site crawl, the Merchant Center August report, and web spot checks, all on 2026-09-13.

- **Baseline findings:** third-party sources feed AI engines retired facts. A web AI summary gave the Proágo **(323) 249-4449** line, said "delivered in 5 days or less," and described P&G as "formerly PrintCo Direct"; Yelp = "PROMOTE & GROW," LinkedIn = "PrintCo Direct Inc.," Merchant Center = "Promote & Grow Shop." **Merchant Center: 0 approved / 368 not approved** (Aug 2026; 7 clicks / 1.37K impressions). The July staged SEO theme batch was never pushed: homepage `Organization` has 8 empty `sameAs` strings, and the homepage + ES metas still say "5 business days or less." The 10x10 tent meta still says "5-day guaranteed delivery" (claims fix list item 15 not applied). "Made in LA" runs across product/collection metas while the sourcing standard is unruled (item 18). Blog = 0 articles. Legacy PageFly pages indexed. Memorial LP undeployed. No lead-source capture.
- **Already working:** 3 tent FAQ pages live, 9 collections with SEO + real prices, store renamed ("Promo & Grow" in og:site_name/titles), free-proof V2 JSON-LD, open AI-crawler access, Shopify UCP/agent surfaces.
- **Plan:** Phase 0 fix the facts (canonical facts sheet, NAP cleanup, Merchant Center diagnosis, claims list go, re-validate + push SEO batch, source capture, baseline) → Phase 1 foundation (PDP FAQ schema, collection FAQs, memorial LP, About/heritage page, GBP engine, first 6 articles) → Phase 2 weekly Answer Factory cadence + vertical/use-case pages + case studies → Phase 3 authority (citations, earned mentions, video, community answers). 12 prioritized answer assets. Measurement by `src:` tags, GSC, a monthly prompt panel, and Merchant Center.
- **Could not determine:** which two leads came from search/AI. No source field exists and the inbox threads don't say. Asked Carlos. The HubSpot AEO connector returned a permissions error (its weekly summary tracks Proágo only, 0.0%).
- **Needs Carlos:** 6 decisions on the page (sourcing claim · public phone on listings · PrintCo heritage · the two leads · approval rhythm · tooling budget).
- Dashboard: Merchant Center status + open item 20 added.

## [2026-09-11] decision | Nonprofit rate ruled (8%, conditional on the 501(c)(3)); sales tax never waived; the Proágo terms boundary drawn

Two pricing rules and one boundary filed onto [[master-price-sheet]]. Both rules came out of the Compton High Alumni canopy order on 2026-09-10 and both are durable, not one-offs.

**Nonprofit rate — 8%, conditional on the letter.** Registered nonprofits may be offered **8% off** the sheet price, **conditional on the organization producing its 501(c)(3) determination letter**. It is not an in-trade concession and does not stack with Venus's 10%-in-trade margin — quote one or the other.

**Sales tax is never waived; it is absorbed inside the discount.** A 501(c)(3) is a **federal income-tax** exemption. California grants **no blanket sales-tax exemption for nonprofits** (CDTFA), so a verbal promise to "exclude tax" cannot be honored as an exemption — the tax is still owed and still remitted. Where tax has already been promised, hold the **out-the-door number** the customer was given and let the discount absorb the tax. On the Compton order — two 10×10 custom canopies — that meant holding the total at **$1,472** and paying the **$142.88** of tax out of the discount rather than waiving it. **"Tax exempt" never goes on a P&G order.**

**Terms boundary.** Proágo Branding Dept. adopted a tiered payment schedule on 2026-09-10 (under $2,500 paid in full · $2,500–$10K 50/50 · **$10K+ 50/40/10**) and printed it on client estimates for the first time on 9/11. **That is a Proágo-side standard and does not replace anything here.** P&G stays Shopify checkout — paid in full at the cart — with **Deposit-to-Lock** as the only split-payment mechanism, on quotes $800+. Noted on the price sheet's Related pages so the two do not get conflated: a P&G job large enough to want a milestone schedule is a signal it should route to Proágo, not be re-termed here.

**Filing gap, recorded rather than quietly left.** This wiki has had no entries since **2026-08-12**, and several P&G-side events since then are unfiled — including **Cadenza America won 2026-09-08 at $1,800** (Meir Green; single-sided 20 ft SEG plus poster stand; Shopify order #P&G881078; printed and shipped in under 24 hours from artwork, with a Judge.me review and setup photos requested), the **Compton High Alumni order itself** (Deborah; Shopify draft #D158; two 10×10 canopies at $1,472 out-the-door; needed early October, ordered before her vacation), and **Josh Craig's showroom setup** (#D153, $5,205 sent 9/2, unpaid). Those belong in `deals/` and `people/` and are not filed here — the running record for all of them currently lives in the WOD wiki (`projects/active-deals-2026-09`, `projects/client-journeys-2026-09`). Flagged so the gap is visible and can be closed in one pass rather than discovered later.

## [2026-08-11] build | Pillowcase-display email campaign (4 HTMLs) + August calendar recut off the dead bundle window

Carlos asked for an email campaign advertising the pillowcase displays and their use cases (lobby reception, event activation, funeral homes), with scene pics. Built same-day; it replaces the bundle-based Window A the 8/8 bundles ruling killed.

- **4 new HTMLs** in `Marketing/H2 Email Calendar/`: **P1** 8/13 "One frame, every room" (showcase: studio wall · lobby · check-in · birthday · memorial; $288/$450, double-sided free) · **P2** 8/18 "Buy the frame once" (swap economics $150/$188; the funeral-home per-service tribute case told quietly; "forward this" line) · **P3** 8/20 ask-lite "Which wall is yours?" (P.S. = the real Mon 8/24 Labor-Day math) · **LC** 8/24 generic Labor-Day last call (product-agnostic, category floors only: tents $800 / backdrops $288 / flags $120 / banners $98). All on the canon 7/30 email shell: blank-safe `{% if customer.first_name != blank %}` merge, canon trust strip + accented-Proágo footer, no manual unsubscribe, **zero free-proof language** (sub-$500 product — the sanctioned "proofed before production" line instead), no bundle/kit/code anywhere. 20-agent draft→3-lens-verify→fix + manual pass.
- **Calendar recut** ([[email-calendar-h2-2026]]): arc 06/07 + the kit last-call **RETIRED unsent** (bundles off the site, Carlos 8/8; kit LC archived to `_Archive/H2 Email Calendar - retired/`, logged in _ORGANIZE-LOG); T2's plant line recut off the dead kit tease (T2 was slotted to send today 8/11 — recut before 9am unconfirmed); T3 moved Tue 8/18 → Tue 8/25 (file renamed, kit P.S. replaced with an arc-08 plant).
- **Images**: uploaded 2 files to the Shopify CDN via stagedUploads/fileCreate — the REAL space-birthday install (P1 hero; `pillowcase-backdrop-space-birthday-install.jpg`, from the Catalog-2026 source set) and the 48″ memorial scene render (P2; ChatGPT render, sanctioned for the vertical pre-paid-traffic per the 8/6 ruling). **Found in the process: the live pillowcase product page's 6 gallery images are vendor stock art — fake "BLACK FRIDAY 50% OFF" + "$59.99 car rental" creative with placeholder phone numbers** — exactly what the funeral LP's cart permalinks now land B2B buyers on; flagged as a spawned Carlos-gated cleanup task. Emails ship with staged photo comments where no honest asset exists yet (studio/lobby scene renders exist only unhosted in chat + the Aug 3/6 funeral-folder renders).
- **⚠️ Send-state gap**: [[sent-email-log]] has no entries since 7/4 — whether F1/C1/T1/T2 (7/21–8/11) actually broadcast is unrecorded. Confirm in Shopify admin → Marketing and backfill the log; the calendar's give-to-ask accounting assumes the Thursday spine held.
- Lanes: Carlos/VA loads + preflights + sends (slice-test P3; LC is optional, morning-of call); Carlos rules on the product-page image swap; Claude-admin keeps the pages current.
- **Same-day edits (Carlos, round 2):** P1 scene labels "The studio wall." → "The studio." and "The birthday room." → "The birthday celebration / decor." (P2's recap list matched); "Con ganas," dropped from P1's sign-off (now just "Promo & Grow"); P1 contact line gains Venus's direct (213) 817-9188 alongside the 844 (documented-exception number). **Merge-tag reversal (all 4 campaign emails):** Carlos flagged the intro — the shell's `{% if customer.first_name != blank %}` branch pattern replaced with the broadcast-proven `{{ customer.first_name | default: "…" }}` filter (branch form never sent in a real broadcast + collides with the preflight SOP's no-`{% %}`-tags gate); comment blocks updated so it doesn't creep back; the 7/30 email-master-shell should get the same fix. Carlos picked the Duo Sculpt pilates image ("Pilates Display.png") as P1's hero over the GIF — he dropped the file into `Marketing/H2 Email Calendar/` and it's DONE: CDN-hosted (`pillowcase-display-pilates-studio.png?v=1786563868`) and swapped in as P1's hero, render-verified. The real birthday-install photo stays on CDN (used by the GIF + a product-page candidate). Note: the image carries Duo Sculpt's branding — Carlos directed its use twice (his relationship; Stephanie is the prospective video creator). **8/12 round 3 (Carlos):** P1's 213 line trimmed to calls only ("Call (844) 883-3308 or (213) 817-9188"); the manual unsubscribe footer restored across all 4 campaign emails (arc-proven past-customer wording + `{{ unsubscribe_link }}`, centered 11px, matching each footer) — reversing the 7/30 shell's Shopify-appends-its-own stance; the shell's guidance should be revisited to match if this becomes standing practice.
- **Same-day edits (Carlos, round 1):** P1 sign-off de-personalized ("Con ganas, Promo & Grow" — Venus removed) and the P2 chain-plant line cut (P2's LIVE subject still stands alone). Built `pillowcase-use-cases.gif` (3 frames · 600×600 · 338 KB · birthday install → Margaret memorial → Samuel memorial with "One frame, every room." closer) in `Marketing/H2 Email Calendar/`, hosted at `cdn.shopify.com/.../pillowcase-use-cases.gif?v=1786546045`; Duo Sculpt + Nova Rise scene frames pending — those images exist only in chat, not as files. Carlos started the product-page image-swap task in a separate session.

## [2026-08-07] build | Memorial-displays vertical (LP v1 + research + Etsy plan + 48″ → $450) + brand-system deck

The 8/6–8/7 Claude Code session built the **offer side** of the funeral vertical (the list side = [[funeral-homes-outbound-list]], 8/3–8/5). New page [[memorial-displays-vertical]] (in `wiki/programs/`).

- **Offer:** reusable Pillowcase Backdrop memorial display sold B2B razor-and-blades (own the frame; reorder $150/$188 printed tributes per service) + gator posters $14/sq ft + existing wall-art SKUs. **48″ price raised $350 → $450 (Carlos 8/7): both Shopify variants mutated live** — the one live store change — and [[master-price-sheet]] updated same day. Flyer PNGs still show $350/844 (re-export pending, Carlos).
- **LP v1 staged, not deployed** (`Website/Funeral Memorial LP/`): Memorial-luxe aesthetic (sanctioned white-70 exception; dark-copper accent per Carlos 8/7), fixed full-viewport hero, tribute-swap signature, add-to-cart via cart permalinks to the live variants, English-only v1, **(213) 817-9188 as the page phone by Carlos's direction** (exception recorded on [[phone-number-map]]).
- **Research** (4 parallel agents, 230+ sources) + **Etsy lane projections/kill-criteria** filed in `Marketing/Mortuaries and funeral homes. /PNG-Funeral-Vertical-Strategy-Brief_8.6.2026.md`. Headline: reusable memorial display = an empty category; ~$157/service reseller margin at a $345 GPL price; our 48″ reprint undercuts the trade-show channel 31–39%.
- **Brand-system deck (8/7):** `Brand/PNG-Brand-System-Express-Deck.html` + `PNG-Brand-System-Guide.pdf` — six-slide summary of the v2.0 system built for Adobe Express import; **Express export + Adobe Fonts service blocked by the account's plan entitlement** (one-step retry once enabled) → [[brand-identity-system]].
- Needs Carlos: LP sign-off → gator product (gated mutation) → Liquid build (Claude Code lane) · Etsy go/no-go (shop identity + Etsy-lane SLA) · flyer re-export · Adobe entitlement if Express is wanted.
- Updated [[index]] · [[dashboard]] · [[phone-number-map]] · [[funeral-homes-outbound-list]] · [[brand-identity-system]]. Nothing in `raw/` touched.

## [2026-08-05] update | Funeral-homes vertical extended to AZ + OR — +10 verified

Carlos: "pull AZ Oregon next." Ran the verified-email owner/exec search across Arizona + Oregon → 43 total, but heavily polluted by adjacent-industry noise — **Precoa** (funeral-marketing SaaS, Portland; ~19 of the 43), **Science Care** (body donation, AZ), tissue networks, funeral consulting, an answering service. Filtered to **10 genuine funeral homes** (6 AZ around Mesa/Phoenix/Sun City, 4 OR — Portland/Salem/Eugene/Boring), all enriched with verified emails (~10 credits) → `Sales/Funeral-Homes-AZ-OR-Apollo-Batch5-Verified.csv`. Notables: Cornerstone (Elizabeth Fournier — Green Burial Guidebook author/TEDx), Terry Family (well-known Portland home), Mountain View (multi-location Mesa operator). Running total: **58 verified across ~60 companies**, ~68 credits. Updated [[funeral-homes-outbound-list]]. Nothing in `raw/` touched.

## [2026-08-05] build | Funeral-homes cold-outbound vertical (Apollo) — 48 verified across ~50 companies + nationwide sizing

Carlos asked to pull funeral homes/mortuaries from Apollo as a new cold-outbound vertical (community-event displays + signage), verified emails, excluding already-pulled, widening LA → OC/IE → statewide. Filed as [[funeral-homes-outbound-list]] (in `wiki/deals/`).
- **Delivered:** 48 verified-email decision-makers across ~50 companies in 4 CSVs in `Sales/` (LA County 17-row owner/GM → LA verified-only + big-operator marketing/events buyers → OC/IE 10 → statewide CA 19). ~58 Apollo credits (email reveals + 2 company searches; people searches free).
- **Key operational finding:** verified emails concentrate in large operators (memorial parks / multi-location mortuaries — Forest Lawn, Rose Hills, Hillside, Mount Sinai, Green Hills, Hollywood Forever, East Lawn); most small family homes are NOT in Apollo with a personal email (name/title/LinkedIn/main-line only). A verified-only list therefore skews mid/large; the small bilingual family homes (the ganas fit) need phone reveal or website, not email. Two buyer types documented; at the big parks the **marketing/events lead** is the display buyer, not the owner (e.g. Hollywood Forever = events venue, Día de los Muertos).
- **Method note (credit discipline):** switched from enrich-then-discard to a verified-email people-search filter before enrichment, so no credits wasted on blanks; filtered ~35–45% keyword noise (pet cremation, urn/casket retailers, funeral software/lending/insurance, foreign homes) out of each batch before enriching; deduped against prior batches.
- **Nationwide estimate (measured 2026-08-05):** ~**1,622** owner/exec verified / ~**7,532** all-roles verified → after cleanup ~1,000–1,200 genuine homes at exec level ≈ **~1,000–1,600 credits**; all-roles ≈ ~7,500. Recommended as a **phased** project (top funeral markets first, or Apollo-UI bulk export) and **gated on the offer angle proving out** — funeral homes are off the core P&G ICP, so validate one bilingual cold email → replies → a close on the CA list before a four-figure credit spend.
- Updated [[index]] (Deals + last-updated). Nothing in `raw/` touched.

## [2026-08-03] build | Social video creator (Stephanie) scoped + price-first UGC scripts — ⚠️ overlaps the 7/13 Venus social handoff

Two connected pieces of work for a prospective part-time video creator, **Stephanie** (runs Duo Sculpt's IG, ~8k in 6–8 months, Spanish-speaking; met at a recent lunch). New page [[social-video-creator]]. Nothing sent yet.

**(a) The engagement.** Scoped from Carlos's lunch recap: 2–3 Reels/week on her own schedule; **tent-first** (funnel is tent-heavy — master one money product first); **phased ownership** (Phase 1 she produces + Carlos schedules, protecting cadence + the 48-hr approval gate; Phase 2 keys to the feed once ~4 weeks of on-brand consistency hold); **4 pillars** with **product demos & features** added as the strongest angle, BTS parked for Phase 2 (the Lynwood floor is a top premium-proof asset). Artifacts in `Marketing/Social Video Creator/`: scope email (comp left open — Carlos reads her first), tent-first playbook (md), and a branded 6-page PDF (Cooper Black headlines, WeasyPrint off `cooper-black.woff2`). Pricing withheld from her materials → cost questions route to the free proof, keeping [[master-price-sheet]] out of a contractor's hands.

**(b) The price-first scripts.** Carlos's funnel insight: the UGC ads pulled response but **leads dropped at the price reveal**, so put the **price up front**. Grounded in the uploaded **Meta UGC Ad Launch Kit** (the prior V8 winner deliberately *cut* price to chase cheap leads) + live [[master-price-sheet]] tent numbers. Reframed honestly: price-first trades lead *volume* for lead *quality* — fits the real constraint (close-capacity, not lead count — [[meta-funnel-review-2026-07-09]]). Locked via AskUserQuestion: anchor = honest **good-better-best ladder** ($800 tent / $1,600 complete booth); **Stephanie on camera**; **warm-honest**, no competitor jab. Artifact → `PNG-Video-Scripts-PriceFirst.md`: 3 concepts × EN/ES = 6 scripts ("I'll just tell you the price" / "Show up like you already made it" / "Send your logo, watch what happens") with beat-by-beat shots, on-screen text, a shared end card, B-roll notes; honest claims enforced (free proof $500+, 5 days from proof approval, no "guaranteed," no fake urgency).

**⚠️ CONTRADICTION — needs Carlos's ruling.** This overlaps **[[venus-social-ads-playbook]] (2026-07-13)**, which gave Venus organic social + ads and named her the **on-camera bilingual host** producing the whole feed with "no outside-design dependency" ([[venus-content-calendar-2026-07]] drafted, 18-video shoot list in [[meta-creative-expansion-2026-07]]). Stephanie on camera in *paid* creative also overlaps Venus, the prior UGC ad face ($4.77 CPL). Both readings on the page — *complementary* (a producer sheds load so Venus closes) vs. *duplicative* (two hosts, two pipelines) — and Carlos has not ruled who owns organic vs paid and who fronts the camera. Logged as [[dashboard]] open item 9.

**Corrections made against the live vault** (the drafts were built off a stale 6/27 snapshot that re-synced twice mid-session, 79 → 95 → current): "Free proof on every order" → **"$500+"** ([[png-voice]] retired the blanket phrasing; tents all qualify, so no substantive change); a false font-drift flag withdrawn (Cooper Black is canon, re-confirmed 7/29 [[visual-system]]); confirmed [[venus-video-system]] is Venus's *1:1 closing* videos, distinct from these UGC ads (no duplication). Also **fixed my own dating error** — this session's edits were mis-stamped 7/19 and corrected to today, **8/03**.

**Still open:** Stephanie's surname/IG-handle/follower verification, comp (internal ~$50–100/video or ~$400–800/mo anchor given to Carlos as reference only — unverified), filming logistics ("mix of both" in principle), Phase-2 trigger, and the Venus boundary. Updated [[social-video-creator]] + [[index]] + [[dashboard]]. Nothing in `raw/` touched.
- Grounded in the uploaded **Meta UGC Ad Launch Kit** (the prior V8 winner deliberately *cut* the price to chase cheap leads) and live [[master-price-sheet]] tent numbers. Reframed the pivot honestly for Carlos: price-first trades lead *volume* for lead *quality*, which fits the real constraint (close-capacity, not lead count — [[meta-funnel-review-2026-07-09]]).
- **Locked via AskUserQuestion:** anchor = honest **good-better-best ladder** ($800 tent / $1,600 complete booth); talent = **Stephanie**, talking-head UGC + B-roll; tone = **warm-honest, no competitor jab**.
- **Artifact** → `Marketing/Social Video Creator/PNG-Video-Scripts-PriceFirst.md`: three concepts × EN/ES = 6 scripts — "I'll just tell you the price" (transparency), "Show up like you already made it" (ganas transformation), "Send your logo, watch what happens" (process-as-story). Each has beat-by-beat shots, on-screen text cues, a shared end card, and B-roll notes. Honest claims enforced: free proof on $500+ (tents qualify), 5 business days **from proof approval**, no "guaranteed," no fake urgency.
- **⚠️ Sharpens the open Venus boundary** ([[dashboard]] item 9 / [[venus-social-ads-playbook]]): Stephanie on camera in *paid ad* creative overlaps Venus, who was the prior UGC ad face ($4.77 CPL) and the 7/13-designated organic host. Recorded on [[social-video-creator]]; still needs Carlos's ruling on who owns which lane (organic vs paid, and who fronts the camera).
- Updated [[social-video-creator]] (name, on-camera signal, artifact, name-item resolved) + [[index]]. Nothing in `raw/` touched.

## [2026-08-02] update | Wiki sync — operational pages caught up to the brand-system sprint

Carlos asked to update the wiki. No new `raw/` sources (all ingested through 7/14); the brand pages and log were already current through 7/31 — the gap was the operational pages, which hadn't absorbed the sprint:

- **[[dashboard]]**: Last-updated narrative + a "Brand lane (8/2)" banner (the all-Carlos-gated go-live queue); §3 Brand equity rewritten to canon — visual-system bullet off the stale "DM Serif Display + DM Sans / Andrea handoff" onto the 7/29 Cooper+Fraunces+Inter ruling, proof-stack Donut bullet annotated with the 3-day retirement, new brand-identity-system-v2.0 bullet; **new open items 14–19** (staged theme push · store-claims fix list · PageFly slides · flyers/rush ruling · Made-in-USA qualification audit · Lucide). Launch Wk-1 (7/27–8/2) status deliberately NOT invented — needs Carlos's numbers.
- **[[theme-build-status]]**: the staged brand-canon batch added to the "Staged, not live" block — full file list, what changed (Inter body, canon hover, 23 claims fixes), the exact Carlos push command, the post-push theme-editor check.
- **[[venus-social-ads-playbook]]**: brand-kit v2.0 handoff item (Quick-Start, EN/ES templates, email shell, vector logos) + related-pages link — complements, not replaces, the 7/13 Canva starter set.
- **[[index]]**: header narrative brought current through 8/2.
- Lane: Claude-admin. Nothing in `raw/` touched; no numbers invented.

## [2026-07-31] decision | Brand Book v2.0 — Carlos's expansion draft reviewed and MERGED (not replaced)

Carlos added a claude.ai-generated "Brand Identity System v2.0" (HTML + 38-page PDF) to `Brand Book/` on 7/30 and asked for a review. The read: claims-discipline intact (its own tables list "Guaranteed in 5 days" under *avoid*), strong new execution layers — but it silently rewrote locked §1–7 strategy: personas became generic Owner-Operator/Marketing-Lead/Event-Driven-Buyer (**La Emprendedora deleted**), positioning + brand promise rewritten, and *ganas* / Donut / 4.8★ / "bilingual by nature" appear zero times. **Carlos ruled: merge.**

- **Book updated to v2.0** (`PNG-Brand-Book.html` + PDF rebuilt; artifact republished, same URL). Grafted from the draft: Foundation messaging layer (core message · 3 pillars · 10s/30s pitches · headline bank) · Personas journey table + purchase triggers · claims-table addition **"Made in the USA" = approved-conditional (verified sourcing standard only)** · Voice live-thread table (lead follow-up / proof approval / upsell, on-brand vs off-brand) · logo-misuse demo grid (stretch/recolor/effects/crowd) · Applications component-standards card (content limits, mobile rules, proof-sheet approval statement) · Governance preflight checklists + file-naming convention · decision-log entries.
- **Restored/held against the draft**: the locked personas, positioning statement, brand promise, *ganas* register, five voice attributes, $500+ scope, proof-stack numbers; the draft's "when the product and order qualify" SLA hedge rejected.
- **Propagated**: Made-in-USA rule → Design System SKILL.md hard rules, templates/README, Team Quick-Start (rebuilt, still 1-page PDF). Brand/README + Design System index bumped to v2.0. Draft files kept in `Brand Book/` as the source record.
- Updated: [[brand-identity-system]] (v2.0 + merge record), index. Lane: Claude-admin; ruling: Carlos 2026-07-31. Nothing in `raw/` touched.

## [2026-07-30] update | Application toolkit built: social templates (EN/ES) + email master shell + icon proposal — verified

The brief §8C application layer, filed under `Brand/Design System/templates/`:

- **3 social templates**, exact-canvas HTML (IG feed 4:5 ×2, story 9:16), designed in the system (tokens css import, Cooper via logo PNG, Fraunces/Inter, flat navy bands, warm-grey photo slots): `ig-feed-free-proof` · `ig-feed-product-spotlight` · `ig-story-free-proof`. One-attribute EN↔ES switching (`<body data-lang>`), hand-written Spanish in the money-page register, claims-compliant baked copy, free-proof templates carry the $500+ scope note. Rendered EN+ES examples in `social/out/`; render command in `templates/README.md`.
- **Email master shell** (`email/email-master-shell.html`): 600px table-based, Shopify-Email-safe (Georgia headings / system sans body; Cooper via logo image only), copper bulletproof CTA, trust strip, compliant footer (© line · Lynwood address · 844). Name merge uses the blank-safe `{% if customer.first_name != blank %}` branch (empty-string names are truthy in Liquid — the bare default-filter pattern leaves an orphan comma).
- **Icon proposal card** (`preview/brand-icons-proposal.html`): the Lucide 1.5px-stroke style rendered for Carlos's adoption call — marked PROPOSED; wired into index.html with the templates + quick-start refs.
- **Verification workflow (9 agents, 3 lenses + skeptics): 4 confirmed defects, all fixed** — the EN trust line had drifted to "5-day delivery…" (canon: "5 business days from proof approval"; ES was right, EN/ES disagreed); the story template lacked the $500+ scope note; the email greeting's merge pattern broke on empty-string names; the spotlight ES footer wrapped the phone number mid-number (now nowrap). Plus 8 low fixes applied (ES sub-copy register, bilingual photo-slot hints, off-token hexes → vars, README glyph rule now includes the green dot).
- Lane: Claude-admin. Nothing in `raw/` touched.

## [2026-07-30] update | Brand rollout: theme Inter migration STAGED + claims sweep (theme fixed / store list pending) + vector logos + team one-pager

Continuation of the brand-system build, per Carlos's four-way ruling (theme font migration · live-site claims sweep · vectorize logos · team rollout kit):

- **Theme body-font migration STAGED, not pushed** (Claude Code lane): `--png-font-body` → `'Inter','DM Sans',system-ui` in theme.liquid + custom-styles.css; 26 hardcoded DM Sans stacks migrated across 5 snippets, 4 sections, both free-proof LP templates (incl. their Google Fonts loaders → Inter 400–700; theme loader keeps DM Serif Display as the Cooper fallback); SVG `<text>` font refs updated; the stale `#A8682F` hover replaced with canon copper-dark `#A66629` in 11 files. Dawn's own `settings_data.json` (editor-owned, assistant_n4) deliberately untouched.
- **Theme-code claims sweep — 23 fixes staged**: "Free proof on every order" → "Free proof on orders $500+" (trust strip, contact); "5 business days standard" → "from proof approval" (product-tabs FAQ + product.json); every "5-day delivery, guaranteed" chip/label and unconditional "delivered in 5 business days" default in custom-hero, custom-seo-landing, custom-how-it-works, home-final + r2, bundle-builder-v2, index.json, tent page templates (10x10/15/20 spec chips + intros), and the lp-free-proof-v2 meta descriptions (EN+ES). Announcement bar was already compliant.
- **Live store-content audit (49 products / 15 pages / 5 policies, read-only)**: 14 product bodies + 6 SEO metas with unconditional/"guaranteed" delivery claims, 2 sub-$500 products advertising the free proof, the ACTIVE flyers product carrying "~3-day turnaround," PageFly home slides with "5 DAYS OR LESS"/"GUARANTEED." Phone discipline clean store-wide (only 844); no PrintCo anywhere. **Live mutations are approval-gated** — the exact 22-item fix list is filed at `Operations/PNG-Store-Claims-Fix-List_7.30.2026.md` awaiting Carlos's go.
- **Vector logos shipped**: all six lockups vectorized via the Adobe Illustrator API → `Brand/Design System/assets/vector/*.svg`, backgrounds stripped to true transparency (the outline/alt pair needed a magenta-chroma re-vectorize), verified against the PNGs on white + navy. Closes the vector-sources open item on [[visual-system]].
- **Team quick-start one-pager built**: `Brand/Brand Book/PNG-Team-Quick-Start.html` + single-page PDF — six claim rules, voice checklist + kill list, bilingual rules, asset map, the on-brand test. For Venus + the content team.
- Updated: [[brand-identity-system]] (rollout block + open items), [[visual-system]] (vector logos), Design System README. Lanes: Carlos owns the theme push, the store-fix approval, PageFly edits, and the flyers/rush rulings.
- Nothing in `raw/` touched.

## [2026-07-30] lint | Brand-system adversarial verification sweep (14 agents) — 8 confirmed defects fixed

Ran a 4-lens verification workflow (fact-check · bilingual voice · token fidelity · completeness, each finding skeptic-checked) over the 7/29 brand-system deliverables. 28 raw findings → 8 confirmed (1 refuted: the (213) line in signatures is the documented 7/14 Venus ruling, correctly kept). Fixed:

- **[[png-voice]] SLA stragglers** — the Speed example ("Booth-ready in 5 business days. **Guaranteed.**") and the trust phrase ("5-day delivery guaranteed") still carried unconditional delivery claims from the May brief; both now read "from proof approval" with supersession notes (co-CEO 2026-06-17 ruling). Also purged the April Full-Context's stale hexes from the palette section (hover `#A8682F` → `#A66629`; Slate `#2E3E50` / border `#EEEEEE` → token values; cream `#F5F2ED` restored as the primary break).
- **Design System README** — the em-dash exemplar line was itself an unconditional delivery claim (now "from proof approval"); AnnouncementBar mis-described as a "copper bar" (navy per tokens); phantom `logo-wordmark-stacked-alt.png` replaced with the real `logo-wordmark-horizontal-tight.png`; dead `uploads/` source paths repointed at `Website/` + `Brand/Logo/`; shadow-at-rest contradiction reconciled (cards rest shadowless).
- **SKILL.md** — "DM Serif Display = print collateral only" dropped its theme-fallback role (the live theme's font stack depends on it); restored.
- **Brand book + [[visual-system]]** — Inter spec corrected to 400/500 · 11–14px per tokens; the accessibility note no longer implies 11px copper eyebrows pass AA (decorative; copper-dark for accessible labels); ratio-bar copper segment flex 3→2; new preview cards' `#EEE` borders → token `#F0F0F0`.

Brand book rebuilt from the corrected template; PDF + artifact published same session (see [[brand-identity-system]]).

## [2026-07-29] decision | Typography canon confirmed + Brand Identity System v1.0 built

Carlos requested the full brand identity system from current specs; scope settled via AskUserQuestion (all four layers — visual / voice+bilingual / positioning+personas / applications; all four forms — brand book, Design System expansion, wiki pages, PDF; audience Carlos + Claude agents + Venus + content team).

- **DECISION (Carlos): typography canon = Cooper Black (display) + Fraunces (headings) + Inter (body/UI)** — resolves the July Design System vs DM Serif Display/DM Sans drift. DM Serif Display stays print-collateral display + theme fallback; DM Sans remains live theme body until the Inter migration ships (Claude Code lane, open).
- **Built the Brand Book v1.0** — `Brand/Brand Book/PNG-Brand-Book.html` (+ `PNG-Brand-Guide.pdf`; self-contained: Cooper/Fraunces/Inter woff2 + 6 logo PNGs embedded; verified in headless Chrome). Eight sections; notable canon it consolidates: the claims-discipline table (SLA "5 business days from proof approval" only; free-proof $500+; Donut "3-day" retired; no urgency tricks), the anti-AI kill lists, bilingual craft modes, identity constants (© line, 844 number only, domain split), plus two v1.0 additions: logo clear-space = ampersand height, and AA contrast guidance (copper text large-only; copper-dark #A66629 passes AA at 4.6:1).
- **Design System folder corrected + expanded** (`Brand/Design System/`): README — headline promise + announcement-bar copy off the unconditional "5 days or less" onto the approved SLA line; "From $895" mock price removed (prices from the live catalog); "Font substitutions — please confirm" → confirmed-canon decision record; identity constants + free-proof scope added to caveats; stale `ui_kits/` references fixed. SKILL.md hard rules extended (SLA, scope, retired Donut stat, canon, phone/©, anti-AI, bilingual). New preview cards: `brand-positioning` / `brand-bilingual` / `brand-claims`, wired into index.html + a Brand Book ref card.
- **Wiki**: new [[brand-identity-system]] + [[visual-system]]; [[png-voice]] visual-system section updated to the canon (+ Last updated bump); wiki CLAUDE.md coverage line 4 updated; index updated (97 content pages).
- Lanes: Claude-admin (book, wiki, Design System docs) · Claude Code (theme body-font migration — open) · Carlos (Lucide adoption call, vector logo sources, trust letters).
- Nothing in `raw/` touched.

A multi-day Claude Code build across 2026-07-19→22, filed to the wiki 7/22:
- **[[free-proof-landing-page]] V2 went LIVE 2026-07-20** on both `/pages/free-proof` (EN) + `/pages/prueba-gratis` (ES) — `templates/page.lp-free-proof-v2.liquid`, flipped via Admin API `pageUpdate` (templateSuffix), same URLs so ads/UTMs were untouched; v1 stays on the theme as a one-command rollback.
- **Working drag-and-drop logo upload** — the v1 "Shopify can't attach files" limitation is solved via a **Cloudflare Worker** (`png-logo-upload.carlos-154.workers.dev`, Carlos's CF account, Workers-KV store, 15MB/180-day, CORS-locked; source `Operations/logo-upload-worker/`). File URL rides into the Shopify lead email as `contact[Logo file]`. Directly targets the **10.3% logo-collection leak** ([[meta-funnel-review-2026-07-09]]).
- **On-page packages** (Starter Table $208 · 10×10 Booth $800 · **Complete Set $1,600**; the $848 Trade-Show Backdrop tier removed — the runner is $88 *runner* not a full cover) · **9-logo trust carousel** (Red Bull removed at Carlos's direction; **Ray-Ban kept — Carlos confirmed a real client** with no prior source) · **bilingual FAQ + per-language JSON-LD** (LocalBusiness/Service/FAQPage/Breadcrumb; **no AggregateRating** by design).
- **Polish pass (7/21)**: fixed a real 199px mobile horizontal-overflow bug + a both-languages-render bug; LCP fix (scroll-reveal was hiding the H1); WebP + lazy images (291KB→190KB); locale-aware ES so Shopify's `/es/` hreflang serves Spanish; OG/Twitter tags; parallax band; real footer wordmark. Verified in headless Chrome at 360–430px + live rendered DOM.
- **Meta 30d refresh (7/20)** → [[meta-creative-expansion-2026-07]] + [[dashboard]]: EN2 $730/148/$4.93, ES2 $150/35/$4.28; **IG-DM ad LIVE** (7/18, $2.96/conversation — open item 8c partly cleared).
- **Deliverability finding (7/20)** → [[dashboard]] open item 13: promongrow.com auth is intact (not broken as a scanner claimed) but **DMARC is p=none** and **Shopify's hello@ sends aren't DKIM-aligned** — authenticate the Shopify sender before ramping DMARC; don't jump to quarantine.
- **Tent carousel (7/22)**: 3-slide EN+ES 1080×1350 from Carlos's "Tent setup animation" Claude Design project; the Spanish version pushed back to the Design project + exports in `Marketing/Meta Carousel Ad - Tents/`.
- Updated: [[free-proof-landing-page]], [[dashboard]] (banner + Meta line + open item 13), [[meta-creative-expansion-2026-07]], index. Lane: Claude Code (theme/code); nothing in `raw/` touched.

## [2026-07-20] ingest | Advisory track filed — LAUNCH 30 DAYS + margin audit + offer architecture + LED vendor + video system (+5 pages)

The weekend advisory sessions (`Advisory/2026-07-19 *`) landed in the wiki:
- **[[launch-30-days]]** (NEW, programs) — the committed campaign: Event-Ready Setup $1,600 one-offer, window 7/27–8/23, gates Aug ≥$10K → Oct ≥$25K (Carlos set **P&G $25K/mo by October** as the target — the payroll engine funding Venus FT + content + designer; Proágo = his income lane), fail-forward pre-decided, Venus 15 convos/day. 3 rulings due Fri 7/24. Real segment counts from the 7/19 pull (45 purchasers; CSV in the Advisory folder).
- **[[margin-audit-2026-07]]** (NEW) — 310 variants: ~44–45% structural, 130 below floor, flag-only per Carlos; the Fri 7/24 pricing session rules line-by-line. Workbook formula-live in the Advisory folder.
- **[[offer-architecture-2026-07]]** (NEW, proposal) — 6 segment bundles + ladder + non-discount incentive menu; prices pend Friday.
- **[[led-tent-vendor-cfm]]** (NEW) — CFM LED frame $249.87 landed; illuminated 10x10 COGS $523.77; $1,280 clears the floor; premium play not cost play; sample gated on Eve (will-call Q outstanding since 7/17).
- **[[venus-video-system]]** (NEW) — 1:1 closing-video skeleton + EN/ES power lines, **Earn-It close ruled default (7/20)**, sent to Venus in Slack 7/20; lane-bounded vs the creator question (open item 9).
- **⚠ Collision flagged → open item 10**: two email programs (H2 calendar from 7/21 vs launch arc from 7/27) on the same lists — Carlos to rule one integrated calendar before Wk-1 sends.
- Errata accepted from the 7/13–14 notes: full open board 47/~$58K; agentic-OS handoff stands. Dashboard banner → wk of 7/20; items 10–12 added; index updated. Lane: Claude-advisory filed; nothing in `raw/` touched.

## [2026-07-19] update | Month-1 emails BUILT (7 HTMLs, 7/21 → 8/24) + arc 06/07 price fix

Carlos said "let's build month 1" off the new [[email-calendar-h2-2026]]. Built and verified same-day:

- **7 plug-and-play HTMLs** in `Marketing/H2 Email Calendar/` (new folder): F1 tent feature (7/21) · C1 Donut client feature named + anonymized fallback (7/28, gate intact — subjects deliberately client-name-free so one subject block serves both files) · T1 tent-size guide (8/4) · T2 booth zones (8/11) · T3 wind/weather split (8/18) · LC-A Fall-Kit last call (8/24, short, calendar-fact framing). All on the arc's email-03 template (subject-options block + preheader + bulletproof CTA + `{{ open_tracking_block }}`), all from Venus, correct merge tag throughout.
- **Process**: fact pack grounded in live Shopify (pulled 7/19: 10x10 from $800 / 10x15 from $1,280 / 10x20 from $1,400 — which also settled the [[content-engine]] tent-size discrepancy: the live lineup is 10x10/10x15/10x20, no 5x5) → 28-agent draft → 3-lens adversarial verify (voice/anti-AI · honesty · craft) → fix → my manual pass on top (grep sweep clean on stale prices / bad merge tags / "guaranteed" / banned phrases / 323 number; render-checked F1 + LC-A in-browser). Manual pass caught + fixed 3 unsourced Donut-story precision claims the agents missed ("first order", "we build sets", "come back ten times since" → sequence-neutral phrasings) and de-duplicated the T1/T3 "Así de simple" closer.
- **Price fix**: [[summer-email-arc]] emails 06 + 07 corrected "starting at $857" → "$848" (open item 4 half-closed; the builder-side Shopify SKU sync stays Claude Code's). Archived email-01 left as-is.
- **Calendar page updated**: month-1 rows → BUILT, new "Month-1 build record" section with the load sheet (files + LIVE subjects + chaining map + pre-send gates).
- **Still gating the sends** (Carlos): list-hygiene clean before 7/21 · weekly approval per send · Donut sign-off by 7/27 (else the fallback file sends) · arc-01/02 send-state check in Shopify admin.

## [2026-07-19] update | H2 2026 email master calendar built (Jul 20 → Dec 31, 2–3 sends/week)

Carlos asked for the full email-campaign arc through year-end: 2–3 emails weekly mixing featured products, client features (current clients), and shareable content (DIY, best practices, tips & tricks).

- **New page** → [[email-calendar-h2-2026]]: 46 scheduled sends + 3 optional last-calls on a **Tue show-lane / Thu value-spine** architecture (Thursday = the proven slot and keeper of the 7/2 public weekly-value promise; Tuesday = the new lane that takes cadence to 2×/week; third sends only as window last-calls or holiday-morning owner notes on the 7/4 34%-open pattern).
- **Absorbs [[summer-email-arc]]**: built emails 03–09 keep their Thursday slots (7/23 → 9/3); 01–02 ruled stale after the 7/18–19 SoF final weekend (01 archives, 02 salvageable). Send state of 01/02 **unverified** — sent-email-log stops 7/6 and the Admin API exposes no Shopify Email campaigns (marketingActivities empty, checked today); flagged for Carlos to confirm in the admin. Also formally supersedes the preflight-SOP reactivation schedule as the single active broadcast calendar (library assets = inventory).
- **Ask budget honored** ([[email-campaign-engine]] ~4 promos/yr; SoF already ran): Window A Fall Booth Kit (built, 8/13 + 8/20 + opt. 8/24) · Window B **Holiday Market Kit** (new wrapper, 10/8 + 10/15 + opt. 10/19 — real math lands kits before Día de los Muertos weekend / first November markets) · Window C **Storefront Rush** (new, 11/10 + opt. 11/16 → ready before Black Friday / Small Business Saturday 11/28). All deadlines are calendar math, no fake urgency.
- **Client features (5, all gated)** per the client-logo permission gate: Donut Media 7/28 (no day-count; **$30K figure contradiction** between [[positioning-and-personas]] "usable" and the content-calendar guardrail — Carlos ruling) · Tao Kae Noi/Pathita 9/22 · the anonymized "client who wanted neon" honest-expertise story 10/27 ([[print-color-and-material-limits]]) · Smile Klub named or South Gate 11/19 (both Carlos-gated) · year-in-review montage 12/8. Century Eye Care (open complaint) and Lynwood USD (lead, not customer) explicitly excluded.
- **Shareable-content spine**: 15 new tips/DIY emails seeded from the [[content-engine]] 8 frameworks + [[product-size-guide]]/[[product-application-guide]]/[[file-prep-gate]] material; election-lane featured email 9/8 per [[sell-guide]] (front-load before the Sept–Oct scramble); 6 goodwill notes (Hispanic Heritage 9/15, Día de los Muertos 10/29, Thanksgiving morning 11/26, SBS 11/28, Nochebuena 12/24, year-close 12/31).
- **Guardrails baked in**: cadence tripwires for the 2× ramp (list-hygiene clean first — bounce at 0.9%; unsub >0.5% → back to weekly; opens <15% → pause), slice-test every ask, preflight SOP + merge-tag rule on every send, "from $848" only (fix arc-06's $857 before 8/13), free proof $500+ scope, "guaranteed" wording contradiction defaulted to the safe 5-biz-days-from-approval form pending Carlos.
- **Cross-updates**: [[summer-email-arc]] (absorbed-note + pointer), [[index]] (banner + Programs entry). 8 open items listed on the page for Carlos. Next build step on request: month-1 HTMLs (7/21 → 8/31, ~6 new emails + the 8/24 last-call).

## [2026-07-15] update | Footer Instagram link corrected off Proágo → promongrow (live)

Carlos asked to point the store footer's Instagram at the P&G account.

- **Found:** `settings.social_instagram_link` = `https://www.instagram.com/proagobranding/` — the **sister agency's** account. The live promongrow.com footer (and mobile menu drawer) were sending P&G customers to Proágo. Entity-boundary leak.
- **Fixed + deployed 2026-07-15:** → `https://www.instagram.com/promongrow/` in `config/settings_data.json`; pushed to live theme `PromoNGrow/main` (#171153293348) via `shopify theme push --only config/settings_data.json --allow-live --nodelete` → "pushed successfully", then **pulled the file back from the live theme to confirm the value landed**. Confirmed the local copy was clean vs HEAD before editing, so no theme-editor settings were clobbered. The one setting feeds both `snippets/social-icons.liquid` (footer) and `snippets/header-drawer.liquid` (mobile drawer).
- Filed as [[site-catalog-fix-backlog]] item 5; index line updated. Noted there that every other social setting is still blank, so Instagram is the only icon the footer renders. **Lane:** Claude-admin. Nothing in `raw/` touched.

## [2026-07-19] build | Meta ad copy for the 2 paused ad sets + phone-map corrections

Two things per Carlos. **(1) Meta ads** — confirmed via the Meta MCP that the two new PAUSED ad sets **can't be built through the connector**: the API can't create lead-form ads, has no image-upload tool, the Page (`719222154605537`) hasn't accepted the Lead-Gen ToS (`leadgen_tos_accepted=false`), and **0 IG accounts** are authorized for advertising. So the wiring is an Ads-Manager job. Built the missing piece — the ad **copy** — as new [[meta-ad-build-sheet-2026-07]]: paste-ready primary text + headlines + descriptions (EN + ES) for Form 2.0 (3 ad variants) and IG DM (2), with the static picks from `Ad Studio/out/`, the instant-form fields, the DM ice-breakers, CTAs, and a 5-step checklist (accept lead-gen ToS → connect IG → build forms → create ads → un-pause). **Consolidated the duplicate Form 2.0 ad set**: kept the Carlos-configured copy `120251022727370530` as canonical, renamed the paused original `120250980518400530` "(superseded 7/13)" (reversible, nothing deleted). **(2) Phone map** — [[phone-number-map]]: **562.472.7994 = Carlos's personal cell** (not a P&G line, not being set up for SMS/WhatsApp); 213 refreshed (SMS still pending Crexendo, WhatsApp submitted to Meta awaiting approval). Lane: Claude-admin built the copy + wiki + the rename; Carlos owns the Ads-Manager steps. [[index]] + Programs entry.

## [2026-07-15] build | Final-weekend "Steal These" IG carousel — 7 slides rendered for Venus

Per Carlos, turned the universalized [[summer-email-arc]] email-02 "5 promos" giveaway into a **7-slide Instagram carousel** (4:5). Deliverable chosen via AskUserQuestion = **finished image slides** — the Canva connector's generator only makes one slide at a time, forces in garbled AI-stock imagery, and has no add-page op, so it can't build a clean multi-slide carousel (confirmed live: it produced a single generic slide, design DAHPfa-MLq0, which can be deleted). Instead authored the slides as on-brand HTML (navy #1B2838 / copper #C17A3A / off-white, serif display, copper-highlighted `[BRACKET]` fill-ins, quote-mark watermark, PROMO & GROW footer + page numbers) and rendered to **2160×2700 PNGs via headless Chrome**. Slides: cover → 5 promos (EN IG caption · Spanglish caption · WhatsApp blast · chalkboard line · story poll) → close (save/tag + free-proof CTA, 213 line). No-pitch giveaway; FIFA-safe (no trademarked marks). Files in `Final Weekend Carousel/` (slide1–7.png + build.js source + caption.txt with the ready caption, hashtags, and posting steps). Carlos/Venus upload the 7 in order = the carousel; the visible brackets are intentional (they teach the fill-in formula). Lane: Claude-admin built; Venus posts. Cross-links [[venus-social-ads-playbook]] · [[venus-content-calendar-2026-07]].

## [2026-07-15] update | Summer-arc email 02 universalized (bars/restaurants → any small business/vendor)

Carlos wanted to send arc email 02 today but flagged it read as bar/restaurant watch-party copy; asked to make it universal for any small business or vendor. Confirmed direction via AskUserQuestion → **keep the World Cup final-weekend hook, broaden the businesses, EN with tasteful Spanglish** (all three recommended options chosen). Rewrote `Summer Email Arc/email-02-patio-playbook.html` in place: intro reframed to "the whole city's out this weekend — foot traffic up for grabs **whether or not you're showing the game**"; all 5 steal-cards de-hosted (screen/dish/tables → `[YOUR SPOT]`/`[YOUR OFFER]`/`[WHAT YOU DO]`/`[OPTION A|B]`); chalkboard line kept its FOMO punch ("your couch doesn't do [WHAT YOU DO]") with fill-in examples (micheladas / fresh fade / stack this deal); one fully-Spanglish caption retained; eyebrow → "THE FINAL-WEEKEND PLAYBOOK"; send-math refreshed to 7/15 ("a few days out"). Preserved: the no-pitch give-to-ask nature, honest P.S. (free proof on reply-with-logo), `{{ customer.first_name | default }}` merge tags, 3 subject options (Option 2 LIVE), preheader, Shopify `{{ open_tracking_block }}`. Kept the arc's 01→02→03 open loop intact (02 still final-weekend-pegged before 03's "matches are over" pivot). Filename left as-is despite the "patio" name. Per Carlos (7/15), the sign-off now shows **both** Venus's direct (213) 817-9188 + the (844) 883-3308 brand line. Updated [[summer-email-arc]] (calendar row + one-liner + Last updated) + [[index]] header. Lane: Claude-admin wrote; Carlos runs the Shopify Email send (slice-test not required — it's a value email, not an ASK).

## [2026-07-14] update | Venus's SIgnature/ files → 213 line + new canonical [[venus-email-signature]] page

Carlos pointed at the three real install-ready signature files (`SIgnature/signature-1-classic.html`, `signature-3-banner.html`, `signature-4-card.html`) as "the signatures I needed updated" and asked to thoroughly update the wiki. **(1)** Updated all three: swapped the 844 toll-free → Venus's direct local **(213) 817-9188** (both the `tel:` link and display text), consistent with the earlier `venus-email-signature-FINAL.html` change and [[phone-number-map]]. **(2)** Built the first dedicated **canonical signature doc**, new [[venus-email-signature]] — the three variants (Classic / Banner / Card) + when to use each, shared elements (headshot/logo on the Shopify CDN, "Your Promo & Grow Concierge," 4.8★/20yr trust strip, "Get a Free Proof →" → bundles = inherently $500+), the 213-vs-844 decision, the install steps, and the note that the trio supersede the FINAL.html chooser. **(3)** Repointed the scattered mentions at it: [[phone-number-map]] (844-row link), [[venus-brief-2026-07-14]] (signature marked done), [[venus-work-queue]] (day-shape "install signature" now links the ready files); [[index]] header + Concepts entry + count (94). **Flagged for Carlos:** the files' "Made in USA" trust chip (other collateral says "Made in LA"; product is Lynwood-assembled but B2Sign/4over-sourced — confirm or align), and whether to also show the 844 on the signature. Lane: Claude-admin updated the files + wiki; Carlos/Venus install.

## [2026-07-14] update | Venus signature → new 213 line + LinkedIn Overview blurb delivered

Per Carlos: (1) updated **Venus's email signature** (`P&G marketing collateral/venus-email-signature-FINAL.html`, all 3 options) to her new direct local line **(213) 817-9188** — swapped in for the 844 as her personal line (SMS/WhatsApp coming; better pickup); sent Venus the paste-ready text version via #promo-and-grow + noted the branded HTML is ready to install. Flagged to Carlos the option to also keep the toll-free 844 on it. Small accuracy tweak to [[phone-number-map]] (844 stays the brand line on site/forms/collateral; Venus's personal sig now leads with 213). (2) Delivered a **LinkedIn company Overview blurb** — **1,280 chars** (under the 2,000 limit), plain-text/paste-ready, repositioned to the event-display lane per [[linkedin-gbp-optimization]] (free proof · 5-day · bilingual · 20-yr heritage · 4.8★); softened the client mention to "leading media and lifestyle brands" (swap in Donut Media if cleared). Lane: Claude-admin. Carlos owns installing the branded signature + pasting the LinkedIn Overview.

## [2026-07-14] build | Shadi/Smile Klub neon prep one-pager for Venus (Slack canvas) + "sell it" frame

Per Carlos, built a **prep one-pager to equip Venus for Shadi** (savvy, tough-on-price) on the neon decision, and sent it as a **Slack canvas** ("Shadi / Smile Klub Dental — Venus Prep Sheet") + a message tagging her in #promo-and-grow. Core reframe (Carlos's): **the neon isn't a limitation to apologize for — it's expertise to sell.** Two paths, present A first, recommend B if price-focused: **Path A** = **3M 2080 neon wrap film** background + printed cut-vinyl graphics (**+$800**, real glow); **Path B** = brightest in-gamut brand color at base price, swatch-approved. The sheet arms her with a 6-row **rebuttal table** for her price pushback, the confident "light vs ink" explainer, design guidance (simple doors / promo windows), and a call checklist (confirm store hours → present both → land a decision → written approval). Captured the reusable frame + the 3M 2080 build spec into [[print-color-and-material-limits]] (new "sell the expertise" section; Option 1 now names the 3M 2080 + cut-vinyl build); noted the prep sheet on [[venus-work-queue]] (Shadi entry). Lane: Claude-admin built + sent; Venus runs the call; Carlos backs pricing.

## [2026-07-14] ingest + build | Venus 7/14 call — new local line, concierge/design-intake SOP, neon/CMYK caveat

Reviewed (per Carlos) the #promo-and-grow Slack + the Gemini transcript of the 2026-07-14 1:39pm call with Venus. Three threads captured. **(1) New local line 213.817.9188** — live via Crexendo; Venus's outbound caller ID (local, not the 844 toll-free → higher pickup) + a second inbound line; **SMS pending Crexendo verification** (~7/15); **WhatsApp** to be attempted on it; propagate to signature/site/YP/Google. Updated [[phone-number-map]] (the "planned local line" is now provisioned) + flagged a 562.472.7994 that appeared near the Shadi handoff (likely the client's number — confirm). **(2) The funnel gap Carlos named** — *"how to get people's files, proof, and letting them know what to expect"* — built as new [[client-onboarding-playbook]]: the post-close concierge + design-file intake Venus now owns (gather brief → request files vector-first → quality-check + low-res handling → flag production caveats → set expectations: free proof→written approval→5-day clock → hand off to #promo-and-grow-artwork-proofer), grounded in the transcript + file-intake best-practice research. **(3) The neon/CMYK caveat** — Smile Klub Dental (Shadi) wants a neon-yellow window background; printed CMYK (even 6-color +Lc/Lm) can't reproduce neon → specialty fluorescent-vinyl build (**+$800, scope change**) or recommend brand colors. Built new [[print-color-and-material-limits]] — **verified via a 3-vote adversarial fact-check** (workflow wzz97pesy): corrected neon Pantones = 800-series (not "8000"/metallics), dropped the bogus 16M-vs-16K color counts, reframed the "~90%" as extended-gamut *library coverage* not per-color accuracy, and scoped Pantone/spot as **not** a neon route (only fluorescent film/inks glow). Also updated [[venus-work-queue]] (Smile Klub project spec + neon decision + proof exists) + [[venus-social-ads-playbook]] (production-quality bar: polish AI drafts, lighting, color consistency). Filed source-summary [[venus-brief-2026-07-14]]; [[index]] + count (93). Lane: Claude-admin; Carlos owns the access grants + SMS/WhatsApp verification; Venus runs the Shadi onboarding.

## [2026-07-14] ingest + build | LinkedIn + GBP profile optimization → new [[linkedin-gbp-optimization]]

Carlos dropped 2 LinkedIn screenshots (`raw/Screenshot 2026-07-14 at 1.01.47 PM.png` + `1.02.07 PM.png`) and asked to polish + optimize the LinkedIn + Google Business profiles. Audit found the LinkedIn page had drifted into **generic-printer / Proágo-agency positioning** (Overview = "Full Service Marketing, Website Design, Branding, Direct Mailing…" — the agency's lane, not P&G's) plus two live typos ("5 working days or **lees**"; "Event **Grpahics**"). Built [[linkedin-gbp-optimization]] with paste-ready copy repositioning both owned profiles onto P&G's **event-display specialist** lane: new tagline, a differentiator-led Overview (free proof · 5-day-from-approval · bilingual · 20-yr PrintCo→P&G heritage · 4.8★), a **20-item Specialties** list (hero products first, SEO keywords, Proágo-bleed stripped), cover-banner fixes (lees→less, working→business days, add free proof), + the LinkedIn structure fixes (CTA button, associated members, hashtags). GBP section = the bigger local lever: primary-category guidance, a 750-char description, services/products, the **Latino-owned** attribute, review strategy, Google Posts, and a **NAP-consistency** lock (Promo & Grow / 10514 Long Beach Blvd, Lynwood 90262 / 844.883.3308 — never 323/Proágo). Verified NAP against [[store-and-catalog]] (address/phone/domain all correct on the live LinkedIn). Voice calibrated professional-warm/keyword-rich for B2B + search (lighter Spanglish than IG). No GBP screenshot shared → Part 2 flagged to confirm against the live profile. Lane: Claude-admin drafted; Carlos/Venus paste in + run the review-ask; cover-banner re-export available on request. [[index]] + count (90). Also cross-links [[positioning-and-personas]] · [[png-voice]] · [[phone-number-map]] · [[venus-content-calendar-2026-07]].

## [2026-07-14] update | Shadi closed on the first live Deposit-to-Lock + Venus content kickoff kit sent

Two fronts for Carlos. **(1) Shadi Safai closed** — Venus closed the **window-refresh project** (new draft **#D124, $3,800**) on the **first live use of Deposit-to-Lock**: **$1,800 cash deposit** today, **$2,000 balance** due at proof approval. Carlos hit a Shopify wall — drafts take only **full or deferred** payment, not partial — so logged the deposit as a **note + `deposit-locked` tag** on #D124 (draft stays unpaid until the balance clears). Confirmed via Shopify docs that native draft-order **deposits are Shopify Plus-only** (2026-07 API), not available on our "Shopify" plan; documented the interim note-on-draft method + the permanent options (a deposits app vs. **QuickBooks** progress-invoicing) on [[master-price-sheet]]. Also: Shadi **#D83 $3,600 now COMPLETED (converted → won)**; #D80 $950 + #D84 $888 still open → [[venus-work-queue]] + [[dashboard]] §1. **(2) Venus content kickoff** — per Carlos, sent Venus her full kit via Slack: a **Canvas** ("Venus — Content Kickoff Kit + Game Plan": self-contained game plan + concrete Week-1 plan + guardrails + access checklist) linking the P&G brand kit + the 4 cleaned Canva templates ([[venus-social-ads-playbook]]) + the month-1 calendar ([[venus-content-calendar-2026-07]], team-brain repo), plus a kickoff message tagging her in #promo-and-grow. Ad Studio paid-ad library flagged as Phase-2 (turns on with her Meta Advertiser access). Lane: Claude-admin (Shopify note + Slack send); Carlos owns the access grants + collecting Shadi's balance.

## [2026-07-14] ingest | Hormozi "get customers so fast it feels illegal" → new [[getting-customers-fast]]

Ingested the single new raw drop (`Alex Hormozi - How to get customers so fast it feels illegal.pdf`, 32-pg YouTube transcript; nothing new in `raw/assets/`). Distilled its **10 lead-gen principles** into new concept page [[getting-customers-fast]] — the **customer-acquisition** counterpart to the existing warm-list [[email-campaign-engine]]. Each principle mapped to P&G (already-doing / push / gap): (1) give-free-what-others-charge-for = **the free proof**; (2) fewer-better talent = the lean two-agent + Venus model; (3) "what would it take to be #1" scoped to the LA bilingual niche; (4) sell-in-a-vacuum = the verified whitespace; (5) **pre>post**; (6) **minimize "need-to-believes" = the trust-gap spine**; (7) split-test order (offer→headline→image→**3rd-party integrations**, incl. the lead form); (8) **LTV-as-arms-race** (apply to reorders/pricing — P&G's real constraint is close-capacity, not lead cost); (9) affiliate "peel-a-corner, give 100%"; (10) **truth / damaging-admission**. **Honest caveat** kept (info-product $ figures don't transfer; sorted the 10 into act-now / lens-only / needs-a-Carlos-decision). **Contradiction flagged for Carlos:** Hormozi's "incentives under ~50% don't change third-party behavior" vs. the 7/13-ratified **10%-in-trade *referral* leg** — not a flat contradiction (10%-in-trade is a live-close concession, works fine there) but the referral leg is weak for an *active* referral engine; the peel-a-corner model is the stronger design if P&G wants one. Noted on [[master-price-sheet]] as a design question, **not** a change to the ruling. Folded the two content-ready moves (pre>post + damaging-admission) into [[venus-social-ads-playbook]]; added bidirectional links across [[email-campaign-engine]] · [[conversion-bridge]] · [[the-20k-math]] · [[master-price-sheet]]. [[index]] header + Concepts entry + count (89). Lane: Claude-admin.

## [2026-07-13] update | 4 Canva templates copy-cleaned via the connector (kill-words, URL, free-proof scope, real proof)

Per Carlos ("please clean up"), fixed every off-brand copy/URL flag on the 4 starter templates directly in Canva (start→edit→commit on each): **story** DAHPUb-14FQ — "Ready to Elevate Your Brand?"→"Ready to show up like a pro?" + "Free proof included!"→"Free proof on orders $500+."; **feed** DAHPUZipppQ — "Elevate Your Events with Style"→"Your Brand, Done Right" (bridges the ES "hecho bien" in the sub-copy); **review** DAHPUSSqpsE — placeholder "reallygreatsite.com"→**promongrow.com** + generic "Join the Success Story"→**★★★★★ 4.8 on Google** (real proof on the trust card); **YouTube** DAHPUXl6MbY — "Elevate Your Event with Premier Tents"→"Make Your Event Impossible to Miss". All committed. Checklist on [[venus-social-ads-playbook]] updated: copy/URLs done, **only the AI-stock→real-install image swaps + real logo/phone remain Venus's Phase-1 task** (needs real photos from the P&G Drive folder). Lane: Claude-admin.

## [2026-07-13] build | 4 P&G Canva starter templates generated + filed (folder FAHPUZrT6Gc)

Per Carlos, built 4 on-brand social templates via the Canva connector against the P&G brand kit (kAHG1r5M2LE): feed/carousel (DAHPUZipppQ, 3 layouts), story/reel end-card (DAHPUb-14FQ), review card (DAHPUSSqpsE), YouTube thumbnail (DAHPUXl6MbY); grouped in folder "P&G — Social Templates (Venus)". Exported + visually QA'd each. Verdict: **brand skeleton is right** (navy #1B2838 / copper / off-white / bold serif display / clean layouts) but the AI generator wrote generic copy + used AI-stock imagery — so they're **frames to finish, not final**. Finish-list recorded on [[venus-social-ads-playbook]] onboarding checklist: kill "Elevate" (3 of 4), swap AI-stock images for real installs, fix placeholder URL → promongrow.com, scope free proof to $500+, add the real logo + phone. This is Venus's Phase-1 calibration task. Lane: Claude-admin built; Venus/Carlos finish in Canva. Carlos still to: verify handles/reach + grant Meta/IG/YT access.

## [2026-07-13] build | Venus's Month-1 content calendar drafted — new [[venus-content-calendar-2026-07]] (+ team-brain copy); Canva brand kit checked

Built Venus's first-month IG/YouTube calendar: **22 pieces on a 4-week trust-building arc** (Meet us → See it before you pay → Know what you're buying → Real people + your turn), bilingual EN/ES captions in [[png-voice]], per-post shot notes on real assets, the one-day batch shoot list, trust-weighted pillars (~35 proof/30 education/25 community/10 promo). Drafted via a 4-agent workflow (wf_5e040085); Week-3 agent returned a garbled result (echoed a system reminder) → regenerated cleanly via a single agent. Guardrails baked in: honest SLA (never "guaranteed"), $500+ free proof, no fake urgency, P&G-only, and a **client-logo permission gate** (Donut Media posts tagged [client-OK]; Donut-story rules from [[josh-craig-donut-media]] — say "fast" not a day-count, no $ figure). **Canva check (Carlos's ask):** the "Promo & Grow" brand kit exists (id kAHG1r5M2LE — Cooper Black wordmark) but has **zero saved post templates**; the "VCC" kit is a separate golf/country-club brand (keep P&G content off it — entity boundary). Flagged: build ~3–4 P&G Canva templates before Venus's first post. Copied to `png-team-brain/playbooks/content-calendar-month-1.md` + README row; [[index]] + [[dashboard]] updated. Lane: Claude-admin. Next: (optional) build the P&G Canva templates via the connector; Carlos verifies handles/reach + grants Meta/IG/YT access.

## [2026-07-13] decision + build | Venus social + ads handoff architected — new [[venus-social-ads-playbook]] (+ team-brain copy)

Carlos ruled the **full handoff** of social + ads to Venus (she volunteered of her own accord; prior ad experience = cinema + fashion; knows Canva + CapCut; claims ~10K IG + a YouTube channel — verify) and made 4 guardrail calls via AskUserQuestion: (1) scope = **all four lanes** (organic social · Meta ads · creative · strategy input); (2) spend = **capped ~$1,050/mo Advertiser role**, increases/new campaigns → Carlos; (3) content = **weekly-calendar approval, then post solo**; (4) she's the **on-camera bilingual host**. Strategic driver = the **trust gap** Venus is surfacing from leads (the close-side of zero-$800+-tents-closed — paid ads bring them, honest social earns the trust that closes them). Built [[venus-social-ads-playbook]]: four lanes, the solo-vs-Carlos **approval matrix**, brand guardrails (png-voice · no fake urgency · $500+ free proof · P&G-entity/844-only), **trust-weighted content pillars** (35 proof/30 education/25 community/10 promo) + the 18-video shoot list, **Canva Brand-Kit rigor step + CapCut EN/ES captions**, the capped ad role + a **BOF trust-creative** play, weekly cadence + scoreboard, a **graduation model** (autonomy earned), and a Carlos **onboarding checklist**. Rep-facing copy written to `png-team-brain/playbooks/` + README row. Dashboard §4 + header + [[index]] updated. Carlos owns: verify handles/reach, grant the Meta role + spend cap, IG/YT access, build the Canva Brand Kit. Lane: Claude-admin built; Carlos owns access + approvals.

## [2026-07-13] build | Aged-board revival list built + filed ([[venus-work-queue]]); free-proof scoping shipped to creative

Pulled the full live draft board (47 non-completed / ~$58.0K) and built the aged-revival block the recent-cohort close kit left out: **~$14.7K in 4 reactivation whales** now Venus's with the deposit lever — Cristian Lopez #D65 $4,600 (one job, two material options, don't double-count) · Shadi Safai #D83+#D80+#D84 $5,438 · Del Rio #D77 $3,400 · Velia #D48 $1,294 — plus **~$8–9K of dead/phantom to clean off** (#D2/#D3/#D4/#D5/#D74 no-customer, #D50 superseded, #D87 internal) and #D114 German Hernandez $120.73 flagged `proof_accepted`-but-never-invoiced (bill it). Reconciled stale 6/19 Tier-0 numbers (D83 live $3,600 not $4,000; whales moved off Carlos onto Venus). **Free-proof $500+ scoping shipped** to outward creative: catalog PDF re-rendered (badge + 13 footers) + synced to team-brain, mof4 ad re-rendered, Venus email signature, staged Google copy, png-voice trust phrase; live landing page + site CTAs remain the Claude Code half (dashboard item 6). Lane: Claude-admin. Next: architect the Venus social/ads handoff (scoping Qs to Carlos).

## [2026-07-13] decision + update | 7/13 board rulings ratified into the wiki; free proof scoped to $500+; funnel numbers re-verified

Carlos reviewed the 2026-07-13 board packet (close kit + funnel memo) and made four calls. **Ratified into policy** ([[master-price-sheet]] + [[close-cadence-kit]] + [[deal-followup-playbook]] + [[dashboard]]): (1) **Venus's 10% closer's margin, in-trade only** (deposit/pickup/Google review/referral, never an opener, never stacked) — supersedes the old "no discounts without Carlos" for the ≤10% in-trade band; (2) **Deposit-to-Lock, standard on $800+** (50% freezes price + 60-day production slot, balance at proof approval) — supersedes the $900+ split-pay proposal from [[meta-funnel-review-2026-07-09]] rec #6; margin note added (10% off an $800 tent ≈ 50%→44% gross, above the 35% floor). Both were posted to Venus in #promo-and-grow 8:15am and confirmed 9:03am. **Free proof scoped to $500+** across outward creative per Carlos (png-voice trust-phrase corrected; catalog/ads/landing/signature edits queued — [[product-catalog-2026]]). **Agentic-OS go-live confirmed still imminent** (the memo's "declined" line is inaccurate; item 8b 15-min handoff stands). **Venus content lane = receive-ideas-then-decide** (her competitor-IG ideas due 7/14). Also swept stale "Week 1" discount/quote-review clauses (Venus started June 8). Lane: Claude-admin ratified; Carlos owns the rulings + the go-live steps.

## [2026-07-13] lint + query | Board packet re-verified live against Shopify + Meta (workflow wf_ec6c1c9a, 4 agents)

Verified the 2026-07-13 board memo/close-kit + the two repo READMEs against live sources. **Holds:** Meta account 30d $642.28/131/$4.90 exact; every named draft verifies at its amount; the 24-draft $28.1K→$24.2K dedup math is right; 9 closes/$3,624.88 since 6/1 / zero $800+ Meta tents confirmed; both READMEs accurate (Worker /health 200, D1 schema applied, team-brain 12 links resolve, phones clean 844-only). **Corrections filed:** the memo's per-ad split is wrong (EN2 live $504/102/$4.94, not $433/86/$5.04; lines don't sum to its own total); "24 drafts" is a recent slice, not the full board (live = **47 drafts / ~$58.0K**; aged whales D65 $4,600 / D67 $3,550 / D83 $3,600 / D77 $3,400 excluded); "~19 deals" is ~17; **Silvia's $2,200 tent has no draft** (off-Shopify verbal quote); the two new campaigns are ACTIVE (only ad sets paused) + a "Form 2.0 — Copy" ad set is ON but not spending. All folded into [[dashboard]] §1 + header. Free-proof mismatch surfaced (policy $500+ vs outward "on every order") → Carlos ruled scope-to-$500+. Lane: Claude-admin.

## [2026-07-12] update | Wiki sync: dashboard absorbed the AI-ops sprint + creative expansion; back-links + supersede notes

[[dashboard]] updated (header + go-live queue banner + demand-gen 7/11 refresh + three new automation bullets: agentic-OS spine shipped / Proof Factory v2 operational / team-brain live + open items 8b Slack handoff, 8c ad-set go-live). [[index]] header narrative rewritten for the 7/10–12 sprint. [[competitive-war-room]] ad-channel view marked superseded by [[meta-creative-expansion-2026-07]]. [[meta-lead-intake-playbook]] gained the Form-2.0/IG-DM coming-changes note (spec-proof eligibility). [[claude-code]] lane expansion recorded (Proof Factory, Ad Studio, both repos). Lane: Claude-admin.

## [2026-07-12] update | Ad graphics re-rendered in Cooper Black (site display face); png-voice type system reconciled

Carlos asked whether the ad headlines were Cooper Black — they were DM Serif Display (the wiki's documented system), while the live site went Cooper Black titles site-wide on 6/24 with `cooper-black.woff2` in theme assets. Embedded the theme's own woff2 into Ad Studio, switched headline + price faces to the site stack ('Cooper Black','DM Serif Display',serif), em-accents to color-only (no faux oblique), sizes rebalanced for Cooper's width, all 26 units re-rendered + QA'd (bof3 headline tightened). [[png-voice]] visual-system line updated: Cooper Black = display face (site + ads), DM Serif Display = fallback + print-collateral face. Open question flagged for Carlos: move the catalog/proof sheets to Cooper too, or keep serif for print.

## [2026-07-11] build + query | Meta creative expansion: account read, verified competitor intel, 26 static ad units, 18 video ideas, 2 new PAUSED ad sets

Pulled the live account (30d: EN2 86 leads @$5.04 / ES2 29 @$4.69, hooks working, freq <2). Ran the deep-research harness on competitor ads/socials (102 agents, adversarially verified): TentCraft 4.9★ unattackable but ships-not-delivers framing; MVP premium 10×10 $849 + 7–9d door-to-door; BuildASign proof≠delivered documented; Vispronet 1.7★ + surprise fees; whitespace = door-to-door honesty · proof fidelity · transparent pricing · bilingual local. Live Ads Library pull falsified our "nobody offers free proofs" line (Look Our Way 1-hr mockup, Anymade free proof) → copy honesty-corrected to the human-checked/real-product edge; fake urgency confirmed as category default → our honest-deadline angle differentiated. Built Ad Studio (data-driven renderer) + 12 concepts/26 units EN+ES feed+story TOF→BOF, QA'd. 18 video ideas funnel-mapped. Created PAUSED: PNG Leads 2.0 ABO (form-2.0 ad set w/ logo+website+consent spec) + PNG DM ABO (IG-Direct CONVERSATIONS ad set, ice-breakers spec'd). All filed on [[meta-creative-expansion-2026-07]] w/ Carlos launch runbook. Lane: Carlos = forms, ad creation from rendered units, un-pause.

## [2026-07-11] build | Agentic OS Phase B spine SHIPPED — Worker live, D1 ledger, credential-free runner; 15-min Slack handoff left

Built + deployed github.com/UnicoCaly/png-agentic-os: Cloudflare Worker live at png-agentic-os.carlos-154.workers.dev (Slack ingress w/ signature verify + dedupe + `proof:` spec parsing, Zapier lead intake, job API, reaction-approvals allow-listed to Carlos+Venus), D1 ledger created + schema applied, local runner + LaunchAgent wired (Worker proxies all Slack file I/O — bot token never leaves Cloudflare), secrets generated + set, smoke tests green. Fixed a would-have-been-fatal Slack `file_share` subtype bug pre-handoff. Carlos's 15-min go-live runbook: docs/SETUP.md (Slack app from manifest → 2 secrets → /invite bot → launchctl load → test job). Lead-form logo/website field spec: docs/LEAD-FORM.md. Lane: Claude-Code built/deployed; Carlos owns Slack app + form edits.

## [2026-07-10] decision + build-spec | Agentic OS designed under adversarial pressure (new [[agentic-os]])

Ran a 10-agent design workflow (3 independent architectures — ship-fast / SRE / agent-native — x 2 adversarial reviewers each + completeness critic; ~302K tokens). All three converged on the same spine: Cloudflare Worker front door + D1 jobs ledger + webhook-triggered Claude Code routine runtime + Slack reaction-approvals + png-team-brain grounding + locked-prompt image-gen with vision validation. Reviews killed IG/website scraping for speculative proofs (Meta TOS risk to the ad account → replaced with logo/website fields ON the lead form), flagged TCPA on SMS outreach, mandated prompt-injection containment (no agent writes to team-brain; per-job least-privilege), approval allow-lists, a dead-man switch, and caught a real bug (compositor's hardcoded macOS Chrome path — fixed same hour). Gap check re-centered the OS on quote→paid as KPI #1 and designed Venus's reviewer workday. Filed as [[agentic-os]] with the phased build + graduation gates. Lane: Claude-Code builds Phase B; Carlos owns Slack app creation, lead-form edit, spend.

## [2026-07-10] build | Proof Factory v2 — rebuilt on the real production templates (Carlos feedback + template drop)

Carlos reviewed the Bóbame v1 pack: composite mockup not customer-grade (valance-only, "imposed" look) and the flat proof didn't match the real production format. He dropped the actual templates (canopy dieline, 15/20ft long+short sides, fullwall/halfwall, the P&G proof-sheet template, filled example P&G881072). Rebuilt: proof sheet now mirrors the real 17×11 tabloid format (header/checkboxes/spec sidebar/Side A-B-C-D flat panels/mock-up slot/cut line; B & D = long sides); visual mockup pivoted to constrained AI image-gen via a locked per-job genprompt (exact logo, exact hexes, no AI-invented branding) with `--mockup` embed; composite demoted to internal placement reference. Bóbame v2 + a 10×15 two-panel proof rendered + QA'd. Flagged: the legacy template's sidebar carries the Proágo 323 number; rebuilt sheet uses 844.883.3308. Agentic-OS architecture in design (multi-agent workflow running).

## [2026-07-10] update | Proof Factory first live run: Bóbame (logo from Slack → Adobe cutout → proof pack)

Carlos dropped a customer logo (Bóbame — Latino Drinks, boba shop) in #promo-and-grow-artwork-proofer; pulled it via the Slack connector, recovered transparency with Adobe image_remove_background (the connector flattens PNGs to JPEG — documented in `Proof Factory/README.md`), sampled the brand pink (#D00040) from the logo itself, and rendered the 2-page proof pack + mockup in `Proof Factory/out/`. Compositor ~3 s; whole loop ~4 min. Carlos posts the pack back to the thread by hand until Phase B.

## [2026-07-10] build | AI-first Layers 1+2A shipped: png-team-brain repo live + Proof Factory compositor working

Layer 1: private GitHub repo github.com/UnicoCaly/png-team-brain pushed (16 files — rep-facing pricing, product guides, playbooks, SOPs, voice, catalog PDFs, P&G-only phones; confidential scan clean). Layer 2 Phase A: `Proof Factory/compositor.py` + calibrated tent10 template — logo in → realistic mockup (brand-color valance recolor with fabric shading + perspective logo warp on the real Komen tent photo) + 2-page production-proof PDF, ~3 s per render, revisions = re-renders (demo: purple v1 → green v2 in one command). Operating mode: manual trigger from #promo-and-grow-artwork-proofer until Phase B webhook. [[ai-first-architecture]] build-status updated. Lane: Claude-admin/Code built; Carlos to invite Venus to the repo + run the factory on the next live proof job.

## [2026-07-10] decision + build-spec | AI-first architecture: team-brain repo + proof factory + Claude-in-Slack (new [[ai-first-architecture]])

Reviewed the live stack (Slack proofer channel, Shopify/Meta/Gmail/Drive/Adobe/Zapier MCPs) + interviewed Carlos. Measured the proof bottleneck: ~9 jobs/wk through Carlos+ChatGPT, 6–15 min at-desk vs ~20 hrs away (Silvia 7/7→7/8); revisions re-roll everything; pricing/routing Q&A also serialize through Carlos. Underutilized: Adobe vectorize/bg-removal, the verified-idle Zapier Meta-Lead trigger, real install photos, B2Sign dielines. Decisions (Carlos): hybrid proofs (deterministic composites + optional AI glamour) · rep-facing prices IN the team repo · Venus self-serve with Carlos spot-check · API-first, seats later. Architecture filed as [[ai-first-architecture]] (3 layers + build order); platform facts verified via research brief (Claude Tag public beta Team/Ent w/ GitHub grounding; Claude Code routines webhook-triggerable; Agent SDK for tight loops; Managed Agents wrong shape). Lane: Claude-admin/Code builds repo+compositor; Carlos owns toggles/spend.

## [2026-07-10] update | Wiki sync: catalog kit cross-linked into the pages that use it + dashboard asset note

Back-linked [[product-catalog-2026]] from [[close-cadence-kit]] (attach the matching sale sheet to every chase touch), [[meta-lead-intake-playbook]] (catalog on the first-touch email), [[venus-work-queue]], [[lynwood-usd-account]] (interim answer while the district menu is pending), [[free-proof-landing-page]] (QR destination), [[store-and-catalog]], [[product-size-guide]] + [[product-application-guide]] (the fit-guide page distills both). [[dashboard]] updated: new-asset note in the header + this-week sprint banner + a Brand-equity line (neutral facts, dated). Lane: Claude-admin.

## [2026-07-10] update | Catalog kit rev 2 — real install photos from the P&G photos Drive folder + tent-banner price suppressed

Reviewed Carlos's "P&G photos" Drive folder (~130 shots, five shoots) and swapped seven real client-install photos into the catalog + sale sheets, replacing stock mockups: Donut Media 10x10 booth (now the catalog cover + tent-sheet hero), Komen tent valance (tent-banners card), Temple of Gainz 20-ft SEG gym install (20ft SEG card + displays sheet), Red Bull backlit SEG walls (backlit cards), and the space-birthday backdrop + A-frame wrap (pillowcase-backdrop and A-frame cards). Per Carlos: Custom Tent Banners price suppressed to "Priced by size" (was from $16) on all three pieces. PDFs re-rendered + page-QA'd, redeployed to `P&G marketing collateral/Catalog 2026/`; [[product-catalog-2026]] updated with photo provenance + the unused-photo inventory. Note: `CAD_0003.JPG` exceeds the Drive connector's 10 MB limit, unreviewed.

## [2026-07-10] build | 2026 sales catalog kit — 15-page product catalog + tent & displays sale sheets (PDF)

Built the supplemental sales kit per Carlos's ask (format/pricing/language/depth chosen via four decisions: digital-first PDF · live "from" floors · English only · category lookbook). New [[product-catalog-2026]] documents it. Deliverables in `P&G marketing collateral/Catalog 2026/`: `PNG-Product-Catalog-2026.pdf` (15 pages, all 43 active products across 8 categories, fit-guide page, free-proof QR back cover), `PNG-Sale-Sheet-Tents.pdf` (package/price matrix for 10×10/15/20 from the live store), `PNG-Sale-Sheet-Tradeshow-Displays.pdf` (single/double-sided price table + use-case picker), plus editable HTML source + a price-snapshot JSON. Prices pulled live from Shopify 2026-07-10; bundles shown from $848 via the builder per the standing rule; delivery phrased as 5 business days after proof approval. Every page QA'd visually from the rendered PDF. Lane: Claude-admin built; Venus/Carlos distribute (first-touch attachment, quote-chase, print).

## [2026-07-09] update | Dashboard scoreboard reconciled to the 7/9 funnel audit (header + this-week banner + live pipeline)

The 7/9 [[meta-funnel-review-2026-07-09]] had been rolled into the dashboard Meta line + open-items, but three scoreboard parts were left stale — fixed them: (1) **header** still cited the superseded 7/6 "55 leads / $400 / $7.27 CPL" milestone → corrected to the live read (**$5.08 CPL · 99 form / 117 tracker leads · 0 closes**; funnel breaks at logo 10.3% + quote→paid 0/10, ~$13.3–15.2K stuck); (2) **"▶ This week" banner** was 17 days stale (still "Mon 6/22 · ads activating") → rewritten to the current focus (72-hr close sprint · WhatsApp line · speculative proofs · Meta stage-marking); (3) **live-pipeline line** was 6/19 (~$10K warm) → added the current 7/9 snapshot (Meta-cohort ~$13.3–15.2K open / 0 paid + 8 concierge orders since 6/1 = $3,184.56, zero self-serve checkouts store-wide), and marked the 6/19 warm figures as the separate reactivation lane. All numbers sourced from the 7/9 audit; none invented. Lane: Claude-admin (wiki).

## [2026-07-09] update | Filed the two design tournaments as wiki pages + refreshed [[theme-build-status]] (staged: home r2 + bundle builder v2)

The tournament builds were living only in repo folders + operator memory; filed them so the wiki carries the record. New **[[home-redesign-tournament]]** — the reusable method (N distinct variants × buyer-persona judge panel × kill/merge/scoreboard), round 1 (v6 heritage won 201/250 → merged with v4 segments + v2 free-proof engine), round 2's blind champion defense (v9 = round-1 winner, defended 208.5/250 across a fresh panel), the post-merge honesty audit, and the verified staged state (`custom-home-final-r2` in both repo copies of `templates/index.json`; CTAs on `/pages/free-proof`; Carlos-gated flip ships with the 7/07 SEO batch). New **[[bundle-builder-v2]]** — the 2026-07-01 interactive builder tournament (8 working prototypes; v7 gallery 213 / v8 board 212 / v2 canvas 210; base = v8 for intuitiveness 9.2 + conversion 9.0, with v7 brand-swatch + v2 assembly + v6 email-spec grafts; kill lessons: no quiz gate, no gamified discount meter, no cold procurement register), the free-proof-first finish (`_proof_request`-tagged cart → `/pages/free-proof`), and the staged section (`.pgbb2`-scoped, live-price hydration; live bundles template still on v1). **[[theme-build-status]]** got a "Staged, not live" block + the v1-builder live-fix trail (multi-flag qty · variant selection · `available`-field bug → [[site-catalog-fix-backlog]]). **Two pre-flight gaps flagged** (Claude Code lane): bundle-v2 needs a preview-theme smoke test (commerce wiring only statically verified), and `custom-bundle-builder-v2.liquid` is not yet mirrored to the theme_export copy. [[index]] updated (84 pages).

## [2026-07-09] update | Wiki sync: new [[phone-number-map]] + [[lynwood-usd-account]]; work-queue 7/9→7/10 focus; South Gate +Jessica/+Leslie-paid; WhatsApp corrections propagated

Propagated the day's findings across the wiki: **NEW [[phone-number-map]]** (844 = inbound-only, can't register on WhatsApp; new local LA line planned for Venus outbound + WhatsApp w/ caller-ID hygiene checklist; Proágo 323 never on P&G touchpoints) and **NEW [[lynwood-usd-account]]** (Barroso/LUSD CTE — district-menu ask, intro'd, catalog blocked on apparel-scope call). **[[venus-work-queue]]** got the 7/9→7/10 focus block (close sprint on the ~11 open quotes in priority order · 10–20 speculative proofs · cc-hello@/Meta-stage/Est-$ rules · Karen + Barroso + Jessica watch items). **[[south-gate-account]]** updated: Leslie's two orders PAID ($1,384.38; Ana Medina = proof contact; delivery ~Mon–Tue), Jessica Villalobos added as 5th sogate.org contact (banners + bus wrap quoted 7/9), lifetime ≈ $5.1K+. **[[meta-ugc-launch-kit]]** corrected in two places (the 6/30 "WhatsApp is live" claim struck; the 6/22 blocker note superseded with the toll-free root cause) and **[[meta-lead-intake-playbook]]**'s parked-A/B note updated. [[dashboard]] open items 7 (local line) + 8 (LUSD catalog) added; [[index]] updated. Lanes: buy/register the line + apparel ruling = Carlos; catalog draft = Claude-admin on his go.

## [2026-07-09] update | 844 can't verify on WhatsApp (toll-free unsupported — root cause found); second local line planned; speculative-proofs play handed to Venus; Karen answered; Barroso → Venus

Carlos status drop + decision forming: (1) the **844.883.3308 WhatsApp/Meta verification errors are unfixable** — toll-free numbers are unsupported for WhatsApp registration (verification call can't pass IVR; SMS-to-toll-free unprovisioned; confirmed via WhatsApp Help Center + tyntec, 2026-07-09) → plan = a **new local LA-area line for Venus's outbound + WhatsApp**, with the added benefit of beating toll-free spam-screening on outbound calls (Venus's low-pickup reports fit the pattern); 844 stays inbound-only on all collateral; new line must not be a Proágo number ([[png-entity-boundaries]]). (2) **Speculative-proofs play live** — Venus pulling 10–20 logo-silent leads + their logos to open conversations ([[meta-funnel-review-2026-07-09]] rec #3). (3) **Karen/Century Eye Care answered 7/8** by Venus (Carlos-supplied message via Slack; no cc to hello@ — cc rule reinforced). (4) **Juan Barroso (Lynwood USD)** handed to Venus (replied + intro call); blocked on a shareable **district product catalog** — Claude-admin to draft. Review page updated in place.

## [2026-07-09] query | Meta funnel deep read — ads healthy ($5.08 CPL, improving), funnel breaks at logo-collection (10.3%) + quote→paid (0/10, ~$13.3–15.2K stuck)

Carlos asked for a deep ad analysis + funnel math on the 0-close problem. Reconciled five sources live (Meta MCP, the Meta Test Leads sheet, Gmail, Slack, Shopify). Verdict: **don't change creative** — the leak is post-quote. Key numbers: $503 spend / 99 form leads / CPL $5.08 (W2 $4.48); 117 tracker leads (corrects the "28–30/day" figure → actual ~7–11/day); 12 logos; 10–11 quotes (~$13.3–15.2K invoice_sent); 0 paid; zero visible post-quote follow-up on the 6/25–6/29 batch; Meta stages frozen at "Contacted" ×117; WhatsApp still not live; Carlos = single point of failure on price/proof/invoice. Urgent found: Century Eye Care wrong-design complaint (7/8, unanswered) + Jessica/South Gate quote request (7/8, unanswered) + Omar Flores broken proof (10 days). Filed: [[meta-funnel-review-2026-07-09]] (full leak ranking, live-pipeline inventory, hot list, $20K funnel-math scenarios, 9 recommendations w/ lanes); [[dashboard]] Meta bullet updated (7/6 CPL + 6/26 volume figures superseded). Lane: close sprint + stages = Venus; WhatsApp/budgets/access = Carlos; sheet validation + split-pay setup = Claude-admin.

## [2026-07-09] query | Meta Ads access check: no Meta Ads MCP in session; Zapier Lead Ads verified working; relaunch needed to pick up new connector

Carlos asked whether the Meta ads MCP is connected. Findings (all tested live):
- **No dedicated Meta Ads MCP** in this session's connectors (Shopify, Gmail, Drive/Calendar, Slack, HubSpot, Apollo, QuickBooks, Canva, Figma, Adobe, Cloudflare, Zapier only).
- **Zapier → Facebook Lead Ads (read): ✅ verified end-to-end** — auth resolved all 3 FB Pages (Promo N Grow Shop `719222154605537`, Viva La Hustle, Proágo Branding Dept.); live lead query on the Promo N Grow Shop form (`777967735339188`) executed SUCCESS (0 new leads on that poll = normal polling behavior, not an error).
- **Zapier → Facebook Conversions (write): enabled** — 4 CAPI event actions (lead/purchase/funnel/other), untested (real events).
- **No ads-management path exists yet:** Zapier's catalog has NO campaign-insights/spend app (searched "Facebook Ads" + "Meta"; closest = "Facebook Lead Ads (for Business admins)"). Spend/CPL/budget reads need the claude.ai **Meta Ads connector**.
- Carlos reauthorized a Meta ads connector mid-session → **not visible until session restart** (connectors attach at session start). He's relaunching; next session: re-check ToolSearch for Meta Ads tools first thing and run a live read to confirm.
Lane: verification = Claude Code; connector auth = Carlos.

## [2026-07-07] update | SEO polish applied live (Carlos approved 1/2/4): junk hidden, collections + metas + alts set, 3 tent AEO pages published

Carlos returned and approved audit queue items 1, 2, 4 ("Lets polish"); he takes the store rename himself. Applied via Admin API, all verified: **5 junk products hidden** from search/sitemap (2 "Size" artifacts + 3 legacy bundle SKUs, `seo.hidden=1`) · **9 collections** got on-page descriptions + SEO titles/metas from `SEO Audit 2026-07/drafts-content.md` · **3 products** (pillowcase backdrop, a-frame wraps, event backdrop wraps) got SEO metas · **3 tent AEO landing pages created + published** — `/pages/custom-10x10-event-tent`, `-10x15-`, `-10x20-` on the prebuilt `page.tent-10x10/15/20` templates, FAQPage schema + single-h1 verified rendering, SEO title/description metafields set · **31 product featured images** given descriptive alt text (incl. one garbage-filename alt replaced). Still open: Carlos renames store "Promote & Grow"→"Promo & Grow"; homepage title/meta + shop default description pasted in Online Store → Preferences (approved copy in drafts Section 3); the expanded flip command (home r2 + staged SEO theme batch) still not run — live template unchanged since 6/21; AEO articles next session. Lane: API applies = Claude Code; admin bits = Carlos.

## [2026-07-07] build + audit | Full SEO/AEO/GEO audit: 404 CTA caught, LocalBusiness/FAQ/Breadcrumb schema staged, content drafts ready

Carlos requested a full SEO/AEO/GEO audit + polish; scoping questions fired but he went AFK → recommended defaults (full site · fixes + drafts · EN-now/ES-groundwork · lean solo method, deep-workflow declined by default) — **flagged for re-cut**. Full report: `SEO Audit 2026-07/AUDIT.md`; approval-pending drafts: `SEO Audit 2026-07/drafts-content.md`.
- **Critical catch:** all staged CTAs pointed at `/pages/lp-free-proof` — a **404** (real page = `/pages/free-proof`). Fixed 9 files + created a live redirect. The home flip would have sent every visitor's money-click to a 404.
- **Fixed-staged (validated on dev theme, ships with the expanded flip command in AUDIT.md):** title double-brand suppression ("— Promo & Grow – Promote & Grow" on every PDP); meta-description fallback; site-wide **LocalBusiness** JSON-LD (phone 844.883.3308, Lynwood address, filtered sameAs — replaces malformed Organization); **BreadcrumbList** on PDPs; **FAQPage** on the new home; twitter:image + og:image fallback; hero image eager/fetchpriority.
- **Live already:** lp-free-proof redirect. **Blocked pending Carlos:** `seo.hidden` on 5 junk products (2 "Size" artifacts + 3 legacy bundle SKUs whose $668-class prices contradict the $848 builder ruling — GEO wrong-price risk); shop rename "Promote & Grow"→"Promo & Grow"; applying content drafts; creating the 3 tent Pages (AEO templates built but pages never created; blog has zero articles — the AEO machine has no fuel).
- **Healthy:** sitemap/robots/hreflang; `/es/` locale genuinely translated; 27/31 products already hand-optimized; redirects clean. Home page still NOT flipped (live template unchanged since 6/21). Lane: theme code = Claude Code; approvals/admin = Carlos.

## [2026-07-06] ingest | Email analytics (last 4 warm sends) + Meta milestone (55 leads / $400 / 0 purchases)

Carlos dropped 4 Shopify Email report screenshots (`Analytics/`) + reported the Meta milestone. Ingested into [[sent-email-log]] (backfilled the 6/17 SoF + 6/26 4th-of-July sends, added the 7/4 America-250 send, updated the 7/2 teaser with performance; added a performance-at-a-glance table). **Numbers:** all 4 sends to the ~630 warm list — opens **23%** on the three link-carrying emails, **34%** on the America-250 goodwill toast (best; owner from-name + holiday + first working name-merge); clicks **1.7–1.8%** (below the 3% target); **$0 attributed sales / 0 orders on all four** (concierge-close — 0 sessions attributed); **bounce creeping 0.5→0.9%** (at risk — list-hygiene flag). **Confirmed the merge bug in production:** 6/17 subject rendered raw `{{ data.customer.first_name }}`, 6/26 body "Hi ," (blank); **fixed 7/4** ("Happy 4th, Bob."). Corrected the 6/26 send time (2:44pm, not AM) and confirmed **America-250 sent 7/4 8:01am** (open 34%). **Meta:** crossed **55 leads on ~$400 spend, still 0 purchases** (CPL ≈ $7.27; ≤$50 pass-bar cleared on cost, but 0 closes — constraint is close-capacity, not lead cost). Updated [[dashboard]], [[fourth-of-july-email-campaign]], [[summer-of-futbol-campaign]], [[summer-email-arc]], and the [[shopify-email-merge-tag]] memory. Growth read offered (pull-only), not filed. No numbers invented — all from the reports.

## [2026-07-06] update | Wiki reconciled to current send state (closed-Friday sent 7/2; America-250 pending confirm)

Carlos: "update the wiki." No new source in `raw/` and no new results reported, so no ingest — instead reconciled the campaign pages to what's **confirmed** vs. **pending**, since [[sent-email-log]] shows the closed-Friday slot actually went out (as a rewrite) on 7/2 while [[fourth-of-july-email-campaign]] + [[summer-email-arc]] still framed the holiday pair as "pending send." Fixed: (1) the closed-Friday HTML is now marked the **superseded draft** — the slot **sent 7/2** as Carlos's summer-series teaser (diff on [[sent-email-log]]); (2) America-250 = **scheduled 7/4, send confirmation pending** (with the 7/2 body-rewrite reflected); (3) arc status = 0/9 arc emails sent, email 01 due 7/7; (4) [[dashboard]] bumped to 7/6 + warm-list line updated (the weekly-value series is now a standing promise to the list). **Still needs Carlos (asked, AFK):** America-250 7/4 send confirm + as-sent text; opens/clicks for the 6/26 + 7/2 sends; any pipeline/results changes. No numbers invented.

## [2026-07-02] fix + update | Merge-tag bug fixed across all 11 emails + America-250 body rewritten to Carlos's copy

Carlos reviewing the [[summer-email-arc]] drafts: likes the design, wants copy/hook reworks email-by-email, and hit a **merge-data bug** — names not populating when pasted into Shopify Email. **Root cause:** the emails used bare `{{ first_name }}`, which has no variable in scope in Shopify Email → renders blank. **Fix:** Shopify Email's tag is `{{ customer.first_name }}` (confirmed against the store's known-good April reactivation send, which used `{{ customer.first_name | default: "there" }}`). Swept all 11 active emails to `{{ customer.first_name | default: "…" }}` (greetings → "there", mid-sentence vocatives → "friend"); corrected each file's instructional comment; verified 0 bare tags remain. The already-sent `email-en.html` (6/26) left as the historical record with old syntax — flagged that that blast may have rendered blank names. **Also rewrote the 7/4 America-250 toast** to Carlos's supplied copy (added the "same bet we see our clients taking / pursuit of happiness and a more perfect union" line; simplified sign-off to "Carlos with the Promo & Grow team," dropping the Spanish sign-off block — his call, EN-only send). Next: Carlos-led hook rewrites on the remaining emails. Runbook + gotcha documented on [[summer-email-arc]].

## [2026-07-02] update | Filed first as-sent email → new [[sent-email-log]]

Carlos sent the summer-series teaser 2026-07-02 (his rewrite of the `email-en-closed-friday.html` build) and pasted the as-sent text for the record. Created [[sent-email-log]] (running as-sent record, diffed vs. the build) with entry #1. Key deltas: hook pivoted from the shop-closure pattern-interrupt to a **pain-question + "Promote & Grow" brand-pun** subject; new "Stop guessing / Start growing" opener; content promise broadened (retail branding, customer psychology, behind-the-scenes) beyond booths; dropped the July-4 closure notice + Saturday P.S. loop. Flags: subject/preview use "Promote & Grow" (cold-domain phrasing per [[png-domain-map]]/[[png-entity-boundaries]]) on the warm list — deliberate-wordplay-vs-brand-drift call; preview "We're expert at getting you customers" is a stronger DR promise than the built goodwill register; the weekly-value series is now a standing promise to the list. Opens/clicks pending pull. Index updated.

## [2026-07-02] build | Home tournament round 2: champion defended blind (208.5/250), final rebuilt + staged as custom-home-final-r2

Carlos re-ran the home-page tournament with a new judge panel (small-biz owner, farmers-market vendor, school-district director, event coordinator, CPG brand). 8 new hook-distinct variants written; the round-1 winner seeded **blind** as v9. Result: **v9 defended, 208.5/250** — best trust (8.8) + polish (9.1), 40+ from every judge, Jordan's (CPG) top pick — now a replicated result across two different panels. Runners-up: v8 "From Logo to Landmark" 200 (best engagement/relevance), v7 "What's Your Date?" 197 (Angela's + Priya's top pick). **Killed: v2 narrative-story page, 161** ("makes a deadline buyer read a short story to find a price" — Priya). Final = v9 base + grafts: v8 before/after gallery w/ real prices, v7 date calculator, v3 anti-dropship shop section, v4 build-spec standard + honest-review framing, v6 call-before-print + FAQ, v1 all-prices line, new coordinator segment card. Post-merge audit enforced [[proof-vs-design-policy]] (free proof = placement only; "cleans it up free" copy killed), removed an undocumented callback promise, "Save 15%+"→"Save 15%", honest partial 5th star on 4.8★. Files: `Home Redesign Tournament/round-2/` (BRIEF, variants, SCOREBOARD.md, final comp + index.json) + `sections/custom-home-final-r2.liquid` (13 settings, `.pg-home2`-scoped, mirrored to theme_export). **STAGED, not deployed** — live `templates/index.json` untouched; go-live = swap in `round-2/final/index.json` + deploy per workflow + set real photos. Supersedes the round-1 build as the go-live candidate. Lane: Claude Code built; Carlos flips live. See [[theme-build-status]].

## [2026-07-01] build | Summer Email Arc: 11 emails built + 3-lens verified (holiday goodwill pair + 9-email Jul–Sep arc)

Carlos reported the 4th-of-July blast **sent Fri 6/26 AM** ([[fourth-of-july-email-campaign]] updated; opens/clicks pending pull). On his request ("high engagement + curiosity" holiday emails, then the rest-of-summer campaign "for maximum conversion and engagement" with steal-this content and the ingested frameworks), built: the **closed-Friday note** (7/2) + **America-250 toast** (7/4, from Carlos) + the **9-email [[summer-email-arc]]** (Jul 7–Sep 3, weekly; asks 7/7 · 8/13 · 8/20-lite; value = patio promo pack, LA fall-event map, file-check lesson, Carlos's offer lesson, fair-booth playbook, Labor-Day toast). Frameworks: [[email-campaign-engine]] give-to-ask + wrapper variety ("Fall Booth Kit"), [[copywriting-method]] craft, [[png-voice]] anti-AI. Build ran as a 55-agent workflow (draft → voice/honesty/craft adversarial verify → fix; ~110 issues caught + resolved, incl. an 06/07 subject-theme collision and the 6/30 "+ payment" clock language in email 01). Scoping questions fired but Carlos was AFK → recommended defaults chosen (no-pitch holidays, Labor-Day horizon, weekly cadence, all 4 steal-this lanes) — **flagged for re-cut**. Open: email-03 hero photo, Proago-footer call, e09 P.S. alternative, $857-vs-$848.30 price confirm before 7/7. Files: `4th of July Campaign/email-en-closed-friday.html` + `email-en-america-250.html`, `Summer Email Arc/email-01…09.html`. Lane: Carlos/VA to send.

## [2026-06-30] decision + build | Logo-first close plan: WhatsApp + DM ads spec'd, close-kit scripts added, Slack sent to Venus

Carlos's growth-read response + new direction.
- **Diagnosis (from Venus's live sheet, 48 leads):** the funnel is stuck at the **logo** — only ~3 of 48 sent one, and some got quotes before a proof. No logo → no proof → no close. Fix = **proof before price** + conversation funnels that capture the logo in-chat.
- **Two new ads spec'd** → [[meta-ugc-launch-kit]]: **Click-to-WhatsApp** (priority; the number's now live — activate the parked setup) + **Click-to-DM** (lower-lift), both with a **logo-first greeting**; run alongside the form ad, measure on **proofs delivered**. (The instant form can't take a file — that's why the logo stalls.)
- **Close-kit scripts added** → [[close-cadence-kit]]: the **proof-first push** (EN+ES), the **summer/World Cup urgency + flags downsell ladder** (Carlos's untranscribed 6/30 reframe — World Cup live through 7/19; step "out of budget" down to flags), and the **"why didn't you buy?" diagnostic** (price/timing/legit → route each).
- **Slack sent** to #promo-and-grow (as Carlos): the 4 updates (logo-first · summer urgency · downsell ladder · ask-why) + the hot-lead focus list (Omar/Sijifredo/Lupe have logos; Pedro/Jazz/Teresa/Sacha hot) + a heads-up on the WhatsApp/DM ads.
- **Updated** [[close-cadence-kit]], [[meta-ugc-launch-kit]], [[log]]. Nothing in `raw/` touched.

## [2026-06-30] ingest | Two Venus calls filed ([[venus-brief-2026-06-30]]) — subject/script optimization + office-visit policy

Background sweep pulled today's two Carlos+Venus Gemini-transcribed calls + the day's Slack/email/Shopify → new source-summary [[venus-brief-2026-06-30]].
- **Call 1 (9:46am):** the **5-day clock = proof approval + PAYMENT** (intro-email clarity); new **subject lines** (lead with free-proof+logo ask, brand name last); **personalize** + **reply in-thread**; classify leads by ad language (EN/ES); ask decliners why; close the 8 hot leads; Miguel Oroxom tent-proof follow-up; Armon declined.
- **Call 2 (11:16am):** **discourage office visits** (digital proof + online approval, free ship $500+, appointment-only); **call-intro opens with the client's request before "Promo & Grow"**; send the GBP link to verify legitimacy.
- **State:** Venus cleared all 48 leads; **5 new quotes #D103–D107 (~$5.6K)** → open stack #D98–D107; **still 0 Meta closes**.
- **Flags:** Aram + Adrián Almazán → out of budget (set Meta status *lost*); the **323.249.4449** Proágo number reappeared in Carlos's internal signature (recurring boundary slip); the **"5 days from proof approval" → "+ payment"** clarification may need a propagation sweep across PDPs / [[master-price-sheet]] / [[fulfillment-sop]] — flagged for Carlos before editing. Carlos is **live-iterating** the subject lines + scripts, so these are in the brief, not yet baked into [[meta-lead-intake-playbook]] (fold in on his go).
- **Updated** [[dashboard]] (§2), [[index]] (+1 page). Nothing in `raw/` touched.

## [2026-06-30] ingest + fix | Copywriting masterclass ingested ([[copywriting-method]]); bundle size-dropdown bug fixed

Two items.
1. **Ingest** → [[copywriting-method]]: the Sam Parr "Dangerously Good Writer" masterclass (raw PDF dropped 6/30) distilled into the P&G persuasion-craft playbook — headlines (Ogilvy 80% / AIDA / niches-make-riches / punch the first line), open loops + the slippery slope (Sugarman / Cialdini consistency), story (hero=customer, guide=brand / failed-solution / Trojan-horse the product), rhythm + the rules of writing (7th-grade / Hemingway app / one-point-per-sentence / ~17-word avg / kill-your-darlings), objection-handling (pre-empt / personal-anecdote / FAQ), desire-around-price, visceral framing, humor, and the practice method **copywork** (hand-copy great copy ~1hr/day). Mapped to every P&G channel + the swipe-file canon. Reinforces the [[png-voice]] anti-AI rule (the craft layer under it); cross-linked across the copy library; added to [[png-voice]] Related.
2. **Fix (Claude Code)** → the bundle-builder size/variant dropdowns were "not selectable" live: the storefront `/products/<handle>.json` **omits the `available` field** on variants (confirmed live), so the code disabled every option. Changed `variantOptionsHtml` to disable only `available === false` (undefined → selectable, correct for this always-buyable, made-to-order catalog). Pushed live to PromoNGrow/main → "pushed successfully"; mirror synced. Kept the editor's config additions (variants on all slots + the `defaults` block). Needs a hard refresh (browser + page_cache). [[site-catalog-fix-backlog]].
- **Updated** [[png-voice]], [[index]] (+1 page → 80). Nothing in `raw/` touched.

## [2026-06-29] build | Close Cadence Kit — Day-1/3/7 follow-up + objection bank + frictionless pay-link for converting open quotes

## [2026-06-28] update | Monday prep: lead tracker reconciled + 6am game-plan Slack scheduled

Sunday-night prep off Carlos's new Meta lead export (`Meta Lead Tracker/leads 6:28 - Meta.csv`, 37 leads 6/24–6/28).
- **Reconciled tracker** → `Meta Lead Tracker/PNG-Meta-Leads-RECONCILED-2026-06-28.csv`: deduped + prioritized into tiers — (1) the 7 **uncontacted weekend leads** (**Omar Flores** + **Miguel Oroxom** = full-funnel completers, top; + Martha/Adrian/Bernardo/Derrick/Caro, all with phones), (2) the 2 IG DM price-askers, (3) open quotes #D98–D102 (Pedro/Juan/Aram), (4) Lupe (logo received), (5) light-touch warmest→coldest. Cross-checked vs Shopify: **no weekend closes**; Omar/Miguel not in Shopify (completed the Meta high-intent form, not a purchase).
- **Scheduled Slack** (fires **Mon 6/29 6:00am PDT** to #promo-and-grow, posts as Carlos): the day's game plan in priority order + EOD pricing/bundle training + the 10am call. Msg ID Dr0BDT23U53L (cancel/edit via Slack "Drafts & sent" before 6am).
- **Automation answers (for Carlos):** IG/FB auto-reply = a Business Suite **Instant-Reply** toggle (Carlos-VA lane) — copy drafted EN+ES. Meta lead-form → tracker automation = a **Zapier "Facebook Lead Ads → Google Sheets/Slack"** zap (his UI setup; the live trigger can't be built via MCP) — recipe given; manual CSV export + reconciliation covers it meanwhile.
- Nothing in `raw/` touched.

## [2026-06-27] update | Week-1 wrap brief filed + two Venus product guides built (size + application)

Carlos green-lit filing the 6/26 week-wrap call and building the two guides he committed to on it.
- **Source-summary** → [[venus-brief-2026-06-26]]: the 2:59pm PDT week-1 wrap call (Gemini notes + transcript, ES) reconciled with the day's Slack/email/Shopify. Venus over the MBS learning curve + internalized multi-touch selling; **~28–30 leads/24h**; the volume→algorithm-training strategy (5–10 conversions); Carlos's 4 action items; new quote **#D102 Pedro $944**; Leslie/South Gate paid; Monday Andrea Rivera 5k business-cards reorder; the 1×6-banner coaching moment.
- **[[product-size-guide]]** (new): every product's real dimensions (ft+inches) with human-scale anchors, the 1×6-vs-real-banner lesson, size warnings. Venus-facing visual = `Venus Onboarding Kit/PNG-Product-Size-Guide.html` (printable, branded, to-scale silhouette SVG).
- **[[product-application-guide]]** (new): outdoor-ready vs indoor/sheltered-only vs either — grounded in materials (tents 600D/aluminum = outdoor; SEG/tension fabric = indoor wind-sail; etc.) + call scripts; uncertain items flagged *(confirm)*. Venus-facing = `Venus Onboarding Kit/PNG-Product-Application-Guide.html`.
- Pulled live from Shopify: the "1×6" = the **6'×1' tent-banner valance**; standalone vinyl 2×4–5×10; backdrop tent banners 8'×3/4/5'; teardrop flag is a real product (7/9/12.2/13.5 ft).
- **Updated** [[dashboard]] (§2 funnel + last-updated), [[index]] (+3 pages → 79). Nothing in `raw/` touched.

## [2026-06-26] update | 4th of July warm-list email — EN plug-and-play HTML on the SoF framework

Carlos asked for an email campaign in the [[summer-of-futbol-campaign]] framework + aesthetic, off the 4th-of-July creative he made. Built EN only.

- **New page** → [[fourth-of-july-email-campaign]]: one warm-list blast riding the SoF moment (July 4 weekend + matches through July 19). Hero = Watch-Party Kit (Event Pro Bundle, starting at $857, save 15%, free shipping via SHOWUP); conversion = reply / free proof to the [[concierge-close]], never "buy now." Warm Shopify list only (Reactivation + `int:tents`), EXCLUDE `DNC:institutional`, from Venus, reply-to hello@promongrow.com, UTM `4th-of-july-2026`.
- **Artifact:** `4th of July Campaign/email-en.html` — cloned section-for-section from `Summer of Futbol Campaign/email-en.html` (same navy/copper system, Georgia+Arial, bulletproof CTA, `{{ open_tracking_block }}`). Header recreates the creative as editable HTML (★★★★★ + "4th of July ready." navy band) over the hosted fan-zone photo. **Render-verified** in the browser (local `png-campaign-static` server): all sections present, CTA UTM intact.
- **Honest-timing decision:** no hard "ready by the 4th" guarantee (a 5-day order this weekend lands after Sat 7/4) — drives to reply → Venus gives the real date, leans on the July-19 window. Protects the "5 days, hit 5 days" rule. Flagged Carlos's original "Order by Monday" creative as too tight; he changed it to "Order this weekend" (a small "be" typo remains on the creative).
- **3 EN subject options** (benefit live), full EN body filed on the page. **Pending (Carlos/VA):** confirm $857 vs builder floor (~$848), load into Shopify Email, send. **Open:** ES/Spanglish variant + Email 2 "last call" (~7/1) not yet built.
- Index + the [[summer-of-futbol-campaign]] / [[email-library]] cross-links updated. Nothing in `raw/` touched.

## [2026-06-26] update | Bundle builder flag size/variant selection + copper bundle popup (shipped live)

Second build pass on the bundle builder + the bundle popup (Claude Code lane), all pushed live to PromoNGrow/main and auto-committed to GitHub by Shopify's integration.
- **Flag size/variant selection** ([[site-catalog-fix-backlog]] item 3): added opt-in `"variants": true` on `choice` slots → a size/options dropdown (the product's variants — Size + Printed Side, $120–$250) drives price + cart line. Enabled on the Event Pro flag slot. Backward-compatible.
- **Dead handle removed:** `feather-convex-flag-copy` (Teardrop) doesn't exist → dropped from the flag options + the exit-popup image ref.
- **Bundle-savings popup → copper** (item 4): recolored `#png-popup-bundle` to copper bg + light text (scoped); hardened the JS against blank/placeholder reveals. **Could not reproduce the reported "showing code" glitch** from the templates/CSS (clean) — awaiting a page URL + screenshot from Carlos.
- **Deploy + git:** `shopify theme push --only` (4 files) → "pushed successfully"; Shopify's GitHub integration auto-committed the pushes to origin/main (13 "Update from Shopify" commits; origin byte-identical to the changes). Realigned local to origin (redundant local commits dropped; nothing lost — content is on origin + live). Foreign uncommitted `layout/theme.liquid` change (not this session's) left untouched + flagged.
- Files: `sections/custom-bundle-builder.liquid`, `assets/custom-styles.css`, `snippets/popup-bundle-savings.liquid`, `snippets/popup-exit-bundle.liquid` (+ mirrors). Nothing in `raw/` touched.

## [2026-06-26] update | Bundle-builder multi-flag fix · success scorecard filed · Venus first-solo-quote milestone

Acting on Carlos's go on three items.
1. **Bundle builder — multi-flag fix (Claude Code lane, 🟢 pending deploy).** Aram (#D100/#D101) wanted a tent + multiple flags; the builder only allowed one. Added optional **per-slot quantity** to `sections/custom-bundle-builder.liquid` — a `choice` slot with `"qtyMax": N` renders a Qty 1–N selector, price = unit × qty, cart line carries the quantity (identical variants aggregate); backward-compatible (slots without `qtyMax` unchanged). Enabled on the Event Pro **flag slot (qtyMax 4)**; added `.png-bb__select--qty` to `assets/custom-styles.css`. Internally the add-to-cart payload moved from a flat variant-id list to `{id, quantity}` line items (`data-lines`); verified no stale `data-variants` refs remain. **Pushed live 2026-06-26** (`shopify theme push --only` → "pushed successfully"; mirror copies synced first); browser smoke-test pending. New page **[[site-catalog-fix-backlog]]** tracks this + the open "removable/optional slot" follow-up.
2. **Success scorecard** → folded into [[meta-ugc-launch-kit]]'s pass/fail section (replaced the stale $600-AOV gates): real **~$1,200 tent AOV**; **CPL · lead→close · qualified→close** floor-bar-goal; derived **CAC ~$300 / ROAS ~4× at the bar**; the lead-quality-vs-close diagnostic; the ~$400 / 2-week decision window; the ROAS/CAC-lag + LTV-upside caveats.
3. **Venus milestone** → [[venus-onboarding-kit]]: logged her **first solo quote, end-to-end, no step-in (2026-06-26)** — the Foundations-gate signal she's ready for the [[design-price-rubric]] + [[master-price-sheet]] handoff.
- **Updated** [[meta-ugc-launch-kit]], [[venus-onboarding-kit]], [[index]] (+ new [[site-catalog-fix-backlog]]; 74→75 pages). Code: `sections/custom-bundle-builder.liquid`, `assets/custom-styles.css`. Nothing in `raw/` touched.

## [2026-06-26] update | Meta funnel: channel reality fix + 2nd-campaign as-built filed; consolidation call

Working session with Carlos on the live Meta funnel (swept Gmail + both Slack channels + Shopify + the GA/Meta analytics drop in `Meta Lead Tracker/Analytics/`).
- **Channel reality fix** → [[meta-lead-intake-playbook]]: the Meta **instant form passes no IG handle** — a form lead is **email (+ phone on the high-intent form)**, so first contact = **email + call**, not DM+email. The IG inbox is a *separate* stream (people who DM'd @promongrow); Venus needs **messaging access on the IG asset** to reply (Business Settings → IG accounts → add her → manage messages). Reframed the first-touch heading/scripts, the first-contact rule, the funnel diagram, and the owner lanes. **Venus's focus = artwork → quote → push to approval + payment** (Carlos: forgo the tracker-column add for now; no Slack message sent).
- **Second campaign as-built** → [[meta-ugc-launch-kit]]: filed the Ads-Manager structure export — campaign/ad-set/ad IDs, lead-form IDs, pixel, geo, targeting, budget, as-run copy — plus a **clean-test fix list** (CBO→ad-set budget · EN Dynamic-Creative vs ES single · ES-only detailed targeting · EN form→high-intent w/ verification · age mismatch) and **two live copy bugs** (literal `**markdown**` in the EN ad; "well"→"we'll"). Carlos owns the ad-set-budget + EN-form swap 6/26 AM.
- **Strategic call (senior-exec lens):** don't run both campaigns as a standing setup — the boost proved cheap leads exist; ride it out, consolidate onto the Ads-Manager campaign as the one scalable engine. At $35/day the constraint is **close-capacity, not budget** → the priority is the **first close**.
- **Live state observed (not changed):** ~13 first-touch emails out, **4 quotes** — #D98 $2,500 / #D99 $1,400 (Juan, ES) + #D100 $1,040 / #D101 $1,840 (Aram, EN); Leslie/South Gate #D96 $800 + #D97 $450 paid; **Leslie tent proof #P&G881072 REJECTED** ("with the pool" — needs revise + re-proof). The **323-249-4449** number leaked into Venus's live emails from her installed Gmail signature (the repo signature templates are already correct at 844-883-3308) — operational swap, no file change. GA can't see the funnel (instant-form leads never hit the site; "qualified/converted leads = 0" is a tracking artifact, not reality). The GA $1,250 revenue = Leslie's two orders.
- **Updated** [[meta-lead-intake-playbook]], [[meta-ugc-launch-kit]], [[index]]. Nothing in `raw/` touched.

## [2026-06-25] ingest | Venus 6/25 morning brief (Gemini notes + transcript) → [[venus-brief-2026-06-25]]

Ingested the Google Doc "Meeting started 2026/06/25 09:57 PDT — Notes by Gemini" (notes + full transcript) from Carlos's Drive — the check-in behind this morning's Slack brief.

- **New source-summary** → [[venus-brief-2026-06-25]]: **~7 Meta leads in ~15 hrs** (ad started ~6pm 6/24), reading as real businesses; Venus = central comms hub (calls/DMs/emails, + WhatsApp once the 844 lands); a **second high-intent ad** is warming (will add phone+email+IG); the DM+email two-point contact + the data to collect (logo first, then what they want, then phone + address for the estimate); **Meta status discipline = intake → qualified → converted → lost**, which *feeds Meta's ad algorithm* (the real reason to log it); the per-lead **5-day follow-through** (Day-1 logo/specs, Day-2 proof + commit, daily after); estimate in Shopify (Carlos reviews) → proof to #promo-and-grow-artwork-proofer → **Proofer-app access** for Venus (EOD); post-week-1 weekly/biweekly nurture.
- **Phone-number correction (Carlos 2026-06-25):** **P&G's inbound line = `844.883.3308`** (toll-free; WhatsApp install pending). The Gemini auto-notes recorded a different number as "validated" — an unrelated line Carlos was testing, **not a P&G number** — so it's excluded. Also flagged that the source proof-template PDF prints a non-P&G number (`323.249.4449`) to be corrected, and fixed the email-signature drafts in [[meta-lead-intake-playbook]] to 844.883.3308.
- **Updated** [[meta-lead-intake-playbook]] (Meta statuses + rationale, data-to-collect incl. phone/address, the 6/25 7-leads + 5-day cadence note, Proofer-app handoff), [[dashboard]] (§2 ~7 leads), [[venus-work-queue]] (today's focus), [[index]] (header + Concepts entry + 73→74). Nothing in `raw/` or the Drive doc modified.

## [2026-06-25] ingest | Reviewed the Cold Email Program PDF kit → new consolidated [[venus-email-engine]]

Reviewed all 7 PDFs in `Cold Email Program - PDFs/` (00 Cold-Cadence-Supplement, 01 Training-Module, 02 Email-Writing-Engine, 03 Cold-Reply-Playbook, 04 Setup-Sheet, 05 Cold-Email-Sequence, 06 Growth-Offensive) — a ~6/21 snapshot that mirrors the existing cold-email wiki pages. Built a **new consolidated master engine** for Venus.

- **New page** → [[venus-email-engine]]: the v2 rebuild — the machine-prospects/Venus-closes frame, the two lanes (INBOUND live now / OUTBOUND cold email July), the three moves, the cadence, the drafting pointer, the reply triage + branches, segment angles, the warm-list layer, the daily rhythm, a quick-ref card, and a **components map** of the 7 PDFs → their live wiki pages. Orchestrates, doesn't duplicate.
- **Three currency fixes vs the PDFs** baked into the new engine: (1) **inbound is LIVE** (Meta, [[meta-lead-intake-playbook]]) — the kit framed cold email as the headline + ads as "coming"; (2) **anti-AI voice** (the PDFs are full of "quick one / happy to / quick question" — pre-6/25 scrub); (3) **cold domain = `promoteandgrow.com`** — the PDFs use the retired Whisper typo **`promotengrow.com`**.
- **Audit:** grepped the wiki — the only `promotengrow` hits are explicit "this was corrected" notes; the live pages ([[cold-email-setup-sheet]] etc.) already use `promoteandgrow.com`. **So the stale domain lives only in the printed PDFs, not the wiki.** Flagged the PDFs as a superseded snapshot — re-export from the current wiki before printing/sharing.
- **Updated** [[index]] (header + Concepts entry + 72→73). Nothing in `raw/` or the PDFs modified (they live at repo root, not raw/).
- **PDF exports (2026-06-25):** branded **`PNG-Venus-Email-Engine.pdf`** into `Venus Onboarding Kit/PDF/`, and the **corrected V2 kit** (7 docs, 00–06) into a new **`Cold Email Program - PDFs V2/`** folder — re-rendered from the current wiki via a markdown→branded-PDF script. The old `Cold Email Program - PDFs/` folder is kept as reference (stale promotengrow.com / pre-anti-AI).

## [2026-06-25] update | Anti-AI voice v2 sweep across the outward-copy library

Ran the new [[png-voice]] anti-AI rule across the script-heavy pages (4 parallel passes; outward customer copy only — plain wiki prose left untouched). Each page's "Last updated" bumped to 2026-06-25 with a "v2" note.
- **[[deal-followup-playbook]]** — 9 blocks: the cadence templates, the FU1/FU2/FU3 micro-sequence, the 1-2-3 / diagnostic lines, the takeaway / down-sell / nurture, and the 8-line objection bank.
- **[[cold-reply-playbook]]** — the 3 reply branches (EN+ES) + the SMS/WhatsApp first-text.
- **[[email-library]]** — the bilingual abandoned-cart nudge. **Caught + fixed a real SLA-honesty violation:** the ES line read "Entrega *garantizada* en 5 días hábiles" (an unconditional "guaranteed" day-count, against the brand rule) → corrected to "Entrega en 5 días hábiles desde que apruebas el proof." [[reactivation-email-sequence]] had no deliverable customer copy (all analysis) — parity note added, no copy changed.
- **[[cold-email-sequence]] + [[cold-email-segment-copy]]** — Touch 1/2/3 bodies + subjects across all segments + the subject-line banks.
- **[[venus-email-writing-engine]]** — the 7 worked examples revised AND the **3 AI drafting prompts hardened** with a baked-in "No AI-tells" clause (kill-list + em-dash cap + read-aloud test) — the highest-leverage edit, so every future generated draft comes out clean.
- Preserved everywhere: "5 business days from proof approval" (never "guaranteed"), free-proof framing, the $500+ rule, Touch-1-no-link, bilingual ES/EN parity, markup + [[links]]. Spot-checked the prompts + the SLA fix — clean. Nothing in `raw/` touched.

## [2026-06-25] decision | Anti-AI voice rule added; Meta copy scrubbed; protocol card sent to Slack

Carlos: kill "quick one" and revise the outward voice so it doesn't read AI-generated.
- **[[png-voice]] — new "anti-AI rule" section:** a kill-list of AI-tell phrases ("quick one," "happy to," "I wanted to reach out," "feel free to," corporate filler) + structural tells (em-dash overuse, reflexive rule-of-three, over-politeness, every sentence starting "I") + the read-aloud test. Standing rule for all outward copy; Last-updated bumped to 2026-06-25.
- **Live copy scrubbed:** the Raw Edge first-touch DM + email (removed "quick one" / "happy to"; warmer, fewer dashes) in [[meta-lead-intake-playbook]] + a fresh revised **Gmail draft** (the earlier Raw Edge draft can be deleted); the cadence Touch-3 "happy to" line; the Leslie follow-up ("two quick updates" → human) in [[venus-work-queue]]. La Joya ES copy left as-is (already clean ganas).
- **Slack:** *sent* the First-Contact Protocol card to #promo-and-grow (points to the printable PDF in Venus's kit).

## [2026-06-25] update | Meta Test Leads tracker + email drafts; proof/production templates ingested; Leslie tent+posters → Venus

Execution day off the Meta launch. Carlos green-lit the sheet build + email drafts and dropped the proof/production templates; plus a live fulfillment follow-up for Leslie.

- **Meta Test Leads tracker built** → `Meta Lead Tracker/PNG-Meta-Test-Leads.csv` (the separate pre-Shopify sheet spec'd in [[meta-lead-intake-playbook]]), **two leads pre-filled** (@lajoyacatering + @rawedge.la) with next-action + notes. Importable to Google Drive (mirrors the Fishing-sheet pattern).
- **Email versions** of the two first-touch DMs added to [[meta-lead-intake-playbook]] (La Joya ES / Raw Edge EN; send from venus@, CC hello@).
- **Proof + production templates ingested** → new [[proof-and-production-templates]]: the **P&G proof/approval sheet** (per-job fields finish-size/qty/material/lamination/notes/proof-version `#00XXXXX Vn`; the 4-point approval checklist; the "written approval = production may proceed, no further changes" agreement = the literal post-approval lock + 5-day-clock start) and the **B2Sign event-tent canopy dieline** (CMYK · **150 dpi** · flatten + outline text · PDF/JPG · **safe 115"×78.85"** · **bleed 119"×84.28" / 2"**). Wired into [[file-prep-gate]] (added a per-product-specs note) + the proofer handoff in [[meta-lead-intake-playbook]]. Blanks in `raw/`; **[Carlos to provide: completed past proof + production files]** for reference.
- **Leslie Consuegra — tent + posters → Venus (Carlos 2026-06-25).** Both orders on Shopify. Tent: artwork being prepared, **free proof out first thing AM**. Posters: **9 designs, only 1 correctly sized at 24"×36"** → bounce the other **8 to resend at 24"×36"** ([[file-prep-gate]]). Filed the follow-up draft + a dated focus block in [[venus-work-queue]]; recorded Leslie as a **4th `sogate.org` buyer** on [[south-gate-account]] with the lane-change flag (**institutional/DNC exception** — normally Carlos-only; confirm if this is a standing reassignment or one-off).
- **Connector actions (staged for review, not sent):** created the live Google Sheet `PNG · Meta Test Leads` (Drive, two leads pre-filled), two **Gmail drafts** (La Joya ES / Raw Edge EN, in carlos@proagobranding.co box), and a **Slack draft** of Venus's morning brief in #promo-and-grow. Confirmed **#promo-and-grow-artwork-proofer already exists** (created 2026-06-21, `C0BBY6AJJEP`). Locked the **DM + email simultaneous first-contact rule** (Carlos 2026-06-25) into [[meta-lead-intake-playbook]].
- **Printable supplement** for Venus's kit → `Venus Onboarding Kit/PDF/PNG-First-Contact-Protocol-DM-Email.pdf` — a branded one-page reference (the first-contact rule + the 4 things + the 3-step move + the cadence + the "always" reminders).
- **Updated** [[index]] (header + Concepts entries + 71→72), [[file-prep-gate]], [[venus-work-queue]], [[south-gate-account]], [[slack-workspace-setup]]. Nothing in `raw/` modified.

## [2026-06-24] update | Meta funnel LIVE — first two leads in; Venus's full intake→close playbook filed

The UGC ad went live as a **Meta native instant lead form** (not WhatsApp, not the website LP — both superseded): one campaign, two ES/EN ad sets, $35/day. **First two leads same night** — Salazar Mario / **@lajoyacatering** (La Joya Catering, bullseye ICP) 9:57 PM + **@rawedge.la** 10:52 PM — at **$2.79/lead** (n=2, directional). Both arrived **handle + email, no phone** (standard EN form). Carlos gave Venus Meta access (messages/calls/leads) — she owns the funnel solo.

- **New page** → [[meta-lead-intake-playbook]]: the 8-step play (intake → 60-sec IG research [[show-me-you-know-me-method]] → first touch IG DM+email → logo+spec → estimate off [[master-price-sheet]] → artwork to **#promo-and-grow-artwork-proofer** → proof → quote in Shopify → an **aggressive-but-thoughtful cadence blending [[show-me-you-know-me-method]] (Sam) + [[outbound-method]] (Connor)**). Includes the two live leads + tailored ES/EN first-touch scripts, a **separate pre-Shopify "Meta Test Leads" sheet** spec, the lead-form A/B reality, and Meta-stage logging discipline.
- **Interim proof process:** Venus/AI post logo+spec to the new **#promo-and-grow-artwork-proofer** Slack channel → Carlos makes the proof (SOP/doc) or routes to **graphxsource** (his account) → until a part-time remote designer. Future **press team (human+AI)** to be built around the channel. Added to [[slack-workspace-setup]].
- **A/B reality (flagged for Carlos):** the "WhatsApp vs lead-form" test can't run yet (WhatsApp number still pending); the clean move now = switch **both** ad sets to **high-intent (phone)** for a clean ES-vs-EN read + to fix the no-phone gap (expect higher CPL / lower volume). Kill the duplicate app-made ad; turn off the Proofer-app auto-follow-up so it doesn't collide with Venus's cadence.
- **Updated** [[meta-ugc-launch-kit]] (ACTUAL-live banner: native instant form + first leads + open items), [[dashboard]] (§2 first paid leads + $2.79 CPL), [[index]] (header + Concepts entry + 70→71). Nothing in `raw/` touched. **Open (Carlos):** create the proofer channel; switch both forms to high-intent; kill the dup ad; turn off Proofer follow-up; WhatsApp number; keep Meta lead stages current.

## [2026-06-24] decision | Design-fee rubric Tier-2 bumped (Carlos) — vectorize $50 / detailed $80 / light layout $70

Carlos raised the Tier-2 file-fix fees on [[design-price-rubric]] (simple vectorize $35→**$50**, detailed-logo $65→**$80**, light layout $50→**$70**; multi-piece $85 unchanged). Synced the worked-examples table, the bump-signal reference, and the vectorize script inside the rubric, plus the cross-refs on [[proof-vs-design-policy]] and [[master-price-sheet]] so no page shows two prices for the same service. Tier 3 ($95/$175/$295+) and the $500+ credit rule unchanged.

## [2026-06-24] decision | Design fees resolved → design-price-rubric + SOP-08 (Venus's full design game plan)

Carlos confirmed the design-fee numbers that were TBD on [[proof-vs-design-policy]], closing the "set the design fees" open item from the earlier 6/24 entry. Decisions: **flat tiers** (not hourly, so Venus quotes off a sheet) **+ a complexity-rating reference** (Carlos's ask — so she rates a job herself), **mid-premium** rates, **$500+ credit-only**.

- **New page** → [[design-price-rubric]]: the Venus-facing design counterpart to [[master-price-sheet]]. Tier 2 file-fix/light = $35 simple vectorize / $65 detailed-logo (crest/emblem/mascot) / $50 light layout / $85 multi-piece. Tier 3 custom = $95 simple / $175 standard / $295+ complex (→ confirm Carlos). Proágo = logo/brand creation, crest/mascot *from scratch*, wraps/channel letters, or past ~$300 / ~3 hrs. Includes the **complexity-rating reference** (the one question + 6 bump signals + a worked-examples table), the $500+ credit rule, revisions, and ganas-voice scripts.
- **SOP-08 — Charging for Design** added to [[sop-library]] (catalog row + decision-flow section): file-prep gate → placing/fixing/creating → rate the tier → quote before the work → revisions/lock. The operational counterpart to the policy; numbers live on the rubric.
- **Updated** [[proof-vs-design-policy]] (TBD prices → confirmed; "Open items" → "Resolved 2026-06-24"; rubric linked), [[master-price-sheet]] (design-fee callout + related link), [[index]] (header + Concepts entry + SOP-01–08 + page count 69→70). Nothing in `raw/` touched. **No open items** — the design game plan is complete and runnable; a Loom for SOP-08 can be filmed later (optional).

## [2026-06-24] update | Meta launch prep: Spanish LP, pixel consolidation, kit funnel pivot, proof-vs-design policy

Session supporting Carlos building the first Meta campaign + a Spanish landing page.

- **Dedicated Spanish landing page** → [[free-proof-landing-page]]: **/pages/prueba-gratis**, Spanish-first via the same template (defaults to ES on `page.handle == 'prueba-gratis'`; EN stays `/pages/free-proof`). All Spanish triple-checked + refined for **neutral Latin American Spanish** — fixed a grammar error ("la ganas"→"las ganas"), a regionalism ("banqueta"→"callejero"), Mexican slang ("de volada"→"a última hora"), anglicisms (booth/setup/wall-art/Trade-Show), calques ("te regresamos"→"te enviamos", "planeamos hacia atrás"→"planeamos todo a partir de…"). Live but unadvertised pending Carlos's native read; refinements synced to png-v9/v10; Spanish `<title>`/meta added.
- **Meta pixel consolidation** → [[conversion-tracking-setup]]: the "pixel not recognized" issue = multiple Business Managers + 4 accidental empty pixels (incl. `850250664585586` "Proofer Adds"), with the ad defaulted to an empty one. Canonical pixel = **`1205589804645510`** (active, ~2.1K events/28d, installed site-wide). Fix: assign it to the ad account + select it; rename the empties "DO NOT USE." Confirmed the Meta Pixel IS installed/active on the LP (fbq + PageView + Lead via the bridge).
- **Kit funnel pivot** → [[meta-ugc-launch-kit]]: WhatsApp number still blocked → first test drives to the **website LP** (EN→/pages/free-proof, ES→/pages/prueba-gratis), objective Website/Leads optimizing for Lead. **One campaign, two ad sets** (Set A ES / Set B EN; audience + language are ad-set-level). Attribution = **7-day click / 1-day view, NOT incremental** (too little volume/history; muddies the cost-per-lead gates). Creative caveat noted ("message me your logo" reads WhatsApp-y for a website ad).
- **New page** → [[proof-vs-design-policy]]: offer architecture for revisions + design charges. Governing line = **place YOUR art (free proof) vs. create art (paid design)**; 3-tier ladder (free proof / file-fix / custom-complex → Proágo); ~2 free placement-revision rounds; **design fees TBD (Carlos to set)**.
- **Index updated** (header + Concepts entries for the ES page + proof-vs-design). Nothing in `raw/` touched. **Open (Carlos):** native read of the ES page before advertising; set the design fees; the WhatsApp number (then flip the swap-back); finish the pixel-to-ad-account assignment in Meta.

## [2026-06-24] update | LP finalized: Cooper Black titles (site-wide), email-everywhere interim, /pages/free-proof, real product photos

Iterative session on the [[free-proof-landing-page]] (live = the `page.lp-free-proof` Shopify template; png-v9/v10 standalones kept in sync).

- **URL finalized:** `/pages/free-proof-test` → **`/pages/free-proof`** (pageUpdate via Admin API; title de-TEST'd; old URL 404s). Carlos confirmed the on-submit form test passed.
- **Title font → real Cooper Black, site-wide.** Carlos supplied the licensed `COOPBL.TTF`; converted to `assets/cooper-black.woff2` (43KB), `@font-face` in `theme.liquid` critical CSS, `--png-font-display` switched to Cooper Black in `theme.liquid` + `custom-styles.css` (+ the one hard-coded hero ref). Headings render `font-weight: normal` (Cooper Black's native weight). A free **Fraunces** stand-in (opsz 9 / SOFT 100 / wght 900) shipped first while sourcing the real font. Homepage + LP both serve it (woff2 200). Webfont licensing (URW/Monotype) flagged to Carlos as his call. [[theme-build-status]] Conventions updated.
- **WhatsApp → email everywhere (interim).** All touchpoints (2 in-form logo prompts, quote-section contact line, footer link) → hello@promongrow.com or removed where email already listed; floating WhatsApp button hidden. In-code `WHATSAPP SWAP-BACK` comment marks every spot for a trivial flip-back when the (844)→WhatsApp number goes live. (Earlier same session: post-submit success CTA + the bilingual-human-section button also → email.)
- **Product cards:** 5 of 6 "Pick your piece" callouts updated with Carlos's mockup photos (from `Landing Page - Outbound + PPC/images/`): Tents=Pistons & Butter, SEG=Pillar & Hops, Table Covers=branded stretch throw, Flags=feather-flag pair, Bundles=Run Club kit. HEIC converted; all optimized to 4:3 800×600 JPEGs at `assets/lp-card-*.jpg` (CDN 200). Banners & Wall Art unchanged.
- **Pages updated:** [[free-proof-landing-page]] (current-state section + summary), [[theme-build-status]] (fonts). **Caveat:** Shopify `page_cache` shows stale anonymous HTML after a push — verified via push-success + direct asset 200s + a local v10 render. Nothing in `raw/` touched. **Open (Carlos):** real WhatsApp number (then flip the swap-back), publish Privacy Policy, confirm Store contact email, updated booth photos.

## [2026-06-22] fix | Domain map finalized (Whisper dictation error corrected) — promongrow.com = store+daily+CC, promoteandgrow.com = cold outbound only; promotengrow.com retired as non-domain; 6/21 rename re-audited

Carlos's final canonical domain map (the prior `promotengrow.com` map came from a Whisper Flow dictation error):
- **`promongrow.com`** = the store / website domain **AND** Venus's daily / INBOUND email (`venus@promongrow.com`) **AND** the company CC inbox (`hello@promongrow.com`).
- **`promoteandgrow.com`** = the **separate cold-outbound email domain only** (`venus@promoteandgrow.com`).
- **`promotengrow.com`** = **NOT a real domain** — a typo / dictation artifact, retired; it must not appear as a live reference anywhere (only inside historical/typo notes).

Corrected the wrongly-recorded `venus@promotengrow.com` / `hello@promotengrow.com` to `venus@promongrow.com` / `hello@promongrow.com` on the live pages ([[apollo-two-brand-setup]], [[cold-email-setup-sheet]], [[venus-launch-training-2026-06-22]]) and recorded the canonical map there + on [[dashboard]] / [[index]]. **The 6/21 `promotengrow → promoteandgrow` rename was re-audited 2026-06-22:** every `promoteandgrow.com` mention is in cold-outbound / deliverability-infra context (cold-email-sequence, cold-email-setup-sheet, cold-email-segment-copy, growth-offensive, growth-offensive-v2, summer-of-futbol-campaign, apollo-two-brand-setup), so all are KEPT — no over-correction found, no revert needed. **The "promotengrow.com is a real active domain / re-audit needed" flag is RESOLVED** (voided). (source: Carlos final domain correction 2026-06-22)

## [2026-06-22] direction | Week re-scoped to UGC/inbound-first (outbound deferred); free-proof $500+ ruling; cold email held; domain map set (promotengrow re-audit flagged); Shadi status; UGC + WhatsApp notes

Carlos's 2026-06-22 evening direction (post-training debrief) — applied as additive, dated edits across the affected pages. Source for all of the below: Carlos direction 2026-06-22.

- **A) Week re-scope — UGC/inbound-first; outbound deferred.** Re-sequenced this week to the **UGC → Meta ad → WhatsApp** inbound funnel (the easy, high-leverage lift). **Outbound (cold calls + cold email) and the full sales seminar are DEFERRED this week** (need more finesse/infra/reps). The Monday training was **cut short** (too many PDFs to navigate live) → **RE-RUN 2026-06-23, tightened + UGC-focused.** Edited: [[launch-week-roadmap]] (re-scope banner + goal + lane table + Monday/Tue gates + resources), [[venus-sales-seminar]] (deferred banner), [[growth-offensive-v2]] (this-week sequencing note).
- **B) Free-proof RULING — RESOLVED.** Free proof = **$500+ big-ticket items only** (tents, displays); items under $500 (business cards, brochures, flyers) get **NO free proof — design is charged**, even at high quantity. Website already reflects it. Flipped the "unconfirmed/Carlos to clarify" note on [[venus-sales-seminar]] Part 5 + [[venus-launch-training-2026-06-22]] flag (a); added the rule to [[master-price-sheet]] (and corrected its "Free proof always" print line) + [[meta-ugc-launch-kit]].
- **C) Cold email RULING — HELD this week** (deferred, not killed; revisit when infra + training ready). **Supersedes the "Venus starts 30–50/day this week" reading** from the training-call ingest. Edited: [[launch-week-roadmap]] honest-gate #2 + outreach section, [[cold-email-sequence]] reconciled note.
- **D) Domain map RULING — ~~RESOLVED + NEW FLAG~~ → SUPERSEDED 2026-06-22.** *(Original record:* Canonical email map: Venus OUTBOUND/cold = venus@promoteandgrow.com · Venus daily/main = venus@promotengrow.com · company CC = hello@promotengrow.com; 🚩 NEW FLAG raised that promotengrow.com is a real active domain and the 6/21 promotengrow→promoteandgrow rename needs a re-audit.*)* **✅ SUPERSEDED by the FINAL correction at the top of this log:** `promotengrow.com` was a **Whisper dictation typo for `promongrow.com`** — it is **NOT a real domain**. The daily/inbound + `hello@` CC live on **`promongrow.com`**; `promoteandgrow.com` = cold outbound only. The "promotengrow is active / re-audit the 6/21 rename" flag is **RESOLVED (void)** — the 6/21 rename was re-audited 2026-06-22 and every `promoteandgrow.com` use is correctly cold-outbound; no revert needed. (source: Carlos final domain correction 2026-06-22)
- **E) Build task (lane: Claude Code / Carlos-VA):** encode the "$500+ / big-ticket only" free-proof logic + caveats into the website CTAs + quote/draft-order system. Filed on [[dashboard]] "To resolve / open" (#6).
- **F) Shadi status (lane: Carlos):** Carlos contacted Shadi Safai (the $5,838 group #D83/#D80/#D84) directly — still considering / circle back / close the file? **No reply; holding a few days; candidate to close if silent.** Updated [[venus-work-queue]] Tier 0 + [[reactivation-outreach]].
- **G) UGC coaching:** Venus filmed takes today; **clean pass 2026-06-23** → Carlos builds the ad → **run Wed 6/24.** Coaching: slow down, smooth hard-to-pronounce English words, gentle re-dos (very coachable). Added to [[meta-ugc-launch-kit]] + a line on [[venus-launch-training-2026-06-22]].
- **H) WhatsApp BLOCKER:** registering the **844 toll-free** WhatsApp Business number is **FAILING** (activation-code calls not arriving; suspected toll-free spam-block). **Owner: Carlos**, working it 6/23. Recorded on [[meta-ugc-launch-kit]] WhatsApp-setup section + [[venus-launch-training-2026-06-22]].

No new pages created (index header unchanged); nothing in `raw/` touched.

## [2026-06-22] update | LP success state → WhatsApp logo hand-off (no redirect to main site)

Post-submit UX decided + built (Carlos pull-question → recommendation → build). Keep the lead on the [[free-proof-landing-page]] — **no redirect to the main site** (avoids dumping a fresh lead into the weak self-serve cart, per [[concierge-close]]). The success screen's primary CTA is now **"Send my logo on WhatsApp"** (pre-filled `wa.me/18448833308`), which captures artwork immediately + opens a live channel + reinforces speed-to-lead, with a same-day / Call fallback. Updated the live Shopify template (re-pushed clean) + png-v9/v10; verified the rendered success state on the v10 standalone. WhatsApp number is still the placeholder pending Carlos's real WhatsApp Business number. (source: build session 2026-06-22)

## [2026-06-22] update | Free-Proof landing page shipped to Shopify (page.lp-free-proof) + standalone v9/v10

Built and deployed the "Get a Free Proof" landing page — the concrete landing-page implementation of the [[conversion-bridge]] — and filed it into the wiki.

- **New page:** [[free-proof-landing-page]] (Concepts / funnel) — the `templates/page.lp-free-proof.liquid` Shopify page template (`{% layout none %}`; dual `{% form 'contact' %}` forms → Store contact email hello@promongrow.com, fields mapped + a `contact[Source]` tag; logo-upload swapped for a WhatsApp/reply prompt since native contact forms can't take files), plus two standalone HTML versions (`png-v9` original, `png-v10` + consent/privacy). Hosting on promongrow.com + Shopify contact forms (not Zapier) per Carlos 2026-06-22.
- **Tracking:** no new pixel code — renders `png-tracking-pixels` in `<head>`; forms dispatch `png:quote_request_submitted` on success → Meta `Lead` + Google Ads `conversion` (label `_S8lCJKl6sIcENmLkNdB`), fired once (guarded). Same wiring as the quote modal.
- **Prices** reconciled to the live catalog + [[master-price-sheet]] (tents $800 / SEG $248 / table $88 / flags $120 / **bundles $848** via the on-site builder / banners+wall-art $98). The wiki already carried the $848-builder fact; an interim $668 (pulled from the stale Shopify bundle products) was corrected back to $848 per Carlos + the sheet.
- **Deploy/test:** template pushed to the live theme (inert — nothing renders it until a page is published); the first push caught a Liquid bug (literal `{% %}` tags left inside comments) → fixed + re-pushed clean; render verified on Shopify (both contact forms + Meta `1205589804645510` + Google `AW-17631020505` confirmed in the live DOM, 0 Liquid errors). Test page created at `/pages/free-proof-test` (published, unlinked).
- **Compliance:** drafted a full Privacy Policy (`Landing Page - Outbound + PPC/PNG-Privacy-Policy.md`, pending publish to Settings → Policies) + a bilingual consent line under each form + a footer Privacy Policy link.
- **Reviews check (inconclusive):** Yelp live as "Promote & Grow" (15 reviews — count matches the page); Birdeye 4.9★/11 (old Facebook reviews); Google/Yelp block automated scraping, so live review text couldn't be pulled. Displayed 4.8★/19 Google · 5.0★/15 Yelp are consistent with the homepage — **Carlos to confirm the live Yelp star (4.8 vs 5.0)** and can paste fresher Google reviews to refresh the 3 cards.
- **Pages updated:** [[free-proof-landing-page]] (new), [[theme-build-status]] (Pages entry), [[conversion-tracking-setup]] (new-surface note), [[conversion-bridge]] (now-shipped note + link), [[index]] (Concepts entry + header). **Open items (Carlos lane):** live submit-test, confirm Store contact email, publish the policy, finalize the `/pages/free-proof` URL, WhatsApp # + images (~next month). Nothing in `raw/` touched.

## [2026-06-22] update | Apollo Batch-1 fully enriched (77 verified contacts, all 3 tiers) + Google Sheet + direct-dial MCP limitation recorded

Extended the earlier Tier-1-only record to the full Batch-1 state (additive, dated — the prior 37-contact writeup and method section preserved).

- **Full enrichment:** all of Batch 1 is now enriched — **77 owner-level contacts with Apollo-verified work emails** (37 Tier-1 + 40 Tier-2/3; Tier 2 F&B = 15, Tier 3 agency/partner = 25). Discovery = fan-out of free people-searches, matched by Apollo person ID (1 lead credit/match), **100% of attempted IDs matched**. **Coverage:** 66/79 rows carry a company phone, the rest verified email only. **~78 lead credits** used; direct-dial pool (~4,000) untouched.
- **Two not enriched:** EZ Inflatables (Edgar — PULLED, manufacturer → Carlos sourcing/partner lead, already recorded) + Bespoke Bohéme (Kate — not in the people-search, reveal via UI). **3 verify-first flags** carried in the Sheet's Notes: Thomas Parziale (Visionary Entertainment — odd org), Daryl Twerdahl (Village Catering — email on a different org's domain), Jennifer Disotell (Tap Trailer — sister-brand email).
- **Method LIMITATION added to [[apollo-net-new-list]] working-method section:** owner direct/cell dials are NOT retrievable through the connected Apollo MCP — no `reveal_phone_number` param on the match tools, no phone-enrichment-status tool; a live single-match test returned only the company line. The match yields **verified work email + COMPANY phone only**; owner cell/direct dials require Apollo's in-UI "Access mobile number" button (direct-dial credits).
- **Deliverables:** Google Sheet "PNG · Fishing Batch 1 — ENRICHED (all tiers · 2026-06-22)" (https://docs.google.com/spreadsheets/d/1k03bXzYzd87IwZ7B7M4HaRGMa_culA16yQNIv3KyZX0/edit) — a NEW drop-in sheet because the Google connector can't write cells into the existing tracker (original tracker still has empty Email/Phone). Local: `Fishing Call Sheets/PNG-Fishing-Batch1-Enriched.csv` + `…-TRACKER-enriched.csv`.
- **Pages updated:** [[apollo-net-new-list]] (enrichment status 37→77 + Sheet link + local files + direct-dial MCP-limitation note + non-enriched/verify flags), [[outbound-fishing-playbook]] + [[venus-work-queue]] (37→77 pointers + Sheet link), [[dashboard]] (one neutral cold-outreach-pipeline line in §2). No new pages → no index change. Nothing in `raw/` touched.

## [2026-06-22] ingest | Venus launch-day training call (transcript) — decisions, action items, reconciled vs game plan

Ingested the 2026-06-22 11:55 PDT launch-day training call between Carlos and Venus (Google Meet / Gemini notes + transcript). Standard raw→wiki ingest + a contradiction reconciliation pass.

- **New raw source:** `raw/venus-launch-training-2026-06-22-transcript.md` — verbatim Gemini Summary/Decisions/Next-steps/Details + the full transcript; header notes source/participants/time/captured-by.
- **New summary page:** [[venus-launch-training-2026-06-22]] (Type: source-summary) — reply-first goal (yes/no/maybe > sale); free proof scoped to big-ticket items (tents/displays) as the cold hook; 6 UGC selfie videos (3 ES / 3 EN) + B-roll → business WhatsApp (text your logo), ads live ~Wed; Slack #proof channel (Venus drops logo+product, Carlos proofs manually → automate at ~5–10 leads/wk) + 15-min response rule; cold email 30–50/day from a separate domain, day 1/3/7, NO links/NO signature (handwrite "Venus Castro, Promo and Grow"), CC hello@, via the email-writing engine + NotebookLM/ChatGPT, compounding to 100–150/day; hot/warm/cold/disqualified tiers; action items (Carlos shares the Apollo list; Venus records 6 videos, follows up Alex+Yoni with a free proof, drafts 10 cold emails for Carlos to review before sending, then calls the list).
- **Reconciliation flags (dated notes added on each affected page, old text preserved):**
  - (a) **Free-proof scope** → [[venus-sales-seminar]] Part 5 ("free proof on every order"): for COLD outreach the hook is now scoped to tents/displays; all-warm/existing-orders applicability unconfirmed — Carlos to clarify.
  - (b) **Cold-email go-live vs the honest gate** → [[launch-week-roadmap]] gate #2 + [[cold-email-sequence]]: low-volume (30–50/day) MANUAL sends from a separate domain begin THIS WEEK (the automated 100–150/day blast still waits for warmup + ≥80% placement test); FLAG to confirm SPF/DKIM/DMARC + warming on the sending domain before sending.
  - (c) **Sending-domain ambiguity** → flagged on [[venus-launch-training-2026-06-22]], [[apollo-two-brand-setup]], [[cold-email-setup-sheet]]: call said BOTH `promoteandgrow.com` AND `promoandgrow.com` (CC `hello@promoandgrow.com`); wiki reconciled cold domain = promoteandgrow.com, money = promongrow.com — Carlos to confirm Venus's exact address; do not guess.
  - (d) **Venus's first action** → [[venus-sales-seminar]] "first three actions" + Part 4 (call Shadi first) superseded by the 6/22 lane shift (Shadi → Carlos; Venus = Yoni + Alex + net-new); dated pointers added to the [[venus-work-queue]] Monday override.
- **Index updated:** added [[venus-launch-training-2026-06-22]] to Concepts + refreshed the header line. Nothing in `raw/` modified (one new raw file added). Backlink added from [[venus-sales-seminar]].

## [2026-06-22] update | Apollo Batch-1 Tier-1 enriched (37 verified contacts) + working enrichment method recorded + EZ Inflatables re-tagged

The Tier-1 prospects in *PNG · Fishing Batch 1* were enriched today via the Apollo MCP, and a **working enrichment method** was found that supersedes the failed 2026-06-18 attempt.

- **Method correction (the unlock):** a two-step **search → match-by-ID** path. (1) `apollo_mixed_people_api_search` = FREE discovery — returns each prospect's **Apollo person ID** + exact org/title + `has_email`/`has_direct_phone` booleans (last names still masked). (2) `apollo_people_bulk_match` keyed **by that person ID** returns full name, verified work email, company phone, LinkedIn, firmographics — **1 lead credit per match, 0 for misses**. Direct/cell dials need a separate direct-dial reveal (direct-dial credits). **Failure mode that broke the 2026-06-18 run:** a plain match on **first-name + company returns 0** — you must grab the Apollo record ID via search FIRST, then match by ID. Rewrote the "Next step — revealing contact info" section of [[apollo-net-new-list]] to document this; preserved the old "did not resolve (2026-06-18)" note marked **superseded 2026-06-22**; stamped the page 2026-06-22.
- **Result:** **37 owner-level contacts** captured (36 companies; FormDecor has two — owner Fritz Williams + VP Rolando Ferilli). **37/37 verified emails**, 33/37 with company phones → file `Fishing Call Sheets/PNG-Fishing-Batch1-Enriched.csv` (+ `.md`; another process owns these — not edited). Added pointer lines on [[outbound-fishing-playbook]] (NET 1 target list) and [[venus-work-queue]] (Monday fishing bullet).
- **EZ Inflatables re-tagged:** EZ Inflatables, Inc. (Edgar) was **pulled** from Venus's Batch-1 cold-call list — they manufacture tents & flags, so they're a competitor / possible white-label supplier, not a cold buyer → routed to Carlos as a **sourcing/partner lead**. Annotated (struck through, not deleted) on the working `Fishing Call Sheets/PNG-Fishing-Batch1-CallSheet.md` and noted on [[apollo-net-new-list]].

No new pages (edits only) → no index change. Nothing in `raw/` touched.

## [2026-06-22] ingest | SMYKM cold-email method (Apollo Academy / Sam McKenna) captured

Ingested a cold-email training video transcript Carlos provided — an Apollo Academy (Apollo.io) course on the **"Show Me You Know Me" (SMYKM)** method by **Sam McKenna, founder of SamSales Consulting**, watched on YouTube. Standard raw→wiki ingest:

- **New raw source:** `raw/apollo-smykm-cold-email-course-transcript.md` — verbatim transcript (6 chapters), timestamp duplicates cleaned into readable prose, wording unchanged; header notes source/instructor/capture date. The Tory Burch Cyrillic subject-line phrase was not transcribed by Carlos → marked "[Russian phrase — not transcribed]".
- **New concept page:** [[show-me-you-know-me-method]] — distilled 5-part method (subject line that reads as nonsense to anyone but the recipient, with `+` breaks and reusable-across-shared-context patterns; subject+first-sentence = preview text, two openers; value prop = the challenge you solve, longer-is-better, pre-empt one objection; never a calendar link, never a proposed slot — "time over the next week or two… I'll send the invite"; ~20 quality emails/week). Cited stats: industry ~6% open / 0.9% reply vs SMYKM ~43% / ~20%. Captured both subject-line examples (Tory Burch CLO "detention fees" logistics in-joke, replied in ~10h; Sam's "Switzerland + Le Dip cheeseburger + [company]"). Embedded the **full transcript** in-page per request. Added a **PNG application** section framing SMYKM as the hand-built **Tier-2** complement to the machine [[cold-email-sequence]] — aimed at highest-value LA event-services prospects (caterers, event planners, party-rental cos, breweries) — and flagged the honest tension with PNG's existing "short subject / under-90-words" cold rules (resolved as two tiers; both keep the non-negotiables: Touch-1 no link, no calendar link, "5 business days from proof approval," bilingual only with taste).
- **Index updated:** added the page to the Concepts section.
- **Backlinks added (in context):** [[venus-email-writing-engine]] (a SMYKM Tier-2 prompt variant note) and [[venus-cold-email-training]] (a SMYKM reference in Part C). Both existing pages; nothing created beyond the one new concept page + the raw source.
- **Unsure / flagged:** the new page deliberately *holds a tension* rather than overwriting PNG's current short-form cold rules — framed as a VIP Tier-2 lane, not a replacement. If Carlos wants SMYKM to become the default subject-line approach (vs. the current "3–4 words, lowercase"), that's a rule change to make explicitly across [[cold-email-sequence]] / [[venus-email-writing-engine]].

## [2026-06-21] decision | Quote-conversion WIRED LIVE + verified (test submits sent)

Closed out the ad-gate tracking work. Read the **live published MAIN theme via the Shopify Admin API** and confirmed both halves are deployed: (1) `config/settings_data.json` → `google_ads_quote_label = "_S8lCJKl6sIcENmLkNdB"`; (2) `snippets/png-quote-modal.liquid` fires the conversion on the `form.posted_successfully?` success page — renders `gtag('event','conversion',{send_to:'AW-17631020505/_S8lCJKl6sIcENmLkNdB'})` + the Meta `Lead` + GA4 `generate_lead`. So the 6/20 dead-code bug is fixed and live. **Carlos sent a few test submissions 2026-06-21**; Network ping is instant but the Google Ads **count lags 3–24h** → he checks **Conversions → "Submit lead form" → "Recording conversions" on 6/22** (also confirm Enabled / Primary / Count = One). Once recording, the **ad gate clears** and lean Spanish-Search + retargeting activate ([[launch-week-roadmap]]). Updated [[conversion-tracking-setup]] (step 3 in-progress), [[dashboard]] (gate item 0 + paid line), [[theme-build-status]] (admin task 3). Verified server-side so Carlos (non-technical) could skip DevTools entirely. No `raw/` touched.

## [2026-06-22] update | Monday launch-day email to Venus + queue/roadmap priority shifts

Launch day (Mon 6/22). Drafted Venus's **launch-day game-plan email** into Carlos's Gmail (ready to send — he sets the recipient + attaches the 6 doc PDFs + her email signature). The day's run-of-show: install signature → **2-hr ingest** of the 6 core docs (email engine, fishing playbook, Meta UGC kit, cold-email sequence, reply playbook, cadence supplement) + skim the kit → **noon PT training + 2 role-plays** with Carlos → **last 2 hrs cold outreach** off the call tracker.

**Priority / lane shifts (per Carlos 6/22):** the open board has gone quiet after weeks of chasing →
- **Venus's hot follow-ups:** **Yoni Dino** (#D94, $720) + **Alex** (NEW — wants presentation-folder pricing). Her first follow-ups, then net-new fishing.
- **Carlos's lane this week:** **Shadi Safai / "Sadie" ($5,838)** + **Del Rio/Temo (#D77, $3,400)** — he's chasing both personally for a hard yes/no (off Venus's plate).
- Rest of the cold board → one light touch, else Nurture.

Updated [[venus-work-queue]] (6/22 priority-override banner + tagged Shadi/#D77 as Carlos's lane) and [[launch-week-roadmap]] (Monday section rewritten to the real lead-gen-first run-of-show). Nothing in `raw/` touched.

## [2026-06-21] update | Domain reconciled (promoteandgrow.com) + Google-Sheet call tracker built

**Domain confirmed + reconciled:** the cold-outreach domain is **`promoteandgrow.com`** (Carlos's registered domain; the v1 docs' `promotengrow.com` was a transcription error). Reconciled across 8 active wiki pages (apollo-two-brand-setup, cold-email-setup-sheet, dashboard, index, cold-email-segment-copy, cold-email-sequence, growth-offensive, summer-of-futbol-campaign). Left untouched: log.md history (dated record) + [[growth-offensive-v2]]'s "v1 mis-stated" note (intentional). Dashboard "sending domain" line updated to record the correction.

**Call tracker built:** created a native Google Sheet **"PNG · Fishing Call Tracker — Batch 1"** in Carlos's Drive (carlos@proagobranding.co), **pre-loaded with all 79 net-new prospects** (Priority/Source/Company/Contact/Title/Segment/Stage=New) so it doubles as Venus's ready-to-dial list. Columns = the v2 scoreboard-by-source (Phone/Email/Outcome/Lead Tier/Free Proof?/Quote $/Next Action/Next Date/Notes). Leads live here + Shopify, NOT in Apollo (Carlos's "Apollo = list/filter/reveal only" model — confirmed). Phones fill from the Apollo in-UI reveal.

**Apollo enrichment note:** API `people/bulk_match` returned 0 matches on the masked search records (tried name+org, then +domain) — **0 credits consumed**; the reliable reveal is Apollo's in-UI "Access email & phone" on a saved list (walkthrough given). Carlos has 4,072 lead + 4,000 direct-dial credits.

## [2026-06-21] update | Growth Offensive v2 (lead-gen-first) + Apollo fishing lists pulled

Carlos chose **Option A** for cold email (add `venus@promoteandgrow.com` to the existing Apollo seat + send from Apollo, no Smartlead — keep the stack lean; graduate to Option C later) — ⚠️ **domain is `promoteandgrow.com`, not the wiki's `promotengrow.com`; reconcile across pages once confirmed.** Gave the careful-Option-A guardrails (bind PNG sequences to the PNG mailbox only; ~30–40/day cap on one inbox; tracking off; verified-only; placement test ≥80%).

**New page [[growth-offensive-v2]]** (Programs, CURRENT) — supersedes v1 [[growth-offensive]]. Lead-gen-first: five nets (Venus calls + DMs · referral partnerships · GBP/reviews · reorder loop) as the primary engine; paid reframed as a 90-day compounding play (not 30-day cash); cold email corrected DOWN for Option A (1 inbox ~30–40/day → ~$1–3K/qtr, was Option C's $3–6K); the **Venus-capacity sequencing model** (nets switch on in order, she's the throttle); corrected economics + scoreboard-by-source + 30/60/90. Banner added to v1. **PDF:** `Outbound Fishing - PDFs/Growth-Offensive-v2.pdf` (4pp).

**Apollo (lead-gen pivot execution):** pulled two net-new LA searches via the People API — **Batch 1** (49: caterers, event planners/production, food & beverage brands, some experiential agencies) + **Batch 2 party-rental** (33: MTB/Trio Event Rentals, EZ Inflatables, CPG Tents & Events, FormDecor, Black Tie Supply, LuxLounge, Casa de Perrin, Tap Trailer, etc.). ~79 unique after de-dup. Phones/emails masked pending enrichment (search-then-enrich confirmation pending; balance 4,072 lead + 4,000 direct-dial credits). On approval → enrich + write labeled list `PNG · Fishing Batch 1` bound to the PNG mailbox. Indexed; **page count 68 → 69**. Nothing in `raw/` touched.

## [2026-06-21] update | Outbound fishing playbook + WhatsApp setup (Monday-ready)

Built the two pieces that make Monday execute-able. **New page [[outbound-fishing-playbook]]** (Programs) — the net-new lead engine, the pivot from harvesting: 4 nets — (1) Venus cold-CALLS the Apollo net-new local list (no warmup needed, unlike cold email → starts Monday) with a bilingual Murray Value-Statement script + voicemail + text follow-up, (2) IG/WhatsApp DMs (EN/ES templates), (3) Carlos referral partnerships (event planners / party-rental / venues / white-label — the durable recurring engine), (4) GBP + review velocity. Includes target-segment priority, daily dial cadence (~25–40/day, ABAB), objection handling (via [[cold-reply-playbook]]), logging by Source, owner lanes. Also **appended a 15-min WhatsApp Business + Click-to-WhatsApp setup** section to [[meta-ugc-launch-kit]] (dedicated number, profile, greeting/away, connect to Meta, test) + a higher-intent-form fallback. **PDFs delivered:** `Outbound Fishing - PDFs/Outbound-Fishing-Playbook.pdf` (5pp) + re-rendered `Meta Ad Launch - PDFs/Meta-UGC-Ad-Launch-Kit.pdf` (5pp, now with WhatsApp setup). Indexed; **page count 67 → 68**. Open next-step: enrich the top-50 Apollo call sheet (real names/phones) for Venus. Nothing in `raw/` touched.

## [2026-06-21] decision | Pivot to lead-gen + Meta UGC ad launch kit (tournament-won copy)

Strategy session: Carlos pushed back on paid Search math ($3K spend → $2.2K close = negative ROI) and flagged the real problem — **the warm pipeline is squeezed (weeks of follow-up; Del Rio/Shadi/Cristian gone dark) and PNG has no repeatable NEW-lead engine.** Reframed: it's a **distribution** problem, not a demand problem. Agreed fishing > harvesting now; the durable fix is outbound (cold CALLS need no warmup, unlike cold email) + partnerships + GBP, with paid as a 90-day play, not a 30-day cash engine. *(Ran a 4-lens panel — bootstrap owner / F500 exec / direct-mail CEO / my own — all independently converged on "close the open board first"; that's now largely exhausted, hence the pivot.)*

Carlos proposed a **Meta UGC funnel** that engineers around the two reasons Meta was benched: **Venus-selfie creative** (kills generic-creative CPL) + a **confirmed-phone gate** (kills tire-kickers). Ran the unit economics: break-even = cost-per-confirmed-lead ≤ ~$50 at ~15% close / tent AOV — achievable, and a **~$400 killable test**, not a $750/mo commitment. Recommended **Click-to-WhatsApp** as the gate (confirms the phone for free + solves the "they don't answer calls" problem in the channel LA actually uses).

**Ad copy via a 5-judge tournament** (workflow w1g5279m3): 8 variants scored by 5 personas (last-minute planner / catch-up B&M / organized multi-loc owner / competitor / event planner). **Winner V8** "Logo → free proof → 5 days. That's it." (39/50, universally legible); **killed V4** FOMO/shaming (23/50 — repels the high-value buyer). Merged V8 spine + V6 "Made in LA, 20yr" (the vetting-buyer trigger) + V5 bilingual moat + V1 "before you pay a cent"; fixed "5 days" → "5 business days from proof approval."

**New page [[meta-ugc-launch-kit]]** (Programs) — winning EN/ES copy + scoreboard, Venus's 6 selfie scripts (3 EN/3 ES), B-roll shot list, WhatsApp auto-greeting + reply flow, audience/targeting spec, $400 test + pass/fail tracker, sequencing (Mon shoot → Wed launch → Day-5/7 scale-or-kill). **PDF delivered:** `Meta Ad Launch - PDFs/Meta-UGC-Ad-Launch-Kit.pdf` (5pp, branded). Indexed; **page count 66 → 67**. Nothing in `raw/` touched.

## [2026-06-20] update | Cold-email onboarding build (training + email engine + reply playbook) + 2026 deliverability/PPC research

Scoped a session to onboarding the **cold-email outreach protocol** for Venus's Monday 6/22 go-live + the ad engine that feeds her. Ran a **deep-research pass** (task wtl253ia7, 109 agents) on 2026 deliverability + local-PPC benchmarks; it **validated the internal plan** with three corrections (folded in). Decisions (Carlos): ad engine = **lean & validate**; email engine = **AI prompt pack + NotebookLM**; supplement = **markdown→PDF**.

**New pages (3, Concepts):**
- **[[venus-cold-email-training]]** — the ~30–40 min Monday module layered onto the [[venus-sales-seminar]] (which is warm-focused): the Murray cold cadence + Hormozi owned-list logic + how a cold email is built + the **reply skill usable now** on inbound ads/Fútbol replies. Honest gate: cold doesn't blast Monday, warms → July.
- **[[venus-email-writing-engine]]** — her drafting system: 3 copy-paste AI prompts (cold / follow-up / reply) with the rules baked in, NotebookLM-grounding setup, a 20-sec edit checklist, and worked EN+ES examples per [[apollo-net-new-list]] segment.
- **[[cold-reply-playbook]]** — the **kit gap** the 67-page PDF didn't cover: 30-sec triage, 3 reply branches (interested / "just send a price" / objection) in EN+ES, SMS-consent rule, cold speed-to-lead, batching/throttle, cold-metric logging.
- **[[cold-email-setup-sheet]]** — Carlos's 30-min copy-paste execution sheet for A1–A4: exact MX/SPF/DKIM/DMARC records for promotengrow.com + Smartlead warmup/send config (tracking OFF, 30–35/inbox) + verify steps. Answers "draft the exact DNS records + warmup config."

**Pages updated:** [[cold-email-sequence]] — Smartlead Base recommended ($32.50/mo annual, unlimited inboxes), warmup start 20–30/inbox, **2026 validation section + the Gmail question answered** (separate `promotengrow.com` Workspace; never the money domain; bulk-sender rules don't bind at ~60–70/day; SPF+DKIM+DMARC **p=none** sufficient; 0.08%/1.5% relabeled as **internal** guardrails inside Google's 0.3% ceiling). [[growth-offensive]] — lean-launch refinement: **Business Services CPL ~$93.69** validates 1–4 qualified leads/mo month 1; **Performance Max OUT** at this budget (needs $3–4.5K/mo); **bench Meta prospecting** (no reliable public CPL); cadence comes from warm+cold+ads combined, not paid alone. Status banners added to [[meta-lead-form]] (benched) + [[google-search-engine]] (Search-first / PMax-out).

**Deliverable (Venus-facing, outside the wiki):** `Venus Onboarding Kit/PNG-Venus-Cold-Cadence-Supplement.md` — a self-contained ~9-section supplement to the 67-page kit (the cold inbound/outbound layer), EN+ES scripts, markdown→PDF per the existing pipeline.

Indexed the new pages (Concepts), **page count 62 → 66**, footer updated. Bidirectional links added (seminar/roadmap ↔ training; setup-sheet ↔ cold-email-sequence). Nothing in `raw/` touched.

## [2026-06-20] decision | Quote-conversion firing-path bug found (workflow audit) + fixed

Ran an adversarial Workflow audit of the Google Ads quote-conversion wiring **before** pasting the label (the money gate). **Finding (3/3 skeptics agreed, pathProven=false):** the quote-submit conversion was double-broken — (1) the modal pushed `{event:'quote_request_submitted'}` to `dataLayer` (array push) while the conversion listener in `png-tracking-pixels.liquid:136` waited on a DOM CustomEvent `png:quote_request_submitted` that **nothing dispatched**, so the Meta `Lead` + GA4 `generate_lead` + Google Ads `conversion` were all **unreachable code — even with a label set**; (2) the label was blank; (3) native POST+redirect would kill an on-submit beacon anyway. **Without this, pasting the label would have produced ZERO counted conversions, silently, while spending ad money.**

**Fix (Claude-admin):** fire the conversions on the server-rendered `form.posted_successfully?` success page in `snippets/png-quote-modal.liquid` (root + mirror), guarded on settings — reliable (fresh page) and repairs the dead Meta `Lead` immediately. Safe to ship with a blank label (the `conversion` line stays guarded off). **Pending:** push to live + Carlos creates the "Quote submitted" action + pastes the label + verify. Documented on [[conversion-tracking-setup]] (setup steps revised) + [[theme-build-status]] (admin task 3). Theme files edited locally, **not yet pushed** (Carlos runs the push). Re-lint clean.

## [2026-06-20] update | Launch-Week build (week of Mon 6/22) + dashboard refresh

Built the week's execution layer so a fresh window can run it self-contained:
- **[[launch-week-roadmap]]** (new) — the HUB. Two lead lanes (outreach / inbound), day-by-day Mon–Fri (Monday seminar → Venus on Tier 0 / Shadi $5,838; Tue ads-on-if-green + cold-email load; Wed optimize + reactivation calls; Thu warm email send; Fri review), owner-tagged **[V]/[C]/[CC]/[CA]/[VA]**, the outreach + inbound/ads implementation, **honest gates** (ads gated on the quote-label; cold-email warming not blasting; Venus = throttle), success metrics, and Venus's full resource kit.
- **[[venus-sales-seminar]]** (new) — the runnable ~90-min Monday kickoff: mission/offer/moat, the two lanes, the closing method (Value Statement + assumptive + free-proof CTA + follow-up ladder + objection bank), working the queue, pricing guardrails, tools/rhythm, live role-play, Venus's first 3 actions.
- **[[dashboard]] refresh (→ 2026-06-20):** added the "▶ This week" banner; **pipeline reconciled to 6/19** (~$10K active + ~$5K revive; Karen $472 WON; Leslie excluded `sogate.org`; Cristian ~$3.5–4.6K revive); **cold-email → "in deployment / warming, no blast yet, July first sends"**; **paid → "activating lean this week once the label verifies"**; **margin** reconciled to the resolved ×5/×2.0 + 60%/35% ([[pricing-engine]]); Related expanded.

Indexed both new pages (Programs + Concepts), **page count 60 → 62**, footer updated. Re-lint clean. Nothing in `raw/` touched.

## [2026-06-20] ingest | Hormozi owned-list campaign model → new page email-campaign-engine

Ingested "Alex Hermozi - This Email Campaign Generates Sales [Full Breakdown].pdf" (37pp, the "$2.4M in 5 days" warm-list campaign). Different lane from the Murray cold series — this is **monetizing the owned/warm list**, so it got its **own page** [[email-campaign-engine]] (not folded into [[outbound-method]]). Captured: email as a **compounding $0-CAC asset** ("401k" frame, smooths revenue volatility / raises enterprise value); the **quarterly promotional campaign** (a conversion mechanism = big promise + deadline + quick-win "taste"; Hormozi's "challenge" → PNG's **seasonal bundle promo where the free proof is the taste**); the **Value Equation** (dream/likelihood/time/effort); the **~4 seasonal "wrappers"/yr → autopilot** cadence (+ the "local lists fatigue faster, need more variety" note); **give-to-ask ratio**; selling the same offer across mediums; "trust smart people." **Honest caveat flagged prominently:** Hormozi's $ figures are from a $250M info-product list — principles/cadence transfer, the numbers don't; PNG's realistic scale = the [[summer-of-futbol-campaign|+$4–8K]] seasonal push.

Cross-linked bidirectionally from [[email-library]] + [[summer-of-futbol-campaign]]; indexed under Concepts; **page count 59 → 60**. Re-lint clean. This is the strategic "why/cadence" hub for PNG's warm email program (complements [[email-library]] = templates, [[reactivation-email-sequence]] = a specific arc, [[email-send-preflight]] = the send SOP).

## [2026-06-20] ingest | Cold-email blueprint (3rd Murray PDF) → enriched outbound-method

Ingested " Cold Emailing in 2026: The Only System SDRs and AEs Need.pdf" (39pp, the definitive Murray email blueprint) into the existing [[outbound-method]] page rather than a new page (same methodology family). **New material added:**
- **Persona levels** (L1 end-users / L2 middle-mgmt / L3 execs — adapt the *why* to each; "above/below the line"). PNG note: owner-led SMBs collapse the levels into one person, so the real axis is **business type**, already mapped in [[cold-email-sequence]] / [[sell-guide]].
- **Personalize without breaking scale** — one context line / "contextual outreach" on top of the repeatable structure.
- **Subject lines** — clarity beats cleverness; avoid salesy/markety (spam triggers); use `intro` / name / company / `[topic] for [company]`, 3–4 words.
- **Objection handling over email** — don't argue the objection in-thread; acknowledge → double-down → sell the next step; bank by category.
- **Calendar invites / confirmation** — give them something to bite on; PNG-adapted to the free-proof confirmation (restate product + 5-day-from-approval + one next action).
- **Compounding-math frame** (tiny input gains → ~150% output) + **responses = the #1 driver**, folded into the Tracking section. Extended the follow-up ladder (FU4 name-only; never >2 business days; reset to fresh list after ~5; return in 6–8 wks).

Updated [[index]] entry + footer; page count unchanged (59, enrichment not a new page). These three Murray PDFs are now all distilled. Most relevant pieces (subject-line rules, business-type persona adaptation, tightened follow-up ladder, objection-over-email) are **ready to apply to the live [[cold-email-sequence]] before the Monday launch** — offered to Carlos, not yet applied. Re-lint clean.

## [2026-06-19] update | Applied outbound-method tactics 1–3 to the live playbooks

Turned [[outbound-method]] from reference into operating procedure on [[deal-followup-playbook]] (+ light touch on [[venus-sales-playbook]]):
1. **Assumptive language** — new section + passive→assumptive swap table; rewrote the cadence-table CTAs and the [[venus-sales-playbook]] Day-1 email CTA from permission-asking ("want me to start that proof?") to assumptive ("I'll get your free proof started — send your logo"). Scoped to the *ask*; left the discovery opener warm.
2. **Tight ABAB email micro-sequence** — new subsection: FU1 benefit-of-the-doubt / FU2 "what are your thoughts… 1-2-3" (highest-reply) / FU3 assumptive close-the-loop, every-other-day (24–48h), capped at ~4–5 touches then Nurture.
3. **Objection bank** — expanded the quick-reference table (5→9 rows) and added a copy-paste base-response bank (price / think-about-it / send-info / already-have-a-printer / faster / design / who-is-this / Vistaprint), each ending on the free-proof next step; floor + no-discount-without-Carlos guardrail preserved. Re-lint clean.

## [2026-06-19] ingest | Outbound method (Conor/Connor Murray cold call + cold email)

Ingested two new `raw/` training PDFs added 6/19 — "The Ultimate Guide to Cold Calling in 2026" (Conor Murray, "Cold Call Mastery") and " 10 Years of Expert Cold Email Advice in 36 Minutes - Connor Murray" — into a single robust concept page, [[outbound-method]]. Both run on one spine: the **Value Statement Framework** (who/why/what, value first), **assumptive (not passive) language**, downward-inflection tonality, **"coil the spring"** (batch lists + per-segment templates upfront), **24–48h ABAB follow-up cadence** (70–80% of meetings come from follow-ups; the "please give me your thoughts on this" line; assumptive break-up), an **objection response bank** ("double down and sell the next step"), and **tracking three inputs** (open/reply/meeting — or dials/answers/meetings).

Adapted to PNG explicitly: Venus is a **closer**, not an SDR booking for an AE, so the "meeting/time" next step = **the free proof / quote conversation**; volume figures are directional at her one-closer 10–4 scale, not a quota. Added PNG-specific bilingual call/email scripts (marked outward copy). Cross-linked from [[venus-sales-playbook]], [[deal-followup-playbook]], [[cold-email-sequence]] (bidirectional); indexed under Concepts; page count 58 → 59. These two PDFs are now distilled (removed from the coverage-gap watchlist by virtue of having a page). Re-lint clean.

## [2026-06-19] update | Daily Venus work-queue rebuild — Tier 0/2 refreshed from live Shopify (orders + drafts). Changes: Karen Tenas #D95 → won ($472 paid 6/18); Leslie Consuegra #D96/#D97 (`sogate.org`) excluded → Carlos's lane; Cristian Lopez ~$3.5–4.6K board job surfaced to revive; Jose Gonzales added to recent buyers. ~$10K active pipeline + ~$5K to revive; no new pri:hot/warm contacts off-board.

## [2026-06-19] update | Theme delivery-copy honesty sweep + popup price fix (run in-repo)

Ran the two Carlos-approved theme fixes directly in the repo (not handed to Claude Code). Scope was bigger than the wiki flag: "guaranteed" was a false-delivery promise in **10 strings**, not just the trust ribbon. Swept all to honest copy (root + mirror copies):
- **"guaranteed" → softened.** Trust ribbon + popup + contact "5-day delivery [—/,] guaranteed" → **"5-day delivery from proof approval"**; how-it-works/index "Nationwide guaranteed." → "Nationwide."; SEO-landing + AEO + tent-page + article.aeo FAQ "to ship — guaranteed, nationwide" → "to ship — nationwide." Files: `announcement-bar`, `popup-exit-bundle`, `custom-contact`, `custom-how-it-works`, `custom-seo-landing`, `custom-aeo-faq`, `page.tent-10x10/15/20.json`, `article.aeo.json`, `index.json`.
- **Popup price.** Stale "$910 / saves $160+" → **"$848 / saves $150+"** (synced to the builder's ≈$848.30 lowest config; [[master-price-sheet]]).
- Wording chosen by Carlos = "from proof approval". Verified zero residual "guaranteed" / "$910" / "$160+" in the live Dawn theme.

Deploy: Carlos runs the targeted `shopify theme push --allow-live` (`index.json` excluded — editor-locked). **Two items left for Carlos:** (8) change the homepage How-it-works step in the theme editor; (9) delete the dead, unreferenced `pagefly-home.liquid` (still has GUARANTEED slides). See [[theme-build-status]].

Also recorded this session: order cutoff on [[fulfillment-sop]] — paid + file-clean **before 1pm PST** starts the 5-day clock same business day; after 1pm = next business day (Carlos 2026-06-19). The reorder-interval FILL-IN there is still open.

## [2026-06-19] lint | Low-priority polish pass (status banners, citations, coverage gaps, legacy-name reconcile)

Cleared the remaining low-priority punch-list from the 6/18 audit:
- **Historical-status banners** added so concluded pages don't read as live: [[day-1-run-of-show]] ("executed — Day 1 ran June 8, Venus live") and [[hiring-and-screening]] ("concluded — Venus hired").
- **Stat-ammo sourced:** [[sell-guide]] §"Stat ammo" now cites the 4over "how to sell" guides + sell sheets, with a "conversational proof points, not written guarantees" guardrail.
- **Coverage gaps tracked:** new "Raw sources not yet distilled" section on [[index]] naming the 8 raw files that have no page (PRD/SETUP/REVIEW, the 3 wireframe/mockup HTMLs, the revenue-scoreboard + month-1/2 content-calendar XLSXs, the customer-import CSV, the sales-knowledge-quiz HTML) — flagged superseded where true.
- **Cross-refs:** [[sell-guide]] + [[venus-sales-playbook]] added to [[venus-onboarding-kit]] Related.
- **Lint hygiene:** the two changelog mentions of the retired `shopify-deploy-workflow` slug de-bracketed (they were tripping the link scan). Full re-lint after = **58 pages, 0 broken links, 0 orphans.**
- **Legacy-name contradiction RESOLVED — and it flips my 6/18 flag.** Raw evidence is lopsided: ~100 "PrintCo Direct" mentions (incl. "PrintCo Direct Inc." in the brand brief + every outward reframe Venus uses) vs. **2** "Print Code Direct," both confined to SOP-06. **Canonical = "PrintCo Direct Inc."** (matches [[dashboard]]'s ruling); the SOP-06 / `pcd.ordant.com` / "PCD" spelling "Print Code Direct" is a transcription variant of the same entity. Corrected [[sop-library]] (had been left asserting "Print Code Direct") to align + note the variant. **No longer a Carlos open item.**

## [2026-06-18] update | Thorough review + lint fixes (vendor rename, index, links, cost-per-sale, cohorts)

Full read-through of CLAUDE.md schema + index/dashboard/log + a content-page skim and a `raw/` accuracy spot-check, then applied a lint punch-list. Much of it was already handled by the parallel 6/18 audit below (index page-count correct at 58 content + 3 system, re-verified by `find`; the dangling `shopify-deploy-workflow` link already converted to plain text and [[carlos]] + [[claude-code]] pages created, so a full link scan = 0 dangling). Remaining fixes this pass:

- **Vendor rename finished:** SwordXpress / SwordX → **Soar Dist USA** on the last two live-vendor mentions the audit had not yet reached — [[closer-hire]] (workbook vendor routing) and [[slack-workspace-setup]] (#orders post format). [[pricing-engine]], [[store-and-catalog]], [[fulfillment-sop]] already carried it.
- **Cost-per-sale standardized:** canonical = **<$130 per closed deal** (hardened 6/15 [[growth-offensive]]); the older "<$60–70" marked **superseded** on [[competitive-war-room]] (both instances + a real reconciliation note replacing its dangling "see the contradiction below") and [[ninety-day-roadmap]] (Phase-4 table + gate).
- **Reactivation cohorts reconciled:** four-row table on [[reactivation-outreach]] defining ~162 curated legacy phone list / 647 `Reactivation-Apr2026` / 574 `Reactivation-2026` / ~1,221 dormant Wix email universe + how they relate; cross-linked from [[dashboard]] (new bullet) and [[summer-of-futbol-campaign]] (its two dangling "see Contradictions" pointers re-pointed here).
- **Speed-to-lead:** ONE canonical tiered rule on [[lead-qualification-system]] §(b) — 5-min paid/high-decay · <1hr warm inbound (Venus's hours) · same-day organic — reconciling the 5-min / <15-min / <1hr variants.
- **Stale stamps → 2026-06-18:** [[venus-work-queue]] (Tier 0 refreshed 6/18, stamped 6/17) + every page edited this pass.
- **Dashboard bookkeeping:** added a **Reconciled 2026-06-18** block marking settled the cohorts, cost-per-sale, speed-to-lead, sending-domain (promotengrow.com cold vs promongrow.com live — two domains, not a typo), the PrintCo Direct legacy name (canonical; "Print Code Direct" = transcription error), and the vendor rename.

Beyond the punch-list: removed two **dangling "see Contradictions" pointers** in [[summer-of-futbol-campaign]] (no such section existed). Updated [[index]] + [[dashboard]] stamps/footers. Did not touch `raw/`.

## [2026-06-18] lint | Full wiki audit + reconciliation (8-cluster parallel review)

Ran a thorough 8-reviewer audit of all 58 content pages against current ground truth + format rules, then applied a robust reconciliation. **Reconciled (HIGH):**
- **Tracking** — corrected the stale "nothing installed" claim across [[conversion-tracking-setup]], [[google-search-engine]], [[pipeline-ops-spine]], [[dashboard]] → tracking is **PARTLY LIVE** (Meta Pixel `1205589804645510` + Google Ads `AW-17631020505` installed; only `google_ads_quote_label` blank).
- **Pricing** — [[store-and-catalog]] stale "2.5–3x markup" → resolved ×5/×2.0 + $100 floor + 60%/35% margins ([[pricing-engine]]); bundle "$910"/"$595" flagged stale-pending-builder-sync.
- **Vendor** — SwordXpress → Soar Dist USA (+ Tradebanner) across store-and-catalog, fulfillment-sop, pricing-engine, closer-hire.
- **SLA honesty** — removed unconditional "guaranteed / garantizado / es una garantía" from [[fulfillment-sop]] outward copy + [[spanish-money-page-copy]] (7 lines); flagged the live theme trust-ribbon "guaranteed" for Claude Code. Retired the literal "3-day Donut Media" claim from OUTWARD copy (kept as internal history) on [[png-voice]], [[josh-craig-donut-media]], [[positioning-and-personas]].
- **No-HubSpot** — [[meta-lead-form]] + [[growth-offensive]] "HubSpot" → Google Sheet pipeline.
- **Slack** — "empty workspace" corrected (progobrandingdept has #promo-and-grow) on [[fulfillment-sop]], [[slack-workspace-setup]], [[index]].
- **Stale open-quotes** — [[venus-sales-playbook]] + [[venus-work-queue]]: #D77 now cold; Shadi Safai $5,838 (= Smile Klub Dental, deduped).
- **Status** — [[summer-of-futbol-campaign]] EN email SENT 6/17.
- **AOV** — [[the-20k-math]] $400 relabeled bundle-TARGET (measured ~$350).
- **Legacy name** — sop-library invoice subject → "Print Code Direct" [Carlos to confirm legal name].
- **Dashboard / index** refreshed: live pipeline (~$12K), run-rate ~$2,100/mo, $50K north star, tracking partly-live, page count corrected to 58.
- **Broken links resolved** — created [[carlos]] + [[claude-code]] stub pages (fixes both everywhere); delinked the `shopify-deploy-workflow` memory slug.

Verified the reactivation tally (1,504 orders / 40 accounts / 86% 12mo+) is correct — **rejected the audit's miscount**. Re-lint: 58 pages, ZERO broken links, ZERO orphans.

**Flagged for Carlos:** exact legacy legal name (PrintCo vs Print Code Direct); the live theme trust-ribbon "5-day delivery — guaranteed" needs softening (Claude Code); the bundle-builder "$910" price sync (Claude Code); order-cutoff time + reorder-interval FILL-INs ([[fulfillment-sop]]). **Low-priority polish remaining (logged):** status banners on a couple of historical pages (day-1-run-of-show, hiring-and-screening), sell-guide stat-ammo citation, a few nice-to-have cross-refs, and citing uningested dev docs (PRD/SETUP/REVIEW/wireframes/customer-CSV/revenue-scoreboard).

## [2026-06-18] update | Merged + hosted the branded Large-Format catalog

Merged my P&G cover + the 4over white-label LFC + my back-cover CTA → **14-page branded catalog** (pdfunite). Shopify Files caps at 20MB, so compressed 28MB → **5.87MB** (rasterized 200dpi, recombined via Chrome) and **hosted on the Shopify CDN**: `cdn.shopify.com/s/files/1/0731/3886/4164/files/Promo-and-Grow-Large-Format-Catalog.pdf` (GenericFile 35955350077476, READY). Venus links it in warm follow-ups — never cold-attach. Files in "P&G Marketing Collateral/": Promo-and-Grow-Large-Format-Catalog.pdf (28MB print master) + -web.pdf (5.87MB hosted) + cover/back HTML/PDF source. Link noted on [[sell-guide]].

## [2026-06-18] update | Last 4 sell sheets ingested + P&G catalog cover/back developed

Read the remaining sell sheets individually: SS_1082 Window Graphics, SS_1085 Aluminum Heavy-Duty/directional, SS_1088 Sidewalk A-frames (already covered), SS_1094 Tabletop Retractables (already covered) → folded Window Graphics (3 types) + Aluminum directional/wayfinding into [[sell-guide]]; full sell-sheet set now ingested. Developed a P&G-branded catalog **wrap** — premium navy cover + off-white back-cover CTA (Venus contact, free-proof / 5-day-from-approval, IG/reviews, "Helping Brands Promote & Grow") → "P&G Marketing Collateral/PNG-Large-Format-Catalog-CoverBack.pdf" (+ HTML source + preview PNG). Wraps the 27MB white-label 4over LFC (host + link, never cold-attach). Cover+back alone doubles as a small emailable "Signs & Displays" intro piece. Catalog also being built by Carlos in Claude Design.

## [2026-06-18] update | Ingested 4over sales collateral → [[sell-guide]]

Ran a 6-reader workflow over the 4over collateral and built [[sell-guide]] (Venus enablement): product knowledge + sell angles + objections + cross-sell triggers for EDDM (direct-mail reactivation hero), Large Format & signage (banners / yard signs / flags / decals / rigid-sign ladder / banner stands / compliance), Majestic premium print (business-card upsell), and the **2026 election-year** campaign play. Includes a cross-sell cheat sheet + stat ammo. Linked from [[venus-sales-playbook]]. Guardrails: quote from [[master-price-sheet]] only, never name 4over/B2Sign (lean on "locally produced in LA" — Glendale plant), free proof + 5 biz days from approval. (SS_1082/1085/1088/1094 too large to batch-read — re-ingest individually if wanted. Catalog rebrand still on hold — Carlos building in Claude Design.)

## [2026-06-18] update | Venus email signature + hosted headshot

Hosted Venus's headshot on the Shopify CDN (`cdn.shopify.com/s/files/1/0731/3886/4164/files/venus-castro-headshot.png`, MediaImage 35953724948516, 1254×1254). Built 3 paste-ready email-signature options (A photo+CTA+trust [rec primary], B compact [replies], C trust-forward) wired with IG `instagram.com/promongrow` + review link `g.page/r/CV_K7jgJCVkPEBM/review` — files in "P&G Marketing Collateral/" (venus-email-signature-FINAL.html). New 4over sales collateral (white-label LFC catalog, sell sheets, "how to sell" guides) dropped in raw/ — catalog P&G-branding ON HOLD (Carlos building it in Claude Design); the "how to sell" sheets = Venus enablement, to fold into [[venus-sales-playbook]] when ingested. ⚠️ Don't attach the 27MB catalog to cold email — host + link only.

## [2026-06-18] update | Auto queue rebuild — Tier 0 refreshed from live drafts (~$12K open quotes: Shadi Safai $5,838 across 3, #D77 $3,400, Leslie $1,250, Yoni $720, Karen $472 fresh today). Tier 2 unchanged (no new orders since 6/15).

## [2026-06-18] update | Built the PNG cold-email segment copy

Wrote [[cold-email-segment-copy]] — ready-to-paste, segment-tailored cold-email copy for the [[apollo-net-new-list]] segments, on the [[cold-email-sequence]] cadence + deliverability rules. Full 3-touch EN sequences for event planners + breweries (+ ES Touch-1 for planners), Touch-1 openers for caterers / real estate / party rentals (partner angle), a segment angle table, and a subject-line bank. Honest SLA ("5 business days from proof approval") throughout. Drops into Apollo from the P&G mailbox once connected + the list revealed.

## [2026-06-18] update | Apollo two-brand setup (page + PDF); enrichment hit a wall

Filed [[apollo-two-brand-setup]] (how to run P&G + Proágo on ONE Apollo seat — per-brand mailbox, folders/prefixes, pros/cons) + a 2-page architecture/walkthrough **PDF** ("Apollo-Two-Brand-Setup.pdf", parent repo). Apollo account check: 1 mailbox (`carlos@proagobranding.co`, Proágo), 0 sequences, **4,128 lead credits**. The gap before any P&G send: connect a P&G sending mailbox (cold domain).

Enrichment of the top 27 prospects via MCP `apollo_people_bulk_match` did **NOT match** (0 records, **0 credits**) on first_name+org or first_name+domain — Apollo's match needs full name / email / LinkedIn, which the people-search masks. Reliable path recorded on [[apollo-net-new-list]]: reveal in the Apollo UI by adding the saved search to a `PNG ·` list/sequence (reveals on add), from the PNG folder/mailbox.

## [2026-06-17] update | PDF for Venus, daily queue auto-rebuild, Apollo net-new list

Delivered three: (1) a branded 2-page **PDF** (follow-up playbook + work queue) → "Venus Onboarding Kit/PDF/Venus-Playbook-and-Queue.pdf" (generated from HTML via Chrome headless; HTML source alongside). (2) A **daily auto-rebuild** of [[venus-work-queue]] — durable weekday 7:13am PT cron (job 451f3bd6) that re-pulls live orders; SESSION-ONLY (fires while Claude Code is open; auto-expires 7 days — re-arm weekly, or move to a cloud routine for hands-off). (3) [[apollo-net-new-list]] — net-new LA prospecting via Apollo across 5 ICP segments (event planners ~2,750, real estate ~4,100, catering ~380, breweries ~38, party rentals ~9). Decision-makers pulled (names masked); emails/phones need Apollo enrichment (credits) — pending Carlos's go. Cold supply → [[cold-email-sequence]]; responders → Venus.

## [2026-06-17] update | Follow-up playbook + Del Rio/Smile Klub revive; email-engagement path

Both open deals (#D77 Del Rio $3,400, Smile Klub) went cold — not answering Carlos or Venus. Decision: **do NOT pause Venus** (her queue is full of warmer leads — Fútbol inbound, 11 recent-buyer reorders, reactivation hot-23). Built [[deal-followup-playbook]] — the canonical follow-up cadence + pattern-interrupt toolkit (takeaway / 1-2-3 reply, down-sell, diagnostic), objection table, Won/Nurture/Dead discipline, ganas templates. Updated [[venus-work-queue]] Tier 0 to the revive protocol.

Email engagement: Carlos wants the last-10-email engagers added to Venus's list. Per-recipient opens/clicks are **NOT exposed via the Shopify connector** (no engagement segment; `marketingActivities` returns empty; segments are tag/order/subscription-based only — verified 2026-06-17). Path: export/tag Clicked+Opened from Shopify Email campaign reports → tag `eng:hot` / `eng:warm` → Claude-admin merges into [[venus-work-queue]]. Repeat-purchaser + subscribed-reactivation segments offered as proxies. Documented on [[deal-followup-playbook]].

## [2026-06-17] update | Built Venus's work queue from live order data

Pulled live Shopify orders (last ~60 days) and built [[venus-work-queue]] — her prioritized start-here queue for 6/18: **Tier 0** close-first (#D77 $3,400 Del Rio/Temo, Smile Klub), **Tier 1** Summer-of-Fútbol inbound (email confirmed SENT 6/17 by Carlos), **Tier 2** reorder/upsell on 11 recent non-institutional buyers (product + angle; `sogate.org`/institutional excluded), **Tier 3** reactivation hot-23 + whales. Notable: Pathita Whitaker (VIP $2,566) reorder + cross-sell; German Hernandez @ Airgas links to the 62-order whale; event-adjacent buyers (Cynthia banners, Cristian/Salsa Culichi food brand) flagged for tent/display cross-sell. Slack: corrected [[slack-workspace-setup]] — workspace `progobrandingdept` has #promo-and-grow (Carlos↔Venus) + #promongrow_site_builder-order_manager (not empty).

## [2026-06-17] ingest | Library ingest COMPLETE — all 9 clusters, +18 pages (50 total)

Resumed the workflow after the limit reset; the 6 pending clusters finished. Filed 18 new pages: build-specs → [[concierge-conversion-build]], [[quote-app-evaluation]], [[bilingual-build-spec]], [[email-send-preflight]], [[customer-journey-map]], [[ninety-day-roadmap]], [[spanish-money-page-copy]]; growth-offensive → [[growth-offensive]], [[cold-email-sequence]], [[meta-lead-form]], [[competitive-war-room]]; venus-kit → [[venus-onboarding-kit]], [[venus-sales-playbook]]; sop-library → [[sop-library]], [[day-1-run-of-show]]; summer-of-futbol → [[summer-of-futbol-campaign]]; status-and-misc → [[theme-build-status]], [[reactivation-outreach]].

Material corrections / news:
- **TRACKING:** build-status 6/16 shows Meta Pixel `1205589804645510` + Google Ads `AW-17631020505` ARE live; only `google_ads_quote_label` is BLANK (quote submits not yet counted). Supersedes the older "nothing installed" note — corrected [[dashboard]] + [[lead-machine]].
- **THEME:** Phase 1 (verify bridge) + Phase 2 (organic baseline) COMPLETE as of 2026-06-16 (Dawn 15.x, id 171153293348). See [[theme-build-status]].
- **LIVE DEALS:** #D77 $3,400 (Del Rio Brewing / ask for Temo); Smile Klub Dental ($1,788 fix / $4,800 full).
- **BUNDLES:** Carlos confirmed the **custom on-site builder is the price source of truth**; the Shopify bundle products ($668/$823/$857) are stale → Claude Code to sync up to the builder. Recorded on [[master-price-sheet]].
- **SUMMER OF FÚTBOL:** EN email send-ready for Jun 17 2026; +$4–8K target; hero = Watch-Party Kit (Event Pro Bundle $857); order-by Jun 26. See [[summer-of-futbol-campaign]].

Contradictions to reconcile: AOV ~$350 current vs ~$400 bundle-target; speed-to-lead 5-min ([[lead-machine]]) vs <15-min (scorecard) vs <1hr (growth-offensive); reactivation universe 162 curated vs ~1,221 email segments (Reactivation-Apr2026 647 + Reactivation-2026 574); cost-per-sale <$60–70 (6/08) vs cost-per-closed-deal <$130 (6/15); cold domain promotengrow.com vs promongrow.com; legacy name PrintCo Direct vs Print Code Direct; theme guide (raw/CLAUDE.md) superseded by the live 6/16 build (nav/footer/logo).

## [2026-06-17] ingest | Library ingest (partial — 3/9 clusters; hit session limit)

Launched a 9-cluster background workflow to ingest the full operating library. **3 clusters completed + filed:** [[hiring-and-screening]] (people), [[email-library]] + [[content-engine]] (programs). **6 clusters FAILED on the account session/usage limit** (resets 3:20pm PT 2026-06-17): build-specs, growth-offensive, venus-kit, sop-library, summer-of-futbol, status-and-misc — resume after reset (workflow is resumable: same script, cached agents return instantly).

Also built [[reactivation-call-queue]] (deals) from PNG-Venus-Reactivation-CallList.csv: **162 lapsed legacy PRINT/sign accounts** (1,504 lifetime orders; 40 with 10+ orders; 86% are 12mo+ lapsed). Venus completed run-1 (call+email) week of ~Jun 9. Run-2 strategy = value-rank the top accounts + **cross-sell the event-display line**; email sequence carries the long tail; SMS gated on consent (most show Accepts-SMS=no).

New facts (filed to [[dashboard]]): email list **647** on Reactivation-Apr2026; **Email 1 sent Apr 15 2026** (opens+clicks confirmed), Emails 2–15 + flows READY; SHOWUP = free ship over $500; projected passive email revenue **$800–1,700/mo** (unverified); content engine = 20+ posts/mo, **56 Canva designs built**, pillar mix Education 35/Product 30/Client 25/Promo 10. Contradictions to reconcile when the rest ingests: bundle pricing (round vs strike-through), abandoned-cart 2-vs-3 emails, pillar-mix + cadence (Blueprint vs agency guide), Make.com vs [[zapier-automation-roadmap]] tooling overlap. Shopify connector lacks `read_apps` scope (can't audit installed apps via API).

## [2026-06-17] ingest | Pricing framework + Venus context (partial — big-library drop)

Carlos dropped his full operating library into raw/ (~40+ unique docs + many macOS duplicate copies — ` 1`/` 2`/`copy`). Ingested the revenue-critical core this pass: created [[pricing-engine]] (CONFIDENTIAL — ×5 low-ticket / ×2.0 high-ticket, $100 floor, 60%/35% min margin, vendor routing 4over/B2Sign/Tradebanner/Soar Dist) and [[master-price-sheet]] (rep-facing set prices). This **RESOLVES** the pricing `[FILL IN]`s that were gating [[draft-order-quote-system]] and Venus quoting — updated that page (gaps → resolved), [[dashboard]], [[closer-hire]], [[lead-machine]], [[index]].

Confirmed (PNG-Venus-Onboarding-Context-for-Cowork.md): Venus Castro, San Salvador El Salvador (CST, ~1hr ahead of LA), **hours 10am–4pm PT**, $15/hr (+5%/3mo), **pure sales surface kept OFF production/ops** (validates the role split), lead tracking = Shopify tags, route-through pricing for the trial, institutional accounts (South Gate, Lynwood/LUSD, Nova Storage) = Carlos-only / DNC for Venus. $50K = 12–18mo north star (AOV + repeat/institutional lever); $20K = near-term path. Proofs today: Venus sends specs, Carlos proofs with her.

NOT yet ingested (proposed next as a structured workflow): build specs (Concierge-Conversion, Quote-App-Eval, Bilingual, Email-Preflight, Customer-Journey-Map, 90-Day-Roadmap, Spanish-Money-Page-Copy); the Growth-Offensive pack (ColdEmail, Meta lead-form, Competitive War Room, Revenue-by-Source scoreboard); the Venus onboarding kit (~160-lead call list, ramp, scorecard, roleplay, cheat sheet, first-call/follow-up playbooks); the email library + plug-and-play templates; the content engine + calendars + social guide; the Summer of Futbol campaign; the customer CSV (~640 rows); site mockups/wireframes. Heavy duplication flagged for cleanup (raw is immutable — dupes noted, not deleted).

## [2026-06-17] decision | Lead machine designed — 13 pages, ad valve gated on tracking

Co-CEO build session: 5-station parallel design + adversarial feasibility review (7 agents). Carlos's calls this session: ad budget **$500–1K/mo lean**; first paid channel **Google Search**; quotes standardized on **Shopify draft orders**; pipeline = **Google Sheet + Shopify tags** (NOT HubSpot). Created the master [[lead-machine]] + 12 station pages: [[google-search-engine]], [[conversion-tracking-setup]], [[lead-qualification-system]], [[draft-order-quote-system]], [[fulfillment-sop]], [[file-prep-gate]], [[pipeline-ops-spine]], [[lead-tracker-sheet]], [[shopify-tag-taxonomy]], [[slack-workspace-setup]], [[operating-rhythm]], [[zapier-automation-roadmap]].

Feasibility review corrected the plan (filed honestly on [[lead-machine]]): the warm 2.5–3% close must NOT be applied to cold paid leads (cold = 0.2–0.4%); LA CPCs ~$5–7 ($6–12 hero terms); $500/mo ≈ 1–4 qualified leads/mo; realistic CPL $70–150; paid Search is a learning test, not a revenue engine (run-rate ~$2,100/mo vs the $20K goal — peak is Oct–Nov). Killed the SLA overpromise in ad copy ("guaranteed", "3 days for Donut Media") → "5 business days **from proof approval**". Role split: Venus owns Qualify/Propose/Follow-up; Carlos/VA own Fulfill. Tag conflict reconciled to canonical [[shopify-tag-taxonomy]]. Kill-switch: 6-week checkpoint (pause paid if CPL > ~$150 or close < ~15%).

HARD GATE: no ad spend until the Google tag + GA4 + `quote_request_submitted` + call conversions install and verify live (Claude Code lane — [[conversion-tracking-setup]]). Pricing FILL-INs still blank (Carlos). Connectors checked: Shopify ✅, Gmail ✅, Slack ✅ but empty (zero channels).

## [2026-06-17] decision | Resolved: $20K target live, Venus hired, AOV ~$400

Carlos confirmed, resolving first-ingest flags: **live revenue target = $20K/month** (the April $5–8K "bridge" figure is superseded); **Venus is hired** and ~1 week into onboarding (started ~week of Jun 9), on the warm-lead queue; **AOV tracked at ~$400** (goal-math figure; ~$350 is the historical Shopify-checkout average). Updated [[dashboard]], [[the-20k-math]], [[closer-hire]]. Still open: review counts, legacy-voice sweep, uningested specs, workbook `[FILL IN]`s, trust letters.

## [2026-06-17] ingest | First ingest — PNG context library

Ingested 6 sources from `raw/`: PNG-Master-Context-Playbook.md, PNG-Brand-Strategy-and-Voice-Brief.md, PNG-Full-Context_4.14.2026.md, PNG-Closer-Onboarding-Workbook.md, PNG-SMS-Marketing-Playbook.md, PNG-Company-Creative-Brief-for-Andrea.md.

Created 13 content pages + 3 system files:
- **brand/**: [[png-voice]], [[positioning-and-personas]]
- **concepts/**: [[concierge-close]], [[the-20k-math]], [[conversion-bridge]], [[bilingual-spanish-moat]], [[store-and-catalog]]
- **programs/**: [[reactivation-email-sequence]], [[sms-marketing]]
- **people/**: [[closer-hire]], [[josh-craig-donut-media]]
- **deals/**: [[south-gate-account]], [[vip-reactivation-list]]
- **system**: [[dashboard]], [[index]], this log.

Contradictions / ambiguities flagged (full list in [[dashboard]] "To resolve / open"):
1. Revenue target: $20K/month (May) vs $5–8K/month bridge (April).
2. AOV: ~$400 (the $20K math) vs ~$350 (Shopify, April).
3. Google review count and Yelp count vary between sources.
4. Closer "Venus" — onboarding workbook written as if hired, but posts described as still open in May; status to confirm.
5. Voice register: April "shop-foreman" superseded by May *ganas* growth-partner voice (documented as superseded on [[png-voice]]).
6. ~8 referenced deliverables (build specs, Spanish copy, job posts, roadmap, journey map) are not yet in `raw/`.
7. Closer workbook still has many `[FILL IN]` placeholders.
8. Lynwood Unified / Kaiser Permanente trust letters not yet retrieved.
