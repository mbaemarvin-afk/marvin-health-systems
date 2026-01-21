// app/chat/page.tsx
const CHATBOT_URL = "PASTE_YOUR_CHATBOT_LINK_HERE";

export default function ChatPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b1220", color: "#e8eefc" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: 28 }}>
        <h1 style={{ margin: 0, fontSize: 28 }}>Chat with Marvin’s AI</h1>
        <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.6 }}>
          This assistant is for general health education and guidance. It does not replace a licensed clinician.
          For emergencies, contact local emergency services.
        </p>

        <div
          style={{
            marginTop: 16,
            padding: 16,
            borderRadius: 16,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <p style={{ margin: 0, opacity: 0.9 }}>
            Click below to open the chatbot in a new tab:
          </p>

          <a
            href={CHATBOT_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              marginTop: 12,
              display: "inline-block",
              padding: "12px 16px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.95)",
              color: "#0b1220",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            💬 Open Chatbot
          </a>

          <p style={{ marginTop: 12, fontSize: 12, opacity: 0.75 }}>
            Tip: If the button doesn’t open, copy and paste the link directly in your browser.
          </p>
        </div>

        <div style={{ marginTop: 18 }}>
          <a href="/" style={{ color: "#e8eefc", opacity: 0.8 }}>
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
