import React from 'react';
import { motion } from 'framer-motion';

export default function PageLoader({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-darkBg text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.8 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center space-x-2 text-3xl md:text-4xl font-display font-bold"
      >
        <span className="text-cyan-400">&lt;</span>
        <span>Kunal Singh</span>
        <span className="text-cyan-400">/&gt;</span>
      </motion.div>
      <motion.div
        className="mt-4 w-32 h-1 bg-slate-800 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
