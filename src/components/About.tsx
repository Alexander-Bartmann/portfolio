import { motion, useReducedMotion } from "motion/react";
import { reveal } from "../lib/motion";

function About() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="ueber" className="py-32">
      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        {...reveal}
        className="mx-auto max-w-5xl px-6"
      >
        <div>
          <p className="mb-6 font-mono text-xs tracking-[0.2em] text-muted uppercase">
            Über mich
          </p>

          <h2 className="font-display text-4xl leading-tight font-medium tracking-tight md:text-5xl">
            Vom Verkaufen zum Bauen
          </h2>

          <div className="mt-10 grid gap-6 text-lg leading-relaxed text-muted md:max-w-2xl">
            <p>
              Einige Jahre Einzelhandel und Außendienst — solide, aber nie ganz
              erfüllend. Der Anstoß kam von zwei Seiten: Spiele haben mich schon
              immer beschäftigt, irgendwann weniger als Spieler und mehr mit der
              Frage, wie man sowas eigentlich baut. Und während Corona wollte
              ich wissen, was hinter den Seiten steckt, auf denen ich täglich
              unterwegs war.
            </p>

            <p>
              Nach einigen kleineren Kursen habe ich mich für die Weiterbildung
              an der Developer Akademie entschieden. Was mich seitdem am meisten
              interessiert, ist das <span className="text-text">Warum</span> —
              warum eine Anwendung so aufgebaut ist, wie sie ist, wo ihre
              Schwachstellen liegen und was passiert, wenn jemand sie gezielt
              sucht.
            </p>

            <p>
              Heute baue ich Anwendungen von der Datenbank bis zur Oberfläche
              und bringe sie online. Aktuell arbeite ich mich tiefer ins Backend
              ein und suche eine Position, in der ich das im Team
              weiterentwickeln kann.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
