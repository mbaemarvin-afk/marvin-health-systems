// app/page.tsx

const BRAND_NAME = "Marvin Health Systems";
const FULL_NAME = "Marvin Mutugi Mbae ";
const TITLE = "Kenya Registered Nurse & Digital Health Specialist";

const BIO =
  "Digital Health Specialist & Kenya Registered Nurse building secure, scalable healthcare systems for modern care delivery. Founder of Marvin Health Systems, focused on telehealth, smart clinic infrastructure, and digital transformation across Africa.";

const EMAIL = "mbaemarvin@gmail.com";
const PHONE_DISPLAY = "0702 294 517";
const PHONE_E164 = "+254702294517";
const WHATSAPP_NUMBER = "254702294517";

const LOCATION = "Chogoria, Tharaka-Nithi County, Kenya";

const CV_PATH = "/Cv.pdf";

// Replace this with your real Calendly link when ready:
const CALENDLY_URL = "https://calendly.com/app/scheduling/meeting_types/user/me";

const LINKEDIN_URL = "https://www.linkedin.com/in/marvin-mutugi-0248a2128/";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b1220", color: "#e8eefc" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "28px 16px" }}>
        {/* HERO */}
        <section style={hero}>
          <div style={{ opacity: 0.9, fontSize: 14, fontWeight: 800 }}>{BRAND_NAME}</div>

          <h1 style={{ margin: "10px 0 6px", fontSize: 34, lineHeight: 1.15 }}>
            {FULL_NAME}
          </h1>

          <div style={{ opacity: 0.9, fontSize: 18 }}>{TITLE}</div>

          <p style={{ marginTop: 14, opacity: 0.9, maxWidth: 820, lineHeight: 1.6 }}>
            {BIO}
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            <a href={`tel:${PHONE_E164}`} style={btnPrimary} aria-label="Call Marvin">
              📞 Call {PHONE_DISPLAY}
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              style={btn}
              aria-label="WhatsApp Marvin"
            >
              💬 WhatsApp
            </a>

            <a href={CV_PATH} download style={btn} aria-label="Download CV">
              ⬇️ Download CV
            </a>

            <a href="#book" style={btn} aria-label="Go to booking section">
              📅 Book (Calendly)
            </a>

            <a href="/demos" style={btn}>
              🧪 Live Demos
            </a>

            <a href="/community" style={btn}>
              🏥 Community Health
            </a>

            <a href="/book" style={btn}>
              📘 Book
            </a>
          </div>

          {/* Contact line */}
          <div
            style={{
              marginTop: 14,
              display: "flex",
              flexWrap: "wrap",
              gap: "10px 18px",
              fontSize: 14,
              opacity: 0.85,
            }}
          >
            <span>
              Email:{" "}
              <a style={link} href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </span>

            <span>
              LinkedIn:{" "}
              <a style={link} href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                View profile
              </a>
            </span>

            <span>Location: {LOCATION}</span>
          </div>
        </section>

        {/* GRID SECTIONS */}
        <div
          style={{
            display: "grid",
            gap: 14,
            marginTop: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <Card title="Core Expertise">
            <ul style={ul}>
              <li>Digital Health Systems & EMR Workflows</li>
              <li>Telemedicine & Hybrid Clinic Models</li>
              <li>Healthcare IT Networking (Cisco)</li>
              <li>Health Data Security & Privacy</li>
              <li>Public Health Digital Programs</li>
              <li>Clinical Care & Nursing Practice</li>
              <li>Full-Stack Development (Python + Web Systems)</li>
            </ul>
          </Card>

          <Card title="Professional Services">
            <ul style={ul}>
              <li>Digital Health Systems Design & Implementation</li>
              <li>Telemedicine & Smart Clinic Solutions</li>
              <li>Healthcare IT Networking (LAN/WiFi, secure connectivity)</li>
              <li>Healthcare Cybersecurity & Data Protection</li>
              <li>Public Health Digital Program Design</li>
              <li>Clinic Digital Transformation Consulting</li>
            </ul>
          </Card>
        </div>

        {/* PROJECTS */}
        <section style={{ ...card, marginTop: 14 }}>
          <h2 style={h2}>Featured Projects & Experience</h2>

          <div
            style={{
              display: "grid",
              gap: 12,
              marginTop: 12,
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            <div style={miniCard}>
              <h3 style={h3}>Smart Clinic Platform</h3>
              <p style={p}>
                Designed a hybrid clinic model integrating physical care with telehealth workflows,
                digital triage, patient follow-up automation, and EMR planning.
              </p>
              <div style={meta}>Role: Founder & Digital Health Systems Designer</div>
            </div>

            <div style={miniCard}>
              <h3 style={h3}>Patient Follow-up & Reminder System (WhatsApp)</h3>
              <p style={p}>
                Designed a WhatsApp-based automation approach for appointment reminders,
                medication adherence, post-visit follow-ups, and health education messaging.
              </p>
              <div style={meta}>Role: Digital Health Architect & Automation Designer</div>
            </div>

            <div style={{ ...miniCard, gridColumn: "1 / -1" }}>
              <h3 style={h3}>Vision Programme — Community Eye Care (Village HopeCore International)</h3>
              <p style={p}>
                Led a large-scale community eye care program: vision screening, coordinating specialist clinics,
                managing referrals, staff CMEs, visual acuity assessments, and continuity of care.
              </p>
              <div style={meta}>Role: Lead Nurse</div>
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section id="book" style={{ ...card, marginTop: 14 }}>
          <h2 style={h2}>Book an Appointment</h2>
          <p style={{ ...p, marginTop: 6 }}>
            Click below to book a call/consultation.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" style={btnPrimary}>
              Open Calendly Booking
            </a>

            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Booking Request - " + BRAND_NAME)}`}
              style={btn}
            >
              Email to Book
            </a>
          </div>

          <p style={{ marginTop: 10, fontSize: 12, opacity: 0.75 }}>
            Tip: When you paste your real Calendly link, I can also embed the booking widget here.
          </p>
        </section>

        {/* FOOTER */}
        <footer style={{ textAlign: "center", opacity: 0.75, marginTop: 18, fontSize: 13 }}>
          © {new Date().getFullYear()} {BRAND_NAME} • {FULL_NAME}
        </footer>
      </div>
    </main>
  );
}

/* ---------- Small components + styles ---------- */

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={card}>
      <h2 style={h2}>{title}</h2>
      <div style={{ marginTop: 10 }}>{children}</div>
    </section>
  );
}

