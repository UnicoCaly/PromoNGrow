# Sent Email Log

**Summary**: The running as-sent record of every warm-list email Carlos actually broadcasts — the exact subject/preview/body that hit inboxes, the diff against the built draft, **and the Shopify Email performance** once it lands. Purpose: refine voice + hooks by comparing what was built to what got sent and how it performed. Newest at top.

**Type**: channel

**Sources**: Carlos-reported send text (pasted post-send) + Shopify Email report screenshots (`Analytics/`, dropped 2026-07-06); built drafts in `Summer Email Arc/` + `4th of July Campaign/`.

**Last updated**: 2026-07-06.

---

## Performance at a glance (warm Shopify list — all-time, pulled 2026-07-06)

| Sent | Email | Subject (as sent) | List | Open | Click | Bounce | Sales |
|---|---|---|---|---|---|---|---|
| Jun 17 12:55p | SoF blast | *Want your patio packed on game day, `{{ data.customer.first_name }}`?* ⚠️ raw tag | 630 | 23% | 1.8% | 0.5% | $0 |
| Jun 26 2:44p | 4th-of-July blast | *Are you ready for the 4th of July?* | 633 | 23% | 1.7% | 0.6% ⚠ | $0 |
| Jul 2 11:00a | Summer-series teaser | *Not enough customers? …a little Promote & Grow* | 635 | 23% | 1.7% | 0.8% ⚠ | $0 |
| Jul 4 8:01a | America-250 toast | *Happy 4th of July from us at Promo & Grow* | 633 | **34%** | 0% (no links) | 0.9% ⚠ | $0 |

**Neutral reads:** opens sit flat at **23%** on the three link-carrying sends; the **America-250 goodwill note jumped to 34%** (owner from-name + holiday morning + first send with a working first-name merge). Clicks **1.7–1.8%**, below the 3% "good" target ([[email-library]]). **$0 attributed sales across all four** — expected under the [[concierge-close]] (email drives reply/call, not a tracked checkout; every send shows **0 sessions / 0 orders** attributed in Shopify). **Bounce is creeping 0.5 → 0.9%** (flagged "at risk" from 6/26 on) — a list-hygiene signal on the aging reactivation list; worth a clean before the next sends. Personalization was **broken on 6/17 + 6/26**, **fixed for 7/4** (details in the entries).

---

## [2026-07-04] America-250 toast — SENT

