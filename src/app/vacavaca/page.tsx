import Link from "next/link";
import type { ReactNode } from "react";
import { jury, studioMetrics, studioWorks } from "@/data/vacavaca-studio";

export const dynamic = "force-dynamic";

const asset = (path: string) => `https://raw.githubusercontent.com/ruifengc166-boop/vacavaca/master/${path}`;
const originalRepoBase = "https://github.com/ruifengc166-boop/vacavaca/blob/master";

const navItems = [
  ["Overview", "#overview"],
  ["Original Links", "#links"],
  ["About", "#about"],
  ["Achievements", "#achievements"],
  ["Data", "#data"],
  ["Moments", "#moments"],
  ["Organization", "#organization"],
  ["Jury", "#jury"],
  ["Tracks", "#tracks"],
  ["Schedule", "#schedule"],
];

const originalLinks = [
  { label: "发现", labelEn: "Discover", href: `${originalRepoBase}/index.html` },
  { label: "创作人", labelEn: "Creators", href: `${originalRepoBase}/creators.html` },
  { label: "作品", labelEn: "Works", href: `${originalRepoBase}/works.html` },
  { label: "瓦卡奖", labelEn: "VACAT", href: `${originalRepoBase}/vacat.html` },
  { label: "活动", labelEn: "Events", href: `${originalRepoBase}/events.html` },
  { label: "引荐", labelEn: "Referral", href: `${originalRepoBase}/referral.html` },
  { label: "关于我们", labelEn: "About", href: `${originalRepoBase}/about.html` },
];

const supportModel = [
  {
    title: "1. 策展与评审标准 / Curatorial standards",
    body: "瓦卡奖沉淀的是 AI 视觉创意的审美标准、评审经验和赛道判断力，支撑 Studio 判断什么是好作品、好方向和可执行的商业视觉路线。",
  },
  {
    title: "2. 行业信用 / Industry credibility",
    body: "投稿规模、高校参与、评审阵容、线下活动和蓝皮书共同形成行业信用，让 Studio 不只是一个临时 AI 接单页面。",
  },
  {
    title: "3. 创作者生态 / Creator ecology",
    body: "瓦卡奖连接大量 AI 视觉创作者，但商业合作必须基于单独授权和项目协议，不能默认使用投稿作品。",
  },
  {
    title: "4. 方法论沉淀 / Production methodology",
    body: "赛事赛道、评审过程和活动实践沉淀为 Studio 的制作方法论，例如品牌影像、主视觉、城市形象片、舞台视觉和 IP 概念片。",
  },
  {
    title: "5. 独立商业交付 / Independent delivery",
    body: "VacaVaca Studio 的商业项目通过原创 Brief、客户自有或授权素材、授权创作者独立制作，不把瓦卡奖投稿作品直接商业化。",
  },
];

const achievements = [
  {
    icon: "🏆",
    title: "行业标杆地位",
    body: "被新华社、人民网等权威媒体誉为“中国 AI 创意第一赛”，定位为 AI 视觉创意界的“奥斯卡”，已成为行业风向标。",
  },
  {
    icon: "🎬",
    title: "作品影响力",
    body: "首届金奖作品《山海经》全网播放量突破 5000 万，登上微博热搜第四位；第二届作品技术精度与艺术表现力实现跨越式提升。",
  },
  {
    icon: "🤝",
    title: "产业转化成效",
    body: "首届达成意向合作项目及订单共 272 个，初步构建龙岗 AI 视觉创意生态圈；第二届形成“能获奖、能对接、能变现”的完整产业生态。",
  },
  {
    icon: "📚",
    title: "学术贡献",
    body: "2025 年发布全国首部《AI 视觉创意应用蓝皮书 2025》，填补国内 AI 视觉创意领域系统性研究空白。",
  },
  {
    icon: "🌍",
    title: "国际影响力",
    body: "第二届收到北京电影学院 49 份特邀投稿、国际学生媒体艺术节 20 份特邀投稿，成为全球 AI 创意领域具有广泛影响力的交流平台。",
  },
];

