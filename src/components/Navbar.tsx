'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Swords, Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '@/data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      // close menu on scroll
      if (mobileOpen) setMobileOpen(false)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileOpen])

  // body scroll lock
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // escape key closes menu
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-[#080b1a]/98 backdrop-blur-md border-b border-yellow-400/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-arena">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" onClick={close} className="flex items-center gap-2 group flex-shrink-0">
              <div className="relative">
                <Swords
                  className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors"
                  strokeWidth={1.5}
                />
                <div className="absolute inset-0 blur-md bg-yellow-400/30 group-hover:bg-yellow-400/50 transition-all rounded-full" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Risk<span className="text-yellow-400">Arena</span>
              </span>
            </Link>

            {/* Desktop Nav — only lg+ */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-yellow-400 transition-colors text-sm font-medium tracking-wide uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA — only lg+ */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-sm font-bold text-black bg-yellow-400 rounded hover:bg-yellow-300 transition-all duration-200 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] uppercase tracking-wide"
              >
                Join Tavern
              </Link>
            </div>

            {/* Hamburger — visible on everything below lg (phones + tablets) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-400 hover:text-yellow-400 hover:bg-white/5 transition-all"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen mobile/tablet menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={close}
            />

            {/* Slide-down menu panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-16 left-0 right-0 z-50 lg:hidden bg-[#0d1123] border-b border-yellow-400/10 shadow-2xl"
            >
              <div className="container-arena py-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={close}
                      className="flex items-center text-slate-300 hover:text-yellow-400 transition-colors text-base font-semibold tracking-wide uppercase py-3.5 px-2 border-b border-slate-800/60 active:bg-white/5 rounded"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.05, duration: 0.2 }}
                  className="mt-4 flex flex-col gap-3"
                >
                  <Link
                    href={siteConfig.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="w-full py-4 text-base font-black text-black bg-yellow-400 rounded text-center hover:bg-yellow-300 transition-all uppercase tracking-wide active:scale-95"
                  >
                    Join Tavern
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
