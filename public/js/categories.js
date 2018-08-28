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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_selectmenu_images_arrow_down_png__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_selectmenu_images_arrow_down_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__blocks_selectmenu_images_arrow_down_png__);

__webpack_require__(3);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/arrow-down.png";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

$selectmenu = $(".js-selectmenu");
$selectmenu.selectmenu();

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_styl__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_styl__);

__webpack_require__(1);
__webpack_require__(9);
__webpack_require__(10);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var $slider1 = $('.js-slider-1');
$slider1.slider({
    min: 0,
    max: 100,
    value: 40,
    create: function (event, ui) {
        var $sliderhandle = $('.ui-slider-handle');
        $sliderhandle.append('<input class="slider-value js-slider-value" value="40"/><div class="slider-value__tail"></div>');
    },
    slide: function (event, ui) {
        var $slidervalue = $(".js-slider-value");
        $slidervalue.val(ui.value);
    }
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var $slider2 = $(".js-slider-2");
var $slider2handle = $('.js-slider-2 .ui-slider-handle, .js-slider-1 .ui-slider-handle');
var $slider2range = $('.js-slider-2 .ui-slider-range-min, .js-slider-1 .ui-slider-range-min');

$slider2.slider({
    min: 0,
    max: 100,
    value: 75,
    range: 'min'
});

$slider2handle.each(function (index, handle) {
    if (index % 2 == 0)
    $(handle).addClass('even-handle');
    else $(handle).addClass('odd-handle');
});

$slider2range.each(function (index, handle) {
    if (index % 2 == 0)
    $(handle).addClass('even-range-min');
    else $(handle).addClass('odd-range-min');
});

/***/ })
/******/ ]);