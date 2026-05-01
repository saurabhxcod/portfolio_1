import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsMatrix, skillIcons } from '../../data';

export default function Skills() {
  const [tab, setTab] = useState('Frontend');
  const topSkills = [
    { name: 'React', pct: 90 }, 
    { name: 'Node.js', pct: 88 }, 
    { name: 'MongoDB', pct: 85 }, 
    { name: 'Laravel', pct: 82 }, 
    { name: 'Next.js', pct: 80 }, 
    { name: 'SQL', pct: 78 }
  ];
  
  return (
    <section id="skills" className="py-24 px-6 lg:px-24 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-cyan text-sm mb-4">// SKILLS</div>
        <h2 className="font-bebas text-7xl text-white mb-12">TECH MATRIX</h2>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap gap-4 mb-8 border-b border-border">
              {Object.keys(skillsMatrix).map(k => (
                <button 
                  key={k} 
                  onClick={() => setTab(k)} 
                  style={tab === k ? { textShadow: '0 0 10px #00f5ff' } : {}} 
                  className={`font-rajdhani text-xl pb-2 border-b-2 transition-colors relative cursor-none ${tab === k ? 'border-cyan text-cyan' : 'border-transparent text-gray hover:text-white'}`}
                >
                  {k}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={tab} 
                initial={{ opacity: 0, rotateY: 90 }} 
                animate={{ opacity: 1, rotateY: 0 }} 
                exit={{ opacity: 0, rotateY: -90 }} 
                transition={{ staggerChildren: 0.05 }} 
                className="flex flex-wrap gap-4"
              >
                {skillsMatrix[tab].map((s, i) => (
                  <motion.div 
                    initial={{ opacity: 0, rotateY: 90 }} 
                    animate={{ opacity: 1, rotateY: 0 }} 
                    key={s} 
                    className="w-[94px] h-[104px] clip-hex bg-cyan/30 flex items-center justify-center group cursor-none"
                  >
                    <div className="w-[90px] h-[100px] clip-hex bg-card flex flex-col items-center justify-center gap-2 group-hover:bg-cyan/10 transition-colors">
                      <i className={`${skillIcons[s] || 'fa-solid fa-code'} text-2xl text-gray group-hover:text-cyan transition-colors`}></i>
                      <span className="font-mono text-[10px] text-center text-gray group-hover:text-cyan">{s}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="font-rajdhani text-2xl text-white mb-6">CORE PROFICIENCY</h3>
            <div className="space-y-6">
              {topSkills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between font-mono text-sm mb-2">
                    <span className="text-white">{s.name}</span>
                    <span className="text-cyan">{s.pct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-bg2 rounded overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${s.pct}%` }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 1, delay: i * 0.1 }} 
                      className="h-full bg-gradient-to-r from-cyan/20 to-cyan shadow-[0_0_10px_#00f5ff]" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
