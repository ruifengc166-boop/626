import Link from "next/link";

export function HeroSection() {
  return (
    <section className="vacat-shell px-6 py-20 md:py-24">
      <div className="vacat-container relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(202,254,97,0.18)] bg-[rgba(202,254,97,0.06)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            VacaVaca Studio · Built by the team behind the VACAT Award
          </div>
          <h1 className="vacat-title text-5xl font-semibold leading-[0.96] tracking-[-0.065em] md:text-6xl lg:text-7xl">
            Original AI visual production for brands, events and institutions.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text3)] md:text-lg">
            VacaVaca Studio creates new visual work from original briefs, authorized creators and client-owned or licensed materials. The VACAT Award provides the industry context, curatorial standard and creator network behind the studio.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/start" className="vacat-button-primary px-6 py-3 text-sm">
              Submit Creative Brief
            </Link>
            <Link href="/vacavaca" className="vacat-button-secondary px-6 py-3 text-sm">
              Explore VACAT Award
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
