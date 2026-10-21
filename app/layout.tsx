import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kanchana Witharana | Business Analyst & UI/UX Designer",
  description:
    "Official portfolio of Kanchana Witharana, showcasing enterprise systems, UI/UX designs, and software engineering projects.",
  authors: [{ name: "Kanchana Witharana" }],
  creator: "Kanchana Witharana",
  publisher: "Kanchana Witharana",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kanchanawitharana.vercel.app",
  },
  openGraph: {
    title: "Kanchana Witharana | Business Analyst & UI/UX Designer",
    description:
      "Official portfolio of Kanchana Witharana, showcasing enterprise systems, UI/UX designs, and software engineering projects.",
    url: "https://kanchanawitharana.vercel.app",
    siteName: "Kanchana Witharana Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanchana Witharana | Business Analyst & UI/UX Designer",
    description:
      "Official portfolio of Kanchana Witharana, showcasing enterprise systems, UI/UX designs, and software engineering projects.",
  },
  // Google Search Console verification meta tag
  verification: {
    google: "googlee397342057b9ed0b",
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
      className={`${syne.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} ${outfit.variable}`}
    >
      <body class="relative bg-ink font-body text-text antialiased">
        {children}
      </body>
    </html>
  );
}
