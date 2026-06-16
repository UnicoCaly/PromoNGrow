#!/usr/bin/env python3
"""
Build pipeline for Promo & Grow email campaign.

Source: PNG Claude Chat/email-campaign/source/emails/*.html
Output:
  - PNG Claude Chat/email-campaign/shopify-ready/email-XX-*.html (full HTML)
  - PNG Claude Chat/email-campaign/shopify-ready/paste-this/email-XX-*.body.html (body only)

Pipeline steps:
  A. Convert {first name} merge tag → Shopify {{ customer.first_name | default: "there" }}
  B. Substitute image paths → Shopify Files CDN URLs
  C. Wrap logo <img> tags in tracking <a href> with utm_content=logo-header / logo-footer
  D. Replace {% unsubscribe %} → {{ unsubscribe_link }}
  E. Replace bit.ly/3REpAhn → direct https://promongrow.com/collections/bundles with full UTM
  F. Add utm tagging to bare promongrow.com footer text-link
  G. Extract body-only files into paste-this/

Re-run any time the source/ files change or the URL conventions change.
"""

import os
import re
import glob

ROOT = "/Users/Unico_Caly 1/Projects/Promo N Grow/PNG Claude Chat/email-campaign"
SRC = f"{ROOT}/source/emails"
DST = f"{ROOT}/shopify-ready"
PASTE = f"{DST}/paste-this"

os.makedirs(PASTE, exist_ok=True)

# Source → destination filename map (the 8 production emails Carlos will ship)
PAIRS = [
    ("01-carlos-reactivation.html",   "email-01-carlos-reactivation.html"),
    ("02-billboard.html",              "email-02-billboard.html"),
    ("03-they-built.html",             "email-03-they-built.html"),
    ("event-season-midrange.html",     "email-04-event-season.html"),  # locked B
    ("05-bundle-launch.html",          "email-05-bundle-launch.html"),
    ("06-summer-checklist.html",       "email-06-summer-checklist.html"),
    ("07-setup-vs.html",               "email-07-setup-vs.html"),
    ("08-vip-note.html",               "email-08-vip-note.html"),
]

# Shopify CDN URLs (from stagedUploadsCreate + fileCreate on 2026-05-23)
CDN_BASE = "https://cdn.shopify.com/s/files/1/0731/3886/4164/files"
IMG_MAP = {
    "../assets/logo-wordmark-horizontal.png": f"{CDN_BASE}/png-email-logo-wordmark-horizontal.png?v=1779596430",
    "img/hero-billboard.png":                  f"{CDN_BASE}/png-email-hero-billboard.png?v=1779596430",
    "img/hero-carlos.jpg":                     f"{CDN_BASE}/png-email-hero-carlos.jpg?v=1779596431",
    "img/hero-clientwork.jpg":                 f"{CDN_BASE}/png-email-hero-clientwork.jpg?v=1779596430",
    "img/hero-checklist.png":                  f"{CDN_BASE}/png-email-hero-checklist.png?v=1779596430",
    "img/hero-blank-vs-branded.png":           f"{CDN_BASE}/png-email-bundle-event-vendor.png?v=1779596430",  # dedupe — same file as bundle-event-vendor
    "img/hero-bundle-launch.png":              f"{CDN_BASE}/png-email-bundle-event-pro.png?v=1779596430",     # dedupe — same file as bundle-event-pro
    "img/hero-lansford.jpg":                   f"{CDN_BASE}/png-email-hero-carlos.jpg?v=1779596431",          # dedupe — same file as hero-carlos
    "img/bundle-event-vendor.png":             f"{CDN_BASE}/png-email-bundle-event-vendor.png?v=1779596430",
    "img/bundle-event-pro.png":                f"{CDN_BASE}/png-email-bundle-event-pro.png?v=1779596430",
    "img/bundle-trade-show.png":               f"{CDN_BASE}/png-email-bundle-trade-show.png?v=1779596430",
}

# UTM tracking base — &amp; entities for HTML hygiene + email client compatibility
UTM_BASE = "utm_source=email&amp;utm_medium=campaign&amp;utm_campaign="

