import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from '../shared/TiltCard';
import { projects, badgeColors } from '../../data';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const filtered = projects.filter(p => filter === 'All' || p.type === filter);
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="py-24 px-6 lg:px-24 bg-bg2 relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-cyan text-sm mb-4">// PROJECTS</div>
        <h2 className="font-bebas text-7xl text-white mb-8">THE ARSENAL</h2>
        <div className="flex flex-wrap gap-4 mb-12">
          {['All', 'MERN', 'AI-Powered', 'Laravel'].map(f => (
            <button 
              key={f} 
              onClick={() => setFilter(f)} 
              className={`font-rajdhani text-lg px-4 py-1 border-b-2 transition-colors cursor-none ${filter === f ? 'border-cyan text-cyan' : 'border-transparent text-gray hover:text-white'}`}
            >
              {f}
            </button>
          ))}
        </div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayed.map(p => (
              <motion.div 
                layout 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.9 }} 
                transition={{ duration: 0.3 }} 
                key={p.id} 
                className="h-full"
              >
                <TiltCard className="h-full">
                  <div className="flex justify-between items-start mb-4 relative z-20">
                    <h3 className="font-bebas text-3xl text-white">{p.title}</h3>
                    <span className={`px-2 py-1 text-[10px] font-mono rounded border ${badgeColors[p.badgeColor]}`}>{p.badge}</span>
                  </div>
                  <p className="font-rajdhani text-[15px] text-gray mb-6 flex-grow relative z-20">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6 relative z-20">
                    {p.tags.map(t => <span key={t} className="text-[11px] font-mono border border-cyan/30 text-cyan/80 px-2 py-0.5 rounded">{t}</span>)}
                  </div>
                  <div className="flex gap-4 mt-auto relative z-20">
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-sm font-rajdhani font-bold border border-cyan text-cyan px-4 py-1.5 rounded hover:bg-cyan hover:text-bg2 transition-colors cursor-none">LIVE DEMO ↗</a>
                    <a href={p.github} target="_blank" rel="noreferrer" className="text-sm font-rajdhani font-bold border border-gray text-gray px-4 py-1.5 rounded hover:border-white hover:text-white transition-colors cursor-none">GITHUB ⭐</a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {!showAll && filtered.length > 6 && (
          <div className="mt-12 text-center">
            <button onClick={() => setShowAll(true)} className="font-rajdhani font-bold text-cyan border border-cyan px-8 py-3 rounded hover-lift cursor-none">SHOW MORE</button>
          </div>
        )}
      </div>
    </section>
  );
}
