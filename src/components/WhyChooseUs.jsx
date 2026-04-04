import React from 'react';
import { motion } from 'framer-motion';
import { Zap, PiggyBank, Smartphone, HeartHandshake, HeadphonesIcon } from 'lucide-react';

const reasons = [
  { icon: <Zap size={32} />, title: 'Fast Delivery', desc: 'Go live in 2 to 5 days, not weeks.' },
  { icon: <PiggyBank size={32} />, title: 'Budget-Friendly', desc: 'Premium design without the agency price tag.' },
  { icon: <Smartphone size={32} />, title: 'Mobile Optimized', desc: 'Looks and performs perfectly on any device.' },
  { icon: <HeartHandshake size={32} />, title: 'Client-Focused', desc: 'Built to build trust and convert visitors into clients.' },
  { icon: <HeadphonesIcon size={32} />, title: 'Free Consultation', desc: 'Expert advice on your digital strategy, no strings attached.' },
];

const WhyChooseUs = () => {
  return (
    <section className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Why <span className="text-gradient">Choose Us?</span></h2>
      </motion.div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        marginTop: '40px'
      }}>
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass"
            style={{
              padding: '24px',
              borderRadius: '16px',
              flex: '1 1 250px',
              maxWidth: '350px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div style={{ color: 'var(--accent-primary)', marginBottom: '16px' }}>
              {reason.icon}
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{reason.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{reason.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
