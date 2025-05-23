import { e as createComponent, f as createAstro, r as renderTemplate, k as renderSlot, l as renderHead, h as addAttribute } from './astro/server_BuOuROhH.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                           */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$RecaptchaLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RecaptchaLayout;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-ydptmgra> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><title>Astro Basics</title><script src="https://www.google.com/recaptcha/api.js"><\/script>', "</head> <body data-astro-cid-ydptmgra> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/workspace/TutorialsPage/extinct-equator/src/layouts/RecaptchaLayout.astro", void 0);

export { $$RecaptchaLayout as $ };
