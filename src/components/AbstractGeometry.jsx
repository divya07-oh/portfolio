import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt } from 'react-icons/fa';

const AbstractGeometry = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center pointer-events-none">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-emerald-900/20 rounded-full blur-[100px]"></div>

      {/* Main Glass Shape 1 */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          rotate: { duration: 25, ease: "linear", repeat: Infinity },
          scale: { duration: 8, ease: "easeInOut", repeat: Infinity }
        }}
        className="absolute w-64 h-64 border border-emerald-500/30 rounded-3xl bg-gradient-to-br from-emerald-600/10 to-transparent backdrop-blur-md shadow-[inset_0_0_40px_rgba(16,185,129,0.2)]"
        style={{ transformOrigin: 'center center' }}
      >
        <div className="absolute inset-0 border border-luxury-gold/20 rounded-3xl transform rotate-12 scale-90"></div>
      </motion.div>

      {/* Main Glass Shape 2 (Counter Rotating) */}
      <motion.div
        animate={{ 
          rotate: -360,
          borderRadius: ["20%", "40%", "20%"]
        }}
        transition={{ 
          rotate: { duration: 30, ease: "linear", repeat: Infinity },
          borderRadius: { duration: 10, ease: "easeInOut", repeat: Infinity }
        }}
        className="absolute w-72 h-72 border border-luxury-gold/30 rounded-[30%] bg-gradient-to-tr from-luxury-gold/5 to-transparent backdrop-blur-sm shadow-[0_0_30px_rgba(212,175,55,0.15)]"
      ></motion.div>

      {/* Inner Glowing Core */}
      <motion.div
        animate={{ 
          scale: [0.9, 1.1, 0.9],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 4, 
          ease: "easeInOut", 
          repeat: Infinity 
        }}
        className="absolute w-20 h-20 bg-emerald-400 rounded-full blur-[20px] mix-blend-screen"
      ></motion.div>
      <div className="absolute w-12 h-12 bg-white rounded-full blur-[10px] mix-blend-overlay"></div>

      {/* Floating Light Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            x: [0, (i % 2 === 0 ? 30 : -30), 0],
            rotate: 360,
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 6 + i,
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 0.5
          }}
          className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-luxury-gold' : 'bg-emerald-400'} blur-[1px]`}
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
        />
      ))}

      {/* Floating Tech Icons */}
      {[
        { Icon: FaReact, color: 'text-sky-400' },
        { Icon: FaJs, color: 'text-yellow-400' },
        { Icon: FaNodeJs, color: 'text-green-500' },
        { Icon: FaPython, color: 'text-blue-400' },
        { Icon: FaHtml5, color: 'text-orange-500' },
        { Icon: FaCss3Alt, color: 'text-blue-500' },
        { Icon: FaDatabase, color: 'text-emerald-500' },
        { Icon: FaGitAlt, color: 'text-red-500' }
      ].map((item, i) => (
        <motion.div
          key={`icon-${i}`}
          animate={{
            y: [0, (i % 2 === 0 ? -40 : 40), 0],
            x: [0, (i % 3 === 0 ? 40 : -40), 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 10 + (i % 3),
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 0.8
          }}
          className={`absolute text-5xl md:text-6xl ${item.color} drop-shadow-[0_0_15px_currentColor] mix-blend-screen opacity-80`}
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
        >
          <item.Icon />
        </motion.div>
      ))}
      
    </div>
  );
};

export default AbstractGeometry;
