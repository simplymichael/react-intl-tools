import React from "react";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import { LocaleContext } from "./locale-context-provider";

const LocaleSelector = ({ languages, selectorText, ...rest }) => {
  const { formatMessage } = useIntl();
  const { locale, setLocale } = React.useContext(LocaleContext);
  const languagesList = languages.map(({ code, name }) => (
    <option key={code} value={code}>{name}</option>
  ));

  languagesList.unshift(
    <option key={0} value="">{ selectorText }</option>
  );

  function updateLanguage(e) {
    const { value } = e.target;

    // If the user selects the selector text (e.g: choose a language),
    // leave the current language/locale intact
    if(!value) {
      return;
    }

    setLocale(value);
  }

  return (
    <select value={locale} onChange={updateLanguage} {...rest}>
      { languagesList }
    </select>
  );
};

LocaleSelector.propTypes = {
  selectorText: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
}

LocaleSelector.defaultProps = {
  selectorText: "Choose language",
};

export default LocaleSelector;
