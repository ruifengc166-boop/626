import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI REMIX by VacaVaca",
  description: "Creator-led product ad studio backed by the VacaVaca / VACAT AI visual creator ecosystem.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white antialiased">
        <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0a0a0a]/55 backdrop-blur-2xl">
          <div className="vacat-container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="brand-mark">VV</span>
              <span className="leading-none">
                <span className="block text-sm font-semibold tracking-tight text-white">AI REMIX</span>
                <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--vacat-gold)]">by VacaVaca</span>
              </span>
            </Link>
            <nav className="flex items-center gap-1 text-sm text-white/58">
              <Link href="/vacavaca" className="hidden rounded-md px-3 py-2 transition hover:bg-white/[0.05] hover:text-white md:inline-flex">
                VacaVaca
              </Link>
              <Link href="/templates" className="hidden rounded-md px-3 py-2 transition hover:bg-white/[0.05] hover:text-white sm:inline-flex">
                Styles
              </Link>
              <Link href="/free-ad-review" className="hidden rounded-md px-3 py-2 transition hover:bg-white/[0.05] hover:text-white sm:inline-flex">
                Free Review
              </Link>
              <Link href="/start" className="vacat-button-primary ml-2 px-4 py-2 text-sm">
                Submit Brief
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
