import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  const { categories, skills } = skillsData;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="skills" className="py-20 relative z-10 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 relative z-30">
          <div>
            <h2 className="text-4xl font-heading font-bold text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)] mb-4">Tech Stack</h2>
            <div className="w-24 h-1 bg-luxury-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.6)]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(s => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6 border-b border-emerald-500/30 pb-2">
                  <h3 className="text-lg font-heading font-semibold text-emerald-300">
                    {category}
                  </h3>
                </div>
                
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-col gap-3"
                >
                  <AnimatePresence>
                    {categorySkills.map((skill) => (
                      <motion.div
                        key={skill.id}
                        variants={itemVariants}
                        exit={{ opacity: 0, scale: 0.8 }}
                        layout
                        whileHover={{ 
                          y: -5,
                          scale: 1.05,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        className="group relative flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-luxury-gold/50 shadow-sm cursor-pointer hover:border-rich-gold hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-colors duration-300"
                      >
                        {/* Icon */}
                        <div className="w-6 h-6 flex items-center justify-center shrink-0 group-hover:rotate-[6deg] transition-transform duration-300">
                          {skill.icon ? (
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                          ) : (
                            <div className="w-full h-full bg-emerald-100 rounded flex items-center justify-center text-emerald-800 font-bold text-xs">
                              {skill.name.charAt(0).toUpperCase()}
                            </div>
                          )}
                        </div>
                        
                        {/* Name */}
                        <span className="font-medium text-[#1F2937] text-sm tracking-wide">
                          {skill.name}
                        </span>
                        
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
