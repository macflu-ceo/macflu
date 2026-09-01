// ContactPage — /contact — 짧은 폼

const EMPTY_FORM = { name: '', email: '', sns: '', message: '', company: '' };
const MAIL_BY_TAB = { creator: 'cast@macflu.com', brand: 'brand@macflu.com', other: 'cast@macflu.com' };

function ContactPage({ tweaks }) {
  const [tab, setTab] = React.useState('creator');
  const [form, setForm] = React.useState(EMPTY_FORM);
  const [status, setStatus] = React.useState('idle');   // idle | sending | sent | error
  const [ticket, setTicket] = React.useState('');

  const C = T.contact;

  // 적은 내용을 그대로 담은 메일 작성 링크.
  // 전송이 실패해도 문의가 그냥 사라지지 않게 하는 마지막 안전망.
  const mailtoHref = () => {
    const subject = '[' + tab + '] ' + (form.name || '') + ' — macflu.com';
    const body = [
      'Name: ' + form.name,
      'Email: ' + form.email,
      form.sns ? 'SNS / Web: ' + form.sns : '',
      '',
      form.message,
    ].filter(Boolean).join('\n');
    return 'mailto:' + MAIL_BY_TAB[tab] +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cfg = window.MACFLU_FORM || {};
    if (!cfg.endpoint) { setStatus('error'); return; }
    setStatus('sending');
    try {
      const res = await fetch(cfg.endpoint, {
        method: 'POST',
        // text/plain 이라야 preflight 없이 Apps Script로 바로 간다.
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          token: cfg.token,
          kind: tab,
          name: form.name,
          email: form.email,
          sns: form.sns,
          message: form.message,
          company: form.company,          // 허니팟 — 사람은 비워둔다
          lang: document.documentElement.lang || 'ko',
          page: window.location.pathname,
        }),
      });
      const data = await res.json();
      if (!data || !data.ok) throw new Error((data && data.error) || 'failed');
      setTicket(data.ticket || '');
      setStatus('sent');
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus('error');
    }
  };

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

        {status === 'sent' ? (
          <div className="contact__success">
            <h3>{C.successH}<span className="acc">{C.successAcc}</span></h3>
            <p>{C.successP}</p>
            {ticket ? <div className="contact__success-mono">— TICKET #{ticket}</div> : null}
          </div>
        ) : status === 'error' ? (
          <div className="contact__success">
            <h3>{C.errorH}</h3>
            <p>{C.errorP}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
              <a className="contact__send" href={mailtoHref()}
                 style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                {C.errorCta}
              </a>
              <button type="button" className="contact__send"
                      style={{ background: 'transparent', color: 'inherit', border: '1px solid currentColor' }}
                      onClick={() => setStatus('idle')}>
                {C.retry}
              </button>
            </div>
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

            {/* 허니팟 — 화면 밖에 두고 사람은 못 채운다. 채워져 오면 봇으로 본다. */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
              <label>Company
                <input tabIndex={-1} autoComplete="off"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })} />
              </label>
            </div>

            <button type="submit" className="contact__send" disabled={status === 'sending'}>
              {status === 'sending' ? C.sending : C.send}
            </button>
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
