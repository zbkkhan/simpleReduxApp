webpackHotUpdate(0,{

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(138);\n\nvar _todos = __webpack_require__(210);\n\nvar _todos2 = _interopRequireDefault(_todos);\n\nvar _visibilityFilter = __webpack_require__(492);\n\nvar _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar todoApp = (0, _redux.combineReducers)({\n  todos: _todos2.default,\n  visibilityFilter: _visibilityFilter2.default\n});\n\nexports.default = todoApp;//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL2luZGV4LmpzP2ZmNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB0b2RvcyBmcm9tICcuL3RvZG9zJ1xyXG5pbXBvcnQgdmlzaWJpbGl0eUZpbHRlciBmcm9tICcuL3Zpc2liaWxpdHlGaWx0ZXInXHJcblxyXG5jb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcclxuICB0b2RvcyxcclxuICB2aXNpYmlsaXR5RmlsdGVyXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvQXBwXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHJlZHVjZXJzL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 492:
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar visibilityFilter = function visibilityFilter() {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? 'SHOW_ALL' : arguments[0];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'SET_VISIBILITY_FILTER':\n      return action.filter;\n    default:\n      return state;\n  }\n};\n\nexports.default = visibilityFilter;//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDkyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL3Zpc2liaWxpdHlGaWx0ZXIuanM/ZmQ5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKHN0YXRlID0gJ1NIT1dfQUxMJywgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJzpcclxuICAgICAgcmV0dXJuIGFjdGlvbi5maWx0ZXJcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmlzaWJpbGl0eUZpbHRlclxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiByZWR1Y2Vycy92aXNpYmlsaXR5RmlsdGVyLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})