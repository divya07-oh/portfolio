import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Plus, Trash2, Edit2 } from 'lucide-react';
import SkillCard from '../components/SkillCard';
import Modal from '../components/Modal';
import useLocalStorage from '../hooks/useLocalStorage';
import { skills as defaultSkills, exploring as defaultExploring } from '../data/skills';

export default function Skills() {
  const [skillsData, setSkillsData] = useLocalStorage('portfolio_skills', defaultSkills);
  const [exploringData, setExploringData] = useLocalStorage('portfolio_exploring', defaultExploring);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSkillName, setNewSkillName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Programming Languages');

  const categories = [
    'Programming Languages',
    'Frontend Development',
    'Backend Development',
    'Database',
    'Tools',
    'Currently Exploring'
  ];

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;

    if (selectedCategory === 'Currently Exploring') {
      setExploringData([...exploringData, newSkillName.trim()]);
    } else {
      const updatedSkills = skillsData.map(cat => {
        if (cat.title === selectedCategory) {
          return { ...cat, items: [...cat.items, newSkillName.trim()] };
        }
        return cat;
      });
      setSkillsData(updatedSkills);
    }

    setNewSkillName('');
    setIsModalOpen(false);
  };

  const handleDeleteSkill = (categoryTitle, skillName) => {
    if (categoryTitle === 'Currently Exploring') {
      setExploringData(exploringData.filter(s => s !== skillName));
    } else {
      const updatedSkills = skillsData.map(cat => {
        if (cat.title === categoryTitle) {
          return { ...cat, items: cat.items.filter(s => s !== skillName) };
        }
        return cat;
      });
      setSkillsData(updatedSkills);
    }
  };

  return (
    <>
      <section
        className="py-16 md:py-24 relative bg-[#080808] min-h-[calc(100vh-100px)] flex flex-col"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
              <div className="h-[1px] w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wider text-[#D4AF37] border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300"
            >
              <Plus size={16} className="mr-2 group-hover:rotate-90 transition-transform duration-300" />
              <span>ADD SKILL</span>
            </button>
          </div>

          <motion.div 
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {skillsData.map((category, index) => (
              <SkillCard 
                key={category.title} 
                category={category} 
                index={index} 
                onDelete={(skillName) => handleDeleteSkill(category.title, skillName)}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-[#111111] to-[#1a1811] p-8 md:p-12 border border-[#D4AF37]/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
            
            <div className="flex items-center space-x-4 mb-6 md:mb-0 relative z-10">
              <Sparkles className="text-[#D4AF37]" size={32} />
              <div>
                <h3 className="text-2xl font-semibold text-[#FFFFFF]">Currently Exploring</h3>
                <p className="text-[#A0A0A0] mt-1">Expanding my horizons in emerging technologies</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end relative z-10">
              {exploringData.map((item) => (
                <div key={item} className="group flex items-center bg-[#0B0B0B] border border-white/10 rounded-sm shadow-[0_0_10px_rgba(212,175,55,0.05)] overflow-hidden">
                  <span className="px-4 py-2 text-[#D4AF37] text-sm tracking-wide font-medium">
                    {item}
                  </span>
                  <button 
                    onClick={() => handleDeleteSkill('Currently Exploring', item)}
                    className="px-3 py-2 text-[#A0A0A0] hover:text-red-400 hover:bg-white/5 transition-colors border-l border-white/5"
                    title="Delete Skill"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add Skill Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Skill">
        <form onSubmit={handleAddSkill} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="skillName" className="text-sm text-[#A0A0A0] uppercase tracking-wider">Skill Name</label>
            <input
              type="text"
              id="skillName"
              value={newSkillName}
              onChange={(e) => setNewSkillName(e.target.value)}
              required
              className="w-full bg-[#080808] border border-white/10 px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37] transition-colors"
              placeholder="e.g. Next.js"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm text-[#A0A0A0] uppercase tracking-wider">Category</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-[#080808] border border-white/10 px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-4 text-sm font-medium tracking-wide text-black bg-[#D4AF37] hover:bg-[#F3E5AB] transition-colors"
          >
            SAVE SKILL
          </button>
        </form>
      </Modal>
    </>
  );
}
