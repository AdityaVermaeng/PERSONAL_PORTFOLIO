import { motion } from 'framer-motion'
import portfolioData from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'
import SkillBadge from '../components/SkillBadge'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-surface-900/30">
      <div className="container-max">
        <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with" />
        
        <div className="space-y-8">
          {portfolioData.skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={container}
              className="mb-8 last:mb-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
                  {category.category}
                </h3>
                <div className="h-px flex-1 bg-surface-700/50"></div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((skill, skillIdx) => (
                  <motion.div key={skillIdx} variants={item}>
                    <SkillBadge skill={skill} index={skillIdx} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
