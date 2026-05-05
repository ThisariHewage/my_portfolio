import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import './Skills.css';

const Skills = () => {
  const { isDark } = useTheme();

  const skillColors = {
    'HTML5': '#E34F26',
    'CSS3': '#1572B6',
    'JavaScript': '#F7DF1E',
    'React.js': '#61DAFB',
    'Vite': '#646CFF',
    'Tailwind CSS': '#06B6D4',
    'C Programming': '#A8B9CC',
    'Java': '#007396',
    'Python': '#3776AB',
    'Node.js': '#339933',
    'Express': '#888888',
    'MySQL': '#4479A1',
    'MongoDB': '#47A248',
    'Spring Boot': '#6DB33F',
    'Git': '#F05032',
    'GitHub': '#181717',
    'VS Code': '#007ACC',
    'Postman': '#FF6C37',
    'Agile/Scrum': '#00A8E8',
    'Figma': '#F24E1E',
  };

  const skillIcons = {
    'HTML5': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 18-8-4-8 4 8-18z"></path></svg>,
    'CSS3': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
    'JavaScript': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6"></path><path d="M8 6l-6 6 6 6"></path></svg>,
    'React.js': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M12 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>,
    'Vite': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>,
    'Tailwind CSS': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>,
    'C Programming': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>,
    'Java': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>,
    'Python': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9V2m0 11v9m5-13a5 5 0 0 1 1 9.9M7 7a5 5 0 0 0-1 9.9"></path></svg>,
    'Node.js': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>,
    'Express': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
    'MySQL': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
    'MongoDB': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c-1.1 0-2.22.18-3.28.52C7.12 4.05 6 5.3 6 6.75c0 1.2.7 2.1 1.63 2.7.27.18.52.4.74.65.22.25.4.52.53.81.13.3.2.62.2.94v8.15c0 .55.45 1 1 1s1-.45 1-1V12c0-.32.07-.64.2-.94.13-.29.31-.56.53-.81.22-.25.47-.47.74-.65.93-.6 1.63-1.5 1.63-2.7 0-1.45-1.12-2.7-2.72-3.23C14.22 3.18 13.1 3 12 3z"></path></svg>,
    'Spring Boot': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>,
    'Git': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 19V5"></path><path d="m19 12-7 7-7-7"></path></svg>,
    'GitHub': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>,
    'VS Code': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>,
    'Postman': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><path d="M22 2l-7 20-4-9-9-4 20-7z"></path></svg>,
    'Agile/Scrum': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path></svg>,
    'Figma': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>,
  };

  const skillGroups = [
    {
      category: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Vite', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      skills: ['C Programming', 'Java', 'Python', 'Spring Boot', 'Node.js', 'Express', 'MySQL', 'MongoDB']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Agile/Scrum', 'Figma']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">SKILLS</h2>
          <div className="title-line"></div>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <motion.div 
              key={groupIndex} 
              className="skill-category-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              <h3 className="category-title">{group.category}</h3>
              <div className="skills-list">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex} 
                    className="skill-badge"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {skillIcons[skill] && (
                      <span 
                        className="skill-icon"
                        style={{ color: !isDark ? skillColors[skill] : 'inherit' }}
                      >
                        {skillIcons[skill]}
                      </span>
                    )}
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
