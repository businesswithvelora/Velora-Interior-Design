/* FILE: src/components/sections/TestimonialsSection.jsx */
import React, { useState, useEffect, useRef } from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { SectionHeading } from '../ui/SectionHeading';
import { TestimonialCard } from '../ui/TestimonialCard';
import { Button } from '../ui/Button';
import { testimonials } from '../../data/testimonials';

export const TestimonialsSection = () => {
  const displayTestimonials = testimonials.slice(0, 6);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const autoPlayRef = useRef();

  // Listen to resize to determine items per slide dynamically
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 992) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = displayTestimonials.length - itemsPerSlide + 1;

  const nextSlide = () => {
    setActiveIndex((prev) => {
      if (prev >= totalSlides - 1) return 0;
      return prev + 1;
    });
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const trackStyle = {
    display: 'flex',
    gap: '30px',
    transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
    transform: `translateX(calc(-${activeIndex * (100 / itemsPerSlide)}% - ${activeIndex * (30 / itemsPerSlide)}px))`
  };

  return (
    <section className="section-padding reveal" style={{ backgroundColor: 'var(--color-slate)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <SectionLabel text="Testimonials" />
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Read reviews from high-net-worth individuals and corporate partners regarding our designs, details, and project execution."
          />
        </div>

        {/* Carousel Slider */}
        <div className="testimonials-carousel-wrapper reveal">
          <div style={trackStyle}>
            {displayTestimonials.map((item) => {
              // Dynamically adjust item card width style
              const cardStyle = {
                flex: `0 0 calc(${100 / itemsPerSlide}% - ${(30 * (itemsPerSlide - 1)) / itemsPerSlide}px)`,
                maxWidth: `calc(${100 / itemsPerSlide}% - ${(30 * (itemsPerSlide - 1)) / itemsPerSlide}px)`
              };
              return (
                <div key={item.id} style={cardStyle}>
                  <TestimonialCard 
                    name={item.name}
                    location={item.location}
                    review={item.review}
                    rating={item.rating}
                    projectType={item.projectType}
                    image={item.image}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot Indicators */}
        {totalSlides > 1 && (
          <div className="carousel-indicators">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator-dot ${activeIndex === index ? 'active' : ''} clickable`}
                onClick={() => handleIndicatorClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '50px' }} className="reveal">
          <Button variant="outline" size="md" href="/testimonials">
            Read All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
