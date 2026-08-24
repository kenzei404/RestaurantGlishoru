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
  title: "Kenzo — Designer & Developer",
  description: "Portfolio von Kenzo: Marken, Interfaces und digitale Erlebnisse aus der Schweiz.",
  openGraph: {
    title: "Kenzo — Design & Code",
    description: "Digitale Erlebnisse mit Haltung.",
    type: "website",
    images: [{ url: "/og.png", width: 1730, height: 910, alt: "Kenzo — Design & Code" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenzo — Design & Code",
    description: "Digitale Erlebnisse mit Haltung.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
