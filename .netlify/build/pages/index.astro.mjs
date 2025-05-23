import { e as createComponent, i as renderComponent, j as renderScript, r as renderTemplate, m as maybeRenderHead, f as createAstro } from '../chunks/astro/server_BuOuROhH.mjs';
import 'kleur/colors';
import { $ as $$NavBar, a as $$ContentContainer, b as $$Footer, d as $$Grid21 } from '../chunks/Footer_kBiGusIf.mjs';
import { $ as $$ImageBoxContent } from '../chunks/ImageBoxContent_B1S-vuyA.mjs';
/* empty css                                   */
import { $ as $$FullImageContainer } from '../chunks/FullImageContainer_Bcp_ROog.mjs';
import { $ as $$Layout } from '../chunks/Layout_CMORVGX8.mjs';
export { renderers } from '../renderers.mjs';

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "NavBar", $$NavBar, {})} ${renderComponent($$result, "ContentContainer", $$ContentContainer, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FullImageContainer", $$FullImageContainer, { "id": "mainBanner", "imagePath": "../../public/images/Welcome/Welcome.jpg", "imageLink": "#", "wrapperClass": "blackBackground imageToRight banner", "imageClass": "fade-image" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="bannerContentContainer"> <h1 style="color: white">Praktyki/Szkolenia i rozwój w IT</h1> <p style="color: white">
Potrzebujesz praktyk?
</p> <p style="color: white">
Chcesz się rozwijać w wybranym kierunku pod okiem doświadczonego mentora?
</p> <p style="color: white">
Szkoła lub wiedza z internetu nie dają Ci poczucia kierunku, w którym chciałbyś się rozwijać?
</p> <button class="cfa" onclick="goToForm()">Zgłoś chęć udziału!</button> </div> ` })} ${renderComponent($$result2, "ImageBoxContent", $$ImageBoxContent, { "imagePath": "../../../public/images/Welcome/GroupCourseHome.jpg", "wrapperClass": "bottomGap", "lazyMeanColor": "#596872" }, { "default": ($$result3) => renderTemplate` <div class="fullWidthTileContent"> <h1>Praktyki/Szkolenia grupowe</h1> <h2> Marzy Ci się ucieczka od klasycznego systemu edukacji? </h2> <p style="font-size: 18px; text-align: center;"> Zadawaj pytania i ucz się w nowoczesny sposób w małych grupach! <br> Sprawdź sam!</p> <a href="/group"><b>Więcej informacji</b></a> </div> ` })} ${renderComponent($$result2, "ImageBoxContent", $$ImageBoxContent, { "imagePath": "../../../public/images/Welcome/IndividualCourseHome.jpg", "wrapperClass": "bottomGap imageRight", "lazyMeanColor": "#4d4f4f" }, { "default": ($$result3) => renderTemplate` <div class="fullWidthTileContent"> <h1>Praktyki/Szkolenia indywidualne</h1> <h2> Szkolenia, które Cię wyróżnią na rynku. Start, który odmieni Twoje życie!</h2> <p style="font-size: 18px; text-align: center;"> Posiadaj prywatnego mentora, który skupi się na twoim rozwoju. Program dostosuje się do Ciebie, a nie na odwrót! Poczuj różnicę w edukacji, która da Ci przewagę! </p> <a href="/individual"><b>Więcej informacji</b></a> </div> ` })} <h1 class="mainHeader">Szkolenie z tworzenia stron internetowych</h1> ${renderComponent($$result2, "Grid21", $$Grid21, {}, { "left": ($$result3) => renderTemplate`${renderComponent($$result3, "ImageBoxContent", $$ImageBoxContent, { "slot": "left", "imagePath": "../../../public/images/Welcome/FrontendSubjectHome.jpg", "lazyMeanColor": "#c3c1e6" }, { "default": ($$result4) => renderTemplate` <div class="fullWidthTileContent" style="text-align: center;"> <h1>Frontend</h1> <p>Szkolenie obejmuje tworzenia wizualnej części strony (Frontend), design stron, podstawy łączenia z innymi serwisami i obsługi danych.</p> <a href="/frontendSubject"><b>Więcej informacji</b></a> </div> ` })}`, "right": ($$result3) => renderTemplate`${renderComponent($$result3, "ImageBoxContent", $$ImageBoxContent, { "slot": "right", "imagePath": "../../../public/images/Welcome/FullstackSubjectHome.jpg", "lazyMeanColor": "#dcc5ea" }, { "default": ($$result4) => renderTemplate` <div class="fullWidthTileContent" style="text-align: center;"> <h1>Frontend + Backed = Fullstack</h1> <p>Szkolenie obejmuje tworzenie wizaulnej części strony (Frontend) oraz tworzenie logiki po stronie serwera (backend). Twórz własne serwisy i całe aplikacje webowe.</p> <a href="/frontendAndBackendSubject"><b>Więcej informacji</b></a> </div> ` })}` })} <h1 class="mainHeader">Inne szkolenia</h1> ${renderComponent($$result2, "ImageBoxContent", $$ImageBoxContent, { "imagePath": "../../../public/images/Welcome/GameSubjectHome.jpg", "wrapperClass": "bottomGap imageRight", "lazyMeanColor": "#114283" }, { "default": ($$result3) => renderTemplate` <div class="fullWidthTileContent" style="text-align: center;"> <h1>Tworzenie gier</h1> <p>Zgłębiaj temat tworzenia gier, optymalizacji kodu, generowania map i aspektu wizualnego. Spełnij marzenie o stworzeniu własnej gry!</p> <a href="/gameSubject"><b>Więcej informacji</b></a> </div> ` })} ${renderComponent($$result2, "Grid21", $$Grid21, {}, { "left": ($$result3) => renderTemplate`${renderComponent($$result3, "ImageBoxContent", $$ImageBoxContent, { "slot": "left", "imagePath": "../../../public/images/Welcome/ProgrammingSubjectHome.jpg", "lazyMeanColor": "#c1c0c4" }, { "default": ($$result4) => renderTemplate` <div class="fullWidthTileContent" style="text-align: center;"> <h1>Nauka programowania</h1> <p>Programowanie obiektowe Java/C# nie musi być trudne. Poznaj metody pisania czystego kodu. Przygotuj projekt, który możesz rozwijać latami, małymi modułami!</p> <a href="/programmingSubject"><b>Więcej informacji</b></a> </div> ` })}`, "right": ($$result3) => renderTemplate`${renderComponent($$result3, "ImageBoxContent", $$ImageBoxContent, { "slot": "right", "imagePath": "../../../public/images/Welcome/E13SubjectHome.jpg", "lazyMeanColor": "#c3d6ec" }, { "default": ($$result4) => renderTemplate` <div class="fullWidthTileContent" style="text-align: center;"> <h1>Przygotowanie do egzaminów E13 / E14 / Matury z informatyki</h1> <p> Egzaminy zawodowe i matura z informatyki nie muszą być trudne. Przygotuj się teraz a zdobytą wiedzę przełóż na własne projekty i rozwój!</p> <a href="/E13Subject"><b>Więcej informacji</b></a> </div> ` })}` })} ${renderComponent($$result2, "FullImageContainer", $$FullImageContainer, { "id": "mainBanner", "imagePath": "../../../public/images/Welcome/MentoringHome.jpg", "imageLink": "#", "wrapperClass": "imageToRight", "wrapperStyle": "background-color: #0d0d0d;" }, { "default": ($$result3) => renderTemplate` <div class="bannerContentContainer"> <h1 style="color: white">Własna droga - program mentorki</h1> <p style="color: white">
Chciałbyś realizować długoterminowy plan rozwoju pod okiem doświadczonego metora w rozsądnej cenie?
</p> <p style="color: white">
Masz własny pomysł na siebie?
</p> <button class="cfa" onclick="goToMentoring()"> Dowiedz się więcej...</button> </div> ` })} <div style="margin-bottom: 100px;"></div> ` })} ${renderComponent($$result, "Footer", $$Footer, {})}  ${renderScript($$result, "C:/workspace/TutorialsPage/extinct-equator/src/components/Welcome.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/Welcome.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, {})} ` })}`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/pages/index.astro", void 0);

const $$file = "C:/workspace/TutorialsPage/extinct-equator/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
