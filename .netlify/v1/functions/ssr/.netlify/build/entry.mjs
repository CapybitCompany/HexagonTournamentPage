import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DQIDbLPI.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/aboutme.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/e13subject.astro.mjs');
const _page4 = () => import('./pages/form.astro.mjs');
const _page5 = () => import('./pages/frontendandbackendsubject.astro.mjs');
const _page6 = () => import('./pages/frontendsubject.astro.mjs');
const _page7 = () => import('./pages/gamesubject.astro.mjs');
const _page8 = () => import('./pages/group.astro.mjs');
const _page9 = () => import('./pages/individual.astro.mjs');
const _page10 = () => import('./pages/mentoring.astro.mjs');
const _page11 = () => import('./pages/programmingsubject.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/aboutme.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/E13Subject.astro", _page3],
    ["src/pages/form.astro", _page4],
    ["src/pages/frontendAndBackendSubject.astro", _page5],
    ["src/pages/frontendSubject.astro", _page6],
    ["src/pages/gameSubject.astro", _page7],
    ["src/pages/group.astro", _page8],
    ["src/pages/individual.astro", _page9],
    ["src/pages/mentoring.astro", _page10],
    ["src/pages/programmingSubject.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7662bd42-7ffe-4701-9beb-f6253bba86b3"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
