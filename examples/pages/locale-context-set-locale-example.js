import React from "react";
import { useIntl } from "react-intl";
import { LocaleContext } from "../../src";


const LocaleContextPage = () => {
  const { formatMessage } = useIntl();
  const { locale, setLocale } = React.useContext(LocaleContext);
  const [btnClicked, setBtnClicked] = React.useState(false);

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

      <p>
        {formatMessage({
          defaultMessage: "Click on a button below to select your preferred language",
          description: "Language selection buttons instruction"
        })}
      </p>

      <ul className="list-style-none pl-0" onClick={() => setBtnClicked(true)}>
        <li className="inline-block">
          <button className="button bg-blue mr-10" onClick={(e) => setLocale("en")}>
            {formatMessage({
              defaultMessage: "English",
              description: "Language: english",
            })}
          </button>
        </li>

        <li className="inline-block">
          <button className="button bg-blue mr-10" onClick={(e) => setLocale("en-GB")}>
            {formatMessage({
              defaultMessage: "English",
              description: "Language: english",
            })}
            &nbsp;
            <small>
              ({formatMessage({
                defaultMessage: "British",
                description: "Language variation: british-english"
              })})
            </small>
          </button>
        </li>

        <li className="inline-block">
          <button className="button bg-blue mr-10" onClick={(e) => setLocale("en-US")}>
            {formatMessage({
              defaultMessage: "English",
              description: "Language: english",
            })}
            &nbsp;
            <small>
              ({formatMessage({
                defaultMessage: "American",
                description: "Language variation: american-english"
              })})
            </small>
          </button>
        </li>

        <li className="inline-block">
          <button className="button bg-green mr-10" onClick={(e) => setLocale("fr")}>
          {formatMessage({
            defaultMessage: "French",
            description: "Language: french",
          })}
          </button>
        </li>

        <li className="inline-block">
          <button className="button bg-red mr-10" onClick={(e) => setLocale("de")}>
          {formatMessage({
            defaultMessage: "German",
            description: "Language: german",
          })}
          </button>
        </li>

        <li className="inline-block">
          <button className="button bg-gray mr-10" onClick={(e) => setLocale("it")}>
          {formatMessage({
            defaultMessage: "Italian",
            description: "Language: italian",
          })}
          </button>
        </li>

        <li className="inline-block">
          <button className="button bg-black" onClick={(e) => setLocale("ru")}>
          {formatMessage({
            defaultMessage: "Russian",
            description: "Language: russian",
          })}
          </button>
        </li>
      </ul>

      <hr />

      {btnClicked &&
        <div>
         Code: <br />
         <span className="inline-block ml-10" style={{ fontWeight: "bold" }}>
           <code>
           <pre>
             import &#123; LocaleContext &#125; from &quot;react-intl-tools&quot;
             <br /><br />

             const &#123; locale, setLocale &#125; = React.useContext(localeContext)
             <br /><br />

             &lt;button onClick=&#123;() => setLocale("{locale}")&#125;&gt;
           </pre>

           </code>
         </span>
        </div>
      }
    </>
  );
};


export default LocaleContextPage;
