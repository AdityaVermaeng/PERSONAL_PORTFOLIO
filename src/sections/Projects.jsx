import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import portfolioData from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-surface-900/30">
      <div className="container-max">
        <SectionHeading title="Projects" subtitle="Full-stack applications I have built" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
