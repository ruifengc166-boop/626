import Link from "next/link";
import { studioWorks } from "@/data/vacavaca-studio";

export const dynamic = "force-dynamic";

export default function VacaVacaWorksPage() {
  return (
    <main className="vv-content-page">
      <section className="vv-content-hero">
        <div className="vv-container">
          <p className="vacat-eyebrow">VACAT Award Archive</p>
          <h1>Browse selected VACAT award records.</h1>
          <p>These selected works are displayed as non-commercial award records. They demonstrate VACAT's curatorial standard, creator ecology and industry influence; they are not offered for reuse, adaptation, licensing or commercial production by VacaVaca Studio.</p>
        </div>
      </section>
      <section className="vv-container vv-section">
        <div className="mb-8 rounded-2xl border border-[rgba(202,254,97,0.16)] bg-[rgba(202,254,97,0.06)] p-5 text-sm leading-7 text-[var(--text3)]">
          Submitted VACAT works remain protected by their creators and are shown here only as award records. Any commercial project from VacaVaca Studio is produced separately through an original brief and authorized creators or client-owned/licensed assets.
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
                <div className="vv-card-actions">
                  <Link href={`/vacavaca/works/${work.slug}`} className="vv-btn-nav">View award record</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
