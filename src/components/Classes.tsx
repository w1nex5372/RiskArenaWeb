'use client'

import { motion, type Variants } from 'framer-motion'
import { Swords, Zap, Sparkles, Shield } from 'lucide-react'

const classes = [
  {
    id: 'warrior',
    name: 'Warrior',
    subtitle: 'Son of Ares',
    badge: 'ACTIVE',
    badgeStyle: 'bg-green-500/20 text-green-400 border border-green-500/40',
    description: 'Frontline fighter built for survival and consistent victories.',
    bonuses: ['+3 ATK', '+15 HP'],
    bonusStyle: 'bg-red-900/40 text-red-300 border border-red-700/40',
    icon: Swords,
    accent: {
      glow: 'rgba(220,38,38,0.25)',
      glowHover: 'rgba(220,38,38,0.5)',
      iconBg: 'from-red-950 to-red-900/60',
      iconColor: 'text-red-400',
      ringColor: 'rgba(220,38,38,0.25)',
      iconGlow: '0 0 40px rgba(220,38,38,0.6), 0 0 80px rgba(220,38,38,0.2)',
      border: 'border-red-800/30',
      borderHover: 'hover:border-red-600/60',
      topLine: 'from-red-600 via-red-400 to-transparent',
      cardBg: 'from-[#1a0808] via-[#130d0d] to-[#0d1123]',
      shimmer: 'rgba(220,38,38,0.05)',
    },
  },
  {
    id: 'rogue',
    name: 'Rogue',
    subtitle: 'Shadow Walker',
    badge: 'COMING SOON',
    badgeStyle: 'bg-purple-500/20 text-purple-400 border border-purple-500/40',
    description: 'Fast assassin focused on burst damage and precision strikes.',
    bonuses: ['+5 Crit', '+10 Speed'],
    bonusStyle: 'bg-purple-900/40 text-purple-300 border border-purple-700/40',
    icon: Zap,
    accent: {
      glow: 'rgba(139,92,246,0.2)',
      glowHover: 'rgba(139,92,246,0.45)',
      iconBg: 'from-purple-950 to-purple-900/60',
      iconColor: 'text-purple-400',
      ringColor: 'rgba(139,92,246,0.25)',
      iconGlow: '0 0 40px rgba(139,92,246,0.6), 0 0 80px rgba(139,92,246,0.2)',
      border: 'border-purple-800/30',
      borderHover: 'hover:border-purple-500/60',
      topLine: 'from-purple-600 via-purple-400 to-transparent',
      cardBg: 'from-[#100a1a] via-[#0e0d16] to-[#0d1123]',
      shimmer: 'rgba(139,92,246,0.05)',
    },
  },
  {
    id: 'mage',
    name: 'Mage',
    subtitle: 'Arcane Scholar',
    badge: 'COMING SOON',
    badgeStyle: 'bg-blue-500/20 text-blue-400 border border-blue-500/40',
    description: 'Master arcane power and overwhelm enemies with devastating spells.',
    bonuses: ['+8 Magic', '+5 Mana Regen'],
    bonusStyle: 'bg-blue-900/40 text-blue-300 border border-blue-700/40',
    icon: Sparkles,
    accent: {
      glow: 'rgba(59,130,246,0.2)',
      glowHover: 'rgba(59,130,246,0.45)',
      iconBg: 'from-blue-950 to-blue-900/60',
      iconColor: 'text-blue-400',
      ringColor: 'rgba(59,130,246,0.25)',
      iconGlow: '0 0 40px rgba(59,130,246,0.6), 0 0 80px rgba(59,130,246,0.2)',
      border: 'border-blue-800/30',
      borderHover: 'hover:border-blue-500/60',
      topLine: 'from-blue-600 via-blue-400 to-transparent',
      cardBg: 'from-[#080e1a] via-[#0a0f18] to-[#0d1123]',
      shimmer: 'rgba(59,130,246,0.05)',
    },
  },
  {
    id: 'paladin',
    name: 'Paladin',
    subtitle: 'Divine Sentinel',
    badge: 'COMING SOON',
    badgeStyle: 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/40',
    description: 'Holy protector capable of enduring the longest battles.',
    bonuses: ['+20 HP', '+2 Defense'],
    bonusStyle: 'bg-yellow-900/40 text-yellow-300 border border-yellow-700/40',
    icon: Shield,
    accent: {
      glow: 'rgba(251,191,36,0.15)',
      glowHover: 'rgba(251,191,36,0.4)',
      iconBg: 'from-yellow-950 to-yellow-900/40',
      iconColor: 'text-yellow-400',
      ringColor: 'rgba(251,191,36,0.25)',
      iconGlow: '0 0 40px rgba(251,191,36,0.5), 0 0 80px rgba(251,191,36,0.15)',
      border: 'border-yellow-700/30',
      borderHover: 'hover:border-yellow-400/50',
      topLine: 'from-yellow-400 via-yellow-300 to-transparent',
      cardBg: 'from-[#12100a] via-[#100f0a] to-[#0d1123]',
      shimmer: 'rgba(251,191,36,0.04)',
    },
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

export default function Classes() {
  return (
    <section id="classes" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#080b1a]" />
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/3 rounded-full blur-[80px] pointer-events-none" />

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
            Classes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 sm:mb-4 leading-tight">
            Choose Your Warrior
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Every class offers a different path to victory. Master your strengths and dominate the arena.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          {classes.map((cls) => {
            const Icon = cls.icon
            return (
              <motion.div
                key={cls.id}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  boxShadow: `0 0 40px ${cls.accent.glowHover}, 0 20px 60px rgba(0,0,0,0.5)`,
                }}
                initial={{ boxShadow: `0 0 0px ${cls.accent.glow}` }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl border overflow-hidden cursor-default select-none ${cls.accent.border} ${cls.accent.borderHover} transition-colors duration-300`}
              >
                {/* Card background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${cls.accent.cardBg}`} />

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cls.accent.topLine}`} />

                {/* Shimmer overlay */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top, ${cls.accent.shimmer} 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                  {/* Icon area */}
                  <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-b ${cls.accent.iconBg} mb-5 overflow-hidden`}
                    style={{ height: '140px' }}
                  >
                    {/* Radial glow behind icon */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(ellipse at center, ${cls.accent.glow} 0%, transparent 70%)`,
                      }}
                    />

                    {/* Decorative ring */}
                    <div
                      className="absolute w-24 h-24 rounded-full border opacity-40"
                      style={{ borderColor: cls.accent.ringColor }}
                    />
                    <div
                      className="absolute w-14 h-14 rounded-full border opacity-20"
                      style={{ borderColor: cls.accent.ringColor }}
                    />

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: cls.id === 'rogue' ? -12 : cls.id === 'mage' ? 8 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <Icon
                        className={`w-14 h-14 sm:w-16 sm:h-16 ${cls.accent.iconColor}`}
                        strokeWidth={1.2}
                        style={{ filter: `drop-shadow(${cls.accent.iconGlow})` }}
                      />
                    </motion.div>

                    {/* Unavailable overlay for coming-soon */}
                    {cls.badge !== 'ACTIVE' && (
                      <div className="absolute inset-0 bg-[#080b1a]/30 backdrop-blur-[1px]" />
                    )}
                  </div>

                  {/* Badge */}
                  <div className="mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase ${cls.badgeStyle}`}>
                      {cls.badge === 'ACTIVE' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      )}
                      {cls.badge}
                    </span>
                  </div>

                  {/* Name + subtitle */}
                  <div className="mb-3">
                    <h3 className="text-white font-black text-xl sm:text-2xl tracking-tight leading-none mb-1">
                      {cls.name}
                    </h3>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                      {cls.subtitle}
                    </p>
                  </div>

                  {/* Stat bonuses */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cls.bonuses.map((bonus) => (
                      <span
                        key={bonus}
                        className={`px-2.5 py-1 rounded text-xs font-bold tracking-wide ${cls.bonusStyle}`}
                      >
                        {bonus}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {cls.description}
                  </p>

                  {/* Bottom divider + availability */}
                  <div className="mt-5 pt-4 border-t border-slate-800/60">
                    {cls.badge === 'ACTIVE' ? (
                      <span className="text-xs text-green-400 font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Available now in demo
                      </span>
                    ) : (
                      <span className="text-xs text-slate-600 font-medium">
                        Unlocks in Phase 2
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
          className="text-center text-slate-600 text-xs sm:text-sm mt-10 sm:mt-12 max-w-lg mx-auto"
        >
          More classes, skills and specializations are planned for future updates.
        </motion.p>
      </div>
    </section>
  )
}
