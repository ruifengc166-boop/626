import Link from "next/link";
import { studioMetrics, studioWorks } from "@/data/vacavaca-studio";

const supportLayers = [
  {
    title: "Curatorial standard",
    body: "VACAT gives the team a long-term standard for evaluating AI visual quality, narrative clarity and production ambition.",
  },
  {
    title: "Creator network",
    body: "The award connects creators, judges and production talent. Any commercial collaboration is handled through separate authorization.",
  },
  {
    title: "Production insight",
    body: "Award tracks and review experience help shape practical service categories, budgets, formats and production routes.",
  },
  {
    title: "Industry credibility",
    body: "Submissions, universities, jury members, events and research work give the studio a stronger foundation than a standard AI production vendor.",
  },
];

export function VacaVacaSupport() {
  const featuredWorks = studioWorks.slice(0, 3);

  return (
    <section className="px-6 py-16">
      <div className="vacat-container">
        <div className="max-w-3xl">
          <p className="vacat-eyebrow mb-3">VACAT Award Foundation</p>
          <h2 className="vacat-title text-3xl font-medium tracking-[-0.055em] md:text-5xl">
            Award credibility behind original studio production.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text3)] md:text-base">
            VACAT supports VacaVaca Studio through industry trust, curatorial standards, a creator network and production insight. Award submissions remain protected records; Studio projects are created separately from original briefs and properly authorized materials.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {supportLayers.map((layer) => (
            <div key={layer.title} className="rounded-2xl border border-[rgba(202,254,97,0.14)] bg-[rgba(255,255,255,0.035)] p-5">
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">{layer.title}</h3>
              <p className="mt-3 text-xs leading-6 text-[var(--text3)]">{layer.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {studioMetrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-[rgba(202,254,97,0.14)] bg-[rgba(255,255,255,0.035)] p-4">
              <p className="text-2xl font-semibold tracking-[-0.045em] text-[var(--text)]">{metric.value}</p>
              <p className="mt-1 text-[11px] uppercase leading-5 tracking-[0.14em] text-[var(--text3)]">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="vacat-eyebrow mb-3">Award Archive</p>
            <h3 className="vacat-title text-2xl font-medium tracking-[-0.045em] md:text-4xl">Selected award records</h3>
          </div>
          <div className="flex gap-3">
            <Link href="/vacavaca" className="vacat-button-secondary px-5 py-3 text-sm">About VACAT</Link>
            <Link href="/vacavaca/works" className="vacat-button-primary px-5 py-3 text-sm">View Award Archive</Link>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featuredWorks.map((work) => (
            <Link key={work.slug} href={`/vacavaca/works/${work.slug}`} className="vacat-card overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-[rgba(202,254,97,0.28)]">
              <div className="aspect-video overflow-hidden video-shell">
                {work.previewVideoUrl ? (
                  <video src={work.previewVideoUrl} poster={work.posterUrl} className="h-full w-full object-cover" muted loop playsInline preload="metadata" />
                ) : (
                  <img src={work.posterUrl} alt={work.title} className="h-full w-full object-cover" />
                )}
              </div>
              <div className="p-4">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">{work.track}</p>
                <h4 className="mt-2 text-base font-semibold tracking-[-0.03em] text-[var(--text)]">{work.title}</h4>
                <p className="mt-3 line-clamp-2 text-xs leading-5 text-[var(--text3)]">{work.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
