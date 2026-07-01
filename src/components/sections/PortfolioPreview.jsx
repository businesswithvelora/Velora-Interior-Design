/* FILE: src/components/sections/PortfolioPreview.jsx */
import React from 'react';
import { Link } from 'react-router-dom';
import { SectionLabel } from '../ui/SectionLabel';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import img22 from '/src/assets/images/portfolio/home(sec)1/22_result.webp';
import img30 from '/src/assets/images/portfolio/home(sec)1/30_result.webp';
import img44 from '/src/assets/images/portfolio/home(sec)1/44_result.webp';

export const PortfolioPreview = () => {
  const previewProjects = [
    {
      id: 22,
      heroImage: img22,
      title: "Fumed Oak Chef Kitchen",
      category: "Modern Kitchen",
      slug: "fumed-oak-chef-kitchen"
    },
    {
      id: 30,
      heroImage: img30,
      title: "Calacatta Quartz Kitchen",
      category: "Modern Kitchen",
      slug: "calacatta-quartz-kitchen"
    },
    {
      id: 44,
      heroImage: img44,
      title: "Opulence Perfume Boutique",
      category: "Luxury Retail",
      slug: "opulence-perfume-boutique"
    }
  ];

  return (
    <section className="section-padding reveal" style={{ backgroundColor: 'var(--color-slate)' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <SectionLabel text="Featured Portfolio" />
          <SectionHeading 
            title="Selected Architectural Works" 
            subtitle="Explore our elite collection of masterfully curated spaces representing structural luxury, pure materials, and rich aesthetics."
          />
        </div>

        <div className="portfolio-preview-grid">
          {previewProjects.map((project, index) => (
            <div key={project.id} className={`reveal stagger-${(index % 3) + 1}`}>
              <div className="premium-card-wrapper">
                {/* Blurred image background for dynamic custom color glow */}
                <img 
                  src={project.heroImage} 
                  alt="" 
                  className="premium-card-glow" 
                  loading="lazy"
                  width="800"
                  height="600"
                />
                
                <div className="premium-card">
                  <img 
                    src={project.heroImage} 
                    alt={project.title} 
                    className="premium-card-image"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                  <div className="premium-card-overlay">
                    <span className="premium-card-category">{project.category}</span>
                    <h3 className="premium-card-title">{project.title}</h3>
                    <Link to={`/portfolio/${project.slug}`} className="premium-card-link clickable">
                      View Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }} className="reveal">
          <Button variant="outline" size="lg" href="/portfolio">
            Explore Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
