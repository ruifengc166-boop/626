import { FAQItem } from "@/components/FAQItem";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
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
      <StudioIdentity />
      <VacaVacaSupport />
      <OrderConfidence />
      <HowItWorks />

      <section className="px-6 py-24">
        <div className="vacat-container">
          <div className="max-w-2xl">
            <p className="vacat-eyebrow mb-3">Commission Menu</p>
            <h2 className="vacat-title text-3xl font-medium md:text-5xl">Choose the visual creative path.</h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="vacat-card rounded-[24px] p-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Direction and concept</p>
              <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <PricingCard title="Concept Direction" price="From $300" lines={["Reference mapping", "Mood and structure"]} />
                <PricingCard title="Key Visual" price="From $900" lines={["Poster or campaign visual", "Studio art direction"]} featured />
                <PricingCard title="Visual Sprint" price="From $1,800" lines={["3-5 visual routes", "Creator-lane review"]} />
              </div>
            </div>

            <div className="vacat-card rounded-[24px] p-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Film and event visuals</p>
              <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <PricingCard title="Short Visual Film" price="From $2,500" lines={["VACAT-style film", "One review round"]} />
                <PricingCard title="Premium Visual Work" price="From $3,500" lines={["Cinematic direction", "Creator-level polish"]} featured />
                <PricingCard title="Event Visual System" price="Custom" lines={["Screens and trailers", "Exhibition-ready assets"]} />
              </div>
            </div>
          </div>

          <div className="vacat-card mt-8 rounded-[24px] p-5 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">For teams</p>
              <h3 className="mt-2 text-2xl font-medium tracking-[-0.035em] text-[var(--text)]">Monthly VacaVaca Creative Desk</h3>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--text3)] md:mt-0">For teams that need visual concepts, key visuals, short films and campaign image systems every month. From $2,500 / month.</p>
          </div>
        </div>
      </section>

      <section className="vacat-container px-0 py-24">
        <div className="max-w-2xl">
          <p className="vacat-eyebrow mb-3">FAQ</p>
          <h2 className="vacat-title text-3xl font-medium md:text-5xl">How VacaVaca Studio works.</h2>
        </div>
        <div className="vacat-card mt-10 overflow-hidden rounded-[24px]">
          <FAQItem question="Is this only for advertising?" answer="No. VacaVaca Studio is for visual creative works: AI films, key visuals, campaign image systems, event visuals, culture and city promotion, music visuals and IP concept films." />
          <FAQItem question="How do VACAT works support my project?" answer="They provide reference directions, creator capability lanes and authority signals. Your project is still scoped and produced through a managed studio process." />
          <FAQItem question="Can I choose a specific VACAT reference?" answer="Yes. You can choose a creative direction from the menu or mention a representative work in the brief." />
          <FAQItem question="Who works on the project?" answer="Your brief is reviewed by VacaVaca Studio. Creator lanes and production resources are assigned based on scope, visual ambition and delivery requirements." />
          <FAQItem question="Do I need to pay before review?" answer="No. Submit the brief first. We confirm scope, route and price before production starts." />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
