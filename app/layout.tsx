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
  metadataBase: new URL("https://akp-portfolio-zeta.vercel.app"),

  title: {
    default: "Annu Kumar Pal | AI & ML Engineer",
    template: "%s | Annu Kumar Pal",
  },

  description:
    "AI & ML Engineer building intelligent software, AI agents, and products that solve meaningful real-world problems.",

  openGraph: {
    title: "Annu Kumar Pal | AI & ML Engineer",
    description:
      "Building AI that solves meaningful real-world problems.",
    url: "https://akp-portfolio-zeta.vercel.app",
    siteName: "AKP Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Annu Kumar Pal | AI & ML Engineer",
    description:
      "Building AI that solves meaningful real-world problems.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}