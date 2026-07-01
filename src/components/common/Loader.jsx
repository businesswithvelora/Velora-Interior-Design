/* FILE: src/components/common/Loader.jsx */
import React, { useContext, useEffect, useState } from 'react';
import { LoaderContext } from '../../context/LoaderContext';

export const Loader = () => {
  const { isLoading } = useContext(LoaderContext);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 600); // Match CSS fade-out transition duration
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!visible) return null;

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#1A1A1A',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'opacity 0.6s ease, visibility 0.6s ease',
    opacity: isLoading ? 1 : 0,
    visibility: isLoading ? 'visible' : 'hidden'
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  };

  const vStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '80px',
    color: 'var(--color-gold)',
    lineHeight: '1',
    marginBottom: '10px',
    animation: 'scaleUp 1s ease forwards'
  };

  const brandStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '24px',
    color: 'var(--color-white)',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    marginBottom: '4px'
  };

  const tagStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '10px',
    color: 'var(--color-gold)',
    textTransform: 'uppercase',
    letterSpacing: '0.3em'
  };

  return (
    <div className="loader-overlay" style={overlayStyle}>
      <div style={contentStyle}>
        <span style={vStyle}>V</span>
        <h2 style={brandStyle}>Velora</h2>
        <span style={tagStyle}>Interior Design</span>
      </div>
    </div>
  );
};

export default Loader;
