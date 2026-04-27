// chrome.jsx — shared nav, footer, marquee
const { useState, useEffect, useRef } = React;

function Nav({ lang, setLang, page, setPage, t }) {
  const items = [
    ["about", t.nav.about],
    ["references", t.nav.references],
    ["how", t.nav.how],
    ["services", t.nav.services],
    ["contact", t.nav.contact],
  ];
  return (
    <nav className="nav">
      <a href="#" onClick={(e) => { e.preventDefault(); setPage("home"); }} className="nav__logo">Macflu</a>
      <div className="nav__links">
        {items.map(([k, label]) => (
          <a
            key={k}
            href={"#" + k}
            aria-current={page === k ? "page" : undefined}
            onClick={(e) => { e.preventDefault(); setPage(k); }}
          >{label}</a>
        ))}
      </div>
      <div className="nav__corner">
        <button
          className={"lang-btn " + (lang === "ko" ? "is-on" : "")}
          onClick={() => setLang("ko")}
        >KO</button>
        <span className="lang-sep">/</span>
        <button
          className={"lang-btn " + (lang === "en" ? "is-on" : "")}
          onClick={() => setLang("en")}
        >EN</button>
      </div>
    </nav>
  );
}

function Marquee({ words, variant = "ink" }) {
  const cls = variant === "cream" ? "marquee marquee--cream" : "marquee";
  // double the array for seamless loop
  const stream = [...words, ...words, ...words, ...words];
  return (
    <div className={cls}>
      <div className="marquee__track">
        {stream.map((w, i) => (
          <React.Fragment key={i}>
            <span>{w}</span><span className="dot">—</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function Footer({ t, setPage }) {
  const f = t.footer;
  const link = (k, label) => (
    <a href={"#" + k} onClick={(e) => { e.preventDefault(); setPage(k); }}>{label}</a>
  );
  return (
    <footer className="footer">
      <h2 className="footer__big">{f.big}</h2>
      <div className="footer__cols">
        <div className="footer__col">
          <h4>{f.sub}</h4>
          <p style={{ opacity: 0.7 }}>{f.subDesc}</p>
          <div className="footer__sub">
            <input placeholder="your.email@studio" />
            <button>→</button>
          </div>
        </div>
        <div className="footer__col">
          <h4>{f.studio}</h4>
          {link("about", t.nav.about)}
          {link("how", t.nav.how)}
          {link("services", t.nav.services)}
        </div>
        <div className="footer__col">
          <h4>{f.voices}</h4>
          {link("references", t.nav.references)}
        </div>
        <div className="footer__col">
          <h4>{f.contact}</h4>
          <a href="mailto:hello@macflu.kr">hello@macflu.kr</a>
          <a href="#">@macflu</a>
          {link("contact", f.formLink)}
        </div>
      </div>
      <div className="footer__low">
        <span>{f.copyLine}</span>
        <span>{f.route}</span>
      </div>
    </footer>
  );
}

// IntersectionObserver-based fade-up reveal — re-runs whenever children change
function useFadeUp(deps = []) {
  useEffect(() => {
    // Reveal hero / first-fade / sub-hero IMMEDIATELY (synchronous, before IO attaches)
    document
      .querySelectorAll('[data-screen-label^="01"] .fade-up, .first-fade .fade-up, .sub-hero .fade-up, .hero .fade-up')
      .forEach((e) => e.classList.add("in"));

    const els = document.querySelectorAll(".fade-up:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, deps);
}

Object.assign(window, { Nav, Marquee, Footer, useFadeUp });
