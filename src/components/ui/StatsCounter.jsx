/* FILE: src/components/ui/StatsCounter.jsx */
import React from 'react';
import { useCounter } from '../../hooks/useCounter';

export const StatsCounter = ({ target, label, suffix = '', className = '' }) => {
  const { count, ref } = useCounter(target, 2000);

  const counterStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px'
  };

  const numberStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '64px',
    fontWeight: '600',
    color: 'var(--color-gold)',
    lineHeight: '1',
    marginBottom: '12px'
  };

  const labelStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--color-ivory)',
    opacity: '0.7'
  };

  return (
    <div 
      className={`stats-counter-wrapper ${className}`} 
      style={counterStyle} 
      ref={ref}
    >
      <div style={numberStyle}>
        {count}
        {suffix}
      </div>
      <div style={labelStyle}>{label}</div>
    </div>
  );
};

export default StatsCounter;
