webpackHotUpdate(0,{

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(57);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(218);\n\nvar _actions = __webpack_require__(161);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SearchBar = function SearchBar(_ref) {\n  var dispatch = _ref.dispatch;\n\n  var input = void 0;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement('input', { ref: function ref(node) {\n        input = node;\n      } }),\n    _react2.default.createElement(\n      'button',\n      { onClick: function onClick() {\n          dispatch((0, _actions.autofillSearch)(input.value));\n          input.value = '';\n        } },\n      'Add Todo'\n    )\n  );\n};\nAddTodo = (0, _reactRedux.connect)()(AddTodo);\n\nexports.default = SearchBar;\n\n//import React, { PropTypes, Components } from 'react'\n//import { connect } from 'react-redux'\n//import {autofillSearch, resultsSearch} from '../actions'\n//class SearchBar extends Components = {\n//\t\n//\trender:function(){\n//\t\tconst { onSubmit, onChange } = this.props\n//\t\tlet input\n//\t\treturn (\n//\t\t <div>\n//      <form onSubmit={e => {\n//        e.preventDefault()\n//        if (!input.value.trim()) {\n//          return\n//        }\n//        dispatch(addTodo(input.value))\n//        input.value = ''\n//      }}>\n//        <input ref={node => {\n//          input = node\n//        }} />\n//        <button type=\"submit\">\n//          Add Todo\n//        </button>\n//      </form>\n//    </div>)\n//\t}\n//\t\n//}\n//\n//\n//SearchBar = connect()(SearchBar)\n//export default SearchBar//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbnRhaW5lcnMvU2VhcmNoQmFyLmpzP2Y3M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7YXV0b2ZpbGxTZWFyY2gsIHJlc3VsdHNTZWFyY2ggfSBmcm9tICcuLi9hY3Rpb25zJ1xyXG5cclxubGV0IFNlYXJjaEJhciA9ICh7IGRpc3BhdGNoIH0pID0+IHtcclxuICBsZXQgaW5wdXRcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbnB1dCByZWY9e25vZGUgPT4ge1xyXG4gICAgICAgIGlucHV0ID0gbm9kZVxyXG4gICAgICB9fSAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChhdXRvZmlsbFNlYXJjaChpbnB1dC52YWx1ZSkpXHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgICB9fT5cclxuICAgICAgICBBZGQgVG9kb1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5BZGRUb2RvID0gY29ubmVjdCgpKEFkZFRvZG8pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXJcclxuXHJcblxyXG5cclxuLy9pbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnRzIH0gZnJvbSAncmVhY3QnXHJcbi8vaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4vL2ltcG9ydCB7YXV0b2ZpbGxTZWFyY2gsIHJlc3VsdHNTZWFyY2h9IGZyb20gJy4uL2FjdGlvbnMnXHJcbi8vY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgQ29tcG9uZW50cyA9IHtcclxuLy9cdFxyXG4vL1x0cmVuZGVyOmZ1bmN0aW9uKCl7XHJcbi8vXHRcdGNvbnN0IHsgb25TdWJtaXQsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzXHJcbi8vXHRcdGxldCBpbnB1dFxyXG4vL1x0XHRyZXR1cm4gKFxyXG4vL1x0XHQgPGRpdj5cclxuLy8gICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiB7XHJcbi8vICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuLy8gICAgICAgIGlmICghaW5wdXQudmFsdWUudHJpbSgpKSB7XHJcbi8vICAgICAgICAgIHJldHVyblxyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgZGlzcGF0Y2goYWRkVG9kbyhpbnB1dC52YWx1ZSkpXHJcbi8vICAgICAgICBpbnB1dC52YWx1ZSA9ICcnXHJcbi8vICAgICAgfX0+XHJcbi8vICAgICAgICA8aW5wdXQgcmVmPXtub2RlID0+IHtcclxuLy8gICAgICAgICAgaW5wdXQgPSBub2RlXHJcbi8vICAgICAgICB9fSAvPlxyXG4vLyAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbi8vICAgICAgICAgIEFkZCBUb2RvXHJcbi8vICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICA8L2Zvcm0+XHJcbi8vICAgIDwvZGl2PilcclxuLy9cdH1cclxuLy9cdFxyXG4vL31cclxuLy9cclxuLy9cclxuLy9TZWFyY2hCYXIgPSBjb25uZWN0KCkoU2VhcmNoQmFyKVxyXG4vL2V4cG9ydCBkZWZhdWx0IFNlYXJjaEJhclxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvbnRhaW5lcnMvU2VhcmNoQmFyLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFKQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})