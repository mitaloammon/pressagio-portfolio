
document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  document.documentElement.style.setProperty('--x', `${x}%`);
  document.documentElement.style.setProperty('--y', `${y}%`);
});

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

aboutCard.addEventListener('mousemove', (e) => {
  const rect = aboutCard.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const moveX = (x - centerX) / 18;
  const moveY = (y - centerY) / 18;

  aboutCard.style.transform = `
    translate(${moveX}px, ${moveY}px)
    rotateX(${-(moveY)}deg)
    rotateY(${moveX}deg)
    scale(1.03)
  `;
});

aboutCard.addEventListener('mouseleave', () => {
  aboutCard.style.transform = 'translate(0, 0) rotateX(0) rotateY(0) scale(1)';
});

window.addEventListener('scroll', () => {
  const rect = aboutCard.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    aboutCard.style.opacity = '1';
  }
});
