import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      key="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-[#0B0B0B] flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* The Name Reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold tracking-[0.3em] text-[#D4AF37] mb-4"
        >
          DIVYA
        </motion.h1>

        {/* The Gold Line Draw */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="h-[1px] w-48 bg-[#D4AF37] origin-center"
        />
      </div>
    </motion.div>
  );
}
