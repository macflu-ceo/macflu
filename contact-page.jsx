// ContactPage — /contact — 짧은 폼

function ContactPage({ tweaks }) {
  const [tab, setTab] = React.useState('creator');
  const [form, setForm] = React.useState({ name: '', email: '', sns: '', message: '' });
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', sns: '', message: '' });
    }, 4000);
  };

  const C = T.contact;

  return (
    <main className="contact" data-screen-label="Contact">
      <div className="contact__form-side">
        <div className="contact__head">
          <span className="contact__meta">{C.meta}</span>
          <h1 className="contact__h">
            <span className="acc">{C.h}</span>
          </h1>
          <p className="contact__sub">{C.sub}</p>
        </div>

        <div className="contact__tabs">
          {[
            { id: 'creator', num: '01', label: C.tabs[0] },
            { id: 'brand',   num: '02', label: C.tabs[1] },
            { id: 'other',   num: '03', label: C.tabs[2] },
          ].map((t) => (
            <button key={t.id}
              className={'contact__tab ' + (tab === t.id ? 'is-active' : '')}
              onClick={() => setTab(t.id)}>
              <span className="num">{t.num}</span>{t.label}
            </button>
          ))}
        </div>

        {sent ? (
          <div className="contact__success">
            <h3>{C.successH}<span className="acc">{C.successAcc}</span></h3>
            <p>{C.successP}</p>
            <div className="contact__success-mono">— TICKET #MF{Math.floor(Math.random() * 99999).toString().padStart(5, '0')}</div>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="field">
              <label className="field__label">{C.labelName}</label>
              <input className="field__input" placeholder={tab === 'brand' ? C.phNameBrand : C.phName}
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div className="field">
              <label className="field__label">{C.labelEmail}</label>
              <input className="field__input" type="email" placeholder="you@studio.kr"
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div className="field">
              <label className="field__label">
                {tab === 'creator' && C.labelSnsCreator}
                {tab === 'brand'   && C.labelSnsBrand}
                {tab === 'other'   && C.labelSnsOther}
              </label>
              <input className="field__input" placeholder={tab === 'creator' ? C.phSnsCreator : C.phSnsOther}
                value={form.sns} onChange={(e) => setForm({ ...form, sns: e.target.value })} />
            </div>
            <div className="field field--textarea">
              <label className="field__label">{C.labelMsg}</label>
              <textarea className="field__input" rows="2" placeholder={
                  tab === 'creator' ? C.phMsgCreator :
                  tab === 'brand' ? C.phMsgBrand :
                  C.phMsgOther
                }
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required></textarea>
              <span className="field__hint">{C.hint}</span>
            </div>

            <button type="submit" className="contact__send">{C.send}</button>
          </form>
        )}
      </div>

      <aside className="contact__aside">
        <div>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.6 }}>{C.asideMeta}</span>
          <h2 className="contact__aside-h" style={{ marginTop: 12 }}>
            {C.asideHPre}<span className="acc">{C.asideHAcc}</span>
          </h2>
        </div>

        <div className="contact__channels">
          <div className="channel">
            <span className="channel__label">{C.chCreator}</span>
            <a className="channel__value" href="mailto:cast@macflu.com">cast@macflu.com <span className="tag-fast">FAST</span></a>
          </div>
          <div className="channel">
            <span className="channel__label">{C.chBrand}</span>
            <a className="channel__value" href="mailto:brand@macflu.com">brand@macflu.com</a>
          </div>
          <div className="channel">
            <span className="channel__label">{C.chPress}</span>
            <a className="channel__value" href="#" onClick={(e) => { e.preventDefault(); window.__macToast(C.pressToast); }}>{C.pressValue}</a>
          </div>
        </div>

        <div className="contact__avg">
          <span className="contact__avg-big">3<span style={{ fontSize: '0.5em' }}>d</span></span>
          <span>{C.avgLabel1}<br/>{C.avgLabel2}</span>
        </div>
      </aside>
    </main>
  );
}

// ─────── SHARED FOOTER ─────────────────────────────────────────────────────
function SiteFooter({ goTo }) {
  const F = T.footer;
  const biz = [
    [F.biz.name, F.biz.nameV],
    [F.biz.ceo, F.biz.ceoV],
    [F.biz.reg, '602-16-52931'],
    [F.biz.tel, '070-8983-9525'],
    [F.biz.privacy, F.biz.ceoV],
  ];
  return (
    <footer className="footer">
      <h2 className="footer__top">
        Brands,<br/>dressed in <span className="acc">influence.</span>
      </h2>
      <div className="footer__cols">
        <div className="footer__col">
          <h4>Macflu</h4>
          <p style={{ opacity: 0.7, maxWidth: '32ch' }}>{F.desc}</p>
        </div>
        <div className="footer__col">
          <h4>{F.colPages}</h4>
          <a href="#" onClick={(e) => { e.preventDefault(); goTo && goTo('main'); }}>Macflu</a>
          <a href="#" onClick={(e) => { e.preventDefault(); goTo && goTo('brink'); }}>Brink</a>
          <a href="#" onClick={(e) => { e.preventDefault(); goTo && goTo('contact'); }}>Contact</a>
        </div>
        <div className="footer__col">
          <h4>{F.colContact}</h4>
          <a href="mailto:cast@macflu.com">cast@macflu.com <span style={{ opacity: 0.5, fontSize: 11 }}>{F.tagCreator}</span></a>
          <a href="mailto:brand@macflu.com">brand@macflu.com <span style={{ opacity: 0.5, fontSize: 11 }}>{F.tagBrand}</span></a>
          <p style={{ opacity: 0.55 }}>{F.avg}</p>
        </div>
      </div>
      <div className="footer__biz">
        {biz.map(([k, v]) => (
          <span key={k} className="footer__biz-item">
            <span className="footer__biz-k">{k}</span>{v}
          </span>
        ))}
        <span className="footer__biz-item footer__biz-item--wide">
          <span className="footer__biz-k">{F.biz.addr}</span>{F.biz.addrV}
        </span>
      </div>
      <div className="footer__low">
        <span>{F.copy}</span>
        <span>{F.edition}</span>
      </div>
    </footer>
  );
}

window.ContactPage = ContactPage;
window.SiteFooter = SiteFooter;
