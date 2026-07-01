/* FILE: src/components/common/WhatsAppButton.jsx */
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppButton = () => {
  const buttonStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '56px',
    height: '56px',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontSize: '28px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    zIndex: 999,
    transition: 'transform var(--transition), background-color var(--transition)',
    textDecoration: 'none'
  };

  return (
    <a 
      href="https://wa.me/917351901329" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={buttonStyle}
      className="whatsapp-floating-btn clickable"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.backgroundColor = '#20BA56';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.backgroundColor = '#25D366';
      }}
      aria-label="Contact Velora on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
