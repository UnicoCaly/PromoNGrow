import { useState } from "react";

const NAVY = "#1B2838";
const NAVY_LIGHT = "#2E3E50";
const COPPER = "#C17A3A";
const COPPER_DARK = "#A8682F";
const WHITE = "#FFFFFF";
const OFFWHITE = "#F7F7F5";
const TRUST_GREEN = "#1E6B4A";
const GRAY_100 = "#F5F5F3";
const GRAY_300 = "#D1D5DB";
const GRAY_500 = "#6B7280";
const GRAY_700 = "#374151";

const sections = [
  "Overview",
  "Visual Identity",
  "Content Pillars",
  "Calendar",
  "Captions",
  "Hashtags",
  "Guidelines",
];

const pillars = [
  {
    icon: "📦",
    name: "Product Showcase",
    pct: "35%",
    desc: "Show the finished product in action. Real tents at real events, real backdrops at real trade shows. This is your proof of quality — let the work sell itself.",
    examples: [
      "Completed tent setup at a client's event — hero angle shot",
      "Before/after: blank tent frame → branded canopy installed",
      "Detail shots — print quality close-ups, stitching, frame hardware",
      "Product unboxing — 'here's what arrives at your door'",
      "Side-by-side size comparison (5x5, 10x10, 15x10, 20x10)",
    ],
    tone: "Confident, visual-first. Short captions. Let the photo carry the post.",
    platform_note: "Instagram: carousel (hero + details + setup). Facebook: single hero image with longer caption.",
  },
  {
    icon: "🎪",
    name: "Client Results",
    pct: "25%",
    desc: "Feature real businesses using P&G products at their events. This is social proof — it shows buyers what's possible and builds trust through real-world application.",
    examples: [
      "\"Here's how [Business Name] showed up at [Event]\" — with their permission",
      "Client testimonial graphic (quote + their tent/display setup photo)",
      "Event recap: 'We produced the displays for [X] this weekend'",
      "Google review screenshot with the client's setup photo",
      "Repost/share client's own photos of their setup (with credit)",
    ],
    tone: "Warm, celebratory. Highlight the client, not P&G. Their success is your proof.",
    platform_note: "Instagram: tag the client, ask them to share. Facebook: tag their business page for cross-reach.",
  },
  {
    icon: "🎓",
    name: "Education & Tips",
    pct: "25%",
    desc: "Teach buyers how to get the most out of their event displays. File prep, setup tips, event planning basics. Position P&G as the knowledgeable partner, not just a vendor.",
    examples: [
      "\"3 things to know before ordering a custom tent\"",
      "\"How to prepare print-ready artwork in Canva — free template\"",
      "\"Booth setup checklist for your first trade show\"",
      "\"Wind rating explained: which tent frame do you need?\"",
      "\"Fabric only vs. frame + fabric: when to reorder\"",
    ],
    tone: "Helpful, practical, clear. No jargon without explanation. This is the shop foreman teaching the new buyer.",
    platform_note: "Instagram: carousel format works best for step-by-step. Facebook: link to design resources page on site.",
  },
  {
    icon: "⚡",
    name: "Promo & Trust",
    pct: "15%",
    desc: "Seasonal offers, bundle deals, and trust-building content. Use sparingly — these reinforce credibility and drive urgency without being salesy.",
    examples: [
      "\"10% off your first order — link in bio\"",
      "\"Event season is here. 5-day delivery on all products.\"",
      "\"20+ years in production. 4.8★ on Google. Made in the USA.\"",
      "\"New on the site: complete event bundles — save 15%+\"",
      "Behind-the-scenes: production facility, packing an order, quality check",
    ],
    tone: "Direct, confident. No fake urgency or countdown timers. State the offer clearly and move on.",
    platform_note: "Instagram: Stories are the best channel for time-sensitive promos. Facebook: boost promotional posts for $10-20 to reach past customers.",
  },
];

