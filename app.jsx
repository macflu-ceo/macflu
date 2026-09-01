// Macflu — main app shell
// Three "pages" (Main / Brink / Contact) toggled by top nav.
// Centralized tweaks state for variations.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "metricStyle": "bigNumbers",
  "motionLevel": "standard",
  "typeScale": "magazine",
  "colorEmphasis": "balanced"
}/*EDITMODE-END*/;

// global toast helper
window.__macToast = (msg) => {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
};

// scroll-reveal observer (motion intensity respects tweak)
window.__macSetupReveals = () => {
  const els = document.querySelectorAll('.reveal, .slidein-block, .fade-zoom');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
  return () => io.disconnect();
};

// counter animation
window.__macAnimateCounter = (el, target, suffix='', duration=1400) => {
  const start = performance.now();
  const initial = 0;
  const step = (now) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.round(initial + (target - initial) * eased);
    el.textContent = val.toLocaleString() + suffix;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

// ── Routing ────────────────────────────────────────────────────────────────
// URL은 /{lang}/{page} 꼴. 한국어는 접두어 없이 /, 영어·중국어는 /en, /zh.
// 언어마다 주소가 따로 있어야 검색엔진이 언어별로 색인한다.
const SITE = 'https://www.macflu.com';
const PAGE_SLUG = { main: '', brink: 'brink', contact: 'contact' };
const SLUG_PAGE = { '': 'main', brink: 'brink', contact: 'contact' };
const OG_LOCALE = { ko: 'ko_KR', en: 'en_US', zh: 'zh_CN' };

function pathFor(lang, page) {
  const seg = [];
  if (lang !== 'ko') seg.push(lang);
  if (PAGE_SLUG[page]) seg.push(PAGE_SLUG[page]);
  return '/' + seg.join('/');
}

function parseLocation() {
  const parts = window.location.pathname.split('/').filter(Boolean);
  let lang = 'ko';
  if (parts.length && parts[0] !== 'ko' && LANGS.indexOf(parts[0]) !== -1) lang = parts.shift();
  return { lang: lang, page: SLUG_PAGE[parts[0] || ''] || 'main' };
}

// 언어별 대체 주소. 구글이 같은 문서의 다른 언어판을 알아보게 한다.
function setAlternates(page) {
  document.querySelectorAll('link[rel="alternate"][data-i18n]').forEach((el) => el.remove());
  const rows = LANGS.map((l) => [HTML_LANG[l], pathFor(l, page)]);
  rows.push(['x-default', pathFor('ko', page)]);
  rows.forEach(([hl, path]) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', hl);
    link.setAttribute('href', SITE + path);
    link.setAttribute('data-i18n', '1');
    document.head.appendChild(link);
  });
}

