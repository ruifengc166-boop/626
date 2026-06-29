const items = [
  ["Creative direction", "VACAT reference, mood, story and format."],
  ["Visual production", "Film, key visual, poster or event screen assets."],
  ["Studio review", "Art direction, clarity, pacing and visual consistency."],
  ["Delivery pack", "Final files, thumbnails, notes and reusable references."],
];

export function OrderConfidence() {
  return (
    <section className="vacat-container px-0 py-16">
      <div className="vacat-card rounded-[28px] p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="vacat-eyebrow">What is included</p>
            <h2 className="vacat-title mt-4 text-3xl font-medium md:text-5xl">A visible creative package.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[var(--text3)]">You see the creative route, scope and deliverable before production starts.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {items.map(([title, body]) => (
            <article key={title} className="vacat-card rounded-[22px] p-5">
              <h3 className="text-lg font-medium tracking-[-0.03em] text-[var(--text)]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text3)]">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