const calendarOptions = [
  {
    label: "2 posts/week",
    price: "~$150/mo",
    note: "Minimum viable. Keeps the account active. Good starting point.",
    weeks: [
      {
        week: "Week 1",
        posts: [
          { day: "Tuesday", pillar: "Product Showcase", type: "Product hero shot — completed tent or display setup with brief caption" },
          { day: "Friday", pillar: "Education & Tips", type: "Helpful tip or how-to — carousel or single image with practical advice" },
        ],
      },
      {
        week: "Week 2",
        posts: [
          { day: "Tuesday", pillar: "Client Results", type: "Client feature — their event setup using P&G products, with testimonial" },
          { day: "Friday", pillar: "Product Showcase", type: "Product detail or comparison — close-up quality shots or size guide" },
        ],
      },
      {
        week: "Week 3",
        posts: [
          { day: "Tuesday", pillar: "Education & Tips", type: "Design/file prep tip or event planning checklist" },
          { day: "Friday", pillar: "Promo & Trust", type: "Offer, trust signal, or behind-the-scenes production content" },
        ],
      },
      {
        week: "Week 4",
        posts: [
          { day: "Tuesday", pillar: "Product Showcase", type: "Best product shot of the month — hero image, detailed caption" },
          { day: "Friday", pillar: "Client Results", type: "Client testimonial or Google review feature" },
        ],
      },
    ],
  },
  {
    label: "3 posts/week",
    price: "~$200-250/mo",
    note: "Sweet spot. Enough frequency to build momentum without burning content.",
    weeks: [
      {
        week: "Week 1",
        posts: [
          { day: "Monday", pillar: "Product Showcase", type: "Product hero — tent, display, or bundle in action" },
          { day: "Wednesday", pillar: "Education & Tips", type: "How-to or tip carousel" },
          { day: "Friday", pillar: "Client Results", type: "Client feature or testimonial" },
        ],
      },
      {
        week: "Week 2",
        posts: [
          { day: "Monday", pillar: "Client Results", type: "Event recap or client repost" },
          { day: "Wednesday", pillar: "Product Showcase", type: "Product detail or unboxing" },
          { day: "Friday", pillar: "Promo & Trust", type: "Offer, bundle highlight, or trust signal" },
        ],
      },
      {
        week: "Week 3",
        posts: [
          { day: "Monday", pillar: "Education & Tips", type: "File prep guide or Canva template promo" },
          { day: "Wednesday", pillar: "Product Showcase", type: "Size comparison or setup walkthrough" },
          { day: "Friday", pillar: "Client Results", type: "Google review graphic or client shoutout" },
        ],
      },
      {
        week: "Week 4",
        posts: [
          { day: "Monday", pillar: "Product Showcase", type: "Best shot of the month" },
          { day: "Wednesday", pillar: "Promo & Trust", type: "Behind-the-scenes or trust stat post" },
          { day: "Friday", pillar: "Education & Tips", type: "Practical tip — booth setup, wind rating, fabric care" },
        ],
      },
    ],
  },
];

const captionTemplates = [
  {
    pillar: "Product Showcase",
    template: `[Product type] for [client type or event type].

[1-2 sentences about the setup — size, features, what made it stand out.]

Full-color custom printing. Heavy-duty frames. Delivered in 5 business days.

Shop link in bio or call us: (844) 883-3308

#PromoAndGrow #CustomTent #EventDisplays #TradeShowBooth`,
  },
  {
    pillar: "Client Results",
    template: `[Client name or business] showed up to [event name] ready to turn heads.

[1-2 sentences about their setup — what products they ordered, how it came together.]

This is what happens when your brand gets the setup it deserves.

Need your own? Link in bio or call: (844) 883-3308

#PromoAndGrow #EventBranding #CustomDisplays #ClientSpotlight`,
  },
  {
    pillar: "Education & Tips",
    template: `[Tip headline — question or "X things to know" format]

[2-3 practical sentences explaining the concept in plain language. No jargon.]

We've been producing event displays for 20+ years. These are the things we wish every first-time buyer knew.

Free design templates + guides: link in bio

#PromoAndGrow #EventTips #TradeShowTips #CustomPrinting`,
  },
  {
    pillar: "Promo & Trust",
    template: `[Offer or trust statement — direct, no fluff.]

[1-2 sentences with context — what's included, why it matters, how to claim it.]

4.8★ on Google. 20+ years in production. Made in the USA.

Shop: promongrow.com | Call: (844) 883-3308

#PromoAndGrow #EventDisplays #MadeInUSA #CustomTents`,
  },
];

