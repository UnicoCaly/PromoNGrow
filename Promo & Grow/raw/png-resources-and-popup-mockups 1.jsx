import { useState } from "react";

const NAVY = "#1B2838";
const COPPER = "#C17A3A";
const WHITE = "#FFFFFF";
const OFFWHITE = "#F7F7F5";
const GREEN = "#1E6B4A";
const G700 = "#374151";
const G500 = "#6B7280";
const G999 = "#999999";
const BORDER = "#EEEEEE";

export default function Mockups() {
  const [view, setView] = useState("resources");
  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", maxWidth: 680, margin: "0 auto", padding: "1rem 0" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=DM+Serif+Display&display=swap" rel="stylesheet" />

      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {["resources", "popup"].map(v => (
          <button key={v} onClick={() => setView(v)} style={{
            background: view === v ? NAVY : "transparent",
            color: view === v ? WHITE : G500,
            border: `0.5px solid ${view === v ? NAVY : "#ddd"}`,
            borderRadius: 6, padding: "8px 20px", fontSize: 13, fontWeight: 500,
            cursor: "pointer", fontFamily: "inherit"
          }}>
            {v === "resources" ? "Design resources page" : "Purchase popup"}
          </button>
        ))}
      </div>

      {view === "resources" ? <ResourcesPage /> : <PopupMockup />}
    </div>
  );
}

