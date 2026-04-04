import React from 'react';
import NicheSections from '../components/NicheSections';
import ContactCta from '../components/ContactCta';

const NichesPage = () => {
  return (
    <div className="page-transition pt-24">
      <div className="section-title text-center mb-4 mt-8">Industries We Serve</div>
      <div className="section-subtitle">High-converting solutions tailored for your business niche.</div>
      <NicheSections />
      <ContactCta />
    </div>
  );
};

export default NichesPage;
