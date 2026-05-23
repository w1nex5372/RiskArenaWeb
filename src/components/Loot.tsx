'use client'

import { motion, type Variants } from 'framer-motion'
import { Sword, ShieldHalf, Zap, Crown, Sparkles, Package } from 'lucide-react'

const rarities = [
  {
    id: 'common',
    tier: 'Common',
    tierNumber: 1,
    description: 'Reliable starter equipment used by new warriors.',
    items: ['Rusty Sword', 'Leather Armor', 'Training Ring'],
    icon: Sword,
    accent: {
      badge: 'bg-slate-700/60 text-slate-300 border border-slate-600/50',
      iconBg: 'from-slate-800 to-slate-900',
      iconColor: 'text-slate-400',
      iconGlow: '0 0 20px rgba(148,163,184,0.4)',
      border: 'border-slate-700/40',
      glowIdle: 'rgba(148,163,184,0.08)',
      glowHover: 'rgba(148,163,184,0.25)',
      topLine: 'from-slate-500 via-slate-400 to-transparent',
      dotColor: 'bg-slate-400',
      itemColor: 'text-slate-400',
      shimmer: 'rgba(148,163,184,0.04)',
      cardBg: 'from-[#0e1117] to-[#0d1123]',
    },
  },
  {
    id: 'rare',
    tier: 'Rare',
    tierNumber: 2,
    description: 'Enhanced equipment with improved combat bonuses.',
    items: ['Knight Blade', 'Steel Chestplate', 'Arcane Talisman'],
    icon: ShieldHalf,
    accent: {
      badge: 'bg-blue-500/20 text-blue-300 border border-blue-500/40',
      iconBg: 'from-blue-950 to-blue-900/50',
      iconColor: 'text-blue-400',
      iconGlow: '0 0 30px rgba(59,130,246,0.6), 0 0 60px rgba(59,130,246,0.2)',
      border: 'border-blue-800/30',
      glowIdle: 'rgba(59,130,246,0.1)',
      glowHover: 'rgba(59,130,246,0.35)',
      topLine: 'from-blue-500 via-blue-400 to-transparent',
      dotColor: 'bg-blue-400',
      itemColor: 'text-blue-300/80',
      shimmer: 'rgba(59,130,246,0.05)',
      cardBg: 'from-[#080e1a] to-[#0d1123]',
    },
  },
  {
    id: 'epic',
    tier: 'Epic',
    tierNumber: 3,
    description: 'Powerful gear sought by experienced arena fighters.',
    items: ['Shadow Dagger', 'Storm Staff', 'Dragon Scale Armor'],
    icon: Zap,
    accent: {
      badge: 'bg-purple-500/20 text-purple-300 border border-purple-500/40',
      iconBg: 'from-purple-950 to-purple-900/50',
      iconColor: 'text-purple-400',
      iconGlow: '0 0 30px rgba(139,92,246,0.7), 0 0 60px rgba(139,92,246,0.25)',
      border: 'border-purple-800/30',
      glowIdle: 'rgba(139,92,246,0.1)',
      glowHover: 'rgba(139,92,246,0.4)',
      topLine: 'from-purple-600 via-purple-400 to-transparent',
      dotColor: 'bg-purple-400',
      itemColor: 'text-purple-300/80',
      shimmer: 'rgba(139,92,246,0.06)',
      cardBg: 'from-[#100a1a] to-[#0d1123]',
    },
  },
  {
    id: 'legendary',
    tier: 'Legendary',
    tierNumber: 4,
    description: 'Extremely rare items known throughout the arena.',
    items: ['Blade of Ares', 'Phoenix Crown', 'Titan Armor'],
    icon: Crown,
    accent: {
      badge: 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/50',
      iconBg: 'from-yellow-950 to-yellow-900/40',
      iconColor: 'text-yellow-400',
      iconGlow: '0 0 40px rgba(251,191,36,0.8), 0 0 80px rgba(251,191,36,0.3)',
      border: 'border-yellow-600/40',
      glowIdle: 'rgba(251,191,36,0.12)',
      glowHover: 'rgba(251,191,36,0.5)',
      topLine: 'from-yellow-400 via-yellow-200 to-transparent',
      dotColor: 'bg-yellow-400',
      itemColor: 'text-yellow-300/80',
      shimmer: 'rgba(251,191,36,0.06)',
      cardBg: 'from-[#14100a] to-[#0d1123]',
    },
    legendary: true,
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function RarityStars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 4 }).map((_, i) => (
        <Sparkles
          key={i}
          className={`w-2.5 h-2.5 ${i < count ? 'text-yellow-400 opacity-100' : 'text-slate-700 opacity-60'}`}
        />
      ))}
    </div>
  )
}

