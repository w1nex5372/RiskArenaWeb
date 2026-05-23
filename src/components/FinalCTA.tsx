'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Bell } from 'lucide-react'
import { siteConfig } from '@/data/site'

export default function FinalCTA() {
  return (
    <section id="waitlist" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080b1a]" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-[#1a0a2e]/50 to-[#080b1a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[200px] sm:h-[400px] bg-yellow-400/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[400px] h-[150px] sm:h-[300px] bg-red-900/15 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none" />

      <div className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 opacity-5">
        <Users className="w-16 h-16 sm:w-24 sm:h-24 text-yellow-400" />
      </div>
      <div className="absolute inset-4 sm:inset-8 rounded-2xl border border-yellow-400/5 pointer-events-none" />

      <div className="container-arena relative z-10 text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Eyebrow */}
          <span className="inline-block text-[10px] sm:text-xs font-bold text-yellow-400 tracking-widest uppercase mb-4 px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/10">
            Join The Community
          </span>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight max-w-3xl mx-auto">
            Enter The Tavern Before{' '}
            <span
              className="text-yellow-400"
              style={{ textShadow: '0 0 40px rgba(251,191,36,0.4)' }}
            >
              The Arena Opens
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            The arena is still being built. Join the Tavern now to follow development, help shape the game and secure early player status.
          </p>

          {/* Buttons — full width on mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-2 sm:px-0">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3 w-full px-6 sm:px-10 py-4 sm:py-5 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-base sm:text-lg rounded uppercase tracking-wide transition-all duration-200 hover:shadow-[0_0_40px_rgba(251,191,36,0.5)]"
              >
                <Users className="w-5 h-5" />
                Join The Tavern
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                href={siteConfig.telegramNews}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3 w-full px-6 sm:px-10 py-4 sm:py-5 bg-transparent border-2 border-slate-600 hover:border-yellow-400/50 text-slate-300 hover:text-yellow-400 font-bold text-base sm:text-lg rounded uppercase tracking-wide transition-all duration-200"
              >
                <Bell className="w-5 h-5" />
                Follow News
              </Link>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              Active development
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              Free to join
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              No wallet required
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
