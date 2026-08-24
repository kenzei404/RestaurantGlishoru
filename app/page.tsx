"use client";

import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<"de" | "en">("de");
  const de = language === "de";

  return (
    <main>
      <section className="frame" id="top">
        <header>
          <a className="monogram" href="#top" aria-label="Startseite">M</a>
          <div className="languageToggle" aria-label="Sprache wählen">
            <button className={de ? "active" : ""} onClick={() => setLanguage("de")}>DE</button>
            <span>/</span>
            <button className={!de ? "active" : ""} onClick={() => setLanguage("en")}>EN</button>
          </div>
          <a href="mailto:kenzo.kasper@gmx.ch">{de ? "Kontakt" : "Let’s work together"} ↗</a>
        </header>
        <div className="intro">
          <p className="index">Kenzo Kasper — Portfolio 2026</p>
          <h1>{de ? "Form folgt" : "Form follows"}<br /><i>{de ? "Gefühl." : "feeling."}</i></h1>
        </div>
        <img className="heroStone" src="/stone.png" alt="Skulpturaler dunkler Stein" />
        <div className="heroCaption"><span>Glis, Switzerland</span><span>Frontend Developer / Designer</span></div>
      </section>

      <section className="manifesto" id="about">
        <p className="sectionLabel">01 — {de ? "Über mich" : "About"}</p>
        <p className="manifestoText">{de ? "Ich entwickle digitale Räume, in denen Funktion und" : "I create digital spaces where function and"} <i>{de ? "Gefühl zusammenfinden." : "feeling meet."}</i></p>
        <div className="manifestoMeta">
          <p>{de ? "Nach meiner Ausbildung an der Developer Akademie gründete ich Minimalistica — ein Studio für klare digitale Identitäten und durchdachte Web-Erlebnisse." : "After graduating from the Developer Akademie, I founded Minimalistica — a studio for clear digital identities and considered web experiences."}</p>
          <p>{de ? "Frontend Development · Webdesign · Brand Experience" : "Frontend development · Web design · Brand experience"}<br /><br />{de ? "Verfügbar für ausgewählte Projekte und außergewöhnlich gute Angebote." : "Available for selected projects and exceptionally good opportunities."}</p>
        </div>
      </section>

      <section className="works" id="work">
        <div className="worksHead"><p className="sectionLabel">02 — {de ? "Ausgewählte Arbeiten" : "Selected work"}</p><p>2024—2026</p></div>
        <a className="wasserfallCard" href="/wasserfall">
          <img src="/wasserfall-hero.jpeg" alt="Wasserfall 2.0 Installation in Turtmann" />
          <div className="wasserfallTop"><span>Wasserfall 2.0</span><span>{de ? "Restaurant / Digital Experience" : "Restaurant / Digital experience"}</span><span>2026</span></div>
          <div className="wasserfallTitle">Wasserfall</div>
          <span className="view">{de ? "Case Study ansehen" : "View case study"} ↗</span>
        </a>
        <a className="workCard workOne" href="/join">
          <div className="workTop"><span>Join</span><span>{de ? "Task-Management-App" : "Task management app"}</span><span>Developer Akademie</span></div>
          <div className="workTitle">Join</div>
          <div className="joinArtwork"><span></span><img src="/join-mark.svg" alt="Join App Logo" /></div>
          <span className="view">{de ? "Kanban-Board, Kontakte und Drag & Drop" : "Kanban board, contacts and drag & drop"} ↗</span>
        </a>
        <div className="workGrid">
          <a className="smallWork polloWork" href="/el-pollo-loco">
            <div><span>El Pollo Loco</span><span>2D Browser Game</span></div>
            <div className="previewFrame"><img className="projectPreview" src="/pollo-startscreen.png" alt="Startbildschirm des Spiels El Pollo Loco" /></div>
            <strong className="projectInitial">EL.</strong>
            <span className="view">JavaScript / OOP ↗</span>
          </a>
          <a className="smallWork pokedexWork" href="/pokedex">
            <div><span>Pokédex</span><span>API Experience</span></div>
            <div className="previewFrame"><img className="pokedexField" src="/pokedex-field.jpg" alt="Spielfeld-Grafik aus dem Pokédex-Projekt" /><img className="pokedexLogo" src="/pokedex-logo.png" alt="Pokémon Logo" /></div>
            <strong className="projectInitial">PK.</strong>
            <span className="view">PokéAPI / JavaScript ↗</span>
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactMark">M</div>
        <p className="sectionLabel">03 — {de ? "Kontakt" : "Contact"}</p>
        <p className="contactLead">{de ? "Eine Idee," : "A thought"}<br />{de ? "die Form braucht?" : "worth shaping?"}</p>
        <a className="email" href="mailto:kenzo.kasper@gmx.ch">kenzo.kasper@gmx.ch ↗</a>
        <div className="contactFoot"><span>Kenzo Kasper © 2026</span><span>Minimalistica · Glis, CH</span><a href="#top">{de ? "Nach oben" : "Back to top"} ↑</a></div>
      </section>
    </main>
  );
}
