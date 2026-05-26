"use client";

import React from "react";
import { motion } from "framer-motion";

const COLORS = {
  bg: "#070A12",
  card: "rgba(255,255,255,0.06)",
  border: "rgba(255,255,255,0.12)",
  text: "#E8EEF9",
  primary: "#4CAF50",
  secondary: "#2E7DAF",
};

const FULL_NAME = "Marvin Mutugi Mbae (Marvo)";
const TITLE = "Kenya Registered Nurse & Digital Health Specialist";

const LINKEDIN = "https://www.linkedin.com/in/marvin-mutugi-0248a2128/";

const CV_SUMMARY = `
Digital health professional with nursing background and expertise in healthcare systems, AI in healthcare, EMRs, telehealth, and digital transformation.

Founder of Marvin Health Systems and MediReach Digital Health, focused on building scalable, secure, and user-centered healthcare solutions across Africa.
`;

export default function Page() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.hero}
        >
          <h1 style={styles.h1}>{FULL_NAME}</h1>
          <h2 style={styles.h2}>{TITLE}</h2>

          <p style={styles.subtext}>
            Digital Health Innovator • Nurse • AI Health Systems Builder • Youth Mentor • Open University Recruiter
          </p>

          <div style={styles.btnRow}>
            <a href={LINKEDIN} target="_blank" style={styles.primaryBtn}>
              🔗 LinkedIn Profile
            </a>
            <a href="#cv" style={styles.btn}>📄 View CV</a>
            <a href="mailto:mbaemarvin@gmail.com" style={styles.btn}>📧 Contact</a>
          </div>
        </motion.section>

        {/* SUMMARY */}
        <motion.section
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          style={styles.card}
        >
          <h3 style={styles.title}>Professional Summary</h3>
          <p style={styles.text}>{CV_SUMMARY}</p>
        </motion.section>

        {/* ROLES */}
        <motion.section style={styles.card}>
          <h3 style={styles.title}>Leadership & Roles</h3>

          <ul style={styles.list}>
            <li>Founder — MediReach Digital Health Systems</li>
            <li>Founder — Marvin Health Systems</li>
            <li>Youth 4 Afya Mentor (Kenya Medical Association & Amref Health Africa)</li>
            <li>Official Open University Recruiter</li>
            <li>Digital Health Consultant</li>
          </ul>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section style={styles.card}>
          <h3 style={styles.title}>Professional Experience</h3>

          <div style={styles.grid}>
            <div style={styles.smallCard}>
              <h4>Founder & Digital Health Lead</h4>
              <p>MediReach Digital Health Systems</p>
            </div>

            <div style={styles.smallCard}>
              <h4>Digital Health Consultant</h4>
              <p>Healthcare systems & digital transformation</p>
            </div>

            <div style={styles.smallCard}>
              <h4>Community Nurse</h4>
              <p>Village HopeCore International</p>
            </div>

            <div style={styles.smallCard}>
              <h4>General Nurse</h4>
              <p>St. Ann Mission Hospital</p>
            </div>
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section style={styles.card}>
          <h3 style={styles.title}>Core Skills</h3>

          <div style={styles.badges}>
            {[
              "Digital Health",
              "EMR Systems",
              "Telehealth",
              "AI in Healthcare",
              "UX Design",
              "Cybersecurity",
              "Healthcare Systems",
              "Product Design",
              "Community Health",
            ].map((s) => (
              <span key={s} style={styles.badge}>{s}</span>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section style={styles.card}>
          <h3 style={styles.title}>Projects</h3>

          <div style={styles.grid}>
            <div style={styles.smallCard}>
              <h4>MediReach Telehealth Platform</h4>
              <p>AI-powered hybrid healthcare system for Africa</p>
            </div>

            <div style={styles.smallCard}>
              <h4>EMR System Design</h4>
              <p>Low-resource healthcare digital records system</p>
            </div>
          </div>
        </motion.section>

        {/* CV FULL */}
        <motion.section
          id="cv"
          style={styles.card}
          whileInView={{ opacity: 1 }}
        >
          <h3 style={styles.title}>Full CV Overview</h3>

          <p style={styles.text}>
            Nursing-trained digital health specialist with experience in clinical care,
            digital transformation, AI systems, telehealth infrastructure, and healthcare innovation.
          </p>

          <p style={styles.text}>
            Passionate about building scalable African health systems that combine
            technology, data, and human-centered care delivery.
          </p>
        </motion.section>

        {/* CONTACT */}
        <motion.section style={styles.card}>
          <h3 style={styles.title}>Contact</h3>
          <p>Email: mbaemarvin@gmail.com</p>
          <p>Phone: +254702294517</p>
        </motion.section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          © {new Date().getFullYear()} Marvin Health Systems • Built for Global Digital Health Impact
        </footer>

      </div>
    </main>
  );
}

/* ================= STYLES ================= */

const styles: any = {
  main: {
    background: COLORS.bg,
    color: COLORS.text,
    fontFamily: "Arial",
  },
  container: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: 24,
  },
  hero: {
    padding: 30,
    borderRadius: 18,
    background: "linear-gradient(135deg, rgba(76,175,80,0.15), rgba(46,125,175,0.15))",
    border: `1px solid ${COLORS.border}`,
    marginBottom: 16,
  },
  h1: {
    fontSize: 42,
    margin: 0,
    color: COLORS.primary,
  },
  h2: {
    color: COLORS.secondary,
    marginTop: 8,
  },
  subtext: {
    marginTop: 10,
    opacity: 0.85,
    lineHeight: 1.6,
  },
  btnRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 15,
  },
  btn: {
    padding: "10px 14px",
    borderRadius: 12,
    border: `1px solid ${COLORS.border}`,
    color: COLORS.text,
    textDecoration: "none",
  },
  primaryBtn: {
    padding: "10px 14px",
    borderRadius: 12,
    background: COLORS.primary,
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  card: {
    padding: 20,
    borderRadius: 16,
    background: COLORS.card,
    border: `1px solid ${COLORS.border}`,
    marginBottom: 16,
    backdropFilter: "blur(10px)",
  },
  title: {
    color: COLORS.primary,
    marginBottom: 10,
  },
  text: {
    lineHeight: 1.6,
    opacity: 0.9,
  },
  list: {
    paddingLeft: 18,
    display: "grid",
    gap: 6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 12,
  },
  smallCard: {
    padding: 14,
    borderRadius: 14,
    background: "rgba(0,0,0,0.25)",
    border: `1px solid ${COLORS.border}`,
  },
  badges: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  badge: {
    padding: "6px 10px",
    borderRadius: 20,
    fontSize: 12,
    background: "rgba(255,255,255,0.08)",
    border: `1px solid ${COLORS.border}`,
  },
  footer: {
    textAlign: "center",
    opacity: 0.6,
    marginTop: 20,
    fontSize: 13,
  },
};
