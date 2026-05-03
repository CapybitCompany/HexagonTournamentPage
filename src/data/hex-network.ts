export const hexProjectStats = {
  tournamentsPlayed: 7,
  rankedPlayers: 141,
  discordMembers: 133,
  prizePoolPln: 3450,
  activityStartedOn: '2025-03-15',
};

export const nextHexEvent = {
  edition: 'HEX VIII',
  theme: 'Titanic',
  startIso: '2026-05-16T19:00:00',
  endIso: '2026-05-16T23:00:00',
  displayDate: '16.05.2026',
  displayDateTime: '16.05.2026 19:00',
  registerUrl: 'https://discord.gg/e6SuCrQHak',
  playerLimit: 50,
  rewardsLabel: 'Na Discordzie',
};

export const homepageHeroStats = [
  { icon: '⚔️', value: `${hexProjectStats.tournamentsPlayed}`, label: 'turniejów' },
  { icon: '🏆', value: `${hexProjectStats.rankedPlayers}`, label: 'graczy w rankingu' },
  { icon: '💰', value: `${hexProjectStats.prizePoolPln} zł`, label: 'w nagrodach' },
];

export const homepageStatsGrid = [
  { label: 'Rozegranych turniejów', value: `${hexProjectStats.tournamentsPlayed}` },
  { label: 'Łącznie graczy w turniejach', value: `${hexProjectStats.rankedPlayers}` },
  { label: 'Członków Discord', value: `${hexProjectStats.discordMembers}` },
  { label: 'Dni naszej działalności', value: '0', daysFrom: hexProjectStats.activityStartedOn },
];

export const serverRoadmap = [
  { headerText: 'SMP Economy', href: 'hexSMP', progress: 33, eta: '4.07.2026' },
  { headerText: 'Mini Games', href: 'hexMiniGames', progress: 10, eta: 'Q3 2026' },
  { headerText: 'PARKOUR', href: 'hexParkour', progress: 0, eta: 'Q4 2026' },
  { headerText: 'PVP', href: 'hexPvp', progress: 0, eta: 'Q4 2026' },
];

export const homepageTimeline = [
  {
    date: nextHexEvent.displayDate,
    dateTime: '2026-05-16',
    tag: 'Event',
    tagClass: 'tagEvent',
    title: `${nextHexEvent.edition} — turniej ${nextHexEvent.theme}`,
    description: 'Najbliższy turniej z pulą nagród i punktami do rankingu. Start 19:00.',
    href: 'hexEvent',
    cta: 'Szczegóły eventu →',
  },
  {
    date: '4.07.2026',
    tag: 'SMP',
    tagClass: 'tagSmp',
    title: 'Start serwera HEX SMP',
    description: 'Ruszamy z nowym serwerem SMP z ekonomią, systemem miast i autorskimi mechanikami.',
    href: 'hexSmp',
    cta: 'Poznaj HEX SMP →',
  },
  {
    date: '2026',
    tag: 'Ranking',
    tagClass: 'tagRanking',
    title: 'Nowy sezon rankingowy',
    description: 'Przygotuj się na nową klasyfikację i walkę o miejsce w topce.',
  },
  {
    date: '2027',
    tag: 'Przyszłość',
    tagClass: 'tagFuture',
    title: 'HEXHogwart — świat magii w klimacie RPG',
    description: 'Trwają prace nad nowym światem i mechanikami RPG inspirowanymi uniwersum magii.',
  },
];

export const nextHexEventSchedule = [
  { time: '19:00', label: 'Zbiórka graczy na serwerze' },
  { time: '19:05', label: 'Przywitanie i omówienie zasad' },
  { time: '19:10', label: 'Konkurencja - Prawda/Fałsz' },
  { time: '19:20', label: 'Konkurencja - Sajmon mówi' },
  { time: '19:30', label: 'Panel I - Wejście na pokład Titanica' },
  { time: '20:10', label: 'Panel II - 1 z 10' },
  { time: '21:30', label: 'Koniec eventu i opcjonalna rozmowa z organizatorami' },
];