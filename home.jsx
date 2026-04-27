// home.jsx — Macflu home page (post-restructure: 6 sections)
const { useState: useStateH, useEffect: useEffectH } = React;

function HeroAbstractCSS() {
  const [idx, setIdx] = useStateH(0);
  useEffectH(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % 5), 4000);
    return () => clearInterval(id);
  }, []);
  const frames = ["frame--runway", "frame--studio", "frame--milano", "frame--editorial", "frame--seoul"];
  return (
    <div className="hero-stage">
      {frames.map((f, i) => (
        <div key={i} className={"hero-clip " + (i === idx ? "is-on" : "")}>
          <div className="clip"><div className={"frame " + f}></div></div>
        </div>
      ))}
    </div>
  );
}

function HeroTypeOnly() {
  return (
    <div className="hero-stage hero-stage--type">
      <div className="ghost-line">influence · curation · grain · breath · current</div>
      <div className="ghost-line ghost-line--2">brands · creators · seoul · milano · across</div>
      <div className="ghost-line ghost-line--3">stories · style · borders · voices · editions</div>
    </div>
  );
}

function HeroAbstractSVG() {
  return (
    <div className="hero-stage hero-stage--svg">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="hg1" cx="20%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#2B5AAA" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2B5AAA" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hg2" cx="80%" cy="70%" r="50%">
            <stop offset="0%" stopColor="#E6433D" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#E6433D" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#hg1)" />
        <rect width="1440" height="900" fill="url(#hg2)" />
        <g stroke="#FAF6EC" strokeWidth="0.6" fill="none" opacity="0.55">
          {Array.from({ length: 14 }).map((_, i) => (
            <path key={i}
              d={`M 0 ${100 + i * 55} Q 360 ${80 + i * 55 + (i % 2 ? 40 : -30)} 720 ${100 + i * 55} T 1440 ${110 + i * 55}`} />
          ))}
        </g>
      </svg>
    </div>
  );
}

function Section1Hero({ t, variant }) {
  const h = t.home;
  const Hero = variant === "type" ? HeroTypeOnly : variant === "svg" ? HeroAbstractSVG : HeroAbstractCSS;
  return (
    <section className="screen screen--cream hero" data-screen-label="01 Hero">
      <Hero />
      <div className="grain"></div>
      <div className="content hero__kickers">
        {h.heroKickers.map((k, i) => (
          <span key={i} className={"m-tag" + (i === 1 ? " m-tag--mustard" : "")}>{k}</span>
        ))}
      </div>
      <div className="content">
        <h1 className="hero__big fade-up">
          {h.heroLine1} <span className="accent">{h.heroLine2}</span><br />{h.heroLine3}
        </h1>
        <p className="hero__sub fade-up">{h.heroSub}</p>
      </div>
      <div className="content hero__low">
        <span className="kicker">{h.heroEdition}</span>
        <span className="hero__scroll">{h.heroScroll}</span>
      </div>
    </section>
  );
}

function Section2Identity({ t, setPage }) {
  const h = t.home;
  return (
    <section className="screen screen--cream first-fade" data-screen-label="02 Identity">
      <div className="clip"><div className="frame frame--milano"></div></div>
      <div className="grain"></div>
      <div className="meta-row content"><span>{h.idMeta1}</span><span>{h.idMeta2}</span></div>
      <div className="content id-grid">
        <div>
          <h2 className="id-line id-line--upright fade-up">
            <span className="id-a">{h.idA}</span>{" "}
            <span className="id-b">{h.idB}</span>
            <span className="id-c">{h.idC}</span>
          </h2>
        </div>
        <div>
          <p className="lede lede--lg fade-up">{h.idLede}</p>
          <div className="id-cta" style={{ marginTop: 32 }}>
            <a href="#references" onClick={(e) => { e.preventDefault(); setPage("references"); }} className="btn btn--primary">{h.idCtaA} <span className="arrow">→</span></a>
            <a href="#services" onClick={(e) => { e.preventDefault(); setPage("services"); }} className="btn btn--secondary">{h.idCtaB} <span className="arrow">→</span></a>
          </div>
        </div>
      </div>
      <div className="meta-row content"><span>{h.idEst}</span><span>{h.idRoute}</span></div>
    </section>
  );
}

