import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, Terminal, Cpu, Database, Wrench } from 'lucide-react';

const categories = [
  { id: 'All', label: 'All Stack', icon: Layers },
  { id: 'Frontend', label: 'Frontend', icon: Terminal },
  { id: 'Backend', label: 'Backend & Systems', icon: Cpu },
  { id: 'AI & Databases', label: 'AI & Data', icon: Database },
  { id: 'DevOps & Cloud', label: 'DevOps & Tools', icon: Wrench },
];

function GeminiIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-11 h-11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4772 12 22C12 16.4772 16.4772 12 22 12C16.4772 12 12 7.52285 12 2Z"
        fill="url(#geminiGrad)"
      />
    </svg>
  );
}

export default function SkillsSection({ skillsGrid = [] }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsGrid
    : skillsGrid.filter((s) => s.category === activeCategory);

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Advanced':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      default:
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
    }
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="text-center space-y-3 mb-14"
      >
        <span className="text-xs uppercase tracking-widest text-cyan-500 font-mono font-semibold inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          Technical Arsenal
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold">Skills &amp; Technologies</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Languages, frameworks, and engineering tools I leverage to build scalable full-stack applications and AI workflows.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
      </motion.div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          const count = cat.id === 'All'
            ? skillsGrid.length
            : skillsGrid.filter((s) => s.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? 'text-cyan-400 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 glass-card'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="skillActivePill"
                  className="absolute inset-0 bg-cyan-500/15 border border-cyan-500/40 rounded-xl"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{cat.label}</span>
              <span
                className={`relative z-10 text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? 'bg-cyan-500/30 text-cyan-300'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills Icon Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              whileHover={{ y: -4 }}
              className="group relative glass-card p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 flex flex-col items-center justify-between text-center overflow-hidden hover:border-cyan-500/40 transition-colors"
            >
              {/* Dynamic hover glow based on tech color */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-xl pointer-events-none -z-10"
                style={{ backgroundColor: skill.color || '#06B6D4' }}
              />

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                {skill.icon === 'custom:gemini' ? (
                  <GeminiIcon />
                ) : (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback text if CDN ever fails
                      e.target.style.display = 'none';
                    }}
                  />
                )}
              </div>

              {/* Name & Badge */}
              <div className="mt-3 w-full">
                <h3 className="font-display font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100 truncate group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>
                <div className="mt-1.5 flex justify-center">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getLevelBadgeClass(
                      skill.level
                    )}`}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom Toolkit Callout */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="mt-12 p-6 rounded-2xl glass-card border border-cyan-500/20 bg-gradient-to-r from-cyan-950/20 via-slate-900/40 to-indigo-950/20 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold font-display text-slate-800 dark:text-slate-200">
              Active Engineering Focus
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Currently architecting low-latency microservices, Redis caching tiers, and autonomous LLM agents.
            </p>
          </div>
        </div>
        <a
          href="#projects"
          className="text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 shrink-0 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-all"
        >
          <span>View Production Projects</span>
          <span>→</span>
        </a>
      </motion.div>
    </section>
  );
}
