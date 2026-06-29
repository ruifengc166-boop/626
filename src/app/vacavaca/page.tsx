import Link from "next/link";
import { vacaVacaSupport } from "@/data/vacavaca-support";

export const dynamic = "force-dynamic";

export default function VacaVacaPage() {
  return (
    <main>
      <section className="vacat-shell px-6 py-20 md:py-28">
        <div className="vacat-container relative z-10">
          <div className="max-w-5xl">
            <p className="vacat-eyebrow mb-4">VACAT / VacaVaca</p>
            <h1 className="vacat-title text-5xl font-semibold md:text-7xl">
              The creator ecosystem behind AI REMIX.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">
              VacaVaca is the public content asset behind the platform: award credibility, creator discovery, representative works, events, judging authority and project-referral logic.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {vacaVacaSupport.metrics.map((metric) => (
              <div key={metric.label} className="vacat-card vacat-card-glow rounded-[1.5rem] p-5">
                <p className="text-4xl font-semibold tracking-[-0.05em] text-white">{metric.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-lime-200">{metric.label}</p>
                <p className="mt-4 text-sm leading-6 text-white/48">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-black/20 px-6 py-20">
        <div className="vacat-container">
          <SectionTitle eyebrow="Why it matters" title="From award credibility to service trust." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {vacaVacaSupport.achievements.map((item) => (
              <div key={item.title} className="vacat-card vacat-card-glow rounded-[1.5rem] p-5">
                <p className="text-3xl">{item.icon}</p>
                <h2 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/48">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vacat-container px-0 py-20">
        <SectionTitle eyebrow="Works" title="Representative works become the style memory of AI REMIX." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {vacaVacaSupport.representativeWorks.map((work) => (
            <div key={work.title} className="vacat-card vacat-card-glow rounded-[1.4rem] p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-lime-200">{work.category}</p>
              <h2 className="mt-4 text-lg font-semibold tracking-[-0.035em] text-white">{work.title}</h2>
              <p className="mt-2 text-xs leading-5 text-white/38">{work.track}</p>
              <p className="mt-4 text-sm leading-6 text-white/50">{work.signal}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-black/20 px-6 py-20">
        <div className="vacat-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle eyebrow="Tracks" title="Competition tracks map into commercial production lanes." />
            <p className="mt-5 text-base leading-7 text-white/52">
              The original VacaVaca works page organized AI visual output by edition, award, track and creator. AI REMIX turns those tracks into a practical language for overseas brands choosing product ads, launch videos, game teasers or premium visual campaigns.
            </p>
          </div>
          <div className="grid gap-3">
            {vacaVacaSupport.tracks.map((track) => (
              <div key={`${track.group}-${track.name}`} className="vacat-card rounded-2xl p-5 md:grid md:grid-cols-[160px_1fr] md:gap-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-200">{track.group}</p>
                <div>
                  <h2 className="text-lg font-semibold tracking-[-0.03em] text-white">{track.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/48">{track.representativeWorks}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vacat-container px-0 py-20">
        <SectionTitle eyebrow="Judging authority" title="A stronger expert layer than a normal AI ad tool." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {vacaVacaSupport.judges.map((judge) => (
            <div key={judge.name} className="vacat-card flex gap-4 rounded-[1.5rem] p-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-lime-200 text-lg font-bold text-black">{judge.initial}</div>
              <div>
                <h2 className="text-base font-semibold tracking-[-0.02em] text-white">{judge.name}</h2>
                <p className="mt-2 text-sm leading-6 text-white/46">{judge.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-black/20 px-6 py-20">
        <div className="vacat-container">
          <SectionTitle eyebrow="Events" title="Events, workshops and battles create ongoing creator energy." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {vacaVacaSupport.events.map((event) => (
              <div key={`${event.date}-${event.title}`} className="vacat-card vacat-card-glow rounded-[1.5rem] p-5">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-lime-200">{event.date}</p>
                <h2 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white">{event.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/48">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vacat-container px-0 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionTitle eyebrow="Referral model" title="VacaVaca's project-referral logic becomes AI REMIX's managed order path." />
            <p className="mt-5 text-base leading-7 text-white/52">
              VacaVaca originally had creator discovery, works browsing and referral intake. AI REMIX keeps that advantage but simplifies the commercial side: a brand submits one structured brief, then the studio confirms fit, price and delivery.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/templates" className="vacat-button-secondary px-6 py-3 text-sm">
                View remix styles
              </Link>
              <Link href="/start" className="vacat-button-primary px-6 py-3 text-sm">
                Start a product brief
              </Link>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {vacaVacaSupport.referralModel.map((item) => (
              <div key={item.step} className="vacat-card rounded-[1.5rem] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-200">Step {item.step}</p>
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
      <p className="vacat-eyebrow mb-3">{eyebrow}</p>
      <h2 className="vacat-title text-3xl font-medium md:text-5xl">{title}</h2>
    </div>
  );
}
