// Reveal-on-scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("visible"));
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// KPI count-up
const counters = document.querySelectorAll("[data-count]");
const runCounter = (el) => {
  const target = Number(el.dataset.count);
  let n = 0;
  const step = Math.max(1, Math.floor(target / 40));
  const tick = () => {
    n += step;
    if (n >= target) n = target;
    el.textContent = n;
    if (n < target) requestAnimationFrame(tick);
  };
  tick();
};
const kpiObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      counters.forEach(runCounter);
      kpiObserver.disconnect();
    }
  });
}, { threshold: 0.4 });
if (counters.length) kpiObserver.observe(counters[0]);

// Timeline autoplay highlight
const steps = [...document.querySelectorAll(".step")];
let i = 0;
setInterval(() => {
  steps.forEach(s => s.classList.remove("active"));
  i = (i + 1) % steps.length;
  steps[i].classList.add("active");
}, 1800);

// Tilt cards
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `rotateX(${(-y*5).toFixed(2)}deg) rotateY(${(x*6).toFixed(2)}deg)`;
  });
  card.addEventListener("mouseleave", () => card.style.transform = "");
});

// Theme toggle
const toggle = document.getElementById("themeToggle");
toggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Animated blueprint dots background
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let dots = [];
function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  dots = Array.from({ length: Math.min(100, Math.floor(innerWidth / 18)) }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.8 + 0.7,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25
  }));
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(125, 198, 255, 0.7)";
  dots.forEach(d => {
    d.x += d.vx; d.y += d.vy;
    if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
    if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
    ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fill();
  });
  requestAnimationFrame(draw);
}
addEventListener("resize", resize);
resize(); draw();