export default function Loot() {
  return (
    <section id="loot" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080b1a] via-[#0d1123] to-[#080b1a]" />
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-yellow-400/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-purple-900/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(60deg, #fbbf24 0, #fbbf24 1px, transparent 0, transparent 50%)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container-arena relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-xs font-bold text-yellow-400 tracking-widest uppercase mb-3">
            Loot System
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 sm:mb-4 leading-tight">
            Rare Loot Awaits
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Fight bosses, win battles and collect increasingly powerful gear.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          {rarities.map((rarity) => {
            const Icon = rarity.icon
            return (
              <motion.div
                key={rarity.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: rarity.legendary ? 1.03 : 1.02,
                  boxShadow: `0 0 50px ${rarity.accent.glowHover}, 0 24px 60px rgba(0,0,0,0.6)`,
                }}
                initial={{
                  boxShadow: `0 0 20px ${rarity.accent.glowIdle}`,
                }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl border overflow-hidden cursor-default select-none flex flex-col ${rarity.accent.border} transition-colors duration-300`}
              >
                {/* Card background */}
                <div className={`absolute inset-0 bg-gradient-to-b ${rarity.accent.cardBg}`} />

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${rarity.accent.topLine}`} />

                {/* Legendary: rotating border glow */}
                {rarity.legendary && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    style={{
                      background:
                        'conic-gradient(from 0deg, transparent 0deg, rgba(251,191,36,0.35) 60deg, transparent 120deg)',
                      filter: 'blur(10px)',
                    }}
                  />
                )}

                {/* Hover shimmer */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at top, ${rarity.accent.shimmer} 0%, transparent 65%)`,
                  }}
                />

                <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                  {/* Icon area */}
                  <div
                    className={`relative flex items-center justify-center rounded-xl bg-gradient-to-b ${rarity.accent.iconBg} mb-5 overflow-hidden`}
                    style={{ height: '140px' }}
                  >
                    {/* Background glow blob */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(ellipse at center, ${rarity.accent.glowIdle} 0%, transparent 70%)`,
                      }}
                    />

                    {/* Decorative rings */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: rarity.legendary ? 6 : 12, repeat: Infinity, ease: 'linear' }}
                      className="absolute w-20 h-20 rounded-full border border-dashed opacity-10"
                      style={{ borderColor: 'currentColor' }}
                    />
                    <div className="absolute w-12 h-12 rounded-full border opacity-15" style={{ borderColor: 'currentColor' }} />

                    {/* Package icon background for non-legendary */}
                    {!rarity.legendary && (
                      <Package
                        className="absolute w-24 h-24 opacity-[0.03]"
                        style={{ color: 'white' }}
                      />
                    )}

                    {/* Main icon */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      animate={rarity.legendary ? { scale: [1, 1.05, 1] } : {}}
                      transition={
                        rarity.legendary
                          ? { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                          : { duration: 0.3 }
                      }
                      className="relative z-10"
                    >
                      <Icon
                        className={`${rarity.legendary ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-12 h-12 sm:w-14 sm:h-14'} ${rarity.accent.iconColor}`}
                        strokeWidth={1.2}
                        style={{ filter: `drop-shadow(${rarity.accent.iconGlow})` }}
                      />
                    </motion.div>

                    {/* Legendary: extra sparkle particles */}
                    {rarity.legendary && (
                      <>
                        <motion.div
                          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                          className="absolute top-4 right-6 w-1.5 h-1.5 rounded-full bg-yellow-300"
                        />
                        <motion.div
                          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                          className="absolute bottom-5 left-5 w-1 h-1 rounded-full bg-yellow-400"
                        />
                        <motion.div
                          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1.3 }}
                          className="absolute top-6 left-8 w-1 h-1 rounded-full bg-yellow-200"
                        />
                      </>
                    )}
                  </div>

                  {/* Rarity badge + stars */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-widest uppercase ${rarity.accent.badge}`}>
                      {rarity.tier}
                    </span>
                    <RarityStars count={rarity.tierNumber} />
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {rarity.description}
                  </p>

                  {/* Item examples */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    {rarity.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className={`w-1 h-1 rounded-full flex-shrink-0 ${rarity.accent.dotColor}`} />
                        <span className={`text-xs font-medium ${rarity.accent.itemColor}`}>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="mt-5 pt-4 border-t border-slate-800/50">
                    {rarity.legendary ? (
                      <span className="text-xs text-yellow-400/80 font-semibold flex items-center gap-1.5">
                        <Crown className="w-3 h-3" />
                        Extremely rare drop
                      </span>
                    ) : (
                      <span className="text-xs text-slate-600 font-medium">
                        Drop chance increases with difficulty
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-600 text-xs sm:text-sm mt-10 sm:mt-12 max-w-2xl mx-auto px-4"
        >
          Higher rarity items are planned to become available through bosses, events, upgrades and future progression systems.
        </motion.p>
      </div>
    </section>
  )
}
