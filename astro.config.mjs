import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.goodneys.com",
  //base: "/goodneys-landing",
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  buildOptions: {
    baseUrl: "https://www.goodneys.com", 
  },
});