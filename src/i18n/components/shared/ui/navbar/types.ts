import type { EAppLanguages } from "$i18n/types";

export type TNavbarTranslationKey =
  | "about"
  | "contact"
  | "experience"
  | "projects"
  | "skills";

export type TNavbarTranslations = Record<TNavbarTranslationKey, string>;

export type TGetNavbarTranslations = Record<EAppLanguages, TNavbarTranslations>;
