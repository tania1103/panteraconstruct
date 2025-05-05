import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1>Construcții de calitate pentru casa ta</h1>
          <p>Expertiza și profesionalism în construcții civile și industriale</p>
          <div className="hero-buttons">
            <button className="btn primary-btn">Serviciile noastre</button>
            <button className="btn secondary-btn">Contactează-ne</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;