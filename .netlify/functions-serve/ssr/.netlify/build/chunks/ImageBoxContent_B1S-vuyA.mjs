import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderSlot, r as renderTemplate } from './astro/server_BuOuROhH.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                           */

const $$Astro = createAstro();
const $$ImageBoxContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageBoxContent;
  const { imagePath, wrapperClass, lazyMeanColor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`imageBoxWrapper ${wrapperClass}`, "class")}> <div class="imageBoxContent"> ${renderSlot($$result, $$slots["default"])} </div> <div class="imageBoxImageContainer"> <img class="imageBoxImage"${addAttribute(`${imagePath}`, "src")} loading="lazy" decoding="async"${addAttribute(`background-color: ${lazyMeanColor}`, "style")}> </div> </div>`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/ImageBoxContent/ImageBoxContent.astro", void 0);

export { $$ImageBoxContent as $ };
