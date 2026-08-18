import { motion, useReducedMotion } from "motion/react";
import { reveal } from "../lib/motion";
import alex from "../assets/alex.webp";
import { useLanguage } from "../i18n/LanguageContext";

function About() {
  const shouldReduce = useReducedMotion();

  const { t } = useLanguage();
  return (
    <section id="ueber" className="py-20 md:py-32">
      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        {...reveal}
        className="mx-auto max-w-5xl px-6"
      >
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="mb-6 font-mono text-xs tracking-[0.2em] text-muted uppercase">
              {t("about.label")}
            </p>

            <h2 className="font-display text-4xl leading-tight font-medium tracking-tight md:text-5xl">
              {t("about.heading")}
            </h2>

            <div className="mt-10 grid gap-6 text-lg leading-relaxed text-muted">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <span className="text-text">{t("about.why")}</span>{" "}
              {t("about.p3")}
              <p>{t("about.p4")}</p>
            </div>
          </div>

          <div className="relative order-first md:order-last ">
            <div className="absolute inset-0 m-auto h-64 w-64 rounded-full bg-accent/10 blur-3xl md:h-80 md:w-80" />
            <img
              src={alex}
              alt="Alexander Bartmann"
              className=" relative mx-auto w-56 md:w-full mask-[linear-gradient(to_bottom,black_65%,transparent),linear-gradient(to_left,transparent,black_15%)] mask-intersect"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
