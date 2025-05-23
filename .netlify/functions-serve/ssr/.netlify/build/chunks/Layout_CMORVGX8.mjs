import { e as createComponent, f as createAstro, r as renderTemplate, k as renderSlot, l as renderHead, h as addAttribute } from './astro/server_BuOuROhH.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                              */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>Astro Basics</title>", "</head> <body data-astro-cid-sckkx6r4> ", `  <script type="module" defer>
	function initCarouselsOnPage() {
		const carousels = document.querySelectorAll('[data-carousel-id]');
		carousels.forEach(carousel => {
			const id = carousel.dataset.carouselId;
			initCarouselLogic(id);
		});
	}

	initCarouselsOnPage();
<\/script></body></html>`])), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/workspace/TutorialsPage/extinct-equator/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
