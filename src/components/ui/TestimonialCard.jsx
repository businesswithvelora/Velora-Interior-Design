/* FILE: src/components/ui/TestimonialCard.jsx */
import React from 'react';
import { FaStar } from 'react-icons/fa';

export const TestimonialCard = ({
  name,
  location,
  review,
  rating = 5,
  projectType,
  image,
  className = ''
}) => {
  const cardStyle = {
    background: 'var(--color-slate)',
    padding: '40px',
    border: '1px solid rgba(245, 240, 232, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative'
  };

  const starsContainerStyle = {
    display: 'flex',
    gap: '4px',
    color: 'var(--color-gold)',
    marginBottom: '24px',
    fontSize: '14px'
  };

  const reviewStyle = {
    fontFamily: 'var(--font-accent)',
    fontStyle: 'italic',
    fontSize: '18px',
    color: 'var(--color-ivory)',
    lineHeight: '1.6',
    marginBottom: '30px',
    opacity: '0.9'
  };

  const clientInfoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginTop: 'auto'
  };

  const avatarStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
    background: 'rgba(201, 169, 110, 0.15)',
    border: '1px solid var(--color-gold)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-gold)',
    fontFamily: 'var(--font-display)',
    fontWeight: '600',
    fontSize: '18px'
  };

  const clientDetailStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const nameStyle = {
    fontFamily: 'var(--font-body)',
    fontWeight: '600',
    fontSize: '15px',
    color: 'var(--color-white)',
    marginBottom: '2px'
  };

  const metaStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    color: 'var(--color-gold)',
    opacity: '0.8'
  };

  const firstLetter = name ? name.charAt(0) : 'C';

  return (
    <div className={`testimonial-card ${className}`} style={cardStyle}>
      <div>
        <div style={starsContainerStyle}>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p style={reviewStyle}>"{review}"</p>
      </div>

      <div style={clientInfoContainerStyle}>
        {image ? (
          <img src={image} alt={name} style={avatarStyle} width="48" height="48" loading="lazy" />
        ) : (
          <div style={avatarStyle}>{firstLetter}</div>
        )}
        <div style={clientDetailStyle}>
          <span style={nameStyle}>{name}</span>
          <span style={metaStyle}>{projectType} &bull; {location}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
