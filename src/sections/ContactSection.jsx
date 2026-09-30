import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Copy, Check, Send, Github, Linkedin, Code } from 'lucide-react';

export default function ContactSection({ personal }) {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (data) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="text-center space-y-3 mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-cyan-500 font-mono font-semibold">Say Hello</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold">Get In Touch</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="glass-card p-6 rounded-3xl space-y-4">
            <h3 className="text-xl font-display font-bold">Let&apos;s connect</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              I&apos;m actively seeking opportunities in full-stack web development, software engineering, and AI integration. Drop a message or reach out directly via email!
            </p>

            <div className="pt-2">
              <button
                onClick={handleCopyEmail}
                className="w-full p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center justify-between transition-colors border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-500" />
                  <span className="text-sm font-mono text-slate-800 dark:text-slate-200">{personal.email}</span>
                </div>
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
              </button>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">Find Me On</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl glass-card hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-150 text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl glass-card hover:text-indigo-400 hover:border-indigo-500/40 transition-all duration-150 text-sm font-medium"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personal.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl glass-card hover:text-amber-400 hover:border-amber-500/40 transition-all duration-150 text-sm font-medium"
              >
                <Code className="w-4 h-4" />
                <span>LeetCode</span>
              </a>
              <a
                href={personal.socials.gfg}
                target="_blank"
                rel="noreferrer"
                aria-label="GeeksforGeeks"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl glass-card hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-150 text-sm font-mono font-medium"
              >
                <span className="text-xs font-bold">GfG</span>
                <span>GeeksforGeeks</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="lg:col-span-7 glass-card p-8 rounded-3xl"
        >
          {submitted ? (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold">Message Sent!</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md">
                Thank you for reaching out. I&apos;ve received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-cyan-500 text-sm transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-xs text-rose-500 mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-medium shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all active:scale-[0.99] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
