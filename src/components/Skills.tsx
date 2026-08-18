import { motion, useReducedMotion } from "motion/react";
import { reveal } from "../lib/motion";
import { useLanguage } from "../i18n/LanguageContext";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
  "Firebase",
  "Tailwind CSS",
  "SCSS",
  "HTML",
  "CSS",
  "Git",
  "Vite",
  "Zod",
  "JWT",
  "REST APIs",
];

const separator = "·";

function Skills() {
  const shouldReduce = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 md:py-32">
      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        {...reveal}
        className="mx-auto max-w-5xl px-6"
      >
        <p className="mb-6 font-mono text-xs tracking-[0.2em] text-muted uppercase">
          {t("skills.label")}
        </p>
        <h2 className="font-display text-4xl leading-tight font-medium tracking-tight md:text-5xl">
          {t("skills.heading")}
        </h2>
      </motion.div>

      <div className="relative mt-16 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex w-max gap-8"
          animate={shouldReduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span className="font-display text-2xl text-muted">{skill}</span>
              <span className="text-accent">{separator}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
