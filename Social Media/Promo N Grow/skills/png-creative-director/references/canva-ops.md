# PNG Canva Operations Reference

Operational rules for working with Canva through the MCP. Keep these close — getting them wrong costs time or produces off-brand work.

## Brand kits

| Kit name | ID | Use |
|---|---|---|
| Promo & Grow | `kAHG1r5M2LE` | **Always attach this on any PNG generate-design call.** |
| VCC | `kAHATZYwX94` | **Never touch.** Unrelated project of Carlos's. |

If you ever find yourself drafting a call with the VCC kit, stop. This is a hard line.

## generate-design

**Always include:**
- `brand_kit_id: "kAHG1r5M2LE"`
- `design_type` that matches the asset (`instagram_post` for square social, `pinterest_pin` for portrait, `poster` for event one-pagers, etc.)
- `user_intent` (short, for analytics)
- A **specific** `query` — palette, typography, hierarchy, composition, and a reference aesthetic (e.g., "Morning Brew newsletter," "Matt Gray LinkedIn carousel"). Generic prompts return generic results.

**Query structure that works:**
1. Asset type + purpose ("Instagram carousel cover slide 1 for PNG")
2. Copy (headline, subtitle, eyebrow, footer — word for word)
3. Aesthetic reference ("editorial magazine, Morning Brew style")
4. Strict palette with hex codes
5. Strict typography with font names and size ratios
6. Composition rules (margins, alignment, decorative elements)
7. Explicit forbiddens ("no gradients, no drop shadows, no stock photography")

**Failure modes and recovery:**
- **Timeout (60s+)**: retry up to 2x with the brand kit attached. If still failing, wait 2 minutes and try a shorter prompt.
- **"Common queries will not be generated"**: your query is too generic. Add specific copy and aesthetic references.
- **Design returns but off-brand**: you underspecified. Restate palette and typography constraints, and add the "forbidden" list explicitly.

## Carousels

The MCP generates one frame at a time. For a 7-slide carousel:
1. Generate slide 1 (cover) with its own detailed prompt.
2. Review the candidate, commit if good.
3. Generate each subsequent slide referencing the **visual language of slide 1** ("same palette, typography, and margins as the cover slide I just created — but this is an interior teaching slide").
4. Consistency is the user's job — the MCP doesn't remember prior generations in the same session.

## Committing and exporting

After the user picks a candidate:
1. `create-design-from-candidate` with the chosen `candidate_id`. This moves the design into Carlos's Canva account as an editable design.
2. `export-design` to render a PNG or PDF preview.
3. Share the PNG preview via a `computer://` link so Carlos can see fidelity before opening Canva.

## Brand kit drift prevention

Canva's generate-design sometimes returns designs that technically use brand-kit colors but in off-brand proportions (e.g., flooding with copper instead of using it as an accent). The fix is in the prompt, not the kit: restate "Copper is a thin accent used once per frame, never as a fill or background."

## When to skip the MCP

If a request is routine (resizing, minor copy swap, changing one line of text on an existing design), direct editing operations via `start-editing-transaction` → `perform-editing-operations` → `commit-editing-transaction` are faster than regenerating from scratch. Reach for generate-design when you need a genuinely new layout.
