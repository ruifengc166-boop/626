import Link from "next/link";
import { vacaVacaSupport } from "@/data/vacavaca-support";

export function VacaVacaSupport() {
  return (
    <section className="border-y border-white/[0.08] bg-[#070707] px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/38">{vacaVacaSupport.eyebrow}</p>
            <h2 className="max-w-2xl text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
              {vacaVacaSupport.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/58">{vacaVacaSupport.description}</p>

            <div className="mt-7 grid gap-2">
              {vacaVacaSupport.positioning.map((item) => (
                <div key={item} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 text-sm leading-6 text-white/56">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/vacavaca" className="inline-flex justify-center rounded-sm bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85">
                Explore VacaVaca proof
              </Link>
              <Link href="/start" className="inline-flex justify-center rounded-sm border border-white/[0.12] bg-white/[0.06] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.1]">
                Submit product brief
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {vacaVacaSupport.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">{metric.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/42">{metric.label}</p>
                  <p className="mt-3 text-xs leading-5 text-white/42">{metric.note}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.035] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/38">Representative references</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {vacaVacaSupport.representativeWorks.slice(0, 8).map((work) => (
                  <div key={work.title} className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/34">{work.track}</p>
                    <h3 className="mt-3 text-base font-semibold tracking-[-0.03em] text-white">{work.title}</h3>
                    <p className="mt-3 text-xs leading-5 text-white/44">{work.signal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {vacaVacaSupport.workflowBridge.map((item) => (
            <div key={item.step} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/34">{item.step}</p>
              <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-xs leading-5 text-white/44">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
