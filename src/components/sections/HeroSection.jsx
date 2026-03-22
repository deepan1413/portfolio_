import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

export const HeroSection = ({ name, role, tagline, contact }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
  };

  const floatingVariants = {
    initial: { y: 0, x: 0 },
    animate: {
      y: [-30, 30, -30],
      x: [-10, 10, -10],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const greetingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'backOut' }
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-72 h-72 bg-cya-600 rounded-full mix-blend-screen filter blur-3xl opacity-5"
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 6, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting with emoji */}
          <motion.div
            variants={greetingVariants}
            className="mb-8"
          >
            <p className="text-xl text-gray-400 font-medium mt-2">Hallo, I'm</p>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-8xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tighter"
          >
            {name}
          </motion.h1>

          {/* Role with cyan accent */}
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold mb-6"
          >
            <span className="text-gray-400">Specialized in </span>
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              {role}
            </span>
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.08, boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-dark-950 font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              View My Work
              <FaArrowRight size={20} />
            </motion.button>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.08, borderColor: '#22d3ee' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-gray-700 text-gray-300 font-semibold text-lg hover:border-cyan-500 transition-all duration-300"
            >
              Download Resume
              <FaDownload size={20} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex justify-center"
          >
            <div className="text-cyan-400 opacity-60 hover:opacity-100 transition-opacity">
              <svg className="w-7 h-7 animate-pulse-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative stars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
};
