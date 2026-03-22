import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

export const ProjectCard = ({ project, index = 0 }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-black border border-cyan-500/30 hover:border-cyan-500/70 transition-all duration-500 h-full flex flex-col"
    >
      {/* Animated background gradient on hover */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-cyan-600/15 via-transparent to-cyan-400/5"
      />
      
      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />

      <div className="relative p-8 flex flex-col h-full">
        {/* Project Number */}
        <div className="absolute top-6 right-6 text-6xl font-bold text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors duration-300">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Status Badge */}
        {project.status && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cyan-500/25 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-500/60 w-fit"
          >
            {project.status}
          </motion.div>
        )}

        {/* Title with smooth animation */}
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl lg:text-3xl font-bold text-white mb-4 mt-2 group-hover:text-cyan-300 transition-colors duration-300"
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 mb-6 leading-relaxed flex-grow"
        >
          {project.description}
        </motion.p>

        {/* Tech Tags with staggered animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {project.tech.map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 211, 238, 0.25)' }}
              className="px-3 py-1.5 rounded-md bg-cyan-500/15 text-xs font-semibold text-cyan-300 border border-cyan-500/40 transition-all duration-300 hover:border-cyan-500/70 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-6 origin-left"
        />

        {/* Links */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-3 mt-auto"
        >
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black border border-cyan-500/50 text-cyan-300 hover:bg-black hover:border-cyan-500/80 transition-all font-semibold text-sm"
            >
              <FaCode size={16} />
              Code
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)' }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 text-black hover:shadow-xl hover:shadow-cyan-500/50 transition-all font-bold text-sm ml-auto"
            >
              <FaExternalLinkAlt size={16} />
              Live
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
