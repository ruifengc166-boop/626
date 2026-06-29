import Link from "next/link";

const items = [
  ["Choose a VACAT reference", "Start from a representative work, creator lane or visual direction."],
  ["Submit the brief", "Send project goal, assets, format, budget and creative notes."],
  ["Studio scopes delivery", "VacaVaca Studio confirms route, timeline and price before production."],
];

export function NewAdCTA() {
  return (
    <section className="vacat-container px-0 pb-16">
      <div className="vacat-card grid gap-6 rounded-[28px] p-7 md:p-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="vacat-eyebrow">Commission a custom visual work</p>
          <h2 className="vacat-title mt-4 text-3xl font-medium md:text-5xl">Turn VacaVaca references into a scoped production brief.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text3)]">
            This is the commercial front desk: use VACAT works and creator lanes as trust and direction, then submit a real brief for visual creative production.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/start" className="vacat-button-primary px-6 py-3 text-sm">
              Submit Commission Brief
            </Link>
            <Link href="/templates" className="vacat-button-secondary px-6 py-3 text-sm">
              Browse Creative Menu
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
