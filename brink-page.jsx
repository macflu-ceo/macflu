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
  return (
    <section className="brink-hero" data-screen-label="01 Brink Hero" data-nav-theme="ink">
      <div className="brink-hero__lines" aria-hidden="true"></div>
      <div className="brink-hero__meta">
        <div>맥플루 / 브링크 · MACFLU / BRINK</div>
        <div>MACFLU PROPRIETARY · COMMERCE OS · v1</div>
      </div>
      <div className="brink-hero__center">
        <h1 className="brink-hero__brand">
          Brink.
          <span className="brink-hero__brand-mark">— MACFLU PROPRIETARY</span>
        </h1>
        <h2 className="brink-hero__h reveal">
          맥플루의<br/>자동화 커머스 인프라.
        </h2>
        <p className="brink-hero__sub reveal">
          브랜드의 상품을, 검증된 셀러에게 — 시스템이 잇는다.
          외부 SaaS가 아닙니다. 맥플루의 자체 운영 시스템.
        </p>
      </div>
      <div className="brink-hero__low">
        <span>SCROLL — 01 / 05</span>
        <span>SUPPLIERS ↔ SELLERS · CURATED</span>
      </div>
    </section>
  );
}

function BrinkHow() {
  const steps = [
    {
      num: '01',
      title: '공급사가 상품 등록',
      body: '브랜드사가 상품 시트 한 번 등록. 이미지·사이즈·가격·재고가 시스템에 통합.',
      chips: ['SUPPLIER', 'ONBOARDING']
    },
    {
      num: '02',
      title: '셀러 채널에 자동 업로드',
      body: '시스템이 검증된 셀러 채널 — 스마트스토어·11번가·머스트잇 등 — 으로 일괄 게시.',
      chips: ['스마트스토어', '11번가', '머스트잇', '+ 외 10']
    },
    {
      num: '03',
      title: '재고·환율·사이즈 실시간 동기화',
      body: '하나의 상품이 N개 채널에서 팔려도, 재고는 항상 한 곳에서 진실. 환율·가격은 자동.',
      chips: ['SYNC', '실시간']
    },
    {
      num: '04',
      title: '판매 발생 시 발주 데이터 자동 전송',
      body: '셀러에서 결제가 일어나면 공급사로 발주 데이터가 즉시. 사람의 손은 거의 닿지 않습니다.',
      chips: ['AUTO-PO', '발주 자동화']
    }
  ];
  return (
    <section className="brink-how" data-screen-label="02 How it works" data-nav-theme="cream">
      <div className="section__head">
        <div><span className="section__index"><strong>02</strong> How it works</span></div>
        <div className="section__head-meta">사람이 손대는 시간은, 거의 0</div>
      </div>
      <h2 className="brink-how__h reveal">
        어떻게 <span className="acc">작동하는가.</span>
      </h2>

      <div className="brink-how__steps">
        {steps.map((s, i) => (
          <div key={i} className="step reveal" style={{ transitionDelay: (i * 100) + 'ms' }}>
            <div className="step__num">{s.num}</div>
            <h3 className="step__title">{s.title}</h3>
            <p className="step__body">{s.body}</p>
            <div className="step__chips">
              {s.chips.map((c, j) => <span key={j} className="step__chip">{c}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="brink-how__tag reveal">
        사람이 손대는 시간 <span className="equals">=</span> <span className="zero">0</span>
      </div>
    </section>
  );
}

function BrinkFor() {
  return (
    <section className="brink-for" data-screen-label="03 For" data-nav-theme="persian">
      <div className="brink-for__half brink-for__half--supplier">
        <div>
          <div className="brink-for__label">— 03A · For Suppliers / 브랜드사</div>
          <h2 className="brink-for__h reveal" style={{ marginTop: 16 }}>
            브랜드의<br/>판매 채널을<br/>자동 확장.
          </h2>
        </div>
        <div>
          <ul className="brink-for__list">
            <li className="reveal">신규 판매 채널이 자동으로 확장</li>
            <li className="reveal" style={{ transitionDelay: '80ms' }}>맥플루가 검증한 셀러만 연결</li>
            <li className="reveal" style={{ transitionDelay: '160ms' }}>재고·발주 외주 운영 없이</li>
            <li className="reveal" style={{ transitionDelay: '240ms' }}>가격·노출 채널별 컨트롤 가능</li>
          </ul>
          <button className="brink-for__cta">공급사로 합류하기 →</button>
        </div>
      </div>
      <div className="brink-for__half brink-for__half--seller">
        <div>
          <div className="brink-for__label">— 03B · For Sellers / 셀러</div>
          <h2 className="brink-for__h reveal" style={{ marginTop: 16 }}>
            퀄리티<br/>보장된 상품.<br/>사입 부담 0.
          </h2>
        </div>
        <div>
          <ul className="brink-for__list">
            <li className="reveal">맥플루가 직접 등록한 상품만 취급</li>
            <li className="reveal" style={{ transitionDelay: '80ms' }}>사입 부담 없는 위탁판매 구조</li>
            <li className="reveal" style={{ transitionDelay: '160ms' }}>자동화로 운영 인력 최소화</li>
            <li className="reveal" style={{ transitionDelay: '240ms' }}>판매 데이터 대시보드 제공</li>
          </ul>
          <button className="brink-for__cta">셀러로 합류하기 →</button>
        </div>
      </div>
    </section>
  );
}

function BrinkCuration() {
  return (
    <section className="brink-curation" data-screen-label="04 Curation" data-nav-theme="cream">
      <div className="section__head">
        <div><span className="section__index"><strong>04</strong> Curation</span></div>
        <div className="section__head-meta">공급 품목·셀러 컨트롤</div>
      </div>
      <p className="brink-curation__pull reveal">
        맥플루가 <strong>직접 골라낸 셀러만,</strong><br/>
        맥플루가 <strong>직접 등록한 상품만.</strong>
      </p>

      <div className="brink-curation__grid">
        <div className="curation-card reveal">
          <h4>— Channel-level control</h4>
          <p>공급사가 채널별·셀러별로 노출 품목을 직접 컨트롤. 자동 확장이지만, 자동 노출은 아닙니다.</p>
        </div>
        <div className="curation-card reveal" style={{ transitionDelay: '120ms' }}>
          <h4>— Curated supply</h4>
          <p>모든 상품이 모든 셀러에게 열려있지 않다. 큐레이션의 권위로, 시장의 신뢰를 짓습니다.</p>
        </div>
      </div>
    </section>
  );
}

function BrinkCTA({ goTo }) {
  return (
    <section className="brink-cta" data-screen-label="05 CTA" data-nav-theme="ink">
      <div className="section__head" style={{ borderBottomColor: 'rgba(250,246,236,0.32)' }}>
        <div><span style={{ opacity: 0.7 }}><strong style={{ fontSize: 13 }}>05</strong> Join</span></div>
        <div className="section__head-meta" style={{ opacity: 0.7 }}>합류하기</div>
      </div>

      <div className="brink-cta__grid">
        <button className="brink-cta__btn" onClick={() => goTo('contact')}>
          <div>
            <div className="brink-cta__btn-label">— FOR SUPPLIERS</div>
            <h3 className="brink-cta__btn-h">공급사로<br/>합류하기.</h3>
          </div>
          <div className="brink-cta__btn-arrow">→</div>
        </button>
        <button className="brink-cta__btn" onClick={() => goTo('contact')}>
          <div>
            <div className="brink-cta__btn-label">— FOR SELLERS</div>
            <h3 className="brink-cta__btn-h">셀러로<br/>합류하기.</h3>
          </div>
          <div className="brink-cta__btn-arrow">→</div>
        </button>
      </div>
    </section>
  );
}

window.BrinkPage = BrinkPage;
