import { motion } from 'framer-motion';

export const SectionTitle = ({ title, subtitle, centered = true }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
      className={centered ? 'text-center' : ''}
    >
      <motion.div
        variants={itemVariants}
        className="relative inline-block"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full origin-left" 
        />
      </motion.div>
      
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mt-4"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
