'use client'

import { motion, type Variants } from 'framer-motion'
import { Shield, Zap, Trophy, Sparkles, AlertCircle, CheckCircle2, type LucideIcon } from 'lucide-react'
import { rewardCards } from '@/data/site'

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  zap: Zap,
  trophy: Trophy,
  sparkles: Sparkles,
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
    <section id="rewards" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080b1a]" />
      <div className="absolute top-0 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

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
            Early Players
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 sm:mb-4 leading-tight">
            Early Players Get{' '}
            <span className="text-yellow-400" style={{ textShadow: '0 0 30px rgba(251,191,36,0.3)' }}>
              The Edge
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            The demo is live. Players who enter now are the founding warriors.
            Early activity may become eligible for exclusive rewards when they go live.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12"
        >
          {rewardCards.map((card) => {
            const Icon = iconMap[card.icon]
            const isDisclaimer = card.disclaimer

            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  boxShadow: isDisclaimer
                    ? '0 0 40px rgba(139,92,246,0.2), 0 20px 60px rgba(0,0,0,0.5)'
                    : '0 0 40px rgba(251,191,36,0.15), 0 20px 60px rgba(0,0,0,0.5)',
                }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl border overflow-hidden cursor-default select-none flex flex-col ${
                  isDisclaimer
                    ? 'border-purple-500/20 hover:border-purple-500/40'
                    : 'border-yellow-400/15 hover:border-yellow-400/35'
                } transition-colors duration-300`}
              >
                {/* Card bg */}
                <div className={`absolute inset-0 bg-gradient-to-b ${
                  isDisclaimer ? 'from-[#0f0a1a] to-[#0d1123]' : 'from-[#10100a] to-[#0d1123]'
                }`} />

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${
                  isDisclaimer
                    ? 'from-purple-600 via-purple-400 to-transparent'
                    : 'from-yellow-500 via-yellow-400 to-transparent'
                }`} />

                <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                  {/* Icon area */}
                  <div className={`relative flex items-center justify-center w-14 h-14 rounded-xl mb-5 ${
                    isDisclaimer ? 'bg-purple-500/15' : 'bg-yellow-400/15'
                  }`}>
                    <div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: isDisclaimer
                          ? 'radial-gradient(ellipse at center, rgba(139,92,246,0.2) 0%, transparent 70%)'
                          : 'radial-gradient(ellipse at center, rgba(251,191,36,0.2) 0%, transparent 70%)',
                      }}
                    />
                    {Icon && (
                      <Icon
                        className={`w-6 h-6 relative z-10 ${isDisclaimer ? 'text-purple-400' : 'text-yellow-400'}`}
                        strokeWidth={1.5}
                        style={{
                          filter: isDisclaimer
                            ? 'drop-shadow(0 0 8px rgba(139,92,246,0.5))'
                            : 'drop-shadow(0 0 8px rgba(251,191,36,0.5))',
                        }}
                      />
                    )}
                  </div>

                  {/* Tag */}
                  <span className={`inline-flex self-start px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-3 ${
                    isDisclaimer
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'bg-yellow-400/15 text-yellow-500 border border-yellow-400/25'
                  }`}>
                    {card.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-white font-black text-base sm:text-lg mb-2 leading-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{card.description}</p>

                  {/* Bottom */}
                  <div className={`mt-5 pt-4 border-t ${isDisclaimer ? 'border-purple-900/40' : 'border-yellow-900/20'}`}>
                    {isDisclaimer ? (
                      <div className="flex items-start gap-1.5 text-xs text-slate-600">
                        <AlertCircle className="w-3 h-3 flex-shrink-0 mt-0.5 text-purple-800" />
                        <span>Planned. Not a guaranteed promise.</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-xs text-green-500/70">
                        <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                        <span>Available for early players</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto px-2"
        >
          Early players may become eligible for founder recognition, in-game bonuses, leaderboard events and future ecosystem rewards.
          Nothing is guaranteed — activity is tracked and eligibility will be confirmed in later phases.
        </motion.p>
      </div>
    </section>
  )
}
