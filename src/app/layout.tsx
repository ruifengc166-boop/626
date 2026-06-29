import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./vacavaca-full.css";

const logo = "https://raw.githubusercontent.com/ruifengc166-boop/vacavaca/master/assets/logo/nav-logo.png";

export const metadata: Metadata = {
  title: "VacaVaca Studio",
  description: "VacaVaca Studio creates commissioned AI visual creative works backed by the VACAT creator ecosystem.",
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
            <nav className="vv-nav-links">
              <Link href="/vacavaca">Overview</Link>
              <Link href="/vacavaca/works">Works</Link>
              <Link href="/vacavaca/creators">Creators</Link>
              <Link href="/vacavaca#award">VACAT Award</Link>
              <Link href="/vacavaca/events">Events</Link>
              <Link href="/vacavaca#authority">Authority</Link>
            </nav>
            <div className="vv-nav-actions">
              <Link href="/templates" className="vv-btn-nav">Creative Menu</Link>
              <Link href="/start" className="vv-btn-reg">Commission Work</Link>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
