import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Happy Customer',
    text: "Before hiring PrimeForge, my store looked like a cheap template. Within weeks of launching the new design, our conversion rate practically doubled.",
  },
  {
    id: 2,
    name: 'Dr. Rajesh Kumar',
    role: 'Satisfied Client',
    text: "The best web development and quality service providers in town. The built-in booking system completely changed how we handle appointments.",
  },
  {
    id: 3,
    name: 'Marcus T.',
    role: 'Premium Client',
    text: "The owner is very soft spoken and kind in nature. Great experience! The aesthetics, the smoothness exactly match the multi-million dollar properties I sell.",
  }
];

const Testimonials = () => {
  return (
    <section className="section" style={{ background: '#0a0a0a', padding: '100px 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
            What Our Customers Say
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: '#141414',
                padding: '50px 30px',
                borderRadius: '8px',
                border: '1px solid #222',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '30px' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#d4af37" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              
              {/* Text */}
              <p style={{ 
                fontSize: '1.2rem', 
                lineHeight: 1.8, 
                color: '#e5e5e5', 
                fontStyle: 'italic', 
                marginBottom: '30px',
                fontFamily: 'var(--font-body)',
                fontWeight: 300
              }}>
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div style={{ color: '#a3a3a3', fontSize: '1rem', fontWeight: 500 }}>
                - {testimonial.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
