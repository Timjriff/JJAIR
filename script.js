const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  menu.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !expanded);
});
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Open navigation'); }
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if(event.key === 'Escape') { closeMenu(); menu.focus(); } });
const header = document.querySelector('#header');
function updateHeader(){header.classList.toggle('scrolled', window.scrollY > 70);}
window.addEventListener('scroll', updateHeader, {passive:true}); updateHeader();
document.querySelector('#year').textContent = new Date().getFullYear();
const video = document.querySelector('#hero-video');
const videoToggle = document.querySelector('#video-toggle');
function syncVideoButton(){videoToggle.textContent = video.paused ? '▶' : 'Ⅱ';videoToggle.setAttribute('aria-label',video.paused ? 'Play background video' : 'Pause background video');}
videoToggle.addEventListener('click', () => { if(video.paused) video.play().catch(syncVideoButton); else video.pause(); });
video.addEventListener('play',syncVideoButton);video.addEventListener('pause',syncVideoButton);
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) video.pause();
syncVideoButton();
