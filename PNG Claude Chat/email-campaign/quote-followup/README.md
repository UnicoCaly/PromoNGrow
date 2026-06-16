# Quote Follow-Up Email Sequence

**Pairs with:** the concierge quote modal (§2 of the Concierge Conversion System spec). When someone submits a free-proof / quote request through the modal — or through any contact-form path tagged with `Inquiry Type: Quote Request — Free Proof` — these three emails close the loop so quotes don't die silent.

**Tone:** Soft, helpful, deadline-aware. No guilt, no fake urgency. Carlos voice.

---

## The three emails

| When | File | Purpose |
|---|---|---|
| Day 1 | `quote-day-1.html` (body in `paste-this/quote-day-1.body.html`) | "Your proof is ready — any tweaks?" Re-anchor that the proof is back, make approval easy |
| Day 3 | `quote-day-3.html` (body in `paste-this/quote-day-3.body.html`) | "Any questions before you lock it in?" Soft check-in + invite to call |
| Day 7 | `quote-day-7.html` (body in `paste-this/quote-day-7.body.html`) | "Your event is coming — want to start the 5-day clock?" Deadline math, no pressure |

Same design system as the campaign emails (`shopify-ready/`): DM Serif Display + DM Sans, cream/navy/copper, 640px wrapper, table-based layout, mobile responsive, `{{ customer.first_name | default: "there" }}` merge tags, `{{ unsubscribe_link }}`, `{{ open_tracking_block }}`, per-email UTM tagging on every link.

UTM campaign values:
- Day 1: `quote-day-1`
- Day 3: `quote-day-3`
- Day 7: `quote-day-7`

UTM medium for all three: `quote-followup` (distinguishes from the broadcast campaigns).

---

## How to trigger the sequence — three paths, easiest first

### Path A — Manual segment send (simplest, no automation setup)

1. When a quote request comes in (or you create a draft order from it), tag the customer with `quote-pending-YYYYMMDD` (today's date) in Shopify admin → Customers.
2. Create a Shopify Email segment: `customer_tags CONTAINS 'quote-pending-' AND days since added = 1` for Day 1, `= 3` for Day 3, `= 7` for Day 7.
3. Each morning, open the segment(s) and send the corresponding campaign.

**Pro:** zero automation. **Con:** requires Carlos to remember each day.

### Path B — Shopify Flow + Shopify Email (semi-automated)

1. In Shopify Flow (free), create a workflow:
   - **Trigger:** Customer tag added (`Quote Request`)
   - **Wait:** 1 day → **Action:** Add tag `quote-day-1-due`
   - **Wait:** 2 days → **Action:** Add tag `quote-day-3-due`
   - **Wait:** 4 days → **Action:** Add tag `quote-day-7-due`
2. In Shopify Email, create three automation flows triggered by "Customer tag added" (each one watches for the corresponding `quote-day-X-due` tag).
3. Paste the body files into the campaign editor for each.

**Pro:** auto-sent, no manual work after setup. **Con:** Shopify Email automation has limited trigger options — Flow does the heavy lifting via tags. ~30 min to wire up.

### Path C — Klaviyo or other ESP with proper automation

If you eventually migrate campaign sending to Klaviyo (recommended once volume justifies $30/mo), you can build this as a proper flow triggered by the `quote_request_submitted` event we already push to dataLayer (see `snippets/png-analytics-events.liquid`). Klaviyo + Shopify integration auto-syncs.

**Pro:** real triggered automation, full deliverability + reporting. **Con:** another tool + monthly cost.

---

## Setup — how to paste each email into Shopify Email

Same workflow as the campaign emails in `email-campaign/REVIEW.md`:

1. **Marketing → Campaigns → Create campaign → Shopify Email** (or **Automations** if using Path B)
2. Pick **Blank** template, delete default blocks
3. Add a **Custom HTML** block
4. Open `paste-this/quote-day-X.body.html` → select all → paste
5. Subject + preview text (from each file's title and preheader span):

| Email | Subject | Preview |
|---|---|---|
| Day 1 | `Your proof is ready — any tweaks?` | `Reply with anything you want changed.` |
| Day 3 | `Any questions before you lock it in?` | `Happy to jump on a quick call.` |
| Day 7 | `Your event is coming — want to start the 5-day clock?` | `Production math + a path to lock it in.` |

6. Sender: Carlos at Promo & Grow `<hello@promongrow.com>`
7. Recipients: per the trigger path you picked above
8. Send test → review → ship

---

## A note on the message text

These intentionally don't reference any specific product/event — the trigger only knows "this person requested a quote." If you want them product-aware ("Your tent proof is ready"), you'd need to switch to Klaviyo (Path C) which can pass the product context from the form into the email template via merge tags. Day 1 hints at the proof generically; Day 3 doesn't mention product at all; Day 7 leans on the event-date framing which the user themselves provided in the form.

Day 7's signoff line ("Not the right time? No hard feelings — I'll be here when your next event rolls around") is the soft close that prevents annoyance and keeps the door open for the next event cycle.

---

## When NOT to send these

- If the quote has already been paid (i.e., the draft order converted to an order) — Shopify Email's exclusion filters handle this if you check the "Exclude customers with orders since the campaign trigger" option.
- If the customer replied directly to the proof email — you're already in a conversation, the auto-sequence becomes noise. If using Path A, just don't add the next day's tag for that customer.
- If the customer requested removal from follow-ups — `{{ unsubscribe_link }}` handles this; the standard segment filters will skip them.
