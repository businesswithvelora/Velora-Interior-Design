/* FILE: src/components/sections/ServicesSection.jsx */
import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../ui/ServiceCard';
import { services } from '../../data/services';

export const ServicesSection = () => {
  return (
    <section className="section-padding reveal">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <SectionLabel text="Our Expertise" />
          <SectionHeading 
            title="Design Services We Provide" 
            subtitle="Turnkey interior architecture crafted with rigid precision, meticulous material selections, and timeless aesthetic details."
          />
        </div>

        <div className="services-grid-wrapper">
          {services.map((service, index) => (
            <div key={service.id} className={`reveal stagger-${index % 4 + 1}`}>
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.shortDesc}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid-wrapper {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        @media (max-width: 1200px) {
          .services-grid-wrapper {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .services-grid-wrapper {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
