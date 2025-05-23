import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, f as createAstro } from '../chunks/astro/server_BuOuROhH.mjs';
import 'kleur/colors';
import { $ as $$NavBar, a as $$ContentContainer, b as $$Footer, c as $$ContentPartContainer, d as $$Grid21 } from '../chunks/Footer_kBiGusIf.mjs';
/* empty css                                 */
/* empty css                                   */
import { $ as $$ImageBoxContent } from '../chunks/ImageBoxContent_B1S-vuyA.mjs';
import { $ as $$Section } from '../chunks/Section_zykRl_Kh.mjs';
import { $ as $$RecaptchaLayout } from '../chunks/RecaptchaLayout_opJyVIGu.mjs';
export { renderers } from '../renderers.mjs';

const $$ContactPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "NavBar", $$NavBar, {})} ${renderComponent($$result, "ContentContainer", $$ContentContainer, { "style": "background-color: #e5e5e5; align-items: center; text-align: center;" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentPartContainer", $$ContentPartContainer, { "clazz": "limitedWidth center" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Section", $$Section, { "clazz": "center" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h1>Kontakt</h1> <p style="width: 100%;"> Masz pytania dotyczące szkoleń, praktyk lub programu mentorskiego? Napisz - wspólnie znajdziemy najlepszą ścieżkę dopasowaną do Twoich potrzeb. </p> <p style="width: 100%;"> Możesz śmiało skontaktować się, jeśli szukasz praktyk szkolnych, przygotowania do pracy w IT, konsultacji indywidualnych lub po prostu chcesz dopytać o szczegóły oferty. </p> <p style="width: 100%;"> Jesteś przedstawicielem szkoły lub firmy? Możemy nawiązać kontakt i rozpocząć współpracę. </p> ` })} ` })} ${renderComponent($$result2, "Section", $$Section, { "clazz": "sectionContainer center slanted", "style": "background-color: white;" }, { "default": ($$result3) => renderTemplate` <h1 class="mainHeader"> Formularz kontaktowy</h1> ${renderComponent($$result3, "Grid21", $$Grid21, {}, { "left": ($$result4) => renderTemplate`${renderComponent($$result4, "ImageBoxContent", $$ImageBoxContent, { "wrapperClass": "imageRight", "slot": "left", "imagePath": "../../../public/images/test/laptop.jpg", "lazyMeanColor": "#726d7e" }, { "default": ($$result5) => renderTemplate` <div class="fullWidthTileContent" style="text-align: center;"> <h1>Zgłoś chęć udziału w szkoleniu</h1> <p>Temat szkoleń Cię zainteresował? Chciałbyś odbyć darmową konsultację?</p> <a href="/form"><b>Zgłoś chęć udziału</b></a> </div> ` })}`, "right": ($$result4) => renderTemplate`${renderComponent($$result4, "ImageBoxContent", $$ImageBoxContent, { "slot": "right", "imagePath": "../../../public/images/test/laptop.jpg", "lazyMeanColor": "#726d7e" }, { "default": ($$result5) => renderTemplate` <div class="fullWidthTileContent" style="text-align: center;"> <h1>Mam pytania</h1> <p>Chciałbyś dowiedzieć się więcej? Masz propozycję szkolenia, którego nie widzisz na stronie?</p> <a href="/form?type=question"><b>Zadaj pytanie</b></a> </div> ` })}` })} ` })} ${renderComponent($$result2, "Section", $$Section, { "clazz": "sectionContainer center" }, { "default": ($$result3) => renderTemplate` <h1 class="mainHeader"> Partnerstwo </h1> ${renderComponent($$result3, "Grid21", $$Grid21, {}, { "left": ($$result4) => renderTemplate`${renderComponent($$result4, "ImageBoxContent", $$ImageBoxContent, { "wrapperClass": "imageRight", "slot": "left", "imagePath": "../../../public/images/test/laptop.jpg", "lazyMeanColor": "#726d7e" }, { "default": ($$result5) => renderTemplate` <div class="fullWidthTileContent" style="text-align: center;"> <h1>Placówka edukacyjna</h1> <p>Jesteś przedstawicielem szkoły? Twoja placówka potrzebuje praktyk powiązanych z informatyką dla uczniów?</p> <a href="/form?type=question"><b>Nawiąż kontakt</b></a> </div> ` })}`, "right": ($$result4) => renderTemplate`${renderComponent($$result4, "ImageBoxContent", $$ImageBoxContent, { "slot": "right", "imagePath": "../../../public/images/test/laptop.jpg", "lazyMeanColor": "#726d7e" }, { "default": ($$result5) => renderTemplate` <div class="fullWidthTileContent" style="text-align: center;"> <h1>Firma</h1> <p>Jesteś przedstawicielem firmy? Twoja firma potrzebuje nowych kandydatów, którzy poznali konkretne dziedziny?</p> <a href="/form?type=question"><b>Nawiąż kontakt</b></a> </div> ` })}` })} ` })} <div style="margin-bottom: 100px;"></div> ` })} ${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/PageContent/Contact/Contact/ContactPage.astro", void 0);

const $$Astro = createAstro();
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$RecaptchaLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactPage", $$ContactPage, {})} ` })}`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/pages/contact.astro", void 0);

const $$file = "C:/workspace/TutorialsPage/extinct-equator/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
