// pages.jsx — About / References / How / Services / Contact
const { useState: useStateP } = React;

function SubHero({ meta1, meta2, kicker, h1, h1Accent, accentColor = "var(--persian)", lede, frame = "frame--milano" }) {
  return (
    <section className="sub-hero screen--cream first-fade">
      <div className="clip"><div className={"frame " + frame}></div></div>
      <div className="grain"></div>
      <div className="content meta-row"><span>{meta1}</span><span>{meta2}</span></div>
      <div className="content" style={{ marginTop: 48 }}>
        <span className="kicker">{kicker}</span>
        <h1 className="h-display fade-up" style={{ marginTop: 24 }}>
          {h1.map((seg, i) => (
            <React.Fragment key={i}>
              {i === h1Accent ? <span style={{ color: accentColor }}>{seg}</span> : seg}
              {i < h1.length - 1 ? <br /> : null}
            </React.Fragment>
          ))}
        </h1>
        <p className="lede lede--lg fade-up" style={{ marginTop: 32 }}>{lede}</p>
      </div>
    </section>
  );
}

// ============ ABOUT — short: hero + origin + letter ============
function AboutPage({ t, setPage }) {
  const a = t.about;
  return (
    <>
      <SubHero meta1={a.heroMeta1} meta2={a.heroMeta2} kicker={a.heroKicker}
        h1={a.heroH1} h1Accent={2} lede={a.heroLede} />
      <section className="screen--cream" style={{ padding: "120px 48px" }}>
        <div className="about-origin" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, maxWidth: 1440, margin: "0 auto" }}>
          <div>
            <span className="kicker">{a.originKicker}</span>
            <h2 className="h-2 fade-up" style={{ marginTop: 24, maxWidth: "10ch" }}>{a.originHead}</h2>
          </div>
          <div style={{ fontSize: 24, lineHeight: 1.5, fontWeight: 600, letterSpacing: "-0.015em", maxWidth: "62ch", fontFamily: "var(--display)" }}>
            <p>{a.originBigA}<br />{a.originBigB}</p>
            <p style={{ marginTop: 32, fontSize: 18, fontWeight: 400, lineHeight: 1.65, fontFamily: "var(--sans)", opacity: 0.78 }}>{a.originBody}</p>
          </div>
        </div>
      </section>
      <Marquee words={t.marquee} variant="cream" />
      <section className="screen screen--cream ceo" data-screen-label="03 Letter" style={{ minHeight: "auto", paddingTop: 120, paddingBottom: 120 }}>
        <div className="ceo__photo content"></div>
        <div className="content">
          <span className="kicker" style={{ display: "block", marginBottom: 24 }}>{a.letterKicker}</span>
          <p className="ceo__letter fade-up">{a.letterA}<br /><br />{a.letterB}<br /><br />{a.letterC}</p>
          <p className="ceo__sign">{a.letterSign}</p>
        </div>
        <a href="#contact" onClick={(e) => { e.preventDefault(); setPage("contact"); }} className="ceo__cta full-cta">Get in touch  →</a>
      </section>
    </>
  );
}

