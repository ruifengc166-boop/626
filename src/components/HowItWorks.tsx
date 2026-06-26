const steps = [
  ["01", "Pick a Video Style", "Choose from our ready-made AI ad styles."],
  ["02", "Send Your Product", "Upload your product link, images, logo, selling points and CTA."],
  ["03", "Get Your Adapted Ad", "We remake the style for your product and refine it when needed."],
];

export function HowItWorks() {
  return (
    <section className="border-y border-white/[0.08] bg-[#080808] px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">How It Works</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map(([number, title, body]) => (
            <div key={number} className="rounded-[24px] border border-white/[0.08] bg-white/[0.04] p-6">
              <p className="text-5xl font-medium tracking-[-0.04em] text-white/18">{number}</p>
              <h3 className="mt-10 text-xl font-medium tracking-tight text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/56">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
