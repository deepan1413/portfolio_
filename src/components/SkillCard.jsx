import { motion } from 'framer-motion';

export const SkillCard = ({ title, skills }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: '0 0 40px rgba(34, 211, 238, 0.2)' }}
      className="p-8 rounded-xl bg-black border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-cyan-400 mb-6">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 211, 238, 0.2)' }}
            className="px-3 py-2 rounded-lg bg-cyan-500/10 text-sm font-medium text-cyan-300 border border-cyan-500/40 hover:border-cyan-500/70 transition-all duration-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
