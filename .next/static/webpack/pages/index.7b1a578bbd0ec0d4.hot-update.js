"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/RootLayout.js":
/*!**********************************!*\
  !*** ./components/RootLayout.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar */ \"./components/Sidebar.js\");\n\n\nfunction RootLayout(param) {\n    let { show_main_links = true, show_billboard = true, children } = param;\n    // Probs doesnt need to be here. Just for testing. Unsure how to do this properly at this point.\n    // Check if logged in\n    const auth_status = user_is_authenticated();\n    if (auth_status) {\n        console.log(\"user is logged in\", auth_status);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    show_main_links: show_main_links,\n                    show_billboard: show_billboard\n                }, void 0, false, {\n                    fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/RootLayout.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mainbody\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/RootLayout.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    } else {\n        window.location.href = \"/welcome\";\n    }\n}\n_c = RootLayout;\nconst user_is_authenticated = async (e)=>{\n    let authenticated = false;\n    try {\n        // check if token exists\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            console.log(\"Test\", token);\n            authenticated = true;\n        }\n    } finally{\n        return authenticated;\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jvb3RMYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0I7QUFFaEIsU0FBU0MsV0FBVyxLQUEyRDtRQUEzRCxFQUFFQyxrQkFBa0IsSUFBSSxFQUFFQyxpQkFBaUIsSUFBSSxFQUFFQyxRQUFRLEVBQUUsR0FBM0Q7SUFDakMsZ0dBQWdHO0lBRWhHLHFCQUFxQjtJQUVyQixNQUFNQyxjQUFjQztJQUNwQixJQUFJRCxhQUFhO1FBQ2ZFLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJIO1FBRWpDLHFCQUVFOzs4QkFDRSw4REFBQ0wsZ0RBQU9BO29CQUFDRSxpQkFBaUJBO29CQUFpQkMsZ0JBQWdCQTs7Ozs7OzhCQUUzRCw4REFBQ007b0JBQUlDLFdBQVU7OEJBQ1pOOzs7Ozs7OztJQUtULE9BQU87UUFDTE8sT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7SUFDekI7QUFDRjtLQXZCd0JaO0FBeUJ0QixNQUFNSyx3QkFBd0IsT0FBT1E7SUFFbkMsSUFBSUMsZ0JBQWdCO0lBRXBCLElBQUk7UUFFRix3QkFBd0I7UUFDeEIsTUFBTUMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBQ25DLElBQUlGLE9BQU87WUFDVFQsUUFBUUMsR0FBRyxDQUFDLFFBQU9RO1lBQ25CRCxnQkFBZ0I7UUFDbEI7SUFFRixTQUFVO1FBQ1IsT0FBUUE7SUFDVjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUm9vdExheW91dC5qcz84YWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWRlYmFyIGZyb20gXCIuL1NpZGViYXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHsgc2hvd19tYWluX2xpbmtzID0gdHJ1ZSwgc2hvd19iaWxsYm9hcmQgPSB0cnVlLCBjaGlsZHJlbiB9KSB7XG4gIC8vIFByb2JzIGRvZXNudCBuZWVkIHRvIGJlIGhlcmUuIEp1c3QgZm9yIHRlc3RpbmcuIFVuc3VyZSBob3cgdG8gZG8gdGhpcyBwcm9wZXJseSBhdCB0aGlzIHBvaW50LlxuXG4gIC8vIENoZWNrIGlmIGxvZ2dlZCBpblxuXG4gIGNvbnN0IGF1dGhfc3RhdHVzID0gdXNlcl9pc19hdXRoZW50aWNhdGVkKCk7XG4gIGlmIChhdXRoX3N0YXR1cykge1xuICAgIGNvbnNvbGUubG9nKFwidXNlciBpcyBsb2dnZWQgaW5cIiwgYXV0aF9zdGF0dXMpXG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8PlxuICAgICAgICA8U2lkZWJhciBzaG93X21haW5fbGlua3M9e3Nob3dfbWFpbl9saW5rc30gc2hvd19iaWxsYm9hcmQ9e3Nob3dfYmlsbGJvYXJkfSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbmJvZHlcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59PC9kaXY+XG5cbiAgICAgIDwvPlxuXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy93ZWxjb21lJ1xuICB9XG59XG5cbiAgY29uc3QgdXNlcl9pc19hdXRoZW50aWNhdGVkID0gYXN5bmMgKGUpID0+IHtcbiAgXG4gICAgbGV0IGF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblxuICAgIHRyeSB7XG5cbiAgICAgIC8vIGNoZWNrIGlmIHRva2VuIGV4aXN0c1xuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3RcIix0b2tlbik7XG4gICAgICAgIGF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHJldHVybiAoYXV0aGVudGljYXRlZCk7XG4gICAgfVxuICB9Il0sIm5hbWVzIjpbIlNpZGViYXIiLCJSb290TGF5b3V0Iiwic2hvd19tYWluX2xpbmtzIiwic2hvd19iaWxsYm9hcmQiLCJjaGlsZHJlbiIsImF1dGhfc3RhdHVzIiwidXNlcl9pc19hdXRoZW50aWNhdGVkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImUiLCJhdXRoZW50aWNhdGVkIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RootLayout.js\n"));

/***/ })

});