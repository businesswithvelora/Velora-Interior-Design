/* FILE: src/components/ui/ServiceCard.jsx */
import React, { memo } from 'react';
import * as MdIcons from 'react-icons/md';

export const ServiceCard = memo(({ icon, title, description, className = '' }) => {
  // Resolve icon component dynamically
  const IconComponent = MdIcons[icon] || MdIcons.MdHelpOutline;

  const cardStyle = {
    background: 'var(--color-slate)',
    padding: '32px',
    border: '1px solid transparent',
    transition: 'all var(--transition)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    cursor: 'default'
  };

  const iconStyle = {
    fontSize: '40px',
    color: 'var(--color-gold)',
    marginBottom: '24px'
  };

  const titleStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '22px',
    color: 'var(--color-white)',
    marginBottom: '16px',
    fontWeight: '500'
  };

  const descStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    color: 'var(--color-ivory)',
    opacity: '0.8',
    lineHeight: '1.6'
  };

  return (
    <div 
      className={`service-card ${className}`}
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-gold)';
        e.currentTarget.style.transform = 'translateY(-6px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={iconStyle}>
        <IconComponent />
      </div>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descStyle}>{description}</p>
    </div>
  );
});

export default ServiceCard;
