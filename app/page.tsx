const strengths = [
  {
    value: "18+",
    label: "核心行业场景",
  },
  {
    value: "96%",
    label: "项目准时交付率",
  },
  {
    value: "24h",
    label: "关键需求响应",
  },
];

const services = [
  {
    title: "战略与品牌建设",
    description:
      "梳理业务定位、客户画像与差异化表达，让品牌从第一眼就说清楚自己为什么值得信任。",
  },
  {
    title: "数字化产品设计",
    description:
      "从官网、客户门户到内部工具，设计可落地的流程、界面与体验，帮助团队提升转化和效率。",
  },
  {
    title: "增长运营支持",
    description:
      "围绕线索获取、内容节奏和数据反馈建立持续优化机制，让每一次触达都有下一步。",
  },
];

const process = [
  "发现业务机会",
  "定义解决方案",
  "快速设计上线",
  "持续复盘优化",
];

const caseNotes = [
  "帮助一家 B2B 服务公司重塑官网信息架构，询盘质量显著提升。",
  "为成长型团队搭建客户转化页面和销售资料系统，缩短沟通周期。",
  "把分散的运营流程整理为可复用工具，减少重复人工处理。",
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Stacol home">
          <span className="brand-mark">S</span>
          <span>Stacol</span>
        </a>
        <nav className="nav-links" aria-label="Page sections">
          <a href="#services">服务</a>
          <a href="#process">流程</a>
          <a href="#contact">联系</a>
        </nav>
        <a className="nav-action" href="mailto:hello@stacol.co">
          开始沟通
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">面向成长型公司的品牌与数字化伙伴</p>
          <h1>把公司的能力，变成客户一眼看懂的信任感。</h1>
          <p className="hero-text">
            Stacol 帮助企业梳理定位、设计数字体验，并把官网、内容和转化流程连接起来，
            让品牌表达更清楚，业务增长更有秩序。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              预约咨询
            </a>
            <a className="secondary-button" href="#services">
              查看服务
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Stacol service snapshot">
          <div className="panel-top">
            <span>项目总览</span>
            <span className="status-dot">稳定推进</span>
          </div>
          <div className="signal-card featured">
            <span className="signal-label">本月重点</span>
            <strong>品牌升级与客户转化路径</strong>
            <p>从定位、页面、内容到跟进机制，形成一套可执行增长方案。</p>
          </div>
          <div className="signal-grid">
            {strengths.map((item) => (
              <div className="metric" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="eyebrow">What we solve</p>
          <h2>让客户更快理解你是谁、能解决什么、为什么现在就该联系你。</h2>
        </div>
        <p>
          很多公司并不缺能力，缺的是清晰的表达和顺畅的转化路径。我们把战略、设计和执行放在同一张桌上，
          帮你把复杂业务翻译成客户愿意继续了解的体验。
        </p>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>服务能力</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process" id="process">
        <div className="section-heading">
          <p className="eyebrow">How we work</p>
          <h2>清晰推进，不把复杂留给你</h2>
        </div>
        <div className="process-track">
          {process.map((step, index) => (
            <div className="process-step" key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section proof">
        <div className="proof-copy">
          <p className="eyebrow">Selected outcomes</p>
          <h2>我们关注可见的业务结果，而不是只交付漂亮页面。</h2>
        </div>
        <div className="case-list">
          {caseNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </section>

      <section className="cta" id="contact">
        <div>
          <p className="eyebrow">Start with a conversation</p>
          <h2>准备让 Stacol 成为你公司的下一张名片了吗？</h2>
        </div>
        <a className="primary-button light" href="mailto:hello@stacol.co">
          hello@stacol.co
        </a>
      </section>
    </main>
  );
}
