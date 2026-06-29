const points = [
  ["VACAT-backed references", "Representative works guide the visual ambition and creative route."],
  ["Creator-lane scoping", "The studio maps briefs to narrative, animation, commercial, visual-art or poster directions."],
  ["Managed production", "Every commission is scoped, reviewed and delivered through VacaVaca Studio."],
];

export function StudioIdentity() {
  return (
    <section className="vacat-container px-0 pb-16">
      <div className="vacat-card rounded-[28px] p-7 md:p-9">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="vacat-eyebrow">Who makes the work</p>
            <h2 className="vacat-title mt-5 text-3xl font-medium md:text-5xl">A visual creative studio grown from the VacaVaca creator ecosystem.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[var(--text3)]">
            VacaVaca Studio connects commissioned visual projects with the taste, reference works and creator capability built through VACAT.
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
