# Titan Law Firm — complete event set

**Summary**: *(9/23: artwork landed, proofs are running, she rejected the latest with one final wording fix — see "Where it stands" below.)* Inbound lead 2026-09-18, 11:23 AM, via the Free-Proof LP v2 two-step hero. **Darling Rivera** (paralegal) wants a full branded event kit for a **Saturday 2026-10-24** event: 10x10 tent + full back wall, table throw, Signicade A-frame, and a medium feather flag with a base. Carlos called her the same day and confirmed the date is soft — she has five weeks. Quoted as **#D166, $1,819.00 gross − 10% bundle discount = $1,637.10 pre-tax, $1,813.11 out the door.** Quote email sent 19:05 UTC; **Shopify invoice sent 19:07 UTC**. Unpaid, no artwork yet.

**Type**: deal
**Stage**: **WON — PAID 2026-09-24.** Proof approved 9:08 AM, paid 10:40 AM. Order **#P&G881082, $1,796.74**, `PAID` / `UNFULFILLED`.
**Value**: $1,637.10 net of tax · quoted **$1,813.11** out the door · **collected $1,796.74** — $16.37 less, because Shopify resolves tax at the destination (Beverly Hills 9.75%) while the draft estimate used the Lynwood origin rate (10.75%).
**Next step**: **produce and ship.** Event is Saturday 2026-10-24; the internal target was Fri 10/9 and she is far ahead of it. Then the photo + Google-review ask once she has it in hand.
**Owner**: Carlos.
**Contact**: Darling Rivera — pa2@titanlawfirm.com · +1 424-777-0871 · titanlawfirm.com
**Shopify**: customer `8328611332132` · draft **#D166** (`gid://shopify/DraftOrder/1075264585764`)
**HubSpot**: contact `554523622099` · company `347443910341` · deal `349311963891` (pipeline **P&G - Quote to close**, stage *Quote requested*)
**Last updated**: 2026-09-23

---

## WON 2026-09-24 — and the diagnosis that got there was not price

**She had gone quiet, and the instinct was to read it as price. It was not.** She asked for a one-word fix at **9:25 AM on 9/23** (*Lawyer* → **Lawyers**) and what she received at **11:02 AM** was an invoice. The fix had been made; she had no way to know that.

**The nudge that worked led with the fix and owned the sequencing** — 7:51 AM on 9/24. *"Got your last note, 'Lawyers,' plural. That's corrected, and the updated proof is in your queue to review."* **Approved 9:08 AM. Paid 10:40 AM.** Eighty-nine minutes.

**The lesson is about order, not tone.** When a customer asks for a change and the next thing they see is a bill, the bill reads as a refusal to make the change. **Answer the request first, in its own message, and let the invoice follow.**

## The $16.37 variance is systemic, not a one-off

Quoted $1,813.11, collected **$1,796.74**. Shopify resolves sales tax at the **destination**; the P&G draft estimate resolves it at the **Lynwood origin**. Beverly Hills is 9.75% against Lynwood's 10.75%. **Same pattern as Firm Footing (Calabasas).**

**So P&G quotes systematically overstate the out-the-door total for out-of-area customers.** That is the safe direction — nobody complains about paying less — but it means the quoted total is not the number that will be charged, and it should not be presented as if it were. Worth a line in the quote: *"final tax is calculated at your delivery address and may be lower than shown."*

## The proof-policy evidence lives here

**Four revision rounds on a $1,813 order with nothing collected.** The Deposit-to-Lock rule (50% on $800+) **already existed and was simply not applied.** This is the case that proves the leak is the money gate, not the round count. → [[proof-vs-design-policy]] § under review.

## What she asked for

From the LP form (source: contact-form email 2026-09-18 11:23 AM) plus Carlos's follow-up call:

- 10x10 tent **with a back wall**
- A "standard tablecloth"
- A **Signacade** A-frame *(spelled Signicade in the catalog)*
- A **medium feather flag with X-stands for the ground**
- Event date **2026-10-24**; product field: "Multi-piece set"
- Logo dropped at the LP: `https://png-logo-upload.carlos-154.workers.dev/f/202609/f17f368201e7/Set-Up.png` — **a PNG**, not vector

Carlos's call added the one fact that changes the play: **she is not in a rush.** That turns this from a speed-to-lead scramble into a decision-support job — the brief was "give her everything she needs to make an informed decision."

## The quote — #D166

