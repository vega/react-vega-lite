(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("vega-lite"), require("react-vega"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "vega-lite", "react-vega"], factory);
	else if(typeof exports === 'object')
		exports["ReactVegaLite"] = factory(require("react"), require("vega-lite"), require("react-vega"));
	else
		root["ReactVegaLite"] = factory(root["React"], root["vl"], root["ReactVega"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createClassFromLiteSpec = undefined;\n\nvar _VegaLite = __webpack_require__(1);\n\nvar _VegaLite2 = _interopRequireDefault(_VegaLite);\n\nvar _createClassFromLiteSpec2 = __webpack_require__(5);\n\nvar _createClassFromLiteSpec3 = _interopRequireDefault(_createClassFromLiteSpec2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _VegaLite2.default;\nvar createClassFromLiteSpec = exports.createClassFromLiteSpec = _createClassFromLiteSpec3.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _vegaLite = __webpack_require__(3);\n\nvar _vegaLite2 = _interopRequireDefault(_vegaLite);\n\nvar _reactVega = __webpack_require__(4);\n\nvar _reactVega2 = _interopRequireDefault(_reactVega);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar VegaLite = function (_React$Component) {\n  _inherits(VegaLite, _React$Component);\n\n  function VegaLite() {\n    _classCallCheck(this, VegaLite);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(VegaLite).apply(this, arguments));\n  }\n\n  _createClass(VegaLite, [{\n    key: 'render',\n    value: function render() {\n      var parsedProps = _extends({}, this.props);\n      var combinedSpec = _extends({}, this.props.spec);\n      if (this.props.data) {\n        combinedSpec.data = this.props.data;\n        delete parsedProps.data;\n      }\n      parsedProps.spec = _vegaLite2.default.compile(combinedSpec).spec;\n\n      return _react2.default.createElement(_reactVega2.default, parsedProps);\n    }\n  }]);\n\n  return VegaLite;\n}(_react2.default.Component);\n\nVegaLite.propTypes = _reactVega2.default.propTypes;\n\nexports.default = VegaLite;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/VegaLite.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/VegaLite.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_2__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"React\",\"commonjs2\":\"react\",\"commonjs\":\"react\",\"amd\":\"react\"}\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_3__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"vl\",\"commonjs2\":\"vega-lite\",\"commonjs\":\"vega-lite\",\"amd\":\"vega-lite\"}\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22vl%22,%22commonjs2%22:%22vega-lite%22,%22commonjs%22:%22vega-lite%22,%22amd%22:%22vega-lite%22%7D?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_4__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"ReactVega\",\"commonjs2\":\"react-vega\",\"commonjs\":\"react-vega\",\"amd\":\"react-vega\"}\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22ReactVega%22,%22commonjs2%22:%22react-vega%22,%22commonjs%22:%22react-vega%22,%22amd%22:%22react-vega%22%7D?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = createClassFromLiteSpec;\n\nvar _vegaLite = __webpack_require__(3);\n\nvar _vegaLite2 = _interopRequireDefault(_vegaLite);\n\nvar _reactVega = __webpack_require__(4);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// USAGE:\n// createClassFromSpec(name, spec);\n// createClassFromSpec(spec);\nfunction createClassFromLiteSpec() {\n  var spec = arguments.length === 1 ? arguments.length <= 0 ? undefined : arguments[0] : arguments.length <= 1 ? undefined : arguments[1];\n  var vgSpec = _vegaLite2.default.compile(spec).spec;\n  return (0, _reactVega.createClassFromSpec)(vgSpec);\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/createClassFromLiteSpec.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/createClassFromLiteSpec.js?");

/***/ }
/******/ ])
});
;