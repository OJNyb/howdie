// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ojnyb.github.io",
  base: "/howdie",
  integrations: [mdx(), sitemap()],
});
