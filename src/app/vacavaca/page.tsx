import Link from "next/link";

export const dynamic = "force-dynamic";

const asset = (path: string) => `https://raw.githubusercontent.com/ruifengc166-boop/vacavaca/master/${path}`;
const logo = asset("assets/logo/nav-logo.png");
const heroBadge = asset("assets/logo/hero-badge-logo.png");
const carousel = asset("assets/carousel/carousel-01.jpg");

const stats = [
  ["4,646", "第二届投稿作品"],
  ["76", "获奖作品"],
  ["92", "参赛高校"],
];

const heroWorks = [
  { title: "山海经", creator: "首届金奖作品", mark: "山" },
  { title: "ANIMA (上)", creator: "AI真实叙事影片", mark: "A" },
  { title: "龙门客栈 2067", creator: "经典IP改编", mark: "龙" },
];

const works = [
  { title: "山海经", creator: "首届金奖作品", award: "金奖", track: "AI神话视觉叙事", mark: "山" },
  { title: "ANIMA (上)", creator: "VACAT创作者", award: "获奖", track: "AI真实叙事影片", mark: "A" },
  { title: "Green Screen 绿幕", creator: "VACAT创作者", award: "获奖", track: "AI真实叙事影片", mark: "绿" },
  { title: "龙门客栈 2067", creator: "VACAT创作者", award: "获奖", track: "经典IP改编", mark: "龙" },
  { title: "带上她的眼睛", creator: "VACAT创作者", award: "获奖", track: "AI动画叙事影片", mark: "眼" },
  { title: "敦煌行 第二季", creator: "VACAT创作者", award: "获奖", track: "AI动画叙事影片", mark: "敦" },
  { title: "水墨国风", creator: "VACAT创作者", award: "获奖", track: "AI动画叙事影片", mark: "墨" },
  { title: "AI 上文博", creator: "VACAT创作者", award: "获奖", track: "AI商业创意影片", mark: "博" },
  { title: "智绘大芬创艺无限", creator: "VACAT创作者", award: "获奖", track: "AI商业创意影片", mark: "芬" },
  { title: "ECHO", creator: "VACAT创作者", award: "获奖", track: "AI视觉艺术影片", mark: "E" },
  { title: "记忆在逃", creator: "VACAT创作者", award: "获奖", track: "AI视觉艺术影片", mark: "忆" },
  { title: "国瓷幻境", creator: "VACAT创作者", award: "获奖", track: "AI艺术海报", mark: "瓷" },
];

const creators = [
  { name: "AI真实叙事创作者", lv: "creator", tag: "电影感 / 真实叙事", count: 15, likes: "2.1k", av: "真" },
  { name: "AI动画叙事创作者", lv: "creator", tag: "动画短片 / 文学改编", count: 15, likes: "1.8k", av: "动" },
  { name: "AI商业创意创作者", lv: "dreamer", tag: "品牌片 / 文旅宣传", count: 15, likes: "1.5k", av: "商" },
  { name: "AI视觉艺术创作者", lv: "dreamer", tag: "实验影像 / 音乐视觉", count: 11, likes: "1.2k", av: "艺" },
  { name: "AI海报视觉创作者", lv: "explorer", tag: "图像 / 海报 / 虚拟IP", count: 14, likes: "980", av: "图" },
  { name: "Battle Day 竞技创作者", lv: "creator", tag: "限时创作 / Prompt Battle", count: 8, likes: "860", av: "B" },
];

const achievements = [
  ["🏆", "行业标杆地位", "被新华社、人民网等权威媒体誉为中国 AI 创意第一赛，定位为 AI 视觉创意界的奥斯卡，成为行业风向标。"],
  ["🎬", "作品影响力", "首届金奖作品《山海经》全网播放量突破 5000 万，登上微博热搜第四位；第二届作品技术精度与艺术表现力继续提升。"],
  ["🤝", "产业转化成效", "首届达成意向合作项目及订单共 272 个，初步构建龙岗 AI 视觉创意生态圈。"],
  ["📚", "学术贡献", "2025 年发布全国首部《AI 视觉创意应用蓝皮书 2025》，形成系统性研究资产。"],
  ["🌍", "国际影响力", "第二届收到北京电影学院 49 份特邀投稿、国际学生媒体艺术节 20 份特邀投稿。"],
];

