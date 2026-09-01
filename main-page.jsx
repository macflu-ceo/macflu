// MainPage — Macflu homepage, 8 sections
// ① Hero ② Identity ③ Edge ★ ④ Operate ⑤ Models ⑥ Creators ⑦ Brink entry ⑧ Origin + CTA + Footer

function MainPage({ tweaks, goTo }) {
  return (
    <main data-screen-label="Main · Macflu">
      <MainHero tweaks={tweaks} />
      <MainMarquee />
      <MainIdentity />
      <MainEdge tweaks={tweaks} />
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
        <span className="hero__float-word" style={{ top: '14%', left: '38%' }}>{T.hero.floatWords[0]}</span>
        <span className="hero__float-word" style={{ top: '62%', right: '6%', animationDelay: '-6s' }}>{T.hero.floatWords[1]}</span>
        <span className="hero__float-word" style={{ bottom: '8%', left: '8%', animationDelay: '-12s' }}>{T.hero.floatWords[2]}</span>
      </div>
      <div className="hero__meta">
        <div>{T.hero.metaLeft}</div>
        <div className="hero__meta-right">EDITION 01 · SS 26<br/>Brands × Creators × Commerce</div>
      </div>
      <div className="hero__center">
        <h1 className="hero__big">{heroLines[accent]}</h1>
        <p className="hero__sub">
          {T.hero.subLine1}<br/>
          {T.hero.subLine2}
        </p>
      </div>
      <div className="hero__low">
        <div className="hero__index">{T.hero.index}</div>
        <div className="hero__scroll">{T.hero.scroll} <span className="hero__scroll-arrow"></span></div>
      </div>
    </section>
  );
}

// ─────── HERO → IDENTITY MARQUEE ────────────────────────────────────────────
function MainMarquee() {
  const dup = [...T.marquee, ...T.marquee, ...T.marquee];
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
          {T.identity.h1}<br/>
          <span className="acc-persian">{T.identity.h2}</span>
        </h2>
        <div className="who__body">
          <p className="reveal"><strong>{T.identity.p1}</strong></p>
          <p className="reveal">{T.identity.p2}</p>
          <p className="reveal">{T.identity.p3pre}<strong>{T.identity.p3strong}</strong>{T.identity.p3post}</p>
          <div className="who__meta">ESTABLISHED <span>·</span> KOREA <span>·</span> FASHION MCN</div>
        </div>
      </div>
    </section>
  );
}

