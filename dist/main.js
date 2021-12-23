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
___CSS_LOADER_EXPORT___.push([module.id, "/* universal-style */\r\n\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  background-color: #a8dadc;\r\n}\r\n\r\n/* header-section-style */\r\n\r\nheader {\r\n  margin-top: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.logo-top {\r\n  height: 90px;\r\n}\r\n\r\n.top-qoute-container {\r\n  background-color: #fcd5ce;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  border: 2px solid #023e8a;\r\n}\r\n\r\n.top-qoute {\r\n  font-weight: bold;\r\n  color: #023e8a;\r\n}\r\n\r\n/* main-section-section */\r\n\r\n.c-counter-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 20px 0;\r\n}\r\n\r\n.c-counter {\r\n  color: #e45c3a;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  gap: 80px;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  background-color: #fcd5ce;\r\n  padding: 15px 30px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  border: 2px solid #023e8a;\r\n}\r\n\r\n.c-img {\r\n  height: 270px;\r\n  width: 260px;\r\n}\r\n\r\n.title-like {\r\n  display: flex;\r\n}\r\n\r\n.char-title {\r\n  color: #023e8a;\r\n  margin: 0;\r\n  width: 90%;\r\n}\r\n\r\n.fa-heart {\r\n  cursor: pointer;\r\n  margin-top: 5px;\r\n  font-size: 25px;\r\n  color: #023e8a;\r\n}\r\n\r\n.fa-heart:hover {\r\n  color: #f72585;\r\n}\r\n\r\n.likes {\r\n  color: #023e8a;\r\n  font-weight: bold;\r\n  margin: 10px;\r\n  margin-left: 190px;\r\n}\r\n\r\n.comment-btn {\r\n  font-size: 14px;\r\n  background-color: #0096c7;\r\n  color: #edf6f9;\r\n  margin-left: 80px;\r\n  border: 2px solid #457b9d;\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  border-radius: 8px;\r\n  font-weight: bold;\r\n}\r\n\r\n/* footer-section-style */\r\n\r\n.fotter {\r\n  margin-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.footer-link {\r\n  color: #e45c3a;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n/* comment-popup-style */\r\n\r\n.comment-popup {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  overflow: auto;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #a8dadcc7;\r\n  backdrop-filter: blur(2px);\r\n}\r\n\r\n.main-popup-container {\r\n  margin: 30px 20px;\r\n  background-color: #ffe8d6;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 2px solid #023e8a;\r\n}\r\n\r\n.fa-times {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: 50px;\r\n  font-size: 30px;\r\n}\r\n\r\n.popup-image {\r\n  height: 250px;\r\n  width: 300px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.popup-title {\r\n  font-size: 30px;\r\n  margin: 0;\r\n  color: #023e8a;\r\n}\r\n\r\n.popup-details {\r\n  display: flex;\r\n  gap: 200px;\r\n  color: #023e8a;\r\n  font-weight: bold;\r\n}\r\n\r\n.popup-info {\r\n  margin: 8px 0;\r\n}\r\n\r\n.comment-heading {\r\n  font-weight: bold;\r\n  color: #27a599;\r\n  margin: 10px 0;\r\n}\r\n\r\n.comments-container {\r\n  color: #27a599;\r\n  font-size: 16px;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.comment-user-name,\r\n.comment-date,\r\n.comment-value {\r\n  margin: 5px 0;\r\n}\r\n\r\n.add-comment {\r\n  margin: 15px;\r\n  font-weight: bold;\r\n  color: #0096c7;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.user-comment,\r\n.user-name {\r\n  resize: none;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  border: 2px solid #0096c7;\r\n  outline: none;\r\n}\r\n\r\n.submit-comment {\r\n  align-self: flex-start;\r\n  font-size: 14px;\r\n  background-color: #0096c7;\r\n  color: #edf6f9;\r\n  border: 2px solid #457b9d;\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  border-radius: 8px;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* desktop-styles */\r\n\r\n@media screen and (min-width: 1080px) {\r\n  .main-popup-container {\r\n    margin: 50px 250px;\r\n  }\r\n\r\n  .fa-times {\r\n    top: 65px;\r\n    right: 275px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA,oBAAoB;;AAEpB;EACE,kCAAkC;EAClC,yBAAyB;AAC3B;;AAEA,yBAAyB;;AAEzB;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,0CAA0C;EAC1C,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA,yBAAyB;;AAEzB;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,qBAAqB;EACrB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,0CAA0C;EAC1C,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,eAAe;EACf,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,cAAc;EACd,iBAAiB;EACjB,yBAAyB;EACzB,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA,yBAAyB;;AAEzB;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,qBAAqB;AACvB;;AAEA,wBAAwB;;AAExB;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,cAAc;EACd,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;;EAEE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,yBAAyB;EACzB,cAAc;EACd,yBAAyB;EACzB,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA,mBAAmB;;AAEnB;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,SAAS;IACT,YAAY;EACd;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins&display=swap\");\r\n\r\n/* universal-style */\r\n\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  background-color: #a8dadc;\r\n}\r\n\r\n/* header-section-style */\r\n\r\nheader {\r\n  margin-top: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.logo-top {\r\n  height: 90px;\r\n}\r\n\r\n.top-qoute-container {\r\n  background-color: #fcd5ce;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  border: 2px solid #023e8a;\r\n}\r\n\r\n.top-qoute {\r\n  font-weight: bold;\r\n  color: #023e8a;\r\n}\r\n\r\n/* main-section-section */\r\n\r\n.c-counter-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 20px 0;\r\n}\r\n\r\n.c-counter {\r\n  color: #e45c3a;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n}\r\n\r\n.cards {\r\n  display: flex;\r\n  gap: 80px;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  background-color: #fcd5ce;\r\n  padding: 15px 30px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  transition: 0.3s;\r\n  border: 2px solid #023e8a;\r\n}\r\n\r\n.c-img {\r\n  height: 270px;\r\n  width: 260px;\r\n}\r\n\r\n.title-like {\r\n  display: flex;\r\n}\r\n\r\n.char-title {\r\n  color: #023e8a;\r\n  margin: 0;\r\n  width: 90%;\r\n}\r\n\r\n.fa-heart {\r\n  cursor: pointer;\r\n  margin-top: 5px;\r\n  font-size: 25px;\r\n  color: #023e8a;\r\n}\r\n\r\n.fa-heart:hover {\r\n  color: #f72585;\r\n}\r\n\r\n.likes {\r\n  color: #023e8a;\r\n  font-weight: bold;\r\n  margin: 10px;\r\n  margin-left: 190px;\r\n}\r\n\r\n.comment-btn {\r\n  font-size: 14px;\r\n  background-color: #0096c7;\r\n  color: #edf6f9;\r\n  margin-left: 80px;\r\n  border: 2px solid #457b9d;\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  border-radius: 8px;\r\n  font-weight: bold;\r\n}\r\n\r\n/* footer-section-style */\r\n\r\n.fotter {\r\n  margin-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.footer-link {\r\n  color: #e45c3a;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n/* comment-popup-style */\r\n\r\n.comment-popup {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  overflow: auto;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #a8dadcc7;\r\n  backdrop-filter: blur(2px);\r\n}\r\n\r\n.main-popup-container {\r\n  margin: 30px 20px;\r\n  background-color: #ffe8d6;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 2px solid #023e8a;\r\n}\r\n\r\n.fa-times {\r\n  position: absolute;\r\n  top: 40px;\r\n  right: 50px;\r\n  font-size: 30px;\r\n}\r\n\r\n.popup-image {\r\n  height: 250px;\r\n  width: 300px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.popup-title {\r\n  font-size: 30px;\r\n  margin: 0;\r\n  color: #023e8a;\r\n}\r\n\r\n.popup-details {\r\n  display: flex;\r\n  gap: 200px;\r\n  color: #023e8a;\r\n  font-weight: bold;\r\n}\r\n\r\n.popup-info {\r\n  margin: 8px 0;\r\n}\r\n\r\n.comment-heading {\r\n  font-weight: bold;\r\n  color: #27a599;\r\n  margin: 10px 0;\r\n}\r\n\r\n.comments-container {\r\n  color: #27a599;\r\n  font-size: 16px;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.comment-user-name,\r\n.comment-date,\r\n.comment-value {\r\n  margin: 5px 0;\r\n}\r\n\r\n.add-comment {\r\n  margin: 15px;\r\n  font-weight: bold;\r\n  color: #0096c7;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.user-comment,\r\n.user-name {\r\n  resize: none;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  border: 2px solid #0096c7;\r\n  outline: none;\r\n}\r\n\r\n.submit-comment {\r\n  align-self: flex-start;\r\n  font-size: 14px;\r\n  background-color: #0096c7;\r\n  color: #edf6f9;\r\n  border: 2px solid #457b9d;\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  border-radius: 8px;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* desktop-styles */\r\n\r\n@media screen and (min-width: 1080px) {\r\n  .main-popup-container {\r\n    margin: 50px 250px;\r\n  }\r\n\r\n  .fa-times {\r\n    top: 65px;\r\n    right: 275px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDbEUsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QzhDOztBQUVoRCxpRUFBZTtBQUNmLDZCQUE2Qiw2REFBVztBQUN4QztBQUNBLCtDQUErQyxvQkFBb0I7QUFDbkUsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQzs7Ozs7OztVQ1pyQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDK0I7QUFDRDs7QUFFbkQsa0VBQWE7QUFDYixrRUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdXRpbHMvY29tbWVudFBvcFVwLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy91dGlscy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdXRpbHMvaXRlbXNDb3VudGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy91dGlscy9yZXRyaWV2ZUFwaXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdW5pdmVyc2FsLXN0eWxlICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4ZGFkYztcXHJcXG59XFxyXFxuXFxyXFxuLyogaGVhZGVyLXNlY3Rpb24tc3R5bGUgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tdG9wIHtcXHJcXG4gIGhlaWdodDogOTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1xb3V0ZS1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZDVjZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMjNlOGE7XFxyXFxufVxcclxcblxcclxcbi50b3AtcW91dGUge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWFpbi1zZWN0aW9uLXNlY3Rpb24gKi9cXHJcXG5cXHJcXG4uYy1jb3VudGVyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmMtY291bnRlciB7XFxyXFxuICBjb2xvcjogI2U0NWMzYTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogODBweDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNkNWNlO1xcclxcbiAgcGFkZGluZzogMTVweCAzMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMjNlOGE7XFxyXFxufVxcclxcblxcclxcbi5jLWltZyB7XFxyXFxuICBoZWlnaHQ6IDI3MHB4O1xcclxcbiAgd2lkdGg6IDI2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtbGlrZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhci10aXRsZSB7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZjcyNTg1O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxOTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2Yzc7XFxyXFxuICBjb2xvcjogI2VkZjZmOTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzQ1N2I5ZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb290ZXItc2VjdGlvbi1zdHlsZSAqL1xcclxcblxcclxcbi5mb3R0ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1saW5rIHtcXHJcXG4gIGNvbG9yOiAjZTQ1YzNhO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb21tZW50LXBvcHVwLXN0eWxlICovXFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wdXAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGRhZGNjNztcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1wb3B1cC1jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAzMHB4IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlOGQ2O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAyM2U4YTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRpbWVzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNDBweDtcXHJcXG4gIHJpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1hZ2Uge1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjAwcHg7XFxyXFxuICBjb2xvcjogIzAyM2U4YTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW5mbyB7XFxyXFxuICBtYXJnaW46IDhweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1oZWFkaW5nIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICMyN2E1OTk7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBjb2xvcjogIzI3YTU5OTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtdXNlci1uYW1lLFxcclxcbi5jb21tZW50LWRhdGUsXFxyXFxuLmNvbW1lbnQtdmFsdWUge1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50IHtcXHJcXG4gIG1hcmdpbjogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICMwMDk2Yzc7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnQsXFxyXFxuLnVzZXItbmFtZSB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA5NmM3O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1jb21tZW50IHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NmM3O1xcclxcbiAgY29sb3I6ICNlZGY2Zjk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjNDU3YjlkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkZXNrdG9wLXN0eWxlcyAqL1xcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwODBweCkge1xcclxcbiAgLm1haW4tcG9wdXAtY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IDI1MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhLXRpbWVzIHtcXHJcXG4gICAgdG9wOiA2NXB4O1xcclxcbiAgICByaWdodDogMjc1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsb0JBQW9COztBQUVwQjtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7QUFDM0I7O0FBRUEseUJBQXlC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VCxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbi8qIHVuaXZlcnNhbC1zdHlsZSAqL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGRhZGM7XFxyXFxufVxcclxcblxcclxcbi8qIGhlYWRlci1zZWN0aW9uLXN0eWxlICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvLXRvcCB7XFxyXFxuICBoZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcblxcclxcbi50b3AtcW91dGUtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Q1Y2U7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDIzZThhO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLXFvdXRlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4tc2VjdGlvbi1zZWN0aW9uICovXFxyXFxuXFxyXFxuLmMtY291bnRlci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5jLWNvdW50ZXIge1xcclxcbiAgY29sb3I6ICNlNDVjM2E7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDgwcHg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZDVjZTtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDIzZThhO1xcclxcbn1cXHJcXG5cXHJcXG4uYy1pbWcge1xcclxcbiAgaGVpZ2h0OiAyNzBweDtcXHJcXG4gIHdpZHRoOiAyNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWxpa2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXItdGl0bGUge1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydDpob3ZlciB7XFxyXFxuICBjb2xvcjogI2Y3MjU4NTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGNvbG9yOiAjMDIzZThhO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMTkwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0biB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NmM3O1xcclxcbiAgY29sb3I6ICNlZGY2Zjk7XFxyXFxuICBtYXJnaW4tbGVmdDogODBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0NTdiOWQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9vdGVyLXNlY3Rpb24tc3R5bGUgKi9cXHJcXG5cXHJcXG4uZm90dGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbGluayB7XFxyXFxuICBjb2xvcjogI2U0NWMzYTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogY29tbWVudC1wb3B1cC1zdHlsZSAqL1xcclxcblxcclxcbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThkYWRjYzc7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tcG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogMzBweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZThkNjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMjNlOGE7XFxyXFxufVxcclxcblxcclxcbi5mYS10aW1lcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDQwcHg7XFxyXFxuICByaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltYWdlIHtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDIwMHB4O1xcclxcbiAgY29sb3I6ICMwMjNlOGE7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWluZm8ge1xcclxcbiAgbWFyZ2luOiA4cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaGVhZGluZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjMjdhNTk5O1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1jb250YWluZXIge1xcclxcbiAgY29sb3I6ICMyN2E1OTk7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXVzZXItbmFtZSxcXHJcXG4uY29tbWVudC1kYXRlLFxcclxcbi5jb21tZW50LXZhbHVlIHtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudCB7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjMDA5NmM3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1jb21tZW50LFxcclxcbi51c2VyLW5hbWUge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwOTZjNztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtY29tbWVudCB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTZjNztcXHJcXG4gIGNvbG9yOiAjZWRmNmY5O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzQ1N2I5ZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGVza3RvcC1zdHlsZXMgKi9cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDgwcHgpIHtcXHJcXG4gIC5tYWluLXBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogNTBweCAyNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS10aW1lcyB7XFxyXFxuICAgIHRvcDogNjVweDtcXHJcXG4gICAgcmlnaHQ6IDI3NXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCByZW5kZXIgZnJvbSAnLi9ob21lUGFnZS5qcyc7XG5pbXBvcnQgeyBnZXRDaGFyRGF0YSB9IGZyb20gJy4vcmV0cmlldmVBcGlzLmpzJztcblxuY29uc3QgY2xvc2VQb3B1cCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtcG9wdXAnKTtcbiAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBhd2FpdCByZW5kZXIoKTtcbiAgY29uc3QgY2hhQXJyYXkgPSBhd2FpdCBnZXRDaGFyRGF0YSgpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1wb3B1cCcpO1xuICBjb21tZW50QnV0dG9uLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkYXRhSUQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvYnlnM0t0dnFPaG1kM1h0OUF4dTUvY29tbWVudHM/aXRlbV9pZD1pdGVtJHtkYXRhSUR9YCk7XG4gICAgICBsZXQgY29tbWVudHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zdCB0aXRsZSA9IGNoYUFycmF5W2RhdGFJRF0ubmFtZS5zdWJzdHJpbmcoMCwgMTUpO1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXBvcHVwLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInBvcHVwLWltYWdlXCIgc3JjPVwiJHtjaGFBcnJheVtkYXRhSURdLmltYWdlVXJsfVwiIGFsdD1cImNoYXJhY3Rlci1pbWFnZVwiLz5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicG9wdXAtdGl0bGVcIj4ke3RpdGxlfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtZGV0YWlsc1wiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1pbmZvXCI+RmlsbXM6ICR7Y2hhQXJyYXlbZGF0YUlEXS5maWxtcy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1pbmZvXCI+VFYgU2hvd3M6ICR7Y2hhQXJyYXlbZGF0YUlEXS50dlNob3dzLmxlbmd0aH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1kZXRhaWxzXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInBvcHVwLWluZm9cIj5WaWRlbyBHYW1lczogJHtjaGFBcnJheVtkYXRhSURdLnZpZGVvR2FtZXMubGVuZ3RofTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXAtaW5mb1wiPkVuZW1pZXM6ICR7Y2hhQXJyYXlbZGF0YUlEXS5lbmVtaWVzLmxlbmd0aH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvbW1lbnQtaGVhZGluZ1wiPkNvbW1lbnRzKCR7Y29tbWVudHMubGVuZ3RofSk8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJhZGQtY29tbWVudFwiPkFkZCBhIGNvbW1lbnQ8L2gzPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJjb21tZW50LWZvcm1cIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInVzZXItbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgbmFtZVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgbWF4bGVuZ3RoPVwiMjBcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiByb3dzPVwiNVwiIGNsYXNzPVwidXNlci1jb21tZW50XCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCBuYW1lPVwiY29tbWVudFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiIG1heGxlbmd0aD1cIjQwXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0LWNvbW1lbnRcIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG5cbiAgICAgIGNvbnN0IGNvbW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWNvbnRhaW5lcicpO1xuICAgICAgY29tbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb21tZW50c0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPjxwIGNsYXNzPVwiY29tbWVudC1kYXRlXCI+JHtlbGVtZW50LmNyZWF0aW9uX2RhdGV9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbW1lbnQtdXNlci1uYW1lXCI+JHtlbGVtZW50LnVzZXJuYW1lfTo8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29tbWVudC12YWx1ZVwiPiR7ZWxlbWVudC5jb21tZW50fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtZm9ybScpO1xuICAgICAgY29uc3QgY29tbWVudHNDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtaGVhZGluZycpO1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgVXNlck5hbWUgPSBmb3JtLmVsZW1lbnRzWzBdLnZhbHVlO1xuICAgICAgICBjb25zdCBVc2VyQ29tbWVudCA9IGZvcm0uZWxlbWVudHNbMV0udmFsdWU7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ieWczS3R2cU9obWQzWHQ5QXh1NS9jb21tZW50cycsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpdGVtX2lkOiBgaXRlbSR7ZGF0YUlEfWAsXG4gICAgICAgICAgICB1c2VybmFtZTogVXNlck5hbWUsXG4gICAgICAgICAgICBjb21tZW50OiBVc2VyQ29tbWVudCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ieWczS3R2cU9obWQzWHQ5QXh1NS9jb21tZW50cz9pdGVtX2lkPWl0ZW0ke2RhdGFJRH1gKTtcbiAgICAgICAgY29tbWVudHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb21tZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29tbWVudHNDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRcIj48cCBjbGFzcz1cImNvbW1lbnQtZGF0ZVwiPiR7ZWxlbWVudC5jcmVhdGlvbl9kYXRlfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb21tZW50LXVzZXItbmFtZVwiPiR7ZWxlbWVudC51c2VybmFtZX06PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbW1lbnQtdmFsdWVcIj4ke2VsZW1lbnQuY29tbWVudH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIH0pO1xuICAgICAgICBjb21tZW50c0NvdW50ZXIuaW5uZXJIVE1MID0gYENvbW1lbnRzKCR7Y29tbWVudHMubGVuZ3RofSlgO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICB9KTtcblxuICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS10aW1lcycpO1xuICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcHVwKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgZ2V0Q2hhckRhdGEsIGdldENoYXJMaWtlcyB9IGZyb20gJy4vcmV0cmlldmVBcGlzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjaGFyQXJyYXkgPSBhd2FpdCBnZXRDaGFyRGF0YSgpO1xuICBsZXQgbGlrZUFycmF5ID0gYXdhaXQgZ2V0Q2hhckxpa2VzKCk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpO1xuICBjaGFyQXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGVsZW1lbnQubmFtZS5zdWJzdHJpbmcoMCwgMTUpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgPGltZyBjbGFzcz1cImMtaW1nXCIgc3JjPVwiJHtlbGVtZW50LmltYWdlVXJsfVwiIGFsdD1cImNoYXJhY3RlciBpbWFnZVwiLz5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGUtbGlrZVwiPlxuICAgICAgPGgzIGNsYXNzPVwiY2hhci10aXRsZVwiPiR7dGl0bGV9PC9oMz5cbiAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWhlYXJ0XCI+PC9pPlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzPVwibGlrZXNcIj4ke2xpa2VBcnJheVtpbmRleF0ubGlrZXN9IExpa2VzXG4gICAgPC9wPlxuICAgIDxidXR0b24gY2xhc3M9XCJjb21tZW50LWJ0blwiIGRhdGEtaWQ9XCIke2luZGV4fVwiIHR5cGU9XCJidXR0b25cIj5Db21tZW50PC9idXR0b24+XG4gICA8L2Rpdj5cbiAgICBgO1xuICB9KTtcbiAgY29uc3QgbGlrZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS1oZWFydCcpO1xuICBjb25zdCBsaWtlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VzJyk7XG4gIGxpa2VCdXR0b24uZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2J5ZzNLdHZxT2htZDNYdDlBeHU1L2xpa2VzJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGl0ZW1faWQ6IGBpdGVtJHtpbmRleH1gLFxuICAgICAgICB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGxpa2VBcnJheSA9IGF3YWl0IGdldENoYXJMaWtlcygpO1xuICAgICAgbGlrZUNvbnRhaW5lcltpbmRleF0uaW5uZXJIVE1MID0gYCR7bGlrZUFycmF5W2luZGV4XS5saWtlc30gTGlrZXNgO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtYnRuJyk7XG59O1xuIiwiaW1wb3J0IHsgZ2V0Q2hhckRhdGEgfSBmcm9tICcuL3JldHJpZXZlQXBpcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICgpID0+IHtcbiAgY29uc3QgaXRlbXNDb3VudGVyID0gYXdhaXQgZ2V0Q2hhckRhdGEoKTtcbiAgY29uc3QgY2hhcmFjdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jLWNvdW50ZXInKTtcbiAgY2hhcmFjdGVycy5pbm5lckhUTUwgPSBgRGlzbmV5OiBDaGFyYWN0ZXJzKCR7aXRlbXNDb3VudGVyLmxlbmd0aH0pYDtcbn07XG4iLCJjb25zdCBnZXRDaGFyRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZGlzbmV5YXBpLmRldi9jaGFyYWN0ZXJzJyk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBqc29uLmRhdGE7XG59O1xuXG5jb25zdCBnZXRDaGFyTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2J5ZzNLdHZxT2htZDNYdDlBeHU1L2xpa2VzJyk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBqc29uO1xufTtcblxuZXhwb3J0IHsgZ2V0Q2hhckRhdGEsIGdldENoYXJMaWtlcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGV2ZW50TGlzdG5lcnMgZnJvbSAnLi91dGlscy9jb21tZW50UG9wVXAuanMnO1xuaW1wb3J0IGl0ZW1zQ291bnRlciBmcm9tICcuL3V0aWxzL2l0ZW1zQ291bnRlci5qcyc7XG5cbmV2ZW50TGlzdG5lcnMoKTtcbml0ZW1zQ291bnRlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9