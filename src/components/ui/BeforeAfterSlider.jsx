/* FILE: src/components/ui/BeforeAfterSlider.jsx */
import React from 'react';
import ReactCompareImage from 'react-compare-image';

export const BeforeAfterSlider = ({ beforeImage, afterImage, label, className = '' }) => {
  return (
    <div className={`before-after-slider-container ${className}`}>
      {label && <h4 className="before-after-title">{label}</h4>}
      <div className="before-after-wrapper">
        <span className="before-after-label before">Before</span>
        <span className="before-after-label after">After</span>
        <ReactCompareImage
          leftImage={beforeImage}
          rightImage={afterImage}
          sliderLineColor="var(--color-gold)"
          sliderLineWidth={2}
          handleSize={36}
          aspectRatio="wider"
        />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
