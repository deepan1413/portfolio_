import { motion } from 'framer-motion';
import { SectionTitle } from '../SectionTitle';
import { FaGraduationCap } from 'react-icons/fa';

export const EducationSection = ({ education }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="education" className="py-24 bg-black relative">
      {/* Decorative background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle title="Education" centered={true} />

          <motion.div variants={containerVariants} className="mt-16 space-y-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 10, boxShadow: '0 0 30px rgba(34, 211, 238, 0.15)' }}
                className="relative p-8 rounded-xl bg-black border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 border-4 border-dark-900" />

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/20 border border-cyan-500/40">
                    <FaGraduationCap className="text-cyan-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 mb-3">{edu.school}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <span className="text-sm font-semibold text-cyan-400">
                        {edu.years}
                      </span>
                      {edu.cgpa && (
                        <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold border border-cyan-500/40">
                          CGPA: {edu.cgpa}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
