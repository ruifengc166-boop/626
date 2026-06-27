const rows = [
  ["Speed", "Weeks of briefing, shooting and editing", "First draft option in 24-48h"],
  ["Cost", "High fixed cost before knowing what works", "Start small, then upgrade winners"],
  ["Creative testing", "One expensive hero film", "Multiple short-form variations for paid social"],
  ["Quality control", "Raw drafts need internal cleanup", "Human-fixed path for product, logo, captions and CTA"],
];

export function ConversionComparison() {
  return (
    <section className="border-y border-white/[0.08] bg-[#080808] px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Compared with traditional ad production</p>
          <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">
            Built for brands that need more ads, faster.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/60">
            The first question is not “which tool should I use?” It is “how quickly can I get a good-looking ad creative to test?”
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d0d0d]">
          <div className="grid grid-cols-[0.8fr_1fr_1fr] border-b border-white/[0.08] bg-white/[0.04] text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
            <div className="p-4">Need</div>
            <div className="p-4">Traditional production</div>
            <div className="p-4 text-white/72">AI Ad Remix</div>
          </div>
          {rows.map(([label, traditional, remix]) => (
            <div key={label} className="grid grid-cols-[0.8fr_1fr_1fr] border-b border-white/[0.06] text-sm last:border-b-0">
              <div className="p-4 font-medium text-white/70">{label}</div>
              <div className="p-4 text-white/42">{traditional}</div>
              <div className="p-4 text-white/78">{remix}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
