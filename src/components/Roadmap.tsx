'use client'

import { motion, type Variants } from 'framer-motion'
import { CheckCircle2, Clock, Sparkles, Rocket } from 'lucide-react'
import { roadmapPhases } from '@/data/site'

const statusConfig = {
  current: {
    label: 'NOW LIVE',
    icon: <CheckCircle2 className="w-5 h-5" />,
    headerBg: 'bg-green-500/20 border-green-500/30',
    headerText: 'text-green-400',
    dotBg: 'bg-green-400',
    dotRing: 'ring-green-400/30',
    border: 'border-green-500/30',
    glowColor: 'rgba(34,197,94,0.1)',
  },
  next: {
    label: 'NEXT',
    icon: <Rocket className="w-5 h-5" />,
    headerBg: 'bg-yellow-400/20 border-yellow-400/30',
    headerText: 'text-yellow-400',
    dotBg: 'bg-yellow-400',
    dotRing: 'ring-yellow-400/30',
    border: 'border-yellow-400/20',
    glowColor: 'rgba(251,191,36,0.08)',
  },
  planned: {
    label: 'PLANNED',
    icon: <Clock className="w-5 h-5" />,
    headerBg: 'bg-purple-500/20 border-purple-500/30',
    headerText: 'text-purple-400',
    dotBg: 'bg-purple-400',
    dotRing: 'ring-purple-400/30',
    border: 'border-purple-500/20',
    glowColor: 'rgba(139,92,246,0.08)',
  },
  future: {
    label: 'FUTURE',
    icon: <Sparkles className="w-5 h-5" />,
    headerBg: 'bg-slate-700/50 border-slate-600/30',
    headerText: 'text-slate-400',
    dotBg: 'bg-slate-500',
    dotRing: 'ring-slate-500/30',
    border: 'border-slate-700/30',
    glowColor: 'rgba(100,116,139,0.05)',
  },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080b1a] via-[#0d1123] to-[#080b1a]" />

      <div className="container-arena relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold text-purple-400 tracking-widest uppercase mb-3">
            Development Path
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 sm:mb-4">
            The Arena Grows
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Four phases taking RiskArena from early demo to full ecosystem.
          </p>
        </motion.div>

        {/* Phases */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5"
        >
          {roadmapPhases.map((phase) => {
            const cfg = statusConfig[phase.status]
            return (
              <motion.div
                key={phase.phase}
                variants={cardVariants}
                className={`relative p-6 rounded-xl bg-gradient-to-br from-[#111827] to-[#0d1123] border transition-all duration-300 overflow-hidden ${cfg.border}`}
                style={{
                  boxShadow: `0 0 0 transparent`,
                }}
                whileHover={{
                  boxShadow: `0 0 30px ${cfg.glowColor}`,
                }}
              >
                {/* Phase number */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${cfg.headerBg} ${cfg.headerText}`}>
                    {cfg.icon}
                    {cfg.label}
                  </div>
                  <span className="text-3xl font-black text-slate-800">0{phase.phase}</span>
                </div>

                {/* Title */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ring-4 ${cfg.dotBg} ${cfg.dotRing}`} />
                  <h3 className="text-white font-black text-lg">Phase {phase.phase}: {phase.title}</h3>
                </div>

                {/* Items */}
                <ul className="space-y-2.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-2 ${cfg.dotBg}`} />
                      <span className={phase.status === 'current' ? 'text-slate-300' : 'text-slate-500'}>
                        {item}
                      </span>
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
