"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  text-align: ", ";\n\n  vertical-align: ", ";\n\n  display: ", ";\n\n  width: ", ";\n  height: ", ";\n\n  margin: ", ";\n  padding: ", ";\n\n  background-color: ", ";\n\n  border: ", ";\n  border-radius: ", ";\n\n  box-shadow: ", ";\n\n  transition: ", ";\n\n  ", ";\n"], ["\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  text-align: ", ";\n\n  vertical-align: ", ";\n\n  display: ", ";\n\n  width: ", ";\n  height: ", ";\n\n  margin: ", ";\n  padding: ", ";\n\n  background-color: ", ";\n\n  border: ", ";\n  border-radius: ", ";\n\n  box-shadow: ", ";\n\n  transition: ", ";\n\n  ", ";\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ClearFix = require("../StyleHelpers/ClearFix");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Default = exports.Default = _styledComponents2.default.div(_templateObject, function (props) {
  return props.fontSize || "12px";
}, function (props) {
  return props.color || "#413D3B";
}, function (props) {
  return props.fontWeight || "normal";
}, function (props) {
  return props.lineHeight || "normal";
}, function (props) {
  return props.textAlign || "left";
}, function (props) {
  return props.verticalAlign || "baseline";
}, function (props) {
  return props.display || "inline";
}, function (props) {
  return props.width || "auto";
}, function (props) {
  return props.height || "auto";
}, function (props) {
  return props.margin || "0";
}, function (props) {
  return props.padding || "0";
}, function (props) {
  return props.backgroundColor || "transparent";
}, function (props) {
  return props.border || "0 solid transparent";
}, function (props) {
  return props.borderRadius || "0";
}, function (props) {
  return props.boxShadow || "0 0 0 0 transparent";
}, function (props) {
  return props.transition || "all .15s linear";
}, function (props) {
  return props.clearfix && (0, _ClearFix.clearfix)();
});