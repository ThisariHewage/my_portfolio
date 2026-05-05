import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import projectImg from '../assets/project-placeholder.jpeg';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectList = [
    {
      title: 'Care4Pets',
      subtitle: 'Pet Store E-commerce Platform',
      description: 'A full-stack pet store e-commerce platform providing a complete online shopping experience. Features product browsing, user authentication, shopping cart management, and order processing.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/ThisariHewage/Care4Pets',
      live: 'https://github.com/ThisariHewage/Care4Pets'
    },
    {
      title: 'Book Fair Stall Reservation',
      subtitle: 'Management System • 2026',
      description: 'A comprehensive system for managing book stall bookings with real-time availability and user dashboard. Designed to streamline the reservation process for large-scale events.',
      tech: ['React', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
      github: 'https://github.com/ThisariHewage/bookfair-stall-reservation-system',
      live: 'https://github.com/ThisariHewage/bookfair-stall-reservation-system'
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectList.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectList.length) % projectList.length);
  };

  const currentProject = projectList[currentIndex];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">PROJECTS</h2>
          <div className="title-line"></div>
        </motion.div>

        <div className="projects-slider-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="featured-project"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="project-visual">
                <img src={projectImg} alt={currentProject.title} className="featured-image" />
              </div>
              <div className="project-info-featured">
                <span className="project-subtitle">{currentProject.subtitle}</span>
                <h3 className="project-title-featured">{currentProject.title}</h3>
                <p className="project-desc-featured">{currentProject.description}</p>
                <div className="project-tech-featured">
                  {currentProject.tech.map((tag, i) => (
                    <span key={i} className="tech-badge-featured">{tag}</span>
                  ))}
                </div>
                <div className="project-actions-featured">
                  <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="projects-bottom-nav">
          <div className="slider-controls">
            <button className="slider-btn" onClick={prevProject} aria-label="Previous Project">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <button className="slider-btn" onClick={nextProject} aria-label="Next Project">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};




export default Projects;
