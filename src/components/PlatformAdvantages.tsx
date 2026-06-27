const advantages = [
  ["Looks ready", "Clean visuals, clear product, readable CTA."],
  ["Moves fast", "From product brief to reviewable draft."],
  ["Scales well", "Start with one ad. Add versions later."],
];

const outcomes = ["Product ad", "Launch teaser", "Offer creative", "UGC hook", "App demo", "Testing pack"];

export function PlatformAdvantages() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-24">
      <div className="rounded-[28px] border border-white/[0.08] bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0.035)_42%,rgba(13,13,13,1)_100%)] p-7 md:p-9">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/38">What you get</p>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">More ads to test. Less work to start.</h2>
          </div>
          <div className="flex max-w-md flex-wrap gap-2">
            {outcomes.map((item) => (
              <span key={item} className="rounded-full border border-white/[0.08] bg-black/25 px-3 py-1.5 text-xs text-white/50">{item}</span>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {advantages.map(([title, body]) => (
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
