import Link from "next/link";
import { vacaVacaSupport } from "@/data/vacavaca-support";

export function VacaVacaSupport() {
  return (
    <section className="border-y border-white/[0.08] bg-[#070707] px-6 py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/38">{vacaVacaSupport.eyebrow}</p>
          <h2 className="max-w-2xl text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
            {vacaVacaSupport.headline}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/58">{vacaVacaSupport.description}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {vacaVacaSupport.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-white">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/42">{metric.label}</p>
                <p className="mt-3 text-xs leading-5 text-white/42">{metric.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/templates" className="inline-flex justify-center rounded-sm bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85">
              Choose a remix style
            </Link>
            <Link href="/start" className="inline-flex justify-center rounded-sm border border-white/[0.12] bg-white/[0.06] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.1]">
              Submit product brief
            </Link>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.035] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/38">What gets imported</p>
            <div className="mt-5 grid gap-3">
              {vacaVacaSupport.proofPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-white/[0.08] bg-black/20 p-4 text-sm leading-6 text-white/58">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {vacaVacaSupport.caseReferences.map((reference) => (
              <div key={reference.id} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/34">{reference.lane}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.03em] text-white">{reference.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/52">{reference.bestFor}</p>
                <p className="mt-4 rounded-xl border border-white/[0.08] bg-black/20 p-3 text-xs leading-5 text-white/42">{reference.signal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
