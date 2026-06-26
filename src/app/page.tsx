import { CasePreview } from "@/components/CasePreview";
import { FAQItem } from "@/components/FAQItem";
import { FeaturedTemplates } from "@/components/FeaturedTemplates";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
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
      <FeaturedTemplates templates={featured} />
      <HowItWorks />
      <CasePreview />

      <section className="border-y border-white/[0.08] bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">Start Small. Upgrade When It Works.</h2>
            <p className="mt-4 text-base leading-7 text-white/60">
              Use automated remix drafts for quick testing, then upgrade to human-fixed or creator-led versions.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <PricingCard title="Auto Remix Draft" price="From $49" lines={["1 low-res draft", "Best for quick creative testing", "Limited correction"]} />
            <PricingCard title="Fast Human-Fixed Remix" price="From $299" lines={["1 polished short-form ad", "Basic human correction", "24-48h delivery target"]} featured />
            <PricingCard title="Multi-Version Remix Pack" price="From $999" lines={["5 ad variations", "Different hooks and captions", "For creative testing"]} />
            <PricingCard title="Creator Premium Adaptation" price="From $3000" lines={["Custom premium adaptation", "Top AI creator involvement", "For launches, games, apps, music, and campaign visuals"]} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">FAQ</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0d0d0d]">
          <FAQItem question="Do you copy other ads?" answer="No. We use our own AI-generated video ad styles and adapt the structure, rhythm, layout, and visual system to your product. We do not copy third-party actors, music, logos, or copyrighted materials." />
          <FAQItem question="Is this fully automated?" answer="The draft process is partially automated. For better quality, we offer human-fixed and creator-enhanced versions." />
          <FAQItem question="What do I need to provide?" answer="A product link, clear product images, logo, 1-3 selling points, target platform, target language, and CTA." />
          <FAQItem question="Can I request human optimization?" answer="Yes. You can start with an automated draft and upgrade to a human-fixed or creator-enhanced version." />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
