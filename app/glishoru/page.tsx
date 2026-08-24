"use client";

import { useState } from "react";

const PHONE = "tel:+41774947777";

export default function GlishoruPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="glishoru">
      <header className="gNav">
        <a className="gBrand" href="#top" aria-label="Glishoru Startseite">
          <span>Restaurant</span>
          <strong>Glishoru</strong>
        </a>
        <nav className={menuOpen ? "open" : ""} aria-label="Hauptnavigation">
          <a href="#kueche" onClick={() => setMenuOpen(false)}>Küche</a>
          <a href="#haus" onClick={() => setMenuOpen(false)}>Unser Haus</a>
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</a>
          <a className="gReserve" href={PHONE}>Tisch reservieren</a>
        </nav>
        <button className="gMenuButton" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Menü öffnen">
          {menuOpen ? "Schliessen" : "Menü"}
        </button>
      </header>

      <section className="gHero" id="top">
        <div className="gHeroImage" aria-hidden="true" />
        <div className="gHeroShade" />
        <div className="gHeroCopy">
          <p className="gEyebrow">Dorfplatz 25 · Glis</p>
          <h1>Wo Genuss<br /><i>daheim ist.</i></h1>
          <p className="gHeroLead">Persönliche Gastfreundschaft, ehrliche Zutaten und kreative Küche im Herzen des Oberwallis.</p>
          <div className="gHeroActions">
            <a className="gButton light" href={PHONE}>Tisch reservieren</a>
            <a className="gTextLink" href="#kueche">Glishoru entdecken ↓</a>
          </div>
        </div>
        <div className="gHeroMeta">
          <span>Di & Mi Ruhetag</span>
          <span>+41 77 494 77 77</span>
        </div>
      </section>

      <section className="gWelcome" id="kueche">
        <p className="gSectionNo">01 · Unsere Küche</p>
        <div>
          <p className="gKicker">Verwurzelt im Wallis.<br />Offen für Neues.</p>
          <p className="gBodyCopy">Im Glishoru trifft ehrliches Handwerk auf feine, überraschende Ideen. Wir kochen mit Sorgfalt, saisonalen Zutaten und einem besonderen Gespür für das, was Menschen gerne an einen Tisch bringt.</p>
        </div>
      </section>

      <section className="gFeature">
        <div className="gFeaturePhoto" role="img" aria-label="Gemütlicher Gastraum im Restaurant Glishoru" />
        <div className="gFeatureCopy">
          <p className="gSectionNo">Zusammen geniessen</p>
          <h2>Tavolata<br /><i>im Glishoru</i></h2>
          <p>Eine lange Tafel, viele kleine Köstlichkeiten und genügend Zeit füreinander. Unsere Tavolata ist ab acht Personen buchbar.</p>
          <div className="gPrice"><strong>CHF 69</strong><span>pro Person<br />ab 8 Personen</span></div>
          <a className="gButton outline" href={PHONE}>Tavolata anfragen</a>
        </div>
      </section>

      <section className="gMenuSection">
        <div className="gMenuIntro">
          <p className="gSectionNo">Aus unserer Karte</p>
          <h2>Klein gehalten.<br /><i>Gross im Geschmack.</i></h2>
        </div>
        <div className="gDishes">
          <article><span>01</span><div><h3>Tatar</h3><p>Ein Klassiker des Hauses, sorgfältig abgeschmeckt und frisch angerichtet.</p></div></article>
          <article><span>02</span><div><h3>Fleisch & Gemüse</h3><p>Hochwertige Stücke, auf den Punkt gegart, begleitet von saisonalem Gemüse.</p></div></article>
          <article><span>03</span><div><h3>Vegetarische Küche</h3><p>Eigenständige Gerichte mit regionalen Zutaten und kreativen Akzenten.</p></div></article>
        </div>
        <a className="gButton dark" href="https://www.glishoru.ch/pdf/Speisekarte.pdf" target="_blank" rel="noreferrer">Aktuelle Speisekarte ↗</a>
      </section>

      <section className="gHouse" id="haus">
        <div className="gHouseCopy">
          <p className="gSectionNo">02 · Unser Haus</p>
          <h2>Gastlichkeit,<br /><i>die von Herzen kommt.</i></h2>
          <p>Am Gliser Dorfplatz pflegen wir eine unkomplizierte, persönliche Art der Gastfreundschaft. Ein Ort für ein feines Essen zu zweit, das Wiedersehen mit Freunden oder einen langen Abend in guter Gesellschaft.</p>
          <a className="gTextLink darkLink" href="#kontakt">Besuch planen ↓</a>
        </div>
        <div className="gWinePhoto" role="img" aria-label="Weinkeller des Restaurant Glishoru" />
      </section>

      <section className="gReviews" aria-label="Gästestimmen">
        <div className="gRating"><strong>4.8</strong><span>★★★★★</span><p>Mehr als 100 Google-Bewertungen</p></div>
        <blockquote>„Eine kleine, schöne Karte mit frischen lokalen Gerichten und innovativen, internationalen Ideen. Sehr persönlicher, freundlicher Service.“<cite>— Gast auf Tripadvisor</cite></blockquote>
        <blockquote>„Schon beim Empfang spürt man die Herzlichkeit. Ausgezeichnetes Essen, charmantes Ambiente und ein Service, der Freude macht.“<cite>— Gast auf Google</cite></blockquote>
      </section>

      <section className="gContact" id="kontakt">
        <p className="gSectionNo">03 · Zu Gast im Glishoru</p>
        <div className="gContactGrid">
          <div className="gContactLead"><h2>Wir freuen uns<br /><i>auf Sie.</i></h2><a className="gButton light" href={PHONE}>Jetzt anrufen</a></div>
          <div className="gDetails">
            <div><span>Adresse</span><p>Dorfplatz 25<br />3902 Glis, Schweiz</p><a href="https://maps.google.com/?q=Dorfplatz+25+3902+Glis" target="_blank" rel="noreferrer">Route öffnen ↗</a></div>
            <div><span>Öffnungszeiten</span><p>Montag 08:00–23:00<br />Dienstag & Mittwoch geschlossen<br />Donnerstag 08:00–23:00<br />Freitag & Samstag 08:00–01:00<br />Sonntag 08:00–23:00</p></div>
            <div><span>Kontakt</span><p><a href={PHONE}>077 494 77 77</a><br /><a href="mailto:restaurant@glishoru.ch">restaurant@glishoru.ch</a></p></div>
          </div>
        </div>
      </section>

      <footer className="gFooter"><a className="gBrand" href="#top"><span>Restaurant</span><strong>Glishoru</strong></a><p>Tradition · Genuss · Gastfreundschaft</p><div><a href="https://www.instagram.com/restaurant_glishoru/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.facebook.com/restaurant.glishoru/" target="_blank" rel="noreferrer">Facebook ↗</a></div></footer>
    </main>
  );
}
