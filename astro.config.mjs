// @ts-check
import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    output: "server", // ważne, jeśli chcesz używać funkcji Netlify
    adapter: netlify(),
    site: 'https://capybit.pl',
    experimental: {
        session: true,
    },
    vite: {
        server: {
            allowedHosts: ['.ngrok-free.app'], // wildcard dopuszcza każdy tunel ngrok
        }
    },
    integrations: [
        sitemap({

        }),
  ],
});
