import { listCases } from "@/lib/cases";

export async function CasePreview() {
  const cases = (await listCases({ publicOnly: true })).slice(0, 3);

  if (!cases.length) return null;

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">From Style to Your Product</h2>
        <p className="mt-4 text-base leading-7 text-white/60">
          The video style stays clear. Your product, brand, captions and CTA change.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cases.map((caseItem) => (
          <article key={caseItem.id} className="rounded-[24px] border border-white/[0.08] bg-[#0d0d0d] p-4">
            <div className="rounded-[18px] border border-white/[0.06] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),rgba(255,255,255,0.025)_45%,rgba(0,0,0,0)_100%)] p-4">
              <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#151515]">
                {caseItem.beforeAssetUrl ? (
                  <img src={caseItem.beforeAssetUrl} alt={`${caseItem.title} original style`} className="aspect-[16/10] h-full w-full object-cover opacity-80" />
                ) : (
                  <div className="aspect-[16/10] bg-white/[0.04]" />
                )}
                <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                  Original Style
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-xs text-white/80">
                  {caseItem.templateId}
                </div>
              </div>
              <div className="mx-auto my-4 flex h-8 w-px items-center justify-center bg-white/[0.12]">
                <span className="h-2 w-2 rounded-full bg-white/40" />
              </div>
              <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#111]">
                {caseItem.afterVideoUrl ? (
                  <video src={caseItem.afterVideoUrl} poster={caseItem.thumbnailUrl} muted autoPlay loop playsInline className="aspect-[16/10] h-full w-full object-cover" />
                ) : (
                  <img src={caseItem.thumbnailUrl} alt={`${caseItem.title} adapted ad`} className="aspect-[16/10] h-full w-full object-cover" />
                )}
                <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                  Adapted Product Ad
                </div>
              </div>
            </div>
            <h3 className="mt-5 text-lg font-medium tracking-tight text-white">{caseItem.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/54">{caseItem.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
