import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import portfolioData from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-max max-w-3xl">
        <SectionHeading title="Education" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8"
        >
          <GraduationCap className="w-8 h-8 text-cyan-400 mb-4" />
          <h3 className="text-2xl font-display font-bold text-white mb-2">
            {portfolioData.education.degree}
          </h3>
          <p className="text-cyan-400 font-medium mb-1">
            {portfolioData.education.institution}
          </p>
          <div className="text-surface-400 text-sm flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {portfolioData.education.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {portfolioData.education.period}
            </span>
          </div>
          
          <div className="border-t border-surface-700/50 my-5"></div>
          
          <h4 className="text-sm font-mono text-surface-500 uppercase tracking-wider mb-3">
            Relevant Coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {portfolioData.education.coursework.map((course, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-surface-700/40 text-sm text-surface-300 border border-surface-600/30"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
