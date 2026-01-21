"use client";

import { useState } from "react";

export default function AINurseDemo() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello, I am your AI Nurse. I can help with symptoms, health education, and clinic guidance. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const aiMessage = {
      role: "assistant",
      content:
        "Thank you for your message. This is a demo AI Nurse. In the full system, I would provide clinical guidance and next steps.",
    };

    setMessages([...messages, userMessage, aiMessage]);
    setInput("");
  }

  return (
    <main style={{ minHeight: "100vh", background: "#0b1220", color: "#e8eefc" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
        <h1 style={{ fontSize: 28 }}>AI Nurse Assistant — Live Demo</h1>
        <p style={{ opacity: 0.8 }}>
          This demo shows how patients can interact with a digital nurse for
          health guidance, education, and follow-ups.
        </p>

        <div
          style={{
            marginTop: 20,
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: 16,
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              height: 360,
              overflowY: "auto",
              padding: 10,
              background: "rgba(0,0,0,0.3)",
              borderRadius: 12,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 12,
                  textAlign: msg.role === "user" ? "right" : "left",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "10px 14px",
                    borderRadius: 14,
                    maxWidth: "80%",
                    background:
                      msg.role === "user"
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(0,150,255,0.15)",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your health question..."
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(0,0,0,0.4)",
                color: "#e8eefc",
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                padding: "10px 18px",
                borderRadius: 12,
                border: "none",
                background: "#ffffff",
                color: "#0b1220",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <a href="/demos" style={{ color: "#e8eefc", opacity: 0.8 }}>
            ← Back to Live Demos
          </a>
        </div>
      </div>
    </main>
  );
}