export default function ContentGuide() {
  const [activeSection, setActiveSection] = useState(0);

  const renderSection = () => {
    switch (activeSection) {
      case 0: return <OverviewSection />;
      case 1: return <VisualIdentitySection />;
      case 2: return <ContentPillarsSection />;
      case 3: return <CalendarSection />;
      case 4: return <CaptionsSection />;
      case 5: return <HashtagsSection />;
      case 6: return <GuidelinesSection />;
      default: return null;
    }
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Helvetica Neue', Helvetica, sans-serif",
      background: WHITE,
      color: NAVY,
      minHeight: "100vh",
      maxWidth: 480,
      margin: "0 auto",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=DM+Serif+Display&display=swap" rel="stylesheet" />

      <div style={{
        background: NAVY,
        padding: "28px 20px 20px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: -30,
          right: -30,
          width: 140,
          height: 140,
          border: "2px solid rgba(193,122,58,0.15)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute",
          top: 10,
          right: 10,
          width: 80,
          height: 80,
          border: "2px solid rgba(193,122,58,0.08)",
          borderRadius: "50%",
        }} />
        <div style={{ fontSize: 10, letterSpacing: 4, color: "rgba(255,255,255,0.5)", fontWeight: 600, marginBottom: 6 }}>
          SOCIAL MEDIA CONTENT GUIDE
        </div>
        <h1 style={{
          fontSize: 24,
          fontWeight: 800,
          color: WHITE,
          margin: 0,
          lineHeight: 1.2,
        }}>
          Promo <span style={{ color: COPPER, fontWeight: 400 }}>&</span> Grow
        </h1>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 8, lineHeight: 1.5 }}>
          Agency Playbook — Instagram + Facebook<br />
          Prepared April 2026
        </div>
      </div>

      <div style={{
        display: "flex",
        overflowX: "auto",
        gap: 0,
        borderBottom: `2px solid ${GRAY_100}`,
        background: WHITE,
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        {sections.map((section, i) => (
          <button
            key={i}
            onClick={() => setActiveSection(i)}
            style={{
              background: "none",
              border: "none",
              borderBottom: activeSection === i ? `3px solid ${NAVY}` : "3px solid transparent",
              padding: "12px 14px",
              fontSize: 11,
              fontWeight: activeSection === i ? 700 : 500,
              color: activeSection === i ? NAVY : GRAY_500,
              cursor: "pointer",
              whiteSpace: "nowrap",
              fontFamily: "'DM Sans', sans-serif",
              transition: "all 0.2s ease",
            }}
          >
            {section}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px 18px 40px" }}>
        {renderSection()}
      </div>
    </div>
  );
}

function SectionTitle({ label, title, subtitle }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 10, letterSpacing: 3, color: COPPER, fontWeight: 700, marginBottom: 4 }}>
        {label}
      </div>
      <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0, color: NAVY, lineHeight: 1.3 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: 13, color: GRAY_500, margin: "6px 0 0", lineHeight: 1.5 }}>{subtitle}</p>
      )}
    </div>
  );
}

function Card({ children, style = {} }) {
  return (
    <div style={{
      background: GRAY_100,
      borderRadius: 12,
      padding: 16,
      marginBottom: 14,
      ...style,
    }}>
      {children}
    </div>
  );
}

