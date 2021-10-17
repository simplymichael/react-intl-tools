import React from "react";
import { useIntl } from "react-intl";
import { useSupportedLanguages } from "../util/hooks";
import { LocaleSelector } from "../../src";


const LocaleSelectorPage = () => {
  const { formatMessage } = useIntl();
  const languages = useSupportedLanguages();

  const selectorText = formatMessage({
      defaultMessage: "Select language",
      description: "Language selection text"
  });

  const langs = {
    en: formatMessage({
      defaultMessage: "English",
      description: "Language: english",
    }),
    be: formatMessage({
      defaultMessage: "British English",
      description: "Language: british-english",
    }),
    ae: formatMessage({
      defaultMessage: "American English",
      description: "Language: american-english",
    }),
    fr: formatMessage({
      defaultMessage: "French",
      description: "Language: french",
    }),
    de: formatMessage({
      defaultMessage: "German",
      description: "Language: german",
    }),
    it: formatMessage({
      defaultMessage: "Italian",
      description: "Language: italian",
    }),
    ru: formatMessage({
      defaultMessage: "Russian",
      description: "Language: russian",
    })
  }

  return (
    <div>
      <LocaleSelector languages={languages} selectorText={selectorText}
      />

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

      <hr />

      <div>
        {formatMessage(
          {
            defaultMessage: `The language selector dropdown above was created
              using the built-in {localeSelector} component
              with the following code`,
            description: "Creating dropdown with LocaleSelector",
          },
          {
            localeSelector: <code>&lt;LocaleSelector /&gt;</code>
          }
        )}:
        <br />

        <span className="inline-block ml-10" style={{ fontWeight: "bold" }}>
          <code>
            <pre>

            import &#123; LocaleSelector &#125; from &quot;react-intl-tools&quot;
            <br /><br />

            const languages=&#123; <br />
             &nbsp;&nbsp;&#123; code: "en",    name: {langs.en} &#125;, <br />
             &nbsp;&nbsp;&#123; code: "en-GB", name: {langs.be} &#125;, <br />
             &nbsp;&nbsp;&#123; code: "en-US", name: {langs.ae} &#125;, <br />
             &nbsp;&nbsp;&#123; code: "fr",    name: {langs.fr} &#125;, <br />
             &nbsp;&nbsp;&#123; code: "de",    name: {langs.de} &#125;, <br />
             &nbsp;&nbsp;&#123; code: "it",    name: {langs.it} &#125;, <br />
             &nbsp;&nbsp;&#123; code: "ru",    name: {langs.ru} &#125;  <br />
            &#125;
            <br /><br />

            &lt;LocaleSelector languages=&#123;languages&#125;
             selectorText=&quot;{selectorText}&quot; /&gt;
            </pre>
          </code>
        </span>
      </div>
    </div>
  );
};

export default LocaleSelectorPage;
