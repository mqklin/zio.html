"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = undefined;

var _templateObject = _taggedTemplateLiteral(["\n    @media (max-width: ", "em) {\n      ", "\n    }\n  "], ["\n    @media (max-width: ", "em) {\n      ", "\n    }\n  "]);

var _styledComponents = require("styled-components");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var gridVariables = {};
gridVariables.screenSmMin = 768;
gridVariables.screenMdMin = 992;
gridVariables.screenLgMin = 1200;

gridVariables.screenXsMax = gridVariables.screenSmMin - 1;
gridVariables.screenSmMax = gridVariables.screenMdMin - 1;
gridVariables.screenMdMax = gridVariables.screenLgMin - 1;

var sizes = {
  lg: gridVariables.screenLgMin,
  md: gridVariables.screenMdMax,
  sm: gridVariables.screenSmMax,
  xs: gridVariables.screenXsMax
};

// iterate through the sizes and create a media template
var media = exports.media = Object.keys(sizes).reduce(function (accumulator, label) {
  // use em in breakpoints to work properly cross-browser and support users

  var emSize = sizes[label] / 16;
  accumulator[label] = function () {
    return (0, _styledComponents.css)(_templateObject, emSize, _styledComponents.css.apply(undefined, arguments));
  };
  return accumulator;
}, {});