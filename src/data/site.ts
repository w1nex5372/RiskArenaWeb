export const siteConfig = {
  name: 'RiskArena',
  tagline: 'Dark Fantasy Arena. Inside Telegram.',
  description:
    'Fight in 1v1 battles, raid bosses, climb leaderboards and collect rare loot. RiskArena is a dark fantasy arena game built as a Telegram Mini App.',
  telegramUrl: 'https://t.me/RiskArenaBot',
  waitlistUrl: '#waitlist',
}

export const navLinks = [
  { label: 'Arena', href: '#game-modes' },
  { label: 'Classes', href: '#classes' },
  { label: 'Loot', href: '#loot' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'Roadmap', href: '#roadmap' },
]

export const heroBadges = [
  { label: 'Early Demo Live', color: 'green' as const },
  { label: 'Telegram Mini App', color: 'purple' as const },
  { label: 'Season 1 Testing', color: 'gold' as const },
]

export const demoStatusCards = [
  {
    id: 'arena',
    title: '1v1 Arena',
    status: 'live' as const,
    statusLabel: 'LIVE',
    icon: 'swords',
    description: 'Challenge players in real-time duels',
  },
  {
    id: 'raid',
    title: 'Boss Raid',
    status: 'testing' as const,
    statusLabel: 'TESTING',
    icon: 'zap',
    description: 'Team attacks on global raid bosses',
  },
  {
    id: 'leaderboard',
    title: 'Leaderboard',
    status: 'live' as const,
    statusLabel: 'ACTIVE',
    icon: 'trophy',
    description: 'Season 1 rankings by coins, wins, level',
  },
  {
    id: 'inventory',
    title: 'Inventory',
    status: 'progress' as const,
    statusLabel: 'IN PROGRESS',
    icon: 'package',
    description: 'Collect, equip and upgrade rare items',
  },
  {
    id: 'rewards',
    title: 'Daily Rewards',
    status: 'coming' as const,
    statusLabel: 'COMING SOON',
    icon: 'gift',
    description: 'Daily chests and bonus coin events',
  },
]

export const screenshots = [
  {
    id: 'home',
    src: '/screenshots/home.png',
    alt: 'RiskArena Home — Rise to Risk Season 1',
    label: 'Home',
    description: 'Season hub with daily quests and game mode navigation',
  },
  {
    id: 'arena',
    src: '/screenshots/arena.png',
    alt: 'RiskArena Arena — 1v1 Warrior Duels',
    label: 'Arena',
    description: 'Choose your warrior class and enter the battle queue',
  },
  {
    id: 'raid',
    src: '/screenshots/raid.png',
    alt: 'RiskArena Boss Raid — Iron Golem',
    label: 'Boss Raid',
    description: 'Attack global raid bosses and compete for top damage',
  },
  {
    id: 'ranks',
    src: '/screenshots/ranks.png',
    alt: 'RiskArena Leaderboard — Season 1 Rankings',
    label: 'Leaderboard',
    description: 'Season 1 rankings — climb the charts and earn prizes',
  },
  {
    id: 'items',
    src: '/screenshots/items.png',
    alt: 'RiskArena Items — Inventory and Gear',
    label: 'Items',
    description: 'Manage your loadout — weapons, armor and abilities',
  },
]

export const gameModes = [
  {
    id: 'arena',
    title: 'Arena',
    icon: 'swords',
    color: 'red' as const,
    badge: 'LIVE',
    badgeColor: 'green' as const,
    description:
      '1v1 PvP duels. Choose your class — Warrior, Rogue, and more. Earn XP, climb ranks, and prove your dominance.',
    features: ['Real-time 1v1 battles', 'Class system with bonuses', 'Rank climbing', 'Win/loss tracking'],
  },
  {
    id: 'raid',
    title: 'Boss Raid',
    icon: 'zap',
    color: 'red' as const,
    badge: 'TESTING',
    badgeColor: 'gold' as const,
    description:
      'Team up against global raid bosses. Deal the most damage. Split coins and rare loot when the boss falls.',
    features: ['Global cooperative raids', 'Damage-based loot split', 'Rare item drops', 'Phase-based bosses'],
  },
  {
    id: 'tournament',
    title: 'Tournament',
    icon: 'trophy',
    color: 'gold' as const,
    badge: 'SOON',
    badgeColor: 'gold' as const,
    description:
      'Seasonal bracket competitions with prizes. Face the top players in structured elimination rounds.',
    features: ['Seasonal brackets', 'Elimination rounds', 'Prize pools', 'Coming Phase 2'],
  },
  {
    id: 'inventory',
    title: 'Inventory',
    icon: 'package',
    color: 'purple' as const,
    badge: 'IN PROGRESS',
    badgeColor: 'purple' as const,
    description:
      'Collect weapons, armor and abilities. Equip your loadout before every battle to gain the edge.',
    features: ['Weapon, Armor, Ability slots', 'Shop and upgrades', 'Item drop system', 'Class-specific gear'],
  },
]

export const rewardCards = [
  {
    id: 'badge',
    icon: 'shield',
    title: 'Early Player Badge',
    description:
      'Players who join during the demo phase may receive a permanent early supporter badge visible on their profile.',
    tag: 'Profile',
  },
  {
    id: 'xp',
    icon: 'zap',
    title: 'Bonus Coins & XP Events',
    description:
      'Early players get access to bonus coin multiplier events and boosted XP during Season 1 testing.',
    tag: 'In-Game',
  },
  {
    id: 'leaderboard',
    icon: 'trophy',
    title: 'Leaderboard Prizes',
    description:
      'Season 1 top performers will be eligible for leaderboard prizes when rewards go live.',
    tag: 'Competitive',
  },
  {
    id: 'ecosystem',
    icon: 'sparkles',
    title: 'Future Ecosystem Eligibility',
    description:
      'Early supporters may become eligible for future token/NFT ecosystem rewards. Nothing guaranteed — planned for later phases.',
    tag: 'Future',
    disclaimer: true,
  },
]

export const roadmapPhases = [
  {
    phase: 1,
    title: 'Demo',
    status: 'current' as const,
    statusLabel: 'NOW LIVE',
    items: [
      'Telegram Mini App launched',
      '1v1 Arena battles',
      'Boss Raid (testing)',
      'Season 1 Leaderboard',
      'Basic Inventory system',
      'Daily Chest & Quests',
    ],
  },
  {
    phase: 2,
    title: 'Progression',
    status: 'next' as const,
    statusLabel: 'NEXT',
    items: [
      'Daily quest system',
      'Item drops & rarity tiers',
      'Upgrade & craft system',
      'Classes & skill trees',
      'Expanded boss roster',
    ],
  },
  {
    phase: 3,
    title: 'Community',
    status: 'planned' as const,
    statusLabel: 'PLANNED',
    items: [
      'Seasonal resets & prizes',
      'Bracket tournaments',
      'Referral reward system',
      'Guilds and team play',
      'Cross-server events',
    ],
  },
  {
    phase: 4,
    title: 'Ecosystem',
    status: 'future' as const,
    statusLabel: 'FUTURE',
    items: [
      'Marketplace concept',
      'NFT item layer (planned)',
      'Token reward system (planned)',
      'Android/iOS expansion',
      'Web version',
    ],
  },
]
