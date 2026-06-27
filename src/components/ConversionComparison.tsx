const rows = [
  ["Need one strong ad quickly", "Start with a single focused product video", "Best for launch pages, paid social tests and new offers"],
  ["Need more creative options", "Create several hooks or caption versions", "Best for teams comparing different angles"],
  ["Need a cleaner brand look", "Add human polish for product, logo and captions", "Best when the ad will face real customers"],
  ["Need a bigger campaign asset", "Upgrade the strongest direction into a premium version", "Best for launches, apps, games and visual campaigns"],
];

export function ConversionComparison() {
  return (
    <section className="border-y border-white/[0.08] bg-[#080808] px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Choose by campaign need</p>
          <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">
            Start with the version your campaign needs right now.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/60">
            Whether you need one polished product ad or a few creative directions to compare, the order flow starts from your product and campaign goal.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d0d0d]">
          <div className="grid grid-cols-[0.95fr_1fr_1fr] border-b border-white/[0.08] bg-white/[0.04] text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
            <div className="p-4">Customer need</div>
            <div className="p-4">Recommended order</div>
            <div className="p-4 text-white/72">Best fit</div>
          </div>
          {rows.map(([label, order, fit]) => (
            <div key={label} className="grid grid-cols-[0.95fr_1fr_1fr] border-b border-white/[0.06] text-sm last:border-b-0">
              <div className="p-4 font-medium text-white/70">{label}</div>
              <div className="p-4 text-white/58">{order}</div>
              <div className="p-4 text-white/78">{fit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
