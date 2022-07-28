import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enUS from "../locale/en_US/translations.json";
import frFR from "../locale/fr_FR/translations.json";

const resources = {
  "en-US": {
    lang: enUS,
  },
  "fr-FR": {
    lang: frFR,
  },
};

const detectionOptions = {
  order: ["localStorage", "navigator", "querystring", "path"],
  lookupLocalStorage: "lang",
  lookupCookie: "lang",
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
    },
    ns: ["lang"],
  });

export default i18n;
