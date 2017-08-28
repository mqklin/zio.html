"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearfix = clearfix;
function clearfix() {
  return "\n    &:before,\n  &:after {\n    content: \" \"; // 1\n    display: table; // 2\n  }\n  &:after {\n    clear: both;\n  }\n  ";
}