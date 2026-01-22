// app/book/page.tsx

const BRAND = "Marvin Health Systems";

const BOOK_TITLE = "From Bedside Nursing to Full Stack Digital Health";
const BOOK_SUBTITLE =
  "A practical guide for health professionals who want to explore digital health, build modern tech skills, and access remote job opportunities globally.";

const AMAZON_URL = "https://lnkd.in/d9y8X9KW";
const PDF_PAYMENT_URL = "https://lnkd.in/dBP9kbdC"; // PayPal payment link for PDF

const WHATSAPP_NUMBER = "254732213597"; // no +
const EMAIL = "mbaemarvin@gmail.com";

export default function BookPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b1220", color: "#e8eefc" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "28px 16px" }}>
        {/* HERO */}
        <section style={card}>
          <div style={{ opacity: 0.9, fontSize: 14, fontWeight: 800 }}>{BRAND}</div>

          <h1 style={{ margin: "10px 0 6px", fontSize: 32, lineHeight: 1.15 }}>
            {BOOK_TITLE}
          </h1>

          <p style={{ marginTop: 10, opacity: 0.9, maxWidth: 860, lineHeight: 1.6 }}>
            {BOOK_SUBTITLE}
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            <a href="/" style={btn}>
              ← Back Home
            </a>

            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noreferrer"
              style={btnPrimary}
              aria-label="Buy on Amazon"
            >
              🛒 Buy on Amazon
            </a>

            <a
              href={PDF_PAYMENT_URL}
              target="_blank"
              rel="noreferrer"
              style={btn}
              aria-label="Pay via PayPal for PDF"
            >
              📄 Buy PDF (PayPal)
            </a>

            <a href="/mentorship" style={btn} aria-label="Mentorship program">
              🎓 Mentorship Program
            </a>
          </div>

          <div
            style={{
              marginTop: 14,
              padding: 14,
              borderRadius: 14,
              background: "rgba(0,0,0,0.22)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: 6 }}>What you get</div>
            <ul style={ul}>
              <li>Clear roadmap from clinical work into digital health and tech-enabled roles</li>
              <li>Practical skills that help you build a strong portfolio</li>
              <li>How to position yourself for remote job opportunities</li>
              <li>How to use LinkedIn strategically as a health professional</li>
            </ul>
            <p style={{ marginTop: 10, fontSize: 12, opacity: 0.75, lineHeight: 1.5 }}>
              Note: This is an educational career guide. It does not share any proprietary platform or system IP.
            </p>
          </div>
        </section>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gap: 14,
            marginTop: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <section style={card}>
            <h2 style={h2}>Who this book is for</h2>
            <ul style={ul}>
              <li>Nurses, clinical officers, doctors, and allied health professionals</li>
              <li>Health students exploring digital health career paths</li>
              <li>Professionals moving from bedside to tech-enabled healthcare</li>
              <li>Anyone targeting remote health-tech opportunities</li>
            </ul>
          </section>

          <section style={card}>
            <h2 style={h2}>What you will learn</h2>
            <ul style={ul}>
              <li>Digital health foundations and real-world pathways</li>
              <li>Health systems thinking: EMR workflows, telehealth models, patient engagement</li>
              <li>Beginner-friendly approach to building tech skills without overwhelm</li>
              <li>Portfolio strategy: what to build and how to present it</li>
              <li>LinkedIn strategy for visibility and credibility in digital health</li>
            </ul>
          </section>
        </div>

        {/* HOW TO BUY */}
        <section style={{ ...card, marginTop: 14 }}>
          <h2 style={h2}>How to buy</h2>
          <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
            <div style={miniCard}>
              <h3 style={h3}>Option 1 — Amazon (Recommended)</h3>
              <p style={p}>
                Buy the official Amazon version (best for reviews, credibility, and long-term access).
              </p>
              <a href={AMAZON_URL} target="_blank" rel="noreferrer" style={btnPrimary}>
                Open Amazon →
              </a>
            </div>

            <div style={miniCard}>
              <h3 style={h3}>Option 2 — PDF (International Payment via PayPal)</h3>
              <p style={p}>
                Pay using PayPal, then you’ll receive the PDF delivery instructions based on your payment process.
              </p>
              <a href={PDF_PAYMENT_URL} target="_blank" rel="noreferrer" style={btn}>
                Pay via PayPal →
              </a>

              <p style={{ marginTop: 10, fontSize: 12, opacity: 0.75, lineHeight: 1.5 }}>
                Tip: After payment, send your PayPal name/email on WhatsApp so delivery is fast.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ ...card, marginTop: 14 }}>
          <h2 style={h2}>Want mentorship and a guided roadmap?</h2>
          <p style={{ marginTop: 8, opacity: 0.9, lineHeight: 1.6 }}>
            If you want direct guidance, accountability, and structured learning using this book as a roadmap,
            join my mentorship program for digital health skills and career growth.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            <a href="/mentorship" style={btnPrimary}>
              🎓 View Mentorship Program
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi Marvin, I’m interested in your book. I want to buy it and learn about mentorship."
              )}`}
              target="_blank"
              rel="noreferrer"
              style={btn}
            >
              💬 WhatsApp Marvin
            </a>

            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Book Purchase & Mentorship - " + BRAND)}`}
              style={btn}
            >
              ✉️ Email Marvin
            </a>
          </div>
        </section>

        <footer style={{ textAlign: "center", opacity: 0.75, marginTop: 18, fontSize: 13 }}>
          © {new Date().getFullYear()} {BRAND}
        </footer>
      </div>
    </main>
  );
}

/* ---------- styles (match your site) ---------- */

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

const ul: React.CSSProperties = {
  marginTop: 10,
  marginBottom: 0,
  paddingLeft: 18,
  display: "grid",
  gap: 6,
  opacity: 0.92,
};
