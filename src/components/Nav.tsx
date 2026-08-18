import { useLanguage } from "../i18n/LanguageContext";

const links = [
  { href: "#ueber", key: "nav.about" },
  { href: "#skills", key: "nav.skills" },
  { href: "#projekte", key: "nav.projects" },
  { href: "#kontakt", key: "nav.contact" },
] as const;

function Nav() {
  const { lang, setLang, t } = useLanguage();
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-line bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <div>
          <a href="#" className="font-display text-lg font-medium text-accent">
            AB
          </a>
        </div>
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-text"
            >
              {t(link.key)}
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setLang("de")}
            className={`cursor-pointer text-xs transition ${
              lang === "de" ? "text-accent" : "text-muted hover:text-text"
            }`}
          >
            DE
          </button>
          <button
            onClick={() => setLang("en")}
            className={`cursor-pointer text-xs transition ${
              lang === "en" ? "text-accent" : "text-muted hover:text-text"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
