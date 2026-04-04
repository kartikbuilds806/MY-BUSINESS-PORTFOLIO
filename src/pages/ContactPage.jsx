import React from 'react';
import PremiumBookingSystem from '../components/PremiumBookingSystem';

const ContactPage = () => {
  return (
    <div className="page-transition min-h-screen pb-24">
      <div className="container py-16">
        <h1 className="section-title text-left" style={{ fontSize: '4.5rem', marginBottom: '1rem', maxWidth: '800px', letterSpacing: '-0.04em' }}>
          Let's build your pipeline.
        </h1>
        <p className="section-subtitle text-left" style={{ margin: '0 0 60px 0', fontSize: '1.4rem', maxWidth: '600px', color: 'var(--text-secondary)' }}>
          Select a time that works for you, or skip the line and talk to us directly right now.
        </p>
        
        <div className="grid grid-cols-2 gap-20 mt-16 max-lg:grid-cols-1">
          {/* Left Column Redesign */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '40px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '15px' }}>
                DIRECTOR / FOUNDER
              </div>
              <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '10px' }}>
                Kartik Sharma
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '400px' }}>
                "I personally oversee every core strategy session to ensure your website is engineered to convert."
              </p>
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '20px' }}>
                INSTANT ACCESS
              </div>
              
              <div style={{ display: 'grid', gap: '30px' }}>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '5px' }}>Direct Phone</div>
                  <a href="tel:+918533925291" style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseOver={(e)=>e.currentTarget.style.color='var(--accent-secondary)'} onMouseOut={(e)=>e.currentTarget.style.color='var(--text-primary)'}>
                    +91 8533925291
                  </a>
                </div>
                
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '5px' }}>Fastest Reply</div>
                  <a href="https://wa.me/918533925291" target="_blank" rel="noreferrer" style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#25D366', transition: 'opacity 0.2s' }} onMouseOver={(e)=>e.currentTarget.style.opacity='0.7'} onMouseOut={(e)=>e.currentTarget.style.opacity='1'}>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <PremiumBookingSystem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
