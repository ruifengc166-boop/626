import Link from "next/link";

const proofStats = [
  ["4,646", "second VACAT submissions"],
  ["76", "selected / awarded works"],
  ["92", "participating universities"],
  ["272", "first-edition cooperation leads"],
];

const achievements = [
  ["Industry benchmark", "VACAT is positioned by the original Chinese site as a leading AI visual creativity award and a benchmark for the sector."],
  ["Viral work impact", "The first-edition gold work Classic of Mountains and Seas reached over 50 million views across platforms and became a widely discussed AI visual case."],
  ["Industry conversion", "The first edition generated 272 cooperation intentions and orders, showing that award visibility can become commercial demand."],
  ["Research contribution", "VACAT released the AI Visual Creativity Application Blue Book 2025, building a research layer around the creator ecosystem."],
  ["International exchange", "The second edition included invited works from Beijing Film Academy and the International Student Media Art Festival."],
];

const creators = [
  ["DiDi_OK", "2025 VACAT Gold Award · AI realistic narrative film"],
  ["Zhou Yaou / Beijing Film Academy", "2025 VACAT Gold Award · AI animated narrative film"],
  ["Mori Shiro", "2025 VACAT Gold Award · AI commercial creative film"],
  ["STEAMCHI", "2025 VACAT Gold Award · AI visual art film"],
];

const works = [
  ["Green Screen", "Gold Award · AI realistic narrative film"],
  ["Perfect Offline", "Gold Award · AI animated narrative film"],
  ["Memory of Smell", "Gold Award · AI commercial creative film"],
  ["Memory on the Run", "Gold Award · AI visual art film"],
];

export function VacavacaProof() {
  return (
    <section id="vacavaca-proof" className="mx-auto max-w-[1200px] px-6 py-20">
      <div className="overflow-hidden rounded-[32px] border border-white/[0.08] bg-[radial-gradient(circle_at_18%_0%,rgba(202,254,97,0.16),rgba(255,255,255,0.04)_34%,rgba(10,10,10,1)_100%)]">
        <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#cafe61]/80">VACAVACA / VACAT source content</p>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.045em] text-white md:text-5xl">
              From a Chinese AI visual creator tribe to an English ad remix studio.
            </h2>
          </div>
          <div>
            <p className="text-base leading-7 text-white/58">
              The original VACAVACA site is a Chinese-language community for AI visual creators and the official VACAT award ecosystem. In this English version, that content becomes the trust layer behind Ad Remix Studio: selected creators, award-winning works, creator community proof and industry conversion evidence.
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

        <div className="grid gap-4 p-7 md:grid-cols-5 md:p-10">
          {achievements.map(([title, body]) => (
            <article key={title} className="rounded-[22px] border border-white/[0.08] bg-black/20 p-5 md:col-span-1">
              <h3 className="text-lg font-medium tracking-[-0.03em] text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">{body}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 border-t border-white/[0.08] bg-black/20 p-7 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/38">Selected creators from VACAVACA</p>
            <div className="mt-5 grid gap-3">
              {creators.map(([name, body]) => (
                <div key={name} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                  <p className="font-medium text-white">{name}</p>
                  <p className="mt-1 text-sm text-white/48">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/38">Award works as style references</p>
            <div className="mt-5 grid gap-3">
              {works.map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                  <p className="font-medium text-white">{title}</p>
                  <p className="mt-1 text-sm text-white/48">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.08] p-7 md:p-10">
          <p className="max-w-4xl text-sm leading-7 text-white/52">
            Product logic: VACAVACA is not copied over as a Chinese community website. It is translated into English as proof of creator supply, visual taste and award credibility. Ad Remix Studio remains the order-facing product: styles, briefs, review, quoting and managed delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
