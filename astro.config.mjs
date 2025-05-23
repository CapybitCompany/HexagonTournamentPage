// @ts-check
import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
    output: "server", // ważne, jeśli chcesz używać funkcji Netlify
    adapter: netlify(),
    experimental: {
        session: true,
    },
    vite: {
        server: {
            allowedHosts: ['.ngrok-free.app'], // wildcard dopuszcza każdy tunel ngrok
        }
    }
});
