# Reactivation Email Sequence

**Summary**: The 8-email reactivation arc (Thursdays 10am PT) to dormant past buyers, plus the campaign-performance insight that reply/call beats hard-sell, and the send-preflight fixes required before sending.

**Type**: campaign

**Channel**: Email (Shopify Email, free tier).

**Status**: Built; emails 2–8 scheduled, Thursday cadence (source: PNG-Master-Context-Playbook.md).

**Performance**: opens 32–39%; Apr 23 "reply" email 13% clicks vs Jan 30 hard-sell 0%; May 25 "Event SZN" send → 1 order, $800 (source: PNG-Master-Context-Playbook.md).

**Sources**: PNG-Master-Context-Playbook.md, PNG-Full-Context_4.14.2026.md

**Last updated**: 2026-06-17.

---

## The 8-email arc

Professionally built HTML, on-brand, in Carlos's voice. The reactivation arc: reintroduce → reframe value → prove → desire → offer → sustain. Cadence: Thursdays 10am PT. Email 8 (VIP) targets repeat buyers only (source: PNG-Master-Context-Playbook.md). Built for the 1,000+ dormant contacts imported from the Wix CRM (source: PNG-Full-Context_4.14.2026.md). See [[vip-reactivation-list]] for the VIP targets.

## The key insight: reply/call beats hard-sell

Across 4 analyzed sends, opens were consistently strong (32–39%, top of B2B range) — opening is not the problem (source: PNG-Master-Context-Playbook.md). The signal is in the clicks:
- **Apr 23 "reply to me" email → 13% clicks (3–5x others).**
- **Jan 30 hard-sell discount blast → 0% clicks.**

The audience wants conversation, not "buy now" — so all future campaigns use a soft/reply/call format (source: PNG-Master-Context-Playbook.md). The May 25 "Event SZN" send produced 1 order, $800: the customer opened the email, then called — the [[concierge-close]] working as designed (source: PNG-Master-Context-Playbook.md). This insight is the foundation of [[sms-marketing]] too.

The Apr 23 engagers are a priority warm queue for the closer (tier 2) (source: PNG-Closer-Onboarding-Workbook.md). See [[closer-hire]].

## Send-preflight fixes (required at send)

Before sending, apply (source: PNG-Master-Context-Playbook.md):
- `{% unsubscribe %}` → `{{ unsubscribe_link }}` (correct Shopify syntax).
- Swap the bit.ly/3REpAhn shortlink for real URLs.
- Use "starting at $X" pricing, not hard bundle prices (bundles are app-driven — see [[store-and-catalog]]).

These map to the reusable PNG-Email-Send-Preflight-SOP (not yet in raw). Deliverability foundation (SPF/DKIM/DMARC, bounce 7.5%→1%) is on [[store-and-catalog]].

## Related pages
- [[concierge-close]]
- [[vip-reactivation-list]]
- [[closer-hire]]
- [[sms-marketing]]
- [[store-and-catalog]]
- [[png-voice]]
