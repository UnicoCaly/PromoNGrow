# PNG Cold Email + Ads — Implementation Runbook
### The exact step-by-step to stand it all up · June 15, 2026

**How to read this:** every step is tagged with who does it — **[Carlos]** (needs your login/DNS/payment), **[Claude]** (I can do it for you), **[Venus]** (her ongoing job). Anything touching credentials, DNS, or payment is yours by design — I'll never handle passwords. Time estimates assume no surprises.

> **Golden rules baked in:** cold sends only from `promotengrow.com` (never the main domain) · warm before you blast · throttle to Venus's capacity · log every lead's source · measure cost-per-closed-deal, not vanity leads.

---

# PART A — COLD EMAIL SETUP

## A1. Domain & inboxes  ⏱️ ~45 min · **[Carlos]**
1. Confirm you own **`promotengrow.com`** and it's **separate from your main `promongrow.com`** (it is). This is your cold-sending domain; if it ever takes a reputation hit, invoices stay safe.
2. Set up email hosting on it — **Google Workspace** (recommended; ~$6/user/mo) or Microsoft 365.
3. Create **2 sending mailboxes** with real human identities:
   - `venus@promotengrow.com`
   - `team@promotengrow.com` (or `hello@`)
   - Add a real first/last name, a photo, and a simple signature to each. Empty-profile inboxes look like bots.
4. *(Optional but ideal)* point cold sending at a **subdomain** like `mail.promotengrow.com` or use the domain as-is. For 2 inboxes at low volume, the root domain is fine.

> **If `promotengrow.com` was just registered:** a brand-new domain needs the **full 4–6 week warmup** before real sends — no shortcuts. If it's been registered a while, you're in better shape but still warm it.

## A2. DNS authentication (SPF / DKIM / DMARC)  ⏱️ ~30 min + propagation · **[Carlos]** (I'll hand you exact records)
In your domain's DNS, publish:
- **SPF** (TXT, host `@`): `v=spf1 include:_spf.google.com ~all` *(Google Workspace; adjust if M365)*
- **DKIM**: generate in Google Admin → Apps → Gmail → Authenticate email → copy the `google._domainkey` TXT record into DNS → turn on.
- **DMARC** (TXT, host `_dmarc`): `v=DMARC1; p=none; rua=mailto:dmarc@promotengrow.com; pct=100`
  - Start at `p=none` (monitor). After ~2 weeks clean, move to `p=quarantine`.
- **Deliverability hygiene:** turn **OFF open-tracking pixels** and avoid link-tracking on cold (tracking pixels/domains now *hurt* inbox placement). One plain link max, only from Touch 2 on.

