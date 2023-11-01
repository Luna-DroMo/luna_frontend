"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/survey",{

/***/ "./components/FormElements.js":
/*!************************************!*\
  !*** ./components/FormElements.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormInput: function() { return /* binding */ FormInput; },\n/* harmony export */   InputRow: function() { return /* binding */ InputRow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction InputRow(param) {\n    let { type = \"text\", maintext = \"Placeholder Main Text\", subtitle = \"Placeholder Subtitle Text\", options = \"\" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center w-full my-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: maintext\n                    }, void 0, false, {\n                        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                        lineNumber: 7,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"subtitle text-text-grey\",\n                        children: subtitle\n                    }, void 0, false, {\n                        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                        lineNumber: 8,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormInput, {\n                type: type,\n                options: options,\n                name: maintext\n            }, void 0, false, {\n                fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n_c = InputRow;\nfunction FormInput(param) {\n    let { type, options, name } = param;\n    /* Styled Form Inputs */ if (type === \"range\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: \"h-12\",\n            type: type,\n            name: name\n        }, void 0, false, {\n            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this);\n    } else if (type === \"radio\") {\n        //const optionslist = options.split(' ');\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"mx-5 text-text-grey\",\n                            children: [\n                                \" \",\n                                option,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: name + option,\n                            name: name,\n                            type: type\n                        }, option, false, {\n                            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                            lineNumber: 29,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true))\n        }, void 0, false);\n    } else if (type === \"date\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: \"h-12 border border-text-grey rounded-lg px-5 text-center\",\n            type: type,\n            name: name\n        }, void 0, false, {\n            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, this);\n    } else if (type === \"likert\") {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: name + option,\n                    name: name,\n                    type: \"radio\"\n                }, option, false, {\n                    fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                    lineNumber: 41,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, this);\n    } else if (type === \"number\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: \"h-12 border border-text-grey rounded-lg w-24 px-5 text-center text-lunapurple\",\n            type: type,\n            name: name\n        }, void 0, false, {\n            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: \"h-12 border border-text-grey rounded-lg w-96 text-center\",\n            type: type,\n            name: name\n        }, void 0, false, {\n            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, this);\n    }\n}\n_c1 = FormInput;\nvar _c, _c1;\n$RefreshReg$(_c, \"InputRow\");\n$RefreshReg$(_c1, \"FormInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1FbGVtZW50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFPLFNBQVNBLFNBQVMsS0FBMkc7UUFBM0csRUFBRUMsT0FBTyxNQUFNLEVBQUVDLFdBQVcsdUJBQXVCLEVBQUVDLFdBQVcsMkJBQTJCLEVBQUVDLFVBQVUsRUFBRSxFQUFFLEdBQTNHO0lBR3JCLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQztrQ0FBSUw7Ozs7OztrQ0FDTCw4REFBQ0s7d0JBQUVELFdBQVU7a0NBQTJCSDs7Ozs7Ozs7Ozs7OzBCQUU1Qyw4REFBQ0s7Z0JBQVVQLE1BQU1BO2dCQUFNRyxTQUFTQTtnQkFBU0ssTUFBTVA7Ozs7Ozs7Ozs7OztBQUkzRDtLQWJnQkY7QUFlVCxTQUFTUSxVQUFVLEtBQXVCO1FBQXZCLEVBQUVQLElBQUksRUFBRUcsT0FBTyxFQUFFSyxJQUFJLEVBQUUsR0FBdkI7SUFDdEIsc0JBQXNCLEdBQ3RCLElBQUlSLFNBQVMsU0FBUztRQUNsQixxQkFDSSw4REFBQ1M7WUFBTUosV0FBVTtZQUFPTCxNQUFNQTtZQUFNUSxNQUFNQTs7Ozs7O0lBRWxELE9BQU8sSUFBSVIsU0FBUyxTQUFTO1FBQ3pCLHlDQUF5QztRQUN6QyxxQkFDSTtzQkFDS0csUUFBUU8sR0FBRyxDQUFDLENBQUNDLHVCQUNWOztzQ0FDSSw4REFBQ0M7NEJBQU1QLFdBQVU7O2dDQUFzQjtnQ0FBRU07Z0NBQU87Ozs7Ozs7c0NBQ2hELDhEQUFDRjs0QkFBbUJJLElBQUlMLE9BQU9HOzRCQUFRSCxNQUFNQTs0QkFBTVIsTUFBTUE7MkJBQTdDVzs7Ozs7Ozs7SUFLaEMsT0FBTyxJQUFJWCxTQUFTLFFBQVE7UUFDeEIscUJBQ0ksOERBQUNTO1lBQU1KLFdBQVU7WUFBMkRMLE1BQU1BO1lBQU1RLE1BQU1BOzs7Ozs7SUFFdEcsT0FBTyxJQUFJUixTQUFTLFVBQVM7c0JBQ3pCLDhEQUFDSTtzQkFDSUQsUUFBUU8sR0FBRyxDQUFDLENBQUNDLHVCQUNOLDhEQUFDRjtvQkFBbUJJLElBQUlMLE9BQU9HO29CQUFRSCxNQUFNQTtvQkFBTVIsTUFBTTttQkFBN0NXOzs7Ozs7Ozs7O0lBSTVCLE9BQU8sSUFBSVgsU0FBUyxVQUFVO1FBQzFCLHFCQUNJLDhEQUFDUztZQUFNSixXQUFVO1lBQWdGTCxNQUFNQTtZQUFNUSxNQUFNQTs7Ozs7O0lBRTNILE9BQU87UUFDSCxxQkFDSSw4REFBQ0M7WUFBTUosV0FBVTtZQUEyREwsTUFBTUE7WUFBTVEsTUFBTUE7Ozs7OztJQUV0RztBQUNKO01BdENnQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtRWxlbWVudHMuanM/MjZiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gSW5wdXRSb3coeyB0eXBlID0gXCJ0ZXh0XCIsIG1haW50ZXh0ID0gXCJQbGFjZWhvbGRlciBNYWluIFRleHRcIiwgc3VidGl0bGUgPSBcIlBsYWNlaG9sZGVyIFN1YnRpdGxlIFRleHRcIiwgb3B0aW9ucyA9IFwiXCIgfSkge1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBteS0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1ncm93Jz5cbiAgICAgICAgICAgICAgICA8cCA+e21haW50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZSB0ZXh0LXRleHQtZ3JleVwiPntzdWJ0aXRsZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGb3JtSW5wdXQgdHlwZT17dHlwZX0gb3B0aW9ucz17b3B0aW9uc30gbmFtZT17bWFpbnRleHR9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9ybUlucHV0KHsgdHlwZSwgb3B0aW9ucywgbmFtZSB9KSB7XG4gICAgLyogU3R5bGVkIEZvcm0gSW5wdXRzICovXG4gICAgaWYgKHR5cGUgPT09IFwicmFuZ2VcIikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImgtMTJcIiB0eXBlPXt0eXBlfSBuYW1lPXtuYW1lfSAvPlxuICAgICAgICApXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInJhZGlvXCIpIHtcbiAgICAgICAgLy9jb25zdCBvcHRpb25zbGlzdCA9IG9wdGlvbnMuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J214LTUgdGV4dC10ZXh0LWdyZXknPiB7b3B0aW9ufSA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGtleT17b3B0aW9ufSBpZD17bmFtZSArIG9wdGlvbn0gbmFtZT17bmFtZX0gdHlwZT17dHlwZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJkYXRlXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJoLTEyIGJvcmRlciBib3JkZXItdGV4dC1ncmV5IHJvdW5kZWQtbGcgcHgtNSB0ZXh0LWNlbnRlclwiIHR5cGU9e3R5cGV9IG5hbWU9e25hbWV9IC8+XG4gICAgICAgIClcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwibGlrZXJ0XCIpe1xuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGtleT17b3B0aW9ufSBpZD17bmFtZSArIG9wdGlvbn0gbmFtZT17bmFtZX0gdHlwZT17XCJyYWRpb1wifSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaC0xMiBib3JkZXIgYm9yZGVyLXRleHQtZ3JleSByb3VuZGVkLWxnIHctMjQgcHgtNSB0ZXh0LWNlbnRlciB0ZXh0LWx1bmFwdXJwbGVcIiB0eXBlPXt0eXBlfSBuYW1lPXtuYW1lfSAvPlxuICAgICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJoLTEyIGJvcmRlciBib3JkZXItdGV4dC1ncmV5IHJvdW5kZWQtbGcgdy05NiB0ZXh0LWNlbnRlclwiIHR5cGU9e3R5cGV9IG5hbWU9e25hbWV9IC8+XG4gICAgICAgIClcbiAgICB9XG59Il0sIm5hbWVzIjpbIklucHV0Um93IiwidHlwZSIsIm1haW50ZXh0Iiwic3VidGl0bGUiLCJvcHRpb25zIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIkZvcm1JbnB1dCIsIm5hbWUiLCJpbnB1dCIsIm1hcCIsIm9wdGlvbiIsImxhYmVsIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FormElements.js\n"));

/***/ }),

