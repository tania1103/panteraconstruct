import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Pantera Construct Logo" />
        </div>
        <nav className={`navigation ${mobileMenuOpen ? 'mobile-menu-active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Acasă</a></li>
            <li><a href="#features" onClick={() => setMobileMenuOpen(false)}>Servicii</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>Despre noi</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Portofoliu</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
        <div className={`mobile-menu-button ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;