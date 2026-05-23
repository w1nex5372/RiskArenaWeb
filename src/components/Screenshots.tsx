'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { screenshots } from '@/data/site'

const fadeVariants: Variants = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
}

export default function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = screenshots[activeIndex]

  const prev = () => setActiveIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1))
  const next = () => setActiveIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1))

  return (
    <section id="screenshots" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#080b1a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[300px] sm:h-[500px] bg-purple-900/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="container-arena relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-block text-xs font-bold text-yellow-400 tracking-widest uppercase mb-3">
            Inside The Arena
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 sm:mb-3">
            See It. Then Fight In It.
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-xs sm:text-sm">
            Real screenshots from Season 1 demo. No mockups.
          </p>
        </motion.div>

        {/* Tab bar — scrollable on mobile, centered on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-start sm:justify-center gap-1.5 mb-6 sm:mb-8 overflow-x-auto pb-1 sm:pb-0 no-scrollbar px-1"
        >
          {screenshots.map((shot, i) => (
            <button
              key={shot.id}
              onClick={() => setActiveIndex(i)}
              className={`flex-shrink-0 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                i === activeIndex
                  ? 'text-black bg-yellow-400'
                  : 'text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700/60'
              }`}
            >
              {shot.label}
            </button>
          ))}
        </motion.div>

        {/* Main screenshot viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Glow ring */}
          <div className="absolute -inset-px rounded-xl sm:rounded-2xl bg-gradient-to-b from-yellow-400/20 via-purple-500/10 to-transparent pointer-events-none" />

          {/* Frame */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#0d1123] border border-slate-700/60 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            {/* Status bar */}
            <div className="flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 bg-[#080b1a] border-b border-slate-800">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono tracking-wide">
                  RiskArena • {active.label}
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-600 font-mono">Season 1</span>
            </div>

            {/* Screenshot */}
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  variants={fadeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.src}
                    alt={active.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 768px"
                    priority={activeIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#080b1a] via-[#080b1a]/50 to-transparent px-4 sm:px-6 py-3 sm:py-5 pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={active.id + '-desc'}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-300 text-xs sm:text-sm font-medium"
                  >
                    {active.description}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Left/right arrow buttons — useful on mobile where tabs might be less obvious */}
              <button
                onClick={prev}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/10 backdrop-blur-sm"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/10 backdrop-blur-sm"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-5 sm:w-6 h-2 bg-yellow-400'
                    : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`View ${screenshots[i].label}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
