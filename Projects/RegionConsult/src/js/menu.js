// const elThemeSwitcher = document.querySelector("#idThemeSwitcher");
// elThemeSwitcher.addEventListener("click", switchTheme);

// const elCloseMenu = document.querySelector("#idCloseMenu");
// elCloseMenu.addEventListener("click", closeMenuHandler);

// const elBurger = document.querySelector("#idBurger");
// elBurger.addEventListener("click", burgerOnClickHandler);

// const elBottomMenuOpener = document.querySelector("#idBottomMenuOpener");
// elBottomMenuOpener.addEventListener("click", openBottomMenu);

// // Event Handlers ::

// function burgerOnClickHandler(e) {
//   const burgerContainer = document.querySelector(".menu__btn");
//   const headerElement = document.querySelector("#idHeader");
//   const body = document.body;

//   burgerContainer.classList.toggle("active");
//   headerElement.classList.toggle("active");

//   body.style.overflowY = "hidden";
// }

// function closeMenuHandler(e) {
//   const burgerContainer = document.querySelector(".menu__btn");
//   const headerElement = document.querySelector("#idHeader");
//   const body = document.body;

//   burgerContainer.classList.toggle("active");
//   headerElement.classList.toggle("active");

//   body.style.overflowY = "auto";
// }

// function switchTheme(e) {
//   const switcher = document.querySelector("#idThemeSwitcher");
//   const primaryColor = getComputedStyle(document.body).getPropertyValue(
//     "--color-primary"
//   );
//   const secondaryColor = getComputedStyle(document.body).getPropertyValue(
//     "--color-secondary"
//   );
//   const primaryDelimiterColor = getComputedStyle(
//     document.body
//   ).getPropertyValue("--color-delimiter-primary");
//   const secondaryDelimiterColor = getComputedStyle(
//     document.body
//   ).getPropertyValue("--color-delimiter-secondary");

//   const primaryBgColor = getComputedStyle(document.body).getPropertyValue(
//     "--color-bg-primary"
//   );
//   const secondaryBgColor = getComputedStyle(document.body).getPropertyValue(
//     "--color-bg-secondary"
//   );

//   document.body.style.setProperty("--color-primary", secondaryColor);
//   document.body.style.setProperty("--color-secondary", primaryColor);
//   document.body.style.setProperty(
//     "--color-delimiter-primary",
//     secondaryDelimiterColor
//   );
//   document.body.style.setProperty(
//     "--color-delimiter-secondary",
//     primaryDelimiterColor
//   );
//   document.body.style.setProperty("--color-bg-primary", secondaryBgColor);
//   document.body.style.setProperty("--color-bg-secondary", primaryBgColor);

//   if (switcher.classList.contains("active")) {
//     switcher.classList.remove("active");
//   } else {
//     switcher.classList.add("active");
//   }
// }

// function openBottomMenu(event) {
//   event.preventDefault();

//   const showMore = document.querySelector("#idShowMore");
//   const bottomMenu = document.querySelector("#idBottomMenu");

//   showMore.classList.toggle("active");
//   bottomMenu.classList.toggle("active");
// }

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
