import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const handleNavClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 md:top-8 inset-x-0 z-50 flex justify-center transition-all duration-500 pointer-events-none px-4"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.6)',
        }}
        transition={{ duration: 0.3 }}
        className="relative flex items-center gap-1 md:gap-2 px-2 py-2 rounded-full backdrop-blur-lg border border-gray-700/40 hover:border-gray-600/60 transition-colors pointer-events-auto w-full max-w-fit justify-between shadow-2xl"
      >
        {/* Navigation - Always visible pill style */}
        <div className="flex items-center gap-0.5 sm:gap-2 w-full justify-center">
          {navItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => handleNavClick(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-gray-300 hover:text-white font-medium text-[11px] sm:text-sm transition-all duration-300 hover:bg-gray-800/60"
            >
              <span className="relative">
                {item}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};
