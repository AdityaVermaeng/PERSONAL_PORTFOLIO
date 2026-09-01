import { useState, useEffect, useRef } from 'react'
import portfolioData from '../data/portfolioData'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [activeLink, setActiveLink] = useState('')
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
        setIsOpen(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY.current = currentScrollY

      const sections = document.querySelectorAll('section[id]')
      let currentActive = ''
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (currentScrollY >= sectionTop - 250) {
          currentActive = `#${section.getAttribute('id')}`
        }
      })
      setActiveLink(currentActive)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-surface-700/50"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex-shrink-0"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span className="font-display font-bold text-2xl tracking-wider gradient-text">
              AV
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {portfolioData.navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-cyan-400 ${
                  activeLink === link.href ? 'text-cyan-400' : 'text-surface-300'
                }`}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              className="btn-primary px-5 py-2.5"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="text-surface-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg p-1.5 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface-900/95 backdrop-blur-xl border-b border-surface-700/50 overflow-hidden"
          >
            <div className="px-6 pt-2 pb-6 space-y-1 shadow-xl flex flex-col">
              {portfolioData.navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeLink === link.href
                      ? 'text-cyan-400 bg-surface-800/50'
                      : 'text-surface-300 hover:text-cyan-400 hover:bg-surface-800/30'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="btn-primary flex items-center justify-center gap-2 mt-4 w-full"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
