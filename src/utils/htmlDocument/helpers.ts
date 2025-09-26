import { ETheme } from "$/components/shared/ui/theme/types";

export function getHtmlThemeClass(): ETheme {
  return document.documentElement.classList.contains(ETheme.DARK)
    ? ETheme.DARK
    : ETheme.LIGHT;
}

export function setHtmlThemeClass(theme: ETheme) {
  document.documentElement.classList.toggle("dark", theme === ETheme.DARK);
}
