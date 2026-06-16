# SOP-06 — Legacy Order Lookup in Ordant
**Covers Loom 10 (legacy software for order history) · Owner: Carlos · Updated: June 6, 2026**

### Purpose
Pull a returning/legacy client's **last price charged** and their **artwork file** so we can quote and run a reprint fast — and consistently.

### Scope
Returning clients from the Print Code Direct era whose history lives in **Ordant** (`pcd.ordant.com`), not in Shopify. Most legacy clients just **reprint** the same job.

### Who / When
Venus, before quoting a reprint for any client who says "we ordered before" or whom you can't find in Shopify.

### Access (read this)
- **Ordant is legacy / read-only.** Carlos retired it (it was the Print Code Direct system); the owner (Ali) kept his access alive so we can pull history. **You can look up data, but don't add users or change anything.**
- URL: **pcd.ordant.com**. (Credential via the password manager.)

### Steps
1. Log into **pcd.ordant.com**.
2. Go to the order / job board.
3. **Search the client** by name (e.g. "Nova Storage").
4. Open their **previous order history.** The two things you want:
   - **What we charged them last** — the single most valuable number for a reprint quote (match or adjust it).
   - **The order number** → tells you where the **artwork file** lives on the **NAS server** (organized by year + order number).
5. Use the last price as your quote basis (apply current pricing if costs changed — confirm with Carlos if unsure), then build the order in Shopify (SOP-02). Going forward, the order lives in Shopify, not Ordant.

### Output
The client's last price + file location, so you can quote and produce a reprint quickly.

### Exceptions & edge cases
| Scenario | What to do |
|---|---|
| Client not in Ordant either | Treat as new; quote from the Master Price Sheet (SOP-01). |
| Last price looks too low today | Costs may have moved — confirm current pricing with Carlos before quoting. |
| Need the artwork file | Use the order number → NAS by year + order number. Ask Carlos if you can't locate it. |
| Tempted to edit Ordant | Don't — it's read-only/backup access. Build everything new in Shopify. |

*Pairs with: SOP-01 (quote the reprint) · SOP-02 (build it in Shopify). Watch Loom 10 for the visual.*
