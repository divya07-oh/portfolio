import { motion } from 'framer-motion';
import { ExternalLink, Trash2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project, index, onDelete }) {
  const handleGithubClick = (e) => {
    e.preventDefault();
    if (project.githubLink && project.githubLink !== '#') {
      window.open(project.githubLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleLiveClick = (e) => {
    e.preventDefault();
    if (project.liveLink && project.liveLink !== '#') {
      window.open(project.liveLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-[#111111] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#D4AF37]"
    >
      {/* Delete button positioned absolute top-right over the image */}
      <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => onDelete(project.title)}
          className="p-2 bg-red-500/80 text-white hover:bg-red-600 rounded-full shadow-lg transition-colors"
          title="Delete Project"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className="h-64 w-full bg-[#080808] relative overflow-hidden flex items-center justify-center border-b border-white/5">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
        ) : (
          <>
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
            <div className="w-24 h-24 border border-[#D4AF37]/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
              <div className="w-16 h-16 border border-[#F3E5AB]/30 rotate-45 group-hover:rotate-90 transition-transform duration-700" />
            </div>
          </>
        )}
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-3 text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-[#A0A0A0] mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium tracking-wider text-[#D4AF37] bg-[#D4AF37]/5 px-3 py-1 border border-[#D4AF37]/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleGithubClick}
            className="flex items-center text-sm font-medium text-[#A0A0A0] hover:text-[#FFFFFF] transition-colors"
          >
            <FaGithub size={18} className="mr-2" />
            GitHub
          </button>
          <button
            onClick={handleLiveClick}
            className="flex items-center text-sm font-medium text-[#A0A0A0] hover:text-[#D4AF37] transition-colors"
          >
            <ExternalLink size={18} className="mr-2" />
            Live Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
}
