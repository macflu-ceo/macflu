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

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = React.useState('main');
  const [lang, setLang] = React.useState('KO');
  const [navTheme, setNavTheme] = React.useState('cream');

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
  const goTo = (next) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'auto' });
    setNavTheme(next === 'brink' ? 'ink' : 'cream');
    // Force-reveal active page elements so hero text shows even without scroll
    setTimeout(() => {
      document.querySelectorAll('.page.is-active .reveal, .page.is-active .slidein-block, .page.is-active .fade-zoom')
        .forEach(el => el.classList.add('in'));
    }, 30);
  };

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
      <AppNav page={page} setPage={goTo} lang={lang} setLang={setLang} theme={navTheme} />

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
      <a className="app-nav__brand" onClick={() => setPage('main')}>
        Macflu<sup>®</sup>
      </a>
      <div className="app-tabs" role="tablist">
        <button className={'app-tabs__btn ' + (page === 'main' ? 'is-active' : '')} onClick={() => setPage('main')}>
          <span className="app-tabs__num">01</span>Macflu
        </button>
        <button className={'app-tabs__btn ' + (page === 'brink' ? 'is-active' : '')} onClick={() => setPage('brink')}>
          <span className="app-tabs__num">02</span>Brink
        </button>
        <button className={'app-tabs__btn ' + (page === 'contact' ? 'is-active' : '')} onClick={() => setPage('contact')}>
          <span className="app-tabs__num">03</span>Contact
        </button>
      </div>
      <div className="app-nav__right">
        <div className="lang-toggle">
          <button className={lang === 'KO' ? 'is-active' : ''} onClick={() => setLang('KO')}><span>KO</span></button>
          <button className={lang === 'EN' ? 'is-active' : ''} onClick={() => { setLang('EN'); window.__macToast('EN — coming soon · 영문 버전 준비 중입니다'); setTimeout(() => setLang('KO'), 800); }}><span>EN</span></button>
        </div>
        <button className="nav-cta" onClick={() => setPage('contact')}>Get in touch →</button>
      </div>
    </nav>
  );
}

// Mount
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
