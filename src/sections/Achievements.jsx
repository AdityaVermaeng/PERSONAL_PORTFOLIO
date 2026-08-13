import { motion } from 'framer-motion'
import { Award, FileCheck, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react'
import portfolioData from '../data/portfolioData'
import SectionHeading from '../components/SectionHeading'

const Achievements = () => {
  return (
    <section id="certifications" className="section-padding bg-surface-900/40 border-t border-surface-800/50">
      <div className="container-max">
        <SectionHeading 
          title="Certifications & Achievements" 
          subtitle="Verified credentials, job simulations, and leadership milestones"
        />

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`glass-card p-6 sm:p-8 rounded-2xl border ${
                cert.featured 
                  ? 'border-cyan-500/40 bg-surface-900/90 ring-1 ring-cyan-500/20' 
                  : 'border-surface-700/50 bg-surface-900/60'
              } flex flex-col justify-between group hover:border-cyan-500/50 transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">{cert.issuer}</span>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {cert.featured && (
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 whitespace-nowrap">
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-surface-400 mb-4">
                  <Calendar size={13} className="text-cyan-400" />
                  <span>Issued: {cert.date}</span>
                </div>

                <p className="text-surface-300 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                {cert.highlights && (
                  <ul className="space-y-2 mb-6">
                    {cert.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2 text-surface-300 text-xs">
                        <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-4 border-t border-surface-800">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center py-2.5 text-xs font-semibold flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  <span>View Certificate (PDF)</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership & Event Coordination Milestone */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <span>Leadership & Technical Events</span>
          </h3>

          <div className="space-y-4">
            {portfolioData.achievements.map((ach, aIdx) => (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: aIdx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-surface-700/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <h4 className="text-base font-bold text-white mb-1">{ach.title}</h4>
                  <p className="text-xs font-mono text-cyan-400 mb-2">{ach.organization}</p>
                  <p className="text-surface-300 text-sm leading-relaxed">{ach.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
