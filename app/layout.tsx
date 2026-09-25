import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import AnalyticsTracker from "@/components/Analytics/AnalyticsTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://akp-portfolio-zeta.vercel.app"
  ),

  // ==========================================================
  // BASIC SEO
  // ==========================================================

  title: {
    default: "ANNU PAL",
    template: "%s | ANNU PAL",
  },

  description:
    "ANNU PAL — AI / ML Engineer building intelligent software, AI agents, and meaningful real-world products.",

  // ==========================================================
  // OPEN GRAPH
  // ==========================================================

  openGraph: {
    title: "ANNU PAL",

    description:
      "AI / ML Engineer building intelligent software, AI agents, and meaningful real-world products.",

    url: "https://akp-portfolio-zeta.vercel.app",

    siteName: "ANNU PAL",

    type: "website",

    locale: "en_US",
  },

  // ==========================================================
  // TWITTER / X
  // ==========================================================

  twitter: {
    card: "summary_large_image",

    title: "ANNU PAL",

    description:
      "AI / ML Engineer building intelligent software, AI agents, and JARVIS-X.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* ==================================================
            JARVIS-X / LEGACY ANALYTICS
        ================================================== */}

        <AnalyticsTracker />

        {/* ==================================================
            WEBSITE
        ================================================== */}

        {children}

      </body>
    </html>
  );
}