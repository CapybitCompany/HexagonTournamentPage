import { e as createComponent, i as renderComponent, j as renderScript, r as renderTemplate, m as maybeRenderHead, f as createAstro } from '../chunks/astro/server_BuOuROhH.mjs';
import 'kleur/colors';
import { $ as $$NavBar, a as $$ContentContainer, b as $$Footer, c as $$ContentPartContainer } from '../chunks/Footer_kBiGusIf.mjs';
/* empty css                                 */
/* empty css                                   */
/* empty css                                */
import { $ as $$RecaptchaLayout } from '../chunks/RecaptchaLayout_opJyVIGu.mjs';
export { renderers } from '../renderers.mjs';

const $$FormPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "NavBar", $$NavBar, {})} ${renderComponent($$result, "ContentContainer", $$ContentContainer, { "style": "background-color: #e5e5e5; align-items: center;" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentPartContainer", $$ContentPartContainer, { "clazz": "limitedWidth center" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>Formularz kontaktowy</h1> <p style="text-align: center;">Jeżeli posiadasz pytania, śmiało zadaj je przez ten formularz!</p> <p style="text-align: center;">Wysłanie formularza nie zobowiązuje do udziału w praktykach. Umów się na darmową konsultację lub rozmowę wstępną!</p> <form id="mainForm" method="POST" class="max-w-xl mx-auto space-y-6 bg-white p-6 rounded-xl shadow-md"> <div class="fieldRow"> <label for="courseType" class="block font-medium mb-1">Preferowany typ szkolenia*</label> <select id="courseType" name="courseType" class="w-full border rounded p-2" onchange="handleCorseTypeChange(event)"></select> </div> <div class="fieldRow" id="courseSubjectWrapper"> <label for="courseSubject" class="block font-medium mb-1">Preferowana tematyka szkolenia*</label> <select id="courseSubject" name="courseSubject" class="w-full border rounded p-2"></select> </div> <div class="fieldRow" id="courseTimeWrapper"> <label for="courseTime" class="block font-medium mb-1">Preferowany czas trwania kursu*</label> <select id="courseTime" name="courseTime" class="w-full border rounded p-2"></select> </div> <div class="fieldRow"> <label for="name" class="block font-medium mb-1">Imię i nazwisko*</label> <input type="text" id="name" name="name" required class="w-full border rounded p-2"> </div> <div class="fieldRow"> <label for="email" class="block font-medium mb-1">Kontaktowy adres e-mail</label> <input type="email" id="email" name="email" class="w-full border rounded p-2"> </div> <div class="fieldRow"> <label for="number" class="block font-medium mb-1">Kontaktowy numer telefonu</label> <input id="number" name="number" class="w-full border rounded p-2"> </div> <p>
* Wymagane jest podanie <strong>adresu e-mail lub numeru telefonu</strong>.
</p> <div class="fieldRow"> <label for="additional" class="block font-medium mb-1">Pytania i wiadomość do mentora</label> <textarea id="additional" name="additional" rows="5" class="w-full border rounded p-2" placeholder="Miejsce na pytania, temat kontaktu ze szkołą lub rodzicem, godziny dostępności w przypadku podania numeru telefonu i inne informacje, które mentor powinien poznać przed rozmową."></textarea> </div> <div class="fieldRow"> <button class="g-recaptcha" data-sitekey="6LfIJjkrAAAAAMsx9pLM7bM0nOgKkkZrUXMK7PMV" data-callback="validateReCaptchaForm" data-action="submit">
Wyślij zgłoszenie
</button> </div> </form> ` })} ` })} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "C:/workspace/TutorialsPage/extinct-equator/src/components/PageContent/FormPage/FormPage.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/PageContent/FormPage/FormPage.astro", void 0);

const $$Astro = createAstro();
const $$Form = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Form;
  return renderTemplate`${renderComponent($$result, "Layout", $$RecaptchaLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormPage", $$FormPage, {})} ` })}`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/pages/form.astro", void 0);

const $$file = "C:/workspace/TutorialsPage/extinct-equator/src/pages/form.astro";
const $$url = "/form";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Form,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
