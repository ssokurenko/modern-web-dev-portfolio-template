// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ssokurenko.github.io',
  base: '/modern-web-dev-portfolio-template',
  vite: {
    plugins: [tailwindcss()]
  }
});