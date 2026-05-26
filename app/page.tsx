// app/page.tsx (PERSONAL PORTFOLIO - UPDATED)
// Marvin Mutugi Mbae Portfolio

import React from "react";

const BRAND_NAME = "Marvin Mutugi Mbae Portfolio";
const FULL_NAME = "Marvin Mutugi Mbae";
const TITLE = "Nursing Professional & Digital Health Innovator";

const THEME = {
  primary: "#4CAF50",
  secondary: "#2E7DAF",
  neutral: "#333333",
  bg: "#0b1220",
  card: "rgba(255,255,255,0.06)",
  text: "#e8eefc"
};

const ABSTRACT_TITLE = "Intelligent Care on Secure Foundations: Building Trusted Digital Frontlines for Primary Health Care in Kenya";

const ABSTRACT = `This concept explores how secure digital infrastructure, artificial intelligence–powered clinical decision support systems, and connected health platforms can strengthen primary health care delivery in Kenya and across Africa. It focuses on integrating cybersecurity, interoperable electronic health records, and real-time data systems to enhance decision-making at the point of care.

The approach emphasizes building trust in digital health systems by ensuring data privacy, secure health information exchange, and reliable connectivity for frontline health workers. By combining AI-driven insights with structured primary care workflows, the model aims to reduce delays in diagnosis, improve continuity of care, and strengthen community-level health interventions.

This framework supports the vision of scalable, resilient, and patient-centered primary health care systems powered by digital transformation.`;

const BOOK_TITLE = "📘 From Bedside to Full Stack: Digital Health • AI • Cloud • Cybersecurity";
const BOOK_LINK = "https://lnkd.in/d9y8X9KW";

const MAGAZINE_TITLE = "Stacked Healthcare Monthly Magazine";
const MAGAZINE_LINK = "https://lnkd.in/dq3St_Na";

const WHATSAPP_COMMUNITY = "https://lnkd.in/d7wwuKmt";

const EMAIL = "mbaemarvin@gmail.com";
const PHONE = "+254702294517";

export default function Page() {
  return (
    <main style={{ background: THEME.bg, color: THEME.text, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>

        {/* HERO */}
        <section style={cardStyle}>
          <h1 style={{ color: THEME.primary, marginBottom: 6 }}>{FULL_NAME}</h1>
          <h2 style={{ color: THEME.secondary, marginTop: 0 }}>{TITLE}</h2>
          <p style={{ lineHeight: 1.6 }}>
            Building secure, AI-powered digital health systems for Africa’s primary healthcare transformation.
          </p>
        </section>

        {/* ABSTRACT */}
        <section style={cardStyle}>
          <h2 style={{ color: THEME.secondary }}>Conference Abstract</h2>
          <h3 style={{ color: THEME.primary }}>{ABSTRACT_TITLE}</h3>
          <p style={{ whiteSpace: "pre-line", lineHeight: 1.7 }}>
            {ABSTRACT}
          </p>
        </section>

        {/* PUBLICATIONS */}
        <section style={cardStyle}>
          <h2 style={{ color: THEME.primary }}>Publications & Outputs</h2>

          <div style={{ marginTop: 10 }}>
            <h3>📘 Book</h3>
            <p>{BOOK_TITLE}</p>
            <a href={BOOK_LINK} target="_blank" style={linkStyle}>View on Amazon</a>
          </div>

          <div style={{ marginTop: 14 }}>
            <h3>📰 Digital Magazine</h3>
            <p>{MAGAZINE_TITLE}</p>
            <a href={MAGAZINE_LINK} target="_blank" style={linkStyle}>Read Magazine</a>
          </div>

          <div style={{ marginTop: 14 }}>
            <h3>💬 WhatsApp Community</h3>
            <p>Join health professionals and digital health innovators community</p>
            <a href={WHATSAPP_COMMUNITY} target="_blank" style={linkStyle}>Join Community</a>
          </div>
        </section>

        {/* CONTACT */}
        <section style={cardStyle}>
          <h2 style={{ color: THEME.secondary }}>Contact</h2>
          <p>Email: {EMAIL}</p>
          <p>Phone: {PHONE}</p>
        </section>

        {/* FOOTER */}
        <footer style={{ textAlign: "center", marginTop: 30, opacity: 0.7 }}>
          © {new Date().getFullYear()} {BRAND_NAME}
        </footer>
      </div>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  padding: 20,
  borderRadius: 16,
  marginBottom: 16,
  border: "1px solid rgba(255,255,255,0.1)"
};

const linkStyle: React.CSSProperties = {
  color: "#4CAF50",
  textDecoration: "underline",
  fontWeight: "bold"
};
