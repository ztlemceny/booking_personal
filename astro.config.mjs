import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ztlemceny.github.io',
  base: '/booking_personal',
  integrations: [tailwind()],
  output: 'static',
});
