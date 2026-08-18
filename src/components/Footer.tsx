import { useState } from "react";
import { datenschutz, impressum, type LegalDoc } from "../data/legal";
import LegalModal from "./LegalModal";

function Footer() {
  const [legalDoc, setLegalDoc] = useState<LegalDoc | null>(null);
  return (
    <footer className="border-t border-line">
      <div
        className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8
                      md:flex-row md:items-center md:justify-between"
      >
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Alexander Bartmann
        </p>

        <div className="flex flex-wrap gap-6 text-sm text-muted">
          <button
            onClick={() => setLegalDoc(impressum)}
            className="cursor-pointer transition hover:text-accent"
          >
            Impressum
          </button>
          <button
            onClick={() => setLegalDoc(datenschutz)}
            className="cursor-pointer transition hover:text-accent"
          >
            Datenschutz
          </button>

          <a
            href="https://github.com/Alexander-Bartmann"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/alex-bartmann-965971255/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
      {legalDoc && (
        <LegalModal doc={legalDoc} onClose={() => setLegalDoc(null)} />
      )}
    </footer>
  );
}

export default Footer;
