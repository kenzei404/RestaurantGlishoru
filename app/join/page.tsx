import type { Metadata } from "next";
import { ProjectCase } from "../components/ProjectCase";

export const metadata: Metadata = { title: "Join — Kenzo Kasper", description: "Kanban task management application with drag and drop, contacts and responsive workflows.", openGraph: { title: "Join — Kenzo Kasper", description: "Task management application.", images: [] }, twitter: { card: "summary", title: "Join — Kenzo Kasper", description: "Task management application.", images: [] } };

export default function JoinPage() { return <ProjectCase index="02" name="Join" subtitle="Task management / Team project" intro="Eine umfangreiche Kanban-Anwendung für Aufgaben, Kontakte und kollaborative Workflows." detail="Das Projekt verbindet Drag & Drop, Aufgabenverwaltung, Kontaktlogik und responsive Oberflächen in einer zusammenhängenden Anwendung." scope={["Frontend development", "Interaction logic", "Responsive UI", "Team collaboration"]} tech={["HTML", "CSS", "JavaScript", "REST data"]} visual="join" image="/join-mark.svg" imageAlt="Join Signet" />; }
