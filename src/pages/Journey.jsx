import { motion } from 'framer-motion';

export default function Journey() {
  const timeline = [
    {
      year: '2024',
      title: 'Foundations',
      points: [
        'Started Computer Science Engineering at Jaya Engineering College.',
        'Built foundations in C, C++, Java, and Python.',
      ],
    },
    {
      year: '2025',
      title: 'Frontend Development',
      points: [
        'Learned HTML, CSS, JavaScript, React.js, and Tailwind CSS.',
        'Built modern, responsive frontend applications.',
      ],
    },
    {
      year: '2026',
      title: 'Full-Stack & Advanced Tech',
      points: [
        'Expanded into full-stack development using Node.js, Express.js, and MongoDB.',
        'Built Nexus, Talent Matrix, Smart Queue System, and Daily Planner.',
        'Started exploring Web2, Data Science, and emerging technologies.',
      ],
    },
    {
      year: '2027',
      title: 'Deepening Expertise',
      points: [
        'Plan to deepen expertise in machine learning, backend development, and scalable software systems.',
        'Seek internships and open-source contributions.',
      ],
    },
    {
      year: '2028',
      title: 'Professional Career',
      points: [
        'Graduate as a Computer Science Engineer and begin a professional software engineering career.',
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 relative bg-[#080808] min-h-[calc(100vh-100px)] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Learning Journey</h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

        <div className="relative">
          {/* Animated Central Gold Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent origin-top" 
          />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } items-start md:items-center`}
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="absolute left-0 md:left-1/2 transform -translate-x-[4px] md:-translate-x-1/2 mt-6 md:mt-0 w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10" 
                  />

                  <div className={`ml-8 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                    <div className="bg-[#111111] p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-colors duration-300 relative group">
                      <span className="text-5xl font-bold text-[#FFFFFF]/5 absolute top-4 right-4 pointer-events-none group-hover:text-[#D4AF37]/10 transition-colors duration-500">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-semibold text-[#D4AF37] mb-4 relative z-10">{item.year}</h3>
                      <ul className={`space-y-3 relative z-10 text-[#A0A0A0] ${!isEven && 'md:text-right text-left'}`}>
                        {item.points.map((point, i) => (
                          <li key={i} className="leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
