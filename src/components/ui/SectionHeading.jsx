/* FILE: src/components/ui/SectionHeading.jsx */
import React from 'react';

export const SectionHeading = ({ title, subtitle, align = 'center', className = '' }) => {
  const containerStyle = {
    textAlign: align,
    marginBottom: '60px',
    maxWidth: '800px',
    marginLeft: align === 'center' ? 'auto' : '0',
    marginRight: align === 'center' ? 'auto' : '0'
  };

  const titleStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '48px',
    color: 'var(--color-white)',
    fontWeight: '600',
    marginBottom: '16px',
    lineHeight: '1.2'
  };

  const subtitleStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    color: 'var(--color-ivory)',
    opacity: '0.75',
    lineHeight: '1.6',
    fontWeight: '300',
    maxWidth: '600px',
    marginLeft: align === 'center' ? 'auto' : '0',
    marginRight: align === 'center' ? 'auto' : '0'
  };

  return (
    <div className={`section-heading-container ${className}`} style={containerStyle}>
      <h2 style={titleStyle}>{title}</h2>
      {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
