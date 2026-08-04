import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Plus, Trash2, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import TiltCard from './TiltCard';

const defaultProjects = [
  {
    id: '1',
    title: 'ProjectBridge',
    description: 'Student collaboration platform connecting students with businesses.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Spam Detection System',
    description: 'Machine learning based spam detection application.',
    tech: ['Python', 'Scikit-Learn', 'Flask', 'React'],
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    tech: '',
    github: '',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
  });

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_projects');
    if (saved) {
      setProjects(JSON.parse(saved));
    } else {
      setProjects(defaultProjects);
      localStorage.setItem('portfolio_projects', JSON.stringify(defaultProjects));
    }
  }, []);

  const saveProjects = (updatedProjects) => {
    setProjects(updatedProjects);
    localStorage.setItem('portfolio_projects', JSON.stringify(updatedProjects));
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    const project = {
      id: Date.now().toString(),
      ...newProject,
      tech: newProject.tech.split(',').map(t => t.trim()).filter(Boolean)
    };
    saveProjects([...projects, project]);
    setIsModalOpen(false);
    setNewProject({ title: '', description: '', tech: '', github: '', image: newProject.image });
  };

  const handleDelete = (id) => {
    const updated = projects.filter(p => p.id !== id);
    saveProjects(updated);
  };

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
          <button 
            onClick={() => setIsModalOpen(true)}
            title="Add Project"
            className="flex items-center justify-center bg-[#10B981]/20 hover:bg-[#10B981]/40 border border-[#39FF14] text-[#39FF14] w-12 h-12 rounded-full backdrop-blur-md transition-all shadow-[0_0_15px_rgba(16,185,129,0.6)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] group"
          >
            <Plus size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </motion.div>

        <div className="space-y-24">
          <AnimatePresence>
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={project.id} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  className="relative w-full"
                >
                  {/* Delete Button */}
                  <button 
                    onClick={() => handleDelete(project.id)}
                    className="hidden absolute top-0 right-0 z-20 bg-red-500/80 hover:bg-red-500 text-white p-3 rounded-full shadow-lg transform translate-x-4 -translate-y-4 backdrop-blur-md"
                    title="Delete Project"
                  >
                    <Trash2 size={18} />
                  </button>

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

      {/* Add Project Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative glass-card p-8 w-full max-w-lg"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-soft-ivory/50 hover:text-soft-ivory"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold text-soft-ivory mb-6 font-heading">Add New Project</h3>
              
              <form onSubmit={handleAddProject} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-emerald-300 mb-1">Project Name</label>
                  <input 
                    required type="text" 
                    className="w-full bg-black/30 border border-emerald-500/30 rounded-lg px-4 py-2 text-soft-ivory focus:outline-none focus:border-luxury-gold"
                    value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-300 mb-1">Description</label>
                  <textarea 
                    required rows="3"
                    className="w-full bg-black/30 border border-emerald-500/30 rounded-lg px-4 py-2 text-soft-ivory focus:outline-none focus:border-luxury-gold"
                    value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-300 mb-1">Technologies (comma separated)</label>
                  <input 
                    required type="text" placeholder="React, Tailwind, Node.js"
                    className="w-full bg-black/30 border border-emerald-500/30 rounded-lg px-4 py-2 text-soft-ivory focus:outline-none focus:border-luxury-gold"
                    value={newProject.tech} onChange={e => setNewProject({...newProject, tech: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-300 mb-1">GitHub Link</label>
                  <input 
                    type="url" placeholder="https://github.com/..."
                    className="w-full bg-black/30 border border-emerald-500/30 rounded-lg px-4 py-2 text-soft-ivory focus:outline-none focus:border-luxury-gold"
                    value={newProject.github} onChange={e => setNewProject({...newProject, github: e.target.value})}
                  />
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full bg-luxury-gold hover:bg-rich-gold text-deep-charcoal font-bold py-3 rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-colors">
                    Add Project
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
