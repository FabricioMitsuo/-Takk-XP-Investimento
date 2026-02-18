const links = document.querySelectorAll('a[href^="#"]');
const menuToggle = document.querySelector('.menu-toggle');
const menuWrap = document.querySelector('.menu-wrap');

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (menuWrap?.classList.contains('open')) {
      menuWrap.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menuWrap?.classList.toggle('open');
});
