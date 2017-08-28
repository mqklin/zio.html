"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _H = require("./H.style");

require("./H.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The HTML H1,H2,H3,H4,H5,H6,
 * @param {Object} extraStyle  Extra Tag Styling using styled-components
 * @param {string} className  Extra Tag Styling using css
 * @param {string} size The size of font size
 * xs: 0.67em
 * sm: 0.83em
 * md: 1.17em
 * lg: 1.5em
 * xl: 2em
 * @param {mix} children The innerHTML what would be inside the tag text or another Tag *Better not to use another tag*
 */
var H = function (_Component) {
  _inherits(H, _Component);

  function H() {
    _classCallCheck(this, H);

    return _possibleConstructorReturn(this, (H.__proto__ || Object.getPrototypeOf(H)).apply(this, arguments));
  }

  _createClass(H, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          innerHTML = _props.children,
          extraStyle = _props.extraStyle,
          size = _props.size,
          externalStylingClass = _props.className;

      return _react2.default.createElement(
        _H.HTag,
        { style: extraStyle, className: "zio_html-h " + externalStylingClass, size: size },
        innerHTML
      );
    }
  }]);

  return H;
}(_react.Component);

H.propTypes = {
  className: _propTypes.string,
  extraStyle: _propTypes.object,
  size: (0, _propTypes.oneOf)(['xs', 'sm', 'md', 'lg', 'xl']),
  children: _propTypes.node.isRequired
};
exports.default = H;