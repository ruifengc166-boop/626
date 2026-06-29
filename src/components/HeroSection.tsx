import Link from "next/link";
import type { Template } from "@/data/templates";
import { VideoFrame } from "@/components/VideoFrame";

const trustLabels = ["VACAT Award Works", "AI Visual Creator Tribe", "Product Ad Remix"];

export function HeroSection({ template }: { template: Template }) {
  return (
    <section className="relative mx-auto grid max-w-[1200px] gap-12 px-6 py-24 md:py-28 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
      <div className="pointer-events-none absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-[#cafe61]/10 blur-3xl" />
      <div className="relative pt-4">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-[#cafe61]">VACAVACA · Ad Remix Studio</p>
        <h1 className="max-w-5xl text-[2.75rem] font-medium leading-[1.05] tracking-[-0.045em] text-white md:text-6xl lg:text-[4.7rem]">
          AI visual creator works, remixed into product ads.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/64 md:text-lg">
          Built from the VACAVACA creator community and VACAT award works. Choose a visual style, send your product assets, and let the studio turn it into a polished short-form ad direction.
        </p>
        <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
          <Metric value="4,646" label="submitted works" />
          <Metric value="76" label="award works" />
          <Metric value="92" label="universities" />
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/start" className="inline-flex justify-center rounded-none bg-[#cafe61] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#d8ff7a] sm:rounded-sm">
            Start an Ad Remix
          </Link>
          <Link href="/templates" className="inline-flex justify-center rounded-none border border-white/[0.12] bg-white/[0.06] px-7 py-4 text-sm font-medium text-white transition hover:bg-white/[0.1] sm:rounded-sm">
            View VACAVACA Styles
          </Link>
        </div>
        <p className="mt-4 text-sm text-white/42">
          Already have an ad? <Link href="/free-ad-review" className="text-[#cafe61] underline decoration-[#cafe61]/30 underline-offset-4">Get a free creative review</Link> before requesting a fix or remix.
        </p>
        <div className="mt-6 flex max-w-2xl flex-wrap gap-2">
          {trustLabels.map((label) => (
            <span key={label} className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs text-white/50">
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[390px] lg:mx-0 lg:pt-2">
        <div className="absolute -inset-4 rounded-[36px] bg-[#cafe61]/10 blur-2xl" />
        <div className="relative">
          <VideoFrame template={template} />
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
      <p className="text-2xl font-semibold tracking-[-0.04em] text-[#cafe61]">{value}</p>
      <p className="mt-1 text-xs leading-5 text-white/46">{label}</p>
    </div>
  );
}
