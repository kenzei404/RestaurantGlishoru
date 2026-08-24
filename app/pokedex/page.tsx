import type { Metadata } from "next";
import { ProjectCase } from "../components/ProjectCase";

export const metadata: Metadata = { title: "Pokédex — Kenzo Kasper", description: "API-driven Pokémon explorer with detailed data and responsive cards.", openGraph: { title: "Pokédex — Kenzo Kasper", description: "API-driven Pokémon explorer.", images: [] }, twitter: { card: "summary", title: "Pokédex — Kenzo Kasper", description: "API-driven Pokémon explorer.", images: [] } };

export default function PokedexPage() { return <ProjectCase index="04" name="Pokédex" subtitle="API experience / Data interface" intro="Eine visuelle Pokémon-Datenbank mit mehr als tausend Einträgen, Detailansichten und dynamischen Typenwelten." detail="Die Anwendung lädt Daten über die PokéAPI, verarbeitet mehrere Endpunkte und übersetzt komplexe Daten in ein zugängliches Karteninterface." scope={["API integration", "Data handling", "UI design", "Responsive cards"]} tech={["REST API", "Async JavaScript", "HTML", "CSS"]} visual="pokedex" image="/pokedex-bg.jpg" imageAlt="Grüne Welt aus dem Pokédex-Projekt" />; }
