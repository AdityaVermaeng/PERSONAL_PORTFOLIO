import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={`relative p-2.5 rounded-xl bg-surface-800/80 border border-surface-700/60 text-surface-300 hover:text-cyan-400 hover:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 flex items-center justify-center shadow-sm overflow-hidden ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 hover:text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
        ) : (
          <Moon className="w-5 h-5 text-cyan-600 hover:text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
