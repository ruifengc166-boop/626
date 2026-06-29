const steps = [
  ["01", "Submit creative brief", "Project background, references, format and target audience."],
  ["02", "Confirm scope", "The studio checks visual route, complexity and price."],
  ["03", "Start production", "Production begins after approval and payment."],
  ["04", "Review and deliver", "Final files are checked for visual consistency and use-case fit."],
];

export function HowItWorks() {
  return (
    <section className="px-6 py-24">
      <div className="vacat-container">
        <div className="max-w-3xl">
          <p className="vacat-eyebrow mb-3">How it works</p>
          <h2 className="vacat-title text-3xl font-medium md:text-5xl">Brief first. Production after scope confirmation.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map(([number, title, body]) => (
            <div key={number} className="vacat-card rounded-[24px] p-6">
              <p className="text-5xl font-medium tracking-[-0.04em] text-[var(--gold)]/40">{number}</p>
              <h3 className="mt-10 text-xl font-medium tracking-tight text-[var(--text)]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text3)]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
