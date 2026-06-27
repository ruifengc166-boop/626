import Link from "next/link";
import type { Template } from "@/data/templates";
import { VideoFrame } from "@/components/VideoFrame";

const trustLabels = [
  "Made for product launches and paid social tests",
  "Clear entry options before larger campaign spend",
  "Human polish available for brand-safe delivery",
];

export function HeroSection({ template }: { template: Template }) {
  return (
    <section className="mx-auto grid max-w-[1200px] gap-12 px-6 py-24 md:py-28 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
      <div className="pt-4">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-white/38">Product Video Ads</p>
        <h1 className="max-w-5xl text-[2.75rem] font-medium leading-[1.05] tracking-[-0.045em] text-white md:text-6xl lg:text-[4.7rem]">
          Get product ads that look ready to test.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-white/64 md:text-lg">
          Send your product, logo and selling points. We turn them into polished short-form ad creatives for TikTok, Reels, Shorts and paid social.
        </p>
        <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
          <Metric value="24-48h" label="first review draft option" />
          <Metric value="$399+" label="polished product ad" />
          <Metric value="5×" label="creative testing pack" />
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/start" className="inline-flex justify-center rounded-none bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-white/85 sm:rounded-sm">
            Start My Ad
          </Link>
          <Link href="/templates" className="inline-flex justify-center rounded-none border border-white/[0.12] bg-white/[0.06] px-7 py-4 text-sm font-medium text-white transition hover:bg-white/[0.1] sm:rounded-sm">
            Browse Ad Styles
          </Link>
        </div>
        <div className="mt-8 flex max-w-3xl flex-wrap gap-2">
          {trustLabels.map((label) => (
            <span key={label} className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs text-white/50">
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

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
      <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{value}</p>
      <p className="mt-1 text-xs leading-5 text-white/46">{label}</p>
    </div>
  );
}
