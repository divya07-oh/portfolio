import { motion } from 'framer-motion';

export default function AmbientBackground() {
  // Generate a static array of random positions for the particles to prevent hydration mismatches or constant recalculations
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1, // 1px to 4px
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 20, // 20s to 40s
    delay: Math.random() * -20, // Start at different points in the animation loop
  }));

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#0B0B0B]">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            opacity: 0.05, // Extremely subtle
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
