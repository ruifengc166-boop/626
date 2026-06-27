const advantages = [
  {
    eyebrow: "No blank prompt",
    title: "Start from a finished ad structure, not an empty AI tool.",
    body: "Every style already has rhythm, framing, caption logic and CTA placement. Your product changes; the ad system stays clear.",
  },
  {
    eyebrow: "Fit first",
    title: "We review whether your product actually fits the selected style.",
    body: "If the style is wrong for your product, we recommend a better master before production. That saves wasted AI runs and ugly drafts.",
  },
  {
    eyebrow: "Human fixed",
    title: "AI speed, human correction when quality matters.",
    body: "For launch-ready ads, we check product accuracy, logo, captions, visual artifacts and delivery format instead of leaving you with raw AI output.",
  },
];

const outcomes = [
  "Pick a style in minutes",
  "Send product link, logo and selling points",
  "Get a quote and production path",
  "Receive a short-form ad ready for testing",
];

export function PlatformAdvantages() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-24">
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[28px] border border-white/[0.08] bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0.035)_42%,rgba(13,13,13,1)_100%)] p-7 md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Why order here</p>
          <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
            You are not buying a template. You are buying fewer failed AI attempts.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/58">
            Most teams lose time testing prompts, fixing ugly details, and guessing which visual direction fits the product. AI Ad Remix turns that uncertainty into a managed ad-production flow.
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
