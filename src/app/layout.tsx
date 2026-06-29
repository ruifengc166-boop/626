import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "VACAVACA Ad Remix Studio",
  description: "AI visual creator works and VACAT award references remixed into product ads.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050505] text-white antialiased">
        <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#050505]/82 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
            <Link href="/" className="text-sm font-semibold tracking-tight text-white">
              VACAVACA <span className="text-[#cafe61]">Ad Remix</span>
            </Link>
            <nav className="flex items-center gap-5 text-sm text-white/60">
              <Link href="/#vacavaca-proof" className="hidden transition hover:text-[#cafe61] md:inline">
                Works
              </Link>
              <Link href="/free-ad-review" className="transition hover:text-[#cafe61]">
                Free Review
              </Link>
              <Link href="/templates" className="hidden transition hover:text-[#cafe61] sm:inline">
                Styles
              </Link>
              <Link href="/start" className="rounded-full border border-[#cafe61]/20 bg-[#cafe61] px-4 py-2 font-semibold text-black transition hover:bg-[#d8ff7a]">
                Start Remix
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
