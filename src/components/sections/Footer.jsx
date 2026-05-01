import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-card py-12 relative border-t border-border">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan to-transparent shadow-[0_0_10px_#00f5ff]"></div>
      <div className="text-center">
        <h2 className="font-bebas text-4xl text-cyan mb-2 glow-text">SAURABH SINGH</h2>
        <p className="font-rajdhani text-gray">Built with React · Deployed on Vercel · © 2025</p>
      </div>
      <AnimatePresence>
        {showTop && (
          <motion.button 
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0 }} 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="fixed bottom-8 right-8 w-12 h-12 bg-cyan text-bg2 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-[0_0_15px_#00f5ff] transition-all z-[90] cursor-none"
          >
            <i className="fa-solid fa-arrow-up"></i>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
