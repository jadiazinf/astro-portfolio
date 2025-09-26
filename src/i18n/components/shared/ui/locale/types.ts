import type { EAppLanguages } from "$/i18n/types";

export type TLocalesTranslations = Record<EAppLanguages, string>;

export type TGetLocalesTranslations = Record<
  EAppLanguages,
  TLocalesTranslations
>;
