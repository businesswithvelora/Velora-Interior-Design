/* FILE: src/pages/ContactPage.jsx */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Button } from '../components/ui/Button';
import heroBg from '/src/assets/images/Contact/hero_result.webp';

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm();

  const onSubmit = (data) => {
    // Standard mock submission logging
    console.log("Contact form submitted data:", data);
    setSubmitted(true);
    reset();
    
    // Auto clear success alert after 8s
    setTimeout(() => setSubmitted(false), 8000);
  };

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

  return (
    <div className="contact-page-container">
      {/* 1. Hero Strip */}
      <div style={heroStyle}>
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content reveal">
          <SectionLabel text="Contact Us" />
          <h1 className="contact-hero-title">Let's Create Together</h1>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 24px 80px 24px' }}>
        <div className="contact-grid">
          
          {/* Left Column: Form */}
          <div className="contact-form-container reveal">
            {submitted && (
              <div className="form-success-alert">
                <h4>Thank You For Reaching Out</h4>
                <p>Your design request has been received. A senior interior architect from the Velora team will contact you within 24 hours to coordinate our consultation session.</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              {/* Row 1: Name and Phone */}
              <div className="form-group-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    className="form-input"
                    placeholder="Enter your name"
                    {...register("fullName", { required: "Full name is required" })}
                  />
                  {errors.fullName && <span className="form-error-msg">{errors.fullName.message}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-input"
                    placeholder="+91-XXXXXXXXXX"
                    {...register("phone", { 
                      required: "Phone number is required",
                      pattern: {
                        value: /^[+]?[0-9\s-]{7,15}$/,
                        message: "Invalid phone number format"
                      }
                    })}
                  />
                  {errors.phone && <span className="form-error-msg">{errors.phone.message}</span>}
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="name@example.com"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address format"
                    }
                  })}
                />
                {errors.email && <span className="form-error-msg">{errors.email.message}</span>}
              </div>

              {/* Row 3: Dropdowns */}
              <div className="form-group-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="service">Desired Service *</label>
                  <select
                    id="service"
                    className="form-select"
                    {...register("service", { required: "Please select a service" })}
                  >
                    <option value="">Select service...</option>
                    <option value="Residential Interior Design">Residential Design</option>
                    <option value="Corporate Office Design">Corporate Design</option>
                    <option value="Hospitality Interior Design">Hospitality Design</option>
                    <option value="Luxury Retail Design">Retail Design</option>
                    <option value="Modern Kitchen & Bath">Kitchen & Bath</option>
                    <option value="Custom Furniture & Lighting">Custom Furniture</option>
                    <option value="Fit-Out & Detailing">Fit-Out Detailing</option>
                  </select>
                  {errors.service && <span className="form-error-msg">{errors.service.message}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="projectType">Project Scope *</label>
                  <select
                    id="projectType"
                    className="form-select"
                    {...register("projectType", { required: "Please select project scope" })}
                  >
                    <option value="">Select scope...</option>
                    <option value="New Construction">New Construction</option>
                    <option value="Complete Remodel">Complete Remodel</option>
                    <option value="Single Room Refresh">Single Room Refresh</option>
                    <option value="Turnkey Detailing">Turnkey Detailing</option>
                  </select>
                  {errors.projectType && <span className="form-error-msg">{errors.projectType.message}</span>}
                </div>
              </div>

              {/* Row 5: Message */}
              <div className="form-group">
                <label className="form-label" htmlFor="message">Project Description *</label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Detail your spatial desires, timelines, or material preferences..."
                  {...register("message", { required: "Please detail your project requirements" })}
                ></textarea>
                {errors.message && <span className="form-error-msg">{errors.message.message}</span>}
              </div>

              <div style={{ marginTop: '10px' }}>
                <Button variant="primary" size="lg" type="submit" style={{ width: '100%' }}>
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Right Column: Contact info panel */}
          <div className="contact-details-panel reveal">
            <div>
              <h2 className="contact-details-heading">Corporate Office</h2>
              <p className="contact-details-intro">
                Whether you desire to redesign a luxury private estate, configure a new headquarters boardroom, or outline custom yacht cabins, our senior designers are ready to partner with you.
              </p>
            </div>

            <div className="contact-cards-list">
              <div className="contact-detail-card">
                <div className="contact-detail-icon-wrapper">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-detail-card-content">
                  <h5>Corporate Office</h5>
                  <p>
                    <a 
                      href="https://maps.app.goo.gl/XVvWT8gxfDz6zxEp9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="clickable"
                    >
                      Sector 115, Sorkha, Noida, Uttar Pradesh
                    </a>
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/XVvWT8gxfDz6zxEp9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clickable"
                    style={{ fontSize: '13px', color: 'var(--color-gold)', marginTop: '4px', display: 'inline-block', textDecoration: 'none' }}
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-detail-icon-wrapper">
                  <FaPhone />
                </div>
                <div className="contact-detail-card-content">
                  <h5>Phone</h5>
                  <p>
                    <a href="tel:+91 73519 01329" className="clickable">+91 73519 01329</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-detail-icon-wrapper">
                  <FaEnvelope />
                </div>
                <div className="contact-detail-card-content">
                  <h5>Email</h5>
                  <p>
                    <a href="mailto:businesswithvelora@gmail.com" className="clickable">businesswithvelora@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-detail-icon-wrapper">
                  <FaWhatsapp />
                </div>
                <div className="contact-detail-card-content">
                  <h5>WhatsApp</h5>
                  <p>
                    <a 
                      href="https://wa.me/917351901329" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="clickable"
                    >
                      Chat Live on WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* WhatsApp Banner Link */}
        <div className="whatsapp-contact-cta reveal">
          <div className="whatsapp-contact-cta-info">
            <h4>Need Immediate Architectural Input?</h4>
            <p>Chat directly with our lead interior designers on WhatsApp for quick feedback.</p>
          </div>
          <a 
            href="https://wa.me/917351901329" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-btn-large clickable"
          >
            <FaWhatsapp size={20} />
            Chat on WhatsApp Now
          </a>
        </div>

        {/* 3. Google Map Embed */}
        <div className="map-embed-container reveal">
          <a
            href="https://maps.app.goo.gl/XVvWT8gxfDz6zxEp9"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 10,
              cursor: 'pointer'
            }}></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.606275217434!2d77.4056087!3d28.5675177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef3e9ff1e9bf%3A0x797858ad9b47a2d8!2sSector+115%2C+Sorkha%2C+Noida%2C+Uttar+Pradesh!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              title="Velora Delhi Corporate Office Location"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ pointerEvents: 'none' }}
            ></iframe>
          </a>
        </div>

      </div>

      <style>{`
        .contact-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(26, 26, 26, 0.7);
          z-index: 1;
        }
        .contact-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }
        .contact-hero-title {
          font-family: var(--font-display);
          font-size: 52px;
          color: var(--color-white);
          margin-top: 10px;
        }
        @media (max-width: 768px) {
          .contact-hero-title {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
