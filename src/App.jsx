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
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999] pointer-events-none flex flex-col items-center justify-center bg-[#01150c]"
          >
            <div className="relative flex flex-col items-center justify-center">
              {/* Hexagon Drawing Animation */}
              <div className="relative w-40 h-40 flex items-center justify-center mb-10">
                <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(52,211,153,0.5)] overflow-visible" viewBox="0 0 100 100">
                  <motion.polygon
                    points="50 2, 98 26, 98 74, 50 98, 2 74, 2 26"
                    fill={progress === 100 ? "rgba(52, 211, 153, 0.05)" : "none"}
                    stroke="#34d399" 
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    transition={{ ease: "linear", duration: 0.2 }}
                  />
                  <motion.polygon
                    points="50 15, 82 32.5, 82 67.5, 50 85, 18 67.5, 18 32.5"
                    fill={progress === 100 ? "rgba(212, 175, 55, 0.05)" : "none"}
                    stroke="#D4AF37" 
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    transition={{ ease: "linear", duration: 0.2 }}
                    style={{ rotate: 180, originX: "50px", originY: "50px" }}
                  />
                </svg>

                {/* Percentage inside Hexagon */}
                <span className="absolute text-2xl font-heading font-bold text-luxury-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]">
                  {progress}%
                </span>
                
                {/* Blast effect at 100% */}
                <motion.div 
                  className="absolute inset-0 bg-emerald-400 rounded-full blur-[40px]"
                  animate={{ 
                    scale: progress === 100 ? [0, 1.5, 0] : 0,
                    opacity: progress === 100 ? [0, 0.6, 0] : 0
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              
              {/* Loading Text */}
              <motion.div 
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-emerald-500 tracking-[0.5em] uppercase pl-2">
                    System Boot
                  </span>
                  <motion.span 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-2 h-4 bg-luxury-gold"
                  />
                </div>
              </motion.div>
            </div>
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