| Line | Variant | Price |
|---|---|---:|
| 10x10 Custom Printed Event Tent (Canopy) | White strip / Standard bag / **Tent Only** | $800.00 |
| Custom 10ft Tent Back Wall (Full) | White Reinforcement Strips | $320.00 |
| Custom Table Throw (Draped) | 6ft | $199.00 |
| Deluxe Signicade A-Frame | 24" x 36" | $310.00 |
| Custom Feather Angled Flag | Medium 10.5ft / Single Side Print Thru | $120.00 |
| Feather Flag Cross Base (X-Stand) | custom line item | $70.00 |
| **Subtotal** | | **$1,819.00** |
| Bundle discount −10% | order-level, `PERCENTAGE` | −$181.90 |
| **Pre-tax** | | **$1,637.10** |
| Shipping | free ground, orders $500+ | $0.00 |
| CA sales tax @ 10.75% (Lynwood situs, **resolved on send**) | five lines, see below | $176.01 |
| **Out the door** | | **$1,813.11** |

**The draft under-reported tax until it was sent, exactly as predicted.** While `OPEN`, #D166 showed
`$0.00` tax and a `$1,637.10` total — the unsent-draft behaviour recorded on [[master-price-sheet]]
after Evoria #D164. The customer-facing number in the quote email was therefore computed by hand at the
blended 10.75% rate and labelled an estimate. On `draftOrderInvoiceSend` the jurisdiction resolved to
the same 10.75%, against the **Lynwood origin** (no shipping address on the draft), in five lines:

| Line | Rate | Amount |
|---|---:|---:|
| California State Tax | 6% | $98.23 |
| Los Angeles County District Tax Sp | 2.5% | $40.94 |
| Los Angeles Co Local Tax Sl | 1% | $16.37 |
| Lynwood City Tax | 1% | $16.37 |
| Los Angeles County Tax | 0.25% | $4.10 |
| **Total** | **10.75%** | **$176.01** |

**The hand-computed estimate came in 2¢ low** — $175.99 against the real $176.01 — because Shopify
rounds *each* tax line independently, while a single blended multiplication rounds once. The rate was
right; only the rounding differs. Immaterial here, but it is a systematic undershoot: hand-computing
the blended rate will read a cent or two light on every quote, and more on bigger ones. Recorded on
[[master-price-sheet]]. **The invoice figure is the correct one** if she ever lines the two documents up.

## The back-wall pricing decision (Carlos's call, still open)

Quoted here as **Tent Only $800 + standalone back wall $320 = $1,120**.

The alternative is the tent's own **Full Wall** variant at **$1,270** — the same physical goods, $150 dearer. This is the catalog inconsistency flagged on [[master-price-sheet]] on 2026-09-16 and still unresolved. The standalone route was chosen for the same reason Evoria was: **$320 is the number publicly listed on the store, and a law firm will check.** Taking the Full Wall variant instead would raise the pre-tax total to $1,772.10 (+$135 after the discount).

**Carlos to pick one** — for this quote, and for the catalog.

## The 10% discount is an owner override, not the standing rule

The standing rule ([[master-price-sheet]], ruled 2026-07-13) is that the 10% closer's margin is **in-trade only** — deposit today, pickup, a Google review, a referral — and **never an opener**. Here it is being given for bundling, up front, at Carlos's direction on 2026-09-18. That is his call to make; it is logged as an exception rather than a change to the rule. Margin holds: at the ×2.0 high-ticket markup, 10% off leaves roughly 44% gross, above the 35% floor for $1K+ work.

Do **not** read this as the retired on-site bundle coming back. Bundles were taken off the site 2026-08-08; this is a custom multi-item draft order that happens to carry a bundle-shaped discount. The retired bundle SKUs and the $848 builder figure stay out of it.

## The timeline given to her

Production is 5 business days from proof approval. Working back from **Sat 2026-10-24**:

- **Approve the proof by Fri 2026-10-09** → in hand around **Fri 10/16**. A week of cushion. This is the recommended target.
- **Fri 2026-10-16** is the wall. Past that, delivery lands the day before the event with no room for a reprint.

**Deposit-to-Lock applies** (standard on quotes $800+): 50% ≈ **$906.55** holds the price and a production slot for 60 days — through **2026-11-17**, comfortably past her event. Presented as optional, not as pressure, because she has time. Note the Shopify limitation from Shadi #D124: partial payment on a single draft is Plus-only, so a deposit is collected outside the draft and recorded as a note + `deposit-locked` tag.

## Sent

| | |
|---|---|
| Quote email | 2026-09-18 **19:05 UTC**, `hello@promongrow.com` → `pa2@titanlawfirm.com`, auto-BCC'd to the HubSpot portal |
| Shopify invoice #D166 | 2026-09-18 **19:07 UTC**, subject *"Titan Law Firm — your invoice from Promo & Grow (#D166)"* |

