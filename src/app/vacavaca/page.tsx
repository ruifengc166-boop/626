import Link from "next/link";
import { vacaVacaSupport } from "@/data/vacavaca-support";

export const dynamic = "force-dynamic";

export default function VacaVacaPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-white/38">VACAT / VacaVaca</p>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-white md:text-7xl">
            The creator ecosystem behind AI REMIX.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            VacaVaca is not a small logo endorsement. It is the public content asset behind the platform: award credibility, creator discovery, representative works, events, judging authority and project-referral logic.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {vacaVacaSupport.metrics.map((metric) => (
            <div key={metric.label} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] p-5">
              <p className="text-4xl font-semibold tracking-[-0.05em] text-white">{metric.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/42">{metric.label}</p>
              <p className="mt-4 text-sm leading-6 text-white/46">{metric.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-[#080808] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionTitle eyebrow="Why it matters" title="From award credibility to service trust." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {vacaVacaSupport.achievements.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-5">
                <p className="text-3xl">{item.icon}</p>
                <h2 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/48">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <SectionTitle eyebrow="Works" title="Representative works become the style memory of AI REMIX." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {vacaVacaSupport.representativeWorks.map((work) => (
            <div key={work.title} className="rounded-[1.4rem] border border-white/[0.08] bg-[#0d0d0d] p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/34">{work.category}</p>
              <h2 className="mt-4 text-lg font-semibold tracking-[-0.035em] text-white">{work.title}</h2>
              <p className="mt-2 text-xs leading-5 text-white/38">{work.track}</p>
              <p className="mt-4 text-sm leading-6 text-white/50">{work.signal}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-[#080808] px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle eyebrow="Tracks" title="Competition tracks map into commercial production lanes." />
            <p className="mt-5 text-base leading-7 text-white/52">
              The original VacaVaca works page organized AI visual output by edition, award, track and creator. AI REMIX turns those tracks into a practical language for overseas brands choosing product ads, launch videos, game teasers or premium visual campaigns.
            </p>
          </div>
          <div className="grid gap-3">
            {vacaVacaSupport.tracks.map((track) => (
              <div key={`${track.group}-${track.name}`} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 md:grid md:grid-cols-[160px_1fr] md:gap-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/34">{track.group}</p>
                <div>
                  <h2 className="text-lg font-semibold tracking-[-0.03em] text-white">{track.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/48">{track.representativeWorks}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <SectionTitle eyebrow="Judging authority" title="A stronger expert layer than a normal AI ad tool." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {vacaVacaSupport.judges.map((judge) => (
            <div key={judge.name} className="flex gap-4 rounded-[1.5rem] border border-white/[0.08] bg-[#0d0d0d] p-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold text-black">{judge.initial}</div>
              <div>
                <h2 className="text-base font-semibold tracking-[-0.02em] text-white">{judge.name}</h2>
                <p className="mt-2 text-sm leading-6 text-white/46">{judge.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-[#080808] px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionTitle eyebrow="Events" title="Events, workshops and battles create ongoing creator energy." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {vacaVacaSupport.events.map((event) => (
              <div key={`${event.date}-${event.title}`} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-5">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{event.date}</p>
                <h2 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white">{event.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/48">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionTitle eyebrow="Referral model" title="VacaVaca's project-referral logic becomes AI REMIX's managed order path." />
            <p className="mt-5 text-base leading-7 text-white/52">
              VacaVaca originally had creator discovery, works browsing and referral intake. AI REMIX keeps that advantage but simplifies the commercial side: a brand does not need to negotiate with creators first. It submits one structured brief, then the studio confirms fit, price and delivery.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/templates" className="inline-flex justify-center rounded-sm border border-white/[0.12] bg-white/[0.06] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.1]">
                View remix styles
              </Link>
              <Link href="/start" className="inline-flex justify-center rounded-sm bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85">
                Start a product brief
              </Link>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {vacaVacaSupport.referralModel.map((item) => (
              <div key={item.step} className="rounded-[1.5rem] border border-white/[0.08] bg-[#0d0d0d] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/34">Step {item.step}</p>
                <h2 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/48">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/38">{eyebrow}</p>
      <h2 className="text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">{title}</h2>
    </div>
  );
}
