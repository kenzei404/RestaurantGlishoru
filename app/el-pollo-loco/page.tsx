import type { Metadata } from "next";
import { ProjectCase } from "../components/ProjectCase";

export const metadata: Metadata = { title: "El Pollo Loco — Kenzo Kasper", description: "Object-oriented 2D browser game built with JavaScript.", openGraph: { title: "El Pollo Loco — Kenzo Kasper", description: "Object-oriented browser game.", images: [] }, twitter: { card: "summary", title: "El Pollo Loco — Kenzo Kasper", description: "Object-oriented browser game.", images: [] } };

export default function PolloPage() { return <ProjectCase index="03" name="El Pollo Loco" subtitle="2D browser game / Object-oriented JavaScript" intro="Ein vollständiges 2D-Browsergame mit animierten Figuren, Gegnern, Sound und eigenem Spielablauf." detail="Objektorientierte Klassen strukturieren Charaktere, Kollisionen, Bewegungen, Level und Audio zu einem interaktiven Spielerlebnis." scope={["Game logic", "Animation system", "Interaction design", "Sound integration"]} tech={["JavaScript OOP", "Canvas", "HTML", "CSS"]} visual="pollo" image="/pollo-pepe.png" imageAlt="Spielfigur Pepe aus El Pollo Loco" />; }
