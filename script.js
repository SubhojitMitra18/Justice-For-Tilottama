const revealImage = document.querySelector('.reveal-image');
const mainImage = document.querySelector('.main-image');

mainImage.addEventListener('mousemove', (e) => {
  const rect = mainImage.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;  
  
  
  revealImage.style.clipPath = `circle(80px at ${x}px ${y}px)`;
});

mainImage.addEventListener('mouseleave', () => {
  revealImage.style.clipPath = 'circle(0% at 0 0)';
});
