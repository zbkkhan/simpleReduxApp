webpackHotUpdate(0,{

/***/ 493:
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar initialState = {\n  page: \"home\",\n  autofillResults: []\n\n};\nvar search = function search() {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'SEARCH_TYPING':\n\n      return Object.assign({}, state, {\n        autofillResults: action.autofillResults\n      });\n    case 'SEARCH_SUBMIT':\n\n    default:\n      return state;\n  }\n};\n\nexports.default = search;//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDkzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL3NlYXJjaC5qcz9iNDE4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBpbml0aWFsU3RhdGU9e1xyXG5cdHBhZ2U6IFwiaG9tZVwiLFxyXG5cdGF1dG9maWxsUmVzdWx0czpbXVxyXG5cdFxyXG59XHJcbmNvbnN0IHNlYXJjaCA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnU0VBUkNIX1RZUElORyc6XHJcbiBcclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBhdXRvZmlsbFJlc3VsdHM6IGFjdGlvbi5hdXRvZmlsbFJlc3VsdHNcclxuICAgICAgfSlcclxuICBcdGNhc2UgJ1NFQVJDSF9TVUJNSVQnOlxyXG5cdFx0ICBcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHJlZHVjZXJzL3NlYXJjaC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})