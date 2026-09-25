# Proof & Production Templates

**Summary**: The two blank working templates the shop runs every job through — the **Promo & Grow customer-facing proof/approval sheet** and the **B2Sign event-tent canopy pre-press dieline**. This page captures their fields and specs so the [[file-prep-gate]] knows exactly what art to collect, the **#promo-and-grow-artwork-proofer** handoff carries the right details, and the proof step ([[draft-order-quote-system]] / [[fulfillment-sop]]) is built on the real sheet. Both are blank references in `raw/` (immutable); completed past proof + production files are coming from Carlos for further reference.

**Type**: source-summary

**Sources**: `raw/Proof Template-promo & grow.pdf` (P&G proof sheet, blank), `raw/canopy.pdf` + `raw/Event Tent Canopy.psd` (B2Sign event-tent canopy production template, blank). Added by Carlos 2026-06-25. Plugs into [[file-prep-gate]], [[proof-vs-design-policy]], [[meta-lead-intake-playbook]], [[fulfillment-sop]].

**Last updated**: 2026-06-25.

---

## 1. P&G Proof / Approval Sheet (customer-facing)

The branded sheet the customer reviews and approves before anything prints. Layout = artwork/layout on the left (with **CUT LINE** marks), a spec sidebar on the right, the approval checklist, and the agreement language.

**Shop block (pre-filled):** Promo & Grow · 10514 Long Beach Blvd., Lynwood, CA 90262 · hello@promongrow.com · **844.883.3308** (P&G inbound line). ⚠️ **The source template PDF currently prints `323.249.4449`, which is *not* a P&G number — correct it to `844.883.3308` before any customer use.** (Carlos 2026-06-25)

**Per-job fields to fill (right sidebar):**
- **Company / Client Name** + **Project Description**
- **Finish Size** · **Quantity** · **Material**
- **Lamination** (Yes/No) + **Type**
- **Notes** (e.g. "Remove rear emblems")
- **Proof Date** · **Proof Version** — convention `#00XXXXX V1`, bump V2/V3 on each revision.

**The approval checklist the customer confirms (4 points):**
1. Correct artwork / layout(s) / fabrication / colors?
2. Quantity correct?
3. Material correct?
4. If applicable, lamination correct?

**The agreement language (load-bearing):** *"Your written approval to proceed on this order creates an agreement between you and Promo & Grow that this order may proceed to production and no further changes or clarifications are necessary."* → This is the literal **post-approval lock** from [[proof-vs-design-policy]]: the customer emails back an approval, that locks the file, and the **5-business-day clock starts** ([[fulfillment-sop]]). Color caveat printed on the sheet: monitor color is only a close representation — print a copy to judge final color.

*(The blank sample is set up as a vehicle-wrap proof — 3M Envision wrap film + gloss overlaminate — but the sheet is the universal P&G proof template for any product.)*

## 2. B2Sign Event-Tent Canopy — pre-press production template

The vendor dieline for a tent canopy graphic (triangular canopy face). This is the **production-file spec** the artwork must meet before it goes to B2Sign — the per-product detail behind the [[file-prep-gate]] for tents.

**Art specs (from the template):**
- **Color mode:** CMYK
- **Resolution:** **150 dpi** (large-format forgives lower dpi than small print)
- **Prep:** flatten all images, **outline all text**, save as **PDF or JPG**
- **Safe Zone:** **115" × 78.85"** (W×H) — all critical elements (logo, text) inside the blue box
- **Bleed Zone:** **119" × 84.28"** (W×H) — extend background to the black outline; **2" bleed**
- **Per side if different artwork** (each canopy face is its own file)
- Delete the guide/instruction layer before saving.

## How they plug into the flow

```
file-prep gate (collect art to the production spec — e.g. tent: CMYK 150dpi, safe 115x78.85, bleed 119x84.28)
  → #promo-and-grow-artwork-proofer (post logo + the proof-sheet fields: client, finish size, qty, material, notes)
  → build the proof on the P&G proof sheet (fill the sidebar, set Proof Version)
  → send to customer → they email back an approval (the 4-point checklist)
  → approval LOCKS the file + starts the 5-business-day clock
```

The proofer-channel handoff post should carry everything the proof sheet needs, so whoever builds the proof (Carlos interim / graphxsource / the future designer) isn't missing a field: **client name, product, finish size, quantity, material/lamination, any notes, and the print-ready logo at spec.**

## Status / next
- Blanks live in `raw/` (do not modify). **[Carlos to provide: completed past proof + production files]** for worked reference, to seed the future press-team SOP.
- Lane: Carlos/designer fills the proof sheet (interim); Claude-admin keeps this spec page current as more product templates (table covers, flags, SEG, banners) are added.

## Related pages
- [[file-prep-gate]]
- [[proof-vs-design-policy]]
- [[meta-lead-intake-playbook]]
- [[fulfillment-sop]]
- [[draft-order-quote-system]]
- [[design-price-rubric]]
