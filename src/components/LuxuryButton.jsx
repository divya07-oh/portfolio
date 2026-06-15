import { motion } from 'framer-motion';

export default function LuxuryButton({ children, onClick, className = "", icon = null, type = "button" }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={`group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-widest text-[#D4AF37] border border-[#D4AF37] overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Background sweep animation on hover */}
      <motion.div
        className="absolute inset-0 bg-[#D4AF37] origin-left z-0"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      
      {/* Text and Icon must be above the background */}
      <span className="relative z-10 flex items-center group-hover:text-black transition-colors duration-300">
        <span className="mr-2">{children}</span>
        {icon && <span className="ml-1 flex items-center">{icon}</span>}
      </span>
    </motion.button>
  );
}
