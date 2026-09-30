import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Copy, Check, Send, Github, Linkedin, Code, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

export default function ContactSection({ personal, contact }) {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

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

  const encodeFormData = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const onSubmit = async (data) => {
    setErrorMessage('');
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || contact?.formspreeId || '';
    const hasFormspree = formspreeId && formspreeId !== 'xblrvkwo' && formspreeId !== 'YOUR_FORMSPREE_ID';

    try {
      let response;
      if (hasFormspree) {
        response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
            _subject: `New Portfolio Message from ${data.name} via kunal.dev`
          })
        });
      } else {
        // Native Netlify Forms fallback when deployed on Netlify
        response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encodeFormData({ 'form-name': 'contact', ...data })
        });
      }

      if (response && response.ok) {
        setSubmittedData(data);
        setFormStatus('success');
        reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        const msg = errorData?.errors?.map(e => e.message).join(', ') || 
          'Automated delivery is temporarily unavailable. Click below to email Kunal directly.';
        setSubmittedData(data);
        setErrorMessage(msg);
        setFormStatus('error');
      }
    } catch (err) {
      setSubmittedData(data);
      setErrorMessage(err.message || 'Network error. Click below to send your message directly via email.');
      setFormStatus('error');
    }
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
          {formStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full min-h-[340px] flex flex-col items-center justify-center text-center space-y-4 py-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-800 dark:text-slate-100">
                Message Dispatched!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md leading-relaxed">
                Thank you for reaching out, <span className="font-semibold text-cyan-400">{submittedData?.name}</span>. Your message has been delivered to Kunal&apos;s inbox. I typically reply within 24 hours.
              </p>
              <button
                onClick={() => setFormStatus('idle')}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs font-mono text-slate-800 dark:text-slate-200 transition-colors"
              >
                ← Send Another Message
              </button>
            </motion.div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              {formStatus === 'error' && (
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs space-y-2">
                  <div className="flex items-center gap-2 font-semibold">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Unable to send through the automated endpoint</span>
                  </div>
                  <p className="text-slate-300">
                    {errorMessage || 'Form service temporarily unavailable.'} You can email Kunal directly:
                  </p>
                  <a
                    href={`mailto:${personal.email}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
                      submittedData?.name || ''
                    )}&body=${encodeURIComponent(submittedData?.message || '')}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 font-mono text-[11px] transition-colors"
                  >
                    <span>Send directly via Email Client</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-cyan-500 text-sm transition-colors disabled:opacity-60"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-cyan-500 text-sm transition-colors disabled:opacity-60"
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
                  placeholder="Tell me about your project, role, or opportunity..."
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-cyan-500 text-sm transition-colors resize-none disabled:opacity-60"
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
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Routing to Formspree...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Connected via Formspree · Direct inbox delivery to Kunal</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
