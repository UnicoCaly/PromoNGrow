# Cold-Email Setup Sheet — promoteandgrow.com (copy-paste)

**Summary**: The 30-minute, copy-paste execution sheet for runbook steps A1–A4 in [[cold-email-sequence]] — exact DNS records (MX, SPF, DKIM, DMARC) for the ring-fenced `promoteandgrow.com` cold domain on Google Workspace, plus the exact Smartlead warmup + send configuration. Carlos runs it; Claude-admin verifies. Validated against 2026 deliverability rules (deep-research task wtl253ia7): bulk-sender mandates don't bind at our ~60–70/day volume, but full SPF+DKIM+DMARC `p=none` is still required to land in inbox.

**Type**: concept

**Sources**: [[cold-email-sequence]] (A1–A4 runbook), deep-research wtl253ia7 (2026 deliverability validation), Google Workspace + Smartlead docs. Built by Claude-admin 2026-06-20.

**Last updated**: 2026-06-20.

---

## Before you start

- **Domain:** `promoteandgrow.com` — the **separate cold domain only.** Never touch `promongrow.com` DNS for this.
  - ✅ **CANONICAL DOMAIN MAP — RESOLVED 2026-06-22 (Carlos, FINAL — supersedes all prior domain flags on this sheet).** **Venus OUTBOUND (cold) email = `venus@promoteandgrow.com`** — so the DNS records in this sheet correctly target **`promoteandgrow.com`** (no change needed). The rest of the map, for reference: **`promongrow.com`** = the store / website domain AND Venus's daily / INBOUND email (`venus@promongrow.com`) AND the company CC inbox (`hello@promongrow.com`); **`promoteandgrow.com`** = the separate cold-outbound email domain only. The earlier "promoandgrow.com / promotengrow.com" variants were Whisper Flow dictation errors — **`promotengrow.com` is NOT a real domain** and must not appear as a live reference. (source: Carlos final domain correction 2026-06-22)
- **Current state (Carlos, 2026-06-20):** the domain has been **registered ~1+ year and forwarding to promongrow.com since day one** — it has **never sent email.** Two implications:
  - ✅ **Good news — it's aged.** An aged domain warms faster and is trusted more than a brand-new one; no fresh-domain penalty.
  - 🔁 **Keep the web forward — it doesn't conflict.** A web redirect uses A/CNAME (or registrar URL-forwarding); email uses **MX + TXT**. They coexist. In fact, having `promoteandgrow.com` redirect to `promongrow.com` is *good* — a prospect who looks up the sending domain lands on the real brand. So leave the forward as-is and just **add** the records below.
  - ⚠️ **You need DNS record-level control.** If the domain is on registrar "URL forwarding," confirm you can still add custom **MX + TXT** records (most registrars allow it). If it currently has no MX and no SPF (typical for a parked/forwarded domain), you're clear — just add them. If you ever see an existing SPF/MX on it, tell Claude-admin before changing.
- **You'll need:** registrar/DNS login for promoteandgrow.com (Namecheap/Cloudflare/GoDaddy/etc.), a Google Workspace account on that domain, and a Smartlead account.
- **Time:** ~30 min of work + up to a few hours for DNS to propagate before verifying.
- **Lane:** **[Carlos]** does all of this (credentials/DNS/payment); **[Claude-admin]** verifies + configures the sequence after.

---

## Step 1 — Google Workspace + 2 mailboxes (~10 min)

1. Sign up Google Workspace **Business Starter** (~$6/user/mo) on `promoteandgrow.com` → verify domain ownership (Google gives a TXT record; add it).
2. Create **2 users with real identities** (empty/bot-looking profiles get filtered):
   - `venus@promoteandgrow.com` — real first/last name, photo, simple signature.
   - `team@promoteandgrow.com` (or `hello@`) — same.
3. In **Admin console → Apps → Google Workspace → Gmail → End User Access:** turn **IMAP ON** (Smartlead needs it to read replies/warmup).
4. **2-Step Verification ON** for both users, then create an **App Password** for each (or connect via Google OAuth in Smartlead — either works).
5. Create a group or alias **`dmarc@promoteandgrow.com`** (or just use `team@`) to receive DMARC reports.

---

## Step 2 — DNS records (copy-paste) (~10 min)

Add these at your DNS host for **promoteandgrow.com**. Host notation: `@` = root domain; some hosts want the full name (e.g. `_dmarc.promoteandgrow.com`).

### MX — so the inboxes can RECEIVE (required for warmup + replies)
Google's modern single record:

| Type | Host | Priority | Value |
|---|---|---|---|
| MX | `@` | `1` | `smtp.google.com` |

*Legacy fallback if your host rejects the single record — use all five at the listed priorities:* `ASPMX.L.GOOGLE.COM` (1) · `ALT1.ASPMX.L.GOOGLE.COM` (5) · `ALT2.ASPMX.L.GOOGLE.COM` (5) · `ALT3.ASPMX.L.GOOGLE.COM` (10) · `ALT4.ASPMX.L.GOOGLE.COM` (10).

### SPF — one TXT record only (duplicates break auth)

| Type | Host | Value |
|---|---|---|
| TXT | `@` | `v=spf1 include:_spf.google.com ~all` |

