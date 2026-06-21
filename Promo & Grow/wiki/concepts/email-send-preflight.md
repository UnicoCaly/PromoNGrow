# Email-Send Preflight SOP

**Summary**: The ~25-minute pre-flight checklist run before EVERY broadcast email send (campaigns, not automations) — keeps emails out of spam and stops broken links/codes from reaching customers. Owner: VA · Approver: Carlos.
**Type**: concept
**Sources**: PNG-Email-Send-Preflight-SOP.md
**Last updated**: 2026-06-17.

---

## Purpose & ownership

Run this before every broadcast email send (campaigns, NOT automations). Following it keeps emails out of spam and prevents broken links/codes from reaching customers. **Owner:** VA · **Approver:** Carlos · **Time:** ~25 min (source: PNG-Email-Send-Preflight-SOP.md). Gating SOP for the [[reactivation-email-sequence]] and the broader [[email-library]].

## One-time setup (do once, then it stays done)

Complete as of May 2026 — listed so it can be re-verified if anything breaks (source: PNG-Email-Send-Preflight-SOP.md):

- **Shopify sender domain authenticated.** Settings → Notifications → Sender email shows `hello@promongrow.com` with a green "Authenticated" badge.
- **DMARC record live.** Squarespace DNS has ONE TXT record on host `_dmarc`: `v=DMARC1; p=none; rua=mailto:hello@promongrow.com; pct=100; adkim=r; aspf=r`
- **Single SPF record.** Host `@` has exactly ONE TXT record starting with `v=spf1` (duplicates break authentication).
- **Single DMARC record.** Only ONE TXT record on `_dmarc`.

> Future optimization (NOT before a send): once DMARC `rua` reports look clean for ~2 weeks, tighten `p=none` → `p=quarantine`. Do it on a quiet day, never the day before a campaign (source: PNG-Email-Send-Preflight-SOP.md).

## Every-send checklist

**1. Fix the email code before pasting (per email)** (source: PNG-Email-Send-Preflight-SOP.md):
- Find-and-replace `{% unsubscribe %}` → `{{ unsubscribe_link }}` (this is the "Syntax not valid on line ~107" error).
- Replace any `https://bit.ly/3REpAhn` links with the real destination — brand/teaching emails → `https://promongrow.com`; bundle emails (04, 05, 07) → `https://promongrow.com/collections/bundles`.
- If the email quotes bundle prices, use "Starting at $X — save 15%", NOT a hard total (the bundle builder prices live; hard numbers go stale). Ties to [[pricing-engine]].
- Email 08 only: replace `{X} times` with the customer's real order count (or remove the sentence).

**2. Set up the send in Shopify Email:**
- Paste corrected HTML into a new Shopify Email; subject line + preview text entered.
- From: `Promo & Grow — hello@promongrow.com`.
- To / segment correct: Emails 1–7 → full list, EXCLUDE anyone who ordered in the last 30 days; Email 8 (VIP) → repeat buyers only (2+ orders).
- Confirm no leftover `{% %}` tags (Cmd-F for `{%`).

**3. Verify the landing destinations are alive:**
- Click every CTA in the preview — each loads a real, correct page (no 404, no dead bundle).
- If the email promises code SHOWUP, confirm it's active in Shopify → Discounts.

**4. Send a test + confirm authentication (the green light):**
- Send test → your own Gmail → open → 3-dot menu → Show original.
- Confirm all three read PASS: **SPF: PASS · DKIM: PASS · DMARC: PASS**. If any FAIL → STOP, do not send; re-check the one-time DNS items and re-test.
- Proof the test on mobile: images load, no broken layout, links work, unsubscribe shows.

**5. Schedule / send:**
- Schedule for Thursday 10:00 AM PT (or the send-schedule date).
- After sending, log the send (date, subject, segment size) in the tracker. See [[operating-rhythm]].

## Send schedule (Reactivation Sequence — Summer 2026)

(source: PNG-Email-Send-Preflight-SOP.md)

| # | Send (Thu 10am PT) | Email file | Subject | Segment | Links to |
|---|---|---|---|---|---|
| 1 | May 28* | email-01-carlos-reactivation | A quick note from our shop | Full, excl. 30-day buyers | Home |
| 2 | Jun 4 | email-02-billboard | Your booth is a 100 sq-ft billboard | Same | Home |
| 3 | Jun 11 | email-03-they-built | Here's what they built in 5 days | Same | /collections/all |
| 4 | Jun 18 | email-07-setup-vs | Two booths. One gets the line. | Same | /collections/bundles |
| 5 | Jun 25 | email-05-bundle-launch | The bundles are here — save 15% | Same | /collections/bundles |
| 6 | Jul 9 | email-06-summer-checklist | Steal this 7-point booth checklist | Same | /collections/all |
| 7 | Jul 16 | email-04-event-season | Event season is here | Same | /collections/bundles |
| 8 | Jul 23 | email-08-vip-note | A personal thank-you — and my direct line | Repeat buyers (2+) | Reply / phone |

*Email 1 sends Tuesday May 28 to launch post-holiday; the rest fall on Thursdays. Skipped Jul 2 (day before July 4 weekend = dead for B2B).

## Deliverability guardrails

- **Cold-list warm-up:** after Email 2, suppress anyone who hasn't opened 1 or 2. Repeatedly mailing non-openers tanks inbox placement — mail the engaged, drop the dead weight.
- Never send the same broadcast twice to the same people in a week.
- One clear primary CTA per email.
- If open rates drop below ~15% or spam complaints rise, pause and check list hygiene before continuing.

(source: PNG-Email-Send-Preflight-SOP.md; SOP last updated May 2026)

## Related pages
- [[reactivation-email-sequence]]
- [[email-library]]
- [[conversion-tracking-setup]]
- [[operating-rhythm]]
- [[vip-reactivation-list]]
