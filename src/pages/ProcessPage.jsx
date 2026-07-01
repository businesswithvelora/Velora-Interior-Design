/* FILE: src/pages/ProcessPage.jsx */
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { SectionLabel } from '../components/ui/SectionLabel';
import { processSteps } from '../data/processSteps';
import process1 from '../assets/process/1_process.webp';
import process2 from '../assets/process/2_process.webp';
import process3 from '../assets/process/3_process.webp';
import process4 from '../assets/process/4_process.webp';
import process5 from '../assets/process/5_process.webp';
import process6 from '../assets/process/6_process.webp';
import process7 from '../assets/process/7_process.webp';
import heroBg from '/src/assets/images/process/hero_result.webp';

export const ProcessPage = () => {
  const heroStyle = {
    backgroundImage: `url('${heroBg}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  };

  // Associated process images
  const processImages = [
    process1,
    process2,
    process3,
    process4,
    process5,
    process6,
    process7
  ];

  // Extended detail descriptions for process steps
  const longDescriptions = [
    "Every extraordinary space begins with a dialogue. During the Consultation phase, we discuss your goals, lifestyles, timeline parameters, and investment budgets. We walk through initial architectural layouts, exploring your aesthetic preferences to establish a baseline of expectations.",
    "Concept Development translates our initial notes into physical direction. We build high-end mood boards, formulate schematic space zonings, and assemble primary material palettes (woods, metals, fabrics) to define the specific mood and authority of the project.",
    "Once the concept is approved, we render the space in absolute photo-realistic detail. Our 3D Design Visualization allows you to inspect double-height lighting behaviors, fumed cabinet alignments, and stone vein flows, ensuring the outcome matches your vision.",
    "Velora operates a global high-end supply chain. In this phase, we source and purchase Calacatta slabs, custom smoked woods, designer fabrics, and built-in mechanical equipment. We ensure each block of raw material meets rigid quality thresholds before fabrication.",
    "Technical Detailing translates creative visions into engineering blueprints. We build millwork details, cabinetry sections, lighting loops, electrical grids, and acoustic barriers, providing our on-site team and contractors with frictionless construction guidance.",
    "Turnkey construction requires close oversight. Our project directors manage contractors on site, auditing joints, marble matchings, wall paneling alignments, and smart lighting grids directly, ensuring zero deviation from approved blueprints.",
    "The final stage is where spaces come to life. We arrange custom commissioned furniture, mount tailored lighting fixtures, style accessories, and set automated smart-lighting moods. After final quality audits, we hand over the keys to your new sanctuary."
  ];

  return (
    <div className="process-page-container">
      {/* 1. Hero Strip */}
      <div style={heroStyle}>
        <div className="process-hero-overlay"></div>
        <div className="process-hero-content reveal">
          <SectionLabel text="Our Method" />
          <h1 className="process-hero-title">Our Design Process</h1>
        </div>
      </div>

      {/* 2. Timeline Process Steps */}
      <div className="container" style={{ padding: '80px 24px 100px 24px', position: 'relative' }}>
        <div className="process-vertical-line"></div>

        <div className="process-steps-list">
          {processSteps.map((step, index) => {
            const IconComponent = FaIcons[step.icon] || FaIcons.FaRegLightbulb;
            const isOdd = index % 2 !== 0;

            return (
              <div 
                key={step.step} 
                className={`process-step-item reveal ${isOdd ? 'odd' : 'even'}`}
              >
                {/* Visual Step Number */}
                <div className="process-step-number-huge">
                  {String(step.step).padStart(2, '0')}
                </div>

                <div className="process-step-grid">
                  {/* Image Column */}
                  <div className="process-step-image-col">
                    <img 
                      src={processImages[index]} 
                      alt={step.title} 
                      className="process-step-img"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                  </div>

                  {/* Content Column */}
                  <div className="process-step-content-col">
                    <div className="process-step-header">
                      <div className="process-step-icon-wrapper">
                        <IconComponent />
                      </div>
                      <h2 className="process-step-title">{step.title}</h2>
                    </div>
                    
                    <p className="process-step-desc">
                      {longDescriptions[index]}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Styles for Process Page */}
      <style>{`
        .process-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(26, 26, 26, 0.7);
          z-index: 1;
        }
        .process-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }
        .process-hero-title {
          font-family: var(--font-display);
          font-size: 52px;
          color: var(--color-white);
          margin-top: 10px;
        }
        .process-vertical-line {
          position: absolute;
          top: 80px;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          border-left: 2px dashed var(--color-gold);
          opacity: 0.15;
          z-index: 1;
        }
        .process-steps-list {
          display: flex;
          flex-direction: column;
          gap: 120px;
          position: relative;
          z-index: 2;
        }
        .process-step-item {
          position: relative;
        }
        .process-step-number-huge {
          font-family: var(--font-display);
          font-size: 120px;
          font-weight: 700;
          color: rgba(201, 169, 110, 0.12);
          position: absolute;
          top: -60px;
          left: 0;
          line-height: 1;
          pointer-events: none;
        }
        .process-step-item.odd .process-step-number-huge {
          left: auto;
          right: 0;
        }
        .process-step-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .process-step-item.odd .process-step-grid {
          grid-template-columns: 1fr 1fr;
        }
        .process-step-item.odd .process-step-image-col {
          order: 2;
        }
        .process-step-item.odd .process-step-content-col {
          order: 1;
        }
        .process-step-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-left: 3px solid var(--color-gold);
        }
        .process-step-item.odd .process-step-img {
          border-left: none;
          border-right: 3px solid var(--color-gold);
        }
        .process-step-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }
        .process-step-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid var(--color-gold);
          color: var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          background: rgba(26, 26, 26, 0.5);
          flex-shrink: 0;
        }
        .process-step-title {
          font-family: var(--font-display);
          font-size: 26px;
          color: var(--color-white);
          font-weight: 500;
        }
        .process-step-desc {
          font-size: 15px;
          line-height: 1.7;
          opacity: 0.8;
        }
        @media (max-width: 991px) {
          .process-vertical-line {
            display: none;
          }
          .process-step-grid, .process-step-item.odd .process-step-grid {
            grid-template-columns: 1fr !important;
            gap: 30px;
          }
          .process-step-image-col, .process-step-item.odd .process-step-image-col {
            order: 1 !important;
          }
          .process-step-content-col, .process-step-item.odd .process-step-content-col {
            order: 2 !important;
          }
          .process-step-img {
            height: 280px;
            border-left: 3px solid var(--color-gold) !important;
            border-right: none !important;
          }
          .process-steps-list {
            gap: 80px;
          }
          .process-step-number-huge {
            font-size: 80px;
            top: -45px;
            left: 0 !important;
            right: auto !important;
          }
        }
        @media (max-width: 768px) {
          .process-hero-title {
            font-size: 36px;
          }
          .process-step-title {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProcessPage;
