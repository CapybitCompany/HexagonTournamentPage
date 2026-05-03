// Jedno źródło prawdy dla wpisów devloga HEX Network.
// Dodając nowy wpis – dopisz go na górze tablicy (porządek = od najnowszego).
// Wpisy są konsumowane przez:
//  - src/components/PageContent/Devlog/Devlog.astro (pełna strona /devlog)
//  - src/components/PageContent/ServerArticles/HexSmp.astro (sekcja "Co słychać w produkcji?")

export type DevlogTag = 'SMP' | 'Event' | 'Ogólne';

export type DevlogMedia = {
    type: 'image' | 'video';
    src: string;
    alt?: string;
    mimeType?: string;
    poster?: string | null;
};

export type DevlogEntry = {
    /** Data w formacie wyświetlanym użytkownikowi, np. "19 kwi 2026". */
    date: string;
    /** Data w formacie ISO (YYYY-MM-DD) dla atrybutu datetime. */
    dateTime: string;
    tag: DevlogTag;
    title: string;
    /** Krótki opis dla podglądu (np. karta na stronie HEX SMP). 1-2 zdania. */
    summary: string;
    /** Pełna treść wpisu na stronie /devlog. Jeżeli brak – użyty zostanie summary. */
    content?: string;
    media?: DevlogMedia[];
};

