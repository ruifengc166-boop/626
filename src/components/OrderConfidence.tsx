const items = [
  ["See the style", "Preview the ad look before you start."],
  ["Know the scope", "Clear package, price and deliverable."],
  ["Human check", "Product, logo, captions and CTA reviewed."],
  ["Delivery file", "Short-form video ready for your team."],
];

export function OrderConfidence() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16">
      <div className="rounded-[28px] border border-white/[0.08] bg-[#0d0d0d] p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Before you order</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">No black box.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/46">You choose the look, send the assets, and know what will be delivered.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {items.map(([title, body]) => (
            <article key={title} className="rounded-[22px] border border-white/[0.08] bg-white/[0.035] p-5">
              <h3 className="text-lg font-medium tracking-[-0.03em] text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