### DKIM — generate in Google, then paste
DKIM can't be pre-written — Google generates the key:
1. **Admin console → Apps → Google Workspace → Gmail → Authenticate email.**
2. Select the domain → **Generate new record** → choose **2048-bit** (use 1024-bit only if your DNS host rejects the longer value) → prefix/selector leave as **`google`**.
3. Google shows a TXT record. Add it:

| Type | Host | Value |
|---|---|---|
| TXT | `google._domainkey` | `v=DKIM1; k=rsa; p=`*(long key Google gives you — paste the whole thing)* |

4. Back in Admin → **Start authentication.** (Status flips to active once DNS propagates.)

### DMARC — one TXT record, p=none

| Type | Host | Value |
|---|---|---|
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:dmarc@promoteandgrow.com; pct=100` |

> **`p=none` is sufficient** (validated 2026) — you do NOT need `p=reject`. Optional hardening: after ~2 weeks of clean DMARC reports, you *may* move to `p=quarantine`. Not required for our volume.

---

## Step 3 — Smartlead: connect + warmup config (~10 min)

1. Sign up **Smartlead Base** — **$32.50/mo annual** ($390/yr) or $39/mo monthly. Unlimited inboxes + unlimited warmup at this tier.
2. **Email Accounts → Add Account → Google/Gmail** → connect **both** mailboxes (OAuth, or IMAP/SMTP with the App Passwords from Step 1).
3. **Turn Warmup ON for each inbox** with these settings (set the same on both):

| Warmup setting | Value |
|---|---|
| Total warmup emails / day (start) | **20 per inbox** |
| Daily ramp-up (increase per day) | **+2–3/day** |
| Max warmup emails / day | **~40 per inbox** |
| Reply rate | **~30%** |
| "Randomize volume" / "warmup on weekends" | **ON** / lighter on weekends |
| Mark as important + auto-archive | **ON** |
| Custom warmup tag/filter | **ON** (keeps warmup mail out of the real inbox) |

4. **Campaign send settings** (configure now, used when real sends start in July — **leave the campaign OFF/scheduled until warmup clears**):

| Send setting | Value |
|---|---|
| Daily send limit / inbox | **30–35** (→ ~60–70/day across both) |
| Min–max delay between emails | **60–180 seconds** |
| Sending days / window | **Tue–Thu strongest; 8am–3pm PT** |
| Inbox rotation | **ON** (Smartlead rotates across both inboxes automatically) |
| **Open tracking** | **OFF** |
| **Link/click tracking** | **OFF** (both hurt cold placement in 2026) |
| Plain text (no HTML/images) | **Yes** — Touch 1 = zero links |
| One-click unsubscribe + physical address | **ON** (CAN-SPAM) |

---

## Step 4 — Warmup → live ramp + guardrails

**Do not send real cold emails during warmup.** Ramp (from [[cold-email-sequence]]):

| Week | Per inbox/day | Total/day | Mode |
|---|---|---|---|
| 1 | warmup ~20 | warmup only | **no real sends** |
| 2 | warmup ramps to ~40 | warmup only | warming |
| 3 | ~20–25 | ~40–50 | **first real sends** |
| 4 | ~30 | ~60 | scaling |
| 5+ | 30–35 | **60–70** | steady-state |

**Auto-pause guardrails (our internal limits — conservative, inside Google's published 0.3% ceiling):**
- Spam-complaint rate **> 0.08%** → pause, diagnose, re-verify list.
- Bounce rate **> 1.5%** → pause, clean the list.

---

## Step 5 — Verify before any real send (Claude-admin)

1. **MXToolbox** (mxtoolbox.com) → check `promoteandgrow.com` for **MX, SPF, DKIM, DMARC** → all must resolve / PASS.
2. Send a test from `venus@promoteandgrow.com` to a personal Gmail → open → **Show original** → **SPF: PASS · DKIM: PASS · DMARC: PASS.**
3. After ≥2–3 weeks warmup: run an **inbox-placement test** (Smartlead's built-in placement test, or mail-tester.com / GlockApps) → must hit **≥80% inbox** before the first real batch.
4. Confirm replies route to Venus + the scoreboard tag = **Cold Email** ([[cold-reply-playbook]]).

---

## The 30-minute checklist

- [ ] Workspace live on promoteandgrow.com; `venus@` + `team@` created with real profiles
- [ ] IMAP ON; 2FA + App Passwords (or OAuth ready)
- [ ] MX, SPF, DKIM, DMARC added at DNS host
- [ ] DKIM "Start authentication" clicked in Google
- [ ] Smartlead Base active; both inboxes connected; **warmup ON**
- [ ] Campaign send settings configured (tracking OFF, 30–35/inbox, Tue–Thu) — **scheduled OFF until July**
- [ ] Auto-pause set: 0.08% spam / 1.5% bounce
- [ ] → Hand to Claude-admin to verify (Step 5) + load the 3-touch sequence (A5–A7)

## Related pages
- [[cold-email-sequence]]
- [[cold-reply-playbook]]
- [[apollo-two-brand-setup]]
- [[email-send-preflight]]
- [[growth-offensive]]
- [[launch-week-roadmap]]
