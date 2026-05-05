import Navbar from './components/Navbar';
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
      </main>
    </div>
  );
}

export default App;



