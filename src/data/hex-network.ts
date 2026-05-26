export const hexProjectStats = {
  tournamentsPlayed: 8,
  rankedPlayers: 148,
  discordMembers: 135,
  prizePoolPln: 4590,
  activityStartedOn: '2025-03-15',
};

export const nextHexEvent = {
  edition: 'HEX: Eliminator',
  theme: 'Eliminator',
  startIso: '2026-06-13T18:00:00',
  endIso: '2026-06-13T22:00:00',
  displayDate: '13.06.2026',
  displayDateTime: '13.06.2026 18:00',
  registerUrl: 'https://discord.gg/e6SuCrQHak',
  playerLimit: 30,
  rewardsLabel: '100 zł BLIK + 6 pkt rankingowych + Totem nieśmiertelności',
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
  { headerText: 'HEX SMP', src: 'images/Welcome/SMP.png', href: 'hexSmp', available: true, progress: 50, eta: '3.07.2026' },
  { headerText: 'Mini Games', src: 'images/Welcome/Minigames.png', href: 'hexMiniGames', available: false, progress: 15, eta: 'Q3 2026' },
  { headerText: 'PVP — Mask Ritual', src: 'images/Welcome/MaskRitual.png', href: 'hexPvp', available: false, progress: 0, eta: 'Q4 2026' },
  { headerText: 'HEX Hogwart', src: 'images/Welcome/HarryPotter.png', href: 'hexHogwart', available: false, progress: 0, eta: 'Q1 2027' },
];

export const homepageTimeline = [
  {
    date: nextHexEvent.displayDate,
    dateTime: '2026-06-13',
    tag: 'Event',
    tagClass: 'tagEvent',
    title: `${nextHexEvent.edition} — mini-turniej PvP 1 vs 1`,
    description: 'Krótki event PvP: 15 minut na zdobycie ekwipunku w trybie survival, potem pojedynki 1 vs 1 do ostatniego gracza. Start 18:00.',
    href: 'hexEvent',
    cta: 'Szczegóły eventu →',
  },
  {
    date: '3.07.2026',
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
  { time: '18:00', label: 'Zbiórka graczy w lobby i przywitanie' },
  { time: '18:05', label: 'Omówienie zasad i listy zablokowanych przedmiotów' },
  { time: '18:10', label: 'Wybór jednego z czterech tuneli — bonusowe przedmioty' },
  { time: '18:15', label: 'Faza survival — 15 minut na zdobycie ekwipunku' },
  { time: '18:30', label: 'Powrót do lobby i losowanie pierwszych przeciwników' },
  { time: '18:35', label: 'Seria pojedynków 1 vs 1 (i 1 vs 1 vs 1) na arenach' },
  { time: '19:15', label: 'Wielki finał — wyłonienie zwycięzcy HEX: Eliminator' },
];