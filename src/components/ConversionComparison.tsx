const options = [
  ["One ad", "A focused product video."],
  ["More angles", "Hooks, captions, versions."],
  ["More polish", "Cleaner logo, product, CTA."],
  ["Bigger launch", "Premium campaign asset."],
];

export function ConversionComparison() {
  return (
    <section className="border-y border-white/[0.08] bg-[#080808] px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/38">By campaign need</p>
            <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">Start where you are.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/42">Choose one ad, a test pack, or a premium launch asset.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {options.map(([title, body]) => (
            <article key={title} className="rounded-[24px] border border-white/[0.08] bg-[#0d0d0d] p-5">
              <h3 className="text-xl font-medium tracking-[-0.03em] text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
