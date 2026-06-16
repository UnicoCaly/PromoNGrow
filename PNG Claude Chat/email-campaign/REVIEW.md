# Email Send Queue — Promo & Grow

**Workflow:** Shopify Email + saved template trick (one batch session, ~17 min for all 7 campaigns).

**Sender (use for every campaign):**
- From name: `Carlos at Promo & Grow`
- From email: `hello@promongrow.com`
- Reply-to: `hello@promongrow.com`

---

## ▶️ Step 0 — Build the template (do this first, once)

Shopify Email saves time on subsequent campaigns by reusing a template scaffold. Build Email 04 first because it's the locked north star.

1. Shopify admin → **Marketing → Campaigns → Create campaign → Shopify Email**
2. Pick **Blank** template
3. Delete any default blocks Shopify added
4. Click **+ Add section → Custom HTML**
5. Open `shopify-ready/paste-this/email-04-event-season.body.html` → select all → paste into the Custom HTML block
6. Fill in subject/preview/sender from Email 04's row in the queue below
7. Pick recipient: segment **Email subscribers** (628 contacts)
8. **Send test** to yourself → review on Gmail web + iPhone Mail → make sure hero image, 3 bundle cards, copper CTAs all render
9. If clean: **schedule or send**
10. **After it sends** (or as soon as the campaign is finalized): top right menu → **Save as template** → name it `PNG Custom HTML Scaffold`

For every email after this: **Create campaign → My templates → PNG Custom HTML Scaffold → edit the Custom HTML block (paste new body) → adjust subject, preview, recipient → send test → schedule.** Each one takes ~2 min instead of 5.

---

## The queue

Send order matches the recommended cadence in `PNG-Email-Library_5.9.2026.md`. Adjust dates if you want to compress or stretch.

### ☐ Email 04 — Event Season (the template seed)

| | |
|---|---|
| **Body file** | `shopify-ready/paste-this/email-04-event-season.body.html` |
| **Subject** | `Event season is here` |
| **Preview** | `Farmers markets, trade shows, and festivals are booking now.` |
| **Recipient segment** | **Email subscribers** (628) |
| **Send date** | Now (May 19–23 week per spec, but ship as soon as test looks clean) |
| **Caveats** | None — this is the cleanest email to ship first |

---

### ☐ Email 01 — Carlos reactivation note

| | |
|---|---|
| **Body file** | `shopify-ready/paste-this/email-01-carlos-reactivation.body.html` |
| **Subject** | `Quick update from Carlos — Promo & Grow` |
| **Preview** | `A note from the owner — and a way to make your booth show up.` |
| **Recipient segment** | **PNG · Reactivation List (Apr 2026)** (572) |
| **Send date** | This email was already sent on April 15 per the email library — only re-send if you want to re-engage new reactivation contacts added since then. Otherwise skip and start with Email 02 |
| **Caveats** | If sending: pause and verify you're not duplicating to anyone who already got it on April 15 |

---

### ☐ Email 02 — Your booth is a 100 sq ft billboard

