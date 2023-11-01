"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/analysis",{

/***/ "./components/SetupDataModelOverview.js":
/*!**********************************************!*\
  !*** ./components/SetupDataModelOverview.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SetupOverview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons */ \"./components/Buttons.js\");\n\n\nfunction SetupOverview(param) {\n    let { data_models } = param;\n    // Initialize an array to hold groups of three objects\n    const groupedArrays = [];\n    // Loop through the original array and split it into groups of three\n    for(let i = 0; i < data_models.length; i += 3){\n        groupedArrays.push(data_models.slice(i, i + 3));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-5\",\n        children: groupedArrays.map((model_group, index)=>// A row is added per every 3 elements\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap space-x-0 mx-[-.5rem]\",\n                children: model_group.map((model, innerIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModelContainer, {\n                        model: model\n                    }, innerIndex, false, {\n                        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/SetupDataModelOverview.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this))\n            }, index, false, {\n                fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/SetupDataModelOverview.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/SetupDataModelOverview.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_c = SetupOverview;\nfunction StatusIcon(param) {\n    let { status } = param;\n    let bg_col = \"bg-white\";\n    let border_col = \"border-lunapurple\";\n    let text = \"Offen\";\n    let text_col = \"text-lunapurple\";\n    switch(status){\n        case 1:\n            bg_col = \"bg-lunayellow\";\n            border_col = \"border-lunayellow\";\n            text = \"Angefangen\";\n            text_col = \"text-white\";\n            break;\n        case 2:\n            bg_col = \"bg-lunagreen\";\n            border_col = \"border-lunagreen\";\n            text = \"Abgeschlossen\";\n            text_col = \"text-white\";\n            break;\n        default:\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border inline-block px-2 \".concat(bg_col, \" \").concat(border_col, \" \").concat(text_col, \" rounded-full ml-auto\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-[.65rem]  text-right\",\n            children: text\n        }, void 0, false, {\n            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/SetupDataModelOverview.js\",\n            lineNumber: 53,\n            columnNumber: 114\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/SetupDataModelOverview.js\",\n        lineNumber: 53,\n        columnNumber: 13\n    }, this);\n}\n_c1 = StatusIcon;\nfunction ModelContainer(param) {\n    let { model } = param;\n    let border_col = \"border-lunapurple\";\n    let button_text = \"Ausf\\xfcllen\";\n    let opacity = \"opacity-100\";\n    if (model.setup_status == 2) {}\n    switch(model.setup_status){\n        case 1:\n            button_text = \"Weiter\";\n            break;\n        case 2:\n            border_col = \"border-[#dedede]\";\n            button_text = \"Anzeigen\";\n            opacity = \"opacity-40\";\n            break;\n        default:\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/3 h-72 p-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"border \".concat(border_col, \" h-full w-full rounded-xl p-5 flex flex-col justify-between h-full\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"\".concat(opacity),\n                            children: model.modelname\n                        }, void 0, false, {\n                            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/SetupDataModelOverview.js\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatusIcon, {\n                            status: model.setup_status\n                        }, void 0, false, {\n                            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/SetupDataModelOverview.js\",\n                            lineNumber: 80,\n                            columnNumber: 73\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/SetupDataModelOverview.js\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: model.img,\n                    className: \"mx-auto w-28 \".concat(opacity)\n                }, void 0, false, {\n                    fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/SetupDataModelOverview.js\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-24 inline-block \".concat(opacity, \" hover:opacity-100\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buttons__WEBPACK_IMPORTED_MODULE_1__.SmallButton, {\n                        text: button_text\n                    }, void 0, false, {\n                        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/SetupDataModelOverview.js\",\n                        lineNumber: 84,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/SetupDataModelOverview.js\",\n                    lineNumber: 83,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/SetupDataModelOverview.js\",\n            lineNumber: 78,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/SetupDataModelOverview.js\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, this);\n}\n_c2 = ModelContainer;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SetupOverview\");\n$RefreshReg$(_c1, \"StatusIcon\");\n$RefreshReg$(_c2, \"ModelContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NldHVwRGF0YU1vZGVsT3ZlcnZpZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0Q7QUFFakMsU0FBU0UsY0FBYyxLQUFlO1FBQWYsRUFBRUMsV0FBVyxFQUFFLEdBQWY7SUFHbEMsc0RBQXNEO0lBQ3RELE1BQU1DLGdCQUFnQixFQUFFO0lBRXhCLG9FQUFvRTtJQUNwRSxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUYsWUFBWUcsTUFBTSxFQUFFRCxLQUFLLEVBQUc7UUFDNUNELGNBQWNHLElBQUksQ0FBQ0osWUFBWUssS0FBSyxDQUFDSCxHQUFHQSxJQUFJO0lBQ2hEO0lBR0EscUJBQ0ksOERBQUNJO1FBQUlDLFdBQVU7a0JBQ1pOLGNBQWNPLEdBQUcsQ0FBQyxDQUFDQyxhQUFhQyxRQUMvQixzQ0FBc0M7MEJBQ3RDLDhEQUFDSjtnQkFBSUMsV0FBVTswQkFDWkUsWUFBWUQsR0FBRyxDQUFDLENBQUNHLE9BQU9DLDJCQUN2Qiw4REFBQ0M7d0JBQWVGLE9BQU9BO3VCQUFZQzs7Ozs7ZUFGb0JGOzs7Ozs7Ozs7O0FBUXZFO0tBeEJ3Qlg7QUEyQnhCLFNBQVNlLFdBQVcsS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWO0lBQ2hCLElBQUlDLFNBQVM7SUFDYixJQUFJQyxhQUFhO0lBQ2pCLElBQUlDLE9BQU87SUFDWCxJQUFJQyxXQUFXO0lBRWYsT0FBUUo7UUFDSixLQUFLO1lBQ0RDLFNBQVM7WUFDVEMsYUFBYTtZQUNiQyxPQUFPO1lBQ1BDLFdBQVc7WUFDWDtRQUNKLEtBQUs7WUFDREgsU0FBUztZQUNUQyxhQUFhO1lBQ2JDLE9BQU87WUFDUEMsV0FBVztZQUNYO1FBQ0o7WUFDSTtJQUNSO0lBRUEscUJBQVEsOERBQUNiO1FBQUlDLFdBQVcsNEJBQXNDVSxPQUFWRCxRQUFPLEtBQWlCRyxPQUFkRixZQUFXLEtBQVksT0FBVEUsVUFBUztrQkFBd0IsNEVBQUNDO1lBQUViLFdBQVU7c0JBQTZCVzs7Ozs7Ozs7Ozs7QUFDM0o7TUF4QlNKO0FBMEJULFNBQVNELGVBQWUsS0FBUztRQUFULEVBQUVGLEtBQUssRUFBRSxHQUFUO0lBRXBCLElBQUlNLGFBQWE7SUFDakIsSUFBSUksY0FBYztJQUNsQixJQUFJQyxVQUFVO0lBRWQsSUFBSVgsTUFBTVksWUFBWSxJQUFJLEdBQUUsQ0FBRTtJQUM5QixPQUFRWixNQUFNWSxZQUFZO1FBQ3RCLEtBQUs7WUFDREYsY0FBYztZQUNkO1FBQ0osS0FBSztZQUNESixhQUFhO1lBQ2JJLGNBQWM7WUFDZEMsVUFBVTtZQUNWO1FBQ0o7WUFDSTtJQUNSO0lBRUEscUJBQ0ksOERBQUNoQjtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFXLFVBQXFCLE9BQVhVLFlBQVc7OzhCQUNqQyw4REFBQ1g7b0JBQUlDLFdBQVk7O3NDQUNiLDhEQUFDaUI7NEJBQUdqQixXQUFXLEdBQVcsT0FBUmU7c0NBQVlYLE1BQU1jLFNBQVM7Ozs7Ozt3QkFBTTtzQ0FBQyw4REFBQ1g7NEJBQVdDLFFBQVFKLE1BQU1ZLFlBQVk7Ozs7Ozs7Ozs7Ozs4QkFFOUYsOERBQUNHO29CQUFJQyxLQUFLaEIsTUFBTWUsR0FBRztvQkFBRW5CLFdBQVcsZ0JBQXdCLE9BQVJlOzs7Ozs7OEJBQ2hELDhEQUFDaEI7b0JBQUlDLFdBQVcscUJBQTZCLE9BQVJlLFNBQVE7OEJBQ3pDLDRFQUFDeEIsaURBQVdBO3dCQUFDb0IsTUFBTUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkM7TUFqQ1NSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2V0dXBEYXRhTW9kZWxPdmVydmlldy5qcz8wMjNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgU21hbGxCdXR0b24gfSBmcm9tIFwiLi9CdXR0b25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHVwT3ZlcnZpZXcoeyBkYXRhX21vZGVscyB9KSB7XG5cblxuICAgIC8vIEluaXRpYWxpemUgYW4gYXJyYXkgdG8gaG9sZCBncm91cHMgb2YgdGhyZWUgb2JqZWN0c1xuICAgIGNvbnN0IGdyb3VwZWRBcnJheXMgPSBbXTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgb3JpZ2luYWwgYXJyYXkgYW5kIHNwbGl0IGl0IGludG8gZ3JvdXBzIG9mIHRocmVlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhX21vZGVscy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICBncm91cGVkQXJyYXlzLnB1c2goZGF0YV9tb2RlbHMuc2xpY2UoaSwgaSArIDMpKTtcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxuICAgICAgICAgIHtncm91cGVkQXJyYXlzLm1hcCgobW9kZWxfZ3JvdXAsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAvLyBBIHJvdyBpcyBhZGRlZCBwZXIgZXZlcnkgMyBlbGVtZW50c1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBzcGFjZS14LTAgbXgtWy0uNXJlbV1cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge21vZGVsX2dyb3VwLm1hcCgobW9kZWwsIGlubmVySW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8TW9kZWxDb250YWluZXIgbW9kZWw9e21vZGVsfSBrZXk9e2lubmVySW5kZXh9IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbn1cblxuXG5mdW5jdGlvbiBTdGF0dXNJY29uKHsgc3RhdHVzIH0pIHtcbiAgICBsZXQgYmdfY29sID0gXCJiZy13aGl0ZVwiO1xuICAgIGxldCBib3JkZXJfY29sID0gXCJib3JkZXItbHVuYXB1cnBsZVwiO1xuICAgIGxldCB0ZXh0ID0gXCJPZmZlblwiO1xuICAgIGxldCB0ZXh0X2NvbCA9IFwidGV4dC1sdW5hcHVycGxlXCI7XG5cbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBiZ19jb2wgPSAnYmctbHVuYXllbGxvdyc7XG4gICAgICAgICAgICBib3JkZXJfY29sID0gXCJib3JkZXItbHVuYXllbGxvd1wiO1xuICAgICAgICAgICAgdGV4dCA9IFwiQW5nZWZhbmdlblwiO1xuICAgICAgICAgICAgdGV4dF9jb2wgPSBcInRleHQtd2hpdGVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBiZ19jb2wgPSAnYmctbHVuYWdyZWVuJztcbiAgICAgICAgICAgIGJvcmRlcl9jb2wgPSBcImJvcmRlci1sdW5hZ3JlZW5cIjtcbiAgICAgICAgICAgIHRleHQgPSBcIkFiZ2VzY2hsb3NzZW5cIjtcbiAgICAgICAgICAgIHRleHRfY29sID0gXCJ0ZXh0LXdoaXRlXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e2Bib3JkZXIgaW5saW5lLWJsb2NrIHB4LTIgJHtiZ19jb2x9ICR7Ym9yZGVyX2NvbH0gJHt0ZXh0X2NvbH0gcm91bmRlZC1mdWxsIG1sLWF1dG9gfT48cCBjbGFzc05hbWU9XCJ0ZXh0LVsuNjVyZW1dICB0ZXh0LXJpZ2h0XCI+e3RleHR9PC9wPjwvZGl2Pilcbn1cblxuZnVuY3Rpb24gTW9kZWxDb250YWluZXIoeyBtb2RlbCB9KSB7XG5cbiAgICBsZXQgYm9yZGVyX2NvbCA9IFwiYm9yZGVyLWx1bmFwdXJwbGVcIjtcbiAgICBsZXQgYnV0dG9uX3RleHQgPSBcIkF1c2bDvGxsZW5cIlxuICAgIGxldCBvcGFjaXR5ID0gXCJvcGFjaXR5LTEwMFwiO1xuXG4gICAgaWYgKG1vZGVsLnNldHVwX3N0YXR1cyA9PSAyKXsgfVxuICAgIHN3aXRjaCAobW9kZWwuc2V0dXBfc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGJ1dHRvbl90ZXh0ID0gXCJXZWl0ZXJcIlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGJvcmRlcl9jb2wgPSBcImJvcmRlci1bI2RlZGVkZV1cIjtcbiAgICAgICAgICAgIGJ1dHRvbl90ZXh0ID0gXCJBbnplaWdlblwiO1xuICAgICAgICAgICAgb3BhY2l0eSA9IFwib3BhY2l0eS00MFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIGgtNzIgcC0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJvcmRlciAke2JvcmRlcl9jb2x9IGgtZnVsbCB3LWZ1bGwgcm91bmRlZC14bCBwLTUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaC1mdWxsYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlcmB9PlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtgJHtvcGFjaXR5fWB9Pnttb2RlbC5tb2RlbG5hbWV9PC9oMT4gPFN0YXR1c0ljb24gc3RhdHVzPXttb2RlbC5zZXR1cF9zdGF0dXN9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e21vZGVsLmltZ30gY2xhc3NOYW1lPXtgbXgtYXV0byB3LTI4ICR7b3BhY2l0eX1gfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTI0IGlubGluZS1ibG9jayAke29wYWNpdHl9IGhvdmVyOm9wYWNpdHktMTAwYH0+XG4gICAgICAgICAgICAgICAgICAgIDxTbWFsbEJ1dHRvbiB0ZXh0PXtidXR0b25fdGV4dH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cblxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIlNtYWxsQnV0dG9uIiwiU2V0dXBPdmVydmlldyIsImRhdGFfbW9kZWxzIiwiZ3JvdXBlZEFycmF5cyIsImkiLCJsZW5ndGgiLCJwdXNoIiwic2xpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJtb2RlbF9ncm91cCIsImluZGV4IiwibW9kZWwiLCJpbm5lckluZGV4IiwiTW9kZWxDb250YWluZXIiLCJTdGF0dXNJY29uIiwic3RhdHVzIiwiYmdfY29sIiwiYm9yZGVyX2NvbCIsInRleHQiLCJ0ZXh0X2NvbCIsInAiLCJidXR0b25fdGV4dCIsIm9wYWNpdHkiLCJzZXR1cF9zdGF0dXMiLCJoMSIsIm1vZGVsbmFtZSIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SetupDataModelOverview.js\n"));

