import { E as ETheme, T as THEME_NAME } from '../../../chunks/types_mIFp1dTE.mjs';
import { StatusCodes } from 'http-status-codes';
export { r as renderers } from '../../../chunks/_@astro-renderers_DY5zhuKj.mjs';

const prerender = false;
const POST = async ({ request, cookies }) => {
  const { theme } = await request.json();
  if (theme !== ETheme.LIGHT && theme !== ETheme.DARK) {
    return new Response(JSON.stringify({ message: "Bad request" }), {
      status: StatusCodes.BAD_REQUEST,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  cookies.set(THEME_NAME, theme, {
    httpOnly: true,
    // Recommended for security to prevent client-side JavaScript access
    secure: true,
    // Recommended for production to ensure cookie is only sent over HTTPS
    sameSite: "lax",
    // Controls when cookies are sent with cross-site requests
    path: "/",
    // Makes the cookie available across the entire site
    maxAge: 60 * 60 * 24 * 7
    // Cookie expires in 7 days
  });
  return new Response(JSON.stringify({ theme }), {
    status: StatusCodes.OK,
    headers: {
      "Content-Type": "application/json"
    }
  });
};
const GET = async ({ request }) => {
  const cookieHeader = request.headers.get("cookie");
  const cookies = Object.fromEntries(
    cookieHeader?.split("; ").map((c) => c.split("=")) ?? []
  );
  const themeValue = cookies[THEME_NAME] === ETheme.DARK ? ETheme.DARK : ETheme.LIGHT;
  return new Response(JSON.stringify({ theme: themeValue }), {
    status: StatusCodes.OK,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
