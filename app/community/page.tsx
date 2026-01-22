// app/community/page.tsx

const BRAND = "Marvin Health Systems";

const tips = [
  {
    title: "Blood Pressure (Hypertension)",
    points: [
      "Check your blood pressure regularly, especially if you have headaches, dizziness, or family history.",
      "Reduce salt and processed foods; choose fruits, vegetables, and whole grains.",
      "Move daily: even 30 minutes of brisk walking helps.",
      "If prescribed medicine, take it consistently—don’t stop suddenly.",
    ],
  },
  {
    title: "Diabetes & Healthy Sugar",
    points: [
      "If you feel excessive thirst, frequent urination, fatigue, or slow-healing wounds, consider a glucose check.",
      "Choose high-fiber foods (beans, vegetables, whole grains) and limit sugary drinks.",
      "Small consistent lifestyle changes beat extreme diets.",
      "If you’re diabetic, keep follow-ups and foot checks routine.",
    ],
  },
  {
    title: "Maternal & Child Health",
    points: [
      "Attend ANC early and consistently—early visits catch risks early.",
      "Know danger signs: severe headache, bleeding, swelling, fever, reduced fetal movement.",
      "Exclusive breastfeeding for 6 months supports immunity and growth.",
      "Immunization schedules protect children from preventable diseases.",
    ],
  },
  {
    title: "Mental Health & Stress",
    points: [
      "If stress is persistent, talk to someone you trust—support is treatment.",
      "Sleep, hydration, movement, and sunlight help regulate mood.",
      "Avoid coping with alcohol/substances—seek healthier coping skills.",
      "If you feel unsafe or have suicidal thoughts, seek urgent help immediately.",
    ],
  },
  {
    title: "Infections & Hygiene",
    points: [
      "Hand hygiene reduces many infections—wash hands often or use sanitizer.",
      "Drink safe water; treat or boil if unsure.",
      "Seek care early for high fever, severe pain, breathing difficulty, or dehydration.",
      "Complete prescribed antibiotics—don’t stop halfway.",
    ],
  },
];

export default function CommunityPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b1220", color: "#e8eefc" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "28px 16px" }}>
        <section style={card}>
          <div style={{ opacity: 0.9, fontSize: 14, fontWeight: 700 }}>{BRAND}</div>
          <h1 style={{ margin: "10px 0 6px", fontSize: 32, lineHeight: 1.15 }}>
            Community Health Hub (Free Tips)
          </h1>
          <p style={{ marginTop: 10, opacity: 0.9, maxWidth: 820, lineHeight: 1.6 }}>
            Practical, nurse-led health tips for everyday life. This page is designed to support health education,
            prevention, and better decisions—especially for families and communities in Kenya and East Africa.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
            <a href="/" style={btn}>← Back Home</a>
            <a href="/book" style={btnPrimary}>📘 Get My Book</a>
            <a href="/mentorship" style={btn}>🎓 Mentorship Program</a>
            <a href="/discovery" style={btn}>🤝 Partner / Book Discovery</a>
          </div>

          <p style={{ marginTop: 12, fontSize: 12, opacity: 0.7, lineHeight: 1.5 }}>
            Disclaimer: This content is for general health education and does not replace medical diagnosis or
            treatment. For emergencies or severe symptoms, seek urgent medical care immediately.
          </p>
        </section>

        <section style={{ ...card, marginTop: 14 }}>
          <h2 style={h2}>Free Health Tips Library</h2>
          <p style={{ marginTop: 8, opacity: 0.9, lineHeight: 1.6 }}>
            Browse key topics below. I will keep updating this hub with more practical guides.
          </p>

          <div
            style={{
              display: "grid",
              gap: 12,
              marginTop: 12,
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {tips.map((t) => (
              <div key={t.title} style={miniCard}>
                <h3 style={h3}>{t.title}</h3>
                <ul style={ul}>
                  {t.points.map((p) => (
                    <li key={p} style={{ lineHeight: 1.55 }}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section style={{ ...card, marginTop: 14 }}>
          <h2 style={h2}>Want Personalized Guidance?</h2>
          <p style={{ marginTop: 8, opacity: 0.9, lineHeight: 1.6 }}>
            If you’d like a structured plan (e.g., blood pressure control, diabetes lifestyle plan, maternal health guidance),
            you can book a private consultation or discovery session.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            <a href="/discovery" style={btnPrimary}>📅 Book a Session</a>
            <a href="/book" style={btn}>📘 Learn Digital Health (Book)</a>
            <a href="/mentorship" style={btn}>🎓 Mentorship</a>
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
  fontWeight: 700,
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
  fontWeight: 800,
};

const h3: React.CSSProperties = {
  margin: 0,
  fontSize: 16,
  fontWeight: 800,
};

const ul: React.CSSProperties = {
  marginTop: 10,
  marginBottom: 0,
  paddingLeft: 18,
  display: "grid",
  gap: 6,
  opacity: 0.92,
};
<a href="/community" style={btn}>
  🏥 Community Health
</a>
