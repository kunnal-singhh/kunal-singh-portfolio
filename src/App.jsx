import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { portfolioData } from './data/portfolioData';
import { useDarkMode } from './hooks/useDarkMode';

import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, toggleTheme] = useDarkMode();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{portfolioData.personal.name} | {portfolioData.personal.role}</title>
        <meta name="description" content={portfolioData.personal.bio} />
        <meta property="og:title" content={`${portfolioData.personal.name} - Portfolio`} />
        <meta property="og:description" content={portfolioData.personal.bio} />
        <meta property="og:type" content="website" />
      </Helmet>

      {loading && <PageLoader onComplete={() => setLoading(false)} />}

      <div className="relative min-h-screen">
        <CustomCursor />
        <ScrollProgressBar />
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        <main>
          <HeroSection personal={portfolioData.personal} />
          <AboutSection
            personal={portfolioData.personal}
            skills={portfolioData.skills}
            certifications={portfolioData.certifications}
          />
          <SkillsSection skillsGrid={portfolioData.skillsGrid} />
          <ProjectsSection
            projects={portfolioData.projects}
            onSelectProject={(project) => setSelectedProject(project)}
          />
          <ExperienceSection experience={portfolioData.experience} />
          <TestimonialsSection testimonials={portfolioData.testimonials} />
          <ContactSection personal={portfolioData.personal} contact={portfolioData.contact} />
        </main>

        <Footer personal={portfolioData.personal} />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </HelmetProvider>
  );
}