function Section3Field({ t }) {
  const h = t.home;
  const colors = ["", "fw-mustard", "", "", "fw-mustard", ""];
  return (
    <section className="screen screen--ink field" data-screen-label="03 Field">
      <svg className="field__map" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <g stroke="#FAF6EC" strokeWidth="0.5" fill="none">
          <path d="M 100 300 Q 280 240 460 300 T 820 320 Q 1000 280 1180 320" />
          <path d="M 60 480 Q 240 470 420 490 Q 600 510 780 490 T 1140 500" />
          <path d="M 200 660 Q 380 640 560 670 Q 740 700 920 680 T 1280 690" />
          <path d="M 100 200 Q 380 100 720 220 Q 1060 340 1340 200" strokeDasharray="4 8" stroke="#DBA42E" strokeWidth="0.8" />
        </g>
      </svg>
      <div className="meta-row content" style={{ color: "var(--cream)" }}>
        <span>{h.fieldMeta1}</span><span>{h.fieldMeta2}</span>
      </div>
      <div className="content field__words">
        {h.fieldWords.map((w, i) => (
          <span key={i} className={`float-word fw-${i + 1} ${colors[i]}`}>
            {w.split("\n").map((line, j) => (
              <React.Fragment key={j}>{line}{j === 0 && w.includes("\n") ? <br /> : null}</React.Fragment>
            ))}
          </span>
        ))}
      </div>
      <div className="meta-row content" style={{ color: "var(--cream)" }}>
        <span>{h.fieldNext}</span><span>{h.fieldStep}</span>
      </div>
    </section>
  );
}

function Section4Partners({ t }) {
  const h = t.home;
  const logos = ["MARNI", "JIL.SANDER", "OUR LEGACY", "STUDIO NICHOLSON", "AURALEE", "LEMAIRE", "TOTEME", "ACNE", "WALES", "BODE", "PALOMA", "STOFFA", "KHAITE", "CECILIE", "FRAMA", "TEKLA"];
  return (
    <section className="screen screen--cream" data-screen-label="04 Partners" style={{ minHeight: "auto", padding: "120px 48px" }}>
      <div className="content">
        <div className="meta-row" style={{ marginBottom: 32 }}><span>{h.partnerMeta1}</span><span>{h.partnerMeta2}</span></div>
        <h2 className="h-2 fade-up" style={{ maxWidth: "18ch" }}>{h.partnerHead}</h2>
        <div className="logos">
          {logos.map((l, i) => <div key={i} className="logo-cell">{l}</div>)}
        </div>
      </div>
    </section>
  );
}

