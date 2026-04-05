import React from 'react';
import ContactCta from '../components/ContactCta';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="page-transition min-h-screen pb-20">
      <div className="container py-20">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="section-title" style={{ fontSize: '4.5rem', marginBottom: '1.5rem' }}>
              Crafting Digital Excellence
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              More than just an agency — we are your strategic growth partners in the digital space.
            </p>
          </motion.div>
        </div>
        
        {/* Founder Section - Split Layout for breathing room */}
        <div className="responsive-grid-2 weighted-left" style={{ marginBottom: '80px' }}>
          
          {/* Aesthetic visual representation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="glass" style={{ height: '100%', minHeight: 'clamp(300px, 40vw, 450px)', borderRadius: '32px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent-primary)', padding: '40px' }}
          >
             <div style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             <div style={{ textAlign: 'center', zIndex: 1 }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <img src="https://ui-avatars.com/api/?name=Kartik+Sharma&background=111827&color=fff&size=100" alt="Kartik Sharma" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.75rem', marginBottom: '5px', fontWeight: '500' }}>Kartik Sharma</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '600' }}>Founder & CEO</p>
             </div>
          </motion.div>

          {/* Clean Text Presentation */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-secondary)', marginBottom: '16px' }}>
              Our Philosophy
            </div>
            <h2 style={{ fontSize: '2.8rem', fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: '30px', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              We build assets, <br/><span style={{ color: 'var(--text-secondary)', fontStyle: 'italic', fontWeight: 400 }}>not just websites.</span>
            </h2>
            
            <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p>
                I built PrimeForge to stop the endless cycle of generic, underperforming websites. An online presence shouldn't just exist; it needs to perform, convert, and act as your hardest-working sales asset around the clock.
              </p>
              <p>
                We don't believe in templates. We believe in deeply understanding your niche, the psychology of your buyers, and engineering a digital experience that builds instant trust and undeniable authority.
              </p>
              
              {/* Refined Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', borderTop: '1px solid var(--border-light)', paddingTop: '30px', marginTop: '10px' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', lineHeight: 1, fontWeight: 600 }}>100%</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Client Satisfaction Focus</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', lineHeight: 1, fontWeight: 600 }}>24/7</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Premium Support</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
      <ContactCta />
    </div>
  );
};

export default AboutPage;
