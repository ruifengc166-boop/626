import { CasePreview } from "@/components/CasePreview";
import { ConversionComparison } from "@/components/ConversionComparison";
import { FAQItem } from "@/components/FAQItem";
import { FeaturedTemplates } from "@/components/FeaturedTemplates";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { OrderConfidence } from "@/components/OrderConfidence";
import { PlatformAdvantages } from "@/components/PlatformAdvantages";
import { PricingCard } from "@/components/PricingCard";
import { listEffectiveTemplates } from "@/lib/template-admin";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const templates = await listEffectiveTemplates();
  const featured = templates.filter((template) => template.featured && template.status === "active").slice(0, 6);
  const heroTemplate = templates.find((template) => template.id === "T015") ?? featured[0] ?? templates[0];

  return (
    <main>
      <HeroSection template={heroTemplate} />
      <PlatformAdvantages />
      <FeaturedTemplates templates={featured} />
      <HowItWorks />
      <ConversionComparison />
      <CasePreview />
      <OrderConfidence />

      <section className="border-y border-white/[0.08] bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Packages</p>
            <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">One-off orders or monthly output.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <PricingCard title="Direction Draft" price="From $79" lines={["Low-res draft", "Direction check"]} />
            <PricingCard title="Polished Product Ad" price="From $399" lines={["Short-form ad", "Logo + caption check"]} featured />
            <PricingCard title="Testing Pack" price="From $1,499" lines={["5 variations", "Hooks + captions"]} />
            <PricingCard title="Launch-Grade" price="From $3,500" lines={["Premium adaptation", "Creator-level polish"]} />
          </div>
          <div className="mt-5 rounded-[24px] border border-white/[0.08] bg-white/[0.035] p-5 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/38">For teams</p>
              <h3 className="mt-2 text-2xl font-medium tracking-[-0.035em] text-white">Monthly Creative Desk</h3>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/50 md:mt-0">Recurring ad output, priority queue and shared delivery board. From $2,500 / month.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">FAQ</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d0d0d]">
          <FAQItem question="What can you make?" answer="Short-form product ads, launch teasers, offer creatives, app demos, UGC-style hooks and premium campaign visuals." />
          <FAQItem question="How fast is the first review?" answer="When assets are ready, the draft option targets 24-48 hours. More polished work may take longer." />
          <FAQItem question="What do I provide?" answer="Product link, product images, logo, selling points, target platform, language and CTA." />
          <FAQItem question="Can it be used for paid social?" answer="Yes. The polished path checks product clarity, logo, captions, artifacts, audio and export format." />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
