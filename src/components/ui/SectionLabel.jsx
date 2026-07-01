/* FILE: src/components/ui/SectionLabel.jsx */
import React from 'react';

export const SectionLabel = ({ text, className = '' }) => {
  const styles = {
    fontFamily: 'var(--font-accent)',
    fontStyle: 'italic',
    color: 'var(--color-gold)',
    fontSize: '16px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    display: 'inline-block',
    marginBottom: '12px'
  };

  return (
    <span className={`section-label ${className}`} style={styles}>
      {text}
    </span>
  );
};

export default SectionLabel;
