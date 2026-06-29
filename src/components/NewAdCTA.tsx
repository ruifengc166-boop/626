import Link from "next/link";

const items = [
  ["Choose a VACAVACA-backed style", "Start from a visual direction rather than a blank prompt."],
  ["Send product assets", "Product link, logo, selling points, target market and platform."],
  ["Managed remix delivery", "The studio confirms scope, coordinates production and reviews the final ad."],
];

export function NewAdCTA() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-16">
      <div className="grid gap-6 rounded-[28px] border border-white/[0.08] bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0.035)_42%,rgba(13,13,13,1)_100%)] p-7 md:p-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Ad Remix workflow</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">Use creator-network proof to start a product ad order.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/56">
            VACAVACA gives the platform credibility. Ad Remix Studio turns that credibility into a practical brief flow for overseas product brands.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/start" className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85">
              Submit Product Brief
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
