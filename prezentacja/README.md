# Prezentacja — Strategia HEX 2026 v2

Samodzielna prezentacja HTML/CSS/JS oparta na `STRATEGIA_MARKETING_2026.md`. Bez build-stepu.

## Wersja do wysyłki

Jeśli chcesz wysłać **jeden plik**, użyj:

- `HEX_Strategia_2026_standalone.html`

To jest wersja w pełni samowystarczalna:

- cały CSS jest osadzony w `<style>`
- cały JS jest osadzony w `<script>`
- pełna treść strategii markdown jest osadzona w HTML
- wykresy są rysowane lokalnie przez canvas, bez bibliotek zewnętrznych
- nie ma `fetch()`, CDN ani zależności od dodatkowych plików

## Uruchomienie

**Zalecane (umożliwia podgląd pełnej strategii MD):**
- VS Code → rozszerzenie **Live Server** → prawym na `index.html` → "Open with Live Server".
- Lub w PowerShell w folderze `prezentacja`: `python -m http.server 8080` i otwórz `http://localhost:8080`.

**Najprostsze (idealne do paczki 5 plików):** podwójny klik na `index.html`. W tym trybie przycisk `strategia.md` otwiera plik markdown bezpośrednio w nowej karcie, więc nie ma problemu z `file://`.

Wymaga internetu — Chart.js i marked.js ładowane z CDN.

## Sterowanie
- `→` / `Space` — następny slajd
- `←` — poprzedni
- `Home` / `End` — pierwszy / ostatni
- `F` — pełny ekran
- `M` — otwórz `strategia.md` / pełną strategię
- `?` — pomoc
- `Esc` — zamknij okno (modal/pomoc)
- przyciski na dole, scroll-snap myszą/touchpadem

## Struktura (25 slajdów)
1. Tytuł
2. **Czym jest HEX Network** — kontekst dla outsidera
3. **Zespół** — Capybit / Havix / Sevin / Quezo / Ania, role i ograniczenia
4. Skąd startujemy (liczby startowe)
5. Dwa cele (akwizycja + retencja)
6. Audyt obecnych kanałów
7. 5 wniosków
8. Analiza rynku
9. KPI #1 — wykres wzrostu Discord
10. KPI #2 — wykres retencji SMP
11. Lejek konwersji TikTok → stały gracz
12. 6 formatów TikToka
13. Algorytm TikToka (siła sygnałów)
14. Darmowe kanały dystrybucji
15. 4 ambasadorzy — deal
16. Zmiany na stronie
17. SMP Launch Playbook (6 tyg.)
18. Kalendarz event-driven
19. Mechaniki retencji SMP
20. Boost Squad
21. Budżet (donut)
22. Czego nie robić
23. Plan tygodnia 1
24. Kryteria sukcesu 30.11
25. Zamknięcie

## Strategia.md / viewer
Przycisk **„📄 strategia.md"** działa w dwóch trybach:

- przy uruchomieniu z paczki / `file://`: otwiera lokalny plik `strategia.md` bezpośrednio w nowej karcie
- przy uruchomieniu przez serwer lokalny lub hosting: otwiera modal z całym plikiem `STRATEGIA_MARKETING_2026.md` wyrenderowanym w stylu HEX — ze spisem treści po lewej, klikalnymi nagłówkami, kolorowanymi tabelami i blockquote'ami

## Pliki
- `index.html` — struktura slajdów + modal MD
- `styles.css` — dark theme HEX (#ffa600) + style markdown body
- `presentation.js` — nawigacja, 4 wykresy Chart.js, renderowanie MD przez marked.js, generowanie TOC
- `strategia.md` — kopia `STRATEGIA_MARKETING_2026.md` (ładowana przez fetch)

## Praca offline (bez internetu)
Pobierz lokalnie:
- `https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js`
- `https://cdn.jsdelivr.net/npm/marked@12.0.2/marked.min.js`

Zapisz w folderze `prezentacja/` i podmień w `index.html` na `<script src="chart.umd.min.js"></script>` i `<script src="marked.min.js"></script>`.

## Druk / PDF
`Ctrl+P` → "Zapisz jako PDF". Każdy slajd na osobnej stronie (zdefiniowane w `@media print`).
