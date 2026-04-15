# Audyt wizualny, treściowy i SEO — HEX Network (minecrafthex.pl)

> Data audytu: 14.04.2026  
> Technologia: Astro 5.5, Netlify, statyczny HTML  
> Liczba przeanalizowanych stron: 14  
> Liczba przeanalizowanych komponentów: 30+  
> Liczba przeanalizowanych plików CSS: 12+

---

## Spis treści

1. [Podsumowanie ogólne](#1-podsumowanie-ogólne)
2. [Problemy krytyczne](#2-problemy-krytyczne)
3. [SEO — analiza](#3-seo--analiza)
4. [Wizualna analiza — design system](#4-wizualna-analiza--design-system)
5. [Treść i copywriting](#5-treść-i-copywriting)
6. [Nawigacja i UX](#6-nawigacja-i-ux)
7. [Dostępność (a11y)](#7-dostępność-a11y)
8. [Wydajność](#8-wydajność)
9. [Rekomendacje — priorytetyzowana lista zmian](#9-rekomendacje--priorytetyzowana-lista-zmian)

---

## 1. Podsumowanie ogólne

Strona HEX Network to witryna polskiego serwera Minecraft skupionego na turniejach, eventach i autorskich trybach gry. Strona jest technicznie dobrze zbudowana (Astro SSG, structured data, Open Graph), ale posiada istotne problemy wizualne, treściowe i strukturalne, które ograniczają jej potencjał SEO i konwersji.

### Co działa dobrze:
- ✅ Kompletne meta tagi (title, description, OG, Twitter Card) na każdej stronie
- ✅ Structured data JSON-LD (Organization, WebSite, FAQPage, Event, BreadcrumbList)
- ✅ Canonical URL i redirecty HTTP → HTTPS
- ✅ Sitemap XML (astro-sitemap)
- ✅ Responsywny layout z mobile menu
- ✅ Prawidłowe robots.txt
- ✅ FAQ z schema markup na większości stron
- ✅ Dobra obsługa prawna (regulamin, polityka prywatności, RODO)

### Co wymaga poprawy:
- ❌ Duplicate content (hexHardcoreSsmp = hexHardcoreSmp)
- ❌ Niespójny design system (kolory, breakpointy, typografia)
- ❌ Słabe linkowanie wewnętrzne
- ❌ 5 stron "w przygotowaniu" bez realnej wartości treściowej
- ❌ Globalne reguły CSS nadpisujące `div` i `section`
- ❌ Brak skip-link i niekompletne ARIA

---

## 2. Problemy krytyczne

### 2.1 Duplicate content — hexHardcoreSmp vs hexHardcoreSsmp
**Priorytet: KRYTYCZNY**

Pliki `hexHardcoreSmp.astro` i `hexHardcoreSsmp.astro` mają:
- Identyczny title tag
- Identyczny meta description
- Identyczne structured data
- Ten sam komponent renderujący treść

Google potraktuje to jako duplicate content, co może skutkować kanibalizacją słów kluczowych i obniżeniem pozycji obu stron.

**Zalecenie:** Usunąć `/hexHardcoreSsmp` i ustawić redirect 301 → `/hexHardcoreSmp`.

### 2.2 Globalny `div { display: flex }` w global.css
**Priorytet: KRYTYCZNY**

Linia w `global.css`:
```css
div { display: flex; }
section { display: flex; }
```
Nadpisuje domyślne zachowanie **wszystkich** elementów `div` i `section` na stronie. To powoduje:
- Nieoczekiwane zachowanie layoutu w nowych komponentach
- Konieczność nadpisywania reguły w wielu miejscach
- Kruchy, trudny do utrzymania CSS

**Zalecenie:** Usunąć globalną regułę. Dodać `display: flex` jawnie tam, gdzie jest potrzebny (na klasach komponentów).

### 2.3 Brak jednostki CSS — Welcome.styles.css
**Priorytet: WYSOKI**

```css
padding: 10 60px; /* Brak "px" przy 10 — przeglądarka zignoruje tę wartość */
```

**Zalecenie:** Zmienić na `padding: 10px 60px;`.

### 2.4 Literówka ".fade-imag2" w FullImageContainer.css
**Priorytet: WYSOKI**

Selektor `.fade-imag2` (brak "e") prawdopodobnie nigdy nie zadziała.

**Zalecenie:** Zmienić na `.fade-image2`.

---

## 3. SEO — analiza

### 3.1 Meta tagi — ocena ✅ DOBRA

| Element | Status | Uwagi |
|---------|--------|-------|
| `<title>` | ✅ Na każdej stronie | Unikalne, z brand name, < 60 znaków |
| `<meta description>` | ✅ Na każdej stronie | Unikalne, ~150-160 znaków |
| Canonical URL | ✅ Automatyczny + override | Poprawna implementacja |
| OG tags | ✅ Kompletne | og:title, og:description, og:image, og:url, og:type, og:site_name |
| Twitter Cards | ✅ summary_large_image | Prawidłowe |
| robots | ✅ index, follow | Na wszystkich stronach |
| lang | ✅ `<html lang="pl">` | Poprawne |
| hreflang | ⚠️ Brak | Zalecane nawet dla stron jednojęzycznych |

### 3.2 Structured Data — ocena ✅ BARDZO DOBRA

| Schema | Strony | Status |
|--------|--------|--------|
| Organization | Wszystkie (via Layout) | ✅ |
| WebSite | Wszystkie (via Layout) | ✅ |
| FAQPage | Większość stron | ✅ |
| Event | Strona główna | ✅ |
| BreadcrumbList | Wszystkie podstrony | ✅ |
| WebPage/AboutPage/ContactPage | Odpowiednie strony | ✅ |

**Brakuje:** AggregateRating, Review, VideoObject (dla YouTube), ImageGallery (archiwum)

### 3.3 Słowa kluczowe — ocena ✅ DOBRA

**Główne frazy obecne na stronie:**
- "serwer Minecraft Polska" — w title strony głównej ✅
- "turnieje Minecraft" — w treści i meta ✅
- "ranking graczy Minecraft" — w content ✅
- "eventy Minecraft" — w meta i treści ✅

**Brakujące frazy long-tail do rozważenia:**
- "najlepszy serwer Minecraft Polska 2026"
- "serwer Minecraft z turniejami"
- "darmowy serwer Minecraft Polska"
- "serwer Minecraft non-premium"
- "Minecraft PVP Polska"
- "Minecraft event z nagrodami"

### 3.4 Linkowanie wewnętrzne — ocena ⚠️ SŁABA

**Problem:** Strony trybów gry (hexEvent, hexParkour, hexPvp, hexMiniGames, hexHardcoreSmp) są dostępne **wyłącznie** z:
- Podmenu nawigacji
- Sekcji HexContainer na stronie głównej

Brakuje im linków z:
- Footera
- Sekcji "Powiązane" na innych podstronach
- Breadcrumb widocznych w UI (schema jest, ale brak wizualnego breadcrumba)
- Treści na stronie "O nas"

**Brak linków w footerze do:** polityki prywatności, kontaktu, strony "O nas"

### 3.5 Alt texty obrazów — ocena ⚠️ CZĘŚCIOWA

- ✅ Strona główna: alt texty na głównych obrazach
- ✅ About: alt texty obecne
- ⚠️ Archive: obrazy w Grid21 mogą nie mieć jawnych alt textów — do weryfikacji dla ~24+ obrazów turniejowych
- ⚠️ HexContainer: alt zależy od `headerText` prop — generyczne nazwy trybów zamiast opisowych fraz

### 3.6 Strony "w przygotowaniu" — ocena ❌ PROBLEM

5 stron (hexEvent, hexMiniGames, hexPvp, hexParkour, hexHardcoreSmp) ma status "w przygotowaniu" z minimalną treścią. Google może je traktować jako thin content.

**Opcje:**
1. **Noindex** te strony dopóki nie będą gotowe
2. **Rozbudować treść** (opis trybu, screenshoty koncepcyjne, FAQ, planowany termin)
3. **Skonsolidować** w jedną stronę "Nadchodzące tryby" z anchor linkami

---

## 4. Wizualna analiza — design system

### 4.1 Paleta kolorów — ocena ⚠️ NIESPÓJNA

**Zdefiniowane CSS variables:**
```css
--primary-color: #ffffff
--secondary-color: #000000
--accent-color: #ffa600
--text-primary-color: #000000
--text-secondary-color: #ffffff
--background-color: #ffffff
```

**Problem:** Poza tymi 6 zmiennymi, w kodzie CSS jest zaharcodowanych:
- 6+ odcieni szarości (#f3f3f3, #f5f5f5, #fafafa, #ccc, #888, #555, #444, #999999)
- Warianty pomarańczowego (#ffb52a hover, #c07d00 active)
- Ciemne tła komponentów (#0d0d0d, #2c2d32, #222833, #151920, #10141a)
- Złote/beżowe toony FAQ (#ffd88c, #ffe39f, #f1eadb, #fff1ab)

**Zalecenie:** Zdefiniować kompletną paletę jako CSS variables:
```css
/* Neutrals */
--gray-50: #fafafa;
--gray-100: #f5f5f5;
--gray-200: #f3f3f3;
--gray-300: #ccc;
--gray-500: #888;
--gray-600: #555;
--gray-700: #444;
--gray-900: #0d0d0d;

/* Accent variants */
--accent-hover: #ffb52a;
--accent-active: #c07d00;

/* Dark surfaces */
--surface-dark-1: #2c2d32;
--surface-dark-2: #222833;
--surface-dark-3: #151920;

/* Gold / warm tones (FAQ, highlights) */
--gold-light: #fff1ab;
--gold-medium: #ffe39f;
--gold-dark: #ffd88c;
```

### 4.2 Typografia — ocena ✅ OK z uwagami

**Fonty:**
- **Montserrat** (Variable) — body (dobre, czytelne)
- **Roboto** — fallback (400, 700)
- **Minecraft** — dekoracyjny (nagłówki serwera, countdown)

**Problemy:**
- Tabele (SimpleDataTable) używają `font-family: sans-serif` zamiast Montserrat/Roboto
- Bazowy `font-size: 20px` jest stosunkowo duży — na małych ekranach spada do 14px, co daje duży skok
- Nagłówki H1-H6 mają globalnie `display: flex; flex-direction: column` — nietypowe i może powodować problemy z inline elementami w nagłówkach

### 4.3 Breakpointy — ocena ❌ CHAOTYCZNE

Zidentyfikowano **14+ breakpointów** rozproszonych po plikach CSS:
```
2000px, 1760px, 1550px, 1200px, 1100px, 1070px, 950px, 900px, 870px, 600px, 550px, 500px, 400px
```

Brak spójnego systemu. Zalecenie:
```
--bp-desktop-xl: 1440px  (duże desktopy)
--bp-desktop: 1024px     (tablety landscape / mały desktop)
--bp-tablet: 768px       (tablety portrait)
--bp-mobile: 480px       (telefony)
```

### 4.4 Spacing — ocena ⚠️ NIEKONSEKWENTNY

Brak systemu spacingowego. Używane wartości: 5px, 10px, 15px, 20px, 25px, 30px, 40px, 50px, 60px, 80px — bez widocznego wzorca (np. 4px-grid lub 8px-grid).

### 4.5 Z-index — ocena ⚠️ BEZ SYSTEMU

Rozproszone wartości z-index (1, 2, 5, 10, 50, 100, 999, 1000, 9999) bez udokumentowanej hierarchii.

**Zalecenie:**
```css
--z-base: 1;
--z-dropdown: 100;
--z-sticky: 200;
--z-overlay: 300;
--z-modal: 400;
--z-toast: 500;
```

### 4.6 Animacje i przejścia — ocena ✅ OK

Dobre wykorzystanie:
- Fade-in na obrazach (2s ease)
- Hover scale na kartach (0.5s)
- Smooth underline animacje na linkach
- Countdown timer z dynamicznym JS

**Drobny problem:** Wszędzie użyta jest funkcja `ease` — brak `cubic-bezier` dla bardziej dynamicznych efektów (np. spring-like na FAQ expand).

---

## 5. Treść i copywriting

### 5.1 Strona główna (index.astro) — ocena ✅ DOBRA

**Mocne strony:**
- Czytelna hierarchia: banner → tryby → opis → statystyki → aktualności → korzyści → sklep/archiwum → FAQ
- Social proof (liczby: 6 turniejów, 44 graczy, 121 Discord)
- Aktualne informacje (turnieje, plany)
- CTA "Dołącz" wyraźnie widoczne

**Do poprawy:**
- Sekcja "Dlaczego warto zagrać?" — 4 karty z samymi nagłówkami, bez opisu. Dodać 1-2 zdania do każdej
- Statystyki są małe (121 członków Discord) — rozważyć, czy eksponować, czy zastąpić bardziej imponującymi metrykami (np. "rozegranych gier", "godzin rozgrywki")
- Button "Dołącz" na bannerze prowadzi do Discorda, nie do serwera MC — może mylić

### 5.2 O nas (about.astro) — ocena ✅ BARDZO DOBRA

Najlepsza podstrona pod kątem treści:
- ~2000 słów, dobrze ustrukturyzowane
- Czytelne sekcje: Co robimy, Dla kogo, Zasady, Eventy, Geneza, Jak zacząć
- 2 CTA (Discord + strona główna)

### 5.3 Archiwum (archive.astro) — ocena ✅ DOBRA

- 6 turniejów z danymi (data, pula, zwycięzca, gry)
- Galerie zdjęć z lightbox
- Dobra prezentacja historii projektu

**Do poprawy:**
- Literówka w nagłówkach: "Truniej" zamiast "Turniej" — powtarza się wielokrotnie
- Dodać więcej tekstu opisowego do każdego turnieju (2-3 zdania relacji)

### 5.4 Kontakt (contact.astro) — ocena ⚠️ KRÓTKA

~300 słów. Funkcjonalnie wystarczająca, ale:
- Brak formularza kontaktowego (layout RecaptchaLayout istnieje, ale nie jest używany)
- Brak informacji o czasach odpowiedzi
- Dwa kanały (email + Discord) — OK, ale mogłoby być lepiej rozbudowane

### 5.5 Sklep (shop.astro) — ocena ⚠️ REDIRECT

Strona jest de facto przekierowaniem na ViShop z 10-sekundowym countdown. Użytkownik opuszcza domenę, co:
- Zwiększa bounce rate
- Mniej kontroli nad ścieżką konwersji
- ViShop nie podlega analytics strony

**Zalecenie:** Rozważyć embed/iframe sklepu lub przynajmniej lepiej zaprezentować ofertę przed przekierowaniem.

### 5.6 Strony trybów gry — ocena ❌ THIN CONTENT

5 stron z treścią "w przygotowaniu". Każda zawiera FAQ schema, ale mało realnej treści. Google może je traktować jako niskiej jakości.

### 5.7 Błędy ortograficzne/literówki

| Lokalizacja | Błąd | Poprawna forma |
|-------------|------|----------------|
| DiscordContainer.astro | "Serwer Dicord" | "Serwer Discord" |
| Archive.astro (×6) | "Truniej HEX" | "Turniej HEX" |
| FAQ na stronie głównej | "bierząco" | "bieżąco" |
| FAQ na stronie głównej | "dowonlna" → powinno być | "dowolna" |
| Structured data (index) | "Jak zapisac sie" (brak polskich znaków) | "Jak zapisać się" |
| Structured data | Brak polskich znaków w wielu odpowiedziach schema | Dodać polskie znaki |
| NavBar.astro | Komponent "MobileMenuHamburder" | "MobileMenuHamburger" (kosmetyczne, nazwa pliku) |
| Copyright w footer | "2025" | Rozważyć "2025–2026" (aktualizacja roku) |

---

## 6. Nawigacja i UX

### 6.1 Struktura nawigacji

```
Logo (→ /)
├── Serwer (→ /)
│   ├── HEX Event (→ /hexEvent)
│   ├── HEX Mini-Games (→ /hexMiniGames)
│   ├── HEX Mask Ritual (→ /hexPvp)
│   ├── HEX Hardcore SMP (→ /hexHardcoreSmp)
│   └── HEX Parkour (→ /hexParkour)
├── Archiwum eventów (→ /archive)
├── Sklep (→ /shop)
└── Kontakt (→ /contact)
    ├── O nas (→ /about)
    └── Kontakt (→ /contact)
```

**Problemy:**
1. "Serwer" linkuje do `/` (strony głównej) — zduplikowany link z logo
2. "Kontakt" w nawigacji ma pod-menu z "Kontakt" — rekurencja nazwy
3. "O nas" ukryte w podmenu "Kontakt" — powinno być bardziej widoczne
4. Brak breadcrumbs widocznych na stronie (schema jest, ale nie ma wizualnego komponentu)

### 6.2 Footer

**Obecne linki:** Strona główna, Archiwum, Sklep, Regulamin (PDF)

**Brakujące linki:**
- Kontakt
- O nas
- Polityka prywatności
- O sklepie
- Poszczególne tryby gry
- Sitemap HTML
- Social media labels (są ikonki, ale bez tooltipów)

### 6.3 CTA i ścieżki konwersji

**Główny CTA:** "Dołącz" → Discord (nie serwer MC)

Brak jasnej ścieżki: "Chcę zagrać" → co robię?
Zalecenie: Dodać sekcję "Jak dołączyć w 3 krokach":
1. Pobierz Minecraft Java Edition
2. Wpisz adres: MinecraftHEX.pl
3. Wybierz tryb w lobby

### 6.4 Navbar — logo i import

W NavBar.astro jest podwójny import logo:
```astro
<LogoIcon/>
<img src="/logo.ico" style="width: 60px;"/>
```
Oba renderowane jednocześnie — prawdopodobnie jeden jest zbędny.

---

## 7. Dostępność (a11y)

### Co jest OK:
- ✅ FAQ: `aria-expanded`, `aria-hidden`, obsługa klawiatury (Enter/Space)
- ✅ Semantyczne tagi: `header`, `nav`, `section`, `article`, `footer`
- ✅ `<button>` w FAQ (nie `<div>`)
- ✅ `lang="pl"` na `<html>`

### Co brakuje:
| Element | Status | Wpływ |
|---------|--------|-------|
| Skip-to-content link | ❌ Brak | Użytkownicy klawiatury muszą tabulować przez całe nav |
| aria-label na nav | ⚠️ Minimalny | Brak `aria-label="Nawigacja główna"` na `<nav>` |
| aria-label na submenu | ❌ Brak | Screen readery nie rozróżnią podmenu |
| Focus visible styles | ⚠️ Do sprawdzenia | Czy outline jest widoczny na focus? |
| Contrast ratio | ⚠️ Do sprawdzenia | Złoty tekst (#ffd88c) na ciemnym tle — blisko limitu WCAG AA |
| Alt texty w archiwum | ⚠️ Do weryfikacji | ~24+ obrazów bez potwierdzonego alt |
| `aria-disabled` na coming soon | ✅ Obecny | HexContainer poprawnie oznacza disabled |

---

## 8. Wydajność

### 8.1 Fonty
- **3 font-family** (Montserrat Variable, Roboto 2 wagi, Minecraft 2 wagi) = 5+ plików fontów
- Brak `font-display: swap` — ryzyko FOIT (Flash of Invisible Text)
- Format `truetype` — brak woff2 (mniejszy rozmiar)

**Zalecenie:** Dodać `font-display: swap` i skonwertować fonty do woff2.

### 8.2 Obrazy
- Lazy loading zaimplementowany ✅
- Mean-color placeholder ✅
- Brak `<picture>` z WebP/AVIF — tylko JPG/PNG
- Brak `srcset` / `sizes` dla responsywnych obrazów

### 8.3 JavaScript
- Carousel, countdown, server counter, social proof animation — wszystko inline `<script>`
- Brak code splitting — ładowane na każdej stronie via Layout

### 8.4 CSS
- Import globalnego CSS we wszyscy komponentach (`import "../../styles/global.css"`)
- Potencjalna duplikacja w bundlu (Astro powinno deduplikować, ale warto sprawdzić bundle size)

---

## 9. Rekomendacje — priorytetyzowana lista zmian

### 🔴 KRYTYCZNE (zrobić natychmiast)

| # | Zmiana | Wpływ | Status |
|---|--------|-------|--------|
| 1 | **Usunąć duplikat hexHardcoreSsmp** — redirect 301 do hexHardcoreSmp | SEO: duplicate content penalty | ✅ DONE |
| 2 | **Naprawić `div { display: flex }` w global.css** — przenieść na klasy | Stabilność layoutu, maintainability | ⏳ ODŁOŻONE (ryzykowne bez pełnych testów) |
| 3 | **Naprawić `padding: 10 60px`** → `padding: 10px 60px` w Welcome.styles.css | Poprawność CSS | ✅ DONE |
| 4 | **Naprawić `.fade-imag2`** → `.fade-image2` w FullImageContainer.css | Brak działania animacji | ✅ DONE |
| 5 | **Naprawić literówkę "Serwer Dicord"** → "Serwer Discord" | Wizerunek | ✅ DONE |

### 🟠 WYSOKIE (w najbliższym tygodniu)

| # | Zmiana | Wpływ | Status |
|---|--------|-------|--------|
| 6 | **Naprawić "Truniej" → "Turniej"** w archiwum (6 wystąpień) | SEO + wizerunek | ✅ DONE |
| 7 | **Naprawić "bierząco" → "bieżąco"** i inne literówki w FAQ | Wizerunek | ✅ DONE |
| 8 | **Dodać polskie znaki w structured data** (JSON-LD) | SEO rich snippets | ✅ DONE (11 stron) |
| 9 | **Rozbudować footer** — dodać linki do kontaktu, o nas, polityki prywatności | SEO + UX | ✅ DONE (8 linków, 2 rzędy) |
| 10 | **Dodać `font-display: swap`** do @font-face | Core Web Vitals (CLS/FCP) | ✅ DONE (5 @font-face) |
| 11 | **Dodać breadcrumbs wizualne** na podstronach | UX + SEO | ✅ DONE (13 stron) |
| 12 | **Rozbudować sekcję "Dlaczego warto zagrać?"** — dodać opisy do kart | Konwersja | ✅ DONE |

### 🟡 ŚREDNIE (w najbliższych 2-4 tygodniach)

| # | Zmiana | Wpływ | Status |
|---|--------|-------|--------|
| 13 | **Uporządkować paletę kolorów** — CSS variables zamiast hardcoded | Maintainability | ⏳ TODO |
| 14 | **Skonsolidować breakpointy** do 4-5 głównych | Maintainability | ⏳ TODO |
| 15 | **Dodać skip-to-content link** | Dostępność | ✅ DONE |
| 16 | **Rozbudować strony trybów gry** lub ustawić noindex | SEO thin content | ⏳ TODO |
| 17 | **Dodać sekcję "Jak dołączyć w 3 krokach"** na stronie głównej | Konwersja | ✅ DONE |
| 18 | **Usunąć podwójne logo** w NavBar (LogoIcon + img) | Czystość kodu | ✅ DONE |
| 19 | **Dodać aria-label** na `<nav>` i podmenu | Dostępność | ✅ DONE (nav + logo link) |
| 20 | **Alt texty w archiwum** — zweryfikować i uzupełnić | SEO + a11y | ⏳ TODO |
| 21 | **Z-index system** — uporządkować hierarchię | Maintainability | ⏳ TODO |

### 🟢 NISKIE (backlog / nice to have)

| # | Zmiana | Wpływ | Status |
|---|--------|-------|--------|
| 22 | Dodać hreflang tag (pl) | SEO sygnał językowy | ⏳ TODO |
| 23 | Skonwertować fonty do woff2 | Wydajność | ⏳ TODO |
| 24 | Dodać `<picture>` z WebP/AVIF | Wydajność | ⏳ TODO |
| 25 | Dodać VideoObject schema (YouTube) | Rich snippets | ⏳ TODO |
| 26 | Rozważyć blog/news section | SEO long-term, content marketing | ⏳ TODO |
| 27 | Dodać testimonials/reviews od graczy | Social proof, konwersja | ⏳ TODO |
| 28 | Formularz kontaktowy (RecaptchaLayout gotowy) | UX | ⏳ TODO |
| 29 | Aktualizować copyright 2025 → 2025–2026 | Aktualność | ✅ DONE |
| 30 | Oczyścić TikTok URL w footerze (tracking params) | Czystość kodu | ✅ DONE |
| 31 | Usunąć `!important` w MobileMenu.styles.css | CSS specificity | ⏳ TODO |
| 32 | Ujednolicić font-family w tabelach (sans-serif → Montserrat) | Spójność wizualna |

---

## Załącznik A: Mapa stron z oceną treści

| Strona | URL | Treść | SEO | Wizualna | Ogólna |
|--------|-----|-------|-----|----------|--------|
| Strona główna | / | ✅ | ✅ | ✅ | ✅ |
| O nas | /about | ✅✅ | ✅ | ✅ | ✅✅ |
| Archiwum | /archive | ✅ | ✅ | ✅ | ✅ |
| Kontakt | /contact | ⚠️ | ✅ | ✅ | ⚠️ |
| Sklep | /shop | ⚠️ | ✅ | ⚠️ | ⚠️ |
| O sklepie | /aboutShop | ✅ | ⚠️ | ✅ | ⚠️ |
| Regulamin | /regulations | ✅ | ✅ | ✅ | ✅ |
| Polityka prywatności | /politics | ✅ | ✅ | ✅ | ✅ |
| HEX Event | /hexEvent | ❌ | ⚠️ | ⚠️ | ❌ |
| Mini Games | /hexMiniGames | ❌ | ⚠️ | ⚠️ | ❌ |
| PVP | /hexPvp | ❌ | ⚠️ | ⚠️ | ❌ |
| Parkour | /hexParkour | ❌ | ⚠️ | ⚠️ | ❌ |
| Hardcore SMP | /hexHardcoreSmp | ❌ | ⚠️ | ⚠️ | ❌ |
| Hardcore SSMP | /hexHardcoreSsmp | ❌❌ | ❌ | ⚠️ | ❌❌ |

**Legenda:** ✅✅ = Wzorcowe | ✅ = Dobre | ⚠️ = Do poprawy | ❌ = Problematyczne | ❌❌ = Do usunięcia

---

## Załącznik B: Checklist do śledzenia progress

- [ ] Usunąć hexHardcoreSsmp + redirect 301
- [ ] Naprawić global `div { display: flex }`
- [ ] Naprawić `padding: 10 60px`
- [ ] Naprawić `.fade-imag2`
- [ ] Naprawić "Serwer Dicord"
- [ ] Naprawić "Truniej" × 6
- [ ] Naprawić literówki FAQ
- [ ] Polskie znaki w structured data
- [ ] Rozbudować footer
- [ ] font-display: swap
- [ ] Breadcrumbs wizualne
- [ ] Rozbudować "Dlaczego warto zagrać?"
- [ ] Uporządkować CSS variables
- [ ] Skonsolidować breakpointy
- [ ] Skip-to-content link
- [ ] Rozbudować/noindex strony trybów
- [ ] "Jak dołączyć w 3 krokach"
- [ ] Usunąć podwójne logo
- [ ] aria-label na nav
- [ ] Alt texty archiwum
