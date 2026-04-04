import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'E-commerce Brand Owner',
    text: "Before hiring PrimeForge, my store looked like a cheap template. Within weeks of launching the new design, our conversion rate practically doubled. The investment paid for itself in exactly 14 days. These guys are the real deal.",
    result: 'Conversion Rate Doubled'
  },
  {
    id: 2,
    name: 'Dr. Rajesh Kumar',
    role: 'Local Dental Clinic',
    text: "We were relying completely on walk-ins and word of mouth. The new website they built acts like a 24/7 receptionist. The built-in booking system completely changed how we handle appointments. Incredible work.",
    result: '3x Patient Bookings'
  },
  {
    id: 3,
    name: 'Marcus T.',
    role: 'Luxury Real Estate Agent',
    text: "I needed a website that matched the multi-million dollar properties I was selling. PrimeForge delivered a masterpiece. The aesthetics, the smoothness, and the premium feel instantly builds trust with my high-net-worth clients.",
    result: 'Elevated Brand Trust'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', padding: '150px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)', gap: '80px', alignItems: 'center' }} className="max-lg:grid-cols-1">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-left" style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Don't take our word for it.</h2>
            <p className="section-subtitle text-left" style={{ margin: '0 0 40px 0', fontSize: '1.2rem' }}>
              We measure our success by the bottom-line results we generate for our clients. 
            </p>
            
            <div style={{ display: 'flex', gap: '15px' }}>
              <button 
                onClick={prev}
                style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
                className="hover:bg-accent-primary hover:text-white"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={next}
                style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--accent-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
                className="hover:bg-black hover:-translate-y-1"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>

          <div style={{ position: 'relative', height: '400px' }}>
            <Quote size={120} color="var(--border-light)" style={{ position: 'absolute', top: '-40px', left: '-40px', zIndex: 0 }} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                className="glass p-12 rounded-3xl"
              >
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                  <p style={{ fontSize: '1.5rem', lineHeight: 1.6, fontWeight: 500, color: 'var(--text-primary)', fontStyle: 'italic' }}>
                    "{testimonials[current].text}"
                  </p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '30px', marginTop: '30px' }}>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>{testimonials[current].name}</h4>
                      <p style={{ color: 'var(--text-secondary)' }}>{testimonials[current].role}</p>
                    </div>
                    <div style={{ background: 'var(--bg-main)', padding: '8px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-secondary)' }}>
                      {testimonials[current].result}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