export const devlogEntries: DevlogEntry[] = [
    {
        date: '19 kwi 2026',
        dateTime: '2026-04-19',
        tag: 'SMP',
        title: 'Pierwsze prace nad serwerem SMP za nami!',
        summary: 'Podstawy serwera SMP są gotowe. Szykujemy mechaniki, których próżno szukać w polskim Minecrafcie — z inspiracją Hypixelem i systemem miast.',
        content: 'Podstawy naszego serwera SMP są już gotowe. Gdyby miał to być zwykły survival, prawdopodobnie zamknęlibyśmy ten etap w kilka godzin. Od początku wiedzieliśmy jednak, że chcemy stworzyć coś znacznie ambitniejszego. Pracujemy nad rozwiązaniami, których w Polsce praktycznie się nie spotyka, a i za granicą nadal należą do rzadkości. Nie chcemy jeszcze zdradzać zbyt wiele, ale możemy uchylić rąbka tajemnicy: mocno inspirujemy się jednym z trybów z Hypixela, a ważną rolę odegra u nas także system miast. W ostatnich tygodniach dużo czasu poświęciliśmy również na rozwój naszej strony internetowej. Chcieliśmy dodać jej więcej charakteru i wizualnego dopracowania. Mamy nadzieję, że efekt jest widoczny.',
    },
    {
        date: '17 kwi 2026',
        dateTime: '2026-04-17',
        tag: 'Event',
        title: 'Intensywny start prac nad eventem HEX VIII',
        summary: 'HEX VIII nabiera kształtu — jednym z dwóch paneli będzie Titanic. Pluginy tonięcia, uderzenia w górę lodową i efektów idą pełną parą.',
        content: 'Po długiej naradzie przygotowaliśmy szczegółowy podział zadań i plan prac nad kolejnym wydarzeniem. HEX VIII będzie składał się z dwóch paneli, a jednym z nich na pewno będzie Titanic. Prace nad pluginami odpowiadającymi za tonięcie, uderzenie w górę lodową, efekty oraz współpracę wszystkich systemów idą bardzo sprawnie. Scenariusz zadań jest już niemal gotowy, a mapa cały czas powstaje. Jesteśmy zaskoczeni, jak wiele udało się zrobić w zaledwie kilka dni, i daje nam to dużą nadzieję, że już niedługo będziemy mogli mocniej skupić się na otwarciu serwera SMP. Do tego momentu zdążyliśmy już przygotować koncepcję ekonomii, dokładny opis planowanych mechanik oraz podział prac nad pluginami, konfiguracją i mapą.',
        media: [
            { type: 'video', src: 'videos/devlog/IceBergBoom.mp4' },
            { type: 'video', src: 'videos/devlog/WaterEffect.mp4' },
        ],
    },
    {
        date: '4 kwi 2026',
        dateTime: '2026-04-04',
        tag: 'Event',
        title: 'Start wydarzenia HEX VII',
        summary: 'Ruszyły prace nad HEX VII — dziesięć mini-gier, mapy, pluginy i skrypty. Wcześniejsze planowanie zdecydowanie się opłaciło.',
        content: 'Prace nad kolejnym eventem ruszyły pełną parą. Mieliśmy już spore opóźnienie, a do przygotowania pozostawało naprawdę dużo: dziesięć mini-gier, ich mapy, pluginy i skrypty. Pomogło nam jednak to, że już wcześniej planowaliśmy następne wydarzenia z dużym wyprzedzeniem. Dzięki temu mogliśmy szybciej przejść od pomysłów do realizacji.',
    },
    {
        date: '7 mar 2026',
        dateTime: '2026-03-07',
        tag: 'Event',
        title: 'Koniec prac nad systemem serwerów',
        summary: 'Przebudowa całej infrastruktury zakończona. Baza danych, uprawnienia, pluginy i konfiguracja sieciowa pozwalają teraz skalować się taniej.',
        content: 'Gdyby ktoś zapytał nas dwa miesiące wcześniej, ile zajmie przebudowa całego systemu serwerów, pewnie odpowiedzielibyśmy, że to kwestia kilku dni. Rzeczywistość szybko to zweryfikowała. Taki termin byłby możliwy tylko wtedy, gdyby ktoś z nas mógł pracować nad tym na pełen etat. Do samego końca liczyliśmy, że uda się wystartować z kolejnym eventem już w połowie marca, ale skala prac była po prostu ogromna. Baza danych, uprawnienia, pluginy, podział pracy, budowa mapy, konfiguracja sieciowa i duże ambicje połączone z bardzo ograniczonym czasem — to było wymagające połączenie. Mimo wszystko efekt końcowy wynagrodził cały włożony wysiłek. Przy prowadzeniu serwera bardziej z pasji niż dla zysku szybko okazuje się, że nawet utrzymanie niewielkiej infrastruktury kosztuje zauważalne pieniądze. Dotychczasowe rozwiązania były wystarczające dla kilkudziesięciu graczy, ale w perspektywie kilku serwerów i większej skali zaczynało to mocno obciążać budżet. Wprowadzone przez nas zmiany pozwalają dziś myśleć o znacznie większej skali działania przy dużo rozsądniejszych kosztach, a samo uruchamianie kolejnych serwerów zapowiada się teraz znacznie wygodniej.',
    },
    {
        date: '15 lut 2026',
        dateTime: '2026-02-15',
        tag: 'Ogólne',
        title: 'Prace nad systemem serwerów',
        summary: 'Przenosimy infrastrukturę na nowy serwer — zaplecze techniczne, serwer pluginowy i konfiguracja sieciowa stawiane od zera.',
        content: 'Rozpoczęliśmy prace nad przeniesieniem naszej infrastruktury na nowy serwer. Cały system stawiamy od podstaw — od zaplecza technicznego i serwera pluginowego po konfigurację sieciową. Celem tej zmiany jest stworzenie solidnej bazy pod dalszy rozwój projektu, tak aby w przyszłości można było utrzymywać nie tylko serwer eventowy, ale także kolejne tryby bez gwałtownego wzrostu kosztów.',
    },
];

/** Zwraca N najnowszych wpisów (kolejność taka jak w tablicy źródłowej). */
export const getLatestDevlogEntries = (limit: number): DevlogEntry[] =>
    devlogEntries.slice(0, Math.max(0, limit));

/** Pełna treść wpisu, z fallbackiem do summary. */
export const getDevlogEntryBody = (entry: DevlogEntry): string => entry.content ?? entry.summary;
