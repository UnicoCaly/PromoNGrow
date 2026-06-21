# Summer of Fútbol — Campaign Context & Status
### Single source of truth · Last updated June 16, 2026

> **STATUS:** Built and brand-audited. **English email is send-ready for tomorrow AM (June 17).**
> Both header images are hosted on the Shopify CDN and wired into the code. Social designs are in
> Canva (need real photos). Landing page + ads are built as copy/HTML, pending wiring.

---

## 1. THE CAMPAIGN IN ONE SCREEN

- **Who:** Promo & Grow (PNG / "Promo & Grow," formerly PrintCo Direct) — Lynwood/LA custom event-display + print shop. Owner: Carlos A. Diaz Jr. Concierge closer: **Venus Castro**. (844) 883-3308 · hello@promongrow.com · 10am–4pm PT · Hablamos español.
- **Moment:** The 2026 international soccer tournament, June 11–July 19, hosted USA/Canada/Mexico (LA is a host metro; Mexico co-hosts). We ride the *cultural* moment only — see FIFA guardrail.
- **Big idea / platform:** **"Start the 5-day clock."** Master line: *"The matches run through July 19. Free proof today, booth-ready in 5 days."*
- **Hero offer:** **The Watch-Party Kit** = custom tent + table throw + feather flag, printed with the business's **own logo + their team's colors.** Maps to the Event Pro Bundle: **starting at $857, save 15%**, clears the $500 free-shipping line (code **SHOWUP**).
- **Audience (hero):** Neighborhood watch-party spots — restaurants, bars, breweries, taquerías hosting the matches on their patios. Bilingual LA core (Lynwood, South Gate, Huntington Park, Bell, Downey, East LA). **Warm reactivation layered in** (162 past-customer list + whales).
- **Languages:** Full EN + full ES + a Spanglish blend.

### Locked creative decisions (from the kickoff Q&A)
| Decision | Choice |
|---|---|
| Campaign focus | Neighborhood watch-party spots |
| Hero offer | Watch-Party Kit bundle |
| Big idea | "Start the 5-day clock" |
| Language | Full EN + ES, plus a Spanglish blend |

---

## 2. GUARDRAILS (honored across every asset)

