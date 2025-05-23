import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BuOuROhH.mjs';
import 'kleur/colors';
import { $ as $$NavBar, a as $$ContentContainer, b as $$Footer, c as $$ContentPartContainer } from '../chunks/Footer_kBiGusIf.mjs';
/* empty css                                 */
/* empty css                                   */
import { $ as $$Section } from '../chunks/Section_zykRl_Kh.mjs';
import { $ as $$Layout } from '../chunks/Layout_CMORVGX8.mjs';
export { renderers } from '../renderers.mjs';

const $$Mentoring$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "NavBar", $$NavBar, {})} ${renderComponent($$result, "ContentContainer", $$ContentContainer, { "style": "background-color: #000000; align-items: center; text-align: center; color: white; height: 100vh; align-items: center;" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentPartContainer", $$ContentPartContainer, { "clazz": "limitedWidth center" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Section", $$Section, { "clazz": "center" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h1>Własna droga - program mentorski</h1> <p>Niebawem pojawi się tutaj kontent!</p> ` })} ` })} ` })} ${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/PageContent/Mentoring/Mentoring.astro", void 0);

const $$Mentoring = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MentoringPage", $$Mentoring$1, {})} ` })}`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/pages/mentoring.astro", void 0);

const $$file = "C:/workspace/TutorialsPage/extinct-equator/src/pages/mentoring.astro";
const $$url = "/mentoring";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Mentoring,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
