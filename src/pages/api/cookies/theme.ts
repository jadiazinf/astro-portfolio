import type { APIRoute } from "astro";
import { ETheme, THEME_NAME } from "$/components/shared/ui/theme/types";
import { StatusCodes } from "http-status-codes";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  const { theme } = await request.json();

  if (theme !== ETheme.LIGHT && theme !== ETheme.DARK) {
    return new Response(JSON.stringify({ message: "Bad request" }), {
      status: StatusCodes.BAD_REQUEST,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  cookies.set(THEME_NAME, theme, {
    httpOnly: true, // Recommended for security to prevent client-side JavaScript access
    secure: true, // Recommended for production to ensure cookie is only sent over HTTPS
    sameSite: "lax", // Controls when cookies are sent with cross-site requests
    path: "/", // Makes the cookie available across the entire site
    maxAge: 60 * 60 * 24 * 7, // Cookie expires in 7 days
  });

  return new Response(JSON.stringify({ theme }), {
    status: StatusCodes.OK,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const GET: APIRoute = async ({ request }) => {
  const cookieHeader = request.headers.get("cookie");
  const cookies = Object.fromEntries(
    cookieHeader?.split("; ").map((c) => c.split("=")) ?? []
  );

  const themeValue =
    cookies[THEME_NAME] === ETheme.DARK ? ETheme.DARK : ETheme.LIGHT;

  return new Response(JSON.stringify({ theme: themeValue }), {
    status: StatusCodes.OK,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
