import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AbstractGeometry from './AbstractGeometry';
import { heroData } from '../data/portfolioData';

const Hero = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 flex items-center">
      
      {/* Top Layer: Content */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#031c12] border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
              <span className="text-sm md:text-base font-medium text-emerald-300 tracking-wide">{heroData.tagline}</span>
            </motion.div>
            
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-medium text-soft-ivory/80">Hello, I'm</h2>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-bold leading-tight bg-gradient-to-r from-emerald-400 via-luxury-gold to-emerald-300 bg-clip-text text-transparent drop-shadow-sm pb-2 animate-gradient-x bg-[length:200%_auto]">
                {heroData.name}
              </h1>
              <h3 className="text-2xl md:text-3xl font-heading text-soft-ivory font-medium pt-2">
                Crafting digital experiences as a <span className="text-luxury-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] relative inline-block">
                  {heroData.role}
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-500/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
                  </svg>
                </span>
              </h3>
            </div>
          </div>

          <p className="text-soft-ivory/80 font-medium text-lg leading-relaxed max-w-xl">
            {heroData.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="btn-primary group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">View Projects <ArrowRight size={18} /></span>
            </a>
            <a href="#contact" className="btn-secondary group">
              Contact Me
            </a>
          </div>

          <div className="flex gap-4 pt-6">
            <a href={heroData.socialLinks.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-luxury-gold/50 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-deep-charcoal transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1">
              <FaGithub size={20} />
            </a>
            <a href={heroData.socialLinks.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-luxury-gold/50 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-deep-charcoal transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1">
              <FaLinkedin size={20} />
            </a>
            <a href={heroData.socialLinks.email} className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-luxury-gold/50 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-deep-charcoal transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Content - Abstract Geometry Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <AbstractGeometry />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-emerald-400 hover:text-luxury-gold transition-colors flex flex-col items-center gap-2 focus:outline-none"
        aria-label="Scroll down"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
};

export default Hero;
