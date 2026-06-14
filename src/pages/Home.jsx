import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Home({ setCurrentPage }) {
  const name = "DIVYA";

  return (
    <section className="min-h-[calc(100vh-100px)] flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-6 relative z-10"
        >
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-[#D4AF37] flex overflow-hidden pb-2">
              {name.split('').map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </h1>
            <motion.p
              variants={itemVariants}
              className="text-[#A0A0A0] tracking-[0.2em] text-sm uppercase"
            >
              Computer Science Engineering Student
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl text-gradient font-medium tracking-widest"
            >
              FULL-STACK DEVELOPER
            </motion.h2>
          </div>

          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }
            }}
            className="text-[#A0A0A0] text-base md:text-lg max-w-lg leading-relaxed pt-4"
          >
            Building scalable web applications and modern digital experiences.
            <br /><br />
            Passionate Computer Science Engineering student with interests in Full-Stack Development and Web2 technologies.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="flex flex-wrap items-center gap-6 pt-8"
          >
            <button 
              onClick={() => setCurrentPage?.('projects')}
              className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-widest text-[#D4AF37] border border-[#D4AF37] overflow-hidden transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
            >
              <span className="mr-2">VIEW PROJECTS</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-widest text-[#D4AF37] hover:text-[#F3E5AB] transition-all duration-300"
            >
              <span className="mr-2">DOWNLOAD RESUME</span>
              <Download size={16} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Premium 3D Triangle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }}
          className="hidden lg:flex justify-center items-center relative h-full min-h-[500px]"
        >
          <div className="relative w-96 h-96">
            <motion.div 
              animate={{ rotateY: [0, 10, 0], rotateX: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 m-auto flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                <polygon points="50,10 90,90 10,90" fill="none" stroke="var(--color-luxury-gold)" strokeWidth="0.5" className="opacity-50" />
                <polygon points="50,15 85,85 15,85" fill="#111111" stroke="var(--color-luxury-gold)" strokeWidth="1.5" />
                <polygon points="50,25 75,75 25,75" fill="#0B0B0B" stroke="#A0A0A0" strokeWidth="0.5" className="opacity-30" />
                <polygon points="50,35 65,65 35,65" fill="#111111" stroke="var(--color-luxury-gold)" strokeWidth="1" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Far Right Edge Socials */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="hidden lg:flex flex-col items-center justify-center space-y-8 absolute right-12 top-1/2 -translate-y-1/2"
      >
        <a href="https://github.com/divya07-oh" target="_blank" rel="noopener noreferrer" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors duration-300">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/divya-v-3b7896337" target="_blank" rel="noopener noreferrer" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors duration-300">
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:divyavenkatesan239@gmail.com" className="text-[#A0A0A0] hover:text-[#D4AF37] transition-colors duration-300">
          <Mail size={20} />
        </a>
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#D4AF37] to-transparent mt-4" />
      </motion.div>
    </section>
  );
}
