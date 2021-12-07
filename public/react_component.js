'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionButton = function (_React$Component) {
  _inherits(ActionButton, _React$Component);

  function ActionButton(props) {
    _classCallCheck(this, ActionButton);

    var _this = _possibleConstructorReturn(this, (ActionButton.__proto__ || Object.getPrototypeOf(ActionButton)).call(this, props));

    _this.state = { liked: false };
    _this.state.data = { 'starting data': 'foo' };
    return _this;
  }

  _createClass(ActionButton, [{
    key: 'getData',
    value: function getData() {
      var _this2 = this;

      // Axios would be better.
      console.log('this is getdata');
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', function () {
        // console.log(xhr.responseText);
        _this2.setState({ data: xhr.responseText });
      });
      // xhr.open('GET', "http://localhost:9090/users");
      xhr.open('GET', "http://localhost:9090/lookup?number=07803937331");
      xhr.send();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (this.state.liked) {
        return 'You liked this.';
      }

      var data = this.state.data;

      console.log(data);

      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this3.setState({ liked: true });
            } },
          'Like'
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this3.getData();
            } },
          'GetData'
        ),
        React.createElement(TextEntryArea, { data: this.state.data })
      );
    }
  }]);

  return ActionButton;
}(React.Component);

var TextEntryArea = function (_React$Component2) {
  _inherits(TextEntryArea, _React$Component2);

  function TextEntryArea(props) {
    _classCallCheck(this, TextEntryArea);

    return _possibleConstructorReturn(this, (TextEntryArea.__proto__ || Object.getPrototypeOf(TextEntryArea)).call(this, props));
  }

  _createClass(TextEntryArea, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'text-entry' },
        React.createElement(
          'p',
          null,
          JSON.stringify(this.props.data)
        )
      );
    }
  }]);

  return TextEntryArea;
}(React.Component);

var domContainer = document.querySelector('#action_button_container');
ReactDOM.render(React.createElement(ActionButton, null), domContainer);