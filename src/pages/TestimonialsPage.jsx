/* FILE: src/pages/TestimonialsPage.jsx */
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { SectionLabel } from '../components/ui/SectionLabel';
import { SectionHeading } from '../components/ui/SectionHeading';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { testimonials } from '../data/testimonials';
import heroBg from '/src/assets/images/testimonial/hero_result.webp';

export const TestimonialsPage = () => {
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

  const videoTestimonials = [
    {
      id: 1,
      title: "Luxury Living Space Showcase",
      client: "ARJUN MEHRA",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://res.cloudinary.com/dpeq00iqq/video/upload/v1782887342/akib-video-1_evftva.mp4"
    },
    {
      id: 2,
      title: "Elegant Corridor Design",
      client: "PRIYA KHANNA",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://res.cloudinary.com/dpeq00iqq/video/upload/v1782887339/akib-video-3_o6v4ro.mp4"
    },
    {
      id: 3,
      title: "Modern Kitchen Craftsmanship",
      client: "ROHAN KAPOOR",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://res.cloudinary.com/dpeq00iqq/video/upload/v1782887340/akib-video-4_yurbe7.mp4"
    },
    {
      id: 4,
      title: "Luxury Bedroom Styling",
      client: "ISHAAN MALHOTRA",
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://res.cloudinary.com/dpeq00iqq/video/upload/v1782887342/akib-video-5_yltqct.mp4"
    }
  ];

  return (
    <div className="testimonials-page-container">
      {/* 1. Hero Strip */}
      <div style={heroStyle}>
        <div className="testimonials-hero-overlay"></div>
        <div className="testimonials-hero-content reveal">
          <SectionLabel text="Client Stories" />
          <h1 className="testimonials-hero-title">Reviews & Endorsements</h1>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 24px 100px 24px' }}>
        
        {/* 2. Video Testimonials Section */}
        <section style={{ marginBottom: '100px' }} className="reveal">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <SectionLabel text="Video Reviews" />
            <SectionHeading 
              title="Walkthroughs & Stories" 
              subtitle="Watch detailed walkthroughs of our projects guided by client reactions and project lead commentaries."
            />
          </div>

          <div className="video-testimonials-grid">
            {videoTestimonials.map((video) => (
              <div 
                key={video.id} 
                className="video-card reveal stagger-1 clickable"
                onMouseEnter={(e) => {
                  const videoEl = e.currentTarget.querySelector('video');
                  if (videoEl) videoEl.play().catch(() => {});
                }}
                onMouseLeave={(e) => {
                  const videoEl = e.currentTarget.querySelector('video');
                  if (videoEl) {
                    videoEl.pause();
                    videoEl.currentTime = 0;
                  }
                }}
              >
                <div className="video-card-image" style={{ position: 'relative', overflow: 'hidden' }}>
                  <video 
                    src={video.videoUrl} 
                    poster={video.image}
                    muted 
                    preload="metadata" 
                    playsInline 
                    loop
                    className="testimonial-video-player"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="video-play-overlay">
                    <div className="video-play-button">
                      <FaPlay />
                    </div>
                  </div>
                </div>
                <div className="video-card-content">
                  <h3 className="video-card-title">{video.title}</h3>
                  <span className="video-card-client">{video.client}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Written Testimonials Section */}
        <section className="reveal">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <SectionLabel text="Written Endorsements" />
            <SectionHeading 
              title="Letters from Our Clients" 
              subtitle="Verifiable letters of satisfaction reflecting our designs, schedules, budget accuracy, and project execution."
            />
          </div>

          <div className="written-testimonials-grid">
            {testimonials.map((item) => (
              <div key={item.id} className="reveal stagger-1">
                <TestimonialCard 
                  name={item.name}
                  location={item.location}
                  review={item.review}
                  rating={item.rating}
                  projectType={item.projectType}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Custom Styles for Testimonials Page */}
      <style>{`
        .testimonials-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(26, 26, 26, 0.7);
          z-index: 1;
        }
        .testimonials-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }
        .testimonials-hero-title {
          font-family: var(--font-display);
          font-size: 52px;
          color: var(--color-white);
          margin-top: 10px;
        }
        .video-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }
        .video-card {
          background: var(--color-slate);
          border: 1px solid rgba(245, 240, 232, 0.05);
          overflow: hidden;
        }
        .video-card-image {
          height: 300px;
          background-size: cover;
          background-position: center;
          position: relative;
          transition: var(--transition);
        }
        .video-card-image video {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .video-card:hover video {
          transform: scale(1.05);
        }
        .video-card:hover .video-card-image {
          filter: brightness(0.95);
        }
        .video-play-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.4s ease;
          opacity: 1;
          pointer-events: none;
        }
        .video-card:hover .video-play-overlay {
          opacity: 0;
        }
        .video-play-button {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--color-gold);
          color: var(--color-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          padding-left: 4px; /* Align play triangle */
          box-shadow: 0 4px 15px rgba(201, 169, 110, 0.4);
          transition: transform var(--transition);
        }
        .video-card:hover .video-play-button {
          transform: scale(1.1);
        }
        .video-card-content {
          padding: 24px;
        }
        .video-card-title {
          font-family: var(--font-display);
          font-size: 20px;
          color: var(--color-white);
          margin-bottom: 6px;
          font-weight: 500;
        }
        .video-card-client {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .written-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        @media (max-width: 991px) {
          .video-testimonials-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .written-testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .testimonials-hero-title {
            font-size: 36px;
          }
          .video-card-image {
            height: 240px;
          }
          .written-testimonials-grid {
            grid-template-columns: 1fr;
          }
          section {
            margin-bottom: 60px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsPage;
