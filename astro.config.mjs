// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://howdiemickoski.com/",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.startsWith("/thanks/"), // Exclude /thanks/* from the sitemap
    }),
  ],
});
