import { useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, MapPin, Calendar, Upload, Trash2 } from 'lucide-react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function About() {
  const [profileImage, setProfileImage] = useLocalStorage('portfolio_profile_img', null);
  const fileInputRef = useRef(null);

  const educationDetails = [
    {
      icon: <Building2 className="text-[#D4AF37]" size={24} />,
      label: 'College',
      value: 'Jaya Engineering College',
    },
    {
      icon: <MapPin className="text-[#D4AF37]" size={24} />,
      label: 'University',
      value: 'Anna University',
    },
    {
      icon: <GraduationCap className="text-[#D4AF37]" size={24} />,
      label: 'Degree',
      value: 'B.E. Computer Science Engineering',
    },
    {
      icon: <Calendar className="text-[#D4AF37]" size={24} />,
      label: 'Year',
      value: 'Third Year',
    },
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (e) => {
    e.stopPropagation();
    setProfileImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="py-16 md:py-24 relative min-h-[calc(100vh-100px)] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="mb-16 flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Side: Profile Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative w-full aspect-square max-w-md mx-auto lg:mx-0 group cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="absolute inset-0 border border-[#D4AF37]/30 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="absolute inset-0 bg-[#111111] overflow-hidden flex items-center justify-center border border-white/5 relative z-10">
              
              <input 
                type="file" 
                accept="image/jpeg, image/png, image/webp" 
                className="hidden" 
                ref={fileInputRef}
                onChange={handleImageUpload}
              />

              {profileImage ? (
                <>
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  {/* Hover Overlay for remove */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <p className="text-[#FFFFFF] mb-4 font-medium tracking-wide">Change Photo</p>
                    <button 
                      onClick={removeImage}
                      className="p-3 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500/40 transition-colors"
                      title="Remove Photo"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center text-[#A0A0A0] p-8 flex flex-col items-center group-hover:text-[#D4AF37] transition-colors duration-300">
                  <Upload size={32} className="mb-4" />
                  <p className="mb-2 uppercase tracking-widest text-xs">Click to Upload Profile Photo</p>
                  <p className="text-xs opacity-50">JPG, PNG, WEBP</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 space-y-10 text-[#A0A0A0] text-lg leading-relaxed"
          >
            <div className="space-y-6">
              <p>
                I am a third-year B.E. Computer Science Engineering student at Jaya Engineering College, affiliated with Anna University.
              </p>
              <p>
                My interests lie in <span className="text-[#FFFFFF] font-medium">Full-Stack Development, Artificial Intelligence, Data Science, Blockchain, and Web3 technologies</span>.
              </p>
              <p>
                I enjoy transforming ideas into impactful digital solutions through practical software development and continuous learning. My approach combines strong theoretical foundations with hands-on technical execution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {educationDetails.map((item, index) => (
                <div
                  key={item.label}
                  className="group relative bg-[#111111] p-6 border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#0B0B0B] border border-[#D4AF37]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-[#A0A0A0] mb-1 tracking-wider uppercase">{item.label}</p>
                      <p className="text-[#FFFFFF] font-medium">{item.value}</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
