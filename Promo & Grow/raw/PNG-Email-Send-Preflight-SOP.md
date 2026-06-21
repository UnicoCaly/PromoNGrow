# Promo & Grow — Email Broadcast Pre-Flight SOP

**Purpose:** Run this checklist before EVERY broadcast email send (campaigns, not automations).
Following it keeps emails out of spam and prevents broken links/codes from reaching customers.
**Owner:** VA · **Approver:** Carlos · **Time:** ~25 min

---

## ONE-TIME SETUP (do once, then it stays done)

These are already complete as of May 2026 — listed here so you can re-verify if anything ever breaks.

- [ ] **Shopify sender domain authenticated.** Shopify admin → Settings → Notifications → Sender email shows `hello@promongrow.com` with a green **"Authenticated"** badge.
- [ ] **DMARC record live.** In Squarespace DNS there is ONE TXT record on host `_dmarc` with value:
  `v=DMARC1; p=none; rua=mailto:hello@promongrow.com; pct=100; adkim=r; aspf=r`
- [ ] **Single SPF record.** In Squarespace DNS, host `@` has exactly ONE TXT record starting with `v=spf1` (not two — duplicates break authentication).
- [ ] **Single DMARC record.** Only ONE TXT record on `_dmarc` (duplicates break it).

> Future optimization (NOT before a send): once DMARC `rua` reports look clean for ~2 weeks,
> tighten the policy from `p=none` to `p=quarantine`. Do this on a quiet day, never the day before a campaign.

---

## EVERY-SEND CHECKLIST

### 1. Fix the email code before pasting (per email)
- [ ] Find-and-replace `{% unsubscribe %}` → `{{ unsubscribe_link }}` (this is the "Syntax not valid on line ~107" error).
- [ ] Replace any `https://bit.ly/3REpAhn` links with the real destination:
  - Brand/teaching emails → `https://promongrow.com`
  - Bundle emails (04, 05, 07) → `https://promongrow.com/collections/bundles`
- [ ] If the email quotes bundle prices, use **"Starting at $X — save 15%"**, NOT a hard total
  (the bundle builder prices live; hard numbers go stale).
- [ ] Email 08 only: replace `{X} times` with the customer's real order count (or remove the sentence).

### 2. Set up the send in Shopify Email
- [ ] Paste the corrected HTML into a new Shopify Email.
- [ ] Subject line + preview text entered (see send schedule).
- [ ] **From:** `Promo & Grow — hello@promongrow.com`
- [ ] **To / segment** is correct:
  - Emails 1–7 → full list, EXCLUDE anyone who ordered in the last 30 days
  - Email 8 (VIP) → repeat buyers only (2+ orders)
- [ ] Confirm no leftover `{% %}` tags anywhere (Ctrl/Cmd-F for `{%`).

### 3. Verify the landing destinations are alive
- [ ] Click every CTA in the preview — each one loads a real, correct page (no 404, no dead bundle).
- [ ] If the email promises code **SHOWUP**, confirm it's active in Shopify → Discounts.

### 4. Send a test + confirm authentication (the green light)
- [ ] Click **Send test** → send to your own Gmail.
- [ ] Open it in Gmail → 3-dot menu → **Show original**.
- [ ] Confirm all three read **PASS**: **SPF: PASS · DKIM: PASS · DMARC: PASS**.
  - If any FAIL → STOP. Do not send. Re-check the one-time DNS items above and re-test.
- [ ] Proof the test on mobile: images load, no broken layout, links work, unsubscribe shows.

### 5. Schedule / send
- [ ] Schedule for **Thursday 10:00 AM PT** (or the date on the send schedule).
- [ ] After sending, log the send (date, subject, segment size) in the tracker.

---

## SEND SCHEDULE (Reactivation Sequence — Summer 2026)

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

*Email 1 sends Tuesday May 28 to launch the sequence post-holiday; the rest fall on Thursdays.
Skipped Jul 2 (day before July 4 weekend = dead for B2B).

---

## DELIVERABILITY GUARDRAILS

- **Cold list warm-up:** after Email 2, suppress anyone who hasn't opened 1 or 2. Sending to non-openers
  repeatedly tanks inbox placement. Mail the engaged, drop the dead weight.
- **Never** send the same broadcast twice to the same people in a week.
- Keep one clear primary CTA per email.
- If open rates drop below ~15% or spam complaints rise, pause and check list hygiene before continuing.

---

*Last updated: May 2026. Update the send schedule and segments as the program evolves.*