/***/ }),

/***/ "./pages/analysis.js":
/*!***************************!*\
  !*** ./pages/analysis.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_RootLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/RootLayout.js */ \"./components/RootLayout.js\");\n/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Buttons */ \"./components/Buttons.js\");\n/* harmony import */ var _components_SetupDataModelOverview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/SetupDataModelOverview */ \"./components/SetupDataModelOverview.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';\n//import { faChevronRight} from '@fortawesome/free-solid-svg-icons';\n\n\n\nconst account_setup_progress = 0;\nconst data_models_to_use = [\n    {\n        \"modelname\": \"Personenprofil\",\n        \"setup_status\": 2,\n        \"href\": \"#\",\n        \"img\": \"personal.png\"\n    },\n    {\n        \"modelname\": \"AIST\",\n        \"setup_status\": 2,\n        \"href\": \"#\",\n        \"img\": \"curious.png\"\n    },\n    {\n        \"modelname\": \"Kognitive F\\xe4higkeiten\",\n        \"setup_status\": 2,\n        \"href\": \"#\",\n        \"img\": \"brain.png\"\n    },\n    {\n        \"modelname\": \"Internale-Externale-Kontroll\\xfcberzeugung\",\n        \"setup_status\": 1,\n        \"href\": \"#\",\n        \"img\": \"specification.png\"\n    },\n    {\n        \"modelname\": \"Fachwissenstest Mathematik\",\n        \"setup_status\": 1,\n        \"href\": \"#\",\n        \"img\": \"function.png\"\n    },\n    {\n        \"modelname\": \"Motivation\",\n        \"setup_status\": 1,\n        \"href\": \"#\",\n        \"img\": \"motivation.png\"\n    },\n    {\n        \"modelname\": \"Pers\\xf6nlichkeits-skala\",\n        \"setup_status\": 0,\n        \"href\": \"#\",\n        \"img\": \"personality.png\"\n    },\n    {\n        \"modelname\": \"Panas\",\n        \"setup_status\": 0,\n        \"href\": \"#\",\n        \"img\": \"mood.png\"\n    }\n];\nfunction Main() {\n    const setupStatusList = data_models_to_use.map((model)=>model.setup_status);\n    const current_progress = setupStatusList.reduce((partialSum, a)=>partialSum + a, 0) / (setupStatusList.length * 2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RootLayout_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"flex-row justify-between px-10 pt-10\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Analysis\"\n            }, void 0, false, {\n                fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/pages/analysis.js\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/pages/analysis.js\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/pages/analysis.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hbmFseXNpcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNzQjtBQUNwRCxtRUFBbUU7QUFDbkUsb0VBQW9FO0FBQ3RCO0FBQ2E7QUFDakM7QUFFMUIsTUFBTUsseUJBQXlCO0FBQy9CLE1BQU1DLHFCQUFxQjtJQUN2QjtRQUFFLGFBQWE7UUFBa0IsZ0JBQWdCO1FBQUcsUUFBUTtRQUFLLE9BQU87SUFBZTtJQUN2RjtRQUFFLGFBQWE7UUFBUSxnQkFBZ0I7UUFBRyxRQUFRO1FBQUssT0FBTztJQUFjO0lBQzVFO1FBQUUsYUFBYTtRQUF5QixnQkFBZ0I7UUFBRyxRQUFRO1FBQUssT0FBTztJQUFZO0lBQzNGO1FBQUUsYUFBYTtRQUEyQyxnQkFBZ0I7UUFBRyxRQUFRO1FBQUssT0FBTztJQUFvQjtJQUNySDtRQUFFLGFBQWE7UUFBOEIsZ0JBQWdCO1FBQUcsUUFBUTtRQUFLLE9BQU87SUFBZTtJQUNuRztRQUFFLGFBQWE7UUFBYyxnQkFBZ0I7UUFBRyxRQUFRO1FBQUssT0FBTztJQUFpQjtJQUNyRjtRQUFFLGFBQWE7UUFBeUIsZ0JBQWdCO1FBQUcsUUFBUTtRQUFLLE9BQU87SUFBa0I7SUFDakc7UUFBRSxhQUFhO1FBQVMsZ0JBQWdCO1FBQUcsUUFBUTtRQUFLLE9BQU87SUFBVztDQUM3RTtBQUljLFNBQVNDO0lBRXBCLE1BQU1DLGtCQUFrQkYsbUJBQW1CRyxHQUFHLENBQUMsQ0FBQ0MsUUFBVUEsTUFBTUMsWUFBWTtJQUM1RSxNQUFNQyxtQkFBbUJKLGdCQUFnQkssTUFBTSxDQUFDLENBQUNDLFlBQVlDLElBQU1ELGFBQWFDLEdBQUcsS0FBTVAsQ0FBQUEsZ0JBQWdCUSxNQUFNLEdBQUc7SUFHbEgscUJBQ0ksOERBQUNmLGlFQUFVQTtrQkFDUCw0RUFBQ2dCO1lBQUtDLFdBQVU7c0JBQ1osNEVBQUNDOzBCQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXBCO0tBYndCWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hbmFseXNpcy5qcz83ZmUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFJvb3RMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL1Jvb3RMYXlvdXQuanMnO1xuLy9pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuLy9pbXBvcnQgeyBmYUNoZXZyb25SaWdodH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9CdXR0b25zJztcbmltcG9ydCBPdmVydmlldyBmcm9tICdAL2NvbXBvbmVudHMvU2V0dXBEYXRhTW9kZWxPdmVydmlldyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBhY2NvdW50X3NldHVwX3Byb2dyZXNzID0gMDtcbmNvbnN0IGRhdGFfbW9kZWxzX3RvX3VzZSA9IFtcbiAgICB7IFwibW9kZWxuYW1lXCI6IFwiUGVyc29uZW5wcm9maWxcIiwgXCJzZXR1cF9zdGF0dXNcIjogMiwgXCJocmVmXCI6IFwiI1wiLCBcImltZ1wiOiBcInBlcnNvbmFsLnBuZ1wiIH0sXG4gICAgeyBcIm1vZGVsbmFtZVwiOiBcIkFJU1RcIiwgXCJzZXR1cF9zdGF0dXNcIjogMiwgXCJocmVmXCI6IFwiI1wiLCBcImltZ1wiOiBcImN1cmlvdXMucG5nXCIgfSxcbiAgICB7IFwibW9kZWxuYW1lXCI6IFwiS29nbml0aXZlIEbDpGhpZ2tlaXRlblwiLCBcInNldHVwX3N0YXR1c1wiOiAyLCBcImhyZWZcIjogXCIjXCIsIFwiaW1nXCI6IFwiYnJhaW4ucG5nXCIgfSxcbiAgICB7IFwibW9kZWxuYW1lXCI6IFwiSW50ZXJuYWxlLUV4dGVybmFsZS1Lb250cm9sbMO8YmVyemV1Z3VuZ1wiLCBcInNldHVwX3N0YXR1c1wiOiAxLCBcImhyZWZcIjogXCIjXCIsIFwiaW1nXCI6IFwic3BlY2lmaWNhdGlvbi5wbmdcIiB9LFxuICAgIHsgXCJtb2RlbG5hbWVcIjogXCJGYWNod2lzc2Vuc3Rlc3QgTWF0aGVtYXRpa1wiLCBcInNldHVwX3N0YXR1c1wiOiAxLCBcImhyZWZcIjogXCIjXCIsIFwiaW1nXCI6IFwiZnVuY3Rpb24ucG5nXCIgfSxcbiAgICB7IFwibW9kZWxuYW1lXCI6IFwiTW90aXZhdGlvblwiLCBcInNldHVwX3N0YXR1c1wiOiAxLCBcImhyZWZcIjogXCIjXCIsIFwiaW1nXCI6IFwibW90aXZhdGlvbi5wbmdcIiB9LFxuICAgIHsgXCJtb2RlbG5hbWVcIjogXCJQZXJzw7ZubGljaGtlaXRzLXNrYWxhXCIsIFwic2V0dXBfc3RhdHVzXCI6IDAsIFwiaHJlZlwiOiBcIiNcIiwgXCJpbWdcIjogXCJwZXJzb25hbGl0eS5wbmdcIiB9LFxuICAgIHsgXCJtb2RlbG5hbWVcIjogXCJQYW5hc1wiLCBcInNldHVwX3N0YXR1c1wiOiAwLCBcImhyZWZcIjogXCIjXCIsIFwiaW1nXCI6IFwibW9vZC5wbmdcIiB9LFxuXTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XG5cbiAgICBjb25zdCBzZXR1cFN0YXR1c0xpc3QgPSBkYXRhX21vZGVsc190b191c2UubWFwKChtb2RlbCkgPT4gbW9kZWwuc2V0dXBfc3RhdHVzKTtcbiAgICBjb25zdCBjdXJyZW50X3Byb2dyZXNzID0gc2V0dXBTdGF0dXNMaXN0LnJlZHVjZSgocGFydGlhbFN1bSwgYSkgPT4gcGFydGlhbFN1bSArIGEsIDApIC8gKHNldHVwU3RhdHVzTGlzdC5sZW5ndGggKiAyKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvb3RMYXlvdXQ+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gcHgtMTAgcHQtMTBcIj5cbiAgICAgICAgICAgICAgICA8aDE+QW5hbHlzaXM8L2gxPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L1Jvb3RMYXlvdXQ+XG4gICAgKVxufVxuXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSb290TGF5b3V0IiwiQnV0dG9uIiwiT3ZlcnZpZXciLCJSZWFjdCIsImFjY291bnRfc2V0dXBfcHJvZ3Jlc3MiLCJkYXRhX21vZGVsc190b191c2UiLCJNYWluIiwic2V0dXBTdGF0dXNMaXN0IiwibWFwIiwibW9kZWwiLCJzZXR1cF9zdGF0dXMiLCJjdXJyZW50X3Byb2dyZXNzIiwicmVkdWNlIiwicGFydGlhbFN1bSIsImEiLCJsZW5ndGgiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/analysis.js\n"));

/***/ })

});