'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

require('./story/custom.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('H', module).add('Size | xs', function () {
  return _react2.default.createElement(
    _index2.default,
    { size: 'xs' },
    'Very Small \uD83D\uDE0A'
  );
}).add('Size | sm', function () {
  return _react2.default.createElement(
    _index2.default,
    { size: 'sm' },
    'Just Small \uD83D\uDE0A'
  );
}).add('Size | md', function () {
  return _react2.default.createElement(
    _index2.default,
    { size: 'md' },
    'Medium Size \uD83D\uDE0A'
  );
}).add('Size | lg', function () {
  return _react2.default.createElement(
    _index2.default,
    { size: 'lg' },
    'Big Size \uD83D\uDE01'
  );
}).add('Size | xl', function () {
  return _react2.default.createElement(
    _index2.default,
    { size: 'xl' },
    'Veryy Big Size \uD83D\uDE31'
  );
}).add('Inner Tag', function () {
  return _react2.default.createElement(
    _index2.default,
    { size: 'md' },
    _react2.default.createElement(
      'a',
      { href: '#' },
      ' Send me nowhere'
    )
  );
}).add('Custom Style', function () {
  return _react2.default.createElement(
    _index2.default,
    { className: 'custom-component', size: 'md' },
    'Its Custom Style'
  );
});