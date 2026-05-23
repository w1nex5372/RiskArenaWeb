'use client'

import { motion, type Variants } from 'framer-motion'
import { Shield, Zap, Trophy, Sparkles, AlertCircle } from 'lucide-react'
import { rewardCards } from '@/data/site'

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  trophy: <Trophy className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Rewards() {
  return (
    <section id="rewards" className="py-14 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#080b1a]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Diagonal stripe accent */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fbbf24 0, #fbbf24 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="container-arena relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold text-yellow-400 tracking-widest uppercase mb-3">
            Early Players
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 sm:mb-4">
            Early Players Get <span className="text-yellow-400">The Edge</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            The demo is running. Players who enter now are the founding warriors.
            Early activity may become eligible for exclusive rewards when they go live.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-8 sm:mb-10"
        >
          {rewardCards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className={`relative p-6 rounded-xl border transition-all duration-300 overflow-hidden ${
                card.disclaimer
                  ? 'bg-gradient-to-br from-[#111827] to-[#1a0a2e] border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]'
                  : 'bg-gradient-to-br from-[#111827] to-[#1a0a2e] border-yellow-400/15 hover:border-yellow-400/30 hover:shadow-[0_0_30px_rgba(251,191,36,0.08)]'
              }`}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg mb-4 ${
                card.disclaimer
                  ? 'bg-purple-500/20 text-purple-400'
                  : 'bg-yellow-400/20 text-yellow-400'
              }`}>
                {iconMap[card.icon]}
              </div>

              {/* Tag */}
              <div className="mb-3">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase ${
                  card.disclaimer
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    : 'bg-yellow-400/10 text-yellow-500 border border-yellow-400/20'
                }`}>
                  {card.tag}
                </span>
              </div>

              <h3 className="text-white font-bold text-base mb-2">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{card.description}</p>

              {card.disclaimer && (
                <div className="mt-4 flex items-start gap-1.5 text-xs text-slate-600">
                  <AlertCircle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                  <span>Planned feature. Not a guaranteed promise.</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            RiskArena is in early demo. Rewards and ecosystem features are planned for future phases and are not guaranteed.
            Early player activity is being tracked for potential future eligibility.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
