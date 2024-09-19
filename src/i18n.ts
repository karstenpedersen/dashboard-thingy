import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const defaultNS = "common";
export const resources = {
  en: {
    common: {
      routes: {
        home: {
          title: "Home",
          description: "Home sweet home.",
        },
        settings: {
          title: "Settings",
          description: "Cool settings.",
        },
      },
    },
    home: {
      guide: "This is how you use it",
    },
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["common", "home"],
  defaultNS,
  resources,
});
