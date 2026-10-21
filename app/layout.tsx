import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    google: "jeD8uLH-wueees885GiTbCcjnNvdHZ_coCoCBGuyXP8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-ink font-body text-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
