import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { heroData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/20 border-t border-emerald-900/50 pt-12 pb-8 relative z-10 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <p className="text-soft-ivory/70 font-medium">
               <span className="text-luxury-gold"></span> 
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href={"https://github.com/divya07-oh"} target="_blank" rel="noreferrer" className="text-soft-ivory/70 hover:text-emerald-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href={"https://www.linkedin.com/in/divya-v-3b7896337/"} target="_blank" rel="noreferrer" className="text-soft-ivory/70 hover:text-emerald-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <button 
              onClick={scrollToTop}
              className="ml-4 p-2 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-soft-ivory transition-colors shadow-[0_0_10px_rgba(16,185,129,0.2)]"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
