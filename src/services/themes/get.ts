import { ETheme, THEME_NAME } from "$/components/shared/ui/theme/types";

export function getThemeFromCookie(request?: Request): ETheme {
  if (typeof window !== "undefined") {
    const cookies = Object.fromEntries(
      document.cookie.split("; ").map((c) => c.split("="))
    );
    return cookies[THEME_NAME] === ETheme.DARK ? ETheme.DARK : ETheme.LIGHT;
  }

  if (request) {
    const cookieHeader = request.headers.get("cookie");
    const cookies = Object.fromEntries(
      cookieHeader?.split("; ").map((c) => c.split("=")) ?? []
    );
    return cookies[THEME_NAME] === ETheme.DARK ? ETheme.DARK : ETheme.LIGHT;
  }

  return ETheme.LIGHT;
}
