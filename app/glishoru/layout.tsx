import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Glishoru — Genuss im Herzen von Glis",
  description: "Persönliche Gastfreundschaft, kreative Küche und regionale Zutaten am Gliser Dorfplatz. Tisch reservieren im Restaurant Glishoru.",
  openGraph: {
    title: "Restaurant Glishoru — Genuss im Herzen von Glis",
    description: "Tradition, Genuss und herzliche Gastfreundschaft am Gliser Dorfplatz.",
    type: "website",
    images: [{ url: "/glishoru-og.png", width: 1200, height: 630, alt: "Restaurant Glishoru" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Glishoru",
    description: "Genuss im Herzen von Glis.",
    images: ["/glishoru-og.png"],
  },
};

export default function GlishoruLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
