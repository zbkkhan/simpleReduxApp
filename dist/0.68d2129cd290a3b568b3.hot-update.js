webpackHotUpdate(0,{

/***/ 161:
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//Constants\nvar SEARCH_TYPING = exports.SEARCH_TYPING = \"SEARCH_TYPING\";\nvar SEARCH_SUBMIT = exports.SEARCH_SUBMIT = \"SEARCH_SUBMIT\";\n\n//Action Creators\nvar autofillSearch = exports.autofillSearch = function autofillSearch(value) {\n\n  var songs = [{ title: 'Drake- Hotline Bling', Duration: '3:00', link: \"https://www.youtube.com/watch?v=uxpDa-c-4Mc\" }, { title: 'Drake- Right Hand', Duration: '3:00', link: \"https://www.youtube.com/watch?v=NSG-Ggn6Z_c\" }, { title: 'Selena Gomez - Come and Get it', Duration: '3:00', link: \"https://www.youtube.com/watch?v=n-D1EB74Ckg\" }, { title: 'Tony Igy- Astronomia', Duration: '3:00', link: \"https://www.youtube.com/watch?v=4Vk5DpS8hmY\" }];\n  var search = value;\n  search = search.toLowerCase();\n  var music = undefined.props.songs.map(function (song) {\n\n    var re = new RegExp(search, 'g');\n    var songTitle = song.title.toLowerCase();\n    if (songTitle.match(re) == search) {\n\n      return song;\n    }\n  });\n  return {\n    type: SEARCH_TYPING,\n    autofillResults: music\n\n  };\n};\n\nvar resultsSearch = exports.resultsSearch = function resultsSearch(value) {\n\n  return {\n    type: SEARCH_SUBMIT,\n    value: value\n  };\n};//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FjdGlvbnMvaW5kZXguanM/ZTlhOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbnN0YW50c1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1RZUElORyA9IFwiU0VBUkNIX1RZUElOR1wiXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfU1VCTUlUID0gXCJTRUFSQ0hfU1VCTUlUXCJcclxuXHJcbi8vQWN0aW9uIENyZWF0b3JzXHJcbmV4cG9ydCBjb25zdCBhdXRvZmlsbFNlYXJjaCA9ICh2YWx1ZSkgPT4ge1xyXG5cdFxyXG5cdCB2YXIgc29uZ3MgPSBbXHJcbiAgICB7dGl0bGU6ICdEcmFrZS0gSG90bGluZSBCbGluZycsIER1cmF0aW9uOiAnMzowMCcsIGxpbms6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj11eHBEYS1jLTRNY1wifSxcclxuICAgIHt0aXRsZTogJ0RyYWtlLSBSaWdodCBIYW5kJywgRHVyYXRpb246ICczOjAwJywgbGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PU5TRy1HZ242Wl9jXCJ9LFxyXG4gICAge3RpdGxlOiAnU2VsZW5hIEdvbWV6IC0gQ29tZSBhbmQgR2V0IGl0JywgRHVyYXRpb246ICczOjAwJywgbGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PW4tRDFFQjc0Q2tnXCJ9LFxyXG4gICAge3RpdGxlOiAnVG9ueSBJZ3ktIEFzdHJvbm9taWEnLCBEdXJhdGlvbjogJzM6MDAnLCBsaW5rOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9NFZrNURwUzhobVlcIn1dXHJcblx0dmFyIHNlYXJjaCA9IHZhbHVlXHJcbiAgICAgICAgc2VhcmNoID0gc2VhcmNoLnRvTG93ZXJDYXNlKClcclxuICAgICAgICB2YXIgbXVzaWMgPSAgdGhpcy5wcm9wcy5zb25ncy5tYXAoZnVuY3Rpb24oc29uZykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cChzZWFyY2gsICdnJylcclxuICAgICAgICAgICAgdmFyIHNvbmdUaXRsZT0gc29uZy50aXRsZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIGlmKCBzb25nVGl0bGUubWF0Y2gocmUpID09IHNlYXJjaCl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgcmV0dXJuIChzb25nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICBcclxuICAgIH0pXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNFQVJDSF9UWVBJTkcsXHJcblx0YXV0b2ZpbGxSZXN1bHRzOiBtdXNpY1xyXG5cdFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc3VsdHNTZWFyY2ggPSAodmFsdWUpID0+IHtcclxuXHRcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0VBUkNIX1NVQk1JVCxcclxuICAgIHZhbHVlXHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGFjdGlvbnMvaW5kZXguanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(57);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(218);\n\nvar _actions = __webpack_require__(161);\n\nvar _index = __webpack_require__(256);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SearchBar = function SearchBar(_ref) {\n  var dispatch = _ref.dispatch;\n\n  var input = void 0;\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement('input', { ref: function ref(node) {\n        input = node;\n      } }),\n    _react2.default.createElement(\n      'button',\n      { onClick: function onClick() {\n          dispatch((0, _actions.autofillSearch)(input.value));\n          input.value = '';\n        } },\n      'Search'\n    )\n  );\n};\nSearchBar = (0, _reactRedux.connect)()(SearchBar);\n\nexports.default = SearchBar;\n\n//import React, { PropTypes, Components } from 'react'\n//import { connect } from 'react-redux'\n//import {autofillSearch, resultsSearch} from '../actions'\n//class SearchBar extends Components = {\n//\t\n//\trender:function(){\n//\t\tconst { onSubmit, onChange } = this.props\n//\t\tlet input\n//\t\treturn (\n//\t\t <div>\n//      <form onSubmit={e => {\n//        e.preventDefault()\n//        if (!input.value.trim()) {\n//          return\n//        }\n//        dispatch(addTodo(input.value))\n//        input.value = ''\n//      }}>\n//        <input ref={node => {\n//          input = node\n//        }} />\n//        <button type=\"submit\">\n//          Add Todo\n//        </button>\n//      </form>\n//    </div>)\n//\t}\n//\t\n//}\n//\n//\n//SearchBar = connect()(SearchBar)\n//export default SearchBar//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbnRhaW5lcnMvU2VhcmNoQmFyLmpzP2Y3M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7YXV0b2ZpbGxTZWFyY2gsIHJlc3VsdHNTZWFyY2ggfSBmcm9tICcuLi9hY3Rpb25zJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vaW5kZXguanMnXHJcbmxldCBTZWFyY2hCYXIgPSAoeyBkaXNwYXRjaCB9KSA9PiB7XHJcbiAgbGV0IGlucHV0XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbnB1dCByZWY9e25vZGUgPT4ge1xyXG4gICAgICAgIGlucHV0ID0gbm9kZVxyXG4gICAgICB9fSAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChhdXRvZmlsbFNlYXJjaChpbnB1dC52YWx1ZSkpXHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJ1xyXG4gICAgICB9fT5cclxuICAgICAgIFNlYXJjaFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5TZWFyY2hCYXIgPSBjb25uZWN0KCkoU2VhcmNoQmFyKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyXHJcblxyXG5cclxuXHJcbi8vaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50cyB9IGZyb20gJ3JlYWN0J1xyXG4vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuLy9pbXBvcnQge2F1dG9maWxsU2VhcmNoLCByZXN1bHRzU2VhcmNofSBmcm9tICcuLi9hY3Rpb25zJ1xyXG4vL2NsYXNzIFNlYXJjaEJhciBleHRlbmRzIENvbXBvbmVudHMgPSB7XHJcbi8vXHRcclxuLy9cdHJlbmRlcjpmdW5jdGlvbigpe1xyXG4vL1x0XHRjb25zdCB7IG9uU3VibWl0LCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xyXG4vL1x0XHRsZXQgaW5wdXRcclxuLy9cdFx0cmV0dXJuIChcclxuLy9cdFx0IDxkaXY+XHJcbi8vICAgICAgPGZvcm0gb25TdWJtaXQ9e2UgPT4ge1xyXG4vLyAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbi8vICAgICAgICBpZiAoIWlucHV0LnZhbHVlLnRyaW0oKSkge1xyXG4vLyAgICAgICAgICByZXR1cm5cclxuLy8gICAgICAgIH1cclxuLy8gICAgICAgIGRpc3BhdGNoKGFkZFRvZG8oaW5wdXQudmFsdWUpKVxyXG4vLyAgICAgICAgaW5wdXQudmFsdWUgPSAnJ1xyXG4vLyAgICAgIH19PlxyXG4vLyAgICAgICAgPGlucHV0IHJlZj17bm9kZSA9PiB7XHJcbi8vICAgICAgICAgIGlucHV0ID0gbm9kZVxyXG4vLyAgICAgICAgfX0gLz5cclxuLy8gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4vLyAgICAgICAgICBBZGQgVG9kb1xyXG4vLyAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgPC9mb3JtPlxyXG4vLyAgICA8L2Rpdj4pXHJcbi8vXHR9XHJcbi8vXHRcclxuLy99XHJcbi8vXHJcbi8vXHJcbi8vU2VhcmNoQmFyID0gY29ubmVjdCgpKFNlYXJjaEJhcilcclxuLy9leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXJcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjb250YWluZXJzL1NlYXJjaEJhci5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUpBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(159);\n\nvar _actions = __webpack_require__(161);\n\nfunction search() {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];\n  var action = arguments[1];\n\n\n  switch (action.type) {\n    case _actions.SEARCH_TYPING:\n      return Object.assign({}, state, {\n        autofillResults: action.autofillResults\n      });\n    default:\n      return state;\n  }\n}\n\nexports.default = search;//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL2luZGV4LmpzP2ZmNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7U0VBUkNIX1RZUElORyAsIFNFQVJDSF9TVUJNSVR9IGZyb20gJy4uL2FjdGlvbnMnXHJcblxyXG5mdW5jdGlvbiBzZWFyY2goc3RhdGUgPSB7fSAsIGFjdGlvbikge1xyXG5cdFxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU0VBUkNIX1RZUElORzpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGF1dG9maWxsUmVzdWx0czogYWN0aW9uLmF1dG9maWxsUmVzdWx0c1xyXG4gICAgICAgICAgfSlcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHJlZHVjZXJzL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQU5BO0FBUUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})