/***/ "./pages/survey.js":
/*!*************************!*\
  !*** ./pages/survey.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_RootLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/RootLayout.js */ \"./components/RootLayout.js\");\n/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Buttons */ \"./components/Buttons.js\");\n/* harmony import */ var _components_FormElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FormElements */ \"./components/FormElements.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';\n//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';\n\n\n\nconst account_setup_progress = 0;\nfunction Main() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RootLayout_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"flex-row justify-between px-10 pt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Survey for [class]\"\n                }, void 0, false, {\n                    fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/pages/survey.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormElements__WEBPACK_IMPORTED_MODULE_4__.InputRow, {\n                    type: \"number\",\n                    maintext: \"AV\",\n                    subtitle: \"Subtitle\"\n                }, void 0, false, {\n                    fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/pages/survey.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormElements__WEBPACK_IMPORTED_MODULE_4__.InputRow, {\n                    type: \"number\",\n                    maintext: \"IV\",\n                    subtitle: \"Subtitle\"\n                }, void 0, false, {\n                    fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/pages/survey.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormElements__WEBPACK_IMPORTED_MODULE_4__.InputRow, {\n                    type: \"number\",\n                    maintext: \"SE\",\n                    subtitle: \"Subtitle\"\n                }, void 0, false, {\n                    fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/pages/survey.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormElements__WEBPACK_IMPORTED_MODULE_4__.InputRow, {\n                    type: \"number\",\n                    maintext: \"UV\",\n                    subtitle: \"Subtitle\"\n                }, void 0, false, {\n                    fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/pages/survey.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormElements__WEBPACK_IMPORTED_MODULE_4__.InputRow, {\n                    type: \"number\",\n                    maintext: \"CO\",\n                    subtitle: \"Subtitle\"\n                }, void 0, false, {\n                    fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/pages/survey.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/pages/survey.js\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/pages/survey.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdXJ2ZXkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDc0I7QUFDcEQsbUVBQW1FO0FBQ25FLG9FQUFvRTtBQUN0QjtBQUNPO0FBQzNCO0FBRTFCLE1BQU1LLHlCQUF5QjtBQUVoQixTQUFTQztJQU1wQixxQkFDSSw4REFBQ0wsaUVBQVVBO2tCQUNQLDRFQUFDTTtZQUFLQyxXQUFVOzs4QkFDWiw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ04sOERBQVFBO29CQUFDTyxNQUFLO29CQUFTQyxVQUFTO29CQUFLQyxVQUFTOzs7Ozs7OEJBQy9DLDhEQUFDVCw4REFBUUE7b0JBQUNPLE1BQUs7b0JBQVNDLFVBQVM7b0JBQUtDLFVBQVM7Ozs7Ozs4QkFDL0MsOERBQUNULDhEQUFRQTtvQkFBQ08sTUFBSztvQkFBU0MsVUFBUztvQkFBS0MsVUFBUzs7Ozs7OzhCQUMvQyw4REFBQ1QsOERBQVFBO29CQUFDTyxNQUFLO29CQUFTQyxVQUFTO29CQUFLQyxVQUFTOzs7Ozs7OEJBQy9DLDhEQUFDVCw4REFBUUE7b0JBQUNPLE1BQUs7b0JBQVNDLFVBQVM7b0JBQUtDLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9EO0tBbEJ3Qk4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VydmV5LmpzPzYzODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgUm9vdExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvUm9vdExheW91dC5qcyc7XG4vL2ltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG4vL2ltcG9ydCB7IGZhQ2hldnJvblJpZ2h0fSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0J1dHRvbnMnO1xuaW1wb3J0IHsgSW5wdXRSb3cgfSBmcm9tICdAL2NvbXBvbmVudHMvRm9ybUVsZW1lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGFjY291bnRfc2V0dXBfcHJvZ3Jlc3MgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xuXG4gICAgXG4gICAgXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSb290TGF5b3V0PlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHB4LTEwIHB0LTEwXCI+XG4gICAgICAgICAgICAgICAgPGgxPlN1cnZleSBmb3IgW2NsYXNzXTwvaDE+XG4gICAgICAgICAgICAgICAgPElucHV0Um93IHR5cGU9XCJudW1iZXJcIiBtYWludGV4dD1cIkFWXCIgc3VidGl0bGU9XCJTdWJ0aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgPElucHV0Um93IHR5cGU9XCJudW1iZXJcIiBtYWludGV4dD1cIklWXCIgc3VidGl0bGU9XCJTdWJ0aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgPElucHV0Um93IHR5cGU9XCJudW1iZXJcIiBtYWludGV4dD1cIlNFXCIgc3VidGl0bGU9XCJTdWJ0aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgPElucHV0Um93IHR5cGU9XCJudW1iZXJcIiBtYWludGV4dD1cIlVWXCIgc3VidGl0bGU9XCJTdWJ0aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgPElucHV0Um93IHR5cGU9XCJudW1iZXJcIiBtYWludGV4dD1cIkNPXCIgc3VidGl0bGU9XCJTdWJ0aXRsZVwiIC8+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvUm9vdExheW91dD5cbiAgICApXG59XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJvb3RMYXlvdXQiLCJCdXR0b24iLCJJbnB1dFJvdyIsIlJlYWN0IiwiYWNjb3VudF9zZXR1cF9wcm9ncmVzcyIsIk1haW4iLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJ0eXBlIiwibWFpbnRleHQiLCJzdWJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/survey.js\n"));

/***/ })

});