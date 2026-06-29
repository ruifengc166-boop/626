import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "VACAVACA Ad Remix Studio",
  description: "English product ad ordering layer powered by VACAVACA creator-network credibility.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050505] text-white antialiased">
        <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#050505]/82 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
            <Link href="/" className="text-sm font-semibold tracking-tight text-white">
              VACAVACA Ad Remix
            </Link>
            <nav className="flex items-center gap-5 text-sm text-white/60">
              <Link href="/#vacavaca-proof" className="hidden transition hover:text-white md:inline">
                VACAVACA
              </Link>
              <Link href="/free-ad-review" className="transition hover:text-white">
                Free Review
              </Link>
              <Link href="/templates" className="hidden transition hover:text-white sm:inline">
                Styles
              </Link>
              <Link href="/start" className="rounded-full border border-white/10 bg-white px-4 py-2 text-black transition hover:bg-white/85">
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
