import Link from "next/link";
import type { Template } from "@/data/templates";
import { studioMetrics } from "@/data/vacavaca-studio";
import { VideoFrame } from "@/components/VideoFrame";

const trustLabels = ["VacaVaca Studio is the service", "VACAT is the award-backed proof", "Reference → brief → quote → production"];
const heroMetrics = studioMetrics.slice(0, 3);

export function HeroSection({ template }: { template: Template }) {
  return (
    <section className="vacat-shell px-6 py-24 md:py-32">
      <div className="vacat-container relative z-10 grid gap-14 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-start">
        <div className="pt-6">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[rgba(202,254,97,0.24)] bg-[rgba(202,254,97,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shadow-[0_0_18px_rgba(202,254,97,0.8)]" />
            VacaVaca Studio
          </div>
          <h1 className="vacat-title max-w-5xl text-[3.2rem] font-semibold md:text-7xl lg:text-[5.4rem]">
            Commission award-grade AI visual works, backed by the VACAT Award.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text3)] md:text-lg">
            VacaVaca Studio helps brands, institutions and creators turn AI-native visual references into client-ready key visuals, short visual films, event screens, city image films and campaign image systems.
          </p>

          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <Metric key={metric.label} value={metric.value} label={metric.label} />
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/start" className="vacat-button-primary px-7 py-4 text-sm">
              Submit Creative Brief
            </Link>
            <Link href="/templates" className="vacat-button-secondary px-7 py-4 text-sm">
              Browse Creative Directions
            </Link>
          </div>
          <p className="mt-5 text-sm text-[var(--text3)]">
            Not ready to commission? <Link href="/free-ad-review" className="text-[var(--gold)] underline decoration-[rgba(202,254,97,0.35)] underline-offset-4">Get a quick creative review</Link> first.
          </p>
          <div className="mt-7 flex max-w-2xl flex-wrap gap-2">
            {trustLabels.map((label) => (
              <span key={label} className="vacat-chip rounded-full px-3 py-1.5 text-xs">
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-[390px] lg:mx-0 lg:pt-2">
          <div className="vacat-card vacat-card-glow rounded-[1.75rem] p-3">
            <VideoFrame template={template} />
          </div>
          <div className="mt-4 rounded-2xl border border-[rgba(202,254,97,0.16)] bg-[rgba(202,254,97,0.08)] p-4 text-sm leading-6 text-[var(--text3)]">
            Start from an award-backed direction, then submit project context so the studio can confirm scope, timeline and quote.
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="vacat-card rounded-2xl p-4">
      <p className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)]">{value}</p>
      <p className="mt-1 text-xs uppercase leading-5 tracking-[0.16em] text-[var(--text3)]">{label}</p>
    </div>
  );
}
