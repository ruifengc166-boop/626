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
              "rounded-full border px-4 py-2 text-sm transition",
              active === category
                ? "border-white bg-white text-black"
                : "border-white/10 bg-white/[0.04] text-white/58 hover:border-white/25 hover:text-white"
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
