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

  return (
    <main className="contact" data-screen-label="Contact">
      <div className="contact__form-side">
        <div className="contact__head">
          <span className="contact__meta">— CONTACT · 한 화면 · 한 줄</span>
          <h1 className="contact__h">
            <span className="acc">Contact.</span>
          </h1>
          <p className="contact__sub">짧게 적어주세요. 평균 3일 이내 답신드립니다.</p>
        </div>

        <div className="contact__tabs">
          {[
            { id: 'creator', num: '01', label: 'Creator' },
            { id: 'brand',   num: '02', label: 'Brand' },
            { id: 'other',   num: '03', label: 'Other' },
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
            <h3>잘 받았습니다 — <span className="acc">곧 답신.</span></h3>
            <p>평균 응답 3일 이내. 그동안 카카오 채널이 가장 빠른 길입니다.</p>
            <div className="contact__success-mono">— TICKET #MF{Math.floor(Math.random() * 99999).toString().padStart(5, '0')}</div>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="field">
              <label className="field__label">— 이름 / Name</label>
              <input className="field__input" placeholder={tab === 'brand' ? 'Brand or company' : '이름을 적어주세요'}
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div className="field">
              <label className="field__label">— 이메일 / Email</label>
              <input className="field__input" type="email" placeholder="you@studio.kr"
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div className="field">
              <label className="field__label">
                {tab === 'creator' && '— SNS · 인스타·틱톡·유튜브 등'}
                {tab === 'brand'   && '— 웹사이트 / SNS'}
                {tab === 'other'   && '— 링크 (선택)'}
              </label>
              <input className="field__input" placeholder={tab === 'creator' ? '@your_handle' : 'brand.com 또는 SNS'}
                value={form.sns} onChange={(e) => setForm({ ...form, sns: e.target.value })} />
            </div>
            <div className="field field--textarea">
              <label className="field__label">— 한 줄로 (간단히)</label>
              <textarea className="field__input" rows="2" placeholder={
                  tab === 'creator' ? '함께 짓고 싶은 동행을, 한 줄로.' :
                  tab === 'brand' ? '필요한 무게. 시즌, 카테고리, 채널.' :
                  '무엇에 대한 얘기인지 한 줄.'
                }
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required></textarea>
              <span className="field__hint">권장 1문장 — 길게 적지 않으셔도 괜찮습니다.</span>
            </div>

            <button type="submit" className="contact__send">보내기 / Send</button>
          </form>
        )}
      </div>

      <aside className="contact__aside">
        <div>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.6 }}>— DIRECT LINES</span>
          <h2 className="contact__aside-h" style={{ marginTop: 12 }}>
            가장 빠른 <span className="acc">길.</span>
          </h2>
        </div>

        <div className="contact__channels">
          <div className="channel">
            <span className="channel__label">— Kakao 채널 · 가장 빠른 길</span>
            <a className="channel__value" href="#" onClick={(e) => { e.preventDefault(); window.__macToast('Kakao 채널 — 연동 준비 중'); }}>
              @macflu <span className="tag-fast">FAST</span>
            </a>
          </div>
          <div className="channel">
            <span className="channel__label">— Email</span>
            <a className="channel__value" href="mailto:hello@macflu.com">hello@macflu.com</a>
          </div>
          <div className="channel">
            <span className="channel__label">— Press / Deck</span>
            <a className="channel__value" href="#" onClick={(e) => { e.preventDefault(); window.__macToast('Pitch deck PDF — 준비 중'); }}>Pitch deck — PDF ↓</a>
          </div>
        </div>

        <div className="contact__avg">
          <span className="contact__avg-big">3<span style={{ fontSize: '0.5em' }}>d</span></span>
          <span>평균 응답<br/>Avg. response</span>
        </div>
      </aside>
    </main>
  );
}

// ─────── SHARED FOOTER ─────────────────────────────────────────────────────
function SiteFooter({ goTo }) {
  return (
    <footer className="footer">
      <h2 className="footer__top">
        Brands,<br/>dressed in <span className="acc">influence.</span>
      </h2>
      <div className="footer__cols">
        <div className="footer__col">
          <h4>Macflu</h4>
          <p style={{ opacity: 0.7, maxWidth: '32ch' }}>한국 No.1 명품 공급사가 만든 패션 MCN. 브랜드와 영향력을, 콘텐츠로 잇습니다.</p>
          <a href="#" className="footer__kakao" onClick={(e) => { e.preventDefault(); window.__macToast('Kakao 채널 — 연동 준비 중'); }}>
            <span>●</span> 카카오 채널로 문의
          </a>
        </div>
        <div className="footer__col">
          <h4>Pages</h4>
          <a href="#" onClick={(e) => { e.preventDefault(); goTo && goTo('main'); }}>Macflu</a>
          <a href="#" onClick={(e) => { e.preventDefault(); goTo && goTo('brink'); }}>Brink</a>
          <a href="#" onClick={(e) => { e.preventDefault(); goTo && goTo('contact'); }}>Contact</a>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <a href="mailto:hello@macflu.com">hello@macflu.com</a>
          <p style={{ opacity: 0.55 }}>평균 응답 3일</p>
        </div>
      </div>
      <div className="footer__biz">
        {[
          ['상호', '맥플루'],
          ['대표자', '이긍정'],
          ['사업자등록번호', '602-16-52931'],
          ['대표번호', '070-8983-9525'],
          ['개인정보보호책임자', '이긍정'],
        ].map(([k, v]) => (
          <span key={k} className="footer__biz-item">
            <span className="footer__biz-k">{k}</span>{v}
          </span>
        ))}
        <span className="footer__biz-item footer__biz-item--wide">
          <span className="footer__biz-k">주소</span>서울특별시 강남구 도곡로84길 6, B1층 23호(대치동)
        </span>
      </div>
      <div className="footer__low">
        <span>© 2026 Macflu — 맥플루</span>
        <span>EDITION 01 · SS 26 · SEOUL ↔ MILANO</span>
      </div>
    </footer>
  );
}

window.ContactPage = ContactPage;
window.SiteFooter = SiteFooter;
