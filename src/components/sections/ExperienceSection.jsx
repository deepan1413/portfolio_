import { motion } from 'framer-motion';
import { SectionTitle } from '../SectionTitle';

export const ExperienceSection = ({ experience = [] }) => {
  if (!experience.length) return null;

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
    <section id="experience" className="py-24 bg-black relative">
      {/* Decorative background */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle title="Experience" centered={true} />

          <div className="mt-16 max-w-4xl mx-auto space-y-8">
            {experience.map((job) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                whileHover={{ boxShadow: '0 0 25px rgba(34, 211, 238, 0.15)' }}
                className="p-8 rounded-xl bg-black border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-100">{job.role}</h3>
                    <p className="text-lg mt-1 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent inline-block">
                      {job.company}
                    </p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-gray-200 font-medium">{job.period}</p>
                    <p className="text-sm text-gray-400 mt-1">
                      {job.type} · {job.location}
                    </p>
                  </div>
                </div>

                {job.summary && (
                  <p className="text-gray-300 leading-relaxed mt-6 pt-6 border-t border-cyan-500/20">
                    {job.summary}
                  </p>
                )}

                <ul className="mt-6 space-y-3">
                  {job.bullets.map((point, i) => (
                    <li key={i} className="flex gap-3 text-gray-400 leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-8">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};