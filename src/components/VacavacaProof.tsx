import Link from "next/link";

const proofStats = [
  ["4,646", "VACAT submitted works"],
  ["76", "selected award works"],
  ["92", "participating universities"],
  ["1", "managed ad remix studio"],
];

const proofPoints = [
  ["Creator credibility", "VACAVACA is used here as the proof layer: selected AI visual creators, award context and community output."],
  ["Style-first ordering", "Brands do not need to choose a creator. They choose a visual direction, then submit product assets and goals."],
  ["Managed delivery", "Ad Remix Studio receives the brief, confirms scope and coordinates production instead of opening a bidding marketplace."],
];

export function VacavacaProof() {
  return (
    <section id="vacavaca-proof" className="mx-auto max-w-[1200px] px-6 py-20">
      <div className="overflow-hidden rounded-[32px] border border-white/[0.08] bg-[radial-gradient(circle_at_18%_0%,rgba(202,254,97,0.16),rgba(255,255,255,0.04)_34%,rgba(10,10,10,1)_100%)]">
        <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#cafe61]/80">VACAVACA credibility layer</p>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.045em] text-white md:text-5xl">
              A Chinese AI visual creator network, translated into an English ad-ordering studio.
            </h2>
          </div>
          <div>
            <p className="text-base leading-7 text-white/58">
              VACAVACA / VACAT remains the trust asset: creator community, award references and visual cases. Ad Remix Studio is the commercial layer: templates, product briefs, managed quoting and delivery.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/templates" className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85">
                Choose a Style
              </Link>
              <Link href="/start" className="inline-flex justify-center rounded-full border border-white/[0.12] bg-white/[0.06] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.1]">
                Submit Product Brief
              </Link>
            </div>
          </div>
        </div>

        <div className="grid border-y border-white/[0.08] bg-black/20 md:grid-cols-4">
          {proofStats.map(([value, label]) => (
            <div key={label} className="border-white/[0.08] p-6 md:border-r md:last:border-r-0">
              <p className="text-3xl font-semibold tracking-[-0.04em] text-white">{value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/42">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 p-7 md:grid-cols-3 md:p-10">
          {proofPoints.map(([title, body]) => (
            <article key={title} className="rounded-[22px] border border-white/[0.08] bg-black/20 p-5">
              <h3 className="text-xl font-medium tracking-[-0.03em] text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
