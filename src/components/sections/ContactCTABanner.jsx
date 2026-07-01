/* FILE: src/components/sections/ContactCTABanner.jsx */
import React from 'react';
import { Button } from '../ui/Button';

export const ContactCTABanner = () => {
  const bannerStyle = {
    background: '#0F0F0F',
    borderTop: '1px solid var(--color-gold)',
    padding: '80px 24px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const titleStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '52px',
    color: 'var(--color-white)',
    fontWeight: '600',
    marginBottom: '16px',
    lineHeight: '1.2'
  };

  const descStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '18px',
    color: 'var(--color-ivory)',
    opacity: '0.8',
    marginBottom: '36px',
    maxWidth: '600px',
    fontWeight: '300'
  };

  return (
    <section style={bannerStyle} className="reveal">
      <h2 style={titleStyle} className="reveal-fade">Ready to Transform Your Space?</h2>
      <p style={descStyle} className="reveal-fade stagger-1">
        Schedule a private consultation session with our senior interior architects and view how we can elevate your home, office, or vessel.
      </p>
      <div className="reveal-fade stagger-2">
        <Button variant="primary" size="lg" href="/contact">
          Book Free Consultation
        </Button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
          h2 {
            font-size: 36px !important;
          }
          p {
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactCTABanner;
