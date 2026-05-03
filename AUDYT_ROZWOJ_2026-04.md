# Audyt rozwojowy – HEX Network (minecrafthex.pl)

> Data: 21.04.2026
> Autor: skan wizualny + SEO + propozycje rozwojowe
> Uzupełnia istniejący [AUDYT_STRONY.md](AUDYT_STRONY.md) (ten plik skupia się na problemach technicznych; tu — wizualne, stylistyczne, treściowe i interaktywne propozycje rozwojowe).
> Plik jest napisany tak, aby agent mógł podejmować poszczególne zadania sekwencyjnie (każda sekcja zawiera konkretny cel, lokalizację zmian i kryterium ukończenia).

---

## 0. Status realizacji

Każde zadanie ma checkbox; agent powinien go zaznaczać po ukończeniu i commicie. Priorytety: 🔴 krytyczne • 🟠 wysokie • 🟡 średnie • 🟢 niskie.

---

## 1. Bugi znalezione podczas skanu (naprawić w pierwszej kolejności)

### 1.1 🔴 404: `Roboto-Regular.ttf` i `Roboto-Bold.ttf`
- **Gdzie:** [src/layouts/Layout.astro](src/layouts/Layout.astro#L62-L63)
- **Problem:** `@font-face` wskazuje na `${base}Roboto/Roboto-Regular.ttf` oraz `${base}Roboto/Roboto-Bold.ttf`, ale pliki znajdują się w `public/Roboto/static/Roboto-Regular.ttf` i `public/Roboto/static/Roboto-Bold.ttf`. Katalog `public/Roboto/` zawiera tylko warianty `VariableFont_wdth,wght.ttf`.
- **Skutek:** 404 przy każdym wejściu na stronę, FOUT, niepotrzebny ruch 404 w logach, Netlify access-log noise.
- **Do zrobienia (wybierz 1):**
  - [ ] Zmienić ścieżki w `Layout.astro` na `${base}Roboto/static/Roboto-Regular.ttf` i `${base}Roboto/static/Roboto-Bold.ttf`, **albo**
  - [ ] Przenieść `Roboto-Regular.ttf` + `Roboto-Bold.ttf` z `public/Roboto/static/` do `public/Roboto/`, **albo**
  - [ ] Przejść na `Roboto-VariableFont_wdth,wght.ttf` (jeden plik, wszystkie wagi; `font-weight: 100 900`).
- **Kryterium ukończenia:** brak 404 w zakładce Network na `/` i podstronach.

### 1.2 🔴 `/videos/devlog/WaterEffect.mp4` i `/videos/devlog/IceBergBoom.mp4` – `net::ERR_ABORTED`
- **Gdzie:** [src/components/PageContent/Devlog/Devlog.astro](src/components/PageContent/Devlog/Devlog.astro)
- **Problem:** Pliki istnieją w `public/videos/devlog/`, ale dev server zwraca `ERR_ABORTED`. Najczęstsze przyczyny w Astro dev:
  1. `<video>` próbuje `preload="auto"` + range request przerwany przez HMR.
  2. Brak atrybutów `muted` + `playsinline` – Chrome blokuje autoplay, przeglądarka anuluje żądanie.
  3. `base` path: w ścieżkach użyto `/videos/...` zamiast `${import.meta.env.BASE_URL}videos/...`.
- **Do zrobienia:**
  - [ ] Dodać `preload="metadata"` (zamiast `auto`), `muted`, `playsinline`, `loop` do każdego `<video>` w devlogu.
  - [ ] Użyć `import.meta.env.BASE_URL` w ścieżkach src (spójne z fontami).
  - [ ] Dodać `<source src="..." type="video/mp4">` zamiast `src` na elemencie `<video>` – lepsza obsługa formatów.
  - [ ] Rozważyć kompresję (HandBrake, 720p, CRF 26) – `IceBergBoom.mp4` i `WaterEffect.mp4` powinny ważyć < 2 MB każdy.
- **Kryterium ukończenia:** filmy renderują się w `/devlog` bez błędów w konsoli.

### 1.3 🟠 Homepage „HEX w liczbach" — ryzyko wizualnego „0"
- **Gdzie:** [src/components/Welcome.astro#L73-L83](src/components/Welcome.astro#L73-L83)
- **Obserwacja:** wartości `7 / 52 / 140` są w HTML, ale `IntersectionObserver` ustawia `textContent = "0"` przed animacją. Jeśli użytkownik wejdzie z wyłączonym JS lub `prefers-reduced-motion: reduce`, zobaczy „0". Dodatkowo: przy wolnym CPU/scrolu migocze.
- **Do zrobienia:**
  - [ ] W bloku `IntersectionObserver` sprawdzać `window.matchMedia('(prefers-reduced-motion: reduce)').matches` — jeśli `true`, pozostawić statyczne wartości (bez animacji).
  - [ ] Obsługa `noscript`: dodać `<noscript>` z natywnymi liczbami.
  - [ ] Nie nadpisywać `textContent` na 0 przy inicjalizacji — zamiast tego uruchomić animację od razu po załadowaniu, jeśli element jest w viewport.
- **Kryterium ukończenia:** z wyłączonym JS widać `7 / 52 / 140`; z `prefers-reduced-motion` liczby są od razu końcowe.

---

## 2. Design system – decyzje do uporządkowania

### 2.1 🟡 Kompletna paleta w CSS variables
- **Gdzie:** [src/styles/global.css](src/styles/global.css)
- **Co zrobić:** zdefiniować spójny zestaw tokenów w `:root` i sukcesywnie zamieniać hardkodowane wartości w komponentach. Propozycja:
  ```css
  :root {
    /* Brand */
    --brand-accent: #ffa600;
    --brand-accent-hover: #ffb52a;
    --brand-accent-active: #c07d00;
    --brand-accent-soft: rgba(255, 166, 0, 0.12);

    /* Neutrals (dark theme) */
    --surface-0: #0a0b0e;  /* page background */
    --surface-1: #10141a;  /* section */
    --surface-2: #151920;  /* card */
    --surface-3: #222833;  /* elevated */
    --surface-4: #2c2d32;  /* hover */
    --border-subtle: rgba(255, 255, 255, 0.08);
    --border-strong: rgba(255, 255, 255, 0.16);

    /* Text */
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.72);
    --text-tertiary: rgba(255, 255, 255, 0.48);

    /* Semantic */
    --success: #4ade80;
    --warning: #fbbf24;
    --danger: #ef4444;

    /* Spacing (4px grid) */
    --space-1: 4px;  --space-2: 8px;  --space-3: 12px;
    --space-4: 16px; --space-5: 24px; --space-6: 32px;
    --space-7: 48px; --space-8: 64px; --space-9: 96px;

    /* Radii */
    --radius-sm: 6px;  --radius-md: 10px;
    --radius-lg: 16px; --radius-pill: 999px;

    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
    --shadow-md: 0 4px 12px rgba(0,0,0,0.35);
    --shadow-glow: 0 0 24px rgba(255, 166, 0, 0.25);

    /* Motion */
    --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
    --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
    --dur-fast: 150ms; --dur-base: 250ms; --dur-slow: 450ms;

    /* Z-index */
    --z-base: 1;     --z-sticky: 100; --z-dropdown: 200;
    --z-overlay: 300; --z-modal: 400; --z-toast: 500;
  }
  ```
- **Do zrobienia:**
  - [ ] Dodać blok tokenów do `global.css` (nie usuwać istniejących zmiennych; stare zostawić jako aliasy na nowe).
  - [ ] Zrobić sweep `grep` po `#0d0d0d|#2c2d32|#222833|#151920|#10141a|#f3f3f3|#f5f5f5|#fafafa|#ccc|#888|#555|#444|#999999|#ffb52a|#c07d00` i podmieniać na tokeny (po 1-2 pliki na PR).

### 2.2 🟡 Spójne breakpointy (4 punkty graniczne)
- **Gdzie:** wszędzie w CSS (14+ breakpointów, rozsynchronizowane).
- **Do zrobienia:**
  - [ ] Ustalić 4 punkty: `480px` (mobile), `768px` (tablet), `1024px` (small desktop), `1440px` (wide). Zapisać jako media-var (`@custom-media` lub komentarz + konwencja).
  - [ ] Przy każdej edycji komponentu konsolidować istniejące media queries do tej siatki.

### 2.3 🟡 Typografia — hierarchia
- **Do zrobienia:**
  - [ ] Zdefiniować role w `global.css`: `--fs-display` (48-64px hero), `--fs-h1` (36px), `--fs-h2` (28px), `--fs-h3` (20px), `--fs-body` (16px), `--fs-small` (13px) — z użyciem `clamp()` dla płynnej responsywności.
    ```css
    --fs-display: clamp(2.5rem, 5vw + 1rem, 4rem);
    --fs-h1: clamp(1.75rem, 2.5vw + 1rem, 2.5rem);
    --fs-body: clamp(0.95rem, 0.3vw + 0.9rem, 1.05rem);
    ```
  - [ ] Tabele (`SimpleDataTable`): przełączyć z `sans-serif` na `Montserrat`.
  - [ ] Globalny `h1-h6 { display: flex; flex-direction: column }` – usunąć (patrz `global.css`; to zostało po migracji i łamie inline `<strong>` w nagłówkach).

---

## 3. Propozycje wizualne per strona

### 3.1 Strona główna (`/`)
- **Obserwacje ze skanu:**
  - Hero wygląda dobrze (pixelowe logo, 2 CTA), ale tło jest dość spokojne — brakuje „iskier życia".
  - Sekcja trybów to karty + 3 „Niebawem". „Niebawem" wygląda pusto.
  - „HEX w liczbach" — ładne, ale ikony/emoji na kartach brakuje.
  - „Aktualności i plany" — statyczny grid kafli, nie wygląda jak newsy, bardziej jak katalog.
  - „Dlaczego warto zagrać?" i „Jak dołączyć?" — dobre; „Sklep / Archiwum" — solidne duo-cards.
- **Propozycje:**
  - [ ] 🟠 **Hero – cząsteczki / subtelne parallax:** za logiem dodać canvas z kilkudziesięcioma „kostkami Minecraft" lewitującymi na tle (Y drift ±20px, 8-15s), lub lżejszą wersję: CSS `@keyframes` z 10-20 małymi kwadratami `background: var(--brand-accent-soft)`. Nie używać dużych obrazów – maks 3-5 KB JS + CSS.
  - [ ] 🟠 **Live server status badge w hero:** dołączyć do przycisków „Dołącz" mały pill `<span class="serverStatus">● X graczy online</span>`. Źródło: już istniejący endpoint (`ServerCounter.astro` pollował dane). Pill na zielono jeśli > 0, na szaro „Offline" jeśli down.
  - [ ] 🟠 **„Niebawem" z progress bar / ETA:** zamiast pustego oznaczenia dodać pasek postępu (np. PVP 30%, Parkour 15%) albo countdown „ETA Q3 2026". Statyczne, ale buduje oczekiwanie.
  - [ ] 🟡 **Kafelki „Aktualności" → feed typu changelog:** zmienić z siatki 4×1 na pionowy timeline z linią po lewej (`::before` z `border-left`) + data + tag kategorii. Link „Zobacz pełen devlog →" na końcu.
  - [ ] 🟡 **Social proof bar pod hero:** cienki pasek z 3 elementami: „⚔️ 7 turniejów", „🏆 52 graczy w rankingu", „💰 3250 zł rozdanych w nagrodach" — liczby agregowane z `/archive`.
  - [ ] 🟡 **Animowany gradient na akcencie:** `background: linear-gradient(90deg, var(--brand-accent), #ff7a00)` na CTA `Dołącz na Discord` z `background-size: 200% 100%` + `animation: shimmer 3s linear infinite` — subtelny ruch.

### 3.2 HEX SMP (`/hexSmp`)
- **Obserwacje:** bardzo dobra strona, copy sprzedażowe („Nie kolejny SMP", „Twoja baza, Twoja twierdza"), quiz, devlog preview, gallery, FAQ.
- **Propozycje:**
  - [ ] 🟠 **Galeria screenów „Budowa HEX SMP":** obecnie tylko 3 obrazy + 2 placeholdery „Więcej screenów wkrótce". Uzupełnić rzeczywistymi screenami (agent: poprosić właściciela o pliki, do tego czasu użyć realnych screenów z devlogu).
  - [ ] 🟠 **Quiz – wynik na końcu:** obecnie „Pytanie 1 z 5" — upewnić się, że końcówka daje wynik + share button („Twój styl: Builder/PvP'er/Trader/Social — udostępnij na Discord"). Bez wyniku quiz traci sens.
  - [ ] 🟡 **Live production tracker:** sekcja „Co słychać w produkcji" — zamiast 3 statycznych kart, dodać pasek postępu dla modułów: `Ekonomia: 80%`, `Mapa: 60%`, `PvP balance: 40%`. Zaktualizowane ręcznie w frontmatter.
  - [ ] 🟡 **Waitlist / early-access form:** „Bądź pierwszy" → teraz tylko CTA na Discord. Dodać prosty form e-mail (lub link do kanału Discord #waitlist) z licznikiem „Zapisało się: N osób".
  - [ ] 🟢 **Typing effect na hero:** „Twój świat. Twoje zasady. Twoi rywale." — animacja typewriter (0.05s/znak, po załadowaniu). Small JS, efekt wow.

### 3.3 Event Zone (`/hexEvent`)
- **Obserwacje:** hero + karta „Titanic" + kulisy + „Co oferuje" + „Jak to działa" + „7 eventów za nami" + FAQ. Solidnie.
- **Propozycje:**
  - [ ] 🔴 **Countdown do najbliższego eventu:** karta „Titanic" pokazuje datę 16.05.2026 19:00, ale brak live countdown. Strona główna ma countdown (`CountdownTimer.astro`) — wystarczy zaimportować ten sam komponent z propem `targetDate="2026-05-16T19:00:00"`.
  - [ ] 🟠 **Harmonogram eventu (timeline):** dodać poziomy timeline dnia eventu: 19:00 – Zbiórka; 19:15 – Runda 1; 20:00 – Runda 2; 21:00 – Finał; 21:30 – Wręczenie nagród. Mocno podnosi zaangażowanie.
  - [ ] 🟠 **Rejestracja na event (CTA na kanał Discord):** zamienić „Dołącz na Discord" na „🎯 Zapisz się na HEX VIII →" z deep-linkiem do odpowiedniego kanału Discord (`https://discord.com/channels/.../.../`).
  - [ ] 🟡 **Teaser film / trailer:** w „Za kulisami Titanic" zamiast placeholdera „Film z procesu tworzenia — wkrótce" osadzić YouTube short lub TikTok embed (1 ukończony format).
  - [ ] 🟡 **Lista zapisanych graczy (tylko liczba):** live `N / 50 miejsc zajętych` (pull z Discord API lub ręcznie w frontmatter), z paskiem postępu.

### 3.4 Archiwum (`/archive`)
- **Obserwacje:** bardzo dobra strona, 6 kart turniejów z hero, pulą, zwycięzcą, galerią i listą gier.
- **Propozycje:**
  - [ ] 🟠 **Filtry / tagi na górze:** „Wszystkie | 2025 | 2026 | Świąteczne | Inspirowane" — filtrowanie po dacie/motywie. Prosta JS-owa implementacja `data-tags`.
  - [ ] 🟠 **Suma statystyk na górze:** nad listą dodać banner „6 turniejów · 141 uczestników · 3250 zł rozdanych · 36 gier w sumie".
  - [ ] 🟠 **Hall of Fame:** nowa sekcja na dole — TOP 5 graczy z najwięcej wygranymi (Grzesztof ×2, soonne ×2, itp.) z awatarami Minecraft (`https://mc-heads.net/avatar/{nick}/100`).
  - [ ] 🟡 **Lightbox – PhotoSwipe już jest (dependency), ale warto sprawdzić czy slide działa między zdjęciami z jednego turnieju (grouping po `data-pswp-id`).
  - [ ] 🟡 **„Zobacz highlights" — osadzić YouTube Short pod każdym turniejem (gdy dostępne).
  - [ ] 🟢 **Karta z „mapą motywów"** (timeline horyzontalny): Hex I → Hex II → Hex III (Pokemon) → Hex IV (Squid Game) → Hex V (Harry Potter) → Hex VI (Świąteczny) → Hex VII → Hex VIII (Titanic). Wizualna oś czasu.

### 3.5 Devlog (`/devlog`)
- **Obserwacje:** proste artykuły jeden pod drugim, dobre copy, ale lot of plain text + zepsute wideo.
- **Propozycje:**
  - [ ] 🟠 **Kategoryzacja + filtry:** pills nad listą: „Wszystkie | SMP | Event | Infrastruktura | Ogólne". Dane `data-category` już częściowo są.
  - [ ] 🟠 **Skrócone paragrafy:** ściana tekstu w wpisach 17.04 i 7.03 powinna być podzielona na akapity po 2-3 zdania, ewentualnie z pogrubieniami kluczowych fraz.
  - [ ] 🟠 **Hero / cover per wpis:** każdy wpis dostaje obrazek (może być placeholder `images/devlog/{slug}.jpg`) wyświetlany po lewej (thumbnail) lub jako cover pełnej szerokości.
  - [ ] 🟠 **Subskrypcja devlog:** „📬 Subskrybuj zmiany — dostaniesz powiadomienie na Discordzie". Przycisk → deeplink do roli / kanału Discord `#devlog`.
  - [ ] 🟡 **Kolekcje Astro Content (`src/content/devlog/*.md`):** migracja z hardkodowanych artykułów w `.astro` na kolekcje. Umożliwi filtrowanie, paginację, sortowanie, RSS.
  - [ ] 🟡 **RSS feed (`/devlog/rss.xml`):** dla osób, które chcą subskrybować w czytniku. Astro ma `@astrojs/rss`.
  - [ ] 🟢 **Avatar / nick autora:** „Napisał: Capybit" (MC head avatar) — lekki human touch.

### 3.6 Kontakt (`/contact`)
- **Obserwacje:** dobrze zrobione — 2 karty (e-mail + Discord), „Najlepsze kanały kontaktu", FAQ.
- **Propozycje:**
  - [ ] 🟠 **Formularz kontaktowy:** `RecaptchaLayout` istnieje (patrz `src/layouts/`), `nodemailer` jest w dependencies — składniki są, brakuje strony. Dodać formularz z polami: `Imię / nick`, `E-mail`, `Temat` (dropdown: Współpraca / Reklama / Pytanie / Bug), `Wiadomość`. Backend: Netlify Functions lub `mailto:` jako fallback.
  - [ ] 🟠 **„Czas odpowiedzi: zwykle < 24 h":** budowanie zaufania. Można też dodać live badge „Zespół teraz online" (bazując na obecności na Discord).
  - [ ] 🟡 **Avatary zespołu:** karty 3-4 osób (lub tylko Capybit + moderatorzy) ze zdjęciem/awatarem + rolą. Buduje twarz projektu.

### 3.7 Sklep (`/shop`)
- **Obserwacje:** bardzo dobrze — landing przed przekierowaniem na ViShop, 4 kategorie, „Jak to działa", informacje prawne, FAQ.
- **Propozycje:**
  - [ ] 🟠 **Preview najpopularniejszych pakietów:** zamiast tylko ogólnych kategorii, pokazać 3 konkretne produkty z cenami (screen/mock z ViShop) + „Kup" → deeplink do konkretnego produktu. Zmniejsza tarcie.
  - [ ] 🟠 **„Korzyści VIP" – tabela porównawcza:** Free vs. VIP vs. VIP+ vs. MVP. Tabelka z checkmarkami — klasyczne saas-style pricing.
  - [ ] 🟡 **Testimonials / opinie graczy:** 2-3 cytaty „Dzięki VIP szybciej grinduję", „Świetne wsparcie" (z awatarami MC).
  - [ ] 🟡 **„Ile już zebraliśmy" (transparentność):** mały wykres „W Q1 2026 serwer utrzymał się dzięki VIP" — nie ujawnia konkretnych kwot, ale pokazuje transparentność.

### 3.8 O nas (`/about`)
- **Obserwacje:** z audytu — najlepsza treściowo, ~2000 słów.
- **Propozycje:**
  - [ ] 🟡 **Timeline projektu:** pionowa oś czasu „2025-03 Hex I → 2025-04 Hex II → ... → 2026-05 Hex VIII → 2026 Start HEX SMP → 2027 HEXHogwart". Wizualne podsumowanie.
  - [ ] 🟡 **Sekcja zespołu** (patrz `3.6`).
  - [ ] 🟡 **Nasze wartości (3-4 kafelki):** „Zero pay-to-win", „Polska społeczność", „Autorskie pluginy", „Transparentność".

### 3.9 Regulaminy / polityka (`/regulations`, `/politics`, `/aboutShop`)
- **Propozycje:**
  - [ ] 🟡 **TOC (spis treści) po lewej (sticky):** długie dokumenty są trudne do skanowania. Sticky TOC z linkami `#anchor` mocno poprawia UX.
  - [ ] 🟡 **„Ostatnia aktualizacja: DD.MM.YYYY" na górze każdego dokumentu.**

---

## 4. Żywe / interaktywne elementy (globalne)

Te elementy warto dodać w jednym miejscu (najczęściej homepage / layout) i reużyć:

- [ ] 🟠 **Copy-to-clipboard IP na całej stronie:** obecnie działa na homepage klik w `MINECRAFT HEX`. Dodać to do navbara jako pill „📋 IP: MinecraftHEX.pl" — jeden klik skopiuje wszędzie.
- [ ] 🟠 **Scroll progress bar** (4-6 px wysokości, kolor akcentu) na górze strony — mały visual cue dla długich stron (about, regulamin).
- [ ] 🟡 **Reveal-on-scroll** dla sekcji (fade-in + translateY(16px)). Już jest `revealObs` w `Welcome.astro` — wyekstrahować do `src/scripts/reveal.ts` i reużyć w każdym `Section.astro`.
- [ ] 🟡 **Keyboard shortcuts overlay:** `?` → pokaż dialog „`/` wyszukaj (future), `g h` → home, `g a` → archive, `g s` → shop, `Esc` → zamknij menu". Dla power userów.
- [ ] 🟡 **Toast notifications:** obecnie „📋 Skopiowano adres e-mail!" pojawia się bez animacji. Przekuć w reużywalny `toast.ts` z slide-in + auto-dismiss 3s.
- [ ] 🟢 **Cursor glow** (na desktopie, bez reduce-motion): promień akcentu 200px dookoła kursora jako `radial-gradient` nad warstwą hero. Małe, ale buduje premium feel.

---

## 5. Nowe tematy / strony warte dodania

- [ ] 🟠 **`/ranking` — Ranking graczy (sezonowy + roczny):** obecnie sekcja „sezonowy ranking" jest wspomniana, ale brak strony. To KLUCZOWY motywator rozgrywki. Dane: JSON w `src/data/ranking.json` (manual update) lub pull z pluginu na serwerze.
- [ ] 🟠 **`/najblizszy-event` / anchor na `/hexEvent`:** agresywnie SEO-friendly URL „turniej-minecraft-maj-2026" z własnym page w kolekcji `events/*.md`.
- [ ] 🟠 **`/blog` lub `/news`:** zespół już pisze dobry devlog — rozbicie na 2 strumienie: devlog (techniczny) + news (event recaps, ogłoszenia dla graczy) pomaga SEO (więcej indexowanych, aktualnych URL).
- [ ] 🟡 **`/zwyciezcy` (Hall of Fame):** wszystkie zwycięstwa z archiwum, sortowalne po liczbie wygranych. MC avatars.
- [ ] 🟡 **`/pluginy` / `/technologia`:** krótki landing o autorskich pluginach (1 akapit + GIF). SEO pod frazę „autorskie pluginy Minecraft".
- [ ] 🟡 **`/spolecznosc` / `/community`:** kompilacja TikTok / YouTube Shorts, highlights z Discord, fan arts. Live community feed.
- [ ] 🟡 **`/404` custom:** z zabawnym creeper / endermanem + suggestowanymi linkami. Obecnie Netlify default.
- [ ] 🟢 **`/presskit`:** logo w różnych formatach, kolory brandu, opis w 50/200 słów, dla streamerów i mediów.
- [ ] 🟢 **`/kariera` / `/do-zespolu`:** jeśli rekrutujecie buildersów/pluginistów — landing z listą ról.

---

## 6. SEO – dodatkowe poprawki (poza AUDYT_STRONY.md)

- [ ] 🟠 **Open Graph images per strona:** obecnie jeden wspólny `ogImage`. Każda strona powinna mieć własny OG image 1200×630 (mogą być generowane przez Astro `satori` lub ręcznie w Figmie, 30 min roboty).
- [ ] 🟠 **Internal linking:**
  - Footer: dodać linki do `/hexSmp`, `/hexEvent` (obecnie w footerze nie ma linków do trybów).
  - Dodać `<aside class="relatedLinks">` na dole każdej strony trybu: „Zobacz też: [Event Zone] [Archiwum] [Devlog]".
- [ ] 🟠 **Kolekcja Astro `events`** + `getStaticPaths` → strony per turniej (`/archive/hex-vi`, `/archive/hex-vii`). Każda z osobnym `<title>`, OG, `Event` schema. 6× więcej stron indeksowanych pod long-tail frazy.
- [ ] 🟡 **Schema `VideoObject`:** dla osadzonych YouTube Shorts — `@type: VideoObject` z `thumbnailUrl`, `uploadDate`, `duration`.
- [ ] 🟡 **Schema `ItemList`** dla archiwum (6 turniejów) i rankingu.
- [ ] 🟡 **Schema `AggregateRating`** od graczy (musi być realne, autentyczne — np. scrapingowane z Discord reakcji lub ankiety).
- [ ] 🟡 **`hreflang="pl-PL"`** w `<head>`.
- [ ] 🟡 **Meta `keywords`** (niski impact, ale darmowe) + `meta name="author"`.
- [ ] 🟡 **`<link rel="preload" as="font">`** dla Montserrat Variable i Minecraft Bold — przyspiesza FCP.
- [ ] 🟢 **Core Web Vitals:** przejrzeć LCP (obrazy hero — `fetchpriority="high"` + `loading="eager"` tylko na hero), CLS (fixed dimensions na media), INP (JS bundle split).
- [ ] 🟢 **Sitemap z `priority` i `changefreq`** per URL (plugin `@astrojs/sitemap` wspiera `customPages` i `serialize`).

---

## 7. Dostępność (a11y) – uzupełnienia

- [ ] 🟠 **Focus-visible styles:** wszystkie interaktywne elementy powinny mieć widoczny outline (minimum 2px `var(--brand-accent)` z offsetem 2px).
- [ ] 🟠 **Kontrast:** przetestować `#ffd88c` na ciemnym tle (FAQ) — narzędzie: https://webaim.org/resources/contrastchecker/. Jeśli < 4.5:1, pogrubić lub rozjaśnić.
- [ ] 🟡 **`aria-current="page"`** na aktywnym linku w navbarze + footerze.
- [ ] 🟡 **`aria-live="polite"`** na toasty (copy-to-clipboard) i licznik graczy.
- [ ] 🟡 **Screen reader labels dla ikon socjali** (YouTube, TikTok) — są już, ale warto zweryfikować na VoiceOver/NVDA.
- [ ] 🟢 **Reduced motion**: wszystkie animacje (reveal, shimmer, parallax) w `@media (prefers-reduced-motion: reduce)` ustawić na `animation: none` / `transition: none`.

---

## 8. Wydajność

- [ ] 🟠 **WebP/AVIF dla obrazów archiwum** — ~24 JPG-ów, agent może użyć `sharp`/`squoosh` w build step (Astro `<Image>` component).
- [ ] 🟠 **Lazy load videos** (`preload="metadata"`, `loading="lazy"` przez Intersection Observer).
- [ ] 🟡 **woff2 zamiast ttf** — Montserrat VariableFont do woff2 (~50% mniejszy). Można wygenerować przez `fonttools` lub online.
- [ ] 🟡 **Astro Islands:** quiz, countdown, carousel — przenieść na `client:visible` (obecnie inline `<script>` ładują się globalnie).
- [ ] 🟢 **Prefetch sąsiednich stron:** `<link rel="prefetch" href="/archive">` w footerze.

---

## 9. Checklist wykonawczy (kolejność sugerowana)

1. [ ] Fix Roboto 404 (`Layout.astro`)
2. [ ] Fix devlog videos (`Devlog.astro`)
3. [ ] Countdown na `/hexEvent`
4. [ ] Scroll progress bar (layout)
5. [ ] Live player count w navbarze
6. [ ] `IP copy` pill w navbarze
7. [ ] Hero social proof bar na homepage
8. [ ] Quiz result na `/hexSmp`
9. [ ] Filtry na `/archive`
10. [ ] Summary stats na `/archive`
11. [ ] Hall of Fame na `/archive`
12. [ ] Devlog → Astro Content Collections
13. [ ] Devlog RSS
14. [ ] Formularz kontaktowy + nodemailer
15. [ ] OG images per strona
16. [ ] Tokeny CSS + sweep hardcoded colors
17. [ ] Kolekcja `events/*.md` + dynamic routes
18. [ ] Nowa strona `/ranking`
19. [ ] Custom 404
20. [ ] WebP/AVIF + Astro `<Image>`

---

## 10. Zasady dla agenta realizującego ten plik

1. **Jedno zadanie = jeden commit** (chyba, że są trywialnie powiązane).
2. **Przed dużą zmianą CSS — visual regression:** zrobić screenshota strony przed i po (narzędzie: Chromatic / ręczny screenshot przez Playwright do `tests/visual/`).
3. **Nigdy nie usuwać istniejących CSS variables** — dodawać nowe obok, deprecatować stopniowo.
4. **Każda nowa funkcja JS** powinna mieć graceful degradation (noscript, no-IntersectionObserver fallback).
5. **Testować na mobile (DevTools 375px)** po każdej wizualnej zmianie.
6. **Aktualizować `AUDYT_STRONY.md`** — przenosić zadania do kolumny ✅ DONE po ukończeniu.
7. **Stosować tokeny** z sekcji 2.1 zamiast hardkodowanych wartości.
