import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";

let userLocale;

if(typeof navigator !== "undefined") {
  userLocale = (Array.isArray(navigator.languages)
    ? navigator.languages[0]
    : (
      navigator.language || navigator.userLanguage ||
      navigator.browserLanguage || navigator.systemLanguage
    )
  );
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
    return translations[locale]
  } catch(err) {
    return translations[defaultLocale];
  }
}

export const LocaleContext = React.createContext({
  locale: userLocale,
  setLocale: () => {},
});

const LocaleContextProvider = ({ children, defaultLocale, translations }) => {
  const [localeData, setLocaleData] = useState({
    locale: defaultLocale,
    messages: translations[defaultLocale],
  });

  useEffect(() => {
    setLanguage(userLocale);
  }, []);

  function setLanguage(locale) {
    locale = String(locale).trim();

    if(!locale) {
      setLocaleData({
        locale: defaultLocale,
        messages: translations[defaultLocale],
      });

      return;
    }

    const messages = loadLocaleData(locale, defaultLocale, translations);

    setLocaleData({
      locale,
      messages
    });
  }

  return (
    <LocaleContext.Provider value={{ locale: localeData.locale, setLocale: setLanguage }}>
      <IntlProvider
        locale={localeData.locale}
        defaultLocale={defaultLocale}
        messages={localeData.messages}>
        { children }
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

LocaleContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
  defaultLocale: PropTypes.string.isRequired,
  translations: PropTypes.shape({}).isRequired,
};


export default LocaleContextProvider;
