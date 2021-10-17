import React, { useEffect, useContext } from "react";
import { useIntl } from "react-intl";
import { Link, Route } from "react-router-dom";
import { useQuery, useSupportedLanguages } from "../util/hooks";
import { LocaleContext } from "../../src";


const PathParametersPage = ({ match }) => {
  const query = useQuery();
  const { formatMessage } = useIntl();
  const languages = useSupportedLanguages();
  const { locale, setLocale } = useContext(LocaleContext);
  const selectedLanguage = query.get("lang") || locale;

  useEffect(() => {
    setLocale(selectedLanguage);
  }, [selectedLanguage]);


  return (
    <>
      <h1>
        {formatMessage({
          defaultMessage: "Hello, World!",
          description: "Hello world message"
        })}
      </h1>

      <p>
        {formatMessage({
          defaultMessage: "Welcome to ProjectEuclid",
          description: "Welcome message"
        })}
      </p>

      <ul>
        {languages.map(({ code, name }) => (
          <li key={code}>
            <Link to={`${match.url}?lang=${code}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      {query.get("lang") &&
        <p>
          Query string:
          <span className="inline-block ml-10" style={{ fontWeight: "bold" }}>
            ?lang={selectedLanguage}
          </span>

          <br /><br />

          Code: <br />
          <span className="inline-block ml-10" style={{ fontWeight: "bold" }}>
            <code>
              <pre>
                import &#123; LocaleContext &#125; from &quot;react-intl-tools&quot;
                <br /><br />

                const &#123; locale, setLocale &#125; = React.useContext(localeContext)
                <br /><br />

                setLocale("{selectedLanguage}")
              </pre>
            </code>
          </span>
        </p>
      }
    </>
  );
};


export default PathParametersPage;
