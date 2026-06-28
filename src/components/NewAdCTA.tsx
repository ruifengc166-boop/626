import Link from "next/link";

const items = [
  ["Send product assets", "Product link, logo, selling point and target platform."],
  ["Confirm scope", "We check fit, style and price before payment."],
  ["Review delivery", "Polished ads are checked for product clarity, captions and CTA."],
];

export function NewAdCTA() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-16">
      <div className="grid gap-6 rounded-[28px] border border-white/[0.08] bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0.035)_42%,rgba(13,13,13,1)_100%)] p-7 md:p-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Need a new product ad?</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">Request a new short-form ad from the studio.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/56">
            Send your product assets and campaign goal. We confirm the scope before payment, then produce a reviewed social ad direction.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/start" className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85">
              Request New Product Ad
            </Link>
            <Link href="/templates" className="inline-flex justify-center rounded-full border border-white/[0.12] bg-white/[0.06] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.1]">
              Browse Styles
            </Link>
          </div>
        </div>
        <div className="grid gap-3">
          {items.map(([title, body]) => (
            <div key={title} className="rounded-[22px] border border-white/[0.08] bg-black/20 p-5">
              <p className="text-lg font-medium tracking-[-0.03em] text-white">{title}</p>
              <p className="mt-2 text-sm leading-6 text-white/48">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
