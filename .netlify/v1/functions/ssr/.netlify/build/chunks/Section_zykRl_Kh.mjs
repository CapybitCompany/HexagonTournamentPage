import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderSlot, r as renderTemplate } from './astro/server_BuOuROhH.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                           */

const $$Astro = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { clazz, style } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`sectionContainer ${clazz}`, "class")}${addAttribute(`${style}`, "style")} data-astro-cid-5sr4fkl4> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/ContentContainer/Section.astro", void 0);

export { $$Section as $ };
