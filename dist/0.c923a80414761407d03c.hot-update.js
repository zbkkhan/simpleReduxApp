webpackHotUpdate(0,{

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(159);\n\nvar _actions = __webpack_require__(161);\n\nvar initialState = {\n  page: \"home\",\n  autofill: \"\"\n};\n\nfunction search(state, action) {\n  switch (action.type) {\n    case _actions.SEARCH_TYPING:\n      return Object.assign({}, state, {\n        autofill: action.autofillResults\n      });\n    default:\n      return state;\n  }\n}\n//const todoApp = combineReducers({\n//\tsearch\n//})\n\nexports.default = search;//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL2luZGV4LmpzP2ZmNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7U0VBUkNIX1RZUElORyAsIFNFQVJDSF9TVUJNSVR9IGZyb20gJy4uL2FjdGlvbnMnXHJcblxyXG52YXIgaW5pdGlhbFN0YXRlPXtcclxuXHRwYWdlOiBcImhvbWVcIixcclxuXHRhdXRvZmlsbDpcIlwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaChzdGF0ZSAsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU0VBUkNIX1RZUElORzpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGF1dG9maWxsOiBhY3Rpb24uYXV0b2ZpbGxSZXN1bHRzXHJcbiAgICAgICAgICB9KVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcbi8vY29uc3QgdG9kb0FwcCA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbi8vXHRzZWFyY2hcclxuLy99KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHJlZHVjZXJzL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTkE7QUFRQTs7Ozs7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})