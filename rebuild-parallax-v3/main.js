
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (menu && nav) menu.addEventListener('click', () => nav.classList.toggle('open'));

// Lightweight parallax that works more consistently than background-attachment on mobile.
const parallaxEls = [...document.querySelectorAll('.hero, .page-hero, .case-hero, .parallax-band')];
function updateParallax(){
  const vh = window.innerHeight;
  parallaxEls.forEach((el)=>{
    const rect = el.getBoundingClientRect();
    if(rect.bottom < 0 || rect.top > vh) return;
    const speed = parseFloat(el.dataset.speed || '0.16');
    const y = (rect.top - vh/2) * speed;
    el.style.setProperty('--parallax-y', `${y}px`);
  });
}
window.addEventListener('scroll', updateParallax, {passive:true});
window.addEventListener('resize', updateParallax);
updateParallax();

// Casual-download deterrence. Real protection requires serving only watermarked/low-res public assets.
document.querySelectorAll('.no-save, .gallery-item').forEach(el=>{
  el.addEventListener('contextmenu', e => e.preventDefault());
  el.addEventListener('dragstart', e => e.preventDefault());
});
