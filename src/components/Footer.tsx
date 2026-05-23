'use client'

import Link from 'next/link'
import { Swords } from 'lucide-react'
import { navLinks, siteConfig } from '@/data/site'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-[#080b1a]">
      <div className="container-arena py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Swords className="w-5 h-5 text-yellow-400" strokeWidth={1.5} />
            <span className="text-lg font-bold text-white">
              Risk<span className="text-yellow-400">Arena</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-slate-300 transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={siteConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400/70 hover:text-yellow-400 transition-colors text-sm font-medium"
            >
              Telegram
            </Link>
          </div>

          {/* Copy */}
          <p className="text-slate-600 text-xs text-center md:text-right">
            © 2026 RiskArena.{' '}
            <span className="block md:inline mt-1 md:mt-0">
              Early demo. Features and rewards are subject to change.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
