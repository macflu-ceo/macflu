// shared marketing site init — fade-ups, hero clip cycle
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')), {threshold: 0.1});
document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
requestAnimationFrame(() => document.querySelectorAll('[data-screen-label="01 Hero"] .fade-up, .first-fade .fade-up').forEach(e => e.classList.add('in')));

// hero clip sequence — cycles through .hero-clip elements at 4s intervals
const heroClips = document.querySelectorAll('.hero-clip');
if (heroClips.length) {
  let i = 0;
  setInterval(() => {
    heroClips.forEach(c => c.classList.remove('is-on'));
    i = (i + 1) % heroClips.length;
    heroClips[i].classList.add('is-on');
  }, 4000);
}
