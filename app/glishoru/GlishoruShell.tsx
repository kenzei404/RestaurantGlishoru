"use client";

import { useState } from "react";

export const PHONE = "tel:+41774947777";

export function GlishoruHeader({ overlay = false }: { overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={`gNav ${overlay ? "" : "subpageNav"}`}>
      <a className="gBrand" href="/glishoru" aria-label="Glishoru Startseite"><span>Restaurant</span><strong>Glishoru</strong></a>
      <nav className={menuOpen ? "open" : ""} aria-label="Hauptnavigation">
        <a href="/glishoru/haus">Unser Haus</a>
        <a href="/glishoru/speisekarte">Speisekarte</a>
        <a href="/glishoru/kontakt">Kontakt</a>
        <a className="gReserve" href={PHONE}>Tisch reservieren</a>
      </nav>
      <button className="gMenuButton" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Menü öffnen">{menuOpen ? "Schliessen" : "Menü"}</button>
    </header>
  );
}

export function GlishoruFooter() {
  return <footer className="gFooter"><a className="gBrand" href="/glishoru"><span>Restaurant</span><strong>Glishoru</strong></a><p>Tradition · Genuss · Gastfreundschaft</p><div><a href="https://www.instagram.com/restaurant_glishoru/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.facebook.com/restaurant.glishoru/" target="_blank" rel="noreferrer">Facebook ↗</a></div></footer>;
}
