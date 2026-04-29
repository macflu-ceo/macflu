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

// Continent dot pattern — generated once, cached
const ORIGIN_DOTS = (() => {
  const continents = [
    { x:[120,360], y:[180,380], cx:240, cy:280, rx:120, ry:100, gap:0.15 },  // North America
    { x:[260,380], y:[400,600], cx:320, cy:500, rx:60,  ry:100, gap:0.15 },  // South America
    { x:[480,620], y:[200,320], cx:550, cy:260, rx:70,  ry:60,  gap:0.20 },  // Europe
    { x:[500,660], y:[320,540], cx:580, cy:430, rx:80,  ry:110, gap:0.18 },  // Africa
    { x:[620,1100],y:[170,280], cx:860, cy:220, rx:240, ry:55,  gap:0.25 },  // Russia / N Asia
    { x:[820,1080],y:[280,420], cx:950, cy:350, rx:130, ry:70,  gap:0.18 },  // China / SE Asia
    { x:[780,880], y:[340,430], cx:830, cy:385, rx:50,  ry:45,  gap:0.18 },  // India
    { x:[970,1080],y:[290,380], cx:1020,cy:335, rx:55,  ry:45,  gap:0.12 },  // Japan / Korea
    { x:[1080,1300],y:[480,600],cx:1190,cy:540, rx:110, ry:60,  gap:0.18 },  // Australia
  ];
  const dots = [];
  const SPACING = 14;
  for (let x = 60; x < 1380; x += SPACING) {
    for (let y = 140; y < 620; y += SPACING) {
      for (const c of continents) {
        if (x >= c.x[0] && x <= c.x[1] && y >= c.y[0] && y <= c.y[1]) {
          const dx = (x - c.cx) / c.rx;
          const dy = (y - c.cy) / c.ry;
          if (dx*dx + dy*dy < 1 && Math.random() > c.gap) {
            const isAsia = x > 870 && x < 1080 && y > 280 && y < 410;
            dots.push({ x, y, isAsia, delay: Math.random() * 4 });
            break;
          }
        }
      }
    }
  }
  return dots;
})();

function OriginMap({ cities }) {
  // SEOUL · NEW YORK · SHANGHAI · MILANO · PARIS
  const pts = [
    { name: cities[0], x: 990, y: 320 }, // Seoul
    { name: cities[1], x: 280, y: 280 }, // New York (US East Coast)
    { name: cities[2], x: 940, y: 380 }, // Shanghai
    { name: cities[3], x: 560, y: 290 }, // Milano
    { name: cities[4], x: 500, y: 270 }, // Paris
  ];
  return (
    <svg className="origin-map-bg" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
      <g className="origin-dots">
        {ORIGIN_DOTS.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r="2.5"
            className={"dot" + (d.isAsia ? " persian" : "")}
            style={{ animationDelay: d.delay + "s" }} />
        ))}
      </g>
      <g className="origin-cities">
        {pts.map((p, i) => (
          <g key={i} transform={`translate(${p.x} ${p.y})`}>
            <circle className="city-halo" r={i === 0 ? 14 : 12} />
            <circle className="city-core" r={i === 0 ? 5 : 4} />
            <text className="city-label" x={i === 0 ? 14 : 12} y="4">{p.name}</text>
          </g>
        ))}
      </g>
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
        <div className="origin-overlay__text">
          <span className="kicker">{h.originKicker}</span>
          <h2 className="origin-fullbleed__head fade-up">
            {h.originHeadA}<br />
            {h.originHeadB}<span className="accent">{h.originHeadAccent}</span>{h.originHeadC}
          </h2>
          <p className="origin-fullbleed__lede fade-up">
            {h.originLedeA} {h.originLedeB} {h.originLedeC}
          </p>
          <a href="#about" onClick={(e) => { e.preventDefault(); setPage("about"); }} className="btn btn--tertiary" style={{ marginTop: 32 }}>{h.originLink} <span className="arrow">→</span></a>
        </div>
        <div className="origin-overlay__spacer"></div>
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
