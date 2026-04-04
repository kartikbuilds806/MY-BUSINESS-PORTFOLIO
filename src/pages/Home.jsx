import React from 'react';
import Hero from '../components/Hero';
import NicheSections from '../components/NicheSections';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactCta from '../components/ContactCta';

const Home = () => {
  return (
    <div className="page-transition">
      <Hero />
      <NicheSections />
      <Services />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactCta />
    </div>
  );
};

export default Home;
