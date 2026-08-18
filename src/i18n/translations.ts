export const translations = {
  de: {
    "nav.about": "Über mich",
    "nav.skills": "Skills",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",

    "hero.role": "Frontend & Fullstack Developer",
    "hero.intro":
      "Vom Außendienst in die Entwicklung — weil mich mehr interessiert hat, wie Dinge im Web funktionieren, als sie nur zu benutzen. Heute baue ich Anwendungen mit React, TypeScript und Node.",
    "hero.cta.projects": "Projekte ansehen",
    "hero.cta.contact": "Kontakt",
    "about.label": "Über mich",
    "about.heading": "Vom Verkaufen zum Bauen",
    "about.p1":
      "Einige Jahre Einzelhandel und Außendienst — solide, aber nie ganz erfüllend. Der Anstoß kam von zwei Seiten: Spiele haben mich schon immer beschäftigt, irgendwann weniger als Spieler und mehr mit der Frage, wie man sowas eigentlich baut. Und während Corona wollte ich wissen, was hinter den Seiten steckt, auf denen ich täglich unterwegs war.",
    "about.p2":
      "Nach einigen kleineren Kursen habe ich mich für die Weiterbildung an der Developer Akademie entschieden. Was mich seitdem am meisten interessiert, ist das",
    "about.why": "Warum",
    "about.p3":
      "warum eine Anwendung so aufgebaut ist, wie sie ist, wo ihre Schwachstellen liegen und was passiert, wenn jemand sie gezielt sucht.",
    "about.p4":
      "Heute baue ich Anwendungen von der Datenbank bis zur Oberfläche und bringe sie online. Aktuell arbeite ich mich tiefer ins Backend ein und suche eine Position, in der ich das im Team weiterentwickeln kann.",
    "contact.label": "Kontakt",
    "contact.heading": "Schreib mir",
    "contact.intro":
      "Ob konkrete Stelle, Rückfrage zu einem Projekt oder einfach Austausch — schreib mir gern. Ich melde mich zeitnah zurück.",
    "contact.name": "Name",
    "contact.email": "E-Mail",
    "contact.message": "Nachricht",
    "contact.submit": "Absenden",
    "contact.sending": "Wird gesendet...",
    "contact.success": "Danke, deine Nachricht ist angekommen.",
    "contact.error":
      "Da ist etwas schiefgelaufen. Schreib mir gern direkt per Mail.",
    "contact.errorName": "Bitte gib deinen Namen an.",
    "contact.errorEmail": "Bitte gib deine E-Mail-Adresse an.",
    "contact.errorMessage": "Bitte schreib mir eine Nachricht.",
    "skills.label": "Skills",
    "skills.heading": "Womit ich arbeite",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
    "project.label": "Projekte",
    "project.heading": "Woran ich gearbeitet habe",
    "project.link": "Live ansehen",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.role": "Frontend & Fullstack Developer",
    "hero.intro":
      "From field sales into development — because I was more interested in how things on the web work than in just using them. Today I build applications with React, TypeScript and Node.",
    "hero.cta.projects": "View projects",
    "hero.cta.contact": "Get in touch",
    "about.label": "About me",
    "about.heading": "From selling to building",
    "about.p1":
      "A few years in retail and sales—solid, but never entirely fulfilling. The impetus came from two directions: Games have always fascinated me—at some point, less as a player and more in terms of how you actually build something like that. And during the pandemic, I wanted to know what was behind the websites I visited every day.",
    "about.p2":
      "After taking a few short courses, I decided to pursue further training at the Developer Academy. What has interested me the most since then is the",
    "about.why": "Why",
    "about.p3":
      "why an application is structured the way it is, where its vulnerabilities lie, and what happens if someone specifically targets them.",
    "about.p4":
      "Today, I build applications from the database to the user interface and deploy them online. Currently, I'm diving deeper into backend development and looking for a position where I can continue to develop these skills as part of a team.",
    "contact.label": "Contact",
    "contact.heading": "Write to me",
    "contact.intro":
      "Whether it's about a specific job opening, a question about a project, or just a chat—feel free to reach out. I'll get back to you as soon as possible.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Send",
    "contact.sending": "Sending...",
    "contact.success": "Thank you, I received your message.",
    "contact.error": "Something went wrong. Feel free to email me directly.",
    "contact.errorName": "Please enter your name.",
    "contact.errorEmail": "Please enter your email address.",
    "contact.errorMessage": "Please write me a message.",
    "skills.label": "Skills",
    "skills.heading": "What I work with",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy Policy",
    "project.label": "Projects",
    "project.heading": "What I've been working on",
    "project.link": "Live Demo",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)["de"];
