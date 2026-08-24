import type { Metadata } from "next";
import { GlishoruFooter, GlishoruHeader, PHONE } from "../GlishoruShell";

export const metadata: Metadata = { title: "Kontakt & Reservierung — Restaurant Glishoru", description: "Tisch reservieren und Restaurant Glishoru am Dorfplatz 25 in Glis besuchen." };

export default function KontaktPage() {
  return <main className="glishoru gSubpage"><GlishoruHeader />
    <section className="gPageHero contactHero"><p className="gEyebrow">Reservieren & besuchen</p><h1>Ihr Tisch<br /><i>wartet.</i></h1><p>Am schnellsten erreichen Sie uns telefonisch. Wir freuen uns auf Ihren Besuch im Herzen von Glis.</p><a className="gButton light" href={PHONE}>077 494 77 77</a></section>
    <section className="gContactPage"><div className="gContactCards"><article><span>Adresse</span><h2>Dorfplatz 25<br />3902 Glis</h2><a href="https://maps.google.com/?q=Dorfplatz+25+3902+Glis" target="_blank" rel="noreferrer">Route in Google Maps ↗</a></article><article><span>Kontakt</span><h2><a href={PHONE}>077 494 77 77</a></h2><a href="mailto:restaurant@glishoru.ch">restaurant@glishoru.ch ↗</a></article></div><div className="gHours"><p className="gSectionNo">Öffnungszeiten</p><dl><div><dt>Montag</dt><dd>08:00–23:00</dd></div><div><dt>Dienstag</dt><dd>Ruhetag</dd></div><div><dt>Mittwoch</dt><dd>Ruhetag</dd></div><div><dt>Donnerstag</dt><dd>08:00–23:00</dd></div><div><dt>Freitag</dt><dd>08:00–01:00</dd></div><div><dt>Samstag</dt><dd>08:00–01:00</dd></div><div><dt>Sonntag</dt><dd>08:00–23:00</dd></div></dl><small>Bei Feiertagen und Veranstaltungen können die Zeiten abweichen.</small></div></section>
    <section className="gMapLink"><p>Dorfplatz · Glis · Wallis</p><a href="https://maps.google.com/?q=Dorfplatz+25+3902+Glis" target="_blank" rel="noreferrer">Anfahrt planen ↗</a></section>
    <GlishoruFooter />
  </main>;
}
