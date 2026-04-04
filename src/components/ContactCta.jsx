import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PhoneCall, ArrowRight } from 'lucide-react';

const ContactCta = () => {
  return (
    <section className="section" style={{ padding: '80px 0 40px' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ 
            background: 'var(--accent-primary)', 
            borderRadius: '32px', 
            padding: '80px 40px', 
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle elegant gradient overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,99,235,0.2) 0%, transparent 100%)', zIndex: 0 }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'white', fontFamily: 'var(--font-heading)', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.03em' }}>
              Ready to scale your business?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
              Let's engineer a digital experience that converts visitors into high-paying clients.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/start-project" className="btn btn-accent" style={{ padding: '18px 36px', fontSize: '1.1rem' }}>
                Start Your Project <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn" style={{ padding: '18px 36px', fontSize: '1.1rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}>
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCta;
