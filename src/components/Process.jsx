import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Monitor, ThumbsUp, CreditCard, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <PhoneCall size={24} />,
    title: '1. Contact / Book Call',
    desc: 'We discuss your goals, target audience, and specific requirements.'
  },
  {
    icon: <Monitor size={24} />,
    title: '2. Get Free Demo Website',
    desc: 'Within 48 hours, see a live demo of what your site could look like.'
  },
  {
    icon: <ThumbsUp size={24} />,
    title: '3. Approve Design',
    desc: 'You review the demo. We refine and tweak it until it perfectly matches your vision.'
  },
  {
    icon: <CreditCard size={24} />,
    title: '4. Payment',
    desc: 'Once you are 100% satisfied, we process the payment to lock in the final build.'
  },
  {
    icon: <Rocket size={24} />,
    title: '5. Final Delivery',
    desc: 'We launch your website, connect your domain, and you start getting clients.'
  }
];

const Process = () => {
  return (
    <section id="process" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        <h2 className="section-title">How We <span className="text-gradient">Work</span></h2>
        <p className="section-subtitle">A transparent, risk-free 5-step process from our first chat to your live website.</p>
      </motion.div>

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* Timeline Line */}
        <div style={{
          position: 'absolute',
          left: '40px',
          top: '30px',
          bottom: '30px',
          width: '2px',
          background: 'var(--border-color)',
          zIndex: 0
        }} className="timeline-line"></div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            style={{
              display: 'flex',
              gap: '30px',
              marginBottom: index !== steps.length - 1 ? '40px' : '0',
              position: 'relative',
              zIndex: 1
            }}
          >
            {/* Timeline Node */}
            <div style={{
              width: '80px',
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--bg-dark-secondary)',
                border: '2px solid var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)'
              }}>
                {step.icon}
              </div>
            </div>

            {/* Content card */}
            <div className="glass" style={{ padding: '24px', borderRadius: '16px', flex: 1 }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .timeline-line { left: 30px !important; }
        }
      `}</style>
    </section>
  );
};

export default Process;
