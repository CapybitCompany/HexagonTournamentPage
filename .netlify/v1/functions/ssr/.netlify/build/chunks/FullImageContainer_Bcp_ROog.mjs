import { e as createComponent, f as createAstro, r as renderTemplate, n as defineScriptVars, k as renderSlot, h as addAttribute, m as maybeRenderHead } from './astro/server_BuOuROhH.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$FullImageContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FullImageContainer;
  const { imagePath, imageLink, wrapperClass, imageClass, lazyMeanColor, wrapperStyle } = Astro2.props;
  var { id } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<div", "", "", '> <div class="imageWrapper"> <img', "", ' loading="lazy" decoding="async"', '> <a class="linkContainer"', '></a> </div> <div class="fullImageContent"> ', " </div> </div> <script>(function(){", `
    document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById(id).getElementsByClassName("fullImage")[0];
    console.log(id, img);
    if (img) {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
        img.onload = () => {
          img.classList.add('loaded');
        };
      }
    }
  });
  })();<\/script>`])), maybeRenderHead(), addAttribute(id, "id"), addAttribute(`fullImageWrapper ${wrapperClass}`, "class"), addAttribute(`${wrapperStyle}`, "style"), addAttribute(`fullImage ${imageClass}`, "class"), addAttribute(`${imagePath}`, "src"), addAttribute(`background-color: ${lazyMeanColor}`, "style"), addAttribute(`${imageLink}`, "href"), renderSlot($$result, $$slots["default"]), defineScriptVars({ id }));
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/FullImageContainer/FullImageContainer.astro", void 0);

export { $$FullImageContainer as $ };
