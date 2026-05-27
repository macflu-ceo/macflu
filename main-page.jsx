// MainPage — Macflu homepage, 8 sections
// ① Hero ② Identity ③ Edge ★ ④ Operate ⑤ Models ⑥ Creators ⑦ Brink entry ⑧ Origin + CTA + Footer

function MainPage({ tweaks, goTo }) {
  return (
    <main data-screen-label="Main · Macflu">
      <MainHero tweaks={tweaks} />
      <MainMarquee />
      <MainIdentity />
      <MainOperate />
      <MainModels />
      <MainCreators goTo={goTo} />
      <MainBrinkEntry goTo={goTo} />
      <MainOrigin goTo={goTo} />
      <SiteFooter goTo={goTo} />
    </main>
  );
}

// ─────── ① HERO ─────────────────────────────────────────────────────────────
function MainHero({ tweaks }) {
  const accent = tweaks.colorEmphasis;
  const heroLines = {
    persian: <React.Fragment><span className="accent--persian">Brands,</span><br/><span>dressed in</span><br/><span className="accent--tomato underline">influence.</span></React.Fragment>,
    tomato: <React.Fragment><span>Brands,</span><br/><span className="accent--tomato">dressed</span><br/><span>in influence.</span></React.Fragment>,
    mustard: <React.Fragment><span>Brands, dressed</span><br/><span className="accent--mustard">in influence.</span></React.Fragment>,
    balanced: <React.Fragment><span>Brands,</span><br/><span className="accent--persian">dressed in</span> <span className="accent--tomato">influence.</span></React.Fragment>,
  };
  return (
    <section className="hero" data-screen-label="01 Hero" data-nav-theme="cream">
      <div className="hero__float" aria-hidden="true">
        <span className="hero__float-word" style={{ top: '14%', left: '38%' }}>Influence.</span>
        <span className="hero__float-word" style={{ top: '62%', right: '6%', animationDelay: '-6s' }}>Curated.</span>
        <span className="hero__float-word" style={{ bottom: '8%', left: '8%', animationDelay: '-12s' }}>Seoul ↔ Milano</span>
      </div>
      <div className="hero__meta">
        <div>맥플루 · MACFLU</div>
        <div className="hero__meta-right">EDITION 01 · SS 26<br/>Brands × Creators × Commerce</div>
      </div>
      <div className="hero__center">
        <h1 className="hero__big">{heroLines[accent]}</h1>
        <p className="hero__sub">
          브랜드에 영향력을 입히는 패션 MCN.<br/>
          이탈리아 부티크 직계약과 한국 명품 인프라.
        </p>
      </div>
      <div className="hero__low">
        <div className="hero__index">01 / 08 — Identity · 항해의 시작</div>
        <div className="hero__scroll">SCROLL <span className="hero__scroll-arrow"></span></div>
      </div>
    </section>
  );
}

