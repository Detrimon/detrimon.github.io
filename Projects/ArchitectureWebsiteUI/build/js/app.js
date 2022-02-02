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
  }

  _createClass(Slider, [{
    key: "initialization",
    value: function initialization() {
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

        var activeIndex = this.activeIndex = parseInt(activeItem.dataset.index);
        var clickedIndex = this.clickedIndex = parseInt(listItem.dataset.index);

        if (clickedIndex === activeIndex) {
          return;
        }

        var imageItem = imageContainer.children[clickedIndex];

        var imageMargin = this._getLeftMargin(imageItem);
        var listMargin = this._getLeftMargin(listItem);

        var imageContainerMarginLeft = this._getLeftMargin(imageContainer);
        var listContainerMarginLeft = this._getLeftMargin(listContainer);

        var multiplier = Math.abs(clickedIndex - activeIndex);
        var listGaps = multiplier * listMargin;
        var imageGaps = multiplier * imageMargin * 2;

        var deltaImageContainerMargin = this._getDeltaMargin(imageContainer);
        var deltaListContainerMargin = this._getDeltaMargin(listContainer);

        var listAlignmentSize = this._getAlignmentSize(listContainer);

        if (clickedIndex > activeIndex) {
          imageContainer.style.marginLeft = imageContainerMarginLeft - (deltaImageContainerMargin + imageGaps) + "px";

          listContainer.style.marginLeft = listContainerMarginLeft - (deltaListContainerMargin + listGaps + listAlignmentSize) + "px";
        }

        if (clickedIndex < activeIndex) {
          imageContainer.style.marginLeft = imageContainerMarginLeft + (deltaImageContainerMargin + imageGaps) + "px";

          listContainer.style.marginLeft = listContainerMarginLeft + (deltaListContainerMargin + listGaps - listAlignmentSize) + "px";
        }

        delete activeItem.dataset.centered;
        listItem.dataset.centered = "true";
        activeItem.classList.remove("active");
        listItem.classList.add("active");
      }.bind(this));
    }
  }, {
    key: "_getLeftMargin",
    value: function _getLeftMargin(element) {
      var leftMargin = getComputedStyle(element).getPropertyValue("margin-left");
      leftMargin = parseInt(leftMargin.slice(0, leftMargin.indexOf("px")));
      var rightMargin = getComputedStyle(element).getPropertyValue("margin-right");
      rightMargin = parseInt(rightMargin.slice(0, rightMargin.indexOf("px")));

      return leftMargin || rightMargin || 0;
    }
  }, {
    key: "_getAlignmentSize",
    value: function _getAlignmentSize(element) {
      return (element.children[this.clickedIndex].offsetWidth - element.children[this.activeIndex].offsetWidth) / 2;
    }
  }, {
    key: "_getDeltaMargin",
    value: function _getDeltaMargin(element) {
      var lowerIndex = this.clickedIndex;
      var higherIndex = this.activeIndex;
      if (this.activeIndex < this.clickedIndex) {
        lowerIndex = this.activeIndex;
        higherIndex = this.clickedIndex;
      }

      var deltaMargin = 0;

      for (var i = lowerIndex; i < higherIndex; i++) {
        var curElWidth = element.children[i].offsetWidth;
        deltaMargin += curElWidth;
      }
      return deltaMargin;
    }
  }]);

  return Slider;
}();

exports.default = new Slider();

/***/ })
/******/ ]);