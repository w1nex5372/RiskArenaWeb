'use client'

import { motion, type Variants } from 'framer-motion'
import { Swords, Zap, Trophy, Package, CheckCircle2 } from 'lucide-react'
import { gameModes } from '@/data/site'

const iconMap: Record<string, React.ReactNode> = {
  swords: <Swords className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  trophy: <Trophy className="w-6 h-6" />,
  package: <Package className="w-6 h-6" />,
}

const colorStyles = {
  red: {
    iconBg: 'bg-red-900/40 text-red-400',
    border: 'border-red-900/30 hover:border-red-700/50',
    glow: 'hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]',
    accentLine: 'bg-red-600',
  },
  gold: {
    iconBg: 'bg-yellow-400/20 text-yellow-400',
    border: 'border-yellow-400/20 hover:border-yellow-400/40',
    glow: 'hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]',
    accentLine: 'bg-yellow-400',
  },
  purple: {
    iconBg: 'bg-purple-500/20 text-purple-400',
    border: 'border-purple-500/20 hover:border-purple-500/40',
    glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
    accentLine: 'bg-purple-500',
  },
}

const badgeStyles = {
  green: 'bg-green-500/20 text-green-400 border border-green-500/30',
  gold: 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30',
  purple: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function GameModes() {
  return (
    <section id="game-modes" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080b1a] via-[#0d1123] to-[#080b1a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-950/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-arena relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block text-xs font-bold text-red-500 tracking-widest uppercase mb-3">
            Game Modes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 sm:mb-4">
            Choose Your Battle
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Four ways to fight, loot, and climb. Each mode rewards a different kind of warrior.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {gameModes.map((mode) => {
            const colors = colorStyles[mode.color]
            return (
              <motion.div
                key={mode.id}
                variants={cardVariants}
                className={`relative group p-6 rounded-xl bg-gradient-to-br from-[#111827] to-[#0d1123] border transition-all duration-300 overflow-hidden ${colors.border} ${colors.glow}`}
              >
                {/* Accent line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${colors.accentLine} opacity-60`} />

                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${colors.iconBg}`}>
                      {iconMap[mode.icon]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-black text-xl tracking-tight">{mode.title}</h3>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase ${badgeStyles[mode.badgeColor]}`}>
                          {mode.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{mode.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {mode.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-slate-500 text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400/60 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
