import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';

const FloatingActions = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--accent-gradient)',
          transformOrigin: '0%',
          zIndex: 9999
        }}
      />

      <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <button 
          onClick={scrollToTop}
          className="glass"
          style={{ width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}
          title="Back to Top"
        >
          <ArrowUp size={24} />
        </button>

        <a 
          href="tel:+918533925291" 
          style={{ 
            width: '60px', height: '60px', 
            borderRadius: '50%', background: 'var(--accent-primary)', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            color: 'white',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
          }}
          title="Call Now"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>

        <a 
          href="https://wa.me/918533925291?text=Hi,%20I%20am%20interested%20in%20a%20website%20project" 
          target="_blank" 
          rel="noreferrer"
          style={{ 
            width: '60px', height: '60px', 
            borderRadius: '50%', background: '#25D366', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            color: 'white',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
            transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(37, 211, 102, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.4)';
          }}
          title="Chat on WhatsApp"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </>
  );
};

export default FloatingActions;
