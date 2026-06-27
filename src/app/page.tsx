import { CasePreview } from "@/components/CasePreview";
import { ConversionComparison } from "@/components/ConversionComparison";
import { FAQItem } from "@/components/FAQItem";
import { FeaturedTemplates } from "@/components/FeaturedTemplates";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
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

      <section className="border-y border-white/[0.08] bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Start small, upgrade only when it works</p>
            <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">A clear path from quick test to launch-grade ad.</h2>
            <p className="mt-4 text-base leading-7 text-white/60">
              Start with one product and one ad direction. Upgrade only when the creative is worth pushing further.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <PricingCard title="Quick Test Draft" price="From $49" lines={["1 low-res ad draft", "Best for testing product angle", "Limited correction"]} />
            <PricingCard title="Human-Fixed Product Ad" price="From $299" lines={["1 polished short-form ad", "Product/logo/caption correction", "24-48h delivery target"]} featured />
            <PricingCard title="Creative Testing Pack" price="From $999" lines={["5 ad variations", "Different hooks and captions", "For paid social testing"]} />
            <PricingCard title="Launch-Grade Adaptation" price="From $3000" lines={["Premium visual adaptation", "Creator-level polish", "For launches, games, apps and campaigns"]} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">FAQ</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d0d0d]">
          <FAQItem question="Is this a generic video template service?" answer="No. The service is built around product ads. We use proven short-form ad directions and adapt them to your product, offer, platform and CTA." />
          <FAQItem question="How fast can I get an ad?" answer="For suitable products and complete assets, the first draft path targets 24-48 hours. More polished or multi-version work may take longer depending on complexity." />
          <FAQItem question="What do I need to provide?" answer="A product link, clear product images, logo, 1-3 selling points, target platform, target language, and CTA." />
          <FAQItem question="Can you make it good enough for paid ads?" answer="Yes. The human-fixed path checks product clarity, logo accuracy, caption readability, visual artifacts, audio, export format and delivery link." />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
