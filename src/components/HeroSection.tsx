import Link from "next/link";

export function HeroSection() {
  return (
    <section className="vacat-shell px-6 py-20 md:py-24">
      <div className="vacat-container relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(202,254,97,0.18)] bg-[rgba(202,254,97,0.06)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            VacaVaca Studio · Original AI Visual Production
          </div>
          <h1 className="vacat-title text-5xl font-semibold leading-[0.96] tracking-[-0.065em] md:text-6xl lg:text-7xl">
            Original AI visual production for brands, events and institutions.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text3)] md:text-lg">
            Commission campaign key visuals, short visual films and premium AI-assisted visual production from original briefs, approved materials and authorized contributors.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/start" className="vacat-button-primary px-6 py-3 text-sm">
              Submit Creative Brief
            </Link>
            <Link href="/templates" className="vacat-button-secondary px-6 py-3 text-sm">
              Browse Studio Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
