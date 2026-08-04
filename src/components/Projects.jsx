import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import TiltCard from './TiltCard';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl font-heading font-bold text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)] mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-luxury-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.6)]"></div>
          </div>
        </motion.div>

        <div className="space-y-24">
          <AnimatePresence>
            {projectsData.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={project.id} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  className="relative w-full"
                >
                  <TiltCard>
                    <div className="w-full space-y-6 bg-black/40 backdrop-blur-sm border border-emerald-500/30 p-8 md:p-12 rounded-2xl group hover:border-luxury-gold hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition-all">
                      <h3 className="text-3xl md:text-4xl font-heading font-bold text-soft-ivory group-hover:text-luxury-gold transition-colors">{project.title}</h3>
                      
                      <div className="relative">
                        <p className="text-soft-ivory/80 leading-relaxed relative z-10 text-lg border-l-4 border-emerald-500 pl-6 py-2 bg-emerald-950/20 rounded-r-xl">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="font-mono text-sm text-luxury-gold font-medium px-4 py-1.5 bg-black/40 rounded-full border border-luxury-gold/30">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-6">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-500/30 px-6 py-3 rounded-xl text-soft-ivory transition-colors font-medium">
                            <FaGithub size={20} /> View Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