const hero: React.CSSProperties = {
  borderRadius: 18,
  padding: 22,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const card: React.CSSProperties = {
  borderRadius: 18,
  padding: 18,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const miniCard: React.CSSProperties = {
  borderRadius: 16,
  padding: 16,
  background: "rgba(0,0,0,0.22)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const btn: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 14px",
  borderRadius: 14,
  textDecoration: "none",
  color: "#e8eefc",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.14)",
  fontWeight: 800,
  fontSize: 14,
};

const btnPrimary: React.CSSProperties = {
  ...btn,
  background: "rgba(255,255,255,0.95)",
  color: "#0b1220",
  border: "1px solid rgba(255,255,255,0.95)",
};

const link: React.CSSProperties = {
  textDecoration: "underline",
  color: "#e8eefc",
};

const h2: React.CSSProperties = {
  margin: 0,
  fontSize: 18,
  fontWeight: 900,
};

const h3: React.CSSProperties = {
  margin: 0,
  fontSize: 16,
  fontWeight: 900,
};

const p: React.CSSProperties = {
  marginTop: 8,
  marginBottom: 0,
  opacity: 0.9,
  lineHeight: 1.6,
};

const meta: React.CSSProperties = {
  marginTop: 10,
  fontSize: 12,
  opacity: 0.75,
};

const ul: React.CSSProperties = {
  margin: 0,
  paddingLeft: 18,
  display: "grid",
  gap: 6,
  opacity: 0.92,
};
