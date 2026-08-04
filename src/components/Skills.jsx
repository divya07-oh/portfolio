import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, X, Upload } from 'lucide-react';

const defaultSkills = [
  //{ id: '1', name: 'Java', category: 'Programming Languages', icon: '' },
  { id: '2', name: 'Python', category: 'Programming Languages', icon: '' },
  { id: '3', name: 'JavaScript', category: 'Programming Languages', icon: '' },
 // { id: '4', name: 'C', category: 'Programming Languages', icon: '' },
  //{ id: '5', name: 'C++', category: 'Programming Languages', icon: '' },
  { id: '6', name: 'HTML', category: 'Frontend', icon: '' },
  { id: '7', name: 'CSS', category: 'Frontend', icon: '' },
  { id: '8', name: 'React', category: 'Frontend', icon: '' },
 // { id: '9', name: 'Tailwind', category: 'Frontend', icon: '' },
  { id: '10', name: 'Node.js', category: 'Backend', icon: '' },
  { id: '11', name: 'Express', category: 'Backend', icon: '' },
  { id: '12', name: 'MongoDB', category: 'Database', icon: '' },
  { id: '13', name: 'Git', category: 'Tools', icon: '' },
  { id: '14', name: 'GitHub', category: 'Tools', icon: '' },
  { id: '15', name: 'VS Code', category: 'Tools', icon: '' },
 // { id: '16', name: 'Postman', category: 'Tools', icon: '' }
];

const categories = ['Programming Languages', 'Frontend', 'Backend', 'Database', 'Tools'];

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSkill, setNewSkill] = useState({ name: '', category: 'Frontend', icon: '' });

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_skills_v3');
    if (saved) {
      setSkills(JSON.parse(saved));
    } else {
      setSkills(defaultSkills);
      localStorage.setItem('portfolio_skills_v3', JSON.stringify(defaultSkills));
    }
  }, []);

  const saveSkills = (updated) => {
    setSkills(updated);
    localStorage.setItem('portfolio_skills_v3', JSON.stringify(updated));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewSkill({ ...newSkill, icon: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkill.name.trim()) return;
    const skill = {
      id: Date.now().toString(),
      name: newSkill.name,
      category: newSkill.category,
      icon: newSkill.icon
    };
    saveSkills([...skills, skill]);
    setIsModalOpen(false);
    setNewSkill({ name: '', category: 'Frontend', icon: '' });
  };

  const handleDelete = (id) => {
    saveSkills(skills.filter(s => s.id !== id));
  };

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
          <button 
            onClick={() => setIsModalOpen(true)}
            title="Add Skill"
            className="flex items-center justify-center bg-[#10B981]/20 hover:bg-[#10B981]/40 border border-[#39FF14] text-[#39FF14] w-12 h-12 rounded-full backdrop-blur-md transition-all shadow-[0_0_15px_rgba(16,185,129,0.6)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] group"
          >
            <Plus size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
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
                        {/* Delete Button (visible on hover) */}
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleDelete(skill.id); }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity transform scale-0 group-hover:scale-100 shadow-md z-20"
                        >
                          <X size={12} />
                        </button>

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

      {/* Add Skill Modal */}
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
              className="relative glass-card p-8 w-full max-w-md"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-soft-ivory/50 hover:text-soft-ivory"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold text-soft-ivory mb-6 font-heading">Add Technology Badge</h3>
              
              <form onSubmit={handleAddSkill} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-emerald-300 mb-1">Technology Name</label>
                  <input 
                    required type="text" placeholder="e.g. Next.js"
                    className="w-full bg-black/30 border border-emerald-500/30 rounded-lg px-4 py-3 text-soft-ivory focus:outline-none focus:border-luxury-gold"
                    value={newSkill.name} onChange={e => setNewSkill({...newSkill, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-emerald-300 mb-1">Category</label>
                  <select 
                    className="w-full bg-black/50 border border-emerald-500/30 rounded-lg px-4 py-3 text-soft-ivory focus:outline-none focus:border-luxury-gold appearance-none"
                    value={newSkill.category} onChange={e => setNewSkill({...newSkill, category: e.target.value})}
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat} className="bg-emerald-900">{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-emerald-300 mb-1">Icon Upload (Optional)</label>
                  <div className="flex items-center gap-4">
                    <label className="flex-1 flex flex-col items-center justify-center py-4 border-2 border-dashed border-emerald-500/30 rounded-lg hover:border-luxury-gold cursor-pointer transition-colors bg-black/20">
                      <Upload size={20} className="text-emerald-400 mb-2" />
                      <span className="text-xs text-soft-ivory/70">Click to upload icon</span>
                      <input type="file" accept="image/png, image/jpeg, image/webp, image/svg+xml" className="hidden" onChange={handleImageUpload} />
                    </label>
                    {newSkill.icon && (
                      <div className="w-16 h-16 rounded-xl border border-luxury-gold/50 overflow-hidden bg-white flex items-center justify-center p-2 shadow-sm">
                        <img src={newSkill.icon} alt="Preview" className="w-full h-full object-contain" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="pt-4">
                  <button type="submit" className="w-full bg-luxury-gold hover:bg-rich-gold text-deep-charcoal font-bold py-3.5 rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-colors text-lg">
                    Add Badge
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

export default Skills;
