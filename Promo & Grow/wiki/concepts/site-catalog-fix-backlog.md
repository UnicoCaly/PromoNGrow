# Site & Catalog Fix Backlog

**Summary**: Running backlog of website / catalog gaps found while working live deals — UX holes, missing product options, store fixes. Claude Code / Claude-admin lane. Newest on top; each row carries status, the deal that surfaced it, and the fix.

**Type**: concept

**Sources**: surfaced from live deals (Meta funnel quotes); Carlos direction 2026-06-26, 2026-07-15.

**Last updated**: 2026-07-15 (item 5 — footer Instagram link corrected off Proágo).

---

## How this works

A gap found while quoting or closing gets a row here so it doesn't get lost in chat. **Status:** 🔴 open · 🟡 in progress · 🟢 fixed (pending deploy) · ✅ live. Note the **lane** (Claude Code = theme/code · Claude-admin = catalog/Shopify admin · Carlos-VA = approvals/toggles) and the **deal** that surfaced it.

## Backlog

### 5 — Footer Instagram link pointed at Proágo, not P&G — ✅ live (2026-07-15)
- **Surfaced by:** Carlos — asked to point the footer Instagram at the P&G account.
- **Lane:** Claude-admin (theme setting; no code change).
- **Found:** `settings.social_instagram_link` was `https://www.instagram.com/proagobranding/` — the **sister agency's** account, so the live store footer was sending P&G customers to Proágo. An entity-boundary leak (P&G surfaces stay P&G — see [[png-entity-boundaries]] *(memory)*).
- **Fixed 2026-07-15:** set to `https://www.instagram.com/promongrow/` in `config/settings_data.json`; pushed live via `shopify theme push --only config/settings_data.json --allow-live --nodelete` → "pushed successfully", then **pulled the file back down from the live theme to confirm the value landed**. One setting feeds both the **footer** (`snippets/social-icons.liquid`) and the **mobile menu drawer** (`snippets/header-drawer.liquid`) — both corrected.
- **Note:** the other social settings (Facebook, TikTok, YouTube, X, Pinterest, Snapchat) are still blank, so Instagram is the only icon the footer renders. Fill them in if/when those accounts should show.

### 3 — Bundle builder: flag size + variant selection — ✅ live (2026-06-26)
- **Surfaced by:** Carlos — flags defaulted to a single variant; the client couldn't choose the size.
- **Lane:** Claude Code.
- **Shipped + deployed 2026-06-26:** added opt-in `"variants": true` on a `choice` slot → renders a size/options dropdown (the product's real variants — **Size** Small→X-Large + **Printed Side**, $120–$250) under the flag picker; the chosen variant drives the price + the cart line. Enabled on the Event Pro flag slot. General + backward-compatible (slots without `variants` unchanged).
- **Also removed** the dead `feather-convex-flag-copy` (Teardrop) handle — the product doesn't exist, so it was a broken "unavailable" option — from the flag options and from the exit-popup image reference.

### 4 — Bundle-savings popup: copper recolor + hardening — ✅ live (2026-06-26); ⚠ "showing code" glitch unverified
- **Surfaced by:** Carlos — the bundle-savings popup "glitched and showing code"; asked to invert it to a copper background.
- **Lane:** Claude Code.
- **Done 2026-06-26:** recolored `#png-popup-bundle` to a copper background with light text + a white "bundle price" card (scoped — other popups untouched); hardened the popup JS so it can't reveal with blank/placeholder data (the most plausible "showing code" cause).
- **⚠ Open:** could NOT reproduce the exact "showing code" glitch from the templates/CSS — they're clean (`.png-popup[hidden]` hides correctly, no raw-Liquid leak, collection description empty). **Need the page URL + a screenshot / the literal text** Carlos sees to fix the precise issue.

### 1 — Bundle builder: add multiple flags (per-slot quantity) — ✅ live (deployed 2026-06-26)
- **Surfaced by:** Aram (#D100/#D101, Meta lead 2026-06-25) — wanted a **tent + multiple flags**; the builder only let him pick **one** flag, so the natural vendor combo couldn't be built online. Revenue leak hiding as a UX gap.
- **Lane:** Claude Code.
- **Fix shipped (2026-06-26):** added optional **quantity support** to bundle `choice` slots in `sections/custom-bundle-builder.liquid` — a slot with `"qtyMax": N` renders a **Qty 1–N** selector, the price line shows unit × qty, and the cart line carries the right quantity (identical variants aggregate into one line). Backward-compatible: slots without `qtyMax` behave exactly as before. **Enabled on the Event Pro flag slot (`qtyMax: 4`).** Styling: `.png-bb__select--qty` in `assets/custom-styles.css`. (Internally the add-to-cart payload moved from a flat variant-id list to `{id, quantity}` line items — `data-lines`.)
- **Deployed 2026-06-26:** pushed to live theme `PromoNGrow/main` (#171153293348) via `shopify theme push --only` → "pushed successfully" (both mirror copies synced first). **Browser smoke-test pending** (Carlos): `/collections/bundles` → Event Pro → pick 2–3 flags → price + savings update → add to cart shows the correct flag quantity. *(Verify in a real browser — `page_cache` lies to anonymous curl.)*
- **Follow-up:** see item 2.

### 2 — Bundle builder: optional / removable slots — 🔴 open
- **Surfaced by:** same Aram deal — he wanted "tent + some flags," no table throw, but every bundle slot is currently **required**.
- **Lane:** Claude Code.
- **Fix idea:** add `"optional": true` on a slot → render a **"None"** option (or remove toggle) that drops it from the total + cart. Lower priority than item 1; do after the multi-flag fix is live and proven.

---

## Related pages
- [[store-and-catalog]] — the catalog this maintains
- [[meta-lead-intake-playbook]] — where these deal-driven gaps surface
- [[theme-build-status]] — the live theme state
- [[claude-code]] — the build lane
- [[shopify-deploy-workflow]] *(memory)* — how to push the theme live
