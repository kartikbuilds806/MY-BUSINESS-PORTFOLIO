import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, CalendarDays, Search, PenTool } from 'lucide-react';

const servicesList = [
  {
    icon: <Layout size={32} />,
    title: 'Business Website Development',
    whatItIs: 'A complete, professionally designed website customized for your brand.',
    result: 'Establishes a powerful online presence that makes you look like the top choice in your local area.'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'High-Converting Landing Pages',
    whatItIs: 'A single page highly focused on getting visitors to take one specific action.',
    result: 'Reduces bounce rates and dramatically increases your ad campaign ROI.'
  },
  {
    icon: <CalendarDays size={32} />,
    title: 'Booking System Integration',
    whatItIs: 'Automated calendar scheduling embedded directly on your site.',
    result: 'Saves you hours of manual messaging and secures appointments instantly.'
  },
  {
    icon: <Search size={32} />,
    title: 'SEO Optimization',
    whatItIs: 'Technical setup to make sure Google finds and favors your website.',
    result: 'Brings you free, organic traffic from people already searching for your services.'
  },
  {
    icon: <PenTool size={32} />,
    title: 'Maintenance & Support',
    whatItIs: 'Ongoing updates, security checks, and content edits whenever needed.',
    result: 'Keeps your site running fast and secure, giving you zero technical headaches.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section container" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(10,10,12,0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">What We Can <span className="text-gradient">Do For You</span></h2>
        <p className="section-subtitle">No technical jargon. Just clear solutions that get you measurable results.</p>
      </motion.div>

      <div className="grid grid-cols-2" style={{ position: 'relative', zIndex: 1 }}>
        {servicesList.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass"
            style={{ 
              padding: '30px', 
              borderRadius: '16px',
              gridColumn: index === servicesList.length - 1 && servicesList.length % 2 !== 0 ? '1 / -1' : 'auto' 
            }}
          >
            <div style={{ 
              width: '60px', height: '60px', 
              borderRadius: '12px', 
              background: 'var(--border-light)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--accent-primary)',
              marginBottom: '20px'
            }}>
              {service.icon}
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{service.title}</h3>
            
            <div style={{ marginBottom: '15px' }}>
              <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>What it is: </span>
              <span style={{ color: 'var(--text-secondary)' }}>{service.whatItIs}</span>
            </div>
            
            <div>
              <span style={{ fontWeight: '600', color: 'var(--accent-primary)' }}>The Result: </span>
              <span style={{ color: 'var(--text-secondary)' }}>{service.result}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
