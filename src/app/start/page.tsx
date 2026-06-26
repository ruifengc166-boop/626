"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { templates } from "@/data/templates";
import { formatCurrency, formatPlan } from "@/lib/utils";

const platforms = ["tiktok", "instagram_reels", "youtube_shorts", "meta_ads", "other"];

export default function StartPage() {
  return (
    <Suspense fallback={<main className="mx-auto max-w-4xl px-5 py-16 text-white">Loading...</main>}>
      <StartForm />
    </Suspense>
  );
}

function StartForm() {
  const searchParams = useSearchParams();
  const selected = searchParams.get("template") || "";
  const [templateId, setTemplateId] = useState(selected);
  const selectedTemplate = useMemo(
    () => templates.find((template) => template.id.toLowerCase() === templateId.toLowerCase()),
    [templateId]
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const requestDraft = Object.fromEntries(formData.entries());
    window.localStorage.setItem(
      "ai-ad-remix-last-request",
      JSON.stringify({ ...requestDraft, createdAt: new Date().toISOString() })
    );
    const brand = encodeURIComponent(String(formData.get("brandName") || ""));
    const template = encodeURIComponent(String(formData.get("selectedTemplateId") || ""));
    window.location.href = `/thank-you?template=${template}&brand=${brand}`;
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Product Brief</p>
        <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">Start Your Remix</h1>
        <p className="mt-5 text-lg leading-8 text-white/60">
          Send your product assets and selected video style. We will review the fit before production.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-white/[0.08] bg-[#0d0d0d] p-6 shadow-2xl shadow-black/20 md:p-8">
        {selectedTemplate ? (
          <div className="mb-8 grid gap-5 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] p-4 md:grid-cols-[160px_1fr]">
            <img src={selectedTemplate.thumbnailUrl} alt={selectedTemplate.title} className="aspect-[9/12] w-full rounded-[1rem] object-cover" />
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">Selected style</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{selectedTemplate.title}</h2>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/58">
                <span className="rounded-full border border-white/10 px-3 py-1">{selectedTemplate.id}</span>
                <span className="rounded-full border border-white/10 px-3 py-1">{formatPlan(selectedTemplate.recommendedPlan)}</span>
                <span className="rounded-full border border-white/10 px-3 py-1">From {formatCurrency(selectedTemplate.priceFrom)}</span>
              </div>
            </div>
          </div>
        ) : null}
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Selected Template ID">
            <select name="selectedTemplateId" value={templateId} onChange={(e) => setTemplateId(e.target.value)} className="input" required>
              <option value="">Select a template</option>
              {templates.map((template) => (
                <option key={template.id} value={template.id}>{template.id} · {template.title}</option>
              ))}
            </select>
          </Field>
          <Input label="Brand Name" name="brandName" required />
          <Input label="Product Name" name="productName" required />
          <Input label="Product Website / Product Link" name="productUrl" type="url" required />
          <Input label="Product Images Link" name="productAssetLinks" placeholder="Drive/Dropbox/website link" required />
          <Input label="Logo Link" name="logoAssetLinks" placeholder="Transparent logo preferred" required />
          <Input label="Selling Point 1" name="sellingPoint1" required />
          <Input label="Selling Point 2" name="sellingPoint2" />
          <Input label="Selling Point 3" name="sellingPoint3" />
          <Field label="Target Platform">
            <select name="targetPlatform" className="input" required>
              {platforms.map((platform) => <option key={platform} value={platform}>{platform}</option>)}
            </select>
          </Field>
          <Input label="Target Language" name="targetLanguage" defaultValue="English" required />
          <Input label="CTA Text" name="ctaText" placeholder="Shop Now / Try Free / Join Waitlist" required />
          <Input label="Contact Email" name="contactEmail" type="email" required />
          <Input label="Contact WhatsApp / Telegram" name="contactHandle" />
          <Input label="Budget Range" name="budgetRange" placeholder="$49 / $299 / $999+" />
          <Input label="Things to Avoid" name="thingsToAvoid" />
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <label className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 text-sm text-white/70">
            <input type="checkbox" name="needHumanOptimization" />
            Need Human Optimization?
          </label>
          <label className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 text-sm text-white/70">
            <input type="checkbox" name="needMultipleVersions" />
            Need Multiple Versions?
          </label>
        </div>
        <button type="submit" className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85">
          Submit Request
        </button>
      </form>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white/74">{label}</span>
      {children}
    </label>
  );
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <Field label={label}>
      <input {...props} className="input" />
    </Field>
  );
}
