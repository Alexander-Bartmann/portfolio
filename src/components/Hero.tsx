import DotGrid from "./DotGrid";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <DotGrid />

      <div className="relative mx-auto w-full max-w-5xl px-6">
        <p className="mb-6 font-mono text-xs tracking-[0.2em] text-muted uppercase">
          Frontend & Fullstack Developer
        </p>

        <h1 className="font-display text-6xl leading-[0.95] font-medium tracking-tight sm:text-7xl md:text-8xl">
          Alexander
          <br />
          <span className="text-accent">Bartmann</span>
        </h1>

        <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
          Vom Außendienst in die Entwicklung — weil mich mehr interessiert hat,
          wie Dinge im Web funktionieren, als sie nur zu benutzen. Heute baue
          ich Anwendungen mit React, TypeScript und Node.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projekte"
            className="rounded-md border border-accent px-5 py-2.5 text-sm font-medium
             text-accent transition hover:bg-accent hover:text-bg"
          >
            Projekte ansehen
          </a>
          <a
            href="#kontakt"
            className="rounded-md border border-line px-5 py-2.5 text-sm text-muted
             transition hover:border-text hover:text-text"
          >
            Kontakt
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
