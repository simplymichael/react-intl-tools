# React Intl Tools

A package that provides components to simplify working with `react-intl`.

Add internationalization and localization capabilities to your React app in 4 simple steps:

- Wrap your main app with the `react-intl-tools`' `<LocaleContextProvider>`
- Use `react-intl`'s APIs (`formatMessage()`, `<FormattedMessage />`, etc) as you would normally
- Extract and compile your messages with `formatjs`' `extract` and `compile` methods
- Call `react-intl-tools`' `setLocale()` method to update the language


# Table of Contents

- **[Installation](#installation)**
- **[Setup and usage](#setup-and-usage)**
    - **[Example setup](#example-setup)**
    - **[Using the built-in `LocaleSelector`](#using-the-built-in-localeselector)**
- **[Running the examples](#running-the-examples)**
- **[Contributing](#contributing)**
    - **[Report a bug](#report-a-bug)**
    - **[Request a new feature](#request-a-new-feature)**
    - **[Submit a pull request](#submit-a-pull-request)**
- **[License](#license)**
- **[Author](#author)**

## Installation
- `npm install react-intl-tools`

## Setup and usage
`react-intl-tools` comes with two main utilities:

- `LocaleContextProvider` is simply a wrapper around `<ReactIntl.Provider>` component.
   It takes two props:
    - `defaultLocale` a string that specifies the default locale to use
    - `translations` an object that contains the available translations
- `LocaleContext` provides a `locale` string and `setLocale(activeLocale)` method
  for working with the active (currently selected) locale.

Using `react-intl-tools` is as simple as:

- Wrapping your main app with the `LocaleContextProvider` and
- Calling the `setLocale()` method returned by `LocaleContext` to update (or switch) the locale.


### Example setup

```javascript
// File: app.js

import React from "react"
import { LocaleContext } from "react-intl-tools"

function App() {
  const { setLocale } = React.useContext(LocaleContext);

  return (
    <div>
      <nav>
        <select value="en" onChange={(e) => setLocale(e.target.value)}>
          <option value="">Select Language</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </nav>

      // Rest of app code goes here
    </div>
  )
}


// File: index.js

import ReactDOM from "react-dom"
import { LocaleContextProvider } from "react-intl-tools"
import App from "./app";

import en from "path/to/translations/en.json"
import fr from "path/to/translations/fr.json"
import de from "path/to/translations/de.json"

const translations = {
  en,
  fr,
  de,
}

ReactDOM.render(
  <LocaleContextProvider defaultLocale="en", translations={translations}>
    <App />
  </LocaleContextProvider>,
  document.getElementById("root")
)
```

### Using the built-in `LocaleSelector`

`react-intl-tools` also comes with a `<LocaleSelector>` dropdown component
that you can use in lieu of implementing your own locale switching mechanism.

If your locale switcher is going to be a dropdown (that is, a `<select>` element),
you can use the `LocaleSelector` component instead.

Let's re-write our `app.js` file from the previous example to use the `LocaleSelector` component.

```js
// File: app.js

import React from "react"
import { LocaleSelector } from "react-intl-tools"

const supportedLanguages = [
  { code: "en", name: "English" },
  { code: "fr", name: "French"  },
  { code: "de", name: "German"  },
];


function App() {
  return (
    <div>
      <nav>
        <LocaleSelector languages={supportedLanguages} selectorText="Choose language" />
      </nav>

      // Rest of app code goes here
    </div>
  )
}
```

## Running the examples
- Run `npm run examples`
- Navigate to *http://localhost:8080*

If you wish to use a different port, use webpack's `--port` option:
`npm run examples -- --port PORT`

## Contributing
- <a name="report-a-bug">[Report a bug][bug]</a>
- <a name="request-a-new-feature">[Request a new feature][fr]</a>
- <a name="submit-a-pull-request">[Submit a pull request][pr]</a>


## License
[MIT License][license]

## Author
[Simplymichael](https://github.com/simplymichael) ([simplymichaelorji@gmail.com](mailto:simplymichaelorji@gmail.com))


[pr]: https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
[fr]: https://github.com/simplymichael/react-intl-tools/labels/feature%20request
[bug]: https://github.com/simplymichael/react-intl-tools/labels/bug
[license]: https://github.com/simplymichael/react-intl-tools/blob/master/LICENSE.md
