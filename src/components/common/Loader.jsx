import React, { useContext, useEffect, useState } from 'react';
import { LoaderContext } from '../../context/LoaderContext';

const Loader = () => {
  const { isLoading } = useContext(LoaderContext);
  const [fadeOut, setFadeOut] = useState(false);
  const [render, setRender] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setFadeOut(true);

      const timer = setTimeout(() => {
        setRender(false);
      }, 900);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!render) return null;

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
    // transition: 'opacity 0.9s ease, transform 0.9s ease',
    transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: fadeOut ? 0 : 1,
    transform: fadeOut ? 'scale(1.05)' : 'scale(1)',
     pointerEvents: fadeOut ? 'none' : 'auto',
  };

  return (
    <div style={overlayStyle}>
      <div style={{ textAlign: 'center' }}>
        <span style={{
          fontSize: '80px',
          color: 'var(--color-gold)',
          display: 'block'
        }}>
          V
        </span>

        <h2 style={{
          color: '#fff',
          letterSpacing: '0.15em'
        }}>
          Velora
        </h2>

        <span style={{
          color: 'var(--color-gold)',
          fontSize: '10px',
          letterSpacing: '0.3em'
        }}>
          Interior Design
        </span>
      </div>
    </div>
  );
};

export default Loader;