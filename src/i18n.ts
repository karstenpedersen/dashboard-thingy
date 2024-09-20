import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en";

export const defaultNS = "common";
export const resources = {
  en,
} as const;

i18next.use(initReactI18next).init({
  lng: "en",
  ns: ["common", "home", "signin"],
  defaultNS,
  resources,
  interpolation: { escapeValue: false },
});
