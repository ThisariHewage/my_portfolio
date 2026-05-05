import Navbar from './components/Navbar';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
// Icons removed to fix white screen crash

import heroPortrait from './assets/thisari-portrait.png';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home" className="hero-section">
          <div className="container hero-container">
            <div className="hero-content">
              <div className="line-decoration"></div>
              <div className="title-group">
                <h1 className="hero-name">Hi, I'm <span className="highlight">Thisari Uresha Dewmini</span></h1>
              </div>
              <div className="divider"></div>
              <p className="subtitle">
                Software Engineering Undergraduate | Full Stack Developer
              </p>

              <div className="hero-actions">
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
              </div>
            </div>

            <div className="hero-image-container">
              <img src={heroPortrait} alt="Thisari Uresha" className="hero-image" />
            </div>
          </div>
        </section>
        <section id="about" className="about-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">ABOUT ME</h2>
              <div className="title-line"></div>
            </div>
            <div className="about-grid">
              <div className="about-main">
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
              </div>

              <div className="about-stats-sidebar">
                <div className="stat-card">
                  <span className="stat-num">01+</span>
                  <span className="stat-label">Years Learning</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num">02+</span>
                  <span className="stat-label">Projects Built</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num">05+</span>
                  <span className="stat-label">Tech Stacks</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Education />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;



