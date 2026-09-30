import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  return (
    <section id="testimonials" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="text-center space-y-3 mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-cyan-500 font-mono font-semibold">Social Proof</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold">Recommendations</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full" />
      </motion.div>

      <div
        className="relative glass-card p-8 sm:p-12 rounded-3xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Quote className="w-12 h-12 text-cyan-500/20 mb-4" />

        <div className="min-h-[140px] flex items-center">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="space-y-4"
          >
            <p className="text-lg sm:text-xl italic text-slate-700 dark:text-slate-200">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <div>
              <h4 className="font-display font-bold text-cyan-500">{testimonials[current].author}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">{testimonials[current].role}</p>
            </div>
          </motion.div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800 mt-6">
          <div className="flex space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === i ? 'bg-cyan-500 w-8' : 'bg-slate-300 dark:bg-slate-700'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
