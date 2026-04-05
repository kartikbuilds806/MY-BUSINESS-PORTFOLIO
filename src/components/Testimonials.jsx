import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

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
        <div className="responsive-grid-2 weighted-right">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-left" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1, textAlign: 'left' }}>Don't take our word for it.</h2>
            <p className="section-subtitle text-left" style={{ margin: '0 0 40px 0', fontSize: '1.2rem', textAlign: 'left' }}>
              We measure our success by the bottom-line results we generate for our clients. 
            </p>
            
            <div style={{ display: 'flex', gap: '15px' }}>
              <button 
                onClick={prev}
                style={{ width: '50px', height: '50px', borderRadius: '50%', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
                className="btn-outline"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={next}
                style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--accent-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
                className="btn-primary"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>

          {/* Testimonial Card */}
          <div style={{ position: 'relative', width: '100%' }}>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) { next(); }
                  else if (swipe > swipeConfidenceThreshold) { prev(); }
                }}
                style={{ 
                  position: 'relative', 
                  zIndex: 1, 
                  padding: 'clamp(30px, 6vw, 50px)', 
                  borderRadius: '24px', 
                  minHeight: '340px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)',
                  cursor: 'grab'
                }}
                whileTap={{ cursor: 'grabbing' }}
              >
                <Quote size={48} color="var(--accent-secondary)" style={{ opacity: 0.2, marginBottom: '20px' }} />
                
                <p style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)', lineHeight: 1.7, color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '40px', flex: 1 }}>
                  "{testimonials[current].text}"
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--accent-primary)' }}>
                      {testimonials[current].name.charAt(0)}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '4px' }}>{testimonials[current].name}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>{testimonials[current].role}</p>
                    </div>
                  </div>
                  <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-light)', padding: '8px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-secondary)' }}>
                    ✓ {testimonials[current].result}
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
