webpackHotUpdate(0,{

/***/ 621:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(57);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _index = __webpack_require__(256);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AutoFillList = function AutoFillList(_ref) {\n  var songs = _ref.songs;\n  var onClick = _ref.onClick;\n  return _react2.default.createElement(\n    'a',\n    { href: songs[0].link },\n    _react2.default.createElement(\n      'li',\n      { onClick: onClick },\n      songs[0].title\n    )\n  );\n};\n\nAutoFillList.propTypes = {\n  onClick: _react.PropTypes.func.isRequired,\n  songs: _react.PropTypes.array.isRequired\n};\n\nexports.default = AutoFillList;//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjIxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvQXV0b0ZpbGxMaXN0LmpzPzNjMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vaW5kZXguanMnXHJcblxyXG5cclxuY29uc3QgQXV0b0ZpbGxMaXN0ICA9ICh7c29uZ3MsIG9uQ2xpY2t9KSA9PiAoXHJcblx0XHJcblxyXG5cdDxhIGhyZWY9e3NvbmdzWzBdLmxpbmt9PlxyXG4gIFx0PGxpIG9uQ2xpY2s9e29uQ2xpY2t9Pntzb25nc1swXS50aXRsZX08L2xpPlxyXG4gIFx0PC9hPlxyXG4pXHJcblxyXG5BdXRvRmlsbExpc3QucHJvcFR5cGVzID0ge1xyXG5cdG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgXHRzb25nczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0b0ZpbGxMaXN0XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY29tcG9uZW50cy9BdXRvRmlsbExpc3QuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 622:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(57);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(218);\n\nvar _AutoFillList = __webpack_require__(621);\n\nvar _AutoFillList2 = _interopRequireDefault(_AutoFillList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {\n\t\tsongs: state.autofillResult\n\t};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\treturn {\n\t\tonClick: function onClick() {\n\t\t\treturn;\n\t\t}\n\t};\n};\n\nvar AutoFillLogic = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_AutoFillList2.default);\nexports.default = AutoFillLogic;//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjIyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbnRhaW5lcnMvQXV0b0ZpbGxMb2dpYy5qcz8yN2ZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgQXV0b0ZpbGxMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQXV0b0ZpbGxMaXN0J1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJue1xyXG5cdFx0c29uZ3M6IHN0YXRlLmF1dG9maWxsUmVzdWx0XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuXHRyZXR1cm57XHJcblx0XHRvbkNsaWNrOiAoKSA9PiB7cmV0dXJufVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgQXV0b0ZpbGxMb2dpYz0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXV0b0ZpbGxMaXN0KVxyXG5leHBvcnQgZGVmYXVsdCBBdXRvRmlsbExvZ2ljXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY29udGFpbmVycy9BdXRvRmlsbExvZ2ljLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})