# Per-email campaign names (derived from destination filename)
def campaign_name(dst_name: str) -> str:
    """email-04-event-season.html → event-season"""
    base = os.path.splitext(dst_name)[0]
    return re.sub(r"^email-0\d+-", "", base)


def build_email(src_path: str, dst_path: str, campaign: str) -> dict:
    """Run the full pipeline for one email. Returns stats."""
    with open(src_path, "r", encoding="utf-8") as f:
        content = f.read()

    stats = {"campaign": campaign}

    # Step A: merge tag → Shopify Email's first_name variable
    # NOT {{ customer.first_name }} — that's Shopify Storefront Liquid, won't resolve in
    # Shopify Email Custom HTML blocks. Shopify Email's recipient first-name variable is
    # plain {{ first_name }}.
    a_count = content.count("{first name}")
    content = content.replace(
        "{first name}",
        '{{ first_name | default: "there" }}'
    )
    stats["merge_tags_fixed"] = a_count

    # Step B: image paths → CDN URLs
    b_count = 0
    for relative_path, cdn_url in IMG_MAP.items():
        before = content.count(f'src="{relative_path}"')
        content = content.replace(f'src="{relative_path}"', f'src="{cdn_url}"')
        b_count += before
    stats["images_swapped"] = b_count

    # Step C: wrap logo imgs in tracking <a>, position-based (1st = header, 2nd = footer).
    # Position-based is more robust than width-based because logo widths vary across templates
    # (e.g. Email 08 uses width=220 for the header where others use 300).
    logo_link_base = f"https://promongrow.com/?{UTM_BASE}{campaign}"
    logo_pattern = re.compile(
        r'(<img [^>]*png-email-logo-wordmark-horizontal[^>]*>)'
    )

    # Counter closure so we can label the 1st match as header, 2nd as footer
    logo_counter = {"n": 0}
    def wrap_logo(match):
        logo_counter["n"] += 1
        position = "logo-header" if logo_counter["n"] == 1 else "logo-footer"
        return f'<a href="{logo_link_base}&amp;utm_content={position}" style="text-decoration:none;display:inline-block;">{match.group(1)}</a>'

    content, logos_wrapped = logo_pattern.subn(wrap_logo, content)
    stats["logos_wrapped"] = logos_wrapped

    # Step D: unsubscribe syntax
    d_count = content.count("{% unsubscribe %}")
    content = content.replace("{% unsubscribe %}", "{{ unsubscribe_link }}")
    stats["unsubscribe_swapped"] = d_count

    # Step E: bit.ly → direct URL with full UTM tracking
    # bit.ly/3REpAhn was hardcoded to /collections/bundles with stale per-email UTM —
    # replace with direct URL so per-email attribution actually works
    body_cta_url = (
        f"https://promongrow.com/collections/bundles?"
        f"{UTM_BASE}{campaign}&amp;utm_content=body-cta"
    )
    e_count = content.count('href="https://bit.ly/3REpAhn"')
    content = content.replace(
        'href="https://bit.ly/3REpAhn"',
        f'href="{body_cta_url}"'
    )
    stats["bitly_replaced"] = e_count

    # Step F: bare promongrow.com (footer text-link) → tagged
    # Only matches href="https://promongrow.com" with no query string (the bare ones)
    footer_link_url = f"https://promongrow.com/?{UTM_BASE}{campaign}&amp;utm_content=footer-link"
    f_count = content.count('href="https://promongrow.com"')
    content = content.replace(
        'href="https://promongrow.com"',
        f'href="{footer_link_url}"'
    )
    stats["footer_links_tagged"] = f_count

    # Step G: inject Shopify Email open tracking block. Required by Shopify Email — without it
    # the campaign editor refuses to save (renders an invisible 1x1 tracking pixel at send time).
    # Inject just before the closing </body> tag so it's the last thing in the body.
    open_tracking = "{{ open_tracking_block }}"
    if open_tracking not in content:
        content = content.replace("</body>", f"        {open_tracking}\n    </body>", 1)
        stats["open_tracking_injected"] = True
    else:
        stats["open_tracking_injected"] = False

    # Step H: remove "— Carlos" signature lines (sender name is already "Carlos at Promo & Grow"
    # in the From field — repeating it in the body reads as over-signed).
    # Email 04 has a combined "— Carlos, Promo & Grow" attribution line — collapse to brand only.
    # Other emails have standalone "— Carlos" <p> blocks — delete the whole <p>.
    sig_count = 0
    # Pattern 1: standalone <p>— Carlos</p> (Em-dash or hyphen variants)
    standalone_sig = re.compile(
        r'^\s*<p[^>]*>[—–-]\s*Carlos\s*</p>\s*\n?',
        re.MULTILINE
    )
    new_content, n1 = standalone_sig.subn('', content)
    sig_count += n1
    # Pattern 2: combined "— Carlos, Promo & Grow" — keep brand attribution, drop name
    combined_sig = re.compile(
        r'([—–-])\s*Carlos,\s*Promo\s*(?:&amp;|&)\s*Grow',
    )
    new_content, n2 = combined_sig.subn(r'\1 Promo &amp; Grow', new_content)
    sig_count += n2
    content = new_content
    stats["signatures_removed"] = sig_count

    # Step I: restructure footer to isolate the unsubscribe link onto its own paragraph.
    # Symptom Carlos saw: weird text appearing next to "Unsubscribe" in Shopify Email's editor,
    # likely from the long inline two-link paragraph confusing the editor's HTML preview.
    # Split into two clean <p> tags: one for unsubscribe, one for the promongrow.com text-link.
    footer_pattern = re.compile(
        r'(<p style="[^"]*"><a href="\{\{ unsubscribe_link \}\}"[^>]*>Unsubscribe</a>)'
        r'\s*&nbsp;·&nbsp;\s*'
        r'(<a href="https://promongrow\.com[^"]*"[^>]*>promongrow\.com</a></p>)',
        re.IGNORECASE
    )
    # Non-raw double-quoted Python string: \\1 + \\2 are re.sub backrefs, \n is a real newline,
    # single quotes around 'DM Sans' are literal (no backslash escapes needed).
    footer_replacement = (
        "\\1</p>\n"
        "        <p style=\"font-family:'DM Sans',-apple-system,BlinkMacSystemFont,sans-serif;"
        "font-size:11px;color:#8B949E;margin:6px 0 0;letter-spacing:0.04em;\">\\2"
    )
    new_content, footer_count = footer_pattern.subn(footer_replacement, content)
    content = new_content
    stats["footer_restructured"] = footer_count

    # Write production HTML
    with open(dst_path, "w", encoding="utf-8") as f:
        f.write(content)

    # Step G: extract body content (between <body...> and </body>) → paste-this/
    body_match = re.search(r"<body[^>]*>(.*?)</body>", content, re.DOTALL)
    if body_match:
        body_only = body_match.group(1).strip() + "\n"
        paste_name = os.path.basename(dst_path).replace(".html", ".body.html")
        with open(f"{PASTE}/{paste_name}", "w", encoding="utf-8") as f:
            f.write(body_only)
        stats["body_extracted"] = True
    else:
        stats["body_extracted"] = False

    return stats


def main():
    print(f"Rebuilding {len(PAIRS)} emails from {SRC}")
    print(f"  → {DST}")
    print(f"  → {PASTE}")
    print()

    for src_name, dst_name in PAIRS:
        src_path = f"{SRC}/{src_name}"
        dst_path = f"{DST}/{dst_name}"
        campaign = campaign_name(dst_name)
        stats = build_email(src_path, dst_path, campaign)
        print(f"  {dst_name}  utm_campaign={stats['campaign']}")
        print(f"      merge={stats['merge_tags_fixed']}  imgs={stats['images_swapped']}  "
              f"logos={stats['logos_wrapped']}  unsub={stats['unsubscribe_swapped']}  "
              f"bitly→direct={stats['bitly_replaced']}  footer={stats['footer_links_tagged']}  "
              f"open_tracking={stats['open_tracking_injected']}  "
              f"sigs_removed={stats['signatures_removed']}  "
              f"footer_split={stats['footer_restructured']}  "
              f"body_extracted={stats['body_extracted']}")

    print()
    print("Done. To verify: inspect any shopify-ready/email-*.html or paste-this/*.body.html")


if __name__ == "__main__":
    main()
