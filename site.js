// shared marketing site init — fade-ups, hero clip cycle
// React/Babel renders asynchronously, so we re-attach observers after render
const io = new IntersectionObserver(
  es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')),
  { threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
);

function attachFadeUps() {
  document.querySelectorAll('.fade-up:not([data-observed])').forEach(el => {
    el.setAttribute('data-observed', '1');
    io.observe(el);
  });
}

function showFirstFades() {
  document.querySelectorAll('[data-screen-label="01 Hero"] .fade-up, .first-fade .fade-up')
    .forEach(e => e.classList.add('in'));
}

// Initial + retry (React/Babel renders asynchronously)
attachFadeUps(); showFirstFades();
[150, 400, 800, 1500, 2500].forEach(t => setTimeout(() => { attachFadeUps(); showFirstFades(); }, t));

// Watch for React-rendered fade-up nodes
const mo = new MutationObserver(() => attachFadeUps());
mo.observe(document.body, { childList: true, subtree: true });

// Safety fallback — anything still hidden after 4s gets shown
setTimeout(() => document.querySelectorAll('.fade-up').forEach(e => e.classList.add('in')), 4000);

// hero clip sequence — cycles through .hero-clip elements at 4s intervals
function startHeroClipCycle() {
  const heroClips = document.querySelectorAll('.hero-clip');
  if (!heroClips.length) return;
  let i = 0;
  setInterval(() => {
    heroClips.forEach(c => c.classList.remove('is-on'));
    i = (i + 1) % heroClips.length;
    heroClips[i].classList.add('is-on');
  }, 4000);
}
setTimeout(startHeroClipCycle, 800);
