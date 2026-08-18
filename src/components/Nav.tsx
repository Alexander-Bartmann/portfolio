const links = [
  { href: "#ueber", label: "Über mich" },
  { href: "#skills", label: "Skills" },
  { href: "#projekte", label: "Projekte" },
  { href: "#kontakt", label: "Kontakt" },
];

function Nav() {
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
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          <button className="cursor-pointer text-xs text-muted transition hover:text-text">
            DE
          </button>
          <button className="cursor-pointer text-xs text-muted transition hover:text-text">
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
