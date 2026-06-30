import Link from "next/link";
import { studioMetrics, studioWorks } from "@/data/vacavaca-studio";

export function VacaVacaSupport() {
  const featuredWorks = studioWorks.slice(0, 3);

  return (
    <section className="px-6 py-16">
      <div className="vacat-container">
        <div className="max-w-3xl">
          <p className="vacat-eyebrow mb-3">VACAT Award Proof</p>
          <h2 className="vacat-title text-3xl font-medium tracking-[-0.055em] md:text-5xl">
            A real award ecosystem behind the studio.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text3)] md:text-base">
            VACAT has collected thousands of AI visual submissions and selected awarded and finalist works across AI film, visual art, key visual, music visual and commercial creative. These works give VacaVaca Studio a visible reference system rather than a generic AI portfolio.
          </p>
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
            <p className="vacat-eyebrow mb-3">Representative Works</p>
            <h3 className="vacat-title text-2xl font-medium tracking-[-0.045em] md:text-4xl">Selected VACAT references</h3>
          </div>
          <div className="flex gap-3">
            <Link href="/vacavaca" className="vacat-button-secondary px-5 py-3 text-sm">About VACAT</Link>
            <Link href="/vacavaca/works" className="vacat-button-primary px-5 py-3 text-sm">View All Works</Link>
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
