const burgerContainer = document.querySelector(".menu__btn");
burgerContainer.addEventListener("click", burgerOnClickHandler);

const closeIcon = document.querySelector(".menu-substrate__icon-close");
closeIcon.addEventListener("click", closeMenuHandler);

const menuItems = document.querySelector("#idPopupMenu");
menuItems.addEventListener("click", closeMenuHandler);

// Event Handlers ::

function burgerOnClickHandler(e) {
  e.preventDefault();
  // const topMenuElement = document.querySelector(".header-container");
  // topMenuElement.classList.toggle("open");

  const popupMenuElement = document.querySelector(".menu-substrate");
  popupMenuElement.classList.toggle("open");
  const body = document.body;
  setTimeout(function () {
    body.style.overflowY = "hidden";
  }, 230);

  // const menuItems = document.querySelector("#idPopupMenu");
  // menuItems.classList.toggle("open");
}

function closeMenuHandler(e) {
  // e.preventDefault();

  // Если ширина экрана больше 961 px, ничего не делать. Это значит, что не должно быть всплывающего меню
  if (document.documentElement.scrollWidth > 960.98) return;

  const toCloseMenu = e.target.querySelector("[data-toclosemenu]");
  if (!e.target.dataset.hasOwnProperty("toclosemenu")) return;

  const body = document.body;
  body.style.overflowY = "auto";

  // setTimeout(function () {
  //   const topMenuElement = document.querySelector(".header-container");
  //   topMenuElement.classList.toggle("open");
  // }, 250);

  const popupMenuElement = document.querySelector(".menu-substrate");
  popupMenuElement.classList.toggle("open");

  // const menuItems = document.querySelector("#idPopupMenu");
  // menuItems.classList.toggle("open");

  // const burgerContainer = document.querySelector(".menu__btn");
  // const headerElement = document.querySelector("#idHeader");

  // burgerContainer.classList.toggle("active");
  // headerElement.classList.toggle("active");
}

// jQuery(window).scroll(function () {
//   debugger;
//   var $sections = $("section");
//   $sections.each(function (i, el) {
//     var top = $(el).offset().top - 600;
//     var bottom = top + $(el).height();
//     var scroll = $(window).scrollTop();
//     var id = $(el).attr("id");
//     console.log("couter");
//     if (scroll > top && scroll < bottom) {
//       $("a.active").removeClass("active");
//       $('a[href="#' + id + '"]').addClass("active");
//     }
//   });
// });

// $("#idMainMenu").on("click", "a", function (event) {
//   // исключаем стандартную реакцию браузера
//   debugger;
//   event.preventDefault();

//   // получем идентификатор блока из атрибута href
//   var id = $(this).attr("href");
//   // находим высоту, на которой расположен блок
//   let top = $(id).offset().top;

//   // анимируем переход к блоку, время: 500 мс
//   $("body,html").animate({ scrollTop: top }, 500);
// });

// $("#idMainMenu").on("click");
