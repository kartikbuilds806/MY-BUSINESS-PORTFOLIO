import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const niches = [
  {
    title: 'Real Estate',
    description: 'Property listings, lead generation, and location maps.',
    demos: [
      { name: 'AGS Realtors', link: 'https://ags-realtors.vercel.app' },
      { name: 'Tandon Realtors', link: 'https://tandonrealtos.netlify.app' },
      { name: 'Ruddy PI Estate', link: 'https://real-estate-website-ruddy-pi.vercel.app' }
    ]
  },
  {
    title: 'Dental Clinics',
    description: 'Appointment booking, service showcase, trust-building UI.',
    demos: [
      { name: 'Elite Dental Care', link: 'https://elitedental-care.netlify.app' },
      { name: 'The City Clinic', link: 'https://the-city-clinic-dehradun.netlify.app' },
      { name: 'V-Care Clinic', link: 'https://v-care.netlify.app' }
    ]
  },
  {
    title: 'Jewellery Shops',
    description: 'Product showcase, premium UI, catalog layout.',
    demos: [
      { name: 'Suvanna Jeweller', link: 'https://suvanna-jeweller.vercel.app' }
    ]
  },
  {
    title: 'Pet Clinics',
    description: 'Appointment booking, service details, clean UI.',
    demos: [
      { name: 'Petcuro Surgery', link: 'https://petcuro-sugery.netlify.app' }
    ]
  },
  {
    title: 'Salons & Makeover',
    description: 'Service pricing, booking system, image gallery.',
    demos: [
      { name: 'Stylish Mahi Unisex', link: 'https://stylishmahi-unisex-salon.netlify.app' },
      { name: 'Cloud 9 Salon', link: 'https://cloud9salon.netlify.app' },
      { name: 'Ridhi Makeover', link: 'https://ridhimakeover.netlify.app' }
    ]
  },
  {
    title: 'Restaurants & Cafes',
    description: 'Menu display, table booking, food gallery.',
    demos: [
      { name: 'Zaika Cafe', link: 'https://zaika-cafe-restaurant.netlify.app' },
      { name: 'Crown Restaurant', link: 'https://crown-restaurant.netlify.app' },
      { name: 'Zaika Vercel', link: 'https://zaikarestaurant.vercel.app' }
    ]
  },
  {
    title: 'Travellers / Tours',
    description: 'Tour packages, booking forms, destination showcase.',
    demos: [
      { name: 'Smart Choice Travels', link: 'https://smartchoicetravels.netlify.app' }
    ]
  }
];

const NicheSections = () => {
  return (
    <section id="work" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Industry-Specific <span className="text-gradient">Demo Sites</span></h2>
        <p className="section-subtitle">Real examples showing exactly what you'll get based on your business type.</p>
      </motion.div>

      <div className="grid grid-cols-3">
        {niches.map((niche, index) => (
          <motion.div
            key={niche.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass"
            style={{ padding: '30px', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{niche.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', flex: 1 }}>{niche.description}</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Demos:</h4>
              {niche.demos.map((demo, i) => (
                <a 
                  key={i} 
                  href={demo.link} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    color: 'var(--text-primary)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                  }}
                >
                  <span style={{ fontSize: '0.95rem' }}>{demo.name}</span>
                  <ExternalLink size={16} color="var(--text-secondary)" />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NicheSections;
