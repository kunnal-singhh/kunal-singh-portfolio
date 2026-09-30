import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10 bg-slate-100/50 dark:bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <div>
          © {new Date().getFullYear()} {personal.name}. Crafted with precision and React.
        </div>
        <div className="flex items-center space-x-6">
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 hover:text-cyan-500 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
