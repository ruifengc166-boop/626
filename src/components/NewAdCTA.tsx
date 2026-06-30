import Link from "next/link";

const items = [
  ["Choose a reference", "Start from an award work, creator lane or international visual direction."],
  ["Submit the brief", "Send project goal, assets, format, budget and creative notes."],
  ["Receive a clear proposal", "VacaVaca Studio replies with the creative route, timeline and quote before production."],
];

export function NewAdCTA() {
  return (
    <section className="vacat-container px-0 pb-16">
      <div className="vacat-card grid gap-6 rounded-[28px] p-7 md:p-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="vacat-eyebrow">Commission custom AI visual work</p>
          <h2 className="vacat-title mt-4 text-3xl font-medium md:text-5xl">Turn a VACAT reference into a VacaVaca Studio project.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text3)]">
            VACAT provides the award-backed visual references. VacaVaca Studio turns those references into commissioned works for brands, products, events, institutions and IP projects.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/start" className="vacat-button-primary px-6 py-3 text-sm">
              Submit Creative Brief
            </Link>
            <Link href="/templates" className="vacat-button-secondary px-6 py-3 text-sm">
              Browse Creative Directions
            </Link>
          </div>
        </div>
        <div className="grid gap-3">
          {items.map(([title, body]) => (
            <div key={title} className="vacat-card rounded-[22px] p-5">
              <p className="text-lg font-medium tracking-[-0.03em] text-[var(--text)]">{title}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text3)]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
