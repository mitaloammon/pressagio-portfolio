// BACKGROUND REATIVO AO MOUSE
document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  document.documentElement.style.setProperty('--x', `${x}%`);
  document.documentElement.style.setProperty('--y', `${y}%`);
});

// Fallback simples para browsers sem scroll-timeline
if (!CSS.supports('animation-timeline: scroll()')) {
  const items = document.querySelectorAll('.scroll-fade, .scroll-scale, .scroll-slide');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'none';
      }
    });
  }, { threshold: 0.2 });

  items.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
    observer.observe(el);
  });
}

const aboutCard = document.querySelector('.about-card');

window.addEventListener('scroll', () => {
  const rect = aboutCard.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    aboutCard.style.transform = 'translateY(0) scale(1)';
    aboutCard.style.opacity = '1';
  }
});
