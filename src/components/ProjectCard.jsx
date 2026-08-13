import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, BookOpen, X, CheckCircle2, Layers, Wrench, Trophy, Target } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="glass-card bg-surface-900/70 border border-surface-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 flex flex-col h-full group"
      >
        {/* Visual Frame / Graphic Header */}
        <div className="relative h-48 sm:h-52 bg-gradient-to-br from-surface-800 via-surface-900 to-surface-950 border-b border-surface-700/40 p-6 flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors"></div>
          
          <div className="flex items-center justify-between z-10">
            <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.subtitle}
            </span>
            {project.caseStudy && (
              <button
                onClick={() => setShowCaseStudy(true)}
                className="text-xs text-surface-300 hover:text-cyan-400 bg-surface-800/80 px-2.5 py-1 rounded-full border border-surface-700 flex items-center gap-1.5 transition-colors"
              >
                <BookOpen size={12} />
                <span>Case Study</span>
              </button>
            )}
          </div>

          <div className="z-10">
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-surface-300 text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-2 mb-6">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start text-surface-300 text-xs">
                  <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Badges */}
          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-surface-800/90 text-[11px] font-mono text-surface-300 border border-surface-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Card Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-surface-800 mt-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-surface-800 text-surface-200 border-surface-700 hover:border-cyan-500/50 flex-1 transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            )}

            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl flex-1 transition-colors"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}

            {project.caseStudy && (
              <button
                onClick={() => setShowCaseStudy(true)}
                className="px-3 py-2 text-xs rounded-xl bg-surface-800/80 border border-surface-700 text-cyan-400 hover:bg-surface-700 transition-colors flex items-center gap-1"
                title="View Detailed Case Study"
              >
                <BookOpen size={14} />
                <span className="hidden sm:inline">Details</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {showCaseStudy && project.caseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-surface-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-surface-900 border border-surface-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-surface-800 pb-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-cyan-400 text-xs font-mono">{project.subtitle} — Detailed Case Study</p>
                </div>
                <button
                  onClick={() => setShowCaseStudy(false)}
                  className="w-8 h-8 rounded-full bg-surface-800 flex items-center justify-center text-surface-400 hover:text-white hover:bg-surface-700 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Case Study Content */}
              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-2">
                    <Target size={14} />
                    <span>The Problem</span>
                  </h4>
                  <p className="text-surface-300 leading-relaxed bg-surface-800/50 p-3.5 rounded-xl border border-surface-700/40">
                    {project.caseStudy.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-2">
                    <CheckCircle2 size={14} />
                    <span>The Solution</span>
                  </h4>
                  <p className="text-surface-300 leading-relaxed bg-surface-800/50 p-3.5 rounded-xl border border-surface-700/40">
                    {project.caseStudy.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-2">
                    <Layers size={14} />
                    <span>Key Features</span>
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.caseStudy.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 bg-surface-800/40 p-2.5 rounded-lg border border-surface-700/30 text-surface-300 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-2">
                    <Wrench size={14} />
                    <span>My Engineering Contribution</span>
                  </h4>
                  <p className="text-surface-300 leading-relaxed bg-surface-800/50 p-3.5 rounded-xl border border-surface-700/40">
                    {project.caseStudy.contribution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-2">
                    <Trophy size={14} />
                    <span>Outcome</span>
                  </h4>
                  <p className="text-surface-300 leading-relaxed bg-surface-800/50 p-3.5 rounded-xl border border-surface-700/40">
                    {project.caseStudy.outcome}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-surface-800 flex justify-end gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-4 py-2 text-xs flex items-center gap-2"
                  >
                    <Github size={14} />
                    <span>Repository</span>
                  </a>
                )}
                <button
                  onClick={() => setShowCaseStudy(false)}
                  className="btn-primary px-4 py-2 text-xs"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
