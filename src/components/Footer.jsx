import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';

export const Footer = ({ contact }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className="bg-black border-t border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Contact Links */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">Contact</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaEnvelope size={18} />
                <span className="text-sm">{contact.email}</span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaPhone size={18} />
                <span className="text-sm">{contact.phone}</span>
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">Social</h3>
            <div className="flex gap-4">
              <motion.a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/40 border border-cyan-500/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/40 border border-cyan-500/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href={contact.Instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/40 border border-cyan-500/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-8" />

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <p className="text-sm text-gray-400">
            © 2026 Deepan L. All rights reserved. Built with React & Framer Motion.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};
