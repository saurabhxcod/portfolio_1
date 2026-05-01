import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-24 bg-bg relative">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-cyan text-sm mb-4">// EXPERIENCE</div>
        <h2 className="font-bebas text-7xl text-white mb-12">COMBAT LOG</h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 60 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          className="relative pl-8 md:pl-0"
        >
          <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-border md:hidden"></div>
          
          <div className="bg-card border-l-4 border-cyan p-6 lg:p-8 rounded-r-lg shadow-lg relative hover-lift group">
            <div className="absolute -left-[22px] lg:-left-2 top-8">
              <div className="w-3 h-3 rounded-full bg-amber relative">
                <div className="absolute inset-0 rounded-full border border-amber animate-[pulse-ring_2s_infinite]"></div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="font-bebas text-4xl text-white">Software Development Engineer Intern</h3>
                <div className="font-rajdhani text-xl text-cyan font-bold mt-1">CraftiveWeb</div>
              </div>
              <div className="bg-amber px-3 py-1 text-bg2 font-mono text-sm font-bold rounded mt-4 md:mt-0">Dec 2025 – Feb 2026</div>
            </div>
            
            <ul className="space-y-3 font-rajdhani text-gray text-lg mb-6">
              {[
                "Developed full-stack web applications using Laravel and MERN stack",
                "Built and integrated secure REST APIs with Laravel and Node.js",
                "Designed responsive frontend components using React.js",
                "Managed and optimized MySQL and MongoDB databases",
                "Contributed to testing, deployment, and DevOps workflows"
              ].map((pt, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: 0.1 * (i + 1) }} 
                  className="flex items-start gap-2"
                >
                  <i className="fa-solid fa-angle-right text-cyan mt-1"></i> {pt}
                </motion.li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'React.js', 'Node.js', 'MongoDB', 'MySQL', 'REST API'].map(t => (
                <span key={t} className="border border-cyan/30 text-cyan font-mono text-xs px-2 py-1 rounded bg-cyan/5">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
