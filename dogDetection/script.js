const sidebar   = document.getElementById('sidebar');
const main      = document.getElementById('main');
const hamburger = document.getElementById('hamburger');
const heroText  = document.querySelector('.hero-text');
const isMobile  = () => window.innerWidth <= 768;

// ── Sidebar toggle ──
function init() {
  if (isMobile()) {
    sidebar.classList.remove('closed', 'open');
    main.classList.add('collapsed');
  } else {
    sidebar.classList.remove('closed', 'open');
    main.classList.remove('collapsed');
  }
}

hamburger.addEventListener('click', () => {
  if (isMobile()) {
    sidebar.classList.toggle('open');
  } else {
    sidebar.classList.toggle('closed');
    main.classList.toggle('collapsed');
  }
});

// ── Zavřít menu na mobilu po kliknutí na odkaz ──
document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (isMobile()) sidebar.classList.remove('open');
  });
});

// ── Parallax ──
window.addEventListener('scroll', () => {
  heroText.style.transform = `translateY(${window.scrollY * -0.3}px)`;
});

window.addEventListener('resize', init);
init();

//Galerie
const imgs = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

imgs.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

const track = document.querySelector('.gallery-track');
let scrollSpeed = 0.5;

function autoScroll() {
  track.scrollLeft += scrollSpeed;
  if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
    track.scrollLeft = 0;
  }
  requestAnimationFrame(autoScroll);
}

autoScroll();

track.addEventListener('mouseenter', () => scrollSpeed = 0);
track.addEventListener('mouseleave', () => scrollSpeed = 0.5);
