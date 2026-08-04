import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MagneticElement from './MagneticElement';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => link.name.toLowerCase());
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#04261a]/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)] py-4 border-b border-emerald-900/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-center items-center">

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <MagneticElement key={link.name} strength={15}>
              <a
                href={link.href}
                className={`relative font-medium text-sm transition-colors hover:text-emerald-400 tracking-wide uppercase px-2 py-1 ${
                  activeSection === link.name.toLowerCase() ? 'text-emerald-400' : 'text-soft-ivory/70'
                }`}
              >
                {link.name}
                {activeSection === link.name.toLowerCase() && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-[-6px] h-[2px] bg-luxury-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                  />
                )}
              </a>
            </MagneticElement>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="w-full flex justify-end md:hidden">
          <button
            className="text-soft-ivory hover:text-luxury-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#04261a]/95 backdrop-blur-xl border-b border-emerald-900/50 overflow-hidden absolute top-full left-0 right-0 shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col py-6 px-6 gap-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium tracking-wide uppercase text-sm ${
                    activeSection === link.name.toLowerCase() ? 'text-luxury-gold' : 'text-soft-ivory/80'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