**Status**: SENT 2026-07-04 8:01am (warm list, 633). **From**: Carlos (owner voice).
**Built draft**: `4th of July Campaign/email-en-america-250.html` (`h2-america-250`; body rewritten to Carlos's copy 2026-07-02).

**Subject (as sent)**: `Happy 4th of July from us at Promo & Grow` — Carlos swapped the built subject (`Carlos here — a toast before you fire up the grill`) for a plainer holiday line.
**Personalization**: ✅ **worked** — the H1 rendered **"Happy 4th, Bob."** This is the **first send using the corrected `{{ customer.first_name }}` tag** (see the merge-tag fix, 2026-07-02). Confirms the fix.
**Body (as sent)**: matches the 7/2 rewrite — "same bet we see our clients taking on the daily / the pursuit of happiness and a more perfect union" + the "Carlos with the Promo & Grow team" sign-off.

**Performance**: open **34%** (best of the four) · click **0%** (no links by design) · bounce 0.9% (at risk) · unsub 0.2% · spam 0% · delivery 99% · **$0 sales / 0 orders** (goodwill, no offer).
**Read**: the no-pitch owner toast pulled the highest open of the set — supports the goodwill-deposit play ([[email-campaign-engine]] give-to-ask) and the value of a real first name in the inbox preview.

## [2026-07-02] Summer-series teaser (rewrite of the closed-Friday build)

**Status**: SENT 2026-07-02 11:00am (warm list, 635). **From**: (Carlos-reported; sender/segments to confirm.)
**Built draft**: `4th of July Campaign/email-en-closed-friday.html` (`h1-closed-friday`) — see [[summer-email-arc]].

**Subject (as sent)**: `Not enough customers? Sounds like you need a little Promote & Grow`
**Preview (as sent)**: `We're expert at getting you customers`

**Body (as sent)**:
> Stop guessing.
>
> Start growing.
>
> Every week, businesses waste money on marketing that looks good but doesn't bring people through the door.
>
> Starting next week, we're changing that.
>
> For the rest of the summer, we'll send you one practical idea every week that you can put to work immediately.
>
> Marketing templates worth stealing, event booth playbooks, retail branding tips, customer psychology, and behind-the-scenes strategies we've seen generate real results.
>
> Ideas that help you Promote & Grow.

**Diff vs. the built draft** (what Carlos changed, for the voice thread):
- **Hook fully pivoted.** Build led with the shop-closure pattern-interrupt ("We're closing the shop Friday" / "And you should close yours too"). Sent version drops the closure angle entirely and leads with a **pain-question + brand-pun** subject. It became a pure value/series-launch email, not a July-4th goodwill note.
- **New opener**: "Stop guessing. / Start growing." — two-word punch lines (on-brand for the [[png-voice]] anti-AI short-rhythm rule).
- **Content promise broadened** beyond event vendors — added *retail branding tips, customer psychology, behind-the-scenes strategies*. Signals the weekly series isn't only for booth/tent buyers.
- **Dropped from the build**: the July-3 closure notice, the "safe & happy 4th" goodwill, and the Saturday-teaser P.S. loop.
- **CTA line** = the brand name as a verb ("Ideas that help you Promote & Grow").

**Flags / lessons**:
1. **Brand-name split.** Subject + preview + sign-off use "**Promote & Grow**" (the [[png-domain-map|promoteandgrow.com]] cold-outbound phrasing) rather than the store brand "**Promo & Grow**." Per [[png-entity-boundaries]] these are kept apart. As deliberate tagline wordplay it reads fine; worth a conscious decision so it's not drift.
2. **Positioning claim.** Preview "We're expert at getting you customers" is a stronger direct-response promise than the build's softer goodwill register — worth an A/B note now that data's in.
3. **Series is now a standing commitment.** "One practical idea every week… for the rest of the summer" is live to the list — locks in the [[summer-email-arc]] value cadence.

**Performance**: open **23%** · click **1.7%** · bounce 0.8% (at risk) · unsub 0.2% · spam 0% · delivery 99% · **$0 sales / 0 orders**. (No first-name token in this copy, so the merge fix wasn't exercised here.)

## [2026-06-26] 4th-of-July blast — SENT (backfilled 2026-07-06)

**Status**: SENT 2026-06-26 **2:44pm** (warm list, 633). **From**: Venus. *(Corrects the earlier wiki note of "6/26 AM" — the report shows 2:44pm.)*
**Built draft**: `4th of July Campaign/email-en.html` (the SoF-framework "Red, white, and ready" blast — see [[fourth-of-july-email-campaign]]).

**Subject (as sent)**: `Are you ready for the 4th of July?` — Carlos swapped the built `Red, white, and ready for the 4th, {{ first_name }}?`, dropping the name token from the subject.
**⚠️ Merge bug**: the body greeting rendered **"Hi ,"** (blank) — this send used the pre-fix `{{ first_name }}` tag, which does not resolve in Shopify Email. Recipients saw a nameless greeting.

**Performance**: open **23%** · click **1.7%** · bounce 0.6% (at risk) · unsub 0% · spam 0.2% (at risk) · delivery 100% · **$0 sales / 0 orders**.

## [2026-06-17] Summer-of-Fútbol blast — SENT (backfilled 2026-07-06)

**Status**: SENT 2026-06-17 12:55pm (warm list, 630). **From**: Venus. See [[summer-of-futbol-campaign]].
**Built draft**: `Summer of Futbol Campaign/email-en.html`.

**Subject (as sent)**: `Want your patio packed on game day, {{ data.customer.first_name }}?` — **⚠️ the merge tag rendered RAW in the subject line.** The `{{ data.customer.first_name }}` form (with the `data.` prefix) did **not** resolve; recipients saw the literal Liquid text. The body greeting was also blank ("Hi ,").

**Performance**: open **23%** · click **1.8%** · bounce 0.5% (Good) · unsub 0% · spam 0% · delivery 100% · **$0 sales / 0 orders**.

**The merge-tag lesson (from 6/17 + 6/26 + 7/4):** confirmed-**broken** forms in Shopify Email are `{{ first_name }}` (renders blank) and `{{ data.customer.first_name }}` (renders raw in the subject). The **working** form is `{{ customer.first_name | default: "…" }}` — proven on the 7/4 send ("Happy 4th, Bob."). Two consecutive sends (6/17, 6/26) went out visibly un-personalized before the fix. Always test-send to a **named** contact.

---

## Related pages
- [[summer-email-arc]]
- [[fourth-of-july-email-campaign]]
- [[summer-of-futbol-campaign]]
- [[png-voice]]
- [[email-library]]
- [[email-campaign-engine]]
- [[concierge-close]]
- [[dashboard]]
- [[png-domain-map]]
- [[png-entity-boundaries]]
