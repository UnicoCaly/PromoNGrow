# Dr. Silegy (dental) — order #P&G881079 · and the proof-delivery failure

**Summary**: Small paid P&G order from **Gloria Moreno** (`gloria@drsilegy.com`) placed **2026-09-15**, **$267.11, PAID**. It then sat **unfulfilled for nine days** — not because of anything the customer did, but because **the Shopify Proofer proof never reached her, four or five times running.** Approved 2026-09-24 only after the proof was sent from Carlos's own email. **The order is minor; the delivery finding is not.**
**Type**: deal / incident
**Stage**: **PAID and APPROVED 2026-09-24** — `PAID` / `UNFULFILLED`, clear to produce
**Value**: **$267.11 collected** · 2 line items
**Next step**: **produce and fulfill** — it has been paid since 9/15. Then confirm the deliverability fix so this does not repeat.
**Owner**: Carlos.
**Contact**: Gloria Moreno — `gloria@drsilegy.com`
**HubSpot**: **no deal record exists.** Below the size threshold the pipeline normally tracks; noted rather than assumed.
**Last updated**: 2026-09-24 — file created.

---

## What happened, in order

| Date | Event |
|---|---|
| **9/15** | Order `#P&G881079` placed and **paid**, $267.11. Proof sent via Shopify Proofer. |
| **9/15 – 9/23** | Proof re-sent through Proofer **four to five times**. She received or saw **none** of them. |
| week of 9/14 | Carlos **called twice**. No answer. |
| **9/24 8:13 AM** | Carlos emails directly: *"We've tried calling you a few times and left a message earlier this week… we need proof confirmation to begin production."* |
| **9/24 8:56 AM** | Gloria: *"What e-mail are you sending the proof to?"* — she still has nothing, and by the phone call she is **annoyed**. |
| **9/24 9:01 AM** | *"can you check your spam folder?"* — **nothing there either.** |
| **9/24 9:42 AM** | Proof **attached to a direct email** from `hello@promongrow.com`, with the portal requirement explicitly waived. |
| **9/24 9:55 AM** | **"I APPROVE THEM."** |

## This is a delivery failure, not a policy failure

**A midday 9/24 note filed this as the portal rule being "waived at the first sign of friction." That was wrong**, and wrong in a way worth recording: it was inferred from the single 9/24 email exchange without the nine days behind it. **Abandoning a channel that had already failed five times was the correct call, not a concession.** Sending a sixth proof down the same path would have been the mistake.

## The finding: proofs have no delivery confirmation

**The cost was not the waiver. It was that nobody knew for nine days.** Five sends produced **no signal at all** that nothing was landing. The first real signal was a customer's irritation on a phone call. **A paid order sat one step from production for nine days because a send was assumed to be a delivery.**

**Gloria is the only recipient Proofer is failing.** In the same window, **Marisol Torres (Evoria, `#P&G881080`)** and **Darling Rivera (Titan, `#D166`)** both received and approved **through the portal**. So the app works and the store works. **This is recipient-side.**

**The most likely mechanism — inference, not verified.** Proofer sends from **`order_proofs@shopfox.io`**, a third-party domain that is not `promongrow.com`. `drsilegy.com` runs **Microsoft/Outlook**. **Microsoft tenant-level quarantine holds mail without placing it in the user's Junk folder** — which matches exactly what she reported: she checked spam and found nothing, because it never reached her mailbox. Her IT or practice admin would see it sitting in quarantine.

## Rules proposed (Carlos to confirm)

1. **Two sends with no portal activity inside 48 hours ends the channel.** Direct email with the proof attached, plus a call. **No third attempt down the same path.**
2. **Written email approval is a valid approval of record.** *"I APPROVE THEM."* in writing is as good as a portal click. **Put it in the policy** rather than granting it as an exception under pressure — an exception that is always granted should be promoted to a rule or deleted.
3. **Maintain a known-bad-delivery list.** **`drsilegy.com` goes on it today** — that account gets proofs by direct email from the start.
4. **Check the sending domain.** Whether Proofer can send from a `promongrow.com` address, and whether shopfox's domain is authenticated (SPF/DKIM/DMARC) for this store. **If a dental office on Microsoft silently eats our proofs, Gloria is not the last one** — and every one of those looks like a slow customer rather than a broken pipe.

## Related

[[proof-vs-design-policy]] § under review · [[proof-and-production-templates]] · [[fulfillment-sop]] · [[titan-law-firm]] (the case that *is* about policy)
