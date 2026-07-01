import Link from "next/link";
import { originalVacatWorksUrl, studioWorks } from "@/data/vacavaca-studio";

export const dynamic = "force-dynamic";

export default function VacaVacaWorksPage() {
  return (
    <main className="vv-content-page">
      <section className="vv-content-hero">
        <div className="vv-container">
          <p className="vacat-eyebrow">VACAT Award Archive</p>
          <h1>Selected works from the VACAT Award.</h1>
          <p>Explore representative awarded and selected works from the VACAT ecosystem. The original VACAT works page is also linked below for full browsing.</p>
        </div>
      </section>
      <section className="vv-container vv-section">
        <div className="mb-8 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <a href={originalVacatWorksUrl} target="_blank" rel="noreferrer" className="vacat-link-card rounded-2xl p-6">
            <p className="tag">Original works page</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">Open the full VACAT works collection</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--text3)]">This opens the works page from the original VACAT site structure.</p>
          </a>
          <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.035)] p-6 text-sm leading-7 text-[var(--text3)]">
            Award records are presented for viewing and context. Studio commissions are handled separately through original briefs and approved materials.
          </div>
        </div>
        <div className="vv-video-grid">
          {studioWorks.map((work) => (
            <article key={work.slug} className="vv-video-card">
              <Link href={`/vacavaca/works/${work.slug}`} className="thumb">
                {work.previewVideoUrl ? (
                  <video src={work.previewVideoUrl} poster={work.posterUrl} className="h-full w-full object-cover" muted loop playsInline preload="metadata" />
                ) : (
                  <img src={work.posterUrl} alt={work.title} className="h-full w-full object-cover" />
                )}
              </Link>
              <div className="body">
                <h4>{work.title}<span className="vv-tag">{work.award}</span></h4>
                <div className="meta"><span>{work.creator}</span><span>{work.track}</span></div>
                <p className="mt-3 text-xs leading-5 text-[var(--text3)]">{work.summary}</p>
                <div className="vv-card-actions mt-3 flex flex-wrap gap-2">
                  <Link href={`/vacavaca/works/${work.slug}`} className="vv-btn-nav">View record</Link>
                  {work.sourceUrl ? (
                    <a href={work.sourceUrl} target="_blank" rel="noreferrer" className="vv-btn-nav">Open works page</a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
