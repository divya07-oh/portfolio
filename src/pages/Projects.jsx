import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';
import useLocalStorage from '../hooks/useLocalStorage';
import { projects as defaultProjects } from '../data/projects';

export default function Projects() {
  const [projectsData, setProjectsData] = useLocalStorage('portfolio_projects', defaultProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tech, setTech] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [liveLink, setLiveLink] = useState('');

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newProject = {
      title: title.trim(),
      description: description.trim(),
      tech: tech.split(',').map(t => t.trim()).filter(Boolean),
      githubLink: githubLink.trim() || '#',
      liveLink: liveLink.trim() || '#',
      image: null
    };

    setProjectsData([...projectsData, newProject]);
    
    // Reset form
    setTitle('');
    setDescription('');
    setTech('');
    setGithubLink('');
    setLiveLink('');
    setIsModalOpen(false);
  };

  const handleDeleteProject = (projectTitle) => {
    setProjectsData(projectsData.filter(p => p.title !== projectTitle));
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="py-16 md:py-24 relative min-h-[calc(100vh-100px)] flex flex-col"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
              <div className="h-[1px] w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wider text-[#D4AF37] border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300"
            >
              <Plus size={16} className="mr-2 group-hover:rotate-90 transition-transform duration-300" />
              <span>ADD PROJECT</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projectsData.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={index}
                onDelete={handleDeleteProject}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Add Project Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Project">
        <form onSubmit={handleAddProject} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm text-[#A0A0A0] uppercase tracking-wider">Project Name</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full bg-[#080808] border border-white/10 px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37] transition-colors"
              placeholder="e.g. Talent Matrix"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm text-[#A0A0A0] uppercase tracking-wider">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={3}
              className="w-full bg-[#080808] border border-white/10 px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
              placeholder="Project description..."
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="tech" className="text-sm text-[#A0A0A0] uppercase tracking-wider">Technologies Used</label>
            <input
              type="text"
              id="tech"
              value={tech}
              onChange={(e) => setTech(e.target.value)}
              required
              className="w-full bg-[#080808] border border-white/10 px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37] transition-colors"
              placeholder="React, Node, MongoDB (comma separated)"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="github" className="text-sm text-[#A0A0A0] uppercase tracking-wider">GitHub Link</label>
            <input
              type="text"
              id="github"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              className="w-full bg-[#080808] border border-white/10 px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37] transition-colors"
              placeholder="https://github.com/..."
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="live" className="text-sm text-[#A0A0A0] uppercase tracking-wider">Live Demo Link</label>
            <input
              type="text"
              id="live"
              value={liveLink}
              onChange={(e) => setLiveLink(e.target.value)}
              className="w-full bg-[#080808] border border-white/10 px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37] transition-colors"
              placeholder="https://..."
            />
          </div>

          <div className="pt-4 flex gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="w-full py-4 text-sm font-medium tracking-wide text-[#FFFFFF] border border-white/10 hover:border-white/30 transition-colors"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="w-full py-4 text-sm font-medium tracking-wide text-black bg-[#D4AF37] hover:bg-[#F3E5AB] transition-colors"
            >
              SAVE PROJECT
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