// ============ REFERENCES (was Creators) ============
function ReferencesPage({ t, setPage }) {
  const r = t.references;
  return (
    <>
      <SubHero meta1={r.heroMeta1} meta2={r.heroMeta2} kicker={r.heroKicker}
        h1={r.heroH1} h1Accent={1} accentColor="var(--tomato)" lede={r.heroLede} frame="frame--editorial" />
      <section className="screen--cream" style={{ padding: "0 48px 120px" }}>
        <div className="ref-grid">
          {r.cases.map(([brand, title, desc, result], i) => (
            <article className="ref-card" key={i}>
              <div className="ref-card__head">
                <span className="brand">{brand}</span>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              {result ? <span className="result">↗ {result}</span> : null}
            </article>
          ))}
        </div>
      </section>
      <section className="screen--cream" style={{ padding: "80px 48px 120px", borderTop: "1px solid var(--ink-12)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div className="meta-row" style={{ marginBottom: 24 }}><span>02 — Creators</span><span>{r.creatorsList.length} ALIGNED</span></div>
          <h2 className="h-3 fade-up" style={{ maxWidth: "20ch" }}>{r.creatorsHead}</h2>
          <p className="lede" style={{ marginTop: 12, maxWidth: "44ch", opacity: 0.78 }}>{r.creatorsLede}</p>
          <div className="creators-strip">
            {r.creatorsList.map(([letter, name, role], i) => (
              <div className="cstrip-item" key={i}>
                <div className="cstrip-img"><span>{letter}</span></div>
                <span className="cstrip-name">{name}</span>
                <span className="cstrip-role">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="screen--persian" style={{ padding: "120px 48px", color: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <div className="clip"><div className="frame frame--seoul"></div></div>
        <div className="grain"></div>
        <div className="content" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end", maxWidth: 1440, margin: "0 auto" }}>
          <h2 className="h-1 fade-up" style={{ maxWidth: "16ch" }}>
            {r.ctaHead.split("\n").map((l, j) => <React.Fragment key={j}>{l}{j === 0 ? <br /> : null}</React.Fragment>)}
          </h2>
          <div>
            <p className="lede lede--lg" style={{ color: "var(--cream)", opacity: 0.92 }}>{r.ctaLede}</p>
            <a href="#contact" onClick={(e) => { e.preventDefault(); setPage("contact"); }} className="btn btn--inverse" style={{ marginTop: 24 }}>{r.ctaBtn} <span className="arrow">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}

// ============ HOW — benefit cards ============
function HowPage({ t, setPage }) {
  const h = t.how;
  return (
    <>
      <SubHero meta1={h.heroMeta1} meta2={h.heroMeta2} kicker={h.heroKicker}
        h1={h.heroH1} h1Accent={1} lede={h.heroLede} frame="frame--editorial" />
      <section className="screen--cream" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div className="meta-row" style={{ marginBottom: 24 }}><span>{h.cMeta}</span><span>{h.cMeta2}</span></div>
          <h2 className="h-2 fade-up" style={{ marginBottom: 48 }}>{h.cHead}</h2>
          <div className="benefit-grid">
            {h.cBenefits.map(([n, head, desc], i) => (
              <div className={"bcard " + (head === "추후 추가" || head === "More to come" ? "is-empty" : "")} key={i}>
                <span className="num">{n}</span>
                <h3>{head}</h3>
                {desc ? <p>{desc}</p> : <p className="empty-note">— —</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="screen--ink" style={{ padding: "120px 48px", color: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <div className="clip"><div className="frame frame--milano"></div></div>
        <div className="grain"></div>
        <div className="content" style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div className="meta-row" style={{ marginBottom: 24, color: "var(--cream)" }}><span>{h.bMeta}</span><span>{h.bMeta2}</span></div>
          <h2 className="h-2 fade-up" style={{ marginBottom: 48, color: "var(--cream)" }}>{h.bHead}</h2>
          <div className="benefit-grid benefit-grid--ink">
            {h.bBenefits.map(([n, head, desc], i) => (
              <div className={"bcard bcard--ink " + (head === "추후 추가" || head === "More to come" ? "is-empty" : "")} key={i}>
                <span className="num">{n}</span>
                <h3>{head}</h3>
                {desc ? <p>{desc}</p> : <p className="empty-note">— —</p>}
              </div>
            ))}
          </div>
          <a href="#contact" onClick={(e) => { e.preventDefault(); setPage("contact"); }} className="btn btn--inverse" style={{ marginTop: 48 }}>{h.bCta} <span className="arrow">→</span></a>
        </div>
      </section>
    </>
  );
}

// ============ SERVICES ============
function ServicesPage({ t, setPage }) {
  const s = t.services;
  return (
    <>
      <SubHero meta1={s.heroMeta1} meta2={s.heroMeta2} kicker={s.heroKicker}
        h1={s.heroH1} h1Accent={1} accentColor="var(--tomato)" lede={s.heroLede} frame="frame--milano" />
      <section style={{ padding: "120px 48px" }} className="screen--cream">
        <div className="meta-row" style={{ marginBottom: 24, maxWidth: 1440, marginLeft: "auto", marginRight: "auto" }}>
          <span>{s.pathsMeta}</span><span>{s.pathsMeta2}</span>
        </div>
        <h2 className="h-2 fade-up" style={{ maxWidth: 1440, margin: "0 auto 48px" }}>{s.pathsHead}</h2>
        <div className="rev-grid" style={{ maxWidth: 1440, margin: "0 auto" }}>
          {s.paths.map(([n, name, desc], i) => (
            <div className="rev-card" key={i}>
              <div>
                <span className="num">{n}</span>
                <h3>{name.split("\n").map((l, j) => (
                  <React.Fragment key={j}>{l}{j === 0 && name.includes("\n") ? <br /> : null}</React.Fragment>
                ))}</h3>
              </div>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="screen--ink global-row" style={{ position: "relative", overflow: "hidden" }}>
        <div className="clip"><div className="frame frame--milano"></div></div>
        <div className="grain"></div>
        <div className="content">
          <span className="kicker" style={{ color: "var(--mustard)" }}>{s.gKicker}</span>
          <h2 className="h-1 fade-up" style={{ marginTop: 24, color: "var(--cream)" }}>
            {s.gHead[0]}<br />{s.gHead[1]}<br /><span style={{ color: "var(--mustard)" }}>{s.gHead[2]}</span>
          </h2>
        </div>
        <div className="content">
          <p className="lede lede--lg fade-up" style={{ color: "var(--cream)", opacity: 0.9 }}>{s.gLede}</p>
          <p style={{ fontFamily: "var(--mono)", fontSize: 13, opacity: 0.7, marginTop: 24, color: "var(--cream)" }}>{s.gMeta}</p>
        </div>
      </section>
      <section style={{ padding: "120px 48px 0" }} className="screen--cream">
        <div className="meta-row" style={{ marginBottom: 24, maxWidth: 1440, marginLeft: "auto", marginRight: "auto" }}>
          <span>{s.pkgMeta}</span><span>{s.pkgMeta2}</span>
        </div>
        <h2 className="h-2 fade-up" style={{ maxWidth: 1440, margin: "0 auto 48px" }}>{s.pkgHead}</h2>
      </section>
      <div className="pkg-grid" style={{ maxWidth: 1440, margin: "0 auto", padding: "0 48px" }}>
        {s.packages.map(([tier, head, subhead, body, regions], i) => (
          <div className={"pkg" + (i === 0 ? " is-feature" : "")} key={i}>
            <span className="tier">{tier}</span>
            <h3>{head}</h3>
            {subhead ? <p className="pkg-sub">{subhead}</p> : null}
            {Array.isArray(regions) && regions.length ? (
              <div className="pkg-regions">
                {regions.map((r, j) => <span key={j} className="pkg-region">{r}</span>)}
              </div>
            ) : null}
            <p className="pkg-body">{body}</p>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1440, margin: "32px auto 0", padding: "0 48px", textAlign: "right" }}>
        <a href="#contact" onClick={(e) => { e.preventDefault(); setPage("contact"); }} className="btn btn--tertiary">{s.pkgPriceLink}</a>
      </div>
      <section className="screen--tomato" style={{ padding: "120px 48px", color: "var(--cream)", position: "relative", overflow: "hidden", marginTop: 120 }}>
        <div className="clip"><div className="frame frame--editorial"></div></div>
        <div className="grain"></div>
        <div className="content" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "end", maxWidth: 1440, margin: "0 auto" }}>
          <h2 className="h-1 fade-up" style={{ maxWidth: "14ch" }}>{s.ctaHead[0]}<br />{s.ctaHead[1]}</h2>
          <div>
            <p className="lede lede--lg" style={{ color: "var(--cream)", opacity: 0.92 }}>{s.ctaLede}</p>
            <a href="#contact" onClick={(e) => { e.preventDefault(); setPage("contact"); }} className="btn btn--inverse" style={{ marginTop: 24 }}>{s.ctaBtn} <span className="arrow">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}

// ============ CONTACT — short, single-screen ============
function ContactPage({ t }) {
  const c = t.contact;
  const [tab, setTab] = useStateP("brand");
  return (
    <section className="contact-screen first-fade">
      <div className="clip"><div className="frame frame--studio"></div></div>
      <div className="grain"></div>
      <div className="contact-wrap content">
        <div className="contact-head">
          <h1 className="h-2 fade-up" style={{ maxWidth: "20ch" }}>{c.head}</h1>
          <p className="lede lede--lg" style={{ marginTop: 12, opacity: 0.78 }}>{c.sub}</p>
        </div>
        <div className="contact-body">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="seg-tabs">
              {c.tabs.map(([k, label]) => (
                <button type="button" key={k} className={"seg " + (tab === k ? "is-on" : "")} onClick={() => setTab(k)}>{label}</button>
              ))}
            </div>
            <div className="field"><label>{c.labels.name}</label><input className="m-input" placeholder={c.placeholders.name} /></div>
            <div className="field"><label>{c.labels.brand}</label><input className="m-input" placeholder={c.placeholders.brand} /></div>
            <div className="field"><label>{c.labels.email}</label><input className="m-input" placeholder={c.placeholders.email} /></div>
            <div className="field"><label>{c.labels.message}</label><textarea className="m-input" rows="3" placeholder={c.placeholders.message}></textarea></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 24 }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.6 }}>{c.avg}</span>
              <button type="button" className="btn btn--primary">{c.sendBtn} <span className="arrow">→</span></button>
            </div>
          </form>
          <aside className="contact-aside">
            <span className="kicker">{c.asideHead}</span>
            <a className="contact-kakao" href="#">{c.kakao} <span className="arrow">↗</span></a>
            <a className="contact-email" href={"mailto:" + c.email}>{c.email}</a>
            <div className="contact-socials">
              {c.socials.map((s, i) => <a key={i} href="#">{s}</a>)}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AboutPage, ReferencesPage, HowPage, ServicesPage, ContactPage });
