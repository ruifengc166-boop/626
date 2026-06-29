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
      <FreeAdReviewCTA />
      <VacaVacaSupport />
      <NewAdCTA />
      <StudioIdentity />
      <OrderConfidence />
      <HowItWorks />

      <section className="px-6 py-24">
        <div className="vacat-container">
          <div className="max-w-2xl">
            <p className="vacat-eyebrow mb-3">Commission Menu</p>
            <h2 className="vacat-title text-3xl font-medium md:text-5xl">Choose the path that fits the request.</h2>
            <p className="mt-5 text-base leading-7 text-[var(--text3)]">
              The service still has a clear order model. VacaVaca provides references and authority; VacaVaca Studio scopes and delivers the commissioned work.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="vacat-card rounded-[24px] p-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Review / direction entry</p>
              <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <PricingCard title="Free Review" price="$0" lines={["Ad or visual diagnosis", "Lead qualification"]} />
                <PricingCard title="Direction Draft" price="From $300" lines={["Reference mapping", "Creative route"]} featured />
                <PricingCard title="Visual Sprint" price="From $1,800" lines={["3-5 visual routes", "Creator-lane review"]} />
              </div>
            </div>

            <div className="vacat-card rounded-[24px] p-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Custom production</p>
              <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <PricingCard title="Key Visual" price="From $900" lines={["Poster or campaign visual", "Studio art direction"]} />
                <PricingCard title="Short Visual Film" price="From $2,500" lines={["VACAT-style film", "One review round"]} featured />
                <PricingCard title="Premium Visual Work" price="From $3,500" lines={["Cinematic direction", "Creator-level polish"]} />
              </div>
            </div>
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

      <section className="vacat-container px-0 py-24">
        <div className="max-w-2xl">
          <p className="vacat-eyebrow mb-3">FAQ</p>
          <h2 className="vacat-title text-3xl font-medium md:text-5xl">How VacaVaca Studio gets orders.</h2>
        </div>
        <div className="vacat-card mt-10 overflow-hidden rounded-[24px]">
          <FAQItem question="Is the free review still part of the flow?" answer="Yes. Free ad / creative review is the low-friction entry. It creates a lead and can send qualified users into the commission brief." />
          <FAQItem question="Is this only for advertising?" answer="No. The commission menu covers visual creative works: ads, AI films, key visuals, campaign image systems, event visuals, culture and city promotion, music visuals and IP concept films." />
          <FAQItem question="How do VACAT works support orders?" answer="They provide reference directions, creator capability lanes and authority signals. The order still goes through the same managed studio process." />
          <FAQItem question="Can I choose a specific VACAT reference?" answer="Yes. Users can select a creative direction, use a representative work as reference, or mention a creator lane in the brief." />
          <FAQItem question="Do users pay immediately?" answer="No. They submit the brief first. The studio confirms scope, route and price before production starts." />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
