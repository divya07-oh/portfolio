import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import LuxuryButton from './LuxuryButton';

export default function ProjectDetailsModal({ isOpen, onClose, project }) {
  if (!project) return null;

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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0B0B0B] border border-[#D4AF37]/30 w-full max-w-5xl max-h-[90vh] overflow-y-auto custom-scrollbar relative shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-[#D4AF37]/20 text-[#A0A0A0] hover:text-[#D4AF37] rounded-full transition-colors backdrop-blur-sm"
            >
              <X size={24} />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-[#050505] relative overflow-hidden border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-90" />
              ) : (
                <>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-transparent to-transparent" />
                  <div className="w-32 h-32 border border-[#D4AF37]/30 rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 border border-[#F3E5AB]/30 rotate-45" />
                  </div>
                </>
              )}
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6">
                {project.title}
              </h2>
              <p className="text-[#A0A0A0] text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="mb-12">
                <h3 className="text-sm tracking-widest text-[#FFFFFF] uppercase mb-4 opacity-50">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium tracking-wider text-[#D4AF37] bg-[#D4AF37]/5 px-3 py-1 border border-[#D4AF37]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <LuxuryButton onClick={handleGithubClick} className="w-full sm:w-auto text-xs py-4" icon={<FaGithub size={16} />}>
                  GITHUB REPO
                </LuxuryButton>
                <LuxuryButton onClick={handleLiveClick} className="w-full sm:w-auto text-xs py-4 border-[#A0A0A0] text-[#A0A0A0] hover:border-[#D4AF37]" icon={<ExternalLink size={16} />}>
                  LIVE DEMO
                </LuxuryButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
