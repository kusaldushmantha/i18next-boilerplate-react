import enUS from "../locale/en_US/translations.json";
import frFR from "../locale/fr_FR/translations.json";
import deDE from "../locale/de_DE/translations.json";

export const resources = {
  "en-US": {
    lang: enUS,
  },
  "fr-FR": {
    lang: frFR,
  },
  "de-DE": {
    lang: deDE,
  },
};

export const locales = Object.keys(resources).map((key) => ({
  name: key,
  value: key,
}));

const currencyCodesMap = {
  "en-US": "USD",
  "fr-FR": "FRF",
  "de-DE": "EUR",
};

export const getCurrencyCode = (locale) => {
  if (currencyCodesMap[locale]) {
    return currencyCodesMap[locale];
  }
  return "USD";
};
