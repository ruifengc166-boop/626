const points = [
  ["VACAT-backed references", "Representative award works guide the visual ambition and creative route."],
  ["Creator capability", "The brief can align with narrative, animation, commercial, visual-art or key-visual directions."],
  ["Client-ready delivery", "VacaVaca Studio turns the selected direction into a proposal, production plan and finished work."],
];

export function StudioIdentity() {
  return (
    <section className="vacat-container px-0 pb-16">
      <div className="vacat-card rounded-[28px] p-7 md:p-9">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="vacat-eyebrow">Who makes the work</p>
            <h2 className="vacat-title mt-5 text-3xl font-medium md:text-5xl">A client-facing creative studio built on the VACAT Award ecosystem.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--text3)]">
            VACAT is the award and reference system. VacaVaca Studio is the service that turns those references into commissioned visual creative work.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {points.map(([title, body]) => (
            <article key={title} className="vacat-card rounded-[22px] p-5">
              <h3 className="text-xl font-medium tracking-[-0.03em] text-[var(--text)]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text3)]">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
