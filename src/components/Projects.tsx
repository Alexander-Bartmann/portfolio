import { motion, useReducedMotion } from "motion/react";
import { reveal } from "../lib/motion";
import { projects } from "../data/projects";

function Projects() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="projekte" className="py-20 md:py-32">
      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        {...reveal}
        className="mx-auto max-w-5xl px-6"
      >
        <p className="mb-6 font-mono text-xs tracking-[0.2em] text-muted uppercase">
          Projekte
        </p>

        <h2 className="font-display text-4xl leading-tight font-medium tracking-tight md:text-5xl">
          Woran ich gearbeitet habe
        </h2>

        <div className="mt-16 flex flex-col gap-24">
          {projects.map((project, index) => (
            <article key={project.id} className="flex flex-col gap-6">
              <h3 className="font-display text-2xl font-medium text-accent">
                {project.title}
              </h3>

              <div className="flex flex-col gap-8 md:flex-row md:items-center">
                <div className="flex flex-1 flex-col gap-5">
                  {project.team && (
                    <p className="font-mono text-xs tracking-wider text-muted uppercase">
                      {project.team}
                    </p>
                  )}

                  <p className="leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-line px-2 py-1 text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-accent px-4 py-2 text-sm
                                   font-medium text-accent transition
                                   hover:bg-accent hover:text-bg"
                      >
                        Live ansehen
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-line px-4 py-2 text-sm
                                   text-muted transition hover:border-text hover:text-text"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div
                  className={`flex-1 ${
                    index % 2 === 1 ? "md:order-first" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`Screenshot von ${project.title}`}
                    loading="lazy"
                    className="w-full rounded-lg border border-line"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
