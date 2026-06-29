import Link from "next/link";

const stats = [
  ["4,646", "Submitted works"],
  ["76", "Awarded works"],
  ["92", "Universities"],
  ["272", "Cooperation leads"],
];

const creators = ["kiframeStudio", "AI Madhouse", "aigcent", "Erzhi Image", "SoftTree VFX", "Qiaomu Films", "DiDi_OK", "Mori Shiro"];

const works = [
  ["AI Reconstructs an Eastern Fantasy", "Dunhuang-inspired flying apsaras reimagined with AI video.", "Gold Award · Original IP Film", "https://www.bilibili.com/video/BV1gvJG6qEBq"],
  ["Galaxy Journey", "A fantasy galaxy short built around AI-generated visual spectacle.", "Silver Award · Classic IP Adaptation", ""],
  ["AI Ink-Wash Animation Experiment", "Traditional Chinese ink aesthetics explored through AI animation.", "Bronze Award · Visual Art Film", ""],
  ["Commercial Aesthetics: AI Brand Ad", "An AI visual advertising reference for a technology brand.", "Gold Award · Original IP Film", "https://www.bilibili.com/video/BV1pUJG6oEVS"],
  ["Green Screen", "VACAT 2025 gold-award work in AI realistic narrative film.", "Gold Award · AI Realistic Narrative", "https://www.bilibili.com/video/BV1zruJzbEEb"],
  ["Black Wind Valley", "A future-city concept seen through an AI visual designer's lens.", "Selected Work · Creative Visual Film", "https://www.bilibili.com/video/BV1jUskeqEY3"],
];

const achievements = [
  ["VACAT Award", "A global AI visual creativity competition and the official award context behind the community."],
  ["Creator Tribe", "A curated community of AI visual creators, film teams, visual artists and commercial experimenters."],
  ["Award Works", "Original IP films, classic-IP adaptations, visual art films and commercial creative films."],
  ["Industry Value", "The first edition generated cooperation leads and helped turn award visibility into project demand."],
];

export function VacavacaProof() {
  return (
    <section id="vacavaca-proof" className="mx-auto max-w-[1200px] px-6 py-20">
      <div className="overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#0a0a0a] vacavaca-ring">
        <div className="relative p-7 md:p-10">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#cafe61]/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#cafe61]">VACAVACA · AI Visual Creator Tribe</p>
              <h2 className="mt-5 text-3xl font-medium tracking-[-0.045em] text-white md:text-5xl">
                The creator and award ecosystem behind Ad Remix Studio.
              </h2>
            </div>
            <div>
              <p className="text-base leading-7 text-white/58">
                VACAVACA brings together the VACAT award, selected AI visual works and creator teams. For overseas brands, these works become style references for product ad remixes, launch videos and short-form campaign tests.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/templates" className="inline-flex justify-center rounded-full bg-[#cafe61] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#d8ff7a]">
                  Browse VACAVACA Styles
                </Link>
                <Link href="/start" className="inline-flex justify-center rounded-full border border-white/[0.12] bg-white/[0.06] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.1]">
                  Start an Ad Remix
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid border-y border-white/[0.08] bg-black/30 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="border-white/[0.08] p-6 md:border-r md:last:border-r-0">
              <p className="text-4xl font-semibold tracking-[-0.05em] text-[#cafe61]">{value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/42">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 p-7 md:grid-cols-4 md:p-10">
          {achievements.map(([title, body]) => (
            <article key={title} className="vacavaca-card rounded-[24px] p-5">
              <h3 className="text-lg font-medium tracking-[-0.03em] text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/50">{body}</p>
            </article>
          ))}
        </div>

        <div className="border-t border-white/[0.08] p-7 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Award works</p>
              <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-white">Videos and visual references from the VACAVACA site.</h3>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/42">These are not generic samples. They are translated from the existing VACAVACA works library and used as style proof for Ad Remix Studio.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {works.map(([title, body, meta, url]) => (
              <article key={title} className="group overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#101010]">
                <div className="aspect-video bg-[radial-gradient(circle_at_50%_0%,rgba(202,254,97,0.18),rgba(255,255,255,0.035)_38%,rgba(0,0,0,0.2)_100%)] p-4">
                  <div className="flex h-full items-end rounded-[18px] border border-white/[0.08] bg-black/20 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#cafe61]/80">{meta}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-medium tracking-[-0.03em] text-white">{title}</h4>
                  <p className="mt-2 text-sm leading-6 text-white/50">{body}</p>
                  {url ? <a href={url} target="_blank" className="mt-4 inline-flex text-sm text-[#cafe61] underline decoration-[#cafe61]/30 underline-offset-4">View source video</a> : null}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.08] p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Creator network</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {creators.map((name) => (
              <span key={name} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm text-white/62">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
