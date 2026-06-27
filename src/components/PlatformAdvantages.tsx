const advantages = [
  {
    eyebrow: "Speed",
    title: "Get usable ad creatives in days, not weeks.",
    body: "You do not need a full shoot, storyboard, agency brief and post-production cycle just to test a product angle. Start with one product and move fast.",
  },
  {
    eyebrow: "Cost",
    title: "Test more creatives before spending big on production.",
    body: "Use a lower-cost production path to validate hooks, product angles, captions and visual styles before committing to a larger campaign budget.",
  },
  {
    eyebrow: "Quality",
    title: "Better than raw AI output, cheaper than full custom production.",
    body: "We focus on the parts that make ads usable: product clarity, logo accuracy, caption readability, CTA, format, and final human correction when needed.",
  },
];

const outcomes = [
  "Short-form product ad",
  "Paid social test creative",
  "Multiple hook variations",
  "Launch-ready human-fixed option",
];

export function PlatformAdvantages() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-24">
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[28px] border border-white/[0.08] bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0.035)_42%,rgba(13,13,13,1)_100%)] p-7 md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Why customers order</p>
          <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
            The goal is not to use AI. The goal is to get better ad videos faster and cheaper.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/58">
            Most brands need more testable video ads, but traditional production is slow and expensive. We turn your product assets into short-form ad creatives that can be tested quickly.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item} className="rounded-2xl border border-white/[0.08] bg-black/25 p-4 text-sm text-white/64">
                <span className="mr-2 text-white">✓</span>{item}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5">
          {advantages.map((item) => (
            <article key={item.title} className="rounded-[24px] border border-white/[0.08] bg-[#0d0d0d] p-6 shadow-2xl shadow-black/20">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/34">{item.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/54">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
