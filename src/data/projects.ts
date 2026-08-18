import taskmanager from "../assets/projects/p-taskmanager.webp";
import join from "../assets/projects/p-join.webp";
import polloloco from "../assets/projects/p-polloloco.webp";
import notizen from "../assets/projects/p-notizen.webp";
import pokedex from "../assets/projects/p-pokedex.webp";

export interface Project {
  id: string;
  title: string;
  image: string;
  team?: { de: string; en: string };
  description: { de: string; en: string };
  liveUrl?: string;
  githubUrl?: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: "taskmanager",
    title: "Task Manager",
    image: taskmanager,
    description: {
      de: "Fullstack-Anwendung zur Aufgabenverwaltung mit Benutzerkonten. Jeder Nutzer registriert sich, meldet sich an und verwaltet ausschließlich seine eigenen Tasks und Kategorien — die Zugriffsprüfung erfolgt serverseitig bei jedem Request.",
      en: "Fullstack application for task management with user accounts. Each user registers, logs in, and manages only their own tasks and categories — access is verified on the server side with every request.",
    },
    liveUrl: "https://task-manager.alexander-bartmann.de",
    githubUrl: "https://github.com/Alexander-Bartmann/task-manager-project",
    tech: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL"],
  },
  {
    id: "join",
    title: "Join",
    image: join,
    team: {
      de: "Zweierteam, 8 Wochen",
      en: "Team of two, 8 weeks",
    },
    description: {
      de:
        "Aufgabenverwaltung nach dem Kanban-Prinzip mit Drag & Drop, " +
        "Kontaktzuweisung und Firebase-Anbindung. Im Zweierteam entwickelt, " +
        "meine Bereiche waren Kontaktverwaltung und Layout-Komponenten.",
      en:
        "Task management based on the Kanban principle with drag and drop, " +
        "contact assignment, and Firebase integration. Developed as part of a two-person team, " +
        "my responsibilities included contact management and layout components.",
    },
    liveUrl: "https://join.alexander-bartmann.de",
    githubUrl: "https://github.com/Alexander-Bartmann/Join",
    tech: ["JavaScript", "Firebase", "HTML", "CSS"],
  },
  {
    id: "polloloco",
    title: "Pollo Loco",
    image: polloloco,
    description: {
      de: "2D-Jump-and-Run-Spiel mit HTML5 Canvas und objektorientiertem JavaScript. Pepe sammelt Münzen und Salsa-Flaschen, um den Endgegner zu besiegen.",
      en: "A 2D platformer game built with HTML5 Canvas and object-oriented JavaScript. Pepe collects coins and salsa bottles to defeat the final boss.",
    },
    liveUrl: "https://pollo-loco.alexander-bartmann.de",
    githubUrl: "https://github.com/Alexander-Bartmann/PolloLoco",
    tech: ["JavaScript", "Canvas", "HTML", "CSS"],
  },
  {
    id: "pokedex",
    title: "Pokedex",
    image: pokedex,
    description: {
      de: "Pokémon-Datenbank mit Anbindung an die PokéAPI. Übersicht mit Nachladen, Detailansicht mit Werten und Entwicklungsreihe, Suche.",
      en: "Pokémon database connected to the PokéAPI. Overview with load more, detailed view with stats and evolution lines, search.",
    },
    liveUrl: "https://pokedex.alexander-bartmann.de",
    githubUrl: "https://github.com/Alexander-Bartmann/Pokedex",
    tech: ["JavaScript", "PokeAPI", "HTML", "CSS"],
  },
  {
    id: "notizen",
    title: "Notizen",
    image: notizen,
    description: {
      de: "Persönliches Nachschlagewerk für React, TypeScript und Backend-Themen. Themen werden per Button aufgerufen und als Liste oder Tabelle dargestellt.",
      en: "A personal reference guide for React, TypeScript, and backend topics. Topics can be accessed via a button and displayed as a list or table.",
    },
    liveUrl: "https://notizen.alexander-bartmann.de",
    githubUrl: "https://github.com/Alexander-Bartmann/lernen",
    tech: ["React", "TypeScript", "Vite", "CSS"],
  },
];
