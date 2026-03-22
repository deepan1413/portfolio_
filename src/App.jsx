import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { EducationSection } from './components/sections/EducationSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { DeploymentsSection } from './components/sections/DeploymentsSection';
import { ContactSection } from './components/sections/ContactSection';
import { portfolio } from './data/portfolio';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="bg-black text-gray-100 dark:bg-black dark:text-gray-100">
      <Navbar />
      
      <main>
        <HeroSection
          name={portfolio.name}
          role={portfolio.role}
          tagline={portfolio.tagline}
          contact={portfolio.contact}
        />
        
        <AboutSection
          about={portfolio.about}
          location={portfolio.location}
        />
        
        <SkillsSection />
        
        <ProjectsSection projects={portfolio.projects} />
        
        <EducationSection education={portfolio.education} />
        
        <CertificationsSection certifications={portfolio.certifications} />
        
        <DeploymentsSection deployments={portfolio.deployments} />
        
        <ContactSection contact={portfolio.contact} />
      </main>
      
      <Footer contact={portfolio.contact} />
      <Analytics />
    </div>
  );
}

export default App;
