import { default as i18n } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { enLang } from "./languages";
const { state } = JSON.parse(localStorage.getItem("locale-lang")!) ?? {
  state: {
    languageCode: "en",
  },
};
i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    lng: state.languageCode,
    resources: {
      en: {
        translation: {
          ...enLang,
        },
      },
    },
  });
export { i18n };
