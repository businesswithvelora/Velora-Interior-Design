/* FILE: src/components/ui/Button.jsx */
import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  variant = 'primary',
  size = 'md',
  onClick,
  children,
  href,
  className = '',
  ...props
}) => {
  const baseClass = 'velora-btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const combinedClasses = `${baseClass} ${variantClass} ${sizeClass} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('https://wa.me');
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
