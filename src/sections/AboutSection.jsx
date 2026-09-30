import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Terminal, User, BookOpen, Sparkles } from 'lucide-react';

export default function AboutSection({ personal, skills, certifications }) {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="text-center space-y-3 mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-cyan-500 font-mono font-semibold">
          Get To Know Me
        </span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold">About &amp; Expertise</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Interactive Developer Profile & Terminal Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Main Visual Card */}
          <div className="relative group">
            <div className="relative z-10 rounded-3xl overflow-hidden glass-card p-4 border border-cyan-500/20">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 flex flex-col justify-end p-6 border border-slate-700/50">
                {/* Background Tech Mesh / Graphic */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-slate-900 to-indigo-950/60" />
                <div className="absolute top-4 right-4 p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>

                {/* Profile Info — no name repeat */}
                <div className="relative z-10 space-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 font-display font-bold text-2xl text-white">
                    KS
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display">{personal.role}</h3>
                    <p className="text-xs font-mono text-cyan-400">NIT Raipur, MCA &apos;27 · {personal.location}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                      ⚡ Full-Stack MERN
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                      🤖 AI Integrations
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                      🐳 Dockerized Systems
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500 -z-10" />
          </div>

          {/* Interactive IDE / Code Snippet Card */}
          <div className="rounded-2xl glass-card border border-slate-700/40 overflow-hidden font-mono text-xs">
            <div className="bg-slate-900/80 px-4 py-2.5 border-b border-slate-700/50 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-slate-400 text-[11px]">kunal.config.ts</span>
            </div>
            <div className="p-4 space-y-1 bg-slate-950/70 text-slate-300 leading-relaxed overflow-x-auto">
              <p><span className="text-indigo-400">const</span> <span className="text-cyan-400">engineer</span> = &#123;</p>
              <p className="pl-4"><span className="text-slate-400">role:</span> <span className="text-emerald-400">&apos;Full-Stack &amp; AI Engineer&apos;</span>,</p>
              <p className="pl-4"><span className="text-slate-400">status:</span> <span className="text-emerald-400">&apos;Open to Work &amp; Roles&apos;</span>,</p>
              <p className="pl-4"><span className="text-slate-400">stack:</span> [<span className="text-emerald-400">&apos;React&apos;</span>, <span className="text-emerald-400">&apos;Node.js&apos;</span>, <span className="text-emerald-400">&apos;MongoDB&apos;</span>, <span className="text-emerald-400">&apos;Docker&apos;</span>],</p>
              <p className="pl-4"><span className="text-slate-400">focus:</span> <span className="text-emerald-400">&apos;High-concurrency resilient systems&apos;</span></p>
              <p>&#125;;</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Stats, Detailed Skills & Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {personal.stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card p-4 rounded-2xl text-center border border-slate-200/60 dark:border-slate-800/80 hover:border-cyan-500/50 transition-all hover:scale-[1.02]"
              >
                <p className="text-2xl sm:text-3xl font-display font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Core Technical Focus Pillars */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                <span>Core Engineering Pillars</span>
              </h4>
              <a
                href="#skills"
                className="text-xs font-mono text-cyan-500 dark:text-cyan-400 hover:underline flex items-center gap-1 font-medium"
              >
                <span>Full Arsenal</span>
                <span>↓</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="glass-card p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all">
                <div className="text-cyan-400 font-display font-bold text-sm mb-1">Full-Stack Core</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Interactive React 18 interfaces backed by high-concurrency Node.js &amp; Express microservices.
                </p>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 hover:border-indigo-500/40 transition-all">
                <div className="text-indigo-400 font-display font-bold text-sm mb-1">AI &amp; LLM Pipelines</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Groq &amp; Gemini integration, prompt engineering, streaming responses, and fallbacks.
                </p>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 hover:border-emerald-500/40 transition-all">
                <div className="text-emerald-400 font-display font-bold text-sm mb-1">Cloud &amp; DevOps</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Docker containerization, Nginx reverse proxying, rate-limiting, and Git CI/CD.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Badges */}
          <div className="pt-2">
            <h4 className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-500" />
              <span>Certifications &amp; Honors</span>
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center space-x-2 text-xs px-3.5 py-2 rounded-xl glass-card text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{cert}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
