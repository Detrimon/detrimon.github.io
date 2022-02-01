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

var _slider = __webpack_require__(2);

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_slider2.default.initialization();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elThemeSwitcher = document.querySelector("#idThemeSwitcher");
elThemeSwitcher.addEventListener("click", switchTheme);

var elCloseMenu = document.querySelector("#idCloseMenu");
elCloseMenu.addEventListener("click", closeMenuHandler);

var elBurger = document.querySelector("#idBurger");
elBurger.addEventListener("click", burgerOnClickHandler);

var elBottomMenuOpener = document.querySelector("#idBottomMenuOpener");
elBottomMenuOpener.addEventListener("click", openBottomMenu);

// Event Handlers ::

function burgerOnClickHandler(e) {
  var burgerContainer = document.querySelector(".menu__btn");
  var headerElement = document.querySelector("#idHeader");
  var body = document.body;

  burgerContainer.classList.toggle("active");
  headerElement.classList.toggle("active");

  body.style.overflowY = "hidden";
}

function closeMenuHandler(e) {
  var burgerContainer = document.querySelector(".menu__btn");
  var headerElement = document.querySelector("#idHeader");
  var body = document.body;

  burgerContainer.classList.toggle("active");
  headerElement.classList.toggle("active");

  body.style.overflowY = "auto";
}

function switchTheme(e) {
  var switcher = document.querySelector("#idThemeSwitcher");
  var primaryColor = getComputedStyle(document.body).getPropertyValue("--color-primary");
  var secondaryColor = getComputedStyle(document.body).getPropertyValue("--color-secondary");
  var primaryDelimiterColor = getComputedStyle(document.body).getPropertyValue("--color-delimiter-primary");
  var secondaryDelimiterColor = getComputedStyle(document.body).getPropertyValue("--color-delimiter-secondary");

  var primaryBgColor = getComputedStyle(document.body).getPropertyValue("--color-bg-primary");
  var secondaryBgColor = getComputedStyle(document.body).getPropertyValue("--color-bg-secondary");

  document.body.style.setProperty("--color-primary", secondaryColor);
  document.body.style.setProperty("--color-secondary", primaryColor);
  document.body.style.setProperty("--color-delimiter-primary", secondaryDelimiterColor);
  document.body.style.setProperty("--color-delimiter-secondary", primaryDelimiterColor);
  document.body.style.setProperty("--color-bg-primary", secondaryBgColor);
  document.body.style.setProperty("--color-bg-secondary", primaryBgColor);

  if (switcher.classList.contains("active")) {
    switcher.classList.remove("active");
  } else {
    switcher.classList.add("active");
  }
}