The invoice carries a short custom message at Carlos's direction: it is hers to process when ready,
nothing is due today, and nothing prints until she approves the free proof. Deliberately no deadline
language — she has five weeks and the pressure would be false.

**The Shopify invoice does not auto-log to HubSpot** the way the Gmail send does (that one BCC'd
`245649404@bcc.na2.hubspot.com` via the HubSpot extension). Both sends are recorded on the deal record
by hand instead.

## Where it stands — 2026-09-23

She engaged. Artwork was supplied and **proofs are running through the Proofer app against #D166**, which
answers the open artwork question in practice — the design is real enough to proof, and the tent reads
**"Auto Accident & Injury Lawyer"** across the top.

**2026-09-23 16:25 UTC — proof rejected**, her comment verbatim:

> "Last change request, the top part where it says Auto Accident & Injury Lawyer, make it plural
> please.... Should say Lawyers"

**"Last change request."** She is one letter from approving, and she said so. This is the cheapest fix in
the pipeline and it gates $1,813.11.

**2026-09-23 18:02:45 UTC — the invoice was re-sent** (subject *"Invoice #D166 Titan Event Tent Bundle"*),
with a follow-up note reading *"Just following up on the tent bundle proof we sent over! 😊 If the latest
design looks good, we're ready to get everything into production."*

**That went out 1 hour 37 minutes after she rejected the proof.** It asks whether the latest design looks
good, when she had already answered that in writing — it does not, she wants *Lawyers*. To a buyer whose
only outstanding note is a grammar correction, an automated-sounding nudge that ignores it reads as not
having been read. The same message also opens **"HiDarling,"** — no space. Neither is fatal, and she has
not reacted, but the sequencing is the thing to fix: **clear the proof queue before firing the payment
chase**, or the chase contradicts the proof. Filed as a process note, not a scolding.

Numbers are unchanged and still correct: $1,819.00 − $181.90 = $1,637.10 + $176.01 = **$1,813.11**, unpaid,
no order created.

**One caveat now confirmed by Evoria.** $1,813.11 is the **Lynwood-origin** figure. When Evoria paid on
9/20 with a real Pasadena address attached, the district lines re-resolved and her total came in **$2.64
under the invoice**. So Darling's final number will move too if she ships rather than picks up — down, if
she is outside Lynwood. The quote email already told her the rate follows the delivery address, so nothing
was mis-stated; just don't treat $1,813.11 as immovable. See [[master-price-sheet]].

## Open questions put to her

*(Status as of 9/23: artwork is effectively resolved — proofs are running. The rest are still open.)*

1. **Table size** — 6ft quoted ($199); 4ft $175, 8ft $238.
2. **Flag base / surface** — she asked for "X-stands for the ground," which is contradictory. The **cross base ($70)** quoted is for hard surfaces; **soft ground wants the ground stake ($36)**, which is cheaper. Both is a common answer.
3. **Flag quantity** — one quoted; two flanking a tent entrance is the usual setup.
4. ~~**Vector artwork**~~ — **resolved in practice.** Art was supplied and is in proof. Worth a file-prep sanity check against [[file-prep-gate]] before it goes to B2Sign (CMYK, 150 dpi, flattened, text outlined), since the original upload was a PNG.
5. **Pickup in Lynwood vs. delivery** — also the last input the tax rate needs.

## Notes

- She writes from `pa2@` — a paralegal, very likely gathering this for someone who signs. The quote was built to be **forwarded**: one clean number, the timeline spelled out, and the questions answerable in a single reply.
- Email drafted **EN-only**. The bilingual register is a craft rule, not a quota ([[png-voice]]) — forcing Spanglish into a law-firm quote is exactly the "gimmicky, cheapens the brand" failure the rule warns against. The tagline stays in the signature.
- **HubSpot has two duplicate `Titan Law Firm` companies** (`347443910341`, `347471555295`), both auto-created by the form within 100ms, both associated to her contact. The deal is on `347443910341`. **Merge is a Carlos action** — not done unprompted.

## Related pages
- [[master-price-sheet]] — the back-wall gap, the tax-on-send rule, the 10%-in-trade ruling
- [[draft-order-quote-system]] · [[concierge-close]] · [[deal-followup-playbook]]
- [[evoria-health]] — the September precedent this quote follows
- [[free-proof-landing-page]] — the source of the lead · [[file-prep-gate]] · [[png-voice]]
