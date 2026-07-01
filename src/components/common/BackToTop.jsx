/* FILE: src/components/common/BackToTop.jsx */
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '92px',
    right: '24px',
    width: '56px',
    height: '56px',
    backgroundColor: '#1A1A1A',
    border: '1.5px solid var(--color-gold)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-gold)',
    fontSize: '18px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    zIndex: 999,
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? 'visible' : 'hidden',
    transition: 'all var(--transition)'
  };

  return (
    <button 
      onClick={scrollToTop} 
      style={buttonStyle}
      className="back-to-top-btn clickable"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-gold)';
        e.currentTarget.style.color = '#1A1A1A';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#1A1A1A';
        e.currentTarget.style.color = 'var(--color-gold)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      aria-label="Scroll back to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
