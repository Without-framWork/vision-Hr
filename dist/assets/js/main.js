var mainModule =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: testme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testme", function() { return testme; });
/* global alert */
function testme() {
  alert("hi!");
}
$(document).ready(function () {
  "use strict"; //charts

  $(".main-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 40,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $(".chart-1").easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 30,
    lineCap: "butt",
    barColor: "#072D4D",
    trackColor: "#D7D7D7",
    size: 300,
    animate: 500
  });
  $(".chart-2").easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 30,
    lineCap: "butt",
    barColor: "#7F5539",
    trackColor: "#D7D7D7",
    size: 300,
    animate: 500
  });
  $(".chart-3").easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 30,
    lineCap: "butt",
    barColor: "#DDA15E",
    trackColor: "#D7D7D7",
    size: 300,
    animate: 500
  });
  $(".chart-4").easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 30,
    lineCap: "butt",
    barColor: "#034A90",
    trackColor: "#D7D7D7",
    size: 500,
    animate: 500
  }); //repeater

  $(".repeater").repeater({
    show: function show() {
      $(this).slideDown();
    },
    hide: function hide(deleteElement) {
      $(this).slideUp(deleteElement);
    } // ready: function (setIndexes) {},

  }); //mobile-sliedbar

  $(".menu-mobile,.overlay-slide-mobile").on("click touchstart", function (e) {
    $(".slidebar-mobile,.overlay-slide-mobile").toggleClass("is-visible");
    $("#wrapper-mobile").toggleClass("is-obscured");
    e.preventDefault();
  }); //ntf-sliedbar

  $(".menu,.overlay-slide").on("click touchstart", function (e) {
    $(".ntf-menu,.overlay-slide").toggleClass("is-visible");
    e.preventDefault();
  });
  $(".close-icon").click(function () {
    $(".ntf-menu,.overlay-slide").removeClass("is-visible");
  }); //password

  $(document).on("mousedown", ".show-password", function () {
    $(".password-group input").attr("type", "text");
    $(".show-password").html('<i class="fas fa-eye-slash"></i>');
  });
  $(document).on("mouseup", ".show-password", function () {
    $(".password-group input").attr("type", "password");
    $(".show-password").html('<i class="fas fa-eye"></i>');
  }); //data

  $(".calendar").datetimepicker({
    format: "L"
  });
  $("#datetimepicker3").datetimepicker({
    format: "LT"
  }); //time

  $("#datetimepicker13").datetimepicker({
    inline: true,
    format: "L"
  });
});

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: testme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/main */ "./js/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "testme", function() { return _js_main__WEBPACK_IMPORTED_MODULE_0__["testme"]; });

__webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");



/***/ })

/******/ });
//# sourceMappingURL=main.js.map