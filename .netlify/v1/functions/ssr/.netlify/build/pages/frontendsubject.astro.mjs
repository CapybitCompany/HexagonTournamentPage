import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, j as renderScript, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_BuOuROhH.mjs';
import 'kleur/colors';
/* empty css                                 */
/* empty css                                           */
/* empty css                                   */
/* empty css                                 */
import { C as CheckboxFilledSvg } from '../chunks/checkbox-filled_BQ9VozyM.mjs';
import { $ as $$NavBar, a as $$ContentContainer, b as $$Footer, c as $$ContentPartContainer } from '../chunks/Footer_kBiGusIf.mjs';
import { $ as $$FullImageContainer } from '../chunks/FullImageContainer_Bcp_ROog.mjs';
import { $ as $$SimpleDataTable, a as $$Documents } from '../chunks/SimpleDataTable_CxSpuS96.mjs';
import { $ as $$Carousel, a as $$CarouselElement, b as $$CarouselElementLayout } from '../chunks/Carousel_BjTnDXFl.mjs';
import { $ as $$Section } from '../chunks/Section_zykRl_Kh.mjs';
import { $ as $$ImageBoxContent } from '../chunks/ImageBoxContent_B1S-vuyA.mjs';
import { $ as $$Layout } from '../chunks/Layout_CMORVGX8.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$FrontentCourseTable = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FrontentCourseTable;
  const columns = [
    { label: "Modu\u0142 / Temat" },
    { label: "Zawarto\u015B\u0107" },
    { label: "90h" },
    { label: "140h" },
    { label: "320h" }
  ];
  const rows = [
    {
      cells: [
        "1. Wst\u0119p do webdev, organizacja pracy w firmach i repozytorium Github",
        "Przedstawienie zakresu kursu, wyja\u015Bnienie poj\u0119\u0107 jak frontend, backend, fullstack, pierwsza strona HTML, narz\u0119dzia (edytor, przegl\u0105darki, DevTools), Github, metodologia pracy SCRUM, pytania do mentora o rynek pracy i prac\u0119 w firmie",
        "1",
        "1",
        "1"
      ]
    },
    {
      cells: [
        "2. HTML5 i CSS3 (Flexbox i responsywno\u015B\u0107 od startu",
        "Struktura dokumentu, elementy semantyczne, typografia, selektory CSS, Flex i jak szuka\u0107 informacji",
        "1",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "3. CSS od podstaw",
        "Selektory, box-model, kaskada, pseudoklasy, pisanie w\u0142asnych styl\xF3w (bez framework\xF3w), obs\u0142uga r\xF3\u017Cnych rozdzielczo\u015Bci",
        "1",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "4. Kompozycja i UX/UI",
        "Zasady uk\u0142adu, koloru, typografii, design system, podstawy projektowania",
        "1",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "5. JavaScript - fundamenty",
        "Zmienne, funkcje, DOM, zdarzenia, asynchroniczno\u015B\u0107 (Promise/async-await), dodawanie multimedi\xF3w (wideo, audio)",
        "1",
        "1",
        " 2"
      ]
    },
    {
      cells: [
        "6. Teoria renderowania (CSR, SSR, SSG)",
        "Om\xF3wienie podej\u015B\u0107 do renderowania, por\xF3wnanie zalet i wad",
        "1",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "7. Frameworki: React + Astro",
        "90h: kr\xF3tkie wprowadzenie do React i Astro | 140h: budowa prostych aplikacji (komponenty, routing) | 320h: zaawansowane techniki, zarz\u0105dzanie stanem, integracja z pakietami, CI",
        "0.5",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "8. REST API",
        "HTTP, AJAX/Fetch, JSON, konsumpcja API, CORS, pod\u0142\u0105czanie p\u0142atno\u015Bci do strony (sandbox PayPal)",
        "0",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "9. Wst\u0119p do backendu",
        "90h: Next.js (API routes) | 140h: Next.js deeper dive + PHP | 320h: Java Spring Boot \u201Ehello world\u201D, deploy",
        "0",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "10. SEO, analityka i prawo",
        "SEO on-page, Google Analytics, RODO, cookies, regulaminy",
        "0.5",
        "0.5",
        "1"
      ]
    },
    {
      cells: [
        "11. Mobilne UX/UI",
        "Adaptacja interfejsu na urz\u0105dzenia mobilne, dotykowe wzorce nawigacji",
        "0.5",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "12. Deployment & sie\u0107",
        "Netlify/Vercel, GitHub Pages, hosting, DNS, domeny, certyfikaty SSL",
        "0.5",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "13. Optymalizacja & testowanie",
        "Lazy loading zasob\xF3w (obrazy, wideo), minifikacja, tree-shaking, Lighthouse; testy jednostkowe (Jest), e2e (Cypress)",
        " 0",
        "0.5",
        "2"
      ]
    },
    {
      cells: [
        "Suma webinar\xF3w",
        "",
        " 8",
        "12",
        "24"
      ]
    },
    {
      cells: [
        "Przwidziany dodatkowy indywidualny czaspracy z mentorem dla ka\u017Cdej osoby (Szkolenie grupowe)",
        "Czas na pomoc; indywidualne om\xF3wienie projektu czy przekazanie ponadprogramowej wiedzy.",
        " 2h",
        "4h",
        "7h"
      ]
    },
    {
      cells: [
        "Przwidziany dodatkowy indywidualny czas z mentorem (Szkolenie indywidualne)",
        "Czas na pomoc; indywidualne om\xF3wienie projektu czy przekazanie ponadprogramowej wiedzy.",
        " 6h",
        "10h",
        "15h"
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "SimpleDataTable", $$SimpleDataTable, { "columns": columns, "rows": rows })}`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/PageContent/Subjects/Frontend/FrontentCourseTable.astro", void 0);

const $$FrontendSubjectPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-lg2mgpgx": true })} ${renderComponent($$result, "ContentContainer", $$ContentContainer, { "style": "background-color: #e5e5e5", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FullImageContainer", $$FullImageContainer, { "id": "mainBanner", "imagePath": "../../public/images/Subjects/Frontend/Banner.jpg", "imageLink": "#", "wrapperClass": "blackBackground imageToRight noCorrection", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="bannerContentContainer" data-astro-cid-lg2mgpgx> <h1 style="color: white" data-astro-cid-lg2mgpgx>Tworzenie stron internetowych - Frontend</h1> <p style="color: white" data-astro-cid-lg2mgpgx>
Odpowiednie szkolenia dla uczniów i studentów szukających praktyk.
                Poznaj praktyczną edukację, jakiej nie oferuje klasyczny system nauczania!
</p> <button class="cfa" onclick="goToForm()" data-astro-cid-lg2mgpgx>Zgłoś chęć udziału!</button> </div> ` })} <section style="width: 100%; display: flex; flex-direction: column; align-items: center; padding: 10px 10px; box-sizing: border-box; text-align: center;" data-astro-cid-lg2mgpgx> <h2 data-astro-cid-lg2mgpgx>Program szkoleń</h2> ${renderComponent($$result2, "ContentPartContainer", $$ContentPartContainer, { "clazz": "limitedWidth center", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-lg2mgpgx>Poniżej przedstawiona została tabela z programem szkoleniowym. Każdy wariant godzinowy szkolenia przewiduje określoną liczbę webinarów (spotkań w celu przekazania wiedzy teoretycznej) do danego zagadnienia. </p> <div style="width: 100%; overflow-x: auto; box-sizing: border-box;" data-astro-cid-lg2mgpgx> ${renderComponent($$result3, "FrontentCourseTable", $$FrontentCourseTable, { "data-astro-cid-lg2mgpgx": true })} </div> <p style="font-size: 14px;" data-astro-cid-lg2mgpgx>*0.5 - oznacza, że połowa spotkania jest przeznaczona na dany temat.</p> ` })} </section> ${renderComponent($$result2, "Section", $$Section, { "clazz": "sectionContainer center slanted", "style": "background-color: white; text-align: center;", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ContentPartContainer", $$ContentPartContainer, { "clazz": "limitedWidth center", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result4) => renderTemplate` <h2 data-astro-cid-lg2mgpgx>Harmonogram pracy</h2> <h3 data-astro-cid-lg2mgpgx>Szkolenia grupowe</h3> <p data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Szkolenie 90h - </b> 2 spotkania tygodniowo przez 4 tygodnie. </p> <p data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Szkolenie 140h - </b> 3 spotkania tygodniowo przez 4 tygodnie. </p> <p data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Szkolenie 320h - </b> 2 spotkania tygodniowo przez 12 tygodni. </p> <p data-astro-cid-lg2mgpgx>Każde spotkanie trwa 90 minut. Dni spotkań ustalane są wspólnie. Możliwe terminy obejmuje poniższy terminarz:</p> <div class="terms" data-astro-cid-lg2mgpgx> <p data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Poniedziałek - </b> 17:00-20:00</p> <p data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Wtorek - </b> 16:00-20:00</p> <p data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Środa - </b> 16:00-18:00</p> <p data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Czwartek - </b> 17:00-20:00</p> <p data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Piątek - </b> 16:00-19:00</p> <p data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Sobota - </b> 10:00-13:00</p> </div> <h3 data-astro-cid-lg2mgpgx>Szkolenia indywidualne</h3> <p style="text-align: center;" data-astro-cid-lg2mgpgx>Szablon spotkań jest analogiczny jak dla szkoleń grupowych. Elastyczność doboru godzin i dni jest znacznie większa. Można zmienić dzień i godzinę szkolenia w razie potrzeby.</p> ` })} ` })} ${renderComponent($$result2, "Section", $$Section, { "clazz": "sectionContainer center slanted", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ContentPartContainer", $$ContentPartContainer, { "clazz": "limitedWidth center", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result4) => renderTemplate` <h2 data-astro-cid-lg2mgpgx>Zadania praktyczne</h2> <ul class="customList" style="display: flex; justify-content: center; flex-direction: column;" data-astro-cid-lg2mgpgx> <li class="customLi" data-astro-cid-lg2mgpgx><span class="marker" data-astro-cid-lg2mgpgx><span data-astro-cid-lg2mgpgx><div class="checkboxFilled" data-astro-cid-lg2mgpgx>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-lg2mgpgx>Do każdego tematu przygotowany jest zbiór zadań praktycznych.</span></span></li> <li class="customLi" data-astro-cid-lg2mgpgx><span class="marker" data-astro-cid-lg2mgpgx><span data-astro-cid-lg2mgpgx><div class="checkboxFilled" data-astro-cid-lg2mgpgx>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-lg2mgpgx>Uczestnik wykonuje powierzone zadania praktyczne i wysyła rezultaty do określonego terminu.</span></span></li> <li class="customLi" data-astro-cid-lg2mgpgx><span class="marker" data-astro-cid-lg2mgpgx><span data-astro-cid-lg2mgpgx><div class="checkboxFilled" data-astro-cid-lg2mgpgx>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-lg2mgpgx>Uczestnicy zajęć grupowych zachęcani są do współpracy przy wykonywaniu zadań.</span></span></li> <li class="customLi" data-astro-cid-lg2mgpgx><span class="marker" data-astro-cid-lg2mgpgx><span data-astro-cid-lg2mgpgx><div class="checkboxFilled" data-astro-cid-lg2mgpgx>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-lg2mgpgx>Mentor może wesprzeć grupę lub indywidualnie uczestnika przy problemach z wykonaniem zadań.</span></span></li> <li class="customLi" data-astro-cid-lg2mgpgx><span class="marker" data-astro-cid-lg2mgpgx><span data-astro-cid-lg2mgpgx><div class="checkboxFilled" data-astro-cid-lg2mgpgx>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-lg2mgpgx>Wiele ćwiczeń posiada formę prawdziwego projektu, w którym należy dodać nową funkcjonalność lub poprawić błąd. Odwzorowuje to realne warunki pracy.</span></span></li> <li class="customLi" data-astro-cid-lg2mgpgx><span class="marker" data-astro-cid-lg2mgpgx><span data-astro-cid-lg2mgpgx><div class="checkboxFilled" data-astro-cid-lg2mgpgx>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-lg2mgpgx>W przypadku zajęć indywidualnych - zadania są na bieżąco tworzone w celu rozbudowy indywidualnego projektu uczestnika do swojego portfolio.</span></span></li> </ul> ` })} ` })} ${renderComponent($$result2, "ImageBoxContent", $$ImageBoxContent, { "wrapperClass": "imageRight", "imagePath": "../../../public/images/Subjects/Frontend/Requirements.jpg", "lazyMeanColor": "#726d7e", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Section", $$Section, { "clazz": "center", "style": "flex: 1; justify-content: center;", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result4) => renderTemplate` <h2 data-astro-cid-lg2mgpgx>Wymagania</h2> <ul class="customList" style="display: flex; justify-content: center; flex-direction: column;" data-astro-cid-lg2mgpgx> <li class="customLi" data-astro-cid-lg2mgpgx><span class="marker" data-astro-cid-lg2mgpgx><span data-astro-cid-lg2mgpgx><div class="checkboxFilled" data-astro-cid-lg2mgpgx>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-lg2mgpgx>Zainstalowany komunikator <a href="https://discord.com" style="color: black;" data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Discord</b></a> i dołączenie do wskazanego przez mentora serwera. Wymagany jest <b data-astro-cid-lg2mgpgx>mikrofon</b> do rozmów głosowych.</span></span></li> <li class="customLi" data-astro-cid-lg2mgpgx><span class="marker" data-astro-cid-lg2mgpgx><span data-astro-cid-lg2mgpgx><div class="checkboxFilled" data-astro-cid-lg2mgpgx>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-lg2mgpgx>Komputer ze stałym dostępem do internetu i systemem <b data-astro-cid-lg2mgpgx>Windows</b>.</span></span></li> <li class="customLi" data-astro-cid-lg2mgpgx><span class="marker" data-astro-cid-lg2mgpgx><span data-astro-cid-lg2mgpgx><div class="checkboxFilled" data-astro-cid-lg2mgpgx>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-lg2mgpgx>Zarejestrowane konto na stronie <a href="https://github.com" style="color: black;" data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Github</b></a> .</span></span></li> <li class="customLi" data-astro-cid-lg2mgpgx><span class="marker" data-astro-cid-lg2mgpgx><span data-astro-cid-lg2mgpgx><div class="checkboxFilled" data-astro-cid-lg2mgpgx>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-lg2mgpgx>Zainstalowane darmowe oprogramowanie:
<a href="https://code.visualstudio.com/" style="color: black;" data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Visual Studio Code</b></a>,
<a href="https://notepad-plus-plus.org/downloads/v8.7.7/" style="color: black;" data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Notepad++</b></a>,
<a href="https://www.sourcetreeapp.com/" style="color: black;" data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Sourcetree</b></a>.
                     Zalecana jest przeglądarka Google Chrome. </span> </span></li> </ul> ` })} ` })} <div style="width:100%; flex-direction: column; align-items: center; background-color: white; padding: 150px 0 30px 0;" data-astro-cid-lg2mgpgx> <h2 data-astro-cid-lg2mgpgx>Dostępna oferta szkoleń grupowych</h2> ${renderComponent($$result2, "Carousel", $$Carousel, { "carouselId": "groupCarousel", "startIndex": "1", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CarouselElement", $$CarouselElement, { "data-astro-cid-lg2mgpgx": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CarouselElementLayout", $$CarouselElementLayout, { "imgSrc": "../../public/images/Subjects/Frontend/Group90h.jpg", "styles": "background-color: rgb(255, 230, 214);", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result5) => renderTemplate` <h2 data-astro-cid-lg2mgpgx>Grupowe 90 godzin</h2> <p data-astro-cid-lg2mgpgx>Kompaktowe zagadnienie związane z tworzeniem stron internetowych, pozwalające tworzyć wizualną część stron internetowych. 12 godzin spotkań grupowych i 2 godziny pracy indywidualnie z mentorem.</p> <div style="width: 100%; justify-content: center;" data-astro-cid-lg2mgpgx><b style="font-size: 20px;" data-astro-cid-lg2mgpgx>Cena: 1200 zł</b></div> <div class="fullWidthTileContent" style="text-align: center; height: auto; margin-bottom: 40px;" data-astro-cid-lg2mgpgx> <a href="/form?type=group&subject=frontend&time=90" data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Zgłoś chęć udziału!</b></a> </div> ` })} ` })} ${renderComponent($$result3, "CarouselElement", $$CarouselElement, { "data-astro-cid-lg2mgpgx": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CarouselElementLayout", $$CarouselElementLayout, { "imgSrc": "../../public/images/Subjects/Frontend/Group140h.jpg", "styles": "background-color: rgb(255, 230, 214);", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result5) => renderTemplate` <h2 data-astro-cid-lg2mgpgx>Grupowe 140 godzin</h2> <p data-astro-cid-lg2mgpgx>Szerokie omówienie zagadnień, pozwalające tworzyć i projektować własne strony internetowe oraz łączyć je z obsługą logiki po stronie serwera. 18 godzin spotkań grupowych i 3 godziny pracy indywidualnie z mentorem.</p> <div style="width: 100%; justify-content: center;" data-astro-cid-lg2mgpgx><b style="font-size: 20px;" data-astro-cid-lg2mgpgx>Cena: 1800 zł</b></div> <div class="fullWidthTileContent" style="text-align: center; height: auto; margin-bottom: 40px;" data-astro-cid-lg2mgpgx> <a href="/form?type=group&subject=frontend&time=140" data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Zgłoś chęć udziału!</b></a> </div> ` })} ` })} ${renderComponent($$result3, "CarouselElement", $$CarouselElement, { "data-astro-cid-lg2mgpgx": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CarouselElementLayout", $$CarouselElementLayout, { "imgSrc": "../../public/images/Subjects/Frontend/Group320h.jpg", "styles": "background-color: rgb(255, 230, 214);", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result5) => renderTemplate` <h2 data-astro-cid-lg2mgpgx>Grupowe 320 godzin</h2> <p data-astro-cid-lg2mgpgx>Kompleksowe omówienie zagadnień, pozwalające tworzyć i projektować własne strony internetowe i prostą obsługę logiki po stronie serwera. 36 godzin spotkań grupowych i 7 godziny pracy indywidualnie z mentorem.</p> <div style="width: 100%; justify-content: center; flex-direction: column;" class="promotion" data-astro-cid-lg2mgpgx><b style="font-size: 20px;" data-astro-cid-lg2mgpgx>Cena: 3300 zł</b> <span data-astro-cid-lg2mgpgx>(1100 zł za miesiąc)</span> </div> <div class="fullWidthTileContent" style="text-align: center; height: auto; margin-bottom: 40px;" data-astro-cid-lg2mgpgx> <a href="/form?type=group&subject=frontend&time=320" data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Zgłoś chęć udziału!</b></a> </div> ` })} ` })} ` })} </div> <div style="width:100%; flex-direction: column; align-items: center; background-color: white; padding: 100px 0 100px 0;" data-astro-cid-lg2mgpgx> <h2 data-astro-cid-lg2mgpgx>Dostępna oferta szkoleń indywidualnych</h2> ${renderComponent($$result2, "Carousel", $$Carousel, { "carouselId": "carouselIndividual", "startIndex": "1", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CarouselElement", $$CarouselElement, { "data-astro-cid-lg2mgpgx": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CarouselElementLayout", $$CarouselElementLayout, { "imgSrc": "../../public/images/Subjects/Frontend/Individual90h.jpg", "styles": "background-color: rgb(255, 230, 214);", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result5) => renderTemplate` <h2 data-astro-cid-lg2mgpgx>Indywidualne 90 godzin</h2> <p data-astro-cid-lg2mgpgx>Indywidualne przygotowanie do projektowania i zarządzania wizualną częścią stron internetowych. 12 godzin spotkań 1 na 1 z mentorem i 6 godzin pracy indywidualnie z mentorem.</p> <div style="width: 100%; justify-content: center;" data-astro-cid-lg2mgpgx><b style="font-size: 20px;" data-astro-cid-lg2mgpgx>Cena: 2100 zł</b></div> <div class="fullWidthTileContent" style="text-align: center; height: auto; margin-bottom: 40px;" data-astro-cid-lg2mgpgx> <a href="/form?type=individual&subject=frontend&time=90" data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Zgłoś chęć udziału!</b></a> </div> ` })} ` })} ${renderComponent($$result3, "CarouselElement", $$CarouselElement, { "data-astro-cid-lg2mgpgx": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CarouselElementLayout", $$CarouselElementLayout, { "imgSrc": "../../public/images/Subjects/Frontend/Individual140h.jpg", "styles": "background-color: rgb(255, 230, 214);", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result5) => renderTemplate` <h2 data-astro-cid-lg2mgpgx>Indywidualne 140 godzin</h2> <p data-astro-cid-lg2mgpgx>Indywidualne przygotowanie do projektowania wizualnej części stron internetowych oraz logiki po stronie serwera. 18 godzin spotkań 1 na 1 z mentorem i 10 godzin pracy indywidualnie z mentorem.</p> <div style="width: 100%; justify-content: center;" data-astro-cid-lg2mgpgx><b style="font-size: 20px;" data-astro-cid-lg2mgpgx>Cena: 3000 zł</b></div> <div class="fullWidthTileContent" style="text-align: center; height: auto; margin-bottom: 40px;" data-astro-cid-lg2mgpgx> <a href="/form?type=individual&subject=frontend&time=140" data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Zgłoś chęć udziału!</b></a> </div> ` })} ` })} ${renderComponent($$result3, "CarouselElement", $$CarouselElement, { "data-astro-cid-lg2mgpgx": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CarouselElementLayout", $$CarouselElementLayout, { "imgSrc": "../../public/images/Subjects/Frontend/Individual320h.jpg", "styles": "background-color: rgb(255, 230, 214);", "data-astro-cid-lg2mgpgx": true }, { "default": ($$result5) => renderTemplate` <h2 data-astro-cid-lg2mgpgx>Indywidualne 320 godzin</h2> <p data-astro-cid-lg2mgpgx>Indywidualne, kompleksowe przygotowanie do pracy w kierunku Fullstack developera jako junior z naciskiem na stronę wizualną stron internetowych i aplikacji webowych. 36 godzin spotkań 1 na 1 z mentorem i 15 godzin pracy indywidualnie z mentorem.</p> <div style="width: 100%; justify-content: center; flex-direction: column;" class="promotion" data-astro-cid-lg2mgpgx><b style="font-size: 20px;" data-astro-cid-lg2mgpgx>Cena: 5400 zł</b> <span data-astro-cid-lg2mgpgx>(1800 zł za miesiąc)</span> </div> <div class="fullWidthTileContent" style="text-align: center; height: auto; margin-bottom: 40px;" data-astro-cid-lg2mgpgx> <a href="/form?type=individual&subject=frontend&time=320" data-astro-cid-lg2mgpgx><b data-astro-cid-lg2mgpgx>Zgłoś chęć udziału!</b></a> </div> ` })} ` })} ` })} </div> ${renderComponent($$result2, "Documents", $$Documents, { "data-astro-cid-lg2mgpgx": true })} <div style="margin-bottom: 100px;" data-astro-cid-lg2mgpgx></div> ` })} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-lg2mgpgx": true })}  ${renderScript($$result, "C:/workspace/TutorialsPage/extinct-equator/src/components/PageContent/Subjects/Frontend/FrontendSubjectPage.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/PageContent/Subjects/Frontend/FrontendSubjectPage.astro", void 0);

const $$FrontendSubject = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FrontentSubject", $$FrontendSubjectPage, {})} ` })}`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/pages/frontendSubject.astro", void 0);

const $$file = "C:/workspace/TutorialsPage/extinct-equator/src/pages/frontendSubject.astro";
const $$url = "/frontendSubject";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FrontendSubject,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
