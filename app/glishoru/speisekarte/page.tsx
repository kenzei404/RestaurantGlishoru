import type { Metadata } from "next";
import { GlishoruFooter, GlishoruHeader, PHONE } from "../GlishoruShell";

export const metadata: Metadata = { title: "Speisekarte — Restaurant Glishoru", description: "Die vollständige Speisekarte des Restaurant Glishoru: Vorspeisen, Hauptgerichte, Pizza, Flammkuchen und Desserts." };
type Dish = { name: string; description?: string; price: string };

const starters: Dish[] = [
  { name: "Grüner Salat", description: "mit gerösteten Kernen und Nüssen", price: "9.50" }, { name: "Gemischter Salat", price: "12.00" },
  { name: "Salat mischi-maschi", description: "saisonal", price: "13.00" }, { name: "Kleiner gemischter Salat", description: "mit Frühlingsrollen oder Samosa", price: "17.50" },
  { name: "Nüsslisalat", description: "mit Eiern, Speck, Champignons und Nüssen", price: "14.50" }, { name: "Schmausebox «Glishoru»", description: "für 2 Personen · 6 Köstlichkeiten aus Nah und Fern", price: "40.00" },
  { name: "Carpaccio vom Rind", description: "mit Pinienkernen, Rucola und einem Hauch Italien", price: "26.00" }, { name: "Kleines Tatar vom Rind", description: "mit Toast", price: "26.50" },
  { name: "Spaghetti aglio e olio", price: "15.00" }, { name: "Ravioli aus dem Goms", description: "Novena", price: "18.00" },
];
const soups: Dish[] = [{ name: "Tagessuppe", price: "9.50" }, { name: "Safran-Fendantsuppe", price: "11.00" }, { name: "Curry-Mango-Suppe", price: "12.50" }];
const mains: Dish[] = [
  { name: "Tranchiertes Entrecôte vom Rind", description: "mit flüssiger Kräuterbutter · 200 g", price: "41.00" }, { name: "Filet vom Rind", description: "mit Balsamico-Honigsauce · 180 g", price: "53.00" },
  { name: "Rindsfilet Globetrotter", description: "Teriyaki-Trüffelsauce", price: "55.00" }, { name: "Rindsfilet Rossini", description: "mit Gänseleber und Marsalasauce · 180 g", price: "58.00" },
  { name: "Chateaubriand", description: "mit Béarnaisesauce · ab 2 Personen", price: "104.00" }, { name: "Filet vom Lamm", description: "mit Chimichurri-Kräutern", price: "39.00" },
  { name: "Cordon Bleu vom Kalb", description: "mit Pata-Negra-Schinken und Raclettekäse", price: "39.00" }, { name: "Stroganoff", price: "52.00" },
  { name: "Carpaccio vom Rind", description: "mit Pinienkernen, Rucola und einem Hauch Italien", price: "32.00" }, { name: "Tatar vom Rind", description: "mit Toast", price: "39.00" },
  { name: "Alpenzander", description: "mit Zitronensauce", price: "39.00" }, { name: "Eglifilet aus der Region", description: "mit Kräutersauce", price: "40.00" },
  { name: "Ravioli aus dem Goms", description: "Novena", price: "28.00" }, { name: "Spaghetti aglio e olio", price: "21.00" },
];
const alsace: Dish[] = [{ name: "Flammkuchen original", price: "15.00" }, { name: "Flammkuchen vegetarisch", price: "14.00" }, { name: "Flammkuchen mit Trockenfleisch", price: "18.00" }];
const home: Dish[] = [
  { name: "Trockenfleisch", description: "für den kleinen Hunger", price: "17.00" }, { name: "Trockenfleisch", price: "26.00" }, { name: "Hobelkäse", description: "für den kleinen Hunger", price: "14.00" },
  { name: "Hobelkäse", price: "22.00" }, { name: "Eine «Tschiffruta» von allem", description: "für den kleinen Hunger", price: "16.00" }, { name: "Eine «Tschiffruta» von allem", price: "25.00" },
];
const desserts: Dish[] = [
  { name: "Desserteller «Glishoru»", price: "12.00" }, { name: "Tages-Dessert", price: "8.50" }, { name: "Espresso mit Glacékugel", price: "7.00" },
  { name: "Mövenpick Glacé oder Sorbet", description: "pro Kugel", price: "4.00" }, { name: "Garniert", description: "mit Schokoladensauce, Nüssen und Rahm", price: "1.00" },
];

