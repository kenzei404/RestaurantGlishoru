import type { Metadata } from "next";
import { GlishoruFooter, GlishoruHeader, PHONE } from "../GlishoruShell";

export const metadata: Metadata = { title: "Speisekarte — Restaurant Glishoru", description: "Saisonale, regionale und kreative Küche im Restaurant Glishoru in Glis." };

const groups = [
  { title: "Zum Start", items: [["Bunter Blattsalat", "Hausdressing · Kräuter · Kerne"], ["Tatar vom Rind", "Klassisch abgeschmeckt · Toast · Butter"], ["Suppe der Saison", "Mit dem Besten, was gerade wächst"]] },
  { title: "Hauptsache", items: [["Fleisch aus der Region", "Saisongemüse · Kartoffelbeilage · Jus"], ["Fang des Tages", "Gemüse · Kräuterschaum · Zitrone"], ["Vegetarischer Teller", "Marktgemüse · Getreide · Walliser Käse"]] },
  { title: "Zum Schluss", items: [["Desserteller Glishoru", "Eine kleine Auswahl aus unserer Küche"], ["Käse aus dem Wallis", "Feigensenf · Früchtebrot"], ["Hausgemachtes Sorbet", "Nach Angebot"]] },
];

export default function SpeisekartePage() {
  return <main className="glishoru gSubpage"><GlishoruHeader />
    <section className="gPageHero"><p className="gEyebrow">Die aktuelle Auswahl</p><h1>Unsere<br /><i>Speisekarte.</i></h1><p>Bewusst überschaubar, saisonal gedacht und mit Liebe gekocht. Das Angebot verändert sich mit Markt und Jahreszeit.</p></section>
    <section className="gFullMenu">{groups.map((group, gi) => <div className="gMenuGroup" key={group.title}><p className="gSectionNo">0{gi + 1}</p><div><h2>{group.title}</h2>{group.items.map(([name, desc]) => <article key={name}><h3>{name}</h3><p>{desc}</p></article>)}</div></div>)}</section>
    <section className="gMenuNote"><p>Allergien oder besondere Wünsche?</p><h2>Sprechen Sie mit uns.</h2><p>Unser Team informiert Sie gerne über Zutaten, Allergene und vegetarische Möglichkeiten.</p><a className="gButton light" href={PHONE}>Direkt anrufen</a><a className="gTextLink" href="https://www.glishoru.ch/pdf/Speisekarte.pdf" target="_blank" rel="noreferrer">Originalkarte als PDF ↗</a></section>
    <GlishoruFooter />
  </main>;
}
