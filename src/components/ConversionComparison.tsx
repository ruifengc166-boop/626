const rows = [
  ["Creative starting point", "Blank prompts and tool presets", "Ready-made ad masters with visual rhythm"],
  ["Product fit", "Trial and error", "Style-fit review before production"],
  ["Quality control", "Raw AI artifacts remain", "Human fix path for product, logo and captions"],
  ["Commercial use", "Need to organize assets yourself", "Structured order, quote, checklist and delivery link"],
];

export function ConversionComparison() {
  return (
    <section className="border-y border-white/[0.08] bg-[#080808] px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Compared with DIY AI video</p>
          <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">
            The difference is not the tool. It is the production path.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/60">
            Customers do not want another AI toy. They want a faster path from product asset to testable ad creative.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d0d0d]">
          <div className="grid grid-cols-[0.8fr_1fr_1fr] border-b border-white/[0.08] bg-white/[0.04] text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
            <div className="p-4">Decision</div>
            <div className="p-4">DIY AI tools</div>
            <div className="p-4 text-white/72">AI Ad Remix</div>
          </div>
          {rows.map(([label, diy, remix]) => (
            <div key={label} className="grid grid-cols-[0.8fr_1fr_1fr] border-b border-white/[0.06] text-sm last:border-b-0">
              <div className="p-4 font-medium text-white/70">{label}</div>
              <div className="p-4 text-white/42">{diy}</div>
              <div className="p-4 text-white/78">{remix}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
