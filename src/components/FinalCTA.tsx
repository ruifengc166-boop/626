import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="px-6 py-24">
      <div className="vacat-container vacat-card rounded-[24px] px-6 py-16 text-center md:px-12">
        <p className="vacat-eyebrow">Start with a reference</p>
        <h2 className="vacat-title mt-4 text-4xl font-medium md:text-6xl">Commission a VacaVaca Studio visual work.</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[var(--text3)]">
          Choose a VACAT-inspired direction, send a visual brief and let the studio confirm the production route.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/templates" className="vacat-button-secondary px-6 py-3 text-sm">
            Browse Creative Directions
          </Link>
          <Link href="/start" className="vacat-button-primary px-6 py-3 text-sm">
            Submit Creative Brief
          </Link>
        </div>
      </div>
    </section>
  );
}
