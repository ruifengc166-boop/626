import { listCases } from "@/lib/cases";

export async function CasePreview() {
  const cases = (await listCases({ publicOnly: true })).slice(0, 3);

  if (!cases.length) return null;

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/38">VACAVACA visual proof</p>
          <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">Use cases as style references before production.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-white/42">Concept samples and selected visuals help brands understand taste, format and remix direction before submitting a brief.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cases.map((caseItem) => (
          <article key={caseItem.id} className="rounded-[24px] border border-white/[0.08] bg-[#0d0d0d] p-4">
            <div className="rounded-[18px] border border-white/[0.06] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),rgba(255,255,255,0.025)_45%,rgba(0,0,0,0)_100%)] p-4">
              <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#151515]">
                {caseItem.beforeAssetUrl ? (
                  <img src={caseItem.beforeAssetUrl} alt={`${caseItem.title} style preview`} className="aspect-[16/10] h-full w-full object-cover opacity-80" />
                ) : (
                  <div className="aspect-[16/10] bg-white/[0.04]" />
                )}
                <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                  Style Proof
                </div>
              </div>
              <div className="mx-auto my-4 flex h-8 w-px items-center justify-center bg-white/[0.12]">
                <span className="h-2 w-2 rounded-full bg-white/40" />
              </div>
              <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#111]">
                {caseItem.afterVideoUrl ? (
                  <video src={caseItem.afterVideoUrl} poster={caseItem.thumbnailUrl} muted autoPlay loop playsInline className="aspect-[16/10] h-full w-full object-cover" />
                ) : (
                  <img src={caseItem.thumbnailUrl} alt={`${caseItem.title} sample adaptation`} className="aspect-[16/10] h-full w-full object-cover" />
                )}
                <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                  Remix Sample
                </div>
              </div>
            </div>
            <h3 className="mt-5 text-lg font-medium tracking-tight text-white">{caseItem.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
