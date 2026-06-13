import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench, Trash2 } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Wrench: Wrench,
};

export default function SkillCard({ category, index, onDelete }) {
  const IconComponent = iconMap[category.iconName] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group/card bg-[#111111] p-8 border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl opacity-0 group/card-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <IconComponent className="text-[#D4AF37] mb-4" size={32} />
        <h3 className="text-xl font-semibold mb-6 text-[#FFFFFF]">{category.title}</h3>
        <ul className="space-y-3">
          {category.items.map((skill) => (
            <li key={skill} className="group/item flex items-center justify-between text-[#A0A0A0] hover:text-white transition-colors duration-300 p-1 -ml-1 rounded hover:bg-white/5">
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#D4AF37] mr-3 rotate-45 transition-transform duration-300 group-hover/item:scale-150" />
                {skill}
              </div>
              <button
                onClick={() => onDelete(skill)}
                className="opacity-0 group-hover/item:opacity-100 text-red-400 hover:text-red-300 transition-opacity p-1"
                title={`Delete ${skill}`}
              >
                <Trash2 size={14} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
