import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Journey', id: 'journey' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0B0B0B]/90 backdrop-blur-md py-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* No Logo as per requirements */}
          <div className="w-full flex items-center justify-between md:justify-end">
            
            {/* Mobile Menu Button - Minimal version */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-[#FFFFFF] hover:text-[#D4AF37] transition-colors"
            >
              <Menu size={24} />
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm tracking-wide transition-colors duration-300 hover:text-[#D4AF37] uppercase ${
                    currentPage === item.id ? 'text-[#D4AF37] font-medium relative' : 'text-[#A0A0A0]'
                  }`}
                >
                  {item.name}
                  {currentPage === item.id && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#D4AF37]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#0B0B0B]/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-[#A0A0A0] hover:text-[#D4AF37] transition-colors p-2"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col space-y-8 text-center w-full px-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-2xl tracking-widest uppercase transition-colors duration-300 ${
                    currentPage === item.id ? 'text-[#D4AF37] font-bold' : 'text-[#A0A0A0] hover:text-[#FFFFFF]'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
