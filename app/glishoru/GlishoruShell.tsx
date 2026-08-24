"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export const PHONE = "tel:+41774947777";

export function GlishoruHeader({ overlay = false }: { overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const linkClass = (href: string) => pathname === href ? "gNavActive" : undefined;
  return (
    <header className="gNav" data-overlay={overlay || undefined}>
      <a className="gBrand" href="/glishoru" aria-label="Glishoru Startseite"><span>Restaurant</span><strong>Glishoru</strong></a>
      <nav className={menuOpen ? "open" : ""} aria-label="Hauptnavigation">
        <a className={linkClass("/glishoru/haus")} aria-current={pathname === "/glishoru/haus" ? "page" : undefined} href="/glishoru/haus">Unser Haus</a>
        <a className={linkClass("/glishoru/speisekarte")} aria-current={pathname === "/glishoru/speisekarte" ? "page" : undefined} href="/glishoru/speisekarte">Speisekarte</a>
        <a className={linkClass("/glishoru/kontakt")} aria-current={pathname === "/glishoru/kontakt" ? "page" : undefined} href="/glishoru/kontakt">Kontakt</a>
        <a className="gReserve" href={PHONE}>Tisch reservieren</a>
      </nav>
      <button className="gMenuButton" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Menü öffnen">{menuOpen ? "Schliessen" : "Menü"}</button>
    </header>
  );
}

export function GlishoruFooter() {
  return <footer className="gFooter"><a className="gBrand" href="/glishoru"><span>Restaurant</span><strong>Glishoru</strong></a><p>Tradition · Genuss · Gastfreundschaft</p><div className="gFooterLinks"><a href="https://www.instagram.com/restaurant_glishoru/" target="_blank" rel="noreferrer" aria-label="Restaurant Glishoru auf Instagram">Instagram ↗</a><a href="https://www.facebook.com/restaurant.glishoru/" target="_blank" rel="noreferrer" aria-label="Restaurant Glishoru auf Facebook">Facebook ↗</a><a href="/glishoru/impressum">Impressum</a></div><div className="gCreator"><span>Website by</span><a href="mailto:kenzo.kasper@gmx.ch" aria-label="Website von Minimalistica"><b>M</b><strong>Minimalistica</strong></a></div></footer>;
}
