import { FAQItem } from "@/components/FAQItem";
import { FinalCTA } from "@/components/FinalCTA";
import { FreeAdReviewCTA } from "@/components/FreeAdReviewCTA";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { NewAdCTA } from "@/components/NewAdCTA";
import { OrderConfidence } from "@/components/OrderConfidence";
import { PricingCard } from "@/components/PricingCard";
import { StudioIdentity } from "@/components/StudioIdentity";
import { VacaVacaSupport } from "@/components/VacaVacaSupport";
import { listEffectiveTemplates } from "@/lib/template-admin";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const templates = await listEffectiveTemplates();
  const heroTemplate = templates.find((template) => template.id === "V001") ?? templates[0];

  return (
    <main>
      <HeroSection template={heroTemplate} />
      <VacaVacaSupport />
      <NewAdCTA />
      <StudioIdentity />
      <OrderConfidence />
      <HowItWorks />

      <section className="px-6 py-24">
        <div className="vacat-container">
          <div className="max-w-2xl">
            <p className="vacat-eyebrow mb-3">Service Packages</p>
            <h2 className="vacat-title text-3xl font-medium md:text-5xl">Choose the right entry point for the brief.</h2>
            <p className="mt-5 text-base leading-7 text-[var(--text3)]">
              VACAT references help define taste and ambition. VacaVaca Studio turns the selected direction into a scoped creative proposal and finished AI visual work.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <PricingCard title="Direction Draft" price="From $300" lines={["Reference mapping", "Creative route", "Scope suggestion"]} />
            <PricingCard title="Key Visual" price="From $900" lines={["Poster or campaign visual", "Studio art direction", "Delivery pack"]} featured />
            <PricingCard title="Short Visual Film" price="From $2,500" lines={["VACAT-inspired film", "One review round", "Use-case fit check"]} />
            <PricingCard title="Premium Creator Work" price="From $3,500" lines={["Cinematic direction", "Creator-level polish", "Launch-ready asset"]} />
          </div>

          <div className="vacat-card mt-8 rounded-[24px] p-5 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">For teams</p>
              <h3 className="mt-2 text-2xl font-medium tracking-[-0.035em] text-[var(--text)]">Monthly VacaVaca Creative Desk</h3>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--text3)] md:mt-0">For teams that need recurring reviews, reference directions, visual concepts, short films and campaign image systems. From $2,500 / month.</p>
          </div>
        </div>
      </section>

      <FreeAdReviewCTA />

      <section className="vacat-container px-0 py-24">
        <div className="max-w-2xl">
          <p className="vacat-eyebrow mb-3">FAQ</p>
          <h2 className="vacat-title text-3xl font-medium md:text-5xl">How VacaVaca Studio starts a project.</h2>
        </div>
        <div className="vacat-card mt-10 overflow-hidden rounded-[24px]">
          <FAQItem question="Is the free review still part of the flow?" answer="Yes. Free creative review is the low-friction first step for clients who are not ready to commission yet. The main service flow is still brief, scope, quote and production." />
          <FAQItem question="Is this only for advertising?" answer="No. The commission menu covers visual creative works: ads, AI films, key visuals, campaign image systems, event visuals, city promotion, music visuals and IP concept films." />
          <FAQItem question="How do VACAT works support projects?" answer="VACAT is the award. Its works provide reference directions, creator capability signals and authority. VacaVaca Studio turns those references into commissioned creative work." />
          <FAQItem question="Can I choose a specific VACAT reference?" answer="Yes. You can select a representative work as reference, choose a creative direction, or mention a creator lane in the brief." />
          <FAQItem question="Do users pay immediately?" answer="No. Submit the brief first. VacaVaca Studio replies with the creative route, timeline and quote before production starts." />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
