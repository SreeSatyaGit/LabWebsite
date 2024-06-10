import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import insulin from './images/insulin.png'; 
import Publications from './Publications.js';  

function App() {
  const handleBrandClick = () => {
    alert('Vanaja Lab button clicked!');
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <button className="navbar-brand" onClick={handleBrandClick}>
              <span className="highlight">Vanaja Lab</span>
            </button>
            <div className="navbar-links">
              <Link to="/" className="active">ABOUT</Link>
              <Link to="/publications">Publications</Link>
              <Link to="/people">PEOPLE</Link>
              <Link to="/tools">TOOLS</Link>
              <Link to="/contact">CONTACT US</Link>
            </div> 
          </nav>
        </header>
        <main>
          <section className="hero">
            <img src={insulin} alt="Hero" className="hero-image" />
          </section>
          <section className="benefits">
            <h2>Areas of Research</h2>
            <div className="benefits-cards">
              <div className="benefit-card">
                <img src="path/to/icon1.png" alt="Increase clinical success" />
                <h3>Systems and Computational Biology</h3>
                <p>
                  Avoid the design and pursuit of dead end candidates. Guide decision-making with BIOiSIM’s Translational Index™, which advances only the most promising drug candidates through R&D to investigational new drug (IND) application.
                </p>
              </div>
              <div className="benefit-card">
                <img src="path/to/icon2.png" alt="Earlier insights" />
                <h3>Mathematical Modeling of Signaling Networks</h3>
                <p>
                  BIOiSIM's integrated drug design and development platform identifies new drug candidates with clinical success designed in from day one, while flexibly adapting to address a range of translation challenges – reducing the time it takes to get to IND status by an average of 2.5 years.
                </p>
              </div>
              <div className="benefit-card">
                <img src="path/to/icon3.png" alt="Reduce waste" />
                <h3>Cancer and Diabetes Signal Transduction</h3>
                <p>
                  With greater accuracy and scalability, BIOiSIM’s robust, hybrid AI/ML engine reduces the need for unnecessary in vivo experimentation, representing a $3 million cost savings when compared to conventional testing.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Routes>
          <Route path="/publications" element={<Publications />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
