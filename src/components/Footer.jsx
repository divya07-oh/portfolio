export default function Footer() {
  return (
    <footer className="bg-[#050505] py-10 border-t border-white/5 relative overflow-hidden">
      {/* Subtle gold line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <a href="#home" className="text-xl font-bold tracking-widest text-gradient">
            DIVYA.
          </a>
          <p className="text-[#A0A0A0] text-sm mt-2">
            Professional Software Engineer Portfolio
          </p>
        </div>
        
        <div className="text-[#A0A0A0] text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Divya. All rights reserved.</p>
          <p className="mt-1 text-xs">Designed with minimal luxury aesthetics.</p>
        </div>
      </div>
    </footer>
  );
}
