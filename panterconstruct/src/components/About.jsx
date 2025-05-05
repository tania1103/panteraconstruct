import React from 'react';
import './About.css';
import aboutImage from '../assets/about.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="Echipa Pantera Construct" />
          </div>
          <div className="about-text">
            <h2>Despre Pantera Construct</h2>
            <p>Cu o experiență de peste 15 ani în domeniul construcțiilor, Pantera Construct s-a impus ca un lider pe piața construcțiilor din România.</p>
            <p>Misiunea noastră este să oferim clienților noștri soluții de construcție durabile și de înaltă calitate, respectând termenele și bugetele stabilite.</p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-title">Ani de experiență</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">300+</div>
                <div className="stat-title">Proiecte finalizate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-title">Profesioniști</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;