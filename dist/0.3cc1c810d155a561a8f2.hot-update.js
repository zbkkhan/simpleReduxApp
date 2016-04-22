webpackHotUpdate(0,{

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(159);\n\nvar _actions = __webpack_require__(161);\n\nfunction search() {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];\n  var action = arguments[1];\n\n  console.log(\"yo\");\n  switch (action.type) {\n    case _actions.SEARCH_TYPING:\n      return Object.assign({}, state, {\n        songTitle: action.autofillTitle,\n        songLink: action.autofillLink\n      });\n    default:\n      return state;\n  }\n}\n\nexports.default = search;//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL2luZGV4LmpzP2ZmNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7U0VBUkNIX1RZUElORyAsIFNFQVJDSF9TVUJNSVR9IGZyb20gJy4uL2FjdGlvbnMnXHJcblxyXG5mdW5jdGlvbiBzZWFyY2goc3RhdGUgPSB7fSAsIGFjdGlvbikge1xyXG5cdGNvbnNvbGUubG9nKFwieW9cIilcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNFQVJDSF9UWVBJTkc6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICBzb25nVGl0bGU6IGFjdGlvbi5hdXRvZmlsbFRpdGxlLFxyXG5cdFx0ICBcdHNvbmdMaW5rOiBhY3Rpb24uYXV0b2ZpbGxMaW5rXHJcbiAgICAgICAgICB9KVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogcmVkdWNlcnMvaW5kZXguanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})