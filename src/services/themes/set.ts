import type { ETheme } from "$/components/shared/ui/theme/types";
import { StatusCodes } from "http-status-codes";

export async function setThemeToCookie(theme: ETheme): Promise<boolean> {
  try {
    const response = await fetch("/api/cookies/theme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ theme }),
    });

    if (response.status !== StatusCodes.OK) {
      console.warn(`Failed to set theme cookie: ${response.status}`);
      return false;
    }

    const data = await response.json();
    return data.theme === theme;
  } catch (error) {
    console.error("Error setting theme cookie:", error);
    return false;
  }
}
