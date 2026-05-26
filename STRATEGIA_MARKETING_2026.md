# Strategia marketingowa HEX Network — maj → listopad 2026 (v2)

> **Cel #1 (akwizycja):** Discord 133 → **250 osób do 30.11.2026** (≈6,5 mies., ~18 net new/mies.).
> **Cel #2 (retencja, NOWY):** **~20 stale aktywnych graczy SMP** (zalogowanych ≥3 dni w tygodniu) do końca listopada. To jest KRYTYCZNE — bez retencji Discord będzie się sypał, każdy nowy gracz „przyjdzie i wyjdzie".
> **Budżet:** 200–300 zł/mies. + 200 zł zaplanowane przez Quezo na promo rolki 12.05 i 15.05 pod Titanica.
> **Zespół + ograniczenia:** Havix (pluginy/strona/płatności), Sevin (DevOps/pluginy event/Discord life), Quezo (marketing TikTok/YT, scenariusze, mapy, livestreamy, wstępny montaż), Ania (support). Brak dedykowanego montażysty long-form.
> **Aktywa, które ZIGNOROWALIŚCIE w v1:** Ławka (mikroinfluencer, obserwuje już Capybit), DaxelPL, peter, sonnee — lojalni gracze gotowi do uruchomienia jako ambasadorzy. Mysha (streamerka, niepewne zaufanie) — opcjonalna karta. To są **darmowe armaty marketingowe**, które już macie.

---

## 0. TL;DR v2 — co zmieniło się względem v1 i co robić w tym tygodniu

**Co się zmieniło:**
- **Cel przesunięty na 30.11** (był 31.10) i obniżony z 270 na 250 — dzięki temu mamy +1 miesiąc bufora i miejsce na realny launch SMP (3.07) jako siłę napędową.
- **Dodany cel retencji** (~20 aktywnych SMP). Bez tego liczba na Discordzie jest fikcyjna.
- **Płatne promo rolki 12.05 i 15.05 zostają** (są już w planie Quezo) — ALE z jasnym KPI: jeśli każda nie da min. 5 osób na Discord (vanity invite tracking), wycinamy następne.
- **Aktywujemy Ławkę i lojalnych graczy jako pierwszych ambasadorów** zanim szukamy obcych influencerów (sekcja 4.4 v2).
- **SMP launch 3.07** = główny moment marketingowy roku. Cała strategia maj–czerwiec to pre-launch hype (sekcja 11).

**Konkretne ruchy w najbliższych 7 dniach (do 20.05):**
1. **Vanity invites Discord** — minimum 7 sztuk (`discord.gg/hex-tiktok`, `hex-yt`, `hex-promo1205`, `hex-promo1505`, `hex-titanic`, `hex-lista1`, `hex-quiz`). Bez tego nie wiemy co działa.
2. **Promo rolki 12.05 i 15.05** — wrzućcie z dwoma RÓŻNYMI vanity invitami, żeby porównać.
3. **Brief dla Ławki, Daxela, Petera, sonnee** — krótka wiadomość: „pomóż nam zalajkować i skomentować pierwsze 30 min po wrzuceniu rolek 12.05 i 15.05" (notatki, sekcja „Marketing - brak dummy komentarzy" — to dosłownie waszą diagnozą).
4. **Sevin aktywuje Discord** — codziennie 1–2 wiadomości, gify, pytanie, reakcja. „Życie" na serwerze (z notatek, sekcja 16f).
5. **Zgłoś serwer na 5 list MC** (sekcja 4.1) — czysta robota dla Sevina, 1.5h.
6. **Quiz `/hexSmp`** — Web Share API + dynamic OG image (Havix, ≤2h).
7. **Strona `/dolacz`** — landing pod link w bio TikToka (Havix, ≤2h).

Jeśli zrobicie wyłącznie powyższe 7 ruchów w tym tygodniu, na koniec maja będziecie wiedzieli, które kanały żyją — i wybierzecie 2–3, w które wciskacie gaz przez wakacje.

---

## 1. Diagnoza — co mówią Wasze liczby (zaktualizowana)

### Audyt obecnych kanałów

| Kanał | Stan | Koszt | CAC* | Werdykt v2 |
|---|---|---|---|---|
| TikTok organic | ~300 views/film | 0 zł (czas) | n/a | **Utrzymać** — Quezo + Sevin, harmonogram z sekcji 3.4 |
| TikTok promo płatny | 100–200 zł = 2–5 osób | ~40 zł/osobę | 40 zł | **Zostaje 12.05 + 15.05 jako test** — z trackingiem vanity invite. Po tym binarna decyzja: kasujemy lub skalujemy. |
| Referal v1 | 30 osób / 3 mies., wyczerpany | 0 zł | 0 zł | **Przeprojektować** (sekcja 4.3) |
| Discord 133 obecnie | ~10 nowych/mies. | 0 zł | 0 zł | **Sevin „prowadzi życie" codziennie** (notatki 16f) → cel: <5% miesięczny churn |
| Strona | Świetna technicznie, słaby ruch | 0 zł | n/a | **Brak SEO** — patrz sekcja 5.2 |
| Mikroinfluencerzy (Ławka, Daxel, peter, sonnee — JUŻ ZDOBYCI) | Lojalni, nie aktywowani jako kanał | 0 zł | 0 zł | **NAJWIĘKSZE NIEWYKORZYSTANE AKTYWO** (sekcja 4.4 v2) |
| Lista serwerów MC | Zero obecności | 0 zł | n/a | **Stały dopływ ruchu** (sekcja 4.1) |

*CAC = koszt pozyskania jednego członka.

### Pięć kluczowych wniosków

