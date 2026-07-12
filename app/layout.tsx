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
  title: {
    default: "Annu Kumar Pal | AI & ML Engineer",
    template: "%s | Annu Kumar Pal",
  },

  description:
    "Portfolio of Annu Kumar Pal, an MCA AI & ML student building intelligent software, AI systems, machine learning projects, and products that solve meaningful real-world problems.",

  applicationName: "AKP Portfolio",

  authors: [
    {
      name: "Annu Kumar Pal",
    },
  ],

  creator: "Annu Kumar Pal",
  publisher: "Annu Kumar Pal",

  keywords: [
    "Annu Kumar Pal",
    "AI Engineer",
    "Machine Learning Engineer",
    "AI ML Portfolio",
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
    "AI Agents",
    "Python Developer",
    "Software Engineer",
    "Jarvis-X",
    "AKP Portfolio",
    "MCA AI ML",
  ],

  category: "technology",

  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Annu Kumar Pal | AI & ML Engineer",
    description:
      "Building intelligent software, AI systems, and products that solve meaningful real-world problems.",
    siteName: "AKP Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Annu Kumar Pal | AI & ML Engineer",
    description:
      "Building intelligent software, AI systems, and products that solve meaningful real-world problems.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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