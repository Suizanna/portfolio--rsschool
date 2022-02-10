//  translation
// import i18Obj from "./js/translate.js";
// const eng = document.querySelector(".en");
// const rus = document.querySelector(".ru");
// const el = document.querySelectorAll("[data-i18]");

// eng.addEventListener("click", getTranslateEng);
// rus.addEventListener("click", getTranslateRu);

// function getTranslateRu() {
//   eng.classList.remove("active");
//   rus.classList.add("active");
// }

// function getTranslateEng() {
//   rus.classList.remove("active");
//   eng.classList.add("active");
// }

// ================= Translation  Words =================
const i18Obj = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Rotouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    standard: "Standard",
    premium: "Premium",
    gold: "Gold",
    "price-description-1-span-1": "One location",
    "price-description-1-span-2": "120 photos in color",
    "price-description-1-span-3": "12 photos in retouch",
    "price-description-1-span-4": "Readiness 2-3 weeks",
    "price-description-1-span-5": "Make up, visage",
    "price-description-2-span-1": "One or two locations",
    "price-description-2-span-2": "200 photos in color",
    "price-description-2-span-3": "20 photos in retouch",
    "price-description-2-span-4": "Readiness 1-2 weeks",
    "price-description-2-span-5": "Make up, visage",
    "price-description-3-span-1": "Three locations or more",
    "price-description-3-span-2": "300 photos in color",
    "price-description-3-span-3": "50 photos in retouch",
    "price-description-3-span-4": "Readiness 1 week",
    "price-description-3-span-5": "Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "e-mail": "E-mail",
    phone: "Phone",
    message: "Message",
    "send-message": "Send message",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    standard: "Стандарт",
    premium: "Премиум",
    gold: "Золото",
    "price-description-1-span-1": "Одна локация",
    "price-description-1-span-2": "120 цветных фото",
    "price-description-1-span-3": "12 отретушированных фото",
    "price-description-1-span-4": "Готовность через 2-3 недели",
    "price-description-1-span-5": "Макияж, визаж",
    "price-description-2-span-1": "Одна-две локации",
    "price-description-2-span-2": "200 цветных фото",
    "price-description-2-span-3": "20 отретушированных фото",
    "price-description-2-span-4": "Готовность через 1-2 недели",
    "price-description-2-span-5": "Макияж, визаж",
    "price-description-3-span-1": "Три локации и больше",
    "price-description-3-span-2": "300 цветных фото",
    "price-description-3-span-3": "50 отретушированных фото",
    "price-description-3-span-4": "Готовность через 1 неделю",
    "price-description-3-span-5": "Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "e-mail": "Е-мейл",
    phone: "Телефон",
    message: "Сообщение",
    "send-message": "Отправить",
  },
};

// ====== local storage ru-lang & theme ==========
document.addEventListener("DOMContentLoaded", () => {
  if (window.localStorage.getItem("ru-lang") == "true") {
    getTranslateRu();
  }
  if (window.localStorage.getItem("light-theme") == "false") {
    toggleTheme();
  }
});

// ================= Translation =================
const russian = document.querySelector(".ru");
const english = document.querySelector(".en");
const words = document.querySelectorAll("[data-i18]");

function getTranslateRu() {
  english.classList.remove("active");
  russian.classList.add("active");
  words.forEach((el) => {
    const text = i18Obj.ru[el.dataset.i18];
    if (el.placeholder) {
      el.placeholder = text;
    }
    el.textContent = text;
  });
  // local storage
  window.localStorage.setItem("ru-lang", true);
}

function getTranslateEn() {
  russian.classList.remove("active");
  english.classList.add("active");
  words.forEach((el) => {
    const text = i18Obj.en[el.dataset.i18];
    if (el.placeholder) {
      el.placeholder = text;
    }
    el.textContent = text;
  });
  // local storage
  window.localStorage.setItem("ru-lang", false);
}

russian.addEventListener("click", getTranslateRu);
english.addEventListener("click", getTranslateEn);

// ================= Menu Open =================
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

//=================== Toggle Theme ==================
const body = document.querySelector("body");
const title = document.querySelectorAll(".section-title");
const btnTheme = document.querySelector(".switch_theme");
const modal = document.querySelector(".header__nav");

// закрытие
// const hamburgerTheme = document.querySelector(".line");
// hamburgerTheme.addEventListener("click", toggleTheme);
btnTheme.addEventListener("click", toggleTheme);

function toggleTheme() {
  // ====== local storage theme ==========
  if (body.classList == "light-theme") {
    window.localStorage.setItem("light-theme", true);
  } else {
    window.localStorage.setItem("light-theme", false);
  }
  // switch button
  body.classList.toggle("light-theme");
  btnTheme.classList.toggle("sun");
  btnTheme.classList.toggle("rotate");
  console.log("click");

  // title
  title.forEach((el) => el.classList.toggle("light-theme"));

  if (document.documentElement.clientWidth <= 768) {
    modal.classList.toggle("light-theme");
  }
}

// =============== Portfolio Images Change =================
const portfolioList = document.querySelector(".portfolio-btn-list");
const portfolioBtns = document.querySelectorAll(".portfolio-btn");
const portfolioImages = document.querySelectorAll(".portfolio-img");

portfolioList.addEventListener("click", changeImages);

function changeImages(event) {
  if (event.target.classList.contains("portfolio-btn")) {
    // кнопки
    portfolioBtns.forEach((item) =>
      item.classList.remove("portfolio-btn-active")
    );
    event.target.classList.add("portfolio-btn-active");
    // картинки по сезонам
    let seasons = event.target.dataset.season;
    portfolioImages.forEach(
      (img, index) => (img.src = `assets/img/${seasons}/${index + 1}.jpg`)
    );
  }
}
// Caching imgs
const seasons = ["winter", "spring", "summer", "autumn"];

function preloadImages() {
  seasons.forEach((item) => {
    for (let i = 1; i <= portfolioImages.length; i++) {
      const img = new Image();
      img.src = `assets/img/${item}/${i}.jpg`;
    }
  });
}

preloadImages();

console.log(`ОЦЕНКА - 85 БАЛЛОВ\n
Все пункты выполнены полностью!`);
// ===============================================================
