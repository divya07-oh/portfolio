import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { heroData } from '../data/portfolioData';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-emerald-400 mb-4">Let's Build Something Amazing Together</h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(212,175,55,0.6)]"></div>
          <p className="text-soft-ivory/80 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-soft-ivory mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a href={"[DIVYAVENKATESAN239@GMAIL.COM]"} className="flex items-center gap-4 text-soft-ivory/70 hover:text-emerald-300 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-black/30 border border-emerald-500/30 flex items-center justify-center text-luxury-gold group-hover:bg-emerald-600/40 group-hover:text-soft-ivory transition-colors shadow-sm group-hover:-translate-y-1 backdrop-blur-sm">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium">{heroData.socialLinks.email.replace('mailto:', '')}</span>
                </a>
                
                <a href={"https://github.com/divya07-oh"} target="_blank" rel="" className="flex items-center gap-4 text-soft-ivory/70 hover:text-emerald-300 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-black/30 border border-emerald-500/30 flex items-center justify-center text-luxury-gold group-hover:bg-emerald-600/40 group-hover:text-soft-ivory transition-colors shadow-sm group-hover:-translate-y-1 backdrop-blur-sm">
                    <FaGithub size={20} />
                  </div>
                  <span className="font-medium">GitHub Profile</span>
                </a>
                
                <a href={"https://www.linkedin.com/in/divya-v-3b7896337/"} target="_blank" rel="" className="flex items-center gap-4 text-soft-ivory/70 hover:text-emerald-300 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-black/30 border border-emerald-500/30 flex items-center justify-center text-luxury-gold group-hover:bg-emerald-600/40 group-hover:text-soft-ivory transition-colors shadow-sm group-hover:-translate-y-1 backdrop-blur-sm">
                    <FaLinkedin size={20} />
                  </div>
                  <span className="font-medium">LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-emerald-200">Divya</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-emerald-500/30 bg-black/40 text-soft-ivory focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-emerald-200">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-emerald-500/30 bg-black/40 text-soft-ivory focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 transition-colors"
                      placeholder={heroData.socialLinks.email.replace('mailto:', '')}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-emerald-200">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-emerald-500/30 bg-black/40 text-soft-ivory focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 transition-colors resize-none"
                    placeholder={`Hello ${heroData.name}, I would like to discuss...`}
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSubmitted 
                      ? 'bg-emerald-500 text-soft-ivory' 
                      : 'bg-luxury-gold hover:bg-rich-gold text-deep-charcoal shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : isSubmitted ? (
                    'Message Sent Successfully!'
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