// ─────── ③ THE EDGE ★ ───────────────────────────────────────────────────────
function MainEdge({ tweaks }) {
  // 힌트·색상은 언어와 무관한 고정값, 숫자·단위·라벨은 사전에서.
  const FIXED = [
    { hint: 'BOUTIQUES · DIRECT CONTRACT', kind: 'persian' },
    { hint: '₩ KRW · IN STOCK · BONDED', kind: 'tomato' },
    { hint: 'PARENT GROUP · KR LUXURY SUPPLY', kind: 'mustard' },
    { hint: 'IMPORT · DIRECT · OFFICIAL', kind: 'ink' },
  ];
  const metrics = T.edge.metrics.map((m, i) => ({ ...FIXED[i], ...m }));

  return (
    <section className="edge" data-screen-label="03 The Edge ★" data-nav-theme="cream">
      <div className="edge__head">
        <div className="section__head" style={{ marginBottom: 0, paddingBottom: 24, borderBottom: '1px solid currentColor' }}>
          <div>
            <span className="section__index"><strong>03</strong> {T.edge.index}</span>
          </div>
          <div className="section__head-meta">{T.edge.headMeta}</div>
        </div>
        <h2 className="edge__supertitle reveal">
          {T.edge.titlePre}<span className="acc">{T.edge.titleAcc}</span>
        </h2>
        <p className="edge__sub reveal">{T.edge.sub}</p>
      </div>

      {tweaks.metricStyle === 'bigNumbers' && <MetricsGrid metrics={metrics} />}
      {tweaks.metricStyle === 'cards' && <MetricsCards metrics={metrics} />}
      {tweaks.metricStyle === 'marquee' && <MetricsMarquee metrics={metrics} />}
    </section>
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

// ─────── ④ OPERATE ──────────────────────────────────────────────────────────
// 칩은 고유명사라 언어와 무관하게 고정.
const FLOW_CHIPS = [
  [{ label: 'BOUTIQUE' }, { label: 'DIRECT' }, { label: 'SEASONAL' }],
  [{ label: 'JP' }, { label: 'CN' }, { label: 'SEA' }, { label: 'US' }],
  [{ label: 'TikTok' }, { label: 'Instagram' }, { label: 'YouTube' },
   { label: 'Bilibili', future: true }, { label: 'RED 小红书', future: true }],
  [{ label: 'Shopee' }, { label: 'Lazada' }, { label: 'TikTok Shop' },
   { label: 'Amazon' }, { label: 'Rakuten' }, { label: 'macflu.com' }],
];

function MainOperate() {
  return (
    <section className="operate" data-screen-label="04 Operate" data-nav-theme="ink">
      <OperateGlobe />
      <div className="operate__globe-meta" aria-hidden="true">
        <div>— GLOBAL NETWORK · LIVE</div>
        <div>14 CITIES · 6 PLATFORMS · 4 TIMEZONES</div>
      </div>
      <div className="section__head" style={{ borderBottomColor: 'rgba(250,246,236,0.32)', color: 'inherit', opacity: 1 }}>
        <div><span style={{ opacity: 0.6 }}><strong style={{ fontSize: 13 }}>04</strong> {T.operate.index}</span></div>
        <div className="section__head-meta" style={{ opacity: 0.6 }}>{T.operate.headMeta}</div>
      </div>
      <h2 className="operate__h reveal">
        {T.operate.hLine1}<br/>
        <span className="acc">{T.operate.hLine2}</span>
      </h2>

      <div className="operate__flow">
        {T.operate.flows.map((f, i) => (
          <div key={i} className="flow reveal" style={{ transitionDelay: (i * 120) + 'ms' }}>
            <div className="flow__num">— 0{i + 1}</div>
            <h3 className="flow__title">{f.t1}<br/>{f.t2}</h3>
            <p className="flow__body">{f.body}</p>
            <div className="flow__chips">
              {FLOW_CHIPS[i].map((c, j) => (
                <span key={j} className={'chip' + (c.future ? ' future' : '')}>{c.label}</span>
              ))}
            </div>
          </div>
        ))}
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
const MODEL_KINDS = ['Editorial', 'Realtime', 'Risk-Zero'];

function MainModels() {
  const [idx, setIdx] = React.useState(0);
  const scrollerRef = React.useRef(null);

  const goTo = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const target = el.children[i];
    if (!target) return;
    el.scrollTo({ left: target.offsetLeft - el.offsetLeft, behavior: 'smooth' });
    setIdx(i);
  };

  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let timer = null;
    const onScroll = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        const w = el.clientWidth;
        const i = Math.round(el.scrollLeft / w);
        setIdx(Math.max(0, Math.min(2, i)));
      }, 80);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => { el.removeEventListener('scroll', onScroll); if (timer) clearTimeout(timer); };
  }, []);

  return (
    <section className="models" data-screen-label="05 Models" data-nav-theme="cream">
      <div className="section__head">
        <div><span className="section__index"><strong>05</strong> {T.models.index}</span></div>
        <div className="section__head-meta">{T.models.headMeta}</div>
      </div>
      <h2 className="section__h2 reveal" style={{ maxWidth: '20ch' }}>
        {T.models.hLine1}<br/>{T.models.hLine2}
      </h2>

      <div className="models__carousel">
        <button className="models__arrow models__arrow--prev"
                onClick={() => goTo(Math.max(0, idx - 1))}
                disabled={idx === 0}
                aria-label={T.models.prev}>‹</button>
        <button className="models__arrow models__arrow--next"
                onClick={() => goTo(Math.min(2, idx + 1))}
                disabled={idx === 2}
                aria-label={T.models.next}>›</button>

        <div className="models__grid" ref={scrollerRef}>
          {T.models.cards.map((c, i) => (
            <article key={i} className="model reveal" style={{ transitionDelay: (i * 120) + 'ms' }}>
              <div>
                <div className="model__num">— 0{i + 1} · {MODEL_KINDS[i]}</div>
                <h3 className="model__name">
                  {c.name1}{c.name2 ? <React.Fragment><br/>{c.name2}</React.Fragment> : null}
                  <small>{c.small}</small>
                </h3>
              </div>
              <p className="model__quote">{c.quote}</p>
              <p className="model__body">{c.bodyPre}<strong>{c.bodyStrong}</strong>{c.bodyRest}</p>
            </article>
          ))}
        </div>

        <div className="models__dots">
          {[0, 1, 2].map(i => (
            <button key={i} className={"models__dot " + (i === idx ? "is-on" : "")}
                    onClick={() => goTo(i)} aria-label={T.models.slide + (i + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────── ⑥ CREATORS ────────────────────────────────────────────────────────
function MainCreators({ goTo }) {
  return (
    <section className="creators" data-screen-label="06 Creators" data-nav-theme="persian">
      <div className="section__head" style={{ borderBottomColor: 'rgba(250,246,236,0.32)' }}>
        <div><span style={{ opacity: 0.7 }}><strong style={{ fontSize: 13 }}>06</strong> {T.creators.index}</span></div>
        <div className="section__head-meta" style={{ opacity: 0.7 }}>{T.creators.headMeta}</div>
      </div>
      <h2 className="creators__h reveal">
        {T.creators.hPre}<span className="acc">{T.creators.hAcc}</span><br/>{T.creators.hPost}
      </h2>
      <p className="creators__sub reveal">{T.creators.sub}</p>

      <div className="support-grid">
        {T.creators.supports.map((s, i) => (
          <div key={i} className="support reveal" style={{ transitionDelay: (i * 100) + 'ms' }}>
            <div className="support__icon">0{i + 1}</div>
            <h3 className="support__title">{s.title}</h3>
            <p className="support__body">{s.body}</p>
          </div>
        ))}
      </div>

      <button className="creators__cta" onClick={() => goTo('contact')}>{T.creators.cta}</button>
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
            {T.brinkEntry.hLine1}<br/>{T.brinkEntry.hLine2}
          </h2>
        </div>
        <div>
          <p className="brink-entry__sub reveal">
            {T.brinkEntry.subLine1}<br/>
            {T.brinkEntry.subLine2}
          </p>
          <button className="brink-entry__cta" onClick={() => goTo('brink')}>
            {T.brinkEntry.cta} <span className="num">→ 02</span>
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
            {T.origin.quoteLine1}<br/>
            {T.origin.quoteLine2}<br/>
            {T.origin.quoteLine3}
          </p>
          <p className="origin__sign">{T.origin.sign}</p>
        </div>
        <div className="origin__cta-wrap">
          <span className="origin__cta-sub">{T.origin.ctaSub}</span>
          <button className="origin__cta" onClick={() => goTo('contact')}>
            {T.origin.cta}
          </button>
          <span className="origin__cta-sub" style={{ marginTop: 16 }}>CAST@MACFLU.COM · BRAND@MACFLU.COM</span>
        </div>
      </div>
    </section>
  );
}

window.MainPage = MainPage;
