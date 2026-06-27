import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1200px] rounded-[24px] border border-white/[0.08] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.14),rgba(255,255,255,0.04)_42%,rgba(13,13,13,1)_100%)] px-6 py-16 text-center md:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Start with one product</p>
        <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-white md:text-6xl">Ready to see your product in a better ad?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60">
          Send the product brief. We will prepare a short-form ad direction your team can review, test and improve into stronger campaign creative.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/start" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85">
            Start My Ad
          </Link>
          <Link href="/templates" className="rounded-full border border-white/[0.12] bg-white/[0.06] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.1]">
            Browse Ad Styles
          </Link>
        </div>
      </div>
    </section>
  );
}
