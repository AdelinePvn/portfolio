const NB_IMAGE = 16;
let nbBackground = 1;
let intervalId = null;
const TIME_INTERVAL = 2500;

const changeBackground = () => {
    nbBackground = (nbBackground % NB_IMAGE) + 1;
    $('.header h2').css('opacity', '0');
    setTimeout(() => {
        $('.header h2').css('background-image', `url("./img/bg${nbBackground}.jpg")`);
    }, 300);

    setTimeout(() => {
        $('.header h2').css('opacity', '1');
    }, 500);
}

const start = () => {
    intervalId = setInterval(changeBackground, TIME_INTERVAL);
}

start();

const cursor = document.querySelector('.cursor');
const nav = document.querySelector('nav');

document.onmousemove = (ev) => {
    cursor.style.top = `${ev.clientY}px`;
    cursor.style.left = `${ev.clientX}px`;
}

nav.onclick = (e) => {
    nav.classList.toggle('active');
    nav.style.paddingTop = nav.classList.contains('active') ? `${document.querySelector('nav .content').offsetHeight}px` : null;
    e.stopPropagation();
}

document.onclick = () => {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        nav.style.paddingTop = null;
    }
}

const flkty = new Flickity('.carousel', {
    draggable : (typeof window.orientation !== 'undefined') ? false : true,
    hash: true,
    contain: false,
    groupCells: false,
    fullscreen: true,
});

flkty.on('ready.flickity', () => {
    flkty.resize();
    document.querySelector('.flickity-viewport').style.height = null;
    flkty.select(0);
});

if (typeof window.orientation !== 'undefined') { 
    cursor.style.display = 'none'; 
}

flkty.viewFullscreen();

window.onresize = (event) => {
    flkty.resize(); 
    document.querySelector('.flickity-viewport').style.height = null; 
};