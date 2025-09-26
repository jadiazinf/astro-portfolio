import { EAppLanguages } from "$/i18n/types";
import type { TGetLocalesTranslations } from "./types";

export function getLocaleTranslations(): TGetLocalesTranslations {
  return {
    [EAppLanguages.ENGLISH]: {
      en: "English",
      es: "Spanish",
    },
    [EAppLanguages.SPANISH]: {
      en: "Inglés",
      es: "Español",
    },
  };
}
