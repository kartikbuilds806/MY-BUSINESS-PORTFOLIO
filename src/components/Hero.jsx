import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'calc(var(--nav-height) + 40px)'
    }}>
      {/* Background sophisticated shapes */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: -1 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              padding: '8px 20px', 
              borderRadius: '100px', 
              background: 'rgba(0,0,0,0.04)', 
              border: '1px solid var(--border-color)',
              marginBottom: '30px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#25D366' }}></span>
              Accepting New Projects
            </div>

            <h1 style={{ 
              fontSize: 'clamp(3rem, 8vw, 6rem)', 
              lineHeight: 1.05, 
              marginBottom: '30px', 
              letterSpacing: '-0.04em' 
            }}>
              We build websites that <span style={{ color: 'var(--accent-secondary)' }}>bring you clients</span>, not just traffic.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', 
              color: 'var(--text-secondary)', 
              maxWidth: '650px', 
              margin: '0 auto 50px',
              lineHeight: 1.6
            }}
          >
            Helping ambitious businesses dominate their niche with premium, high-converting digital experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/start-project" className="btn btn-primary" style={{ padding: '20px 40px', fontSize: '1.1rem' }}>
              Start a Project <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn btn-outline" style={{ padding: '20px 40px', fontSize: '1.1rem', background: 'white' }}>
              Book a Call
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid var(--border-light)' }}
          >
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '30px' }}>Trusted by fastest growing businesses</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', opacity: 0.5, filter: 'grayscale(100%)' }}>
              {/* Abstract simple shapes as logos since fake names */}
              <div style={{ fontWeight: 800, fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>LUXE.REALTY</div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>CLINIC+</div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>ELEVATE E-COM</div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>NOVA TECH</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
