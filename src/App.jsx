import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

import heroPortrait from './assets/thisari-portrait.png';
import './App.css';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="app">
      <ScrollProgress />
      <Navbar />
      <main>
        <section id="home" className="hero-section">
          <div className="container hero-container">
            <motion.div
              className="hero-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >

              <motion.div variants={itemVariants} className="title-group">
                <h1 className="hero-name">Hi, I'm <span className="highlight">Thisari Uresha Dewmini</span></h1>
              </motion.div>
              <motion.div variants={itemVariants} className="divider"></motion.div>
              <motion.p variants={itemVariants} className="subtitle">
                Software Engineering Undergraduate | Full Stack Developer
              </motion.p>

              <motion.div variants={itemVariants} className="hero-actions">
                <a href="https://github.com/ThisariHewage" className="action-btn icon-only">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                <a href="#contact" className="action-btn text-btn">
                  GET IN TOUCH
                </a>
                <a href="/cv.pdf" className="action-btn text-btn with-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  CV
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={heroPortrait} alt="Thisari Uresha" className="hero-image" />
            </motion.div>
          </div>

          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="scroll-text">Scroll down</span>
            <div className="scroll-icon">↓</div>
          </motion.div>
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">ABOUT ME</h2>
              <div className="title-line"></div>
            </motion.div>
            <div className="about-grid">
              <motion.div
                className="about-main"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="lead-text">
                  I am a driven <strong>Software Engineering Undergraduate</strong> with a focus on building high-performance, accessible, and beautiful digital experiences.
                </p>
                <div className="about-bio">
                  <p>
                    My approach to software development combines technical rigor with a strong eye for design. I don't just write code; I craft solutions that solve real-world problems while maintaining clean, efficient, and scalable architectures.
                  </p>
                  <p>
                    Currently, I'm deep-diving into modern full-stack ecosystems, exploring the intersection of robust backend logic and fluid frontend interactions.
                  </p>
                </div>

                <div className="focus-areas">
                  <h3>What I do:</h3>
                  <ul>
                    <li>Full Stack Web Development</li>
                    <li>UI/UX Design Systems</li>
                    <li>Passionate about building user-friendly software</li>
                    <li>Strong in Problem Solving & Agile Practices</li>
                  </ul>
                </div>
              </motion.div>

              <div className="about-stats-sidebar">
                {[
                  { num: '01+', label: 'Years Learning' },
                  { num: '02+', label: 'Projects Built' },
                  { num: '05+', label: 'Tech Stacks' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="stat-card"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <span className="stat-num">{stat.num}</span>
                    <span className="stat-label">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Education />
        <Skills />
        <Projects />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;



