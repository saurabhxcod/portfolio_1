import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const termRef = useRef(null);
  const isInView = useInView(termRef, { once: true, amount: 0.2 });
  const [termLines, setTermLines] = useState([]);
  
  const lines = [
    { c: "$ whoami", r: "→ saurabh@bennett-university" },
    { c: "$ cat about.json", r: "→ { role: \"Full Stack Dev\", cgpa: 9.37, location: \"Greater Noida, IN\" }" },
    { c: "$ ls skills/", r: "→ React  Next.js  Node  Laravel  MongoDB  MySQL  Azure  Docker" },
    { c: "$ ./run portfolio.sh", r: "→ 🚀 Portfolio initialized... Welcome!" }
  ];

  useEffect(() => {
    if (isInView && termLines.length === 0) {
      lines.forEach((l, i) => {
        setTimeout(() => {
          setTermLines(prev => [...prev, l.c]);
          setTimeout(() => {
            setTermLines(prev => { 
              const n = [...prev]; 
              n[n.length - 1] = l.c + "\n" + l.r; 
              return n; 
            });
          }, 150);
        }, i * 600);
      });
    }
  }, [isInView]);

  return (
    <section id="about" className="py-24 px-6 lg:px-24 bg-bg2 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 60 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          className="w-full lg:w-[55%]"
        >
          <div className="font-mono text-cyan text-sm mb-4">// ABOUT_ME</div>
          <h2 className="font-bebas text-6xl text-white mb-6">ABOUT ME</h2>
          <p className="font-rajdhani text-[17px] leading-[1.8] text-gray mb-8">
            I'm Saurabh Singh, a Full-Stack Developer and B.Tech CSE student at Bennett University, Greater Noida (CGPA: 9.37). I build scalable web applications using the MERN stack, Laravel, and Next.js — from real-time job portals to AI-powered expense trackers and campus management platforms. Certified in Microsoft Azure, Meta Full-Stack Development, and Oracle AI, I bring both depth and breadth to every project. Currently seeking internships and full-time opportunities to build things that matter.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Frontend", "Backend", "Cloud & DevOps", "DSA"].map(t => (
              <a href="#skills" key={t} className="px-4 py-1.5 border border-cyan text-cyan font-rajdhani rounded hover:bg-cyan hover:text-bg2 transition-colors cursor-none">{t}</a>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          className="w-full lg:w-[45%]"
        >
          <div ref={termRef} className="bg-card rounded-lg overflow-hidden border border-border shadow-2xl">
            <div className="bg-[#1a1a2e] px-4 py-2 flex items-center gap-2 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-2 font-mono text-xs text-gray">saurabh@portfolio:~$</div>
            </div>
            <div className="p-6 font-mono text-[13px] text-green-400 whitespace-pre-wrap min-h-[250px]">
              {termLines.map((l, i) => <div key={i} className="mb-2">{l}</div>)}
              {isInView && <span className="animate-pulse">▮</span>}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
