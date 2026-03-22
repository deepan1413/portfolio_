import React from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Box, Typography } from '@mui/material';
// We'll use actual brand icons for each technology

// Technology stacks organized by category with real brand icons
const techStacks = {
  Frontend: [
    {
      name: 'Flutter (BLoC)',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
          alt="Flutter"
          width={32}
          height={32}
        />
      )
    },
    {
      name: 'React.js',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React.js"
          width={32}
          height={32}
        />
      )
    },
    {
      name: 'Three.js',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
          alt="Three.js"
          width={32}
          height={32}
          style={{ filter: 'invert(1)' }}
        />
      )
    },
    {
      name: 'Material UI',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
          alt="Material UI"
          width={32}
          height={32}
        />
      )
    },
  ],
  Backend: [
    {
      name: 'Node.js',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          width={32}
          height={32}
        />
      )
    },
    {
      name: 'Firebase',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
          alt="Firebase"
          width={32}
          height={32}
        />
      )
    },
     {
      name: 'Socket.io',
      icon: (
        <img
          src="
            https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original-wordmark.svg"
          alt="Socket.io"
          width={32}
          height={32}
        />
      )
    },
    
    {
      name: 'MongoDB',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          alt="MongoDB"
          width={32}
          height={32}
        />
      )
    },
    {
      name: 'REST APIs',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          alt="REST APIs"
          width={32}
          height={32}
          style={{ filter: 'invert(1)' }}
        />
      )
    },
  ],
  Languages: [
    {
      name: 'Dart',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
          alt="Dart"
          width={32}
          height={32}
        />
      )
    },
    {
      name: 'Python',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="Python"
          width={32}
          height={32}
        />
      )
    },
    {
      name: 'Java',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          alt="Java"
          width={32}
          height={32}
        />
      )
    },
    {
      name: 'JavaScript',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          width={32}
          height={32}
        />
      )
    },
    {
      name: 'C',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
          alt="C"
          width={32}
          height={32}
        />
      )
    },
  ],
  IoT: [
    {
      name: 'ESP32',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          alt="ESP32"
          width={32}
          height={32}
        />
      )
    },
    {
      name: 'Arduino',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
          alt="Arduino"
          width={32}
          height={32}
        />
      )
    },
  ],
  Tools: [
    {
      name: 'VS Code',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          alt="VS Code"
          width={32}
          height={32}
        />
      )
    },
    {
      name: 'Android Studio',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
          alt="Android Studio"
          width={32}
          height={32}
        />
      )
    },
    {
      name: 'Git',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="Git"
          width={32}
          height={32}
        />
      )
    },
    {
      name: 'GitHub',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
          width={32}
          height={32}
          style={{ filter: 'invert(1)' }}
        />
      )
    },
    {
      name: 'Postman',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
          alt="Postman"
          width={32}
          height={32}
        />
      )
    },
    {
      name: 'Figma',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          alt="Figma"
          width={32}
          height={32}
        />
      )
    },
    {
      name: 'Blender',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"
          alt="Blender"
          width={32}
          height={32}
          style={{ filter: 'invert(1)' }}
        />
      )
    },
  ],
};

function TechItem({ name, icon, index }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut"
      }}
      whileHover={{
        y: -2,
        borderColor: 'rgba(34, 211, 238, 0.4)',
        boxShadow: '0 4px 20px rgba(34, 211, 238, 0.15)',
        transition: { duration: 0.15 }
      }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px',
        cursor: 'pointer',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.2s ease',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          transition: 'transform 0.15s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: 1.4,
          transition: 'color 0.15s ease',
          '&:hover': {
            color: 'white',
          },
        }}
      >
        {name}
      </Typography>
    </motion.div>
  );
}

function TechCategory({ title, technologies, index }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <Box
      ref={ref}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '200px 1fr' },
        gap: { xs: 2, md: 6 },
        mb: 8,
        alignItems: 'start',
      }}
    >
      {/* Category Title - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 600,
            letterSpacing: '0.5px',
            mb: { xs: 2, md: 0 },
          }}
        >
          {title}
        </Typography>
      </motion.div>

      {/* Technologies - Right Side in Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)'
          },
          gap: 2,
        }}
      >
        {technologies.map((tech, techIndex) => (
          <TechItem
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            index={techIndex}
          />
        ))}
      </Box>
    </Box>
  );
}


export default function SkillsSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Scroll-based animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <Box
      ref={ref}
      id='skills'
      sx={{
        backgroundColor: '#000000',
        position: 'relative',
        color: 'white',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />
      </div>

      <Box sx={{ maxWidth: '1000px', mx: 'auto', px: { xs: 3, md: 4 }, pt: 12, pb: 12, position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                background: 'linear-gradient(to right, #06b6d4, #22d3ee)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 2,
              }}
            >
              Technical Expertise
            </Typography>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                height: '4px',
                background: 'linear-gradient(90deg, #06b6d4, #22d3ee)',
                borderRadius: '2px',
                width: '100px',
                margin: '0 auto 2rem',
              }}
            />
            <Typography variant="body1" sx={{ color: 'gray' }}>
              Crafting digital experiences with cutting-edge technologies
            </Typography>
          </motion.div>
        </Box>

        {/* Tech Stack Categories */}
        <Box>
          {Object.entries(techStacks).map(([category, technologies], index) => (
            <TechCategory
              key={category}
              title={category}
              technologies={technologies}
              index={index}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}