function App() {
  const init = parseLocation();
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = React.useState(init.page);
  const [lang, setLang] = React.useState(init.lang);
  const [navTheme, setNavTheme] = React.useState(init.page === 'brink' ? 'ink' : 'cream');

  // 자식이 그려지기 전에 사전을 현재 언어로 맞춘다.
  __setLangData(lang);

  // apply type scale to root
  React.useEffect(() => {
    const root = document.documentElement;
    if (t.typeScale === 'mega') {
      root.style.setProperty('--hero-size', 'clamp(80px, 16vw, 280px)');
    } else if (t.typeScale === 'realistic') {
      root.style.setProperty('--hero-size', 'clamp(56px, 9vw, 132px)');
    } else {
      root.style.setProperty('--hero-size', 'clamp(70px, 13vw, 220px)');
    }
  }, [t.typeScale]);

  // marquee speed per motion level
  React.useEffect(() => {
    const root = document.documentElement;
    if (t.motionLevel === 'subtle') {
      root.style.setProperty('--marquee-speed', '70s');
    } else if (t.motionLevel === 'strong') {
      root.style.setProperty('--marquee-speed', '20s');
    } else {
      root.style.setProperty('--marquee-speed', '36s');
    }
  }, [t.motionLevel]);

  // setup intersection observer once mounted
  React.useEffect(() => {
    // re-run when page changes so new sections register
    setTimeout(() => {
      window.__macSetupReveals();
      // Also force-reveal anything already in the active page's first viewport
      document.querySelectorAll('.page.is-active .reveal, .page.is-active .slidein-block, .page.is-active .fade-zoom')
        .forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in');
        });
    }, 50);
  }, [page]);

  // page switch handler — also reset scroll
  const applyPage = (next) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'auto' });
    setNavTheme(next === 'brink' ? 'ink' : 'cream');
    // Force-reveal active page elements so hero text shows even without scroll
    setTimeout(() => {
      document.querySelectorAll('.page.is-active .reveal, .page.is-active .slidein-block, .page.is-active .fade-zoom')
        .forEach(el => el.classList.add('in'));
    }, 30);
  };

  const goTo = (next) => {
    const path = pathFor(lang, next);
    if (window.location.pathname !== path) {
      window.history.pushState({ page: next, lang: lang }, '', path);
    }
    applyPage(next);
  };

  // 같은 페이지에 머무른 채 언어만 교체
  const switchLang = (next) => {
    if (next === lang) return;
    const path = pathFor(next, page);
    if (window.location.pathname !== path) {
      window.history.pushState({ page: page, lang: next }, '', path);
    }
    setLang(next);
  };

  // 브라우저 뒤로/앞으로
  React.useEffect(() => {
    const onPop = () => {
      const loc = parseLocation();
      setLang(loc.lang);
      applyPage(loc.page);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // 언어·페이지별 title / description / canonical / hreflang 갱신
  React.useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang] || 'ko';
    const dict = I18N[lang] || I18N.ko;
    const meta = dict.meta && dict.meta[page];
    if (!meta) return;
    const url = SITE + pathFor(lang, page);
    document.title = meta.title;
    const set = (sel, attr, val) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    };
    set('meta[name="description"]', 'content', meta.desc);
    set('meta[property="og:title"]', 'content', meta.title);
    set('meta[property="og:description"]', 'content', meta.desc);
    set('meta[property="og:url"]', 'content', url);
    set('meta[property="og:locale"]', 'content', OG_LOCALE[lang]);
    set('meta[name="twitter:title"]', 'content', meta.title);
    set('meta[name="twitter:description"]', 'content', meta.desc);
    set('link[rel="canonical"]', 'href', url);
    setAlternates(page);
  }, [page, lang]);

  // nav theme switches by scroll position (hero sections only)
  React.useEffect(() => {
    const onScroll = () => {
      if (page !== 'main') return;
      const y = window.scrollY;
      // we toggle based on which section is in view at top
      // very lightweight — just one threshold per section
      const sections = document.querySelectorAll('[data-nav-theme]');
      let active = 'cream';
      sections.forEach(s => {
        const top = s.offsetTop;
        if (y + 100 >= top) active = s.dataset.navTheme;
      });
      setNavTheme(active);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [page]);

  return (
    <React.Fragment>
      <AppNav page={page} setPage={goTo} lang={lang} setLang={switchLang} theme={navTheme} />

      <div className={'page ' + (page === 'main' ? 'is-active' : '')}>
        <MainPage tweaks={t} goTo={goTo} />
      </div>
      <div className={'page ' + (page === 'brink' ? 'is-active' : '')}>
        <BrinkPage goTo={goTo} />
      </div>
      <div className={'page ' + (page === 'contact' ? 'is-active' : '')}>
        <ContactPage tweaks={t} />
      </div>

      <TweaksUI t={t} setTweak={setTweak} />
    </React.Fragment>
  );
}

function AppNav({ page, setPage, lang, setLang, theme }) {
  return (
    <nav className={'app-nav ' + (theme === 'ink' ? 'app-nav--ink' : theme === 'persian' ? 'app-nav--persian' : '')}>
      <a className="app-nav__brand" onClick={() => setPage('main')} aria-label="Macflu">
        <img src="macflu-logo-white.png" alt="Macflu" className="app-nav__brand-img" />
      </a>
      <div className="app-tabs" role="tablist">
        <button className={'app-tabs__btn ' + (page === 'main' ? 'is-active' : '')} onClick={() => setPage('main')}>
          <span className="app-tabs__num">01</span>{T.nav.main}
        </button>
        <button className={'app-tabs__btn ' + (page === 'brink' ? 'is-active' : '')} onClick={() => setPage('brink')}>
          <span className="app-tabs__num">02</span>{T.nav.brink}
        </button>
        <button className={'app-tabs__btn ' + (page === 'contact' ? 'is-active' : '')} onClick={() => setPage('contact')}>
          <span className="app-tabs__num">03</span>{T.nav.contact}
        </button>
      </div>
      <div className="app-nav__right">
        <div className="lang-toggle">
          {LANGS.map((l) => (
            <button key={l}
              className={lang === l ? 'is-active' : ''}
              lang={HTML_LANG[l]}
              title={LANG_LABEL[l]}
              aria-label={LANG_LABEL[l]}
              onClick={() => setLang(l)}>
              <span>{LANG_SHORT[l]}</span>
            </button>
          ))}
        </div>
        <button className="nav-cta" onClick={() => setPage('contact')}>{T.nav.cta}</button>
      </div>
    </nav>
  );
}

// Mount
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
