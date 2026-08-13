import { useState, useEffect } from 'react'
import portfolioData from '../data/portfolioData'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: <Github size={18} />,
      href: portfolioData.personal.github,
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={18} />,
      href: portfolioData.personal.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={18} />,
      href: `mailto:${portfolioData.personal.email}`,
      label: 'Email',
    },
  ]

  return (
    <footer className="bg-surface-950 border-t border-surface-800/80 py-10 relative">
      <div className="container-max max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-white font-bold text-base">Aditya Verma</p>
          <p className="text-surface-400 text-xs font-mono mt-0.5">
            Frontend Developer • React.js • JavaScript
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-surface-900 border border-surface-700/60 text-surface-400 hover:text-cyan-400 hover:border-cyan-500/50 flex items-center justify-center transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p className="text-surface-500 text-xs font-mono text-center md:text-right">
          © 2026 Aditya Verma. All rights reserved.
        </p>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-surface-900 border border-surface-700 text-surface-300 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer
