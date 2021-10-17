"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _localeContextProvider = require("./locale-context-provider");

var _excluded = ["languages", "selectorText"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LocaleSelector = function LocaleSelector(_ref) {
  var languages = _ref.languages,
      selectorText = _ref.selectorText,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _React$useContext = _react["default"].useContext(_localeContextProvider.LocaleContext),
      locale = _React$useContext.locale,
      setLocale = _React$useContext.setLocale;

  var languagesList = languages.map(function (_ref2) {
    var code = _ref2.code,
        name = _ref2.name;
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: code,
      value: code
    }, name);
  });
  languagesList.unshift( /*#__PURE__*/_react["default"].createElement("option", {
    key: 0,
    value: ""
  }, selectorText));

  function updateLanguage(e) {
    var value = e.target.value; // If the user selects the selector text (e.g: choose a language),
    // leave the current language/locale intact

    if (!value) {
      return;
    }

    setLocale(value);
  }

  return /*#__PURE__*/_react["default"].createElement("select", _extends({
    value: locale,
    onChange: updateLanguage
  }, rest), languagesList);
};

LocaleSelector.propTypes = {
  selectorText: _propTypes["default"].string,
  languages: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    code: _propTypes["default"].string.isRequired,
    name: _propTypes["default"].string.isRequired
  })).isRequired
};
LocaleSelector.defaultProps = {
  selectorText: "Choose language"
};
var _default = LocaleSelector;
exports["default"] = _default;