import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/data/portfolio";
import CinematicBackground from "@/components/CinematicBackground";
import LetterboxIntro from "@/components/LetterboxIntro";
import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";
import ScrollFlow from "@/components/ScrollFlow";
import Footer from "@/components/Footer";
import "./globals.css";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  // Google Search Console verification tag
  verification: {
    google: "jeD8uLH-wueees885GiTbCcjnNvdHZ_coCoCBGuyXP8",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="relative bg-ink font-body text-text antialiased">
        <CinematicBackground />
        <LetterboxIntro />
        <ScrollFlow />
        <Navigation />
        <MobileNavigation />
        <main className="relative z-[2] mx-auto max-w-[1120px] px-5 pt-24 sm:px-7 md:pt-[104px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