| | |
|---|---|
| **Body file** | `shopify-ready/paste-this/email-02-billboard.body.html` |
| **Subject** | `Your booth is a 100 sq ft billboard` |
| **Preview** | `Most vendors don't think about it this way.` |
| **Recipient segment** | **PNG · Reactivation List (Apr 2026)** (572) |
| **Send date** | 7 days after Email 1 was sent (so if Email 1 went April 15 → send Email 2 ~April 22, but you're past that — send within the next 1–2 days to anchor the sequence) |
| **Caveats** | Exclude anyone who has purchased since April 15 (Shopify Email recipient step has this option) |

---

### ☐ Email 03 — Here's what they built

| | |
|---|---|
| **Body file** | `shopify-ready/paste-this/email-03-they-built.body.html` |
| **Subject** | `Here's what they built` |
| **Preview** | `From order to setup in 5 days.` |
| **Recipient segment** | **PNG · Reactivation List (Apr 2026)** (572) |
| **Send date** | 7 days after Email 2 |
| **Caveats** | ⚠️ **Email features "Lynwood Unified" as the case study client.** Before pasting, confirm this is the client you want featured. If you want to swap, edit the body HTML first (look for "Lynwood" mentions and the headline). Exclude purchasers since Email 2. |

---

### ☐ Email 05 — Bundle launch

| | |
|---|---|
| **Body file** | `shopify-ready/paste-this/email-05-bundle-launch.body.html` |
| **Subject** | `Event bundles — save up to $176` |
| **Preview** | `Everything your booth needs. One order. One price.` |
| **Recipient segment** | **Email subscribers** (628) |
| **Send date** | June Week 1 |
| **Caveats** | None — bundle images and pricing match your live site |

---

### ☐ Email 06 — Summer setup checklist

| | |
|---|---|
| **Body file** | `shopify-ready/paste-this/email-06-summer-checklist.body.html` |
| **Subject** | `Your outdoor event setup checklist` |
| **Preview** | `7 things to check before your next event.` |
| **Recipient segment** | **Email subscribers** (628) |
| **Send date** | June Week 3 |
| **Caveats** | None — education-pillar content, soft sell |

---

### ☐ Email 07 — Two booths (VS split)

| | |
|---|---|
| **Body file** | `shopify-ready/paste-this/email-07-setup-vs.body.html` |
| **Subject** | `The booth everyone walked past` |
| **Preview** | `vs. the one with the line. The difference is about $800.` |
| **Recipient segment** | **Email subscribers** (628) |
| **Send date** | July Week 2 |
| **Caveats** | ⚠️ **Two testimonial quotes in this email are placeholders.** Before pasting, edit the body file: find the two `<blockquote>`-style sections and replace with real client testimonials. Or pull from your Google reviews. |

---

### ☐ Email 08 — VIP personal note ⚠️ NOT a campaign

This one is **not** sent through Shopify Campaigns. It's a 1:1 letter.

| | |
|---|---|
| **Body file (reference)** | `shopify-ready/paste-this/email-08-vip-note.body.html` |
| **How to send** | One at a time, from `hello@promongrow.com` or your personal inbox |
| **To** | Identify 2+ order customers (Jennifer Mejia + others). Query your store or check the order history |
| **Personalization** | The `[X] times` reference needs to be filled in with each recipient's actual order count |
| **When** | Send manually, anytime — no schedule |

---

## Pre-flight checklist (do once before the batch session)

- [ ] Verify the SHOWUP discount is configured the way you want — currently `appliesOncePerCustomer: false` (anyone can re-use it on multiple orders). If you want one-per-customer, change it in Shopify admin → Discounts → SHOWUP → "Customer limit" before sending Email 03 (which references SHOWUP in the P.S.)
- [ ] (Optional) Update Email 03 case study language if you don't want Lynwood Unified featured
- [ ] (Optional) Update Email 07 testimonials with real quotes
- [ ] Verify `hello@promongrow.com` is authenticated for sending in Shopify Email (Settings → Notifications → Sender email)

## After the batch

- [ ] Wait 48 hours after each send, check open + click rates in the campaign report
- [ ] If open rate < 25% or click rate < 3% on any email, the issue is usually subject line — A/B-test a shorter or more personal variant
- [ ] Email 08 (VIP) — send individually to repeat customers as you identify them

---

## Image swap workflow (when you have new photos)

When you create the Google Drive Photo Library and want to swap a photo in an email:

1. Add the new photo to the Drive folder
2. Tell me "swap [token] with [Drive file name]"
3. I'll pull from Drive (via Google Drive MCP), upload to Shopify Files (via Shopify MCP), and substitute the URL across the relevant body file(s)
4. You re-paste that body into the campaign in Shopify

Image tokens and current CDN URLs are in `SETUP.md`.
