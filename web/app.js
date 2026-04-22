const body = document.body;
const pulseToggle = document.getElementById('pulse-toggle');
const contrastHelp = document.getElementById('contrast-help');
const contrastNote = document.getElementById('contrast-note');

let animated = true;

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  animated = false;
  body.classList.add('reduced-motion');
  pulseToggle.setAttribute('aria-pressed', 'false');
  pulseToggle.textContent = 'Enable ambient motion';
}

pulseToggle.addEventListener('click', () => {
  animated = !animated;
  body.classList.toggle('reduced-motion', !animated);
  pulseToggle.setAttribute('aria-pressed', String(animated));
  pulseToggle.textContent = animated ? 'Pause ambient motion' : 'Enable ambient motion';
});

contrastHelp.addEventListener('click', () => {
  const hidden = contrastNote.hasAttribute('hidden');
  if (hidden) {
    contrastNote.removeAttribute('hidden');
  } else {
    contrastNote.setAttribute('hidden', '');
  }
});

const lazyPanels = document.querySelectorAll('.panel img[loading="lazy"]');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  },
  { rootMargin: '100px 0px' }
);

lazyPanels.forEach((panel) => io.observe(panel));