function ResourcesPage() {
  return (
    <div style={{ border: `0.5px solid ${BORDER}`, borderRadius: 10, overflow: "hidden", background: WHITE }}>
      <div style={{ padding: 24 }}>

        <div style={{ textAlign: "center", padding: "32px 20px", marginBottom: 24 }}>
          <p style={{ fontSize: 10, color: COPPER, textTransform: "uppercase", letterSpacing: 2, margin: "0 0 8px", fontWeight: 500 }}>Design resources</p>
          <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 24, color: NAVY, margin: "0 0 8px", lineHeight: 1.25 }}>
            We don't do the design.<br />We make it easy.
          </p>
          <p style={{ fontSize: 13, color: G500, margin: 0, lineHeight: 1.6, maxWidth: 400, display: "inline-block" }}>
            Free templates, guides, and AI prompts to help you create print-ready artwork in minutes. Every order is proofed before production.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 28 }}>
          {[
            { n: "1", title: "Download template", desc: "Pre-sized to your product with bleed guides", accent: false },
            { n: "2", title: "Add your design", desc: "Use Canva, Illustrator, or our AI prompts", accent: false },
            { n: "3", title: "Upload and order", desc: "We proof before production. You approve, we print.", accent: true },
          ].map((s, i) => (
            <div key={i} style={{ background: OFFWHITE, borderRadius: 8, padding: 16, textAlign: "center" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: s.accent ? COPPER : NAVY, color: WHITE, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", fontSize: 14, fontWeight: 500 }}>{s.n}</div>
              <p style={{ fontSize: 12, fontWeight: 500, color: NAVY, margin: "0 0 4px" }}>{s.title}</p>
              <p style={{ fontSize: 11, color: G999, margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <SectionDivider label="TEMPLATES" />

        <div style={{ margin: "20px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
            <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 18, color: NAVY, margin: 0 }}>Download templates</p>
            <p style={{ fontSize: 11, color: G999, margin: 0 }}>PDF / AI format</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {[
              { name: "10'x10' tent canopy", spec: '120" x 120" + 0.125" bleed' },
              { name: "6ft table throw", spec: '132" x 90.5" + 0.125" bleed' },
              { name: "Teardrop flag", spec: '30" x 68" + 0.125" bleed' },
            ].map((t, i) => (
              <div key={i} style={{ border: `0.5px solid ${BORDER}`, borderRadius: 8, padding: 14 }}>
                <div style={{ width: "100%", aspectRatio: "3/2", background: "#f5f3f0", borderRadius: 6, marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 10, color: "#ccc" }}>preview</span>
                </div>
                <p style={{ fontSize: 12, fontWeight: 500, color: NAVY, margin: "0 0 2px" }}>{t.name}</p>
                <p style={{ fontSize: 10, color: G999, margin: "0 0 8px" }}>{t.spec}</p>
                <div style={{ display: "flex", gap: 6 }}>
                  <div style={{ flex: 1, textAlign: "center", padding: 5, border: `0.5px solid ${BORDER}`, borderRadius: 4, fontSize: 10, color: NAVY, fontWeight: 500, cursor: "pointer" }}>PDF</div>
                  <div style={{ flex: 1, textAlign: "center", padding: 5, border: `0.5px solid ${BORDER}`, borderRadius: 4, fontSize: 10, color: NAVY, fontWeight: 500, cursor: "pointer" }}>AI</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: COPPER, fontWeight: 500, margin: "10px 0 0", textAlign: "right", cursor: "pointer" }}>View all templates &#8594;</p>
        </div>

        <SectionDivider label="FILE SPECS" />

        <div style={{ margin: "20px 0" }}>
          <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 18, color: NAVY, margin: "0 0 14px" }}>File requirements</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { label: "Accepted formats", value: "PDF, AI, EPS, PNG, PSD, JPG" },
              { label: "Resolution", value: "300 DPI minimum (150 DPI for 48\"+)" },
              { label: "Color space", value: "CMYK preferred. RGB accepted (we convert)" },
              { label: "Bleed", value: '0.125" all sides. Keep text 0.25" from trim.' },
            ].map((s, i) => (
              <div key={i} style={{ padding: "12px 14px", background: OFFWHITE, borderRadius: 8 }}>
                <p style={{ fontSize: 11, fontWeight: 500, color: NAVY, margin: "0 0 4px" }}>{s.label}</p>
                <p style={{ fontSize: 11, color: G500, margin: 0 }}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider label="AI DESIGN HELP" />

        <div style={{ margin: "20px 0" }}>
          <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 18, color: NAVY, margin: "0 0 6px" }}>AI prompt guide</p>
          <p style={{ fontSize: 12, color: G999, margin: "0 0 14px" }}>Copy these into ChatGPT or Canva AI to generate event-ready graphics.</p>
          {[
            { product: "Tent canopy design", prompt: "Create a bold, professional tent canopy design for [business name]. Include the logo centered on all 4 valances and the peak. Use brand colors [list colors]. Keep text minimal — business name and tagline only..." },
            { product: "Trade show backdrop", prompt: "Design a step-and-repeat backdrop for [business name]. Logo tiled in a diagonal grid pattern. Background color: [color]. Logo should be clearly readable from 6 feet away..." },
            { product: "Table throw layout", prompt: "Create a fitted table throw design for a 6ft table. Front panel: large logo centered with tagline below. Side panels: website and phone number..." },
          ].map((p, i) => (
            <div key={i} style={{ border: `0.5px solid ${BORDER}`, borderRadius: 8, padding: 14, marginBottom: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <p style={{ fontSize: 12, fontWeight: 500, color: NAVY, margin: 0 }}>{p.product}</p>
                <div style={{ fontSize: 10, color: COPPER, fontWeight: 500, padding: "2px 8px", border: `0.5px solid ${COPPER}`, borderRadius: 3, cursor: "pointer" }}>Copy prompt</div>
              </div>
              <p style={{ fontSize: 11, color: G500, margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>{p.prompt}</p>
            </div>
          ))}
        </div>

        <div style={{ background: NAVY, borderRadius: 10, padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 16, color: WHITE, margin: "0 0 4px" }}>Still need help?</p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", margin: 0 }}>Call us. We'll walk you through it.</p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ background: COPPER, color: WHITE, padding: "9px 18px", borderRadius: 4, fontSize: 12, fontWeight: 500 }}>Get a quote</div>
            <div style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", padding: "9px 18px", borderRadius: 4, fontSize: 12 }}>(844) 883-3308</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PopupMockup() {
  const [selectedPopup, setSelectedPopup] = useState(0);

  const popups = [
    {
      label: "A",
      name: "Bundle savings calculator",
      desc: "Shows the buyer exactly how much they save by bundling vs buying separately. Not a discount code — it's a math-driven nudge that makes bundles feel like the obvious choice.",
      trigger: "Fires when a user adds a single product (not a bundle) to cart",
    },
    {
      label: "B",
      name: "First-order confidence builder",
      desc: "Not asking for an email — giving them a reason to buy right now by stacking trust signals with a real incentive. The free shipping threshold creates urgency without a countdown timer.",
      trigger: "Fires once per session for new visitors, 5 seconds after landing on any product page",
    },
    {
      label: "C",
      name: "Exit-intent upsell",
      desc: "Catches buyers who are leaving without purchasing. Instead of begging for an email, it offers the most compelling deal on the site and a direct line to talk to a human.",
      trigger: "Fires on exit intent (cursor moves toward browser close/back), only on product and collection pages",
    },
  ];

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {popups.map((p, i) => (
          <button key={i} onClick={() => setSelectedPopup(i)} style={{
            background: selectedPopup === i ? NAVY : "transparent",
            color: selectedPopup === i ? WHITE : G500,
            border: `0.5px solid ${selectedPopup === i ? NAVY : "#ddd"}`,
            borderRadius: 6, padding: "6px 14px", fontSize: 11, fontWeight: 500,
            cursor: "pointer", fontFamily: "inherit"
          }}>
            {p.label}: {p.name}
          </button>
        ))}
      </div>

      <div style={{ fontSize: 11, color: G500, lineHeight: 1.6, marginBottom: 6 }}>
        <span style={{ fontWeight: 500, color: NAVY }}>Trigger:</span> {popups[selectedPopup].trigger}
      </div>
      <div style={{ fontSize: 11, color: G500, lineHeight: 1.6, marginBottom: 16 }}>
        {popups[selectedPopup].desc}
      </div>

      {selectedPopup === 0 && (
        <div style={{ background: "rgba(0,0,0,0.35)", borderRadius: 12, padding: 40, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 380 }}>
          <div style={{ background: WHITE, borderRadius: 12, padding: 28, maxWidth: 380, width: "100%", position: "relative" }}>
            <div style={{ position: "absolute", top: 12, right: 16, fontSize: 18, color: "#ccc", cursor: "pointer" }}>x</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: GREEN }}></div>
              <span style={{ fontSize: 11, color: GREEN, fontWeight: 500 }}>You could save more</span>
            </div>
            <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 20, color: NAVY, margin: "0 0 6px", lineHeight: 1.25 }}>Bundle and save 15%+</p>
            <p style={{ fontSize: 12, color: G500, margin: "0 0 20px", lineHeight: 1.6 }}>You're buying a 10'x10' tent. Add a table throw and save $195 when you bundle.</p>

            <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
              <div style={{ flex: 1, padding: 14, border: `0.5px solid ${BORDER}`, borderRadius: 8, textAlign: "center" }}>
                <p style={{ fontSize: 10, color: G999, margin: "0 0 2px" }}>Buying separately</p>
                <p style={{ fontSize: 18, color: G999, margin: 0, textDecoration: "line-through" }}>$1,290</p>
              </div>
              <div style={{ flex: 1, padding: 14, border: `2px solid ${COPPER}`, borderRadius: 8, textAlign: "center" }}>
                <p style={{ fontSize: 10, color: COPPER, margin: "0 0 2px", fontWeight: 500 }}>Bundle price</p>
                <p style={{ fontSize: 18, fontWeight: 500, color: NAVY, margin: 0 }}>$1,095</p>
              </div>
            </div>

            <div style={{ background: COPPER, color: WHITE, textAlign: "center", padding: 12, borderRadius: 5, fontSize: 13, fontWeight: 500, marginBottom: 8, cursor: "pointer" }}>Switch to the bundle — save $195</div>
            <p style={{ fontSize: 11, color: G999, textAlign: "center", margin: 0, cursor: "pointer" }}>No thanks, I'll buy separately</p>
          </div>
        </div>
      )}

      {selectedPopup === 1 && (
        <div style={{ background: "rgba(0,0,0,0.35)", borderRadius: 12, padding: 40, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 380 }}>
          <div style={{ background: WHITE, borderRadius: 12, padding: 28, maxWidth: 380, width: "100%", position: "relative" }}>
            <div style={{ position: "absolute", top: 12, right: 16, fontSize: 18, color: "#ccc", cursor: "pointer" }}>x</div>
            <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 20, color: NAVY, margin: "0 0 6px", lineHeight: 1.25 }}>Your first order?<br />We've got you.</p>
            <p style={{ fontSize: 12, color: G500, margin: "0 0 20px", lineHeight: 1.6 }}>We know buying custom event displays online takes trust. Here's what you get with every order:</p>

            <div style={{ marginBottom: 20 }}>
              {[
                { icon: "check", text: "Free artwork proof — nothing prints without your approval" },
                { icon: "check", text: "5-day guaranteed delivery — nationwide" },
                { icon: "check", text: "4.8-star rating from 19 Google reviews" },
                { icon: "check", text: "20+ years in production" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "6px 0", fontSize: 12, color: G700, lineHeight: 1.5 }}>
                  <span style={{ color: GREEN, fontWeight: 500, flexShrink: 0, marginTop: 1 }}>&#10003;</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div style={{ background: OFFWHITE, borderRadius: 8, padding: 14, marginBottom: 16, textAlign: "center" }}>
              <p style={{ fontSize: 11, color: G999, margin: "0 0 2px" }}>Plus — first order ships free over $500</p>
              <p style={{ fontSize: 16, fontWeight: 500, color: NAVY, margin: 0 }}>Use code: <span style={{ color: COPPER }}>SHOWUP</span></p>
            </div>

            <div style={{ background: COPPER, color: WHITE, textAlign: "center", padding: 12, borderRadius: 5, fontSize: 13, fontWeight: 500, marginBottom: 8, cursor: "pointer" }}>Shop bundles — most popular</div>
            <p style={{ fontSize: 11, color: G999, textAlign: "center", margin: 0, cursor: "pointer" }}>I'm just browsing</p>
          </div>
        </div>
      )}

      {selectedPopup === 2 && (
        <div style={{ background: "rgba(0,0,0,0.35)", borderRadius: 12, padding: 40, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 380 }}>
          <div style={{ background: NAVY, borderRadius: 12, padding: 28, maxWidth: 380, width: "100%", position: "relative" }}>
            <div style={{ position: "absolute", top: 12, right: 16, fontSize: 18, color: "rgba(255,255,255,0.3)", cursor: "pointer" }}>x</div>
            <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 20, color: WHITE, margin: "0 0 6px", lineHeight: 1.25 }}>Before you go —</p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", margin: "0 0 20px", lineHeight: 1.6 }}>Our best-selling bundle includes everything you need for your next event. One order, one delivery, 5 business days.</p>

            <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: 16, marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <p style={{ fontSize: 13, fontWeight: 500, color: WHITE, margin: 0 }}>Complete event bundle</p>
                <div style={{ display: "flex", gap: 6, alignItems: "baseline" }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "line-through" }}>$1,490</span>
                  <span style={{ fontSize: 18, fontWeight: 500, color: COPPER }}>$1,295</span>
                </div>
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
                <div>&#10003; 10'x10' custom tent + frame</div>
                <div>&#10003; Full back wall</div>
                <div>&#10003; Side walls (set of 2)</div>
                <div>&#10003; 6ft fitted table throw</div>
                <div>&#10003; Wheeled carry bag + stakes</div>
              </div>
            </div>

            <div style={{ background: COPPER, color: WHITE, textAlign: "center", padding: 12, borderRadius: 5, fontSize: 13, fontWeight: 500, marginBottom: 10, cursor: "pointer" }}>View the bundle — save $195</div>

            <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 4 }}>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", cursor: "pointer" }}>No thanks</span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>|</span>
              <span style={{ fontSize: 11, color: COPPER, cursor: "pointer" }}>Call (844) 883-3308</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionDivider({ label }) {
  return (
    <div style={{ padding: "3px 0", marginBottom: 4 }}>
      <div style={{ height: 0.5, background: "#f0f0f0", position: "relative" }}>
        <span style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: -8, background: WHITE, padding: "0 12px", fontSize: 10, color: "#ccc", letterSpacing: 1 }}>{label}</span>
      </div>
    </div>
  );
}
