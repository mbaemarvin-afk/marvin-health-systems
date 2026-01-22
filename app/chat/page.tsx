"use client";

import { useRouter } from "next/navigation";

const CHATBOT_URL = "https://wa.me/254732213597";

export default function ChatPage() {
  const router = useRouter();

  function goHome() {
    // Most reliable navigation
    router.push("/");

    // Extra fallback (in case router is blocked by something)
    setTimeout(() => {
      if (window.location.pathname === "/chat") {
        window.location.href = "/";
      }
    }, 200);
  }

  return (
    <main style={{ minHeight: "100vh", background: "#0b1220", color: "#e8eefc" }}>
      {/* Fixed Back Button (always clickable) */}
      <div style={{ position: "fixed", top: 16, left: 16, zIndex: 9999 }}>
        <button
          onClick={goHome}
          style={{
            padding: "10px 14px",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(255,255,255,0.08)",
            color: "#e8eefc",
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          ← Back Home
        </button>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "28px 16px", paddingTop: 70 }}>
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
            Click below to open the chatbot in WhatsApp:
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
              fontWeight: 800,
            }}
          >
            💬 Open WhatsApp Chatbot
          </a>

          <p style={{ marginTop: 12, fontSize: 12, opacity: 0.75 }}>
            If WhatsApp doesn’t open, save the number and try again: +254 732 213 597
          </p>
        </div>
      </div>
    </main>
  );
}
