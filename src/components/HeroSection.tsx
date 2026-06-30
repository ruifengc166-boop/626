import Link from "next/link";
import type { Template } from "@/data/templates";
import { VideoFrame } from "@/components/VideoFrame";

export function HeroSection({ template }: { template: Template }) {
  return (
    <section className="vacat-shell px-6 py-20 md:py-24">
      <div className="vacat-container relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(202,254,97,0.2)] bg-[rgba(202,254,97,0.07)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            VacaVaca Studio
          </div>
          <h1 className="vacat-title max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.065em] md:text-6xl lg:text-7xl">
            AI visual works for brands, events and institutions.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--text3)] md:text-lg">
            Commission key visuals, short visual films and campaign image systems from a studio backed by the VACAT Award ecosystem.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/start" className="vacat-button-primary px-6 py-3 text-sm">
              Submit Creative Brief
            </Link>
            <Link href="/vacavaca/works" className="vacat-button-secondary px-6 py-3 text-sm">
              View Award Works
            </Link>
          </div>
          <p className="mt-5 text-sm leading-6 text-[var(--text3)]">
            Need a lighter first step? <Link href="/free-ad-review" className="text-[var(--gold)] underline decoration-[rgba(202,254,97,0.35)] underline-offset-4">Get a quick creative review</Link>.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[340px] lg:mx-0">
          <div className="vacat-card rounded-[1.5rem] p-3">
            <VideoFrame template={template} />
          </div>
        </div>
      </div>
    </section>
  );
}
