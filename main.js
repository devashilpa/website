AOS.init({
    duration:1000,
    once:true
});

const heroBg = document.querySelector('.hero-bg');
let lastScroll = 0;

function updateHeroBg() {
    const offset = Math.min(lastScroll, 350);
    const scale = 1 + offset / 1400;
    if (heroBg) {
        heroBg.style.transform = `scale(${scale})`;
    }
}

window.addEventListener('scroll', () => {
    lastScroll = window.scrollY;
    window.requestAnimationFrame(updateHeroBg);
});
