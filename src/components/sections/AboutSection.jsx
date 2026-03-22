import { motion } from 'framer-motion';
import { SectionTitle } from '../SectionTitle';

export const AboutSection = ({ about, location }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-24 bg-black relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle title="About Me" centered={true} />

          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {about}
              </p>
              
              <motion.div
                variants={itemVariants}
                className="pt-8 border-t border-cyan-500/20"
              >
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">Location</p>
                    <p className="text-lg text-gray-200 mt-2">{location}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">Status</p>
                    <p className="text-lg text-gray-200 mt-2">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse-glow" />
                        Available for new opportunities
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side - Highlights */}
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {[
                { title: 'Full Stack Development', desc: 'MERN stack expertise with modern frameworks' },
                { title: 'Mobile Apps', desc: 'Cross-platform development with Flutter' },
                { title: 'Interactive Web', desc: '3D experiences with Three.js and WebGL' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 8, boxShadow: '0 0 25px rgba(34, 211, 238, 0.15)' }}
                  className="p-6 rounded-xl bg-black border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="font-semibold text-gray-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
