'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { Bell, Users, MessageSquare, Star, type LucideIcon } from 'lucide-react'

const COMMUNITY_URL = 'https://t.me/RiskArenaTavern'
const NEWS_URL = 'https://t.me/RiskArenaNews'

interface Card {
  id: string
  icon: LucideIcon
  title: string
  description: string
  tag: string
  href: string | null
  cta: string | null
  accent: {
    iconBg: string
    iconColor: string
    iconGlow: string
    tagBg: string
    border: string
    topLine: string
    cardBg: string
  }
}

const cards: Card[] = [
  {
    id: 'updates',
    icon: Bell,
    title: 'Follow Updates',
    description: 'Stay current with every release, patch and behind-the-scenes development update as the arena grows.',
    tag: 'News',
    href: NEWS_URL,
    cta: 'Follow @RiskArenaNews',
    accent: {
      iconBg: 'bg-blue-500/15',
      iconColor: 'text-blue-400',
      iconGlow: '0 0 8px rgba(59,130,246,0.5)',
      tagBg: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      border: 'border-blue-800/25 hover:border-blue-500/40',
      topLine: 'from-blue-600 via-blue-400 to-transparent',
      cardBg: 'from-[#080e1a] to-[#0d1123]',
    },
  },
  {
    id: 'tavern',
    icon: Users,
    title: 'Join The Tavern',
    description: 'The RiskArena community hub. Meet early supporters, share feedback and get direct access to the team.',
    tag: 'Community',
    href: COMMUNITY_URL,
    cta: 'Join @RiskArenaTavern',
    accent: {
      iconBg: 'bg-yellow-400/15',
      iconColor: 'text-yellow-400',
      iconGlow: '0 0 8px rgba(251,191,36,0.5)',
      tagBg: 'bg-yellow-400/15 text-yellow-500 border border-yellow-400/25',
      border: 'border-yellow-700/25 hover:border-yellow-400/40',
      topLine: 'from-yellow-500 via-yellow-400 to-transparent',
      cardBg: 'from-[#14100a] to-[#0d1123]',
    },
  },
  {
    id: 'shape',
    icon: MessageSquare,
    title: 'Help Shape The Game',
    description: 'Early community members have a direct voice in features, classes, mechanics and future game direction.',
    tag: 'Feedback',
    href: COMMUNITY_URL,
    cta: 'Share your ideas',
    accent: {
      iconBg: 'bg-purple-500/15',
      iconColor: 'text-purple-400',
      iconGlow: '0 0 8px rgba(139,92,246,0.5)',
      tagBg: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
      border: 'border-purple-800/25 hover:border-purple-500/40',
      topLine: 'from-purple-600 via-purple-400 to-transparent',
      cardBg: 'from-[#100a1a] to-[#0d1123]',
    },
  },
  {
    id: 'status',
    icon: Star,
    title: 'Early Player Status',
    description: 'Players active during development may earn founder recognition and exclusive perks when the arena fully opens.',
    tag: 'Founder',
    href: null,
    cta: null,
    accent: {
      iconBg: 'bg-green-500/15',
      iconColor: 'text-green-400',
      iconGlow: '0 0 8px rgba(34,197,94,0.5)',
      tagBg: 'bg-green-500/20 text-green-400 border border-green-500/30',
      border: 'border-green-800/25 hover:border-green-500/40',
      topLine: 'from-green-600 via-green-400 to-transparent',
      cardBg: 'from-[#0a140a] to-[#0d1123]',
    },
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function EarlyDev() {
  return (
    <section id="early-dev" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080b1a]" />
      <div className="absolute top-0 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-purple-900/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-blue-900/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-arena relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-xs font-bold text-purple-400 tracking-widest uppercase mb-3">
            Early Development
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 sm:mb-4 leading-tight">
            The Arena Is Being{' '}
            <span className="text-yellow-400" style={{ textShadow: '0 0 30px rgba(251,191,36,0.3)' }}>
              Built
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            RiskArena is in active development. Join now to follow the build, shape the game and secure your place as a founding warrior.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl border overflow-hidden flex flex-col ${card.accent.border} transition-colors duration-300`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${card.accent.cardBg}`} />
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${card.accent.topLine}`} />

                <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${card.accent.iconBg}`}>
                    <Icon
                      className={`w-5 h-5 ${card.accent.iconColor}`}
                      strokeWidth={1.5}
                      style={{ filter: `drop-shadow(${card.accent.iconGlow})` }}
                    />
                  </div>

                  <span className={`inline-flex self-start px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-3 ${card.accent.tagBg}`}>
                    {card.tag}
                  </span>

                  <h3 className="text-white font-black text-base sm:text-lg mb-2 leading-tight">
                    {card.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {card.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-800/50">
                    {card.href && card.cta ? (
                      <Link
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs font-semibold ${card.accent.iconColor} hover:opacity-80 transition-opacity`}
                      >
                        {card.cta} →
                      </Link>
                    ) : (
                      <span className="text-xs text-slate-600 font-medium">
                        Activity tracked automatically
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
