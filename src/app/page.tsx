import { CasePreview } from "@/components/CasePreview";
import { FAQItem } from "@/components/FAQItem";
import { FinalCTA } from "@/components/FinalCTA";
import { FreeAdReviewCTA } from "@/components/FreeAdReviewCTA";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { OrderConfidence } from "@/components/OrderConfidence";
import { PricingCard } from "@/components/PricingCard";
import { StudioIdentity } from "@/components/StudioIdentity";
import { listEffectiveTemplates } from "@/lib/template-admin";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const templates = await listEffectiveTemplates();
  const heroTemplate = templates.find((template) => template.id === "T015") ?? templates[0];

  return (
    <main>
      <HeroSection template={heroTemplate} />
      <FreeAdReviewCTA />
      <StudioIdentity />
      <CasePreview />
      <OrderConfidence />
      <HowItWorks />

      <section className="border-y border-white/[0.08] bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Packages</p>
            <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">Start with one product.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            <PricingCard title="Founder Pilot" price="From $249" lines={["Discounted early slot", "For selected first clients"]} featured />
            <PricingCard title="Direction Draft" price="From $79" lines={["Low-res draft", "Direction check"]} />
            <PricingCard title="Polished Ad" price="From $399" lines={["Short-form ad", "1 review round"]} />
            <PricingCard title="Testing Pack" price="From $1,499" lines={["5 variations", "Hooks + captions"]} />
            <PricingCard title="Launch-Grade" price="From $3,500" lines={["Premium adaptation", "Creator-level polish"]} />
          </div>
          <div className="mt-5 rounded-[24px] border border-white/[0.08] bg-white/[0.035] p-5 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/38">For teams</p>
              <h3 className="mt-2 text-2xl font-medium tracking-[-0.035em] text-white">Monthly Creative Desk</h3>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/50 md:mt-0">For teams that need new ad creatives every month. From $2,500 / month.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">FAQ</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d0d0d]">
          <FAQItem question="What does the free ad review check?" answer="It reviews the ad creative itself: hook strength, product clarity, pacing, captions, CTA and platform fit. It does not predict ROAS or conversion rate." />
          <FAQItem question="Who works on my ad?" answer="Your brief is reviewed by a creator-led studio. For selected projects, we match the style with AI video creators from active communities, including VACAT, then review delivery before handoff." />
          <FAQItem question="Do I need to pay before review?" answer="No. Submit your brief first. We confirm the scope before payment." />
          <FAQItem question="Are these real client cases?" answer="Current examples are concept samples. Client work will be added with permission." />
          <FAQItem question="What is included in a polished ad?" answer="A short-form video ad, product adaptation, logo and caption check, CTA check, MP4 delivery and one review round." />
          <FAQItem question="What if my product does not fit the style?" answer="We confirm fit before production and may suggest a better style." />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
