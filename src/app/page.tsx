import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { VacaVacaSupport } from "@/components/VacaVacaSupport";

export const dynamic = "force-dynamic";

const services = [
  {
    title: "Campaign Key Visual",
    price: "From $900",
    body: "Hero image, launch poster, event visual or institutional key art for a defined campaign or presentation need.",
  },
  {
    title: "Short Visual Film",
    price: "From $2,500",
    body: "AI-assisted image film, teaser, music visual or concept film built from an original brief and approved materials.",
  },
  {
    title: "Premium Visual Production",
    price: "From $3,500",
    body: "Creator-led visual production with stronger art direction, polish and delivery support for brands, events and institutions.",
  },
];

const steps = ["Choose a studio service", "Submit a brief", "Receive scope and quote"];

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <VacaVacaSupport />

      <section className="px-6 py-16">
        <div className="vacat-container">
          <div className="max-w-3xl">
            <p className="vacat-eyebrow mb-3">Studio Services</p>
            <h2 className="vacat-title text-3xl font-medium tracking-[-0.055em] md:text-5xl">Clear ways to start a visual project.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text3)] md:text-base">
              Start with a defined production category. VacaVaca Studio reviews your brief, confirms the scope and provides a quote before production begins.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="vacat-card rounded-2xl p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{service.price}</p>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-[var(--text)]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text3)]">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-8">
        <div className="vacat-container">
          <div className="rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.035)] p-6 md:p-8">
            <div className="max-w-3xl">
              <p className="vacat-eyebrow mb-3">How it starts</p>
              <h2 className="vacat-title text-3xl font-medium tracking-[-0.055em] md:text-5xl">A managed studio workflow.</h2>
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-[rgba(202,254,97,0.14)] bg-[rgba(5,5,5,0.32)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">0{index + 1}</p>
                  <p className="mt-3 text-base font-medium text-[var(--text)]">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/start" className="vacat-button-primary px-6 py-3 text-sm">
                Submit Creative Brief
              </Link>
              <Link href="/templates" className="vacat-button-secondary px-6 py-3 text-sm">
                Browse Studio Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
