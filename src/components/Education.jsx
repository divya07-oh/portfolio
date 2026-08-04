import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Code, GraduationCap, MonitorPlay } from 'lucide-react';
import TiltCard from './TiltCard';

const journeySteps = [
  {
    id: 1,
    title: "The Beginning",
    subtitle: "Discovering Code",
    description: "Started the journey into technology by exploring the fundamentals of programming. Built strong logic and problem-solving skills using C and basic web technologies like HTML and CSS.",
    icon: <Code size={20} />,
    color: "text-blue-400",
    bg: "bg-blue-500/20",
    border: "border-blue-500"
  },
  {
    id: 2,
    title: "Academic Roots",
    subtitle: "B.E. Computer Science Engineering",
    description: "Pursuing formal education at Anna University (Jaya Engineering College). Diving deep into data structures, algorithms, and software engineering principles.",
    icon: <GraduationCap size={20} />,
    color: "text-luxury-gold",
    bg: "bg-luxury-gold/20",
    border: "border-luxury-gold"
  },
  {
    id: 3,
    title: "The Full-Stack Shift",
    subtitle: "MERN Stack Development",
    description: "Transitioned from static pages to dynamic web applications. Mastered React.js for frontend and Express/Node.js with MongoDB for robust backend solutions.",
    icon: <MonitorPlay size={20} />,
    color: "text-[#39FF14]",
    bg: "bg-[#10B981]/20",
    border: "border-[#39FF14]"
  },
  {
    id: 4,
    title: "Continuous Learning",
    subtitle: "Modern UI & Scalability",
    description: "Currently focusing on crafting premium user interfaces, writing clean and scalable code, and building real-world projects to bridge the gap between theory and industry standards.",
    icon: <Rocket size={20} />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/20",
    border: "border-emerald-400"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-heading font-bold text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)] mb-4">My Developer Journey</h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto rounded-full shadow-[0_0_10px_rgba(212,175,55,0.6)]"></div>
          <p className="mt-6 text-soft-ivory/70 max-w-2xl mx-auto font-medium">
            From writing my first line of code to building full-stack web applications, here is the path of my continuous learning and growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-emerald-900/50 transform md:-translate-x-1/2 rounded-full overflow-hidden">
            {/* Animated Glow Line */}
            <motion.div 
              className="w-full h-1/3 bg-gradient-to-b from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#34d399]"
              animate={{ y: ["-100%", "300%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="space-y-12">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node / Icon */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    <div className={`w-12 h-12 rounded-full ${step.bg} ${step.border} border-2 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_currentColor] ${step.color} transition-transform hover:scale-110 duration-300`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full pl-24 md:pl-0 md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                    <TiltCard>
                      <div className={`glass-card p-5 md:p-6 group hover:border-${step.border.split('-')[1]}-500/50 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] cursor-pointer`}>
                        {/* Glow Behind Text */}
                        <div className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-24 h-24 ${step.bg} rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        
                        <span className={`inline-block px-3 py-1 bg-black/40 border border-white/10 ${step.color} text-[10px] md:text-xs font-bold rounded-full mb-3 uppercase tracking-wider`}>
                          Phase {step.id}
                        </span>
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-soft-ivory mb-1 group-hover:text-white transition-colors">{step.title}</h3>
                        <h4 className={`text-base md:text-lg font-medium ${step.color} mb-3 group-hover:drop-shadow-[0_0_10px_currentColor] transition-all`}>{step.subtitle}</h4>
                        <p className="text-soft-ivory/70 text-sm md:text-base leading-relaxed relative z-10 group-hover:text-soft-ivory/90 transition-colors">
                          {step.description}
                        </p>
                      </div>
                    </TiltCard>
                  </div>
                  
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
