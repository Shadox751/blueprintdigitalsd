// Shared by index.html and gallery.html: menu toggle, footer year, scroll reveal.
document.documentElement.classList.add('js');

const toggle = document.querySelector('.menu-toggle');
const panel = document.getElementById('mobile-nav');
if (toggle && panel) {
  const setOpen = (open) => { toggle.setAttribute('aria-expanded', String(open)); panel.hidden = !open; };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  panel.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
}

document.querySelectorAll('.year').forEach((el) => { el.textContent = new Date().getFullYear(); });

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('visible'));
}
