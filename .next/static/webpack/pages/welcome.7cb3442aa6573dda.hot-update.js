"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/welcome",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction LoginForm() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSignUp = async (e)=>{\n        e.preventDefault() // every time we submit, javascript wants to refresh. We stop this with this.\n        ;\n        try {\n            // Axios helps us send data. Its an HTTP client. Makes things easy for us. Helps us gets the right datatype.\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8000/authentication/login\", {\n                username: username,\n                password: password\n            });\n            window.location.href = \"/\";\n        } catch (error) {\n            console.error(\"An error occurred during Log In:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSignUp,\n        className: \"mx-auto mt-16 p-4 w-1/2 borderrounded\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"username\",\n                    name: \"username\",\n                    placeholder: \"Emailadresse\",\n                    value: username,\n                    onChange: (e)=>setUsername(e.target.value),\n                    className: \"w-full p-6 border border-lightgrey placeholder-text-grey rounded-full h-14 tracking-wider\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/LoginForm.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/LoginForm.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    id: \"password\",\n                    name: \"password\",\n                    value: password,\n                    placeholder: \"Passwort\",\n                    onChange: (e)=>setPassword(e.target.value),\n                    className: \"w-full p-6 border border-lightgrey placeholder-text-grey rounded-full h-14 tracking-wider\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/LoginForm.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/LoginForm.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/register_account\",\n                        className: \"block text-left text-white px-6 mb-10 hover:underline\",\n                        children: \"Noch kein Konto? \"\n                    }, void 0, false, {\n                        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/LoginForm.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"text-black bg-white px-12 py-2 rounded-full hover:text-lunapurple\",\n                        children: \"Anmelden\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/LoginForm.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/LoginForm.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dennisperrett/Documents/LUNA/luna_dev_2.0/luna_frontend/components/LoginForm.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginForm, \"wuQOK7xaXdVz4RMrZQhWbI751Oc=\");\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QjtBQUNMO0FBRXpCLFNBQVNFOztJQUNQLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFFekMsTUFBTU8sZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYyxHQUFHLDZFQUE2RTs7UUFDaEcsSUFBSTtZQUNGLDRHQUE0RztZQUM1RyxNQUFNQyxXQUFXLE1BQU1ULGtEQUFVLENBQy9CLDhDQUNBO2dCQUNFRSxVQUFVQTtnQkFDVkUsVUFBVUE7WUFFWjtZQUdGTyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztRQUN6QixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLG9DQUFvQ0E7UUFDcEQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFLQyxVQUFVWDtRQUFjWSxXQUFVOzswQkFFdEMsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUViLDRFQUFDRTtvQkFDQ0MsTUFBSztvQkFDTEMsSUFBRztvQkFDSEMsTUFBSztvQkFDTEMsYUFBWTtvQkFDWkMsT0FBT3ZCO29CQUNQd0IsVUFBVSxDQUFDbkIsSUFBTUosWUFBWUksRUFBRW9CLE1BQU0sQ0FBQ0YsS0FBSztvQkFDM0NQLFdBQVU7b0JBQ1ZVLFFBQVE7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDVDtnQkFBSUQsV0FBVTswQkFFYiw0RUFBQ0U7b0JBQ0NDLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hDLE1BQUs7b0JBQ0xFLE9BQU9yQjtvQkFDUG9CLGFBQVk7b0JBQ1pFLFVBQVUsQ0FBQ25CLElBQU1GLFlBQVlFLEVBQUVvQixNQUFNLENBQUNGLEtBQUs7b0JBQzNDUCxXQUFVO29CQUNWVSxRQUFROzs7Ozs7Ozs7OzswQkFHWiw4REFBQ1Q7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDVzt3QkFBRWhCLE1BQUs7d0JBQW9CSyxXQUFVO2tDQUF3RDs7Ozs7O2tDQUM5Riw4REFBQ1k7d0JBQU9ULE1BQUs7d0JBQVNILFdBQVU7a0NBQW9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUc7R0E1RFNqQjtLQUFBQTtBQThEVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcz9lY2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5mdW5jdGlvbiBMb2dpbkZvcm0oKSB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVTaWduVXAgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKSAvLyBldmVyeSB0aW1lIHdlIHN1Ym1pdCwgamF2YXNjcmlwdCB3YW50cyB0byByZWZyZXNoLiBXZSBzdG9wIHRoaXMgd2l0aCB0aGlzLlxuICAgIHRyeSB7XG4gICAgICAvLyBBeGlvcyBoZWxwcyB1cyBzZW5kIGRhdGEuIEl0cyBhbiBIVFRQIGNsaWVudC4gTWFrZXMgdGhpbmdzIGVhc3kgZm9yIHVzLiBIZWxwcyB1cyBnZXRzIHRoZSByaWdodCBkYXRhdHlwZS5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hdXRoZW50aWNhdGlvbi9sb2dpbicsXG4gICAgICAgIHtcbiAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkIGR1cmluZyBMb2cgSW46JywgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2lnblVwfSBjbGFzc05hbWU9XCJteC1hdXRvIG10LTE2IHAtNCB3LTEvMiBib3JkZXJyb3VuZGVkXCI+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTBcIj5cbiAgICAgICAgXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbGFkcmVzc2UnXG4gICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTYgYm9yZGVyIGJvcmRlci1saWdodGdyZXkgcGxhY2Vob2xkZXItdGV4dC1ncmV5IHJvdW5kZWQtZnVsbCBoLTE0IHRyYWNraW5nLXdpZGVyXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICAgIFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcnRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTYgYm9yZGVyIGJvcmRlci1saWdodGdyZXkgcGxhY2Vob2xkZXItdGV4dC1ncmV5IHJvdW5kZWQtZnVsbCBoLTE0IHRyYWNraW5nLXdpZGVyXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxhIGhyZWY9XCIvcmVnaXN0ZXJfYWNjb3VudFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtbGVmdCB0ZXh0LXdoaXRlIHB4LTYgbWItMTAgaG92ZXI6dW5kZXJsaW5lXCI+Tm9jaCBrZWluIEtvbnRvPyA8L2E+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgYmctd2hpdGUgcHgtMTIgcHktMiByb3VuZGVkLWZ1bGwgaG92ZXI6dGV4dC1sdW5hcHVycGxlXCI+XG4gICAgICAgICAgQW5tZWxkZW5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiTG9naW5Gb3JtIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTaWduVXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInBvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsImNvbnNvbGUiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LoginForm.js\n"));

/***/ })

});