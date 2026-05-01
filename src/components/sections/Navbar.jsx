import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Stats', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-[#050508]/85 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-24 flex justify-between items-center">
        <a href="#home" className="relative group cursor-none">
          <div className="absolute inset-0 bg-cyan blur-md opacity-20 group-hover:opacity-60 transition-opacity rounded-full animate-pulse"></div>
          <span className="font-bebas text-3xl text-cyan relative z-10">SS</span>
        </a>
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <a href={`#${l.toLowerCase()}`} key={l} className="font-rajdhani font-semibold text-white tracking-widest relative group uppercase text-sm cursor-none">
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <a href="mailto:offical.saurabhsingh@gmail.com" className="hidden md:inline-block border border-cyan text-cyan font-rajdhani font-bold px-6 py-2 rounded hover:bg-cyan hover:text-bg2 transition-colors cursor-none">HIRE ME</a>
        <button className="md:hidden text-cyan text-2xl cursor-none" onClick={() => setMobileOpen(!mobileOpen)}><i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i></button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: '100vh', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="absolute top-full left-0 w-full bg-bg2 flex flex-col items-center justify-center gap-8 overflow-hidden">
            {links.map((l, i) => (
              <motion.a href={`#${l.toLowerCase()}`} key={l} onClick={() => setMobileOpen(false)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="font-bebas text-4xl text-white hover:text-cyan cursor-none">{l}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
