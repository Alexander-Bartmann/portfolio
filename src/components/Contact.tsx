import { motion, useReducedMotion } from "motion/react";
import { reveal } from "../lib/motion";
import { useState } from "react";

const inputClass =
  "w-full rounded-md border border-line bg-surface px-3 py-2 text-sm " +
  "placeholder:text-muted/60 focus:border-accent focus:outline-none " +
  "focus:ring-1 focus:ring-accent";

function Contact() {
  const shouldReduce = useReducedMotion();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nachricht, setNachricht] = useState("");
  const [fehler, setFehler] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFehler("");

    if (!name.trim()) {
      setFehler("Bitte gib deinen Namen an.");
      return;
    }
    if (!email.trim()) {
      setFehler("Bitte gib deine E-Mail-Adresse an.");
      return;
    }
    if (!nachricht.trim()) {
      setFehler("Bitte schreib mir eine Nachricht.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "kontakt",
          name,
          email,
          nachricht,
        }).toString(),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setNachricht("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="py-20 md:py-32">
      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        {...reveal}
        className="mx-auto max-w-5xl px-6"
      >
        <p className="mb-6 font-mono text-xs tracking-[0.2em] text-muted uppercase">
          Kontakt
        </p>

        <h2 className="font-display text-4xl leading-tight font-medium tracking-tight md:text-5xl">
          Schreib mir
        </h2>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div>
            <p className="leading-relaxed text-muted">
              Ob konkrete Stelle, Rückfrage zu einem Projekt oder einfach
              Austausch — schreib mir gern. Ich melde mich zeitnah zurück.
            </p>

            <a
              href="mailto:alexander-bartmann@outlook.de"
              className="mt-6 inline-block text-accent transition hover:underline"
            >
              alexander-bartmann@outlook.de
            </a>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm text-muted"
              >
                E-Mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="nachricht"
                className="mb-1.5 block text-sm text-muted"
              >
                Nachricht
              </label>
              <textarea
                id="nachricht"
                name="nachricht"
                rows={5}
                value={nachricht}
                onChange={(e) => setNachricht(e.target.value)}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="cursor-pointer self-start rounded-md border border-accent
                         px-5 py-2.5 text-sm font-medium text-accent transition
                         hover:bg-accent hover:text-bg disabled:opacity-50"
            >
              {status === "sending" ? "Wird gesendet..." : "Absenden"}
            </button>

            {fehler && <p className="text-sm text-red-400">{fehler}</p>}
            {status === "success" && (
              <p className="text-sm text-green-400">
                Danke, deine Nachricht ist angekommen.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Da ist etwas schiefgelaufen. Schreib mir gern direkt per Mail.
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
