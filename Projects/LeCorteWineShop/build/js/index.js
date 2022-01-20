function burgerOnClickHandler(e) {
  const burgerContainer = document.querySelector(".menu__btn");
  const lineMenuContainer = document.querySelector("#menu-list");
  const menuBackground = document.querySelector("#menu-background");
  const body = document.body;

  if (burgerContainer.classList.contains("active")) {
    burgerContainer.classList.remove("active");
    lineMenuContainer.classList.remove("active");
    menuBackground.classList.remove("active");
    body.classList.remove("active");
  } else {
    burgerContainer.classList.add("active");
    lineMenuContainer.classList.add("active");
    menuBackground.classList.add("active");
    body.classList.add("active");
  }
}