function OverviewSection() {
  return (
    <div>
      <SectionTitle
        label="OVERVIEW"
        title="Who They Are"
        subtitle="Everything the agency needs to understand before creating a single post."
      />

      <Card>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10, color: NAVY }}>The Business</div>
        <div style={{ fontSize: 13, color: GRAY_700, lineHeight: 1.7 }}>
          Promo & Grow (promongrow.com) is a custom event display company operated by <strong>Proágo Branding Dept.</strong> out of Lynwood, California. They produce and deliver custom printed tents, backdrops, flags, table throws, wall art, and wraps for small businesses, event planners, and trade show teams. <strong>20+ years in production</strong> with a 4.8★ rating on Google.
        </div>
      </Card>

      <Card>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10, color: NAVY }}>The Differentiator</div>
        <div style={{ fontSize: 13, color: GRAY_700, lineHeight: 1.7 }}>
          <strong>5-business-day guaranteed delivery</strong> on all products, nationwide. Most competitors quote 7-14 days. P&G also offers a <strong>free artwork proof on every order</strong> — nothing goes to production without client approval. Real people, real production expertise, not a faceless online print shop.
        </div>
      </Card>

      <Card>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10, color: NAVY }}>The Audience</div>
        {[
          { who: "Small Business Owners", detail: "First-time event vendors — farmers markets, pop-ups, trade shows. Need to look professional on a budget. Decision: solo, fast." },
          { who: "Event Planners / Marketing Managers", detail: "Booking booths for conferences or company activations. Have brand guidelines and print-ready files. Need speed and reliability." },
          { who: "Repeat Buyers", detail: "Past clients reordering replacement canopies, adding accessories, or referring colleagues. Want frictionless reorders." },
        ].map((a, i) => (
          <div key={i} style={{ marginBottom: i < 2 ? 12 : 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: COPPER }}>{a.who}</div>
            <div style={{ fontSize: 12, color: GRAY_700, lineHeight: 1.6, marginTop: 2 }}>{a.detail}</div>
          </div>
        ))}
      </Card>

      <Card style={{ background: NAVY, color: WHITE }}>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>Brand Voice</div>
        <div style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.9 }}>
          <strong>Knowledgeable shop foreman.</strong> Clear, direct, no jargon. Confident because 20+ years of work backs it up. Warm enough to feel human, professional enough to trust with $2K. Short sentences. Benefit first, feature second.<br /><br />
          <strong>Never:</strong> Vistaprint-generic, fake urgency, startup-y, or overly casual.
        </div>
      </Card>

      <Card>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, color: NAVY }}>Key Facts for Copy</div>
        {[
          "5-day guaranteed delivery nationwide",
          "Free artwork proof on every order",
          "4.8★ rating from 19 Google reviews",
          "20+ years in production",
          "Made in the USA",
          "Design not included — we proof before production",
          "Phone: (844) 883-3308",
          "Website: promongrow.com",
        ].map((fact, i) => (
          <div key={i} style={{
            fontSize: 12,
            color: GRAY_700,
            padding: "6px 0",
            borderBottom: i < 7 ? `1px solid ${GRAY_300}40` : "none",
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}>
            <div style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: COPPER }} />
            {fact}
          </div>
        ))}
      </Card>
    </div>
  );
}