const judges = [
  ["李", "李舸", "中国文联第十一届副主席、中国摄影家协会主席"],
  ["朱", "朱军", "清华大学人工智能研究院副院长、生数科技首席科学家"],
  ["陆", "陆蓉之", "著名策展人、艺评家、台北实践创意产业博士班导师"],
  ["曹", "曹颋", "北京电影学院影像传媒学院院长、青年电影制片厂董事长"],
  ["石", "石川武志", "京都国际独立游戏节发起人、UNKNOWN ASIA 联合发起人"],
  ["F", "Felipe Franco", "FF&CO. 创始人及创意总监，多次获国际设计奖项"],
  ["I", "Ingo Offermanns", "德国汉堡美术学院副院长、国际平面设计联盟 AGI 会员"],
];

const tracks = [
  ["AI真实叙事影片", "《ANIMA (上)》《Green Screen 绿幕》《龙门客栈 2067》等 15 件"],
  ["AI动画叙事影片", "《带上她的眼睛》《敦煌行 第二季》《水墨国风》等 15 件"],
  ["AI商业创意影片", "《AI 上文博》《法拉利 Purosangue》《智绘大芬创艺无限》等 15 件"],
  ["AI视觉艺术影片", "《ECHO》《记忆在逃》《长江缝隙》等 11 件以上"],
  ["AI艺术海报", "《EVE NO.1》《Human Machine》《百合》《国瓷幻境》等 14 件"],
];

const events = [
  { date: "10.17", title: "颁奖典礼及项目签约", text: "第二届瓦卡奖集中展示获奖作品、行业合作和项目签约，是奖项影响力与产业转化的核心场景。", image: asset("assets/events/day1-schedule.png") },
  { date: "10.18", title: "AI视觉技术工作坊", text: "围绕 AI 视频、图像、短剧、商业视觉工作流展开技术分享，为创作者提供学习和交流入口。", image: asset("assets/events/day2-workshop.png") },
  { date: "10.19", title: "AI竞技日 BATTLE DAY", text: "以限时创作、Prompt Battle 和现场竞技激活社区，让创作者能力被看见、被传播、被连接。", image: asset("assets/events/day3-competition.png") },
  { date: "10.17-11.16", title: "AI视觉创意汇", text: "通过线下展览集中呈现 AI 视觉作品、工具、创作者和行业合作可能性。", image: asset("assets/events/exhibition.png") },
];

const referralSteps = [
  ["1", "填写需求", "描述项目方向、预算、周期、内容类型和想参考的创作者/作品。"],
  ["2", "提交信息", "管理员 24 小时内联系确认，避免创作者和客户直接错配。"],
  ["3", "精准匹配", "根据需求推荐 1-5 位候选创作者或转入 AI REMIX Studio 履约。"],
  ["4", "对接签约", "确认意向后进入项目报价、制作、交付和案例回流流程。"],
];

