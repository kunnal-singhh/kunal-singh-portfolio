import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';

export default function ProjectsSection({ projects, onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Full-Stack', 'AI / Cloud', 'DevOps & Systems'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="text-center space-y-3 mb-12"
      >
        <span className="text-xs uppercase tracking-widest text-cyan-500 font-mono font-semibold">
          Featured Engineering
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold">Flagship Projects</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
      </motion.div>

      {/* Category Filter Tabs */}
      <div className="flex justify-center flex-wrap gap-2.5 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all relative font-mono ${
              activeCategory === cat
                ? 'text-white shadow-lg shadow-cyan-500/25'
                : 'text-slate-600 dark:text-slate-400 hover:text-cyan-500 glass-card'
            }`}
          >
            {activeCategory === cat && (
              <motion.div
                layoutId="activeProjectTab"
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl -z-10"
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              />
            )}
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={() => onSelectProject(project)}
              className="glass-card rounded-3xl overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-cyan-500/15 transition-all duration-200 border border-slate-200/80 dark:border-slate-800 cursor-pointer relative hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/80 backdrop-blur-sm shadow-md">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2 rounded-full bg-cyan-500 text-white shadow-lg inline-flex items-center justify-center">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 font-mono border border-slate-200 dark:border-slate-700/50"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[11px] px-2 py-1 text-cyan-500 font-mono font-medium">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-200/80 dark:border-slate-800/80 text-xs">
                    <span className="font-semibold text-cyan-500 group-hover:text-cyan-400 flex items-center space-x-1">
                      <span>View Architecture</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-all flex items-center space-x-1"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