const organization = [
  { title: "指导单位", body: "深圳市委宣传部 · 深圳市委网信办 · 深圳市文化广电旅游体育局" },
  { title: "主办单位", body: "深圳市龙岗区人民政府 · 上海电影股份有限公司 · 哔哩哔哩" },
  { title: "承办单位", body: "深圳市龙岗区文化广电旅游体育局" },
  { title: "协办单位", body: "上影（深圳）数智文创科技有限公司 · 深圳市天健云途数字产业运营有限公司 · 深圳市云启数字产业发展有限公司 · 深圳市珞英缤纷科技有限公司" },
];

const tracks = [
  {
    group: "AI 视频类",
    rows: [
      ["AI 真实叙事影片", "《ANIMA (上)》《Green Screen 绿幕》《龙门客栈 2067》等 15 件"],
      ["AI 动画叙事影片", "《带上她的眼睛》《敦煌行 | 第二季 - 九泉十二宫》《水墨国风》等 15 件"],
      ["AI 商业创意影片", "《AI 上文博》《法拉利 Purosangue》《智绘大芬创艺无限》等 15 件"],
      ["AI 视觉艺术影片", "《ECHO》《记忆在逃》《长江缝隙》等 11 件以上"],
    ],
  },
  {
    group: "AI 图像类",
    rows: [["AI 艺术海报", "《EVE NO.1》《Human Machine》《百合》《国瓷幻境》等 14 件"]],
  },
];

const schedule = [
  ["06.16 - 07.31", "📢 作品征集"],
  ["08.01 - 09.30", "🔍 技术筛查 · 专业评审"],
  ["10.17 - 10.19", "🏆 颁奖典礼及配套活动"],
  ["10.17 - 11.16", "🎨 AI视觉创意作品展"],
];

const moments = [
  { title: "颁奖典礼及项目签约", image: asset("assets/events/day1-schedule.png") },
  { title: "AI 视觉技术工作坊", image: asset("assets/events/day2-workshop.png") },
  { title: "AI Battle Day", image: asset("assets/events/day3-competition.png") },
  { title: "AI 视觉创意作品展", image: asset("assets/events/exhibition.png") },
  { title: "关于瓦卡奖", image: asset("assets/about/vacat-about.png") },
  { title: "瓦卡奖主视觉", image: asset("assets/carousel/carousel-01.jpg") },
];

