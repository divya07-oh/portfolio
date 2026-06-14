import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      className="py-16 md:py-24 relative min-h-[calc(100vh-100px)] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <p className="text-[#A0A0A0] mt-6 max-w-2xl mx-auto text-lg">
            I am always open to discussing technology, innovative ideas, collaborations, and new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#FFFFFF]">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:divyavenkatesan239@gmail.com" className="group flex items-center p-4 bg-[#111111] border border-white/5 hover:border-[#D4AF37]/50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#080808] border border-[#D4AF37]/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-[#D4AF37]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#A0A0A0] mb-1">Email</p>
                    <p className="text-[#FFFFFF] text-sm md:text-base break-all group-hover:text-[#D4AF37] transition-colors">divyavenkatesan239@gmail.com</p>
                  </div>
                </a>

                <a href="https://github.com/divya07-oh" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 bg-[#111111] border border-white/5 hover:border-[#D4AF37]/50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#080808] border border-[#D4AF37]/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <FaGithub className="text-[#D4AF37]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#A0A0A0] mb-1">GitHub</p>
                    <p className="text-[#FFFFFF] text-sm md:text-base break-all group-hover:text-[#D4AF37] transition-colors">github.com/divya07-oh</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/divya-v-3b7896337" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 bg-[#111111] border border-white/5 hover:border-[#D4AF37]/50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-[#080808] border border-[#D4AF37]/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <FaLinkedin className="text-[#D4AF37]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#A0A0A0] mb-1">LinkedIn</p>
                    <p className="text-[#FFFFFF] text-sm md:text-base break-all group-hover:text-[#D4AF37] transition-colors">linkedin.com/in/divya-v-3b7896337</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 bg-[#111111] p-8 md:p-10 border border-white/5 relative"
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-[#A0A0A0] uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#080808] border border-white/10 px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-[#A0A0A0] uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#080808] border border-white/10 px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-[#A0A0A0] uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full bg-[#080808] border border-white/10 px-4 py-3 text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  placeholder="How can we work together?"
                ></textarea>
              </div>
              <button
                type="button"
                className="group relative inline-flex items-center justify-center w-full px-8 py-4 text-sm font-medium tracking-wide text-black bg-[#D4AF37] overflow-hidden transition-all duration-300 hover:bg-[#F3E5AB]"
              >
                <span className="mr-2">Send Message</span>
                <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
