const points = [
  ["Creator-led", "Built by AI video creators who understand short-form visuals."],
  ["Ad-reviewed", "Checked for product clarity, logo, captions and CTA."],
  ["Lean by design", "Start with one direction before a bigger campaign."],
];

export function StudioIdentity() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-16">
      <div className="rounded-[28px] border border-white/[0.08] bg-[radial-gradient(circle_at_25%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0.035)_42%,rgba(13,13,13,1)_100%)] p-7 md:p-9">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Who makes your ad</p>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">A creator-led product ad studio.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/56">
            We turn product assets into short-form ad directions for social testing, with human review before delivery.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {points.map(([title, body]) => (
            <article key={title} className="rounded-[22px] border border-white/[0.08] bg-black/20 p-5">
              <h3 className="text-xl font-medium tracking-[-0.03em] text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
