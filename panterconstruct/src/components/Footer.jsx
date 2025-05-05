import React from 'react';
import './Footer.css';
import logo from '../assets/logo.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <div className="footer-logo">
                            <img src={logo} alt="Pantera Construct Logo" />
                        </div>
                        <p>Pantera Construct - Soluții complete în construcții civile și industriale</p>
                        <div className="social-icons">
                            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="footer-links">
                        <div className="footer-column">
                            <h3>Companie</h3>
                            <ul>
                                <li><a href="#about">Despre noi</a></li>
                                <li><a href="#services">Servicii</a></li>
                                <li><a href="#features">Proiecte</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-column">
                            <h3>Servicii</h3>
                            <ul>
                                <li><a href="#civil-construction">Construcții civile</a></li>
                                <li><a href="#industrial-construction">Construcții industriale</a></li>
                                <li><a href="#renovations">Renovări</a></li>
                                <li><a href="#design">Proiectare</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-column">
                            <h3>Newsletter</h3>
                            <p>Abonează-te pentru a primi noutăți</p>
                            <form className="newsletter-form">
                                <input type="email" placeholder="Email-ul tău" required />
                                <button type="submit">Abonare</button>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Pantera Construct. Toate drepturile rezervate.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;