/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* universal-style */\r\n\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  background-color: #a8dadc;\r\n}\r\n\r\n/* header-section-style */\r\n\r\nheader {\r\n  margin-top: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.logo-top {\r\n  height: 90px;\r\n}\r\n\r\n.top-qoute-container {\r\n  background-color: #fcd5ce;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  border: 2px solid #023e8a;\r\n}\r\n\r\n.top-qoute {\r\n  font-weight: bold;\r\n  color: #023e8a;\r\n}\r\n\r\n/* main-section-section */\r\n\r\n.c-counter-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 20px 0;\r\n}\r\n\r\n.c-counter {\r\n  color: #e45c3a;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  gap: 80px;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  background-color: #fcd5ce;\r\n  padding: 15px 30px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  border: 2px solid #023e8a;\r\n}\r\n\r\n.card:hover {\r\n  transition: 1s ease-in-out;\r\n  transform: scale(1.05);\r\n  cursor: pointer;\r\n}\r\n\r\n.c-img {\r\n  height: 270px;\r\n  width: 260px;\r\n}\r\n\r\n.title-like {\r\n  display: flex;\r\n}\r\n\r\n.char-title {\r\n  color: #023e8a;\r\n  margin: 0;\r\n  width: 90%;\r\n}\r\n\r\n.fa-heart {\r\n  cursor: pointer;\r\n  margin-top: 5px;\r\n  font-size: 25px;\r\n  color: #023e8a;\r\n}\r\n\r\n.fa-heart:hover {\r\n  color: #f72585;\r\n}\r\n\r\n.likes {\r\n  color: #023e8a;\r\n  font-weight: bold;\r\n  margin: 10px;\r\n  margin-left: 190px;\r\n}\r\n\r\n.comment-btn {\r\n  font-size: 14px;\r\n  background-color: #0096c7;\r\n  color: #edf6f9;\r\n  margin-left: 80px;\r\n  border: 2px solid #457b9d;\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  border-radius: 8px;\r\n  font-weight: bold;\r\n}\r\n\r\n/* footer-section-style */\r\n\r\n.fotter {\r\n  margin-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.footer-link {\r\n  color: #e45c3a;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n/* comment-popup-style */\r\n\r\n.comment-popup {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  overflow: auto;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #a8dadcc7;\r\n  backdrop-filter: blur(2px);\r\n}\r\n\r\n.main-popup-container {\r\n  margin: 30px 20px;\r\n  background-color: #ffe8d6;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 2px solid #023e8a;\r\n}\r\n\r\n.fa-times {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: 50px;\r\n  font-size: 30px;\r\n  color: #023e8a;\r\n}\r\n\r\n.popup-pc1,\r\n.popup-pc2 {\r\n  width: 350px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.popup-image {\r\n  height: 250px;\r\n  width: 300px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.popup-title {\r\n  font-size: 30px;\r\n  margin: 0;\r\n  color: #023e8a;\r\n  text-align: center;\r\n}\r\n\r\n.popup-details {\r\n  display: flex;\r\n  gap: 100px;\r\n  color: #023e8a;\r\n  font-weight: bold;\r\n}\r\n\r\n.popup-info {\r\n  margin: 8px 0;\r\n}\r\n\r\n.comment-heading {\r\n  font-weight: bold;\r\n  color: #27a599;\r\n  margin: 10px 0;\r\n  text-align: center;\r\n}\r\n\r\n.comments-container {\r\n  color: #27a599;\r\n  font-size: 16px;\r\n  overflow-y: scroll;\r\n  max-height: 150px;\r\n  border: 2px solid #27a599;\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.comment-user-name,\r\n.comment-date,\r\n.comment-value {\r\n  margin: 5px 0;\r\n}\r\n\r\n.add-comment {\r\n  margin: 15px;\r\n  font-weight: bold;\r\n  color: #0096c7;\r\n  text-align: center;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.user-comment,\r\n.user-name {\r\n  resize: none;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  border: 2px solid #0096c7;\r\n  outline: none;\r\n}\r\n\r\n.submit-comment {\r\n  align-self: flex-start;\r\n  font-size: 14px;\r\n  background-color: #0096c7;\r\n  color: #edf6f9;\r\n  border: 2px solid #457b9d;\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  border-radius: 8px;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* desktop-styles */\r\n\r\n@media screen and (min-width: 1080px) {\r\n  .main-popup-container {\r\n    margin: 50px 250px;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    gap: 100px;\r\n    padding: 50px 0;\r\n  }\r\n\r\n  .fa-times {\r\n    top: 65px;\r\n    right: 275px;\r\n  }\r\n\r\n  .popup-details {\r\n    gap: 80px;\r\n  }\r\n\r\n  .popup-pc1,\r\n  .popup-pc2 {\r\n    width: 350px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins&display=swap\");\r\n\r\n/* universal-style */\r\n\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  background-color: #a8dadc;\r\n}\r\n\r\n/* header-section-style */\r\n\r\nheader {\r\n  margin-top: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.logo-top {\r\n  height: 90px;\r\n}\r\n\r\n.top-qoute-container {\r\n  background-color: #fcd5ce;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  border: 2px solid #023e8a;\r\n}\r\n\r\n.top-qoute {\r\n  font-weight: bold;\r\n  color: #023e8a;\r\n}\r\n\r\n/* main-section-section */\r\n\r\n.c-counter-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 20px 0;\r\n}\r\n\r\n.c-counter {\r\n  color: #e45c3a;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  gap: 80px;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  background-color: #fcd5ce;\r\n  padding: 15px 30px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  border: 2px solid #023e8a;\r\n}\r\n\r\n.card:hover {\r\n  transition: 1s ease-in-out;\r\n  transform: scale(1.05);\r\n  cursor: pointer;\r\n}\r\n\r\n.c-img {\r\n  height: 270px;\r\n  width: 260px;\r\n}\r\n\r\n.title-like {\r\n  display: flex;\r\n}\r\n\r\n.char-title {\r\n  color: #023e8a;\r\n  margin: 0;\r\n  width: 90%;\r\n}\r\n\r\n.fa-heart {\r\n  cursor: pointer;\r\n  margin-top: 5px;\r\n  font-size: 25px;\r\n  color: #023e8a;\r\n}\r\n\r\n.fa-heart:hover {\r\n  color: #f72585;\r\n}\r\n\r\n.likes {\r\n  color: #023e8a;\r\n  font-weight: bold;\r\n  margin: 10px;\r\n  margin-left: 190px;\r\n}\r\n\r\n.comment-btn {\r\n  font-size: 14px;\r\n  background-color: #0096c7;\r\n  color: #edf6f9;\r\n  margin-left: 80px;\r\n  border: 2px solid #457b9d;\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  border-radius: 8px;\r\n  font-weight: bold;\r\n}\r\n\r\n/* footer-section-style */\r\n\r\n.fotter {\r\n  margin-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.footer-link {\r\n  color: #e45c3a;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n/* comment-popup-style */\r\n\r\n.comment-popup {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  overflow: auto;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #a8dadcc7;\r\n  backdrop-filter: blur(2px);\r\n}\r\n\r\n.main-popup-container {\r\n  margin: 30px 20px;\r\n  background-color: #ffe8d6;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 2px solid #023e8a;\r\n}\r\n\r\n.fa-times {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: 50px;\r\n  font-size: 30px;\r\n  color: #023e8a;\r\n}\r\n\r\n.popup-pc1,\r\n.popup-pc2 {\r\n  width: 350px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.popup-image {\r\n  height: 250px;\r\n  width: 300px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.popup-title {\r\n  font-size: 30px;\r\n  margin: 0;\r\n  color: #023e8a;\r\n  text-align: center;\r\n}\r\n\r\n.popup-details {\r\n  display: flex;\r\n  gap: 100px;\r\n  color: #023e8a;\r\n  font-weight: bold;\r\n}\r\n\r\n.popup-info {\r\n  margin: 8px 0;\r\n}\r\n\r\n.comment-heading {\r\n  font-weight: bold;\r\n  color: #27a599;\r\n  margin: 10px 0;\r\n  text-align: center;\r\n}\r\n\r\n.comments-container {\r\n  color: #27a599;\r\n  font-size: 16px;\r\n  overflow-y: scroll;\r\n  max-height: 150px;\r\n  border: 2px solid #27a599;\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.comment-user-name,\r\n.comment-date,\r\n.comment-value {\r\n  margin: 5px 0;\r\n}\r\n\r\n.add-comment {\r\n  margin: 15px;\r\n  font-weight: bold;\r\n  color: #0096c7;\r\n  text-align: center;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.user-comment,\r\n.user-name {\r\n  resize: none;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  border: 2px solid #0096c7;\r\n  outline: none;\r\n}\r\n\r\n.submit-comment {\r\n  align-self: flex-start;\r\n  font-size: 14px;\r\n  background-color: #0096c7;\r\n  color: #edf6f9;\r\n  border: 2px solid #457b9d;\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  border-radius: 8px;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* desktop-styles */\r\n\r\n@media screen and (min-width: 1080px) {\r\n  .main-popup-container {\r\n    margin: 50px 250px;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    gap: 100px;\r\n    padding: 50px 0;\r\n  }\r\n\r\n  .fa-times {\r\n    top: 65px;\r\n    right: 275px;\r\n  }\r\n\r\n  .popup-details {\r\n    gap: 80px;\r\n  }\r\n\r\n  .popup-pc1,\r\n  .popup-pc2 {\r\n    width: 350px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/utils/commentPopUp.js":
/*!***********************************!*\
  !*** ./src/utils/commentPopUp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.js */ "./src/utils/homePage.js");
