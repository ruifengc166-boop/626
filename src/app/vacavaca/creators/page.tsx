import Link from "next/link";
import { studioCreators } from "@/data/vacavaca-studio";

export const dynamic = "force-dynamic";

export default function VacaVacaCreatorsPage() {
  return (
    <main className="vv-content-page">
      <section className="vv-content-hero">
        <div className="vv-container">
          <p className="vacat-eyebrow">Creator Roster</p>
          <h1>Creator capability lanes behind VacaVaca Studio.</h1>
          <p>The roster is organized by production capability rather than open bidding: narrative film, animation, commercial creative, visual art, poster systems, prompt battle and managed studio delivery.</p>
        </div>
      </section>
      <section className="vv-container vv-section">
        <div className="vv-creators-grid">
          {studioCreators.map((creator) => {
            const levelClass = creator.level === "Creator" ? "badge-creator" : creator.level === "Dreamer" ? "badge-dreamer" : "badge-explorer";
            return (
              <article key={creator.name} className="vv-creator-card">
                <div className="av">{creator.initials}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <h4>{creator.name}</h4>
                    <span style={{ fontSize: 11, color: "#cafe61" }}>● Studio lane</span>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text3)", margin: "6px 0" }}>
                    <span className={`badge-sm ${levelClass}`}>{creator.level}</span>
                    <span style={{ marginLeft: 8 }}>{creator.works} works</span>
                    <span style={{ marginLeft: 6 }}>{creator.likes} likes</span>
                  </div>
                  <p>{creator.focus}</p>
                  <div className="vv-card-actions">
                    <Link href={`/start?creatorFitNotes=${encodeURIComponent(creator.name)}`} className="vv-btn-reg">Reference this lane</Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
