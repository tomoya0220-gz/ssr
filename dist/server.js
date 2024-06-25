/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst ErrorBoundary_1 = __importDefault(__webpack_require__(/*! ./ErrorBoundary */ \"./src/ErrorBoundary.tsx\"));\nconst App = ({ initialData }) => {\n    console.log('App component received initial data:', initialData);\n    const message = (initialData === null || initialData === void 0 ? void 0 : initialData.message) || 'No message provided';\n    return (react_1.default.createElement(ErrorBoundary_1.default, null,\n        react_1.default.createElement(\"div\", null,\n            react_1.default.createElement(\"h1\", { style: { color: 'blue' } }, message))));\n};\nexports[\"default\"] = App;\n\n\n//# sourceURL=webpack://ssr/./src/App.tsx?");

/***/ }),

/***/ "./src/ErrorBoundary.tsx":
/*!*******************************!*\
  !*** ./src/ErrorBoundary.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nclass ErrorBoundary extends react_1.Component {\n    constructor(props) {\n        super(props);\n        this.state = { hasError: false };\n    }\n    static getDerivedStateFromError(_) {\n        return { hasError: true };\n    }\n    componentDidCatch(error, errorInfo) {\n        console.error('Uncaught error:', error, errorInfo);\n    }\n    render() {\n        if (this.state.hasError) {\n            return react_1.default.createElement(\"h1\", null, \"Something went wrong\");\n        }\n        return this.props.children;\n    }\n}\nexports[\"default\"] = ErrorBoundary;\n\n\n//# sourceURL=webpack://ssr/./src/ErrorBoundary.tsx?");

/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nconst App_1 = __importDefault(__webpack_require__(/*! ./App */ \"./src/App.tsx\"));\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\n__webpack_require__(/*! ignore-styles */ \"ignore-styles\");\nconst app = (0, express_1.default)();\napp.use(express_1.default.static(path_1.default.resolve(__dirname, '../dist')));\napp.get('*', (req, res) => {\n    const initialData = { message: 'Hello from server!' };\n    console.log('Initial data on server:', initialData);\n    const appString = (0, server_1.renderToString)(react_1.default.createElement(App_1.default, { initialData: initialData }));\n    const html = `\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>React SSR with TypeScript</title>\n        <script>\n          window.__INITIAL_DATA__ = ${JSON.stringify(initialData).replace(/</g, '\\\\u003c')};\n        </script>\n      </head>\n      <body>\n        <div id=\"root\">${appString}</div>\n        <script src=\"/bundle.js\"></>\n      </body>\n    </html>\n  `;\n    console.log('HTML sent to client:\\n', html);\n    res.send(html);\n});\nconst PORT = 9000;\napp.listen(PORT, () => {\n    console.log(`Server is running on http://localhost:${PORT}`);\n});\n\n\n//# sourceURL=webpack://ssr/./src/server.tsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "ignore-styles":
/*!********************************!*\
  !*** external "ignore-styles" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("ignore-styles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.tsx");
/******/ 	
/******/ })()
;