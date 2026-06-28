import Link from "next/link";

const checks = ["Hook strength", "Product clarity", "Pacing", "Captions & CTA"];

export function FreeAdReviewCTA() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-16">
      <div className="grid gap-6 rounded-[28px] border border-white/[0.08] bg-[#0d0d0d] p-7 md:p-9 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Already have an ad?</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">Generate a free creative review page.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/56">
            Paste your current ad or video link. The review is generated immediately and opens on the next page. We do not wait to email the result.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/free-ad-review" className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85">
              Generate Free Review
            </Link>
            <Link href="/start" className="inline-flex justify-center rounded-full border border-white/[0.12] bg-white/[0.06] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.1]">
              Need a New Ad?
            </Link>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {checks.map((item) => (
            <div key={item} className="rounded-[22px] border border-white/[0.08] bg-white/[0.035] p-5">
              <p className="text-lg font-medium tracking-[-0.03em] text-white">{item}</p>
              <p className="mt-2 text-sm leading-6 text-white/46">Shown instantly on a review page.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
