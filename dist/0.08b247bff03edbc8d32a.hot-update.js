webpackHotUpdate(0,{

/***/ 161:
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//Constants\nvar SEARCH_TYPING = exports.SEARCH_TYPING = \"SEARCH_TYPING\";\nvar SEARCH_SUBMIT = exports.SEARCH_SUBMIT = \"SEARCH_SUBMIT\";\n\n//Action Creators\nvar autofillSearch = exports.autofillSearch = function autofillSearch(value) {\n\n  var songs = [{ title: 'Drake- Hotline Bling', Duration: '3:00', link: \"https://www.youtube.com/watch?v=uxpDa-c-4Mc\" }, { title: 'Drake- Right Hand', Duration: '3:00', link: \"https://www.youtube.com/watch?v=NSG-Ggn6Z_c\" }, { title: 'Selena Gomez - Come and Get it', Duration: '3:00', link: \"https://www.youtube.com/watch?v=n-D1EB74Ckg\" }, { title: 'Tony Igy- Astronomia', Duration: '3:00', link: \"https://www.youtube.com/watch?v=4Vk5DpS8hmY\" }];\n  var search = value;\n  search = search.toLowerCase();\n  var music = undefined.props.songs.map(function (song) {\n\n    var re = new RegExp(search, 'g');\n    var songTitle = song.title.toLowerCase();\n    if (songTitle.match(re) == search) {\n\n      return song;\n    }\n  });\n  return {\n    type: SEARCH_TYPING,\n    autofillResults: music\n\n  };\n};\n\nvar resultsSearch = exports.resultsSearch = function resultsSearch(value) {\n\n  return {\n    type: SEARCH_SUBMIT,\n    value: value\n  };\n};//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FjdGlvbnMvaW5kZXguanM/ZTlhOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbnN0YW50c1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1RZUElORyA9IFwiU0VBUkNIX1RZUElOR1wiXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfU1VCTUlUID0gXCJTRUFSQ0hfU1VCTUlUXCJcclxuXHJcbi8vQWN0aW9uIENyZWF0b3JzXHJcbmV4cG9ydCBjb25zdCBhdXRvZmlsbFNlYXJjaCA9ICh2YWx1ZSkgPT4ge1xyXG5cdFxyXG5cdCB2YXIgc29uZ3MgPSBbXHJcbiAgICB7dGl0bGU6ICdEcmFrZS0gSG90bGluZSBCbGluZycsIER1cmF0aW9uOiAnMzowMCcsIGxpbms6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj11eHBEYS1jLTRNY1wifSxcclxuICAgIHt0aXRsZTogJ0RyYWtlLSBSaWdodCBIYW5kJywgRHVyYXRpb246ICczOjAwJywgbGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PU5TRy1HZ242Wl9jXCJ9LFxyXG4gICAge3RpdGxlOiAnU2VsZW5hIEdvbWV6IC0gQ29tZSBhbmQgR2V0IGl0JywgRHVyYXRpb246ICczOjAwJywgbGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PW4tRDFFQjc0Q2tnXCJ9LFxyXG4gICAge3RpdGxlOiAnVG9ueSBJZ3ktIEFzdHJvbm9taWEnLCBEdXJhdGlvbjogJzM6MDAnLCBsaW5rOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9NFZrNURwUzhobVlcIn1cclxuXVxyXG5cdHZhciBzZWFyY2ggPSB2YWx1ZVxyXG4gICAgICAgIHNlYXJjaCA9IHNlYXJjaC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgdmFyIG11c2ljID0gIHRoaXMucHJvcHMuc29uZ3MubWFwKGZ1bmN0aW9uKHNvbmcpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoc2VhcmNoLCAnZycpXHJcbiAgICAgICAgICAgIHZhciBzb25nVGl0bGU9IHNvbmcudGl0bGUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICBpZiggc29uZ1RpdGxlLm1hdGNoKHJlKSA9PSBzZWFyY2gpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHJldHVybiAoc29uZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgXHJcbiAgICB9KVxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTRUFSQ0hfVFlQSU5HLFxyXG5cdGF1dG9maWxsUmVzdWx0czogbXVzaWNcclxuXHRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXN1bHRzU2VhcmNoID0gKHZhbHVlKSA9PiB7XHJcblx0XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNFQVJDSF9TVUJNSVQsXHJcbiAgICB2YWx1ZVxyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhY3Rpb25zL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})