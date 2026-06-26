const cases = [
  ["Beauty Product Adaptation", "Original Style", "Adapted Product Ad"],
  ["App Tool Adaptation", "Original Style", "Adapted Product Ad"],
  ["Game Wishlist Adaptation", "Original Style", "Adapted Product Ad"],
];

export function CasePreview() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">From Style to Your Product</h2>
        <p className="mt-4 text-base leading-7 text-white/60">
          The video style stays clear. Your product, brand, captions and CTA change.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cases.map(([title, original, adapted]) => (
          <article key={title} className="rounded-[24px] border border-white/[0.08] bg-[#0d0d0d] p-4">
            <div className="rounded-[18px] border border-white/[0.06] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),rgba(255,255,255,0.025)_45%,rgba(0,0,0,0)_100%)] p-4">
              <div className="aspect-[16/10] rounded-xl bg-[#151515] p-4 text-xs font-medium uppercase tracking-[0.2em] text-white/38">
                {original}
              </div>
              <div className="mx-auto my-4 h-8 w-px bg-white/[0.12]" />
              <div className="aspect-[16/10] rounded-xl border border-white/[0.08] bg-[#111] p-4 text-xs font-medium uppercase tracking-[0.2em] text-white/46">
                {adapted}
              </div>
            </div>
            <h3 className="mt-5 text-lg font-medium tracking-tight text-white">{title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
