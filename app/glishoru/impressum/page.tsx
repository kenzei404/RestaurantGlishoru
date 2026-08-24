import type { Metadata } from "next";
import { GlishoruFooter, GlishoruHeader } from "../GlishoruShell";

export const metadata: Metadata = { title: "Impressum — Restaurant Glishoru", description: "Impressum und rechtliche Angaben des Restaurant Glishoru in Glis." };

export default function ImpressumPage() {
  return <main className="glishoru gSubpage"><GlishoruHeader />
    <section className="gLegalHero"><p className="gEyebrow">Rechtliche Angaben</p><h1>Impressum</h1></section>
    <section className="gLegalContent">
      <div><p className="gSectionNo">Betreiber & verantwortlich für den Inhalt</p><h2>Restaurant Glishoru</h2><p>Schmidhalter Joel<br />Dorfplatz 25<br />CH-3902 Glis</p><p><a href="tel:+41774947777">+41 77 494 77 77</a><br /><a href="mailto:restaurant@glishoru.ch">restaurant@glishoru.ch</a></p></div>
      <div><p className="gSectionNo">Webdesign & Entwicklung</p><a className="gLegalLogo" href="mailto:kenzo.kasper@gmx.ch"><b>M</b><span><strong>Minimalistica</strong><small>Kenzo Kasper · Glis, Schweiz</small></span></a><p><a href="mailto:kenzo.kasper@gmx.ch">kenzo.kasper@gmx.ch</a></p></div>
      <div className="gLegalWide"><h3>Haftungsausschluss</h3><p>Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität kann dennoch keine Gewähr übernommen werden. Verweise und Links auf Websites Dritter liegen ausserhalb unseres Verantwortungsbereichs.</p><h3>Urheberrecht</h3><p>Inhalte, Bilder und Gestaltung dieser Website unterliegen dem schweizerischen Urheberrecht. Eine Verwendung oder Vervielfältigung bedarf der vorherigen Zustimmung der jeweiligen Rechteinhaber.</p></div>
    </section>
    <GlishoruFooter />
  </main>;
}
