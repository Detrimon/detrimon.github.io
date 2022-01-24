function burgerOnClickHandler(e) {
  const burgerContainer = document.querySelector(".menu__btn");
  const lineMenuContainer = document.querySelector("#idNavMenu");
  const body = document.body;

  if (burgerContainer.classList.contains("menu-active")) {
    burgerContainer.classList.remove("menu-active");
    lineMenuContainer.classList.remove("menu-active");
    body.classList.remove("menu-active");
  } else {
    burgerContainer.classList.add("menu-active");
    lineMenuContainer.classList.add("menu-active");
    body.classList.add("menu-active");
  }
}
