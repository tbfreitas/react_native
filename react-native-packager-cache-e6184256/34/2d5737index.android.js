var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var awesome = function (_Component) {
  babelHelpers.inherits(awesome, _Component);

  function awesome(props) {
    babelHelpers.classCallCheck(this, awesome);

    var _this = babelHelpers.possibleConstructorReturn(this, (awesome.__proto__ || Object.getPrototypeOf(awesome)).call(this, props));

    _this.state = { text: '' };
    return _this;
  }

  babelHelpers.createClass(awesome, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactNative.View,
        { style: { padding: 10 } },
        _react2.default.createElement(_reactNative.TextInput, {
          style: { height: 40 },
          placeholder: 'Type here to translate!',
          onChangeText: function onChangeText(text) {
            return _this2.setState({ text: text });
          }
        }),
        _react2.default.createElement(
          _reactNative.Text,
          { style: { padding: 10, fontSize: 42 } },
          this.state.text.split(' ').map(function (word) {
            return word && '🍕';
          }).join(' ')
        )
      );
    }
  }]);
  return awesome;
}(_react.Component);

_reactNative.AppRegistry.registerComponent('awesome', function () {
  return awesome;
});