/* FILE: src/pages/ServicesPage.jsx */
import React, { useState } from 'react';
import * as MdIcons from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Button } from '../components/ui/Button';
import { services } from '../data/services';
import heroBg from '/src/assets/images/services/hero_result.webp';
import residentialImg from '/src/assets/images/services/residential_result.webp';
import corporateImg from '/src/assets/images/services/corporate_result.webp';
import hospitalityImg from '/src/assets/images/services/hospitality_interior_result.webp';
import retailImg from '/src/assets/images/services/luxury_retail_result.webp';
import kitchenImg from '/src/assets/images/services/moder_kitchen_result.webp';
import furnitureImg from '/src/assets/images/services/custom_fur_light_result.webp';
import fitoutImg from '/src/assets/images/services/fit_out_detail_result.webp';

export const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    details: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleRequestConsultation = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setErrors({});
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    const message = `Hello Velora Interior Design,

I would like to request a consultation.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Email: ${formData.email.trim()}
Service: ${selectedService}
Project Details: ${formData.details.trim() || 'Not specified'}

Please contact me regarding my project.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917351901329?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsLoading(false);
      setIsModalOpen(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        details: ''
      });
    }, 1500);
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
    <div className="services-page-container">
      {/* 1. Hero Strip */}
      <div style={heroStyle}>
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content reveal">
          <SectionLabel text="Our Capabilities" />
          <h1 className="services-hero-title">Exclusive Interior Services</h1>
        </div>
      </div>

      {/* 2. Alternating Services Sections */}
      {services.map((service, index) => {
        const IconComponent = MdIcons[service.icon] || MdIcons.MdHelpOutline;
        const isOdd = index % 2 !== 0;

        return (
          <section 
            key={service.id} 
            className={`service-strip-section reveal ${isOdd ? 'odd' : 'even'}`}
          >
            <div className="container">
              <div className="service-strip-grid">
                
                {/* Image Column */}
                <div className="service-strip-image-col">
                  <img 
                    src={service.id === 1 ? residentialImg : service.id === 2 ? corporateImg : service.id === 3 ? hospitalityImg : service.id === 4 ? retailImg : service.id === 5 ? kitchenImg : service.id === 6 ? furnitureImg : service.id === 7 ? fitoutImg : service.image} 
                    alt={service.title} 
                    className="service-strip-image"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                </div>

                {/* Content Column */}
                <div className="service-strip-content-col">
                  <div className="service-strip-icon-wrapper">
                    <IconComponent />
                  </div>
                  <h2 className="service-strip-title">{service.title}</h2>
                  <p className="service-strip-desc">{service.description}</p>
                  
                  <div className="service-inclusions-list">
                    <h4 className="inclusions-heading">What We Deliver:</h4>
                    <ul>
                      {service.inclusions.map((item, idx) => (
                        <li key={idx} className="inclusion-item">
                          <FaCheck className="check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-cta-btn">
                    <Button 
                      variant="outline" 
                      size="md" 
                      onClick={() => handleRequestConsultation(service.title)}
                    >
                      Request Consultation &rarr;
                    </Button>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Divider line between services, except the last one */}
            {index < services.length - 1 && (
              <div className="container">
                <div className="services-strip-divider"></div>
              </div>
            )}
          </section>
        );
      })}

      {/* 3. Consultation Modal */}
      {isModalOpen && (
        <div className="consultation-modal-overlay" onClick={() => !isLoading && setIsModalOpen(false)}>
          <div className="consultation-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => !isLoading && setIsModalOpen(false)} aria-label="Close modal">
              &times;
            </button>
            <div className="modal-header">
              <span className="modal-label">Exclusive Service Request</span>
              <h2 className="modal-title">Request Consultation</h2>
              <p className="modal-subtitle">Share your vision with us, and we will redirect you to WhatsApp to connect with our design team.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="modal-name">Full Name *</label>
                <input 
                  type="text" 
                  id="modal-name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder="e.g. Elena Vance"
                  className={errors.name ? 'input-error' : ''}
                  disabled={isLoading}
                  required
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="modal-phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="modal-phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    placeholder="e.g. +91 98765 43210"
                    className={errors.phone ? 'input-error' : ''}
                    disabled={isLoading}
                    required
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="modal-email">Email Address *</label>
                  <input 
                    type="email" 
                    id="modal-email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    placeholder="e.g. elena@apexholdings.com"
                    className={errors.email ? 'input-error' : ''}
                    disabled={isLoading}
                    required
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-service">Service Interested In</label>
                <input 
                  type="text" 
                  id="modal-service" 
                  name="service" 
                  value={selectedService} 
                  disabled
                  className="input-disabled"
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-details">Project Details</label>
                <textarea 
                  id="modal-details" 
                  name="details" 
                  value={formData.details} 
                  onChange={handleInputChange} 
                  placeholder="Tell us about your space, dimensions, or design style preferences..."
                  rows="4"
                  disabled={isLoading}
                />
              </div>

              <button type="submit" className="modal-submit-btn" disabled={isLoading}>
                {isLoading ? (
                  <span className="btn-loading-state">
                    <span className="spinner"></span>
                    Redirecting to WhatsApp...
                  </span>
                ) : (
                  <span>Initiate Consultation &rarr;</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Custom CSS for Services Page */}
      <style>{`
        .services-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(26, 26, 26, 0.7);
          z-index: 1;
        }
        .services-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }
        .services-hero-title {
          font-family: var(--font-display);
          font-size: 52px;
          color: var(--color-white);
          margin-top: 10px;
        }
        .service-strip-section {
          padding: 80px 0;
          background-color: var(--color-bg);
        }
        .service-strip-section.odd {
          background-color: var(--color-slate);
        }
        .service-strip-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        .service-strip-section.odd .service-strip-grid {
          grid-template-columns: 0.9fr 1.1fr;
        }
        .service-strip-section.odd .service-strip-image-col {
          order: 2;
        }
        .service-strip-section.odd .service-strip-content-col {
          order: 1;
        }
        .service-strip-image {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-left: 2.5px solid var(--color-gold);
        }
        .service-strip-section.odd .service-strip-image {
          border-left: none;
          border-right: 2.5px solid var(--color-gold);
        }
        .service-strip-icon-wrapper {
          font-size: 40px;
          color: var(--color-gold);
          margin-bottom: 16px;
          display: inline-block;
        }
        .service-strip-title {
          font-family: var(--font-display);
          font-size: 34px;
          color: var(--color-white);
          margin-bottom: 20px;
          font-weight: 500;
        }
        .service-strip-desc {
          font-size: 15.5px;
          line-height: 1.7;
          opacity: 0.8;
          margin-bottom: 30px;
        }
        .service-inclusions-list {
          margin-bottom: 30px;
        }
        .inclusions-heading {
          font-family: var(--font-body);
          font-size: 13px;
          text-transform: uppercase;
          color: var(--color-gold);
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }
        .inclusion-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14.5px;
          color: var(--color-ivory);
          margin-bottom: 12px;
          list-style: none;
        }
        .check-icon {
          color: var(--color-gold);
          font-size: 12px;
          flex-shrink: 0;
        }
        .services-strip-divider {
          width: 100%;
          height: 1px;
          background: rgba(201, 169, 110, 0.1);
          margin-top: 80px;
        }
        
        /* Modal Styles */
        .consultation-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.4s ease;
        }
        .consultation-modal-content {
          background: #141414;
          border: 1px solid rgba(201, 169, 110, 0.2);
          border-radius: 16px;
          width: 100%;
          max-width: 650px;
          padding: 40px;
          position: relative;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          animation: scaleUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .modal-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          background: transparent;
          border: none;
          color: var(--color-ivory);
          font-size: 32px;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.3s ease;
          line-height: 1;
        }
        .modal-close-btn:hover {
          opacity: 1;
          color: var(--color-gold);
        }
        .modal-header {
          margin-bottom: 30px;
          text-align: center;
        }
        .modal-label {
          font-family: var(--font-accent);
          font-style: italic;
          color: var(--color-gold);
          font-size: 14px;
          letter-spacing: 0.1em;
        }
        .modal-title {
          font-family: var(--font-display);
          font-size: 32px;
          color: var(--color-white);
          margin-top: 8px;
          margin-bottom: 12px;
          font-weight: 500;
        }
        .modal-subtitle {
          font-size: 14px;
          line-height: 1.6;
          color: var(--color-ivory);
          opacity: 0.7;
          max-width: 480px;
          margin: 0 auto;
        }
        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
        }
        .form-group label {
          font-family: var(--font-body);
          font-size: 12px;
          text-transform: uppercase;
          color: var(--color-gold);
          letter-spacing: 0.1em;
        }
        .form-group input, .form-group textarea {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(245, 240, 232, 0.12);
          border-radius: 8px;
          padding: 12px 16px;
          color: var(--color-white);
          font-family: var(--font-body);
          font-size: 14px;
          transition: all 0.3s ease;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--color-gold);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 0 1px var(--color-gold);
        }
        .form-group input.input-disabled {
          background: rgba(255, 255, 255, 0.01);
          color: rgba(245, 240, 232, 0.4);
          cursor: not-allowed;
          border-color: rgba(245, 240, 232, 0.05);
        }
        .form-group .input-error {
          border-color: #E74C3C;
        }
        .error-text {
          color: #E74C3C;
          font-size: 11px;
          margin-top: -2px;
        }
        .modal-submit-btn {
          background: var(--color-gold);
          color: var(--color-bg);
          border: 1px solid var(--color-gold);
          padding: 16px;
          font-family: var(--font-body);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-submit-btn:hover:not(:disabled) {
          background: transparent;
          color: var(--color-gold);
        }
        .modal-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .btn-loading-state {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(26, 26, 26, 0.1);
          border-top-color: var(--color-bg);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: inline-block;
        }
        .modal-submit-btn:hover .spinner {
          border-top-color: var(--color-gold);
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 991px) {
          .service-strip-grid, .service-strip-section.odd .service-strip-grid {
            grid-template-columns: 1fr !important;
            gap: 40px;
          }
          .service-strip-image-col, .service-strip-section.odd .service-strip-image-col {
            order: 1 !important;
          }
          .service-strip-content-col, .service-strip-section.odd .service-strip-content-col {
            order: 2 !important;
          }
          .service-strip-image {
            height: 350px;
            border-left: 2.5px solid var(--color-gold) !important;
            border-right: none !important;
          }
        }
        @media (max-width: 768px) {
          .services-hero-title {
            font-size: 36px;
          }
          .service-strip-title {
            font-size: 26px;
          }
        }
        @media (max-width: 576px) {
          .form-group-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .consultation-modal-content {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