// ─────── HERO → IDENTITY MARQUEE ────────────────────────────────────────────
function MainMarquee() {
  const items = ['패션 MCN', 'Brands, dressed in influence', '50+ 부티크 직계약', '명품 공급 No.1', '글로벌 커머스'];
  const dup = [...items, ...items, ...items];
  return (
    <div className="marquee marquee--ink">
      <div className="marquee__track">
        {dup.map((t, i) => (
          <React.Fragment key={i}>
            <span>{t}</span>
            <span className="dot">—</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ─────── ② WHO WE ARE ───────────────────────────────────────────────────────
function MainIdentity() {
  return (
    <section className="who" data-screen-label="02 Identity" data-nav-theme="cream">
      <div className="who__grid">
        <h2 className="who__h reveal">
          패션의 자산을,<br/>
          <span className="acc-persian">콘텐츠로.</span>
        </h2>
        <div className="who__body">
          <p className="reveal"><strong>명품 브랜드부터, 스트릿까지.</strong></p>
          <p className="reveal">패션 브랜드와 영향력을 잇고.</p>
          <p className="reveal">브랜드와 크리에이터를, 광고가 아닌 <strong>콘텐츠로</strong> 잇는다.</p>
          <div className="who__meta">ESTABLISHED <span>·</span> KOREA <span>·</span> FASHION MCN</div>
        </div>
      </div>
    </section>
  );
}

// ─────── ③ THE EDGE ★ ───────────────────────────────────────────────────────
function MainEdge({ tweaks }) {
  const metrics = [
    { num: '50', plus: true, label: '이탈리아 부티크 공식 직계약', hint: 'BOUTIQUES · MILANO · FIRENZE · ROMA', kind: 'persian' },
    { num: '50', unit: '억+', label: '국내 명품 재고 보유', hint: '₩ KRW · IN STOCK · BONDED', kind: 'tomato' },
    { num: 'No.1', label: '국내 명품 공급사 네트워크', hint: 'PARENT GROUP · KR LUXURY SUPPLY', kind: 'mustard' },
    { num: '공식', label: '수입 인프라 직계약', hint: 'IMPORT · DIRECT · OFFICIAL', kind: 'ink' },
  ];

  return (
    <section className="edge" data-screen-label="03 The Edge ★" data-nav-theme="cream">
      <div className="edge__head">
        <div className="section__head" style={{ marginBottom: 0, paddingBottom: 24, borderBottom: '1px solid currentColor' }}>
          <div>
            <span className="section__index"><strong>03</strong> The Edge</span>
          </div>
          <div className="section__head-meta">핵심 자산. 시작하는 자리가 높습니다.</div>
        </div>
        <h2 className="edge__supertitle reveal">
          시작하는 자리가, <span className="acc">높습니다.</span>
        </h2>
        <p className="edge__sub reveal">
          명품 공급 인프라. 50+ 이탈리아 부티크 공식 직계약. 50억 규모 국내 재고.
          이 자산을 콘텐츠로 푸는 것이 맥플루의 일.
        </p>
      </div>

      {tweaks.metricStyle === 'bigNumbers' && <MetricsGrid metrics={metrics} />}
      {tweaks.metricStyle === 'cards' && <MetricsCards metrics={metrics} />}
      {tweaks.metricStyle === 'marquee' && <MetricsMarquee metrics={metrics} />}

      <EdgeGlobal />
    </section>
  );
}

// ─────── EDGE / GLOBAL — globe + city list ─────────────────────────────
function EdgeGlobal() {
  return (
    <div className="edge__global">
      <div className="edge__global-grid">
        <div className="edge__global-vis">
          <Globe />
        </div>
        <div className="edge__global-text">
          <span className="kicker">— GLOBAL · 글로벌 인프라</span>
          <h3 className="edge__global-h reveal">
            서울에서 시작한 직계약,<br/>이탈리아 전역으로.
          </h3>
          <p className="edge__global-p reveal">서울 본부에서 시작해 밀라노·피렌체·로마·나폴리·베네치아·토리노로. 부티크 50+ 공식 직계약.</p>

          <ul className="edge__global-cities">
            <li className="reveal"><span className="city-num">— 01</span><span className="city-name">SEOUL</span><span className="city-meta">서울 · HQ</span></li>
            <li className="reveal" style={{ transitionDelay: '60ms' }}><span className="city-num">— 02</span><span className="city-name">MILANO</span><span className="city-meta">밀라노 · 18</span></li>
            <li className="reveal" style={{ transitionDelay: '120ms' }}><span className="city-num">— 03</span><span className="city-name">FIRENZE</span><span className="city-meta">피렌체 · 12</span></li>
            <li className="reveal" style={{ transitionDelay: '180ms' }}><span className="city-num">— 04</span><span className="city-name">ROMA</span><span className="city-meta">로마 · 8</span></li>
            <li className="reveal" style={{ transitionDelay: '240ms' }}><span className="city-num">— 05</span><span className="city-name">+ 12 cities</span><span className="city-meta">in network</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Globe() {
  return (
    <svg viewBox="0 0 600 600" className="globe" aria-hidden="true">
      <defs>
        <path id="globe-arc-sm" d="M 460 260 Q 300 110 130 280"/>
        <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1A1A1A" stopOpacity="0.04"/>
          <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0"/>
        </radialGradient>
      </defs>

      <circle cx="300" cy="300" r="240" fill="url(#globe-glow)"/>
      <circle cx="300" cy="300" r="240" fill="none" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1"/>

      {/* latitudes — static */}
      <ellipse cx="300" cy="300" rx="240" ry="60"  fill="none" stroke="currentColor" strokeOpacity="0.12"/>
      <ellipse cx="300" cy="300" rx="240" ry="120" fill="none" stroke="currentColor" strokeOpacity="0.12"/>
      <ellipse cx="300" cy="300" rx="240" ry="180" fill="none" stroke="currentColor" strokeOpacity="0.12"/>
      <line x1="60" y1="300" x2="540" y2="300" stroke="currentColor" strokeOpacity="0.18"/>

      {/* longitudes — rotating */}
      <g>
        <ellipse cx="300" cy="300" rx="60"  ry="240" fill="none" stroke="currentColor" strokeOpacity="0.12"/>
        <ellipse cx="300" cy="300" rx="120" ry="240" fill="none" stroke="currentColor" strokeOpacity="0.12"/>
        <ellipse cx="300" cy="300" rx="180" ry="240" fill="none" stroke="currentColor" strokeOpacity="0.16"/>
        <line x1="300" y1="60" x2="300" y2="540" stroke="currentColor" strokeOpacity="0.18"/>
        <animateTransform attributeName="transform" type="rotate"
          from="0 300 300" to="360 300 300" dur="48s" repeatCount="indefinite"/>
      </g>

      {/* background arc reference */}
      <use href="#globe-arc-sm" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" fill="none"/>
      {/* dashed accent arc */}
      <use href="#globe-arc-sm" stroke="#E6433D" strokeWidth="1.5" fill="none" className="globe__arc"/>

      {/* cities */}
      <g className="globe__cities">
        {/* Seoul */}
        <circle cx="460" cy="260" r="12" fill="#E6433D" fillOpacity="0.18" className="globe__halo globe__halo--seoul"/>
        <circle cx="460" cy="260" r="6" fill="#E6433D"/>
        <text x="478" y="262" fill="currentColor" fontSize="11" fontFamily="JetBrains Mono, monospace" letterSpacing="0.18em">SEOUL</text>
        <text x="478" y="278" fill="currentColor" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="0.14em" opacity="0.45">37.56 N · HQ</text>

        {/* Milano */}
        <circle cx="130" cy="280" r="10" fill="#DBA42E" fillOpacity="0.22" className="globe__halo globe__halo--milano"/>
        <circle cx="130" cy="280" r="6" fill="#DBA42E"/>
        <text x="120" y="266" fill="currentColor" fontSize="11" fontFamily="JetBrains Mono, monospace" letterSpacing="0.18em" textAnchor="end">MILANO</text>
        <text x="120" y="282" fill="currentColor" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="0.14em" textAnchor="end" opacity="0.45">45.46 N · 18</text>

        {/* smaller cities */}
        <g className="globe__cities-small">
          <circle cx="160" cy="316" r="4" fill="#DBA42E"/>
          <text x="172" y="320" fill="currentColor" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="0.14em" opacity="0.55">FIRENZE</text>
          <circle cx="195" cy="350" r="3" fill="#DBA42E"/>
          <text x="207" y="354" fill="currentColor" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="0.14em" opacity="0.55">ROMA</text>
          <circle cx="180" cy="380" r="3" fill="#DBA42E"/>
          <circle cx="220" cy="370" r="2.5" fill="#DBA42E"/>
          <circle cx="100" cy="320" r="2.5" fill="#DBA42E"/>
        </g>
      </g>

      {/* traveling pulse along arc */}
      <circle r="5" fill="#E6433D">
        <animateMotion dur="4.2s" repeatCount="indefinite" rotate="auto">
          <mpath href="#globe-arc-sm"/>
        </animateMotion>
      </circle>
      <circle r="10" fill="#E6433D" fillOpacity="0.2">
        <animateMotion dur="4.2s" repeatCount="indefinite" rotate="auto">
          <mpath href="#globe-arc-sm"/>
        </animateMotion>
      </circle>

      {/* compass meta */}
      <text x="300" y="42" fill="currentColor" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="0.22em" textAnchor="middle" opacity="0.45">N · 90°</text>
      <text x="300" y="572" fill="currentColor" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="0.22em" textAnchor="middle" opacity="0.45">S · 90°</text>
      <text x="38" y="304" fill="currentColor" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="0.22em" textAnchor="end" opacity="0.45">W</text>
      <text x="562" y="304" fill="currentColor" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="0.22em" opacity="0.45">E</text>
    </svg>
  );
}

function MetricsGrid({ metrics }) {
  return (
    <div className="metrics-grid">
      {metrics.map((m, i) => (
        <div key={i} className={'metric metric--' + m.kind + ' slidein-block'} style={{ transitionDelay: (i * 120) + 'ms' }}>
          <div className="metric__index">— METRIC 0{i+1}</div>
          <div className="metric__num">
            <CountUp value={m.num} unit={m.unit} plus={m.plus} kind={m.kind} />
          </div>
          <div className="metric__label">{m.label}</div>
          <div className="metric__hint">{m.hint}</div>
        </div>
      ))}
    </div>
  );
}

function MetricsCards({ metrics }) {
  return (
    <div className="metric-cards">
      {metrics.map((m, i) => (
        <div key={i} className="metric-card reveal" style={{ transitionDelay: (i * 80) + 'ms' }}>
          <div className="metric-card__top"><span>— 0{i+1}</span><span>{m.hint.split(' · ')[0]}</span></div>
          <h3 className="metric-card__num"><CountUp value={m.num} unit={m.unit} plus={m.plus} /></h3>
          <div className="metric-card__bar"></div>
          <div className="metric-card__label">{m.label}</div>
        </div>
      ))}
    </div>
  );
}

function MetricsMarquee({ metrics }) {
  // duplicate for seamless loop
  const items = [...metrics, ...metrics];
  return (
    <div className="metric-marquee">
      <div className="metric-marquee__track">
        {items.map((m, i) => (
          <div key={i} className="metric-marquee__item">
            <span className={'metric-marquee__num ' + m.kind}><CountUp value={m.num} unit={m.unit} plus={m.plus} /></span>
            <span className="metric-marquee__lbl">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CountUp({ value, unit, plus }) {
  // For numeric values, animate. For string ('No.1', '공식'), render static.
  const ref = React.useRef(null);
  const isNum = /^\d+$/.test(value);
  React.useEffect(() => {
    if (!isNum || !ref.current) return;
    const el = ref.current;
    const target = parseInt(value, 10);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !el.dataset.counted) {
          el.dataset.counted = '1';
          window.__macAnimateCounter(el, target, '', 1500);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, isNum]);
  return (
    <React.Fragment>
      <span ref={ref}>{isNum ? '0' : value}</span>
      {unit && <span className="unit">{unit}</span>}
      {plus && <span className="plus">+</span>}
    </React.Fragment>
  );
}

function BoutiqueStrip() {
  // 16 placeholder boutique cells (per brief: abstract grid, not real logos)
  const cells = [
    { num: '01', name: 'Boutique', loc: 'Milano' },
    { num: '02', name: 'Atelier',  loc: 'Firenze' },
    { num: '03', name: 'Maison',   loc: 'Roma' },
    { num: '04', name: 'Studio',   loc: 'Milano' },
    { num: '05', name: 'Galleria', loc: 'Venezia' },
    { num: '06', name: 'Riserva',  loc: 'Torino' },
    { num: '07', name: 'Casa',     loc: 'Napoli' },
    { num: '08', name: 'Salone',   loc: 'Bologna' },
    { num: '09', name: 'Vetrina',  loc: 'Milano' },
    { num: '10', name: 'Officina', loc: 'Firenze' },
    { num: '11', name: 'Boutique', loc: 'Roma' },
    { num: '12', name: 'Atelier',  loc: 'Como' },
    { num: '13', name: 'Maison',   loc: 'Verona' },
    { num: '14', name: 'Casa',     loc: 'Genova' },
    { num: '15', name: 'Studio',   loc: 'Milano' },
    { num: '16', name: '+ 35',     loc: 'in network' },
  ];
  return (
    <div className="boutique-strip">
      {cells.map((c, i) => (
        <div key={i} className="boutique-cell">
          <div className="boutique-cell__num">— {c.num}</div>
          <div className="boutique-cell__name">{c.name}</div>
          <div className="boutique-cell__loc">{c.loc}</div>
        </div>
      ))}
    </div>
  );
}

// ─────── ④ OPERATE ──────────────────────────────────────────────────────────
function MainOperate() {
  return (
    <section className="operate" data-screen-label="04 Operate" data-nav-theme="ink">
      <OperateGlobe />
      <div className="operate__globe-meta" aria-hidden="true">
        <div>— GLOBAL NETWORK · LIVE</div>
        <div>14 CITIES · 6 PLATFORMS · 4 TIMEZONES</div>
      </div>
      <div className="section__head" style={{ borderBottomColor: 'rgba(250,246,236,0.32)', color: 'inherit', opacity: 1 }}>
        <div><span style={{ opacity: 0.6 }}><strong style={{ fontSize: 13 }}>04</strong> Operate</span></div>
        <div className="section__head-meta" style={{ opacity: 0.6 }}>한국에서 시작. 한국에서 끝나지 않는다.</div>
      </div>
      <h2 className="operate__h reveal">
        글로벌 시장에서 결과를<br/>
        <span className="acc">만드는 것을 목표로 합니다.</span>
      </h2>

      <div className="operate__flow">
        <div className="flow reveal">
          <div className="flow__num">— 01</div>
          <h3 className="flow__title">해외 브랜드<br/>컨택</h3>
          <p className="flow__body">이탈리아 부티크 직계약 네트워크. 시즌마다 새 라인업.</p>
          <div className="flow__chips"><span className="chip">Milano</span><span className="chip">Firenze</span><span className="chip">Roma</span></div>
        </div>
        <div className="flow reveal" style={{ transitionDelay: '120ms' }}>
          <div className="flow__num">— 02</div>
          <h3 className="flow__title">해외 크리에이터<br/>영입</h3>
          <p className="flow__body">한국 콘텐츠와 통하는 해외 크리에이터. 톤과 시장을 함께 연결.</p>
          <div className="flow__chips"><span className="chip">JP</span><span className="chip">CN</span><span className="chip">SEA</span><span className="chip">US</span></div>
        </div>
        <div className="flow reveal" style={{ transitionDelay: '240ms' }}>
          <div className="flow__num">— 03</div>
          <h3 className="flow__title">다채널<br/>콘텐츠</h3>
          <p className="flow__body">하나의 캠페인을, 여러 플랫폼의 호흡으로.</p>
          <div className="flow__chips">
            <span className="chip">TikTok</span><span className="chip">Instagram</span><span className="chip">YouTube</span>
            <span className="chip future">Bilibili</span><span className="chip future">RED 샤오홍슈</span>
          </div>
        </div>
        <div className="flow reveal" style={{ transitionDelay: '360ms' }}>
          <div className="flow__num">— 04</div>
          <h3 className="flow__title">글로벌<br/>커머스</h3>
          <p className="flow__body">콘텐츠가 본 즉시, 살 수 있는 거리. 다국가 결제·배송 자동화.</p>
          <div className="flow__chips">
            <span className="chip">Shopee</span><span className="chip">Lazada</span><span className="chip">TikTok Shop</span>
            <span className="chip">Amazon</span><span className="chip">Rakuten</span><span className="chip">macflu.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────── OPERATE / GLOBE — dominant world graphic ───────────────────────────
function OperateGlobe() {
  // city defs: x,y on 1000x1000 viewBox roughly mapped to a wireframe globe
  // The globe is centered at (640, 520) with r=460 — bleeds off right edge.
  const cities = [
    { id: 'seoul',   cx: 880, cy: 420, label: 'SEOUL',   meta: '37.56°N · HQ',     size: 'lg',  color: '#E6433D' },
    { id: 'milano',  cx: 470, cy: 440, label: 'MILANO',  meta: '45.46°N · 18',     size: 'lg',  color: '#DBA42E' },
    { id: 'firenze', cx: 490, cy: 478, label: 'FIRENZE', meta: '43.77°N · 12',     size: 'md',  color: '#DBA42E' },
    { id: 'roma',    cx: 504, cy: 510, label: 'ROMA',    meta: '41.90°N · 08',     size: 'md',  color: '#DBA42E' },
    { id: 'napoli',  cx: 514, cy: 538, label: 'NAPOLI',  meta: '40.85°N · 04',     size: 'sm',  color: '#DBA42E' },
    { id: 'tokyo',   cx: 902, cy: 458, label: 'TOKYO',   meta: '35.68°N',          size: 'sm',  color: '#FAF6EC' },
    { id: 'shanghai',cx: 838, cy: 490, label: 'SHANGHAI',meta: '31.23°N',          size: 'sm',  color: '#FAF6EC' },
    { id: 'bangkok', cx: 810, cy: 558, label: 'BANGKOK', meta: '13.75°N',          size: 'sm',  color: '#FAF6EC' },
    { id: 'jakarta', cx: 822, cy: 620, label: 'JAKARTA', meta: '06.20°S',          size: 'sm',  color: '#FAF6EC' },
  ];

  // Arcs from Seoul → cities (Milano primary, others as network)
  const seoul = { x: 880, y: 420 };
  const arcs = cities
    .filter(c => c.id !== 'seoul')
    .map(c => {
      // control point above the midpoint for nice curve
      const mx = (seoul.x + c.cx) / 2;
      const my = (seoul.y + c.cy) / 2 - Math.abs(seoul.x - c.cx) * 0.35;
      return { id: c.id, d: `M ${seoul.x} ${seoul.y} Q ${mx} ${my} ${c.cx} ${c.cy}`, primary: ['milano','firenze','roma'].includes(c.id) };
    });

  return (
    <div className="operate__globe-wrap" aria-hidden="true">
      <svg className="operate__globe" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="op-globe-fill" cx="55%" cy="42%" r="62%">
            <stop offset="0%"  stopColor="#FAF6EC" stopOpacity="0.05"/>
            <stop offset="55%" stopColor="#FAF6EC" stopOpacity="0.02"/>
            <stop offset="100%" stopColor="#000" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="op-globe-edge" cx="50%" cy="50%" r="50%">
            <stop offset="80%" stopColor="#FAF6EC" stopOpacity="0"/>
            <stop offset="100%" stopColor="#FAF6EC" stopOpacity="0.18"/>
          </radialGradient>
          {arcs.map(a => <path key={'p-'+a.id} id={'op-arc-'+a.id} d={a.d}/>)}
        </defs>

        <g transform="translate(640 520)">
          {/* sphere fills */}
          <circle r="460" fill="url(#op-globe-fill)"/>
          <circle r="460" fill="url(#op-globe-edge)"/>
          <circle r="460" fill="none" stroke="#FAF6EC" strokeOpacity="0.55" strokeWidth="1.2"/>

          {/* latitudes — static */}
          <g stroke="#FAF6EC" fill="none">
            <ellipse rx="460" ry="80"  strokeOpacity="0.18"/>
            <ellipse rx="460" ry="160" strokeOpacity="0.18"/>
            <ellipse rx="460" ry="240" strokeOpacity="0.18"/>
            <ellipse rx="460" ry="320" strokeOpacity="0.16"/>
            <ellipse rx="460" ry="400" strokeOpacity="0.14"/>
            <line x1="-460" y1="0" x2="460" y2="0" strokeOpacity="0.32"/>
          </g>

          {/* longitudes — rotating */}
          <g stroke="#FAF6EC" fill="none" className="op-globe__long">
            <ellipse rx="80"  ry="460" strokeOpacity="0.18"/>
            <ellipse rx="160" ry="460" strokeOpacity="0.18"/>
            <ellipse rx="240" ry="460" strokeOpacity="0.20"/>
            <ellipse rx="320" ry="460" strokeOpacity="0.22"/>
            <ellipse rx="400" ry="460" strokeOpacity="0.22"/>
            <line x1="0" y1="-460" x2="0" y2="460" strokeOpacity="0.32"/>
            <animateTransform attributeName="transform" type="rotate"
              from="0" to="360" dur="60s" repeatCount="indefinite"/>
          </g>

          {/* meta ticks around equator */}
          <g fill="#FAF6EC" fillOpacity="0.45" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.18em">
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i / 12) * Math.PI * 2;
              const x = Math.cos(a) * 478;
              const y = Math.sin(a) * 478;
              return <circle key={i} cx={x} cy={y} r="1.5"/>;
            })}
          </g>
        </g>

        {/* arcs — under cities */}
        <g fill="none">
          {arcs.map(a => (
            <use key={'arc-bg-'+a.id} href={'#op-arc-'+a.id}
              stroke="#FAF6EC"
              strokeOpacity={a.primary ? 0.28 : 0.14}
              strokeWidth={a.primary ? 1.2 : 0.8}
              strokeDasharray={a.primary ? '0' : '3 6'}/>
          ))}
          {arcs.filter(a => a.primary).map(a => (
            <use key={'arc-acc-'+a.id} href={'#op-arc-'+a.id}
              stroke="#DBA42E" strokeWidth="1.4" strokeOpacity="0.9"/>
          ))}
        </g>

        {/* traveling pulses on primary arcs */}
        {arcs.filter(a => a.primary).map((a, i) => (
          <g key={'pulse-'+a.id}>
            <circle r="4" fill="#E6433D">
              <animateMotion dur={(4.5 + i * 0.8) + 's'} repeatCount="indefinite" rotate="auto" begin={(i * 0.7) + 's'}>
                <mpath href={'#op-arc-'+a.id}/>
              </animateMotion>
            </circle>
            <circle r="10" fill="#E6433D" fillOpacity="0.22">
              <animateMotion dur={(4.5 + i * 0.8) + 's'} repeatCount="indefinite" rotate="auto" begin={(i * 0.7) + 's'}>
                <mpath href={'#op-arc-'+a.id}/>
              </animateMotion>
            </circle>
          </g>
        ))}

        {/* cities */}
        <g>
          {cities.map(c => {
            const r = c.size === 'lg' ? 7 : c.size === 'md' ? 5 : 4;
            const halo = r * 2.4;
            const anchor = c.cx > 600 ? 'start' : 'end';
            const dx = anchor === 'start' ? 14 : -14;
            return (
              <g key={c.id}>
                <circle cx={c.cx} cy={c.cy} r={halo} fill={c.color} fillOpacity="0.14"
                  className={'op-globe__halo op-globe__halo--' + c.size}/>
                <circle cx={c.cx} cy={c.cy} r={r} fill={c.color}/>
                {c.size !== 'sm' && (
                  <text x={c.cx + dx} y={c.cy + 4} textAnchor={anchor}
                    fill="#FAF6EC" fillOpacity="0.32" fontFamily="JetBrains Mono, monospace"
                    fontSize="10" letterSpacing="0.18em">
                    {c.meta}
                  </text>
                )}
              </g>
            );
          })}
        </g>

        {/* compass cardinals */}
        <g fill="#FAF6EC" fillOpacity="0.35" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.28em">
          <text x="640" y="48"  textAnchor="middle">N · 90°</text>
          <text x="640" y="992" textAnchor="middle">S · 90°</text>
          <text x="168" y="524" textAnchor="end">W</text>
        </g>
      </svg>
    </div>
  );
}

// ─────── ⑤ MODELS ───────────────────────────────────────────────────────────
function MainModels() {
  return (
    <section className="models" data-screen-label="05 Models" data-nav-theme="cream">
      <div className="section__head">
        <div><span className="section__index"><strong>05</strong> Commercial Models</span></div>
        <div className="section__head-meta">우리가 중개하는 방식</div>
      </div>
      <h2 className="section__h2 reveal" style={{ maxWidth: '20ch' }}>
        세 가지 방식으로<br/>중개합니다.
      </h2>

      <div className="models__grid">
        <article className="model reveal">
          <div>
            <div className="model__num">— 01 · Editorial</div>
            <h3 className="model__name">Branded<br/>Content<small>브랜디드 콘텐츠</small></h3>
          </div>
          <p className="model__quote">광고가 아닌, 브랜드 톤을 살린 에디토리얼.</p>
          <p className="model__body"><strong>시즌 단위 발행.</strong> 멀티 플랫폼 동시 송출. 크리에이터의 톤과 브랜드의 톤을, 한 호흡으로.</p>
        </article>
        <article className="model reveal" style={{ transitionDelay: '120ms' }}>
          <div>
            <div className="model__num">— 02 · Realtime</div>
            <h3 className="model__name">Live<br/>Commerce<small>라이브 커머스</small></h3>
          </div>
          <p className="model__quote">콘텐츠에서 구매까지, 한 화면.</p>
          <p className="model__body">인스타·틱톡·유튜브 라이브 + <strong>macflu.com</strong> 연동. 다국가 결제·배송 자동화.</p>
        </article>
        <article className="model reveal" style={{ transitionDelay: '240ms' }}>
          <div>
            <div className="model__num">— 03 · Risk-Zero</div>
            <h3 className="model__name">RS 판매구조<small>Revenue Share · 위탁판매</small></h3>
          </div>
          <p className="model__quote">광고비 0원. 매출에 따른 수익 쉐어.</p>
          <p className="model__body">위탁판매 기반 RS 구조. <strong>브랜드 진입 리스크 0.</strong> 셀러 파트너 풀과 자동 연결.</p>
        </article>
      </div>
    </section>
  );
}

// ─────── ⑥ CREATORS ────────────────────────────────────────────────────────
function MainCreators({ goTo }) {
  return (
    <section className="creators" data-screen-label="06 Creators" data-nav-theme="persian">
      <div className="section__head" style={{ borderBottomColor: 'rgba(250,246,236,0.32)' }}>
        <div><span style={{ opacity: 0.7 }}><strong style={{ fontSize: 13 }}>06</strong> For Creators</span></div>
        <div className="section__head-meta" style={{ opacity: 0.7 }}>크리에이터의 성장이 먼저</div>
      </div>
      <h2 className="creators__h reveal">
        크리에이터의 <span className="acc">성장이</span><br/>먼저.
      </h2>
      <p className="creators__sub reveal">기획부터 정산까지. 함께 짓는 동료의 호흡으로 운영합니다.</p>

      <div className="support-grid">
        <div className="support reveal">
          <div className="support__icon">01</div>
          <h3 className="support__title">콘텐츠 가이드·기획</h3>
          <p className="support__body">기획부터 톤·매너까지. 시즌 단위로 함께 짭니다.</p>
        </div>
        <div className="support reveal" style={{ transitionDelay: '100ms' }}>
          <div className="support__icon">02</div>
          <h3 className="support__title">매니지먼트</h3>
          <p className="support__body">분석·일정·계약·정산. 풀패키지 운영.</p>
        </div>
        <div className="support reveal" style={{ transitionDelay: '200ms' }}>
          <div className="support__icon">03</div>
          <h3 className="support__title">협찬·콜라보</h3>
          <p className="support__body">명품 부티크 직계약 자산 활용. 진짜 제품으로 진짜 콘텐츠.</p>
        </div>
        <div className="support reveal" style={{ transitionDelay: '300ms' }}>
          <div className="support__icon">04</div>
          <h3 className="support__title">촬영 지원</h3>
          <p className="support__body">장소·스타일링·제작 백업. 작품에만 집중하도록.</p>
        </div>
      </div>

      <button className="creators__cta" onClick={() => goTo('contact')}>지원하기</button>
    </section>
  );
}

// ─────── ⑦ BRINK ENTRY ────────────────────────────────────────────────────
function MainBrinkEntry({ goTo }) {
  return (
    <section className="brink-entry" data-screen-label="07 Brink entry" data-nav-theme="ink">
      <div className="brink-entry__bgword" aria-hidden="true">BRINK</div>
      <div className="brink-entry__grid">
        <div>
          <div className="brink-entry__meta">— 07 · MACFLU PROPRIETARY · COMMERCE OS</div>
          <h2 className="brink-entry__h reveal">
            <span className="brink-name">Brink.</span>
            맥플루의<br/>자동화 인프라.
          </h2>
        </div>
        <div>
          <p className="brink-entry__sub reveal">
            브랜드와 셀러를, 시스템이 잇는다.<br/>
            외부 SaaS가 아닌 — 맥플루의 자체 시스템.
          </p>
          <button className="brink-entry__cta" onClick={() => goTo('brink')}>
            Brink 알아보기 <span className="num">→ 02</span>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────── ⑧ ORIGIN + CTA ───────────────────────────────────────────────────
function MainOrigin({ goTo }) {
  return (
    <section className="origin" data-screen-label="08 Origin & CTA" data-nav-theme="cream">
      <div className="origin__grid">
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 24 }}>— 08 · A Note</div>
          <p className="origin__quote reveal">
            한국 No.1 명품 공급사가 만든 패션 MCN.<br/>
            인프라 위에서 콘텐츠를 짓습니다.<br/>
            진열장 너머의 옷을, 콘텐츠로 입혀냅니다.
          </p>
          <p className="origin__sign">— Founder · 맥플루</p>
        </div>
        <div className="origin__cta-wrap">
          <span className="origin__cta-sub">— FINAL · GET IN TOUCH</span>
          <button className="origin__cta" onClick={() => goTo('contact')}>
            Contact.
          </button>
          <span className="origin__cta-sub" style={{ marginTop: 16 }}>HELLO@MACFLU.COM</span>
        </div>
      </div>
    </section>
  );
}

window.MainPage = MainPage;
