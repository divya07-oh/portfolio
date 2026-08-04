import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';

const About = () => {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('portfolio_profile_image');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem('portfolio_profile_image', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const slidingCards = [
    {
      title: "👋 Who I Am",
      content: (
        <ul className="space-y-2 text-sm">
          <li><span className="font-bold text-luxury-gold">Name:</span> <span className="text-soft-ivory/90">Divya Venkatesan</span></li>
          <li><span className="font-bold text-luxury-gold">Role:</span> <span className="text-soft-ivory/90">Full-Stack Developer</span></li>
        </ul>
      )
    },
    {
      title: "🎓 Education",
      content: (
        <ul className="space-y-2 text-sm">
          <li><span className="font-bold text-luxury-gold">Degree:</span> <span className="text-soft-ivory/90">B.E. Computer Science Engineering</span></li>
          <li><span className="font-bold text-luxury-gold">University:</span> <span className="text-soft-ivory/90">Jaya Engineering College, Anna University</span></li>
          <li><span className="font-bold text-luxury-gold">Year:</span> <span className="text-soft-ivory/90">3rd Year</span></li>
        </ul>
      )
    },
    {
      title: "💻 Tech Focus",
      content: (
        <ul className="space-y-2 text-sm list-disc list-inside text-soft-ivory/90">
          <li>MERN Stack Development</li>
          <li>Responsive Web Applications</li>
          <li>REST API Development</li>
          <li>Modern UI Development</li>
        </ul>
      )
    },
    {
      title: "🎯 Career Goal",
      content: (
        <p className="text-sm text-soft-ivory/90 leading-relaxed">
          To become a skilled Full-Stack Software Engineer by building scalable, user-centric applications and continuously learning modern technologies.
        </p>
      )
    },
    {
      title: "⚡ Interests",
      content: (
        <ul className="space-y-1 text-sm list-disc list-inside text-soft-ivory/90">
          <li>Full-Stack Development</li>
          <li>Frontend Design</li>
          <li>Backend Development</li>
          <li>Problem Solving</li>
          <li>Open Source Learning</li>
          <li>Building Real-World Projects</li>
        </ul>
      )
    }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-soft-ivory mb-4">About Me</h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto rounded-full shadow-[0_0_10px_rgba(212,175,55,0.6)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center glass-card p-8 lg:p-12">
          
          {/* Left: Avatar/Illustration with Upload */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className={`relative ${!profileImage ? 'group cursor-pointer' : ''} w-full max-w-[280px] aspect-square`} onClick={!profileImage ? triggerFileInput : undefined}>
              <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                {/* Decorative backgrounds */}
                <div className="absolute inset-0 bg-emerald-600/20 rounded-full transform -translate-x-4 translate-y-4 backdrop-blur-sm transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-emerald-500/30"></div>
                <div className="absolute inset-0 border-2 border-luxury-gold/50 rounded-full transform translate-x-4 -translate-y-4 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:border-luxury-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"></div>
                
                {/* Avatar Image Frame */}
                <div className="absolute inset-0 bg-black/60 rounded-full overflow-hidden border border-emerald-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)] backdrop-blur-md group-hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all">
                  
                  {profileImage ? (
                    <motion.img 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      transition={{ duration: 0.5 }}
                      src={profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg className="w-1/2 h-1/2 text-emerald-500/40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                  
                  {/* Upload Overlay (Only show if no image uploaded) */}
                  {!profileImage && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-soft-ivory">
                      <Upload size={32} className="mb-2 text-luxury-gold" />
                      <span className="font-medium">Upload Image</span>
                    </div>
                  )}
                </div>
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/png, image/jpeg, image/jpg, image/webp" 
                onChange={handleImageUpload} 
              />
            </div>
          </motion.div>

          {/* Right: Text and Sliding Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 space-y-8 overflow-hidden"
          >
            <div>
              <p className="text-soft-ivory/90 leading-relaxed text-lg italic border-l-4 border-luxury-gold pl-6 py-2 bg-emerald-950/20 rounded-r-xl shadow-sm">
                "Building modern web applications with clean code, intuitive user experiences, and scalable solutions. Passionate about learning, creating, and continuously improving as a developer."
              </p>
            </div>

            {/* Horizontal Sliding Cards Container */}
            <div className="relative w-full">
              {/* Fade masks for edges */}
              <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#0d3f2c] to-transparent z-10 pointer-events-none rounded-l-xl"></div>
              <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#0d3f2c] to-transparent z-10 pointer-events-none rounded-r-xl flex items-center justify-end pr-2 text-luxury-gold/50 animate-pulse">
                <span className="text-xs font-bold tracking-widest rotate-90 transform origin-right translate-x-2">SWIPE</span>
              </div>

              <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 px-6 scrollbar-hide -mx-6">
                {slidingCards.map((card, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="snap-center shrink-0 w-72 sm:w-80 h-48 bg-black/40 backdrop-blur-md rounded-2xl border border-emerald-500/30 p-6 flex flex-col hover:border-luxury-gold hover:shadow-[0_10px_20px_rgba(212,175,55,0.15)] transition-all group"
                  >
                    <h3 className="text-xl font-heading font-bold text-emerald-300 mb-4 group-hover:text-emerald-200 transition-colors">
                      {card.title}
                    </h3>
                    <div className="flex-1 overflow-y-auto scrollbar-hide text-soft-ivory/80">
                      {card.content}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
      
      {/* Hide scrollbar styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default About;
