import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--border-light)', 
      padding: '40px 0', 
      marginTop: '80px',
      background: 'rgba(10, 10, 12, 0.9)'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'var(--accent-gradient)' }}></div>
          Prime<span className="text-gradient">Forge</span>
        </Link>
        
        <div style={{ display: 'flex', gap: '24px', color: 'var(--text-secondary)', flexWrap: 'wrap', justifyContent: 'center' }}>
           <Link to="/services" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='white'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}>Services</Link>
           <Link to="/niches" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='white'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}>Niches</Link>
           <Link to="/portfolio" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='white'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}>Portfolio</Link>
           <Link to="/about" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='white'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}>About</Link>
           <Link to="/start-project" style={{ transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='white'} onMouseOut={e=>e.currentTarget.style.color='var(--text-secondary)'}>Start a Project</Link>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '20px' }}>
          &copy; {new Date().getFullYear()} PrimeForge. All rights reserved. Let's build something great.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
