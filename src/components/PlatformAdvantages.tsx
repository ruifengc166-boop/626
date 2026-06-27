const advantages = [
  {
    eyebrow: "Feed-ready look",
    title: "Ad creatives designed for the first three seconds.",
    body: "Strong opening visuals, clear product presence, readable captions and a direct call-to-action help the video feel ready for real social feeds.",
  },
  {
    eyebrow: "Fast review",
    title: "Move from product brief to reviewable creative quickly.",
    body: "When you need to validate an offer, a hook or a product angle, you can start with one focused short-form video instead of waiting for a full campaign cycle.",
  },
  {
    eyebrow: "Controlled scope",
    title: "Start with a focused ad, then add more versions when the direction is right.",
    body: "Begin with a single product ad or a small variation pack. Your team can review the direction first, then decide whether to expand it into more versions.",
  },
];

const outcomes = [
  "Product video ad",
  "Launch teaser",
  "Offer creative",
  "UGC-style hook",
  "App or SaaS demo",
  "Creative testing pack",
];

export function PlatformAdvantages() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-24">
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[28px] border border-white/[0.08] bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0.035)_42%,rgba(13,13,13,1)_100%)] p-7 md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/38">What you get</p>
          <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
            More ad creatives to review and test, without making every video from scratch.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/58">
            Share your product assets and campaign goal. We create short-form ad options that your team can review, test and improve into stronger campaign assets.
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
