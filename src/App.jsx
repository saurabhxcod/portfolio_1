import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Cursor from './components/shared/Cursor';
import Preloader from './components/shared/Preloader';
import Background3D from './components/shared/Background3D';

import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Stats from './components/sections/Stats';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Cursor />
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Background3D />
          <Navbar />
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Stats />
            <Contact />
            <Footer />
          </motion.div>
        </>
      )}
    </>
  );
}

export default App;
