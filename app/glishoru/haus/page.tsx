import type { Metadata } from "next";
import { GlishoruFooter, GlishoruHeader } from "../GlishoruShell";

export const metadata: Metadata = { title: "Unser Haus — Restaurant Glishoru", description: "Ein Restaurant mit Herz, Charakter und persönlicher Gastfreundschaft am Dorfplatz in Glis." };

export default function HausPage() {
  return <main className="glishoru gSubpage"><GlishoruHeader />
    <section className="gPageHero houseHero"><p className="gEyebrow">Am Dorfplatz in Glis</p><h1>Ein Haus<br /><i>mit Seele.</i></h1><p>Das Glishoru ist ein Ort zum Ankommen, Zusammensitzen und Wiederkommen.</p></section>
    <section className="gStory"><div className="gStoryPhoto" /><div><p className="gSectionNo">Persönlich geführt</p><h2>Gastfreundschaft ist bei uns keine Geste. Sie ist eine Haltung.</h2><p>Wir mögen gute Gespräche, gedeckte Tische und Gerichte, an die man sich gerne erinnert. Unser Haus verbindet die Vertrautheit einer Walliser Beiz mit der Sorgfalt einer modernen Küche.</p><p>Ob ein schnelles Mittagessen, ein Abend zu zweit oder eine Feier mit Freunden: Bei uns soll sich jeder Besuch besonders und gleichzeitig ganz selbstverständlich anfühlen.</p></div></section>
    <section className="gValues"><p className="gValuesIntro">Was uns wichtig ist</p><div><article><span aria-hidden="true">◆</span><h3>Regional</h3><p>Wir arbeiten bevorzugt mit Produkten aus der Region und folgen den Jahreszeiten.</p></article><article><span aria-hidden="true">◆</span><h3>Persönlich</h3><p>Aufmerksamer Service, ehrliche Empfehlungen und Zeit für unsere Gäste.</p></article><article><span aria-hidden="true">◆</span><h3>Mit Charakter</h3><p>Tradition darf sich weiterentwickeln – auf dem Teller wie im Gastraum.</p></article></div></section>
    <section className="gHouseBanner"><div /><p>„Ein charmantes Ambiente, ausgezeichnetes Essen und ein Service, der Freude macht.“<span>— Gästestimme</span></p></section>
    <GlishoruFooter />
  </main>;
}
