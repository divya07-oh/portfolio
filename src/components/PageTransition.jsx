import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <div className="relative w-full h-full">
      {/* 
        The Sweeping Gold Line 
        It scales from 0 to 1 across the screen when the page exits,
        or we can do it on entry. The requirement is:
        "Fade out the current page. Animate a thin gold line sweeping horizontally across the screen. Fade in the new page with a slight upward motion."
      */}
      <motion.div
        className="fixed top-1/2 left-0 w-full h-[1px] bg-[#D4AF37] z-50 origin-left"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        exit={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      
      {/* The Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
