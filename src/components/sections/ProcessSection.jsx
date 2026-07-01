/* FILE: src/components/sections/ProcessSection.jsx */
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { SectionLabel } from '../ui/SectionLabel';
import { SectionHeading } from '../ui/SectionHeading';
import { processSteps } from '../../data/processSteps';

export const ProcessSection = () => {
  return (
    <section className="section-padding reveal" style={{ backgroundColor: 'var(--color-slate)' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <SectionLabel text="The Process" />
          <SectionHeading 
            title="Our Design Journey" 
            subtitle="From the very first vision discussion to the day we hand over the keys to your sanctuary, here is how we execute."
          />
        </div>

        {/* Timeline wrapper */}
        <div className="timeline-container reveal">
          <div className="timeline-connecting-line"></div>
          
          <div className="timeline-steps-grid">
            {processSteps.map((step) => {
              const IconComponent = FaIcons[step.icon] || FaIcons.FaAngleRight;
              return (
                <div key={step.step} className="timeline-step-card">
                  <div className="timeline-step-badge-row">
                    <div className="timeline-step-number">{step.step}</div>
                    <div className="timeline-step-icon">
                      <IconComponent />
                    </div>
                  </div>
                  <h3 className="timeline-step-title">{step.title}</h3>
                  <p className="timeline-step-desc">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          margin-top: 60px;
          padding: 20px 0;
        }
        .timeline-connecting-line {
          position: absolute;
          top: 40px;
          left: 5%;
          right: 5%;
          height: 1px;
          border-top: 2px dashed var(--color-gold);
          opacity: 0.3;
          z-index: 1;
        }
        .timeline-steps-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 20px;
          position: relative;
          z-index: 2;
        }
        .timeline-step-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .timeline-step-badge-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          margin-bottom: 20px;
        }
        .timeline-step-number {
          position: absolute;
          top: -15px;
          background: var(--color-gold);
          color: var(--color-bg);
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }
        .timeline-step-icon {
          width: 56px;
          height: 56px;
          background: var(--color-bg);
          border: 2px solid var(--color-gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-gold);
          font-size: 18px;
          transition: var(--transition);
        }
        .timeline-step-card:hover .timeline-step-icon {
          background: var(--color-gold);
          color: var(--color-bg);
          transform: scale(1.1);
        }
        .timeline-step-title {
          font-family: var(--font-display);
          font-size: 16px;
          color: var(--color-white);
          margin-bottom: 12px;
          font-weight: 500;
        }
        .timeline-step-desc {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-ivory);
          opacity: 0.75;
          line-height: 1.5;
        }
        @media (max-width: 1200px) {
          .timeline-connecting-line {
            display: none;
          }
          .timeline-steps-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 40px 20px;
          }
        }
        @media (max-width: 768px) {
          .timeline-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .timeline-steps-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
