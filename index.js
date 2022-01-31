console.log(
  "\n 1. Вёрстка валидная +10 \n 2. Вёрстка семантическая +20 \n 3. Вёрстка соответствует макету +48.\n 4. Требования к css + 12. \n 5. Интерактивность, реализуемая через css +20. \n "
);

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__nav");
const navLink = document.querySelectorAll(".header__nav-link");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
  hamburger.classList.toggle("is-active");
  hamburger.classList.toggle("fixed");
  menu.classList.toggle("open");
  overlay.classList.toggle("block");
  window.addEventListener("keydown", onEscKeyPress);
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
navLink.forEach((el) => el.addEventListener("click", toggleMenu));

// закрытие по "Escape"
function onEscKeyPress(event) {
  const isEscKey = event.code === "Escape";
  console.log(event);
  if (isEscKey) {
    toggleMenu();
    window.removeEventListener("keydown", onEscKeyPress);
  }
}

//=================== toggleTheme ==================
const body = document.querySelector("body");
const title = document.querySelectorAll(".section-title");
const btnTheme = document.querySelector(".carbon_sun");
// const menu = document.querySelector(".header__nav"); вверху есть

btnTheme.addEventListener("click", toggleTheme);

function toggleTheme() {
  body.classList.toggle("light-theme");
  // menu.classList.toggle("light-theme");
  console.log("click");
  // не применяется
  title.forEach((el) => el.classList.toggle(".light-theme"));
  if (document.documentElement.clientWidth <= 768) {
    menu.classList.toggle("light-theme");
  }
}

// ====== local storage ==========
// const languageLink = document.querySelectorAll(".language-link");
// languageLink.addEventListener("click", );

let lang = en;
// let theme = light;

function setLocalStorage() {
  localStorage.setItem("lang", lang);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("lang")) {
    const lang = localStorage.getItem("lang");
    getTranslate(lang);
  }
}
window.addEventListener("load", getLocalStorage);
//
// ===============portfolioImages=================
const portfolioImages = document.querySelectorAll(".portfolio-image");

function changeImage(event) {
  if (event.target.classList.contains("portfolio-btn")) {
    // здесь код функции, меняющей src изображений
    portfolioImages.forEach(
      (img, index) => (img.src = `./assets/img/winter/${index + 1}.jpg`)
    );
  }
}
