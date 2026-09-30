import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Code, FileText } from 'lucide-react';
import ParticleCanvas from '../components/ParticleCanvas';
import TechMarquee from '../components/TechMarquee';

export default function HeroSection({ personal }) {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % personal.taglineWords.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [personal.taglineWords]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-0 px-0 overflow-hidden">
      {/* Interactive Constellation Particle Canvas */}
      <ParticleCanvas />

      {/* Background Ambient Glowing Shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow -z-10" />

      <div className="max-w-4xl mx-auto text-center z-10 px-6 space-y-8 flex-1 flex flex-col justify-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full glass-card text-xs font-mono text-cyan-600 dark:text-cyan-400 mx-auto border border-cyan-500/20 shadow-lg shadow-cyan-500/5 hover:border-cyan-500/50 transition-colors"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-semibold tracking-wide">Available for Full-Time Roles &amp; High-Impact Projects</span>
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight"
        >
          <span className="text-slate-800 dark:text-slate-100">Hi, I&apos;m </span>
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </motion.h1>

        {/* Dynamic Rotating Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
          className="h-12 text-xl sm:text-2xl lg:text-3xl font-mono text-slate-700 dark:text-slate-200 flex items-center justify-center font-medium"
        >
          <span className="text-cyan-500 mr-2 font-mono">&gt;</span>
          <motion.span
            key={textIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-b-2 border-cyan-500/40 pb-0.5"
          >
            {personal.taglineWords[textIndex]}
          </motion.span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
        >
          {personal.bio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all hover:scale-105 active:scale-95 group"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/resume.pdf"
            download="Kunal_Singh_Resume.pdf"
            className="px-7 py-3.5 rounded-2xl glass-card text-slate-800 dark:text-white hover:border-cyan-500/60 font-medium flex items-center justify-center space-x-2 transition-all hover:scale-105 active:scale-95 shadow-md group"
          >
            <FileText className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform" />
            <span>Resume / CV</span>
          </a>

          <a
            href="#contact"
            className="px-7 py-3.5 rounded-2xl glass-card text-slate-700 dark:text-slate-300 hover:text-cyan-500 font-medium flex items-center justify-center space-x-2 transition-all hover:scale-105 active:scale-95"
          >
            <span>Get in Touch</span>
          </a>
        </motion.div>

        {/* Social Icons Quick Access */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25, ease: 'easeOut' }}
          className="flex justify-center space-x-3 pt-4 text-slate-500 dark:text-slate-400"
        >
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl glass-card hover:text-cyan-400 hover:scale-110 transition-all duration-150"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl glass-card hover:text-indigo-400 hover:scale-110 transition-all duration-150"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personal.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode Profile"
            className="p-2.5 rounded-xl glass-card hover:text-amber-500 hover:scale-110 transition-all duration-150"
          >
            <Code className="w-5 h-5" />
          </a>
          <a
            href={personal.socials.gfg}
            target="_blank"
            rel="noreferrer"
            aria-label="GeeksforGeeks Profile"
            className="p-2.5 rounded-xl glass-card hover:text-emerald-400 hover:scale-110 transition-all duration-150 text-xs font-bold font-mono"
          >
            <span className="w-5 h-5 flex items-center justify-center">GfG</span>
          </a>
        </motion.div>
      </div>

      {/* Tech Marquee Ribbon at Hero Bottom */}
      <div className="w-full mt-16">
        <TechMarquee />
      </div>
    </section>
  );
}
