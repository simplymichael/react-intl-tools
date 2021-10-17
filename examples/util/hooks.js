import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";

// A custom hook that builds on useLocation to parse the query string.
// Cf. https://reactrouter.com/web/example/query-parameters
export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function useSupportedLanguages() {
  const { formatMessage } = useIntl();
  const languages = [
    {
      code: "en",
      name: formatMessage({
        defaultMessage: "English",
        description: "Language: english",
      })
    },
    {
      code: "en-GB",
      name: formatMessage({
        defaultMessage: "British English",
        description: "Language: british-english",
      })
    },
    {
      code: "en-US",
      name: formatMessage({
        defaultMessage: "American English",
        description: "Language: american-english",
      })
    },
    {
      code: "fr",
      name: formatMessage({
        defaultMessage: "French",
        description: "Language: french",
      })
    },
    {
      code: "de",
      name: formatMessage({
        defaultMessage: "German",
        description: "Language: german",
      })
    },
    {
      code: "it",
      name: formatMessage({
        defaultMessage: "Italian",
        description: "Language: italian",
      })
    },
    {
      code: "ru",
      name: formatMessage({
        defaultMessage: "Russian",
        description: "Language: russian",
      })
    },
  ];

  return languages;
}
