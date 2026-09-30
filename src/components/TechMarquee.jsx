import React from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Layers, 
  Server, 
  Terminal, 
  Globe, 
  Sparkles, 
  Box, 
  ShieldCheck 
} from 'lucide-react';

const TECH_ITEMS = [
  { name: 'React.js', icon: Code2, color: 'text-cyan-400' },
  { name: 'Node.js & Express', icon: Server, color: 'text-emerald-400' },
  { name: 'MongoDB', icon: Database, color: 'text-green-500' },
  { name: 'Docker', icon: Box, color: 'text-blue-400' },
  { name: 'Gemini & Groq APIs', icon: Sparkles, color: 'text-indigo-400' },
  { name: 'WebSockets & Real-Time', icon: Globe, color: 'text-amber-400' },
  { name: 'Data Structures & C++', icon: Cpu, color: 'text-rose-400' },
  { name: 'Tailwind CSS', icon: Layers, color: 'text-cyan-300' },
  { name: 'System Design', icon: ShieldCheck, color: 'text-purple-400' },
  { name: 'Linux & Nginx', icon: Terminal, color: 'text-emerald-300' },
];

export default function TechMarquee() {
  const items = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-slate-200/50 dark:border-slate-800/80 bg-slate-100/30 dark:bg-slate-900/30 backdrop-blur-sm">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-darkBg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-darkBg to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="inline-flex items-center space-x-2.5 mx-6 px-4 py-2 rounded-full glass-card hover:border-cyan-500/50 transition-all duration-300 group cursor-default"
            >
              <Icon className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`} />
              <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-200 tracking-wide">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
