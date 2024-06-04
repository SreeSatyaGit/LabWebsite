import React from 'react';
import './App.css';

function App() {

  const handleBrandClick = () => {
    // Define what happens when the brand is clicked
    alert('Vanaja Lab button clicked!');
    // You can also navigate to another page or perform other actions here
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
        <button className="navbar-brand" onClick={handleBrandClick}>
            <span className="highlight">Vanaja Lab</span>
          </button>
          <div className="navbar-links">
            <a href="./home">About</a>
            <a href="./research">Research</a>
            <a href="#resources">People</a>
            <a href="#company">Tools</a>
            <a href="#contact">Contact Us</a>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>BIOiSIM<sup>®</sup></h1>
          <h2>The <span className="highlight">‘credit score’</span> for drug development</h2>
          <p>
            Our “hybrid AI” platform, BIOiSIM<sup>®</sup>, and its groundbreaking Translational Index™
            technology, are helping de-risk drug design and development – bringing more successful
            therapies from the scientist’s bench to the patient’s bedside.
          </p>
          <button className="demo-button">Book Demo</button>
        </section>
        <section className="benefits">
          <h2>Benefits</h2>
          <p className="benefits-intro">
            Meaningful outcomes powered by BIOiSIM
            <br />
            VeriSIM Life’s first-in-class, drug decision engine, BIOiSIM, offers actionable insights of unprecedented value to the drug development industry.
          </p>
          <div className="benefits-cards">
            <div className="benefit-card">
              <img src="path/to/icon1.png" alt="Increase clinical success" />
              <h3>Increase clinical success, boost translatability</h3>
              <p>
                Avoid the design and pursuit of dead end candidates. Guide decision-making with BIOiSIM’s Translational Index™, which advances only the most promising drug candidates through R&D to investigational new drug (IND) application.
              </p>
            </div>
            <div className="benefit-card">
              <img src="path/to/icon2.png" alt="Earlier insights" />
              <h3>Earlier insights, faster drug R&D</h3>
              <p>
                BIOiSIM's integrated drug design and development platform identifies new drug candidates with clinical success designed in from day one, while flexibly adapting to address a range of translation challenges – reducing the time it takes to get to IND status by an average of 2.5 years.
              </p>
            </div>
            <div className="benefit-card">
              <img src="path/to/icon3.png" alt="Reduce waste" />
              <h3>Reduce waste, lower costs</h3>
              <p>
                With greater accuracy and scalability, BIOiSIM’s robust, hybrid AI/ML engine reduces the need for unnecessary in vivo experimentation, representing a $3 million cost savings when compared to conventional testing.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
