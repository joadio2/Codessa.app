// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["es", "en", "pt"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  site: "https://joadio2.github.io/",
  base: "/Codessa.app",

  integrations: [react(), icon()],
});
