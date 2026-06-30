import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./vacavaca-full.css";

const logo = "https://raw.githubusercontent.com/ruifengc166-boop/vacavaca/master/assets/logo/nav-logo.png";

export const metadata: Metadata = {
  title: "VacaVaca Studio",
  description: "VacaVaca Studio creates commissioned AI visual creative works backed by the VACAT Award ecosystem.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="vv-navbar">
          <div className="vv-container">
            <Link href="/" className="vv-logo" aria-label="VacaVaca Studio">
              <img src={logo} alt="VacaVaca Studio" />
            </Link>
            <div className="vv-nav-actions">
              <Link href="/templates" className="vv-btn-nav">Creative Directions</Link>
              <Link href="/vacavaca/works" className="vv-btn-nav">Reference Works</Link>
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
