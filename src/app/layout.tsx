import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const logo = "https://raw.githubusercontent.com/ruifengc166-boop/vacavaca/master/assets/logo/nav-logo.png";

export const metadata: Metadata = {
  title: "VACAT · AI REMIX",
  description: "AI REMIX product ad studio backed by the VacaVaca / VACAT AI visual creator tribe.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="vv-navbar">
          <div className="vv-container">
            <Link href="/" className="vv-logo" aria-label="VACAT AI REMIX">
              <img src={logo} alt="VACAT" />
            </Link>
            <nav className="vv-nav-links">
              <Link href="/vacavaca#discover">发现</Link>
              <Link href="/vacavaca#creators">创作人</Link>
              <Link href="/vacavaca#works">作品</Link>
              <Link href="/vacavaca#award">瓦卡奖</Link>
              <Link href="/vacavaca#events">活动</Link>
              <Link href="/vacavaca#referral">引荐</Link>
            </nav>
            <div className="vv-nav-actions">
              <Link href="/templates" className="vv-btn-nav">风格库</Link>
              <Link href="/start" className="vv-btn-reg">提交需求</Link>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
