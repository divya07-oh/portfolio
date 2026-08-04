import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlobalRippleBackground from './components/GlobalRippleBackground'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress 0 to 100
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 15) + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 1000); // Wait for explosion animation
      }
      setProgress(current);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[99999] pointer-events-none flex flex-col items-center justify-center bg-[#01150c]"
          >
            {/* The Expanding Star */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-luxury-gold shadow-[0_0_20px_2px_rgba(212,175,55,0.8)] origin-center"
              style={{ x: '-50%', y: '-50%' }}
              animate={{ 
                scale: progress === 100 ? [1, 50, 150] : [1, 2, 1],
                opacity: progress === 100 ? [1, 0.8, 0] : 1
              }}
              transition={{ 
                duration: progress === 100 ? 1 : 2, 
                ease: progress === 100 ? "circIn" : "easeInOut",
                repeat: progress === 100 ? 0 : Infinity
              }}
            />
            
            {/* Loading Text */}
            <motion.div 
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 flex flex-col items-center mt-24"
            >
              <span className="text-4xl font-heading font-bold text-luxury-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] mb-2">
                {progress}%
              </span>
              <span className="text-xs font-mono text-emerald-500 tracking-[0.4em] uppercase">
                Loading...
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`relative min-h-screen bg-[#01150c] text-soft-ivory overflow-x-hidden font-sans selection:bg-emerald-500/30 selection:text-white ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <CustomCursor />
        <GlobalRippleBackground />
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App
