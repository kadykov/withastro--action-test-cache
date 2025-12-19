// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://github.kadykov.com",
  base: "/withastro--action-test-cache",
  image: {
    domains: ["picsum.photos"],
  },
});
