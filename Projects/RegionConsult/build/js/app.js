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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var vacancyPath = exports.vacancyPath = "public/data/vacancy.json";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var popupMenuElement = document.querySelector(".menu-substrate");
var bodyElement = document.body;

var burgerContainerElement = document.querySelector(".menu__btn");
burgerContainerElement.addEventListener("click", burgerOnClickHandler);

var closeIconElement = document.querySelector(".menu-substrate__icon-close");
closeIconElement.addEventListener("click", closeMenuHandler);

var menuItemsElement = document.querySelector("#idPopupMenu");
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

  bodyElement.style.overflowY = "auto";
  popupMenuElement.classList.toggle("open");
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var foldElement = document.getElementById("idFold");

foldElement.addEventListener("click", function (e) {
  e.preventDefault();
  var toClickBlock = e.target.closest("[data-toClick]");

  if (toClickBlock) {
    var arrowElement = toClickBlock.querySelector(".competence__fold_title-arrow");
    var textBlockElement = toClickBlock.parentNode.querySelector("ul");

    arrowElement.classList.toggle("open");
    textBlockElement.classList.toggle("open");
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aMenuAnchors = document.querySelectorAll("[data-menu_anchor]");
var nMenuAnchorsLength = aMenuAnchors.length;
var menuElement = document.getElementById("idMainMenu");

var nOffset = 220; // сдвиг вниз от начала секции, когда считать, что мы попали на новый раздел;
var scrollTimer = void 0;
var resizeTimer = void 0;

var aMenuItemsToAnchors = [];
makeAnchorsArray();

window.addEventListener("resize", makeAnchorsArray);

window.addEventListener("scroll", function (e) {
  if (scrollTimer) return;

  setTimeout(changeMenuState, 500);

  scrollTimer = setTimeout(function () {
    scrollTimer = undefined;
  }, 100);
});

function makeAnchorsArray() {
  if (resizeTimer) return;

  aMenuAnchors.forEach(function (item) {
    var itemId = item.id;
    for (var i = 0, ln = menuElement.children.length; i < ln; i++) {
      if (menuElement.children[i].firstElementChild.href.split("#")[1] === itemId) {
        aMenuItemsToAnchors.push(menuElement.children[i].firstElementChild);
        break;
      }
    }
  });

  resizeTimer = setTimeout(function () {
    resizeTimer = undefined;
  }, 100);
}

function changeMenuState() {
  var currentScrollBottomPosition = document.documentElement.clientHeight + document.documentElement.scrollTop;

  aMenuAnchors.forEach(function (item, index) {
    var menuItemYPosition = item.offsetTop + nOffset;
    var menuNextItemYPosition = aMenuAnchors[index + 1] && aMenuAnchors[index + 1].offsetTop + nOffset;

    if (currentScrollBottomPosition > menuItemYPosition && (currentScrollBottomPosition <= menuNextItemYPosition || index === nMenuAnchorsLength - 1)) {
      aMenuItemsToAnchors[index].classList.add("active");
    } else {
      aMenuItemsToAnchors[index].classList.remove("active");
    }
  });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(0);

var careerItemsElement = document.getElementById("idCareerItems");

var req = new XMLHttpRequest();
req.responseType = "json";
req.open("GET", _config.vacancyPath, true);
req.onload = function () {
  var jsonResponse = req.response;

  if (jsonResponse.length < 0) return;

  var vacancySpecialTextElement = document.querySelector("[data-isVacancy]");
  vacancySpecialTextElement.classList.remove("ws-not-display");

  jsonResponse.forEach(function (item) {
    var li_el = document.createElement("li");
    var a_el = document.createElement("a");
    a_el.setAttribute("target", "__blank");
    a_el.setAttribute("href", item.link);
    a_el.textContent = item.title;

    li_el.append(a_el);
    careerItemsElement.append(li_el);
  });
};
req.send(null);

/***/ })
/******/ ]);