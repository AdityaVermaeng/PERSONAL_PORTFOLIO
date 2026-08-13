import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Sparkles } from 'lucide-react'
import portfolioData from '../data/portfolioData'

const Hero = () => {
  const handleScrollToProjects = (e) => {
    e.preventDefault()
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 flex items-center justify-center relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-30 animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-25 animate-float"></div>

      <div className="container mx-auto px-6 max-w-6xl z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs sm:text-sm text-cyan-300 mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Available for Frontend Developer Roles</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight mb-4 leading-tight"
            >
              Hi, I'm <span className="gradient-text">Aditya Verma</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-cyan-400 mb-6"
            >
              Frontend Developer | React.js | JavaScript
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-surface-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0"
            >
              I build responsive, interactive and production-ready web applications using React.js, JavaScript and modern web technologies with a strong MERN full-stack background.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start items-center"
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="btn-primary px-6 py-3 text-sm font-semibold flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="btn-secondary px-6 py-3 text-sm font-semibold flex items-center gap-2 border-surface-700 hover:border-cyan-500/50"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center gap-3 ml-0 sm:ml-2 pt-2 sm:pt-0">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full bg-surface-800/80 border border-surface-700/60 flex items-center justify-center text-surface-300 hover:text-white hover:border-cyan-500/50 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full bg-surface-800/80 border border-surface-700/60 flex items-center justify-center text-surface-300 hover:text-white hover:border-cyan-500/50 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden p-1.5 bg-gradient-to-tr from-cyan-500 via-blue-500 to-emerald-500 shadow-2xl shadow-cyan-500/20">
              <img
                src={portfolioData.personal.avatar}
                alt="Aditya Verma - Frontend Developer"
                className="w-full h-full object-cover object-top rounded-2xl bg-surface-900"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = 'https://ui-avatars.com/api/?name=Aditya+Verma&background=0F172A&color=38BDF8&size=512'
                }}
              />
            </div>
            
            {/* Experience Pill */}
            <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 flex items-center gap-3 border border-surface-700/60 shadow-xl rounded-2xl">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
              <span className="text-xs font-medium text-surface-200">React.js & JavaScript Specialist</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
