import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  getLocaleCurrency,
  getLocaleDateTimeLong,
  getLocaleDateTimeShort,
  getLocaleNumber,
} from "./formatter-utils";
import { resources } from "./language-resources";

const detectionOptions = {
  order: ["localStorage", "navigator", "querystring", "path"],
  lookupLocalStorage: "lang",
  lookupCookie: "lang",
};

const valueFormatter = (value, format, lng) => {
  switch (format) {
    case "number":
      return getLocaleNumber(lng, value);
    case "datetime":
      return getLocaleDateTimeShort(lng, value);
    case "datetimelong":
      return getLocaleDateTimeLong(lng, value);
    case "currency":
      return getLocaleCurrency(lng, value);
    default:
      return value;
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: detectionOptions,
    fallbackLng: "en-US",
    debug: true,
    interpolation: {
      escapeValue: false,
      format: valueFormatter,
    },
    ns: ["lang"],
  });

export default i18n;
