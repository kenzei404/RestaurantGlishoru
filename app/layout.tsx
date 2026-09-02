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
  title: "Restaurant Glishoru — Demo-Projekt",
  description: "Traditionell-moderne Demo-Website für das Restaurant Glishoru in Glis.",
  openGraph: {
    title: "Restaurant Glishoru — Demo-Projekt",
    description: "Genuss im Herzen von Glis. Nicht die offizielle Website.",
    type: "website",
    images: [{ url: "/glishoru-og.png", width: 1200, height: 630, alt: "Restaurant Glishoru" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Glishoru — Demo-Projekt",
    description: "Genuss im Herzen von Glis. Nicht die offizielle Website.",
    images: ["/glishoru-og.png"],
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
