import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Niches', path: '/niches' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
      padding: isScrolled ? '15px 0' : '30px 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="20" fill="#111827"/>
            <path d="M30 70V30L55 50L30 70Z" fill="white"/>
            <path d="M70 30V70L45 50L70 30Z" fill="white"/>
          </svg>
          <span style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            PrimeForge
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '35px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              style={({ isActive }) => ({ 
                fontWeight: 600, 
                fontSize: '0.95rem',
                color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)', 
                transition: 'color 0.3s ease' 
              })}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseOut={(e) => {
                if(!e.currentTarget.classList.contains('active')) {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Contact & Actions Desktop */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link to="/contact" className="btn btn-outline" style={{ padding: '10px 24px', borderRadius: '100px', fontSize: '0.9rem', border: '1px solid var(--border-color)' }}>
            Book a Call
          </Link>
          <Link to="/start-project" className="btn btn-primary" style={{ padding: '10px 24px', borderRadius: '100px', fontSize: '0.9rem' }}>
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" style={{ padding: '8px', display: 'none', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X color="var(--text-primary)" size={28} /> : <Menu color="var(--text-primary)" size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
            style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--bg-main)', padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: '24px', borderBottom: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
          >
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)} 
                style={({ isActive }) => ({ 
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)', 
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-heading)'
                })}
              >
                {link.name}
              </NavLink>
            ))}
            
            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
               <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-outline" style={{ width: '100%', padding: '16px', display: 'flex', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                Book a Call
              </Link>
               <Link to="/start-project" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary" style={{ width: '100%', padding: '16px', display: 'flex', justifyContent: 'center' }}>
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
