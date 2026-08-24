import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wasserfall 2.0 — Kenzo Kasper",
  description: "Website und digitale Markenwelt für das Restaurant Wasserfall 2.0 in Turtmann.",
  openGraph: { title: "Wasserfall 2.0 — Kenzo Kasper", description: "Restaurant website and digital experience.", images: [] },
  twitter: { card: "summary", title: "Wasserfall 2.0 — Kenzo Kasper", description: "Restaurant website and digital experience.", images: [] },
};

export default function WasserfallCaseStudy() {
  return (
    <main className="caseStudy">
      <nav className="caseNav"><a href="/">← Portfolio</a><span>Case Study / 01</span><a href="https://wasserfall02.netlify.app/" target="_blank" rel="noreferrer">Live website ↗</a></nav>
      <section className="caseHero">
        <p>Restaurant / Brand experience / Development</p>
        <h1>Wasserfall<br /><i>2.0</i></h1>
        <img src="/wasserfall-hero.jpeg" alt="Wasserfall 2.0 Sesselbahn-Installation" />
      </section>
      <section className="caseIntro">
        <p className="sectionLabel">The project</p>
        <div><p>Eine digitale Heimat für ein modernes Dorfrestaurant mit klarer Linie — regional, herzlich und ein wenig unerwartet.</p><p>Konzept, visuelle Richtung, responsive Entwicklung und strukturierte Inhalte wurden zu einem vollständigen Webauftritt verbunden.</p></div>
      </section>
      <section className="caseImage"><img src="/wasserfall-night.jpeg" alt="Atmosphäre auf der Terrasse des Restaurant Wasserfall" /><span>Atmosphere / Turtmann / 2026</span></section>
      <section className="caseFacts"><div><span>Scope</span><p>Art direction<br />Web design<br />Frontend development<br />Content structure</p></div><div><span>Built with</span><p>HTML<br />CSS<br />JavaScript<br />Responsive design</p></div><a href="https://wasserfall02.netlify.app/" target="_blank" rel="noreferrer">Visit live website ↗</a></section>
      <footer className="caseFooter"><a href="/">← All projects</a><span>Kenzo Kasper © 2026</span></footer>
    </main>
  );
}
