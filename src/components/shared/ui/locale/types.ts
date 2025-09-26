import type { EAppLanguages } from "$/i18n/types";

export type TChangeLocaleButtonProps = {
  currentLang: EAppLanguages;
  currentPath: string;
};

export type TAppLanguagesArr = {
  lang: EAppLanguages;
  label: string;
}[];
