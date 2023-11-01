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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormInput: function() { return /* binding */ FormInput; },\n/* harmony export */   InputRow: function() { return /* binding */ InputRow; },\n/* harmony export */   SurveyQuestion: function() { return /* binding */ SurveyQuestion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction InputRow(param) {\n    let { type: type1 = \"text\", maintext = \"Placeholder Main Text\", subtitle = \"Placeholder Subtitle Text\", options = \"\" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center w-full my-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: maintext\n                    }, void 0, false, {\n                        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                        lineNumber: 7,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"subtitle text-text-grey\",\n                        children: subtitle\n                    }, void 0, false, {\n                        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                        lineNumber: 8,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormInput, {\n                type: type1,\n                options: options,\n                name: maintext\n            }, void 0, false, {\n                fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n_c = InputRow;\nfunction SurveyQuestion(param) {\n    let { maintext, subtitle, scale = 5 } = param;\n    let options = [\n        ...Array(scale - 1).keys()\n    ] + 1;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center w-full my-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: maintext\n                    }, void 0, false, {\n                        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"subtitle text-text-grey\",\n                        children: subtitle\n                    }, void 0, false, {\n                        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"mx-5 text-text-grey\",\n                            children: [\n                                \" \",\n                                option,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: name + option,\n                            name: name,\n                            type: type\n                        }, option, false, {\n                            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_c1 = SurveyQuestion;\nfunction FormInput(param) {\n    let { type: type1, options, name: name1 } = param;\n    /* Styled Form Inputs */ if (type1 === \"range\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: \"h-12\",\n            type: type1,\n            name: name1\n        }, void 0, false, {\n            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, this);\n    } else if (type1 === \"radio\") {\n        //const optionslist = options.split(' ');\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"mx-5 text-text-grey\",\n                            children: [\n                                \" \",\n                                option,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                            lineNumber: 48,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: name1 + option,\n                            name: name1,\n                            type: type1\n                        }, option, false, {\n                            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                            lineNumber: 49,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true))\n        }, void 0, false);\n    } else if (type1 === \"date\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: \"h-12 border border-text-grey rounded-lg px-5 text-center\",\n            type: type1,\n            name: name1\n        }, void 0, false, {\n            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n            lineNumber: 56,\n            columnNumber: 13\n        }, this);\n    } else if (type1 === \"likert\") {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: name1 + option,\n                    name: name1,\n                    type: \"radio\"\n                }, option, false, {\n                    fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n                    lineNumber: 61,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n            lineNumber: 59,\n            columnNumber: 9\n        }, this);\n    } else if (type1 === \"number\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: \"h-12 border border-text-grey rounded-lg w-24 px-5 text-center text-lunapurple\",\n            type: type1,\n            name: name1\n        }, void 0, false, {\n            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n            lineNumber: 67,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: \"h-12 border border-text-grey rounded-lg w-96 text-center\",\n            type: type1,\n            name: name1\n        }, void 0, false, {\n            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/FormElements.js\",\n            lineNumber: 71,\n            columnNumber: 13\n        }, this);\n    }\n}\n_c2 = FormInput;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"InputRow\");\n$RefreshReg$(_c1, \"SurveyQuestion\");\n$RefreshReg$(_c2, \"FormInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1FbGVtZW50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBTyxTQUFTQSxTQUFTLEtBQTJHO1FBQTNHLEVBQUVDLE1BQUFBLFFBQU8sTUFBTSxFQUFFQyxXQUFXLHVCQUF1QixFQUFFQyxXQUFXLDJCQUEyQixFQUFFQyxVQUFVLEVBQUUsRUFBRSxHQUEzRztJQUdyQixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7a0NBQUlMOzs7Ozs7a0NBQ0wsOERBQUNLO3dCQUFFRCxXQUFVO2tDQUEyQkg7Ozs7Ozs7Ozs7OzswQkFFNUMsOERBQUNLO2dCQUFVUCxNQUFNQTtnQkFBTUcsU0FBU0E7Z0JBQVNLLE1BQU1QOzs7Ozs7Ozs7Ozs7QUFJM0Q7S0FiZ0JGO0FBZVQsU0FBU1UsZUFBZSxLQUE2QjtRQUE3QixFQUFDUixRQUFRLEVBQUVDLFFBQVEsRUFBRVEsUUFBTSxDQUFDLEVBQUMsR0FBN0I7SUFFM0IsSUFBSVAsVUFBVTtXQUFJUSxNQUFNRCxRQUFNLEdBQUdFLElBQUk7S0FBRyxHQUFHO0lBQzNDLHFCQUNJLDhEQUFDUjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQztrQ0FBSUw7Ozs7OztrQ0FDTCw4REFBQ0s7d0JBQUVELFdBQVU7a0NBQTJCSDs7Ozs7Ozs7Ozs7O1lBRTNDQyxRQUFRVSxHQUFHLENBQUMsQ0FBQ0MsdUJBQ047O3NDQUNJLDhEQUFDQzs0QkFBTVYsV0FBVTs7Z0NBQXNCO2dDQUFFUztnQ0FBTzs7Ozs7OztzQ0FDaEQsOERBQUNFOzRCQUFtQkMsSUFBSVQsT0FBT007NEJBQVFOLE1BQU1BOzRCQUFNUixNQUFNQTsyQkFBN0NjOzs7Ozs7Ozs7Ozs7O0FBTXBDO01BbEJnQkw7QUFvQlQsU0FBU0YsVUFBVSxLQUF1QjtRQUF2QixFQUFFUCxNQUFBQSxLQUFJLEVBQUVHLE9BQU8sRUFBRUssTUFBQUEsS0FBSSxFQUFFLEdBQXZCO0lBQ3RCLHNCQUFzQixHQUN0QixJQUFJUixVQUFTLFNBQVM7UUFDbEIscUJBQ0ksOERBQUNnQjtZQUFNWCxXQUFVO1lBQU9MLE1BQU1BO1lBQU1RLE1BQU1BOzs7Ozs7SUFFbEQsT0FBTyxJQUFJUixVQUFTLFNBQVM7UUFDekIseUNBQXlDO1FBQ3pDLHFCQUNJO3NCQUNLRyxRQUFRVSxHQUFHLENBQUMsQ0FBQ0MsdUJBQ1Y7O3NDQUNJLDhEQUFDQzs0QkFBTVYsV0FBVTs7Z0NBQXNCO2dDQUFFUztnQ0FBTzs7Ozs7OztzQ0FDaEQsOERBQUNFOzRCQUFtQkMsSUFBSVQsUUFBT007NEJBQVFOLE1BQU1BOzRCQUFNUixNQUFNQTsyQkFBN0NjOzs7Ozs7OztJQUtoQyxPQUFPLElBQUlkLFVBQVMsUUFBUTtRQUN4QixxQkFDSSw4REFBQ2dCO1lBQU1YLFdBQVU7WUFBMkRMLE1BQU1BO1lBQU1RLE1BQU1BOzs7Ozs7SUFFdEcsT0FBTyxJQUFJUixVQUFTLFVBQVM7c0JBQ3pCLDhEQUFDSTtzQkFDSUQsUUFBUVUsR0FBRyxDQUFDLENBQUNDLHVCQUNOLDhEQUFDRTtvQkFBbUJDLElBQUlULFFBQU9NO29CQUFRTixNQUFNQTtvQkFBTVIsTUFBTTttQkFBN0NjOzs7Ozs7Ozs7O0lBSTVCLE9BQU8sSUFBSWQsVUFBUyxVQUFVO1FBQzFCLHFCQUNJLDhEQUFDZ0I7WUFBTVgsV0FBVTtZQUFnRkwsTUFBTUE7WUFBTVEsTUFBTUE7Ozs7OztJQUUzSCxPQUFPO1FBQ0gscUJBQ0ksOERBQUNRO1lBQU1YLFdBQVU7WUFBMkRMLE1BQU1BO1lBQU1RLE1BQU1BOzs7Ozs7SUFFdEc7QUFDSjtNQXRDZ0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybUVsZW1lbnRzLmpzPzI2YjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIElucHV0Um93KHsgdHlwZSA9IFwidGV4dFwiLCBtYWludGV4dCA9IFwiUGxhY2Vob2xkZXIgTWFpbiBUZXh0XCIsIHN1YnRpdGxlID0gXCJQbGFjZWhvbGRlciBTdWJ0aXRsZSBUZXh0XCIsIG9wdGlvbnMgPSBcIlwiIH0pIHtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgbXktMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3Jvdyc+XG4gICAgICAgICAgICAgICAgPHAgPnttYWludGV4dH08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGUgdGV4dC10ZXh0LWdyZXlcIj57c3VidGl0bGV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Rm9ybUlucHV0IHR5cGU9e3R5cGV9IG9wdGlvbnM9e29wdGlvbnN9IG5hbWU9e21haW50ZXh0fSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN1cnZleVF1ZXN0aW9uKHttYWludGV4dCwgc3VidGl0bGUsIHNjYWxlPTV9KXtcblxuICAgIGxldCBvcHRpb25zID0gWy4uLkFycmF5KHNjYWxlLTEpLmtleXMoKV0gKyAxO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIG15LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWdyb3cnPlxuICAgICAgICAgICAgICAgIDxwID57bWFpbnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlIHRleHQtdGV4dC1ncmV5XCI+e3N1YnRpdGxlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J214LTUgdGV4dC10ZXh0LWdyZXknPiB7b3B0aW9ufSA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGtleT17b3B0aW9ufSBpZD17bmFtZSArIG9wdGlvbn0gbmFtZT17bmFtZX0gdHlwZT17dHlwZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtSW5wdXQoeyB0eXBlLCBvcHRpb25zLCBuYW1lIH0pIHtcbiAgICAvKiBTdHlsZWQgRm9ybSBJbnB1dHMgKi9cbiAgICBpZiAodHlwZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaC0xMlwiIHR5cGU9e3R5cGV9IG5hbWU9e25hbWV9IC8+XG4gICAgICAgIClcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicmFkaW9cIikge1xuICAgICAgICAvL2NvbnN0IG9wdGlvbnNsaXN0ID0gb3B0aW9ucy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbXgtNSB0ZXh0LXRleHQtZ3JleSc+IHtvcHRpb259IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQga2V5PXtvcHRpb259IGlkPXtuYW1lICsgb3B0aW9ufSBuYW1lPXtuYW1lfSB0eXBlPXt0eXBlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImRhdGVcIikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImgtMTIgYm9yZGVyIGJvcmRlci10ZXh0LWdyZXkgcm91bmRlZC1sZyBweC01IHRleHQtY2VudGVyXCIgdHlwZT17dHlwZX0gbmFtZT17bmFtZX0gLz5cbiAgICAgICAgKVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJsaWtlcnRcIil7XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQga2V5PXtvcHRpb259IGlkPXtuYW1lICsgb3B0aW9ufSBuYW1lPXtuYW1lfSB0eXBlPXtcInJhZGlvXCJ9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJoLTEyIGJvcmRlciBib3JkZXItdGV4dC1ncmV5IHJvdW5kZWQtbGcgdy0yNCBweC01IHRleHQtY2VudGVyIHRleHQtbHVuYXB1cnBsZVwiIHR5cGU9e3R5cGV9IG5hbWU9e25hbWV9IC8+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImgtMTIgYm9yZGVyIGJvcmRlci10ZXh0LWdyZXkgcm91bmRlZC1sZyB3LTk2IHRleHQtY2VudGVyXCIgdHlwZT17dHlwZX0gbmFtZT17bmFtZX0gLz5cbiAgICAgICAgKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiSW5wdXRSb3ciLCJ0eXBlIiwibWFpbnRleHQiLCJzdWJ0aXRsZSIsIm9wdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiRm9ybUlucHV0IiwibmFtZSIsIlN1cnZleVF1ZXN0aW9uIiwic2NhbGUiLCJBcnJheSIsImtleXMiLCJtYXAiLCJvcHRpb24iLCJsYWJlbCIsImlucHV0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FormElements.js\n"));

/***/ })

});