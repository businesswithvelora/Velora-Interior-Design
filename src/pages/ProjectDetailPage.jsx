/* FILE: src/pages/ProjectDetailPage.jsx */
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaChevronRight, FaQuoteLeft, FaInfoCircle, FaTrophy, FaTools } from 'react-icons/fa';
import { projects } from '../data/projects';
import { SectionLabel } from '../components/ui/SectionLabel';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { ImageLightbox } from '../components/ui/ImageLightbox';
import { Button } from '../components/ui/Button';

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Find project
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  // Scroll to top on route param changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="container" style={{ padding: '150px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', marginBottom: '20px' }}>Project Not Found</h2>
        <Button variant="primary" size="md" href="/portfolio">
          Back to Portfolio
        </Button>
      </div>
    );
  }

  // Get next project
  const nextIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  const handlePhotoClick = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const heroStyle = {
    backgroundImage: `url(${project.heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh',
    display: 'flex',
    alignItems: 'flex-end',
    position: 'relative'
  };

  return (
    <div className="project-detail-container">
      {/* 1. Full-width Hero */}
      <div style={heroStyle}>
        <div className="project-detail-hero-overlay"></div>
        <div className="project-detail-hero-content container reveal">
          <SectionLabel text={project.category} />
          <h1 className="project-detail-title">{project.title}</h1>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 24px 100px 24px' }}>
        
        {/* 2. 2-Col Layout: Desc left, specs table right */}
        <div className="project-detail-meta-grid reveal">
          <div className="project-detail-desc-col">
            <SectionLabel text="Overview" />
            <h2 className="project-desc-heading">A Luxury Spatial Design</h2>
            {project.description.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="project-desc-p">{paragraph}</p>
            ))}
          </div>

          <div className="project-detail-specs-col">
            <div className="project-specs-table">
              <h3 className="specs-table-heading">Project Specs</h3>
              
              <div className="project-specs-row">
                <span className="project-specs-label">Location</span>
                <span className="project-specs-value">{project.location}</span>
              </div>
              <div className="project-specs-row">
                <span className="project-specs-label">Area Size</span>
                <span className="project-specs-value">{project.area}</span>
              </div>
              <div className="project-specs-row">
                <span className="project-specs-label">Completion</span>
                <span className="project-specs-value">{project.completionTime}</span>
              </div>
              <div className="project-specs-row">
                <span className="project-specs-label">Design Style</span>
                <span className="project-specs-value">{project.designStyle}</span>
              </div>
              <div className="project-specs-row">
                <span className="project-specs-label">Sector</span>
                <span className="project-specs-value">{project.projectType}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Image Gallery */}
        <section className="project-detail-gallery-section reveal">
          <div style={{ marginBottom: '40px' }}>
            <SectionLabel text="Visual Gallery" />
            <h2 className="gallery-section-title">Interior Captures</h2>
          </div>
          
          <div className="project-gallery-grid">
            {project.images.map((imgUrl, idx) => (
              <div 
                key={idx} 
                className="gallery-photo-wrapper clickable"
                onClick={() => handlePhotoClick(idx)}
              >
                <img 
                  src={imgUrl} 
                  alt={`${project.title} capture ${idx + 1}`} 
                  className="gallery-photo"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="gallery-photo-hover-overlay">
                  <span>Enlarge Photo</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Before After Transformation Slider */}
        <section className="project-detail-slider-section reveal">
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <SectionLabel text="The Transformation" />
            <h2 className="slider-section-title">Visual Comparison</h2>
          </div>
          <div className="project-detail-slider-wrapper">
            <BeforeAfterSlider 
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
            />
          </div>
        </section>

        {/* 5. Design Highlights Grid */}
        <section className="project-detail-highlights-section reveal">
          <div className="project-highlights-grid">
            
            <div className="highlight-card">
              <div className="highlight-card-icon">
                <FaTools />
              </div>
              <h4>The Challenges</h4>
              <p>{project.challenges}</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-card-icon">
                <FaInfoCircle />
              </div>
              <h4>Design Concept</h4>
              <p>{project.concept}</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-card-icon">
                <FaTrophy />
              </div>
              <h4>Selected Materials</h4>
              <p>{project.materials}</p>
            </div>

          </div>
        </section>

        {/* 6. Testimonial Quote */}
        {project.testimonial && (
          <section className="project-detail-quote-section reveal">
            <div className="quote-box">
              <FaQuoteLeft className="quote-box-icon" />
              <p className="quote-box-text">"{project.testimonial.quote}"</p>
              <div className="quote-box-author">
                <span className="author-name">{project.testimonial.clientName}</span>
                <span className="author-role">{project.testimonial.clientType}</span>
              </div>
            </div>
          </section>
        )}

        {/* 7. Next Project Preview Link */}
        <section className="project-detail-next-section reveal">
          <div className="next-project-banner">
            <div className="next-project-banner-overlay" style={{ backgroundImage: `url(${nextProject.heroImage})` }}></div>
            <div className="next-project-banner-content">
              <SectionLabel text="Up Next" />
              <h3 className="next-project-banner-title">{nextProject.title}</h3>
              <Link to={`/portfolio/${nextProject.slug}`} className="next-project-banner-link clickable">
                View Project <FaChevronRight size={12} />
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={project.images}
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Custom Styles for Detail Page */}
      <style>{`
        .project-desc-heading {
          font-family: var(--font-display);
          font-size: 32px;
          color: var(--color-white);
          margin-bottom: 20px;
          font-weight: 500;
        }
        .project-desc-p {
          font-size: 15px;
          line-height: 1.7;
          opacity: 0.8;
          margin-bottom: 16px;
        }
        .specs-table-heading {
          font-family: var(--font-display);
          font-size: 20px;
          color: var(--color-white);
          margin-bottom: 20px;
          font-weight: 600;
        }
        .project-detail-gallery-section {
          margin-top: 80px;
        }
        .gallery-section-title, .slider-section-title {
          font-family: var(--font-display);
          font-size: 36px;
          color: var(--color-white);
        }
        .project-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .gallery-photo-wrapper {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: var(--color-slate);
        }
        .gallery-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition);
        }
        .gallery-photo-wrapper:hover .gallery-photo {
          transform: scale(1.08);
        }
        .gallery-photo-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(26, 26, 26, 0.8);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }
        .gallery-photo-hover-overlay span {
          font-family: var(--font-body);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-gold);
          border: 1px solid var(--color-gold);
          padding: 8px 16px;
        }
        .gallery-photo-wrapper:hover .gallery-photo-hover-overlay {
          opacity: 1;
        }
        .project-detail-slider-section {
          margin-top: 80px;
        }
        .project-detail-slider-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }
        .project-detail-highlights-section {
          margin-top: 80px;
        }
        .highlight-card-icon {
          font-size: 28px;
          color: var(--color-gold);
          margin-bottom: 16px;
        }
        .project-detail-quote-section {
          margin-top: 80px;
          background: var(--color-slate);
          padding: 60px 40px;
          border-left: 2px solid var(--color-gold);
        }
        .quote-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .quote-box-icon {
          font-size: 32px;
          color: var(--color-gold);
          opacity: 0.3;
          margin-bottom: 24px;
        }
        .quote-box-text {
          font-family: var(--font-accent);
          font-style: italic;
          font-size: 24px;
          color: var(--color-ivory);
          line-height: 1.5;
          margin-bottom: 24px;
        }
        .quote-box-author {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .author-name {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 15px;
          color: var(--color-white);
          margin-bottom: 2px;
        }
        .author-role {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .project-detail-next-section {
          margin-top: 100px;
        }
        .next-project-banner {
          position: relative;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .next-project-banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          filter: brightness(0.3);
          transition: transform 0.8s ease;
          z-index: 1;
        }
        .next-project-banner:hover .next-project-banner-overlay {
          transform: scale(1.05);
        }
        .next-project-banner-content {
          position: relative;
          z-index: 2;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .next-project-banner-title {
          font-family: var(--font-display);
          font-size: 32px;
          color: var(--color-white);
          margin-top: 10px;
          margin-bottom: 24px;
        }
        .next-project-banner-link {
          font-family: var(--font-body);
          font-size: 13px;
          text-transform: uppercase;
          color: var(--color-gold);
          letter-spacing: 0.15em;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1.5px solid var(--color-gold);
          padding-bottom: 4px;
        }
        @media (max-width: 991px) {
          .project-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .project-detail-gallery-section,
          .project-detail-slider-section,
          .project-detail-highlights-section,
          .project-detail-quote-section,
          .project-detail-next-section {
            margin-top: 60px;
          }
          .gallery-section-title, .slider-section-title {
            font-size: 26px;
          }
          .quote-box-text {
            font-size: 20px;
          }
          .next-project-banner-title {
            font-size: 24px;
          }
        }
        @media (max-width: 480px) {
          .project-gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailPage;
