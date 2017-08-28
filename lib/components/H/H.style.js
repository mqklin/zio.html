"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTag = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  font-size: ", ";\n"], ["\n  font-size: ", ";\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizes = {
  xs: "0.67em",
  sm: "0.83em",
  md: "1.17em",
  lg: "1.5em",
  xl: "2em"
};

var HTag = exports.HTag = _styledComponents2.default.h3(_templateObject, function (props) {
  return props.size ? sizes[props.size] : props.fontSize ? props.fontSize : sizes.md;
});