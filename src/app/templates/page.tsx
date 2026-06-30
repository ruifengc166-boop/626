import { SectionHeader } from "@/components/SectionHeader";
import { TemplateGrid } from "@/components/TemplateGrid";
import { awardAuthority } from "@/data/vacavaca-studio";
import { listEffectiveTemplates } from "@/lib/template-admin";

export const dynamic = "force-dynamic";

export default async function TemplatesPage() {
  const templates = await listEffectiveTemplates();
  const activeTemplates = templates.filter((template) => template.status === "active");

  return (
    <main className="vacat-shell px-5 py-16 md:py-20">
      <div className="vacat-container relative z-10">
        <SectionHeader
          eyebrow="VacaVaca Studio Creative Directions"
          title="Choose an award-backed visual direction"
          description="These are not fixed templates. They are VACAT-inspired reference lanes that help clients describe the visual ambition, production complexity and creative route before commissioning custom work."
        />

        <div className="mt-10 grid gap-3 md:grid-cols-5">
          {awardAuthority.map((item) => (
            <div key={item} className="vacat-card vacat-card-glow rounded-2xl p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">VACAT Proof</p>
              <p className="mt-3 text-xs leading-5 text-[var(--text3)]">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <TemplateGrid templates={activeTemplates} />
        </div>
      </div>
    </main>
  );
}
