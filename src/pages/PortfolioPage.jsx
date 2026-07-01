/* FILE: src/pages/PortfolioPage.jsx */
import React from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ProjectCard } from '../components/ui/ProjectCard';
import { projects } from '../data/projects';
import boutiquehotel from '../assets/images/portfolio/boutiquehotel.webp';

export const PortfolioPage = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.75), rgba(15, 15, 15, 0.75)), url(${boutiquehotel})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '120px 24px',
    textAlign: 'center',
    borderBottom: '1px solid rgba(201, 169, 110, 0.15)',
    position: 'relative'
  };

  const pageTitleStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '44px',
    color: 'var(--color-white)',
    fontWeight: '600',
    marginTop: '10px',
    display: 'inline-block',
    position: 'relative'
  };

  return (
    <div className="portfolio-page-container">
      {/* 1. Hero Strip */}
      <div style={heroStyle}>
        <SectionLabel text="Selected Works" />
        <div>
          <h1 style={pageTitleStyle}>
            Our Portfolio
            <span className="portfolio-title-underline"></span>
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 24px' }}>
        {/* 3. Portfolio Grid */}
        <div className="portfolio-grid reveal">
          {projects.map((project) => (
            <div key={project.id} className="reveal stagger-1">
              <ProjectCard
                image={project.heroImage}
                title={project.title}
                category={project.category}
                slug={project.slug}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .portfolio-title-underline {
          display: block;
          width: 80px;
          height: 1.5px;
          background-color: var(--color-gold);
          margin: 16px auto 0 auto;
        }
        @media (max-width: 768px) {
          .portfolio-page-container h1 {
            font-size: 32px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;
