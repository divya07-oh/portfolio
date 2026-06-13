import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Journey', id: 'journey' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0B0B0B]/90 backdrop-blur-md py-4 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* No Logo as per requirements */}
        <div className="w-full flex items-center justify-between md:justify-end">

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
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

        {/* Mobile Menu Button - Minimal version */}
        <button className="md:hidden text-[#FFFFFF] hover:text-[#D4AF37] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
        </div>
      </div>
    </nav>
  );
}
