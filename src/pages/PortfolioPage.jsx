import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ContactCta from '../components/ContactCta';

const portfolioItems = [
  { id: 1, title: 'Luxury Real Estate', category: 'Real Estate Platform', result: '+45% Leads', link: '#', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', size: 'large' },
  { id: 2, title: 'Smile Dental Clinic', category: 'Healthcare Booking', result: '3x Appts', link: '#', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'small' },
  { id: 3, title: 'Suvarna Jewellers', category: 'E-Commerce Store', result: '$12k/mo Revenue', link: '#', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', size: 'small' },
  { id: 4, title: 'Paws & Claws', category: 'Vet Clinic Site', result: 'No.1 Local SEO', link: '#', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', size: 'large' },
];

const PortfolioPage = () => {
  return (
    <div className="page-transition min-h-screen pb-20">
      <div className="container py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title text-left" style={{ fontSize: '4.5rem', marginBottom: '1rem', maxWidth: '800px' }}>
            Featured Case Studies
          </h1>
          <p className="section-subtitle text-left" style={{ margin: '0 0 60px 0', fontSize: '1.4rem', maxWidth: '600px' }}>
            We don't just build websites. We build revenue engines. Have a look at some of our recent transformations.
          </p>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', marginBottom: '100px' }}>
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ 
                gridColumn: item.size === 'large' ? 'span 8' : 'span 4',
                position: 'relative'
              }}
              className="group max-lg:!col-span-12"
            >
              <div style={{ overflow: 'hidden', borderRadius: '24px', backgroundColor: '#f3f4f6', height: item.size === 'large' ? '600px' : '450px', position: 'relative' }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  className="group-hover:scale-105"
                />
                
                {/* Floating Tag */}
                <div style={{ position: 'absolute', top: '30px', left: '30px', background: 'var(--bg-main)', padding: '8px 20px', borderRadius: '100px', fontWeight: 700, fontSize: '0.9rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  {item.category}
                </div>

                {/* Info Overlay on Hover */}
                <div style={{
                  position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%)',
                  opacity: 0, transition: 'opacity 0.4s', display: 'flex', alignItems: 'flex-end', padding: '40px'
                }} className="group-hover:opacity-100">
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
                    <div style={{ color: 'white' }}>
                      <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Result: {item.result}</div>
                      <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>{item.title}</h3>
                    </div>
                    <a href={item.link} target="_blank" rel="noreferrer" style={{ background: 'white', color: 'black', padding: '12px 24px', borderRadius: '100px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', transition: 'transform 0.3s' }} className="hover:-translate-y-1">
                       Visit Live Site <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience & Trust Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass"
          style={{ padding: '60px', borderRadius: '32px', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '40px', alignItems: 'center', border: '1px solid var(--border-light)' }}
        >
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '15px' }}>
              PROVEN EXPERTISE
            </div>
            <h3 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '20px' }}>
              Engineered for Growth.
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '30px' }}>
              With years of full-stack engineering and visual design experience, I don't rely on pre-made templates. I code custom solutions that dominate SEO, load instantly, and turn your traffic into booked revenue. 
            </p>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', fontWeight: 'bold' }}>
               <img src="https://ui-avatars.com/api/?name=Kartik+Sharma&background=111827&color=fff&size=100" alt="Kartik Sharma" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
               <span>Kartik Sharma - Director, PrimeForge</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ background: 'var(--bg-main)', padding: '30px', borderRadius: '16px', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--accent-secondary)' }}>50+</div>
              <div style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Projects Launched</div>
            </div>
            <div style={{ background: 'var(--bg-main)', padding: '30px', borderRadius: '16px', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--accent-secondary)' }}>100%</div>
              <div style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Custom Code</div>
            </div>
            <div style={{ background: 'var(--bg-main)', padding: '30px', borderRadius: '16px', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--accent-secondary)' }}>24/7</div>
              <div style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Support Lifecycle</div>
            </div>
            <div style={{ background: 'var(--accent-primary)', padding: '30px', borderRadius: '16px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '10px' }}>Ready to start?</div>
              <a href="/contact" style={{ fontWeight: 800, textDecoration: 'underline' }}>Book a call &rarr;</a>
            </div>
          </div>
        </motion.div>
      </div>
      <ContactCta />
    </div>
  );
};

export default PortfolioPage;