function VisualIdentitySection() {
  return (
    <div>
      <SectionTitle
        label="VISUAL IDENTITY"
        title="Brand Specs"
        subtitle="Every post must follow these visual standards. No exceptions."
      />

      <Card>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: NAVY }}>Colors</div>
        <div style={{ display: "flex", gap: 10 }}>
          {[
            { name: "Deep Navy", hex: "#1B2838", text: WHITE },
            { name: "Copper", hex: "#C17A3A", text: WHITE },
            { name: "White", hex: "#FFFFFF", text: NAVY, border: true },
            { name: "Off-White", hex: "#F7F7F5", text: NAVY, border: true },
            { name: "Trust Green", hex: "#1E6B4A", text: WHITE },
          ].map((c, i) => (
            <div key={i} style={{ flex: 1, textAlign: "center" }}>
              <div style={{
                width: "100%",
                height: 48,
                borderRadius: 8,
                background: c.hex,
                border: c.border ? `2px solid ${GRAY_300}` : "none",
                marginBottom: 4,
              }} />
              <div style={{ fontSize: 10, fontWeight: 700, color: NAVY }}>{c.name}</div>
              <div style={{ fontSize: 9, color: GRAY_500 }}>{c.hex}</div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 14,
          padding: 12,
          background: WHITE,
          borderRadius: 8,
          border: `1px solid ${GRAY_300}40`,
          fontSize: 12,
          color: GRAY_700,
          lineHeight: 1.6,
        }}>
          <strong>Usage:</strong> White is the dominant background (70%+ of surface area). Navy for text, headers, and footer elements. Copper ONLY for CTAs and accent highlights — every copper element should be actionable. Trust Green only for guarantee badges. No gradients, no additional colors.
        </div>
      </Card>

      <Card>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: NAVY }}>Typography</div>
        <div style={{
          padding: 16,
          background: WHITE,
          borderRadius: 8,
          border: `1px solid ${GRAY_300}40`,
          marginBottom: 10,
        }}>
          <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, fontWeight: 400, color: NAVY, marginBottom: 4 }}>
            DM Serif Display
          </div>
          <div style={{ fontSize: 11, color: GRAY_500 }}>Primary — Headlines, titles, overlay text on images</div>
        </div>
        <div style={{
          padding: 16,
          background: WHITE,
          borderRadius: 8,
          border: `1px solid ${GRAY_300}40`,
        }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 500, color: NAVY, marginBottom: 4 }}>
            DM Sans Medium
          </div>
          <div style={{ fontSize: 11, color: GRAY_500 }}>Secondary — Body copy, captions, subtitles, UI elements</div>
        </div>
      </Card>

      <Card>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: NAVY }}>Post Layout Rules</div>
        {[
          { rule: "Format", detail: "1080×1080 (square) for feed. 1080×1920 for Stories. Consistent across IG + FB." },
          { rule: "Logo placement", detail: "Bottom-right corner. White logo on dark images, navy logo on light images. Always present." },
          { rule: "Text overlay", detail: "DM Serif Display for headlines, max 6-8 words. DM Sans for subtext. Keep it scannable." },
          { rule: "Image treatment", detail: "Real product photos only. No AI-generated/stock images. Clean white or event-setting backgrounds." },
          { rule: "White space", detail: "Generous margins. The minimalist white-canvas aesthetic from the site carries into social." },
          { rule: "CTA on every post", detail: "\"Link in bio\" or phone number (844) 883-3308 in every caption. Visual CTA bar on graphics." },
          { rule: "Copper accent", detail: "Use copper for any text overlay CTA, price callout, or accent bar. It should pop against the clean white/navy palette." },
        ].map((r, i) => (
          <div key={i} style={{
            padding: "8px 0",
            borderBottom: i < 6 ? `1px solid ${GRAY_300}30` : "none",
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: COPPER }}>{r.rule}</div>
            <div style={{ fontSize: 12, color: GRAY_700, marginTop: 2, lineHeight: 1.5 }}>{r.detail}</div>
          </div>
        ))}
      </Card>

      <Card>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: NAVY }}>Platform-Specific Notes</div>
        <div style={{ padding: "8px 0", borderBottom: `1px solid ${GRAY_300}30` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: COPPER }}>Instagram</div>
          <div style={{ fontSize: 12, color: GRAY_700, marginTop: 2, lineHeight: 1.5 }}>Carousel format for education/tips posts (swipeable steps). Single hero image for product showcase. Stories: repost every feed post as a Story same-day. Use "Link" sticker to promongrow.com.</div>
        </div>
        <div style={{ padding: "8px 0" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: COPPER }}>Facebook</div>
          <div style={{ fontSize: 12, color: GRAY_700, marginTop: 2, lineHeight: 1.5 }}>Same visual, longer caption OK. Single image performs better than carousel on FB. Tag client business pages when featuring their work. Consider $10-20 boost on promo posts to reach past customers.</div>
        </div>
      </Card>
    </div>
  );
}

