import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from '../shared/Typewriter';
import AnimatedCounter from '../shared/AnimatedCounter';
import { socialLinks } from '../../data';

export default function Hero() {
  const [stabilized, setStabilized] = useState(false);
  
  useEffect(() => {
    const t = setTimeout(() => setStabilized(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-24 pb-12 px-6 lg:px-24 flex flex-col justify-center relative">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10 w-full max-w-7xl mx-auto">
        <div className="flex-1 w-full flex flex-col items-start space-y-6">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className="inline-block px-3 py-1 border border-cyan text-cyan font-mono text-sm tracking-[0.2em] rounded-full mb-2 bg-cyan/5">
              // FULL STACK DEVELOPER
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <h1 className={`font-bebas text-[56px] lg:text-[96px] leading-none text-white ${stabilized ? 'glow-text stabilized' : 'glitch'}`} data-text="SAURABH SINGH">
              SAURABH SINGH
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="font-mono text-xl lg:text-2xl text-cyan h-8">
            <Typewriter texts={[
              "Full-Stack Developer",
              "MERN Stack Engineer",
              "Laravel & PHP Expert",
              "Azure Certified Dev",
              "DSA Problem Solver · 850+",
              "Open Source Builder"
            ]} />
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="font-rajdhani text-lg text-gray max-w-lg">
            B.Tech CSE @ Bennett University · CGPA 9.37 · Greater Noida, India
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-4 mt-4">
            <a href="#projects" className="bg-cyan text-bg2 font-rajdhani font-bold px-8 py-3 rounded hover-lift flex items-center gap-2 group overflow-hidden relative cursor-none">
              <span className="relative z-10">VIEW PROJECTS</span>
              <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:animate-[shimmer_1s_forwards]" />
            </a>
            <a href="https://drive.google.com/file/d/1GQXjbMceklT8IDPIOUHTrkTc260D-j3L/view" target="_blank" rel="noreferrer" className="border border-cyan text-cyan font-rajdhani font-bold px-8 py-3 rounded hover:bg-cyan hover:text-bg2 transition-colors group flex items-center gap-2 cursor-none">
              DOWNLOAD RESUME <i className="fa-solid fa-download group-hover:animate-spin"></i>
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="flex gap-4 mt-6">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-cyan flex items-center justify-center text-cyan hover:bg-cyan hover:text-bg2 transition-colors group cursor-none">
                <motion.i whileHover={{ scale: 1.2, y: -2 }} className={`${s.icon} text-lg`} />
              </a>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex gap-6 mt-8 p-4 bg-card/50 backdrop-blur border border-border rounded-lg">
            <div className="text-center"><div className="text-cyan font-bebas text-3xl"><AnimatedCounter value={850}/>+</div><div className="text-gray font-rajdhani text-sm">Problems</div></div>
            <div className="w-px bg-border"></div>
            <div className="text-center"><div className="text-cyan font-bebas text-3xl"><AnimatedCounter value={9.37} isFloat/></div><div className="text-gray font-rajdhani text-sm">CGPA</div></div>
            <div className="w-px bg-border"></div>
            <div className="text-center"><div className="text-cyan font-bebas text-3xl"><AnimatedCounter value={5}/></div><div className="text-gray font-rajdhani text-sm">Certs</div></div>
            <div className="w-px bg-border"></div>
            <div className="text-center"><div className="text-cyan font-bebas text-3xl"><AnimatedCounter value={10}/>+</div><div className="text-gray font-rajdhani text-sm">Projects</div></div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex-1 w-full flex justify-center lg:justify-end relative">
          <div className="relative w-[280px] h-[280px]">
            <div className="absolute inset-0 dashed-ring"></div>
            <div className="absolute inset-0 rounded-full border-[3px] border-cyan glow-shadow overflow-hidden z-10 hover:scale-105 transition-transform duration-500 cursor-none">
              <img src="https://lh3.googleusercontent.com/d/1ax_YBXirlL2djF2phLFKY5iqt_hOE8qb" alt="Saurabh Singh" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-[-40px] opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSI0OSIgdmlld0JveD0iMCAwIDI4IDQ5Ij48ZyBmaWxsPSIjMDBmNWZmIiBmaWxsLW9wYWNpdHk9IjEiPjxwYXRoIGQ9Ik0xMy45OSAxMS4yM2wzLjItNS41M2guMTNsMy4xOSA1LjUydi4xM2wtMy4yIDUuNTNoLS4xM2wtMy4xOS01LjUydi0uMTN6Ii8+PC9nPjwvc3ZnPg==')] z-0 rounded-full mask-image-radial"></div>

            <div className="absolute top-10 -left-10 bg-card border border-cyan text-cyan font-mono text-xs px-3 py-1 rounded-full bounce-y z-20" style={{ animationDelay: '0s' }}>React</div>
            <div className="absolute top-4 -right-8 bg-card border border-amber text-amber font-mono text-xs px-3 py-1 rounded-full bounce-y z-20" style={{ animationDelay: '0.4s' }}>Next.js</div>
            <div className="absolute bottom-12 -left-12 bg-card border border-cyan text-cyan font-mono text-xs px-3 py-1 rounded-full bounce-y z-20" style={{ animationDelay: '0.8s' }}>MongoDB</div>
            <div className="absolute bottom-4 -right-4 bg-card border border-amber text-amber font-mono text-xs px-3 py-1 rounded-full bounce-y z-20" style={{ animationDelay: '1.2s' }}>Laravel</div>
            <div className="absolute -bottom-8 left-16 bg-card border border-cyan text-cyan font-mono text-xs px-3 py-1 rounded-full bounce-y z-20" style={{ animationDelay: '1.6s' }}>Azure</div>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[11px] tracking-[0.4em] text-gray">SCROLL TO EXPLORE</span>
        <i className="fa-solid fa-chevron-down text-cyan bounce-y"></i>
      </motion.div>
    </section>
  );
}
