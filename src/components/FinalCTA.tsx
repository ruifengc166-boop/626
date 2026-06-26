import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1200px] rounded-[24px] border border-white/[0.08] bg-[#0d0d0d] px-6 py-16 text-center md:px-12">
        <h2 className="text-4xl font-medium tracking-[-0.04em] text-white md:text-6xl">Start with one product.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60">
          Choose a video style and send us your product. We will review the fit and recommend the fastest path.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/templates" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85">
            Browse Ad Styles
          </Link>
          <Link href="/start" className="rounded-full border border-white/[0.12] bg-white/[0.06] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.1]">
            Start Your Remix
          </Link>
        </div>
      </div>
    </section>
  );
}