function ContentPillarsSection() {
  const [expanded, setExpanded] = useState(null);
  return (
    <div>
      <SectionTitle
        label="CONTENT PILLARS"
        title="What to Post"
        subtitle="Every post fits one of these four categories. The percentages guide monthly distribution."
      />

      {pillars.map((pillar, i) => (
        <div
          key={i}
          onClick={() => setExpanded(expanded === i ? null : i)}
          style={{
            background: GRAY_100,
            borderRadius: 12,
            padding: 16,
            marginBottom: 12,
            cursor: "pointer",
            border: expanded === i ? `2px solid ${NAVY}` : "2px solid transparent",
            transition: "border 0.2s ease",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontSize: 22 }}>{pillar.icon}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>{pillar.name}</div>
                <div style={{ fontSize: 11, color: GRAY_500 }}>{pillar.pct} of content</div>
              </div>
            </div>
            <div style={{
              background: NAVY,
              color: WHITE,
              fontSize: 13,
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: 8,
            }}>
              {pillar.pct}
            </div>
          </div>

          {expanded === i && (
            <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${GRAY_300}40` }}>
              <div style={{ fontSize: 12, color: GRAY_700, lineHeight: 1.6, marginBottom: 12 }}>
                {pillar.desc}
              </div>

              <div style={{ fontSize: 11, fontWeight: 700, color: COPPER, marginBottom: 6, letterSpacing: 1 }}>
                POST IDEAS
              </div>
              {pillar.examples.map((ex, j) => (
                <div key={j} style={{
                  fontSize: 12,
                  color: GRAY_700,
                  padding: "5px 0",
                  paddingLeft: 12,
                  borderLeft: `2px solid ${COPPER}30`,
                  marginBottom: 4,
                  lineHeight: 1.5,
                }}>
                  {ex}
                </div>
              ))}

              <div style={{ marginTop: 12 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: COPPER, marginBottom: 4, letterSpacing: 1 }}>TONE</div>
                <div style={{ fontSize: 12, color: GRAY_700, lineHeight: 1.5 }}>{pillar.tone}</div>
              </div>

              <div style={{ marginTop: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: COPPER, marginBottom: 4, letterSpacing: 1 }}>PLATFORM NOTES</div>
                <div style={{ fontSize: 12, color: GRAY_700, lineHeight: 1.5 }}>{pillar.platform_note}</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function CalendarSection() {
  const [selectedCadence, setSelectedCadence] = useState(0);
  const cal = calendarOptions[selectedCadence];

  return (
    <div>
      <SectionTitle
        label="CONTENT CALENDAR"
        title="Posting Cadence"
        subtitle="Choose a frequency based on budget. Both options include a 4-week rotation that repeats monthly."
      />

      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        {calendarOptions.map((opt, i) => (
          <div
            key={i}
            onClick={() => setSelectedCadence(i)}
            style={{
              flex: 1,
              background: selectedCadence === i ? NAVY : GRAY_100,
              color: selectedCadence === i ? WHITE : NAVY,
              borderRadius: 10,
              padding: 14,
              cursor: "pointer",
              textAlign: "center",
              border: selectedCadence === i ? `2px solid ${NAVY}` : "2px solid transparent",
              transition: "all 0.2s ease",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700 }}>{opt.label}</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: selectedCadence === i ? COPPER : COPPER, marginTop: 4 }}>{opt.price}</div>
            <div style={{ fontSize: 11, opacity: 0.7, marginTop: 4, lineHeight: 1.4 }}>{opt.note}</div>
          </div>
        ))}
      </div>

      {cal.weeks.map((week, i) => (
        <Card key={i}>
          <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{week.week}</div>
          {week.posts.map((post, j) => (
            <div key={j} style={{
              padding: "10px 0",
              borderBottom: j < week.posts.length - 1 ? `1px solid ${GRAY_300}30` : "none",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: NAVY }}>{post.day}</span>
                <span style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: NAVY,
                  background: `${NAVY}10`,
                  padding: "2px 8px",
                  borderRadius: 6,
                }}>
                  {post.pillar}
                </span>
              </div>
              <div style={{ fontSize: 12, color: GRAY_700, lineHeight: 1.5 }}>{post.type}</div>
            </div>
          ))}
        </Card>
      ))}

      <Card style={{ background: `${NAVY}08`, border: `1px solid ${NAVY}20` }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, marginBottom: 6 }}>Cross-Platform Strategy</div>
        <div style={{ fontSize: 12, color: GRAY_700, lineHeight: 1.6 }}>
          <strong>Instagram:</strong> Post the feed content. Reformat as a Story (1080x1920) same-day. Add a "Link" sticker to promongrow.com.<br /><br />
          <strong>Facebook:</strong> Same visual, post within 1 hour of IG. Longer caption OK on FB. Tag client business pages when featuring their work. Consider $10-20 boost on promo posts monthly.
        </div>
      </Card>
    </div>
  );
}

function CaptionsSection() {
  const [expanded, setExpanded] = useState(null);
  return (
    <div>
      <SectionTitle
        label="CAPTION TEMPLATES"
        title="Copy Framework"
        subtitle="Use these as starting structures. Adapt for each post, don't copy verbatim."
      />

      {captionTemplates.map((ct, i) => (
        <div
          key={i}
          onClick={() => setExpanded(expanded === i ? null : i)}
          style={{
            background: GRAY_100,
            borderRadius: 12,
            padding: 16,
            marginBottom: 12,
            cursor: "pointer",
            border: expanded === i ? `2px solid ${NAVY}` : "2px solid transparent",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>{ct.pillar}</span>
            <span style={{ fontSize: 18, color: GRAY_500, transform: expanded === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>&#9662;</span>
          </div>

          {expanded === i && (
            <div style={{ marginTop: 14 }}>
              <pre style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: GRAY_700,
                lineHeight: 1.7,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                background: WHITE,
                padding: 14,
                borderRadius: 8,
                border: `1px solid ${GRAY_300}40`,
                margin: 0,
              }}>
                {ct.template}
              </pre>
            </div>
          )}
        </div>
      ))}

      <Card style={{ background: `${NAVY}08`, border: `1px solid ${NAVY}20` }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, marginBottom: 6 }}>CTA Rule</div>
        <div style={{ fontSize: 12, color: GRAY_700, lineHeight: 1.6 }}>
          <strong>Every post ends with a way to buy or call.</strong> Primary: "Link in bio" or "promongrow.com". Secondary: "Call us: (844) 883-3308". Use both when space allows. Keep it consistent across all posts — the agency should never post without a CTA.
        </div>
      </Card>
    </div>
  );
}

function HashtagsSection() {
  const hashtagGroups = [
    {
      group: "Core Brand (use on every post)",
      tags: ["#PromoAndGrow", "#PromoNGrow", "#CustomEventDisplays", "#MadeInUSA"],
    },
    {
      group: "Product-Specific (rotate by post type)",
      tags: ["#CustomTent", "#CustomCanopy", "#TradeShowBooth", "#EventTent", "#PopUpTent", "#BackdropDisplay", "#SEGDisplay", "#TableThrow", "#FeatherFlag", "#EventSignage", "#VinylWrap"],
    },
    {
      group: "Industry / Use Case",
      tags: ["#TradeShow", "#EventBranding", "#BoothDesign", "#FarmersMarket", "#PopUpShop", "#OutdoorEvent", "#ConferenceDisplay", "#EventPlanning", "#BrandActivation", "#EventMarketing"],
    },
    {
      group: "Trust / Credibility",
      tags: ["#5DayDelivery", "#CustomPrinting", "#EventDisplays", "#SmallBusinessSupport", "#ShopSmall", "#PrintedInUSA"],
    },
  ];

  return (
    <div>
      <SectionTitle
        label="HASHTAG STRATEGY"
        title="Tag Groups"
        subtitle="Use 15-20 hashtags per post. Always include Core Brand + rotate from other groups. Same tags on IG and FB."
      />

      {hashtagGroups.map((group, i) => (
        <Card key={i}>
          <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 10 }}>{group.group}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {group.tags.map((tag, j) => (
              <span key={j} style={{
                background: i === 0 ? NAVY : WHITE,
                color: i === 0 ? WHITE : NAVY,
                fontSize: 11,
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 20,
                border: i === 0 ? "none" : `1px solid ${NAVY}20`,
              }}>
                {tag}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

function GuidelinesSection() {
  return (
    <div>
      <SectionTitle
        label="GUIDELINES"
        title="Do's & Don'ts"
        subtitle="Non-negotiable rules for representing Promo & Grow on social media."
      />

      <Card>
        <div style={{ fontSize: 13, fontWeight: 700, color: TRUST_GREEN, marginBottom: 10 }}>Always</div>
        {[
          "Include phone number (844) 883-3308 or \"link in bio\" in every caption",
          "Use the navy/copper/white color palette — no other colors",
          "Use DM Serif Display for headlines, DM Sans for body",
          "Feature REAL product photos — never AI-generated or stock images",
          "Include logo on every graphic — bottom-right corner",
          "Mention \"5-day delivery\" at least 2x per week across posts",
          "State \"design not included\" when showing products — avoid setting wrong expectations",
          "Cross-post to Facebook within 1 hour of Instagram post",
          "Keep copy short, direct, benefit-first — shop foreman voice",
        ].map((item, i) => (
          <div key={i} style={{ fontSize: 12, color: GRAY_700, padding: "5px 0", lineHeight: 1.5, paddingLeft: 8, borderLeft: `2px solid ${TRUST_GREEN}30` }}>
            {item}
          </div>
        ))}
      </Card>

      <Card>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#DC2626", marginBottom: 10 }}>Never</div>
        {[
          "Use AI-generated product images (Firefly, Midjourney, DALL-E, ChatGPT images)",
          "Use colors outside the brand palette (no red, yellow, bright blue, etc.)",
          "Use fake urgency — no countdown timers, \"LAST CHANCE!\", \"only 3 left!\"",
          "Use script fonts, decorative fonts, or trendy typefaces",
          "Post without a CTA — every post needs a way to buy or call",
          "Tag or mention competitors",
          "Post about politics, religion, or controversial topics",
          "Use more than 8 words on image overlay text",
          "Promise design services — P&G does NOT include design, only proofing",
          "Post without proofreading — especially product specs and pricing",
        ].map((item, i) => (
          <div key={i} style={{ fontSize: 12, color: GRAY_700, padding: "5px 0", lineHeight: 1.5, paddingLeft: 8, borderLeft: "2px solid #DC262630" }}>
            {item}
          </div>
        ))}
      </Card>

      <Card style={{ background: NAVY, color: WHITE }}>
        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>Photo Asset Protocol</div>
        <div style={{ fontSize: 12, lineHeight: 1.7, opacity: 0.9 }}>
          <strong>Where to get photos:</strong><br />
          — Carlos will provide product photos from real client projects and production shots<br />
          — Ask clients for permission to photograph/share their event setups<br />
          — Repost client photos (with credit and permission)<br />
          — Product detail shots can be taken at the production facility<br /><br />
          <strong>Never use:</strong><br />
          — AI-generated images of any kind<br />
          — Generic stock photos of events or trade shows<br />
          — Competitor product photos<br /><br />
          <strong>If you run out of photos:</strong> Reach out to Carlos. Don't fill with stock.
        </div>
      </Card>

      <Card>
        <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 8 }}>Approval Process</div>
        <div style={{ fontSize: 12, color: GRAY_700, lineHeight: 1.7 }}>
          All posts must be submitted for review <strong>48 hours before scheduled posting</strong>. Send drafts (visual + caption) to Carlos for approval. Include both Instagram and Facebook versions if captions differ. No post goes live without written approval.
        </div>
      </Card>

      <div style={{
        marginTop: 24,
        padding: 16,
        textAlign: "center",
        borderTop: `2px solid ${GRAY_100}`,
      }}>
        <div style={{ fontSize: 11, color: GRAY_500, lineHeight: 1.6 }}>
          Promo & Grow<br />
          Social Media Content Guide — April 2026<br />
          <span style={{ color: COPPER, fontWeight: 600 }}>Prepared by Proágo Branding Dept.</span>
        </div>
      </div>
    </div>
  );
}
