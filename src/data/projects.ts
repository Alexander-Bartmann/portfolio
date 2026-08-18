import taskmanager from "../assets/projects/p-taskmanager.webp";
import join from "../assets/projects/p-join.webp";
import polloloco from "../assets/projects/p-polloloco.webp";
import notizen from "../assets/projects/p-notizen.webp";
import pokedex from "../assets/projects/p-pokedex.webp";

export interface Project {
  id: string;
  title: string;
  image: string;
  team?: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: "taskmanager",
    title: "Task Manager",
    image: taskmanager,
    description:
      "Fullstack-Anwendung zur Aufgabenverwaltung mit Benutzerkonten. Jeder Nutzer registriert sich, meldet sich an und verwaltet ausschließlich seine eigenen Tasks und Kategorien — die Zugriffsprüfung erfolgt serverseitig bei jedem Request.",
    liveUrl: "https://task-manager-alex.netlify.app",
    githubUrl: "https://github.com/Alexander-Bartmann/task-manager-project",
    tech: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL"],
  },
  {
    id: "join",
    title: "Join",
    image: join,
    team: "Zweierteam, 8 Wochen",
    description:
      "Aufgabenverwaltung nach dem Kanban-Prinzip mit Drag & Drop, " +
      "Kontaktzuweisung und Firebase-Anbindung. Im Zweierteam entwickelt, " +
      "meine Bereiche waren Kontaktverwaltung und Layout-Komponenten.",
    liveUrl: "https://alexander-bartmann.de/Join",
    githubUrl: "https://github.com/Alexander-Bartmann/Join",
    tech: ["JavaScript", "Firebase", "HTML", "CSS"],
  },
  {
    id: "polloloco",
    title: "Pollo Loco",
    image: polloloco,
    description:
      "2D-Jump-and-Run-Spiel mit HTML5 Canvas und objektorientiertem JavaScript. Pepe sammelt Münzen und Salsa-Flaschen, um den Endgegner zu besiegen.",
    liveUrl: "https://alexander-bartmann.de/PolloLoco",
    githubUrl: "https://github.com/Alexander-Bartmann/PolloLoco",
    tech: ["JavaScript", "Canvas", "HTML", "CSS"],
  },
  {
    id: "pokedex",
    title: "Pokedex",
    image: pokedex,
    description:
      "Pokémon-Datenbank mit Anbindung an die PokéAPI. Übersicht mit Nachladen, Detailansicht mit Werten und Entwicklungsreihe, Suche.",
    liveUrl: "https://alexander-bartmann.de/Pokedex",
    githubUrl: "https://github.com/Alexander-Bartmann/Pokedex",
    tech: ["JavaScript", "PokeAPI", "HTML", "CSS"],
  },
  {
    id: "notizen",
    title: "Notizen",
    image: notizen,
    description:
      "Persönliches Nachschlagewerk für React, TypeScript und Backend-Themen. Themen werden per Button aufgerufen und als Liste oder Tabelle dargestellt.",
    liveUrl: "https://alex-lernen.netlify.app/",
    githubUrl: "https://github.com/Alexander-Bartmann/lernen",
    tech: ["React", "TypeScript", "Vite", "CSS"],
  },
];
