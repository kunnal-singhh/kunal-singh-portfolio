import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="text-center space-y-3 mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-cyan-500 font-mono font-semibold">Career Path</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold">Experience &amp; Education</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
      </motion.div>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
            className="relative pl-8 md:pl-12"
          >
            {/* Scroll Dot Anchor */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-500">
              {item.type === 'Experience' ? (
                <Briefcase className="w-4 h-4" />
              ) : (
                <GraduationCap className="w-4 h-4" />
              )}
            </div>

            {/* Time Stamp label for Desktop */}
            <div className="hidden md:block absolute -left-36 top-1 text-xs font-mono text-slate-500 dark:text-slate-400 w-24 text-right">
              {item.period}
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-2">
              <span className="md:hidden text-xs font-mono text-cyan-500">{item.period}</span>
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                {item.organization}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