function openBottomMenu(event) {
  event.preventDefault();

  var showMore = document.querySelector("#idShowMore");
  var bottomMenu = document.querySelector("#idBottomMenu");

  showMore.classList.toggle("active");
  bottomMenu.classList.toggle("active");
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
  function Slider() {
    _classCallCheck(this, Slider);

    this.imageContainer = null;
    this.listContainer = null;
  }

  _createClass(Slider, [{
    key: "initialization",
    value: function initialization() {
      // Прочесываем контент и ищем элементы с
      // data-slider = "content"
      // data-slider = "list"

      var imageContainer = document.querySelector("[data-slider='content']");
      var listContainer = document.querySelector("[data-slider='list']");

      Object.keys(listContainer.children).forEach(function (key, index) {
        listContainer.children[key].dataset.index = index;
        imageContainer.children[key].dataset.index = index;
      });

      listContainer.addEventListener("click", function (e) {
        e.preventDefault();
        var listItem = e.target.closest("li");

        var activeItem = listContainer.querySelector("[data-centered='true']");

        var activeIndex = parseInt(activeItem.dataset.index);
        var clickedIndex = parseInt(listItem.dataset.index);

        var imageLeftMargin = getComputedStyle(listItem).getPropertyValue("margin-left");
        imageLeftMargin = parseInt(imageLeftMargin.slice(0, imageLeftMargin.indexOf("px")));
        var imageRightMargin = getComputedStyle(listItem).getPropertyValue("margin-right");
        imageRightMargin = parseInt(imageRightMargin.slice(0, imageRightMargin.indexOf("px")));

        var imageMargin = imageLeftMargin || imageRightMargin;

        var listLeftMargin = getComputedStyle(listItem).getPropertyValue("margin-left");
        listLeftMargin = parseInt(listLeftMargin.slice(0, listLeftMargin.indexOf("px")));
        var listRightMargin = getComputedStyle(listItem).getPropertyValue("margin-right");
        listRightMargin = parseInt(listRightMargin.slice(0, listRightMargin.indexOf("px")));

        var listMargin = listLeftMargin || listRightMargin;

        var currentImageLeftMargin = getComputedStyle(imageContainer).getPropertyValue("margin-left");
        currentImageLeftMargin = parseInt(currentImageLeftMargin.slice(0, currentImageLeftMargin.indexOf("px")));

        var currentLeftMargin = getComputedStyle(listContainer).getPropertyValue("margin-left");
        currentLeftMargin = parseInt(currentLeftMargin.slice(0, currentLeftMargin.indexOf("px")));

        if (listItem.dataset.index === activeItem.dataset.index) {
          return;
        }

        if (listItem.dataset.index > activeItem.dataset.index) {
          var multiplier = clickedIndex - activeIndex;
          console.log(activeIndex, clickedIndex);

          var extraDelta = Math.floor((listContainer.children[clickedIndex].offsetWidth - listContainer.children[activeIndex].offsetWidth) / 2);

          var deltaImageMargin = 0;
          for (var i = activeIndex; i < clickedIndex; i++) {
            var curImageElWidth = imageContainer.children[i].offsetWidth;
            deltaImageMargin += curImageElWidth;
          }

          deltaImageMargin += multiplier * imageMargin;

          console.log("-----------");
          console.log("deltaImageMargin: ", deltaImageMargin);
          console.log("currentImageLeftMargin: ", currentImageLeftMargin);
          console.log("-----------");
          imageContainer.style.marginLeft = -deltaImageMargin + currentImageLeftMargin + "px";

          var deltaMargin = 0;
          for (var _i = activeIndex; _i < clickedIndex; _i++) {
            var curElWidth = listContainer.children[_i].offsetWidth;
            deltaMargin += curElWidth;
          }

          deltaMargin += multiplier * listMargin;

          listContainer.style.marginLeft = -deltaMargin + currentLeftMargin - extraDelta + "px";
        }

        if (listItem.dataset.index < activeItem.dataset.index) {
          var _multiplier = activeIndex - clickedIndex;

          var _extraDelta = (listContainer.children[clickedIndex].offsetWidth - listContainer.children[activeIndex].offsetWidth) / 2;

          var _deltaImageMargin = 0;
          for (var _i2 = clickedIndex + 1; _i2 <= activeIndex; _i2++) {
            var _curImageElWidth = imageContainer.children[_i2].offsetWidth;
            _deltaImageMargin += _curImageElWidth;
          }

          _deltaImageMargin += _multiplier * imageMargin;

          imageContainer.style.marginLeft = _deltaImageMargin + currentImageLeftMargin + "px";

          var _deltaMargin = 0;
          for (var _i3 = clickedIndex + 1; _i3 <= activeIndex; _i3++) {
            var _curElWidth = listContainer.children[_i3].offsetWidth;
            _deltaMargin += _curElWidth;
          }

          _deltaMargin += _multiplier * listMargin;

          listContainer.style.marginLeft = _deltaMargin + currentLeftMargin + _extraDelta + "px";
        }

        delete activeItem.dataset.centered;
        listItem.dataset.centered = "true";
        activeItem.classList.remove("active");
        listItem.classList.add("active");
      });

      var aImages = Object.keys(imageContainer.children).map(function (key, index) {
        return {
          width: imageContainer.children[key].offsetWidth
        };
      });

      var aListItems = Object.keys(listContainer.children).map(function (key, index) {
        return {
          width: listContainer.children[key].offsetWidth
        };
      });
      // imageContainer.children.

      this.aImages = aImages;
      this.aListItems = aListItems;

      console.log(this);

      console.dir(this.imageContainer);
    }
  }]);

  return Slider;
}();

exports.default = new Slider();

/***/ })
/******/ ]);