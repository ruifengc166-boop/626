import { studioEvents } from "@/data/vacavaca-studio";

export const dynamic = "force-dynamic";

export default function VacaVacaEventsPage() {
  return (
    <main className="vv-content-page">
      <section className="vv-content-hero">
        <div className="vv-container">
          <p className="vacat-eyebrow">Events</p>
          <h1>Community activation and industry proof.</h1>
          <p>VACAT events turn works and creators into a visible ecosystem: award ceremony, project signing, technology workshop, Battle Day and exhibition.</p>
        </div>
      </section>
      <section className="vv-container vv-section">
        {studioEvents.map((event) => (
          <div key={event.title} className="vv-event-item">
            <div className="vv-event-row">
              <div className="vv-event-copy">
                <div className="vv-event-date">{event.date}</div>
                <div className="vv-event-title">{event.title}</div>
                <p>{event.text}</p>
              </div>
              <img src={event.image} alt={event.title} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
