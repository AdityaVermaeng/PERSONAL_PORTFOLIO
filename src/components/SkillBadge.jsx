import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ skill, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      viewport={{ once: true }}
      className="inline-block px-3.5 py-2 rounded-xl bg-surface-800/70 border border-surface-700/40 text-sm text-surface-300 font-mono hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-surface-800 transition-all duration-300 cursor-default"
    >
      {skill}
    </motion.span>
  );
};

export default SkillBadge;
