import Link from "next/link";
import type { Template } from "@/data/templates";
import { VideoFrame } from "@/components/VideoFrame";

const trustLabels = [
  "Ready-made AI ad styles",
  "Human-fixed delivery available",
  "Built for TikTok, Reels & Shorts",
];

export function HeroSection({ template }: { template: Template }) {
  return (
    <section className="mx-auto grid max-w-[1200px] gap-12 px-6 py-24 md:py-28 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
      <div className="pt-4">
        <h1 className="max-w-5xl text-[2.75rem] font-medium leading-[1.05] tracking-[-0.045em] text-white md:text-6xl lg:text-[4.7rem]">
          AI Video Ads Remade for Your Product
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-white/64 md:text-lg">
          Pick a premium AI ad style. Send your product. Get a short-form ad ready for testing.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/templates" className="inline-flex justify-center rounded-none bg-white/[0.16] px-7 py-4 text-sm font-medium text-white transition hover:bg-white/[0.22] sm:rounded-sm">
            Browse Ad Styles
          </Link>
          <Link href="/start" className="inline-flex justify-center rounded-none border border-white/[0.12] bg-white/[0.06] px-7 py-4 text-sm font-medium text-white transition hover:bg-white/[0.1] sm:rounded-sm">
            Start With My Product
          </Link>
        </div>
        <div className="mt-8 flex max-w-3xl flex-wrap gap-2">
          {trustLabels.map((label) => (
            <span key={label} className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs text-white/42">
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full max-w-[390px] lg:mx-0 lg:pt-2">
        <VideoFrame template={template} />
      </div>
    </section>
  );
}
