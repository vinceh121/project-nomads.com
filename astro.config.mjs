// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "de", "fr", "it", "ru", "cz"],
    defaultLocale: "en",
    routing: "manual",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          de: "de-DE",
          fr: "fr-FR",
          it: "it-IT",
          ru: "ru-RU",
          cz: "cz-CZ",
        },
      },
    }),
  ],

  site: "https://project-nomads.com",
});
