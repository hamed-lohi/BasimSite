import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// Importing translation files
import translationEN from "./en/translation.json";
import translationFA from "./fa/translation.json";
import translationTR from "./tr/translation.json";
//Creating object with the variables of imported translation files
const resources = {
  fa: {
    translation: translationFA,
  },
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};
//i18N Initialization
i18n.use(initReactI18next).init({
  resources,
  lng: "fa", //default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
