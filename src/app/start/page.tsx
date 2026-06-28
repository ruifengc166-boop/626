"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { templates } from "@/data/templates";
import { formatCurrency } from "@/lib/utils";

const platforms = ["TikTok", "Instagram Reels", "YouTube Shorts", "Meta Ads", "Other"];

export default function StartPage() {
  return (
    <Suspense fallback={<main className="mx-auto max-w-4xl px-5 py-16 text-white">Loading...</main>}>
      <StartForm />
    </Suspense>
  );
}

function StartForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [templateId, setTemplateId] = useState(searchParams.get("template") || "");
  const recommendedPlan = searchParams.get("plan") || "";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const selectedTemplate = useMemo(
    () => templates.find((template) => template.id.toLowerCase() === templateId.toLowerCase()),
    [templateId]
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.needHumanOptimization = formData.get("needHumanOptimization") === "on" ? "true" : "false";
    payload.needMultipleVersions = formData.get("needMultipleVersions") === "on" ? "true" : "false";

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to submit brief");
      router.push(`/thank-you?order=${encodeURIComponent(result.order.id)}&template=${encodeURIComponent(String(payload.selectedTemplateId))}&brand=${encodeURIComponent(String(payload.brandName))}`);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Failed to submit brief");
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">New Product Ad Request</p>
        <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">Request a new product ad.</h1>
        <p className="mt-5 text-lg leading-8 text-white/60">Send your product assets and campaign goal. A creator-led team will confirm fit, scope and price before payment.</p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-white/[0.08] bg-[#0d0d0d] p-6 shadow-2xl shadow-black/20 md:p-8">
        {recommendedPlan ? <div className="mb-6 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 text-sm text-white/62">Recommended next step: <span className="text-white">{recommendedPlan}</span></div> : null}
        {selectedTemplate ? <SelectedTemplateCard template={selectedTemplate} /> : null}
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Preferred Style">
            <select name="selectedTemplateId" value={templateId} onChange={(event) => setTemplateId(event.target.value)} className="input" required>
              <option value="">Select a style</option>
              {templates.map((template) => <option key={template.id} value={template.id}>{template.title}</option>)}
            </select>
          </Field>
          <Input label="Brand Name" name="brandName" required />
          <Input label="Product Name" name="productName" required />
          <Input label="Product Link" name="productUrl" type="url" required />
          <Input label="Product Asset Links" name="productAssetLinks" placeholder="Drive, Dropbox, website link" required />
          <Input label="Logo Link" name="logoAssetLinks" placeholder="Transparent logo preferred" required />
          <Input label="Main Selling Point" name="sellingPoint1" required />
          <Input label="Second Selling Point" name="sellingPoint2" />
          <Input label="Third Selling Point" name="sellingPoint3" />
          <Field label="Target Platform">
            <select name="targetPlatform" className="input" required>
              {platforms.map((platform) => <option key={platform} value={platform}>{platform}</option>)}
            </select>
          </Field>
          <Input label="Target Language" name="targetLanguage" defaultValue="English" required />
          <Input label="CTA Text" name="ctaText" placeholder="Shop Now / Try Free / Join Waitlist" required />
          <Input label="Contact Email" name="contactEmail" type="email" required />
          <Input label="Contact Handle" name="contactHandle" placeholder="Optional" />
          <Input label="Expected Budget" name="budgetRange" defaultValue={recommendedPlan} placeholder="$249 pilot / $399 polished ad / $1,499 test pack" />
          <Input label="Anything to Avoid" name="thingsToAvoid" />
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <label className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 text-sm text-white/70"><input type="checkbox" name="needHumanOptimization" />I want creator review</label>
          <label className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 text-sm text-white/70"><input type="checkbox" name="needMultipleVersions" />I want multiple versions</label>
        </div>
        <p className="mt-6 text-sm text-white/42">No payment is required now. We will confirm scope before production starts.</p>
        {error ? <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-100">{error}</div> : null}
        <button type="submit" disabled={isSubmitting} className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85 disabled:cursor-not-allowed disabled:opacity-60">
          {isSubmitting ? "Submitting..." : "Submit Brief"}
        </button>
      </form>
    </main>
  );
}

function SelectedTemplateCard({ template }: { template: (typeof templates)[number] }) {
  return (
    <div className="mb-8 grid gap-5 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] p-4 md:grid-cols-[160px_1fr]">
      <img src={template.thumbnailUrl} alt={template.title} className="aspect-[9/12] w-full rounded-[1rem] object-cover" />
      <div className="flex flex-col justify-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">Preferred style</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{template.title}</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/58">
          <span className="rounded-full border border-white/10 px-3 py-1">Style preview</span>
          <span className="rounded-full border border-white/10 px-3 py-1">From {formatCurrency(template.priceFrom)}</span>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium text-white/74">{label}</span>{children}</label>;
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return <Field label={label}><input {...props} className="input" /></Field>;
}
