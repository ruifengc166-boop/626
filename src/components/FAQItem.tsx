export function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-t border-white/[0.08] px-5 py-6 first:border-t-0 md:px-7">
      <h3 className="text-lg font-semibold tracking-tight text-white">{question}</h3>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-white/58">{answer}</p>
    </div>
  );
}
