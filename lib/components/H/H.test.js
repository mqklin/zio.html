'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzyme = require('enzyme');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("H", function () {
  it("should be equal to snapshow", function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _2.default,
      { size: 'xs' },
      'I am small \uD83D\uDC4C'
    ));
    var tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  describe("props", function () {
    it("should change test based on new children prop", function () {
      var header = (0, _enzyme.mount)(_react2.default.createElement(
        _2.default,
        { size: 'xs' },
        'I am small \uD83D\uDC4C'
      ));
      expect(header.text()).toEqual('I am small 👌');

      header.setProps({ children: 'Not Small Anymore 😎' });
      expect(header.text()).toEqual('Not Small Anymore 😎');
    });
  });
});