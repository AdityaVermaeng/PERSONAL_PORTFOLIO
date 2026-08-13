import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const ExperienceCard = ({ experience, index }) => {
  const isCurrent = experience.current;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-6 border-l-2 border-surface-700 pb-10 last:pb-0"
    >
      {/* Timeline Dot */}
      <div 
        className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface-900 border-2 flex items-center justify-center
          ${isCurrent ? 'border-cyan-400' : 'border-surface-500'}`}
      >
        {isCurrent && (
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-soft"></div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-2">
        <h3 className="text-xl font-display font-semibold text-white flex items-center gap-3">
          {experience.role}
          {isCurrent && (
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-2 py-0.5 rounded-full font-normal tracking-wide">
              Present
            </span>
          )}
        </h3>
      </div>
      
      <div className="text-cyan-400 font-medium text-sm mb-3">
        {experience.company}
      </div>

      <div className="flex flex-wrap items-center gap-4 text-surface-500 text-sm font-mono mb-4">
        <div className="flex items-center gap-1.5">
          <Calendar size={14} />
          <span>{experience.period}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin size={14} />
          <span>{experience.location}</span>
        </div>
      </div>

      {experience.highlights && experience.highlights.length > 0 && (
        <ul className="space-y-2 mt-4">
          {experience.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start text-surface-300 text-sm group">
              <ChevronRight size={16} className="text-cyan-500 mr-1.5 mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default ExperienceCard;
