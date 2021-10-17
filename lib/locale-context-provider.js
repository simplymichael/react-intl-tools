"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LocaleContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var userLocale;

if (typeof navigator !== "undefined") {
  userLocale = Array.isArray(navigator.languages) ? navigator.languages[0] : navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage;
}
/**
 * Function loadLocaleData (Cf. https://formatjs.io/docs/getting-started/message-distribution#distribution)
 *
 * Try to load the passed locale's data (e.g: fr.json, en-GB.json).
 * Fallback to default locale if specified locale's data does not exist.
 *
 * @param local string. E.gs: "en", "fr", "en-GB", etc
 * @return ES6 Module containing the locale's translations
 *   (or default locale's language if specified locale is not found)
 */


function loadLocaleData(locale, defaultLocale, translations) {
  locale = String(locale).trim();

  try {
    return translations[locale];
  } catch (err) {
    return translations[defaultLocale];
  }
}

var LocaleContext = /*#__PURE__*/_react["default"].createContext({
  locale: userLocale,
  setLocale: function setLocale() {}
});

exports.LocaleContext = LocaleContext;

var LocaleContextProvider = function LocaleContextProvider(_ref) {
  var children = _ref.children,
      defaultLocale = _ref.defaultLocale,
      translations = _ref.translations;

  var _useState = (0, _react.useState)({
    locale: defaultLocale,
    messages: translations[defaultLocale]
  }),
      _useState2 = _slicedToArray(_useState, 2),
      localeData = _useState2[0],
      setLocaleData = _useState2[1];

  (0, _react.useEffect)(function () {
    setLanguage(userLocale);
  }, []);

  function setLanguage(locale) {
    locale = String(locale).trim();

    if (!locale) {
      setLocaleData({
        locale: defaultLocale,
        messages: translations[defaultLocale]
      });
      return;
    }

    var messages = loadLocaleData(locale, defaultLocale, translations);
    setLocaleData({
      locale: locale,
      messages: messages
    });
  }

  return /*#__PURE__*/_react["default"].createElement(LocaleContext.Provider, {
    value: {
      locale: localeData.locale,
      setLocale: setLanguage
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
    locale: localeData.locale,
    defaultLocale: defaultLocale,
    messages: localeData.messages
  }, children));
};

LocaleContextProvider.propTypes = {
  children: _propTypes["default"].any.isRequired,
  defaultLocale: _propTypes["default"].string.isRequired,
  translations: _propTypes["default"].shape({}).isRequired
};
var _default = LocaleContextProvider;
exports["default"] = _default;