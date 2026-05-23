'use client'

import { motion, type Variants } from 'framer-motion'
import { Swords, Zap, Trophy, Package, Gift } from 'lucide-react'
import { demoStatusCards } from '@/data/site'

const iconMap: Record<string, React.ReactNode> = {
  swords: <Swords className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
  trophy: <Trophy className="w-5 h-5" />,
  package: <Package className="w-5 h-5" />,
  gift: <Gift className="w-5 h-5" />,
}

const statusStyles = {
  live: {
    dot: 'bg-green-400 animate-pulse',
    badge: 'bg-green-500/20 text-green-400 border border-green-500/30',
    iconBg: 'bg-green-500/20 text-green-400',
    border: 'border-green-500/20 hover:border-green-500/40',
  },
  testing: {
    dot: 'bg-yellow-400 animate-pulse',
    badge: 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30',
    iconBg: 'bg-yellow-400/20 text-yellow-400',
    border: 'border-yellow-400/20 hover:border-yellow-400/40',
  },
  progress: {
    dot: 'bg-purple-400',
    badge: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
    iconBg: 'bg-purple-500/20 text-purple-400',
    border: 'border-purple-500/20 hover:border-purple-500/40',
  },
  coming: {
    dot: 'bg-slate-500',
    badge: 'bg-slate-700/50 text-slate-400 border border-slate-600/30',
    iconBg: 'bg-slate-700/50 text-slate-400',
    border: 'border-slate-700/30 hover:border-slate-600/50',
  },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function DemoStatus() {
  return (
    <section id="demo-status" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080b1a] via-[#0d1123] to-[#080b1a]" />

      <div className="container-arena relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-block text-xs font-bold text-yellow-400 tracking-widest uppercase mb-3">
            Build Status
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
            What&apos;s In The Build
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Here&apos;s the current state of the arena — what&apos;s working, what&apos;s in testing and what&apos;s coming.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4"
        >
          {demoStatusCards.map((card) => {
            const styles = statusStyles[card.status]
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                className={`relative p-5 rounded-lg bg-gradient-to-br from-[#111827] to-[#1a0a2e] border transition-all duration-300 ${styles.border}`}
              >
                {/* Icon */}
                <div className={`inline-flex p-2.5 rounded-lg mb-4 ${styles.iconBg}`}>
                  {iconMap[card.icon]}
                </div>

                {/* Status badge */}
                <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase mb-3 ${styles.badge}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
                  {card.statusLabel}
                </div>

                <h3 className="text-white font-bold text-base mb-1">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
