# Zapier Automation Roadmap

**Summary**: The prioritized queue of Zapier automations that will later remove the manual steps from the pipeline spine. Ordered by friction removed per unit of effort. Nothing here runs until the manual rhythm is habitual and Carlos toggles each Zap on — automate the proven manual step, never an unproven one.

**Type**: concept

**Sources**: co-CEO build session 2026-06-17; PNG-Master-Context-Playbook.md.

**Last updated**: 2026-06-17.

---

## The principle

The spine is manual-first by design. Each Zap below replaces a step Venus is already doing by hand, only after that step is a proven habit — automating a broken process just breaks it faster. Carlos toggles them on; Claude-admin designs them. Goal: chip toward 85%-automated by year-end (source: the-20k-math.md, dashboard.md). (co-CEO recommendation)

## The prioritized list

**1. Sheet Stage → Shopify `stage:` tag sync.** (highest value)
When the **Stage** column changes in the [[lead-tracker-sheet|Sheet]], swap the matching `stage:` tag on the Shopify customer ([[shopify-tag-taxonomy]]). Removes the most-repeated, most-error-prone manual step (the EOD reconcile) and keeps email segments always-current. *Trigger: Google Sheets row updated → Shopify update customer tags.*

**2. Shopify new paid order → Sheet write-back as Won.** (highest value)
When an order is paid in Shopify, find the lead's row (match by email/Lead ID) and set Stage = Won, fill Quote $ / order link. Closes the loop so the Sheet reflects revenue without retyping. *Trigger: Shopify new paid order → Google Sheets update row (or create if new).*

**3. New lead → Sheet row + #leads post.** (high value, speed-to-lead)
New inbound (quote form, GBP message, Apollo reply, inbound email tagged) creates a Sheet row (auto Lead ID, Date In, Source) **and** posts to **#leads** in real time. Directly serves the #1 close factor — speed-to-lead. *Trigger: form/Gmail/Apollo → Google Sheets create row → Slack #leads message.*

**4. New paid order → #orders + #wins post.** (morale + ops visibility)
Paid order auto-announces in **#orders** (with the 5-day due date) and **#wins**. Makes the on-time-delivery KPI and the scoreboard's win reel automatic. *Trigger: Shopify new order → Slack.*

**5. Stalled quote → #quotes reminder.** (recovers hidden revenue)
When a row sits at **Quote Sent** past Day-3 / Day-7 with no stage change, post a follow-up reminder to **#quotes** tagging the owner. Automates the Day-1/3/7 cadence's nagging half. *Trigger: Google Sheets scheduled scan → Slack.*

**6. Won → review-ask trigger (delayed).** (compounds trust)
When Stage = Delivered, wait N days then fire a review-ask (email/SMS) — feeds the GBP/Yelp review KPI. Pairs with the won/thank-you script in [[operating-rhythm]]. *Trigger: stage change → delay → Shopify Email / SMS.* [Carlos to provide: which review link — GBP short link.]

**7. Apollo task ↔ Sheet bridge.** (lower priority)
Keep Apollo B2B tasks/sequence replies flowing into the Sheet as rows so the one queue stays truly single-source. Only matters once cold/Apollo outreach is active (currently parked). *Trigger: Apollo → Google Sheets.*

## Sequencing

Ship **1 and 2 first** (they kill the daily sync chore and the retyping). Then **3** (speed-to-lead). Then **4-5** (Slack visibility + quote recovery). **6-7** later. Validate each manually for ~1-2 weeks before automating it. (co-CEO recommendation)

## Guardrails

- Every Zap keys on **Lead ID / email** — keep those columns clean (see [[lead-tracker-sheet]]).
- Zaps write, humans still decide — no Zap should auto-send customer copy without a review step until the templates are proven.
- This does NOT replace conversion tracking — the pixel/GA4 `quote_request_submitted` event is a separate Claude Code job and a prerequisite for blind-free paid spend (source: pipeline-ops-spine.md). (Claude Code)

## Lane

Zap design + testing = Claude-admin. Toggle-on + connected-account auth = Carlos-VA. (source: store-and-catalog.md two-agent model)

## Related pages
- [[pipeline-ops-spine]]
- [[lead-tracker-sheet]]
- [[shopify-tag-taxonomy]]
- [[slack-workspace-setup]]
- [[operating-rhythm]]
- [[conversion-bridge]]
- [[dashboard]]
