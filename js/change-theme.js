function getTranslateRu() {
  eng.classList.remove("active");
  rus.classList.add("active");

  el.forEach((el) => {
    const text = i18Obj.ru[el.dataset.i18];
    if (el.placeholder) {
      el.placeholder = text;
    }
    el.textContent = text;
  });
}
function getTranslateEng() {
  rus.classList.remove("active");
  eng.classList.add("active");
  // el.forEach((el) => {
  //   const text = i18Obj.en[el.dataset.i18];
  //   if (el.placeholder) {
  //     el.placeholder = text;
  //   }
  //   el.textContent = text;
  // });
}
