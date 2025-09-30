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
      return false;
    }

    const data = await response.json();
    return data.theme === theme;
  } catch (error) {
    return false;
  }
}
