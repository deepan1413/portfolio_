import { motion } from 'framer-motion';
import { SectionTitle } from '../SectionTitle';
import { FaCheckCircle } from 'react-icons/fa';

export const CertificationsSection = ({ certifications }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="certifications" className="py-24 bg-black relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle title="Certifications" centered={true} />

          <motion.div
            variants={containerVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 0 30px rgba(34, 211, 238, 0.15)' }}
                className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="p-2 rounded-full bg-cyan-500/30 border border-cyan-500/50"
                  >
                    <FaCheckCircle className="text-cyan-400" size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">
                      {cert.title}
                    </h3>
                    {cert.issuer && (
                      <p className="text-sm text-gray-400 mt-1">
                        {cert.issuer}
                      </p>
                    )}
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
