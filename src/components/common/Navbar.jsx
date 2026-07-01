/* FILE: src/components/common/Navbar.jsx */
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/process', label: 'Process' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo clickable">
            Velora
            <span>Interior Design</span>
          </Link>

          {/* Desktop Links */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.path} className="navbar-link-item">
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => (isActive ? 'active clickable' : 'clickable')}
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="navbar-actions">
            <Button variant="outline" size="sm" href="/contact">
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-nav-toggle clickable" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-Down Overlay Menu */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-links">
          {navLinks.map((link) => (
            <li key={link.path} className="mobile-menu-link-item">
              <NavLink 
                to={link.path} 
                className={({ isActive }) => (isActive ? 'active' : '')}
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-cta">
          <Button variant="primary" size="md" href="/contact" style={{ width: '100%' }}>
            Book Consultation
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
