// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: "server",
  integrations: [
    svelte(),
    sitemap({
      i18n: { locales: { en: "English", es: "Español" }, defaultLocale: "en" },
    }),
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: true },
  },

  site: "https://astro-portfolio-eight-rho.vercel.app",

  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },

  adapter: vercel({}),
});
