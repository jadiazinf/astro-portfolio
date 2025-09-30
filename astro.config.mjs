// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: "server",
  integrations: [svelte(), react()],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: true },
  },

  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },

  adapter: vercel(),
});