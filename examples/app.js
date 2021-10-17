import React from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import { LocaleContextProvider } from "../src";

import de from "./translations/compiled/de.json";
import en from "./translations/compiled/en.json";
import BE from "./translations/compiled/en-GB.json";
import AE from "./translations/compiled/en-US.json";
import fr from "./translations/compiled/fr.json";
import it from "./translations/compiled/it.json";
import ru from "./translations/compiled/ru.json";

const availableTranslations = {
  de,
  en,
  "en-GB": BE,
  "en-US": AE,
  fr,
  it,
  ru,
};

import UrlQsExample from "./pages/url-qs-example";
import SetLocaleExample from "./pages/locale-context-set-locale-example";
import LocaleSelectorExample from "./pages/locale-selector-example";


const App = () => (
  <BrowserRouter>
    <LocaleContextProvider defaultLocale="en" translations={availableTranslations}>
      <div className="App">
        <nav className="nav">
          <ul className="pl-0 pr-0 list-style-none">
            <li className="inline-block">
              React-intl Tools - Demos
              <span className="inline-block mx-10">|</span>
            </li>

            <li className="inline-block">
              <Link to="/">URL query string example</Link>
              <span className="inline-block mx-10">|</span>
            </li>

            <li className="inline-block">
              <Link to="/setlocale"><code>LocaleContext.setLocale()</code> example</Link>
              <span className="inline-block mx-10">|</span>
            </li>

            <li className="inline-block">
              <Link to="/locale-selector"><code>&lt;LocaleSelector&gt;</code> component example</Link>
            </li>

          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={UrlQsExample} />
          <Route path="/setlocale" component={SetLocaleExample} />
          <Route path="/locale-selector" component={LocaleSelectorExample} />
        </Switch>
      </div>
    </LocaleContextProvider>
  </BrowserRouter>
);


export default App;
