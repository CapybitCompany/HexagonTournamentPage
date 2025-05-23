import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, f as createAstro } from '../chunks/astro/server_BuOuROhH.mjs';
import 'kleur/colors';
import { $ as $$NavBar, a as $$ContentContainer, b as $$Footer, c as $$ContentPartContainer } from '../chunks/Footer_kBiGusIf.mjs';
/* empty css                                 */
/* empty css                                   */
import { C as CheckboxFilledSvg } from '../chunks/checkbox-filled_BQ9VozyM.mjs';
import { $ as $$Section } from '../chunks/Section_zykRl_Kh.mjs';
import { $ as $$RecaptchaLayout } from '../chunks/RecaptchaLayout_opJyVIGu.mjs';
export { renderers } from '../renderers.mjs';

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "NavBar", $$NavBar, {})} ${renderComponent($$result, "ContentContainer", $$ContentContainer, { "style": "background-color: #e5e5e5; align-items: center;" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "clazz": "sectionContainer center" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ContentPartContainer", $$ContentPartContainer, { "clazz": "limitedWidth center" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div style="margin: 10px; flex-direction: column;"> <h1>O mnie</h1> <p>
Od ponad 6 lat jestem związany z branżą IT — zarówno jako praktyk, jak i mentor. Przez ten czas miałem okazję pracować przy projektach frontendowych, backendowych,
                    integracjach systemów oraz wdrożeniach aplikacji dla klientów w Polsce i za granicą.
</p> <p>
Na co dzień poruszam się w technologiach takich jak JavaScript, React, TypeScript, Java (Spring) czy C#. Mam doświadczenie z bazami SQL i NoSQL, środowiskami
                    kontenerowymi (Kubernetes), integracjami (Apache Camel), a także narzędziami ORM (Hibernate). Pracowałem również z zagranicznymi 
                    zespołami, m.in. przy projekcie związanym z technologią OCR.
</p> <p>
Od kilku lat, oprócz codziennej pracy w IT, zajmuję się również edukacją. Prowadzę zajęcia praktyczne, indywidualne i grupowe, dla osób chcących wejść do branży
                    — zarówno uczniów techników, studentów, jak i dorosłych kandydatów na juniorów. Pomagam zrozumieć, jak naprawdę wygląda praca w IT, uczę praktycznych umiejętności,
                    których nie znajdzie się w podręcznikach. Wszystkie osoby, które dotąd przygotowywałem indywidualnie do pracy w branży, z sukcesem znalazły zatrudnienie.
</p> <p>
Szczególnie interesuję się edukacją nowoczesną — śledzę rozwiązania systemowe, takie jak fiński model edukacji, rozwój chmury edukacyjnej,
                    metody nauczania oparte na projektach i technikach samodzielnego rozwoju. Wierzę, że najlepsza nauka to ta, która odpowiada na realne
                    potrzeby — dlatego program każdego kursu dostosowuję do konkretnego człowieka i jego celów.
</p> <p>
Prywatnie jestem pasjonatem tworzenia gier w stylu retro. Tworzę projekty w Unity, SFML i LibGDX — od map proceduralnych, przez optymalizację kodu,
                    po gry mobilne i przeglądarkowe.
</p> <p>
Jeśli szukasz mentora, który przełoży wiedzę z branży na konkretne cele — własne projekty, certyfikaty, znalezienie pierwszej pracy — zapraszam do kontaktu.
</p> </div> ` })} ` })} <div style="width: 100%; position: relative;"> <div style="height: 50%; width: 100%; position: absolute; bottom: 0; background-color: white;"></div> ${renderComponent($$result2, "Section", $$Section, { "clazz": "sectionContainer center slanted", "style": "background-color: white;" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ContentPartContainer", $$ContentPartContainer, { "clazz": "limitedWidth center" }, { "default": ($$result4) => renderTemplate` <h2> Co mogę Ci zaproponować? </h2> <ul class="customList" style="display: flex; justify-content: center; flex-direction: column;"> <li class="customLi"><span class="marker"><span><div class="checkboxFilled">${unescapeHTML(CheckboxFilledSvg)}</div></span> <span>Indywidualne ścieżki nauki — dobry start w kierunku pracy w IT.</span></span></li> <li class="customLi"><span class="marker"><span><div class="checkboxFilled">${unescapeHTML(CheckboxFilledSvg)}</div></span> <span>Zajęcia grupowe w kameralnych zespołach (2-6 osób).</span></span></li> <li class="customLi"><span class="marker"><span><div class="checkboxFilled">${unescapeHTML(CheckboxFilledSvg)}</div></span> <span>Przygotowanie do egzaminów E12, E13, E14 i matury z informatyki.</span></span></li> <li class="customLi"><span class="marker"><span><div class="checkboxFilled">${unescapeHTML(CheckboxFilledSvg)}</div></span> <span>Projekty frontend, backend, fullstack i obiektowe.</span></span></li> <li class="customLi"><span class="marker"><span><div class="checkboxFilled">${unescapeHTML(CheckboxFilledSvg)}</div></span> <span>Konsultacje i mentoring przy Twoich projektach.</span></span></li> <li class="customLi"><span class="marker"><span><div class="checkboxFilled">${unescapeHTML(CheckboxFilledSvg)}</div></span> <span>Edukację opartą o realne potrzeby rynku.</span></span></li> </ul> ` })} ` })} <div style="margin-bottom: 100px;"></div> </div> ` })} ${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/PageContent/Contact/AboutMe/AboutMe.astro", void 0);

const $$Astro = createAstro();
const $$Aboutme = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Aboutme;
  return renderTemplate`${renderComponent($$result, "Layout", $$RecaptchaLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ` })}`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/pages/aboutme.astro", void 0);

const $$file = "C:/workspace/TutorialsPage/extinct-equator/src/pages/aboutme.astro";
const $$url = "/aboutme";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Aboutme,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