/* harmony import */ var _retrieveApis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retrieveApis.js */ "./src/utils/retrieveApis.js");



const closePopup = () => {
  const container = document.querySelector('.comment-popup');
  container.style.display = 'none';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {
  const commentButton = await (0,_homePage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const chaArray = await (0,_retrieveApis_js__WEBPACK_IMPORTED_MODULE_1__.getCharData)();
  const container = document.querySelector('.comment-popup');
  commentButton.forEach((element) => {
    const dataID = element.getAttribute('data-id');
    element.addEventListener('click', async () => {
      let response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/comments?item_id=item${dataID}`);
      let comments = await response.json();
      const title = chaArray[dataID].name.substring(0, 15);
      container.innerHTML = `
            <div class="main-popup-container">
            <div class="popup-pc1">
            <img class="popup-image" src="${chaArray[dataID].imageUrl}" alt="character-image"/>
            <i class="fas fa-times"></i>
            <h3 class="popup-title">${title}</h3>
            <div class="popup-details">
            <p class="popup-info">Films: ${chaArray[dataID].films.length}</p>
            <p class="popup-info">TV Shows: ${chaArray[dataID].tvShows.length}</p>
            </div>
            <div class="popup-details">
            <p class="popup-info">Video Games: ${chaArray[dataID].videoGames.length}</p>
            <p class="popup-info">Enemies: ${chaArray[dataID].enemies.length}</p>
            </div>
            </div>
            <div class="popup-pc2">
            <h3 class="comment-heading">Comments(${comments.length})</h3>
            <div class="comments-container">
            </div>
            <h3 class="add-comment">Add a comment</h3>
            <form class="comment-form">
            <input class="user-name" type="text" required name"name" placeholder="Your name" maxlength="20">
            <textarea cols="30" rows="5" class="user-comment" type="text" required name="comment" placeholder="Your insights" maxlength="40"></textarea>
            <button type="submit" class="submit-comment">Comment</button>
            </form>
            </div>
            </div>
            `;

      const commentsContainer = document.querySelector('.comments-container');
      comments.forEach((element) => {
        commentsContainer.innerHTML += `
              <div class="comment"><p class="comment-date">${element.creation_date}</p>
              <p class="comment-user-name">${element.username}:</p>
              <p class="comment-value">${element.comment}</p>
              </div>`;
      });

      const form = document.querySelector('.comment-form');
      const commentsCounter = document.querySelector('.comment-heading');
      form.addEventListener('submit', async (event) => {
        const UserName = form.elements[0].value;
        const UserComment = form.elements[1].value;
        event.preventDefault();
        await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/comments', {
          method: 'POST',
          body: JSON.stringify({
            item_id: `item${dataID}`,
            username: UserName,
            comment: UserComment,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/comments?item_id=item${dataID}`);
        comments = await response.json();
        commentsContainer.innerHTML = '';
        comments.forEach((element) => {
          commentsContainer.innerHTML += `
              <div class="comment"><p class="comment-date">${element.creation_date}</p>
              <p class="comment-user-name">${element.username}:</p>
              <p class="comment-value">${element.comment}</p>
              </div>`;
        });
        commentsCounter.innerHTML = `Comments(${comments.length})`;
        form.reset();
      });

      container.style.display = 'block';

      const closeButton = document.querySelector('.fa-times');
      closeButton.addEventListener('click', closePopup);
    });
  });
});


