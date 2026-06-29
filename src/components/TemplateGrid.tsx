"use client";

import { useMemo, useState } from "react";
import type { Template } from "@/data/templates";
import { templateCategories } from "@/data/templates";
import { TemplateCard } from "@/components/TemplateCard";
import { cn } from "@/lib/utils";

export function TemplateGrid({ templates }: { templates: Template[] }) {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => {
    if (active === "All") return templates;
    return templates.filter((template) => template.category.includes(active));
  }, [active, templates]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {["All", ...templateCategories].map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition",
              active === category
                ? "border-[rgba(202,254,97,0.65)] bg-[rgba(202,254,97,0.18)] text-[var(--vacat-gold)] shadow-[0_0_24px_rgba(202,254,97,0.12)]"
                : "border-white/10 bg-white/[0.04] text-white/58 hover:border-[rgba(202,254,97,0.35)] hover:text-[var(--vacat-gold)]"
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((template) => (
          <TemplateCard key={template.id} template={template} showSuitableProducts />
        ))}
      </div>
    </div>
  );
}
