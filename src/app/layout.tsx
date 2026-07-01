import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./vacavaca-full.css";
import "./studio-admin.css";

export const metadata: Metadata = {
  title: "VacaVaca Studio",
  description: "VacaVaca Studio creates original AI visual work for brands, events and institutions, informed by the VACAT Award ecosystem.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="vv-navbar">
          <div className="vv-container">
            <Link href="/" className="vv-logo" aria-label="VacaVaca Studio">
              <span className="vv-logo-mark" aria-hidden="true" />
              <span className="vv-logo-text">
                <span className="vv-logo-word">VacaVaca</span>
                <span className="vv-logo-sub">Studio</span>
              </span>
            </Link>
            <div className="vv-nav-actions">
              <Link href="/templates" className="vv-btn-nav">Studio Services</Link>
              <Link href="/vacavaca" className="vv-btn-nav">VACAT Award</Link>
              <Link href="/free-ad-review" className="vv-btn-nav">Free Review</Link>
              <Link href="/start" className="vv-btn-reg">Submit Brief</Link>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