/***/ }),

/***/ "./src/utils/homePage.js":
/*!*******************************!*\
  !*** ./src/utils/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _retrieveApis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieveApis.js */ "./src/utils/retrieveApis.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {
  const charArray = await (0,_retrieveApis_js__WEBPACK_IMPORTED_MODULE_0__.getCharData)();
  let likeArray = await (0,_retrieveApis_js__WEBPACK_IMPORTED_MODULE_0__.getCharLikes)();
  const container = document.querySelector('.cards');
  charArray.forEach((element, index) => {
    const title = element.name.substring(0, 15);
    container.innerHTML += `
    <div class="card">
    <img class="c-img" src="${element.imageUrl}" alt="character image"/>
    <div class="title-like">
      <h3 class="char-title">${title}</h3>
      <i class="far fa-heart"></i>
    </div>
    <p class="likes">${likeArray[index].likes} Likes
    </p>                                    
    <button class="comment-btn" data-id="${index}" type="button">Comment</button>
   </div>
    `;
  });
  const likeButton = document.querySelectorAll('.fa-heart');
  const likeContainer = document.querySelectorAll('.likes');
  likeButton.forEach((element, index) => {
    element.addEventListener('click', async () => {
      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/likes', {
        method: 'POST',
        body: JSON.stringify({
          item_id: `item${index}`,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      likeArray = await (0,_retrieveApis_js__WEBPACK_IMPORTED_MODULE_0__.getCharLikes)();
      likeContainer[index].innerHTML = `${likeArray[index].likes} Likes`;
    });
  });

  return document.querySelectorAll('.comment-btn');
});


