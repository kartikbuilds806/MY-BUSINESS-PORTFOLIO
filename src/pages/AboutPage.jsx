import React from 'react';
import ContactCta from '../components/ContactCta';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="page-transition min-h-screen">
      <div className="container py-20" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
            About <span style={{ color: 'var(--accent-secondary)' }}>PrimeForge</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '60px' }}>
            Your strategic partner in Digital Growth. We build not just websites, but high-converting assets that drive revenue.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '60px' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="PrimeForge Office" 
            style={{ width: '100%', height: 'auto', borderRadius: '24px', objectFit: 'cover' }}
          />
        </motion.div>

        {/* Mission Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '25px', fontFamily: 'var(--font-heading)' }}>
            Our Mission
          </h2>

          <div style={{
             background: 'var(--accent-primary)',
             padding: '40px',
             borderRadius: '16px',
             marginBottom: '40px',
             boxShadow: 'var(--shadow-card)'
          }}>
            <p style={{ fontSize: '1.25rem', fontStyle: 'italic', fontWeight: '500', lineHeight: 1.6, color: '#ffffff' }}>
              "Engineer digital experiences that completely dominate SEO, load instantly, and turn traffic into booked revenue."
            </p>
          </div>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '30px' }}>
            Founded on the principles of coding excellence and complete transparency, PrimeForge has been redefining web development for service businesses. Our team works tirelessly to ensure every project stands as a testament to premium quality and conversion mastery. We don't rely on pre-made templates; everything is 100% custom-coded.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '40px', marginBottom: '80px' }}>
             <div style={{ display: 'flex', gap: '5px' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>5 Star Rated Agency</span>
          </div>
        </motion.div>
      </div>

      <ContactCta />
    </div>
  );
};

export default AboutPage;
