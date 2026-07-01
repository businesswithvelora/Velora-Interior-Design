/* FILE: src/components/sections/StatsSection.jsx */
import React from 'react';
import { StatsCounter } from '../ui/StatsCounter';

export const StatsSection = () => {
  const sectionStyle = {
    background: 'var(--color-slate)',
    padding: '60px 0',
    borderBottom: '1px solid rgba(201, 169, 110, 0.1)'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1px 1fr 1px 1fr',
    alignItems: 'center',
    gap: '20px'
  };

  // On small devices, use standard grid block layouts
  const mobileContainerClass = 'stats-section-grid';

  return (
    <section id="stats-section" style={sectionStyle}>
      <div className="container">
        {/* We can construct a premium grid wrapper */}
        <div className={mobileContainerClass}>
          <StatsCounter target={100} label="Projects Completed" suffix="+" />
          <div className="stats-divider"></div>
          <StatsCounter target={50} label="Happy Clients" suffix="+" />
          <div className="stats-divider"></div>
          <StatsCounter target={5} label="Years Experience" suffix="+" />
        </div>
      </div>
      
      {/* Styles for dividers */}
      <style>{`
        .stats-section-grid {
          display: grid;
          grid-template-columns: 1fr 1px 1fr 1px 1fr;
          align-items: center;
        }
        .stats-divider {
          width: 1px;
          height: 80px;
          background-color: rgba(201, 169, 110, 0.3);
        }
        @media (max-width: 768px) {
          .stats-section-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .stats-divider {
            width: 80px;
            height: 1px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
