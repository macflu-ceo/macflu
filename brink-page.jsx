// BrinkPage — /brink — 자동화 커머스 인프라
// 5 blocks: Hero / How it works / For Suppliers·Sellers / Curation / CTA

function BrinkPage({ goTo }) {
  return (
    <main data-screen-label="Brink · Commerce OS">
      <BrinkHero />
      <BrinkHow />
      <BrinkFor />
      <BrinkCuration />
      <BrinkCTA goTo={goTo} />
      <SiteFooter goTo={goTo} />
    </main>
  );
}

function BrinkHero() {
  const B = T.brink;
  return (
    <section className="brink-hero" data-screen-label="01 Brink Hero" data-nav-theme="ink">
      <div className="brink-hero__lines" aria-hidden="true"></div>
      <div className="brink-hero__meta">
        <div>{B.heroMetaLeft}</div>
        <div>MACFLU PROPRIETARY · COMMERCE OS · v1</div>
      </div>
      <div className="brink-hero__center">
        <h1 className="brink-hero__brand">
          Brink.
          <span className="brink-hero__brand-mark">— MACFLU PROPRIETARY</span>
        </h1>
        <h2 className="brink-hero__h reveal">
          {B.heroHLine1}<br/>{B.heroHLine2}
        </h2>
        <p className="brink-hero__sub reveal">{B.heroSub}</p>
      </div>
      <div className="brink-hero__low">
        <span>SCROLL — 01 / 05</span>
        <span>SUPPLIERS ↔ SELLERS · CURATED</span>
      </div>
    </section>
  );
}

function BrinkHow() {
  const B = T.brink;
  return (
    <section className="brink-how" data-screen-label="02 How it works" data-nav-theme="cream">
      <div className="section__head">
        <div><span className="section__index"><strong>02</strong> How it works</span></div>
        <div className="section__head-meta">{B.howHeadMeta}</div>
      </div>
      <h2 className="brink-how__h reveal">
        {B.howHPre}<span className="acc">{B.howHAcc}</span>
      </h2>

      <div className="brink-how__steps">
        {B.steps.map((s, i) => (
          <div key={i} className="step reveal" style={{ transitionDelay: (i * 100) + 'ms' }}>
            <div className="step__num">0{i + 1}</div>
            <h3 className="step__title">{s.title}</h3>
            <p className="step__body">{s.body}</p>
            <div className="step__chips">
              {B.stepChips[i].map((c, j) => <span key={j} className="step__chip">{c}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="brink-how__tag reveal">
        {B.tag} <span className="equals">=</span> <span className="zero">0</span>
      </div>
    </section>
  );
}

function BrinkFor() {
  const B = T.brink;
  return (
    <section className="brink-for" data-screen-label="03 For" data-nav-theme="persian">
      <div className="brink-for__half brink-for__half--supplier">
        <div>
          <div className="brink-for__label">{B.forSupplierLabel}</div>
          <h2 className="brink-for__h reveal" style={{ marginTop: 16 }}>
            {B.forSupplierH.map((l, i) => (
              <React.Fragment key={i}>{l}{i < B.forSupplierH.length - 1 ? <br/> : null}</React.Fragment>
            ))}
          </h2>
        </div>
        <div>
          <ul className="brink-for__list">
            {B.forSupplierList.map((l, i) => (
              <li key={i} className="reveal" style={{ transitionDelay: (i * 80) + 'ms' }}>{l}</li>
            ))}
          </ul>
          <button className="brink-for__cta">{B.forSupplierCta}</button>
        </div>
      </div>
      <div className="brink-for__half brink-for__half--seller">
        <div>
          <div className="brink-for__label">{B.forSellerLabel}</div>
          <h2 className="brink-for__h reveal" style={{ marginTop: 16 }}>
            {B.forSellerH.map((l, i) => (
              <React.Fragment key={i}>{l}{i < B.forSellerH.length - 1 ? <br/> : null}</React.Fragment>
            ))}
          </h2>
        </div>
        <div>
          <ul className="brink-for__list">
            {B.forSellerList.map((l, i) => (
              <li key={i} className="reveal" style={{ transitionDelay: (i * 80) + 'ms' }}>{l}</li>
            ))}
          </ul>
          <button className="brink-for__cta">{B.forSellerCta}</button>
        </div>
      </div>
    </section>
  );
}

function BrinkCuration() {
  const B = T.brink;
  return (
    <section className="brink-curation" data-screen-label="04 Curation" data-nav-theme="cream">
      <div className="section__head">
        <div><span className="section__index"><strong>04</strong> Curation</span></div>
        <div className="section__head-meta">{B.curationHeadMeta}</div>
      </div>
      <p className="brink-curation__pull reveal">
        {B.curationPull1pre}<strong>{B.curationPull1strong}</strong><br/>
        {B.curationPull2pre}<strong>{B.curationPull2strong}</strong>
      </p>

      <div className="brink-curation__grid">
        {B.curationCards.map((c, i) => (
          <div key={i} className="curation-card reveal" style={{ transitionDelay: (i * 120) + 'ms' }}>
            <h4>{c.h}</h4>
            <p>{c.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BrinkCTA({ goTo }) {
  const B = T.brink;
  const btn = (label, lines) => (
    <button className="brink-cta__btn" onClick={() => goTo('contact')}>
      <div>
        <div className="brink-cta__btn-label">{label}</div>
        <h3 className="brink-cta__btn-h">
          {lines.map((l, i) => (
            <React.Fragment key={i}>{l}{i < lines.length - 1 ? <br/> : null}</React.Fragment>
          ))}
        </h3>
      </div>
      <div className="brink-cta__btn-arrow">→</div>
    </button>
  );
  return (
    <section className="brink-cta" data-screen-label="05 CTA" data-nav-theme="ink">
      <div className="section__head" style={{ borderBottomColor: 'rgba(250,246,236,0.32)' }}>
        <div><span style={{ opacity: 0.7 }}><strong style={{ fontSize: 13 }}>05</strong> Join</span></div>
        <div className="section__head-meta" style={{ opacity: 0.7 }}>{B.ctaHeadMeta}</div>
      </div>

      <div className="brink-cta__grid">
        {btn('— FOR SUPPLIERS', B.ctaSupplierH)}
        {btn('— FOR SELLERS', B.ctaSellerH)}
      </div>
    </section>
  );
}

window.BrinkPage = BrinkPage;
