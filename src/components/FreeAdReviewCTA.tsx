import Link from "next/link";

const checks = ["Opening hook", "Subject clarity", "Pacing", "Caption / CTA"];

export function FreeAdReviewCTA() {
  return (
    <section className="vacat-container px-0 pb-16">
      <div className="vacat-card grid gap-6 rounded-[28px] p-7 md:p-9 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="vacat-eyebrow">Not ready to commission yet?</p>
          <h2 className="vacat-title mt-4 text-3xl font-medium md:text-5xl">Start with a quick creative review.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text3)]">
            Paste an existing video, draft visual or concept link. VacaVaca Studio will return a lightweight diagnosis so you can decide whether the next step should be a direction draft, key visual or full visual film.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/free-ad-review" className="vacat-button-secondary px-6 py-3 text-sm">
              Get Free Review
            </Link>
            <Link href="/start" className="vacat-button-primary px-6 py-3 text-sm">
              Submit Creative Brief
            </Link>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {checks.map((item) => (
            <div key={item} className="vacat-card rounded-[22px] p-5">
              <p className="text-lg font-medium tracking-[-0.03em] text-[var(--text)]">{item}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text3)]">Checked as a creative signal, not a media-performance promise.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
