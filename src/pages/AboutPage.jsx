/* FILE: src/pages/AboutPage.jsx */
import React from 'react';
import { FaEye, FaBullseye, FaAward, FaCrown, FaStar, FaShieldAlt } from 'react-icons/fa';
import { SectionLabel } from '../components/ui/SectionLabel';
import { SectionHeading } from '../components/ui/SectionHeading';
import { teamMembers } from '../data/teamMembers';
import soloman from "../assets/about/soloman.webp";
import heroBg from "/src/assets/images/about/hero_result.webp";
import mirrorImg from "/src/assets/images/about/mirror_result.webp";



export const AboutPage = () => {
  const heroStyle = {
    backgroundImage: `url('${heroBg}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '45vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  };

  // Resolve team photo fallbacks

  const teamPhotos = [
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  ];


  return (
    <div className="about-page-container">
      {/* 1. Hero Strip */}
      <div style={heroStyle}>
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content reveal">
          <SectionLabel text="The Velora Story" />
          <h1 className="about-hero-title">Where Vision Meets Elegance</h1>
        </div>
      </div>

      {/* 2. Company Story Section */}
      <section className="section-padding reveal">
        <div className="container">
          <div className="story-grid">
            <div className="story-text-column">
              <SectionLabel text="Our Origin" />
              <h2 className="story-title">Crafting Premium Environments Since 2021</h2>
              <p className="story-p">
                Velora Interior Design was founded on a simple, uncompromising core tenet: that structural space planning must exist in absolute harmony with material authenticity. We do not design templates; we craft bespoke physical stages tailored for HNWIs, corporate boards, and premium resort brands.
              </p>
              <p className="story-p">
                Every line, texture, and light loop we configure is backed by strict engineering discipline and meticulous sourcing. Over the last five years, our single-run furniture executions and marble selections have defined luxury across residences, flagship retail suites, and private yachts globally.
              </p>
            </div>
            <div className="story-image-column">
              <img 
                src={mirrorImg} 
                alt="Velora Luxury Showroom"
                className="story-image"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founder Section */}
      <section className="section-padding reveal" style={{ backgroundColor: 'var(--color-slate)' }}>
        <div className="container">
          <div className="founder-grid">
            <div className="founder-image-column">
              <img
                src={soloman}
                alt="Soloman - Founder of Velora Interior Design"
                className="founder-image"
                loading="eager"
                width="600"
                height="800"
              />
            </div>
            <div className="founder-text-column">
              <SectionLabel text="Creative Director" />
              <h2 className="founder-name">Akib </h2>
              <span className="founder-subtitle">Founder, Velora Interior Design</span>
              <p className="founder-bio">
                Akib has spent nearly two decades defining high-end interiors. His design philosophy revolves around symmetry, light manipulation, and exposing the organic patterns of raw stone and wood veneers.
              </p>
              <blockquote className="founder-quote">
                "A luxury space should not scream for attention. It should reveal itself slowly, conveying absolute grounding comfort, structural precision, and subtle authority."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/*{/* 4. Team Grid Section */}
      {/*
      <section className="section-padding reveal">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <SectionLabel text="The Experts" />
            <SectionHeading 
              title="Meet Our Design Leaders" 
              subtitle="A multidisciplinary group of senior architects, designers, supply chain coordinators, and custom furniture craftsmen."
            />
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="team-card reveal stagger-1">
                <div className="team-image-wrapper">
                  <img 
                    src={teamPhotos[index]} 
                    alt={member.name} 
                    className="team-photo"
                    loading="lazy"
                  />
                </div>
                <h3 className="team-member-name">{member.name}</h3>
                <span className="team-member-title">{member.designation}</span>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* 5. Mission & Vision Section */}
      <section className="section-padding reveal" style={{ backgroundColor: 'var(--color-slate)' }}>
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <FaBullseye />
              </div>
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-desc">
                To create uncompromising, premium spaces that fuse creative architectural statements with strict functional utility, using only authentic materials sourced globally.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">
                <FaEye />
              </div>
              <h3 className="mission-title">Our Vision</h3>
              <p className="mission-desc">
                To be recognized internationally as the premier corporate interior design brand for elite residences, boutique hospitality properties, and bespoke marine vessels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Awards Strip Section */}
      <section className="section-padding awards-strip reveal">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <SectionLabel text="Recognition" />
            <h3 className="awards-strip-heading">Accredited Honors & Awards</h3>
          </div>
          
          <div className="awards-grid">
            <div className="award-item">
              <FaCrown className="award-item-icon" />
              <span>Lux Architectural Award 2024</span>
            </div>
            <div className="award-item">
              <FaAward className="award-item-icon" />
              <span>International Design Elite 2025</span>
            </div>
            <div className="award-item">
              <FaStar className="award-item-icon" />
              <span>Gold Residential Trophy 2025</span>
            </div>
            <div className="award-item">
              <FaShieldAlt className="award-item-icon" />
              <span>Premium Space Award 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles for About Page */}
      <style>{`
        .about-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(26, 26, 26, 0.7);
          z-index: 1;
        }
        .about-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }
        .about-hero-title {
          font-family: var(--font-display);
          font-size: 52px;
          color: var(--color-white);
          margin-top: 10px;
        }
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .story-text-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .story-title {
          font-family: var(--font-display);
          font-size: 38px;
          color: var(--color-white);
          line-height: 1.2;
        }
        .story-p {
          font-size: 15px;
          line-height: 1.7;
          opacity: 0.8;
        }
        .story-image {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-left: 2px solid var(--color-gold);
        }
        .founder-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 60px;
          align-items: center;
        }
        .founder-image {
          width: 100%;
          height: 520px;
          object-fit: cover;
        }
        .founder-text-column {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .founder-name {
          font-family: var(--font-display);
          font-size: 38px;
          color: var(--color-white);
        }
        .founder-subtitle {
          font-family: var(--font-body);
          font-size: 14px;
          text-transform: uppercase;
          color: var(--color-gold);
          letter-spacing: 0.1em;
          margin-top: -8px;
        }
        .founder-bio {
          font-size: 15px;
          line-height: 1.7;
          opacity: 0.8;
          margin-top: 10px;
        }
        .founder-quote {
          font-family: var(--font-accent);
          font-style: italic;
          font-size: 22px;
          color: var(--color-gold);
          border-left: 2px solid var(--color-gold);
          padding-left: 24px;
          margin-top: 20px;
          line-height: 1.5;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 60px;
        }
        .team-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: var(--color-slate);
          padding: 30px;
          border: 1px solid rgba(245, 240, 232, 0.03);
        }
        .team-image-wrapper {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 24px;
          border: 1.5px solid var(--color-gold);
        }
        .team-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition);
        }
        .team-card:hover .team-photo {
          transform: scale(1.08);
        }
        .team-member-name {
          font-family: var(--font-display);
          font-size: 20px;
          color: var(--color-white);
          margin-bottom: 6px;
        }
        .team-member-title {
          font-family: var(--font-body);
          font-size: 12px;
          text-transform: uppercase;
          color: var(--color-gold);
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }
        .team-member-bio {
          font-size: 13.5px;
          opacity: 0.7;
          line-height: 1.5;
        }
        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .mission-card {
          background: var(--color-bg);
          padding: 48px;
          border: 1px solid rgba(245, 240, 232, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .mission-icon {
          font-size: 40px;
          color: var(--color-gold);
          margin-bottom: 24px;
        }
        .mission-title {
          font-family: var(--font-display);
          font-size: 24px;
          color: var(--color-white);
          margin-bottom: 16px;
        }
        .mission-desc {
          font-size: 14.5px;
          opacity: 0.8;
          line-height: 1.6;
        }
        .awards-strip {
          background: #0F0F0F;
          border-top: 1px solid rgba(201, 169, 110, 0.1);
        }
        .awards-strip-heading {
          font-family: var(--font-display);
          font-size: 28px;
          color: var(--color-white);
        }
        .awards-grid {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 30px;
          margin-top: 40px;
        }
        .award-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-body);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-ivory);
          opacity: 0.8;
        }
        .award-item-icon {
          font-size: 24px;
          color: var(--color-gold);
        }
        @media (max-width: 991px) {
          .story-grid, .founder-grid, .team-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .story-image, .founder-image {
            height: 350px;
          }
          .team-grid {
            max-width: 500px;
            margin: 40px auto 0 auto;
          }
        }
        @media (max-width: 768px) {
          .about-hero-title {
            font-size: 36px;
          }
          .story-title, .founder-name {
            font-size: 28px;
          }
          .mission-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .mission-card {
            padding: 30px 20px;
          }
          .awards-grid {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
