AOS.init({
    duration:1000,
    once:true
});

const heroBg = document.querySelector('.page-bg');
let lastScroll = 0;

function updateHeroBg() {
    const offset = Math.min(lastScroll, 450);
    const scale = 1 + offset / 6800;
    const rotation = offset / 35;
    if (heroBg) {
        heroBg.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
    }
}

window.addEventListener('scroll', () => {
    lastScroll = window.scrollY;
    window.requestAnimationFrame(updateHeroBg);
});
