import { motion } from 'framer-motion';
import { SectionTitle } from '../SectionTitle';
import { ExternalLink } from 'lucide-react';

export const DeploymentsSection = ({ deployments }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="deployments" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle title="Deployments" centered={true} />

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {deployments.map((deployment, index) => (
              <motion.div
                key={deployment.id}
                variants={itemVariants}
                className="group p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex-1 group-hover:text-cyan-500 transition-colors">
                    {deployment.title}
                  </h3>
                  <motion.a
                    href={deployment.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-2 p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-600 dark:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {deployment.description}
                </p>

                <motion.a
                  href={deployment.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-cyan-600 dark:text-cyan-400 font-medium text-sm hover:text-cyan-500 transition-colors"
                >
                  View Deployment
                  <ExternalLink size={14} className="ml-2" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
