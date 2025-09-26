import { EThemeEnum } from "$/components/shared/ui/theme/types";

export function getHtmlThemeClass(): EThemeEnum {
  return document.documentElement.classList.contains(EThemeEnum.DARK)
    ? EThemeEnum.DARK
    : EThemeEnum.LIGHT;
}

export function setHtmlThemeClass(theme: EThemeEnum) {
  document.documentElement.classList.toggle("dark", theme === EThemeEnum.DARK);
}
