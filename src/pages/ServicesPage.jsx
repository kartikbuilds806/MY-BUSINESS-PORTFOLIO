import React from 'react';
import Services from '../components/Services';
import Process from '../components/Process';
import ContactCta from '../components/ContactCta';

const ServicesPage = () => {
  return (
    <div className="page-transition pt-24">
      <div className="section-title text-center mb-4 mt-8">Our Services</div>
      <div className="section-subtitle">We build websites that bring you clients, not just traffic.</div>
      <Services />
      <Process />
      <ContactCta />
    </div>
  );
};

export default ServicesPage;