function SectionSplit({ t, setPage, layout }) {
  const h = t.home;
  return (
    <section className={"split split--" + layout + " split--hover"} data-screen-label="05 Split">
      <div className="split__half screen--persian split-pane" data-pane="creators">
        <div className="clip"><div className="frame frame--seoul"></div></div>
        <div className="grain"></div>
        <div className="content">
          <span className="kicker">{h.splitForCreators}</span>
          <h2 className="h-1 fade-up" style={{ marginTop: 24 }}>{h.splitCreatorsHead.split("\n").map((l, j) => <React.Fragment key={j}>{l}{j === 0 ? <br /> : null}</React.Fragment>)}</h2>
        </div>
        <div className="content">
          <p className="lede lede--lg fade-up">{h.splitCreatorsLede}</p>
          <p className="split-hover-line">{h.splitCreatorsHover}</p>
          <a href="#contact" onClick={(e) => { e.preventDefault(); setPage("contact"); }} className="btn btn--inverse" style={{ marginTop: 24 }}>{h.splitCreatorsCta} <span className="arrow">→</span></a>
        </div>
      </div>
      <div className="split__half screen--tomato split-pane" data-pane="brands">
        <div className="clip"><div className="frame frame--editorial"></div></div>
        <div className="grain"></div>
        <div className="content">
          <span className="kicker">{h.splitForBrands}</span>
          <h2 className="h-1 fade-up" style={{ marginTop: 24 }}>{h.splitBrandsHead.split("\n").map((l, j) => <React.Fragment key={j}>{l}{j < h.splitBrandsHead.split("\n").length - 1 ? <br /> : null}</React.Fragment>)}</h2>
        </div>
        <div className="content">
          <p className="lede lede--lg fade-up">{h.splitBrandsLede}</p>
          <p className="split-hover-line">{h.splitBrandsHover}</p>
          <a href="#contact" onClick={(e) => { e.preventDefault(); setPage("contact"); }} className="btn btn--inverse" style={{ marginTop: 24 }}>{h.splitBrandsCta} <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

function OriginMap({ cities }) {
  // Cities laid out across a wide world band
  const pts = [
    { name: cities[0], x: 920, y: 320 }, // Seoul
    { name: cities[1], x: 1010, y: 350 }, // Tokyo
    { name: cities[2], x: 870, y: 380 }, // Shanghai
    { name: cities[3], x: 540, y: 310 }, // Milano
    { name: cities[4], x: 480, y: 280 }, // Paris
  ];
  const curve = (a, b) => {
    const mx = (a.x + b.x) / 2;
    const my = Math.min(a.y, b.y) - 90 - Math.abs(a.x - b.x) * 0.05;
    return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
  };
  return (
    <svg className="origin-map-bg" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* abstract continent grid lines */}
      <g stroke="var(--ink)" strokeWidth="0.4" fill="none" opacity="0.12">
        <path d="M 0 200 Q 240 170 460 200 Q 620 230 820 200 Q 1000 170 1180 200 Q 1320 220 1440 200" />
        <path d="M 0 320 Q 240 290 460 320 Q 620 350 820 320 Q 1000 290 1180 320 Q 1320 340 1440 320" />
        <path d="M 0 440 Q 240 410 460 440 Q 620 470 820 440 Q 1000 410 1180 440 Q 1320 460 1440 440" />
        <path d="M 0 560 Q 240 530 460 560 Q 620 590 820 560 Q 1000 530 1180 560 Q 1320 580 1440 560" />
        <path d="M 220 60 L 220 660" /><path d="M 460 60 L 460 660" /><path d="M 720 60 L 720 660" />
        <path d="M 980 60 L 980 660" /><path d="M 1220 60 L 1220 660" />
      </g>
      {/* abstract land masses — irregular blobs in faint ink */}
      <g fill="var(--ink)" opacity="0.06">
        <path d="M 60 240 Q 140 200 240 230 Q 340 220 420 260 Q 480 300 460 360 Q 420 420 340 430 Q 240 420 160 380 Q 80 340 60 280 Z" />
        <path d="M 540 220 Q 660 180 780 210 Q 880 220 940 270 Q 980 320 940 380 Q 880 420 780 410 Q 680 400 600 380 Q 540 340 520 290 Z" />
        <path d="M 820 280 Q 920 240 1020 270 Q 1100 290 1140 350 Q 1140 420 1080 460 Q 1000 480 920 460 Q 850 430 810 380 Q 790 330 820 290 Z" />
      </g>
      {/* connecting curves */}
      <g stroke="var(--ink)" strokeWidth="1.2" fill="none" strokeLinecap="round">
        {pts.slice(1).map((p, i) => (
          <path key={i} d={curve(pts[0], p)} className="route" style={{ animationDelay: `${0.4 + i * 0.45}s` }} />
        ))}
      </g>
      {/* cities */}
      {pts.map((p, i) => (
        <g key={i} className="city" style={{ animationDelay: `${i === 0 ? 0.2 : 0.4 + (i - 1) * 0.45 + 0.6}s` }}>
          <circle cx={p.x} cy={p.y} r="14" fill="var(--mustard)" opacity="0.18" className="city-halo" />
          <circle cx={p.x} cy={p.y} r="6" fill="var(--mustard)" filter="url(#glow)" />
          <text x={p.x + 16} y={p.y + 4} fontFamily="var(--mono)" fontSize="11" fill="var(--ink)" letterSpacing="0.18em" fontWeight="500">{p.name}</text>
        </g>
      ))}
    </svg>
  );
}

function Section5Origin({ t, setPage }) {
  const h = t.home;
  return (
    <section className="screen screen--cream origin-fullbleed" data-screen-label="06 Origin">
      <OriginMap cities={h.mapCities} />
      <div className="grain"></div>
      <div className="origin-overlay">
        <span className="kicker">{h.originKicker}</span>
        <h2 className="origin-fullbleed__head fade-up">
          {h.originHead.split("\n").map((l, j) => <React.Fragment key={j}>{l}{j === 0 ? <br /> : null}</React.Fragment>)}
        </h2>
        <p className="origin-fullbleed__lede fade-up">
          {h.originLedeA}<br />
          <span className="origin-italic">{h.originLedeB}</span> {h.originLedeC}
        </p>
        <a href="#about" onClick={(e) => { e.preventDefault(); setPage("about"); }} className="btn btn--tertiary" style={{ marginTop: 32 }}>{h.originLink} <span className="arrow">→</span></a>
      </div>
    </section>
  );
}

function Section6Letter({ t, setPage }) {
  const h = t.home;
  return (
    <section className="screen screen--cream ceo" data-screen-label="07 Letter">
      <div className="ceo__photo content"></div>
      <div className="content">
        <span className="kicker" style={{ display: "block", marginBottom: 24 }}>{h.ceoKicker}</span>
        <p className="ceo__letter fade-up">{h.ceoLetterA}<br />{h.ceoLetterB}</p>
        <p className="ceo__sign">{h.ceoSign}</p>
      </div>
      <a href="#contact" onClick={(e) => { e.preventDefault(); setPage("contact"); }} className="ceo__cta full-cta">{h.ceoCta}  →</a>
    </section>
  );
}

function HomePage({ t, setPage, tweaks }) {
  return (
    <>
      <Section1Hero t={t} variant={tweaks.heroVariant} />
      <Section2Identity t={t} setPage={setPage} />
      <Section3Field t={t} />
      <Marquee words={t.marquee} variant="ink" />
      <Section4Partners t={t} />
      <SectionSplit t={t} setPage={setPage} layout={tweaks.splitLayout} />
      <Section5Origin t={t} setPage={setPage} />
      <Section6Letter t={t} setPage={setPage} />
    </>
  );
}

window.HomePage = HomePage;
