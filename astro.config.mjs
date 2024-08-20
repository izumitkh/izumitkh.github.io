import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [tailwind(), icon(), compress()],
  site: 'https://izumitkh.github.io',
});