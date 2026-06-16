# Promo & Grow — Abandoned Cart Sequence + Exit Popup

**Created:** May 9, 2026
**Platform:** Shopify Email Automations + Custom Liquid/JS

---

## ABANDONED CART SEQUENCE — 3 Emails

### Strategy
Escalation model: reminder → confidence → incentive. 
No discount until Email 3. Most recoveries happen in Email 1 (simple reminder). 
Email 2 adds trust signals for hesitant buyers. 
Email 3 drops the shipping incentive for the holdouts.

Expected recovery rate: 8-15% of abandoned carts across all 3 emails.

---

### Cart Email 1 — Simple Reminder (1 hour after abandonment)

**Trigger:** Cart abandoned, 1 hour delay
**Goal:** Catch the "I got distracted" buyer — no selling, just a nudge

**Subject:** You left something behind
**Preview text:** Your custom display is still in your cart.

**Body:**

Hey [First Name],

You started an order but didn't finish. Your cart is still saved:

[DYNAMIC CART CONTENTS — Shopify auto-populates product image, title, variant, price]

Tap below to pick up where you left off.

[Complete your order → button linking to cart]

Questions about your order? Reply to this email or call (844) 883-3308.

— Promo & Grow

**Design notes:**
- Minimal styling — this should feel like a transactional notification, not a marketing email
- One CTA button: copper (#C17A3A), "Complete your order"
- Product image from cart displayed prominently
- No footer CTA, no additional selling, no discounts
- Short. Under 50 words of body copy.

---

### Cart Email 2 — Confidence Builder (24 hours after abandonment)

**Trigger:** 24 hours after abandonment, only if Email 1 didn't convert
**Goal:** Remove buying anxiety — address the "I'm not sure about ordering custom prints online" hesitation

**Subject:** Still thinking about it?
**Preview text:** Here's why 19 businesses on Google gave us 4.8 stars.

**Body:**

[First Name],

Still on the fence? Here's what you should know before you decide:

✓ Free artwork proof — we send you a digital proof before anything prints. You approve it, then we produce. Nothing is printed without your sign-off.

✓ 5-day guaranteed delivery — nationwide. Not an estimate. A guarantee.

✓ We've been doing this for 20+ years — your files are reviewed by real production experts, not an algorithm.

✓ 4.8★ on Google — here's what a recent client said:

"The canopy setup turned out absolutely killer! Over 100% recommend!" — Other Off Road Guys

Your cart is still saved:

[DYNAMIC CART CONTENTS]

[Complete your order → button]

Questions? Just reply or call (844) 883-3308. We pick up.

— Carlos, Promo & Grow

**Design notes:**
- Slightly more designed than Email 1 — include trust badges (stars, delivery icon)
- Checkmarks in trust green (#1E6B4A)
- Testimonial styled as a quote card with stars
- Still one primary CTA button
- No discount. The trust signals ARE the incentive.

---

### Cart Email 3 — Shipping Incentive (72 hours after abandonment)

**Trigger:** 72 hours after abandonment, only if Emails 1 and 2 didn't convert
**Goal:** Final push — this is the only email with an incentive

**Subject:** Free shipping on your order — just this once
**Preview text:** Use code SHOWUP before it expires.

**Body:**

[First Name],

Last note about your cart — then I'll leave you alone.

Your order is still saved:

[DYNAMIC CART CONTENTS]

I'd like to make this easier: use code SHOWUP at checkout for free shipping on orders over $500.

This code is for first-time customers and it won't last forever. If your cart is over $500, this saves you $40-80+ depending on where you're located.

Here's the quick version of why people order from us:

→ 5-day delivery, guaranteed
→ Free proof before production
→ 4.8★ on Google, 20+ years in production
→ Made in the USA

[Complete your order with free shipping → button]

If you've decided this isn't for you right now — no hard feelings. We'll be here when your next event comes around.

— Carlos
Promo & Grow
(844) 883-3308

**Design notes:**
- SHOWUP code should be visually prominent — styled as a code block or badge
- This is the ONLY email with a discount/incentive
- "Last note" framing respects the buyer's attention — no guilt, no desperation
- Soft close: "no hard feelings" prevents unsubscribes from people who won't buy
- If their cart is under $500, the code doesn't apply but the email still serves as a final reminder

---

## SHOPIFY EMAIL AUTOMATION SETUP

### Step-by-step:

1. **Shopify admin → Marketing → Automations → Create automation**
2. Select **"Abandoned checkout"** template (or create custom)
3. Configure the workflow:

```
TRIGGER: Customer abandons checkout
  ↓
WAIT: 1 hour
  ↓
SEND: Cart Email 1 (Simple Reminder)
  ↓
CONDITION: Did NOT place an order?
  ↓
WAIT: 23 hours (total 24 hours from abandonment)
  ↓
SEND: Cart Email 2 (Confidence Builder)
  ↓
CONDITION: Did NOT place an order?
  ↓
WAIT: 48 hours (total 72 hours from abandonment)
  ↓
SEND: Cart Email 3 (Shipping Incentive)
  ↓
END
```

4. For each email step:
   - Paste the subject line
   - Use Shopify's email editor to build the body
   - The cart contents block is a built-in Shopify Email component — drag "Abandoned checkout" block into the template
   - Style the CTA button: background #C17A3A, white text, border-radius 5px
   
5. **Activate the automation** — it runs for every future abandoned checkout automatically

### Important settings:
- **Exclude customers who have already purchased** — Shopify handles this automatically when using the "Abandoned checkout" trigger
- **Send from:** hello@promongrow.com
- **Reply-to:** hello@promongrow.com (so replies actually reach Carlos)

---

## EXIT POPUP — Bundle Push

**Replaces:** Current Popup B (first-order confidence builder)
**Fires on:** Exit intent (cursor moves toward browser close/back)
**Pages:** Product pages and collection pages only (NOT homepage, NOT cart, NOT checkout)
**Frequency:** Once per session. Does not show again if dismissed.
**Mobile:** Fires when user scrolls up rapidly (mobile exit-intent signal)

### Design:

```
┌─────────────────────────────────────────┐
│                                    [X]  │
│                                         │
│  ┌───────┐ ┌───────┐ ┌───────┐         │
│  │ tent  │ │ flag  │ │ table │         │
│  │ photo │ │ photo │ │ photo │         │
│  └───────┘ └───────┘ └───────┘         │
│                                         │
│     Before you go —                     │
│     BUNDLE AND SAVE 15%                 │
│                                         │
│  Tent + flag + table throw.             │
│  One order. 5-day delivery.             │
│                                         │
│  ┌─────────────────────────────┐        │
│  │  Starting at $668           │        │
│  │  (saves you $100+)          │        │
│  └─────────────────────────────┘        │
│                                         │
│  [████ View bundles — save 15% ████]    │
│                                         │
│  No thanks, I'll keep browsing          │
│                                         │
└─────────────────────────────────────────┘
```

### Specifications:

**Container:**
- Background: #FFFFFF
- Border-radius: 12px
- Max-width: 420px
- Centered modal on dark overlay (rgba(0,0,0,0.4))
- Padding: 28px

**Close button:**
- Top right, "×" character
- Color: #ccc, 18px
- Hover: #999

**Product image strip:**
- 3 small product images in a row (your best tent, flag, and table throw photos)
- Each image: 100px wide, aspect ratio 1:1, border-radius 6px, object-fit cover
- Pulled from actual Shopify product featured images via Liquid:
  - 10x10 Event Tent featured image
  - Teardrop Flag featured image
  - Stretch Table Cover featured image
- Gap: 10px between images
- Centered in the popup

**Headline:**
- "Before you go —" on line 1
  - Font: DM Sans, 14px, weight 400, color #999
- "Bundle and save 15%" on line 2
  - Font: DM Serif Display, 24px, weight 400, color #1B2838
- Margin-top: 16px below images

**Subtext:**
- "Tent + flag + table throw. One order. 5-day delivery."
- Font: DM Sans, 13px, color #6C757D, line-height 1.6
- Margin-top: 8px

**Price callout:**
- Background: #F7F7F5
- Border-radius: 8px
- Padding: 12px 16px
- Text-align: center
- "Starting at $668" — DM Sans, 18px, weight 500, color #1B2838
- "(saves you $100+)" — DM Sans, 12px, color #1E6B4A (trust green)
- Margin-top: 16px

**CTA button:**
- Full width
- Background: #C17A3A
- Color: #FFFFFF
- Padding: 14px
- Border-radius: 5px
- Font: DM Sans, 14px, weight 500
- Text: "View bundles — save 15%"
- Links to: /collections/bundles
- Hover: background #A8682F
- Margin-top: 16px

**Dismiss link:**
- "No thanks, I'll keep browsing"
- Font: DM Sans, 12px, color #999
- Text-align: center
- Cursor: pointer
- Margin-top: 10px
- On click: close popup, set session cookie to prevent re-trigger

---

### Claude Code Prompt — Exit Popup

Paste this into Claude Code to build and replace the current popup:

```
Read CLAUDE.md and PRD.md. Replace the current first-order confidence popup (Popup B) with a new exit-intent bundle popup. Find the existing popup code — it's likely in sections/custom-popup.liquid or snippets/popup-confidence.liquid or inline in layout/theme.liquid. Remove it entirely and replace with the following:

Create a new exit-intent popup that fires when the user's cursor moves toward the top of the browser window (mouseout event on document, checking if e.clientY < 10). On mobile, fire when the user scrolls up more than 100px rapidly.

The popup only shows:
- On product pages and collection pages (NOT homepage, cart, or checkout)
- Once per session (use sessionStorage to track)
- After the user has been on the page for at least 5 seconds

Popup HTML structure:
1. Dark overlay (position fixed, inset 0, background rgba(0,0,0,0.4), z-index 9999)
2. White modal centered (max-width 420px, background #fff, border-radius 12px, padding 28px, position fixed, top 50%, left 50%, transform translate(-50%, -50%))
3. Close button top-right: × character, color #ccc, font-size 18px, cursor pointer, position absolute top 12px right 16px
4. Product image strip: flex row, 3 images, each 100px width, aspect-ratio 1/1, border-radius 6px, object-fit cover, gap 10px, justify-content center. Use these Shopify product handles to pull featured images:
   - {{ all_products['10ft-x-10ft-event-tent-canopy'].featured_image | image_url: width: 200 | image_tag }}
   - {{ all_products['feather-convex-flag-copy'].featured_image | image_url: width: 200 | image_tag }}
   - {{ all_products['stretch-table-cover'].featured_image | image_url: width: 200 | image_tag }}
5. Text block:
   - "Before you go —" in 14px #999 DM Sans weight 400
   - "Bundle and save 15%" in 24px #1B2838 DM Serif Display weight 400
   - "Tent + flag + table throw. One order. 5-day delivery." in 13px #6C757D
6. Price card: background #F7F7F5, border-radius 8px, padding 12px 16px, centered
   - "Starting at $668" in 18px weight 500 #1B2838
   - "(saves you $100+)" in 12px #1E6B4A
7. CTA button: full width, background #C17A3A, color white, padding 14px, border-radius 5px, font-size 14px weight 500, text "View bundles — save 15%", links to /collections/bundles
8. Dismiss: "No thanks, I'll keep browsing" in 12px #999, centered, cursor pointer, closes popup

JavaScript:
- Exit intent detection: document.addEventListener('mouseout', function(e) { if (e.clientY < 10) showPopup(); })
- Mobile: track scroll position, if user scrolls up > 100px in < 300ms, trigger popup
- Session control: if (sessionStorage.getItem('png_exit_shown')) return; — set on show
- Page delay: setTimeout to enable after 5 seconds on page
- Close on × click, dismiss link click, or overlay click
- Do NOT show on pages with 'cart' or 'checkout' in the URL
- Do NOT show on the homepage (template == 'index')

CSS: all styles inline or in a <style> block within the section. Animate in with opacity 0 to 1, transform scale(0.95) to scale(1), transition 0.2s ease.

Put this in snippets/popup-exit-bundle.liquid and include it in layout/theme.liquid before the closing </body> tag. Remove any references to the old confidence popup.

Commit and push.
```

---

## IMPLEMENTATION PRIORITY

| Priority | Task | Time | Impact |
|----------|------|------|--------|
| 1 | Set up abandoned cart automation (3 emails) | 30 min | Highest — recovers lost revenue 24/7 |
| 2 | Replace exit popup with bundle push | 15 min (Claude Code) | High — catches leaving visitors |
| 3 | Send Cart Email 1 test to yourself | 5 min | Verify formatting before it goes live |
| 4 | Activate the automation | 1 click | It's running |

---

## EXPECTED IMPACT

### Abandoned Cart Recovery
- Industry average recovery rate: 5-10%
- With 3-email sequence + shipping incentive: 10-15%
- At your AOV (~$350): recovering 2 carts per month = ~$700/month in saved revenue
- This is pure margin — these are sales that would otherwise be $0

### Exit Popup Conversion
- Industry average for exit-intent: 2-4% of exits
- Bundle-focused popup at 15% savings is a strong hook
- Even at 1% conversion on exits: if 100 people see it monthly and 1 converts to a $668 bundle, that's $668/month
- The popup costs nothing to run

### Combined Monthly Impact Estimate
- Abandoned cart recovery: $500-1,000/month
- Exit popup conversions: $300-700/month
- Total: $800-1,700/month in revenue that currently walks away

This is the passive income layer you asked for on day one — systems that generate revenue while you sleep.