✅ **Verify** with a free check (MXToolbox / the sending tool's built-in checker) before going further.

## A3. Choose the sending tool  ⏱️ ~20 min · **[Carlos]** (account + payment) → then **[Claude]** can configure
Per the game plan, **Option C**: Apollo for data, a dedicated sender for sending.
- Sign up for **Instantly** (~$37/mo Growth) **or Smartlead** (~$39/mo). Either has built-in warmup, inbox rotation, spam-rate monitoring, one-click unsubscribe, reply detection.
- Connect both `promotengrow.com` mailboxes.
- **Turn ON warmup** for both immediately (this is what makes "start this week" real — warmup begins now even though real sends don't).

## A4. Warmup tool settings  ⏱️ ~15 min · **[Claude]/[Carlos]**
- Warmup ramp: start ~5–10 warmup emails/inbox/day, auto-increase.
- Reply rate in warmup: ~30%. Mark-as-important + auto-archive ON.
- **Real-send daily caps** (set now, used later): cap each inbox at **30–35/day max**. Two inboxes × ~30 = ~60/day — lands inside your 50–75 target without burning placement.
- Sending window: **Tue–Thu strongest**, 8am–3pm PT. Random delays 60–180s between sends.

## A5. Build the list in Apollo  ⏱️ ~30 min · **[Claude]** (I can run this on your Apollo, data-only)
Target filters (LA-metro Spanish SMBs):
- **Location:** Los Angeles + surrounding (South Gate, Lynwood, Huntington Park, Bell, Downey, East LA, Santa Ana radius).
- **Employees:** 1–50. **Industry:** restaurants/food, religious orgs, events/party services, auto, retail, personal care, real estate.
- **Titles:** Owner, Founder, Co-Owner, President, Manager, Marketing.
- **Verified email required.** Pull **first batch of ~300–500**, Spanish-surname/Spanish-market skew where detectable.
- Export → import to the cold tool → the tool **re-verifies** (drop anything risky to keep bounces < 2%).

> ⚠️ Keep this in Apollo's **data** lane only — don't send from Apollo (protects the Proago workspace and your deliverability).

## A6. Load the sequence  ⏱️ ~20 min · **[Claude]**
- Load the **3-touch bilingual sequence** (already written) into the tool.
- Map tokens: `{{first_name}}`, `{{business}}`, `{{city}}`, `{{product_angle}}` (auto-fill product_angle by industry using the snippet library).
- Schedule: Touch 1 Day 1 (no link) → Touch 2 Day 3 → Touch 3 Day 7. Spanish version to Spanish-market contacts; English otherwise.
- **One link max**, unsubscribe line + physical address on every send.
- Auto-stop on reply; auto-suppress unsubscribes.

## A7. Pre-launch deliverability QA  ⏱️ ~15 min · **[Claude]/[Carlos]**
- Run a **seed/inbox-placement test** — aim **≥ 80% inbox** before scaling.
- Check spam-trigger words, image/link balance, spammy formatting.
- Confirm reply routing → Venus's inbox + scoreboard tag = **Cold Email**.

## A8. Warmup → live ramp schedule  ⏱️ ongoing
| Week | Per inbox / day | Total / day | Mode |
|---|---|---|---|
| 1 (this week) | 5–10 | warmup only | warming, **no real sends** |
| 2 | 10–20 | warmup only | warming |
| 3 | ~20–25 | ~40–50 | **first real sends** |
| 4 | ~30 | ~60 | scaling |
| 5+ | 30–35 | **60–70** | steady-state (your target) |

**Auto-pause trigger:** spam complaints **> 0.08%** or bounces **> 1.5%** → stop, diagnose, re-verify list. Non-negotiable.

---

# PART B — PAID ADS SETUP

## B1. Tracking foundation (do this FIRST)  ⏱️ ~45 min · **[Carlos]** + **[Claude]**
- **Meta Pixel:** confirm it fires on the site; set up **Conversions API** if possible (server-side, more durable). Create a **"Lead" custom conversion** (form submit / WhatsApp click / phone click).
- **Google tag:** confirm it fires; mark **phone-call + form-submit** as conversions.
- **UTM scheme** (consistent, so the scoreboard can attribute):
  - `utm_source` = meta | google
  - `utm_medium` = retargeting | prospecting | cpc
  - `utm_campaign` = png_la_smb_2026
- These map straight to the scoreboard's **Source** column.

## B2. Audiences  ⏱️ ~30 min · **[Carlos]** (upload) + **[Claude]** (spec)
- **Custom Audiences (Meta):** all site visitors (180d), IG/FB engagers (365d), video viewers, and a **Customer List upload of the reactivation accounts** (hashed) — so lapsed buyers see ads *while* Venus calls them (air + ground).
- **Lookalike:** 1–3% lookalike of past buyers / best leads, LA-metro.
- **Google:** remarketing audience (site visitors) for a small remarketing line; Customer Match upload optional.

## B3. Meta — Retargeting campaign  ⏱️ ~45 min · **[Carlos]/[Claude]**
- Objective: **Leads**. Budget: **$400/mo** (~$13/day).
- One ad set, the warm Custom Audiences (exclude existing converters if desired).
- Creative: the **retargeting ad copy** (already written) + free-proof mockup visual.
- Destination: **Instant Form** (the 60-sec qualifier) OR click-to-WhatsApp/phone — test both.

## B4. Meta — Prospecting lead-form campaign  ⏱️ ~60 min · **[Carlos]/[Claude]**
- Objective: **Leads**. Budget: **$200/mo** (~$6.50/day). Optimize for **leads**, not link clicks.
- Audience: Lookalike + LA-metro geo + Spanish language; SMB-owner interests. Placements: FB/IG feeds, Stories, Reels.
- Build the **Instant Form** with the 6 qualifier questions (from the creative doc) — *What do you need / Business / Timeline / Budget band / Phone+Email / Language.*
- Load **Concept 1–3** ad copy (EN + ES sets); start with 2–3 creatives, let Meta find the winner.
- **Thank-you screen:** promises Venus's call + free proof; offer "text us to go faster."

## B5. Google — Search campaign  ⏱️ ~45 min · **[Carlos]/[Claude]**
- Budget: **$150/mo** (~$5/day). Campaign type: **Search**, geo = LA metro, languages EN + ES.
- **Ad groups by intent:**
  - Tents/Canopies — `custom tents los angeles`, `carpas personalizadas los angeles`, `pop up tent with logo`
  - Banners/Signage — `custom banners los angeles`, `banners personalizados`, `table covers with logo`
  - Trade-show — `trade show display los angeles`, `step and repeat backdrop la`
- **Match types:** phrase + exact only (no broad). 
- **Negative keywords:** free, jobs, hiring, wholesale supplier, DIY, template, rental.
- **Ads:** 2 responsive search ads/group, headlines leading with *free proof + 5-day + bilingual*; sitelink + call extension (rings Venus).
- **Conversion:** form submit + call. Bid strategy: Maximize Conversions (or Manual CPC capped while learning).

## B6. Lead routing & logging  ⏱️ ~30 min · **[Claude]/[Carlos]**
- Wire **instant notifications**: Meta lead → email/Slack to Venus; Google call → her line. Target **first touch < 1 hour**.
- Every lead logged to the **scoreboard** with the right Source. (If you connect HubSpot, I can auto-route; otherwise Venus logs manually — it's one row.)

---

# PART C — COMBINED LAUNCH TIMELINE & OWNERSHIP

| When | Cold email | Paid ads | Owner |
|---|---|---|---|
| **This week** | A1–A2 domain+DNS · A3–A4 tool+warmup ON · A5 build list · A6 load sequence | B1 tracking + Lead event · B2 audiences · **B3 retargeting LIVE** | Carlos (access/DNS/pay) + Claude (build) |
| **Week 2** | warmup continues · A7 QA | **B4 prospecting LIVE** · **B5 Google LIVE** · B6 routing | Claude builds, Carlos approves spend |
| **Week 3** | **first real cold sends** (~40–50/day) | optimize: kill worst ad, scale best | Claude + Venus |
| **Week 4–5** | ramp to **60–70/day** | first ROAS read on closed invoices | Venus closes, Claude reports |
| **Week 6+** | steady-state, rotate list | reallocate to what's closing | weekly review |

## Daily cadence (Venus)  ⏱️ 15 min/day
Check leads → call/reply **< 1 hr** → log source + stage in scoreboard → move stage as deals progress → enter Closed Revenue on Won.

## Weekly cadence (Carlos + Claude)  ⏱️ 30 min
Review scoreboard: cost-per-closed-deal by source, ROAS (60-day rolling), backlog. Apply **written rules**:
- **Scale** a source if rolling cost/close < **$130** *and* Venus has capacity.
- **Fix-or-cut** if after 60 days cost/close > **$250** or it makes leads she can't close.
- **Throttle prospecting** automatically if untouched backlog > **8** for 3 days running.

## Budget summary (monthly, inside your $500–$1k band)
| Item | Cost |
|---|---|
| Meta retargeting | $400 |
| Meta prospecting | $200 |
| Google Search | $150 |
| **Paid subtotal** | **$750** |
| Cold tool (Instantly/Smartlead) | ~$40 |
| Google Workspace (2 inboxes) | ~$12 |
| Apollo data | existing |
| **All-in** | **~$800/mo** |

---

## What I (Claude) can start right now
1. **Build the Apollo list** (data-only) to the spec in A5 — ready to export.
2. **Generate the static ad creatives** (free-proof mockup + text-on-image, EN/ES) with the design tools.
3. **Hand you the exact DNS records** filled in for `promotengrow.com` to paste.
4. **Draft the Instant Form** and Google ad/keyword sheets so you're copy-pasting, not writing.

Tell me which to fire first — my vote: **DNS records + Apollo list this hour** (so warmup and data are moving today), while you set up the Workspace inboxes and the ad accounts' Lead event.

*Pairs with: Growth Offensive Game Plan · Cold Email Sequence · Meta Lead-Form Creative · Revenue-by-Source Scoreboard.*