/***/ }),

/***/ "./src/utils/itemsCounter.js":
/*!***********************************!*\
  !*** ./src/utils/itemsCounter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _retrieveApis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieveApis.js */ "./src/utils/retrieveApis.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {
  const itemsCounter = await (0,_retrieveApis_js__WEBPACK_IMPORTED_MODULE_0__.getCharData)();
  const characters = document.querySelector('.c-counter');
  characters.innerHTML = `Disney: Characters(${itemsCounter.length})`;
});


/***/ }),

/***/ "./src/utils/retrieveApis.js":
/*!***********************************!*\
  !*** ./src/utils/retrieveApis.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCharData": () => (/* binding */ getCharData),
/* harmony export */   "getCharLikes": () => (/* binding */ getCharLikes)
/* harmony export */ });
const getCharData = async () => {
  const response = await fetch('https://api.disneyapi.dev/characters');
  const json = await response.json();
  return json.data;
};

const getCharLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/likes');
  const json = await response.json();
  return json;
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _utils_commentPopUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/commentPopUp.js */ "./src/utils/commentPopUp.js");
/* harmony import */ var _utils_itemsCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/itemsCounter.js */ "./src/utils/itemsCounter.js");




(0,_utils_commentPopUp_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_utils_itemsCounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1B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QUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDK0I7QUFDRDs7QUFFbkQsa0VBQWE7QUFDYixrRUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdXRpbHMvY29tbWVudFBvcFVwLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy91dGlscy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdXRpbHMvaXRlbXNDb3VudGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy91dGlscy9yZXRyaWV2ZUFwaXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdW5pdmVyc2FsLXN0eWxlICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4ZGFkYztcXHJcXG59XFxyXFxuXFxyXFxuLyogaGVhZGVyLXNlY3Rpb24tc3R5bGUgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tdG9wIHtcXHJcXG4gIGhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1xb3V0ZS1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZDVjZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMjNlOGE7XFxyXFxufVxcclxcblxcclxcbi50b3AtcW91dGUge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWFpbi1zZWN0aW9uLXNlY3Rpb24gKi9cXHJcXG5cXHJcXG4uYy1jb3VudGVyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmMtY291bnRlciB7XFxyXFxuICBjb2xvcjogI2U0NWMzYTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogODBweDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNkNWNlO1xcclxcbiAgcGFkZGluZzogMTVweCAzMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMjNlOGE7XFxyXFxufVxcclxcblxcclxcbi5jYXJkOmhvdmVyIHtcXHJcXG4gIHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmMtaW1nIHtcXHJcXG4gIGhlaWdodDogMjcwcHg7XFxyXFxuICB3aWR0aDogMjYwcHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1saWtlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5jaGFyLXRpdGxlIHtcXHJcXG4gIGNvbG9yOiAjMDIzZThhO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGNvbG9yOiAjMDIzZThhO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmNzI1ODU7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE5MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4ge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZjNztcXHJcXG4gIGNvbG9yOiAjZWRmNmY5O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjNDU3YjlkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi8qIGZvb3Rlci1zZWN0aW9uLXN0eWxlICovXFxyXFxuXFxyXFxuLmZvdHRlciB7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxpbmsge1xcclxcbiAgY29sb3I6ICNlNDVjM2E7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbW1lbnQtcG9wdXAtc3R5bGUgKi9cXHJcXG5cXHJcXG4uY29tbWVudC1wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4ZGFkY2M3O1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDMwcHggMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU4ZDY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDIzZThhO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtdGltZXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA0MHB4O1xcclxcbiAgcmlnaHQ6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLXBjMSxcXHJcXG4ucG9wdXAtcGMyIHtcXHJcXG4gIHdpZHRoOiAzNTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1hZ2Uge1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTAwcHg7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW5mbyB7XFxyXFxuICBtYXJnaW46IDhweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1oZWFkaW5nIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICMyN2E1OTk7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBjb2xvcjogIzI3YTU5OTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzI3YTU5OTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXVzZXItbmFtZSxcXHJcXG4uY29tbWVudC1kYXRlLFxcclxcbi5jb21tZW50LXZhbHVlIHtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudCB7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjMDA5NmM3O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1jb21tZW50LFxcclxcbi51c2VyLW5hbWUge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwOTZjNztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtY29tbWVudCB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZjNztcXHJcXG4gIGNvbG9yOiAjZWRmNmY5O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzQ1N2I5ZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGVza3RvcC1zdHlsZXMgKi9cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDgwcHgpIHtcXHJcXG4gIC5tYWluLXBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogNTBweCAyNTBweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDUwcHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS10aW1lcyB7XFxyXFxuICAgIHRvcDogNjVweDtcXHJcXG4gICAgcmlnaHQ6IDI3NXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWRldGFpbHMge1xcclxcbiAgICBnYXA6IDgwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtcGMxLFxcclxcbiAgLnBvcHVwLXBjMiB7XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxrQ0FBa0M7RUFDbEMseUJBQXlCO0FBQzNCOztBQUVBLHlCQUF5Qjs7QUFFekI7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUEseUJBQXlCOztBQUV6QjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFD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aHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbi8qIHVuaXZlcnNhbC1zdHlsZSAqL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGRhZGM7XFxyXFxufVxcclxcblxcclxcbi8qIGhlYWRlci1zZWN0aW9uLXN0eWxlICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvLXRvcCB7XFxyXFxuICBoZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcblxcclxcbi50b3AtcW91dGUtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Q1Y2U7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDIzZThhO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLXFvdXRlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4tc2VjdGlvbi1zZWN0aW9uICovXFxyXFxuXFxyXFxuLmMtY291bnRlci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5jLWNvdW50ZXIge1xcclxcbiAgY29sb3I6ICNlNDVjM2E7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDgwcHg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZDVjZTtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDIzZThhO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZDpob3ZlciB7XFxyXFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jLWltZyB7XFxyXFxuICBoZWlnaHQ6IDI3MHB4O1xcclxcbiAgd2lkdGg6IDI2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtbGlrZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhci10aXRsZSB7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZjcyNTg1O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxOTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2Yzc7XFxyXFxuICBjb2xvcjogI2VkZjZmOTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzQ1N2I5ZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb290ZXItc2VjdGlvbi1zdHlsZSAqL1xcclxcblxcclxcbi5mb3R0ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1saW5rIHtcXHJcXG4gIGNvbG9yOiAjZTQ1YzNhO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb21tZW50LXBvcHVwLXN0eWxlICovXFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wdXAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGRhZGNjNztcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1wb3B1cC1jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAzMHB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlOGQ2O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAyM2U4YTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRpbWVzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNDBweDtcXHJcXG4gIHJpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1wYzEsXFxyXFxuLnBvcHVwLXBjMiB7XFxyXFxuICB3aWR0aDogMzUwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltYWdlIHtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwMHB4O1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWluZm8ge1xcclxcbiAgbWFyZ2luOiA4cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaGVhZGluZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjMjdhNTk5O1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1jb250YWluZXIge1xcclxcbiAgY29sb3I6ICMyN2E1OTk7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBtYXgtaGVpZ2h0OiAxNTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyN2E1OTk7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC11c2VyLW5hbWUsXFxyXFxuLmNvbW1lbnQtZGF0ZSxcXHJcXG4uY29tbWVudC12YWx1ZSB7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQge1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzAwOTZjNztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29tbWVudCxcXHJcXG4udXNlci1uYW1lIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDk2Yzc7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWNvbW1lbnQge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2Yzc7XFxyXFxuICBjb2xvcjogI2VkZjZmOTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0NTdiOWQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGRlc2t0b3Atc3R5bGVzICovXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA4MHB4KSB7XFxyXFxuICAubWFpbi1wb3B1cC1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDUwcHggMjUwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1MHB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtdGltZXMge1xcclxcbiAgICB0b3A6IDY1cHg7XFxyXFxuICAgIHJpZ2h0OiAyNzVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1kZXRhaWxzIHtcXHJcXG4gICAgZ2FwOiA4MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLXBjMSxcXHJcXG4gIC5wb3B1cC1wYzIge1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcmVuZGVyIGZyb20gJy4vaG9tZVBhZ2UuanMnO1xuaW1wb3J0IHsgZ2V0Q2hhckRhdGEgfSBmcm9tICcuL3JldHJpZXZlQXBpcy5qcyc7XG5cbmNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXBvcHVwJyk7XG4gIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb21tZW50QnV0dG9uID0gYXdhaXQgcmVuZGVyKCk7XG4gIGNvbnN0IGNoYUFycmF5ID0gYXdhaXQgZ2V0Q2hhckRhdGEoKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtcG9wdXAnKTtcbiAgY29tbWVudEJ1dHRvbi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZGF0YUlEID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2J5ZzNLdHZxT2htZDNYdDlBeHU1L2NvbW1lbnRzP2l0ZW1faWQ9aXRlbSR7ZGF0YUlEfWApO1xuICAgICAgbGV0IGNvbW1lbnRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc3QgdGl0bGUgPSBjaGFBcnJheVtkYXRhSURdLm5hbWUuc3Vic3RyaW5nKDAsIDE1KTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1wb3B1cC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1wYzFcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwb3B1cC1pbWFnZVwiIHNyYz1cIiR7Y2hhQXJyYXlbZGF0YUlEXS5pbWFnZVVybH1cIiBhbHQ9XCJjaGFyYWN0ZXItaW1hZ2VcIi8+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInBvcHVwLXRpdGxlXCI+JHt0aXRsZX08L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWRldGFpbHNcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXAtaW5mb1wiPkZpbG1zOiAke2NoYUFycmF5W2RhdGFJRF0uZmlsbXMubGVuZ3RofTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXAtaW5mb1wiPlRWIFNob3dzOiAke2NoYUFycmF5W2RhdGFJRF0udHZTaG93cy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtZGV0YWlsc1wiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1pbmZvXCI+VmlkZW8gR2FtZXM6ICR7Y2hhQXJyYXlbZGF0YUlEXS52aWRlb0dhbWVzLmxlbmd0aH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInBvcHVwLWluZm9cIj5FbmVtaWVzOiAke2NoYUFycmF5W2RhdGFJRF0uZW5lbWllcy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1wYzJcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvbW1lbnQtaGVhZGluZ1wiPkNvbW1lbnRzKCR7Y29tbWVudHMubGVuZ3RofSk8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJhZGQtY29tbWVudFwiPkFkZCBhIGNvbW1lbnQ8L2gzPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJjb21tZW50LWZvcm1cIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInVzZXItbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgbmFtZVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgbWF4bGVuZ3RoPVwiMjBcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiByb3dzPVwiNVwiIGNsYXNzPVwidXNlci1jb21tZW50XCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCBuYW1lPVwiY29tbWVudFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiIG1heGxlbmd0aD1cIjQwXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0LWNvbW1lbnRcIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcblxuICAgICAgY29uc3QgY29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtY29udGFpbmVyJyk7XG4gICAgICBjb21tZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50XCI+PHAgY2xhc3M9XCJjb21tZW50LWRhdGVcIj4ke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29tbWVudC11c2VyLW5hbWVcIj4ke2VsZW1lbnQudXNlcm5hbWV9OjwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb21tZW50LXZhbHVlXCI+JHtlbGVtZW50LmNvbW1lbnR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1mb3JtJyk7XG4gICAgICBjb25zdCBjb21tZW50c0NvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1oZWFkaW5nJyk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBVc2VyTmFtZSA9IGZvcm0uZWxlbWVudHNbMF0udmFsdWU7XG4gICAgICAgIGNvbnN0IFVzZXJDb21tZW50ID0gZm9ybS5lbGVtZW50c1sxXS52YWx1ZTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2J5ZzNLdHZxT2htZDNYdDlBeHU1L2NvbW1lbnRzJywge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGl0ZW1faWQ6IGBpdGVtJHtkYXRhSUR9YCxcbiAgICAgICAgICAgIHVzZXJuYW1lOiBVc2VyTmFtZSxcbiAgICAgICAgICAgIGNvbW1lbnQ6IFVzZXJDb21tZW50LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2J5ZzNLdHZxT2htZDNYdDlBeHU1L2NvbW1lbnRzP2l0ZW1faWQ9aXRlbSR7ZGF0YUlEfWApO1xuICAgICAgICBjb21tZW50cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29tbWVudHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBjb21tZW50c0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPjxwIGNsYXNzPVwiY29tbWVudC1kYXRlXCI+JHtlbGVtZW50LmNyZWF0aW9uX2RhdGV9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbW1lbnQtdXNlci1uYW1lXCI+JHtlbGVtZW50LnVzZXJuYW1lfTo8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29tbWVudC12YWx1ZVwiPiR7ZWxlbWVudC5jb21tZW50fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbW1lbnRzQ291bnRlci5pbm5lckhUTUwgPSBgQ29tbWVudHMoJHtjb21tZW50cy5sZW5ndGh9KWA7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXRpbWVzJyk7XG4gICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUG9wdXApO1xuICAgIH0pO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBnZXRDaGFyRGF0YSwgZ2V0Q2hhckxpa2VzIH0gZnJvbSAnLi9yZXRyaWV2ZUFwaXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNoYXJBcnJheSA9IGF3YWl0IGdldENoYXJEYXRhKCk7XG4gIGxldCBsaWtlQXJyYXkgPSBhd2FpdCBnZXRDaGFyTGlrZXMoKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XG4gIGNoYXJBcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudC5uYW1lLnN1YnN0cmluZygwLCAxNSk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICA8aW1nIGNsYXNzPVwiYy1pbWdcIiBzcmM9XCIke2VsZW1lbnQuaW1hZ2VVcmx9XCIgYWx0PVwiY2hhcmFjdGVyIGltYWdlXCIvPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1saWtlXCI+XG4gICAgICA8aDMgY2xhc3M9XCJjaGFyLXRpdGxlXCI+JHt0aXRsZX08L2gzPlxuICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtaGVhcnRcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPHAgY2xhc3M9XCJsaWtlc1wiPiR7bGlrZUFycmF5W2luZGV4XS5saWtlc30gTGlrZXNcbiAgICA8L3A+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgPGJ1dHRvbiBjbGFzcz1cImNvbW1lbnQtYnRuXCIgZGF0YS1pZD1cIiR7aW5kZXh9XCIgdHlwZT1cImJ1dHRvblwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgIDwvZGl2PlxuICAgIGA7XG4gIH0pO1xuICBjb25zdCBsaWtlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWhlYXJ0Jyk7XG4gIGNvbnN0IGxpa2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMnKTtcbiAgbGlrZUJ1dHRvbi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvYnlnM0t0dnFPaG1kM1h0OUF4dTUvbGlrZXMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgaXRlbV9pZDogYGl0ZW0ke2luZGV4fWAsXG4gICAgICAgIH0pLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgbGlrZUFycmF5ID0gYXdhaXQgZ2V0Q2hhckxpa2VzKCk7XG4gICAgICBsaWtlQ29udGFpbmVyW2luZGV4XS5pbm5lckhUTUwgPSBgJHtsaWtlQXJyYXlbaW5kZXhdLmxpa2VzfSBMaWtlc2A7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idG4nKTtcbn07XG4iLCJpbXBvcnQgeyBnZXRDaGFyRGF0YSB9IGZyb20gJy4vcmV0cmlldmVBcGlzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBpdGVtc0NvdW50ZXIgPSBhd2FpdCBnZXRDaGFyRGF0YSgpO1xuICBjb25zdCBjaGFyYWN0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmMtY291bnRlcicpO1xuICBjaGFyYWN0ZXJzLmlubmVySFRNTCA9IGBEaXNuZXk6IENoYXJhY3RlcnMoJHtpdGVtc0NvdW50ZXIubGVuZ3RofSlgO1xufTtcbiIsImNvbnN0IGdldENoYXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5kaXNuZXlhcGkuZGV2L2NoYXJhY3RlcnMnKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGpzb24uZGF0YTtcbn07XG5cbmNvbnN0IGdldENoYXJMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvYnlnM0t0dnFPaG1kM1h0OUF4dTUvbGlrZXMnKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGpzb247XG59O1xuXG5leHBvcnQgeyBnZXRDaGFyRGF0YSwgZ2V0Q2hhckxpa2VzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZXZlbnRMaXN0bmVycyBmcm9tICcuL3V0aWxzL2NvbW1lbnRQb3BVcC5qcyc7XG5pbXBvcnQgaXRlbXNDb3VudGVyIGZyb20gJy4vdXRpbHMvaXRlbXNDb3VudGVyLmpzJztcblxuZXZlbnRMaXN0bmVycygpO1xuaXRlbXNDb3VudGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=