import { e as createComponent, i as renderComponent, r as renderTemplate, j as renderScript, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_BuOuROhH.mjs';
import 'kleur/colors';
/* empty css                                 */
/* empty css                                                     */
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

const $$FullstackCourseTable = createComponent(($$result, $$props, $$slots) => {
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
        "1. Wprowadzenie i konfiguracja \u015Brodowiska",
        "Przedstawienie sposobu pracy, narz\u0119dzia programistyczne, informacje o Node, z jakimi narz\u0119dziami b\u0119dziemy pracowa\u0107, jak wygl\u0105da praca Fullstack developera, czym jest DevOps, wyja\u015Bnienie podstawowych zagadnie\u0144, praca z GitHub i pytania do mentora o prac\u0119 w firmie oraz rynek pracy",
        "1",
        "1",
        "1"
      ]
    },
    {
      cells: [
        "2. Podstawy frontendu (HTML, CSS, JS)",
        "Przegl\u0105d HTML/CSS/JS: responsywno\u015B\u0107 (Flex)",
        "0.5",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "3. Zaawansowany frontend (React, Hooks)",
        "React od podstaw: JSX, komponenty funkcyjne/klasowe, hooki, zarz\u0105dzanie stanem (useState/useEffect)",
        "1",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "4. Next.js i integracja z API",
        "CSSG/SSR, routowanie, optymalizacja obraz\xF3w/zasob\xF3w, uwierzytelnianie w Next.js, pobieranie danych (REST/GraphQL)",
        "1",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "5. Backend Node.js (Express)",
        "Zaawansowany serwer Node.js: routery, middleware, uwierzytelnianie (Passport.js), relacje z baz\u0105 danych",
        "0",
        "0.5",
        "1"
      ]
    },
    {
      cells: [
        "6. Backend Java Spring Boot",
        "Tworzenie skalowalnego API: kontrolery REST, Spring Data JPA, Spring Security, profile, dependency injection",
        "1",
        "2",
        "2"
      ]
    },
    {
      cells: [
        "7. Bazy danych SQL (MySQL/PostgreSQL)",
        "Zaawansowane SQL: indeksy, transakcje, procedury. Hibernate/JPA w Springu",
        "0.5",
        "0.5",
        "1"
      ]
    },
    {
      cells: [
        "8. Bazy danych NoSQL (MongoDB)",
        "Dokumentowy model danych, Mongoose, agregacje, bazy rozproszone, podstawy skalowania",
        "0.5",
        "0.5",
        "1"
      ]
    },
    {
      cells: [
        "9. Integracje z zewn\u0119trznymi API i mikroserwisy",
        "REST/GraphQL, webhooki, integracja z us\u0142ugami zewn\u0119trznymi (np. p\u0142atno\u015Bci Stripe, Google APIs)",
        "0.5",
        "0.5",
        "2"
      ]
    },
    {
      cells: [
        "10. Autentykacja i autoryzacja",
        "OpenID Connect, OAuth2, Keycloak (serwer to\u017Csamo\u015Bci), zarz\u0105dzanie rolami i sesjami, zabezpieczenia JWT",
        "0.5",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "11. Bezpiecze\u0144stwo aplikacji",
        "OWASP, testy penetracyjne podstawy, szyfrowanie (HTTPS, algorytmy), zabezpieczenia serwera",
        "0.5",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "12. Architektura i wzorce projektowe",
        "Wzorzec MVC, czysta architektura, mikroserwisy i monolit. Wzorce projektowe (Singleton, Factory, itp.)",
        "0",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "13. Docker i konteneryzacja",
        "Tworzenie kontener\xF3w Docker dla aplikacji, zarz\u0105dzanie obrazami, Docker Compose",
        "1",
        "1",
        "2"
      ]
    },
    {
      cells: [
        "14. CI/CD i chmura",
        "Konfiguracja pipeline CI/CD (Jenkins), deployment na chmurze (AWS/GCP/Azure), serwery wirtualne",
        "0",
        "0",
        "1"
      ]
    },
    {
      cells: [
        "15. Testowanie",
        "Testy jednostkowe (JUnit, Jest), integracyjne, end-to-end (Cypress). Test-Driven Development (TDD)",
        "0",
        "0",
        "1"
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
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/PageContent/Subjects/Fullstack/FullstackCourseTable.astro", void 0);

const $$FullstackSubjectPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-ff4wwhq3": true })} ${renderComponent($$result, "ContentContainer", $$ContentContainer, { "style": "background-color: #e5e5e5", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FullImageContainer", $$FullImageContainer, { "id": "mainBanner", "imagePath": "../../public/images/Subjects/Fullstack/Banner.jpg", "imageLink": "#", "wrapperClass": "imageToRight noCorrection", "wrapperStyle": "background-color: #021d14;", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="bannerContentContainer" data-astro-cid-ff4wwhq3> <h1 style="color: white" data-astro-cid-ff4wwhq3>Tworzenie stron internetowych - Frontend + Backend = Fullstack</h1> <p style="color: white" data-astro-cid-ff4wwhq3>
Odpowiednie szkolenia dla uczniów i studentów szukających praktyk.
                Zarządzaj treścią stron i logiką serwera aplikacji webowej.
</p> <button class="cfa" onclick="goToForm()" data-astro-cid-ff4wwhq3>Zgłoś chęć udziału!</button> </div> ` })} <section style="width: 100%; display: flex; flex-direction: column; align-items: center; padding: 10px 10px; box-sizing: border-box; text-align: center;" data-astro-cid-ff4wwhq3> <h2 data-astro-cid-ff4wwhq3>Program szkoleń</h2> ${renderComponent($$result2, "ContentPartContainer", $$ContentPartContainer, { "clazz": "limitedWidth center", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-ff4wwhq3>Szkolenie "Frontend + backend = fullstack" skupione jest w mniejszym stopniu na samym tworzeniu wizualnej części aplikacji niż szkolenie "frontend". Pojawia się sporo wiedzy związanej z tworzeniem logiki aplikacji internetowej na serwerze. Omawiane są sposoby przetwarzania informacji, łączenie się z różnymi usługami oraz zagadnienia związane z pracą z środowiskiem programistycznym po stronie serwera.</p> <p data-astro-cid-ff4wwhq3>Poniżej przedstawiona została tabela z programem szkoleniowym. Każdy wariant godzinowy szkolenia przewiduje określoną liczbę webinarów (spotkań w celu przekazania wiedzy teoretycznej) do danego zagadnienia. </p> <div style="width: 100%; overflow-x: auto; box-sizing: border-box;" data-astro-cid-ff4wwhq3> ${renderComponent($$result3, "FullstackCourseTable", $$FullstackCourseTable, { "data-astro-cid-ff4wwhq3": true })} </div> <p style="font-size: 14px;" data-astro-cid-ff4wwhq3>*0.5 - oznacza, że połowa spotkania jest przeznaczona na dany temat.</p> ` })} </section> ${renderComponent($$result2, "Section", $$Section, { "clazz": "sectionContainer center slanted", "style": "background-color: white; text-align: center;", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ContentPartContainer", $$ContentPartContainer, { "clazz": "limitedWidth center", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result4) => renderTemplate` <h2 data-astro-cid-ff4wwhq3>Harmonogram pracy</h2> <h3 data-astro-cid-ff4wwhq3>Szkolenia grupowe</h3> <p data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Szkolenie 90h - </b> 2 spotkania tygodniowo przez 4 tygodnie. </p> <p data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Szkolenie 140h - </b> 3 spotkania tygodniowo przez 4 tygodnie. </p> <p data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Szkolenie 320h - </b> 2 spotkania tygodniowo przez 12 tygodni. </p> <p data-astro-cid-ff4wwhq3>Każde spotkanie trwa 90 minut. Dni spotkań ustalane są wspólnie. Możliwe terminy obejmuje poniższy terminarz:</p> <div class="terms" data-astro-cid-ff4wwhq3> <p data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Poniedziałek - </b> 17:00-20:00</p> <p data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Wtorek - </b> 16:00-20:00</p> <p data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Środa - </b> 16:00-18:00</p> <p data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Czwartek - </b> 17:00-20:00</p> <p data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Piątek - </b> 16:00-19:00</p> <p data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Sobota - </b> 10:00-13:00</p> </div> <h3 data-astro-cid-ff4wwhq3>Szkolenia indywidualne</h3> <p style="text-align: center;" data-astro-cid-ff4wwhq3>Szablon spotkań jest analogiczny jak dla szkoleń grupowych. Elastyczność doboru godzin i dni jest znacznie większa. Można zmienić dzień i godzinę szkolenia w razie potrzeby.</p> ` })} ` })} ${renderComponent($$result2, "Section", $$Section, { "clazz": "sectionContainer center slanted", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ContentPartContainer", $$ContentPartContainer, { "clazz": "limitedWidth center", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result4) => renderTemplate` <h2 data-astro-cid-ff4wwhq3>Zadania praktyczne</h2> <ul class="customList" style="display: flex; justify-content: center; flex-direction: column;" data-astro-cid-ff4wwhq3> <li class="customLi" data-astro-cid-ff4wwhq3><span class="marker" data-astro-cid-ff4wwhq3><span data-astro-cid-ff4wwhq3><div class="checkboxFilled" data-astro-cid-ff4wwhq3>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-ff4wwhq3>Do każdego tematu przygotowany jest zbiór zadań praktycznych.</span></span></li> <li class="customLi" data-astro-cid-ff4wwhq3><span class="marker" data-astro-cid-ff4wwhq3><span data-astro-cid-ff4wwhq3><div class="checkboxFilled" data-astro-cid-ff4wwhq3>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-ff4wwhq3>Uczestnik wykonuje powierzone zadania praktyczne i wysyła rezultaty do określonego terminu.</span></span></li> <li class="customLi" data-astro-cid-ff4wwhq3><span class="marker" data-astro-cid-ff4wwhq3><span data-astro-cid-ff4wwhq3><div class="checkboxFilled" data-astro-cid-ff4wwhq3>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-ff4wwhq3>Uczestnicy zajęć grupowych zachęcani są do współpracy przy wykonywaniu zadań.</span></span></li> <li class="customLi" data-astro-cid-ff4wwhq3><span class="marker" data-astro-cid-ff4wwhq3><span data-astro-cid-ff4wwhq3><div class="checkboxFilled" data-astro-cid-ff4wwhq3>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-ff4wwhq3>Mentor może wesprzeć grupę lub indywidualnie uczestnika przy problemach z wykonaniem zadań.</span></span></li> <li class="customLi" data-astro-cid-ff4wwhq3><span class="marker" data-astro-cid-ff4wwhq3><span data-astro-cid-ff4wwhq3><div class="checkboxFilled" data-astro-cid-ff4wwhq3>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-ff4wwhq3>Wiele ćwiczeń posiada formę prawdziwego projektu, w którym należy dodać nową funkcjonalność lub poprawić błąd. Odwzorowuje to realne warunki pracy.</span></span></li> <li class="customLi" data-astro-cid-ff4wwhq3><span class="marker" data-astro-cid-ff4wwhq3><span data-astro-cid-ff4wwhq3><div class="checkboxFilled" data-astro-cid-ff4wwhq3>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-ff4wwhq3>W przypadku zajęć indywidualnych - zadania są na bieżąco tworzone w celu rozbudowy indywidualnego projektu uczestnika do swojego portfolio.</span></span></li> </ul> ` })} ` })} ${renderComponent($$result2, "ImageBoxContent", $$ImageBoxContent, { "wrapperClass": "imageRight", "imagePath": "../../../public/images/Subjects/Frontend/Requirements.jpg", "lazyMeanColor": "#726d7e", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Section", $$Section, { "clazz": "center", "style": "flex: 1; justify-content: center;", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result4) => renderTemplate` <h2 data-astro-cid-ff4wwhq3>Wymagania</h2> <ul class="customList" style="display: flex; justify-content: center; flex-direction: column;" data-astro-cid-ff4wwhq3> <li class="customLi" data-astro-cid-ff4wwhq3><span class="marker" data-astro-cid-ff4wwhq3><span data-astro-cid-ff4wwhq3><div class="checkboxFilled" data-astro-cid-ff4wwhq3>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-ff4wwhq3>Zainstalowany komunikator <a href="https://discord.com" style="color: black;" data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Discord</b></a> i dołączenie do wskazanego przez mentora serwera. Wymagany jest <b data-astro-cid-ff4wwhq3>mikrofon</b> do rozmów głosowych.</span></span></li> <li class="customLi" data-astro-cid-ff4wwhq3><span class="marker" data-astro-cid-ff4wwhq3><span data-astro-cid-ff4wwhq3><div class="checkboxFilled" data-astro-cid-ff4wwhq3>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-ff4wwhq3>Komputer ze stałym dostępem do internetu i systemem <b data-astro-cid-ff4wwhq3>Windows</b>.</span></span></li> <li class="customLi" data-astro-cid-ff4wwhq3><span class="marker" data-astro-cid-ff4wwhq3><span data-astro-cid-ff4wwhq3><div class="checkboxFilled" data-astro-cid-ff4wwhq3>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-ff4wwhq3>Zarejestrowane konto na stronie <a href="https://github.com" style="color: black;" data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Github</b></a> .</span></span></li> <li class="customLi" data-astro-cid-ff4wwhq3><span class="marker" data-astro-cid-ff4wwhq3><span data-astro-cid-ff4wwhq3><div class="checkboxFilled" data-astro-cid-ff4wwhq3>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-ff4wwhq3>Zainstalowane darmowe oprogramowanie:
<a href="https://code.visualstudio.com/" style="color: black;" data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Visual Studio Code</b></a>,
<a href="https://www.jetbrains.com/idea/download/?section=windows" style="color: black;" data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>IntelliJ IDEA Community Edition</b></a>,
<a href="https://notepad-plus-plus.org/downloads/v8.7.7/" style="color: black;" data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Notepad++</b></a>,
<a href="https://www.sourcetreeapp.com/" style="color: black;" data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Sourcetree</b></a>.
                     Zalecana jest przeglądarka Google Chrome. </span> </span></li> <li class="customLi" data-astro-cid-ff4wwhq3><span class="marker" data-astro-cid-ff4wwhq3><span data-astro-cid-ff4wwhq3><div class="checkboxFilled" data-astro-cid-ff4wwhq3>${unescapeHTML(CheckboxFilledSvg)}</div></span> <span data-astro-cid-ff4wwhq3>Podstawowa znajomość <b data-astro-cid-ff4wwhq3>HTML, CSS</b> i <b data-astro-cid-ff4wwhq3>JavaScript</b> oraz jednego z języków: <b data-astro-cid-ff4wwhq3>Java, C#</b>.</span></span></li> </ul> ` })} ` })} <div style="width:100%; flex-direction: column; align-items: center; background-color: white; padding: 150px 0 30px 0;" data-astro-cid-ff4wwhq3> <h1 data-astro-cid-ff4wwhq3>Dostępna oferta szkoleń grupowych</h1> ${renderComponent($$result2, "Carousel", $$Carousel, { "carouselId": "groupCarousel", "startIndex": "1", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CarouselElement", $$CarouselElement, { "data-astro-cid-ff4wwhq3": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CarouselElementLayout", $$CarouselElementLayout, { "imgSrc": "../../public/images/Subjects/Frontend/Group90h.jpg", "styles": "background-color: rgb(255, 230, 214);", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result5) => renderTemplate` <h2 data-astro-cid-ff4wwhq3>Grupowe 90 godzin</h2> <p data-astro-cid-ff4wwhq3>Kompaktowe zagadnienie związane z tworzeniem aplikacji webowych.</p> <div style="width: 100%; justify-content: center;" data-astro-cid-ff4wwhq3><b style="font-size: 20px;" data-astro-cid-ff4wwhq3>Cena: 1600 zł</b></div> <div class="fullWidthTileContent" style="text-align: center; height: auto; margin-bottom: 40px;" data-astro-cid-ff4wwhq3> <a href="/form?type=group&subject=frontendAndBackend&time=90" data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Zgłoś chęć udziału!</b></a> </div> ` })} ` })} ${renderComponent($$result3, "CarouselElement", $$CarouselElement, { "data-astro-cid-ff4wwhq3": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CarouselElementLayout", $$CarouselElementLayout, { "imgSrc": "../../public/images/Subjects/Frontend/Group140h.jpg", "styles": "background-color: rgb(255, 230, 214);", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result5) => renderTemplate` <h2 data-astro-cid-ff4wwhq3>Grupowe 140 godzin</h2> <p data-astro-cid-ff4wwhq3>Szerokie omówienie zagadnień, pozwalające tworzyć i projektować własne aplikacje webowe.</p> <div style="width: 100%; justify-content: center;" data-astro-cid-ff4wwhq3><b style="font-size: 20px;" data-astro-cid-ff4wwhq3>Cena: 2600 zł</b></div> <div class="fullWidthTileContent" style="text-align: center; height: auto; margin-bottom: 40px;" data-astro-cid-ff4wwhq3> <a href="/form?type=group&subject=frontendAndBackend&time=140" data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Zgłoś chęć udziału!</b></a> </div> ` })} ` })} ${renderComponent($$result3, "CarouselElement", $$CarouselElement, { "data-astro-cid-ff4wwhq3": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CarouselElementLayout", $$CarouselElementLayout, { "imgSrc": "../../public/images/Subjects/Frontend/Group320h.jpg", "styles": "background-color: rgb(255, 230, 214);", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result5) => renderTemplate` <h2 data-astro-cid-ff4wwhq3>Grupowe 320 godzin</h2> <p data-astro-cid-ff4wwhq3>Kompleksowe omówienie zagadnień, pozwalające tworzyć i projektować alikacje webowe oraz integrować je z innymi technologiami.</p> <div style="width: 100%; justify-content: center; flex-direction: column;" class="promotion" data-astro-cid-ff4wwhq3><b style="font-size: 20px;" data-astro-cid-ff4wwhq3>Cena: 4800 zł</b> <span data-astro-cid-ff4wwhq3>(1600 zł za miesiąc)</span> </div> <div class="fullWidthTileContent" style="text-align: center; height: auto; margin-bottom: 40px;" data-astro-cid-ff4wwhq3> <a href="/form?type=group&subject=frontendAndBackend&time=320" data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Zgłoś chęć udziału!</b></a> </div> ` })} ` })} ` })} </div> <div style="width:100%; flex-direction: column; align-items: center; background-color: white; padding: 100px 0 100px 0;" data-astro-cid-ff4wwhq3> <h1 data-astro-cid-ff4wwhq3>Dostępna oferta szkoleń indywidualnych</h1> ${renderComponent($$result2, "Carousel", $$Carousel, { "carouselId": "carouselIndividual", "startIndex": "1", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CarouselElement", $$CarouselElement, { "data-astro-cid-ff4wwhq3": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CarouselElementLayout", $$CarouselElementLayout, { "imgSrc": "../../public/images/Subjects/Frontend/Individual90h.jpg", "styles": "background-color: rgb(255, 230, 214);", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result5) => renderTemplate` <h2 data-astro-cid-ff4wwhq3>Indywidualne 90 godzin</h2> <p data-astro-cid-ff4wwhq3>Indywidualne przygotowanie do projektowania i zarządzania wizualną częścią stron internetowych.</p> <div style="width: 100%; justify-content: center;" data-astro-cid-ff4wwhq3><b style="font-size: 20px;" data-astro-cid-ff4wwhq3>Cena: 2500 zł</b></div> <div class="fullWidthTileContent" style="text-align: center; height: auto; margin-bottom: 40px;" data-astro-cid-ff4wwhq3> <a href="/form?type=individual&subject=frontendAndBackend&time=90" data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Zgłoś chęć udziału!</b></a> </div> ` })} ` })} ${renderComponent($$result3, "CarouselElement", $$CarouselElement, { "data-astro-cid-ff4wwhq3": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CarouselElementLayout", $$CarouselElementLayout, { "imgSrc": "../../public/images/Subjects/Frontend/Individual140h.jpg", "styles": "background-color: rgb(255, 230, 214);", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result5) => renderTemplate` <h2 data-astro-cid-ff4wwhq3>Indywidualne 140 godzin</h2> <p data-astro-cid-ff4wwhq3>Indywidualne przygotowanie do projektowania wizualnej części stron internetowych oraz logiki po stronie serwera.</p> <div style="width: 100%; justify-content: center;" data-astro-cid-ff4wwhq3><b style="font-size: 20px;" data-astro-cid-ff4wwhq3>Cena: 3500 zł</b></div> <div class="fullWidthTileContent" style="text-align: center; height: auto; margin-bottom: 40px;" data-astro-cid-ff4wwhq3> <a href="/form?type=individual&subject=frontendAndBackend&time=140" data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Zgłoś chęć udziału!</b></a> </div> ` })} ` })} ${renderComponent($$result3, "CarouselElement", $$CarouselElement, { "data-astro-cid-ff4wwhq3": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CarouselElementLayout", $$CarouselElementLayout, { "imgSrc": "../../public/images/Subjects/Frontend/Individual320h.jpg", "styles": "background-color: rgb(255, 230, 214);", "data-astro-cid-ff4wwhq3": true }, { "default": ($$result5) => renderTemplate` <h2 data-astro-cid-ff4wwhq3>Indywidualne 320 godzin</h2> <p data-astro-cid-ff4wwhq3>Indywidualne, kompleksowe przygotowanie do pracy w kierunku Fullstack developera jako junior z naciskiem na stronę wizualną stron internetowych i aplikacji webowych.</p> <div style="width: 100%; justify-content: center; flex-direction: column;" class="promotion" data-astro-cid-ff4wwhq3><b style="font-size: 20px;" data-astro-cid-ff4wwhq3>Cena: 6300 zł</b> <span data-astro-cid-ff4wwhq3>(2100 zł za miesiąc)</span> </div> <div class="fullWidthTileContent" style="text-align: center; height: auto; margin-bottom: 40px;" data-astro-cid-ff4wwhq3> <a href="/form?type=individual&subject=frontendAndBackend&time=320" data-astro-cid-ff4wwhq3><b data-astro-cid-ff4wwhq3>Zgłoś chęć udziału!</b></a> </div> ` })} ` })} ` })} </div> ${renderComponent($$result2, "Documents", $$Documents, { "data-astro-cid-ff4wwhq3": true })} <div style="margin-bottom: 100px;" data-astro-cid-ff4wwhq3></div> ` })} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ff4wwhq3": true })}  ${renderScript($$result, "C:/workspace/TutorialsPage/extinct-equator/src/components/PageContent/Subjects/Fullstack/FullstackSubjectPage.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/components/PageContent/Subjects/Fullstack/FullstackSubjectPage.astro", void 0);

const $$FrontendAndBackendSubject = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FullstackSubjectPage", $$FullstackSubjectPage, {})} ` })}`;
}, "C:/workspace/TutorialsPage/extinct-equator/src/pages/frontendAndBackendSubject.astro", void 0);

const $$file = "C:/workspace/TutorialsPage/extinct-equator/src/pages/frontendAndBackendSubject.astro";
const $$url = "/frontendAndBackendSubject";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FrontendAndBackendSubject,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
