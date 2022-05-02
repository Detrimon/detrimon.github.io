const popupMenuElement = document.querySelector(".menu-substrate");
const bodyElement = document.body;

const burgerContainerElement = document.querySelector(".menu__btn");
burgerContainerElement.addEventListener("click", burgerOnClickHandler);

const closeIconElement = document.querySelector(".menu-substrate__icon-close");
closeIconElement.addEventListener("click", closeMenuHandler);

const menuItemsElement = document.querySelector("#idPopupMenu");
menuItemsElement.addEventListener("click", closeMenuHandler);

// Event Handlers ::

function burgerOnClickHandler(e) {
  e.preventDefault();

  popupMenuElement.classList.toggle("open");
  setTimeout(function () {
    bodyElement.style.overflowY = "hidden";
  }, 230);
}

function closeMenuHandler(e) {
  if (document.documentElement.scrollWidth > 960.98) return;
  if (!e.target.dataset.hasOwnProperty("toclosemenu")) return;

  body.style.overflowY = "auto";
  popupMenuElement.classList.toggle("open");
}