1. **FIFA-safe** — never "FIFA," "World Cup," "Copa Mundial," the emblem/trophy/mascot, team crests/kits, or implied affiliation. Use *"the matches," "the big tournament," "el torneo," "game day," "watch party," "summer of fútbol."* **Team colors yes; crests no.** (We print the customer's OWN logo.)
2. **No fake urgency** — real 5-business-day lead-time math only; no countdown timers / "only X left."
3. **Premium, never cheap** — navy/copper system; team colors live only in real product photos.
4. **Real photos only** — no AI-generated product images.
5. **"Design not included — we proof before production."**
6. **Drives to reply / call / free proof** — never "buy now." (Data: soft "reply" email = 13% clicks; hard-sell blast = 0%.)
7. **Protect Venus** — pace to ~5–6 quality leads/day.
8. **Channel firewall** — email blast = owned warm list only; exclude **DNC:institutional** (City of South Gate, Lynwood/LUSD, Nova Storage); cold prospecting stays on the separate domain.

### Brand system
Navy `#1B2838` (text/structure) · Copper `#C17A3A` (CTAs/accents ONLY) · Trust-green `#1E6B4A` (savings/guarantee badges) · off-white `#F7F7F5` · white dominant. Fonts: **DM Serif Display + DM Sans** (web); **Georgia + Arial** fallbacks (email). Logo: retro "Promo & Grow" wordmark. Copyright line: `© 2026 Promo & Grow — Powered by Proago Branding Dept.`

---

## 3. ASSET INVENTORY (folder: `Summer of Futbol Campaign/`)

| File | What it is | State |
|---|---|---|
| `00-Campaign-Game-Plan.md` | Master strategy: objective, budget split, calendar, KPIs | ✅ |
| `01-Email-Blast.md` | Email copy source (EN/ES/Spanglish) | ✅ |
| `02-Ad-Creative-Meta-and-Google.md` | 4 Meta concepts + Instant Form + Reel storyboard + Google Search ad group | ✅ copy ready; not yet launched |
| `03-Funnel-Landing-Page.md` | Landing page copy + auto-reply (email/SMS) + thank-you | ✅ copy ready |
| `04-Social-Media-Pack.md` | 6-week rhythm + 4 hero posts + Reel + "two booths" | ✅ copy ready |
| `EMAIL-EN-Shopify-Send-Sheet.md` | Block-by-block build sheet (alt path for Shopify Email block editor) | ✅ |
| **`email-en.html`** | **Plug-and-play HTML — FINAL, send-ready** | ✅ |
| `email-es.html` / `email-spanglish.html` | HTML — final, send-ready | ✅ |
| `email-en.txt` | Plain-text version | ✅ |
| `landing-page.html` | Responsive landing page (rendered + verified) | ✅ built; form needs wiring |
| `png-logo.png` | Cropped P&G wordmark (1920×440, transparent) | ✅ also on Shopify CDN |
| `header-fan-zone.png` | Match Day Fan Zone header photo | ✅ also on Shopify CDN |

---

## 4. THE EMAIL — final send-ready spec (`email-en.html`)

- **From:** Venus Castro · Promo & Grow · reply-to hello@promongrow.com
- **Subject (LIVE = Option 2):** `Want your patio packed on game day, {{ first_name }}?`
- **Preview:** `Your tent, your throw, your flag — your logo, your team's colors.`
- **Header:** P&G logo on navy bar → Match Day Fan Zone photo (both from Shopify CDN)
- **Body flow:** Venus intro → **Order by June 26 → in time for the 4th of July weekend + the big matches** (trademark-safe; *not* the literal "World Cup") → Watch-Party Kit ($857 · save 15% · SHOWUP free shipping >$500) → 3 trust answers (free proof / 4.8★ · 20+ yrs · Made in USA / "starting at" pricing) → 3-step how-it-works → copper **"Get a Free Proof"** button → `https://promongrow.com/collections/bundles` → secondary "reply or call/text me at (844) 883-3308" → **Venus Castro** signature → P.S. "PrintCo Direct is now Promo & Grow" → footer + `{{ unsubscribe_link }}` + `{{ open_tracking_block }}`
- **Audience:** Reactivation-Apr2026 + Reactivation-2026 + `int:tents`. **EXCLUDE** DNC:institutional + the cold list.
- **Send:** Tomorrow (June 17) ~9–10am PT. Re-copy the current code into Shopify Email (it now has the CDN image URLs + the tracking block). Send a test to self first.

---

## 5. LIVE INFRASTRUCTURE (created this session)

### Shopify CDN — hosted header images (READY in Content → Files)
| Image | URL | Shopify file ID | Size |
|---|---|---|---|
| Logo | `https://cdn.shopify.com/s/files/1/0731/3886/4164/files/png-logo.png?v=1781647250` | `gid://shopify/MediaImage/35905993146404` | 1920×440 |
| Header photo | `https://cdn.shopify.com/s/files/1/0731/3886/4164/files/header-fan-zone.png?v=1781647251` | `gid://shopify/MediaImage/35905993179172` | 1448×1086 |

> These URLs are public — the emails work via Shopify Email, any ESP, or a Gmail paste.

### Canva — folder "Summer of Fútbol — Social 2026" (`FAHMt9HzlCQ`) · brand kit `kAHG1r5M2LE`
| Design | Pillar | Edit link |
|---|---|---|
| Watch-Party Kit kickoff | Promo & Trust ($15 boost) | https://www.canva.com/d/t6C5gVBwveT63zh |
| 10×10 tent | Product Showcase | https://www.canva.com/d/EtTqcebAih9XQtp |
| Patio before/after | Client Results | https://www.canva.com/d/k5rmuNnVS9eJL3C |
| "Here's the math" | Education | https://www.canva.com/d/QD3wiVrUNvLvtRC |
| Two booths | Promo & Trust ($20 boost) | https://www.canva.com/d/qrSsPAl5fUL5gMK |
| Reel / Story cover | Reel beat 1 | https://www.canva.com/d/GGNDu-pF4BgDVu3 |

> All use placeholder imagery — **swap in real client photos before posting.** Captions (EN/ES/Spanglish) + the 6-week calendar live in `04-Social-Media-Pack.md`.

### Local preview
`.claude/launch.json` has a `png-campaign-static` server (python http.server, port 4599) for previewing the campaign HTML locally.

---

## 6. DONE ✅ vs. OPEN ⏳

**Done**
- ✅ Strategy + all 4 deliverables (email, ads, funnel, social) written + brand-audited
- ✅ 6 social designs built in Canva
- ✅ 3 plug-and-play HTML emails + landing page built and verified
- ✅ Email finalized: Venus Castro contact · June 26 order-by · 4th-of-July framing · P&G logo header · fan-zone photo
- ✅ Both images hosted on Shopify CDN + wired into code
- ✅ `{{ open_tracking_block }}` added (clears the Shopify Email error)

**Open**
- ⏳ **Send the EN email tomorrow AM** (re-copy code → Shopify Email → test → schedule). Confirm $857/SHOWUP still current; apply suppressions.
- ⏳ **Social:** drop real photos into the 6 Canva designs; 48-hr approval; run the 6-week calendar; boosts on the 2 Promo posts.
- ⏳ **Funnel:** wire the landing-page form to the lead handler; publish `/pages/watch-party-proof` (+ `/pages/proof-es`); fire the auto-reply + Venus speed-to-lead.
- ⏳ **Ads:** stand up the Meta Instant Form + audiences + UTMs; Google Search ad group; verify Pixel + add a Lead conversion (budget $400 retarget / $200 Meta prospect / $150 Google).
- ⏳ **ES / Spanglish email** sends if splitting by language.

---

## 7. CHANGE LOG — this session (June 15–16, 2026)

- Built the full campaign from PNG's brand/context library (strategy → copy → creative).
- Generated 6 on-brand Canva social designs into a dedicated folder.
- Produced 3 plug-and-play HTML emails (EN/ES/Spanglish) + a responsive landing page; verified rendering.
- **Email finalization:** swapped contact from Carlos → **Venus Castro** (+ "Concierge & Setup Specialist" title); set **order-by June 26**; reframed timing to **"4th of July weekend and the big matches"** (kept trademark-safe instead of literal "World Cup"); added the **Match Day Fan Zone** header photo; replaced the text logo with the **P&G retro wordmark** (cropped from `Logo/Promo N Grow Site-11.png`).
- Recovered `email-en.html` after it was accidentally converted to plain text.
- **Shopify hosting:** uploaded logo + header photo to Shopify Files via staged upload → permanent CDN URLs wired into all 3 emails.
- Added `{{ open_tracking_block }}` to satisfy Shopify Email's custom-HTML requirement.

*© 2026 Promo & Grow — Powered by Proago Branding Dept.*
