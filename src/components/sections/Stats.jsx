import React from 'react';
import { motion } from 'framer-motion';
import AnimatedChart from '../shared/AnimatedChart';
import AnimatedCounter from '../shared/AnimatedCounter';

export default function Stats() {
  return (
    <section id="stats" className="py-24 px-6 lg:px-24 bg-bg2 relative">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-cyan text-sm mb-4">// STATS</div>
        <h2 className="font-bebas text-7xl text-white mb-12">THE NUMBERS DON'T LIE</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="bg-card p-6 border border-border rounded-lg shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <h3 className="font-bebas text-3xl text-white mb-6 flex items-center gap-2"><i className="fa-solid fa-graduation-cap text-cyan"></i> Bennett University</h3>
            <AnimatedChart data={[9.5, 9.43, 9.83, 9.23, 9.37]} />
            <div className="flex justify-between mt-8">
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path className="text-bg2" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                    <motion.path 
                      initial={{ strokeDasharray: "0, 100" }} 
                      whileInView={{ strokeDasharray: "86, 100" }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 1.5 }} 
                      className="text-cyan" 
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px]">86%</div>
                </div>
                <div className="font-rajdhani text-sm text-gray">Class 12</div>
              </div>
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path className="text-bg2" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                    <motion.path 
                      initial={{ strokeDasharray: "0, 100" }} 
                      whileInView={{ strokeDasharray: "92.16, 100" }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 1.5 }} 
                      className="text-cyan" 
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px]">92%</div>
                </div>
                <div className="font-rajdhani text-sm text-gray">Class 10</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: 850, l: 'Problems Solved', p: '+' }, 
              { v: 9.37, l: 'Current CGPA', f: true }, 
              { v: 10, l: 'Projects Built', p: '+' }, 
              { v: 5, l: 'Certifications' }
            ].map((s, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                key={i} 
                className="bg-card border border-border p-6 rounded-lg flex flex-col justify-center items-center text-center group hover:border-cyan/50 transition-colors"
              >
                <div className="font-bebas text-5xl xl:text-7xl text-cyan mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter value={s.v} isFloat={s.f} />{s.p}
                </div>
                <div className="font-rajdhani text-sm xl:text-base text-gray">{s.l}</div>
              </motion.div>
            ))}
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-3">
              {[
                { n: 'LeetCode', i: 'fa-solid fa-code', url: 'https://leetcode.com/u/SXjFr4MYIe/' }, 
                { n: 'GeeksForGeeks', i: 'fa-solid fa-g', url: 'https://www.geeksforgeeks.org/profile/officalsau5ipm' }, 
                { n: 'CodeChef', i: 'fa-solid fa-utensils', url: 'https://www.codechef.com/users/saurabhdev1' }, 
                { n: 'Codolio', i: 'fa-solid fa-laptop-code', url: 'https://codolio.com/profile/saurabh_singh27' }
              ].map(p => (
                <a href={p.url} target="_blank" rel="noreferrer" key={p.n} className="bg-card border border-border rounded p-3 text-center hover:border-cyan hover:-translate-y-1 transition-all group cursor-none">
                  <i className={`${p.i} text-2xl text-gray group-hover:text-cyan mb-2`}></i>
                  <div className="font-rajdhani font-bold text-sm text-white">{p.n}</div>
                  <div className="font-mono text-[9px] text-gray mt-1 group-hover:text-cyan">View Profile →</div>
                </a>
              ))}
            </div>
            <div className="space-y-3">
              {[
                'Azure Fundamentals — Microsoft (2025)', 
                'Meta FullStack Developer — Coursera (2025)', 
                'AI Foundations — Oracle University',
                'ServiceNow Certified System Administrator (2025)',
                'MySQL Database Administrator — Oracle'
              ].map(c => (
                <div key={c} className="bg-card border border-amber/50 rounded p-4 flex items-center gap-3 relative overflow-hidden group">
                  <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <i className="fa-solid fa-medal text-amber text-xl relative z-10"></i>
                  <div className="font-rajdhani text-sm font-bold text-white relative z-10">{c}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
