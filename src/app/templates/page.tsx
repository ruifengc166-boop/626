import { SectionHeader } from "@/components/SectionHeader";
import { TemplateGrid } from "@/components/TemplateGrid";
import { listEffectiveTemplates } from "@/lib/template-admin";

export const dynamic = "force-dynamic";

export default async function TemplatesPage() {
  const templates = await listEffectiveTemplates();
  const activeTemplates = templates.filter((template) => template.status === "active");

  return (
    <main className="vacat-shell px-5 py-16 md:py-20">
      <div className="vacat-container relative z-10">
        <SectionHeader
          eyebrow="VacaVaca Studio Commercial Directions"
          title="Choose the type of original visual work you want to commission"
          description="These are Studio service lanes built from production methodology, not a menu of VACAT submitted works. VACAT informs our standards and creator ecology; commercial projects are produced independently with authorized creators and licensed or client-owned assets."
        />

        <div className="mt-8 rounded-2xl border border-[rgba(202,254,97,0.16)] bg-[rgba(202,254,97,0.06)] p-5 text-sm leading-7 text-[var(--text3)]">
          Award archive works are not reused or adapted through this page. Choose a direction to describe your desired output type; VacaVaca Studio will propose an original production route after reviewing your brief.
        </div>

        <div className="mt-12">
          <TemplateGrid templates={activeTemplates} />
        </div>
      </div>
    </main>
  );
}
