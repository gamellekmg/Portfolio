function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}
const section = document.querySelector('.hero-section');

const backgrounds = [
  './assets/bg1.jpg',
  './assets/bg2.png',
  './assets/bg3.jpg'
];

let index = 0;

setInterval(() => {
  index = (index + 1) % backgrounds.length;
  section.style.backgroundImage = `url('${backgrounds[index]}')`;
}, 10000); // 10000ms = 10 seconds
