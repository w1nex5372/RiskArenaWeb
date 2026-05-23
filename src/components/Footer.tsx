'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Swords, Users, Bell, ExternalLink } from 'lucide-react'
import { navLinks, siteConfig } from '@/data/site'

export default function Footer() {
  return (
    <footer className="relative bg-[#080b1a] overflow-hidden">
      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
      {/* Subtle glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-yellow-400/3 rounded-full blur-[60px] pointer-events-none" />

      <div className="container-arena relative z-10 py-12 sm:py-16">
        {/* Main row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-6 mb-10 sm:mb-12">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="relative">
                <Swords
                  className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors"
                  strokeWidth={1.5}
                />
                <div className="absolute inset-0 blur-sm bg-yellow-400/20 rounded-full transition-all group-hover:bg-yellow-400/40" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Risk<span className="text-yellow-400">Arena</span>
              </span>
            </Link>
            <p className="text-slate-600 text-xs max-w-[200px] leading-relaxed">
              Dark fantasy arena game inside Telegram. In active development.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-slate-200 transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={siteConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-sm rounded uppercase tracking-wide transition-all duration-200 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]"
            >
              <Users className="w-4 h-4" />
              Join The Tavern
              <ExternalLink className="w-3 h-3 opacity-60" />
            </Link>
          </motion.div>
        </div>

        {/* Community links */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 sm:mb-10">
          <Link
            href="https://t.me/RiskArenaTavern"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-yellow-400 transition-colors text-sm"
          >
            <Users className="w-3.5 h-3.5" />
            @RiskArenaTavern
          </Link>
          <Link
            href="https://t.me/RiskArenaNews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-yellow-400 transition-colors text-sm"
          >
            <Bell className="w-3.5 h-3.5" />
            @RiskArenaNews
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800/60 mb-6 sm:mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-slate-700 text-xs">
            © 2026 RiskArena. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs text-center sm:text-right">
            In active development. Features, rewards and ecosystem are subject to change.
          </p>
        </div>
      </div>
    </footer>
  )
}
