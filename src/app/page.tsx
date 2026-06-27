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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/38">Choose your starting point</p>
            <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">Start with one ad, then build a stronger creative set.</h2>
            <p className="mt-4 text-base leading-7 text-white/60">
              Begin with the level that matches your campaign stage. Add polish or more versions when you see a direction worth developing.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <PricingCard title="Direction Draft" price="From $79" lines={["1 low-res review draft", "Good for checking the ad direction", "Limited correction"]} />
            <PricingCard title="Polished Product Ad" price="From $399" lines={["1 short-form product ad", "Product, logo and caption check", "24-48h target when assets are ready"]} featured />
            <PricingCard title="Creative Testing Pack" price="From $1,499" lines={["5 ad variations", "Different hooks and captions", "For comparing creative angles"]} />
            <PricingCard title="Launch-Grade Adaptation" price="From $3,500" lines={["Premium visual adaptation", "Creator-level polish", "For launches, apps, games and campaigns"]} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">FAQ</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d0d0d]">
          <FAQItem question="What kind of ads can you make?" answer="Short-form product ads for social feeds, launch pages, offer testing, app demos, UGC-style hooks, game teasers and premium campaign visuals." />
          <FAQItem question="How fast can I review the first version?" answer="For suitable products and complete assets, the first review draft option targets 24-48 hours. More polished or multi-version work may take longer depending on complexity." />
          <FAQItem question="What do I need to provide?" answer="A product link, clear product images, logo, 1-3 selling points, target platform, target language, and CTA." />
          <FAQItem question="Can it be used for paid social testing?" answer="Yes. The polished path checks product clarity, logo accuracy, caption readability, visual artifacts, audio, export format and delivery link before handoff." />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
