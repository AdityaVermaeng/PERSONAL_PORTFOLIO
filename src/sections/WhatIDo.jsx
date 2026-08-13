import { motion } from 'framer-motion'
import { Layout, Server, Figma } from 'lucide-react'
import portfolioData from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'

const getIcon = (iconName) => {
  switch (iconName) {
    case 'Layout':
      return <Layout className="w-8 h-8 text-cyan-400" />
    case 'Server':
      return <Server className="w-8 h-8 text-cyan-400" />
    case 'Figma':
      return <Figma className="w-8 h-8 text-cyan-400" />
    default:
      return <Layout className="w-8 h-8 text-cyan-400" />
  }
}

const WhatIDo = () => {
  return (
    <section id="what-i-do" className="section-padding bg-surface-900/40 border-y border-surface-800/50">
      <div className="container-max">
        <SectionHeading 
          title="What I Do" 
          subtitle="Key areas of technical expertise and engineering capabilities"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.whatIDo.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-8 rounded-2xl border border-surface-700/40 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                {getIcon(item.icon)}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-surface-300 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-800/80">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-surface-800/80 text-surface-300 border border-surface-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