export default function VacaVacaOverviewPage() {
  return (
    <main className="vv-content-page">
      <section className="vv-content-hero" id="overview">
        <div className="vv-container">
          <p className="vacat-eyebrow">瓦卡奖 VACAT</p>
          <h1>全球 AI 视觉创意大赛</h1>
          <p>
            Vision Arts Created by AI Technology. AI视觉创意界的「奥斯卡」平台，也是 VacaVaca Studio 的非商业奖项、行业信用与创作者生态支撑层。
          </p>
          <div className="vv-metric-row">
            {studioMetrics.map((metric) => <div key={metric.label} className="vv-data-card"><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
          </div>
        </div>
        <div className="mt-14 h-[340px] w-full overflow-hidden border-y border-[rgba(255,255,255,0.08)] md:h-[560px]">
          <img src={asset("assets/carousel/carousel-01.jpg")} alt="瓦卡奖 VACAT" className="h-full w-full object-cover" />
        </div>
      </section>

      <nav className="vv-container py-5">
        <div className="flex flex-wrap gap-2 rounded-2xl border border-[rgba(202,254,97,0.14)] bg-[rgba(35,52,95,0.42)] p-2">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-4 py-2 text-sm text-[var(--text3)] transition hover:bg-[rgba(202,254,97,0.08)] hover:text-[var(--gold)]">
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section className="vv-container vv-section" id="links">
        <SectionHeader title="原站链接 / Original VACAT Links" more="Restored from the vacavaca repository" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {originalLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="vacat-card rounded-2xl p-5 transition hover:-translate-y-1 hover:border-[rgba(202,254,97,0.3)]">
              <p className="text-lg font-semibold text-[var(--text)]">{item.label}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--gold)]">{item.labelEn}</p>
            </a>
          ))}
        </div>
        <p className="mt-4 text-xs leading-6 text-[var(--text3)]">
          这里先恢复原 vacavaca 仓库中的页面入口。未来如果有正式域名，只需要把链接基础地址从 GitHub 仓库地址替换为正式站点地址。
        </p>
      </section>

      <section className="vv-container vv-section" id="about">
        <SectionHeader title="关于瓦卡奖" more="About VACAT" />
        <div className="vv-award-intro">
          <div>
            <h2>AI视觉创意大赛（瓦卡奖VACAT）</h2>
            <p>
              瓦卡奖作为全球首个在 AI 视觉领域具有重大影响力的活动，围绕 AI 视频、AI 图像、视觉艺术、商业创意、产业转化和创作者生态展开征集、评审、展示与交流。
            </p>
            <p>
              对 VacaVaca Studio 来说，瓦卡奖不是商业作品素材库，而是行业信用、审美标准、创作者生态和生产方法论的来源。商业项目由 Studio 通过原创 brief、授权创作者和客户自有或授权素材独立完成。
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)]">
            <img src={asset("assets/about/vacat-about.png")} alt="关于瓦卡奖" className="h-full w-full object-cover" />
          </div>
        </div>
        <RightsNotice />
      </section>

      <section className="vv-container vv-section" id="support-model">
        <SectionHeader title="瓦卡奖如何支撑 Studio" more="Proof layer, not work library" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {supportModel.map((item) => (
            <div key={item.title} className="vacat-card rounded-2xl p-5">
              <h3 className="text-base font-semibold tracking-[-0.03em] text-[var(--text)]">{item.title}</h3>
              <p className="mt-3 text-xs leading-6 text-[var(--text3)]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="vv-container vv-section" id="achievements">
        <SectionHeader title="核心成果" more="Core achievements" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <div key={item.title} className="vacat-card rounded-2xl p-5">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text3)]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="vv-container vv-section" id="data">
        <SectionHeader title="第二届大赛数据" more="Submissions, awards and universities" />
        <div className="grid gap-4 md:grid-cols-3">
          <DataCard value="4,646" label="投稿作品" />
          <DataCard value="76" label="获奖作品" />
          <DataCard value="92" label="参赛高校" />
        </div>
      </section>

      <section className="vv-container vv-section" id="moments">
        <SectionHeader title="精彩瞬间" more={<Link href="/vacavaca/events">View event page →</Link>} />
        <div className="grid gap-3 md:grid-cols-3">
          {moments.map((moment) => (
            <div key={moment.title} className="vacat-card overflow-hidden rounded-2xl">
              <img src={moment.image} alt={moment.title} className="aspect-video w-full object-cover" />
              <p className="p-4 text-sm text-[var(--text2)]">{moment.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="vv-container vv-section" id="organization">
        <SectionHeader title="组织架构" more="Organizing structure" />
        <div className="grid gap-4 md:grid-cols-2">
          {organization.map((item) => <OrgCard key={item.title} title={item.title} body={item.body} />)}
        </div>
      </section>

      <section className="vv-container vv-section" id="jury">
        <SectionHeader title="专业评审团" more="Expert jury" />
        <div className="vv-judges">
          {jury.map((item) => {
            const [name, title] = item.split(" — ");
            return <div key={item} className="vv-judge"><div className="avatar">{name.slice(0, 1)}</div><div><div style={{ fontWeight: 700 }}>{name}</div><p>{title}</p></div></div>;
          })}
        </div>
      </section>

      <section className="vv-container vv-section" id="tracks">
        <SectionHeader title="赛道设置" more="Award tracks" />
        <div className="grid gap-8">
          {tracks.map((track) => (
            <div key={track.group} className="vacat-card rounded-[24px] p-6">
              <h3 className="text-2xl font-medium tracking-[-0.04em] text-[var(--text)]">{track.group}</h3>
              <div className="mt-5 grid gap-3">
                {track.rows.map(([name, examples]) => (
                  <div key={name} className="grid gap-2 border-t border-[rgba(255,255,255,0.08)] pt-3 text-sm md:grid-cols-[220px_1fr]">
                    <span className="font-medium text-[var(--text)]">{name}</span>
                    <span className="text-[var(--text3)]">{examples}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="vv-container vv-section" id="works">
        <SectionHeader title="代表奖项记录" more={<Link href="/vacavaca/works">View award archive →</Link>} />
        <div className="vv-video-grid">
          {studioWorks.slice(0, 6).map((work) => <WorkCard key={work.slug} work={work} />)}
        </div>
      </section>

      <section className="vv-container vv-section" id="schedule">
        <SectionHeader title="第二届大赛日程" more={<Link href="/vacavaca/events">查看详细日程 →</Link>} />
        <div className="grid gap-3">
          {schedule.map(([date, text]) => (
            <div key={date} className="vacat-card grid gap-3 rounded-2xl p-5 text-sm md:grid-cols-[180px_1fr]">
              <strong className="text-[var(--text)]">{date}</strong>
              <span className="text-[var(--text3)]">{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="vv-container vv-section">
        <div className="vv-final-panel">
          <h2>第三届瓦卡奖即将启动</h2>
          <p>敬请关注官方公告。商业化接单内容将由 VacaVaca Studio 另行补充，不与投稿作品默认绑定。</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/vacavaca/works" className="vacat-button-secondary px-6 py-3 text-sm">View Award Archive</Link>
            <Link href="/templates" className="vacat-button-primary px-6 py-3 text-sm">Commercial Directions</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({ title, more }: { title: string; more: ReactNode }) {
  return <div className="vv-section-header"><h2>{title}</h2><span className="more">{more}</span></div>;
}

function RightsNotice() {
  return (
    <div className="mt-6 rounded-2xl border border-[rgba(202,254,97,0.16)] bg-[rgba(202,254,97,0.06)] p-5 text-sm leading-7 text-[var(--text3)]">
      VACAT works are displayed as non-commercial award records. They are not offered for reuse, adaptation, licensing or commercial production by VacaVaca Studio unless the original creator provides separate written authorization.
    </div>
  );
}

function DataCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="vacat-card rounded-2xl p-6 text-center">
      <div className="text-4xl font-semibold tracking-[-0.05em] text-[var(--gold)]">{value}</div>
      <p className="mt-2 text-sm text-[var(--text3)]">{label}</p>
    </div>
  );
}

function OrgCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="vacat-card rounded-2xl p-5">
      <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--text3)]">{body}</p>
    </div>
  );
}

function WorkCard({ work }: { work: typeof studioWorks[number] }) {
  return (
    <article className="vv-video-card">
      <Link href={`/vacavaca/works/${work.slug}`} className="thumb">
        {work.previewVideoUrl ? (
          <video src={work.previewVideoUrl} poster={work.posterUrl} className="h-full w-full object-cover" muted loop playsInline preload="metadata" />
        ) : (
          <img src={work.posterUrl} alt={work.title} className="h-full w-full object-cover" />
        )}
      </Link>
      <div className="body">
        <h4>{work.title}<span className="vv-tag">{work.award}</span></h4>
        <div className="meta"><span>{work.creator}</span><span>{work.track}</span></div>
        <p className="mt-3 text-xs leading-5 text-[var(--text3)]">{work.summary}</p>
        <div className="vv-card-actions">
          <Link href={`/vacavaca/works/${work.slug}`} className="vv-btn-nav">View award record</Link>
        </div>
      </div>
    </article>
  );
}
