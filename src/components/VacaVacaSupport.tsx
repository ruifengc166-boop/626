import Link from "next/link";
import { awardAuthority, studioWorks } from "@/data/vacavaca-studio";

export function VacaVacaSupport() {
  const featuredWorks = studioWorks.slice(0, 4);

  return (
    <section className="px-6 py-24">
      <div className="vacat-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="vacat-eyebrow mb-3">VACAT authority</p>
            <h2 className="vacat-title max-w-2xl text-3xl font-medium md:text-5xl">
              Representative works and award credibility are the studio's foundation.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text3)]">
              The homepage should not carry the entire VacaVaca archive. It highlights the most important works and authority signals, then sends users to focused pages for all works, creators and events.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/vacavaca/works" className="vacat-button-secondary px-6 py-3 text-sm">
                View Works
              </Link>
              <Link href="/vacavaca/creators" className="vacat-button-secondary px-6 py-3 text-sm">
                View Creators
              </Link>
              <Link href="/start" className="vacat-button-primary px-6 py-3 text-sm">
                Commission Work
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {featuredWorks.map((work) => (
                <div key={work.slug} className="vacat-card vacat-card-glow rounded-2xl p-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{work.track}</p>
                  <h3 className="mt-3 text-base font-semibold tracking-[-0.03em] text-[var(--text)]">{work.title}</h3>
                  <p className="mt-3 text-xs leading-5 text-[var(--text3)]">{work.summary}</p>
                </div>
              ))}
            </div>

            <div className="vacat-card rounded-[1.75rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Why it matters</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {awardAuthority.slice(0, 4).map((item) => (
                  <div key={item} className="rounded-2xl border border-[rgba(202,254,97,0.15)] bg-[rgba(202,254,97,0.06)] p-4">
                    <p className="text-xs leading-5 text-[var(--text3)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
