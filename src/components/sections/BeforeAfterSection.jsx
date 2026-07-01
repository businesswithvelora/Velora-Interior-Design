/* FILE: src/components/sections/BeforeAfterSection.jsx */
import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { SectionHeading } from '../ui/SectionHeading';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';

import livingroomBefore from '../../assets/images/home/livingroom_before.webp';
import livingroomAfter from '../../assets/images/home/livingroom_after.webp';
import kitchenBefore from '../../assets/images/home/kitchen_before.webp';
import kitchenAfter from '../../assets/images/home/kitchen_after.webp';
import bedroomBefore from '../../assets/images/home/bedroom_before.webp';
import bedroomAfter from '../../assets/images/home/bedroom_after.webp';
import officeBefore from '../../assets/images/home/office_before.webp';
import officeAfter from '../../assets/images/home/office_after.webp';

export const BeforeAfterSection = () => {
  const transformations = [
    {
      id: 1,
      label: "Living Room",
      before: livingroomBefore,
      after: livingroomAfter
    },
    {
      id: 2,
      label: "Modular Kitchen",
      before: kitchenBefore,
      after: kitchenAfter
    },
    {
      id: 3,
      label: "Master Bedroom",
      before: bedroomBefore,
      after: bedroomAfter
    },
    {
      id: 4,
      label: "Office Space",
      before: officeBefore,
      after: officeAfter
    }
  ];

  return (
    <section className="section-padding reveal">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <SectionLabel text="Transformations" />
          <SectionHeading 
            title="The Velora Transformation" 
            subtitle="Slide the handle to view the transition from initial raw structures to fully refined luxury architectural spaces."
          />
        </div>

        <div className="before-after-grid reveal">
          {transformations.map((item) => (
            <div key={item.id} className="before-after-item">
              <BeforeAfterSlider 
                beforeImage={item.before}
                afterImage={item.after}
                label={item.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
