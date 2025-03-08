import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GafClickz",
  description:
    "Filmmaker & Photographer specializing in Wedding, Fashion, Corporate, Portraits, and Baby shoots. Capturing moments that tell your unique story.",
  keywords: [
    "GafClickz",
    "Filmmaker",
    "Photographer",
    "Wedding Photography",
    "Fashion Photography",
    "Corporate Photography",
    "Portrait Photography",
    "Baby Shoots",
  ],
  authors: [{ name: "Gaf Clickz" }],
  openGraph: {
    title: "GafClickz - Filmmaker & Photographer",
    description:
      "Capturing moments that tell your unique story in Wedding, Fashion, Corporate, Portraits, and Baby shoots.",
    url: "https://gafclickz.in",
    images: [
      {
        url: "https://gafclickz.in/gaf.jpeg",
        width: 800,
        height: 600,
        alt: "GafClickz Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gafclickz",
    title: "GafClickz - Filmmaker & Photographer",
    description:
      "Capturing moments that tell your unique story in Wedding, Fashion, Corporate, Portraits, and Baby shoots.",
    images: ["https://gafclickz.in/gaf.jpeg"], // Corrected property name
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
