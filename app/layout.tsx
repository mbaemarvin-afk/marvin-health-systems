import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marvin Mutugi Mbae | Nursing Professional & Digital Health Innovator",
  description:
    "Nursing Professional, Digital Health Innovator, and Founder of MediReach Health Tech building AI-powered health systems, telemedicine solutions, and community health innovation in Africa.",
  keywords: [
    "Digital Health",
    "Nursing Kenya",
    "MediReach Health Tech",
    "Telemedicine Africa",
    "Health Innovation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
