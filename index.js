console.log(
  "\n 1. Вёрстка валидная +10 \n 2. Вёрстка семантическая +20 \n 3. Вёрстка соответствует макету +48.\n 4. Требования к css + 12. \n 5. Интерактивность, реализуемая через css +20. \n "
);

const menuWind = document.querySelector(".burg-modal");
const iconBurg = document.querySelector(".burger-icon");
const body = document.querySelector(".body");
const backdrop = document.querySelector(".backdrop");

iconBurg.addEventListener(
  "click",
  (e = () => {
    iconBurg.classList.add("hide");
    backdrop.classList.add("backdrop-active");
    menuWind.classList.add("left");
    body.classList.add("over-hid");
  })
);
const clickMenu = document.querySelectorAll(".cl");

for (let i = 0; i < clickMenu.length; i++) {
  clickMenu[i].addEventListener(
    "click",
    (e = () => {
      menuWind.classList.remove("left");
      backdrop.classList.remove("backdrop-active");
      iconBurg.classList.remove("hide");
      body.classList.remove("over-hid");
    })
  );
}