export default function VacaVacaPage() {
  return (
    <main id="discover">
      <section className="vv-hero">
        <div className="vv-hero-bg" />
        <div className="vv-container">
          <div className="vv-hero-header">
            <div className="badge"><img src={heroBadge} alt="VACAT" /></div>
            <h1>AI视觉创作者<span style={{ color: "var(--gold)" }}>部落</span></h1>
            <p>瓦卡奖VACAT官方社区 · 第二届大赛4,646件投稿 · 76组入围 · 92所高校参与</p>
          </div>
          <div className="vv-stats">
            {stats.map(([value, label]) => <div key={label} style={{ textAlign: "center" }}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
          <div className="vv-hero-grid">
            {heroWorks.map((work, index) => (
              <div key={work.title} className={index === 1 ? "vv-hero-feat" : "vv-hero-item"}>
                <div className="vv-thumb-art">{work.mark}</div>
                <div className="vv-hero-card-info"><h3>{work.title}</h3><span>{work.creator}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="vv-container">
        <section id="works" className="vv-section" style={{ marginTop: 40 }}>
          <div className="vv-section-header"><h2>获奖作品</h2><a href="#all-works" className="more">浏览全部 →</a></div>
          <div className="vv-video-grid">
            {works.slice(0, 8).map((work) => <WorkCard key={work.title} work={work} />)}
          </div>
        </section>

        <section id="creators" className="vv-section" style={{ marginTop: 160 }}>
          <div className="vv-section-header"><h2>推荐创作人</h2><a href="#creator-list" className="more">浏览全部 →</a></div>
          <div className="vv-creator-row">
            {creators.map((creator) => (
              <div key={creator.name} className="vv-creator-item">
                <div className="av">{creator.av}</div>
                <h4>{creator.name}</h4>
                <span className={`badge-sm badge-${creator.lv}`}>{creator.lv[0].toUpperCase() + creator.lv.slice(1)}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="creator-list" className="vv-section">
          <div className="vv-section-header"><h2>创作人能力档案</h2><span className="more">赛事验证 · 社区沉淀 · 项目引荐</span></div>
          <div className="vv-creators-grid">
            {creators.map((creator) => (
              <div key={`${creator.name}-card`} className="vv-creator-card">
                <div className="av" style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--gold)", color: "#111", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>{creator.av}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}><h4 style={{ fontSize: 15, fontWeight: 600 }}>{creator.name}</h4><span style={{ fontSize: 11, color: "#34D399" }}>● 接单中</span></div>
                  <div style={{ fontSize: 12, color: "var(--text3)", margin: "6px 0" }}><span className={`badge-sm badge-${creator.lv}`}>{creator.lv}</span><span style={{ marginLeft: 8 }}>📄 {creator.count}作品</span><span style={{ marginLeft: 6 }}>👍 {creator.likes}</span></div>
                  <div style={{ fontSize: 11, color: "var(--text3)", lineHeight: 1.4 }}>{creator.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section id="award" className="vv-page-header">
        <div className="vv-container" style={{ maxWidth: 960 }}>
          <h1>瓦卡奖 VACAT</h1>
          <p>全球AI视觉创意大赛 · Vision Arts Created by AI Technology</p>
          <p style={{ fontSize: 13, color: "var(--text3)", marginTop: 6 }}>AI视觉创意界的「奥斯卡」平台</p>
        </div>
        <div className="vv-carousel"><img src={carousel} alt="瓦卡奖" /></div>
      </section>

      <section className="vv-container vv-rich">
        <div className="vv-big-space">
          <h3>关于瓦卡奖</h3>
          <p>AI视觉创意大赛（瓦卡奖VACAT）作为全球首个在 AI 视觉领域具有重大影响力的活动，连接创作者、作品、评审、活动、企业需求和产业转化，是 VacaVaca 创作者部落的核心内容资产。</p>
          <div style={{ marginTop: 24 }}><img src={asset("assets/about/vacat-about.png")} alt="关于瓦卡奖" style={{ borderRadius: 12, border: "1px solid var(--border)" }} /></div>
        </div>

        <div className="vv-big-space">
          <h3>核心成果</h3>
          <div className="vv-achievements">
            {achievements.map(([icon, title, desc]) => <div key={title} className="vv-achievement-card"><div style={{ fontSize: 40, lineHeight: 1, marginBottom: 8 }}>{icon}</div><div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{title}</div><p style={{ fontSize: 14 }}>{desc}</p></div>)}
          </div>
        </div>

        <div className="vv-big-space">
          <h3>第二届大赛数据</h3>
          <div className="vv-data-grid">
            <div className="vv-data-card"><strong>4,646</strong><span>投稿作品</span></div>
            <div className="vv-data-card"><strong>76</strong><span>获奖作品</span></div>
            <div className="vv-data-card"><strong>92</strong><span>参赛高校</span></div>
          </div>
        </div>

        <div className="vv-big-space" id="all-works">
          <h3>赛道与代表作品</h3>
          <div className="vv-video-grid" style={{ marginTop: 16 }}>
            {works.map((work) => <WorkCard key={`${work.title}-all`} work={work} />)}
          </div>
        </div>

        <div className="vv-big-space">
          <h3>赛道设置</h3>
          <div style={{ display: "grid", gap: 12 }}>
            {tracks.map(([title, desc]) => <div key={title} className="vv-achievement-card"><div style={{ color: "var(--gold)", fontWeight: 700 }}>{title}</div><p style={{ marginTop: 8 }}>{desc}</p></div>)}
          </div>
        </div>

        <div className="vv-big-space">
          <h3>专业评审团</h3>
          <div className="vv-judges">
            {judges.map(([initial, name, title]) => <div key={name} className="vv-judge"><div className="avatar">{initial}</div><div><div style={{ fontWeight: 700 }}>{name}</div><p style={{ fontSize: 13, lineHeight: 1.7 }}>{title}</p></div></div>)}
          </div>
        </div>
      </section>

      <section id="events" className="vv-container" style={{ paddingBottom: 60 }}>
        <div className="vv-section-header"><h2>活动资讯</h2><span className="more">第三届瓦卡奖VACAT即将启动 · 敬请关注</span></div>
        <div style={{ borderTop: "2px solid #fff" }}>
          {events.map((event) => <div key={event.title} className="vv-event-item"><div className="vv-event-row"><div className="vv-event-copy"><div className="vv-event-date">{event.date}</div><div className="vv-event-title">{event.title}</div><p>{event.text}</p></div><img src={event.image} alt={event.title} /></div></div>)}
        </div>
      </section>

      <section id="referral" className="vv-container vv-section">
        <div className="vv-section-header"><h2>发起引荐 / 提交商业需求</h2><Link href="/start" className="more">进入 AI REMIX 委托入口 →</Link></div>
        <div className="vv-referral">
          {referralSteps.map(([step, title, desc]) => <div key={step} className="vv-referral-step"><strong>{step}</strong><h3 style={{ marginTop: 12, fontSize: 18, fontWeight: 700 }}>{title}</h3><p style={{ marginTop: 8, color: "var(--text3)", fontSize: 14 }}>{desc}</p></div>)}
        </div>
        <div style={{ textAlign: "center", padding: "60px 0", borderTop: "1px solid var(--border)", marginTop: 60 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>你是AI视觉创作者？</h2>
          <p style={{ color: "var(--text3)", marginBottom: 20 }}>加入部落，让你的作品被企业发现</p>
          <Link href="/start" className="btn btn-primary btn-lg">提交项目需求</Link>
        </div>
      </section>

      <Footer />
      <div className="float-recruit"><div className="float-recruit-inner"><span>🎬</span><span>AI精品短剧创作营招募🔥</span></div></div>
    </main>
  );
}

function WorkCard({ work }: { work: { title: string; creator: string; award: string; track: string; mark: string } }) {
  return (
    <div className="vv-video-card">
      <div className="thumb"><div className="vv-thumb-art" style={{ fontSize: 38 }}>{work.mark}</div></div>
      <div className="body"><h4>{work.title}<span className="vv-tag">{work.award}</span></h4><div className="meta"><span className="creator">{work.creator}</span><span>{work.track}</span></div></div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="vv-footer">
      <div className="vv-container">
        <div className="vv-footer-grid">
          <div className="vv-footer-brand"><img src={logo} alt="VACAT" style={{ height: 36, width: "auto", marginBottom: 8 }} /><p>AI视觉创作者部落 · 瓦卡奖组委会支持的社区平台</p></div>
          <div className="vv-footer-col"><h4>发现</h4><a href="#creators">创作人</a><a href="#works">作品</a><a href="#events">活动</a></div>
          <div className="vv-footer-col"><h4>关于</h4><a href="#award">瓦卡奖</a><a href="#referral">引荐</a><Link href="/templates">风格库</Link></div>
          <div className="vv-footer-col"><h4>支持</h4><Link href="/start">提交需求</Link><Link href="/free-ad-review">免费诊断</Link><Link href="/admin/orders">后台</Link></div>
        </div>
        <div className="vv-footer-bottom"><span>© 2026 AI视觉创作者部落 · 瓦卡奖VACAT</span><span>AI REMIX Studio</span></div>
      </div>
    </footer>
  );
}
