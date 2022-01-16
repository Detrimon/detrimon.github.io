function burgerOnClickHandler(e) {
  const burgerContainer = document.querySelector(".menu__btn");
  const lineMenuContainer = document.querySelector(".menu__body");

  if (burgerContainer.classList.contains("_active")) {
    burgerContainer.classList.remove("_active");
    lineMenuContainer.classList.remove("_active");
  } else {
    burgerContainer.classList.add("_active");
    lineMenuContainer.classList.add("_active");
  }
}
