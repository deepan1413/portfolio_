import { Instagram } from "lucide-react";

export const portfolio = {
  name: 'Deepan L',
  role: 'Flutter & MERN Stack Developer',
  tagline: 'Building AI-powered applications, interactive web experiences, and mobile solutions.',
  location: 'Chennai, Tamil Nadu',
  about: "I'm a Computer Science student passionate about building AI-driven tools, interactive web applications, and mobile experiences. I enjoy combining technology with creative design to build products that solve real-world problems.",
  resume: '/resume.pdf',
  
  contact: {
    phone: '+91 95855 82166',
    email: 'deepan14132002@gmail.com',
    github: 'https://github.com/deepan1413',
    linkedin: 'https://www.linkedin.com/in/deepan-l-3aabb425b',
    Instagram: 'https://www.instagram.com/deepan_wolfie/',
  },

  skills: {
    frontend: ['React.js', 'Flutter', 'Three.js', 'Material UI'],
    backend: ['Node.js', 'Firebase', 'socket.io', 'MongoDB', 'REST APIs'],
    languages: ['JavaScript', 'Dart', 'Python', 'Java', 'C'],
    tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Android Studio', 'Figma', 'Blender'],
    iot: ['Arduino', 'ESP32'],
  },

  projects: [
   
    {
      id: 2,
      title: 'Three.js Portfolio',
      description: 'Interactive 3D portfolio themed around "Courage the Cowardly Dog" with immersive 3D navigation. Showcases projects with custom Blender models and smooth GSAP animations for an engaging user experience.',
      tech: ['React.js', 'Three.js', 'GSAP', 'Blender'],
      github: 'https://github.com/deepan1413/newPortfolio',
      live: 'https://deepan.onrender.com',
      image: '/projects/threejs_portfolio.png',
      icon: null,
      link: 'https://deepan.onrender.com',
      category: '',
    },
    {
      id: 3,
      title: 'DevHub',
      description: 'A social networking platform for developers to chat, collaborate, and ask questions. Features categorized group chats for different topics like React, Three.js, and Flutter for focused community-driven discussions.',
      tech: ['React.js', 'Vite', 'Firebase', 'Firestore'],
      github: 'https://github.com/deepan1413/devhub',
      live: 'https://devhub-2hq4.vercel.app/',
      image: '/projects/dev_hub.png',
      icon: null,
      link: 'https://devhub-2hq4.vercel.app/',
      category: '',
    },
    {
      id: 4,
      title: 'SheSOS',
      description: 'A comprehensive women safety app featuring real-time location tracking, instant SOS alerts, volunteer assistance, and emergency contact management for immediate help in critical situations.',
      tech: ['Flutter', 'BLoC', 'Node.js', 'Express.js', 'Socket.io', 'Firebase', 'MongoDB'],
      github: 'https://github.com/deepan1413/she_sos',
      live: null,
      status: 'In Progress',
      image: '/projects/sheSOS.jpg',
      icon: null,
      link: '',
      category: '',
    },
   
    {
      id: 6,
      title: 'Portfolio',
      description: 'A modern, responsive developer portfolio showcasing projects, skills, education, and contact information. Built with React, Tailwind CSS, and Framer Motion with smooth animations and dark mode support.',
      tech: ['React.js', 'Vite', 'TailwindCSS', 'Framer Motion'],
      github: 'https://github.com/deepan1413/portfolio',
      live: 'https://www.deepan.site',
      image: '/projects/portfolio.png',
      icon: null,
      link: 'https://www.deepan.site',
      category: '',
    },
    
 {
      id: 1,
      title: 'Smart Plant Health',
      description: 'Plant disease detection system that uses AI to identify plant diseases and provides treatment suggestions. Detects plant diseases and shows curing tips based on image analysis.',
      tech: ['Flutter', 'Firebase', 'TensorFlow', 'Teachable Machine'],
      github: 'https://github.com/deepan1413/smartPlantHealth',
      live: null,
      image: '',
      icon: null,
      link: '',
      category: '',
    },
     {
      id: 5,
      title: 'VTU Chat',
      description: 'A campus-exclusive social media application for VTU students featuring posts, global chat, personal messaging, group chat, and a lost & found module for campus community engagement.',
      tech: ['Flutter', 'BLoC', 'Node.js', 'Express.js', 'Socket.IO', 'Firebase', 'Firestore'],
      github: 'https://github.com/deepan1413/clg_chat',
      live: null,
      status: 'In Progress',
      image: '',
      icon: null,
      link: '',
      category: '',
    },
  ],

  education: [
    {
      school: 'Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology',
      degree: 'B.Tech Computer Science and Engineering',
      years: '2023 – 2026',
      cgpa: '7.6',
    },{
      school: 'krishnaswamy memorial polytechnic college, cuddalore',
      degree: 'Diploma in Computer Science and Engineering',
      years: '2019 – 2022',
      cgpa: '7.8',
    },
  ],

  certifications: [
    {
      title: 'Python Face Recognition App Certification',
      issuer: 'Certified',
    },
  ],

  deployments: [
    {
      id: 1,
      title: 'Google Play Console Account',
      description: 'Planned deployment of SheSOS and VTU Chat upon completion',
      link: 'https://sites.google.com/view/deepanplayconsole',
    },
    {
      id: 2,
      title: 'Client Project Deployment',
      description: 'Developed and deployed portfolio website for client',
      link: 'https://www.aeshightechcleaningservices.com/',
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      description: 'Modern responsive developer portfolio with projects, skills, and contact information',
      link: 'https://www.deepan.site',
    },
  ],
};
