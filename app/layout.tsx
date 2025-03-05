import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
  author: "Gaf Clickz",
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
    image: "https://gafclickz.in/gaf.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> */}
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