1. **Problem to NIE jakość contentu, tylko DYSTRYBUCJA + CZĘSTOTLIWOŚĆ + SOCIAL PROOF.** 300 views przy regularnym wrzucaniu = algorytm Was nie zna, plus pierwsze rolki nie mają komentarzy/lajków (sami to zdiagnozowaliście w notatkach: „Algorytmy lubią lajki, komentarze, ulubione, a ludzie lubią gdy ktoś pisze, pyta, mówi wbijam — Tzw. Social Proofs"). Naprawa: **dummy engagement od znajomych w pierwsze 30 min**.
2. **Płacicie za to, co macie za darmo.** Polski MC 12–20 lat siedzi na listach serwerów, cudzych Discordach, YouTube Shorts. Te kanały kosztują tylko czas.
3. **Macie quiz „Jaki typ gracza jesteś?"** w [src/pages/hexSmp.astro](src/pages/hexSmp.astro) — gotowy viral mechanism, którego nikt nie zna, bo brak ruchu na stronę.
4. **NOWY:** Macie SMP launch 3.07 — to jedyny prawdziwy publicity stunt roku. Wszystko od dzisiaj do 3.07 to **pre-launch hype**, nie „normalna komunikacja".
5. **NOWY:** Macie 4 lojalnych graczy gotowych do roli ambasadora (Ławka, Daxel, peter, sonnee — z feedbacku po HEX VII). Ich aktywacja kosztuje 0 zł i ma 10× wyższy ROI niż jakikolwiek influencer obcy.

### Analiza rynku — gdzie jesteście vs. konkurencja

Polski MC 2026 to zatłoczony rynek z wąskim oknem dla małych graczy:

| Segment | Gracze | Wasza realistyczna szansa |
|---|---|---|
| Top komercyjne (Vimeworld, Craftserve flagship) | 500–2000 online | **Zero**. Nie konkurujecie. |
| Średnie SMP/Skyblock (np. Anarchia.gg, klasyki) | 50–300 online | **Realna** — Wasza grupa docelowa, jest miejsce na 5–10 stałych graczy „odebranych" konkurencji |
| Małe community Discord (50–500 osób, jak Wy) | <50 online | **Wasi naturalni partnerzy** (sekcja 4.2) |
| Hardcore SMP EN / global | Tysiące mikrokanałów | **Opcja na 2027**, NIE teraz (sekcja 14) |

**Wniosek rynkowy:** Polska scena MC nie ma w 2026 nikogo, kto robi **SMP z mechanikami Hypixel SkyBlock w polskim wydaniu z autorskim eventem co 2 miesiące**. To Wasza nisza. Konkurujecie nie skalą, tylko **konsekwencją publikacji + jakością eventów + dostępnością ekipy na Discordzie**.

**Czego boi się konkurencja, a Wy macie za darmo:**
- Polska, prawdziwa, gadająca z graczami ekipa (Vimeworld ma to martwo).
- Eventy z prawdziwymi nagrodami pieniężnymi (3450 zł rozdane — sprawdzalne na `/archive`).
- Publiczny devlog (transparentność, której nikt z konkurencji nie pokazuje).
- Strona zoptymalizowana SEO — już rankujecie na „minecraft hex" pierwsi (notatki).

**Czego boicie się Wy, a konkurencja ma to opanowane:**
- Late-game retention (gracz po tygodniu nie wie co robić — diagnoza z notatek).
- Skala bazy graczy (oni mają 500+, Wy 130).
- Zasięg organiczny (oni mają historię i 10k+ followersów).

Strategia v2 atakuje te trzy luki w kolejności: **retencja > dystrybucja > follower count**.

---

## 2. Cele i KPI v2 (Discord + retencja SMP)

### KPI #1 — wzrost Discord (cel: 250 do 30.11)

| Miesiąc | Discord target | Net new | TikTok rolek | Listy MC | Partnerstwa | Główne wydarzenie |
|---|---|---|---|---|---|---|
| Maj | 150 | +17 | 20 (w tym 2 promo) | 5 zgłoszonych | 3 | HEX VIII Titanic (16.05), Mini PVP Eliminator (30.05) |
| Czerwiec | 170 | +20 | 20 | 7 łącznie | 3 | Wyspa Kanibali (13.06), pre-launch SMP hype |
| **Lipiec** | **210** | **+40** | 25 (peak: pre/post SMP launch) | review | 5 | **🔥 SMP LAUNCH 3.07 + HEX IX Star Wars 4.07** |
| Sierpień | 225 | +15 | 22 | 9 łącznie | 4 | Serwer Minigry 22.08 (Party) |
| Wrzesień | 235 | +10 | 22 | review | 4 | Parkour launch 19.09 |
| Październik | 245 | +10 | 25 | — | 5 | Tryb PVP 24.10 + HEX X Halloween 24.10 |
| **Listopad** | **250+** | **+5** | 25 | — | 5 | Bufor + przygotowania pod Hogwart 8.01.2027 |

**Lipiec to make-or-break miesiąc** — start SMP daje pojedynczy największy hype roku. Realistycznie +40 osób, jeśli kampania pre-launch (sekcja 11) zadziała. Jeśli SMP wystartuje cicho, listopadowy target jest niemożliwy.

### KPI #2 — retencja SMP (cel: ~20 stale aktywnych do 30.11) ⭐ NOWY

„Stale aktywny" = zaloguje się ≥3 razy w tygodniu przez 2 kolejne tygodnie.

| Tydzień od launchu (3.07) | Aktywni 7-dniowo | Stale aktywni | Komentarz |
|---|---|---|---|
| Tydzień 1 (3–10.07) | 30–40 (hype) | n/a | Wszyscy wbijają, większość zostanie ≤3 dni |
| Tydzień 2 (10–17.07) | 15–20 | — | Pierwszy filtr — odpada „turyści" |
| Tydzień 4 (24–31.07) | 12–15 | **8–10** | Pierwsza fala stałych |
| Tydzień 8 (sierpień) | 15–18 | **12–14** | HEX IX Star Wars (4.07) wrócił część dropouts |
| Tydzień 12 (wrzesień) | 18–22 | **15–17** | Parkour launch reactivation |
| Tydzień 16 (październik) | 22–25 | **18–20** | HEX X + PVP wzbogaca retencję |
| Tydzień 20 (listopad) | 25–28 | **≥20** | **CEL #2 OSIĄGNIĘTY** |

**Mechanizmy retencji** (sekcja 9 v2): daily quests, miniony, leaderboardy sezonowe, mini bossy co kilka dni, kolekcje all-time (jak Hypixel potato war).

### Drugorzędne KPI (śledźcie co tydzień w arkuszu)

- Średnia views/film TikTok: 300 → 1500 do listopada.
- Click-through z TikToka na Discord (przez vanity invite — sekcja 5.3).
- Konwersja vanity invite → członek Discord (Discord wbudowany invite tracker lub bot).
- Konwersja Discord member → SMP login (Discord <-> MC linking via webhook lub plugin, notatki sek. 2.b „MySQL połączone z webhookami").
- D1/D7/D30 retencja SMP (Day-1 retention = ile osób wraca dzień po pierwszym logowaniu).
- Quiz `/hexSmp` ukończenia + share rate.
- Vote count na listach MC (top placement = darmowy ruch).
- Średni czas sesji SMP (target: >45 min — wskaźnik „mam co robić").

**Reguła kasowania (zaostrzona w v2):** jeśli przez 4 tygodnie (było 6) jakaś taktyka daje <2 nowych Discord/mies. LUB <1 aktywnego SMP/mies. — wycinamy. Mamy mniej czasu i jasne cele.

**Reguła kasowania:** jeśli przez 6 tygodni jakaś taktyka daje <2 nowych osób/mies., wycinacie ją i kierujecie ten czas gdzie indziej.

---

## 3. Content TikTok — co kręcić bez pomysłów i bez montażysty

### 3.1 Złota zasada: nie wymyślajcie. Kopiujcie format, podstawiajcie treść

To jest sekret 90% twórców MC: **template + nowy temat × 50 razy**. Nie potrzebujecie kreatywności — potrzebujecie powtarzalności.

Wybierzcie 2–3 formaty, których trzymacie się przez 3 miesiące. Każdy odcinek = ten sam intro, ta sama struktura, inna treść.

### 3.2 6 formatów które działają i wymagają zero montażu

#### Format A: „Devlog POV" (3–4×/tyg., koszt: 5 min/film)
- Nagrywacie ekran z Minecrafta podczas pracy nad HEX SMP.
- 15–25s wideo, jeden hook tekstowy na ekranie u góry.
- Hook = problem, środek = pokazanie rozwiązania, koniec = pytanie do widza.
- **Przykład:** „Buduję ekonomię, w której nie musisz farmić 6h dziennie" → klip jak działa system → „Powiedz w komentarzu: ile godzin dziennie chcesz grać?"
- Komentarze = paliwo dla algorytmu. Każde pytanie zwiększa watch time + engagement.

#### Format B: „Reaguję na komentarz" (2×/tyg., koszt: 3 min/film)
- TikTok ma natywną funkcję „reply with video" na komentarze.
- Każdy komentarz z poprzednich filmów = nowy film.
- **To jest CHEAT CODE** — TikTok algorytmicznie promuje reply videos, bo budują wątki.
- Nie potrzebujecie pomysłów — komentujący Wam je dają.

#### Format C: „Tier list / ranking" (1×/tyg.)
- „Ranking 5 rzeczy które bałbyś się powiedzieć adminowi serwera MC"
- „Tier list polskich serwerów MC z perspektywy gracza" (subtelnie, bez hate'u)
- „5 rzeczy które robi 99% nowych graczy SMP — i dlaczego się mylą"
- Format: skrin/grafika + voiceover. Edytujesz w Canva lub bezpośrednio w CapCut na telefonie.

#### Format D: „Before / After" (1×/tyg.)
- Budowa w MC: szkielet → finalna budowla, w 15 sekundach.
- Pierwszy dzień serwera vs. po miesiącu.
- Concept art HEX SMP vs. realizacja.
- **Świetnie konwertuje na watch-time** bo ludzie czekają na „after".

#### Format E: „Behind the scenes / kulisy" (1×/tyg.)
- Pokażcie jak budujecie event, jak ustalacie zasady, jak dyskutujecie na Discordzie (z zachowaniem prywatności).
- Ludzie 12–20 lat **uwielbiają** widzieć, jak coś powstaje. To buduje relację z marką.
- Macie to już na stronie (Devlog), ale Wasi widzowie na TikToku tego nie widzą.

#### Format F: „POV jesteś graczem" (1×/2 tyg.)
- Cinematic shot z MC + tekst „POV: właśnie dołączasz na HEX SMP w dzień startu"
- Buduje wyobrażenie i FOMO.
- 1 film = 30 sek nagrania + 1 zdanie na ekranie. Zero edycji.

### 3.3 Zasady minimum jakości (gdy nie ma montażysty)

- **Pierwsze 1.5 sekundy decyduje.** Wrzućcie hook tekstowy NA EKRAN od razu (CapCut: „Caption → bold → first frame").
- **Tekst na ekranie zawsze**, bo 70% TikToka jest oglądane bez dźwięku.
- **Pionowy 9:16**, nawet jak nagrywacie z MC — załatwicie to przyciętym OBS lub mobile recording.
- **Dźwięk trendujący** — TikTok daje za darmo zakładkę „Trending sounds". Wrzucajcie pod nimi własne wideo. Stary trick, ale działa zawsze.
- **CTA na końcu zawsze ten sam:** „Discord w bio. Czekamy." Powtarzalność = rozpoznawalność.
- **Konsekwentny brand:** logo HEX w rogu, ten sam font tekstu, ten sam kolor (#ffa600 — Wasz brand orange).

### 3.4 Harmonogram tygodniowy (przykład realny)

| Dzień | Format | Czas pracy |
|---|---|---|
| Pon | Devlog POV | 10 min |
| Wt | Reaguję na komentarz (z piątku) | 5 min |
| Śr | Tier list / ranking | 20 min |
| Czw | Devlog POV | 10 min |
| Pt | Before/After lub Behind scenes | 15 min |
| Sb | Reaguję na komentarz | 5 min |
| Nd | — (lub repost na YouTube Shorts) | 5 min |

**Łącznie: ~70 min/tydzień**. To jest do zrobienia bez wyrzeczenia.

### 3.5 YouTube Shorts + Instagram Reels = darmowy 2× zasięg

Każdy film TikToka **wrzucajcie 1:1 na YouTube Shorts i IG Reels**. Czas: 30 sek/platformę. Algorytmy są różne — to co ginie na TikToku może wystrzelić na YT Shorts. Polski MC ma świetną pozycję na YT.

**Watermark TikToka usuńcie przez `snaptik.app` lub natywne save bez watermarku** — YT i IG karzą cross-postowane filmy z watermarkiem konkurencji.

---

## 4. Tanie kanały, których nie używacie

### 4.1 Polskie listy serwerów Minecraft (DARMOWE, stały dopływ)

Zgłoście serwer (sam serwer + Discord) na:

1. **minecraft-serverlist.com** (PL) — duży ruch, kategoria SMP/Eventy
2. **lista-serwerow-minecraft.pl**
3. **topmc.pl** — głosowanie codzienne (możecie poprosić społeczność o głosowanie, +ekspozycja)
4. **mctop.pl**
5. **serwery-minecraft.com.pl**
6. **minecraft-mp.com** (międzynarodowy, ale część polskich graczy też patrzy)
7. **freelist.pl/minecraft**

**Każde zgłoszenie:**
- Tytuł z wyróżnikiem: „HEX Network — turnieje, eventy, nowy SMP w produkcji"
- Banner serwera (macie logo — wystarczy)
- Link bezpośrednio na `/hexSmp` (nie na stronę główną — bo SMP to flagship)
- Vanity Discord invite **unikalny per lista** (`discord.gg/hex-topmc`, `discord.gg/hex-mctop`...) — w ten sposób zmierzycie, która lista coś daje
- Słowa kluczowe: „polski serwer minecraft", „SMP", „turnieje", „eventy", „darmowy"

**Mechanika głosowania na listach (TopMC, MCTop):** zachęta dla graczy — „Zagłosuj codziennie, dostań X coinów w sklepie" lub punkty w rankingu. To jest **gotowy system referal, który jeszcze nie umarł**.

### 4.2 Discord-to-Discord partnerstwa (DARMOWE, najszybszy growth)

To jest **najbardziej niedoceniony kanał** dla małych serwerów MC.

**Mechanizm:**
- Znajdujecie 5–10 Discordów polskich serwerów MC podobnej wielkości (50–500 osób — nie 5000, oni Was zignorują).
- Pytacie: „Wymiana ogłoszeń. Wy wrzucacie raz nasz event/SMP do `#partners`, my u Was wrzucamy Wasz event."
- Nie pytajcie o stały kanał reklamowy — pytajcie o **jednorazową wymianę przy konkretnej okazji** (np. „macie event w piątek? Pomogę go promować, wzajemnie").

**Gdzie szukać partnerów:**
- Lista MC (sekcja 4.1) — patrzcie kto ma podobną liczbę online.
- Discord Server Discovery (filtruj „Minecraft" + Poland).
- Disboard.org (kategoria Minecraft, język PL).
- Wyniki Google: „polski serwer minecraft discord" + filtruj te z 100–1000 członków.

**Skrypt wiadomości (skopiujcie):**
> Cześć! Prowadzę HEX Network (turnieje + nowy SMP w produkcji, 130+ osób na Discordzie). Widzę że robicie [X]. Proponuję wymianę: jednorazowo ogłaszamy sobie ważne wydarzenia na swoich Discordach. Bez stałych zobowiązań. Co myślicie?

**Cel:** 3 partnerstwa/mies. Realistycznie każde partnerstwo = 5–10 osób. **30 osób/mies. tylko z tego, jak będziecie systematyczni.**

### 4.3 Referal v2 — dlaczego stary umarł i jak go zrobić od nowa

**Diagnoza starego:** 30 osób w 3 mies., potem zero. Klasyczny problem: nagroda była **jednorazowa i tylko dla zapraszającego**, więc gdy znajomi Was już znali, nie było paliwa.

**Nowy model (3-warstwowy):**

1. **Mikro-nagrody, ciągłe:** za każdego zaproszonego znajomego — punkty do sklepu (cosmetics, nie pay-to-win). Liniowo. Bez sufitu.
2. **Wzajemność:** zaproszony też dostaje bonus startowy (np. cosmetic + 1 rola na Discordzie). Bo wtedy ten, kto zaprasza ma argument: „Wejdź, dostaniesz X".
3. **Leaderboard miesięczny:** TOP 3 zapraszający dostają „Ambasadora HEX" — rola w Discord + wyróżnienie na stronie `/about` lub `/archive` + drobna nagroda fizyczna (kubek/naklejka, koszt 15 zł).

**Techniczna implementacja:**
- Discord ma natywne **Server Invite Tracking** poprzez boty (np. Invite Tracker, MEE6, Captcha.bot).
- Każdy gracz otrzymuje swój invite link (`discord.gg/...` z trackingiem).
- Raz w tygodniu post w `#ogłoszenia` z aktualnym rankingiem zapraszających.

**Komunikat na stronie i Discordzie:**
> „Zaproś znajomego → oboje dostajecie cosmetic na start HEX SMP. TOP 3 zapraszający w miesiącu — rola Ambasadora i miejsce w Hall of Fame na stronie."

### 4.4 Mikroinfluencerzy v2 — najpierw AKTYWUJCIE tych, których MACIE

W v1 sugerowałem szukanie obcych twórców. Po przeglądzie notatek post-event 03.04 — **macie ich już 4**. To Wasze najcenniejsze niewykorzystane aktywo.

#### 4.4.1 Aktywacja lojalnych graczy jako ambasadorów (priorytet 🔴)

Z feedbacku po HEX VII (notatki):
- **Ławka** — zaobserwował Capybit na TikToku po evencie. Już Was zna, już jest lojalny.
- **DaxelPL, peter, sonnee** — lojalni gracze z eventów, znają nazwy, gadają na Discordzie.
- **Mysha** (streamerka, z notatek) — kiepskie zaufanie, opcja na później (nie traktować jako priorytet).

**Pakiet „Ambasador HEX" dla każdego z 4 powyżej** (zero kosztów dla Was):
- Rola `🌟 Ambasador` na Discordzie (kolor + uprawnienia do `#general-spam`, własny kanał `#ambasador-<nick>`).
- Darmowe VIP konto na 30 dni (potem za każdy miesiąc działania w SMP — kolejne).
- Dedykowana ranga w grze (kosmetyczna, np. ` [Ambasador] ` przed nickiem).
- Pierwszeństwo: dostęp do SMP 1.07 (2 dni przed publicznym 3.07).
- Wczesny dostęp do scenariuszy event (mogą doradzać — buduje lojalność).

**W zamian (jawnie ustalone, BEZ kontraktów):**
- Lajk + komentarz w pierwsze 30 min po wrzuceniu każdej Waszej rolki (rozwiązuje WASZĄ diagnozę z notatek: „brak początkowych komentarzy → algorytm Was nie pcha").
- Wzmianka o HEX w opisach/streamach/komentarzach co najmniej 1× tygodniowo.
- Polecenie HEX znajomym w grze (mierzalne przez referal v2, sekcja 4.3).

**Cel: 4 aktywowanych ambasadorów do końca maja.** Każdy = ~5–15 nowych członków/mies. organicznie. **+20–60 osób/mies. tylko z tego.**

#### 4.4.2 „Awantura o Kasę" jako PUBLICITY STUNT z drużynami influencerów

Notatki opisują pomysł „Awantura o Kasę" / „Familiada" z drużynami:
- Drużyna Leszka (jego widzowie wracają z marketingiem).
- Drużyna Myshy (opcjonalna, decyzja po sezonie czerwiec).
- Drużyna naszych ambasadorów (Daxel/sonnee/Ławka/peter — patrz wyżej).
- Drużyna admin (ekipa HEX).

**To jest jednorazowy game changer.** Każdy uczestnik streamuje/nagrywa z perspektywy własnej drużyny → 3–4 kanały = 3–4× zasięg jednego eventu. Realistyczna data: **wrzesień/październik 2026** (po launchu SMP, gdy serwer ma już co pokazać).

**Cel kampanii:** +30–50 osób na Discord z jednego eventu, +5 stałych SMP.

**Koszt:** głównie czas Quezo na koordynację + nagrody pieniężne (max 300 zł podzielone na drużyny). Mieści się w bieżącym budżecie eventów.

#### 4.4.3 Polowanie na obcych twórców (po SMP launch, NIE wcześniej)

Po 3.07, gdy macie SMP działający → **wtedy** wysyłajcie zaproszenia mikro-twórcom 1k–10k (TikTok hashtagi #polskiminecraft #polskismp #minecraftpl + YouTube „polski serwer minecraft 2026" <5k views). Oferta i argumentacja jak v1.

**Argument, którego wcześniej nie mieliście:** „Mamy SMP z mechanikami Hypixel SkyBlock po polsku — przyjdź pierwszy, zrób z tego content, my Ci dajemy VIP + dedykowaną rangę + przewagę startu."

**Cel: 1–2 twórców/miesiąc od sierpnia.** Bez tego launchu nie macie czym ich kupić.

### 4.5 Reddit + r/Minecraft_Polska

Mały subreddit, ale targetowany. Dwa razy w miesiącu można wrzucić:
- Devlog post „Co nowego na HEX SMP" — z linkiem do `/devlog`.
- After-event recap z fotkami z `/archive`.
- **Nie spamujcie.** Czytajcie zasady subreddita, bądźcie aktywni przed posłaniem własnego linku.

### 4.6 Allegro / OLX / Vinted? NIE.

Wpisuję to żeby wykreślić — nie tracicie czasu na kanały dla 25+. Wasza grupa siedzi na TikToku, YouTube, Discordzie, w grze.

---

## 5. Zmiany na stronie wzmacniające marketing

Strona jest świetna technicznie, ale ma luki pod kątem **konwersji ruchu z TikToka → Discord**. Każdy z punktów to <2h pracy.

### 5.1 Quiz „Jaki typ gracza jesteś?" — uczynić udostępnialnym (🔴 KRYTYCZNE)

To Wasz najsilniejszy asset marketingowy. W [src/components/PageContent/HexSMP/](src/components/PageContent/HexSMP/) sprawdźcie, czy:

- **Wynik daje obrazek do pobrania.** Po quizie generuj `<canvas>` z wynikiem (typ + ikona + tagline) → przycisk „Pobierz i wrzuć na Snap/Insta story".
- **Share buttons na końcu:** „Wyślij znajomemu" (Discord deeplink, Messenger share), „Wrzuć na Instagram Stories" (Web Share API).
- **OG image dynamiczny:** każdy typ ma swoją grafikę, gdy link wkleja się na Discord/Messenger — pokazuje się obrazek z wynikiem. To 10× zwiększa CTR.
- **Cel TikToka:** każdy 5. film powinien kończyć się „Wejdź na minecrafthex.pl/hexSmp, zrób quiz, pokaż wynik w komentarzu jaki typ jesteś".

Quiz = **gotowy viral mechanism**, którego nie wykorzystujecie.

### 5.2 SEO — najtańszy ruch, najgorzej wykorzystany

Na stronie macie świetną treść, ale **nie macie ruchu z Google**, bo:

- Tytuł strony: „Serwer Minecraft Polska - turnieje, eventy, PVP i Parkour | HEX Network" — dobry, ale brakuje konkretnych długich fraz.
- Brak posts/devlog jako blog (Astro Content Collections nie wdrożone — patrz [AUDYT_ROZWOJ_2026-04.md](AUDYT_ROZWOJ_2026-04.md) sekcja 3.5).
- Brak strony „Jak dołączyć do polskiego serwera MC w 2026" — to jest 1000+ wyszukiwań/mies. w PL.

**Quick wins SEO (priorytet 🟠):**
1. **Devlog → Content Collection + indywidualne URL-e per wpis.** Każdy devlog post = osobna strona z własnym tytułem, descriptions, OG image. Każdy = potencjał na ranking pod konkretną frazą.
2. **Strona „Najlepszy polski serwer minecraft 2026" lub `/jak-dolaczyc`** — landing z prowadzaniem do Discorda, targetowany pod long-tail keyword.
3. **`schema.org/VideoObject`** w devlogu i archiwum (filmy z eventów) — Google pokazuje wideo w wynikach.
4. **Wewnętrzne linki:** każda strona linkuje do quizu na `/hexSmp` — buduje autorytet quizu.

### 5.3 Vanity invites + tracking źródła ruchu

W tej chwili **nie wiecie, skąd przychodzą członkowie Discorda**. To trzeba naprawić **dzisiaj**:

- Na Discordzie: utwórzcie 7–10 vanity inviteów (`discord.gg/hex-tiktok`, `discord.gg/hex-yt`, `discord.gg/hex-topmc`, `discord.gg/hex-quiz`, `discord.gg/hex-event`...).
- Każde miejsce, gdzie udostępniacie link, dostaje SWÓJ invite.
- Discord wbudowane statystyki invite (lub bot Invite Tracker) pokażą, które źródła konwertują.
- **Po miesiącu wiecie, co naprawdę działa.** Wycinacie 80% wysiłku, skalujecie te 20%, które dają wyniki.

### 5.4 Drobne lecz wysoko-konwertujące UI changes

- **Sticky CTA Discord na każdej stronie:** floating button w prawym dolnym rogu, „Dołącz na Discord" + pulse. Już macie `NavBar/IpCopyPill.astro` — analogiczny komponent dla Discorda.
- **Live Discord member count:** widget Discord (`https://discord.com/widget`) z liczbą online → buduje social proof. „⚡ 23 osoby teraz online na Discordzie" jest mocniejsze niż „dołącz".
- **Po quizie automatyczny redirect na Discord (z opóźnieniem 3s)**: „Twój typ to Strateg → otwieramy Discord za 3...2...1" + cancel button. Konwersja quizu → Discord wzrasta 2–3×.

### 5.5 Strona `/landing-tiktok` (lub `/dolacz`) — dedykowana pod kampanie

Pages [src/pages/hexSmp.astro](src/pages/hexSmp.astro) jest świetna, ale ZA DŁUGA dla someone z TikToka, który ma 8 sekund cierpliwości.

Dodajcie minimalistyczną stronę `/dolacz`:
- 1 nagłówek: „Polski serwer Minecraft. Turnieje + nowy SMP w produkcji."
- 1 zdanie: „Bądź pierwszy, gdy serwer SMP wystartuje 4 lipca."
- 1 wielki przycisk: „Dołącz na Discord →"
- Pod spodem: 3 mikro-proofy (133 osób, 7 turniejów, 3450 zł rozdanych).
- Koniec. Żadnych innych linków.
- **Link w bio TikToka idzie TYLKO tu.** Aktualnie idzie na stronę główną (zgaduję) — tam jest za dużo opcji, gracz się rozprasza.

---

## 6. Czego o marketingu prawdopodobnie nie wiecie (uczciwy briefing)

To sekcja edukacyjna — rzeczy, które mogłyby Was zaskoczyć.

### 6.1 „Algorytmy" nie są magią. Są matematyką engagement-u.
TikTok/YT pokazuje filmy losowo małej grupie (~200 osób) i mierzy:
- **Watch time** (% obejrzanego materiału — najważniejsze).
- **Loop rate** (czy ktoś obejrzał >1×).
- **Share/Save** (najsilniejszy sygnał).
- **Comments** (drugi najsilniejszy).
- **Likes** (najsłabszy z głównych).

Wasze 300 wyświetleń = pierwsza partia. Żeby przeskoczyć dalej, **wystarczy jedno z dwóch:** (a) wyższy watch time, (b) wyższy share rate. Stąd format „reply na komentarz" i „quiz na końcu" (share trigger).

### 6.2 CAC dla free product MUSI być prawie zero.
Płatne ads dla bezpłatnego Discorda mają sens TYLKO gdy:
- Macie monetyzację per user (sklep, VIP) z jasnym LTV.
- LTV per user > CAC × 3.
- Macie >500 osób, żeby statystyki były wiarygodne.

Wy nie macie tej dźwigni jeszcze. Płatne ads = utopione pieniądze. **Wracajcie do nich, gdy:**
- Macie 500+ osób na Discordzie.
- Sklep przynosi >300 zł/mies. organicznie.
- Macie 1 sklep-konwersję z TikToka udokumentowaną przez UTM/vanity.

### 6.3 Marketing małych serwerów = relacje, nie ads.
Top polskie serwery MC (Vimeworld, Hypixel-podobne) wyrosły na **community-driven growth**: twórcy, mikrocelebryci, eventy, drama (kontrolowana). Reklamy są dodatkiem, nie silnikiem. Wasza droga to to samo, na mniejszą skalę.

### 6.4 Sezonowość: lato to ZŁOTO dla MC.
**Czerwiec–sierpień = peak audience.** Dzieciaki w wakacjach grają 4–6h/dzień. Wszystkie eventy, większy content output, kampanię launchową SMP **zaplanujcie pod koniec czerwca / lipiec**. Po wakacjach (wrzesień) zainteresowanie spada o 30–40% — wykorzystajcie ten szczyt.

### 6.5 Branding > wszystko inne, gdy budżet jest mały.
Każdy materiał (TikTok, screen, post) musi mieć ten sam:
- Kolor accent: `#ffa600` (już macie w design systemie).
- Font headline: Minecraft (już macie w `public/minecraft-font/`).
- Logo HEX w rogu (zawsze).
- Slogan, np. „Serwer, na który chciałeś trafić" lub stary „Twój świat. Twoje zasady. Twoi rywale."

Po 50 ekspozycjach widz pamięta logo, nawet jak nie kliknął. To buduje pasywny growth — ktoś szuka „polski serwer MC", widzi Was, kojarzy — klika.

### 6.6 Nie ma czegoś takiego jak „kontent który się nie udał".
Każdy film TikToka, który ma 100 views, jest **danych do nauczenia algorytmu, kim jesteście**. Nie usuwajcie. Nie martwcie się jakością pierwszych 50 sztuk. Liczy się **konsekwencja** i **iteracja** (co tygodniowo: który format dał najwięcej views? robicie więcej tego).

### 6.7 „Content calendar" to nie biurokracja, to wyzwolenie.
Brak pomysłów = brak harmonogramu. Z harmonogramem (sekcja 3.4) nie myślicie „co dziś nagrać" — wiecie. To 80% problemu „nie mamy talentu" — nie chodzi o talent, chodzi o systematyczność.

### 6.8 Dyskorda nie zwiększacie kontentem. Zwiększacie nim TRAFIC. A TRAFIC konwertujecie CTA.
To brzmi oczywisto, ale 90% serwerów to ignoruje. Każdy materiał musi mieć **JEDEN clear CTA na końcu**, ten sam, powtarzalny. Nie „lajkuj i sub" — tylko „Discord w bio. Link na minecrafthex.pl. Czekamy."

---

## 7. Co JESZCZE warto rozważyć (dłuższe ramy)

- **Twitch live-streamy z budowy HEX SMP** — 2× w miesiącu, 2h sesje. Nie po to żeby mieć viewers, tylko żeby mieć VOD-y do pociętego contentu (klipowanie clip-bots, repurposing na TikTok). Twitch jako narzędzie produkcyjne, nie kanał.
- **Newsletter via Discord (#devlog channel auto-post):** kiedy wrzucacie devlog na stronę, bot automatycznie postuje na Discord — zwiększa retencję starych członków, zmniejsza churn.
- **Merch tier 0 (sticker pack po 5 zł):** sticker z logo HEX jako reward za top zapraszanie. Buduje brand offline, koszt produkcji ~2 zł/szt.
- **Open-source devlog:** GitHub repo `hex-network/devlog` (osobny od strony) z markdown postami. Pozycjonuje Was jako transparent, technicznych, „real builders". Niesie SEO i kredibilizację wśród starszych graczy/twórców.
- **Wywiad / podcast z polskim MC twórcą:** raz na 2 mies. zrobicie 30-min rozmowę z autorem podobnego serwera. On promuje swój kanał, Wy zyskujecie ekspozycję u jego widzów. Win-win.

---

## 8. Co NIE zadziała (świadome cięcia)

- **Reklamy Google Ads / Facebook Ads** — 200 zł/mies. to za mało na sensowną kampanię, kierowanie do grupy 12–20 wymaga zgody rodziców i dawno wycofanych formatów.
- **TikTok Spark Ads (boost organicznych filmów)** — kuszące, ale tylko gdy macie film z >5000 organic views i widzicie wzór, kogo on przyciąga. Wcześniej = utopione pieniądze.
- **Płatne posty na grupach Facebook „Polski Minecraft"** — Wasi gracze nie są na Facebooku.
- **YouTube long-form videos** — wymaga montażysty, którego nie macie. **Shorts tak, long-form nie.**
- **Plakaty / ulotki / offline** — niemożliwe do scale'owania, niemożliwe do mierzenia.
- **„Konkursy z udostępnij i otaguj 5 znajomych" na Facebooku** — naruszają regulamin platformy, Wasza grupa wiekowa tego nie robi.

---

## 9. Retencja SMP — jak uzyskać 20 stale aktywnych do listopada ⭐ NOWA SEKCJA

To jest cel #2 i KRYTYCZNE rozwinięcie wzgl. v1. Bez retencji każdy nowy gracz wchodzi i znika w 3 dni. **Diagnoza z Waszych notatek (dosłowna):** *„gracze wchodzą na serwer, po krótkim czasie nie mają co robić, przez brak stałego contentu tracą motywację"*. To jest priorytet #1 dla zespołu od dziś do 3.07.

### 9.1 Hierarchia mechanik retencji (Hypixel-style, zaadaptowana pod Was)

Skoro SMP ma być inspirowany Hypixel SkyBlock (Wasza wizja z notatek sek. 6) — kopiujcie ich loop retencji:

| Mechanika | Cel retencji | Implementacja MVP (kto, kiedy) |
|---|---|---|
| **Daily quests** (3 dziennie, reset 00:00) | D1 retention | Havix, do 1.07. Pluginowo proste: zabij X mobów, wykop Y bloków, zarób Z złota |
| **Miniony** (auto-farming offline) | D7 retention — gracz wraca po nagrody | Sevin, do 1.07. Hypixel SkyBlock 1:1, MVP: 4 typy minionów |
| **Skille z poziomami** (kopanie, combat, farming, fishing) | D30 retention — długoterminowy progres | Havix, ✅ w wizji SMP, do 1.07 |
| **Kolekcje all-time** (np. „kto wykopał najwięcej kamienia") | Late-game stickiness | Havix, ✅ wizja SMP, leaderboard na stronie + na Discord (z notatek) |
| **Boss raid co 3 dni** (eventowy) | Powtórny powód do logowania | Sevin, MVP po launch (od sierpnia) |
| **Sezonowe rankingi + reset** (kwartalnie) | Powrót dropout graczy | Havix, sezon 1 = lipiec–wrzesień, sezon 2 = paź–gru |
| **Działki/towny** (społeczność) | Social retention — gracze trzymają siebie | Sevin, MVP do 1.07 |
| **Mini boss losowy** (1× dziennie, pojawia się 1× na kilka gier) | Surprise & delight | Havix, od sierpnia |

**Najważniejsze:** wszystkie te mechaniki są **w Waszej wizji** (notatki sek. 6) — sprawa to TERMIN. **MVP gotowe na 25.06**, tydzień testów wewnętrznych, **launch 3.07**.

### 9.2 Social retencja (Discord ↔ MC)

Sam gameplay nie wystarczy. Najsilniejszy haczyk retencyjny to **inni gracze**:

- **Discord-MC linking via webhook** (z notatek 2.b „Plany na MySQL/webhooki"). Gracz loguje się na SMP → pojawia się w `#smp-online` bot embed. Tworzy presję społeczną „inni grają, ja też".
- **Daily login post na Discord** od bota: „Dzisiaj zalogowało się X graczy. TOP coiniarze tygodnia: A, B, C". Każdy chce być w topce.
- **Sevin „prowadzi życie" na Discord** (notatki 16f) → ekipa widziana jako prawdziwi ludzie, nie martwy server.
- **Cotygodniowy livestream Quezo/Sevin z SMP** (notatki sek. 11 — wtorek + piątek). Gracze przychodzą na live, gadają, wchodzą do gry. Konwersja livestream → SMP session = 30–50%.

### 9.3 Late-game (po miesiącu) — co zrobi 20-tka stałych

Notatki słusznie identyfikują problem: *„coś co zatrzyma graczy gdy skończy się kontent, żeby oni czuli, że progresują"*.

**Konkretne mechanizmy late-game do MVP:**

1. **Bazaar po MVP (sierpień)** — handel gracz↔gracz tworzy ekonomię, która sama z siebie generuje content. Hypixel zna to.
2. **Custom moby (notatki sek. 17)** — daje co tydzień nową rzecz do roboty (nowy boss → tydzień grindu → następny boss). MVP: 1 boss na sierpień, 1 na wrzesień, 1 na październik.
3. **Sezonowe konkursy 1-dniowe** („W ten weekend kto zbierze najwięcej diamentów wygrywa 50 zł") → mikroevent co 2 tygodnie, retencja-booster. Inspiracja: gry mobilne, dokładnie jak Wasze notatki opisują.
4. **Mini-eventy 11.07, 19.09, 12.02** (z notatek sek. 11). Krótkie 3h pracy zespołu, gracze dostają coś co reaktywuje konto.

### 9.4 Lejek konwersji Discord → SMP → stały gracz (target)

```
1000 osób widzi TikTok rolkę
  ↓ 2% CTR (typowo dla MC content)
20 wejść na /dolacz lub /hexSmp
  ↓ 40% konwersja landing → Discord (przy quizie + dynamic OG)
8 nowych Discord members
  ↓ 50% konwersja Discord → próba SMP (przy launchu + hype)
4 graczy testuje SMP
  ↓ 25% retencja D7 (przy daily quests + miniony + społeczność)
1 stały gracz SMP
```

**Aby zdobyć 20 stałych, potrzebujecie 20 000 wyświetleń TikToka, które konwertują** — albo równoważne źródła (listy MC, partnerstwa, ambasadorzy = mniej viewów, ale wyższa konwersja, bo audience już targetowane).

Z planowanej liczby ~135 rolek (maj–listopad) × średnio 800 views (rosnąco) = **108 000 wyświetleń**. Lejek wychodzi. Liczbowo cel #2 jest osiągalny — pod warunkiem D7 retencja ≥ 25% (czyli MVP SMP musi być solidne, nie placeholder).

---

## 10. SMP Launch Playbook (3.07.2026) — make-or-break ⭐ NOWA SEKCJA

To jest pojedynczy najważniejszy moment marketingowy roku. Jak go zrobicie — przesądzi czy macie 250 Discord w listopadzie.

### 10.1 6-tygodniowa kampania pre-launch (20.05 → 3.07)

| Tydzień | Faza | Czego dotyczy komunikacja | Kanały |
|---|---|---|---|
| T-6 (20.05) | **Teaser** | „Coś dużego nadchodzi 3.07. Nie SMP. Nie Skyblock. Coś pomiędzy." Bez detali. | TikTok ×3, Discord pin, IG Reels |
| T-5 (27.05) | **Ujawnienie 1** | Pokazujecie 1 screen z mapy spawnu + jedno zdanie o jednym systemie (miniony) | TikTok devlog POV ×4 |
| T-4 (3.06) | **Ujawnienie 2** | Pokazujecie ekonomię — bazaar mock + cytat „nie musisz farmić 6h, miniony robią to za Ciebie" | TikTok ×4 + 1 YT Short long-form (60s) |
| T-3 (10.06) | **Ujawnienie 3** | Skille, kolekcje, leaderboardy. Pokażcie zrzut z testów. | TikTok ×5 + 1 livestream Quezo (1h budowy) |
| T-2 (17.06) | **Zapisy + waitlist** | Discord rola `🎯 Waitlist SMP` — dostajesz priorytet startu 1.07 (vs publiczny 3.07). DM-y do ambasadorów: aktywacja. | Strona: countdown, Discord: pin, TikTok: „2 tyg do startu" |
| T-1 (24.06) | **Final hype** | Wszystkie listy MC zaktualizowane „startujemy 3.07!". Partnerstwa Discord aktywowane (sekcja 4.2). Trailer 30s (Quezo, dopuszczamy 100 zł na Fiverr za prosty edit). | Wszystkie kanały, codziennie. |
| **T-0 (3.07)** | **LAUNCH** | Discord: pin + ping `@everyone`. Strona: countdown → live. TikTok: live event recap. Livestream Quezo: dzień otwarcia. | Wszystko ON |

### 10.2 Aktywa contentowe niezbędne przed launchem (do 25.06)

- ✅ Strona `/hexSmp` zaktualizowana z prawdziwymi screenami (nie placeholderami) — patrz [AUDYT_ROZWOJ_2026-04.md](AUDYT_ROZWOJ_2026-04.md) sek. 3.2.
- ✅ Strona `/dolacz` jako pojedynczy entry point z TikToka.
- ✅ Quiz `/hexSmp` z Web Share API.
- ✅ Trailer 30s (Quezo + ewentualnie Fiverr 100 zł).
- ✅ 5 screenów gameplay + 1 gif (loop demo minion).
- ✅ Devlog z 4 wpisami pokazującymi co robicie tydzień po tygodniu (Astro Content Collection).
- ✅ 25 nakręconych rolek TikTok (pre-cached, gotowe do publikacji).
- ✅ Discord: kanały `#smp-info`, `#smp-aktualnosci`, `#smp-online` (bot), `#smp-bug-report`.

### 10.3 Dzień launchu (3.07) — operacyjnie

| Godzina | Akcja | Kto |
|---|---|---|
| 14:00 | Final pre-launch test, server stress test | Sevin |
| 16:00 | Discord post: „1 godzina!", reminder rolla `@SMP Waitlist` | Quezo |
| 17:00 | **OTWARCIE SMP** — Discord `@everyone`, pingi, livestream ON na Twitch + YT | Cały zespół |
| 17:00–19:00 | Livestream Quezo „pierwsza godzina na HEX SMP" | Quezo |
| 19:00–22:00 | Sevin w grze, gada z graczami, pierwsza linia bug-report | Sevin |
| 22:00 | Post-launch summary na Discord: ilu wbiło, top 3 zarobki, co dalej | Cały zespół |
| Następny dzień | Rolka „pierwsza doba HEX SMP w liczbach" — content na tydzień | Quezo |

### 10.4 Lekcje z notatek post-event 03.04, których MUSICIE NIE powtórzyć przy SMP

(Bezpośrednio z Waszego feedbacku z eventu)

- **Nie zmieniać plików sklepu po testach generalnych** (luka infinity cash) → MVP SMP do 25.06 + tydzień freeze.
- **Testy dostępowe z poziomu różnych ról** (VIP/ELITA/MEDIA/GRACZ) — przed launchem każda ranga przechodzi pełny flow.
- **Plan dnia z buforem 10 min** — launch też uwzględnia bufor na rebooty.
- **Backup plan: live „Sevin twerkuje póki nie dodamy zasobów"** — czyli jeden członek zespołu zawsze online jako face-saver.

---

## 11. Marketing event-driven — kalendarz publikacji do listopada ⭐ NOWA SEKCJA

Każde wydarzenie z Waszego kalendarza (notatki sek. 4) to **pretext do 2-tygodniowej kampanii**, nie pojedynczy post. Marketingowo każdy event ma fazę: hype (T-14 do T-3) → final push (T-2 do T-0) → recap & repurposing (T+1 do T+7).

| Data | Wydarzenie | Marketingowy cel | Konkretne deliverable |
|---|---|---|---|
| **16.05** | HEX VIII Titanic + 1z10 | +15 Discord, test promo rolek | 2 promo rolki (12.05, 15.05) z UNIKALNYMI vanity invitami, recap rolka 17.05, devlog post |
| 30.05 | Mini PVP Eliminator | Test pluginów PVP, retencja istniejących | 1 rolka teaser, post-event clip kompilacja |
| 13.06 | Wyspa Kanibali | Pretest mechanik survival, retencja | Rolka „za kulisami wyspy", devlog |
| **3.07** | **SMP LAUNCH** | **+30 Discord, ~10 D7 SMP active** | Patrz sekcja 10 (cały playbook) |
| 4.07 | HEX IX Star Wars Edition | Zamknięcie launch weekendu, +5 Discord | Eventowy stream, recap |
| 22.08 | Serwer Minigry (Party) | +10 Discord, dywersyfikacja audience | Trailer 30s, ambasadorowie testują 1 tydzień wcześniej |
| 19.09 | Parkour | +5 Discord, retencja | Map showcase rolki ×3 |
| **wrzesień/paź** | **Awantura o Kasę z drużynami** | **+30 Discord (multi-creator)** | Sekcja 4.4.2 |
| 24.10 | PVP launch + HEX X Halloween | +10 Discord, klimat sezonowy | Klimatyczne rolki Halloween-themed |
| listopad | Buffer + Hogwart hype-up | Przygotowanie 2027 | Teaser Hogwart, content recap roku |

**Zasada:** każdy event = minimum 5 rolek TikTok wokół niego (T-7, T-3, T-1, T-0, T+1). To 50+ rolek narzuconych przez kalendarz, bez wymyślania tematów.

---

## 12. Social proof first-mover — rozwiązanie diagnozy z notatek ⭐ NOWA SEKCJA

Notatki dosłownie diagnozują problem (sek. 3 NEGATYWNE): *„Marketing - brak początkowych komentarzy, dummy komentarzy od kolegów. Algorytmy lubią lajki, komentarze, ulubione, a ludzie lubią gdy ktoś pisze, pyta, mówi wbijam — Tzw. Social Proofs. Porozmawiać ze znajomymi by nas realnie wspierali po wrzuceniu filmiku."*

**Plan operacyjny (zero kosztów):**

1. **Lista 8–12 zaufanych osób:** Capybit + Ania + Quezo + Sevin + Havix + Ławka + Daxel + peter + sonnee + 3 znajomych spoza projektu.
2. **Grupa SMS / Messenger / Discord DM** o nazwie „HEX Boost Squad". Discord oddzielny kanał `#boost-squad`.
3. **Każdy wrzucony TikTok → ping w grupie z linkiem.** Pierwsze 30 min: każdy lajkuje, komentuje (różne komentarze — naturalność), zapisuje.
4. **Komentarze mają być naturalne, niepowtarzalne.** Przykłady (skopiujcie + wariujcie):
   - „Wbijam na Discord, gdzie link?"
   - „Czekam na SMP, dawno nie widziałem takiego pomysłu"
   - „Kiedy start? Muszę być na początku"
   - Pytania → szansa na reply video (sekcja 3.2 format B).
5. **Po 24h sprawdzacie watch time + share rate** — jeśli zadziałało, ten format powtarzacie.

**To NIE jest fake engagement w złym sensie** — to są realni ludzie, którzy autentycznie chcą Waszego sukcesu. Każdy serwer MC tak zaczynał. Jest to standardowy boostrap algorytmu.

**Wpływ:** algorytm po 5–10 rolkach z taką pierwszą falą zaczyna pchać Wasze konto. 300 views → 800 views → 2000 views w skali 4–6 tygodni. **To jest najtańsza, najszybsza dźwignia, którą macie.**

---

## 13. Hardcore SMP Global EN + TikTokEN — strategiczna karta na 2027 ⭐ NOWA SEKCJA

Notatki (sek. 14) wspominają opcję serwera Hardcore SMP po angielsku + TikTok EN. Krótka ocena strategiczna:

**Czemu NIE w 2026:**
- Polski rynek jeszcze nie spalony — macie miejsce na 250 → 500 osób PL bez konkurencji EN.
- Algorytm TikTok EN jest dużo brutalniejszy: konkurujecie z amerykańskimi twórcami robiącymi 100k views standardowo.
- Każdy split-focus = 50% spadek jakości obu kierunków.
- Anglojęzyczny CS (Discord moderacja, support) wymaga osób ze swobodnym angielskim — luksus, którego nie macie.

**Kiedy TAK (najwcześniej):**
- Po 1.01.2027, jeśli polski Discord >300 osób i SMP retencja >25 stałych.
- Hardcore SMP EN to nisza (small audience, ale lojalna). Dobry MVP w 2027 = osobny serwer, osobny Discord (NIE mieszać z PL), 1 dedykowany TikTok account EN.
- Zacząć od **TikTok EN tylko** (3 mies. test, 0 kosztów oprócz czasu) — jeśli rolki łapią >5k views regularnie, dopiero wtedy serwer.

**Jeden niski-ryzyko ruch DZISIAJ:** zarezerwujcie nazwę handle `@hexnetwork` na TikTok EN, Twitter, Instagram EN. Zero kosztu, ochrania brand na przyszłość.

---

## 14. Plan tygodnia 1 (konkretne ruchy do wykonania w 7 dni) — zaktualizowany

| Dzień | Zadanie | Kto | Czas |
|---|---|---|---|
| 1 (pon 18.05) | Stworzyć 7 vanity invites Discord (hex-tiktok, hex-yt, hex-promo1205, hex-promo1505, hex-titanic, hex-quiz, hex-lista1) | Sevin | 15 min |
| 1 | Zalogować link `discord.gg/hex-promo1205` w opisie promo rolki 12.05 (retroaktywnie) | Quezo | 5 min |
| 1 | Wysłać brief do Ławki / Daxela / petera / sonnee z propozycją „Ambasador HEX" (sekcja 4.4.1) | Capybit | 30 min |
| 1 | Założyć kanał `#boost-squad` na Discord (sekcja 12) + zaprosić 8–12 zaufanych osób | Sevin | 30 min |
| 2 | Zgłosić serwer na 5 list MC (sekcja 4.1) z UNIKALNYMI vanity invites per lista | Sevin | 1.5 h |
| 2 | Pierwsze posty Sevina na publiczny Discord (życie codzienne) — codzienna rutyna od dziś | Sevin | 10 min/dzień |
| 3 | Wysłać 5 wiadomości partnerskich do innych polskich Discordów MC (sekcja 4.2 skrypt) | Quezo | 1 h |
| 3 | Nagrać 3 rolki Devlog POV (HEX SMP work-in-progress) — zaplanować publikację na śr/pt/sob | Quezo | 30 min |
| 4 | Brief dla Havixa: quiz Web Share API + dynamic OG image + `/dolacz` landing | Havix przyjmuje | brief 15 min |
| 4 | Publikacja pierwszej rolki + ping `#boost-squad` (komentarze pierwsze 30 min) | Quezo + squad | 5 + 30 min |
| 5 | Reply video do komentarzy z 4 dnia (sekcja 3.2 format B) | Quezo | 20 min |
| 5–6 | Sevin/Havix: MVP daily quests plugin + miniony konfiguracja (priorytet pod SMP) | Sevin + Havix | praca |
| 6 | Promo rolka 15.05 — równolegle wrzuć z `discord.gg/hex-promo1505` w opisie | Quezo | 30 min |
| 7 | Przegląd: który vanity invite zadziałał? Porównaj 12.05 vs 15.05 vs organic. Zapisz w `tracker.md` | Capybit | 30 min |

**Total: ~7h zespołowo w tygodniu 1, później 3–4h/tydz. dla marketingu + osobna praca techniczna nad SMP MVP.**

### Po 16.05 (po Titanicu) — weryfikacja

W notatkach post-event będziecie mieli odpowiedź na pytanie: czy promo rolki przyniosły graczy? Jeśli `hex-promo1205` + `hex-promo1505` dały razem ≥5 nowych — ROI jest. Skalujecie pod SMP launch (lipiec). Jeśli ≤2 — odpalamy resztę 200 zł jako budżet promo na sticker / wsparcie ambasadorów.

---

## 15. Budżet — gdzie wydać 200–300 zł/mies. SENSOWNIE (zaktualizowany)

**Maj (planowane):** 200 zł = 2 promo rolki (Quezo). PRZYJMUJEMY — z trackingiem.

| Pozycja | Koszt/mies. | Kiedy zaczyna mieć sens |
|---|---|---|
| Promo rolki 12.05 + 15.05 (Titanic) | 200 zł (maj) | ✅ już zaplanowane. KPI: ≥5 Discord/200 zł = warto kontynuować |
| Nagrody dla TOP 3 referal (kubek/naklejki) | 50 zł | Od czerwca (gdy referal v2 działa) |
| Wsparcie ambasadorów (drobny upominek, VIP rangi, koszt symbol.) | 30 zł | Od czerwca |
| Trailer SMP 30s (Fiverr) | 100 zł (jednorazowo, czerwiec) | T-2 przed launchem 3.07 |
| Nagrody event „Awantura o Kasę" | 200–300 zł (jednorazowo, wrzesień) | Tylko jeśli drugżyny twiercdzą „wchodzimy" |
| Boost płatny TikToka (wyselekcjonowana rolka >2000 organic views) | 100 zł | **TYLKO** gdy film organicznie złapał, lipiec+ |
| Discord Server Boost (gdy >50 boosters) | 0–30 zł | Gdy macie 250+ osób |
| Sticker pack (50 szt., dla ambasadorów + referal top) | 30 zł (jednorazowo) | Czerwiec/lipiec |

**Lipiec budżet szczyt:** 300 zł — trailer (100) + boost promo SMP launch (100) + nagrody mini event (100).

**Reguła v2:** każda zł wydana ma vanity-invite ID. Po miesiącu sprawdzacie ROI per zł — nie po przeczuciu, tylko po liczbach.

---

## 16. Checklist priorytetowa v2 (do oznaczania)

### Tydzień 1 (do 24.05)
- [ ] Vanity invites Discord (7+ sztuk, per kanał)
- [ ] Promo rolki 12.05 + 15.05 z UNIKALNYMI vanity invites — śledzenie konwersji
- [ ] Brief do Ławki, Daxela, petera, sonnee — oferta ambasadorska
- [ ] Kanał `#boost-squad` na Discord + zaproszone 8–12 zaufanych osób
- [ ] 5 list MC zgłoszone (z unikalnymi vanity invites)
- [ ] Sevin „prowadzi życie" na Discord codziennie — nawyk uruchomiony
- [ ] Pierwsza rolka z formatu Devlog POV wrzucona z pingiem `#boost-squad`

### Tydzień 2–4 (do 14.06)
- [ ] Quiz `/hexSmp`: Web Share API + dynamic OG image (Havix)
- [ ] Strona `/dolacz` live (Havix)
- [ ] 20+ rolek TikTok wrzuconych (mix formatów A+B+C)
- [ ] Każda rolka cross-postowana na YT Shorts + IG Reels
- [ ] Referal v2 — zasady + bot invite tracking
- [ ] 4 ambasadorów aktywowanych (role na Discord, VIP, dedykowane rangi)
- [ ] Mini Event PVP Eliminator (30.05) jako test pluginu PVP
- [ ] Pre-launch SMP — teaser fazy 1 i 2 (sek. 10.1) wykonany

### Miesiąc 2 (czerwiec)
- [ ] Mini Event Wyspa Kanibali (13.06) wykonany
- [ ] Pre-launch SMP — fazy 3, 4, 5 (zapisy + waitlist)
- [ ] Devlog → Astro Content Collection (zaplecze SEO)
- [ ] Sticky CTA Discord na stronie
- [ ] Live member count widget na hero
- [ ] MVP SMP gotowe 25.06 — tydzień testowy wewnętrzny
- [ ] Trailer SMP 30s wykonany (zlecony Fiverr 100 zł)

### Miesiąc 3 (lipiec) — 🔥 SMP LAUNCH MIESIĄC
- [ ] 1.07: Waitlist dostaje dostęp (early access)
- [ ] **3.07: SMP LAUNCH** (sekcja 10.3 dzień launchu)
- [ ] 4.07: HEX IX Star Wars Edition
- [ ] Pierwszy boost płatny TikToka (na rolce z pre-launch, która złapała >2000 views)
- [ ] 11.07: Mini event (z notatek)
- [ ] Codzienne livestreamy Quezo/Sevin pierwszy tydzień po launchu
- [ ] Pierwsze partnerstwa Discord z aktualnym SMP jako argumentem

### Miesiąc 4–5 (sierpień–wrzesień)
- [ ] Bazaar SMP po MVP (sierpień)
- [ ] Custom moby — pierwszy boss (sierpień), drugi (wrzesień)
- [ ] Serwer Minigry launch 22.08
- [ ] Parkour launch 19.09
- [ ] Mini event 19.09
- [ ] 1–2 pierwsi obcy mikroinfluencerzy zaproszeni z VIP
- [ ] Hall of Fame na stronie (top zapraszający + top gracze SMP)
- [ ] **Awantura o Kasę** — publicity stunt z drużynami (wrzesień/październik)

### Miesiąc 6–7 (październik–listopad)
- [ ] PVP launch + HEX X Halloween 24.10
- [ ] Drugi mikroinfluencer (jeśli pierwszy działa)
- [ ] Sezonowy reset rankingu SMP (1.10)
- [ ] Sezon 2 leaderboardy + nagrody
- [ ] Pre-launch hype Hogwart (start 8.01.2027)
- [ ] **Listopadowy review:** czy 250 Discord + 20 stale aktywnych SMP osiągnięte?
- [ ] Audyt: które kanały dają ROI? Plan 2027 v3 strategii.

---

## 12. Ostrzeżenia (rzeczy, które mogą Was zniechęcić)

- **Pierwsze 4–6 tygodni TikToka będzie wyglądało jak porażka.** 300–500 views/film, brak skoku. To NORMALNE. Algorytm uczy się Was 30–50 filmów. Wytrzymajcie. To moment, w którym 90% rezygnuje.
- **Pierwszy partnerski Discord da Wam 3 osoby, a nie 30.** Nie wszystkie wymiany konwertują równie dobrze. Liczy się masa — 20 partnerstw da 1 wybitne i 19 średnich.
- **Quiz może mieć niskie ukończenie (10–20%) na początku.** To kwestia traffic source. Z TikToka — gorzej. Z listy MC — lepiej. Iterujcie.
- **Discord-bot tracking inviteów ma błędy** (vanity URL przepisuje source). Trzymajcie ręcznie spreadsheet z manualną weryfikacją co tydzień.
- **Lipcowy launch SMP będzie pierwszą weryfikacją.** Jeśli do 1.07 macie 200+ Discord, kampania zadziała. Jeśli mniej — agresywniej cisnąć referal v2 i partnerstwa w czerwcu.

---

## 13. Mierzenie sukcesu w listopadzie 2026

Pytajcie się:

1. Czy Discord ma 270+? → sukces strategii.
2. Czy znamy 3 NAJSKUTECZNIEJSZE kanały? (z vanity invites)
3. Czy TikTok ma >2000 średnio views/film? → algorytm Was zna.
4. Czy 1–2 mikro-twórców regularnie wspomina o HEX? → community-driven growth started.
5. Czy quiz daje >100 ukończeń/mies.? → marketing-asset działa.

Jeśli 3 z 5 = TAK → strategia działa, skalujecie ją w 2027.
Jeśli 1 z 5 lub mniej → wracamy do diagnostyki, sprawdzamy gdzie wycieka lejek (traffic → quiz → Discord → retencja).

---

## v2 — changelog (13.05.2026)

- Cel przesunięty z 270/31.10 na **250/30.11** (+ bufor +1 mies., realistyczniej).
- Dodany **cel #2: 20 stale aktywnych SMP** — nowa sekcja 9 (retencja).
- Nowa sekcja 10: **SMP Launch Playbook 3.07** (6-tyg. kampania).
- Nowa sekcja 11: **Marketing event-driven** kalendarz publikacji.
- Nowa sekcja 12: **Boost Squad** rozwiązanie dummy comments (z notatek).
- Nowa sekcja 13: **Hardcore EN** — ocena strategiczna (odkładamy na 2027).
- Sekcja 4.4 przepisana: **aktywacja Ławki/Daxela/petera/sonnee** jako ambasadorów (największy ROI ruch).
- Sekcja 4.4.2 dodana: **Awantura o Kasę** z drużynami influencerów jako publicity stunt (wrzesień/paź).
- KPI rozszerzone o retencję SMP D1/D7/D30 + lejek konwersji.
- Budżet uwzględnia **promo rolki 12.05 + 15.05** (juz w planie Quezo) z trackingiem.
- Plan tygodnia 1 rozpisany **per członek zespołu** (Havix/Sevin/Quezo/Capybit).
- Kryteria sukcesu rozszerzone z 5 do 8 pytań, z mocnym wczesnym sygnałem 30.07 (post-launch SMP).