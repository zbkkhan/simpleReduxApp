webpackHotUpdate(0,{

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _index = __webpack_require__(624);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(622);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(72);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(623);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _reactRedux = __webpack_require__(416);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _components = {\n\t_component: {}\n};\n\nvar _DWwwLoudtronixLoudappNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n\tfilename: 'D:/www/loudtronix/loudapp/components/SearchBar.js',\n\tcomponents: _components,\n\tlocals: [module],\n\timports: [_react3.default]\n});\n\nvar _DWwwLoudtronixLoudappNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n\tfilename: 'D:/www/loudtronix/loudapp/components/SearchBar.js',\n\tcomponents: _components,\n\tlocals: [],\n\timports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n\treturn function (Component) {\n\t\treturn _DWwwLoudtronixLoudappNode_modulesReactTransformHmrLibIndexJs2(_DWwwLoudtronixLoudappNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n\t};\n}\n\nvar SearchBar = _wrapComponent('_component')(_react3.default.createClass({\n\tdisplayName: 'SearchBar',\n\n\tpropTypes: {\n\t\tonSubmit: _react2.PropTypes.func.isRequired,\n\t\tonChange: _react2.PropTypes.func.isRequired\n\t},\n\trender: function render() {\n\t\tvar _this = this;\n\n\t\treturn _react3.default.createElement(\n\t\t\t'form',\n\t\t\t{ onSubmit: dispatch(resultsSearch(event.target.value)) },\n\t\t\t_react3.default.createElement('input', { type: 'text', onChange: function onChange(event) {\n\t\t\t\t\treturn _this.props.onChange(event.target.value);\n\t\t\t\t} }),\n\t\t\t_react3.default.createElement('input', { type: 'submit', value: 'submit' })\n\t\t);\n\t}\n\n}));\n\nvar mapStateToProps = function mapStateToProps(state) {\n\treturn {\n\t\tyo: \"yo\"\n\t};\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\treturn {\n\t\tonChange: function onChange(value) {\n\t\t\tdispatch(autofillSearch(value));\n\t\t},\n\t\tonSubmit: function onSubmit(value) {\n\t\t\tdispatch(resultsSearch(value));\n\t\t}\n\n\t};\n};\n\n(0, _reactRedux.connect)()(SearchBar);\n\nexports.default = SearchBar;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(485)(module)))//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzP2U5MmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5cclxuY29uc3QgU2VhcmNoQmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdHByb3BUeXBlczp7XHJcblx0XHRvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuXHRcdG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcblx0fSxcclxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIChcclxuXHRcdDxmb3JtIG9uU3VibWl0PXtkaXNwYXRjaChyZXN1bHRzU2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSkpfT5cclxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9Lz5cclxuXHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIi8+XHJcblx0PC9mb3JtPilcclxuXHR9XHJcblx0XHJcbn0pO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzPSAoc3RhdGUpID0+e1xyXG5cdHJldHVybiB7XHJcblx0XHR5bzogXCJ5b1wiXHJcblx0fVxyXG59XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBcdG9uQ2hhbmdlOiAodmFsdWUpID0+IHtcclxuICAgICAgZGlzcGF0Y2goYXV0b2ZpbGxTZWFyY2godmFsdWUpKVxyXG4gICAgfSxcclxuXHQgIG9uU3VibWl0OiAodmFsdWUpID0+IHtcclxuICAgICAgZGlzcGF0Y2gocmVzdWx0c1NlYXJjaCh2YWx1ZSkpXHJcbiAgICB9XHJcblx0ICBcclxuICB9XHJcbn1cclxuXHJcbmNvbm5lY3QoKShTZWFyY2hCYXIpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXJcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY29tcG9uZW50cy9TZWFyY2hCYXIuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBYkE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})