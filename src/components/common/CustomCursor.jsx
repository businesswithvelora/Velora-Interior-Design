/* FILE: src/components/common/CustomCursor.jsx */
import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Check for touch device support
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('clickable') ||
        target.closest('.clickable');

      if (isClickable) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (isTouchDevice) return null;

  const cursorStyle = {
    position: 'fixed',
    top: `${position.y}px`,
    left: `${position.x}px`,
    width: isHovered ? '28px' : '12px',
    height: isHovered ? '28px' : '12px',
    backgroundColor: isHovered ? 'var(--color-white)' : 'var(--color-gold)',
    border: isHovered ? '1.5px solid var(--color-gold)' : 'none',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.2s ease, border 0.2s ease',
    pointerEvents: 'none',
    zIndex: 99999,
    mixBlendMode: 'difference'
  };

  return <div ref={cursorRef} className="custom-cursor" style={cursorStyle} />;
};

export default CustomCursor;
