import { EThemeEnum, THEME_NAME } from "$/components/shared/ui/theme/types";

export function getThemeFromCookie(request?: Request): EThemeEnum {
  if (typeof window !== "undefined") {
    const cookies = Object.fromEntries(
      document.cookie.split("; ").map((c) => c.split("="))
    );
    return cookies[THEME_NAME] === EThemeEnum.DARK
      ? EThemeEnum.DARK
      : EThemeEnum.LIGHT;
  }

  if (request) {
    console.log("la cookie", request.headers.get("cookie"));
    const cookieHeader = request.headers.get("cookie");
    const cookies = Object.fromEntries(
      cookieHeader?.split("; ").map((c) => c.split("=")) ?? []
    );
    return cookies[THEME_NAME] === EThemeEnum.DARK
      ? EThemeEnum.DARK
      : EThemeEnum.LIGHT;
  }

  return EThemeEnum.LIGHT;
}
