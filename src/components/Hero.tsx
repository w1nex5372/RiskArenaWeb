'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { Swords, Users, Trophy } from 'lucide-react'
import { siteConfig, heroBadges } from '@/data/site'

const badgeStyles = {
  green: 'bg-green-500/20 text-green-400 border border-green-500/30',
  purple: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
  gold: 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30',
}

const badgeIcons = {
  green: <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block flex-shrink-0" />,
  purple: <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block flex-shrink-0" />,
  gold: <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block flex-shrink-0" />,
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#080b1a]" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-transparent to-[#080b1a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] bg-purple-900/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] sm:w-[240px] md:w-[300px] h-[160px] sm:h-[240px] md:h-[300px] bg-yellow-400/5 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-arena relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-20 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8"
          >
            {heroBadges.map((badge) => (
              <span
                key={badge.label}
                className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase ${badgeStyles[badge.color]}`}
              >
                {badgeIcons[badge.color]}
                {badge.label}
              </span>
            ))}
          </motion.div>

          {/* Title — scales from small phones to desktop */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 leading-none"
          >
            <span className="text-white">Risk</span>
            <span
              className="text-yellow-400"
              style={{ textShadow: '0 0 40px rgba(251,191,36,0.4), 0 0 80px rgba(251,191,36,0.1)' }}
            >
              Arena
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl md:text-2xl text-slate-400 font-medium mb-3 sm:mb-4 tracking-wide px-2"
          >
            Dark Fantasy Arena Game Inside Telegram
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          >
            Fight in 1v1 battles, raid bosses, climb leaderboards and collect rare loot.
            The arena is open. The first warriors are already inside.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 sm:gap-8 mb-8 sm:mb-10 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 text-slate-400">
              <Swords className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />
              <span>1v1 PvP</span>
            </div>
            <div className="w-px h-4 bg-slate-700" />
            <div className="flex items-center gap-1.5 sm:gap-2 text-slate-400">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
              <span>Boss Raids</span>
            </div>
            <div className="w-px h-4 bg-slate-700" />
            <div className="flex items-center gap-1.5 sm:gap-2 text-slate-400">
              <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
              <span>Leaderboards</span>
            </div>
          </motion.div>

          {/* CTA Buttons — full width on mobile, auto on sm+ */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
          >
            <Link
              href={siteConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-base sm:text-lg rounded uppercase tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] active:scale-95"
            >
              <Swords className="w-5 h-5" />
              Play Demo
            </Link>

            <Link
              href={siteConfig.waitlistUrl}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-slate-600 hover:border-yellow-400/50 text-slate-300 hover:text-yellow-400 font-bold text-base sm:text-lg rounded uppercase tracking-wide transition-all duration-200 active:scale-95"
            >
              Join Waitlist
            </Link>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 flex flex-col items-center gap-2 text-slate-600"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-widest">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
