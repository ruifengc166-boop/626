import Link from "next/link";

const checks = ["Opening hook", "Subject clarity", "Pacing", "Caption / CTA"];

export function FreeAdReviewCTA() {
  return (
    <section className="vacat-container px-0 pb-16">
      <div className="vacat-card grid gap-6 rounded-[28px] p-7 md:p-9 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="vacat-eyebrow">Free ad / creative review</p>
          <h2 className="vacat-title mt-4 text-3xl font-medium md:text-5xl">Keep the low-friction lead entry.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text3)]">
            Brands can paste an existing ad, video or rough visual link and receive an instant review. Strong leads can then move into a VacaVaca Studio commission brief.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/free-ad-review" className="vacat-button-primary px-6 py-3 text-sm">
              Get Free Review
            </Link>
            <Link href="/start" className="vacat-button-secondary px-6 py-3 text-sm">
              Submit Commission Brief
            </Link>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {checks.map((item) => (
            <div key={item} className="vacat-card rounded-[22px] p-5">
              <p className="text-lg font-medium tracking-[-0.03em] text-[var(--text)]">{item}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text3)]">Shown instantly on a review page.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
