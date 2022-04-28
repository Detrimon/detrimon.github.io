/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fold = document.getElementById("idFold");

fold.addEventListener("click", function (e) {
  e.preventDefault();

  var target = e.target;
  var toClickBlock = target.closest("[data-toClick]");

  if (toClickBlock) {
    var arrow = toClickBlock.querySelector(".competence__fold_title-arrow");
    arrow.classList.toggle("open");
    var textBlock = toClickBlock.parentNode.querySelector("ul");
    console.log(textBlock);
    textBlock.classList.toggle("open");
  }
});

/***/ })
/******/ ]);