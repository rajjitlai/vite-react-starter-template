import React from 'react'
import "./global.css"

const App = () => {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <h1 className="hero-title">
          Modern React <br />
          <span className="gradient-text">Mastery Starter</span>
        </h1>
        <p className="hero-subtitle">
          Experience the lightning-fast performance of Vite 8 paired with the 
          breakthrough power of React 19. A template meticulously crafted for 
          developers who demand excellence.
        </p>
        
        <div className="cta-group">
          <a href="#" className="btn btn-primary">Get Started Now</a>
          <a href="#" className="btn btn-secondary">View Documentation</a>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Vite 8 Speed</h3>
            <p>Next-generation dev server with instant HMR and optimized build pipelines for peak performance.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚛️</div>
            <h3>React 19</h3>
            <p>Harness the power of React Server Components, Actions, and the new compiler hooks out of the box.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Premium Design</h3>
            <p>Sleek, responsive, and accessible UI system built with modern CSS variables and glassmorphism.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App