function MenuSection({ title, subtitle, dishes }: { title: string; subtitle?: string; dishes: Dish[] }) {
  return <section className="gMenuGroup"><header><p>Speisekarte</p><h2>{title}</h2>{subtitle && <span>{subtitle}</span>}</header><div className="gMenuItems">{dishes.map((dish, index) => <article key={`${dish.name}-${index}`}><div><h3>{dish.name}</h3>{dish.description && <p>{dish.description}</p>}</div><strong>CHF {dish.price}</strong></article>)}</div></section>;
}

export default function SpeisekartePage() {
  return <main className="glishoru gSubpage"><GlishoruHeader />
    <section className="gPageHero"><p className="gEyebrow">Die ganze Karte</p><h1>Genuss<br /><i>à la carte.</i></h1><p>Von vertrauten Walliser Aromen bis zu einem Hauch Italien – frisch zubereitet und mit Freude serviert.</p></section>
    <div className="gFullMenu">
      <MenuSection title="Vorspeisen" dishes={starters} /><MenuSection title="Aus dem Suppentopf" dishes={soups} />
      <MenuSection title="Hauptgerichte" subtitle="Zu allen Hauptgerichten servieren wir buntes Saisongemüse. Wählen Sie dazu Risotto, Pommes frites oder Rösticroquetten." dishes={mains} />
      <section className="gMenuGroup"><header><p>Ein Hauch</p><h2>Italien</h2><span>Pizza Glishoru – Grundlage Margherita</span></header><div className="gMenuItems"><article><div><h3>Pizza Glishoru</h3><p>Grundlage Margherita</p></div><strong>CHF 19.00</strong></article><div className="gToppings"><h3>Wähle deine Zutaten</h3><p><strong>+ CHF 0.50</strong> Peperoni · Zwiebeln · Knoblauch · Ananas · Champignons · Rucola · Oliven</p><p><strong>+ CHF 1.00</strong> Scharfe Salami · Hobelkäse · Schinken · Gorgonzola · Artischocken · Rohschinken</p></div></div></section>
      <MenuSection title="Ein Hauch Elsass" dishes={alsace} /><MenuSection title="Ein Hauch Heimat" dishes={home} /><MenuSection title="Dessert" dishes={desserts} />
      <section className="gFlavours"><div><h3>Glacé</h3><p>Vanille · Caramelita · Swiss Chocolate · Espresso Croquant · Pistachio · Maple Walnut</p></div><div><h3>Sorbet</h3><p>Passionfruit & Mango · Citron · Erdbeer & Himbeer · Apricot</p></div></section>
      <section className="gDeclarations"><div><h3>Allergien</h3><p>Über Zutaten in unseren Gerichten, die Allergien oder Intoleranzen auslösen können – beispielsweise Laktose oder Gluten – informieren Sie unsere Mitarbeitenden auf Anfrage gerne.</p></div><div><h3>Fleisch-, Geflügel- und Fischdeklaration</h3><p>Wenn möglich beziehen wir unsere Lebensmittel aus der Region.</p><p>Geflügel, Schwein und Kalb: Schweiz<br />Rind und Lamm: Schweiz und Australien</p></div><small>Alle Preise in CHF inklusive Mehrwertsteuer. Das Angebot kann saisonal angepasst werden.</small></section>
    </div>
    <section className="gMenuNote"><p>Reservieren & geniessen</p><h2>Ihr Tisch im Glishoru.</h2><p>Für Tavolata, Gruppen oder besondere Wünsche beraten wir Sie gerne persönlich.</p><a className="gButton light" href={PHONE}>Direkt anrufen</a><a className="gTextLink" href="https://www.glishoru.ch/pdf/Speisekarte.pdf" target="_blank" rel="noreferrer">Speisekarte als PDF ↗</a></section>
    <GlishoruFooter />
  </main>;
}
