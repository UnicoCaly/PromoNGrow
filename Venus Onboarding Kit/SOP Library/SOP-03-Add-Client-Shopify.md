# SOP-03 — Add / Find a Client in Shopify
**Covers Loom 6 (creating orders & clients) · Owner: Carlos · Updated: June 6, 2026**

### Purpose
Attach the right customer to a draft order with complete, verified contact info — and capture marketing consent the right way.

### Scope
Every draft order needs a client. Either they already exist in our database or you create them.

### Who / When
Venus, while building a draft (SOP-02), ideally while the customer is still on the phone so you can confirm details live.

### Steps
1. **Search first.** In the draft, search the customer database by **name, email, or phone number.** If they exist, select them — their info auto-populates.
2. **Verify what populated.** If something's missing (e.g. no phone) and you have them on the line, **get it and update the record** right there.
3. **New client?** Add: first name, last name, **email**, **phone number.**
4. **Capture marketing consent (important — do this live).** Ask if they'd like order updates + occasional offers by **text and email.** Frame it warm: *"I'll send you updates on your order — want me to text those too? I'll also send the occasional event-season deal."* They usually say yes. **This is real opt-in consent** (it's what lets us text them later — TCPA).
5. **Address.** Start typing the street address — Shopify **auto-verifies** and suggests the match. Add the **company name.** Confirm the address before saving.
6. **Receiver vs. payer.** If the person receiving the package differs from the person placing the order, put the **payer** in the customer/billing view and the **receiver** on the shipping address. (Most of the time they're the same.)
7. **Tags.** Leave tags light at creation. Add client **tags once you start working them** (lead stage, VIP, reorder, language) so follow-ups don't slip — confirm the tag list with Carlos.
8. **Save** the client to the draft.

### Output
A complete, verified client record attached to the draft, with marketing consent captured if given.

### Exceptions & edge cases
| Scenario | What to do |
|---|---|
| Duplicate-looking records | Pick the one with order history; merge/clean later with Carlos. |
| Invalid phone on file | Re-confirm with the customer and correct it before saving. |
| They decline marketing texts | Respect it — do not opt them in. Order/transactional updates are still fine. |
| Different ship-to person | Payer in billing, receiver in shipping (Step 6). |

*Pairs with: SOP-02 (the draft) · SOP-04 (the email) · PNG-SMS-Marketing-Playbook (why consent matters). Watch the **Master Order Walkthrough** (linked in the SOP index) for the visual.*
